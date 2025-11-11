/*:
 * @target MZ
 * @plugindesc Ante HUD v6.3 — global last-N Sub Skill Types (actors only). One-line panel, dynamic (%-based) layout, big badge (behind panel), fixed-length queue, turn hooks, mid-turn <Ante:+1|=N>, direct APIs.
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
 *   <Sub_Skill_Type: Heal>
 *   <Ante:+1> / <Ante:-2> / <Ante:=5>    // handled at mid-turn (on selection confirm)
 *
 * GLOBAL queue (actors only). Push at endAction only (no double count).
 * Queue is ALWAYS length N. Fill left→right; after the last cell is filled,
 * the next push resets all to "None" and starts again.
 *
 * Public hooks:
 *   Ante.onActorTurnStart(actor)
 *   Ante.onActorMidTurn(actor, item)   // handles <Ante:...> by default
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
    const PANEL_WIDTH_PCT = 0.50; // panel width = 50% of screen width
    const PANEL_LINES = 1;    // height in "lines"
    const PANEL_X_ANCHOR = 0.0;  // 0=left, 0.5=center, 1=right
    const PANEL_X_MARGIN_PCT = 0.02; // margin from X anchor (% of screen width)
    const PANEL_Y_ANCHOR = 1.0;  // 0=top, 1=bottom
    const PANEL_Y_MARGIN_PCT = 0.03; // margin from Y anchor (% of screen height)

    // Badge (circle)
    const BADGE_SIZE_VMIN_PCT = 0.07; // radius = 7% of min(screenW,screenH)
    const BADGE_REL_X = 1.02; // relative to panel width; 1.0 = panel right edge
    const BADGE_REL_Y = 1.00; // 0=panel top, 1=panel bottom
    const BADGE_CLAMP_ONSCREEN = true; // clamp while testing; set false to allow clipping

    // ---- helpers ----
    function _anchorPos(len, box, anchor, marginPx) {
        if (anchor <= 0.25) return Math.round(marginPx);                    // left/top
        if (anchor >= 0.75) return Math.round(box - len - marginPx);        // right/bottom
        return Math.round((box - len) / 2 + marginPx);                      // center
    }
    function _panelRect(scene) {
        const boxW = Graphics.boxWidth, boxH = Graphics.boxHeight;
        const w = Math.max(120, Math.floor(boxW * PANEL_WIDTH_PCT));
        const h = scene.calcWindowHeight(PANEL_LINES, false);
        const mx = boxW * PANEL_X_MARGIN_PCT;
        const my = boxH * PANEL_Y_MARGIN_PCT;
        const x = _anchorPos(w, boxW, PANEL_X_ANCHOR, mx);
        const y = _anchorPos(h, boxH, PANEL_Y_ANCHOR, my);
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

    Ante._ante = 0; // counter exposed for damage, etc.
    Ante._badgeNumber = 0;
    Ante._badgeManual = false;

    Ante._constructing = false;

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

    function readSubtype(skillOrItem) {
        const t = skillOrItem?.meta?.Sub_Skill_Type;
        if (t && typeof t === "string" && t.length) return t;
        if ($dataSystem && skillOrItem) {
            if (skillOrItem.id === $dataSystem.attackSkillId) return "Attack";
            if (skillOrItem.id === $dataSystem.guardSkillId) return "Hold";
        }
        return "None";
    }

    function parseAnteTag(item) {
        const raw = item?.meta?.Ante;
        if (raw == null) return null;
        const s = String(raw).trim();
        if (/^= *-?\d+$/i.test(s)) return { op: "set", val: Number(s.replace("=", "")) };
        if (/^[+\-]\d+$/i.test(s)) return { op: "add", val: Number(s) };
        return null;
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
    Ante.getAnte = () => Ante._ante;
    Ante.setAnte = (n) => { Ante._ante = Number(n) || 0; _requestHudRefresh(); };
    Ante.addAnte = (n) => { Ante._ante = (Ante._ante + Number(n || 0)) | 0; _requestHudRefresh(); };
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
        const t = parseAnteTag(item);
        if (t) {
            if (t.op === "set") Ante.setAnte(t.val);
            if (t.op === "add") Ante.addAnte(t.val);
        }
    };
    Ante.onActorTurnEnd = (actor) => { /* custom end-of-turn logic here */ };

    // =========================
    // Window (1 line, centered) + Badge (behind, dynamic)
    // =========================
    class Window_Ante extends Window_Base {
        initialize(rect) {
            super.initialize(rect);
            this._lastKey = "";
            this.refreshWith(Ante.globalHistory(), Ante._badgeNumber);
        }
        refreshWith(list, badge) {
            const safe = (list && list.length) ? list : Array(Ante._maxQueueSize).fill("None");
            const text = safe.join(" | ");
            this.contents.clear();

            // For a single line panel, draw centered vertically/horizontally
            const lh = this.lineHeight();
            const y = Math.max(0, Math.floor((this.contentsHeight() - lh) / 2)); // <-- () added
            this.changeTextColor(ColorManager.normalColor());
            this.drawText(text, 0, y, this.contentsWidth(), "center");
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
            b.drawCircle(cx, cy, r, ColorManager.systemColor());      // outer ring
            b.drawCircle(cx, cy, r - 3, ColorManager.gaugeBackColor());   // inner fill
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
        }
        create() {
            // 1) Panel (dynamic rect)
            const rect = _panelRect(this._scene);
            this._win = new Window_Ante(rect);
            this._scene.addWindow(this._win);

            // 2) Badge (behind panel)
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
            if (this._win) this._win.refreshWith(Ante.globalHistory(), Ante._badgeNumber);
            if (this._badge) this._badge.setValue(Ante._badgeNumber);
            this._positionBadge();
        }
        update() {
            const hist = Ante.globalHistory();
            const badge = Ante._badgeNumber;
            const key = `R:${hist.join("||")}`;
            if (key !== this._cacheKey || badge !== this._cacheBadge) {
                this._cacheKey = key;
                this._cacheBadge = badge;
                if (this._win) this._win.refreshWith(hist, badge);
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
                _requestHudRefresh();
            }
            _startActorCommandSelection.call(this);
        };

        // Mid-turn (after selection)
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

        // End-of-actor-turn
        const _endAction = BattleManager.endAction;
        BattleManager.endAction = function () {
            try {
                const subject = this._subject;
                const action = this._action;
                if (subject && subject.isActor && subject.isActor() && action) {
                    const item = action.item && action.item();
                    if (item && (DataManager.isSkill(item) || DataManager.isItem(item))) {
                        _pushFixed(readSubtype(item));
                        Ante._badgeManual = false;
                        Ante._updateBadgeAuto();
                        _requestHudRefresh();
                        try { Ante.onActorTurnEnd(subject); } catch (e) { console.warn("Ante turnEnd hook failed:", e); }
                    }
                }
            } catch (e) { console.warn("Ante endAction push failed:", e); }
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
