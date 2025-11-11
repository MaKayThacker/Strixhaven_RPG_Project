//=============================================================================
// VisuStella MZ - Sideview Battle UI
// VisuMZ_3_SideviewBattleUI.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_SideviewBattleUI = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SideviewBattleUI = VisuMZ.SideviewBattleUI || {};
VisuMZ.SideviewBattleUI.version = 1.09;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.09] [SideviewBattleUI]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Sideview_Battle_UI_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin changes the RPG Maker MZ Battle UI for Sideview Battle Systems
 * into something more minimalistic. The menus are placed towards the player's
 * party to let the player focus their attention to the center of the screen
 * instead of to the lower ledges of the screen. The input command windows show
 * up near the inputting actor to give the player a clear understanding of who
 * is performing what action.
 * 
 * *NOTE* To use this battle layout, you will need the updated version of
 * VisuStella's Battle Core. Go into its Plugin Parameters and change the
 * Battle Layout Settings > Battle Layout Style > plugin parameter to this
 * value: "Sideview Battle UI" or "sideview_ui".
 *
 * Features include all (but not limited to) the following:
 * 
 * * This plugin changes the UI for the RPG Maker MZ Sideview Battle System.
 * * Status windows appear on the side of the screen for each actor in battle.
 * * The appearance is more compact for both the status windows and input
 *   command windows.
 * * More of the battlefield can be seen with this kind of layout.
 * * Lots of customization options to adjust the status windows.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_BattleCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Sideview Only
 * 
 * This plugin only works for the sideview battle system. If this layout is
 * selected in the Battle Core, the battle system will automatically shift to
 * sideview regardless of the settings.
 * 
 * *NOTE* To use this battle layout, you will need the updated version of
 * VisuStella's Battle Core. Go into its Plugin Parameters and change the
 * Battle Layout Settings > Battle Layout Style > plugin parameter to this
 * value: "Sideview Battle UI" or "sideview_ui".
 *
 * ---
 * 
 * Window Properties
 * 
 * With how the battle layout works, many of the command windows used in the
 * battle system will have preset and hardcoded properties to them in order to
 * maintain a specific aesthetic. These include columns, padding, and scaling
 * types to name a few.
 * 
 * Therefore, any plugins that may alter these effects may not have any effect
 * at all provided that this plugin is in a higher tier than those modifying
 * it. This is an intended change to maintain the aesthetic and is not a bug.
 * 
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_2_AggroControlSystem
 * VisuMZ_2_BattleSystemBTB
 * VisuMZ_3_BoostAction
 * VisuMZ_3_StateTooltips
 * VisuMZ_4_BreakShields
 *
 * There are features provided in this plugin for the above plugins. Their UI
 * elements can be shown with this plugin's status windows.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battler Offset Settings
 * ============================================================================
 *
 * Settings for battler sprite offsets when using the Sideview Battle UI.
 * Since there's more room on the screen, placing them lower will help adjust
 * for the player's visual comfort.
 *
 * ---
 *
 * Settings
 * 
 *   Perform Offset?:
 *   - Offsets the battler sprite positions when using Sideview Battle UI.
 * 
 *   Offset X:
 *   - How much to offset the sprite positions by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the sprite positions by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Window Settings
 * ============================================================================
 *
 * Settings for general windows when using the Sideview Battle UI. These
 * settings are made for the windows that aren't the status windows but are
 * affected by this plugin.
 *
 * ---
 *
 * Global
 * 
 *   UI Scale:
 *   - What is the scaling rate for battle windows?
 *   - Use a number between 0 and 1 for the best results.
 *
 * ---
 *
 * Help Window
 * 
 *   Fade BG Style?:
 *   - Fade the Help Window background with this UI?
 *
 * ---
 *
 * Actor Command Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the actor command window with
 *     this UI?
 *
 * ---
 *
 * Party Command Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the party command window with
 *     this UI?
 *
 * ---
 *
 * Item Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the item window with this UI?
 * 
 *   Width:
 *   - What is the width item window with this UI?
 *   - This is the width BEFORE scaling.
 * 
 *   Offset X:
 *   - How much to offset the window X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the window Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Skill Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the skill window with this UI?
 * 
 *   Width:
 *   - What is the width skill window with this UI?
 *   - This is the width BEFORE scaling.
 * 
 *   Offset X:
 *   - How much to offset the window X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the window Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Status Window Settings
 * ============================================================================
 *
 * Settings for the status window when using the Sideview Battle UI. Each of
 * these plugin parameters allow you to adjust many of the various elements
 * found inside of this window.
 *
 * ---
 *
 * Dimensions
 * 
 *   Width Base:
 *   - How width is each actor's status window?
 *   - This is the width AFTER scaling.
 * 
 *   Height Base:
 *   - How tall do you want the status window to be?
 *   - 'auto' for automatic calculations.
 *   - This is the height BEFORE scaling.
 * 
 *     Height Buffer:
 *     - How much space do you want there to be vertically from window
 *       to window?
 *     - This is the height BEFORE scaling.
 * 
 *   Move Distance:
 *   - How far will the status window move when the actor is selected
 *     or active?
 * 
 *     Move Speed:
 *     - How many pixels with the status window move per frame?
 *
 * ---
 * 
 * Standard UI > BG
 * 
 *   Background Dim?:
 *   - Show the dimmed background?
 * 
 * ---
 *
 * Standard UI > Name
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Sprite?:
 *   - Use a sprite or bitmap to draw this element?
 *   - This is added for font sizes that do not work well with name sprites.
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > States
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Ignore Scale?:
 *   - Ignore scaling to show icons at their real size?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > TPB/ATB Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > HP Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > MP Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > TP Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Aggro Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_2_AggroControlSystem!
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Boost Points
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_3_BoostAction!
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Brave Points
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_2_BattleSystemBTB!
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Break Shield
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_4_BreakShields!
 * 
 *   Ignore Scale?:
 *   - Ignore scaling to show icons at their real size?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > State Tooltips
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_3_StateTooltips!
 *
 * ---
 * 
 * JS
 * 
 *   JS: Custom UI:
 *   - JavaScript used to add custom elements to each status window.
 * 
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.09: May 16, 2024
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.08: April 18, 2024
 * * Feature Update!
 * ** Added failsafes for in odd cases where sprites do not reregister after
 *    changing party members through the full party menu in-battle. Update made
 *    by Olivia.
 * 
 * Version 1.07: April 13, 2023
 * * Bug Fixes!
 * ** If the UI scale is over 1.0, the UI will automatically scale back any
 *    windows that extend past screen boundaries. Update made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Status Window > Standard UI > Name > Sprite?
 * **** Use a sprite or bitmap to draw this element?
 * **** This is added for font sizes that do not work well with name sprites.
 * 
 * Version 1.06: January 20, 2023
 * * Bug Fixes!
 * ** Skill and Item Windows should no longer disappear completely when used
 *    together with the Battle Core's "Middle Layout" for skill and item
 *    windows. Instead the intended setting will be set with the Sideview UI
 *    layout as if it's "false". Fix made by Arisu.
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: June 9, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused some windows to not appear correctly when cancel
 *    is pressed upon certain conditions. Fix made by Olivia.
 * 
 * Version 1.04: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Status Window Settings > Background Dim?
 * **** Show the dimmed background?
 * 
 * Version 1.03: July 30, 2021
 * * Bug Fixes!
 * ** Plugin Parameters for adjusting row quantity should now work properly.
 *    Fix made by Olivia.
 * 
 * Version 1.02: June 18, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.01: April 23, 2021
 * * Bug Fixes!
 * ** Item window during battle should now align properly. Fix made by Olivia.
 *
 * Version 1.00 Official Release Date: May 12, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param SideviewBattleUI
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Battler:struct
 * @text Battler Offset Settings
 * @type struct<Battler>
 * @desc Settings for battler sprite offsets when using the Sideview Battle UI.
 * @default {"Enable:eval":"true","OffsetX:num":"+0","OffsetY:num":"+128"}
 *
 * @param GeneralWindow:struct
 * @text General Window Settings
 * @type struct<GeneralWindow>
 * @desc Settings for general windows when using the Sideview Battle UI.
 * @default {"Global":"","UiScale:num":"0.80","HelpWindow":"","HelpFadeStyle:eval":"true","ActorCommandWindow":"","ActorCommandWindowMaxRows:num":"8","PartyCommandWindow":"","PartyCommandWindowMaxRows:num":"8","ItemWindow":"","ItemWindowMaxRows:num":"8","ItemWindowWidth:num":"400","ItemWindowOffsetX:num":"+16","ItemWindowOffsetY:num":"+16","SkillWindow":"","SkillWindowMaxRows:num":"8","SkillWindowWidth:num":"400","SkillWindowOffsetX:num":"+16","SkillWindowOffsetY:num":"+16"}
 *
 * @param StatusWindow:struct
 * @text Status Window Settings
 * @type struct<StatusWindow>
 * @desc Settings for the status window when using the Sideview Battle UI.
 * @default {"Dimensions":"","WidthBase:num":"200","HeightBase:str":"auto","HeightBuffer:num":"4","MoveDistance:num":"48","MoveSpeed:num":"4","Standard":"","Name":"","NameShow:eval":"true","NameOffsetX:num":"+48","NameOffsetY:num":"+0","States":"","StatesShow:eval":"true","StatesIgnoreScale:eval":"true","StatesOffsetX:num":"+20","StatesOffsetY:num":"+20","Tpb":"","TpbShow:eval":"true","TpbOffsetX:num":"+44","TpbOffsetY:num":"+0","Hp":"","HpShow:eval":"true","HpOffsetX:num":"+60","HpOffsetY:num":"+0","Mp":"","MpShow:eval":"true","MpOffsetX:num":"+68","MpOffsetY:num":"+0","Tp":"","TpShow:eval":"true","TpOffsetX:num":"+74","TpOffsetY:num":"+0","Compatibility":"","Aggro":"","AggroShow:eval":"true","AggroOffsetX:num":"+44","AggroOffsetY:num":"+0","Boost":"","BoostShow:eval":"true","BoostOffsetX:num":"+52","BoostOffsetY:num":"+2","Brave":"","BraveShow:eval":"true","BraveOffsetX:num":"+52","BraveOffsetY:num":"-6","BreakShield":"","BreakShieldShow:eval":"true","BreakShieldIgnoreScale:eval":"true","BreakShieldOffsetX:num":"+20","BreakShieldOffsetY:num":"+20","StateTooltips":"","StateTooltipsShow:eval":"true","JS":"","CustomUi:func":"\"// Declare Variables\\nconst actor = arguments[0];\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\n\\n// Draw Custom Elements\\n// Put in code you want here used for windows classes\""}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Battler Offset Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battler:
 *
 * @param Enable:eval
 * @text Perform Offset?
 * @type boolean
 * @on Do Offset
 * @off Don't Offset
 * @desc Offsets the battler sprite positions when using Sideview Battle UI.
 * @default true
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the sprite positions by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the sprite positions by?
 * Negative goes up. Positive goes down.
 * @default +128
 *
 */
/* ----------------------------------------------------------------------------
 * GeneralWindow Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GeneralWindow:
 *
 * @param Global
 *
 * @param UiScale:num
 * @text UI Scale
 * @parent Global
 * @desc What is the scaling rate for battle windows?
 * Use a number between 0 and 1 for the best results.
 * @default 0.80
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpFadeStyle:eval
 * @text Fade BG Style?
 * @parent HelpWindow
 * @type boolean
 * @on Fade Background
 * @off Default Background
 * @desc Fade the Help Window background with this UI?
 * @default true
 *
 * @param ActorCommandWindow
 * @text Actor Command Window
 *
 * @param ActorCommandWindowMaxRows:num
 * @text Max Rows
 * @parent ActorCommandWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the actor command window with this UI?
 * @default 8
 *
 * @param PartyCommandWindow
 * @text Party Command Window
 *
 * @param PartyCommandWindowMaxRows:num
 * @text Max Rows
 * @parent PartyCommandWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the party command window with this UI?
 * @default 8
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemWindowMaxRows:num
 * @text Max Rows
 * @parent ItemWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the item window with this UI?
 * @default 8
 *
 * @param ItemWindowWidth:num
 * @text Width
 * @parent ItemWindow
 * @type number
 * @min 1
 * @desc What is the width item window with this UI?
 * This is the width BEFORE scaling.
 * @default 400
 *
 * @param ItemWindowOffsetX:num
 * @text Offset X
 * @parent ItemWindow
 * @desc How much to offset the window X position by?
 * Negative goes left. Positive goes right.
 * @default +16
 *
 * @param ItemWindowOffsetY:num
 * @text Offset Y
 * @parent ItemWindow
 * @desc How much to offset the window Y position by?
 * Negative goes up. Positive goes down.
 * @default +16
 *
 * @param SkillWindow
 * @text Skill Window
 *
 * @param SkillWindowMaxRows:num
 * @text Max Rows
 * @parent SkillWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the skill window with this UI?
 * @default 8
 *
 * @param SkillWindowWidth:num
 * @text Width
 * @parent SkillWindow
 * @type number
 * @min 1
 * @desc What is the width skill window with this UI?
 * This is the width BEFORE scaling.
 * @default 400
 *
 * @param SkillWindowOffsetX:num
 * @text Offset X
 * @parent SkillWindow
 * @desc How much to offset the window X position by?
 * Negative goes left. Positive goes right.
 * @default +16
 *
 * @param SkillWindowOffsetY:num
 * @text Offset Y
 * @parent SkillWindow
 * @desc How much to offset the window Y position by?
 * Negative goes up. Positive goes down.
 * @default +16
 *
 */
/* ----------------------------------------------------------------------------
 * Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param Dimensions
 *
 * @param WidthBase:num
 * @text Width Base
 * @parent Dimensions
 * @type number
 * @desc How width is each actor's status window?
 * This is the width AFTER scaling.
 * @default 200
 *
 * @param HeightBase:str
 * @text Height Base
 * @parent Dimensions
 * @type number
 * @desc How tall do you want the status window to be?
 * 'auto' for automatic calculations. Value is BEFORE scaling.
 * @default auto
 *
 * @param HeightBuffer:num
 * @text Height Buffer
 * @parent HeightBase:str
 * @type number
 * @desc How much space do you want there to be vertically from window to window?
 * @default 4
 *
 * @param MoveDistance:num
 * @text Move Distance
 * @parent Dimensions
 * @type number
 * @desc How far will the status window move when
 * the actor is selected or active?
 * @default 48
 *
 * @param MoveSpeed:num
 * @text Move Speed
 * @parent MoveDistance:num
 * @type number
 * @desc How many pixels with the status window move per frame?
 * @default 4
 *
 * @param Standard
 * @text Standard UI
 *
 * @param BgShow:eval
 * @text Background Dim?
 * @parent Standard
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the dimmed background?
 * @default true
 * 
 * @param Name
 * @parent Standard
 *
 * @param NameShow:eval
 * @text Show?
 * @parent Name
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param NameSprite:eval
 * @text Sprite?
 * @parent Name
 * @type boolean
 * @on Sprite
 * @off Bitmap
 * @desc Use a sprite or bitmap to draw this element?
 * @default true
 *
 * @param NameOffsetX:num
 * @text Offset X
 * @parent Name
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +48
 *
 * @param NameOffsetY:num
 * @text Offset Y
 * @parent Name
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param States
 * @parent Standard
 *
 * @param StatesShow:eval
 * @text Show?
 * @parent States
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param StatesIgnoreScale:eval
 * @text Ignore Scale?
 * @parent States
 * @type boolean
 * @on Ignore Scaling
 * @off Use Scaling
 * @desc Ignore scaling to show icons at their real size?
 * @default true
 *
 * @param StatesOffsetX:num
 * @text Offset X
 * @parent States
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +20
 *
 * @param StatesOffsetY:num
 * @text Offset Y
 * @parent States
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +20
 * 
 * @param Tpb
 * @text TPB/ATB Gauge
 * @parent Standard
 *
 * @param TpbShow:eval
 * @text Show?
 * @parent Tpb
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param TpbOffsetX:num
 * @text Offset X
 * @parent Tpb
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +44
 *
 * @param TpbOffsetY:num
 * @text Offset Y
 * @parent Tpb
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Hp
 * @text HP Gauge
 * @parent Standard
 *
 * @param HpShow:eval
 * @text Show?
 * @parent Hp
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param HpOffsetX:num
 * @text Offset X
 * @parent Hp
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +60
 *
 * @param HpOffsetY:num
 * @text Offset Y
 * @parent Hp
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Mp
 * @text MP Gauge
 * @parent Standard
 *
 * @param MpShow:eval
 * @text Show?
 * @parent Mp
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param MpOffsetX:num
 * @text Offset X
 * @parent Mp
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +68
 *
 * @param MpOffsetY:num
 * @text Offset Y
 * @parent Mp
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Tp
 * @text TP Gauge
 * @parent Standard
 *
 * @param TpShow:eval
 * @text Show?
 * @parent Tp
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param TpOffsetX:num
 * @text Offset X
 * @parent Tp
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +74
 *
 * @param TpOffsetY:num
 * @text Offset Y
 * @parent Tp
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 *
 * @param Compatibility
 * @text Compatibility UI
 * 
 * @param Aggro
 * @text Aggro Gauge
 * @parent Compatibility
 * @default VisuMZ_2_AggroControlSystem
 *
 * @param AggroShow:eval
 * @text Show?
 * @parent Aggro
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_2_AggroControlSystem!
 * @default true
 *
 * @param AggroOffsetX:num
 * @text Offset X
 * @parent Aggro
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +44
 *
 * @param AggroOffsetY:num
 * @text Offset Y
 * @parent Aggro
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Boost
 * @text Boost Points
 * @parent Compatibility
 * @default VisuMZ_3_BoostAction
 *
 * @param BoostShow:eval
 * @text Show?
 * @parent Boost
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_3_BoostAction!
 * @default true
 *
 * @param BoostOffsetX:num
 * @text Offset X
 * @parent Boost
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +52
 *
 * @param BoostOffsetY:num
 * @text Offset Y
 * @parent Boost
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +2
 * 
 * @param Brave
 * @text Brave Points
 * @parent Compatibility
 * @default VisuMZ_2_BattleSystemBTB
 *
 * @param BraveShow:eval
 * @text Show?
 * @parent Brave
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_2_BattleSystemBTB!
 * @default true
 *
 * @param BraveOffsetX:num
 * @text Offset X
 * @parent Brave
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +52
 *
 * @param BraveOffsetY:num
 * @text Offset Y
 * @parent Brave
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default -6
 * 
 * @param BreakShield
 * @text Break Shield
 * @parent Compatibility
 * @default VisuMZ_4_BreakShields
 *
 * @param BreakShieldShow:eval
 * @text Show?
 * @parent BreakShield
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_4_BreakShields!
 * @default true
 *
 * @param BreakShieldIgnoreScale:eval
 * @text Ignore Scale?
 * @parent BreakShield
 * @type boolean
 * @on Ignore Scaling
 * @off Use Scaling
 * @desc Ignore scaling to show icons at their real size?
 * @default true
 *
 * @param BreakShieldOffsetX:num
 * @text Offset X
 * @parent BreakShield
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +20
 *
 * @param BreakShieldOffsetY:num
 * @text Offset Y
 * @parent BreakShield
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +20
 * 
 * @param StateTooltips
 * @text State Tooltips
 * @parent Compatibility
 * @default VisuMZ_3_StateTooltips
 *
 * @param StateTooltipsShow:eval
 * @text Show?
 * @parent StateTooltips
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_3_StateTooltips!
 * @default true
 *
 * @param JS
 *
 * @param CustomUi:func
 * @text JS: Custom UI
 * @parent JS
 * @type note
 * @desc JavaScript used to add custom elements to each status window.
 * @default "// Declare Variables\nconst actor = arguments[0];\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\n\n// Draw Custom Elements\n// Put in code you want here used for windows classes"
 *
 */
//=============================================================================

var tier = tier || 0x0;
var dependencies = ["VisuMZ_0_CoreEngine", 'VisuMZ_1_BattleCore'];
var pluginData = $plugins.filter(function (_0x388f96) {
  return _0x388f96.status && _0x388f96.description.includes("[SideviewBattleUI]");
})[0x0];
VisuMZ.SideviewBattleUI.Settings = VisuMZ.SideviewBattleUI.Settings || {};
VisuMZ.ConvertParams = function (_0x36e6ad, _0x6d2fe7) {
  for (const _0x419195 in _0x6d2fe7) {
    if (_0x419195.match(/(.*):(.*)/i)) {
      const _0x10fe55 = String(RegExp.$1);
      const _0x592298 = String(RegExp.$2).toUpperCase().trim();
      let _0x496dfd;
      let _0x219745;
      let _0x5aa3b3;
      switch (_0x592298) {
        case "NUM":
          _0x496dfd = _0x6d2fe7[_0x419195] !== '' ? Number(_0x6d2fe7[_0x419195]) : 0x0;
          break;
        case 'ARRAYNUM':
          _0x219745 = _0x6d2fe7[_0x419195] !== '' ? JSON.parse(_0x6d2fe7[_0x419195]) : [];
          _0x496dfd = _0x219745.map(_0x3a9af2 => Number(_0x3a9af2));
          break;
        case 'EVAL':
          _0x496dfd = _0x6d2fe7[_0x419195] !== '' ? eval(_0x6d2fe7[_0x419195]) : null;
          break;
        case "ARRAYEVAL":
          _0x219745 = _0x6d2fe7[_0x419195] !== '' ? JSON.parse(_0x6d2fe7[_0x419195]) : [];
          _0x496dfd = _0x219745.map(_0x4c541f => eval(_0x4c541f));
          break;
        case "JSON":
          _0x496dfd = _0x6d2fe7[_0x419195] !== '' ? JSON.parse(_0x6d2fe7[_0x419195]) : '';
          break;
        case "ARRAYJSON":
          _0x219745 = _0x6d2fe7[_0x419195] !== '' ? JSON.parse(_0x6d2fe7[_0x419195]) : [];
          _0x496dfd = _0x219745.map(_0x4f97cd => JSON.parse(_0x4f97cd));
          break;
        case 'FUNC':
          _0x496dfd = _0x6d2fe7[_0x419195] !== '' ? new Function(JSON.parse(_0x6d2fe7[_0x419195])) : new Function("return 0");
          break;
        case 'ARRAYFUNC':
          _0x219745 = _0x6d2fe7[_0x419195] !== '' ? JSON.parse(_0x6d2fe7[_0x419195]) : [];
          _0x496dfd = _0x219745.map(_0x42a0c3 => new Function(JSON.parse(_0x42a0c3)));
          break;
        case "STR":
          _0x496dfd = _0x6d2fe7[_0x419195] !== '' ? String(_0x6d2fe7[_0x419195]) : '';
          break;
        case "ARRAYSTR":
          _0x219745 = _0x6d2fe7[_0x419195] !== '' ? JSON.parse(_0x6d2fe7[_0x419195]) : [];
          _0x496dfd = _0x219745.map(_0x19d4c1 => String(_0x19d4c1));
          break;
        case "STRUCT":
          _0x5aa3b3 = _0x6d2fe7[_0x419195] !== '' ? JSON.parse(_0x6d2fe7[_0x419195]) : {};
          _0x496dfd = VisuMZ.ConvertParams({}, _0x5aa3b3);
          break;
        case "ARRAYSTRUCT":
          _0x219745 = _0x6d2fe7[_0x419195] !== '' ? JSON.parse(_0x6d2fe7[_0x419195]) : [];
          _0x496dfd = _0x219745.map(_0x1b8a63 => VisuMZ.ConvertParams({}, JSON.parse(_0x1b8a63)));
          break;
        default:
          continue;
      }
      _0x36e6ad[_0x10fe55] = _0x496dfd;
    }
  }
  return _0x36e6ad;
};
(_0x39da0c => {
  const _0x42a2df = _0x39da0c.name;
  for (const _0x4a5463 of dependencies) {
    if (!Imported[_0x4a5463]) {
      alert("%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.".format(_0x42a2df, _0x4a5463));
      SceneManager.exit();
      break;
    }
  }
  const _0x291a04 = _0x39da0c.description;
  if (_0x291a04.match(/\[Version[ ](.*?)\]/i)) {
    const _0x4dade2 = Number(RegExp.$1);
    if (_0x4dade2 !== VisuMZ.SideviewBattleUI.version) {
      alert("%1's version does not match plugin's. Please update it in the Plugin Manager.".format(_0x42a2df, _0x4dade2));
      SceneManager.exit();
    }
  }
  if (_0x291a04.match(/\[Tier[ ](\d+)\]/i)) {
    const _0x14a9df = Number(RegExp.$1);
    if (_0x14a9df < tier) {
      alert("%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.".format(_0x42a2df, _0x14a9df, tier));
      SceneManager.exit();
    } else {
      tier = Math.max(_0x14a9df, tier);
    }
  }
  VisuMZ.ConvertParams(VisuMZ.SideviewBattleUI.Settings, _0x39da0c.parameters);
})(pluginData);
BattleManager.isUsingSideviewUiLayout = function () {
  return SceneManager.isSceneBattle() && SceneManager._scene.battleLayoutStyle() === "sideview_ui";
};
VisuMZ.SideviewBattleUI.Game_System_isSideView = Game_System.prototype.isSideView;
Game_System.prototype.isSideView = function () {
  if (BattleManager.isUsingSideviewUiLayout()) {
    return true;
  }
  return VisuMZ.SideviewBattleUI.Game_System_isSideView.call(this);
};
VisuMZ.SideviewBattleUI.Scene_Base_isWindowMaskingEnabled = Scene_Base.prototype.isWindowMaskingEnabled;
Scene_Base.prototype.isWindowMaskingEnabled = function () {
  if (BattleManager.isUsingSideviewUiLayout()) {
    return false;
  } else {
    return VisuMZ.SideviewBattleUI.Scene_Base_isWindowMaskingEnabled.call(this);
  }
};
VisuMZ.SideviewBattleUI.Scene_Battle_statusWindowRect = Scene_Battle.prototype.statusWindowRect;
Scene_Battle.prototype.statusWindowRect = function () {
  const _0x6f5462 = VisuMZ.SideviewBattleUI.Scene_Battle_statusWindowRect.call(this);
  if (BattleManager.isUsingSideviewUiLayout()) {
    _0x6f5462.y = Graphics.height * 0xa;
    _0x6f5462.height = 0x0;
  }
  return _0x6f5462;
};
VisuMZ.SideviewBattleUI.Scene_Battle_actorWindowRect = Scene_Battle.prototype.actorWindowRect;
Scene_Battle.prototype.actorWindowRect = function () {
  const _0x4e2e2f = VisuMZ.SideviewBattleUI.Scene_Battle_actorWindowRect.call(this);
  if (BattleManager.isUsingSideviewUiLayout()) {
    _0x4e2e2f.y = Graphics.height * 0xa;
    _0x4e2e2f.height = 0x0;
  }
  return _0x4e2e2f;
};
VisuMZ.SideviewBattleUI.Scene_Battle_updateStatusWindowPosition = Scene_Battle.prototype.updateStatusWindowPosition;
Scene_Battle.prototype.updateStatusWindowPosition = function () {
  VisuMZ.SideviewBattleUI.Scene_Battle_updateStatusWindowPosition.call(this);
  this.updateSideviewBattleUIPositions();
};
Scene_Battle.prototype.updateSideviewBattleUIPositions = function () {
  if (!BattleManager.isInputting()) {
    return;
  }
  if (!BattleManager.isUsingSideviewUiLayout()) {
    return;
  }
  if (this._partyCommandWindow.active) {
    this._partyCommandWindow.updateSideviewUiPosition();
  }
  if (this._actorCommandWindow.active) {
    this._actorCommandWindow.updateSideviewUiPosition();
  }
  if (this._skillWindow.active) {
    this._actorCommandWindow.updateSideviewUiPosition();
    this._skillWindow.updateSideviewUiPosition();
  }
  if (this._itemWindow.active) {
    this._actorCommandWindow.updateSideviewUiPosition();
    this._itemWindow.updateSideviewUiPosition();
  }
  if (this._actorWindow.active) {
    this._actorCommandWindow.updateSideviewUiFadeOut();
    this._skillWindow.updateSideviewUiFadeOut();
    this._itemWindow.updateSideviewUiFadeOut();
  }
  if (this._enemyWindow.active) {
    this._actorCommandWindow.updateSideviewUiFadeOut();
    this._skillWindow.updateSideviewUiFadeOut();
    this._itemWindow.updateSideviewUiFadeOut();
  }
};
Scene_Battle.prototype.isSkillItemWindowsMiddle = function () {
  if (BattleManager.isUsingSideviewUiLayout()) {
    return false;
  }
  return VisuMZ.BattleCore.Settings.BattleLayout.SkillItemMiddleLayout;
};
VisuMZ.SideviewBattleUI.Scene_Battle_createStatusWindow = Scene_Battle.prototype.createStatusWindow;
Scene_Battle.prototype.createStatusWindow = function () {
  VisuMZ.SideviewBattleUI.Scene_Battle_createStatusWindow.call(this);
  this.createSideviewUiBattleStatusWindows();
};
Scene_Battle.prototype.createSideviewUiBattleStatusWindows = function () {
  if (!BattleManager.isUsingSideviewUiLayout()) {
    return;
  }
  this._sideviewUiBattleStatusWindows = [];
  const _0x3d73a6 = $gameParty.maxBattleMembers();
  for (let _0x4d90f0 = 0x0; _0x4d90f0 < _0x3d73a6; _0x4d90f0++) {
    const _0x58c226 = new Window_SideviewUiBattleStatus(_0x4d90f0);
    this.addWindow(_0x58c226);
    this._sideviewUiBattleStatusWindows.push(_0x58c226);
  }
};
Scene_Battle.prototype.refreshSideviewUiBattleStatusWindows = function () {
  if (!this._sideviewUiBattleStatusWindows) {
    return;
  }
  for (const _0x5e5faf of this._sideviewUiBattleStatusWindows) {
    if (!_0x5e5faf) {
      continue;
    }
    _0x5e5faf.refresh();
  }
};
VisuMZ.SideviewBattleUI.Scene_Battle_createCancelButton = Scene_Battle.prototype.createCancelButton;
Scene_Battle.prototype.createCancelButton = function () {
  if (BattleManager.isUsingSideviewUiLayout()) {
    return;
  }
  VisuMZ.SideviewBattleUI.Scene_Battle_createCancelButton.call(this);
};
VisuMZ.SideviewBattleUI.Scene_Battle_onActorCancel = Scene_Battle.prototype.onActorCancel;
Scene_Battle.prototype.onActorCancel = function () {
  if (BattleManager.isUsingSideviewUiLayout()) {
    this._actorWindow.hide();
    this.returnSideviewCommandWindows();
  } else {
    VisuMZ.SideviewBattleUI.Scene_Battle_onActorCancel.call(this);
  }
};
VisuMZ.SideviewBattleUI.Scene_Battle_onEnemyCancel = Scene_Battle.prototype.onEnemyCancel;
Scene_Battle.prototype.onEnemyCancel = function () {
  if (BattleManager.isUsingSideviewUiLayout()) {
    this._enemyWindow.hide();
    this.returnSideviewCommandWindows();
  } else {
    VisuMZ.SideviewBattleUI.Scene_Battle_onEnemyCancel.call(this);
  }
};
Scene_Battle.prototype.returnSideviewCommandWindows = function () {
  this._actorCommandWindow.show();
  switch (this._actorCommandWindow.currentSymbol()) {
    case "skill":
      this._skillWindow.show();
      this._skillWindow.activate();
      break;
    case 'item':
      this._itemWindow.show();
      this._itemWindow.activate();
      break;
  }
};
Sprite_Battler.SIDEVIEW_BATTLE_UI_MOVE_BATTLERS = VisuMZ.SideviewBattleUI.Settings.Battler.Enable ?? true;
Sprite_Battler.SIDEVIEW_BATTLE_UI_BATTLER_OFFSET_X = VisuMZ.SideviewBattleUI.Settings.Battler.OffsetX ?? 0x0;
Sprite_Battler.SIDEVIEW_BATTLE_UI_BATTLER_OFFSET_Y = VisuMZ.SideviewBattleUI.Settings.Battler.OffsetY ?? 0x80;
VisuMZ.SideviewBattleUI.Sprite_Battler_setHome = Sprite_Battler.prototype.setHome;
Sprite_Battler.prototype.setHome = function (_0x31b14b, _0x55958d) {
  if (this.shouldAdjustForSideviewUiLayout()) {
    _0x31b14b += Sprite_Battler.SIDEVIEW_BATTLE_UI_BATTLER_OFFSET_X;
    _0x55958d += Sprite_Battler.SIDEVIEW_BATTLE_UI_BATTLER_OFFSET_Y;
  }
  VisuMZ.SideviewBattleUI.Sprite_Battler_setHome.call(this, _0x31b14b, _0x55958d);
};
Sprite_Battler.prototype.shouldAdjustForSideviewUiLayout = function () {
  if (!BattleManager.isUsingSideviewUiLayout()) {
    return false;
  }
  if (Imported.VisuMZ_2_BattleGridSystem && BattleManager.isUsingGridSystem()) {
    return false;
  }
  if (Imported.VisuMZ_3_FrontviewBattleUI && BattleManager.isUsingFrontviewUiLayout() && !$gameSystem.isSideView()) {
    return false;
  }
  return Sprite_Battler.SIDEVIEW_BATTLE_UI_MOVE_BATTLERS;
};
Window_Base.SIDEVIEW_BATTLE_UI_SCALE = VisuMZ.SideviewBattleUI.Settings.GeneralWindow.UiScale ?? 0.8;
Window_Base.SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X = 0x0;
Window_Base.SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_Y = 0x0;
Window_Base.prototype.initMembersSideviewUi = function () {
  if (!this.isUsingSideviewUiLayout()) {
    return;
  }
  const _0xeb88b9 = Window_Base.SIDEVIEW_BATTLE_UI_SCALE;
  this.scale.x = this.scale.y = _0xeb88b9;
  this.clampSideviewUiScaledDimensions();
};
Window_Base.prototype.isUsingSideviewUiLayout = function () {
  return BattleManager.isUsingSideviewUiLayout();
};
Window_Base.prototype.clampSideviewUiPlacementPosition = function () {
  if (!this.isUsingSideviewUiLayout()) {
    return;
  }
  const _0x362d77 = this.scale.x;
  const _0x58bc1e = -(Math.floor(Graphics.width - Graphics.boxWidth) / 0x2);
  const _0x261442 = _0x58bc1e + Graphics.width - Math.ceil(this.width * _0x362d77);
  const _0x4b6d81 = -(Math.floor(Graphics.height - Graphics.boxHeight) / 0x2);
  const _0xe7f147 = _0x4b6d81 + Graphics.height - Math.ceil(this.height * _0x362d77);
  this.x = this.x.clamp(_0x58bc1e, _0x261442);
  this.y = this.y.clamp(_0x4b6d81, _0xe7f147);
};
Window_Base.prototype.clampSideviewUiScaledDimensions = function () {
  let _0x3f64ec = false;
  if (this.width * this.scale.x > Graphics.boxWidth) {
    this.width = Graphics.boxWidth / this.scale.x;
    _0x3f64ec = true;
  }
  if (this.height * this.scale.y > Graphics.boxHeight) {
    this.height = Graphics.boxHeight / this.scale.y;
    _0x3f64ec = true;
  }
  if (_0x3f64ec) {
    this.createContents();
  }
};
Window_Base.prototype.sideviewUiTargetActor = function () {
  return BattleManager._currentActor || $gameParty.aliveMembers()[0x0];
};
Window_Base.prototype.updateSideviewUiPosition = function () {
  if (!this.isUsingSideviewUiLayout()) {
    return;
  }
  const _0x1207b4 = this.sideviewUiTargetActor();
  if (!_0x1207b4) {
    return;
  }
  const _0x2c341d = _0x1207b4.battler();
  if (!_0x2c341d) {
    return;
  }
  const _0x3de9bb = SceneManager._scene._spriteset._battleField;
  if (!_0x3de9bb) {
    return;
  }
  this.x = _0x2c341d.x + Math.round(_0x2c341d.width / 0x2);
  this.x -= Math.round((Graphics.width - Graphics.boxWidth) / 0x2);
  this.x += _0x3de9bb.x;
  this.x += this.sideviewUiPositionOffsetX();
  this.y = _0x2c341d.y - _0x2c341d.height;
  this.y -= Math.round((Graphics.height - Graphics.boxHeight) / 0x2);
  this.y += _0x3de9bb.y;
  this.y += this.sideviewUiPositionOffsetY();
  this.clampSideviewUiPlacementPosition();
  this.updateSideviewUiFadeIn();
};
Window_Base.prototype.sideviewUiPositionOffsetX = function () {
  return Window_Base.SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X;
};
Window_Base.prototype.sideviewUiPositionOffsetY = function () {
  return Window_Base.SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_Y;
};
Window_Base.prototype.adjustSideviewUiWidth = function () {
  if (!this.isUsingSideviewUiLayout()) {
    return;
  }
  const _0x38c7c8 = this.width;
  this.width = this.sideviewUiWidth();
  if (_0x38c7c8 !== this.width) {
    this.createContents();
  }
};
Window_Base.prototype.sideviewUiWidth = function () {
  return VisuMZ.BattleCore.Settings.BattleLayout.CommandWidth || 0xc0;
};
Window_Base.prototype.adjustSideviewUiHeight = function () {
  if (!this.isUsingSideviewUiLayout()) {
    return;
  }
  const _0x2d1709 = this.height;
  const _0x307e18 = this.dataSideviewUiLength();
  const _0x55c335 = this.fittingHeight(_0x307e18);
  const _0x240ded = this.fittingHeight(this.maxSideviewUiRows());
  this.height = Math.min(_0x55c335, _0x240ded);
  this.clampSideviewUiScaledDimensions();
  if (_0x2d1709 !== this.height) {
    this.createContents();
  }
};
Window_Base.prototype.dataSideviewUiLength = function () {
  if (this._data) {
    return this._data.length;
  }
  if (this._list) {
    return this._list.length;
  }
  return 0x4;
};
Window_Base.prototype.maxSideviewUiRows = function () {
  return 0x8;
};
Window_Base.prototype.updateSideviewUiFadeIn = function () {
  if (this.activate && !this.active) {
    return;
  }
  this.visible = true;
};
Window_Base.prototype.updateSideviewUiFadeOut = function () {
  this.visible = false;
};
VisuMZ.SideviewBattleUI.Window_Base_show = Window_Base.prototype.show;
Window_Base.prototype.show = function () {
  this.clampSideviewUiPlacementPosition();
  VisuMZ.SideviewBattleUI.Window_Base_show.call(this);
};
VisuMZ.SideviewBattleUI.Window_Base_open = Window_Base.prototype.open;
Window_Base.prototype.open = function () {
  this.clampSideviewUiPlacementPosition();
  VisuMZ.SideviewBattleUI.Window_Base_open.call(this);
};
Window_Help.SIDEVIEW_BATTLE_UI_FADE_STYLE = VisuMZ.SideviewBattleUI.Settings.GeneralWindow.HelpFadeStyle ?? true;
VisuMZ.SideviewBattleUI.Window_Help_initialize = Window_Help.prototype.initialize;
Window_Help.prototype.initialize = function (_0xf8e896) {
  VisuMZ.SideviewBattleUI.Window_Help_initialize.call(this, _0xf8e896);
  this.createSideviewUiDimmerSprite();
};
Window_Help.prototype.createSideviewUiDimmerSprite = function () {
  if (!this.isUsingSideviewUiLayout()) {
    return;
  }
  if (!Window_Help.SIDEVIEW_BATTLE_UI_FADE_STYLE) {
    return;
  }
  this.opacity = 0x0;
  if (!this._dimmerSprite) {
    this._dimmerSprite = new Sprite();
    this.addChildToBack(this._dimmerSprite);
  }
  const _0x5aee64 = this.width - Window_SideviewUiBattleStatus.WIDTH_BASE;
  const _0x17ff35 = this.lineHeight() * 0x2;
  this._dimmerSprite.bitmap = new Bitmap(_0x5aee64, _0x17ff35);
  this._dimmerSprite.x = -0x4;
  this._dimmerSprite.y = this.padding;
  const _0x207186 = this._dimmerSprite.bitmap;
  const _0x2512c9 = ColorManager.dimColor1();
  const _0x1d8dd2 = ColorManager.dimColor2();
  _0x207186.fillRect(0x0, 0x0, Math.round(_0x5aee64 / 0x2), _0x17ff35, _0x2512c9);
  _0x207186.gradientFillRect(Math.round(_0x5aee64 / 0x2), 0x0, Math.round(_0x5aee64 / 0x2), _0x17ff35, _0x2512c9, _0x1d8dd2);
};
Window_ItemList.SIDEVIEW_BATTLE_UI_WINDOW_MAX_ROWS = VisuMZ.SideviewBattleUI.Settings.GeneralWindow.ItemWindowMaxRows ?? 0x8;
Window_ItemList.SIDEVIEW_BATTLE_UI_WINDOW_WIDTH = VisuMZ.SideviewBattleUI.Settings.GeneralWindow.ItemWindowWidth ?? 0x190;
Window_ItemList.SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X = VisuMZ.SideviewBattleUI.Settings.GeneralWindow.ItemWindowOffsetX ?? 0x10;
Window_ItemList.SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_Y = VisuMZ.SideviewBattleUI.Settings.GeneralWindow.ItemWindowOffsetY ?? 0x10;
VisuMZ.SideviewBattleUI.Window_ItemList_initialize = Window_ItemList.prototype.initialize;
Window_ItemList.prototype.initialize = function (_0x5638c4) {
  VisuMZ.SideviewBattleUI.Window_ItemList_initialize.call(this, _0x5638c4);
  this.initMembersSideviewUi();
};
VisuMZ.SideviewBattleUI.Window_ItemList_maxCols = Window_ItemList.prototype.maxCols;
Window_ItemList.prototype.maxCols = function () {
  if (this.isUsingSideviewUiLayout()) {
    return 0x1;
  } else {
    return VisuMZ.SideviewBattleUI.Window_ItemList_maxCols.call(this);
  }
};
VisuMZ.SideviewBattleUI.Window_ItemList_colSpacing = Window_ItemList.prototype.colSpacing;
Window_ItemList.prototype.colSpacing = function () {
  return this.isUsingSideviewUiLayout() ? 0x0 : VisuMZ.SideviewBattleUI.Window_ItemList_colSpacing.call(this);
};
VisuMZ.SideviewBattleUI.Window_ItemList_makeItemList = Window_ItemList.prototype.makeItemList;
Window_ItemList.prototype.makeItemList = function () {
  VisuMZ.SideviewBattleUI.Window_ItemList_makeItemList.call(this);
  this.adjustSideviewUiWidth();
  this.adjustSideviewUiHeight();
  this.updateSideviewUiPosition();
};
Window_ItemList.prototype.sideviewUiTargetActor = function () {
  return this._actor || Window_Base.prototype.sideviewUiTargetActor.call(this);
};
Window_ItemList.prototype.sideviewUiWidth = function () {
  return Window_ItemList.SIDEVIEW_BATTLE_UI_WINDOW_WIDTH || 0xc0;
};
Window_ItemList.prototype.sideviewUiPositionOffsetX = function () {
  let _0x39dd0a = Window_Selectable.prototype.sideviewUiPositionOffsetX.call(this);
  return _0x39dd0a + Window_ItemList.SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X;
};
Window_ItemList.prototype.sideviewUiPositionOffsetY = function () {
  let _0x2ff85d = Window_Selectable.prototype.sideviewUiPositionOffsetY.call(this);
  return _0x2ff85d + Window_ItemList.SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_Y;
};
Window_SkillList.SIDEVIEW_BATTLE_UI_WINDOW_MAX_ROWS = VisuMZ.SideviewBattleUI.Settings.GeneralWindow.SkillWindowMaxRows ?? 0x8;
Window_SkillList.SIDEVIEW_BATTLE_UI_WINDOW_WIDTH = VisuMZ.SideviewBattleUI.Settings.GeneralWindow.SkillWindowWidth ?? 0x190;
Window_SkillList.SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X = VisuMZ.SideviewBattleUI.Settings.GeneralWindow.SkillWindowOffsetX ?? 0x10;
Window_SkillList.SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_Y = VisuMZ.SideviewBattleUI.Settings.GeneralWindow.SkillWindowOffsetY ?? 0x10;
VisuMZ.SideviewBattleUI.Window_SkillList_initialize = Window_SkillList.prototype.initialize;
Window_SkillList.prototype.initialize = function (_0x3a6353) {
  VisuMZ.SideviewBattleUI.Window_SkillList_initialize.call(this, _0x3a6353);
  this.initMembersSideviewUi();
};
VisuMZ.SideviewBattleUI.Window_SkillList_maxCols = Window_SkillList.prototype.maxCols;
Window_SkillList.prototype.maxCols = function () {
  if (this.isUsingSideviewUiLayout()) {
    return 0x1;
  } else {
    return VisuMZ.SideviewBattleUI.Window_SkillList_maxCols.call(this);
  }
};
VisuMZ.SideviewBattleUI.Window_SkillList_colSpacing = Window_SkillList.prototype.colSpacing;
Window_SkillList.prototype.colSpacing = function () {
  return this.isUsingSideviewUiLayout() ? 0x0 : VisuMZ.SideviewBattleUI.Window_SkillList_colSpacing.call(this);
};
VisuMZ.SideviewBattleUI.Window_SkillList_makeItemList = Window_SkillList.prototype.makeItemList;
Window_SkillList.prototype.makeItemList = function () {
  VisuMZ.SideviewBattleUI.Window_SkillList_makeItemList.call(this);
  this.adjustSideviewUiWidth();
  this.adjustSideviewUiHeight();
  this.updateSideviewUiPosition();
};
Window_SkillList.prototype.sideviewUiTargetActor = function () {
  return this._actor || Window_Base.prototype.sideviewUiTargetActor.call(this);
};
Window_SkillList.prototype.sideviewUiWidth = function () {
  return Window_SkillList.SIDEVIEW_BATTLE_UI_WINDOW_WIDTH || 0xc0;
};
Window_SkillList.prototype.sideviewUiPositionOffsetX = function () {
  let _0x1097b5 = Window_Selectable.prototype.sideviewUiPositionOffsetX.call(this);
  return _0x1097b5 + Window_SkillList.SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X;
};
Window_SkillList.prototype.sideviewUiPositionOffsetY = function () {
  let _0x4baaa2 = Window_Selectable.prototype.sideviewUiPositionOffsetY.call(this);
  return _0x4baaa2 + Window_SkillList.SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_Y;
};
Window_BattleSkill.prototype.maxSideviewUiRows = function () {
  return Window_SkillList.SIDEVIEW_BATTLE_UI_WINDOW_MAX_ROWS;
};
Window_BattleItem.prototype.maxSideviewUiRows = function () {
  return Window_ItemList.SIDEVIEW_BATTLE_UI_WINDOW_MAX_ROWS;
};
Window_PartyCommand.SIDEVIEW_BATTLE_UI_WINDOW_MAX_ROWS = VisuMZ.SideviewBattleUI.Settings.GeneralWindow.PartyCommandWindowMaxRows ?? 0x8;
VisuMZ.SideviewBattleUI.Window_PartyCommand_initialize = Window_PartyCommand.prototype.initialize;
Window_PartyCommand.prototype.initialize = function (_0x5eb830) {
  VisuMZ.SideviewBattleUI.Window_PartyCommand_initialize.call(this, _0x5eb830);
  this.initMembersSideviewUi();
};
VisuMZ.SideviewBattleUI.Window_PartyCommand_makeCommandList = Window_PartyCommand.prototype.makeCommandList;
Window_PartyCommand.prototype.makeCommandList = function () {
  VisuMZ.SideviewBattleUI.Window_PartyCommand_makeCommandList.call(this);
  this.adjustSideviewUiWidth();
  this.adjustSideviewUiHeight();
};
Window_PartyCommand.prototype.sideviewUiTargetActor = function () {
  return $gameParty.aliveMembers()[0x0];
};
Window_PartyCommand.prototype.maxSideviewUiRows = function () {
  return Window_PartyCommand.SIDEVIEW_BATTLE_UI_WINDOW_MAX_ROWS;
};
Window_ActorCommand.SIDEVIEW_BATTLE_UI_WINDOW_MAX_ROWS = VisuMZ.SideviewBattleUI.Settings.GeneralWindow.ActorCommandWindowMaxRows ?? 0x8;
VisuMZ.SideviewBattleUI.Window_ActorCommand_initialize = Window_ActorCommand.prototype.initialize;
Window_ActorCommand.prototype.initialize = function (_0x26dd4e) {
  VisuMZ.SideviewBattleUI.Window_ActorCommand_initialize.call(this, _0x26dd4e);
  this.initMembersSideviewUi();
};
VisuMZ.SideviewBattleUI.Window_ActorCommand_makeCommandList = Window_ActorCommand.prototype.makeCommandList;
Window_ActorCommand.prototype.makeCommandList = function () {
  VisuMZ.SideviewBattleUI.Window_ActorCommand_makeCommandList.call(this);
  this.adjustSideviewUiWidth();
  this.adjustSideviewUiHeight();
  this.updateSideviewUiPosition();
};
Window_ActorCommand.prototype.sideviewUiTargetActor = function () {
  return this._actor || Window_Base.prototype.sideviewUiTargetActor.call(this);
};
Window_ActorCommand.prototype.maxSideviewUiRows = function () {
  return Window_ActorCommand.SIDEVIEW_BATTLE_UI_WINDOW_MAX_ROWS;
};
VisuMZ.SideviewBattleUI.Window_BattleStatus_updateRefresh = Window_BattleStatus.prototype.updateRefresh;
Window_BattleStatus.prototype.updateRefresh = function () {
  if (this.isUsingSideviewUiLayout()) {
    this.updateRefreshSideviewUi();
  } else {
    VisuMZ.SideviewBattleUI.Window_BattleStatus_updateRefresh.call(this);
  }
};
Window_BattleStatus.prototype.updateRefreshSideviewUi = function () {
  if ($gameTemp.isBattleRefreshRequested()) {
    this._requestRefresh = false;
    $gameTemp.clearBattleRefreshRequest();
    SceneManager._scene.refreshSideviewUiBattleStatusWindows();
  } else if (this._requestRefresh) {
    this._requestRefresh = false;
    SceneManager._scene.refreshSideviewUiBattleStatusWindows();
  }
};
function Window_SideviewUiBattleStatus() {
  this.initialize(...arguments);
}
Window_SideviewUiBattleStatus.prototype = Object.create(Window_StatusBase.prototype);
Window_SideviewUiBattleStatus.prototype.constructor = Window_SideviewUiBattleStatus;
Window_SideviewUiBattleStatus.WIDTH_BASE = VisuMZ.SideviewBattleUI.Settings.StatusWindow.WidthBase ?? 0xc8;
Window_SideviewUiBattleStatus.HEIGHT_BASE = VisuMZ.SideviewBattleUI.Settings.StatusWindow.HeightBase ?? 'auto';
Window_SideviewUiBattleStatus.HEIGHT_BUFFER = VisuMZ.SideviewBattleUI.Settings.StatusWindow.HeightBuffer ?? 0x4;
Window_SideviewUiBattleStatus.WIDTH_MOVE = VisuMZ.SideviewBattleUI.Settings.StatusWindow.MoveDistance ?? 0x30;
Window_SideviewUiBattleStatus.MOVE_SPEED = VisuMZ.SideviewBattleUI.Settings.StatusWindow.MoveSpeed ?? 0x4;
Window_SideviewUiBattleStatus.BG_SHOW = VisuMZ.SideviewBattleUI.Settings.StatusWindow.BgShow ?? true;
Window_SideviewUiBattleStatus.NAME_SHOWN = VisuMZ.SideviewBattleUI.Settings.StatusWindow.NameShow ?? true;
Window_SideviewUiBattleStatus.NAME_SPRITE = VisuMZ.SideviewBattleUI.Settings.StatusWindow.NameSprite ?? true;
Window_SideviewUiBattleStatus.NAME_OFFSET_X = VisuMZ.SideviewBattleUI.Settings.StatusWindow.NameOffsetX ?? 0x30;
Window_SideviewUiBattleStatus.NAME_OFFSET_Y = VisuMZ.SideviewBattleUI.Settings.StatusWindow.NameOffsetY ?? 0x0;
Window_SideviewUiBattleStatus.STATES_SHOWN = VisuMZ.SideviewBattleUI.Settings.StatusWindow.StatesShow ?? true;
Window_SideviewUiBattleStatus.STATES_REVERSE_SCALE = VisuMZ.SideviewBattleUI.Settings.StatusWindow.StatesIgnoreScale ?? true;
Window_SideviewUiBattleStatus.STATES_OFFSET_X = VisuMZ.SideviewBattleUI.Settings.StatusWindow.StatesOffsetX ?? 0x14;
Window_SideviewUiBattleStatus.STATES_OFFSET_Y = VisuMZ.SideviewBattleUI.Settings.StatusWindow.StatesOffsetY ?? 0x14;
Window_SideviewUiBattleStatus.TPB_SHOWN = VisuMZ.SideviewBattleUI.Settings.StatusWindow.TpbShow ?? true;
Window_SideviewUiBattleStatus.TPB_OFFSET_X = VisuMZ.SideviewBattleUI.Settings.StatusWindow.TpbOffsetX ?? 0x2c;
Window_SideviewUiBattleStatus.TPB_OFFSET_Y = VisuMZ.SideviewBattleUI.Settings.StatusWindow.TpbOffsetY ?? 0x0;
Window_SideviewUiBattleStatus.HP_GAUGE_SHOWN = VisuMZ.SideviewBattleUI.Settings.StatusWindow.HpShow ?? true;
Window_SideviewUiBattleStatus.HP_GAUGE_OFFSET_X = VisuMZ.SideviewBattleUI.Settings.StatusWindow.HpOffsetX ?? 0x3c;
Window_SideviewUiBattleStatus.HP_GAUGE_OFFSET_Y = VisuMZ.SideviewBattleUI.Settings.StatusWindow.HpOffsetY ?? 0x0;
Window_SideviewUiBattleStatus.MP_GAUGE_SHOWN = VisuMZ.SideviewBattleUI.Settings.StatusWindow.MpShow ?? true;
Window_SideviewUiBattleStatus.MP_GAUGE_OFFSET_X = VisuMZ.SideviewBattleUI.Settings.StatusWindow.MpOffsetX ?? 0x44;
Window_SideviewUiBattleStatus.MP_GAUGE_OFFSET_Y = VisuMZ.SideviewBattleUI.Settings.StatusWindow.MpOffsetY ?? 0x0;
Window_SideviewUiBattleStatus.TP_GAUGE_SHOWN = VisuMZ.SideviewBattleUI.Settings.StatusWindow.TpShow ?? true;
Window_SideviewUiBattleStatus.TP_GAUGE_OFFSET_X = VisuMZ.SideviewBattleUI.Settings.StatusWindow.TpOffsetX ?? 0x4a;
Window_SideviewUiBattleStatus.TP_GAUGE_OFFSET_Y = VisuMZ.SideviewBattleUI.Settings.StatusWindow.TpOffsetY ?? 0x0;
Window_SideviewUiBattleStatus.AGGRO_SHOWN = VisuMZ.SideviewBattleUI.Settings.StatusWindow.AggroShow ?? true;
Window_SideviewUiBattleStatus.AGGRO_OFFSET_X = VisuMZ.SideviewBattleUI.Settings.StatusWindow.AggroOffsetX ?? 0x2c;
Window_SideviewUiBattleStatus.AGGRO_OFFSET_Y = VisuMZ.SideviewBattleUI.Settings.StatusWindow.AggroOffsetY ?? 0x0;
Window_SideviewUiBattleStatus.BOOST_SHOWN = VisuMZ.SideviewBattleUI.Settings.StatusWindow.BoostShow ?? true;
Window_SideviewUiBattleStatus.BOOST_OFFSET_X = VisuMZ.SideviewBattleUI.Settings.StatusWindow.BoostOffsetX ?? 0x34;
Window_SideviewUiBattleStatus.BOOST_OFFSET_Y = VisuMZ.SideviewBattleUI.Settings.StatusWindow.BoostOffsetY ?? 0x2;
Window_SideviewUiBattleStatus.BRAVE_SHOWN = VisuMZ.SideviewBattleUI.Settings.StatusWindow.BraveShow ?? true;
Window_SideviewUiBattleStatus.BRAVE_OFFSET_X = VisuMZ.SideviewBattleUI.Settings.StatusWindow.BraveOffsetX ?? 0x34;
Window_SideviewUiBattleStatus.BRAVE_OFFSET_Y = VisuMZ.SideviewBattleUI.Settings.StatusWindow.BraveOffsetY ?? -0x6;
Window_SideviewUiBattleStatus.BREAK_SHIELD_SHOWN = VisuMZ.SideviewBattleUI.Settings.StatusWindow.BreakShieldShow ?? true;
Window_SideviewUiBattleStatus.BREAK_SHIELD_REVERSE_SCALE = VisuMZ.SideviewBattleUI.Settings.StatusWindow.BreakShieldIgnoreScale ?? true;
Window_SideviewUiBattleStatus.BREAK_SHIELD_OFFSET_X = VisuMZ.SideviewBattleUI.Settings.StatusWindow.BreakShieldOffsetX ?? 0x14;
Window_SideviewUiBattleStatus.BREAK_SHIELD_OFFSET_Y = VisuMZ.SideviewBattleUI.Settings.StatusWindow.BreakShieldOffsetY ?? 0x14;
Window_SideviewUiBattleStatus.STATE_TOOLTIPS_SHOWN = VisuMZ.SideviewBattleUI.Settings.StatusWindow.StateTooltipsShow ?? true;
Window_SideviewUiBattleStatus.prototype.initialize = function (_0x245d50) {
  this._partyIndex = _0x245d50;
  const _0x5738fb = this.createWindowRect();
  Window_StatusBase.prototype.initialize.call(this, _0x5738fb);
  this.initMembersSideviewUi();
  this.setBackgroundType(0x2);
};
Window_SideviewUiBattleStatus.prototype.createWindowRect = function () {
  const _0x1cadbd = Window_Base.SIDEVIEW_BATTLE_UI_SCALE;
  let _0x52cf38 = Window_SideviewUiBattleStatus.WIDTH_BASE;
  let _0x5eada1 = Graphics.boxWidth - _0x52cf38;
  _0x5eada1 += Math.ceil((Graphics.width - Graphics.boxWidth) / 0x2);
  _0x52cf38 /= _0x1cadbd;
  _0x52cf38 = Math.ceil(_0x52cf38);
  _0x52cf38 += Math.ceil(Window_SideviewUiBattleStatus.WIDTH_MOVE * 0x4 / _0x1cadbd);
  let _0xd65c84 = Window_SideviewUiBattleStatus.HEIGHT_BASE;
  if (_0xd65c84 === 'auto') {
    _0xd65c84 = Window_SideviewUiBattleStatus.HEIGHT_BUFFER * 0x2;
    _0xd65c84 += this.gaugeLineHeight() * this.autoRowCount();
    _0xd65c84 = Math.ceil(_0xd65c84 * _0x1cadbd);
    _0xd65c84 /= _0x1cadbd;
  } else {
    _0xd65c84 = eval(_0xd65c84) || 0x0;
  }
  let _0xcb39aa = Math.ceil(_0xd65c84 * _0x1cadbd) * this._partyIndex;
  _0xcb39aa -= Math.ceil((Graphics.height - Graphics.boxHeight) / 0x2);
  this._homeX = _0x5eada1;
  this._activeX = this._homeX - Math.ceil(Window_SideviewUiBattleStatus.WIDTH_MOVE / _0x1cadbd);
  this._targetX = this._homeX;
  return new Rectangle(_0x5eada1, _0xcb39aa, _0x52cf38, _0xd65c84);
};
Window_SideviewUiBattleStatus.prototype.autoRowCount = function () {
  let _0x4d967b = 0x0;
  if (Window_SideviewUiBattleStatus.NAME_SHOWN) {
    _0x4d967b += 0x1;
  }
  if (Window_SideviewUiBattleStatus.HP_GAUGE_SHOWN) {
    _0x4d967b += 0x1;
  }
  if (Window_SideviewUiBattleStatus.MP_GAUGE_SHOWN) {
    _0x4d967b += 0x1;
  }
  if (Window_SideviewUiBattleStatus.TP_GAUGE_SHOWN) {
    _0x4d967b += 0x1;
  }
  if (this.isAdjustBoostPoints()) {
    _0x4d967b += 0x1;
  }
  if (this.isAdjustBravePoints()) {
    _0x4d967b += 0x1;
  }
  return _0x4d967b || 0x1;
};
Window_SideviewUiBattleStatus.prototype.updatePadding = function () {
  this.padding = 0x0;
};
Window_SideviewUiBattleStatus.prototype.refreshDimmerBitmap = function () {
  if (!this._dimmerSprite) {
    return;
  }
  if (!Window_SideviewUiBattleStatus.BG_SHOW) {
    return;
  }
  const _0x2f9b93 = this._dimmerSprite.bitmap;
  var _0x300667 = ColorManager.dimColor1();
  var _0x5448eb = ColorManager.dimColor2();
  var _0x293355 = Math.ceil(this.width / 0x4);
  var _0x2a6ee4 = this.width - _0x293355;
  var _0x50d56b = this.height;
  _0x2f9b93.resize(this.width, _0x50d56b);
  _0x2f9b93.gradientFillRect(0x0, 0x0, _0x293355, _0x50d56b, _0x5448eb, _0x300667);
  _0x2f9b93.fillRect(_0x293355, 0x0, _0x2a6ee4, _0x50d56b, _0x300667);
  this._dimmerSprite.setFrame(0x0, 0x0, _0x2a6ee4, _0x50d56b);
};
Window_SideviewUiBattleStatus.prototype.update = function () {
  Window_StatusBase.prototype.update.call(this);
  this.updateBattler();
  this.updatePosition();
};
Window_SideviewUiBattleStatus.prototype.battler = function () {
  return $gameParty.battleMembers()[this._partyIndex];
};
Window_SideviewUiBattleStatus.prototype.updateBattler = function () {
  if (this._battler === this.battler()) {
    return;
  }
  this._battler = this.battler();
  this.refresh();
  if (this._battler) {
    this.setBackgroundType(0x1);
  } else {
    this.setBackgroundType(0x2);
  }
};
Window_SideviewUiBattleStatus.prototype.updatePosition = function () {
  if (!this._battler) {
    return;
  }
  this._targetX = this.isActivePosition() ? this._activeX : this._homeX;
  const _0x3696d2 = Window_SideviewUiBattleStatus.MOVE_SPEED;
  if (this._targetX > this.x) {
    this.x = Math.min(this.x + _0x3696d2, this._targetX);
  } else {
    if (this._targetX < this.x) {
      this.x = Math.max(this.x - _0x3696d2, this._targetX);
    }
  }
};
Window_SideviewUiBattleStatus.prototype.isActivePosition = function () {
  if (this._battler === BattleManager.actor()) {
    return true;
  }
  if (this._battler === BattleManager._subject) {
    return true;
  }
  if (this._battler.isSelected()) {
    return true;
  }
  return false;
};
Window_SideviewUiBattleStatus.prototype.isStateTooltipEnabled = function () {
  return Window_SideviewUiBattleStatus.STATE_TOOLTIPS_SHOWN;
};
Window_SideviewUiBattleStatus.prototype.getStateTooltipBattler = function () {
  return this._battler;
};
Window_SideviewUiBattleStatus.prototype.isStateTooltipTouched = function () {
  const _0x528708 = new Point(TouchInput.x, TouchInput.y);
  const _0x5abb0b = this.worldTransform.applyInverse(_0x528708);
  return this.innerRect.contains(_0x5abb0b.x, _0x5abb0b.y);
};
Window_SideviewUiBattleStatus.prototype.drawAllItems = function () {
  this.hideAdditionalSprites();
  if (!this._battler) {
    return;
  }
  this.drawBasicStatus();
  this.drawCustomJS();
};
Window_SideviewUiBattleStatus.prototype.drawBasicStatus = function () {
  const _0xd6d6bb = this._battler;
  let _0x32d903 = Window_SideviewUiBattleStatus.HEIGHT_BUFFER;
  if (Imported.VisuMZ_4_BreakShields && Window_SideviewUiBattleStatus.BREAK_SHIELD_SHOWN) {
    let _0x5bd7c0 = 0x4 + Window_SideviewUiBattleStatus.BREAK_SHIELD_OFFSET_X;
    let _0x496ef0 = _0x32d903 + Window_SideviewUiBattleStatus.BREAK_SHIELD_OFFSET_Y;
    this.placeBreakShieldIcon(_0xd6d6bb, _0x5bd7c0, _0x496ef0);
    if (Window_SideviewUiBattleStatus.STATES_REVERSE_SCALE) {
      const _0x1341cd = "actor%1-breakShieldIcon".format(_0xd6d6bb.actorId());
      const _0x89bfeb = this._additionalSprites;
      if (_0x89bfeb[_0x1341cd]) {
        const _0x2ec8a1 = _0x89bfeb[_0x1341cd];
        _0x2ec8a1.scale.x = _0x2ec8a1.scale.y = 0x1 / this.scale.y;
      }
      ;
    }
  }
  if (Window_SideviewUiBattleStatus.STATES_SHOWN) {
    let _0xd647e5 = 0x4 + Window_SideviewUiBattleStatus.STATES_OFFSET_X;
    let _0x40dac4 = _0x32d903 + Window_SideviewUiBattleStatus.STATES_OFFSET_Y;
    if (Imported.VisuMZ_4_BreakShields && Window_SideviewUiBattleStatus.BREAK_SHIELD_SHOWN) {
      if (Window_SideviewUiBattleStatus.BREAK_SHIELD_REVERSE_SCALE) {
        _0x40dac4 += Math.ceil(ImageManager.iconHeight / this.scale.y);
      } else {
        _0x40dac4 += ImageManager.iconHeight;
      }
      _0x40dac4 += 0x4;
    }
    this.placeStateIcon(_0xd6d6bb, _0xd647e5, _0x40dac4);
    if (Window_SideviewUiBattleStatus.STATES_REVERSE_SCALE) {
      const _0x26615b = "actor%1-stateIcon".format(_0xd6d6bb.actorId());
      const _0x2becb6 = this._additionalSprites;
      if (_0x2becb6[_0x26615b]) {
        const _0x3612bb = _0x2becb6[_0x26615b];
        _0x3612bb.scale.x = _0x3612bb.scale.y = 0x1 / this.scale.y;
      }
      ;
    }
  }
  if (this.isShowTpbGauge()) {
    let _0x150d6a = 0x4 + Window_SideviewUiBattleStatus.TPB_OFFSET_X;
    let _0x28cdd1 = _0x32d903 + Window_SideviewUiBattleStatus.TPB_OFFSET_Y;
    this.placeTimeGauge(_0xd6d6bb, _0x150d6a, _0x28cdd1);
  }
  if (this.isShowAggro()) {
    let _0x10cb46 = 0x4 + Window_SideviewUiBattleStatus.AGGRO_OFFSET_X;
    let _0x2c4b48 = _0x32d903 + Window_SideviewUiBattleStatus.AGGRO_OFFSET_Y;
    if (this.isShowTpbGauge()) {
      _0x2c4b48 -= Sprite_Gauge.prototype.gaugeHeight() - 0x1;
    }
    this.placeAggroGauge(_0xd6d6bb, _0x10cb46, _0x2c4b48);
  }
  if (Window_SideviewUiBattleStatus.NAME_SHOWN) {
    let _0x4c40fe = 0x4 + Window_SideviewUiBattleStatus.NAME_OFFSET_X;
    let _0x56c2db = _0x32d903 + Window_SideviewUiBattleStatus.NAME_OFFSET_Y;
    if (Window_SideviewUiBattleStatus.NAME_SPRITE) {
      this.placeActorName(_0xd6d6bb, _0x4c40fe, _0x56c2db);
    } else {
      this.drawActorName(_0xd6d6bb, _0x4c40fe + 0x4, _0x56c2db - 0x6);
    }
  }
  if (Window_SideviewUiBattleStatus.NAME_SHOWN || this.isShowTpbGauge() || this.isShowAggro()) {
    _0x32d903 += this.gaugeLineHeight();
  }
  if (this.isAdjustBoostPoints()) {
    const _0x59686a = Math.ceil(ImageManager.iconHeight * Sprite_BoostContainer.ICON_SIZE_RATE);
    let _0x4a66c3 = 0x4 + Window_SideviewUiBattleStatus.BOOST_OFFSET_X;
    let _0x38178b = _0x32d903 + Window_SideviewUiBattleStatus.BOOST_OFFSET_Y;
    _0x38178b += Math.max(0x0, Math.round((this.gaugeLineHeight() - _0x59686a) / 0x2));
    this.placeBoostPoints(_0xd6d6bb, _0x4a66c3, _0x38178b);
    _0x32d903 += this.gaugeLineHeight();
  }
  if (this.isAdjustBravePoints()) {
    let _0x26a539 = 0x4 + Window_SideviewUiBattleStatus.BRAVE_OFFSET_X;
    let _0xe4ecd6 = _0x32d903 + Window_SideviewUiBattleStatus.BRAVE_OFFSET_Y;
    let _0x4a1d7c = Math.ceil(Window_SideviewUiBattleStatus.WIDTH_BASE / this.scale.x);
    this.drawActorBravePoints(_0xd6d6bb, _0x26a539, _0xe4ecd6, _0x4a1d7c, "left");
    _0x32d903 += this.gaugeLineHeight();
  }
  if (Window_SideviewUiBattleStatus.HP_GAUGE_SHOWN) {
    let _0x4ece25 = 0x4 + Window_SideviewUiBattleStatus.HP_GAUGE_OFFSET_X;
    let _0x589185 = _0x32d903 + Window_SideviewUiBattleStatus.HP_GAUGE_OFFSET_Y;
    this.placeGauge(_0xd6d6bb, 'hp', _0x4ece25, _0x589185);
    _0x32d903 += this.gaugeLineHeight();
  }
  if (Window_SideviewUiBattleStatus.MP_GAUGE_SHOWN) {
    let _0x494817 = 0x4 + Window_SideviewUiBattleStatus.MP_GAUGE_OFFSET_X;
    let _0x5bd302 = _0x32d903 + Window_SideviewUiBattleStatus.MP_GAUGE_OFFSET_Y;
    this.placeGauge(_0xd6d6bb, 'mp', _0x494817, _0x5bd302);
    _0x32d903 += this.gaugeLineHeight();
  }
  if (Window_SideviewUiBattleStatus.TP_GAUGE_SHOWN) {
    let _0x5ef39b = 0x4 + Window_SideviewUiBattleStatus.TP_GAUGE_OFFSET_X;
    let _0xec89a2 = _0x32d903 + Window_SideviewUiBattleStatus.TP_GAUGE_OFFSET_Y;
    this.placeGauge(_0xd6d6bb, 'tp', _0x5ef39b, _0xec89a2);
    _0x32d903 += this.gaugeLineHeight();
  }
};
Window_SideviewUiBattleStatus.prototype.isShowTpbGauge = function () {
  if (Imported.VisuMZ_2_BattleSystemCTB && BattleManager.isCTB()) {
    return false;
  }
  return BattleManager.isTpb() && Window_SideviewUiBattleStatus.NAME_SHOWN && Window_SideviewUiBattleStatus.TPB_SHOWN;
};
Window_SideviewUiBattleStatus.prototype.isShowAggro = function () {
  return Window_SideviewUiBattleStatus.NAME_SHOWN && Window_SideviewUiBattleStatus.AGGRO_SHOWN && Imported.VisuMZ_2_AggroControlSystem && ConfigManager.aggroGauge && VisuMZ.AggroControlSystem.Settings.Aggro.StatusGauge;
};
Window_SideviewUiBattleStatus.prototype.isAdjustBoostPoints = function () {
  return Imported.VisuMZ_3_BoostAction && Window_SideviewUiBattleStatus.BOOST_SHOWN && BattleManager.allowBoostAction();
};
Window_SideviewUiBattleStatus.prototype.isAdjustBravePoints = function () {
  return Imported.VisuMZ_2_BattleSystemBTB && Window_SideviewUiBattleStatus.BRAVE_SHOWN && BattleManager.isBTB();
};
Window_SideviewUiBattleStatus.prototype.drawCustomJS = function () {
  if (VisuMZ.SideviewBattleUI.Settings.StatusWindow.CustomUi) {
    VisuMZ.SideviewBattleUI.Settings.StatusWindow.CustomUi.call(this, this._battler);
  }
};