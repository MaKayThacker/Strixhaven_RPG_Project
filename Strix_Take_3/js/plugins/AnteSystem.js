/*:
 * @target MZ
 * @plugindesc Ante HUD v7.7 — lane with combo & hold rules, fixed-length queue, badge shows ANTE; Attack.c combo bonus now applied at endAction (correct timing) and queue logs "Attack".
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
 * Key changes in 7.7
 * - Attack.c bonus (+2) now applies in BattleManager.endAction so the popup shows the full increase.
 * - When Attack.c triggers (and "Attack" is up), the queue records "Attack" (not "Attack.c").
 * - "Hold" subtype freezes lane & Ante (no advance/change).
 *
 * See header comments in prior builds for full docs.
 */

/*
# === Ante Tag Reference ===
# < Sub_Skill_Type: Attack | Heal | Buff | Debuff | Status > -> Skill’s subtype for Ante queue
# < Ante: +N > or < Ante: =N > -> Modify or set Ante at end of action (after damage)
# < ForceNextAnteSkill: Type > -> Force next lane slot to Type
# < BlacklistAnteType: TypeA, TypeB > -> Block these types for the rest of the round
# < QueueBlacklistAdd: TypeA, TypeB > -> Add to global queue blacklist
# < QueueBlacklistRemove: TypeA, TypeB > -> Remove from queue blacklist
# < QueueBlacklistClear: true > -> Clear entire queue blacklist
# < ExtraAnteChance: 0.1 > -> +10 % status chance per Ante level
# < ExtraAnteTurns: 0.5 > -> Extra state turns per Ante level
# < ExtraAnteEffectLv: N > -> Unlock “extra” effects at Ante ≥ N
# < ExtraAnteCostRate: 0.8 > -> Reduce MP / TP cost when unlocked
# < ExtraAnteBonusDamageRate: 0.2 > -> +20 % damage bonus when unlocked
# < ExtraAnteBonusDamageFlat: 50 > -> +50 flat damage when unlocked
# < ExtraAnteExtraState: ID, Turns > -> Add extra state at high Ante
# < ExtraAnteExtraDebuff: Param, Turns > -> Apply extra debuff at high Ante
# < ExtraAnteCommonEvent: ID > -> Run common event at high Ante
# =============================================
*/

(() => {
    //==========================================================================
    // Plugin parameters & layout constants (do not change names/values here)
    //==========================================================================
    const PLUGIN_NAME = "AnteSystem";

    // More robust parameter lookup so MaxQueueSize works even if the
    // plugin's filename/internal name isn't exactly "AnteSystem".
    function getAnteParams() {
        // First try the declared plugin name.
        let p = PluginManager.parameters(PLUGIN_NAME);

        // If that failed (empty object), scan all plugins for one that
        // actually defines a MaxQueueSize parameter.
        if (!p || Object.keys(p).length === 0) {
            const all = PluginManager._parameters || {};
            for (const key in all) {
                if (all[key] && Object.prototype.hasOwnProperty.call(all[key], "MaxQueueSize")) {
                    p = all[key];
                    break;
                }
            }
        }
        return p || {};
    }

    const params = getAnteParams();
    const paramMax = Math.max(1, Number(params.MaxQueueSize || 4));
    const badgeIsNonNone = String(params.BadgeShowsNonNoneCount || "true") === "true";

    // ----- HUD window (panel) placement as percentages of screen size -----
    const PANEL_WIDTH_PCT = 0.60;  // width relative to Graphics.boxWidth
    const PANEL_LINES = 1;         // Window_Base line count for height calc
    const PANEL_X_ANCHOR = 0.0;    // 0=left, 0.5=center, 1=right
    const PANEL_X_MARGIN_PCT = 0.00;  // margin from anchor on X axis
    const PANEL_Y_ANCHOR = 1.0;    // 0=top, 1=bottom
    const PANEL_Y_MARGIN_PCT = 0.00;  // margin from anchor on Y axis
    const PANEL_X_PADDING = 0.015; // extra negative offset (shifts left)
    const PANEL_Y_PADDING = 0.015; // extra positive offset (shifts down)

    // ----- Badge (circular number) placement & sizing -----
    const BADGE_SIZE_VMIN_PCT = 0.060; // radius based on min(boxW, boxH)
    const BADGE_REL_X = 1.05;  // relative to window x + width * relX
    const BADGE_REL_Y = 0.70;  // relative to window y + height * relY
    const BADGE_CLAMP_ONSCREEN = false; // if true, keeps the badge inside

    //==========================================================================
    // ICON INDEX CONFIG (EDIT THIS BLOCK WHEN YOUR ICONS CHANGE)
    //==========================================================================
    const ICON_ATTACK = 76;  // TODO: set to your Attack subtype icon
    const ICON_HEAL = 84;  // TODO: set to your Heal subtype icon
    const ICON_BUFF = 73;  // TODO: set to your Buff subtype icon
    const ICON_DEBUFF = 74;  // TODO: set to your Debuff subtype icon
    const ICON_STATUS = 10;  // TODO: set to your Status subtype icon

    const ICON_HOLD = 0;   // 0 = no icon (unused in lane by default)
    const ICON_COMBO = 0;   // for any generic "Combo" label if needed

    /** Map subtype label -> icon index. */
    function subtypeIconIndex(label) {
        const key = String(label || "None").toLowerCase();
        switch (key) {
            case "attack": return ICON_ATTACK;
            case "heal": return ICON_HEAL;
            case "buff": return ICON_BUFF;
            case "debuff": return ICON_DEBUFF;
            case "status": return ICON_STATUS;
            case "hold": return ICON_HOLD;
            case "combo": return ICON_COMBO;
            default: return 0; // 0 => no icon, falls back to text if needed
        }
    }

    //==========================================================================
    // Geometry helpers for HUD layout
    //==========================================================================
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

    //==========================================================================
    // Global Ante state (lifetime = game session; queue lifetime = battle/plugin)
    //==========================================================================
    window.Ante = window.Ante || {};

    // ---- Queue (fixed-size circular buffer) ----
    Ante._maxQueueSize = paramMax;
    Ante._globalQueue = Array(Ante._maxQueueSize).fill("None");
    Ante._writeIdx = 0;

    // ---- Lane size (number of slots in the HUD lane / round plan) ----
    // By default, lane size == MaxQueueSize so changing the parameter
    // to 5 will give you 5 symbols in the lane.
    Ante._laneSize = paramMax;

    function laneSize() {
        return Math.max(1, (Ante._laneSize | 0));
    }

    // ---- Ante gauge (0..10) ----
    Ante._ante = 0;
    const ANTE_MAX = 10;

    // ---- Badge control ----
    Ante._badgeNumber = 0;
    Ante._badgeManual = false;

    // ---- Construction mode for building a queue seed via plugin commands ----
    Ante._constructing = false;

    // ---- Round / lane state ----
    const CORE_TYPES = ["Attack", "Heal", "Buff", "Debuff", "Status"]; // canonical types
    Ante._roundPlan = [];   // e.g., laneSize() cells like ["Attack","Heal","..."]
    Ante._roundIndex = 0;    // current cell pointer (0..laneSize-1)
    Ante._laneDormant = false;// true when lane sleeps (e.g., after fill/wrong)

    // ---- Random pool & UI overrides ----
    Ante._nextPool = [];   // available types pool
    Ante._activeTextOverride = null; // temporary override for current cell text

    //==========================================================================
    // Small utilities
    //==========================================================================
    const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

    function _resetToNone() {
        Ante._globalQueue = Array(Ante._maxQueueSize).fill("None");
        Ante._writeIdx = 0;
    }

    function _countNonNone() {
        let c = 0; for (const v of Ante._globalQueue) if (v !== "None") c++; return c;
    }

    Ante._updateBadgeAuto = () => {
        if (!Ante._badgeManual) {
            Ante._badgeNumber = badgeIsNonNone ? _countNonNone() : Ante._maxQueueSize;
        }
    };

    function _requestHudRefresh() {
        const s = SceneManager._scene;
        if (s && s._Ante && s._Ante.forceRefresh) s._Ante.forceRefresh();
    }

    function readMetaNumber(meta, key, def = 0) {
        if (!meta) return def;
        const raw = meta[key]; if (raw == null) return def;
        const n = Number(raw); return isNaN(n) ? def : n;
    }
    function readMetaInt(meta, key, def = 0) { return Math.floor(readMetaNumber(meta, key, def)); }
    function readMetaCsvInts(meta, key) {
        if (!meta || meta[key] == null) return [];
        const s = String(meta[key]).trim(); if (!s) return [];
        return s.split(",").map(t => Number(t.trim()) | 0).filter(n => n > 0);
    }

    //==========================================================================
    // Subtype / combo parsing helpers
    //==========================================================================
    function readSubtype(item) {
        const t = item?.meta?.Sub_Skill_Type;
        if (t && typeof t === "string" && t.length) return t.trim();

        if ($dataSystem && item) {
            if (item.id === $dataSystem.attackSkillId) return "Attack";
            if (item.id === $dataSystem.guardSkillId) return "Hold";
        }
        return "None";
    }

    function isComboType(subType) {
        if (!subType) return false;
        if (String(subType).toLowerCase() === "combo") return true;
        return /\.c$/i.test(String(subType));
    }

    function stripComboSuffix(subType) {
        const m = /^(.+?)\.c$/i.exec(String(subType || ""));
        return m ? m[1] : null;
    }

    function comboDeclaredSubtype(item) {
        const meta = item?.meta || {};
        const direct = meta.Combo_Subtype || meta.ComboAs || meta.Combo_as || stripComboSuffix(item?.meta?.Sub_Skill_Type);
        return direct ? String(direct).trim() : null;
    }

    function parseAnteTag(item) {
        const raw = item?.meta?.Ante; if (raw == null) return null;
        const s = String(raw).trim();
        if (/^= *-?\d+$/i.test(s)) return { op: "set", val: Number(s.replace("=", "")) };
        if (/^[+\-]\d+$/i.test(s)) return { op: "add", val: Number(s) };
        return null;
    }

    //==========================================================================
    // Round/lane lifecycle helpers
    //==========================================================================
    function _shuffle(a) { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0;[b[i], b[j]] = [b[j], b[i]]; } return b; }
    function _resetNextPool() { Ante._nextPool = CORE_TYPES.slice(); }

    /** Start a new round (laneSize slots), seed first slot, clear per-round controls. */
    function _startNewRound() {
        const size = laneSize();
        Ante._roundPlan = new Array(size).fill("None");
        Ante._roundIndex = 0;
        Ante._laneDormant = false;
        Ante._activeTextOverride = null;

        Ante._roundBlacklist = [];
        Ante._forcedNextType = null;

        _resetNextPool();
        _ensureCurrentSlotFilled();
        _requestHudRefresh();
    }

    // First definition kept for parity with original, but overridden below.
    function _clearLaneUntilNextTurn() {
        Ante._laneDormant = true;
        Ante._roundPlan = [];
        Ante._roundIndex = 0;
        Ante._activeTextOverride = null;
        Ante._roundBlacklist = [];
        _resetNextPool();
    }

    // Active definition.
    function _clearLaneUntilNextTurn() {
        Ante._laneDormant = true;
        Ante._roundPlan = [];
        Ante._roundIndex = 0;
        Ante._activeTextOverride = null;

        Ante._roundBlacklist = [];
        Ante._forcedNextType = null;

        _resetNextPool();
    }

    function _currentTarget() {
        if (Ante._laneDormant) return null;
        const size = laneSize();
        if (!Array.isArray(Ante._roundPlan) || Ante._roundPlan.length !== size) return null;
        _ensureCurrentSlotFilled();
        return Ante._roundPlan[Ante._roundIndex] || null;
    }

    function _isTypeUp(typeName) {
        return Ante._nextPool.some(t => String(t).toLowerCase() === String(typeName).toLowerCase());
    }

    function _removeFromNextPool(typeName) {
        const i = Ante._nextPool.findIndex(t => String(t).toLowerCase() === String(typeName).toLowerCase());
        if (i >= 0) Ante._nextPool.splice(i, 1);
    }

    function _targetLaneForUi() {
        const size = laneSize();
        if (Ante._laneDormant || Ante._roundPlan.length !== size) {
            return new Array(size).fill("None");
        }
        const arr = [];
        for (let i = 0; i < size; i++) {
            let label = Ante._roundPlan[i];
            if (i === Ante._roundIndex && Ante._activeTextOverride) label = Ante._activeTextOverride;
            if (i < Ante._roundIndex) arr.push(Ante._roundPlan[i]);
            else if (i === Ante._roundIndex) arr.push(label);
            else arr.push("None");
        }
        return arr;
    }

    function ensureLaneReady() {
        if (Ante._laneDormant) return;
        const size = laneSize();
        if (!Array.isArray(Ante._roundPlan) || Ante._roundPlan.length !== size) {
            _startNewRound();
            return;
        }
        _ensureCurrentSlotFilled();
    }

    /**
     * Push a label into the global fixed-size queue (respects queue blacklist).
     */
    function _pushFixed(subtype) {
        const blk = Array.isArray(Ante._queueBlacklist) ? Ante._queueBlacklist : [];
        const LOWER = s => String(s || "").toLowerCase();
        const valRaw = String(subtype || "None");
        const suppressed = blk.some(t => LOWER(t) === LOWER(valRaw));
        const val = suppressed ? "None" : valRaw;

        Ante._globalQueue[Ante._writeIdx] = val;
        Ante._writeIdx = (Ante._writeIdx + 1) % Ante._maxQueueSize;

        Ante._badgeManual = false;
        Ante._updateBadgeAuto();
    }

    //==========================================================================
    // Public API (Ante.*)
    //==========================================================================

    // ---- Ante gauge ----
    Ante.getAnte = () => Ante._ante;

    Ante.setAnte = (n) => {
        const old = Ante._ante;
        Ante._ante = clamp(Number(n) || 0, 0, ANTE_MAX);
        const diff = Ante._ante - old;
        _requestHudRefresh();
        const sc = SceneManager._scene;
        if (sc && sc._Ante && diff !== 0) sc._Ante.spawnPopup(diff);
    };

    Ante.addAnte = (n) => {
        const old = Ante._ante;
        const d = Number(n || 0);
        Ante._ante = clamp((old + d) | 0, 0, ANTE_MAX);
        const diff = Ante._ante - old;
        _requestHudRefresh();
        const sc = SceneManager._scene;
        if (sc && sc._Ante && diff !== 0) sc._Ante.spawnPopup(diff);
    };

    Ante.resetAnte = () => { Ante.setAnte(0); };

    // ---- Dynamic damage steps ----
    Ante._dmgDealStep = 0.05;
    Ante._dmgTakenStep = 0.00;

    Ante.setDamageSteps = function (dealStep, takenStep) {
        if (dealStep != null) Ante._dmgDealStep = Math.max(0, Number(dealStep) || 0);
        if (takenStep != null) Ante._dmgTakenStep = Math.max(0, Number(takenStep) || 0);
    };

    Ante.getDamageSteps = function () {
        return { deal: Ante._dmgDealStep, taken: Ante._dmgTakenStep };
    };

    // ---- Queue accessors ----
    Ante.globalHistory = () => Ante._globalQueue.slice();
    Ante.queue = () => Ante._globalQueue.slice();

    Ante.queuePush = (v) => { _pushFixed(v); _requestHudRefresh(); };

    Ante.queueClear = () => {
        _resetToNone();
        Ante._badgeManual = false;
        Ante._updateBadgeAuto();
        _requestHudRefresh();
    };

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
        Ante._badgeManual = false;
        Ante._updateBadgeAuto();
        _requestHudRefresh();
    };

    Ante.queueRotate = (k) => {
        const n = Ante._maxQueueSize; if (!n) return;
        let r = ((k | 0) % n + n) % n;
        if (r === 0) return;
        Ante._globalQueue = Ante._globalQueue.slice(-r).concat(Ante._globalQueue.slice(0, -r));
        _requestHudRefresh();
    };

    // ---- Badge manual set ----
    Ante.setBadge = (n) => { Ante._badgeNumber = Number(n) || 0; Ante._badgeManual = true; _requestHudRefresh(); };

    // ---- Dynamic size (resets queue, badge, and lane size) ----
    Ante.setMaxSize = (n) => {
        const m = Math.max(1, Number(n) || 1);
        Ante._maxQueueSize = m;
        Ante._laneSize = m;          // keep lane size in sync with queue size
        _resetToNone();
        Ante._badgeManual = false;
        Ante._updateBadgeAuto();
        _startNewRound();            // rebuild lane with new size
        _requestHudRefresh();
    };

    // ---- Queue construction session ----
    Ante.beginConstruct = (opts = {}) => {
        Ante._constructing = true;
        if (opts.maxSize != null) Ante.setMaxSize(opts.maxSize);
        else { _resetToNone(); Ante._badgeManual = false; Ante._updateBadgeAuto(); }
        if (Array.isArray(opts.seed)) for (const s of opts.seed) _pushFixed(s);
        _requestHudRefresh();
    };
    Ante.constructPush = (subtype) => { if (!Ante._constructing) return; _pushFixed(subtype); _requestHudRefresh(); };
    Ante.endConstruct = () => { Ante._constructing = false; _requestHudRefresh(); };

    // ---- Lifecycle hooks ----
    if (typeof Ante.onActorTurnStart !== "function") Ante.onActorTurnStart = function (_a) { };
    if (typeof Ante.onActorMidTurn !== "function") Ante.onActorMidTurn = function (_a, _item) { };
    if (typeof Ante.onActorTurnEnd !== "function") Ante.onActorTurnEnd = function (_a) { };

    //==========================================================================
    // HUD classes (Window_Ante, Sprite_AnteBadge, AnteManager)
    //==========================================================================
    class Window_Ante extends Window_Base {
        initialize(rect) {
            super.initialize(rect);
            this.refreshWith();
        }

        refreshWith() {
            const lane = _targetLaneForUi();
            this.contents.clear();

            const iconW = ImageManager.iconWidth || 32;
            const iconH = ImageManager.iconHeight || 32;
            const gap = 12;

            const cols = lane.length || 1;
            const cellW = iconW + gap;
            const totalW = (cellW * cols) - gap;
            const x0 = Math.max(0, Math.floor((this.contentsWidth() - totalW) / 2));
            const iconY = Math.max(0, Math.floor((this.contentsHeight() - iconH) / 2));

            for (let i = 0; i < cols; i++) {
                const label = lane[i];
                const isCurrent =
                    (!Ante._laneDormant &&
                        Ante._roundPlan.length === laneSize() &&
                        i === Ante._roundIndex &&
                        label !== "None");

                const x = x0 + i * cellW;

                if (isCurrent) {
                    const pad = 4;

                    this.contents.paintOpacity = 128;
                    this.contents.fillRect(
                        x - pad,
                        iconY - pad,
                        iconW + pad * 2,
                        iconH + pad * 2,
                        ColorManager.systemColor()
                    );
                    this.contents.paintOpacity = 255;

                    const underlineY = iconY + iconH + 2;
                    this.contents.fillRect(
                        x,
                        underlineY,
                        iconW,
                        2,
                        ColorManager.systemColor()
                    );
                }

                const iconIndex = subtypeIconIndex(label);

                if (iconIndex > 0) {
                    this.drawIcon(iconIndex, x, iconY);
                } else {
                    const isNone = (label === "None");
                    this.changeTextColor(
                        isNone ? ColorManager.textColor(7) : ColorManager.normalColor()
                    );
                    this.drawText(label, x, iconY, iconW + gap, "center");
                }
            }

            this.resetTextColor();
        }
    }

    class Sprite_AnteBadge extends Sprite {
        constructor() { super(new Bitmap(110, 110)); this._val = NaN; this._r = 44; this.anchor.set(0.5, 0.5); }
        setValue(v) { if (this._val !== v) { this._val = v; this._redraw(); } }
        setRadius(r) {
            this._r = Math.max(8, r | 0);
            this.bitmap = new Bitmap(this._r * 2 + 22, this._r * 2 + 22);
            this.anchor.set(0.5, 0.5);
            if (typeof this._val === "number") this._redraw();
        }
        _redraw() {
            const b = this.bitmap, r = this._r; b.clear(); const cx = r + 11, cy = r + 11;
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

    class AnteManager {
        constructor(scene, opts = {}) {
            this._scene = scene;
            this._opts = Object.assign({ width: 420, lines: 1, pad: 16 }, opts);
            this._win = null;
            this._badge = null;
            this._cacheKey = "";
            this._cacheAnte = -9999;
            this._popups = [];
        }
        create() {
            const rect = _panelRect(this._scene);
            this._win = new Window_Ante(rect);
            this._scene.addWindow(this._win);

            this._badge = new Sprite_AnteBadge();
            this._badge.setRadius(_badgeRadius());

            if (this._scene._spriteset) this._scene._spriteset.addChild(this._badge);
            else this._scene.addChildAt(this._badge, 0);

            this._positionBadge();
            this._badge.setValue(Ante.getAnte());
        }
        _positionBadge() {
            if (!this._win || !this._badge) return;
            const pose = _badgePose(this._win, this._badge._r);
            this._badge.x = pose.x; this._badge.y = pose.y;
        }
        forceRefresh() {
            this._cacheKey = "";
            this._cacheAnte = -9999;
            if (this._win) this._win.refreshWith(Ante.globalHistory(), Ante._badgeNumber);
            if (this._badge) this._badge.setValue(Ante.getAnte());
            this._positionBadge();
        }
        update() {
            const laneKey = `L:${Ante._laneDormant ? "D" : "A"}:${Ante._roundPlan.join(",")}:${Ante._roundIndex}:${Ante._activeTextOverride || ""}`;
            const anteVal = Ante.getAnte();
            if (laneKey !== this._cacheKey || anteVal !== this._cacheAnte) {
                this._cacheKey = laneKey;
                this._cacheAnte = anteVal;
                if (this._win) this._win.refreshWith(Ante.globalHistory(), Ante._badgeNumber);
                if (this._badge) this._badge.setValue(anteVal);
                this._positionBadge();
            }

            if (this._popups.length) {
                for (let i = this._popups.length - 1; i >= 0; i--) {
                    const p = this._popups[i];
                    p.life--;
                    p.sprite.y += p.vy;
                    p.sprite.opacity = Math.max(0, 255 * (p.life / p.maxLife));
                    if (p.life <= 0) {
                        p.sprite.bitmap.clear();
                        if (p.sprite.parent) p.sprite.parent.removeChild(p.sprite);
                        this._popups.splice(i, 1);
                    }
                }
            }
        }
        spawnPopup(diff) {
            if (!this._badge || !this._badge.parent || diff === 0) return;
            const text = (diff > 0 ? "+" : "") + diff;
            const bmp = new Bitmap(64, 32);
            bmp.fontSize = 20; bmp.fontBold = true; bmp.textColor = diff > 0 ? "#00ff88" : "#ff4444";
            bmp.drawText(text, 0, 0, 64, 32, "center");

            const s = new Sprite(bmp);
            s.anchor.set(0.5, 1.0);
            s.x = this._badge.x; s.y = this._badge.y - this._badge._r * 0.5;
            s.opacity = 255;

            const life = 40;
            const popup = { sprite: s, life, maxLife: life, vy: -1.2 };
            this._popups.push(popup);
            this._badge.parent.addChild(s);
        }
        destroy() {
            for (const p of this._popups) {
                p.sprite.bitmap.clear();
                if (p.sprite.parent) p.sprite.parent.removeChild(p.sprite);
            }
            this._popups.length = 0;

            if (this._badge) {
                this._badge.bitmap?.clear();
                if (this._scene?._spriteset) this._scene._spriteset.removeChild(this._badge);
            }
            this._badge = null;

            this._win = null;
            this._scene = null;
        }
    }

    //==========================================================================
    // Scene_Battle wiring
    //==========================================================================
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

    //==========================================================================
    // Turn lifecycle
    //==========================================================================
    {
        const _startActorCommandSelection = Scene_Battle.prototype.startActorCommandSelection;
        Scene_Battle.prototype.startActorCommandSelection = function () {
            const a = BattleManager.actor && BattleManager.actor();
            if (a && a.isActor && a.isActor()) {
                try { Ante.onActorTurnStart(a); } catch (e) { console.warn("Ante turnStart hook failed:", e); }
                if (Ante._laneDormant || Ante._roundPlan.length !== laneSize()) _startNewRound();
                _requestHudRefresh();
            }
            _startActorCommandSelection.call(this);
        };

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

        function _queueLabelForUse(item, sub, targetType) {
            if (isComboType(sub)) {
                const decl = comboDeclaredSubtype(item);
                if (decl) return String(decl);
                const stripped = stripComboSuffix(sub);
                if (stripped) return stripped;
                if (targetType) return String(targetType);
            }
            return String(sub || "None");
        }

        function _ensureCurrentSlotFilled() {
            if (Ante._laneDormant) return;
            const i = (Ante._roundIndex | 0);
            const size = laneSize();
            if (!Array.isArray(Ante._roundPlan) || Ante._roundPlan.length !== size) return;
            if (i < 0 || i >= size) return;

            if (Ante._roundPlan[i] && Ante._roundPlan[i] !== "None") return;

            const LOWER = s => String(s || "").toLowerCase();

            const used = new Set();
            for (let j = 0; j < i; j++) {
                const v = String(Ante._roundPlan[j] || "None");
                if (v !== "None") used.add(LOWER(v));
            }
            const banned = new Set((Ante._roundBlacklist || []).map(s => LOWER(s)));
            const allowed = CORE_TYPES.filter(t => !used.has(LOWER(t)) && !banned.has(LOWER(t)));

            if (Ante._forcedNextType) {
                const forced = String(Ante._forcedNextType);
                if (CORE_TYPES.some(t => LOWER(t) === LOWER(forced)) && !used.has(LOWER(forced)) && !banned.has(LOWER(forced))) {
                    Ante._roundPlan[i] = forced;
                    Ante._forcedNextType = null;
                    return;
                }
                Ante._forcedNextType = null;
            }

            if (allowed.length > 0) {
                const idx = (Math.random() * allowed.length) | 0;
                Ante._roundPlan[i] = String(allowed[idx]);
            } else {
                Ante._roundPlan[i] = "None";
            }
        }

        function _rewriteCurrentLaneLabel(newLabel) {
            if (Ante._laneDormant) return;
            const i = (Ante._roundIndex | 0);
            const size = laneSize();
            if (Array.isArray(Ante._roundPlan) && Ante._roundPlan.length === size && i >= 0 && i < size) {
                Ante._roundPlan[i] = String(newLabel || "None");
            }
        }

        function _blacklistRoundType(typeName) {
            if (!typeName) return;
            const t = String(typeName);

            Ante._roundBlacklist = Ante._roundBlacklist || [];
            if (!Ante._roundBlacklist.some(x => String(x).toLowerCase() === t.toLowerCase())) {
                Ante._roundBlacklist.push(t);
            }

            if (!Array.isArray(Ante._roundPlan)) return;
            const size = laneSize();
            if (Ante._roundPlan.length !== size) return;
            const start = (Ante._roundIndex | 0) + 1;
            for (let i = start; i < size; i++) {
                if (String(Ante._roundPlan[i]).toLowerCase() === t.toLowerCase()) {
                    Ante._roundPlan[i] = "None";
                }
            }
            _requestHudRefresh();
        }

        const _endAction = BattleManager.endAction;
        BattleManager.endAction = function () {
            try {
                const subject = this._subject, action = this._action;
                if (subject && subject.isActor && subject.isActor() && action) {
                    const item = action.item && action.item();
                    if (item && (DataManager.isSkill(item) || DataManager.isItem(item))) {
                        let sub = readSubtype(item);

                        ensureLaneReady();
                        const targetType = _currentTarget();

                        if (String(sub).toLowerCase() === "hold") {
                            _pushFixed("Hold");
                            Ante._activeTextOverride = null;
                            try { Ante.onActorTurnEnd(subject); } catch (e) { console.warn("Ante turnEnd hook failed:", e); }
                            _requestHudRefresh();
                            return _endAction.call(this);
                        }

                        let correct = false, extraComboHit = false;
                        if (targetType) {
                            if (isComboType(sub)) {
                                correct = true;
                                const comboSub = comboDeclaredSubtype(item);
                                if (comboSub && String(comboSub).toLowerCase() === String(targetType).toLowerCase()) {
                                    extraComboHit = true;
                                }
                            } else if (
                                CORE_TYPES.includes(sub) &&
                                String(sub).toLowerCase() === String(targetType).toLowerCase()
                            ) {
                                correct = true;
                            }
                        }

                        let attackCbonusApplied = false;
                        const isAttackC = (String(item.name || "").toLowerCase() === "attack.c");
                        if (isAttackC) {
                            sub = "Attack";
                            Ante._activeTextOverride = "Attack";
                            Ante.addAnte(2);
                            attackCbonusApplied = true;

                            _rewriteCurrentLaneLabel("Attack");
                            _blacklistRoundType("Attack");
                        }

                        const labelForQueue = _queueLabelForUse(item, sub, targetType);

                        if (isComboType(sub)) {
                            _blacklistRoundType(labelForQueue);
                        }

                        if (targetType && (isComboType(sub) || String(labelForQueue).toLowerCase() !== String(targetType).toLowerCase())) {
                            _rewriteCurrentLaneLabel(labelForQueue);
                            _requestHudRefresh();
                        }

                        (function applyForceNext() {
                            const raw = item?.meta?.ForceNextAnteSkill;
                            if (!raw) return;
                            const forced = String(raw).trim();
                            if (CORE_TYPES.some(t => t.toLowerCase() === forced.toLowerCase())) {
                                Ante._forcedNextType = forced;
                            }
                        })();

                        (function applyRoundBlacklist() {
                            const raw = item?.meta?.BlacklistAnteType;
                            if (!raw) return;
                            const list = String(raw).split(",").map(s => s.trim()).filter(Boolean);
                            for (const t of list) _blacklistRoundType(t);
                        })();

                        (function applyQueueBlacklistEdits() {
                            const addRaw = item?.meta?.QueueBlacklistAdd;
                            if (addRaw) {
                                const list = String(addRaw).split(",").map(s => s.trim()).filter(Boolean);
                                if (list.length) Ante.queueBlacklistAdd(list);
                            }
                            const remRaw = item?.meta?.QueueBlacklistRemove;
                            if (remRaw) {
                                const list = String(remRaw).split(",").map(s => s.trim()).filter(Boolean);
                                if (list.length) Ante.queueBlacklistRemove(list);
                            }
                            const clr = item?.meta?.QueueBlacklistClear;
                            if (String(clr).toLowerCase() === "true") {
                                Ante.queueBlacklistClear();
                            }
                        })();

                        _pushFixed(labelForQueue);

                        const size = laneSize();

                        if (!targetType) {
                            const hitsSoFar = Ante._roundIndex || 0;
                            if (hitsSoFar > 0) Ante.addAnte(-2 * hitsSoFar);
                            _startNewRound();
                        } else {
                            let laneGain = 0;
                            if (correct && !attackCbonusApplied) laneGain += 1;
                            if (extraComboHit && !attackCbonusApplied) laneGain += 1;

                            if (laneGain > 0) {
                                Ante.addAnte(laneGain);
                                Ante._roundIndex = (Ante._roundIndex || 0) + 1;
                                if (Ante._roundIndex >= size) {
                                    _clearLaneUntilNextTurn();
                                } else {
                                    _ensureCurrentSlotFilled();
                                }
                            } else {
                                const hitsSoFar = Ante._roundIndex || 0;
                                if (hitsSoFar > 0) Ante.addAnte(-2 * hitsSoFar);
                                _startNewRound();
                            }
                            Ante._activeTextOverride = null;
                        }

                        (function applyAnteTagAtEnd() {
                            const t = parseAnteTag(item);
                            if (!t) return;
                            if (t.op === "set") Ante.setAnte(t.val);
                            if (t.op === "add") Ante.addAnte(t.val);
                        })();
                    }
                }
            } catch (e) {
                console.warn("Ante endAction failed:", e);
            }
            return _endAction.call(this);
        };

        //==========================================================================
        // Damage scaling & extra effects based on Ante level
        //==========================================================================

        if (Ante._healDealStep === undefined) Ante._healDealStep = (Ante._dmgDealStep != null ? Ante._dmgDealStep : 0.05);
        if (Ante._healTakenStep === undefined) Ante._healTakenStep = (Ante._dmgTakenStep != null ? Ante._dmgTakenStep : 0.00);

        Ante.setHealingSteps = function (dealStep, takenStep) {
            if (dealStep != null) Ante._healDealStep = Math.max(0, Number(dealStep) || 0);
            if (takenStep != null) Ante._healTakenStep = Math.max(0, Number(takenStep) || 0);
        };

        const _makeDamageValue = Game_Action.prototype.makeDamageValue;
        Game_Action.prototype.makeDamageValue = function (target, critical) {
            let value = _makeDamageValue.call(this, target, critical);

            const ante = (window.Ante && typeof Ante.getAnte === "function") ? (Ante.getAnte() | 0) : 0;
            if (ante <= 0) return value;

            const subject = this.subject();
            const isSubjectActor = !!(subject && subject.isActor && subject.isActor());
            const isTargetActor = !!(target && target.isActor && target.isActor());

            if (value > 0) {
                if (isSubjectActor && Ante._dmgDealStep > 0) {
                    const mulDeal = 1 + (Ante._dmgDealStep * ante);
                    value = Math.round(value * mulDeal);
                }
                if (isTargetActor && Ante._dmgTakenStep > 0) {
                    const mulTaken = Math.max(0, 1 - (Ante._dmgTakenStep * ante));
                    value = Math.round(value * mulTaken);
                }
            } else if (value < 0) {
                if (isSubjectActor && Ante._healDealStep > 0) {
                    const mulHealGive = 1 + (Ante._healDealStep * ante);
                    value = Math.round(value * mulHealGive);
                }
                if (isTargetActor && Ante._healTakenStep > 0) {
                    const mulHealRecv = 1 + (Ante._healTakenStep * ante);
                    value = Math.round(value * mulHealRecv);
                }
            }
            return value;
        };

        function anteChanceMultiplierForItem(item) {
            if (!item || !item.meta) return 1;
            const a = Ante.getAnte ? Ante.getAnte() : 0; if (a <= 0) return 1;
            const per = readMetaNumber(item.meta, "ExtraAnteChance", 0); if (per <= 0) return 1;
            return Math.max(0, 1 + per * a);
        }

        function anteExtraTurnsForItem(item) {
            if (!item || !item.meta) return 0;
            const a = Ante.getAnte ? Ante.getAnte() : 0; if (a <= 0) return 0;
            const per = readMetaNumber(item.meta, "ExtraAnteTurns", 0); if (per <= 0) return 0;
            return Math.max(0, Math.floor(per * a));
        }

        const _itemEffectAddAttackState = Game_Action.prototype.itemEffectAddAttackState;
        Game_Action.prototype.itemEffectAddAttackState = function (target, effect) {
            const item = this.item && this.item() || null;
            const mult = anteChanceMultiplierForItem(item);
            if (mult !== 1) { const orig = effect.value1; effect.value1 = orig * mult; _itemEffectAddAttackState.call(this, target, effect); effect.value1 = orig; }
            else { _itemEffectAddAttackState.call(this, target, effect); }
        };

        const _itemEffectAddState = Game_Action.prototype.itemEffectAddState;
        Game_Action.prototype.itemEffectAddState = function (target, effect) {
            const item = this.item && this.item() || null;
            const mult = anteChanceMultiplierForItem(item);
            if (mult !== 1) { const orig = effect.value1; effect.value1 = orig * mult; _itemEffectAddState.call(this, target, effect); effect.value1 = orig; }
            else { _itemEffectAddState.call(this, target, effect); }
        };

        const _addNewState = Game_Battler.prototype.addNewState;
        Game_Battler.prototype.addNewState = function (stateId) {
            const had = this.isStateAffected ? this.isStateAffected(stateId) : false;
            _addNewState.call(this, stateId);
            if (!had) {
                try {
                    const action = (typeof BattleManager !== "undefined") ? BattleManager._action : null;
                    if (action && action.item) {
                        const item = action.item();
                        const extra = anteExtraTurnsForItem(item);
                        if (extra > 0) {
                            this._stateTurns = this._stateTurns || {};
                            this._stateTurns[stateId] = (this._stateTurns[stateId] || 0) + extra;
                        }
                    }
                } catch (_e) { /* swallow */ }
            }
        };

        function itemAnteThreshold(item) { if (!item || !item.meta) return -1; return readMetaInt(item.meta, "ExtraAnteEffectLv", -1); }
        function anteThresholdMet(item) { const th = itemAnteThreshold(item); if (th < 0) return false; const a = Ante.getAnte ? Ante.getAnte() : 0; return a >= th; }
        function costRateIfMet(skill) { if (!skill || !skill.meta) return 1; if (!anteThresholdMet(skill)) return 1; const r = readMetaNumber(skill.meta, "ExtraAnteCostRate", 1); return (r > 0) ? r : 1; }

        const _skillMpCost = Game_BattlerBase.prototype.skillMpCost;
        Game_BattlerBase.prototype.skillMpCost = function (skill) { let c = _skillMpCost.call(this, skill); const rate = costRateIfMet(skill); if (rate !== 1) c = Math.floor(c * rate); return c; };

        const _skillTpCost = Game_BattlerBase.prototype.skillTpCost;
        Game_BattlerBase.prototype.skillTpCost = function (skill) { let c = _skillTpCost.call(this, skill); const rate = costRateIfMet(skill); if (rate !== 1) c = Math.floor(c * rate); return c; };

        function applyExtraDamageIfAny(action, target) {
            const item = action && action.item ? action.item() : null; if (!item || !item.meta) return; if (!anteThresholdMet(item)) return;
            const result = target && target.result ? target.result() : null; if (!result) return;
            const rate = readMetaNumber(item.meta, "ExtraAnteBonusDamageRate", 0);
            const flat = readMetaInt(item.meta, "ExtraAnteBonusDamageFlat", 0);
            let extra = 0;
            if (rate > 0 && result.hpDamage > 0) extra += Math.floor(result.hpDamage * rate);
            if (flat > 0) extra += flat;
            if (extra > 0) {
                target.gainHp(-extra);
                result.hpDamage = (result.hpDamage || 0) + extra;
                result.makeDamagePop && result.makeDamagePop();
            }
        }

        function applyExtraStatesIfAny(action, target) {
            const item = action && action.item ? action.item() : null; if (!item || !item.meta) return; if (!anteThresholdMet(item)) return;
            const ids = readMetaCsvInts(item.meta, "ExtraAnteExtraState");
            for (const id of ids) { if (id > 0 && target && target.addState) target.addState(id); }
        }

        function parseDebuffPair(meta, key) {
            const raw = meta[key]; if (raw == null) return null;
            const s = String(raw).trim(); if (!s) return null;
            const parts = s.split(","); if (parts.length < 2) return null;
            const param = Number(parts[0].trim()) | 0;
            const turns = Number(parts[1].trim()) | 0;
            if (param < 0 || param > 7 || turns <= 0) return null;
            return { param, turns };
        }

        function applyExtraDebuffsIfAny(action, target) {
            const item = action && action.item ? action.item() : null; if (!item || !item.meta) return; if (!anteThresholdMet(item)) return;
            const ks = ["ExtraAnteExtraDebuff", "ExtraAnteExtraDebuff2", "ExtraAnteExtraDebuff3", "ExtraAnteExtraDebuff4", "ExtraAnteExtraDebuff5"];
            for (const k of ks) {
                const pair = parseDebuffPair(item.meta, k);
                if (pair && target && target.addDebuff) target.addDebuff(pair.param, pair.turns);
            }
        }

        function runExtraCommonEventIfAny(action) {
            const item = action && action.item ? action.item() : null; if (!item || !item.meta) return; if (!anteThresholdMet(item)) return;
            const ce = readMetaInt(item.meta, "ExtraAnteCommonEvent", 0);
            if (ce > 0 && $gameTemp && $gameTemp.reserveCommonEvent) {
                $gameTemp.reserveCommonEvent(ce);
            }
        }

        const _apply = Game_Action.prototype.apply;
        Game_Action.prototype.apply = function (target) {
            _apply.call(this, target);
            try { applyExtraDamageIfAny(this, target); } catch (_e) { }
            try { applyExtraStatesIfAny(this, target); } catch (_e) { }
            try { applyExtraDebuffsIfAny(this, target); } catch (_e) { }
            try { runExtraCommonEventIfAny(this); } catch (_e) { }
        };

        if (PluginManager.registerCommand) {
            PluginManager.registerCommand(PLUGIN_NAME, "AnteBeginConstruct", args => {
                const maxSize = args?.maxSize != null ? Number(args.maxSize) : null;
                Ante.beginConstruct({ maxSize });
            });
            PluginManager.registerCommand(PLUGIN_NAME, "AnteConstructPush", args => {
                const val = String(args?.value || "None");
                Ante.constructPush(val);
            });
            PluginManager.registerCommand(PLUGIN_NAME, "AnteEndConstruct", () => { Ante.endConstruct(); });
            PluginManager.registerCommand(PLUGIN_NAME, "AnteSetMaxSize", args => {
                const v = Number(args?.value || 4);
                Ante.setMaxSize(v);
            });
            PluginManager.registerCommand(PLUGIN_NAME, "AnteSetBadge", args => {
                const v = Number(args?.value || 0);
                Ante.setBadge(v); _requestHudRefresh();
            });
            PluginManager.registerCommand(PLUGIN_NAME, "AnteSetDamageSteps", args => {
                const deal = (args && args.dealtStep != null) ? Number(args.dealtStep) : null;
                const taken = (args && args.takenStep != null) ? Number(args.takenStep) : null;
                Ante.setDamageSteps(deal, taken);
            });
        }
    }

    //==========================================================================
    // Extra cleanup when battle ends
    //==========================================================================
    {
        const _endBattle = BattleManager.endBattle;
        BattleManager.endBattle = function (result) {
            try {
                const scene = SceneManager._scene;
                if (scene && scene._Ante && typeof scene._Ante.destroy === "function") {
                    scene._Ante.destroy();
                    scene._Ante = null;
                }
            } catch (e) {
                console.warn("Ante cleanup on battle end failed:", e);
            }
            return _endBattle.call(this, result);
        };

        const _terminateBattleScene = Scene_Battle.prototype.terminate;
        Scene_Battle.prototype.terminate = function () {
            try {
                if (this._Ante && typeof this._Ante.destroy === "function") {
                    this._Ante.destroy();
                    this._Ante = null;
                }
            } catch (e) {
                console.warn("Ante terminate cleanup failed:", e);
            }
            _terminateBattleScene.call(this);
        };
    }

    //==========================================================================
    // AnteManager hard destroy override (kept identical to original behavior)
    //==========================================================================
    AnteManager.prototype.destroy = function () {
        for (const p of this._popups) {
            try { p.sprite.bitmap.clear(); } catch (_e) { }
            if (p.sprite && p.sprite.parent && p.sprite.parent.removeChild) {
                p.sprite.parent.removeChild(p.sprite);
            }
        }
        this._popups.length = 0;

        if (this._badge) {
            try { this._badge.bitmap && this._badge.bitmap.clear(); } catch (_e) { }
            const bParent = this._badge.parent;
            if (bParent && bParent.removeChild) bParent.removeChild(this._badge);
        }
        this._badge = null;

        if (this._win) {
            try {
                this._win.hide();
                this._win.close && this._win.close();
                const wParent = this._win.parent;
                if (wParent && wParent.removeChild) wParent.removeChild(this._win);
            } catch (_e) { }
        }
        this._win = null;

        this._scene = null;
    };

    //==========================================================================
    // Queue blacklist public API
    //==========================================================================
    Ante._queueBlacklist = Ante._queueBlacklist || [];

    Ante.queueBlacklistAdd = function (...types) {
        if (!Ante._queueBlacklist) Ante._queueBlacklist = [];
        for (const t of types.flat()) {
            if (!t) continue;
            const s = String(t);
            if (!Ante._queueBlacklist.some(x => String(x).toLowerCase() === s.toLowerCase())) {
                Ante._queueBlacklist.push(s);
            }
        }
        _requestHudRefresh();
    };

    Ante.queueBlacklistRemove = function (...types) {
        if (!Ante._queueBlacklist || !Ante._queueBlacklist.length) return;
        const removeSet = new Set(types.flat().map(x => String(x).toLowerCase()));
        Ante._queueBlacklist = Ante._queueBlacklist.filter(x => !removeSet.has(String(x).toLowerCase()));
        _requestHudRefresh();
    };

    Ante.queueBlacklistClear = function () {
        Ante._queueBlacklist = [];
        _requestHudRefresh();
    };

})();
