//=============================================================================
// VisuStella MZ - Battle System - OTB - Order Turn Battle
// VisuMZ_2_BattleSystemOTB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemOTB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemOTB = VisuMZ.BattleSystemOTB || {};
VisuMZ.BattleSystemOTB.version = 1.15;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.15] [BattleSystemOTB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_OTB_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin changes the RPG Maker MZ battle system to "Order Turn Battle",
 * a turn-based battle system where actions are executed immediately and the
 * orders for both the current and next turn are not only visible, but also
 * malleable. New mechanics are introduced where the player can manipulate the
 * turn order of an action's user or action's target in various ways they want.
 * 
 * The two Turn Orders are displayed at the top of the top of the screen to
 * give the player a clear understanding of who's turn it will be when it
 * becomes time to act, making it easier and viable for the player to formulate
 * strategies and adapt to the situation in battle.
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "otb".
 *
 * Features include all (but not limited to) the following:
 * 
 * * Utilizes the balanced AGI nature of the Default Turn Battle system.
 * * Allows for actions to execute immediately upon selection.
 * * Two Turn Order Displays appear at the top of the screen, giving the player
 *   an idea of who's turn it will be and when, for both the current turn and
 *   the next turn.
 * * Skills and Items can have an "Instant Use" effect, which allows them to
 *   perform an action immediately without using up a turn.
 * * Skills and Items can manipulate the turn order of the action's user or the
 *   action's target(s). This can apply to either the current turn or the next
 *   turn, depending on the notetags and/or action effects used.
 * * The Turn Order Display will give a preview on how turn orders will change
 *   upon specific skills and/or items being used.
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
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
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
 * Turn Order Displays
 * 
 * The Two Turn Order Displays will capture the battle's current and next turn
 * orders determined by the BattleManager. This feature does not overwrite any
 * functions, but the Turn Order Displays may or may not conflict with any
 * existing HUD elements that are already positioned on the screen. If so, you
 * can choose to offset the Turn Order Display or move it to a different part
 * of the screen through the plugin parameters.
 * 
 * ---
 * 
 * Agility
 * 
 * Agility behaves slightly different from normal when it comes to the Order
 * Turn Battle system. Aside from the first turn in battle, agility will always
 * calculate the turn order for the "Next Turn" when conducted. This means that
 * any changes to agility values will not have any effect on the next turn's
 * already established turn order.
 * 
 * However, this can be remedied by utilizing the notetags provided by this
 * plugin to alter the Next Turn orders for specific targets. In fact, for
 * skill and item "effects" that add AGI Buffs and/or Debuffs, the target's
 * turn position on the Turn Order Display will be manipulated in accordance.
 * This auto-conversion feature can be disabled in the Plugin Parameters.
 * 
 * ---
 * 
 * Action Speed
 * 
 * Because the Order Turn Battle system already calculates agility speeds
 * before selecting an action to perform, the effects of the actioon speed will
 * not work the same way it did with the default battle system. Instead, the
 * Action Speed will be sent through a formula to determine its effect on the
 * following turn, either pushing the user ahead in next turn's turn order
 * (with a positive speed value) or back (with a negative speed value).
 * 
 * This option can have its formula altered or straight up disabled in the
 * Plugin Parameters.
 * 
 * ---
 * 
 * Infinity Speed and Clamping
 * 
 * Since Action Speeds are decided in such a way, enemies that will survive a
 * stun state past two turns will have "Infinity" speed on the recovery turn,
 * allowing them to act first relative to the rest of the battle participants
 * in order to balance out the turns they've lost.
 * 
 * Enemies with "Infinity" speed cannot be overtaken through turn order
 * manipulation while they are on the "Next Turn" order. If anything, battlers
 * who shift their turn order faster will be just trailing behind them, thus
 * the "clamping" effect. However if this occurs during the "Current Turn"
 * order, all is fair game and any battler can overtake them. Plan out your
 * battle system effects carefully with these rules in mind.
 * 
 * If you do not like the idea of Infinity Speed and/or Clamping, you can turn
 * them off in the Plugin Parameters.
 * 
 * This effect does not affect stun states that last only one turn. The effect
 * will only occur with stun states that last 2 turns or more.
 * 
 * ---
 * 
 * Instant Use
 * 
 * Skills and Items can have an "Instant Use" property which allows them to be
 * used immediately without consuming a turn. This can be used for actions that
 * otherwise do not warrant a whole turn. These can be used for minor buffs,
 * debuffs, toggles, etc.
 * 
 * ---
 * 
 * Force Actions
 * 
 * Due to how OTB behaves, Force Actions have be adjusted to fit the battle
 * system. With other battle systems, force actions are added into a hidden
 * queue that would act upon after the current battler finishes his/her current
 * action. The new changes made with force actions is that they now appear on
 * the queue visibly.
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_2_PartySystem
 * 
 * In battle, the player cannot change entire parties at once from the Party
 * Command Window. The feature will be unaccessible while Order Turn Battle is
 * in play. However, the player can still change party members through the
 * Actor Command Window by having actors replace other actors. Party changing
 * is also available through battle events, Common Events, and script calls.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === General OTB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 * 
 * ---
 * 
 * <OTB Help>
 *  description
 *  description
 * </OTB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under OTB.
 * - This is primarily used if the skill behaves differently in OTB versus any
 *   other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to OTB.
 *
 * ---
 * 
 * === OTB Turn Order Display-Related Notetags ===
 * 
 * These notetags affect the OTB Turn Order Display
 * 
 * ---
 *
 * <OTB Turn Order Icon: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the battler to a specific icon.
 * - Replace 'x' with the icon index to be used.
 * 
 * ---
 *
 * <OTB Turn Order Face: filename, index>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the slot graphic used for the enemy to a specific face.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Replace 'index' with the index of the face. Index values start at 0.
 * - Example: <OTB Turn Order Face: Monster, 1>
 * 
 * ---
 * 
 * === Instant Use-Related Notetags ===
 * 
 * ---
 *
 * <OTB Instant>
 * <OTB Instant Use>
 * <OTB Instant Cast>
 *
 * - Used for: Skill, Item Notetags
 * - Allows the skill/item to be used immediately without consuming a turn.
 *
 * ---
 * 
 * === Added Action Notetags ===
 * 
 * ---
 * 
 * <OTB User Add Current Turn Actions: x>
 * <OTB User Add Next Turn Actions: x>
 * 
 * - Used for: Skill, Item Notetags
 * - Adds extra actions for the user to perform during the current/next turn.
 *   - Added actions will go towards the back of the action list.
 *   - Multi-hit skills/items will trigger this effect multiple times.
 * - Replace 'x' with a number representing the amount of actions to add.
 * 
 * ---
 * 
 * <OTB Target Add Current Turn Actions: x>
 * <OTB Target Add Next Turn Actions: x>
 * 
 * - Used for: Skill, Item Notetags
 * - Adds extra actions for the target to perform during the current/next turn.
 *   - Added actions will go towards the back of the action list.
 *   - Multi-hit skills/items will trigger this effect multiple times.
 * - Replace 'x' with a number representing the amount of actions to add.
 * 
 * ---
 * 
 * === Turn Order Manipulation-Related Notetags ===
 * 
 * ---
 *
 * <OTB User Current Turn: +x>
 * <OTB User Next Turn: +x>
 * <OTB User Follow Turn: +x>
 *
 * <OTB User Current Turn: -x>
 * <OTB User Next Turn: -x>
 * <OTB User Follow Turn: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the user's position in the turn order for the current turn, next
 *   turn, or whichever turn is following.
 * - If using the "Follow" variant, if the user has actions left for the
 *   current turn, it will affect the current turn. If not, it affects the
 *   next turn instead.
 * - Replace 'x' with a number representing the number of slots to change.
 *   - Negative numbers move the user closer to the front.
 *   - Positive numbers move the user towards the back.
 * - This effect only occurs once per skill/item use and at the start of the
 *   action when initializing the skill/item.
 *
 * ---
 *
 * <OTB Target Current Turn: +x>
 * <OTB Target Next Turn: +x>
 * <OTB Target Follow Turn: +x>
 *
 * <OTB Target Current Turn: -x>
 * <OTB Target Next Turn: -x>
 * <OTB Target Follow Turn: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the target's position in the turn order for the current turn, next
 *   turn, or whichever turn is following.
 * - If using the "Follow" variant, if the target has actions left for the
 *   current turn, it will affect the current turn. If not, it affects the
 *   next turn instead.
 * - Replace 'x' with a number representing the number of slots to change.
 *   - Negative numbers move the target closer to the front.
 *   - Positive numbers move the target towards the back.
 * - This effect will occur as many times as there are successfully connected
 *   hits for each target, meaning a target can have its turn order shifted
 *   multiple times.
 * - These are best used with single target skills/items as multi-target skills
 *   may shift multiple targets back and forth with each other if they are
 *   adjacent to one another.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change OTB Turn Order Icon
 * - Changes the icons used for the specific actor(s) on the OTB Turn Order.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Actor: Change OTB Turn Order Face
 * - Changes the faces used for the specific actor(s) on the OTB Turn Order.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Face Name:
 *   - This is the filename for the target face graphic.
 *
 *   Face Index:
 *   - This is the index for the target face graphic.
 *
 * ---
 *
 * Actor: Clear OTB Turn Order Graphic
 * - Clears the OTB Turn Order graphics for the actor(s).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change OTB Turn Order Icon
 * - Changes the icons used for the specific enemy(ies) on the OTB Turn Order.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Enemy: Change OTB Turn Order Face
 * - Changes the faces used for the specific enemy(ies) on the OTB Turn Order.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Face Name:
 *   - This is the filename for the target face graphic.
 *
 *   Face Index:
 *   - This is the index for the target face graphic.
 *
 * ---
 *
 * Enemy: Clear OTB Turn Order Graphic
 * - Clears the OTB Turn Order graphics for the enemy(ies).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: OTB Turn Order Visibility
 * - Determine the visibility of the OTB Turn Order Display.
 *
 *   Visibility:
 *   - Changes the visibility of the OTB Turn Order Display.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Conversion Settings
 * ============================================================================
 *
 * Automatically converts specific mechanics to fit OTB.
 *
 * ---
 *
 * Buffs
 * 
 *   AGI Buff => Current:
 *   - Auto-convert AGI Buff effects for Items/Skills to speed up target's
 *     current Turn Order?
 * 
 *   AGI Buff => Next:
 *   - Auto-convert AGI Buff effects for Items/Skills to speed up target's
 *     next Turn Order?
 *
 * ---
 *
 * Debuffs
 * 
 *   AGI Debuff => Current:
 *   - Auto-convert AGI Debuff effects for Items/Skills to speed up target's
 *     current Turn Order?
 * 
 *   AGI Debuff => Next:
 *   - Auto-convert AGI Debuff effects for Items/Skills to speed up target's
 *     next Turn Order?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Determines the mechanics of Battle System OTB. These range from how Action
 * Times are handled to speed.
 *
 * ---
 *
 * Action Times+
 * 
 *   Enable Action Times?:
 *   - Enable Action Times+ to have an effect on OTB?
 * 
 *     Randomize Order?:
 *     - If enabled, randomize the action order for added actions?
 *
 * ---
 *
 * Speed
 * 
 *   Allow Random Speed?:
 *   - Allow speed to be randomized base off the user's AGI?
 * 
 *   Post-Stun Infinity?:
 *   - After a 2+ turn stun states, battlers have infinity speed for their
 *     recovery turn.
 *   - Once again, this only applies to stun states that last 2+ turns.
 * 
 *     Infinity Clamp?:
 *     - Prevents turn order manipulation from going faster than infinity
 *       speed battlers.
 * 
 *   JS: Initial Speed:
 *   - Code used to calculate initial speed at the start of battle.
 * 
 *   JS: Speed => Order:
 *   - Code used to calculate how action speeds alter next turn's order.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Turn Order Display
 * ============================================================================
 *
 * Turn Order Display settings used for Battle System OTB. These adjust how the
 * two visible turn orders appears in-game.
 *
 * ---
 *
 * General
 * 
 *   Display Position:
 *   - Select where the Turn Order will appear on the screen.
 *     - Top
 *     - Bottom
 * 
 *     Offset X:
 *     - How much to offset the X coordinate by.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - How much to offset the Y coordinate by.
 *     - Negative: up. Positive: down.
 * 
 *   Reposition for Help?:
 *   - If the display position is at the top, reposition the display when the
 *     help window is open?
 * 
 *     Offset X:
 *     - Reposition the display's X coordinates by this much when the Help
 *       Window is visible.
 * 
 *     Offset Y:
 *     - Reposition the display's Y coordinates by this much when the Help
 *       Window is visible.
 * 
 *   Forward Direction:
 *   - Decide on the direction of the Turn Order.
 *     - Left to Right
 *     - Right to Left
 * 
 *   Subject Distance:
 *   - How far do you want the currently active battler to distance itself from
 *     the rest of the Turn Order?
 * 
 *   Screen Buffer:
 *   - What distance do you want the display to be away from the edge of the
 *     screen by?
 * 
 * ---
 * 
 * UI Background
 * 
 *   Background Style:
 *   - Select the style you want for the background.
 *     - fill
 *     - gradient
 *     - image
 *     - transparent
 * 
 *   Image Filename:
 *   - When using the "image" style, select an image from /img/system/ as the
 *     background image.
 * 
 *     Offset X:
 *     - How much do you want to offset the Background Image's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the Background Image's Y position?
 * 
 * ---
 * 
 * UI Text
 * 
 *   Font Size:
 *   - The font size used for parameter values.
 * 
 *   Active Battler Text:
 *   - Text used to display the active battler.
 *   - This text will always be center aligned.
 * 
 *     Offset X:
 *     - How much do you want to offset the text's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the text's Y position?
 * 
 *   Current Turn Text:
 *   - Text used to display the current turn.
 * 
 *     Offset X:
 *     - How much do you want to offset the text's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the text's Y position?
 * 
 *   Next Turn Text:
 *   - Text used to display the next turn.
 * 
 *     Offset X:
 *     - How much do you want to offset the text's X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the text's Y position?
 * 
 *   Text Align:
 *   - Text alignment for the Current and Next Turn texts?
 *     - auto
 *     - left
 *     - center
 *     - right
 * 
 * ---
 * 
 * Slots
 * 
 *   Width:
 *   - How many pixels wide should the slots be on the Turn Order display?
 * 
 *   Height:
 *   - How many pixels tall should the slots be on the Turn Order display?
 * 
 *   Preview Scale:
 *   - How much do you want to scale the preview sprites by?
 *   - Use a number between 0 and 1 for the best results.
 * 
 *     Offset X:
 *     - How much do you want to offset the Preview Sprites' X position?
 * 
 *     Offset Y:
 *     - How much do you want to offset the Preview Sprites' Y position?
 * 
 *   Update Frames:
 *   - How many frames should it take for the slots to update their
 *     positions by?
 *
 * ---
 *
 * Slot Border
 * 
 *   Show Border?:
 *   - Show borders for the slot sprites?
 * 
 *   Border Thickness:
 *   - How many pixels thick should the colored portion of the border be?
 * 
 *   Actors
 *   Enemies
 * 
 *     Border Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *       Preview Version:
 *       - A different setting is used for the preview version.
 * 
 *     Border Skin:
 *     - Optional. Place a skin on the actor/enemy borders instead of
 *       rendering them?
 * 
 *       Preview Version:
 *       - A different setting is used for the preview version.
 * 
 * ---
 * 
 * Slot Sprites
 * 
 *   Actors
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the actor graphic.
 *     - Face Graphic - Show the actor's face.
 *     - Icon - Show a specified icon.
 *     - Sideview Actor - Show the actor's sideview battler.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for actors by default?
 * 
 *   Enemies
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the enemy graphic.
 *     - Face Graphic - Show a specified face graphic.
 *     - Icon - Show a specified icon.
 *     - Enemy - Show the enemy's graphic or sideview battler.
 * 
 *     Default Face Name:
 *     - Use this default face graphic if there is no specified face.
 * 
 *     Default Face Index:
 *     - Use this default face index if there is no specified index.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for enemies by default?
 * 
 *     Match Hue?:
 *     - Match the hue for enemy battlers?
 *     - Does not apply if there's a sideview battler.
 *
 * ---
 *
 * Slot Letter
 * 
 *   Show Enemy Letter?:
 *   - Show the enemy's letter on the slot sprite?
 * 
 *   Font Name:
 *   - The font name used for the text of the Letter.
 *   - Leave empty to use the default game's font.
 * 
 *   Font Size:
 *   - The font size used for the text of the Letter.
 *
 * ---
 *
 * Slot Background
 * 
 *   Show Background?:
 *   - Show the background on the slot sprite?
 * 
 *   Actors
 *   Enemies
 * 
 *     Background Color 1:
 *     Background Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *       Preview Version:
 *       - A different setting is used for the preview version.
 * 
 *     Background Skin:
 *     - Optional. Use a skin for the actor background instead of
 *       rendering them?
 * 
 *       Preview Version:
 *       - A different setting is used for the preview version.
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
 * Version 1.15: May 16, 2024
 * * Feature Update!
 * ** Direct removal of stun states will restore actions for battlers for
 *    current turns and follow up turns. Update made by Olivia.
 * 
 * Version 1.14: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused turn order glitches with Action Times+ that
 *    aren't at 100% value. Fix made by Olivia.
 * ** Fixed a bug that caused added Action Times+ to not trigger on actors that
 *    have already exhausted their current turns if raised due to a state.
 *    Fix made by Olivia.
 * 
 * Version 1.13: January 20, 2023
 * * Bug Fixes!
 * ** Fixed a bug where the Forced Action of a battler is not used properly.
 *    Fix made by Arisu.
 * 
 * Version 1.12: December 15, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: August 18, 2022
 * * Bug Fixes!
 * ** Fixed bugs that caused the OTB Turn Order faces and icons to not change
 *    properly for actors and enemies.
 * 
 * Version 1.10: July 7, 2022
 * * Feature Update!
 * ** When the "Recover All" event command revives a dead unit, that revived
 *    unit can gain actions back if all other conditions are met. Update made
 *    by Olivia.
 * 
 * Version 1.09: June 2, 2022
 * * Documentation Update!
 * ** Added "Force Actions" to "Major Updates" section.
 * *** Due to how OTB behaves, Force Actions have be adjusted to fit the battle
 *     system. With other battle systems, force actions are added into a hidden
 *     queue that would act upon after the current battler finishes his/her
 *     current action. The new changes made with force actions is that they now
 *     appear on the queue visibly.
 * * Bug Fixes!
 * ** Fixed a bug that caused Forced Actions to not work properly while in OTB.
 *    Changes made to Forced Actions will now insert new actions at the front
 *    of the current action queue. Fix made by Olivia.
 * 
 * Version 1.08: March 10, 2022
 * * Feature Update!
 * ** OTB Instant Actions should now appear in the turn order in a more
 *    sensible fashion. Update made by Olivia.
 * 
 * Version 1.07: February 24, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: November 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Olivia:
 * *** <OTB User Add Current Turn Actions: x>
 * *** <OTB User Add Next Turn Actions: x>
 * *** <OTB Target Add Current Turn Actions: x>
 * *** <OTB Target Add Next Turn Actions: x>
 * **** Adds extra actions for the user/target to perform during the
 *      current/next turn.
 * **** Added actions will go towards the back of the action list.
 * **** Multi-hit skills/items will trigger this effect multiple times.
 * 
 * Version 1.05: October 28, 2021
 * * Bug Fixes!
 * ** Turn Order display will no longer appear at differing X and Y positions
 *    when using specific battle layouts. Update made by Olivia.
 * 
 * Version 1.04: August 6, 2021
 * * Bug Fixes!
 * ** Enemies with multiple actions will no longer step forward when it's not
 *    their turn. Fix made by Olivia.
 * 
 * Version 1.03: June 25, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: April 16, 2021
 * * Bug Fixes!
 * ** Post-stun infinity clamping should now be adjusted properly for
 *    previewing turn order changes.
 * 
 * Version 1.01: April 9, 2021
 * * Bug Fixes!
 * ** Subsequent battles will properly reset the turn order. Fix by Olivia.
 * 
 * Version 1.00 Official Release Date: April 26, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OtbTurnOrderActorIcon
 * @text Actor: Change OTB Turn Order Icon
 * @desc Changes the icons used for the specific actor(s) on the OTB Turn Order.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 84
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OtbTurnOrderActorFace
 * @text Actor: Change OTB Turn Order Face
 * @desc Changes the faces used for the specific actor(s) on the OTB Turn Order.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Actor1
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OtbTurnOrderClearActorGraphic
 * @text Actor: Clear OTB Turn Order Graphic
 * @desc Clears the OTB Turn Order graphics for the actor(s).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OtbTurnOrderEnemyIcon
 * @text Enemy: Change OTB Turn Order Icon
 * @desc Changes the icons used for the specific enemy(ies) on the OTB Turn Order.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 298
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OtbTurnOrderEnemyFace
 * @text Enemy: Change OTB Turn Order Face
 * @desc Changes the faces used for the specific enemy(ies) on the OTB Turn Order.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Monster
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @parent EnemySprite
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OtbTurnOrderClearEnemyGraphic
 * @text Enemy: Clear OTB Turn Order Graphic
 * @desc Clears the OTB Turn Order graphics for the enemy(ies).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemTurnOrderVisibility
 * @text System: OTB Turn Order Visibility
 * @desc Determine the visibility of the OTB Turn Order Display.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the OTB Turn Order Display.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param BattleSystemOTB
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Conversion:struct
 * @text Conversion Settings
 * @type struct<Conversion>
 * @desc Automatically converts specific mechanics to fit OTB.
 * @default {"Buffs":"","ConvertAgiBuffCurrent:eval":"true","ConvertAgiBuffNext:eval":"true","Debuffs":"","ConvertAgiDebuffCurrent:eval":"true","ConvertAgiDebuffNext:eval":"true"}
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Determines the mechanics of Battle System OTB.
 * @default {"Actions":"","EnableActionTimes:eval":"true","RandomizeActionTimesOrder:eval":"true","Speed":"","AllowRandomSpeed:eval":"false","PostStunInfinitySpeed:eval":"true","InfinityClamp:eval":"true","InitialSpeedJS:func":"\"// Declare Constants\\nconst agi = this.subject().agi;\\n\\n// Create Speed\\nlet speed = agi;\\nif (this.allowRandomSpeed()) {\\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\\n}\\n\\n// Return Speed\\nreturn speed;\"","ConvertSpeedJS:func":"\"// Declare Constants\\nconst item = this.item();\\nconst modifier = 50;\\n\\n// Calculate Order Slots Changed\\nlet change = item.speed / (-modifier);\\nchange = (change >= 0) ? Math.ceil(change) : Math.floor(change);\\n\\n// Return Change\\nreturn change || 0;\""}
 *
 * @param TurnOrder:struct
 * @text Turn Order Display
 * @type struct<TurnOrder>
 * @desc Turn Order Display settings used for Battle System OTB.
 * @default {"General":"","DisplayPosition:str":"top","DisplayOffsetX:num":"0","DisplayOffsetY:num":"0","RepositionTopForHelp:eval":"true","RepositionTopHelpX:num":"+0","RepositionTopHelpY:num":"+96","RepositionLogWindow:eval":"true","LogWindowOffsetY:num":"+0","OrderDirection:eval":"false","SubjectDistance:num":"16","ScreenBuffer:num":"36","UiBackground":"","BgDimStyle:str":"gradient","BgImageFilename:str":"","BgImageOffsetX:num":"+0","BgImageOffsetY:num":"+0","UiText":"","UiFontSize:num":"16","UiSubjectText:str":"★","UiSubjectOffsetX:num":"+0","UiSubjectOffsetY:num":"-6","UiCurrentText:str":"✦CURRENT TURN✦","UiCurrentOffsetX:num":"+6","UiCurrentOffsetY:num":"-6","UiNextText:str":"✧NEXT TURN✧","UiNextOffsetX:num":"+6","UiNextOffsetY:num":"-6","UiAlignment:str":"auto","Slots":"","SpriteThin:num":"72","SpriteLength:num":"72","PreviewScale:num":"0.5","PreviewOffsetX:num":"+0","PreviewOffsetY:num":"+0","UpdateFrames:num":"24","Border":"","ShowMarkerBorder:eval":"true","BorderActor":"","ActorBorderColor:str":"4","PreviewActorBorderColor:str":"0","ActorSystemBorder:str":"","PreviewActorSystemBorder:str":"","BorderEnemy":"","EnemyBorderColor:str":"2","PreviewEnemyBorderColor:str":"0","EnemySystemBorder:str":"","PreviewEnemySystemBorder:str":"","BorderThickness:num":"2","Sprite":"","ActorSprite":"","ActorBattlerType:str":"face","ActorBattlerIcon:num":"84","EnemySprite":"","EnemyBattlerType:str":"enemy","EnemyBattlerFaceName:str":"Monster","EnemyBattlerFaceIndex:num":"1","EnemyBattlerIcon:num":"298","EnemyBattlerMatchHue:eval":"true","Letter":"","EnemyBattlerDrawLetter:eval":"true","EnemyBattlerFontFace:str":"","EnemyBattlerFontSize:num":"16","Background":"","ShowMarkerBg:eval":"true","BackgroundActor":"","ActorBgColor1:str":"19","PreviewActorBgColor1:str":"19","ActorBgColor2:str":"9","PreviewActorBgColor2:str":"0","ActorSystemBg:str":"","PreviewActorSystemBg:str":"","BackgroundEnemy":"","EnemyBgColor1:str":"19","PreviewEnemyBgColor1:str":"19","EnemyBgColor2:str":"18","PreviewEnemyBgColor2:str":"0","EnemySystemBg:str":"","PreviewEnemySystemBg:str":""}
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
 * Conversion Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Conversion:
 * 
 * @param Buffs
 *
 * @param ConvertAgiBuffCurrent:eval
 * @text AGI Buff => Current
 * @parent Buffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Buff effects for Items/Skills to speed up target's current Turn Order?
 * @default true
 *
 * @param ConvertAgiBuffNext:eval
 * @text AGI Buff => Next
 * @parent Buffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Buff effects for Items/Skills to speed up target's next Turn Order?
 * @default true
 * 
 * @param Debuffs
 *
 * @param ConvertAgiDebuffCurrent:eval
 * @text AGI Debuff => Current
 * @parent Debuffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Debuff effects for Items/Skills to speed up target's current Turn Order?
 * @default true
 *
 * @param ConvertAgiDebuffNext:eval
 * @text AGI Debuff => Next
 * @parent Debuffs
 * @type boolean
 * @on Convert
 * @off Don't Convert
 * @desc Auto-convert AGI Debuff effects for Items/Skills to speed up target's next Turn Order?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param Actions
 * @text Action Times+
 *
 * @param EnableActionTimes:eval
 * @text Enable Action Times?
 * @parent Actions
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable Action Times+ to have an effect on OTB?
 * @default true
 *
 * @param RandomizeActionTimesOrder:eval
 * @text Randomize Order?
 * @parent EnableActionTimes:eval
 * @type boolean
 * @on Randomize
 * @off Clumped
 * @desc If enabled, randomize the action order for added actions?
 * @default true
 * 
 * @param Speed
 *
 * @param AllowRandomSpeed:eval
 * @text Allow Random Speed?
 * @parent Speed
 * @type boolean
 * @on Allow
 * @off Disable
 * @desc Allow speed to be randomized base off the user's AGI?
 * @default false
 *
 * @param PostStunInfinitySpeed:eval
 * @text Post-Stun Infinity?
 * @parent Speed
 * @type boolean
 * @on Infinity
 * @off Normal
 * @desc After a 2+ turn stun states, battlers have infinity speed for their recovery turn.
 * @default true
 *
 * @param InfinityClamp:eval
 * @text Infinity Clamp?
 * @parent PostStunInfinitySpeed:eval
 * @type boolean
 * @on Enable Clamp
 * @off Disable Clamp
 * @desc Prevents turn order manipulation from going faster than infinity speed battlers.
 * @default true
 *
 * @param InitialSpeedJS:func
 * @text JS: Initial Speed
 * @parent Speed
 * @type note
 * @desc Code used to calculate initial speed at the start of battle.
 * @default "// Declare Constants\nconst agi = this.subject().agi;\n\n// Create Speed\nlet speed = agi;\nif (this.allowRandomSpeed()) {\n    speed += Math.randomInt(Math.floor(5 + agi / 4));\n}\n\n// Return Speed\nreturn speed;"
 *
 * @param ConvertSpeedJS:func
 * @text JS: Speed => Order
 * @parent Speed
 * @type note
 * @desc Code used to calculate how action speeds alter next turn's order.
 * @default "// Declare Constants\nconst item = this.item();\nconst modifier = 50;\n\n// Calculate Order Slots Changed\nlet change = item.speed / (-modifier);\nchange = (change >= 0) ? Math.ceil(change) : Math.floor(change);\n\n// Return Change\nreturn change || 0;"
 * 
 */
/* ----------------------------------------------------------------------------
 * Turn Order Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TurnOrder:
 *
 * @param General
 *
 * @param DisplayPosition:str
 * @text Display Position
 * @parent General
 * @type select
 * @option top
 * @option bottom
 * @desc Select where the Turn Order will appear on the screen.
 * @default top
 * 
 * @param DisplayOffsetX:num
 * @text Offset X
 * @parent DisplayPosition:str
 * @desc How much to offset the X coordinate by.
 * Negative: left. Positive: right.
 * @default 0
 * 
 * @param DisplayOffsetY:num
 * @text Offset Y
 * @parent DisplayPosition:str
 * @desc How much to offset the Y coordinate by.
 * Negative: up. Positive: down.
 * @default 0
 *
 * @param RepositionTopForHelp:eval
 * @text Reposition for Help?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * display when the help window is open?
 * @default true
 *
 * @param RepositionTopHelpX:num
 * @text Offset X
 * @parent RepositionTopForHelp:eval
 * @desc Reposition the display's X coordinates by this much when
 * the Help Window is visible.
 * @default +0
 *
 * @param RepositionTopHelpY:num
 * @text Offset Y
 * @parent RepositionTopForHelp:eval
 * @desc Reposition the display's Y coordinates by this much when
 * the Help Window is visible.
 * @default +96
 *
 * @param RepositionLogWindow:eval
 * @text Reposition Log?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * Battle Log Window to be lower?
 * @default true
 *
 * @param LogWindowOffsetY:num
 * @text Offset Y
 * @parent RepositionLogWindow:eval
 * @desc How much do you want to offset the Log Window's Y position?
 * @default +0
 *
 * @param OrderDirection:eval
 * @text Forward Direction
 * @parent General
 * @type boolean
 * @on Left to Right
 * @off Right to Left
 * @desc Decide on the direction of the Turn Order.
 * @default false
 *
 * @param SubjectDistance:num
 * @text Subject Distance
 * @parent General
 * @type number
 * @desc How far do you want the currently active battler to
 * distance itself from the rest of the Turn Order?
 * @default 16
 *
 * @param ScreenBuffer:num
 * @text Screen Buffer
 * @parent General
 * @type number
 * @desc What distance do you want the display to be away
 * from the edge of the screen by?
 * @default 36
 *
 * @param UiBackground
 * @text UI Background
 *
 * @param BgDimStyle:str
 * @text Background Style
 * @parent UiBackground
 * @type select
 * @option fill
 * @option gradient
 * @option image
 * @option transparent
 * @desc Select the style you want for the background.
 * @default gradient
 *
 * @param BgImageFilename:str
 * @text Image Filename
 * @parent UiBackground
 * @type file
 * @dir img/system/
 * @desc When using the "image" style, select an image from /img/system/ as the background image.
 * @default 
 *
 * @param BgImageOffsetX:num
 * @text Offset X
 * @parent BgImageFilename:str
 * @desc How much do you want to offset the Background Image's X position?
 * @default +0
 *
 * @param BgImageOffsetY:num
 * @text Offset Y
 * @parent BgImageFilename:str
 * @desc How much do you want to offset the Background Image's Y position?
 * @default +0
 *
 * @param UiText
 * @text UI Text
 *
 * @param UiFontSize:num
 * @text Font Size
 * @parent UiText
 * @desc The font size used for parameter values.
 * @default 16
 *
 * @param UiSubjectText:str
 * @text Active Battler Text
 * @parent UiText
 * @desc Text used to display the active battler.
 * This text will always be center aligned.
 * @default ★
 *
 * @param UiSubjectOffsetX:num
 * @text Offset X
 * @parent UiSubjectText:str
 * @desc How much do you want to offset the text's X position?
 * @default +0
 *
 * @param UiSubjectOffsetY:num
 * @text Offset Y
 * @parent UiSubjectText:str
 * @desc How much do you want to offset the text's Y position?
 * @default -6
 *
 * @param UiCurrentText:str
 * @text Current Turn Text
 * @parent UiText
 * @desc Text used to display the current turn.
 * @default ✦CURRENT TURN✦
 *
 * @param UiCurrentOffsetX:num
 * @text Offset X
 * @parent UiCurrentText:str
 * @desc How much do you want to offset the text's X position?
 * @default +6
 *
 * @param UiCurrentOffsetY:num
 * @text Offset Y
 * @parent UiCurrentText:str
 * @desc How much do you want to offset the text's Y position?
 * @default -6
 *
 * @param UiNextText:str
 * @text Next Turn Text
 * @parent UiText
 * @desc Text used to display the next turn.
 * @default ✧NEXT TURN✧
 *
 * @param UiNextOffsetX:num
 * @text Offset X
 * @parent UiNextText:str
 * @desc How much do you want to offset the text's X position?
 * @default +6
 *
 * @param UiNextOffsetY:num
 * @text Offset Y
 * @parent UiNextText:str
 * @desc How much do you want to offset the text's Y position?
 * @default -6
 *
 * @param UiAlignment:str
 * @text Text Align
 * @parent UiText
 * @type combo
 * @option auto
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Current and Next Turn texts?
 * @default auto
 * 
 * @param Slots
 *
 * @param SpriteThin:num
 * @text Width
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels wide should the slots be on the
 * Turn Order display?
 * @default 72
 *
 * @param SpriteLength:num
 * @text Height
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many pixels tall should the slots be on the
 * Turn Order display?
 * @default 72
 *
 * @param PreviewScale:num
 * @text Preview Scale
 * @parent Slots
 * @desc How much do you want to scale the preview sprites by?
 * Use a number between 0 and 1 for the best results.
 * @default 0.5
 *
 * @param PreviewOffsetX:num
 * @text Offset X
 * @parent PreviewScale:num
 * @desc How much do you want to offset the Preview Sprites' X position?
 * @default +0
 *
 * @param PreviewOffsetY:num
 * @text Offset Y
 * @parent PreviewScale:num
 * @desc How much do you want to offset the Preview Sprites' Y position?
 * @default +0
 *
 * @param UpdateFrames:num
 * @text Update Frames
 * @parent Slots
 * @type number
 * @min 1
 * @desc How many frames should it take for the slots to
 * update their positions by?
 * @default 24
 *
 * @param Border
 * @text Slot Border
 *
 * @param ShowMarkerBorder:eval
 * @text Show Border?
 * @parent Border
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show borders for the slot sprites?
 * @default true
 *
 * @param BorderThickness:num
 * @text Border Thickness
 * @parent Markers
 * @type number
 * @min 1
 * @desc How many pixels thick should the colored portion of the border be?
 * @default 2
 *
 * @param BorderActor
 * @text Actors
 * @parent Border
 *
 * @param ActorBorderColor:str
 * @text Border Color
 * @parent BorderActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 4
 *
 * @param PreviewActorBorderColor:str
 * @text Preview Version
 * @parent ActorBorderColor:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ActorSystemBorder:str
 * @text Border Skin
 * @parent BorderActor
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the actor borders instead of rendering them?
 * @default 
 *
 * @param PreviewActorSystemBorder:str
 * @text Preview Version
 * @parent ActorSystemBorder:str
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the actor borders instead of rendering them?
 * @default 
 *
 * @param BorderEnemy
 * @text Enemies
 * @parent Border
 *
 * @param EnemyBorderColor:str
 * @text Border Color
 * @parent BorderEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param PreviewEnemyBorderColor:str
 * @text Preview Version
 * @parent EnemyBorderColor:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param EnemySystemBorder:str
 * @text Border Skin
 * @parent BorderEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the enemy borders instead of rendering them?
 * @default 
 *
 * @param PreviewEnemySystemBorder:str
 * @text Preview Version
 * @parent EnemySystemBorder:str
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the enemy borders instead of rendering them?
 * @default 
 *
 * @param Sprite
 * @text Slot Sprites
 *
 * @param ActorSprite
 * @text Actors
 * @parent Sprite
 *
 * @param ActorBattlerType:str
 * @text Sprite Type
 * @parent ActorSprite
 * @type select
 * @option Face Graphic - Show the actor's face.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Sideview Actor - Show the actor's sideview battler.
 * @value svactor
 * @desc Select the type of sprite used for the actor graphic.
 * @default face
 *
 * @param ActorBattlerIcon:num
 * @text Default Icon
 * @parent ActorSprite
 * @desc Which icon do you want to use for actors by default?
 * @default 84
 *
 * @param EnemySprite
 * @text Enemies
 * @parent Sprite
 *
 * @param EnemyBattlerType:str
 * @text Sprite Type
 * @parent EnemySprite
 * @type select
 * @option Face Graphic - Show a specified face graphic.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Enemy - Show the enemy's graphic or sideview battler.
 * @value enemy
 * @desc Select the type of sprite used for the enemy graphic.
 * @default enemy
 *
 * @param EnemyBattlerFaceName:str
 * @text Default Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc Use this default face graphic if there is no specified face.
 * @default Monster
 *
 * @param EnemyBattlerFaceIndex:num
 * @text Default Face Index
 * @parent EnemySprite
 * @type number
 * @desc Use this default face index if there is no specified index.
 * @default 1
 *
 * @param EnemyBattlerIcon:num
 * @text Default Icon
 * @parent EnemySprite
 * @desc Which icon do you want to use for enemies by default?
 * @default 298
 *
 * @param EnemyBattlerMatchHue:eval
 * @text Match Hue?
 * @parent EnemySprite
 * @type boolean
 * @on Match
 * @off Don't Match
 * @desc Match the hue for enemy battlers?
 * Does not apply if there's a sideview battler.
 * @default true
 *
 * @param Letter
 * @text Slot Letter
 *
 * @param EnemyBattlerDrawLetter:eval
 * @text Show Enemy Letter?
 * @parent Letter
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the enemy's letter on the slot sprite?
 * @default true
 *
 * @param EnemyBattlerFontFace:str
 * @text Font Name
 * @parent Letter
 * @desc The font name used for the text of the Letter.
 * Leave empty to use the default game's font.
 * @default 
 *
 * @param EnemyBattlerFontSize:num
 * @text Font Size
 * @parent Letter
 * @min 1
 * @desc The font size used for the text of the Letter.
 * @default 16
 *
 * @param Background
 * @text Slot Background
 *
 * @param ShowMarkerBg:eval
 * @text Show Background?
 * @parent Background
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the background on the slot sprite?
 * @default true
 *
 * @param BackgroundActor
 * @text Actors
 * @parent Background
 *
 * @param ActorBgColor1:str
 * @text Background Color 1
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param PreviewActorBgColor1:str
 * @text Preview Version
 * @parent ActorBgColor1:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param ActorBgColor2:str
 * @text Background Color 2
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 9
 *
 * @param PreviewActorBgColor2:str
 * @text Preview Version
 * @parent ActorBgColor2:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ActorSystemBg:str
 * @text Background Skin
 * @parent BackgroundActor
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the actor background instead of rendering them?
 * @default 
 *
 * @param PreviewActorSystemBg:str
 * @text Preview Version
 * @parent ActorSystemBg:str
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the actor background instead of rendering them?
 * @default 
 *
 * @param BackgroundEnemy
 * @text Enemies
 * @parent Background
 *
 * @param EnemyBgColor1:str
 * @text Background Color 1
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param PreviewEnemyBgColor1:str
 * @text Preview Version
 * @parent EnemyBgColor1:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param EnemyBgColor2:str
 * @text Background Color 2
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param PreviewEnemyBgColor2:str
 * @text Preview Version
 * @parent EnemyBgColor2:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param EnemySystemBg:str
 * @text Background Skin
 * @parent BackgroundEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the enemy background instead of rendering them?
 * @default 
 *
 * @param PreviewEnemySystemBg:str
 * @text Preview Version
 * @parent EnemySystemBg:str
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the enemy background instead of rendering them?
 * @default 
 *
 */
//=============================================================================

var tier = tier || 0x0;
var dependencies = ["VisuMZ_0_CoreEngine", "VisuMZ_1_BattleCore"];
var pluginData = $plugins.filter(function (_0x104c5b) {
  return _0x104c5b.status && _0x104c5b.description.includes("[BattleSystemOTB]");
})[0x0];
VisuMZ.BattleSystemOTB.Settings = VisuMZ.BattleSystemOTB.Settings || {};
VisuMZ.ConvertParams = function (_0x5721eb, _0x332229) {
  for (const _0x87ce2 in _0x332229) {
    if (_0x87ce2.match(/(.*):(.*)/i)) {
      const _0x2cb40c = String(RegExp.$1);
      const _0x224143 = String(RegExp.$2).toUpperCase().trim();
      let _0x334985;
      let _0xe9829e;
      let _0x159212;
      switch (_0x224143) {
        case 'NUM':
          _0x334985 = _0x332229[_0x87ce2] !== '' ? Number(_0x332229[_0x87ce2]) : 0x0;
          break;
        case "ARRAYNUM":
          _0xe9829e = _0x332229[_0x87ce2] !== '' ? JSON.parse(_0x332229[_0x87ce2]) : [];
          _0x334985 = _0xe9829e.map(_0x1580c8 => Number(_0x1580c8));
          break;
        case "EVAL":
          _0x334985 = _0x332229[_0x87ce2] !== '' ? eval(_0x332229[_0x87ce2]) : null;
          break;
        case "ARRAYEVAL":
          _0xe9829e = _0x332229[_0x87ce2] !== '' ? JSON.parse(_0x332229[_0x87ce2]) : [];
          _0x334985 = _0xe9829e.map(_0x2672ce => eval(_0x2672ce));
          break;
        case "JSON":
          _0x334985 = _0x332229[_0x87ce2] !== '' ? JSON.parse(_0x332229[_0x87ce2]) : '';
          break;
        case "ARRAYJSON":
          _0xe9829e = _0x332229[_0x87ce2] !== '' ? JSON.parse(_0x332229[_0x87ce2]) : [];
          _0x334985 = _0xe9829e.map(_0x1ec6a5 => JSON.parse(_0x1ec6a5));
          break;
        case 'FUNC':
          _0x334985 = _0x332229[_0x87ce2] !== '' ? new Function(JSON.parse(_0x332229[_0x87ce2])) : new Function("return 0");
          break;
        case "ARRAYFUNC":
          _0xe9829e = _0x332229[_0x87ce2] !== '' ? JSON.parse(_0x332229[_0x87ce2]) : [];
          _0x334985 = _0xe9829e.map(_0x241118 => new Function(JSON.parse(_0x241118)));
          break;
        case 'STR':
          _0x334985 = _0x332229[_0x87ce2] !== '' ? String(_0x332229[_0x87ce2]) : '';
          break;
        case "ARRAYSTR":
          _0xe9829e = _0x332229[_0x87ce2] !== '' ? JSON.parse(_0x332229[_0x87ce2]) : [];
          _0x334985 = _0xe9829e.map(_0x3274c6 => String(_0x3274c6));
          break;
        case 'STRUCT':
          _0x159212 = _0x332229[_0x87ce2] !== '' ? JSON.parse(_0x332229[_0x87ce2]) : {};
          _0x334985 = VisuMZ.ConvertParams({}, _0x159212);
          break;
        case 'ARRAYSTRUCT':
          _0xe9829e = _0x332229[_0x87ce2] !== '' ? JSON.parse(_0x332229[_0x87ce2]) : [];
          _0x334985 = _0xe9829e.map(_0x4cfaf6 => VisuMZ.ConvertParams({}, JSON.parse(_0x4cfaf6)));
          break;
        default:
          continue;
      }
      _0x5721eb[_0x2cb40c] = _0x334985;
    }
  }
  return _0x5721eb;
};
(_0xaeec0d => {
  const _0x1ffcc8 = _0xaeec0d.name;
  for (const _0x293a79 of dependencies) {
    if (!Imported[_0x293a79]) {
      alert("%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.".format(_0x1ffcc8, _0x293a79));
      SceneManager.exit();
      break;
    }
  }
  const _0x2d1df5 = _0xaeec0d.description;
  if (_0x2d1df5.match(/\[Version[ ](.*?)\]/i)) {
    const _0x300e9f = Number(RegExp.$1);
    if (_0x300e9f !== VisuMZ.BattleSystemOTB.version) {
      alert("%1's version does not match plugin's. Please update it in the Plugin Manager.".format(_0x1ffcc8, _0x300e9f));
      SceneManager.exit();
    }
  }
  if (_0x2d1df5.match(/\[Tier[ ](\d+)\]/i)) {
    const _0x9743fd = Number(RegExp.$1);
    if (_0x9743fd < tier) {
      alert("%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.".format(_0x1ffcc8, _0x9743fd, tier));
      SceneManager.exit();
    } else {
      tier = Math.max(_0x9743fd, tier);
    }
  }
  VisuMZ.ConvertParams(VisuMZ.BattleSystemOTB.Settings, _0xaeec0d.parameters);
})(pluginData);
PluginManager.registerCommand(pluginData.name, "OtbTurnOrderActorIcon", _0x375a83 => {
  VisuMZ.ConvertParams(_0x375a83, _0x375a83);
  const _0x590b14 = _0x375a83.Actors;
  const _0x395af4 = _0x375a83.IconIndex;
  for (const _0x5e7a72 of _0x590b14) {
    const _0x5f2839 = $gameActors.actor(_0x5e7a72);
    if (!_0x5f2839) {
      continue;
    }
    _0x5f2839._otbTurnOrderGraphicType = "icon";
    _0x5f2839._otbTurnOrderIconIndex = _0x395af4;
  }
});
PluginManager.registerCommand(pluginData.name, 'OtbTurnOrderActorFace', _0x18ab2d => {
  VisuMZ.ConvertParams(_0x18ab2d, _0x18ab2d);
  const _0x2027ec = _0x18ab2d.Actors;
  const _0x507ce1 = _0x18ab2d.FaceName;
  const _0x5a94f9 = _0x18ab2d.FaceIndex;
  for (const _0x56b65c of _0x2027ec) {
    const _0x589e8d = $gameActors.actor(_0x56b65c);
    if (!_0x589e8d) {
      continue;
    }
    _0x589e8d._otbTurnOrderGraphicType = "face";
    _0x589e8d._otbTurnOrderFaceName = _0x507ce1;
    _0x589e8d._otbTurnOrderFaceIndex = _0x5a94f9;
  }
});
PluginManager.registerCommand(pluginData.name, 'OtbTurnOrderClearActorGraphic', _0x55d5cf => {
  VisuMZ.ConvertParams(_0x55d5cf, _0x55d5cf);
  const _0x1b27da = _0x55d5cf.Actors;
  for (const _0x1cebfb of _0x1b27da) {
    const _0x2c3cba = $gameActors.actor(_0x1cebfb);
    if (!_0x2c3cba) {
      continue;
    }
    _0x2c3cba.clearTurnOrderOTBGraphics();
  }
});
PluginManager.registerCommand(pluginData.name, "OtbTurnOrderEnemyIcon", _0xb6f399 => {
  VisuMZ.ConvertParams(_0xb6f399, _0xb6f399);
  const _0x2d438e = _0xb6f399.Enemies;
  const _0x3ed8bb = _0xb6f399.IconIndex;
  for (const _0x252f6a of _0x2d438e) {
    const _0x586b4a = $gameTroop.members()[_0x252f6a];
    if (!_0x586b4a) {
      continue;
    }
    _0x586b4a._otbTurnOrderGraphicType = "icon";
    _0x586b4a._otbTurnOrderIconIndex = _0x3ed8bb;
  }
});
PluginManager.registerCommand(pluginData.name, "OtbTurnOrderEnemyFace", _0x46fffa => {
  VisuMZ.ConvertParams(_0x46fffa, _0x46fffa);
  const _0x4017a9 = _0x46fffa.Enemies;
  const _0x6964cc = _0x46fffa.FaceName;
  const _0x326e78 = _0x46fffa.FaceIndex;
  for (const _0x318c17 of _0x4017a9) {
    const _0x4662f1 = $gameTroop.members()[_0x318c17];
    if (!_0x4662f1) {
      continue;
    }
    _0x4662f1._otbTurnOrderGraphicType = "face";
    _0x4662f1._otbTurnOrderFaceName = _0x6964cc;
    _0x4662f1._otbTurnOrderFaceIndex = _0x326e78;
  }
});
PluginManager.registerCommand(pluginData.name, "OtbTurnOrderClearEnemyGraphic", _0x193809 => {
  VisuMZ.ConvertParams(_0x193809, _0x193809);
  const _0x3b7881 = _0x193809.Enemies;
  for (const _0x560d13 of _0x3b7881) {
    const _0x43e8eb = $gameTroop.members()[_0x560d13];
    if (!_0x43e8eb) {
      continue;
    }
    _0x43e8eb.clearTurnOrderOTBGraphics();
  }
});
PluginManager.registerCommand(pluginData.name, 'SystemTurnOrderVisibility', _0x5e24e8 => {
  VisuMZ.ConvertParams(_0x5e24e8, _0x5e24e8);
  const _0x4b6b3d = _0x5e24e8.Visible;
  $gameSystem.setBattleSystemOTBTurnOrderVisible(_0x4b6b3d);
});
VisuMZ.BattleSystemOTB.RegExp = {
  'Instant': /<OTB (?:INSTANT|INSTANT CAST|INSTANT USE)>/i,
  'UserFollOrder': /<OTB USER FOLLOW TURN: ([\+\-]\d+)>/i,
  'UserCurrOrder': /<OTB USER CURRENT TURN: ([\+\-]\d+)>/i,
  'UserNextOrder': /<OTB USER NEXT TURN: ([\+\-]\d+)>/i,
  'TargetFollOrder': /<OTB TARGET FOLLOW TURN: ([\+\-]\d+)>/i,
  'TargetCurrOrder': /<OTB TARGET CURRENT TURN: ([\+\-]\d+)>/i,
  'TargetNextOrder': /<OTB TARGET NEXT TURN: ([\+\-]\d+)>/i,
  'UserAddActionCurrent': /<OTB USER ADD CURRENT TURN (?:ACTION|ACTIONS): (\d+)>/i,
  'UserAddActionNext': /<OTB USER ADD NEXT TURN (?:ACTION|ACTIONS): (\d+)>/i,
  'TargetAddActionCurrent': /<OTB TARGET ADD CURRENT TURN (?:ACTION|ACTIONS): (\d+)>/i,
  'TargetAddActionNext': /<OTB TARGET ADD NEXT TURN (?:ACTION|ACTIONS): (\d+)>/i
};
DataManager.getStateIdWithName = function (_0x1b9fc5) {
  _0x1b9fc5 = _0x1b9fc5.toUpperCase().trim();
  this._stateIDs = this._stateIDs || {};
  if (this._stateIDs[_0x1b9fc5]) {
    return this._stateIDs[_0x1b9fc5];
  }
  for (const _0x2af740 of $dataStates) {
    if (!_0x2af740) {
      continue;
    }
    this._stateIDs[_0x2af740.name.toUpperCase().trim()] = _0x2af740.id;
  }
  return this._stateIDs[_0x1b9fc5] || 0x0;
};
ImageManager.svActorHorzCells = ImageManager.svActorHorzCells || 0x9;
ImageManager.svActorVertCells = ImageManager.svActorVertCells || 0x6;
SceneManager.isSceneBattle = function () {
  return this._scene && this._scene.constructor === Scene_Battle;
};
VisuMZ.BattleSystemOTB.BattleManager_setup = BattleManager.setup;
BattleManager.setup = function (_0x4bc781, _0x1ae22b, _0x2a0fa6) {
  VisuMZ.BattleSystemOTB.BattleManager_setup.call(this, _0x4bc781, _0x1ae22b, _0x2a0fa6);
  this.initMembersOTB();
};
BattleManager.initMembersOTB = function () {
  if (!this.isOTB()) {
    return;
  }
  this._otb_actionBattlersNext = [];
  this._otb_createdFirstTurnOrders = false;
};
VisuMZ.BattleSystemOTB.BattleManager_battleSys = BattleManager.battleSys;
BattleManager.battleSys = function () {
  if (this.isOTB()) {
    return "OTB";
  }
  return VisuMZ.BattleSystemOTB.BattleManager_battleSys.call(this);
};
BattleManager.isOTB = function () {
  return $gameSystem.getBattleSystem() === "OTB";
};
VisuMZ.BattleSystemOTB.BattleManager_isTpb = BattleManager.isTpb;
BattleManager.isTpb = function () {
  if (this.isOTB()) {
    return false;
  }
  return VisuMZ.BattleSystemOTB.BattleManager_isTpb.call(this);
};
VisuMZ.BattleSystemOTB.BattleManager_isActiveTpb = BattleManager.isActiveTpb;
BattleManager.isActiveTpb = function () {
  if (this.isOTB()) {
    return false;
  }
  return VisuMZ.BattleSystemOTB.BattleManager_isActiveTpb.call(this);
};
VisuMZ.BattleSystemOTB.BattleManager_isTurnBased = BattleManager.isTurnBased;
BattleManager.isTurnBased = function () {
  if (this.isOTB()) {
    return true;
  }
  return VisuMZ.BattleSystemOTB.BattleManager_isTurnBased.call(this);
};
VisuMZ.BattleSystemOTB.BattleManager_startInput = BattleManager.startInput;
BattleManager.startInput = function () {
  VisuMZ.BattleSystemOTB.BattleManager_startInput.call(this);
  if (this.isOTB() && $gameParty.canInput() && !this._surprise) {
    this.startInputOTB();
  }
};
BattleManager.startInputOTB = function () {
  this.startTurn();
};
VisuMZ.BattleSystemOTB.BattleManager_processTurn = BattleManager.processTurn;
BattleManager.processTurn = function () {
  if (this.isOTB()) {
    this.processTurnOTB();
  } else {
    VisuMZ.BattleSystemOTB.BattleManager_processTurn.call(this);
  }
};
BattleManager.processTurnOTB = function () {
  const _0x4ce596 = this._subject;
  if (_0x4ce596.isActor() && _0x4ce596.canInput()) {
    const _0x2ad10f = _0x4ce596.currentAction();
    if (!_0x2ad10f) {
      VisuMZ.BattleSystemOTB.BattleManager_processTurn.call(this);
    } else if (_0x2ad10f._forceAction) {
      VisuMZ.BattleSystemOTB.BattleManager_processTurn.call(this);
    } else {
      this._currentActor = _0x4ce596;
      this.startActorInput();
    }
  } else {
    VisuMZ.BattleSystemOTB.BattleManager_processTurn.call(this);
  }
};
VisuMZ.BattleSystemOTB.BattleManager_finishActorInput = BattleManager.finishActorInput;
BattleManager.finishActorInput = function () {
  if (this.isOTB()) {
    VisuMZ.BattleSystemOTB.BattleManager_processTurn.call(this);
  } else {
    VisuMZ.BattleSystemOTB.BattleManager_finishActorInput.call(this);
  }
};
VisuMZ.BattleSystemOTB.BattleManager_selectNextActor = BattleManager.selectNextActor;
BattleManager.selectNextActor = function () {
  if (this.isOTB()) {
    this.selectNextActorOTB();
  } else {
    VisuMZ.BattleSystemOTB.BattleManager_selectNextActor.call(this);
  }
};
BattleManager.selectNextActorOTB = function () {
  this._currentActor = null;
  this._inputting = false;
};
VisuMZ.BattleSystemOTB.BattleManager_endAction = BattleManager.endAction;
BattleManager.endAction = function () {
  this.preEndActionOTB();
  VisuMZ.BattleSystemOTB.BattleManager_endAction.call(this);
  this.postEndActionOTB();
};
BattleManager.preEndActionOTB = function () {
  if (!this.isOTB()) {
    return;
  }
  this.removeActionBattlersOTB();
  if (this._subject) {
    this._subject.performActionEndOTB();
  }
  if (this._subject && this._subject.canMove() && this._actionBattlers.includes(this._subject)) {
    const _0x292667 = this._subject._actions.filter(_0x439752 => _0x439752._forceAction);
    this._subject.makeActions();
    if (_0x292667) {
      let _0x352cad = _0x292667.length;
      while (_0x352cad--) {
        this._subject._actions.pop();
      }
      this._subject._actions = _0x292667.concat(this._subject._actions);
    }
  }
};
BattleManager.postEndActionOTB = function () {
  if (!this.isOTB()) {
    return;
  }
  this.removeActionBattlersOTB();
  if (this._subject) {
    this.endBattlerActions(this._subject);
    this._subject = null;
  }
  if (this._forcedBattlers.length > 0x0) {
    this._subject = this.getNextSubject();
  }
  ;
};
BattleManager.OTB_ADDED_ACTION_TIMES = VisuMZ.BattleSystemOTB.Settings.Mechanics.EnableActionTimes;
BattleManager.OTB_ADDED_RANDOMIZE_ADDED_ACTION_ORDER = VisuMZ.BattleSystemOTB.Settings.Mechanics.RandomizeActionTimesOrder;
BattleManager.OTB_STUN_INFINITY_CLAMP = VisuMZ.BattleSystemOTB.Settings.Mechanics.InfinityClamp;
VisuMZ.BattleSystemOTB.BattleManager_makeActionOrders = BattleManager.makeActionOrders;
BattleManager.makeActionOrders = function () {
  if (this.isOTB()) {
    this.makeActionOrdersOTB();
  } else {
    VisuMZ.BattleSystemOTB.BattleManager_makeActionOrders.call(this);
  }
};
BattleManager.makeActionOrdersOTB = function () {
  let _0x29fc36 = this._otb_createdFirstTurnOrders ? 0x1 : 0x2;
  while (_0x29fc36--) {
    this.makeNextActionOrdersOTB();
  }
  this._otb_createdFirstTurnOrders = true;
};
BattleManager.makeNextActionOrdersOTB = function () {
  this._actionBattlers = this._otb_actionBattlersNext;
  this.otbShiftNextTurnSpritesToCurrentTurn();
  const _0x44ed51 = [];
  _0x44ed51.push(...$gameParty.battleMembers());
  _0x44ed51.push(...$gameTroop.members());
  for (const _0x555d0d of _0x44ed51) {
    _0x555d0d.makeSpeed();
  }
  _0x44ed51.sort((_0x44890, _0x46d526) => _0x46d526.speed() - _0x44890.speed());
  this._otb_actionBattlersNext = _0x44ed51;
  this.otbApplyActionTimes();
  this.removeActionBattlersOTB();
  this.otbCreateNewTurnOrderSprites();
};
BattleManager.otbApplyActionTimes = function () {
  if (!BattleManager.OTB_ADDED_ACTION_TIMES) {
    return;
  }
  const _0x4f65ed = this._otb_actionBattlersNext;
  const _0x37ffcf = this.allBattleMembers();
  for (const _0x3ead75 of _0x37ffcf) {
    if (!_0x3ead75) {
      continue;
    }
    if (!_0x3ead75.isAppeared()) {
      continue;
    }
    if (!_0x3ead75.isAlive()) {
      continue;
    }
    if (!_0x4f65ed.includes(_0x3ead75)) {
      continue;
    }
    const _0x6d9fe8 = _0x4f65ed.indexOf(_0x3ead75);
    let _0x41992c = _0x3ead75.makeActionTimes() - 0x1;
    while (_0x41992c--) {
      let _0x590f74 = _0x6d9fe8;
      if (BattleManager.OTB_ADDED_RANDOMIZE_ADDED_ACTION_ORDER) {
        _0x590f74 = Math.randomInt(_0x4f65ed.length - _0x6d9fe8) + _0x6d9fe8;
      }
      _0x4f65ed.splice(_0x590f74, 0x0, _0x3ead75);
    }
  }
};
BattleManager.removeActionBattlersOTB = function () {
  if (!this.isOTB()) {
    return;
  }
  this._actionBattlers = this._actionBattlers || [];
  this._actionBattlers.remove(null);
  this._actionBattlers.remove(undefined);
  this._actionBattlers = this._actionBattlers.filter(_0x194f04 => _0x194f04.isBattleMember());
  this._actionBattlers = this._actionBattlers.filter(_0x5257b9 => VisuMZ.BattleSystemOTB.ActionBattlersFilter(_0x5257b9));
  if (this._surprise) {
    this._actionBattlers = this._actionBattlers.filter(_0x10f414 => !_0x10f414.isActor());
  }
  if (this._preemptive) {
    this._actionBattlers = this._actionBattlers.filter(_0x15b116 => !_0x15b116.isEnemy());
  }
  this._otb_actionBattlersNext = this._otb_actionBattlersNext || [];
  this._otb_actionBattlersNext.remove(null);
  this._otb_actionBattlersNext.remove(undefined);
  this._otb_actionBattlersNext = this._otb_actionBattlersNext.filter(_0x180a69 => _0x180a69.isBattleMember());
  this._otb_actionBattlersNext = this._otb_actionBattlersNext.filter(_0x29c9f5 => VisuMZ.BattleSystemOTB.ActionBattlersNextFilter(_0x29c9f5));
  this.otbRemoveUnableTurnOrderSprites();
  this.refreshTurnOrder();
};
VisuMZ.BattleSystemOTB.ActionBattlersFilter = function (_0x3063e0) {
  if (!_0x3063e0) {
    return false;
  }
  if (!_0x3063e0.isAlive()) {
    return false;
  }
  if (!_0x3063e0.isAppeared()) {
    return false;
  }
  return _0x3063e0.canMove();
};
VisuMZ.BattleSystemOTB.ActionBattlersNextFilter = function (_0xb744af) {
  if (!_0xb744af) {
    return false;
  }
  const _0x8f82d7 = JsonEx.makeDeepCopy(_0xb744af);
  _0x8f82d7._tempActor = true;
  _0x8f82d7._tempBattler = true;
  _0x8f82d7.updateStateTurns();
  _0x8f82d7.removeStatesAuto(0x1);
  _0x8f82d7.removeStatesAuto(0x2);
  _0x8f82d7.refresh();
  return VisuMZ.BattleSystemOTB.ActionBattlersFilter(_0x8f82d7);
};
BattleManager.turnOrderChangeOTB = function (_0x5c7598, _0x18cbd4, _0x59e6ef) {
  if (!_0x18cbd4) {
    return;
  }
  const _0x3dc068 = _0x59e6ef ? this._otb_actionBattlersNext : this._actionBattlers;
  if (!_0x3dc068) {
    return;
  }
  if (!_0x3dc068.includes(_0x5c7598)) {
    return;
  }
  const _0x4be99e = VisuMZ.BattleSystemOTB.GetAllIndicies(_0x5c7598, _0x3dc068);
  const _0x2cf02f = _0x59e6ef ? VisuMZ.BattleSystemOTB.getInfinityClamp(_0x3dc068) : 0x0;
  const _0x317c50 = _0x4be99e.length - 0x1;
  for (let _0x4e6eca = _0x317c50; _0x4e6eca >= 0x0; _0x4e6eca--) {
    _0x3dc068.splice(_0x4be99e[_0x4e6eca], 0x1);
  }
  for (var _0x5057f4 = 0x0; _0x5057f4 < _0x4be99e.length; _0x5057f4++) {
    var _0x5a1420 = (_0x4be99e[_0x5057f4] - _0x18cbd4).clamp(_0x2cf02f, _0x3dc068.length);
    _0x3dc068.splice(_0x5a1420, 0x0, _0x5c7598);
  }
  this.removeActionBattlersOTB();
  this.refreshTurnOrder();
};
VisuMZ.BattleSystemOTB.GetAllIndicies = function (_0x5b39e8, _0x19baf1) {
  const _0x5c6267 = [];
  const _0x3355a5 = _0x19baf1.length;
  for (let _0x361d59 = 0x0; _0x361d59 < _0x3355a5; _0x361d59++) {
    if (_0x19baf1[_0x361d59] === _0x5b39e8) {
      _0x5c6267.push(_0x361d59);
    }
  }
  return _0x5c6267;
};
VisuMZ.BattleSystemOTB.getInfinityClamp = function (_0x421bf2) {
  if (!BattleManager.OTB_STUN_INFINITY_CLAMP) {
    return 0x0;
  }
  if (!_0x421bf2) {
    return 0x0;
  }
  let _0x498fc6 = 0x0;
  const _0x1744b9 = _0x421bf2.length;
  for (let _0x1422e0 = 0x0; _0x1422e0 < _0x1744b9; _0x1422e0++) {
    const _0x44973a = _0x421bf2[_0x1422e0];
    if (!_0x44973a) {
      continue;
    }
    if (_0x44973a.speed() !== Infinity) {
      return _0x1422e0;
    } else {
      _0x498fc6++;
    }
  }
  return _0x498fc6;
};
BattleManager.otbShiftNextTurnSpritesToCurrentTurn = function () {
  if (!this.isOTB()) {
    return;
  }
  const _0x853ceb = SceneManager._scene._otbTurnOrderWindow;
  if (!_0x853ceb) {
    return;
  }
  _0x853ceb.shiftNextTurnSpritesToCurrentTurn();
};
BattleManager.otbCreateNewTurnOrderSprites = function () {
  if (!this.isOTB()) {
    return;
  }
  const _0x30f697 = SceneManager._scene._otbTurnOrderWindow;
  if (!_0x30f697) {
    return;
  }
  _0x30f697.createNewTurnOrderSprites();
};
VisuMZ.BattleSystemOTB.BattleManager_getNextSubject = BattleManager.getNextSubject;
BattleManager.getNextSubject = function () {
  this._subject = VisuMZ.BattleSystemOTB.BattleManager_getNextSubject.call(this);
  if (this.isOTB() && this._subject) {
    this.otbShiftTurnOrderForSubject(this._subject);
  }
  return this._subject;
};
BattleManager.otbShiftTurnOrderForSubject = function (_0x3346da) {
  if (!this.isOTB()) {
    return;
  }
  const _0x1f51ce = SceneManager._scene._otbTurnOrderWindow;
  if (!_0x1f51ce) {
    return;
  }
  if (!_0x3346da) {
    return;
  }
  _0x1f51ce.shiftTurnOrderForSubject(_0x3346da);
};
BattleManager.refreshTurnOrder = function () {
  if (!this.isOTB()) {
    return;
  }
  const _0x2af1eb = SceneManager._scene._otbTurnOrderWindow;
  if (!_0x2af1eb) {
    return;
  }
  _0x2af1eb.requestUpdateTurnOrders();
};
VisuMZ.BattleSystemOTB.BattleManager_endTurn = BattleManager.endTurn;
BattleManager.endTurn = function () {
  VisuMZ.BattleSystemOTB.BattleManager_endTurn.call(this);
  if (this.isOTB()) {
    this.otbRemoveCurrentSubject();
    $gameParty.clearMakeActionTimesCacheOTB();
    $gameTroop.clearMakeActionTimesCacheOTB();
  }
};
BattleManager.otbRemoveCurrentSubject = function () {
  if (!this.isOTB()) {
    return;
  }
  const _0x29337a = SceneManager._scene._otbTurnOrderWindow;
  if (!_0x29337a) {
    return;
  }
  _0x29337a.removeCurrentSubject();
};
BattleManager.otbRemoveUnableTurnOrderSprites = function () {
  if (!this.isOTB()) {
    return;
  }
  const _0xa9cb88 = SceneManager._scene._otbTurnOrderWindow;
  if (!_0xa9cb88) {
    return;
  }
  _0xa9cb88.removeUnableTurnOrderSprites();
};
BattleManager.otbReturnBattlerToTurnOrders = function (_0x48e5bc) {
  if (!_0x48e5bc) {
    return;
  }
  const _0x8bf8e1 = _0x48e5bc.makeActionTimes();
  _0x48e5bc.makeActions();
  if (!this._actionBattlers.includes(_0x48e5bc)) {
    const _0x2fd82c = Math.max(0x0, _0x8bf8e1 - (_0x48e5bc._otbTimesActedThisTurn || 0x0));
    this.otbAddBattlerToTurnOrderAtEnd(_0x48e5bc, _0x2fd82c, this._actionBattlers);
  }
  if (!this._otb_actionBattlersNext.includes(_0x48e5bc)) {
    this.otbAddBattlerToTurnOrderAtEnd(_0x48e5bc, _0x8bf8e1, this._otb_actionBattlersNext);
  }
};
BattleManager.otbAddBattlerToTurnOrderAtEnd = function (_0xccf6a, _0xf1db99, _0x48998a) {
  if (!this.isOTB()) {
    return;
  }
  const _0x139ea2 = SceneManager._scene._otbTurnOrderWindow;
  _0xccf6a.makeActions();
  while (_0xf1db99--) {
    _0x48998a.push(_0xccf6a);
    if (_0x139ea2) {
      _0x139ea2.addBattlerToTurnOrderAtEnd(_0xccf6a, _0x48998a);
    }
  }
};
BattleManager.otbUnshiftBattlerToTurnOrders = function (_0xb80f68) {
  if (!_0xb80f68) {
    return;
  }
  const _0x333cb6 = _0xb80f68.makeActionTimes();
  _0xb80f68.makeActions();
  if (!this._actionBattlers.includes(_0xb80f68)) {
    const _0x2e13f0 = Math.max(0x0, _0x333cb6 - (_0xb80f68._otbTimesActedThisTurn || 0x0));
    this.addBattlerToTurnOrderAtStart(_0xb80f68, _0x2e13f0, this._actionBattlers);
  }
  if (!this._otb_actionBattlersNext.includes(_0xb80f68)) {
    this.addBattlerToTurnOrderAtStart(_0xb80f68, _0x333cb6, this._otb_actionBattlersNext);
  }
};
BattleManager.otbAddBattlerToTurnOrderAtStart = function (_0x1c0c01, _0x17be99, _0x502dc0) {
  if (!this.isOTB()) {
    return;
  }
  const _0x3f88dd = SceneManager._scene._otbTurnOrderWindow;
  while (_0x17be99--) {
    _0x502dc0.unshift(_0x1c0c01);
    if (_0x3f88dd) {
      _0x3f88dd.addBattlerToTurnOrderAtStart(_0x1c0c01, _0x502dc0);
    }
  }
};
BattleManager.otbAddForceActionBattler = function (_0x5d042e) {
  if (!this.isOTB()) {
    return;
  }
  const _0x16ac49 = this._actionBattlers;
  const _0x8c59a8 = _0x5d042e === this._subject ? 0x0 : 0x1;
  let _0x3ee993 = 0x0;
  for (let _0x93ac6c = 0x0; _0x93ac6c < _0x16ac49.length; _0x93ac6c++) {
    const _0x1beecc = _0x16ac49[_0x93ac6c];
    if (!_0x1beecc) {
      continue;
    }
    if (!_0x1beecc._actions) {
      continue;
    }
    if (!_0x1beecc._actions[_0x8c59a8]) {
      continue;
    }
    if (!_0x1beecc._actions[_0x8c59a8]._forceAction) {
      continue;
    }
    _0x3ee993 = _0x93ac6c;
  }
  this._actionBattlers.splice(_0x3ee993, 0x0, _0x5d042e);
  const _0x328ec1 = SceneManager._scene._otbTurnOrderWindow;
  if (_0x328ec1) {
    _0x328ec1.addForceActionBattler(_0x5d042e, _0x3ee993);
  }
};
BattleManager.otbPreviewOrderClear = function () {
  if (!this.isOTB()) {
    return;
  }
  const _0x67137b = SceneManager._scene._otbTurnOrderWindow;
  if (!_0x67137b) {
    return;
  }
  _0x67137b.previewOrderByAction(null);
};
BattleManager.otbPreviewOrderChange = function () {
  if (!this.isOTB()) {
    return;
  }
  const _0x7e8fb0 = SceneManager._scene._otbTurnOrderWindow;
  if (!_0x7e8fb0) {
    return;
  }
  _0x7e8fb0.previewOrderByAction(this.inputtingAction());
};
VisuMZ.BattleSystemOTB.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
  VisuMZ.BattleSystemOTB.Game_System_initialize.call(this);
  this.initBattleSystemOTB();
};
Game_System.prototype.initBattleSystemOTB = function () {
  this._otbTurnOrderVisible = true;
};
Game_System.prototype.isBattleSystemOTBTurnOrderVisible = function () {
  if (this._otbTurnOrderVisible === undefined) {
    this.initBattleSystemOTB();
  }
  return this._otbTurnOrderVisible;
};
Game_System.prototype.setBattleSystemOTBTurnOrderVisible = function (_0x576667) {
  if (this._otbTurnOrderVisible === undefined) {
    this.initBattleSystemOTB();
  }
  this._otbTurnOrderVisible = _0x576667;
};
Game_Action.OTB_CONVERT_AGI_BUFF_CURRENT_TURN = VisuMZ.BattleSystemOTB.Settings.Conversion.ConvertAgiBuffCurrent;
Game_Action.OTB_CONVERT_AGI_DEBUFF_CURRENT_TURN = VisuMZ.BattleSystemOTB.Settings.Conversion.ConvertAgiDebuffCurrent;
Game_Action.OTB_CONVERT_AGI_BUFF_NEXT_TURN = VisuMZ.BattleSystemOTB.Settings.Conversion.ConvertAgiBuffNext;
Game_Action.OTB_CONVERT_AGI_DEBUFF_NEXT_TURN = VisuMZ.BattleSystemOTB.Settings.Conversion.ConvertAgiDebuffNext;
VisuMZ.BattleSystemOTB.Game_Action_speed = Game_Action.prototype.speed;
Game_Action.prototype.speed = function () {
  return BattleManager.isOTB() ? 0x0 : VisuMZ.BattleSystemOTB.Game_Action_speed.call(this);
};
VisuMZ.BattleSystemOTB.Game_Action_applyGlobal = Game_Action.prototype.applyGlobal;
Game_Action.prototype.applyGlobal = function () {
  VisuMZ.BattleSystemOTB.Game_Action_applyGlobal.call(this);
  this.applyGlobalBattleSystemOTB();
};
Game_Action.prototype.applyGlobalBattleSystemOTB = function () {
  if (!SceneManager.isSceneBattle()) {
    return;
  }
  if (!BattleManager.isOTB()) {
    return;
  }
  if (!this.item()) {
    return;
  }
  if (!this.subject()) {
    return;
  }
  const _0x2d9d05 = VisuMZ.BattleSystemOTB.RegExp;
  const _0x925975 = this.item().note;
  if (_0x925975.match(_0x2d9d05.Instant)) {
    this.subject().otbGainInstant(0x1);
  }
  let _0x498470 = this.otbCalcUserCurrentOrderChange();
  let _0x30937f = this.otbCalcUserNextOrderChange();
  if (_0x498470 !== 0x0) {
    BattleManager.turnOrderChangeOTB(this.subject(), -_0x498470, false);
  }
  if (_0x30937f !== 0x0) {
    BattleManager.turnOrderChangeOTB(this.subject(), -_0x30937f, true);
  }
};
Game_Action.prototype.otbCalcUserCurrentOrderChange = function () {
  if (!SceneManager.isSceneBattle()) {
    return 0x0;
  }
  if (!BattleManager.isOTB()) {
    return 0x0;
  }
  if (!this.item()) {
    return 0x0;
  }
  if (!this.subject()) {
    return 0x0;
  }
  if (!this.subject().canChangeOtbTurnOrder()) {
    return 0x0;
  }
  const _0xf92353 = VisuMZ.BattleSystemOTB.RegExp;
  const _0x451b10 = this.item().note;
  const _0x52387b = BattleManager._actionBattlers || [];
  let _0x4639aa = 0x0;
  if (_0x451b10.match(_0xf92353.UserFollOrder)) {
    if (_0x52387b.includes(this.subject())) {
      _0x4639aa += Number(RegExp.$1);
    }
  }
  if (_0x451b10.match(_0xf92353.UserCurrOrder)) {
    _0x4639aa += Number(RegExp.$1);
  }
  return _0x4639aa;
};
Game_Action.prototype.otbCalcUserNextOrderChange = function () {
  if (!SceneManager.isSceneBattle()) {
    return 0x0;
  }
  if (!BattleManager.isOTB()) {
    return 0x0;
  }
  if (!this.item()) {
    return 0x0;
  }
  if (!this.subject()) {
    return 0x0;
  }
  if (!this.subject().canChangeOtbTurnOrder()) {
    return 0x0;
  }
  const _0x15d978 = VisuMZ.BattleSystemOTB.Settings.Mechanics;
  const _0x57fb6a = VisuMZ.BattleSystemOTB.RegExp;
  const _0x68d41e = this.item().note;
  const _0x307acc = BattleManager._otb_actionBattlersNext || [];
  let _0x24d5c2 = 0x0;
  if (_0x15d978.ConvertSpeedJS) {
    _0x24d5c2 += _0x15d978.ConvertSpeedJS.call(this);
  }
  if (_0x68d41e.match(_0x57fb6a.UserFollOrder)) {
    if (_0x307acc.includes(this.subject())) {
      _0x24d5c2 += Number(RegExp.$1);
    }
  }
  if (_0x68d41e.match(_0x57fb6a.UserNextOrder)) {
    _0x24d5c2 += Number(RegExp.$1);
  }
  return _0x24d5c2;
};
VisuMZ.BattleSystemOTB.Game_Action_applyItemUserEffect = Game_Action.prototype.applyItemUserEffect;
Game_Action.prototype.applyItemUserEffect = function (_0x8d03) {
  VisuMZ.BattleSystemOTB.Game_Action_applyItemUserEffect.call(this, _0x8d03);
  this.applyItemAddedActionOTB(_0x8d03);
  this.applyItemTargetEffectOTB(_0x8d03);
};
Game_Action.prototype.applyItemAddedActionOTB = function (_0x5158a6) {
  if (!SceneManager.isSceneBattle()) {
    return;
  }
  if (!BattleManager.isOTB()) {
    return;
  }
  if (!this.item()) {
    return;
  }
  if (!_0x5158a6) {
    return;
  }
  const _0x415b02 = VisuMZ.BattleSystemOTB.RegExp;
  const _0x5b5cc1 = this.item().note;
  if (_0x5b5cc1.match(_0x415b02.UserAddActionCurrent)) {
    const _0xe0428a = Number(RegExp.$1) || 0x0;
    this.subject().otbAddActions(_0xe0428a, true);
  }
  if (_0x5b5cc1.match(_0x415b02.UserAddActionNext)) {
    const _0x282dc9 = Number(RegExp.$1) || 0x0;
    this.subject().otbAddActions(_0x282dc9, false);
  }
  if (_0x5b5cc1.match(_0x415b02.TargetAddActionCurrent)) {
    const _0x2947c7 = Number(RegExp.$1) || 0x0;
    _0x5158a6.otbAddActions(_0x2947c7, true);
  }
  if (_0x5b5cc1.match(_0x415b02.TargetAddActionNext)) {
    const _0x425568 = Number(RegExp.$1) || 0x0;
    _0x5158a6.otbAddActions(_0x425568, false);
  }
};
Game_Action.prototype.applyItemTargetEffectOTB = function (_0x382448) {
  if (!SceneManager.isSceneBattle()) {
    return;
  }
  if (!BattleManager.isOTB()) {
    return;
  }
  if (!this.item()) {
    return;
  }
  if (!_0x382448) {
    return;
  }
  if (!_0x382448.canChangeOtbTurnOrder()) {
    return 0x0;
  }
  let _0x14c6bd = this.otbCalcTargetCurrentOrderChange(_0x382448);
  let _0x199ab9 = this.otbCalcTargetNextOrderChange(_0x382448);
  if (_0x14c6bd !== 0x0) {
    BattleManager.turnOrderChangeOTB(_0x382448, -_0x14c6bd, false);
  }
  if (_0x199ab9 !== 0x0) {
    BattleManager.turnOrderChangeOTB(_0x382448, -_0x199ab9, true);
  }
};
Game_Action.prototype.otbCalcTargetCurrentOrderChange = function (_0x363852) {
  if (!SceneManager.isSceneBattle()) {
    return 0x0;
  }
  if (!BattleManager.isOTB()) {
    return 0x0;
  }
  if (!this.item()) {
    return 0x0;
  }
  if (!_0x363852) {
    return 0x0;
  }
  if (!_0x363852.canChangeOtbTurnOrder()) {
    return 0x0;
  }
  const _0x28fbfa = VisuMZ.BattleSystemOTB.RegExp;
  const _0x47bf18 = this.item().note;
  const _0x14ab5a = BattleManager._actionBattlers || [];
  let _0x4eac9f = 0x0;
  if (_0x47bf18.match(_0x28fbfa.TargetFollOrder)) {
    if (_0x14ab5a.includes(_0x363852)) {
      _0x4eac9f += Number(RegExp.$1);
    }
  }
  if (_0x47bf18.match(_0x28fbfa.TargetCurrOrder)) {
    _0x4eac9f += Number(RegExp.$1);
  }
  const _0x36b499 = this.item().effects;
  for (const _0x244f10 of _0x36b499) {
    if (!_0x244f10) {
      continue;
    }
    if (_0x244f10.code === Game_Action.EFFECT_ADD_BUFF && _0x244f10.dataId === 0x6) {
      if (Game_Action.OTB_CONVERT_AGI_BUFF_CURRENT_TURN) {
        _0x4eac9f -= 0x1;
      }
    }
    if (_0x244f10.code === Game_Action.EFFECT_ADD_DEBUFF && _0x244f10.dataId === 0x6) {
      if (Game_Action.OTB_CONVERT_AGI_DEBUFF_CURRENT_TURN) {
        _0x4eac9f += 0x1;
      }
    }
  }
  return _0x4eac9f;
};
Game_Action.prototype.otbCalcTargetNextOrderChange = function (_0x30c8e9) {
  if (!SceneManager.isSceneBattle()) {
    return 0x0;
  }
  if (!BattleManager.isOTB()) {
    return 0x0;
  }
  if (!this.item()) {
    return 0x0;
  }
  if (!_0x30c8e9) {
    return 0x0;
  }
  if (!_0x30c8e9.canChangeOtbTurnOrder()) {
    return 0x0;
  }
  const _0x7e6d06 = VisuMZ.BattleSystemOTB.RegExp;
  const _0x3ad24b = this.item().note;
  const _0x531acc = BattleManager._otb_actionBattlersNext || [];
  let _0x285d3b = 0x0;
  if (_0x3ad24b.match(_0x7e6d06.TargetFollOrder)) {
    if (_0x531acc.includes(_0x30c8e9)) {
      _0x285d3b += Number(RegExp.$1);
    }
  }
  if (_0x3ad24b.match(_0x7e6d06.TargetNextOrder)) {
    _0x285d3b += Number(RegExp.$1);
  }
  const _0xfaefa8 = this.item().effects;
  for (const _0x1ed2ba of _0xfaefa8) {
    if (!_0x1ed2ba) {
      continue;
    }
    if (_0x1ed2ba.code === Game_Action.EFFECT_ADD_BUFF && _0x1ed2ba.dataId === 0x6) {
      if (Game_Action.OTB_CONVERT_AGI_BUFF_NEXT_TURN) {
        _0x285d3b -= 0x1;
      }
    }
    if (_0x1ed2ba.code === Game_Action.EFFECT_ADD_DEBUFF && _0x1ed2ba.dataId === 0x6) {
      if (Game_Action.OTB_CONVERT_AGI_DEBUFF_NEXT_TURN) {
        _0x285d3b += 0x1;
      }
    }
  }
  return _0x285d3b;
};
Game_BattlerBase.prototype.clearTurnOrderOTBGraphics = function () {
  delete this._otbTurnOrderGraphicType;
  delete this._otbTurnOrderFaceName;
  delete this._otbTurnOrderFaceIndex;
  delete this._otbTurnOrderIconIndex;
};
Game_BattlerBase.prototype.TurnOrderOTBGraphicType = function () {
  if (this._otbTurnOrderGraphicType === undefined) {
    this._otbTurnOrderGraphicType = this.createTurnOrderOTBGraphicType();
  }
  return this._otbTurnOrderGraphicType;
};
Game_BattlerBase.prototype.createTurnOrderOTBGraphicType = function () {
  return Window_OTB_TurnOrder.Settings.EnemyBattlerType;
};
Game_BattlerBase.prototype.TurnOrderOTBGraphicFaceName = function () {
  if (this._otbTurnOrderFaceName === undefined) {
    this._otbTurnOrderFaceName = this.createTurnOrderOTBGraphicFaceName();
  }
  return this._otbTurnOrderFaceName;
};
Game_BattlerBase.prototype.createTurnOrderOTBGraphicFaceName = function () {
  return Window_OTB_TurnOrder.Settings.EnemyBattlerFaceName;
};
Game_BattlerBase.prototype.TurnOrderOTBGraphicFaceIndex = function () {
  if (this._otbTurnOrderFaceIndex === undefined) {
    this._otbTurnOrderFaceIndex = this.createTurnOrderOTBGraphicFaceIndex();
  }
  return this._otbTurnOrderFaceIndex;
};
Game_BattlerBase.prototype.createTurnOrderOTBGraphicFaceIndex = function () {
  return Window_OTB_TurnOrder.Settings.EnemyBattlerFaceIndex;
};
Game_BattlerBase.prototype.TurnOrderOTBGraphicIconIndex = function () {
  if (this._otbTurnOrderIconIndex === undefined) {
    this._otbTurnOrderIconIndex = this.createTurnOrderOTBGraphicIconIndex();
  }
  return this._otbTurnOrderIconIndex;
};
Game_BattlerBase.prototype.createTurnOrderOTBGraphicIconIndex = function () {
  return Window_OTB_TurnOrder.Settings.EnemyBattlerIcon;
};
Game_BattlerBase.prototype.setOTBGraphicIconIndex = function (_0x191678) {
  this._otbTurnOrderIconIndex = _0x191678;
};
VisuMZ.BattleSystemOTB.Game_BattlerBase_hide = Game_BattlerBase.prototype.hide;
Game_BattlerBase.prototype.hide = function () {
  VisuMZ.BattleSystemOTB.Game_BattlerBase_hide.call(this);
  BattleManager.removeActionBattlersOTB();
};
VisuMZ.BattleSystemOTB.Game_BattlerBase_appear = Game_BattlerBase.prototype.appear;
Game_BattlerBase.prototype.appear = function () {
  const _0x46979a = this._hidden;
  VisuMZ.BattleSystemOTB.Game_BattlerBase_appear.call(this);
  if (BattleManager.isOTB() && SceneManager.isSceneBattle() && _0x46979a && !this._hidden) {
    BattleManager.otbReturnBattlerToTurnOrders(this);
  }
};
VisuMZ.BattleSystemOTB.Game_Battler_performCollapse = Game_Battler.prototype.performCollapse;
Game_Battler.prototype.performCollapse = function () {
  VisuMZ.BattleSystemOTB.Game_Battler_performCollapse.call(this);
  BattleManager.removeActionBattlersOTB();
};
Game_Battler.OTB_STUN_INFINITY_SPEED = VisuMZ.BattleSystemOTB.Settings.Mechanics.PostStunInfinitySpeed;
VisuMZ.BattleSystemOTB.Game_Battler_onBattleStart = Game_Battler.prototype.onBattleStart;
Game_Battler.prototype.onBattleStart = function (_0x3a4e41) {
  VisuMZ.BattleSystemOTB.Game_Battler_onBattleStart.call(this, _0x3a4e41);
  this.onBattleStartOTB(_0x3a4e41);
};
Game_Battler.prototype.onBattleStartOTB = function (_0x35a9b1) {
  if (!BattleManager.isOTB()) {
    return;
  }
  this._otbTimesActedThisTurn = 0x0;
  this._cache_makeActionTimesOTB = undefined;
};
VisuMZ.BattleSystemOTB.Game_Battler_onBattleEnd = Game_Battler.prototype.onBattleEnd;
Game_Battler.prototype.onBattleEnd = function () {
  VisuMZ.BattleSystemOTB.Game_Battler_onBattleEnd.call(this);
  this.onBattleEndOTB();
};
Game_Battler.prototype.onBattleEndOTB = function () {
  if (!BattleManager.isOTB()) {
    return;
  }
  this._otbTimesActedThisTurn = 0x0;
};
Game_Battler.prototype.performActionEndOTB = function () {
  if (!BattleManager.isOTB()) {
    return;
  }
  this._otbTimesActedThisTurn = this._otbTimesActedThisTurn || 0x0;
  this._otbTimesActedThisTurn++;
  if (this.numActions() > 0x0 && this === BattleManager._subject) {
    const _0x40bd88 = BattleManager._forcedBattlers;
    if (_0x40bd88.length > 0x0 && _0x40bd88[0x0] !== this) {
      return;
    }
    const _0x522665 = this.battler();
    if (_0x522665 && BattleManager.isNextOtbSubject(this)) {
      _0x522665.stepForward();
    }
  }
};
BattleManager.isNextOtbSubject = function (_0x1815d7) {
  if (!_0x1815d7) {
    return false;
  }
  return this._actionBattlers[0x0] === _0x1815d7;
};
VisuMZ.BattleSystemOTB.Game_Battler_onTurnEnd = Game_Battler.prototype.onTurnEnd;
Game_Battler.prototype.onTurnEnd = function () {
  VisuMZ.BattleSystemOTB.Game_Battler_onTurnEnd.call(this);
  this.onTurnEndOTB();
};
Game_Battler.prototype.onTurnEndOTB = function () {
  if (!BattleManager.isOTB()) {
    return;
  }
  this._otbTimesActedThisTurn = 0x0;
};
VisuMZ.BattleSystemOTB.Game_Battler_makeSpeed = Game_Battler.prototype.makeSpeed;
Game_Battler.prototype.makeSpeed = function () {
  if (BattleManager.isOTB()) {
    this.makeOTBSpeed();
  } else {
    VisuMZ.BattleSystemOTB.Game_Battler_makeSpeed.call(this);
  }
};
Game_Battler.prototype.makeOTBSpeed = function () {
  if (this.isInfinitySpeedOTB()) {
    this._speed = Infinity;
  } else {
    const _0x548637 = this.currentAction() || new Game_Action(this);
    this._speed = VisuMZ.BattleSystemOTB.Settings.Mechanics.InitialSpeedJS.call(_0x548637);
  }
};
Game_Battler.prototype.isInfinitySpeedOTB = function () {
  if (!Game_Battler.OTB_STUN_INFINITY_SPEED) {
    return false;
  }
  if (!this.isAlive()) {
    return false;
  }
  if (!this.isAppeared()) {
    return false;
  }
  if (this.canMove()) {
    return false;
  }
  const _0x2f950d = JsonEx.makeDeepCopy(this);
  _0x2f950d._tempActor = true;
  _0x2f950d._tempBattler = true;
  _0x2f950d.updateStateTurns();
  _0x2f950d.removeStatesAuto(0x1);
  _0x2f950d.removeStatesAuto(0x2);
  _0x2f950d.refresh();
  return _0x2f950d.canMove();
};
VisuMZ.BattleSystemOTB.Game_Action_allowRandomSpeed = Game_Action.prototype.allowRandomSpeed;
Game_Action.prototype.allowRandomSpeed = function () {
  return BattleManager.isOTB() ? VisuMZ.BattleSystemOTB.Settings.Mechanics.AllowRandomSpeed : VisuMZ.BattleSystemOTB.Game_Action_allowRandomSpeed.call(this);
};
Game_Battler.prototype.otbGainInstant = function (_0x2dabd3) {
  if (!this.canMove()) {
    return;
  }
  this._otbTimesActedThisTurn = this._otbTimesActedThisTurn || 0x0;
  this._otbTimesActedThisTurn--;
  BattleManager.otbAddBattlerToTurnOrderAtStart(this, _0x2dabd3, BattleManager._actionBattlers);
};
Game_Battler.prototype.otbAddActions = function (_0x5b7a0a, _0x25b1b4) {
  if (!this.canMove()) {
    return;
  }
  if (_0x25b1b4) {
    BattleManager.otbAddBattlerToTurnOrderAtEnd(this, _0x5b7a0a, BattleManager._actionBattlers);
  } else {
    BattleManager.otbAddBattlerToTurnOrderAtEnd(this, _0x5b7a0a, BattleManager._otb_actionBattlersNext);
  }
};
VisuMZ.BattleSystemOTB.Game_Battler_makeActionTimes = Game_Battler.prototype.makeActionTimes;
Game_Battler.prototype.makeActionTimes = function () {
  return BattleManager.isOTB() ? this.makeActionTimesOTB() : VisuMZ.BattleSystemOTB.Game_Battler_makeActionTimes.call(this);
};
Game_Battler.prototype.makeActionTimesOTB = function () {
  if (this._cache_makeActionTimesOTB !== undefined) {
    return this._cache_makeActionTimesOTB;
  }
  this._last_otb_actionPlusSetLength = this.actionPlusSet().length;
  const _0x14dff3 = this.actionPlusSet();
  const _0x141392 = _0x14dff3.reduce((_0x45f2f8, _0x4d3160) => Math.random() < _0x4d3160 ? _0x45f2f8 + 0x1 : _0x45f2f8, 0x1);
  this._cache_makeActionTimesOTB = _0x141392;
  return this._cache_makeActionTimesOTB;
};
Game_Unit.prototype.clearMakeActionTimesCacheOTB = function () {
  for (const _0x2a60fe of this.members()) {
    if (_0x2a60fe) {
      _0x2a60fe._cache_makeActionTimesOTB = undefined;
    }
  }
};
Game_Battler.prototype.canChangeOtbTurnOrder = function () {
  if (this.speed() === Infinity) {
    return false;
  }
  return true;
};
Game_Battler.prototype.otbProcessActionCheck = function (_0x564f82, _0x5383ae) {
  if (this._tempBattler || this._tempActor) {
    return;
  }
  if (!SceneManager.isSceneBattle()) {
    return;
  }
  if (!BattleManager.isOTB()) {
    return;
  }
  if (this._last_otb_actionPlusSetLength !== this.actionPlusSet().length) {
    this._last_otb_actionPlusSetLength = this.actionPlusSet().length;
    this._cache_makeActionTimesOTB = undefined;
  } else {
    return;
  }
  if (_0x564f82 && !this.canMove()) {
    BattleManager.removeActionBattlersOTB();
  } else if (!_0x564f82 && this.canMove()) {
    BattleManager.otbReturnBattlerToTurnOrders(this);
  }
  if (this.canMove()) {
    const _0x362062 = this.makeActionTimes() - _0x5383ae;
    if (_0x362062 > 0x0) {
      BattleManager.otbAddBattlerToTurnOrderAtEnd(this, _0x362062, BattleManager._actionBattlers);
      BattleManager.otbAddBattlerToTurnOrderAtEnd(this, _0x362062, BattleManager._otb_actionBattlersNext);
    }
  }
};
VisuMZ.BattleSystemOTB.Game_Battler_addState = Game_Battler.prototype.addState;
Game_Battler.prototype.addState = function (_0x200b16) {
  const _0x53eef6 = this.canMove();
  const _0x39a0ab = this.makeActionTimes();
  VisuMZ.BattleSystemOTB.Game_Battler_addState.call(this, _0x200b16);
  this._last_otb_actionPlusSetLength = undefined;
  this.otbProcessActionCheck(_0x53eef6, _0x39a0ab);
};
VisuMZ.BattleSystemOTB.Game_Battler_removeState = Game_Battler.prototype.removeState;
Game_Battler.prototype.removeState = function (_0x3637d8) {
  const _0x882b67 = this.canMove();
  const _0x3c7c57 = this.makeActionTimes();
  VisuMZ.BattleSystemOTB.Game_Battler_removeState.call(this, _0x3637d8);
  this._last_otb_actionPlusSetLength = undefined;
  this.otbProcessActionCheck(_0x882b67, _0x3c7c57);
};
VisuMZ.BattleSystemOTB.Game_BattlerBase_recoverAll = Game_BattlerBase.prototype.recoverAll;
Game_BattlerBase.prototype.recoverAll = function () {
  if (BattleManager.isOTB()) {
    this.removeState(this.deathStateId());
  }
  VisuMZ.BattleSystemOTB.Game_BattlerBase_recoverAll.call(this);
  if (BattleManager.isOTB()) {
    this.refresh();
  }
};
VisuMZ.BattleSystemOTB.Game_Battler_forceAction = Game_Battler.prototype.forceAction;
Game_Battler.prototype.forceAction = function (_0xc63019, _0x1c9d18) {
  if (BattleManager.isOTB()) {
    this.forceActionOTB(_0xc63019, _0x1c9d18);
  } else {
    VisuMZ.BattleSystemOTB.Game_Battler_forceAction.call(this, _0xc63019, _0x1c9d18);
  }
};
Game_Battler.prototype.forceActionOTB = function (_0x37020d, _0x1aa117) {
  const _0x313057 = new Game_Action(this, true);
  _0x313057.setSkill(_0x37020d);
  _0x313057._forceAction = true;
  if (_0x1aa117 === -0x2) {
    _0x313057.setTarget(this._lastTargetIndex);
  } else if (_0x1aa117 === -0x1) {
    _0x313057.decideRandomTarget();
  } else {
    _0x313057.setTarget(_0x1aa117);
  }
  const _0x4d1e68 = this._actions.findIndex(_0x55deca => _0x55deca._forceAction) + 0x1;
  this._actions.splice(_0x4d1e68, 0x0, _0x313057);
};
VisuMZ.BattleSystemOTB.BattleManager_forceAction = BattleManager.forceAction;
BattleManager.forceAction = function (_0x4f7913) {
  if (BattleManager.isOTB()) {
    this.forceActionOTB(_0x4f7913);
  } else {
    VisuMZ.BattleSystemOTB.BattleManager_forceAction.call(this, _0x4f7913);
  }
};
BattleManager.forceActionOTB = function (_0x81353b) {
  BattleManager.otbAddForceActionBattler(_0x81353b);
};
VisuMZ.BattleSystemOTB.Game_Actor_selectNextCommand = Game_Actor.prototype.selectNextCommand;
Game_Actor.prototype.selectNextCommand = function () {
  if (BattleManager.isOTB()) {
    if (this.battler()) {
      this.battler().stepForward();
    }
    return false;
  }
  return VisuMZ.BattleSystemOTB.Game_Actor_selectNextCommand.call(this);
};
Game_Actor.prototype.createTurnOrderOTBGraphicType = function () {
  const _0x1e0a90 = this.actor().note;
  if (_0x1e0a90.match(/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i)) {
    return "face";
  } else {
    if (_0x1e0a90.match(/<OTB TURN ORDER ICON:[ ](\d+)>/i)) {
      return 'icon';
    }
  }
  return Window_OTB_TurnOrder.Settings.ActorBattlerType;
};
Game_Actor.prototype.createTurnOrderOTBGraphicFaceName = function () {
  const _0x4127de = this.actor().note;
  if (_0x4127de.match(/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i)) {
    return String(RegExp.$1);
  }
  return this.faceName();
};
Game_Actor.prototype.createTurnOrderOTBGraphicFaceIndex = function () {
  const _0xf9b29 = this.actor().note;
  if (_0xf9b29.match(/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i)) {
    return Number(RegExp.$2);
  }
  return this.faceIndex();
};
Game_Actor.prototype.createTurnOrderOTBGraphicIconIndex = function () {
  const _0x51aff6 = this.actor().note;
  if (_0x51aff6.match(/<OTB TURN ORDER ICON:[ ](\d+)>/i)) {
    return Number(RegExp.$1);
  }
  return Window_OTB_TurnOrder.Settings.ActorBattlerIcon;
};
Game_Enemy.prototype.createTurnOrderOTBGraphicType = function () {
  const _0x1adb88 = this.enemy().note;
  if (_0x1adb88.match(/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i)) {
    return "face";
  } else {
    if (_0x1adb88.match(/<OTB TURN ORDER ICON:[ ](\d+)>/i)) {
      return "icon";
    }
  }
  return Window_OTB_TurnOrder.Settings.EnemyBattlerType;
};
Game_Enemy.prototype.createTurnOrderOTBGraphicFaceName = function () {
  const _0x362fec = this.enemy().note;
  if (_0x362fec.match(/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i)) {
    return String(RegExp.$1);
  }
  return Window_OTB_TurnOrder.Settings.EnemyBattlerFaceName;
};
Game_Enemy.prototype.createTurnOrderOTBGraphicFaceIndex = function () {
  const _0x1cb054 = this.enemy().note;
  if (_0x1cb054.match(/<OTB TURN ORDER FACE:[ ](.*),[ ](\d+)>/i)) {
    return Number(RegExp.$2);
  }
  return Window_OTB_TurnOrder.Settings.EnemyBattlerFaceIndex;
};
Game_Enemy.prototype.createTurnOrderOTBGraphicIconIndex = function () {
  const _0x104067 = this.enemy().note;
  if (_0x104067.match(/<OTB TURN ORDER ICON:[ ](\d+)>/i)) {
    return Number(RegExp.$1);
  }
  return Window_OTB_TurnOrder.Settings.EnemyBattlerIcon;
};
VisuMZ.BattleSystemOTB.Game_Party_addActor = Game_Party.prototype.addActor;
Game_Party.prototype.addActor = function (_0x3d096a) {
  VisuMZ.BattleSystemOTB.Game_Party_addActor.call(this, _0x3d096a);
  if (Imported.VisuMZ_2_PartySystem) {
    return;
  }
  if (SceneManager.isSceneBattle() && BattleManager.isOTB()) {
    BattleManager.removeActionBattlersOTB();
    BattleManager.otbReturnBattlerToTurnOrders($gameActors.actor(_0x3d096a));
  }
};
VisuMZ.BattleSystemOTB.Game_Party_removeActor = Game_Party.prototype.removeActor;
Game_Party.prototype.removeActor = function (_0x50f9c8) {
  VisuMZ.BattleSystemOTB.Game_Party_removeActor.call(this, _0x50f9c8);
  if (SceneManager.isSceneBattle() && BattleManager.isOTB()) {
    BattleManager.removeActionBattlersOTB();
  }
};
VisuMZ.BattleSystemOTB.Scene_Battle_createActorCommandWindow = Scene_Battle.prototype.createActorCommandWindow;
Scene_Battle.prototype.createActorCommandWindow = function () {
  VisuMZ.BattleSystemOTB.Scene_Battle_createActorCommandWindow.call(this);
  if (BattleManager.isOTB()) {
    this.createActorCommandWindowOTB();
  }
};
Scene_Battle.prototype.createActorCommandWindowOTB = function () {
  const _0x5ec931 = this._actorCommandWindow;
  if (this.isPartyCommandWindowDisabled()) {
    delete _0x5ec931._handlers.cancel;
  }
};
VisuMZ.BattleSystemOTB.Scene_Battle_commandCancel = Scene_Battle.prototype.commandCancel;
Scene_Battle.prototype.commandCancel = function () {
  if (BattleManager.isOTB()) {
    this.commandCancelOTB();
  } else {
    VisuMZ.BattleSystemOTB.Scene_Battle_commandCancel.call(this);
  }
};
Scene_Battle.prototype.commandCancelOTB = function () {
  BattleManager.otbPreviewOrderClear();
  this._partyCommandWindow.setup();
  this._actorCommandWindow.close();
};
VisuMZ.BattleSystemOTB.Scene_Battle_commandFight = Scene_Battle.prototype.commandFight;
Scene_Battle.prototype.commandFight = function () {
  if (BattleManager.isOTB()) {
    this.startActorCommandSelection();
  } else {
    VisuMZ.BattleSystemOTB.Scene_Battle_commandFight.call(this);
  }
};
VisuMZ.BattleSystemOTB.Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function () {
  VisuMZ.BattleSystemOTB.Scene_Battle_createAllWindows.call(this);
  this.createOTBTurnOrderWindow();
};
Scene_Battle.prototype.createOTBTurnOrderWindow = function () {
  if (!BattleManager.isOTB()) {
    return;
  }
  this._otbTurnOrderWindow = new Window_OTB_TurnOrder();
  const _0xec64f1 = this.getChildIndex(this._windowLayer);
  this.addChildAt(this._otbTurnOrderWindow, _0xec64f1);
  this.repositionLogWindowOTB();
  if (SceneManager.isPreviousSceneBattleTransitionable()) {
    this._otbTurnOrderWindow.resumeTurnOrderSprites();
  }
};
Scene_Battle.prototype.repositionLogWindowOTB = function () {
  const _0x18069e = Window_OTB_TurnOrder.Settings;
  if (_0x18069e.DisplayPosition !== "top") {
    return;
  }
  if (!_0x18069e.RepositionLogWindow) {
    return;
  }
  if (!this._logWindow) {
    return;
  }
  const _0x384618 = this._otbTurnOrderWindow.y - Math.round((Graphics.height - Graphics.boxHeight) / 0x2);
  const _0x19c4df = _0x384618 + this._otbTurnOrderWindow.height;
  this._logWindow.y = _0x19c4df + (_0x18069e.LogWindowOffsetY || 0x0);
};
VisuMZ.BattleSystemOTB.Scene_Battle_commandAttack = Scene_Battle.prototype.commandAttack;
Scene_Battle.prototype.commandAttack = function () {
  BattleManager.otbPreviewOrderClear();
  VisuMZ.BattleSystemOTB.Scene_Battle_commandAttack.call(this);
};
VisuMZ.BattleSystemOTB.Scene_Battle_commandGuard = Scene_Battle.prototype.commandGuard;
Scene_Battle.prototype.commandGuard = function () {
  BattleManager.otbPreviewOrderClear();
  VisuMZ.BattleSystemOTB.Scene_Battle_commandGuard.call(this);
};
VisuMZ.BattleSystemOTB.Scene_Battle_onActorOk = Scene_Battle.prototype.onActorOk;
Scene_Battle.prototype.onActorOk = function () {
  BattleManager.otbPreviewOrderClear();
  VisuMZ.BattleSystemOTB.Scene_Battle_onActorOk.call(this);
};
VisuMZ.BattleSystemOTB.Scene_Battle_onActorCancel = Scene_Battle.prototype.onActorCancel;
Scene_Battle.prototype.onActorCancel = function () {
  BattleManager.otbPreviewOrderClear();
  VisuMZ.BattleSystemOTB.Scene_Battle_onActorCancel.call(this);
};
VisuMZ.BattleSystemOTB.Scene_Battle_onEnemyOk = Scene_Battle.prototype.onEnemyOk;
Scene_Battle.prototype.onEnemyOk = function () {
  BattleManager.otbPreviewOrderClear();
  VisuMZ.BattleSystemOTB.Scene_Battle_onEnemyOk.call(this);
};
VisuMZ.BattleSystemOTB.Scene_Battle_onEnemyCancel = Scene_Battle.prototype.onEnemyCancel;
Scene_Battle.prototype.onEnemyCancel = function () {
  BattleManager.otbPreviewOrderClear();
  VisuMZ.BattleSystemOTB.Scene_Battle_onEnemyCancel.call(this);
};
VisuMZ.BattleSystemOTB.Scene_Battle_onSkillOk = Scene_Battle.prototype.onSkillOk;
Scene_Battle.prototype.onSkillOk = function () {
  BattleManager.otbPreviewOrderClear();
  VisuMZ.BattleSystemOTB.Scene_Battle_onSkillOk.call(this);
};
VisuMZ.BattleSystemOTB.Scene_Battle_onSkillCancel = Scene_Battle.prototype.onSkillCancel;
Scene_Battle.prototype.onSkillCancel = function () {
  BattleManager.otbPreviewOrderClear();
  VisuMZ.BattleSystemOTB.Scene_Battle_onSkillCancel.call(this);
};
VisuMZ.BattleSystemOTB.Scene_Battle_onItemOk = Scene_Battle.prototype.onItemOk;
Scene_Battle.prototype.onItemOk = function () {
  BattleManager.otbPreviewOrderClear();
  VisuMZ.BattleSystemOTB.Scene_Battle_onItemOk.call(this);
};
VisuMZ.BattleSystemOTB.Scene_Battle_onItemCancel = Scene_Battle.prototype.onItemCancel;
Scene_Battle.prototype.onItemCancel = function () {
  BattleManager.otbPreviewOrderClear();
  VisuMZ.BattleSystemOTB.Scene_Battle_onItemCancel.call(this);
};
VisuMZ.BattleSystemOTB.Scene_Battle_actorCommandSingleSkill = Scene_Battle.prototype.actorCommandSingleSkill;
Scene_Battle.prototype.actorCommandSingleSkill = function () {
  BattleManager.otbPreviewOrderClear();
  VisuMZ.BattleSystemOTB.Scene_Battle_actorCommandSingleSkill.call(this);
};
function Sprite_OTB_TurnOrder_Battler() {
  this.initialize(...arguments);
}
Sprite_OTB_TurnOrder_Battler.prototype = Object.create(Sprite_Clickable.prototype);
Sprite_OTB_TurnOrder_Battler.prototype.constructor = Sprite_OTB_TurnOrder_Battler;
Sprite_OTB_TurnOrder_Battler.prototype.initialize = function (_0x310f11, _0x307c5c, _0x48ce70) {
  this.initMembers(_0x310f11, _0x307c5c, _0x48ce70);
  Sprite_Clickable.prototype.initialize.call(this);
  this.opacity = 0x0;
  this.createChildren();
  this.checkOpacity();
};
Sprite_OTB_TurnOrder_Battler.prototype.initMembers = function (_0x4b3c2e, _0x5a584e, _0x123396) {
  this._unit = _0x4b3c2e.isActor() ? $gameParty : $gameTroop;
  this._index = _0x4b3c2e.index();
  this._instance = _0x5a584e;
  this._sourceArray = _0x123396;
  const _0x16b84f = Window_OTB_TurnOrder.Settings;
  this._positionDuration = 0x0;
  this._positionTargetX = _0x16b84f.OrderDirection ? -_0x16b84f.SpriteThin : this.containerWindow().width;
  this._positionTargetY = 0x0;
  this._fadeDuration = 0x0;
  this._fadeTarget = 0xff;
  this._isAlive = false;
  this._isAppeared = false;
  this._containerWidth = 0x0;
  this._containerHeight = 0x0;
};
Sprite_OTB_TurnOrder_Battler.prototype.createChildren = function () {
  this.createInitialPositions();
  this.createBackgroundSprite();
  this.createGraphicSprite();
  this.createBorderSprite();
  this.createLetterSprite();
};
Sprite_OTB_TurnOrder_Battler.prototype.createInitialPositions = function () {
  this.x = this._positionTargetX;
  this.y = this._positionTargetY;
};
Sprite_OTB_TurnOrder_Battler.prototype.isHorz = function () {
  return true;
};
Sprite_OTB_TurnOrder_Battler.prototype.bitmapWidth = function () {
  const _0x19d69e = Window_OTB_TurnOrder.Settings;
  return _0x19d69e.SpriteThin;
};
Sprite_OTB_TurnOrder_Battler.prototype.bitmapHeight = function () {
  const _0x56ce6e = Window_OTB_TurnOrder.Settings;
  return _0x56ce6e.SpriteLength;
};
Sprite_OTB_TurnOrder_Battler.prototype.getUnitSideSide = function () {
  return this._unit === $gameParty ? "Actor" : "Enemy";
};
Sprite_OTB_TurnOrder_Battler.prototype.createBackgroundSprite = function () {
  if (!Window_OTB_TurnOrder.Settings.ShowMarkerBg) {
    return;
  }
  const _0x24ce46 = Window_OTB_TurnOrder.Settings;
  const _0x246a91 = this.getUnitSideSide();
  const _0x5861dc = "%1SystemBg".format(_0x246a91);
  const _0x48eb0e = new Sprite();
  _0x48eb0e.anchor.x = this.anchor.x;
  _0x48eb0e.anchor.y = this.anchor.y;
  if (_0x24ce46[_0x5861dc]) {
    _0x48eb0e.bitmap = ImageManager.loadSystem(_0x24ce46[_0x5861dc]);
  } else {
    const _0x1ac229 = this.bitmapWidth();
    const _0x473442 = this.bitmapHeight();
    _0x48eb0e.bitmap = new Bitmap(_0x1ac229, _0x473442);
    const _0x417c41 = ColorManager.getColor(_0x24ce46['%1BgColor1'.format(_0x246a91)]);
    const _0x6b9fdb = ColorManager.getColor(_0x24ce46["%1BgColor2".format(_0x246a91)]);
    _0x48eb0e.bitmap.gradientFillRect(0x0, 0x0, _0x1ac229, _0x473442, _0x417c41, _0x6b9fdb, true);
  }
  this._backgroundSprite = _0x48eb0e;
  this.addChild(this._backgroundSprite);
  this.width = this._backgroundSprite.width;
  this.height = this._backgroundSprite.height;
};
Sprite_OTB_TurnOrder_Battler.prototype.createGraphicSprite = function () {
  const _0x449f3c = new Sprite();
  _0x449f3c.anchor.x = this.anchor.x;
  _0x449f3c.anchor.y = this.anchor.y;
  this._graphicSprite = _0x449f3c;
  this.addChild(this._graphicSprite);
  this.processUpdateGraphic();
};
Sprite_OTB_TurnOrder_Battler.prototype.createBorderSprite = function () {
  if (!Window_OTB_TurnOrder.Settings.ShowMarkerBorder) {
    return;
  }
  const _0x3382e1 = Window_OTB_TurnOrder.Settings;
  const _0x4978c7 = this.getUnitSideSide();
  const _0x4d10b1 = "%1SystemBorder".format(_0x4978c7);
  const _0x422e28 = new Sprite();
  _0x422e28.anchor.x = this.anchor.x;
  _0x422e28.anchor.y = this.anchor.y;
  if (_0x3382e1[_0x4d10b1]) {
    _0x422e28.bitmap = ImageManager.loadSystem(_0x3382e1[_0x4d10b1]);
  } else {
    let _0x79ce09 = this.bitmapWidth();
    let _0x4e86d6 = this.bitmapHeight();
    let _0x4667e8 = this.getBorderThickness();
    _0x422e28.bitmap = new Bitmap(_0x79ce09, _0x4e86d6);
    const _0x1f1199 = ColorManager.getColor(_0x3382e1["%1BorderColor".format(_0x4978c7)]);
    _0x422e28.bitmap.fillRect(0x0, 0x0, _0x79ce09, _0x4e86d6, '#000000');
    _0x79ce09 -= 0x2;
    _0x4e86d6 -= 0x2;
    _0x422e28.bitmap.fillRect(0x1, 0x1, _0x79ce09, _0x4e86d6, _0x1f1199);
    _0x79ce09 -= _0x4667e8 * 0x2;
    _0x4e86d6 -= _0x4667e8 * 0x2;
    _0x422e28.bitmap.fillRect(0x1 + _0x4667e8, 0x1 + _0x4667e8, _0x79ce09, _0x4e86d6, '#000000');
    _0x79ce09 -= 0x2;
    _0x4e86d6 -= 0x2;
    _0x4667e8 += 0x1;
    _0x422e28.bitmap.clearRect(0x1 + _0x4667e8, 0x1 + _0x4667e8, _0x79ce09, _0x4e86d6);
  }
  this._backgroundSprite = _0x422e28;
  this.addChild(this._backgroundSprite);
};
Sprite_OTB_TurnOrder_Battler.prototype.getBorderThickness = function () {
  const _0x5b32bd = Window_OTB_TurnOrder.Settings;
  return _0x5b32bd.BorderThickness;
};
Sprite_OTB_TurnOrder_Battler.prototype.createLetterSprite = function () {
  const _0x3d18ae = Window_OTB_TurnOrder.Settings;
  if (!_0x3d18ae.EnemyBattlerDrawLetter) {
    return;
  }
  if (this._unit === $gameParty) {
    return;
  }
  const _0xc4a3ad = this.bitmapWidth();
  const _0x411ae5 = this.bitmapHeight();
  const _0x573ca5 = new Sprite();
  _0x573ca5.anchor.x = this.anchor.x;
  _0x573ca5.anchor.y = this.anchor.y;
  _0x573ca5.bitmap = new Bitmap(_0xc4a3ad, _0x411ae5);
  this._letterSprite = _0x573ca5;
  this.addChild(this._letterSprite);
};
Sprite_OTB_TurnOrder_Battler.prototype.battler = function () {
  return this._unit ? this._unit.members()[this._index] : null;
};
Sprite_OTB_TurnOrder_Battler.prototype.update = function () {
  Sprite_Clickable.prototype.update.call(this);
  this.updatePosition();
  this.checkOpacity();
  this.updateOpacity();
  this.updateGraphic();
  this.updateGraphicHue();
  this.updateLetter();
  this.updateSelectionEffect();
};
Sprite_OTB_TurnOrder_Battler.prototype.moveToPosition = function (_0x2d387e, _0x5b3d01) {
  const _0x4e320a = Window_OTB_TurnOrder.Settings;
  this._positionDuration = _0x4e320a.UpdateFrames;
  this._positionTargetX = _0x2d387e;
  this._positionTargetY = _0x5b3d01;
};
Sprite_OTB_TurnOrder_Battler.prototype.updatePosition = function () {
  if (this._positionDuration > 0x0) {
    const _0x17e225 = this._positionDuration;
    this.x = (this.x * (_0x17e225 - 0x1) + this._positionTargetX) / _0x17e225;
    this.y = (this.y * (_0x17e225 - 0x1) + this._positionTargetY) / _0x17e225;
    this._positionDuration--;
  }
  if (this._positionDuration <= 0x0) {
    this.x = this._positionTargetX;
    this.y = this._positionTargetY;
    if (this.opacity < 0xff && !this._isBattleOver && this._fadeDuration <= 0x0) {
      const _0x2bb92e = this.battler();
      if (_0x2bb92e) {
        this._fadeTarget = _0x2bb92e.isAlive() && _0x2bb92e.isAppeared() ? 0xff : 0x0;
      }
    }
  }
};
Sprite_OTB_TurnOrder_Battler.prototype.defaultPosition = function () {
  return 0x1;
};
Sprite_OTB_TurnOrder_Battler.prototype.containerWindow = function () {
  return SceneManager._scene._otbTurnOrderWindow;
};
Sprite_OTB_TurnOrder_Battler.prototype.containerPosition = function () {
  const _0xa6ebf8 = this.battler();
  if (!_0xa6ebf8) {
    return this.defaultPosition();
  }
  if (_0xa6ebf8 === BattleManager._subject) {
    return 0x0;
  }
  if (BattleManager._actionBattlers.includes(_0xa6ebf8)) {
    const _0x30a037 = BattleManager._actionBattlers.indexOf(_0xa6ebf8) + 0x1;
    return _0x30a037;
  }
  return this.defaultPosition();
};
Sprite_OTB_TurnOrder_Battler.prototype.startFade = function (_0x257f75) {
  const _0x3a8ed8 = Window_OTB_TurnOrder.Settings;
  this._fadeDuration = _0x3a8ed8.UpdateFrames;
  this._fadeTarget = _0x257f75;
};
Sprite_OTB_TurnOrder_Battler.prototype.checkOpacity = function () {
  const _0x2e056c = this.battler();
  if (!_0x2e056c) {
    return;
  }
  if (this._isAlive === _0x2e056c.isAlive() && this._isAppeared === _0x2e056c.isAppeared()) {
    return;
  }
  this._isAlive = _0x2e056c.isAlive();
  this._isAppeared = _0x2e056c.isAppeared();
  let _0x29661d = this._isAlive && this._isAppeared ? 0xff : 0x0;
  this.startFade(_0x29661d);
};
Sprite_OTB_TurnOrder_Battler.prototype.updateOpacity = function () {
  if (this._fadeDuration > 0x0) {
    const _0xbff37b = this._fadeDuration;
    this.opacity = (this.opacity * (_0xbff37b - 0x1) + this._fadeTarget) / _0xbff37b;
    this._fadeDuration--;
    if (this._fadeDuration <= 0x0) {
      this.opacity = this._fadeTarget;
    }
  }
  if (this._isBattleOver) {
    return;
  }
  if (BattleManager._phase === 'battleEnd') {
    this._isBattleOver = true;
    this.startFade(0x0);
  }
};
Sprite_OTB_TurnOrder_Battler.prototype.updateGraphic = function () {
  const _0x1a60f4 = this.battler();
  if (!_0x1a60f4) {
    return;
  }
  let _0x48576e = _0x1a60f4.TurnOrderOTBGraphicType();
  if (_0x1a60f4.isActor() && _0x48576e === "enemy") {
    _0x48576e = "face";
  } else if (_0x1a60f4.isEnemy() && _0x48576e === "svactor") {
    _0x48576e = "enemy";
  }
  if (this._graphicType !== _0x48576e) {
    return this.processUpdateGraphic();
  }
  switch (this._graphicType) {
    case "face":
      if (this._graphicFaceName !== _0x1a60f4.TurnOrderOTBGraphicFaceName()) {
        return this.processUpdateGraphic();
      }
      if (this._graphicFaceIndex !== _0x1a60f4.TurnOrderOTBGraphicFaceIndex()) {
        return this.processUpdateGraphic();
      }
      break;
    case "icon":
      if (this._graphicIconIndex !== _0x1a60f4.TurnOrderOTBGraphicIconIndex()) {
        return this.processUpdateGraphic();
      }
      break;
    case 'enemy':
      if (_0x1a60f4.hasSvBattler()) {
        if (this._graphicSv !== _0x1a60f4.svBattlerName()) {
          return this.processUpdateGraphic();
        }
      } else {
        if (this._graphicEnemy !== _0x1a60f4.battlerName()) {
          return this.processUpdateGraphic();
        }
      }
      break;
    case "svactor":
      if (_0x1a60f4.isActor()) {
        if (this._graphicSv !== _0x1a60f4.battlerName()) {
          return this.processUpdateGraphic();
        }
      } else {
        if (this._graphicEnemy !== _0x1a60f4.battlerName()) {
          return this.processUpdateGraphic();
        }
      }
      break;
  }
};
Sprite_OTB_TurnOrder_Battler.prototype.processUpdateGraphic = function () {
  const _0x1cdbb6 = this.battler();
  if (!_0x1cdbb6) {
    return;
  }
  this._graphicType = _0x1cdbb6.TurnOrderOTBGraphicType();
  if (_0x1cdbb6.isActor() && this._graphicType === 'enemy') {
    this._graphicType = "face";
  } else if (_0x1cdbb6.isEnemy() && this._graphicType === "svactor") {
    this._graphicType = 'enemy';
  }
  let _0x5fad00;
  switch (this._graphicType) {
    case "face":
      this._graphicFaceName = _0x1cdbb6.TurnOrderOTBGraphicFaceName();
      this._graphicFaceIndex = _0x1cdbb6.TurnOrderOTBGraphicFaceIndex();
      _0x5fad00 = ImageManager.loadFace(this._graphicFaceName);
      _0x5fad00.addLoadListener(this.changeFaceGraphicBitmap.bind(this, _0x5fad00));
      break;
    case 'icon':
      this._graphicIconIndex = _0x1cdbb6.createTurnOrderOTBGraphicIconIndex();
      _0x5fad00 = ImageManager.loadSystem("IconSet");
      _0x5fad00.addLoadListener(this.changeIconGraphicBitmap.bind(this, _0x5fad00));
      break;
    case 'enemy':
      if (_0x1cdbb6.hasSvBattler()) {
        this._graphicSv = _0x1cdbb6.svBattlerName();
        _0x5fad00 = ImageManager.loadSvActor(this._graphicSv);
        _0x5fad00.addLoadListener(this.changeSvActorGraphicBitmap.bind(this, _0x5fad00));
      } else if ($gameSystem.isSideView()) {
        this._graphicEnemy = _0x1cdbb6.battlerName();
        _0x5fad00 = ImageManager.loadSvEnemy(this._graphicEnemy);
        _0x5fad00.addLoadListener(this.changeEnemyGraphicBitmap.bind(this, _0x5fad00));
      } else {
        this._graphicEnemy = _0x1cdbb6.battlerName();
        _0x5fad00 = ImageManager.loadEnemy(this._graphicEnemy);
        _0x5fad00.addLoadListener(this.changeEnemyGraphicBitmap.bind(this, _0x5fad00));
      }
      break;
    case 'svactor':
      this._graphicSv = _0x1cdbb6.battlerName();
      _0x5fad00 = ImageManager.loadSvActor(this._graphicSv);
      _0x5fad00.addLoadListener(this.changeSvActorGraphicBitmap.bind(this, _0x5fad00));
      break;
  }
};
Sprite_OTB_TurnOrder_Battler.prototype.changeFaceGraphicBitmap = function (_0xd0fe03) {
  const _0xa63a1b = this._graphicFaceIndex;
  const _0x54aa80 = this.bitmapWidth();
  const _0x90d848 = this.bitmapHeight();
  const _0x5c8784 = Math.max(_0x54aa80, _0x90d848);
  this._graphicSprite.bitmap = new Bitmap(_0x54aa80, _0x90d848);
  const _0x3dbfa7 = this._graphicSprite.bitmap;
  const _0x1d5568 = ImageManager.faceWidth;
  const _0x21ef05 = ImageManager.faceHeight;
  const _0x5bc6bc = _0x5c8784 / Math.max(_0x1d5568, _0x21ef05);
  const _0x46b260 = ImageManager.faceWidth;
  const _0x18907e = ImageManager.faceHeight;
  const _0x34cb47 = _0xa63a1b % 0x4 * _0x1d5568 + (_0x1d5568 - _0x46b260) / 0x2;
  const _0x36ced0 = Math.floor(_0xa63a1b / 0x4) * _0x21ef05 + (_0x21ef05 - _0x18907e) / 0x2;
  const _0x8dd769 = (_0x54aa80 - _0x1d5568 * _0x5bc6bc) / 0x2;
  const _0x4f258e = (_0x90d848 - _0x21ef05 * _0x5bc6bc) / 0x2;
  _0x3dbfa7.blt(_0xd0fe03, _0x34cb47, _0x36ced0, _0x46b260, _0x18907e, _0x8dd769, _0x4f258e, _0x5c8784, _0x5c8784);
};
Sprite_OTB_TurnOrder_Battler.prototype.changeIconGraphicBitmap = function (_0x535c4b) {
  const _0xe98328 = this._graphicIconIndex;
  const _0x15b145 = this.bitmapWidth();
  const _0x4d6d48 = this.bitmapHeight();
  this._graphicSprite.bitmap = new Bitmap(_0x15b145, _0x4d6d48);
  const _0xa0a325 = this._graphicSprite.bitmap;
  const _0x421da9 = ImageManager.iconWidth;
  const _0x12035a = ImageManager.iconHeight;
  const _0x485da5 = Math.min(_0x421da9, _0x12035a, _0x15b145, _0x4d6d48);
  const _0x39137b = _0xe98328 % 0x10 * _0x421da9;
  const _0x2402e7 = Math.floor(_0xe98328 / 0x10) * _0x12035a;
  const _0xe88a73 = Math.floor(Math.max(_0x15b145 - _0x485da5, 0x0) / 0x2);
  const _0x279a6d = Math.floor(Math.max(_0x4d6d48 - _0x485da5, 0x0) / 0x2);
  _0xa0a325.blt(_0x535c4b, _0x39137b, _0x2402e7, _0x421da9, _0x12035a, _0xe88a73, _0x279a6d, _0x485da5, _0x485da5);
};
Sprite_OTB_TurnOrder_Battler.prototype.changeSvActorGraphicBitmap = function (_0xbcdd01) {
  const _0x2e1751 = this.bitmapWidth();
  const _0x237a27 = this.bitmapHeight();
  const _0x44e921 = Math.min(_0x2e1751, _0x237a27);
  this._graphicSprite.bitmap = new Bitmap(_0x2e1751, _0x237a27);
  const _0x3226a9 = this._graphicSprite.bitmap;
  const _0x314a8c = this._graphicSv.match(/\$/i);
  const _0x132aca = _0x314a8c ? 0x1 : ImageManager.svActorHorzCells;
  const _0x2aaa2a = _0x314a8c ? 0x1 : ImageManager.svActorVertCells;
  const _0xc180bc = _0xbcdd01.width / _0x132aca;
  const _0x275506 = _0xbcdd01.height / _0x2aaa2a;
  const _0x3d402b = Math.min(0x1, _0x44e921 / _0xc180bc, _0x44e921 / _0x275506);
  const _0x58673b = _0xc180bc * _0x3d402b;
  const _0x4fe339 = _0x275506 * _0x3d402b;
  const _0x121caa = Math.round((_0x2e1751 - _0x58673b) / 0x2);
  const _0x1ce5bd = Math.round((_0x237a27 - _0x4fe339) / 0x2);
  _0x3226a9.blt(_0xbcdd01, 0x0, 0x0, _0xc180bc, _0x275506, _0x121caa, _0x1ce5bd, _0x58673b, _0x4fe339);
};
Sprite_OTB_TurnOrder_Battler.prototype.changeEnemyGraphicBitmap = function (_0x37b3bd) {
  const _0x5a8d3b = this.bitmapWidth();
  const _0x50bd86 = this.bitmapHeight();
  const _0x317f21 = Math.min(_0x5a8d3b, _0x50bd86);
  this._graphicSprite.bitmap = new Bitmap(_0x5a8d3b, _0x50bd86);
  const _0x7e9dbb = this._graphicSprite.bitmap;
  const _0x385544 = Math.min(0x1, _0x317f21 / _0x37b3bd.width, _0x317f21 / _0x37b3bd.height);
  const _0x8a0a1f = _0x37b3bd.width * _0x385544;
  const _0x28acff = _0x37b3bd.height * _0x385544;
  const _0x4e38c9 = Math.round((_0x5a8d3b - _0x8a0a1f) / 0x2);
  const _0x1ced95 = Math.round((_0x50bd86 - _0x28acff) / 0x2);
  _0x7e9dbb.blt(_0x37b3bd, 0x0, 0x0, _0x37b3bd.width, _0x37b3bd.height, _0x4e38c9, _0x1ced95, _0x8a0a1f, _0x28acff);
};
Sprite_OTB_TurnOrder_Battler.prototype.updateGraphicHue = function () {
  const _0x2aa08a = this.battler();
  if (!_0x2aa08a) {
    return;
  }
  if (!_0x2aa08a.isEnemy()) {
    return;
  }
  if (this._graphicHue === _0x2aa08a.battlerHue()) {
    return;
  }
  this._graphicHue = _0x2aa08a.battlerHue();
  this._graphicSprite.setHue(_0x2aa08a.hasSvBattler() ? 0x0 : this._graphicHue);
};
Sprite_OTB_TurnOrder_Battler.prototype.updateLetter = function () {
  if (!this._letterSprite) {
    return;
  }
  const _0x173a9a = this.battler();
  if (!_0x173a9a) {
    return;
  }
  if (this._letter === _0x173a9a._letter && this._plural === _0x173a9a._plural) {
    return;
  }
  this._letter = _0x173a9a._letter;
  this._plural = _0x173a9a._plural;
  const _0x2272ba = Window_OTB_TurnOrder.Settings;
  const _0x2674e8 = this.bitmapWidth();
  const _0x390012 = this.bitmapHeight();
  const _0x525af5 = this._letterSprite.bitmap;
  _0x525af5.clear();
  if (!this._plural) {
    return;
  }
  _0x525af5.fontFace = _0x2272ba.EnemyBattlerFontFace || $gameSystem.mainFontFace();
  _0x525af5.fontSize = _0x2272ba.EnemyBattlerFontSize || 0x10;
  if (_0x2272ba.OrderDirection) {
    _0x525af5.drawText(this._letter.trim(), _0x2674e8 * 0x1 / 0x8, _0x390012 / 0x2, _0x2674e8, _0x390012 / 0x2, 'left');
  } else {
    _0x525af5.drawText(this._letter.trim(), 0x0, _0x390012 / 0x2, _0x2674e8 * 0x7 / 0x8, _0x390012 / 0x2, "right");
  }
};
Sprite_OTB_TurnOrder_Battler.prototype.updateSelectionEffect = function () {
  const _0x4af5bf = this.battler();
  if (!_0x4af5bf) {
    return;
  }
  const _0x1f810e = _0x4af5bf.battler();
  if (!_0x1f810e) {
    return;
  }
  const _0x21623f = _0x1f810e.mainSprite();
  if (!_0x21623f) {
    return;
  }
  this.setBlendColor(_0x21623f._blendColor);
};
Sprite_OTB_TurnOrder_Battler.prototype.getStateTooltipBattler = function () {
  return null;
};
Sprite_OTB_TurnOrder_Battler.prototype.changeSourceArray = function (_0x2ff606) {
  this._sourceArray = _0x2ff606;
  this.calculateTargetPositions();
  if (this._sourceArray === null) {
    this._instance = -0x1;
  }
};
Sprite_OTB_TurnOrder_Battler.prototype.calculateTargetPositions = function () {
  const _0x49d022 = this.containerWindow();
  if (!_0x49d022) {
    return;
  }
  const _0x40b82e = Window_OTB_TurnOrder.Settings;
  const _0x2c2847 = _0x40b82e.OrderDirection;
  const _0x4f5adf = !!(this._sourceArray === _0x49d022._nextTurn);
  const _0x1a758b = this._instance === -0x1 && BattleManager._subject === this.battler();
  const _0x29b02a = _0x49d022._spriteGroupWidth - _0x40b82e.SpriteThin;
  let _0x288bd6 = Math.ceil(_0x29b02a / (this._sourceArray.length - 0x1 || 0x1));
  _0x288bd6 = Math.min(_0x40b82e.SpriteThin, _0x288bd6);
  let _0x60c562 = 0x0;
  let _0x4c495b = 0x0;
  let _0x229acc = _0x1a758b ? -0x1 : this._sourceArray.indexOf(this);
  if (!_0x1a758b) {
    _0x229acc = this.calculateTargetIndex();
  }
  if (_0x1a758b) {
    _0x60c562 = _0x49d022._subjectX;
  } else if (_0x2c2847) {
    _0x60c562 = (_0x4f5adf ? _0x49d022._nextX : _0x49d022._currentX) + _0x29b02a;
    _0x60c562 -= _0x229acc * _0x288bd6;
  } else {
    _0x60c562 = _0x4f5adf ? _0x49d022._nextX : _0x49d022._currentX;
    _0x60c562 += _0x229acc * _0x288bd6;
  }
  _0x60c562 += this.additionalTargetXAdjustments(_0x229acc, _0x40b82e.SpriteThin - _0x288bd6);
  if (!_0x1a758b && _0x229acc < 0x0) {
    _0x60c562 = this.x;
    _0x4c495b = this.y;
    this.startFade(0x0);
  }
  this.moveToPosition(_0x60c562, _0x4c495b);
};
Sprite_OTB_TurnOrder_Battler.prototype.additionalTargetXAdjustments = function (_0x4081f1, _0x4d341b) {
  return 0x0;
};
Sprite_OTB_TurnOrder_Battler.prototype.calculateTargetIndex = function () {
  const _0x34bfdc = this.containerWindow();
  if (!_0x34bfdc) {
    return 0x0;
  }
  const _0xdbaece = !!(this._sourceArray === _0x34bfdc._nextTurn);
  const _0xd883ee = _0xdbaece ? BattleManager._otb_actionBattlersNext : BattleManager._actionBattlers;
  const _0x66a6f0 = this.battler();
  const _0x3683c1 = VisuMZ.BattleSystemOTB.GetAllIndicies(_0x66a6f0, _0xd883ee);
  return _0x3683c1[this._instance] ?? _0x3683c1[_0x3683c1.length - 0x1] ?? -0x1;
};
function Sprite_OTB_TurnOrder_Preview() {
  this.initialize(...arguments);
}
Sprite_OTB_TurnOrder_Preview.prototype = Object.create(Sprite_OTB_TurnOrder_Battler.prototype);
Sprite_OTB_TurnOrder_Preview.prototype.constructor = Sprite_OTB_TurnOrder_Preview;
Sprite_OTB_TurnOrder_Preview.prototype.initialize = function (_0x1d3dad, _0x1e6524, _0x1b7619, _0x2c3806) {
  this._offset = _0x2c3806;
  Sprite_OTB_TurnOrder_Battler.prototype.initialize.call(this, _0x1d3dad, _0x1e6524, _0x1b7619);
  this.adjustForPreview();
};
Sprite_OTB_TurnOrder_Preview.prototype.adjustForPreview = function () {
  const _0x509103 = Window_OTB_TurnOrder.Settings;
  this.scale.x = this.scale.y = _0x509103.PreviewScale;
};
Sprite_OTB_TurnOrder_Preview.prototype.getUnitSideSide = function () {
  return this._unit === $gameParty ? "PreviewActor" : 'PreviewEnemy';
};
Sprite_OTB_TurnOrder_Preview.prototype.getBorderThickness = function () {
  const _0x28c090 = Window_OTB_TurnOrder.Settings;
  return Math.ceil(_0x28c090.BorderThickness / (_0x28c090.PreviewScale || 0.01));
};
Sprite_OTB_TurnOrder_Preview.prototype.moveToPosition = function (_0x54382c, _0x5c9a50) {
  Sprite_OTB_TurnOrder_Battler.prototype.moveToPosition.call(this, _0x54382c, _0x5c9a50);
  this.x = this._positionTargetX;
  this.y = this._positionTargetY;
};
Sprite_OTB_TurnOrder_Preview.prototype.startFade = function (_0x533b4d) {
  Sprite_OTB_TurnOrder_Battler.prototype.startFade.call(this, _0x533b4d);
  if (_0x533b4d > 0x0) {
    this._fadeDuration = 0x1;
  } else {
    this._fadeDuration /= 0x2;
    this._fadeDuration = Math.floor(this._fadeDuration);
  }
};
Sprite_OTB_TurnOrder_Preview.prototype.additionalTargetXAdjustments = function (_0x26ffa6, _0x105d52) {
  const _0x192971 = Window_OTB_TurnOrder.Settings;
  if (_0x26ffa6 > 0x0) {
    if (this._offset > 0x0) {
      return _0x192971.OrderDirection ? -_0x192971.SpriteThin : _0x192971.SpriteThin;
    } else {
      if (this._offset < 0x0) {
        return _0x192971.OrderDirection ? -_0x105d52 : _0x105d52;
      }
    }
  }
  return 0x0;
};
Sprite_OTB_TurnOrder_Preview.prototype.calculateTargetIndex = function () {
  const _0x17b4f2 = this.containerWindow();
  const _0x2faa7b = !!(this._sourceArray === _0x17b4f2._nextTurn);
  const _0x1edeac = _0x2faa7b ? BattleManager._otb_actionBattlersNext : BattleManager._actionBattlers;
  let _0x30e75d = 0x0;
  let _0x235d8d = _0x1edeac.length - 0x1;
  if (_0x2faa7b) {
    _0x30e75d = Math.max(0x0, VisuMZ.BattleSystemOTB.getInfinityClamp(_0x1edeac));
  }
  let _0x380a17 = Sprite_OTB_TurnOrder_Battler.prototype.calculateTargetIndex.call(this);
  _0x380a17 += this._offset;
  return _0x380a17.clamp(_0x30e75d, _0x235d8d);
};
Sprite_OTB_TurnOrder_Preview.prototype.updateSelectionEffect = function () {};
Window_Selectable.prototype.isBattleItemWindowOTB = function () {
  return false;
};
VisuMZ.BattleSystemOTB.Window_Selectable_select = Window_Selectable.prototype.select;
Window_Selectable.prototype.select = function (_0x44534c) {
  VisuMZ.BattleSystemOTB.Window_Selectable_select.call(this, _0x44534c);
  if (this.isBattleItemWindowOTB() && this.active) {
    this.applyBattleItemWindowOTB();
  }
};
Window_Selectable.prototype.applyBattleItemWindowOTB = function () {
  BattleManager.otbPreviewOrderChange();
};
VisuMZ.BattleSystemOTB.Window_Help_setItem = Window_Help.prototype.setItem;
Window_Help.prototype.setItem = function (_0x2f8925) {
  if (BattleManager.isOTB() && _0x2f8925 && _0x2f8925.note && _0x2f8925.note.match(/<(?:OTB) HELP>\s*([\s\S]*)\s*<\/(?:OTB) HELP>/i)) {
    this.setText(String(RegExp.$1));
  } else {
    VisuMZ.BattleSystemOTB.Window_Help_setItem.call(this, _0x2f8925);
  }
};
Window_ActorCommand.prototype.isBattleItemWindowOTB = function () {
  return BattleManager.isOTB();
};
Window_ActorCommand.prototype.applyBattleItemWindowOTB = function () {
  const _0x5302e8 = BattleManager.inputtingAction();
  if (_0x5302e8) {
    const _0x164935 = this.currentSymbol();
    switch (_0x164935) {
      case 'attack':
        _0x5302e8.setAttack();
        break;
      case 'guard':
        _0x5302e8.setGuard();
        break;
      case "singleSkill":
        _0x5302e8.setSkill(this.currentExt());
        break;
      default:
        _0x5302e8.setSkill(null);
        break;
    }
  }
  Window_Command.prototype.applyBattleItemWindowOTB.call(this);
};
Window_BattleSkill.prototype.isBattleItemWindowOTB = function () {
  return BattleManager.isOTB();
};
Window_BattleSkill.prototype.applyBattleItemWindowOTB = function () {
  const _0x4f4d0f = this.item();
  const _0x499773 = BattleManager.inputtingAction();
  if (_0x499773) {
    _0x499773.setSkill(_0x4f4d0f ? _0x4f4d0f.id : null);
  }
  Window_SkillList.prototype.applyBattleItemWindowOTB.call(this);
};
Window_BattleItem.prototype.isBattleItemWindowOTB = function () {
  return BattleManager.isOTB();
};
Window_BattleItem.prototype.applyBattleItemWindowOTB = function () {
  const _0x5ad04f = this.item();
  const _0x4d760a = BattleManager.inputtingAction();
  if (_0x4d760a) {
    _0x4d760a.setItem(_0x5ad04f ? _0x5ad04f.id : null);
  }
  Window_ItemList.prototype.applyBattleItemWindowOTB.call(this);
};
Window_BattleActor.prototype.isBattleItemWindowOTB = function () {
  return BattleManager.isOTB();
};
Window_BattleEnemy.prototype.isBattleItemWindowOTB = function () {
  return BattleManager.isOTB();
};
function Window_OTB_TurnOrder() {
  this.initialize(...arguments);
}
Window_OTB_TurnOrder.prototype = Object.create(Window_Base.prototype);
Window_OTB_TurnOrder.prototype.constructor = Window_OTB_TurnOrder;
Window_OTB_TurnOrder.Settings = VisuMZ.BattleSystemOTB.Settings.TurnOrder;
Window_OTB_TurnOrder.prototype.initialize = function () {
  const _0x2b4cc6 = this.windowRect();
  this.initHomePositions(_0x2b4cc6);
  Window_Base.prototype.initialize.call(this, _0x2b4cc6);
  this.opacity = 0x0;
  this.drawDimmedArea();
  this.drawUiText();
  this.createSpriteContainers();
  this.updateVisibility();
};
Window_OTB_TurnOrder.prototype.windowRect = function () {
  const _0x149b77 = Window_OTB_TurnOrder.Settings;
  const _0x4c906b = SceneManager._scene._statusWindow.height;
  let _0x5b2c1e = Graphics.width - _0x149b77.ScreenBuffer * 0x2;
  let _0x49e3cd = _0x149b77.SpriteLength + this.lineHeight();
  let _0x32f1ac = _0x149b77.ScreenBuffer;
  let _0x3746d1 = 0x0;
  switch (_0x149b77.DisplayPosition) {
    case "bottom":
      _0x3746d1 = Graphics.height - _0x4c906b - _0x149b77.ScreenBuffer - _0x49e3cd;
      break;
    default:
      _0x3746d1 = _0x149b77.ScreenBuffer;
      break;
  }
  if (Imported.VisuMZ_3_SideviewBattleUI && BattleManager.isUsingSideviewUiLayout()) {
    const _0x378b94 = VisuMZ.SideviewBattleUI.Settings.StatusWindow;
    _0x5b2c1e -= _0x378b94.WidthBase + _0x378b94.MoveDistance;
    _0x5b2c1e -= _0x149b77.ScreenBuffer;
  }
  _0x32f1ac += _0x149b77.DisplayOffsetX || 0x0;
  _0x3746d1 += _0x149b77.DisplayOffsetY || 0x0;
  return new Rectangle(_0x32f1ac, _0x3746d1, _0x5b2c1e, _0x49e3cd);
};
Window_OTB_TurnOrder.prototype.initHomePositions = function (_0x31f61a) {
  this._targetHomeX = this._homeX = _0x31f61a.x;
  this._targetHomeY = this._homeY = _0x31f61a.y;
  this._homeDuration = 0x0;
  const _0xacfcc4 = Window_OTB_TurnOrder.Settings;
  this._spriteGroupWidth = Math.ceil((_0x31f61a.width - _0xacfcc4.SpriteThin - _0xacfcc4.SubjectDistance * 0x2) / 0x2);
  if (_0xacfcc4.OrderDirection) {
    this._subjectX = _0x31f61a.width - _0xacfcc4.SpriteThin;
    this._currentX = this._spriteGroupWidth + _0xacfcc4.SubjectDistance;
    this._nextX = 0x0;
  } else {
    this._subjectX = 0x0;
    this._currentX = _0xacfcc4.SpriteThin + _0xacfcc4.SubjectDistance;
    this._nextX = this._currentX + _0xacfcc4.SubjectDistance + this._spriteGroupWidth;
  }
};
Window_OTB_TurnOrder.prototype.updatePadding = function () {
  this.padding = 0x0;
};
Window_OTB_TurnOrder.prototype.drawDimmedArea = function () {
  const _0x2c27e3 = Window_OTB_TurnOrder.Settings;
  if (_0x2c27e3.BgDimStyle === "transparent") {
    return;
  }
  if (_0x2c27e3.BgDimStyle === "image" && _0x2c27e3.BgImageFilename !== '') {
    const _0x4aa187 = ImageManager.loadSystem(_0x2c27e3.BgImageFilename);
    _0x4aa187.addLoadListener(this.drawBgImage.bind(this, _0x4aa187));
    return;
  }
  ;
  const _0x1c1c54 = this.contentsBack;
  const _0x29873d = ColorManager.dimColor1();
  const _0x3d26b1 = ColorManager.dimColor2();
  const _0x3a92f6 = this._subjectX;
  const _0x2d3b94 = _0x2c27e3.SpriteThin;
  const _0x4370af = _0x2c27e3.SpriteLength;
  const _0xa01970 = this._currentX;
  const _0x4b8360 = this._nextX;
  const _0x6de6ca = this._spriteGroupWidth;
  switch (_0x2c27e3.BgDimStyle) {
    case "gradient":
      if (_0x2c27e3.OrderDirection) {
        _0x1c1c54.gradientFillRect(_0x3a92f6, 0x0, _0x2d3b94 / 0x2, _0x4370af, _0x3d26b1, _0x29873d, false);
        _0x1c1c54.fillRect(_0x3a92f6 + _0x2d3b94 / 0x2, 0x0, _0x2d3b94 / 0x2, _0x4370af, _0x29873d);
        _0x1c1c54.gradientFillRect(_0xa01970, 0x0, _0x6de6ca / 0x2, _0x4370af, _0x3d26b1, _0x29873d, false);
        _0x1c1c54.fillRect(_0xa01970 + _0x6de6ca / 0x2, 0x0, _0x6de6ca / 0x2, _0x4370af, _0x29873d);
        _0x1c1c54.gradientFillRect(_0x4b8360, 0x0, _0x6de6ca / 0x2, _0x4370af, _0x3d26b1, _0x29873d, false);
        _0x1c1c54.fillRect(_0x4b8360 + _0x6de6ca / 0x2, 0x0, _0x6de6ca / 0x2, _0x4370af, _0x29873d);
      } else {
        _0x1c1c54.fillRect(_0x3a92f6, 0x0, _0x2d3b94 / 0x2, _0x4370af, _0x29873d);
        _0x1c1c54.gradientFillRect(_0x3a92f6 + _0x2d3b94 / 0x2, 0x0, _0x2d3b94 / 0x2, _0x4370af, _0x29873d, _0x3d26b1, false);
        _0x1c1c54.fillRect(_0xa01970, 0x0, _0x6de6ca / 0x2, _0x4370af, _0x29873d);
        _0x1c1c54.gradientFillRect(_0xa01970 + _0x6de6ca / 0x2, 0x0, _0x6de6ca / 0x2, _0x4370af, _0x29873d, _0x3d26b1, false);
        _0x1c1c54.fillRect(_0x4b8360, 0x0, _0x6de6ca / 0x2, _0x4370af, _0x29873d);
        _0x1c1c54.gradientFillRect(_0x4b8360 + _0x6de6ca / 0x2, 0x0, _0x6de6ca / 0x2, _0x4370af, _0x29873d, _0x3d26b1, false);
      }
      break;
    default:
      _0x1c1c54.fillRect(_0x3a92f6, 0x0, _0x2d3b94, _0x4370af, _0x29873d);
      _0x1c1c54.fillRect(_0xa01970, 0x0, _0x6de6ca, _0x4370af, _0x29873d);
      _0x1c1c54.fillRect(_0x4b8360, 0x0, _0x6de6ca, _0x4370af, _0x29873d);
      break;
  }
};
Window_OTB_TurnOrder.prototype.drawBgImage = function (_0x445015) {
  this._bgImageSprite = new Sprite();
  this._bgImageSprite.bitmap = _0x445015;
  this.addChildToBack(this._bgImageSprite);
  const _0x5f0018 = Window_OTB_TurnOrder.Settings;
  this._bgImageSprite.x = _0x5f0018.BgImageOffsetX;
  this._bgImageSprite.y = _0x5f0018.BgImageOffsetY;
};
Window_OTB_TurnOrder.prototype.drawUiText = function () {
  this.contents.clear();
  this.resetFontSettings();
  const _0x29f49f = Window_OTB_TurnOrder.Settings;
  this.contents.fontSize = _0x29f49f.UiFontSize;
  let _0x1997e5 = _0x29f49f.UiAlignment;
  if (_0x1997e5 === 'auto') {
    _0x1997e5 = _0x29f49f.OrderDirection ? 'right' : "left";
  }
  let _0xf2e45d = _0x29f49f.SpriteLength;
  if (_0x29f49f.UiSubjectText !== '') {
    const _0x8dc1bd = this._subjectX + _0x29f49f.UiSubjectOffsetX;
    const _0x2d0c37 = _0xf2e45d + _0x29f49f.UiSubjectOffsetY;
    const _0x59fea2 = _0x29f49f.SpriteThin;
    this.drawText(_0x29f49f.UiSubjectText, _0x8dc1bd, _0x2d0c37, _0x59fea2, 'center');
  }
  if (_0x29f49f.UiCurrentText !== '') {
    const _0xd5dbaa = this._currentX + _0x29f49f.UiCurrentOffsetX;
    const _0x231d96 = _0xf2e45d + _0x29f49f.UiCurrentOffsetY;
    const _0x3c5ff0 = this._spriteGroupWidth;
    this.drawText(_0x29f49f.UiCurrentText, _0xd5dbaa, _0x231d96, _0x3c5ff0, _0x1997e5);
  }
  if (_0x29f49f.UiNextText !== '') {
    const _0x8eb3e4 = this._nextX + _0x29f49f.UiNextOffsetX;
    const _0x54ed06 = _0xf2e45d + _0x29f49f.UiNextOffsetY;
    const _0x4f74fa = this._spriteGroupWidth;
    this.drawText(_0x29f49f.UiNextText, _0x8eb3e4, _0x54ed06, _0x4f74fa, _0x1997e5);
  }
};
Window_OTB_TurnOrder.prototype.createSpriteContainers = function () {
  const _0x487d4c = Window_OTB_TurnOrder.Settings;
  this._spriteContainer = new Sprite();
  this.addChild(this._spriteContainer);
  this._subject = null;
  this._currentTurn = [];
  this._nextTurn = [];
  this._previewContainer = new Sprite();
  this._previewContainer.x = _0x487d4c.PreviewOffsetX;
  this._previewContainer.y = _0x487d4c.PreviewOffsetY;
  this._previewContainer.x -= Math.ceil(_0x487d4c.SpriteThin * 0.5 * _0x487d4c.PreviewScale);
  if (_0x487d4c.OrderDirection) {
    this._previewContainer.x += _0x487d4c.SpriteThin;
  }
  this._previewContainer.y -= Math.ceil(_0x487d4c.SpriteLength * 0.5 * _0x487d4c.PreviewScale);
  this.addChild(this._previewContainer);
  this._previewCurrent = [];
  this._previewNext = [];
};
Window_OTB_TurnOrder.prototype.update = function () {
  Window_Base.prototype.update.call(this);
  this.updateTurnOrders();
  this.updatePosition();
  this.updateVisibility();
  this.sortContainer();
};
Window_OTB_TurnOrder.prototype.requestUpdateTurnOrders = function () {
  this._requestTurnOrderUpdate = true;
};
Window_OTB_TurnOrder.prototype.updateTurnOrders = function () {
  if (!this._requestTurnOrderUpdate) {
    return;
  }
  this._requestTurnOrderUpdate = false;
  for (const _0x5af46b of this._currentTurn) {
    if (!_0x5af46b) {
      continue;
    }
    _0x5af46b.calculateTargetPositions();
  }
  for (const _0x29f062 of this._nextTurn) {
    if (!_0x29f062) {
      continue;
    }
    _0x29f062.calculateTargetPositions();
  }
};
Window_OTB_TurnOrder.prototype.updatePosition = function () {
  const _0x414c4b = Window_OTB_TurnOrder.Settings;
  if (_0x414c4b.DisplayPosition !== "top") {
    return;
  }
  if (!_0x414c4b.RepositionTopForHelp) {
    return;
  }
  const _0x4c57a7 = SceneManager._scene._helpWindow;
  if (!_0x4c57a7) {
    return;
  }
  if (_0x4c57a7.visible) {
    this.x = this._homeX + (_0x414c4b.RepositionTopHelpX || 0x0);
    this.y = this._homeY + (_0x414c4b.RepositionTopHelpY || 0x0);
  } else {
    this.x = this._homeX;
    this.y = this._homeY;
  }
  const _0x1b7f5b = SceneManager._scene._windowLayer;
  if (Window_OTB_TurnOrder._ogWindowLayerX === undefined) {
    Window_OTB_TurnOrder._ogWindowLayerX = Math.round((Graphics.width - Math.min(Graphics.boxWidth, _0x1b7f5b.width)) / 0x2);
  }
  if (Window_OTB_TurnOrder._ogWindowLayerY === undefined) {
    Window_OTB_TurnOrder._ogWindowLayerY = Math.round((Graphics.height - Math.min(Graphics.boxHeight, _0x1b7f5b.height)) / 0x2);
  }
  ;
  this.x += _0x1b7f5b.x - Window_OTB_TurnOrder._ogWindowLayerX;
  this.y += _0x1b7f5b.y - Window_OTB_TurnOrder._ogWindowLayerY;
};
Window_OTB_TurnOrder.prototype.updateVisibility = function () {
  this.visible = $gameSystem.isBattleSystemOTBTurnOrderVisible();
  if (BattleManager._phase === "battleEnd") {
    if (!this._fadeSpeed) {
      const _0x1db605 = Window_OTB_TurnOrder.Settings;
      this._fadeSpeed = Math.ceil(0xff / (_0x1db605.UpdateFrames || 0x1));
    }
    this.opacity -= this._fadeSpeed;
    this.contentsOpacity -= this._fadeSpeed;
    this._contentsBackSprite.opacity -= this._fadeSpeed;
  }
};
Window_OTB_TurnOrder.prototype.sortContainer = function () {
  if (!this._spriteContainer) {
    return;
  }
  const _0x1dee11 = Window_OTB_TurnOrder.Settings;
  const _0x1b7b0b = _0x1dee11.OrderDirection;
  if (_0x1b7b0b) {
    this._spriteContainer.children.sort((_0x1bd6f2, _0x5dfbeb) => _0x1bd6f2.x - _0x5dfbeb.x);
  } else {
    this._spriteContainer.children.sort((_0x5361db, _0xd6fc23) => _0xd6fc23.x - _0x5361db.x);
  }
};
Window_OTB_TurnOrder.prototype.removeSprite = function (_0x343e4e) {
  if (!_0x343e4e) {
    return;
  }
  if (_0x343e4e._sourceArray) {
    _0x343e4e._sourceArray.remove(_0x343e4e);
  }
  const _0x2456e1 = Window_OTB_TurnOrder.Settings;
  const _0x27d171 = 16.666666666666668 * _0x2456e1.UpdateFrames + 0x1f4;
  _0x343e4e.startFade(0x0);
  setTimeout(this.processSpriteRemoval.bind(this, _0x343e4e), _0x27d171);
};
Window_OTB_TurnOrder.prototype.processSpriteRemoval = function (_0x328606) {
  if (_0x328606._sourceArray) {
    _0x328606._sourceArray.remove(_0x328606);
  }
  this._spriteContainer.removeChild(_0x328606);
  this._previewContainer.removeChild(_0x328606);
};
Window_OTB_TurnOrder.prototype.removeCurrentSubject = function () {
  if (!this._subject) {
    return;
  }
  this.removeSprite(this._subject);
};
Window_OTB_TurnOrder.prototype.shiftNextTurnSpritesToCurrentTurn = function () {
  while (this._currentTurn.length) {
    const _0x1c88d8 = this._currentTurn.shift();
    _0x1c88d8.startFade(0x0);
  }
  while (this._nextTurn.length) {
    const _0x41316c = this._nextTurn.shift();
    if (!_0x41316c) {
      continue;
    }
    this._currentTurn.push(_0x41316c);
  }
  for (const _0x1da212 of this._currentTurn) {
    if (!_0x1da212) {
      continue;
    }
    _0x1da212.changeSourceArray(this._currentTurn);
  }
};
Window_OTB_TurnOrder.prototype.createTurnOrderSprites = function (_0x5ecf80, _0x15dbf2) {
  const _0x37eb22 = _0x5ecf80 === BattleManager._actionBattlers ? this._currentTurn : this._nextTurn;
  const _0x5430e6 = {};
  for (const _0x438d03 of _0x5ecf80) {
    const _0x22729f = "%1-%2".format(_0x438d03.isActor() ? 'actor' : "enemy", _0x438d03.index());
    _0x5430e6[_0x22729f] = _0x5430e6[_0x22729f] || 0x0;
    const _0x57ade4 = _0x5430e6[_0x22729f]++;
    const _0xf76668 = new Sprite_OTB_TurnOrder_Battler(_0x438d03, _0x57ade4, _0x37eb22);
    this._spriteContainer.addChild(_0xf76668);
    _0x37eb22.push(_0xf76668);
  }
  for (const _0x59cbd8 of _0x37eb22) {
    if (!_0x59cbd8) {
      continue;
    }
    _0x59cbd8.startFade(0xff);
    _0x59cbd8.calculateTargetPositions();
    if (_0x15dbf2) {
      _0x59cbd8.opacity = 0xff;
      _0x59cbd8.x = _0x59cbd8._positionTargetX;
      _0x59cbd8._positionDuration = 0x0;
    }
  }
};
Window_OTB_TurnOrder.prototype.createNewTurnOrderSprites = function () {
  const _0x5adaca = BattleManager._otb_actionBattlersNext;
  this.createTurnOrderSprites(_0x5adaca);
};
Window_OTB_TurnOrder.prototype.shiftTurnOrderForSubject = function (_0x4c7874, _0x41760e) {
  this.removeCurrentSubject();
  for (const _0xe265f2 of this._currentTurn) {
    if (!_0xe265f2) {
      continue;
    }
    if (_0xe265f2.battler() === _0x4c7874) {
      _0xe265f2._instance = _0xe265f2._instance || 0x0;
      _0xe265f2._instance--;
    }
  }
  const _0x5ed57d = this._currentTurn.findIndex(_0x57d424 => _0x57d424.battler() === _0x4c7874);
  if (this._currentTurn[_0x5ed57d]) {
    this._subject = this._currentTurn[_0x5ed57d];
    this._currentTurn[_0x5ed57d].calculateTargetPositions();
    this._currentTurn.splice(_0x5ed57d, 0x1);
  } else {
    if (_0x4c7874) {
      const _0x56a584 = new Sprite_OTB_TurnOrder_Battler(_0x4c7874, -0x1, null);
      this._spriteContainer.addChild(_0x56a584);
      this._subject = _0x56a584;
      _0x56a584.startFade(0xff);
      _0x56a584._positionDuration = 0x258;
      _0x56a584.x = this._subjectX;
      _0x56a584._positionTargetX = this._subjectX;
      if (_0x41760e) {
        _0x56a584.opacity = 0xff;
      }
    }
  }
  for (const _0x4c5915 of this._currentTurn) {
    if (!_0x4c5915) {
      continue;
    }
    _0x4c5915.calculateTargetPositions();
  }
};
Window_OTB_TurnOrder.prototype.removeUnableTurnOrderSprites = function () {
  for (const _0x4cffa3 of this._currentTurn) {
    if (!_0x4cffa3) {
      continue;
    }
    const _0x25190c = _0x4cffa3.battler();
    if (BattleManager._actionBattlers.includes(_0x25190c)) {
      continue;
    }
    this.removeSprite(_0x4cffa3);
  }
  for (const _0x25c183 of this._nextTurn) {
    if (!_0x25c183) {
      continue;
    }
    const _0x53eefa = _0x25c183.battler();
    if (BattleManager._otb_actionBattlersNext.includes(_0x53eefa)) {
      continue;
    }
    this.removeSprite(_0x25c183);
  }
};
Window_OTB_TurnOrder.prototype.addBattlerToTurnOrderAtEnd = function (_0x4a62f5, _0x314910) {
  const _0x3b0a0c = _0x314910 === BattleManager._actionBattlers ? this._currentTurn : this._nextTurn;
  if (!_0x3b0a0c) {
    return;
  }
  const _0x5747b2 = VisuMZ.BattleSystemOTB.GetAllIndicies(_0x4a62f5, _0x314910);
  const _0x6591cd = _0x5747b2.length - 0x1;
  const _0x22a9b5 = new Sprite_OTB_TurnOrder_Battler(_0x4a62f5, _0x6591cd, _0x3b0a0c);
  this._spriteContainer.addChild(_0x22a9b5);
  _0x3b0a0c.push(_0x22a9b5);
  _0x22a9b5.startFade(0xff);
  this.requestUpdateTurnOrders();
};
Window_OTB_TurnOrder.prototype.addBattlerToTurnOrderAtStart = function (_0x19d935, _0x5047de) {
  const _0x4ac50c = _0x5047de === BattleManager._actionBattlers ? this._currentTurn : this._nextTurn;
  if (!_0x4ac50c) {
    return;
  }
  for (const _0x58fd5a of _0x4ac50c) {
    if (!_0x58fd5a) {
      continue;
    }
    if (_0x58fd5a.battler() === _0x19d935) {
      _0x58fd5a._instance = _0x58fd5a._instance || 0x0;
      _0x58fd5a._instance++;
    }
  }
  const _0x13efc2 = new Sprite_OTB_TurnOrder_Battler(_0x19d935, 0x0, _0x4ac50c);
  this._spriteContainer.addChild(_0x13efc2);
  _0x4ac50c.unshift(_0x13efc2);
  _0x13efc2.startFade(0xff);
  _0x13efc2._positionDuration = 0x258;
  _0x13efc2.x = this._subjectX;
  this.requestUpdateTurnOrders();
};
Window_OTB_TurnOrder.prototype.addForceActionBattler = function (_0x1d54d5, _0x530215) {
  const _0x14d319 = this._currentTurn;
  if (!_0x14d319) {
    return;
  }
  let _0x250a13 = 0x0;
  for (let _0x2aefd7 = 0x0; _0x2aefd7 < _0x530215; _0x2aefd7++) {
    const _0x29eb1a = _0x14d319[_0x2aefd7];
    if (!_0x29eb1a) {
      continue;
    }
    if (_0x29eb1a.battler() !== _0x1d54d5) {
      continue;
    }
    _0x250a13 = _0x29eb1a._instance + 0x1;
  }
  for (let _0x199945 = _0x530215; _0x199945 < _0x14d319.length; _0x199945++) {
    const _0x30c606 = _0x14d319[_0x199945];
    if (!_0x30c606) {
      continue;
    }
    if (_0x30c606.battler() !== _0x1d54d5) {
      continue;
    }
    _0x30c606._instance = _0x30c606._instance || 0x0;
    _0x30c606._instance++;
  }
  const _0x1f8f90 = new Sprite_OTB_TurnOrder_Battler(_0x1d54d5, _0x250a13, _0x14d319);
  this._spriteContainer.addChild(_0x1f8f90);
  _0x14d319.splice(_0x530215, 0x0, _0x1f8f90);
  _0x1f8f90.startFade(0xff);
  _0x1f8f90._positionDuration = 0x258;
  _0x1f8f90.x = this._subjectX;
  this.requestUpdateTurnOrders();
};
Window_OTB_TurnOrder.prototype.resumeTurnOrderSprites = function () {
  this.createTurnOrderSprites(BattleManager._actionBattlers, true);
  this.createTurnOrderSprites(BattleManager._otb_actionBattlersNext, true);
  this.shiftTurnOrderForSubject(BattleManager._subject, true);
  this.sortContainer();
};
Window_OTB_TurnOrder.prototype.previewOrderByAction = function (_0x18b909) {
  this.clearOrderPreview();
  if (_0x18b909 && _0x18b909.item() !== null) {
    this.createOrderPreview(_0x18b909);
  }
};
Window_OTB_TurnOrder.prototype.clearOrderPreview = function () {
  for (const _0x5d1bc8 of this._previewContainer.children) {
    if (!_0x5d1bc8) {
      continue;
    }
    this.removeSprite(_0x5d1bc8);
  }
};
Window_OTB_TurnOrder.prototype.createOrderPreview = function (_0x2b3d97) {
  const _0x5dfce2 = _0x2b3d97.subject();
  const _0x49f577 = _0x2b3d97.otbCalcUserCurrentOrderChange();
  const _0x2b4a39 = _0x2b3d97.otbCalcUserNextOrderChange();
  if (_0x49f577 !== 0x0) {
    this.createOrderPreviewSprite(_0x5dfce2, false, _0x49f577);
  }
  if (_0x2b4a39 !== 0x0) {
    this.createOrderPreviewSprite(_0x5dfce2, true, _0x2b4a39);
  }
  if (!_0x2b3d97.needsSelection()) {
    return;
  }
  const _0x3ea7fe = SceneManager._scene._actorWindow;
  const _0x4e9412 = SceneManager._scene._enemyWindow;
  let _0x1aa898 = null;
  if (_0x3ea7fe && _0x3ea7fe.active) {
    _0x1aa898 = _0x3ea7fe.actor(_0x3ea7fe.index());
  } else if (_0x4e9412 && _0x4e9412.active) {
    _0x1aa898 = _0x4e9412.enemy();
  }
  if (!_0x1aa898) {
    return;
  }
  const _0x1e33fc = _0x2b3d97.otbCalcTargetCurrentOrderChange(_0x1aa898);
  const _0x46f0ea = _0x2b3d97.otbCalcTargetNextOrderChange(_0x1aa898);
  if (_0x1e33fc !== 0x0) {
    this.createOrderPreviewSprite(_0x1aa898, false, _0x1e33fc);
  }
  if (_0x46f0ea !== 0x0) {
    this.createOrderPreviewSprite(_0x1aa898, true, _0x46f0ea);
  }
};
Window_OTB_TurnOrder.prototype.createOrderPreviewSprite = function (_0x393d24, _0x272ac6, _0x58f16f) {
  if (!_0x393d24) {
    return;
  }
  if (_0x58f16f === 0x0) {
    return;
  }
  const _0x3cca25 = _0x272ac6 ? BattleManager._otb_actionBattlersNext : BattleManager._actionBattlers;
  const _0x43e9d7 = VisuMZ.BattleSystemOTB.GetAllIndicies(_0x393d24, _0x3cca25);
  const _0x522227 = _0x272ac6 ? this._nextTurn : this._currentTurn;
  const _0x35ed21 = _0x272ac6 ? this._previewNext : this._previewCurrent;
  if (_0x43e9d7.length <= 0x0) {
    return;
  }
  for (let _0x29b6b6 = 0x0; _0x29b6b6 < _0x43e9d7.length; _0x29b6b6++) {
    const _0x392ce7 = new Sprite_OTB_TurnOrder_Preview(_0x393d24, _0x29b6b6, _0x522227, _0x58f16f);
    this._previewContainer.addChild(_0x392ce7);
    _0x35ed21.push(_0x392ce7);
    _0x392ce7.calculateTargetPositions();
    _0x392ce7.startFade(0xff);
  }
};