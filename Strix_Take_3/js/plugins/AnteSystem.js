/*:
 * @target MZ
 * @plugindesc Ante HUD v7.0 — global last-N Sub Skill Types (actors only). One-line panel, dynamic (%-based) layout, big badge, fixed-length queue, turn hooks, Ante game w/ targets, combo wild+bonus, max ante 10.
 *
 * @param MaxQueueSize
 * @type number
 * @min 1
 * @default 4
 *
 * @param BadgeShowsNonNoneCount
 * @type boolean
 * @on Non-"None" count
 * @off Queue length
 * @default true
 *
 * @help
 * Tags on skills/items:
 *   <Sub_Skill_Type: Heal>   // base subtype
 *   <Sub_Skill_Type: Attack|Heal|Utility|Status|Combo|Hold|...>
 *
 * Combo handling (wild + bonus on subtype match):
 *   Use either:
 *     <Sub_Skill_Type: Combo>
 *     <Combo_Subtype: Heal>   // gives +1 extra IF current target is Heal
 *   or the compact “.c” form:
 *     <Sub_Skill_Type: Heal.c>   // counts as Combo; “Heal” is the combo-subtype
 *   Aliases for Combo_Subtype: ComboAs, Combo_as
 *
 * Ante “target” game (actors only):
 *   - The system picks a target from: Attack, Heal, Utility, Status (Combo excluded)
 *   - If the player USES that type this turn: Ante +1 (cap 10), then it picks a
 *     different type not yet used this round. After 4 correct uses, the round resets.
 *   - “Combo” counts as the correct type (wild). If Combo has a matching subtype
 *     for the current target, Ante +1 again (extra).
 *   - If a WRONG type is used: Ante − 2 * (correctCountThisRound), then the round
 *     progress resets and a new target is chosen.
 *
 * GLOBAL queue (actors only). Push at endAction only (no double count).
 * Queue is ALWAYS length N. Fill left→right; after the last cell is filled,
 * the next push resets all to "None" and starts again.
 *
 * Public hooks:
 *   Ante.onActorTurnStart(actor)
 *   Ante.onActorMidTurn(actor, item)   // handles <Ante:+1|=N> by default
 *   Ante.onActorTurnEnd(actor)
 *
 * Construction helpers:
 *   Ante.beginConstruct({ maxSize, seed:["Attack","Heal"] });
 *   Ante.constructPush("Status");
 *   Ante.endConstruct();
 *
 * Ante counter API:
 *   Ante.getAnte(); Ante.setAnte(n); Ante.addAnte(n); Ante.resetAnte();
 *
 * Queue API:
 *   Ante.queue() -> copy
 *   Ante.queuePush(v); Ante.queueClear(); Ante.queueSet(i,v);
 *   Ante.queueReplace(arr); Ante.queueRotate(k);
 *
 * Misc:
 *   Ante.setMaxSize(n);  Ante.setBadge(n); Ante.globalHistory()
 */
(() => {
    const PLUGIN_NAME = "AnteHUD";
    const params = PluginManager.parameters(PLUGIN_NAME) || {};
    const paramMax = Math.max(1, Number(params.MaxQueueSize || 4));
    const badgeIsNonNone = String(params.BadgeShowsNonNoneCount || "true") === "true";

    // ===== DYNAMIC LAYOUT KNOBS (resolution-independent) =====
    // Panel (window)
    const PANEL_WIDTH_PCT = 0.50;
    const PANEL_LINES = 1;
    const PANEL_X_ANCHOR = 0.0;
    const PANEL_X_MARGIN_PCT = 0.00;
    const PANEL_Y_ANCHOR = 1.0;
    const PANEL_Y_MARGIN_PCT = 0.00;
    const PANEL_X_PADDING = 0.015;
    const PANEL_Y_PADDING = 0.015;

    // Badge (circle)
    const BADGE_SIZE_VMIN_PCT = 0.060;
    const BADGE_REL_X = 1.05;
    const BADGE_REL_Y = 0.70;
    const BADGE_CLAMP_ONSCREEN = false;

    // ---- helpers ----
    function _anchorPos(len, box, anchor, marginPx) {
        if (anchor <= 0.25) return Math.round(marginPx);
        if (anchor >= 0.75) return Math.round(box - len - marginPx);
        return Math.round((box - len) / 2 + marginPx);
    }
    function _panelRect(scene) {
        const boxW = Graphics.boxWidth, boxH = Graphics.boxHeight;
        const w = Math.max(120, Math.floor(boxW * PANEL_WIDTH_PCT));
        const h = scene.calcWindowHeight(PANEL_LINES, false);
        const mx = boxW * PANEL_X_MARGIN_PCT;
        const my = boxH * PANEL_Y_MARGIN_PCT;
        let x = _anchorPos(w, boxW, PANEL_X_ANCHOR, mx);
        let y = _anchorPos(h, boxH, PANEL_Y_ANCHOR, my);
        x = Math.round(x - (PANEL_X_PADDING * boxW));
        y = Math.round(y + (PANEL_Y_PADDING * boxH));
        return new Rectangle(x, y, w, h);
    }
    function _badgeRadius() {
        const vmin = Math.min(Graphics.boxWidth, Graphics.boxHeight);
        return Math.max(16, Math.floor(vmin * BADGE_SIZE_VMIN_PCT));
    }
    function _badgePose(win, r) {
        let bx = win.x + win.width * BADGE_REL_X;
        let by = win.y + win.height * BADGE_REL_Y;
        if (BADGE_CLAMP_ONSCREEN) {
            const pad = r + 4;
            bx = Math.max(pad, Math.min(Graphics.boxWidth - pad, bx));
            by = Math.max(pad, Math.min(Graphics.boxHeight - pad, by));
        }
        return { x: Math.round(bx), y: Math.round(by) };
    }

    // =========================
    // Namespace + State
    // =========================
    window.Ante = window.Ante || {};

    Ante._maxQueueSize = paramMax;
    Ante._globalQueue = Array(Ante._maxQueueSize).fill("None");
    Ante._writeIdx = 0;
    Ante._filledOnce = false;

    Ante._ante = 0; // exposed counter
    Ante._badgeNumber = 0;
    Ante._badgeManual = false;

    Ante._constructing = false;

    // ====== New: Target Game State ======
    const CORE_TYPES = ["Attack","Heal","Utility","Status"]; // non-Combo pool
    Ante._targetType = null;          // string
    Ante._roundUsed = new Set();      // which of the 4 have been correctly hit this round

    // =========================
    // Utilities
    // =========================
    function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }

    function _resetToNone() {
        Ante._globalQueue = Array(Ante._maxQueueSize).fill("None");
        Ante._writeIdx = 0;
        Ante._filledOnce = false;
    }

    function _countNonNone() {
        let c = 0;
        for (const v of Ante._globalQueue) if (v !== "None") c++;
        return c;
    }

    Ante._updateBadgeAuto = () => {
        if (Ante._badgeManual) return;
        Ante._badgeNumber = badgeIsNonNone ? _countNonNone() : Ante._maxQueueSize;
    };

    function _requestHudRefresh() {
        const scene = SceneManager._scene;
        if (scene && scene._Ante && scene._Ante.forceRefresh) scene._Ante.forceRefresh();
    }

    const curActor = () => (BattleManager.actor ? BattleManager.actor() : null);

    // Parse Sub_Skill_Type + special handling for Combo and ".c"
    function readSubtype(skillOrItem) {
        const t = skillOrItem?.meta?.Sub_Skill_Type;
        if (t && typeof t === "string" && t.length) return t.trim();
        if ($dataSystem && skillOrItem) {
            if (skillOrItem.id === $dataSystem.attackSkillId) return "Attack";
            if (skillOrItem.id === $dataSystem.guardSkillId) return "Hold";
        }
        return "None";
    }

    function isComboType(subType) {
        if (!subType) return false;
        if (String(subType).toLowerCase() === "combo") return true;
        return /\.c$/i.test(String(subType));
    }

    // If Sub_Skill_Type is like "Heal.c", returns "Heal"
    function stripComboSuffix(subType) {
        const m = /^(.+?)\.c$/i.exec(String(subType || ""));
        return m ? m[1] : null;
    }

    function comboDeclaredSubtype(item) {
        const meta = item?.meta || {};
        const direct =
            meta.Combo_Subtype || meta.ComboAs || meta.Combo_as ||
            stripComboSuffix(item?.meta?.Sub_Skill_Type);
        if (!direct) return null;
        return String(direct).trim();
    }

    function parseAnteTag(item) {
        const raw = item?.meta?.Ante;
        if (raw == null) return null;
        const s = String(raw).trim();
        if (/^= *-?\d+$/i.test(s)) return { op: "set", val: Number(s.replace("=", "")) };
        if (/^[+\-]\d+$/i.test(s)) return { op: "add", val: Number(s) };
        return null;
    }

    // ===== Target selection =====
    function ensureTarget() {
        if (Ante._targetType && CORE_TYPES.includes(Ante._targetType)) return;
        Ante._targetType = _pickRandom(CORE_TYPES);
    }
    function _pickRandom(arr) {
        if (!arr.length) return null;
        const i = Math.floor(Math.random() * arr.length);
        return arr[i];
    }
    function pickNextTargetDifferent() {
        const remaining = CORE_TYPES.filter(t => !Ante._roundUsed.has(t));
        if (remaining.length === 0) {
            // Completed a round; reset and start a fresh pick
            Ante._roundUsed.clear();
            Ante._targetType = _pickRandom(CORE_TYPES);
        } else {
            // Pick any remaining (different by definition)
            Ante._targetType = _pickRandom(remaining);
        }
    }
    function resetRoundProgressAndPickNew() {
        Ante._roundUsed.clear();
        Ante._targetType = _pickRandom(CORE_TYPES);
    }

    // =========================
    // Fixed-length push with reset-after-full
    // =========================
    function _pushFixed(subtype) {
        const val = String(subtype || "None");
        if (Ante._filledOnce && Ante._writeIdx === 0) _resetToNone();
        Ante._globalQueue[Ante._writeIdx] = val;
        Ante._writeIdx = (Ante._writeIdx + 1) % Ante._maxQueueSize;
        if (Ante._writeIdx === 0) Ante._filledOnce = true;
    }

    // =========================
    // Public API — Ante counter
    // =========================
    const ANTE_MAX = 10;
    Ante.getAnte = () => Ante._ante;
    Ante.setAnte = (n) => { Ante._ante = clamp(Number(n) || 0, 0, ANTE_MAX); _requestHudRefresh(); };
    Ante.addAnte = (n) => {
        const v = (Ante._ante + Number(n || 0)) | 0;
        Ante._ante = clamp(v, 0, ANTE_MAX);
        _requestHudRefresh();
    };
    Ante.resetAnte = () => { Ante._ante = 0; _requestHudRefresh(); };

    // =========================
    // Public API — Queue
    // =========================
    Ante.globalHistory = () => Ante._globalQueue.slice();
    Ante.queue = () => Ante._globalQueue.slice();
    Ante.queuePush = (v) => { _pushFixed(v); Ante._badgeManual = false; Ante._updateBadgeAuto(); _requestHudRefresh(); };
    Ante.queueClear = () => { _resetToNone(); Ante._badgeManual = false; Ante._updateBadgeAuto(); _requestHudRefresh(); };
    Ante.queueSet = (i, v) => {
        const idx = clamp((i | 0), 0, Ante._maxQueueSize - 1);
        Ante._globalQueue[idx] = String(v ?? "None");
        _requestHudRefresh();
    };
    Ante.queueReplace = (arr) => {
        const out = Array(Ante._maxQueueSize).fill("None");
        for (let i = 0; i < Ante._maxQueueSize && i < arr.length; i++) out[i] = String(arr[i] ?? "None");
        Ante._globalQueue = out;
        Ante._writeIdx = 0;
        Ante._filledOnce = false;
        Ante._badgeManual = false;
        Ante._updateBadgeAuto();
        _requestHudRefresh();
    };
    Ante.queueRotate = (k) => {
        const n = Ante._maxQueueSize;
        if (!n) return;
        let r = ((k | 0) % n + n) % n;
        if (r === 0) return;
        Ante._globalQueue = Ante._globalQueue.slice(-r).concat(Ante._globalQueue.slice(0, -r));
        _requestHudRefresh();
    };

    // =========================
    // Public API — Misc & Construction
    // =========================
    Ante.setBadge = (n) => { Ante._badgeNumber = Number(n) || 0; Ante._badgeManual = true; _requestHudRefresh(); };
    Ante.setMaxSize = (n) => {
        const m = Math.max(1, Number(n) || 1);
        Ante._maxQueueSize = m;
        _resetToNone();
        Ante._badgeManual = false;
        Ante._updateBadgeAuto();
        _requestHudRefresh();
    };

    Ante.beginConstruct = (opts = {}) => {
        Ante._constructing = true;
        if (opts.maxSize != null) Ante.setMaxSize(opts.maxSize);
        else { _resetToNone(); Ante._badgeManual = false; Ante._updateBadgeAuto(); }
        if (Array.isArray(opts.seed)) for (const s of opts.seed) _pushFixed(s);
        _requestHudRefresh();
    };
    Ante.constructPush = (subtype) => { if (!Ante._constructing) return; _pushFixed(subtype); Ante._updateBadgeAuto(); _requestHudRefresh(); };
    Ante.endConstruct = () => { Ante._constructing = false; Ante._updateBadgeAuto(); _requestHudRefresh(); };

    // =========================
    // Turn Hooks (public)
    // =========================
    Ante.onActorTurnStart = (actor) => { /* custom start-of-turn logic here */ };
    Ante.onActorMidTurn = (actor, item) => {
        // Supports <Ante:+1>, <Ante:-2>, <Ante:=5>, independent of the target game
        const t = parseAnteTag(item);
        if (t) {
            if (t.op === "set") Ante.setAnte(t.val);
            if (t.op === "add") Ante.addAnte(t.val);
        }
    };
    Ante.onActorTurnEnd = (actor) => { /* custom end-of-turn logic here */ };

    // =========================
    // Window (1 line, centered) + Badge (behind, dynamic) + Target banner
    // =========================
    class Window_Ante extends Window_Base {
        initialize(rect) {
            super.initialize(rect);
            this._lastKey = "";
            this.refreshWith(Ante.globalHistory(), Ante._badgeNumber, Ante._targetType);
        }
        refreshWith(list, badge, target) {
            const safe = (list && list.length) ? list : Array(Ante._maxQueueSize).fill("None");
            const text = safe.join(" | ");
            this.contents.clear();

            // one line panel text
            const lh = this.lineHeight();
            const y = Math.max(0, Math.floor((this.contentsHeight() - lh) / 2));
            this.changeTextColor(ColorManager.normalColor());
            this.drawText(text, 0, y, Math.floor(this.contentsWidth() * 0.6), "left");

            // target banner (highlight)
            const targetStr = `Target: ${target || "—"}`;
            this.changeTextColor(ColorManager.systemColor());
            this.drawText(targetStr, Math.floor(this.contentsWidth() * 0.60), y, Math.floor(this.contentsWidth() * 0.40), "right");
            this.resetTextColor();
        }
    }

    class Sprite_AnteBadge extends Sprite {
        constructor() {
            super(new Bitmap(110, 110));
            this._val = NaN;
            this._r = 44;
            this.anchor.set(0.5, 0.5);
        }
        setValue(v) { if (this._val !== v) { this._val = v; this._redraw(); } }
        setRadius(r) {
            this._r = Math.max(8, r | 0);
            this.bitmap = new Bitmap(this._r * 2 + 22, this._r * 2 + 22);
            this.anchor.set(0.5, 0.5);
            if (typeof this._val === "number") this._redraw();
        }
        _redraw() {
            const b = this.bitmap, r = this._r;
            b.clear();
            const cx = r + 11, cy = r + 11;
            if (b.drawCircle) {
                b.drawCircle(cx, cy, r, ColorManager.systemColor());
                b.drawCircle(cx, cy, r - 3, ColorManager.gaugeBackColor());
            } else {
                b.fillRect(cx - r, cy - r, r * 2, r * 2, ColorManager.gaugeBackColor());
            }
            b.textColor = ColorManager.normalColor();
            b.fontSize = Math.max(18, Math.floor(r * 0.58));
            b.fontBold = true;
            b.drawText(String(this._val ?? 0), 0, cy - Math.floor(b.fontSize / 2), (r * 2) + 22, b.fontSize, "center");
        }
    }

    // =========================
    // Manager (owned by Scene_Battle)
    // =========================
    class AnteManager {
        constructor(scene, opts = {}) {
            this._scene = scene;
            this._opts = Object.assign({ width: 420, lines: 1, pad: 16 }, opts);
            this._win = null;
            this._badge = null;
            this._cacheKey = "";
            this._cacheBadge = -1;
            this._cacheTarget = "";
        }
        create() {
            // initial target ready
            ensureTarget();

            // 1) Panel
            const rect = _panelRect(this._scene);
            this._win = new Window_Ante(rect);
            this._scene.addWindow(this._win);

            // 2) Badge
            this._badge = new Sprite_AnteBadge();
            this._badge.setRadius(_badgeRadius());
            if (this._scene._spriteset) this._scene._spriteset.addChild(this._badge);
            else this._scene.addChildAt(this._badge, 0);

            this._positionBadge();
            this._badge.setValue(Ante._badgeNumber);
        }
        _positionBadge() {
            if (!this._win || !this._badge) return;
            const pose = _badgePose(this._win, this._badge._r);
            this._badge.x = pose.x;
            this._badge.y = pose.y;
        }
        forceRefresh() {
            this._cacheKey = "";
            this._cacheBadge = -1;
            this._cacheTarget = "";
            if (this._win) this._win.refreshWith(Ante.globalHistory(), Ante._badgeNumber, Ante._targetType);
            if (this._badge) this._badge.setValue(Ante._badgeNumber);
            this._positionBadge();
        }
        update() {
            const hist = Ante.globalHistory();
            const badge = Ante._badgeNumber;
            const target = Ante._targetType || "";
            const key = `R:${hist.join("||")}`;
            if (key !== this._cacheKey || badge !== this._cacheBadge || target !== this._cacheTarget) {
                this._cacheKey = key;
                this._cacheBadge = badge;
                this._cacheTarget = target;
                if (this._win) this._win.refreshWith(hist, badge, target);
                if (this._badge) this._badge.setValue(badge);
                this._positionBadge();
            }
        }
        destroy() {
            if (this._badge) {
                if (this._scene._spriteset) this._scene._spriteset.removeChild(this._badge);
                this._badge.bitmap?.clear();
            }
            this._badge = null;
            this._win = null;
            this._scene = null;
        }
    }

    // =========================
    // Scene_Battle hooks (order-safe)
    // =========================
    {
        const _createAllWindows = Scene_Battle.prototype.createAllWindows;
        Scene_Battle.prototype.createAllWindows = function () {
            _createAllWindows.call(this);
            this._Ante = new AnteManager(this);
            this._Ante.create();
        };

        const _start = Scene_Battle.prototype.start;
        Scene_Battle.prototype.start = function () {
            _start.call(this);
            if (Ante._constructing) Ante.endConstruct();
            Ante._updateBadgeAuto();
            ensureTarget();
            _requestHudRefresh();
        };

        const _update = Scene_Battle.prototype.update;
        Scene_Battle.prototype.update = function () {
            _update.call(this);
            if (this._Ante) this._Ante.update();
        };

        const _terminate = Scene_Battle.prototype.terminate;
        Scene_Battle.prototype.terminate = function () {
            if (this._Ante) this._Ante.destroy();
            this._Ante = null;
            _terminate.call(this);
        };
    }

    // =========================
    // Turn lifecycle integration
    // =========================
    {
        // Start-of-actor-turn
        const _startActorCommandSelection = Scene_Battle.prototype.startActorCommandSelection;
        Scene_Battle.prototype.startActorCommandSelection = function () {
            const a = BattleManager.actor && BattleManager.actor();
            if (a && a.isActor && a.isActor()) {
                try { Ante.onActorTurnStart(a); } catch (e) { console.warn("Ante turnStart hook failed:", e); }
                ensureTarget();
                _requestHudRefresh();
            }
            _startActorCommandSelection.call(this);
        };

        // Mid-turn (after selection) — leave Ante tag handling
        const mid = (actor, item) => {
            try { Ante.onActorMidTurn(actor, item); } catch (e) { console.warn("Ante midTurn hook failed:", e); }
            _requestHudRefresh();
        };

        const _cmdAttack = Scene_Battle.prototype.commandAttack;
        Scene_Battle.prototype.commandAttack = function () {
            const a = BattleManager.actor && BattleManager.actor();
            const atk = $dataSkills?.[$dataSystem?.attackSkillId || 0];
            mid(a, atk);
            _cmdAttack.call(this);
        };

        const _cmdGuard = Scene_Battle.prototype.commandGuard;
        Scene_Battle.prototype.commandGuard = function () {
            const a = BattleManager.actor && BattleManager.actor();
            const grd = $dataSkills?.[$dataSystem?.guardSkillId || 0];
            mid(a, grd);
            _cmdGuard.call(this);
        };

        const _onSkillOk = Scene_Battle.prototype.onSkillOk;
        Scene_Battle.prototype.onSkillOk = function () {
            const a = BattleManager.actor && BattleManager.actor();
            const skill = this._skillWindow?.item?.call(this._skillWindow);
            mid(a, skill);
            _onSkillOk.call(this);
        };

        const _onItemOk = Scene_Battle.prototype.onItemOk;
        Scene_Battle.prototype.onItemOk = function () {
            const a = BattleManager.actor && BattleManager.actor();
            const item = this._itemWindow?.item?.call(this._itemWindow);
            mid(a, item);
            _onItemOk.call(this);
        };

        // End-of-actor-turn: evaluate actual use, push queue, update Ante/targets
        const _endAction = BattleManager.endAction;
        BattleManager.endAction = function () {
            try {
                const subject = this._subject;
                const action = this._action;
                if (subject && subject.isActor && subject.isActor() && action) {
                    const item = action.item && action.item();
                    if (item && (DataManager.isSkill(item) || DataManager.isItem(item))) {
                        const sub = readSubtype(item);
                        // Queue push (always tracks actual used)
                        _pushFixed(sub);
                        Ante._badgeManual = false;
                        Ante._updateBadgeAuto();

                        // ===== Target game evaluation =====
                        ensureTarget();
                        const target = Ante._targetType;
                        let correct = false;
                        let extraComboHit = false;

                        // Determine correctness
                        if (isComboType(sub)) {
                            correct = true; // wild
                            // bonus if combo-subtype matches current target
                            const comboSub = comboDeclaredSubtype(item);
                            if (comboSub && String(comboSub).toLowerCase() === String(target).toLowerCase()) {
                                extraComboHit = true;
                            }
                        } else {
                            // Normal match only counts if it’s one of the 4 and equals target
                            if (CORE_TYPES.includes(sub) && String(sub).toLowerCase() === String(target).toLowerCase()) {
                                correct = true;
                            }
                        }

                        if (correct) {
                            // +1 for correct
                            Ante.addAnte(1);
                            if (extraComboHit) Ante.addAnte(1); // additional +1
                            // Track round progress
                            if (CORE_TYPES.includes(target)) Ante._roundUsed.add(target);

                            // If all 4 done, reset the round progress
                            if (Ante._roundUsed.size >= 4) {
                                Ante._roundUsed.clear();
                            }

                            // Pick next target not yet used this round
                            pickNextTargetDifferent();
                        } else {
                            // Penalty = -2 * correctCountThisRound
                            const count = Ante._roundUsed.size;
                            if (count > 0) Ante.addAnte(-2 * count);
                            // Reset round progress and pick a fresh target
                            resetRoundProgressAndPickNew();
                        }

                        // User hook
                        try { Ante.onActorTurnEnd(subject); } catch (e) { console.warn("Ante turnEnd hook failed:", e); }

                        _requestHudRefresh();
                    }
                }
            } catch (e) { console.warn("Ante endAction push/eval failed:", e); }
            _endAction.call(this);
        };
    }

    // =========================
    // Optional plugin commands (no editor UI annotations)
    // =========================
    if (PluginManager.registerCommand) {
        PluginManager.registerCommand(PLUGIN_NAME, "AnteBeginConstruct", args => {
            const maxSize = args?.maxSize != null ? Number(args.maxSize) : null;
            Ante.beginConstruct({ maxSize });
        });
        PluginManager.registerCommand(PLUGIN_NAME, "AnteConstructPush", args => {
            const val = String(args?.value || "None");
            Ante.constructPush(val);
        });
        PluginManager.registerCommand(PLUGIN_NAME, "AnteEndConstruct", () => {
            Ante.endConstruct();
        });
        PluginManager.registerCommand(PLUGIN_NAME, "AnteSetMaxSize", args => {
            const v = Number(args?.value || 4);
            Ante.setMaxSize(v);
        });
        PluginManager.registerCommand(PLUGIN_NAME, "AnteSetBadge", args => {
            const v = Number(args?.value || 0);
            Ante.setBadge(v);
            _requestHudRefresh();
        });
    }
})();
