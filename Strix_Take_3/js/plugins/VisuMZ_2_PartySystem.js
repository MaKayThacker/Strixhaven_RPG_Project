//=============================================================================
// VisuStella MZ - Party System
// VisuMZ_2_PartySystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_PartySystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.PartySystem = VisuMZ.PartySystem || {};
VisuMZ.PartySystem.version = 1.31;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.31] [PartySystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Party_System_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * RPG Maker MZ only gives game projects the ability to switch party members
 * within the main menu and nothing more. There's no inherent functionality to
 * lock party members, make party members required, and/or give players the
 * ability to switch party members mid-battle.
 *
 * This plugin will add in all of those functions as well as a dedicated scene
 * for switching party members. Party switching will allow party members to be
 * removed, swapped, and sorted. Through the usage of Plugin Commands, party
 * members can also be locked and/or required for party presence.
 *
 * Those using the VisuStella MZ Battle Core will also have access to features
 * in this plugin that aren't available otherwise. These features give players
 * the functionality to switch out the whole party lineup mid-battle and/or
 * individual party member switching.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Custom scene dedicated to party management.
 * * Change the maximum number of party members that can participate in battle.
 * * Plugin Commands to lock party members.
 * * Plugin Commands to make certain party members required.
 * * Added functionality with Battle Core to switch party members mid-battle.
 * * This comes in the form of changing either the whole party at once.
 * * Or switching individual members out one at a time.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
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
 * Main Menu Formation Command
 *
 * - This command is now changed to send the player to Scene_Party for the
 * player to have a dedicated scene for changing the party.
 *
 * ---
 *
 * Battle Members Array
 *
 * - Previously, the battle members are decided by which actors are lined up
 * first in the party roster. This has been changed to give players the freedom
 * to have a party size less than the maximum. This change is made by changing
 * the way the battle members are determined by using a new array. However, any
 * and all functions utilize the $gameParty.battleMembers() function will still
 * behave as normal.
 *
 * ---
 *
 * Formation Change OK Function
 *
 * - RPG Maker MZ did not do anything with the Game_Actor.isFormationChangeOk
 * function so this plugin overwrote it completely to allow for the new
 * lock and require features to work.
 *
 * ---
 * 
 * Temporary Parties
 * 
 * Temporary parties are very specific parties that will overwrite whatever the
 * player has set as a party. These can include current party members or even
 * actors that haven't joined. The temporary party cannot be changed nor can
 * the positions of said party members can be changed.
 * 
 * When a temporary party is present, menu and battle commands involving
 * changing party members will be disabled.
 * 
 * Once the temporary party is disbanded, the player's selected party will be
 * available once again as well as all of the functions to change party members
 * and their positions.
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
 * VisuMZ_1_BattleCore
 *
 * - If the VisuStella MZ Battle Core plugin is present, players are able to 
 * access party switching functionality mid-battle at will. This can be in the
 * form of switching out the entire active party roster at once or individually
 * for each actor.
 *
 * - Switching Entire Rosters: This can be done by going into this plugin's
 * Plugin Parameters => General => Party Command Window => Add Party Command.
 * If the Party Command Window is accessible, the player will be able to see
 * the option between 'Auto Battle' and 'Options'.
 *
 * - Individual Member Switching: This requires going to VisuMZ_1_BattleCore's
 * Plugin Parameters => Actor Command Window => Battle Commands => Command List
 * and add in the "party" option. The "party" option can also be added to the
 * <Battle Commands> notetag.
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
 * VisuMZ_2_BattleSystemOTB
 * 
 * With Battle System - OTB, the player cannot change entire parties at once
 * from the Party Command Window. The feature will be unaccessible while
 * Order Turn Battle is in play. However, the player can still change party
 * members through the Actor Command Window by having actors replace other
 * actors. Party changing is also available through battle events, Common
 * Events, and script calls.
 * 
 * ---
 * 
 * VisuMZ_2_BattleSystemSTB
 * 
 * With Battle System - STB, the player cannot change entire parties at once
 * from the Party Command Window. The feature will be unaccessible while
 * Standard Turn Battle is in play. However, the player can still change party
 * members through the Actor Command Window by having actors replace other
 * actors. Party changing is also available through battle events, Common
 * Events, and script calls.
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
 * === Party Plugin Commands ===
 * 
 * ---
 *
 * Party: Call Party Scene
 * - Calls the party changing scene.
 *
 * ---
 *
 * Party: Change Max Battle Members
 * - Changes the number of max battle members possible.
 * - Cannot be use mid-battle.
 *
 *   Max Members:
 *   - Changes the number of max battle members possible.
 *   - Use 0 for the game's default number.
 *
 * ---
 *
 * Party: Lock/Unlock Member(s)
 * - Allows you to lock/unlock a party member.
 * - Locked actors cannot change their party position.
 *
 *   Actor ID(s):
 *   - Select which actor(s) to lock/unlock.
 *   - Locked actors cannot change their party position.
 *
 *   Lock?:
 *   - Lock the selected actor(s)?
 *
 * ---
 * 
 * Party: Move Actor(s) to Active
 * - Map Only.
 * - Moves an actor to the active party if there is room.
 * - The actor needs to have joined the party.
 * 
 *   Actor ID(s):
 *   - Select which actor(s) to move to the active party if there is room.
 * 
 * ---
 * 
 * Party: Move Actor(s) to Reserve
 * - Map Only.
 * - Moves an actor to the reserve party.
 * - Must be 1 actor left.
 * - The actor needs to have joined the party.
 * 
 *   Actor ID(s):
 *   - Select which actor(s) to move to the reserve party.
 * 
 * ---
 * 
 * Party: Move Party Index to Reserve
 * - Map only.
 * - Moves an actor in a specific party index to reserve.
 * - Must be 1 actor left.
 * 
 *   Index:
 *   - Type in which index to move.
 *   - Index values start at 0.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * Party: Move Random Reserve to Active
 * - Map only.
 * - Moves a random actor from the reserve party to active.
 * - Must be enough space in active party.
 * 
 * ---
 *
 * Party: Require Member(s)
 * - Allows you to require/free a party member.
 * - Required actors must be in the party to exit the scene.
 *
 *   Actor ID(s):
 *   - Select which actor(s) to require/free.
 *   - Required actors must be in the party to exit the scene.
 *
 *   Require?:
 *   - Make the selected actor(s) required?
 *
 * ---
 * 
 * === Temporary Parties Plugin Commands ===
 * 
 * Temporary parties are very specific parties that will overwrite whatever the
 * player has set as a party. These can include current party members or even
 * actors that haven't joined. The temporary party cannot be changed nor can
 * the positions of said party members can be changed.
 * 
 * When a temporary party is present, menu and battle commands involving
 * changing party members will be disabled.
 * 
 * Once the temporary party is disbanded, the player's selected party will be
 * available once again as well as all of the functions to change party members
 * and their positions.
 * 
 * ---
 * 
 * Temp: Create Temporary Party (Normal)
 * - Creates a temporary party with specific actors.
 * - Can't be used in battle.
 * 
 *   Actor ID(s):
 *   - Select which actor(s) to be added to the temporary party until the
 *     temporary party is disbanded.
 * 
 * ---
 * 
 * Temp: Create Temporary Party (JS)
 * - Creates a temporary party selected with JavaScript.
 * - Can't be used in battle.
 * 
 *   JS: Actor ID(s):
 *   - Use JavaScript to determine which actor(s) are added to the temporary
 *     party until disbanded.
 * 
 * ---
 * 
 * Temp: Disband Temporary Party
 * - Clears temporary party.
 * - Can't be used in battle.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These Plugin Parameters control the overall behaviors pertaining to the
 * Party System added with this plugin. These behaviors range from the maximum
 * number of members that can participate in battle to the availability of the
 * party switching mechanics.
 *
 * ---
 *
 * General
 * 
 *   Max Battle Members:
 *   - Maximum number of battle members.
 *
 * ---
 *
 * Party Scene
 * 
 *   Add Remove Command:
 *   - Add the 'Remove' command to the party scene?
 * 
 *   Locked Member Icon:
 *   - Icon used for a locked party member.
 * 
 *   Required Member Icon:
 *   - Icon used for a required party member.
 *
 * ---
 *
 * Party Command Window
 * - These require VisuMZ_1_BattleCore!
 * 
 *   Add Party Command:
 *   - Add the 'Party' command to the Party Command Window?
 * 
 *   Command Cooldown:
 *   - Cooldown (in turns) for this command to be available again.
 *
 * ---
 *
 * Actor Command Window
 * - These require VisuMZ_1_BattleCore!
 * 
 *   Add Switch Command:
 *   - Add the 'Switch' command to the Actor Command Window?
 * 
 *   Command Cooldown:
 *   - Cooldown (in turns) for this command to be available again.
 * 
 *   Switch Out Animation?:
 *   - Show the sprites switching out when using individual party
 *     member switching?
 * 
 *   TPB: Immediate Action:
 *   - Allow actors to immediate act upon switching in for TPB battle systems?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These Plugin Parameters control the text that you see in-game related to the
 * Party System plugin.
 *
 * ---
 *
 * General
 * 
 *   Active Party:
 *   - Vocabulary used to represent the Active Party.
 * 
 *   Reserve Party:
 *   - Vocabulary used to represent the Reserve Party.
 * 
 *   Status:
 *   - Vocabulary used to represent the Status Window.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Party Scene > Windows
 * 
 *   Empty:
 *   - For the party and status windows when no actor is selected.
 * 
 *   Remove:
 *   - For the remove option.
 *
 * ---
 *
 * Party Scene > Button Assist
 * 
 *   Swap Positions:
 *   - Button assist text for the page up/down commands.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Remove:
 *   - Button assist text for the removal command.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Sort:
 *   - Button assist text for the sort command.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Swap In:
 *   - Button assist text for swapping in actors.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Swap Out:
 *   - Button assist text for swapping out actors.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Battle Scene
 * 
 *   Party Command:
 *   - Command text for entering Party Scene.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Help: Formation:
 *   - Help text for Formation command.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Queue Message:
 *   - Message to say the Party Scene is queued.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Switch Command:
 *   - Command text for switching out members.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Help: Switch:
 *   - Help text for Switch command.
 *   - Requires VisuMZ_1_BattleCore!
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_Party.
 *
 * ---
 *
 * Background Settings
 * 
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 * 
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * If you don't like the locations of the windows in Scene_Party, change them
 * up with these Plugin Parameters, provided that you have an understanding of
 * JavaScript code.
 *
 * ---
 *
 * Active Party Label
 * Active Party Window
 * Reserve Party Label
 * Reserve Party Window
 * Status Label
 * Status Window
 * Battle Switch Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Columns:
 *   - Available only for the Reserve Party Window.
 *   - How many columns do you want there to be for the window?
 * 
 *   Actor Graphic:
 *   - Available only for Active Party Window and Reserve Party Window.
 *   - Choose how the actor graphics appear in the specific windows.
 *     - Face
 *     - Map Sprite
 *     - Sideview Battler (Requires VisuMZ_1_MainMenuCore)
 * 
 *     Map Sprite:
 *     Sideview Battler:
 * 
 *       Offset X:
 *       Offset Y:
 *       - If showing map sprites, offset the x or y coordinates.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
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
 * Version 1.31: August 29, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** New section added to "Major Changes":
 * *** Temporary Parties
 * **** Temporary parties are very specific parties that will overwrite
 *      whatever the player has set as a party. These can include current party
 *      members or even actors that haven't joined. The temporary party cannot
 *      be changed nor can the positions of said party members can be changed.
 * **** When a temporary party is present, menu and battle commands involving
 *      changing party members will be disabled.
 * **** Once the temporary party is disbanded, the player's selected party will
 *      be available once again as well as all of the functions to change party
 *      members and their positions.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Temp: Create Temporary Party (Normal)
 * **** Creates a temporary party with specific actors.
 * *** Temp: Create Temporary Party (JS)
 * **** Creates a temporary party selected with JavaScript.
 * *** Temp: Disband Temporary Party
 * **** Clears temporary party.
 * 
 * Version 1.30: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where party changes with FTB, ETB, and PTB did not replace
 *    the newely added party member on the turn order timeline. Fix by Olivia.
 * 
 * Version 1.29: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug where party changes with PTB did not register correctly.
 *    Fix made by Olivia.
 * 
 * Version 1.28: November 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.27: February 16, 2023
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * Feature Update!
 * ** When holding the "up" keyboard button with the reserve window active, the
 *    return to the active party window will no longer happen unless the "up"
 *    key is released and then pressed again. Update made by Olivia.
 * 
 * Version 1.26: January 20, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.25: July 28, 2022
 * * Bug Fixes!
 * ** Changing party members via actor command with a less than max battle size
 *    after removing a middle member midway through battle will no longer cause
 *    weird results when switching. Fix made by Arisu.
 * ** Party members that were switched out during battle animations with active
 *    TPB/ATB will no longer cause damage popup crashes when switched back in a
 *    follow up battle. Fix made by Arisu.
 * 
 * Version 1.24: March 24, 2022
 * * Compatibility Update!
 * ** Compatibility update with Skills & States Core Passive Conditions
 *    involving the party leader. Update made by Arisu.
 * 
 * Version 1.23: January 13, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: July 16, 2021
 * * Feature Update!
 * ** Added a fail safe that prevents on-battle start events from triggering
 *    when adding party members outside of battle under evented circumstances
 *    that function as a bridge between event and battle. Fix by Irina.
 * 
 * Version 1.21: July 9, 2021
 * * Bug Fixes!
 * ** When using TPB-based battle systems, adding actors to the main party
 *    would not enable them to move. This should be fixed. Fix made by Irina.
 * 
 * Version 1.20: July 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.19: June 18, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.18: April 16, 2021
 * * Documentation Update!
 * ** Fixed typo. Fix made by Arisu.
 * 
 * Version 1.17: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_2_BattleSystemOTB plugin.
 * 
 * Version 1.16: March 19, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.15: March 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Gneral > Battle Scene > Battle Party Icon
 * **** For some reason, we never had a setting that lets you change the party
 *      icon. Well, now there is!
 * 
 * Version 1.14: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Party: Move Party Index to Reserve
 * **** Moves an actor in a specific party index to reserve.
 *      Map only. Must be 1 actor left. You may use code.
 * *** Party: Move Random Reserve to Active
 * **** Moves a random actor from the reserve party to active.
 *      Map only. Must be enough space in active party.
 * 
 * Version 1.13: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Party: Move Actor(s) to Active
 * **** Map only. Moves an actor to the active party if there is room.
 * *** Party: Move Actor(s) to Reserve
 * **** Map only. Moves an actor to the reserve party.
 * 
 * Version 1.12: January 15, 2021
 * * Bug Fixes!
 * ** For battle testing, if the number of battle test members exceeds the
 *    maximum battle member slots, trim them until they match. Fix by Olivia.
 * 
 * Version 1.11: January 1, 2021
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.10: December 25, 2020
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.09: December 18, 2020
 * * Bug Fixes!
 * ** Removing party members in the active party by event command will now be
 *    properly removed from the party. Fix made by Yanfly.
 * 
 * Version 1.08: December 4, 2020
 * * Bug Fixes!
 * ** With TPB battle systems, after switching out party members, the battle
 *    system will no longer carry over any previous active battle members in
 *    the command window. Fix made by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: November 22, 2020
 * * Bug Fixes!
 * ** With Active TPB, switching out a party member mid-action is no longer
 *    possible to prevent bugs. Intead, there party switching action will be
 *    queued and take effect after the action has been completed. Fix made by
 *    Yanfly.
 * * Compatibility Update!
 * ** Game_Party.swapOrder function now works with this plugin. However, keep
 *    in mind that due to how this party system plugin allows you have empty
 *    slots in the active battle party, this function will fill in the empty
 *    slots upon usage. Update made by Yanfly.
 *
 * Version 1.06: November 1, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.05: October 25, 2020
 * * Bug Fixes!
 * ** Plugin Command "Party: Change Max Battle Members" now works again.
 *    Fix made by Arisu.
 *
 * Version 1.04: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.03: October 11, 2020
 * * Bug Fixes!
 * ** Adding party members during battle through the party window command will
 *    no longer cause crashes after they input an action. Fix made by Yanfly.
 * 
 * Version 1.02: October 4, 2020
 * * Bug Fixes!
 * ** Adding party members during test play should now work again.
 *    Fix made by Irina.
 * ** Changing party members mid-battle through the actor command should now
 *    refresh the party followers afterwards. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added by Arisu!
 * *** General > Party Command Window > TPB: Immediate Action
 * **** Allow actors to immediate act upon switching in for TPB battle systems?
 * 
 * Version 1.01: September 27, 2020
 * * Bug Fixes!
 * ** When switching actors with states, buffs, and/or debuffs already applied,
 *    the state icons found in the status window will now switch over properly,
 *    too. Fix made by Arisu.
 *
 * Version 1.00: September 7, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallPartyScene
 * @text Party: Call Party Scene
 * @desc Calls the party changing scene.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeMaxBattleMembers
 * @text Party: Change Max Battle Members
 * @desc Changes the number of max battle members possible.
 * Cannot be use mid-battle.
 *
 * @arg Value:eval
 * @text Max Members
 * @desc Changes the number of max battle members possible.
 * Use 0 for the game's default number.
 * @default 4
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LockPartyMembers
 * @text Party: Lock/Unlock Member(s)
 * @desc Allows you to lock/unlock a party member.
 * Locked actors cannot change their party position.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to lock/unlock.
 * Locked actors cannot change their party position.
 * @default ["1"]
 * 
 * @arg Lock:eval
 * @text Lock?
 * @type boolean
 * @on Lock
 * @off Unlock
 * @desc Lock the selected actor(s)?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MoveActorsToActive
 * @text Party: Move Actor(s) to Active
 * @desc Moves an actor to the active party if there is room.
 * Map only. The actor needs to have joined the party.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to move to the active party if there is room.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MoveActorsToReserve
 * @text Party: Move Actor(s) to Reserve
 * @desc Moves an actor to the reserve party. Must be 1 actor left.
 * Map only. The actor needs to have joined the party.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to move to the reserve party.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MovePartyIndexToReserve
 * @text Party: Move Party Index to Reserve
 * @desc Moves an actor in a specific party index to reserve.
 * Map only. Must be 1 actor left.
 *
 * @arg Index:eval
 * @text Party Index
 * @desc Type in which index to move. Index values start at 0.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MoveRandomToActive
 * @text Party: Move Random Reserve to Active
 * @desc Moves a random actor from the reserve party to active.
 * Map only. Must be enough space in active party.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RequirePartyMembers
 * @text Party: Require Member(s)
 * @desc Allows you to require/free a party member.
 * Required actors must be in the party to exit the scene.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to require/free.
 * Required actors must be in the party to exit the scene.
 * @default ["1"]
 * 
 * @arg Require:eval
 * @text Require?
 * @type boolean
 * @on Require
 * @off Don't Require
 * @desc Make the selected actor(s) required?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Temp
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TempCreatePartyNormal
 * @text Temp: Create Temporary Party (Normal)
 * @desc Creates a temporary party with specific actors.
 * Can't be used in battle.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to be added to the temporary party
 * until the temporary party is disbanded.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TempCreatePartyJS
 * @text Temp: Create Temporary Party (JS)
 * @desc Creates a temporary party selected with JavaScript.
 * Can't be used in battle.
 *
 * @arg ActorsJS:func
 * @text JS: Actor ID(s)
 * @type note
 * @desc Use JavaScript to determine which actor(s) are added to
 * the temporary party until disbanded.
 * @default "// Declare Actor ID's\nconst actorIDs = [];\n\n// Add Actor ID's\nactorIDs.push(1);\nactorIDs.push(2);\nactorIDs.push(3);\nactorIDs.push(4);\n\n// Return Actor IDs\nreturn actorIDs;"
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TempDisbandTempParty
 * @text Temp: Disband Temporary Party
 * @desc Clears temporary party.
 * Can't be used in battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
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
 * @param PartySystem
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General settings pertaining to Party-related mechanics.
 * @default {"General":"","MaxBattleMembers:num":"4","PartyScene":"","AddRemoveCmd:eval":"true","LockIcon:num":"195","RequireIcon:num":"87","DrawBackRect:eval":"true","BackRectColor:str":"19","PartyCmdWin":"","PartyCmdWinAddParty:eval":"false","PartyCmdCooldown:num":"1","tpbImmediateAction:eval":"true","ActorCmdWin":"","ActorCmdWinAddParty:eval":"true","ActorCmdCooldown:num":"1","SwitchOutAnimation:eval":"true"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"General":"","ActiveParty:str":"Active Party","ReserveParty:str":"Reserve Party","Status:str":"Status","PartyScene":"","Windows":"","Empty:str":"- Empty -","Remove:str":"Remove","ButtonAssist":"","AssistSwapPosition:str":"Quick Swap","AssistRemove:str":"Remove","AssistSort:str":"Sort","AssistSwapIn:str":"Swap In","AssistSwapOut:str":"Swap Out","BattleScene":"","BattlePartyCmd:str":"Party","BattleHelpFormation:json":"\"Change up your party formation.\"","QueuePartyScene:str":"%1 Menu queued after action is complete.","BattleSwitchOut:str":"Switch","BattleHelpSwitch:json":"\"Switch out this party member with another.\""}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_Party.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you control how the windows appear in Scene_Party.
 * @default {"ActivePartyLabel":"","ActivePartyLabelBgType:num":"0","ActivePartyLabelRect:func":"\"const wx = 0;\\nconst wy = this.mainAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = Window_Base.prototype.lineHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","ActivePartyWindow":"","ActivePartyWindowBgType:num":"0","ActivePartyGraphic:str":"face","ActivePartyMapSprite":"","ActiveSpriteOffsetX:num":"0","ActiveSpriteOffsetY:num":"4","ActivePartySvBattler":"","ActiveBattlerOffsetX:num":"0","ActiveBattlerOffsetY:num":"4","ActivePartyWindowRect:func":"\"const wx = 0;\\nconst wy = this._activePartyLabel.y + this._activePartyLabel.height;\\nconst ww = Graphics.boxWidth;\\nconst wh = ImageManager.faceHeight + $gameSystem.windowPadding() * 2 + 2;\\nreturn new Rectangle(wx, wy, ww, wh);\"","ReservePartyLabel":"","ReservePartyLabelBgType:num":"0","ReservePartyLabelRect:func":"\"const ww = Math.max(240, Math.min(Graphics.boxWidth - 576, Math.round(Graphics.boxWidth / 2)));\\nconst wx = this.isRightInputMode() ? (Graphics.boxWidth - ww) : 0;\\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\\nconst wh = Window_Base.prototype.lineHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","ReservePartyWindow":"","ReservePartyWindowBgType:num":"0","ReserveItemThickness:num":"2","ReservePartyGraphic:str":"face","ReservePartyMapSprite":"","ReserveSpriteOffsetX:num":"24","ReserveSpriteOffsetY:num":"4","ReservePartySvBattler":"","ReserveBattlerOffsetX:num":"48","ReserveBattlerOffsetY:num":"4","ReservePartyWindowRect:func":"\"const ww = this._reservePartyLabel.width;\\nconst wx = this._reservePartyLabel.x;\\nconst wy = this._reservePartyLabel.y + this._reservePartyLabel.height;\\nconst wh = this.mainAreaHeight() - this._reservePartyLabel.height - this._activePartyWindow.height - this._activePartyLabel.height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","StatusLabel":"","StatusLabelBgType:num":"0","StatusLabelRect:func":"\"const ww = Graphics.boxWidth - this._reservePartyLabel.width;\\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\\nconst wh = Window_Base.prototype.lineHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","StatusWindow":"","StatusWindowBgType:num":"0","StatusWindowDraw:func":"\"// Draw Empty\\nif (!this._actor) {\\n    this.drawItemDarkRect(0, 0, this.innerWidth, this.innerHeight);\\n    const y = Math.round((this.innerHeight - this.lineHeight()) / 2);\\n    this.changeTextColor(ColorManager.systemColor());\\n    this.drawText(TextManager.emptyPartyMember, 0, y, this.innerWidth, 'center');\\n    return;\\n}\\n\\n// Draw Face and Simple Status\\nthis.drawActorFace(this._actor, 1, 0, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorSimpleStatus(this._actor, ImageManager.faceWidth + 36, 0);\\n\\n// Declare Constants\\nconst lineHeight = this.lineHeight();\\nconst params = this.actorParams();\\nconst paramWidth = Math.round(this.innerWidth / 2);\\nconst paramHeight = Math.ceil(params.length / 2) * lineHeight;\\nconst baseX = 0;\\nlet x = 0;\\nlet y = ImageManager.faceHeight + lineHeight / 2;\\n\\n// Draw Parameters\\nfor (const param of params) {\\n    this.drawItemDarkRect(x, y, paramWidth, lineHeight);\\n    this.drawParamName(param, x, y, paramWidth);\\n    this.drawParamValue(param, x, y, paramWidth);\\n\\n    if (x === baseX) {\\n        x += paramWidth;\\n    } else {\\n        x = baseX;\\n        y += lineHeight;\\n    }\\n}\"","StatusWindowRect:func":"\"const ww = this._statusPartyLabel.width;\\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\\nconst wy = this._reservePartyWindow.y;\\nconst wh = this._reservePartyWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","BattleSwitchWindow":"","BattleSwitchWindowBgType:num":"0","BattleSwitchWindowRect:func":"\"const padding = $gameSystem.windowPadding() * 2;\\nlet ww = 516 + padding;\\nlet wh = Window_PartyBattleSwitch.prototype.itemHeight() * 4 + padding;\\nlet wx = Math.round(Graphics.boxWidth - ww) / 2;\\nlet wy = Math.round(Graphics.boxHeight - wh - this._statusWindow.height) / 2;\\nwy = wy.clamp(0, Graphics.boxHeight - wh - this._statusWindow.height);\\nreturn new Rectangle(wx, wy, ww, wh);\""}
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
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param General
 *
 * @param MaxBattleMembers:num
 * @text Max Battle Members
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of battle members.
 * @default 4
 *
 * @param BattleScene
 * @text Battle Scene
 *
 * @param BattlePartyIcon:num
 * @text Battle Party Icon
 * @parent BattleScene
 * @desc Icon used for changing party members.
 * @default 75
 *
 * @param PartyScene
 * @text Party Scene
 *
 * @param AddRemoveCmd:eval
 * @text Add Remove Command
 * @parent PartyScene
 * @type boolean
 * @on Add Command
 * @off Don't Add
 * @desc Add the 'Remove' command to the party scene?
 * @default true
 *
 * @param LockIcon:num
 * @text Locked Member Icon
 * @parent PartyScene
 * @desc Icon used for a locked party member.
 * @default 195
 *
 * @param RequireIcon:num
 * @text Required Member Icon
 * @parent PartyScene
 * @desc Icon used for a required party member.
 * @default 87
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent PartyScene
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param PartyCmdWin
 * @text Party Command Window
 *
 * @param PartyCmdWinAddParty:eval
 * @text Add Party Command
 * @parent PartyCmdWin
 * @type boolean
 * @on Add Command
 * @off Don't Add
 * @desc Add the 'Party' command to the Party Command Window?
 * @default false
 *
 * @param PartyCmdCooldown:num
 * @text Command Cooldown
 * @parent PartyCmdWin
 * @desc Cooldown (in turns) for this command to be available again.
 * @default 1
 *
 * @param ActorCmdWin
 * @text Actor Command Window
 *
 * @param ActorCmdWinAddParty:eval
 * @text Add Switch Command
 * @parent ActorCmdWin
 * @type boolean
 * @on Add Command
 * @off Don't Add
 * @desc Add the 'Switch' command to the Actor Command Window?
 * @default true
 *
 * @param ActorCmdCooldown:num
 * @text Command Cooldown
 * @parent ActorCmdWin
 * @desc Cooldown (in turns) for this command to be available again.
 * @default 1
 *
 * @param SwitchOutAnimation:eval
 * @text Switch Out Animation?
 * @parent ActorCmdWin
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Show the sprites switching out when using individual party member switching?
 * @default true
 *
 * @param tpbImmediateAction:eval
 * @text TPB: Immediate Action
 * @parent ActorCmdWin
 * @type boolean
 * @on Immediate Action
 * @off Empty Gauge
 * @desc Allow actors to immediate act upon switching in for TPB battle systems?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param General
 *
 * @param ActiveParty:str
 * @text Active Party
 * @parent General
 * @desc Vocabulary used to represent the Active Party.
 * @default Active Party
 *
 * @param ReserveParty:str
 * @text Reserve Party
 * @parent General
 * @desc Vocabulary used to represent the Reserve Party.
 * @default Reserve Party
 *
 * @param Status:str
 * @text Status
 * @parent General
 * @desc Vocabulary used to represent the Status Window.
 * @default Status
 *
 * @param PartyScene
 * @text Party Scene
 *
 * @param Windows
 * @parent PartyScene
 *
 * @param Empty:str
 * @text Empty
 * @parent Windows
 * @desc For the party and status windows when no actor is selected.
 * @default - Empty -
 *
 * @param Remove:str
 * @text Remove
 * @parent Windows
 * @desc For the remove option.
 * @default Remove
 *
 * @param ButtonAssist
 * @text Button Assist
 * @parent PartyScene
 *
 * @param AssistSwapPosition:str
 * @text Swap Positions
 * @parent ButtonAssist
 * @desc Button assist text for the page up/down commands.
 * Requires VisuMZ_0_CoreEngine!
 * @default Quick Swap
 *
 * @param AssistRemove:str
 * @text Remove
 * @parent ButtonAssist
 * @desc Button assist text for the removal command.
 * Requires VisuMZ_0_CoreEngine!
 * @default Remove
 *
 * @param AssistSort:str
 * @text Sort
 * @parent ButtonAssist
 * @desc Button assist text for the sort command.
 * Requires VisuMZ_0_CoreEngine!
 * @default Sort
 *
 * @param AssistSwapIn:str
 * @text Swap In
 * @parent ButtonAssist
 * @desc Button assist text for swapping in actors.
 * Requires VisuMZ_0_CoreEngine!
 * @default Swap In
 *
 * @param AssistSwapOut:str
 * @text Swap Out
 * @parent ButtonAssist
 * @desc Button assist text for swapping out actors.
 * Requires VisuMZ_0_CoreEngine!
 * @default Swap Out
 *
 * @param BattleScene
 * @text Battle Scene
 *
 * @param BattlePartyCmd:str
 * @text Party Command
 * @parent BattleScene
 * @desc Command text for entering Party Scene.
 * Requires VisuMZ_1_BattleCore!
 * @default Party
 *
 * @param BattleHelpFormation:json
 * @text Help: Formation
 * @parent BattlePartyCmd:str
 * @type note
 * @desc Help text for Formation command.
 * Requires VisuMZ_1_BattleCore!
 * @default "Change up your party formation."
 *
 * @param QueuePartyScene:str
 * @text Queue Message
 * @parent BattlePartyCmd:str
 * @desc Message to say the Party Scene is queued.
 * Requires VisuMZ_1_BattleCore!
 * @default %1 Menu queued after action is complete.
 *
 * @param BattleSwitchOut:str
 * @text Switch Command
 * @parent BattleScene
 * @desc Command text for switching out members.
 * Requires VisuMZ_1_BattleCore!
 * @default Switch
 *
 * @param BattleHelpSwitch:json
 * @text Help: Switch
 * @parent BattleSwitchOut:str
 * @type note
 * @desc Help text for Switch command.
 * Requires VisuMZ_1_BattleCore!
 * @default "Switch out this party member with another."
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param ActivePartyLabel
 * @text Active Party Label
 *
 * @param ActivePartyLabelBgType:num
 * @text Background Type
 * @parent ActivePartyLabel
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActivePartyLabelRect:func
 * @text JS: X, Y, W, H
 * @parent ActivePartyLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.mainAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = Window_Base.prototype.lineHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ActivePartyWindow
 * @text Active Party Window
 *
 * @param ActivePartyWindowBgType:num
 * @text Background Type
 * @parent ActivePartyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActivePartyGraphic:str
 * @text Actor Graphic
 * @parent ActivePartyWindow
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler (Requires VisuMZ_1_MainMenuCore)
 * @value svbattler
 * @desc Choose how the actor graphics appear in the active party menu.
 * @default face
 *
 * @param ActivePartyMapSprite
 * @text Map Sprite
 * @parent ActivePartyGraphic:str
 *
 * @param ActiveSpriteOffsetX:num
 * @text Offset X
 * @parent ActivePartyMapSprite
 * @desc If showing map sprites, offset the x coordinate here from center.
 * @default 0
 *
 * @param ActiveSpriteOffsetY:num
 * @text Offset Y
 * @parent ActivePartyMapSprite
 * @desc If showing map sprites, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ActivePartySvBattler
 * @text Sideview Battler
 * @parent ActivePartyGraphic:str
 *
 * @param ActiveBattlerOffsetX:num
 * @text Offset X
 * @parent ActivePartySvBattler
 * @desc If showing sideview battlers, offset the x coordinate here from center.
 * @default 0
 *
 * @param ActiveBattlerOffsetY:num
 * @text Offset Y
 * @parent ActivePartySvBattler
 * @desc If showing sideview battlers, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ActivePartyWindowRect:func
 * @text JS: X, Y, W, H
 * @parent ActivePartyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this._activePartyLabel.y + this._activePartyLabel.height;\nconst ww = Graphics.boxWidth;\nconst wh = ImageManager.faceHeight + $gameSystem.windowPadding() * 2 + 2;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ReservePartyLabel
 * @text Reserve Party Label
 *
 * @param ReservePartyLabelBgType:num
 * @text Background Type
 * @parent ReservePartyLabel
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ReservePartyLabelRect:func
 * @text JS: X, Y, W, H
 * @parent ReservePartyLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.max(240, Math.min(Graphics.boxWidth - 576, Math.round(Graphics.boxWidth / 2)));\nconst wx = this.isRightInputMode() ? (Graphics.boxWidth - ww) : 0;\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\nconst wh = Window_Base.prototype.lineHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ReservePartyWindow
 * @text Reserve Party Window
 *
 * @param ReservePartyWindowBgType:num
 * @text Background Type
 * @parent ReservePartyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ReserveCol:num
 * @text Columns
 * @parent ReservePartyWindow
 * @type number
 * @min 1
 * @desc How many columns do you want there to be for the window?
 * @default 1
 *
 * @param ReserveItemThickness:num
 * @text Row Thickness
 * @parent ReservePartyWindow
 * @type number
 * @min 1
 * @desc How many rows thick do you want selectable items to be?
 * @default 2
 *
 * @param ReservePartyGraphic:str
 * @text Actor Graphic
 * @parent ReservePartyWindow
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler (Requires VisuMZ_1_MainMenuCore)
 * @value svbattler
 * @desc Choose how the actor graphics appear in the reserve party menu.
 * @default face
 *
 * @param ReservePartyMapSprite
 * @text Map Sprite
 * @parent ReservePartyGraphic:str
 *
 * @param ReserveSpriteOffsetX:num
 * @text Offset X
 * @parent ReservePartyMapSprite
 * @desc If showing map sprites, offset the x coordinate here from left.
 * @default 24
 *
 * @param ReserveSpriteOffsetY:num
 * @text Offset Y
 * @parent ReservePartyMapSprite
 * @desc If showing map sprites, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ReservePartySvBattler
 * @text Sideview Battler
 * @parent ReservePartyGraphic:str
 *
 * @param ReserveBattlerOffsetX:num
 * @text Offset X
 * @parent ReservePartySvBattler
 * @desc If showing sideview battlers, offset the x coordinate here from left.
 * @default 48
 *
 * @param ReserveBattlerOffsetY:num
 * @text Offset Y
 * @parent ReservePartySvBattler
 * @desc If showing sideview battlers, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ReservePartyWindowRect:func
 * @text JS: X, Y, W, H
 * @parent ReservePartyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this._reservePartyLabel.width;\nconst wx = this._reservePartyLabel.x;\nconst wy = this._reservePartyLabel.y + this._reservePartyLabel.height;\nconst wh = this.mainAreaHeight() - this._reservePartyLabel.height - this._activePartyWindow.height - this._activePartyLabel.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param StatusLabel
 * @text Status Label
 *
 * @param StatusLabelBgType:num
 * @text Background Type
 * @parent StatusLabel
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusLabelRect:func
 * @text JS: X, Y, W, H
 * @parent StatusLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - this._reservePartyLabel.width;\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\nconst wh = Window_Base.prototype.lineHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusWindowBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusWindowDraw:func
 * @text JS: Draw Data
 * @parent StatusWindow
 * @type note
 * @desc Code used to draw the display data in the Status Window.
 * @default "// Draw Empty\nif (!this._actor) {\n    this.drawItemDarkRect(0, 0, this.innerWidth, this.innerHeight);\n    const y = Math.round((this.innerHeight - this.lineHeight()) / 2);\n    this.changeTextColor(ColorManager.systemColor());\n    this.drawText(TextManager.emptyPartyMember, 0, y, this.innerWidth, 'center');\n    return;\n}\n\n// Draw Face and Simple Status\nthis.drawActorFace(this._actor, 1, 0, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorSimpleStatus(this._actor, ImageManager.faceWidth + 36, 0);\n\n// Declare Constants\nconst lineHeight = this.lineHeight();\nconst params = this.actorParams();\nconst paramWidth = Math.round(this.innerWidth / 2);\nconst paramHeight = Math.ceil(params.length / 2) * lineHeight;\nconst baseX = 0;\nlet x = 0;\nlet y = ImageManager.faceHeight + lineHeight / 2;\n\n// Draw Parameters\nfor (const param of params) {\n    this.drawItemDarkRect(x, y, paramWidth, lineHeight);\n    this.drawParamName(param, x, y, paramWidth);\n    this.drawParamValue(param, x, y, paramWidth);\n\n    if (x === baseX) {\n        x += paramWidth;\n    } else {\n        x = baseX;\n        y += lineHeight;\n    }\n}"
 *
 * @param StatusWindowRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this._statusPartyLabel.width;\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\nconst wy = this._reservePartyWindow.y;\nconst wh = this._reservePartyWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param BattleSwitchWindow
 * @text Battle Switch Window
 *
 * @param BattleSwitchWindowBgType:num
 * @text Background Type
 * @parent BattleSwitchWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param BattleSwitchWindowRect:func
 * @text JS: X, Y, W, H
 * @parent BattleSwitchWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * Does not apply to Border Battle Layout style.
 * @default "const padding = $gameSystem.windowPadding() * 2;\nlet ww = 516 + padding;\nlet wh = Window_PartyBattleSwitch.prototype.itemHeight() * 4 + padding;\nlet wx = Math.round(Graphics.boxWidth - ww) / 2;\nlet wy = Math.round(Graphics.boxHeight - wh - this._statusWindow.height) / 2;\nwy = wy.clamp(0, Graphics.boxHeight - wh - this._statusWindow.height);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
//=============================================================================

var tier = tier || 0x0;
var dependencies = [];
var pluginData = $plugins.filter(function (_0xf06f8) {
  return _0xf06f8.status && _0xf06f8.description.includes("[PartySystem]");
})[0x0];
VisuMZ.PartySystem.Settings = VisuMZ.PartySystem.Settings || {};
VisuMZ.ConvertParams = function (_0x220fb9, _0x1e4d1d) {
  for (const _0x4a17d5 in _0x1e4d1d) {
    if (_0x4a17d5.match(/(.*):(.*)/i)) {
      const _0x179545 = String(RegExp.$1);
      const _0x48f98f = String(RegExp.$2).toUpperCase().trim();
      let _0x4f31b5;
      let _0x301139;
      let _0x31929c;
      switch (_0x48f98f) {
        case "NUM":
          _0x4f31b5 = _0x1e4d1d[_0x4a17d5] !== '' ? Number(_0x1e4d1d[_0x4a17d5]) : 0x0;
          break;
        case "ARRAYNUM":
          _0x301139 = _0x1e4d1d[_0x4a17d5] !== '' ? JSON.parse(_0x1e4d1d[_0x4a17d5]) : [];
          _0x4f31b5 = _0x301139.map(_0xed24f5 => Number(_0xed24f5));
          break;
        case "EVAL":
          _0x4f31b5 = _0x1e4d1d[_0x4a17d5] !== '' ? eval(_0x1e4d1d[_0x4a17d5]) : null;
          break;
        case 'ARRAYEVAL':
          _0x301139 = _0x1e4d1d[_0x4a17d5] !== '' ? JSON.parse(_0x1e4d1d[_0x4a17d5]) : [];
          _0x4f31b5 = _0x301139.map(_0x2eb717 => eval(_0x2eb717));
          break;
        case 'JSON':
          _0x4f31b5 = _0x1e4d1d[_0x4a17d5] !== '' ? JSON.parse(_0x1e4d1d[_0x4a17d5]) : '';
          break;
        case 'ARRAYJSON':
          _0x301139 = _0x1e4d1d[_0x4a17d5] !== '' ? JSON.parse(_0x1e4d1d[_0x4a17d5]) : [];
          _0x4f31b5 = _0x301139.map(_0x426810 => JSON.parse(_0x426810));
          break;
        case "FUNC":
          _0x4f31b5 = _0x1e4d1d[_0x4a17d5] !== '' ? new Function(JSON.parse(_0x1e4d1d[_0x4a17d5])) : new Function("return 0");
          break;
        case "ARRAYFUNC":
          _0x301139 = _0x1e4d1d[_0x4a17d5] !== '' ? JSON.parse(_0x1e4d1d[_0x4a17d5]) : [];
          _0x4f31b5 = _0x301139.map(_0x37ba8b => new Function(JSON.parse(_0x37ba8b)));
          break;
        case 'STR':
          _0x4f31b5 = _0x1e4d1d[_0x4a17d5] !== '' ? String(_0x1e4d1d[_0x4a17d5]) : '';
          break;
        case "ARRAYSTR":
          _0x301139 = _0x1e4d1d[_0x4a17d5] !== '' ? JSON.parse(_0x1e4d1d[_0x4a17d5]) : [];
          _0x4f31b5 = _0x301139.map(_0x2be6b2 => String(_0x2be6b2));
          break;
        case 'STRUCT':
          _0x31929c = _0x1e4d1d[_0x4a17d5] !== '' ? JSON.parse(_0x1e4d1d[_0x4a17d5]) : {};
          _0x4f31b5 = VisuMZ.ConvertParams({}, _0x31929c);
          break;
        case "ARRAYSTRUCT":
          _0x301139 = _0x1e4d1d[_0x4a17d5] !== '' ? JSON.parse(_0x1e4d1d[_0x4a17d5]) : [];
          _0x4f31b5 = _0x301139.map(_0x17dcee => VisuMZ.ConvertParams({}, JSON.parse(_0x17dcee)));
          break;
        default:
          continue;
      }
      _0x220fb9[_0x179545] = _0x4f31b5;
    }
  }
  return _0x220fb9;
};
(_0x179054 => {
  const _0x374391 = _0x179054.name;
  for (const _0x14a1c5 of dependencies) {
    if (!Imported[_0x14a1c5]) {
      alert("%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.".format(_0x374391, _0x14a1c5));
      SceneManager.exit();
      break;
    }
  }
  const _0x5b3775 = _0x179054.description;
  if (_0x5b3775.match(/\[Version[ ](.*?)\]/i)) {
    const _0x2e2be7 = Number(RegExp.$1);
    if (_0x2e2be7 !== VisuMZ.PartySystem.version) {
      alert("%1's version does not match plugin's. Please update it in the Plugin Manager.".format(_0x374391, _0x2e2be7));
      SceneManager.exit();
    }
  }
  if (_0x5b3775.match(/\[Tier[ ](\d+)\]/i)) {
    const _0x5596a2 = Number(RegExp.$1);
    if (_0x5596a2 < tier) {
      alert("%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.".format(_0x374391, _0x5596a2, tier));
      SceneManager.exit();
    } else {
      tier = Math.max(_0x5596a2, tier);
    }
  }
  VisuMZ.ConvertParams(VisuMZ.PartySystem.Settings, _0x179054.parameters);
})(pluginData);
PluginManager.registerCommand(pluginData.name, "CallPartyScene", _0x4f10d6 => {
  SceneManager.push(Scene_Party);
});
PluginManager.registerCommand(pluginData.name, "ChangeMaxBattleMembers", _0x2128d5 => {
  if ($gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x2128d5, _0x2128d5);
  const _0x4b6340 = _0x2128d5.Value;
  $gameParty.changeMaxBattleMembers(_0x4b6340);
});
PluginManager.registerCommand(pluginData.name, "MoveActorsToActive", _0x453331 => {
  if (!SceneManager.isSceneMap()) {
    return;
  }
  VisuMZ.ConvertParams(_0x453331, _0x453331);
  const _0x41603e = _0x453331.Actors;
  for (const _0x11e229 of _0x41603e) {
    $gameParty.addActorToBattleMembers(_0x11e229);
  }
  $gamePlayer.refresh();
});
PluginManager.registerCommand(pluginData.name, "MoveActorsToReserve", _0x438bdc => {
  if (!SceneManager.isSceneMap()) {
    return;
  }
  VisuMZ.ConvertParams(_0x438bdc, _0x438bdc);
  const _0x7aba50 = _0x438bdc.Actors;
  for (const _0x387d22 of _0x7aba50) {
    if ($gameParty.battleMembers().length <= 0x1) {
      break;
    }
    $gameParty.removeActorFromBattleMembers(_0x387d22);
  }
  $gamePlayer.refresh();
});
PluginManager.registerCommand(pluginData.name, "MovePartyIndexToReserve", _0xbbc0f5 => {
  if (!SceneManager.isSceneMap()) {
    return;
  }
  if ($gameParty.battleMembers().length <= 0x1) {
    return;
  }
  if (!$gameParty._battleMembers) {
    return;
  }
  if ($gameParty._battleMembers.length <= 0x0) {
    return;
  }
  VisuMZ.ConvertParams(_0xbbc0f5, _0xbbc0f5);
  const _0x5f40e4 = _0xbbc0f5.Index;
  const _0x778e54 = $gameParty._battleMembers[_0x5f40e4];
  $gameParty.removeActorFromBattleMembers(_0x778e54);
  $gamePlayer.refresh();
});
PluginManager.registerCommand(pluginData.name, "MoveRandomToActive", _0x24578b => {
  if (!SceneManager.isSceneMap()) {
    return;
  }
  if ($gameParty.battleMembers().length >= $gameParty.maxBattleMembers()) {
    return;
  }
  if ($gameParty.reserveMembers().length <= 0x0) {
    return;
  }
  const _0x8f87d7 = $gameParty.reserveMembers();
  const _0x2dd8d1 = _0x8f87d7[Math.floor(Math.random() * _0x8f87d7.length)];
  const _0x5ccb78 = _0x2dd8d1.actorId();
  $gameParty.addActorToBattleMembers(_0x5ccb78);
  $gamePlayer.refresh();
});
PluginManager.registerCommand(pluginData.name, "LockPartyMembers", _0x3f4ab7 => {
  VisuMZ.ConvertParams(_0x3f4ab7, _0x3f4ab7);
  const _0x3e67ef = _0x3f4ab7.Actors.map(_0x2143b1 => $gameActors.actor(_0x2143b1)).remove(null);
  const _0x1c23eb = _0x3f4ab7.Lock;
  for (const _0x3bbe31 of _0x3e67ef) {
    if (!_0x3bbe31) {
      continue;
    }
    _0x3bbe31.setPartyLock(_0x1c23eb);
  }
});
PluginManager.registerCommand(pluginData.name, "RequirePartyMembers", _0x5a8efc => {
  VisuMZ.ConvertParams(_0x5a8efc, _0x5a8efc);
  const _0x403a83 = _0x5a8efc.Actors.map(_0x156f1a => $gameActors.actor(_0x156f1a)).remove(null);
  const _0x2006e9 = _0x5a8efc.Require;
  for (const _0xe541cf of _0x403a83) {
    if (!_0xe541cf) {
      continue;
    }
    _0xe541cf.setPartyRequirement(_0x2006e9);
  }
});
PluginManager.registerCommand(pluginData.name, 'TempCreatePartyNormal', _0x3d3a43 => {
  if ($gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x3d3a43, _0x3d3a43);
  const _0x3e7f89 = _0x3d3a43.Actors || [];
  if (_0x3e7f89.length <= 0x0) {
    return;
  }
  $gameParty.createForcedParty(_0x3e7f89);
});
PluginManager.registerCommand(pluginData.name, "TempCreatePartyJS", _0x35515b => {
  if ($gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x35515b, _0x35515b);
  let _0x367a3c = [];
  try {
    _0x367a3c = _0x35515b.ActorsJS() || [];
  } catch (_0x39a54b) {
    console.log("Temp: Create Temporary Party (JS) Error");
    console.log(_0x39a54b);
    return;
  }
  if (_0x367a3c.length <= 0x0) {
    return;
  }
  $gameParty.createForcedParty(_0x367a3c);
});
PluginManager.registerCommand(pluginData.name, "TempDisbandTempParty", _0x5ce9c9 => {
  if ($gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x5ce9c9, _0x5ce9c9);
  $gameParty.clearForcedParty();
});
ImageManager.lockPartyMemberIcon = VisuMZ.PartySystem.Settings.General.LockIcon;
ImageManager.requiredPartyMemberIcon = VisuMZ.PartySystem.Settings.General.RequireIcon;
TextManager.activeParty = VisuMZ.PartySystem.Settings.Vocab.ActiveParty;
TextManager.reserveParty = VisuMZ.PartySystem.Settings.Vocab.ReserveParty;
TextManager.statusParty = VisuMZ.PartySystem.Settings.Vocab.Status;
TextManager.emptyPartyMember = VisuMZ.PartySystem.Settings.Vocab.Empty;
TextManager.removePartyMember = VisuMZ.PartySystem.Settings.Vocab.Remove;
TextManager.assistSwapPositions = VisuMZ.PartySystem.Settings.Vocab.AssistSwapPosition;
TextManager.assistRemovePartyMember = VisuMZ.PartySystem.Settings.Vocab.AssistRemove;
TextManager.assistSortPartyMembers = VisuMZ.PartySystem.Settings.Vocab.AssistSort;
TextManager.assistSwapInPartyMember = VisuMZ.PartySystem.Settings.Vocab.AssistSwapIn;
TextManager.assistSwapOutPartyMember = VisuMZ.PartySystem.Settings.Vocab.AssistSwapOut;
ColorManager.getColor = function (_0x591d41) {
  _0x591d41 = String(_0x591d41);
  return _0x591d41.match(/#(.*)/i) ? "#%1".format(String(RegExp.$1)) : this.textColor(Number(_0x591d41));
};
SceneManager.isSceneParty = function () {
  return this._scene && this._scene.constructor === Scene_Party;
};
SceneManager.isSceneMap = function () {
  return this._scene && this._scene.constructor === Scene_Map;
};
VisuMZ.PartySystem.BattleManager_setup = BattleManager.setup;
BattleManager.setup = function (_0x2a2795, _0x37b00d, _0x350bf1) {
  VisuMZ.PartySystem.BattleManager_setup.call(this, _0x2a2795, _0x37b00d, _0x350bf1);
  $gameParty.clearPartyBattleCommandCooldown();
};
BattleManager.updateTargetsForPartySwitch = function (_0x53fe5c, _0x2d2957) {
  if (_0x53fe5c === _0x2d2957) {
    return;
  }
  if (!_0x53fe5c) {
    return;
  }
  if (!_0x2d2957) {
    return;
  }
  if (this._target === _0x53fe5c) {
    this._target = _0x2d2957;
  }
  while (this._targets.includes(_0x53fe5c)) {
    const _0x4bc0d9 = this._targets.indexOf(_0x53fe5c);
    this._targets[_0x4bc0d9] = _0x2d2957;
  }
};
VisuMZ.PartySystem.Game_Battler_onBattleStart = Game_Battler.prototype.onBattleStart;
Game_Battler.prototype.onBattleStart = function (_0x5aca6d) {
  VisuMZ.PartySystem.Game_Battler_onBattleStart.call(this, _0x5aca6d);
  if (this.isActor()) {
    this.clearPartySwitchCommandCooldown();
  }
  this.clearDamagePopup();
};
VisuMZ.PartySystem.Game_Battler_regenerateAll = Game_Battler.prototype.regenerateAll;
Game_Battler.prototype.regenerateAll = function () {
  VisuMZ.PartySystem.Game_Battler_regenerateAll.call(this);
  if (this.isActor() && $gameParty.inBattle()) {
    this.updateBattlePartySwitchCooldown();
  }
};
VisuMZ.PartySystem.Game_Actor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function (_0x2a8c80) {
  VisuMZ.PartySystem.Game_Actor_setup.call(this, _0x2a8c80);
  this.initPartySystem();
  this.clearPartySwitchCommandCooldown();
};
Game_Actor.prototype.initPartySystem = function () {
  this._partyLocked = false;
  this._partyRequired = false;
};
Game_Actor.prototype.isFormationChangeOk = function () {
  if (this._partyLocked === undefined) {
    this.initPartySystem();
  }
  return !this._partyLocked;
};
Game_Actor.prototype.setPartyLock = function (_0x462ec6) {
  if (this._partyLocked === undefined) {
    this.initPartySystem();
  }
  this._partyLocked = _0x462ec6;
};
Game_Actor.prototype.isRequiredInParty = function () {
  if (this._partyRequired === undefined) {
    this.initPartySystem();
  }
  return this._partyRequired;
};
Game_Actor.prototype.setPartyRequirement = function (_0x2415f0) {
  if (this._partyRequired === undefined) {
    this.initPartySystem();
  }
  this._partyRequired = _0x2415f0;
};
Game_Actor.prototype.clearPartySwitchCommandCooldown = function () {
  this._partySwitchBattleCommandCooldown = 0x0;
};
Game_Actor.prototype.canSwitchPartyInBattle = function () {
  if (this._partySwitchBattleCommandCooldown === undefined) {
    this.clearPartySwitchCommandCooldown();
  }
  if (!this.isFormationChangeOk()) {
    return false;
  }
  if (this.isRequiredInParty()) {
    return false;
  }
  return this._partySwitchBattleCommandCooldown <= 0x0;
};
Game_Actor.prototype.battlePartySwitchCooldown = function () {
  if (this._partySwitchBattleCommandCooldown === undefined) {
    this.clearPartySwitchCommandCooldown();
  }
  return this._partySwitchBattleCommandCooldown;
};
Game_Actor.prototype.setBattlePartySwitchCooldown = function (_0x44dffe) {
  if (this._partySwitchBattleCommandCooldown === undefined) {
    this.clearPartySwitchCommandCooldown();
  }
  this._partySwitchBattleCommandCooldown = _0x44dffe || 0x0;
};
Game_Actor.prototype.applyBattlePartySwitchCooldown = function () {
  if (this._partySwitchBattleCommandCooldown === undefined) {
    this.clearPartySwitchCommandCooldown();
  }
  const _0x3a7be9 = VisuMZ.PartySystem.Settings.General.ActorCmdCooldown;
  this.setBattlePartySwitchCooldown(_0x3a7be9);
};
Game_Actor.prototype.updateBattlePartySwitchCooldown = function () {
  if (this._partySwitchBattleCommandCooldown === undefined) {
    this.clearPartySwitchCommandCooldown();
  }
  this._partySwitchBattleCommandCooldown--;
};
Game_Actor.prototype.onBattlePartySwitch = function (_0x158548) {
  if (Imported.VisuMZ_2_BattleSystemCTB && BattleManager.isCTB()) {
    BattleManager.updateTurnOrderCTB();
  }
  if (Imported.VisuMZ_2_BattleSystemSTB && BattleManager.isSTB()) {
    BattleManager.updateTurnOrderSTB();
    BattleManager._subject = this;
    BattleManager._currentActor = this;
  }
  if (Imported.VisuMZ_2_BattleSystemBTB && BattleManager.isBTB()) {
    BattleManager._subject = undefined;
    BattleManager._currentActor = this;
    const _0x5c7ee5 = BattleManager._actionBattlers.indexOf(_0x158548);
    BattleManager._actionBattlers[_0x5c7ee5] = this;
    BattleManager.sortActionOrdersBTB();
  }
  if (Imported.VisuMZ_2_BattleSystemFTB && BattleManager.isFTB()) {
    BattleManager._subject = this;
    BattleManager._currentActor = this;
    BattleManager.replaceActionBattlersPartySwitch(_0x158548, this);
  }
  if (Imported.VisuMZ_2_BattleSystemETB && BattleManager.isETB()) {
    BattleManager._subject = this;
    BattleManager._currentActor = this;
    BattleManager.replaceActionBattlersPartySwitch(_0x158548, this);
  }
  if (Imported.VisuMZ_2_BattleSystemPTB && BattleManager.isPTB()) {
    BattleManager._subject = this;
    BattleManager._currentActor = this;
    BattleManager.replaceActionBattlersPartySwitch(_0x158548, this);
  }
  if (Imported.VisuMZ_2_BattleSystemOTB && BattleManager.isOTB()) {
    BattleManager._subject = this;
    BattleManager._currentActor = this;
    for (let _0x35535b = 0x0; _0x35535b < BattleManager._actionBattlers.length; _0x35535b++) {
      const _0x4100f5 = BattleManager._actionBattlers[_0x35535b];
      if (_0x4100f5 === _0x158548) {
        BattleManager._actionBattlers[_0x35535b] = this;
      }
    }
    for (let _0xefd93e = 0x0; _0xefd93e < BattleManager._otb_actionBattlersNext.length; _0xefd93e++) {
      const _0xbddbf = BattleManager._otb_actionBattlersNext[_0xefd93e];
      if (_0xbddbf === _0x158548) {
        BattleManager._otb_actionBattlersNext[_0xefd93e] = this;
      }
    }
  }
  if (Imported.VisuMZ_2_BattleGridSystem && BattleManager.isUsingGridSystem()) {
    const _0xf9b403 = _0x158548.gridRank();
    const _0x286104 = _0x158548.gridFlank();
    this.gridMoveTo(_0xf9b403, _0x286104);
  }
};
BattleManager.replaceActionBattlersPartySwitch = function (_0x4e2b43, _0x52904c) {
  this._actionBattlers = this._actionBattlers.map(_0x250d9c => _0x250d9c === _0x4e2b43 ? _0x52904c : _0x250d9c);
};
VisuMZ.PartySystem.Game_Unit_inBattle = Game_Unit.prototype.inBattle;
Game_Unit.prototype.inBattle = function () {
  if (SceneManager.isSceneParty()) {
    return false;
  }
  return VisuMZ.PartySystem.Game_Unit_inBattle.call(this);
};
Game_Party.defaultMaxBattleMembers = VisuMZ.PartySystem.Settings.General.MaxBattleMembers;
VisuMZ.PartySystem.Game_Party_initialize = Game_Party.prototype.initialize;
Game_Party.prototype.initialize = function () {
  VisuMZ.PartySystem.Game_Party_initialize.call(this);
  this.clearPartyBattleCommandCooldown();
  this.initMaxBattleMembers();
  this.initBattleMembers();
};
Game_Party.prototype.clearPartyBattleCommandCooldown = function () {
  this._partySystemBattleCommandCooldown = 0x0;
};
Game_Party.prototype.canSwitchPartyInBattle = function () {
  if (this._partySystemBattleCommandCooldown === undefined) {
    this.clearPartyBattleCommandCooldown();
  }
  return this._partySystemBattleCommandCooldown <= 0x0;
};
Game_Party.prototype.battlePartySwitchCooldown = function () {
  if (this._partySystemBattleCommandCooldown === undefined) {
    this.clearPartyBattleCommandCooldown();
  }
  return this._partySystemBattleCommandCooldown;
};
Game_Party.prototype.setBattlePartySwitchCooldown = function (_0x127afa) {
  if (this._partySystemBattleCommandCooldown === undefined) {
    this.clearPartyBattleCommandCooldown();
  }
  this._partySystemBattleCommandCooldown = _0x127afa;
};
Game_Party.prototype.applyBattlePartySwitchCooldown = function () {
  if (this._partySystemBattleCommandCooldown === undefined) {
    this.clearPartyBattleCommandCooldown();
  }
  this._partySystemBattleCommandCooldown = VisuMZ.PartySystem.Settings.General.PartyCmdCooldown || 0x0;
};
Game_Party.prototype.updateBattlePartySwitchCooldown = function () {
  if (this._partySystemBattleCommandCooldown === undefined) {
    this.clearPartyBattleCommandCooldown();
  }
  this._partySystemBattleCommandCooldown--;
};
Game_Party.prototype.initMaxBattleMembers = function () {
  this._battleMaxSize = 0x0;
};
Game_Party.prototype.changeMaxBattleMembers = function (_0x163ca0) {
  this._battleMaxSize = _0x163ca0;
  this.initBattleMembers(true);
  if ($gamePlayer && $gamePlayer.followers()) {
    $gamePlayer.followers().changeMaxBattleMembers();
  }
};
Game_Followers.prototype.changeMaxBattleMembers = function () {
  if (!SceneManager.isSceneMap()) {
    return;
  }
  this.setup();
  const _0x349507 = $gameMap.mapId();
  const _0x3a2c74 = $gamePlayer.x;
  const _0x3ced26 = $gamePlayer.y;
  const _0x504ad0 = $gamePlayer.direction();
  $gameTemp._bypassAutoSavePartySystem = true;
  $gamePlayer.reserveTransfer(_0x349507, _0x3a2c74, _0x3ced26, _0x504ad0, 0x2);
  setTimeout(this.clearBypassAutoSave.bind(this), 0x7d0);
};
Game_Followers.prototype.clearBypassAutoSave = function () {
  $gameTemp._bypassAutoSavePartySystem = false;
};
VisuMZ.PartySystem.Scene_Base_isAutosaveEnabled = Scene_Base.prototype.isAutosaveEnabled;
Scene_Base.prototype.isAutosaveEnabled = function () {
  if ($gameTemp._bypassAutoSavePartySystem) {
    return false;
  }
  return VisuMZ.PartySystem.Scene_Base_isAutosaveEnabled.call(this);
};
Game_Party.prototype.maxBattleMembers = function () {
  if (this._battleMaxSize === undefined) {
    this.initBattleMembers();
  }
  let _0xc138e0 = this._battleMaxSize || Game_Party.defaultMaxBattleMembers;
  if (Imported.VisuMZ_2_BattleGridSystem && BattleManager.isUsingBattleGridTactics()) {
    _0xc138e0 = _0xc138e0.clamp(0x1, 0x14);
  }
  return _0xc138e0;
};
Game_Party.prototype.checkInitBattleMembers = function () {
  if (this._battleMaxSize === undefined) {
    this.initBattleMembers();
  }
  if (!this._battleMembers) {
    this.initBattleMembers();
  }
  while (this._battleMembers.length < this._battleMaxSize) {
    this._battleMembers.push(0x0);
  }
};
Game_Party.prototype.initBattleMembers = function (_0x4ded74) {
  if (!_0x4ded74) {
    this._battleMaxSize = Game_Party.defaultMaxBattleMembers;
  }
  this._battleMembers = this._actors.slice(0x0, this._battleMaxSize);
  while (this._battleMembers.length < this._battleMaxSize) {
    this._battleMembers.push(0x0);
  }
  if ($gamePlayer) {
    $gamePlayer.refresh();
  }
};
Game_Party.prototype.battleMembers = function () {
  if (Imported.VisuMZ_2_BattleGridSystem && SceneManager.isSceneGridTactics()) {
    return this.rawBattleMembers(true);
  }
  return this.rawBattleMembers().filter(_0x4a9772 => !!_0x4a9772);
};
Game_Party.prototype.rawBattleMembers = function (_0x416278) {
  this.checkInitBattleMembers();
  const _0x255e74 = this._battleMembers.map(_0x5800ef => $gameActors.actor(_0x5800ef));
  if (_0x416278) {
    return _0x255e74;
  }
  return SceneManager.isSceneParty() ? _0x255e74 : _0x255e74.filter(_0x5decdc => _0x5decdc && _0x5decdc.isAppeared());
};
Game_Party.prototype.reserveMembers = function () {
  const _0x4292e6 = this.battleMembers();
  return this.allMembers().filter(_0x1aae76 => !_0x4292e6.includes(_0x1aae76));
};
VisuMZ.PartySystem.Game_Party_setupStartingMembers = Game_Party.prototype.setupStartingMembers;
Game_Party.prototype.setupStartingMembers = function () {
  VisuMZ.PartySystem.Game_Party_setupStartingMembers.call(this);
  this.initBattleMembers();
};
VisuMZ.PartySystem.Game_Party_setupBattleTest = Game_Party.prototype.setupBattleTest;
Game_Party.prototype.setupBattleTest = function () {
  VisuMZ.PartySystem.Game_Party_setupBattleTest.call(this);
  this.addNonBattleTestMembers();
};
Game_Party.prototype.setupBattleTestMembers = function () {
  this._battleMaxSize = Game_Party.defaultMaxBattleMembers;
  this._battleMembers = [];
  this._actors = [];
  for (const _0x94ea24 of $dataSystem.testBattlers) {
    const _0x1819a8 = $gameActors.actor(_0x94ea24.actorId);
    if (!_0x1819a8) {
      continue;
    }
    _0x1819a8.changeLevel(_0x94ea24.level, false);
    _0x1819a8.initEquips(_0x94ea24.equips);
    _0x1819a8.recoverAll();
    this._battleMembers.push(_0x94ea24.actorId);
    this._actors.push(_0x94ea24.actorId);
  }
  this._battleMembers.remove(0x0);
  while (this._battleMembers.length < this._battleMaxSize) {
    this._battleMembers.push(0x0);
  }
  while (this._battleMembers.length > this.maxBattleMembers()) {
    this._battleMembers.pop();
  }
  if ($gamePlayer) {
    $gamePlayer.refresh();
  }
};
Game_Party.prototype.addNonBattleTestMembers = function () {
  const _0x9838ba = this.battleMembers();
  for (let _0x2f29ae = 0x1; _0x2f29ae < $dataActors.length; _0x2f29ae++) {
    const _0x284f97 = $gameActors.actor(_0x2f29ae);
    if (!_0x284f97) {
      continue;
    }
    if (_0x284f97.name().length <= 0x0) {
      continue;
    }
    if (_0x284f97.name().match(/-----/i)) {
      continue;
    }
    if (_0x9838ba.includes(_0x284f97)) {
      continue;
    }
    this._actors.push(_0x284f97.actorId());
  }
};
VisuMZ.PartySystem.Game_Party_addActor = Game_Party.prototype.addActor;
Game_Party.prototype.addActor = function (_0x31f922) {
  VisuMZ.PartySystem.Game_Party_addActor.call(this, _0x31f922);
  this.addActorToBattleMembers(_0x31f922);
  if (SceneManager.isSceneBattle()) {
    if (Imported.VisuMZ_2_BattleSystemOTB && BattleManager.isOTB()) {
      BattleManager.removeActionBattlersOTB();
      BattleManager.otbReturnBattlerToTurnOrders($gameActors.actor(_0x31f922));
    }
  }
};
Game_Party.prototype.addActorToBattleMembers = function (_0x437e) {
  this.checkInitBattleMembers();
  if (this._battleMembers.includes(_0x437e)) {
    return;
  }
  if (!this._actors.includes(_0x437e)) {
    return;
  }
  if (!this._battleMembers.includes(0x0)) {
    return;
  }
  const _0x355cf3 = $gameActors.actor(_0x437e);
  if (!_0x355cf3) {
    return;
  }
  const _0x286214 = this._battleMembers.indexOf(0x0);
  if (_0x286214 < 0x0) {
    return;
  }
  this._battleMembers[_0x286214] = _0x437e;
  if (SceneManager.isSceneBattle()) {
    _0x355cf3.onBattleStart();
    _0x355cf3.makeActions();
  }
  this.partyChangeRefresh();
};
Game_Party.prototype.addActorToBattleMembersAtIndex = function (_0x25c989, _0x5b0b1a) {
  this.checkInitBattleMembers();
  if (this._battleMembers.includes(_0x25c989)) {
    return;
  }
  if (!this._battleMembers.includes(0x0)) {
    return;
  }
  const _0x25dd76 = $gameActors.actor(_0x25c989);
  if (!_0x25dd76) {
    return;
  }
  this._battleMembers[_0x5b0b1a] = _0x25c989;
  _0x25dd76.makeActions();
  this.partyChangeRefresh();
};
VisuMZ.PartySystem.Game_Party_removeActor = Game_Party.prototype.removeActor;
Game_Party.prototype.removeActor = function (_0x1387f6) {
  this.removeActorFromBattleMembers(_0x1387f6);
  VisuMZ.PartySystem.Game_Party_removeActor.call(this, _0x1387f6);
};
Game_Party.prototype.removeActorFromBattleMembers = function (_0x6fffe) {
  this.checkInitBattleMembers();
  if (!this._battleMembers.includes(_0x6fffe)) {
    return;
  }
  if (_0x6fffe <= 0x0) {
    return;
  }
  const _0x1dd96a = this._battleMembers.indexOf(_0x6fffe);
  this._battleMembers[_0x1dd96a] = 0x0;
  this._actors.remove(_0x6fffe);
  this._actors.push(_0x6fffe);
  this.partyChangeRefresh();
};
Game_Party.prototype.partyChangeRefresh = function () {
  this.rearrangePartyActors();
  $gamePlayer.refresh();
  $gameMap.requestRefresh();
};
Game_Party.prototype.rearrangePartyActors = function () {
  this.checkInitBattleMembers();
  const _0x16f0c0 = this.battleMembers().concat(this.reserveMembers());
  this._actors = _0x16f0c0.map(_0x17a208 => _0x17a208 ? _0x17a208.actorId() : 0x0).remove(0x0);
};
Game_Party.prototype.sortActors = function () {
  this._actors.sort((_0xb9009f, _0x42dc61) => _0xb9009f - _0x42dc61);
  this.rearrangePartyActors();
  this.partyChangeRefresh();
};
Game_Party.prototype.anyRequiredPartyMembersInReserve = function () {
  for (const _0x313ad5 of this.reserveMembers()) {
    if (!_0x313ad5) {
      continue;
    }
    if (_0x313ad5.isRequiredInParty()) {
      return true;
    }
  }
  return false;
};
VisuMZ.PartySystem.Game_Party_swapOrder = Game_Party.prototype.swapOrder;
Game_Party.prototype.swapOrder = function (_0x35b8d5, _0xa4d4e4) {
  const _0x1a84cc = this.battleMembers().remove(null).remove(undefined).length;
  VisuMZ.PartySystem.Game_Party_swapOrder.call(this, _0x35b8d5, _0xa4d4e4);
  this.swapOrderPartySystemPlugin(_0x35b8d5, _0xa4d4e4, _0x1a84cc);
};
Game_Party.prototype.swapOrderPartySystemPlugin = function (_0x59fe64, _0x2117a7, _0x5cf256) {
  this._battleMembers = [];
  for (let _0x483da0 = 0x0; _0x483da0 < this._actors.length; _0x483da0++) {
    if (this._battleMembers.length >= this.maxBattleMembers()) {
      break;
    }
    if (SceneManager._scene.allowEarlySwapOrderBreak()) {
      if (this._battleMembers.length >= _0x5cf256) {
        break;
      }
    }
    this._battleMembers[_0x483da0] = this._actors[_0x483da0];
  }
  $gamePlayer.refresh();
};
Scene_MenuBase.prototype.allowEarlySwapOrderBreak = function () {
  if (this.constructor.name === 'Scene_BattleGridTactics') {
    return true;
  }
  return false;
};
Game_Party.prototype.createForcedParty = function (_0x37a9d0) {
  if (this.inBattle()) {
    return;
  }
  if (!_0x37a9d0) {
    return;
  }
  if (_0x37a9d0.length <= 0x0) {
    return;
  }
  this._forcedPartyActors = _0x37a9d0.clone();
  this._forcedPartyActors = this._forcedPartyActors.filter(_0x596949 => !!$gameActors.actor(_0x596949));
  while (this._forcedPartyActors.length > this.maxBattleMembers()) {
    this._forcedPartyActors.pop();
  }
  $gamePlayer.refresh();
  $gameMap.requestRefresh();
};
Game_Party.prototype.clearForcedParty = function () {
  if (this.inBattle()) {
    return;
  }
  this._forcedPartyActors = undefined;
  $gamePlayer.refresh();
  $gameMap.requestRefresh();
};
VisuMZ.PartySystem.Game_Party_allMembers_FP = Game_Party.prototype.allMembers;
Game_Party.prototype.allMembers = function () {
  if (this._forcedPartyActors !== undefined) {
    return this._forcedPartyActors.map(_0x54f1c5 => $gameActors.actor(_0x54f1c5));
  }
  return VisuMZ.PartySystem.Game_Party_allMembers_FP.call(this);
};
VisuMZ.PartySystem.Game_Party_rawBattleMembers_FP = Game_Party.prototype.rawBattleMembers;
Game_Party.prototype.rawBattleMembers = function (_0x55f7e7) {
  if (this._forcedPartyActors !== undefined) {
    return this._forcedPartyActors.map(_0xdbdac1 => $gameActors.actor(_0xdbdac1));
  }
  return VisuMZ.PartySystem.Game_Party_rawBattleMembers_FP.call(this, _0x55f7e7);
};
VisuMZ.PartySystem.Game_Party_reserveMembers_FP = Game_Party.prototype.reserveMembers;
Game_Party.prototype.reserveMembers = function () {
  if (this._forcedPartyActors !== undefined) {
    return [];
  }
  return VisuMZ.PartySystem.Game_Party_reserveMembers_FP.call(this);
};
VisuMZ.PartySystem.Game_System_isFormationEnabled_FP = Game_System.prototype.isFormationEnabled;
Game_System.prototype.isFormationEnabled = function () {
  if ($gameParty._forcedPartyActors !== undefined) {
    return false;
  }
  if ($gameParty._forcedBattleGridTactics !== undefined) {
    return false;
  }
  return VisuMZ.PartySystem.Game_System_isFormationEnabled_FP.call(this);
};
VisuMZ.PartySystem.Game_Actor_canSwitchPartyInBattle_FP = Game_Actor.prototype.canSwitchPartyInBattle;
Game_Actor.prototype.canSwitchPartyInBattle = function () {
  if ($gameParty._forcedPartyActors !== undefined) {
    return false;
  }
  if ($gameParty._forcedBattleGridTactics !== undefined) {
    return false;
  }
  return VisuMZ.PartySystem.Game_Actor_canSwitchPartyInBattle_FP.call(this);
};
VisuMZ.PartySystem.Game_Party_canSwitchPartyInBattle_FP = Game_Party.prototype.canSwitchPartyInBattle;
Game_Party.prototype.canSwitchPartyInBattle = function () {
  if ($gameParty._forcedPartyActors !== undefined) {
    return false;
  }
  if ($gameParty._forcedBattleGridTactics !== undefined) {
    return false;
  }
  return VisuMZ.PartySystem.Game_Party_canSwitchPartyInBattle_FP.call(this);
};
VisuMZ.PartySystem.Game_Troop_increaseTurn = Game_Troop.prototype.increaseTurn;
Game_Troop.prototype.increaseTurn = function () {
  VisuMZ.PartySystem.Game_Troop_increaseTurn.call(this);
  $gameParty.updateBattlePartySwitchCooldown();
};
Scene_Menu.prototype.commandFormation = function () {
  SceneManager.push(Scene_Party);
};
function Scene_Party() {
  this.initialize(...arguments);
}
Scene_Party.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Party.prototype.constructor = Scene_Party;
Scene_Party.prototype.initialize = function () {
  this.loadPartyImages();
  Scene_MenuBase.prototype.initialize.call(this);
};
Scene_Party.prototype.isRightInputMode = function () {
  if (ConfigManager.uiMenuStyle && ConfigManager.uiInputPosition !== undefined) {
    return ConfigManager.uiInputPosition;
  } else {
    return ConfigManager.uiMenuStyle === false ? false : Scene_MenuBase.prototype.isRightInputMode.call(this);
  }
};
Scene_Party.prototype.helpAreaHeight = function () {
  return 0x0;
};
Scene_Party.prototype.needsPageButtons = function () {
  return true;
};
Scene_Party.prototype.createPageButtons = function () {
  Scene_MenuBase.prototype.createPageButtons.call(this);
  this._pageupButton._clickHandler = undefined;
  this._pagedownButton._clickHandler = undefined;
};
Scene_Party.prototype.loadPartyImages = function () {
  for (const _0x5668fa of $gameParty.members()) {
    ImageManager.loadFace(_0x5668fa.faceName());
    ImageManager.loadCharacter(_0x5668fa.characterName());
    ImageManager.loadSvActor(_0x5668fa.battlerName());
  }
};
Scene_Party.prototype.create = function () {
  Scene_MenuBase.prototype.create.call(this);
  this.createActivePartyLabel();
  this.createActivePartyWindow();
  this.createReservePartyLabel();
  this.createReservePartyWindow();
  this.createStatusLabel();
  this.createStatusWindow();
};
Scene_Party.prototype.createActivePartyLabel = function () {
  const _0x391eaf = this.activePartyLabelRect();
  this._activePartyLabel = new Window_PartyLabel(_0x391eaf, TextManager.activeParty);
  this._activePartyLabel.setBackgroundType(VisuMZ.PartySystem.Settings.Window.ActivePartyLabelBgType);
  this.addWindow(this._activePartyLabel);
};
Scene_Party.prototype.activePartyLabelRect = function () {
  return VisuMZ.PartySystem.Settings.Window.ActivePartyLabelRect.call(this);
};
Scene_Party.prototype.createActivePartyWindow = function () {
  const _0x42524e = this.activePartyWindowRect();
  this._activePartyWindow = new Window_PartyActive(_0x42524e);
  this._activePartyWindow.setBackgroundType(VisuMZ.PartySystem.Settings.Window.ActivePartyWindowBgType);
  this._activePartyWindow.setHandler('ok', this.onActiveOk.bind(this));
  this._activePartyWindow.setHandler('cancel', this.popScene.bind(this));
  this.addWindow(this._activePartyWindow);
};
Scene_Party.prototype.activePartyWindowRect = function () {
  return VisuMZ.PartySystem.Settings.Window.ActivePartyWindowRect.call(this);
};
Scene_Party.prototype.onActiveOk = function () {
  this._reservePartyWindow.activate();
  this._reservePartyWindow.reselect();
};
Scene_Party.prototype.createReservePartyLabel = function () {
  const _0x4a83a9 = this.reservePartyLabelRect();
  this._reservePartyLabel = new Window_PartyLabel(_0x4a83a9, TextManager.reserveParty);
  this._reservePartyLabel.setBackgroundType(VisuMZ.PartySystem.Settings.Window.ReservePartyLabelBgType);
  this.addWindow(this._reservePartyLabel);
};
Scene_Party.prototype.reservePartyLabelRect = function () {
  return VisuMZ.PartySystem.Settings.Window.ReservePartyLabelRect.call(this);
};
Scene_Party.prototype.createReservePartyWindow = function () {
  const _0x50ad76 = this.reservePartyWindowRect();
  this._reservePartyWindow = new Window_PartyReserve(_0x50ad76);
  this._reservePartyWindow.setBackgroundType(VisuMZ.PartySystem.Settings.Window.ReservePartyWindowBgType);
  this._reservePartyWindow.setHandler('ok', this.onReserveOk.bind(this));
  this._reservePartyWindow.setHandler("cancel", this.onReserveCancel.bind(this));
  this.addWindow(this._reservePartyWindow);
};
Scene_Party.prototype.reservePartyWindowRect = function () {
  return VisuMZ.PartySystem.Settings.Window.ReservePartyWindowRect.call(this);
};
Scene_Party.prototype.onReserveOk = function () {
  const _0x8561e7 = this._reservePartyWindow.pendingIndex();
  const _0x39de70 = this._activePartyWindow.currentActor();
  if (_0x8561e7 < 0x0) {
    if (_0x39de70) {
      $gameParty.removeActorFromBattleMembers(_0x39de70.actorId());
    }
  } else {
    const _0x4d61a7 = this._reservePartyWindow.currentActor().actorId();
    const _0x4b0065 = this._activePartyWindow.index();
    if (_0x39de70) {
      $gameParty.removeActorFromBattleMembers(_0x39de70.actorId());
    }
    $gameParty.addActorToBattleMembersAtIndex(_0x4d61a7, _0x4b0065);
  }
  this.refreshAllWindows();
  this.onReserveCancel();
};
Scene_Party.prototype.refreshAllWindows = function () {
  this._activePartyWindow.refresh();
  this._reservePartyWindow.refresh();
};
Scene_Party.prototype.onReserveCancel = function () {
  this._reservePartyWindow.deactivate();
  this._reservePartyWindow.deselect();
  this._activePartyWindow.activate();
};
Scene_Party.prototype.createStatusLabel = function () {
  const _0xd24808 = this.statusLabelRect();
  this._statusPartyLabel = new Window_PartyLabel(_0xd24808, TextManager.statusParty);
  this._statusPartyLabel.setBackgroundType(VisuMZ.PartySystem.Settings.Window.StatusLabelBgType);
  this.addWindow(this._statusPartyLabel);
};
Scene_Party.prototype.statusLabelRect = function () {
  return VisuMZ.PartySystem.Settings.Window.StatusLabelRect.call(this);
};
Scene_Party.prototype.createStatusWindow = function () {
  const _0x49eee7 = this.statusWindowRect();
  this._statusPartyWindow = new Window_PartyStatus(_0x49eee7);
  this._statusPartyWindow.setBackgroundType(VisuMZ.PartySystem.Settings.Window.StatusWindowBgType);
  this.addWindow(this._statusPartyWindow);
  this._reservePartyWindow.setStatusWindow(this._statusPartyWindow);
  this._activePartyWindow.setStatusWindow(this._statusPartyWindow);
};
Scene_Party.prototype.statusWindowRect = function () {
  return VisuMZ.PartySystem.Settings.Window.StatusWindowRect.call(this);
};
Scene_Party.prototype.buttonAssistKey3 = function () {
  return TextManager.getInputButtonString('shift');
};
Scene_Party.prototype.buttonAssistText1 = function () {
  return TextManager.assistSwapPositions;
};
Scene_Party.prototype.buttonAssistText3 = function () {
  const _0x43fd63 = this._activePartyWindow;
  const _0x132678 = this._reservePartyWindow;
  if (_0x43fd63 && _0x43fd63.active && _0x43fd63.currentActor() && _0x43fd63.isShiftRemoveShortcutEnabled()) {
    return TextManager.assistRemovePartyMember;
  } else {
    return _0x132678 && _0x132678.active && $gameParty.reserveMembers().length > 0x0 ? TextManager.assistSortPartyMembers : '';
  }
};
Scene_Party.prototype.buttonAssistText4 = function () {
  if (this._activePartyWindow && this._activePartyWindow.active) {
    return TextManager.assistSwapOutPartyMember;
  } else {
    return this._reservePartyWindow && this._reservePartyWindow.active ? TextManager.assistSwapInPartyMember : Scene_MenuBase.prototype.buttonAssistText4.call(this);
  }
};
Scene_Party.prototype.createBackground = function () {
  Scene_MenuBase.prototype.createBackground.call(this);
  this.setBackgroundOpacity(this.getBackgroundOpacity());
  this.createCustomBackgroundImages();
};
Scene_Party.prototype.getBackgroundOpacity = function () {
  return VisuMZ.PartySystem.Settings.BgSettings.SnapshotOpacity;
};
Scene_Party.prototype.createCustomBackgroundImages = function () {
  const _0x396ff1 = {
    'BgFilename1': VisuMZ.PartySystem.Settings.BgSettings.BgFilename1,
    'BgFilename2': VisuMZ.PartySystem.Settings.BgSettings.BgFilename2
  };
  if (_0x396ff1 && (_0x396ff1.BgFilename1 !== '' || _0x396ff1.BgFilename2 !== '')) {
    this._backSprite1 = new Sprite(ImageManager.loadTitle1(_0x396ff1.BgFilename1));
    this._backSprite2 = new Sprite(ImageManager.loadTitle2(_0x396ff1.BgFilename2));
    this.addChild(this._backSprite1);
    this.addChild(this._backSprite2);
    this._backSprite1.bitmap.addLoadListener(this.adjustSprite.bind(this, this._backSprite1));
    this._backSprite2.bitmap.addLoadListener(this.adjustSprite.bind(this, this._backSprite2));
  }
};
Scene_Party.prototype.adjustSprite = function (_0x34588f) {
  this.scaleSprite(_0x34588f);
  this.centerSprite(_0x34588f);
};
Scene_Party.prototype.terminate = function () {
  Scene_MenuBase.prototype.terminate.call(this);
  $gameParty.partyChangeRefresh();
};
Window_StatusBase.prototype.drawActorPartyIcons = function (_0x238ef0, _0x2c653f, _0xde451f, _0x32d4cf) {
  if (!_0x238ef0) {
    return;
  }
  if (_0x32d4cf) {
    this.drawActorPartyIconsVert(_0x238ef0, _0x2c653f, _0xde451f);
  } else {
    this.drawActorPartyIconsHorz(_0x238ef0, _0x2c653f, _0xde451f);
  }
};
Window_StatusBase.prototype.drawActorPartyIconsHorz = function (_0x197368, _0x2e4cba, _0x5d0297) {
  _0x5d0297 += Math.round((this.lineHeight() - ImageManager.iconHeight) / 0x2);
  if (!_0x197368.isFormationChangeOk()) {
    this.drawIcon(ImageManager.lockPartyMemberIcon, _0x2e4cba, _0x5d0297);
    _0x2e4cba += ImageManager.iconWidth + 0x4;
  }
  if (_0x197368.isRequiredInParty()) {
    this.drawIcon(ImageManager.requiredPartyMemberIcon, _0x2e4cba, _0x5d0297);
    _0x2e4cba += ImageManager.iconWidth + 0x4;
  }
};
Window_StatusBase.prototype.drawActorPartyIconsVert = function (_0x1db647, _0x50c136, _0x2d43a7) {
  let _0xf6ac7a = 0x0;
  if (!_0x1db647.isFormationChangeOk()) {
    _0xf6ac7a += 0x1;
  }
  if (_0x1db647.isRequiredInParty()) {
    _0xf6ac7a += 0x1;
  }
  if (_0xf6ac7a <= 0x1) {
    return this.drawActorPartyIconsHorz(_0x1db647, _0x50c136, _0x2d43a7);
  }
  _0x2d43a7 += Math.round((this.lineHeight() - ImageManager.iconHeight) / 0x2);
  _0x2d43a7 -= Math.round(this.lineHeight() / 0x2);
  this.drawIcon(ImageManager.lockPartyMemberIcon, _0x50c136, _0x2d43a7);
  _0x2d43a7 += this.lineHeight();
  this.drawIcon(ImageManager.requiredPartyMemberIcon, _0x50c136, _0x2d43a7);
};
function Window_PartyLabel() {
  this.initialize(...arguments);
}
Window_PartyLabel.prototype = Object.create(Window_Base.prototype);
Window_PartyLabel.prototype.constructor = Window_PartyLabel;
Window_PartyLabel.prototype.initialize = function (_0x2b5f3a, _0x54ab53) {
  Window_Base.prototype.initialize.call(this, _0x2b5f3a);
  this.setText(_0x54ab53);
};
Window_PartyLabel.prototype.updatePadding = function () {
  this.padding = 0x0;
};
Window_PartyLabel.prototype.setText = function (_0x4a1556) {
  this.contents.clear();
  this.drawText(_0x4a1556, 0x0, 0x0, this.innerWidth, "center");
};
function Window_PartyActive() {
  this.initialize(...arguments);
}
Window_PartyActive.prototype = Object.create(Window_StatusBase.prototype);
Window_PartyActive.prototype.constructor = Window_PartyActive;
Window_PartyActive._actorGraphic = VisuMZ.PartySystem.Settings.Window.ActivePartyGraphic;
Window_PartyActive.prototype.initialize = function (_0x36eb06) {
  Window_StatusBase.prototype.initialize.call(this, _0x36eb06);
  this.refresh();
  this.activate();
  this.smoothSelect(0x0);
};
Window_PartyActive.prototype.addRemoveCommand = function () {
  return VisuMZ.PartySystem.Settings.General.AddRemoveCmd;
};
Window_PartyActive.prototype.maxItems = function () {
  return $gameParty.maxBattleMembers();
};
Window_PartyActive.prototype.maxCols = function () {
  return $gameParty.maxBattleMembers();
};
Window_PartyActive.prototype.itemHeight = function () {
  return this.innerHeight;
};
Window_PartyActive.prototype.actor = function (_0x1d2ea8) {
  return $gameParty.rawBattleMembers()[_0x1d2ea8];
};
Window_PartyActive.prototype.currentActor = function () {
  return this.actor(this.index());
};
Window_PartyActive.prototype.isCurrentItemEnabled = function () {
  const _0x24325c = this.actor(this.index());
  return _0x24325c ? _0x24325c.isFormationChangeOk() : true;
};
Window_PartyActive.prototype.isCancelEnabled = function () {
  if ($gameParty.members().length <= 0x0) {
    return true;
  }
  if ($gameParty.anyRequiredPartyMembersInReserve()) {
    return false;
  }
  return $gameParty.battleMembers().length > 0x0;
};
Window_PartyActive.prototype.processCursorMove = function () {
  Window_StatusBase.prototype.processCursorMove.call(this);
  this.checkShiftRemoveShortcut();
};
Window_PartyActive.prototype.cursorDown = function (_0x1327f1) {
  if (this.isOkEnabled()) {
    this.processOk();
  }
};
Window_PartyActive.prototype.cursorPagedown = function () {
  const _0x5d92ec = this.index();
  const _0x568d3c = _0x5d92ec + 0x1 >= this.maxItems() ? 0x0 : _0x5d92ec + 0x1;
  this.quickSwap(_0x5d92ec, _0x568d3c);
};
Window_PartyActive.prototype.cursorPageup = function () {
  const _0x14b6bf = this.index();
  const _0x34d7a0 = _0x14b6bf - 0x1 < 0x0 ? this.maxItems() - 0x1 : _0x14b6bf - 0x1;
  this.quickSwap(_0x14b6bf, _0x34d7a0);
};
Window_PartyActive.prototype.quickSwap = function (_0x211abc, _0xbe0959) {
  const _0x426a04 = this.actor(_0x211abc);
  const _0x55d977 = this.actor(_0xbe0959);
  if (_0x426a04 && !_0x426a04.isFormationChangeOk()) {
    return;
  }
  if (_0x55d977 && !_0x55d977.isFormationChangeOk()) {
    return;
  }
  const _0x560744 = $gameParty._battleMembers;
  _0x560744[_0x211abc] = _0x55d977 ? _0x55d977.actorId() : 0x0;
  _0x560744[_0xbe0959] = _0x426a04 ? _0x426a04.actorId() : 0x0;
  this.refresh();
  this.playCursorSound();
  this.smoothSelect(_0xbe0959);
};
Window_PartyActive.prototype.checkShiftRemoveShortcut = function () {
  if (!this.isShiftRemoveShortcutEnabled()) {
    return;
  }
  if (Input.isTriggered("shift")) {
    this.processShiftRemoveShortcut();
  }
};
Window_PartyActive.prototype.processShiftRemoveShortcut = function () {
  SoundManager.playEquip();
  const _0x4e81b0 = this.currentActor();
  $gameParty.removeActorFromBattleMembers(_0x4e81b0.actorId());
  this.callUpdateHelp();
  SceneManager._scene.refreshAllWindows();
};
Window_PartyActive.prototype.isShiftRemoveShortcutEnabled = function () {
  if (!this.addRemoveCommand()) {
    return false;
  }
  const _0x45ba66 = this.currentActor();
  return this.active && _0x45ba66 && _0x45ba66.isFormationChangeOk();
};
Window_PartyActive.prototype.drawItem = function (_0x1ce9cb) {
  const _0xbb586b = this.actor(_0x1ce9cb);
  if (!_0xbb586b) {
    return this.drawItemEmpty(_0x1ce9cb);
  }
  this.resetFontSettings();
  const _0x50688f = this.itemRect(_0x1ce9cb);
  this.drawItemImage(_0x1ce9cb);
  const _0x5ba953 = _0x50688f.y + _0x50688f.height - this.lineHeight();
  this.drawDarkRect(_0x50688f.x, _0x5ba953, _0x50688f.width, 0x2);
  this.drawActorPartyIcons(_0xbb586b, _0x50688f.x + 0x2, _0x50688f.y);
  this.drawActorName(_0xbb586b, _0x50688f.x, _0x5ba953, _0x50688f.width);
};
Window_PartyActive.prototype.drawItemEmpty = function (_0x51b458) {
  this.resetFontSettings();
  const _0x29ee23 = this.itemRect(_0x51b458);
  this.drawItemDarkRect(_0x29ee23.x, _0x29ee23.y, _0x29ee23.width, _0x29ee23.height);
  const _0x3b4061 = _0x29ee23.y + Math.round((_0x29ee23.height - this.lineHeight()) / 0x2);
  this.changeTextColor(ColorManager.systemColor());
  this.drawText(TextManager.emptyPartyMember, _0x29ee23.x, _0x3b4061, _0x29ee23.width, 'center');
};
Window_PartyActive.prototype.drawItemDarkRect = function (_0x2a577c, _0x22d309, _0x8ef68c, _0x125811, _0x2222fa) {
  _0x2222fa = Math.max(_0x2222fa || 0x1, 0x1);
  while (_0x2222fa--) {
    _0x125811 = _0x125811 || this.lineHeight();
    this.contents.paintOpacity = 0xa0;
    const _0x27e82d = ColorManager.gaugeBackColor();
    this.contents.fillRect(_0x2a577c + 0x1, _0x22d309 + 0x1, _0x8ef68c - 0x2, _0x125811 - 0x2, _0x27e82d);
    this.contents.paintOpacity = 0xff;
  }
};
Window_PartyActive.prototype.drawItemImage = function (_0x3095af) {
  switch (Window_PartyActive._actorGraphic.toLowerCase().trim()) {
    case 'face':
      this.drawItemImageFace(_0x3095af);
      break;
    case "sprite":
      this.drawItemImageSprite(_0x3095af);
      break;
    case "svbattler":
      if (Imported.VisuMZ_1_MainMenuCore) {
        this.drawItemImageSvActor(_0x3095af);
      }
      break;
  }
  ;
};
Window_PartyActive.prototype.drawItemImageFace = function (_0x4111bc) {
  const _0x17962a = this.actor(_0x4111bc);
  const _0x48c334 = this.itemRect(_0x4111bc);
  const _0x2cb401 = Math.min(ImageManager.faceWidth, _0x48c334.width - 0x2);
  const _0x4596f0 = _0x48c334.height - 0x2;
  this.changePaintOpacity(_0x17962a.isFormationChangeOk());
  const _0x4487fb = Math.round(_0x48c334.x + (_0x48c334.width - _0x2cb401) / 0x2);
  this.drawActorFace(_0x17962a, _0x4487fb, _0x48c334.y + 0x1, _0x2cb401, _0x4596f0);
  this.changePaintOpacity(true);
};
Window_PartyActive.prototype.drawItemImageSprite = function (_0x4948cf) {
  const _0x5a28a4 = this.actor(_0x4948cf);
  const _0x58dda2 = this.itemRect(_0x4948cf);
  const _0x494c45 = VisuMZ.PartySystem.Settings.Window;
  const _0x39cba9 = _0x58dda2.x + Math.round(_0x58dda2.width / 0x2) + _0x494c45.ActiveSpriteOffsetX;
  const _0x3c51be = _0x58dda2.y + _0x58dda2.height - this.lineHeight() - _0x494c45.ActiveSpriteOffsetY;
  this.drawActorCharacter(_0x5a28a4, _0x39cba9, _0x3c51be);
};
Window_PartyActive.prototype.drawItemImageSvActor = function (_0x3362ac) {
  const _0x3f30ac = this.actor(_0x3362ac);
  const _0x25ba5c = _0x3f30ac.battlerName();
  const _0x314116 = this.itemRect(_0x3362ac);
  const _0x3107ce = VisuMZ.PartySystem.Settings.Window;
  const _0x40c849 = _0x314116.x + Math.round(_0x314116.width / 0x2) + _0x3107ce.ActiveBattlerOffsetX;
  const _0x57d8a9 = _0x314116.y + _0x314116.height - this.lineHeight() - _0x3107ce.ActiveBattlerOffsetY;
  this.drawSvActor(_0x25ba5c, _0x40c849, _0x57d8a9);
};
Window_PartyActive.prototype.drawDarkRect = function (_0x3027f2, _0x10f5e8, _0x2f3e73, _0x40d555) {
  const _0x29ae40 = ColorManager.dimColor1();
  const _0x41bb2d = ColorManager.dimColor2();
  const _0x396240 = _0x2f3e73 / 0x2;
  const _0x5f526a = this.lineHeight();
  while (_0x40d555--) {
    this.contents.gradientFillRect(_0x3027f2, _0x10f5e8, _0x396240, _0x5f526a, _0x41bb2d, _0x29ae40);
    this.contents.gradientFillRect(_0x3027f2 + _0x396240, _0x10f5e8, _0x396240, _0x5f526a, _0x29ae40, _0x41bb2d);
  }
};
Window_PartyActive.prototype.drawActorName = function (_0x4a13dc, _0x20ed3b, _0x1e77ea, _0x435e78) {
  _0x435e78 = _0x435e78 || 0xa8;
  this.changeTextColor(ColorManager.hpColor(_0x4a13dc));
  this.drawText(_0x4a13dc.name(), _0x20ed3b, _0x1e77ea, _0x435e78, "center");
};
Window_PartyActive.prototype.setStatusWindow = function (_0x411802) {
  this._statusWindow = _0x411802;
  this.callUpdateHelp();
};
Window_PartyActive.prototype.callUpdateHelp = function () {
  if (this._statusWindow) {
    this._statusWindow.setActor(this.actor(this.index()));
  }
};
function Window_PartyReserve() {
  this.initialize(...arguments);
}
Window_PartyReserve.prototype = Object.create(Window_StatusBase.prototype);
Window_PartyReserve.prototype.constructor = Window_PartyReserve;
Window_PartyReserve._actorGraphic = VisuMZ.PartySystem.Settings.Window.ReservePartyGraphic;
Window_PartyReserve._rowThickness = VisuMZ.PartySystem.Settings.Window.ReserveItemThickness;
Window_PartyReserve.prototype.initialize = function (_0x37d203) {
  Window_StatusBase.prototype.initialize.call(this, _0x37d203);
  this._lastIndex = 0x0;
  this.refresh();
};
Window_PartyReserve.prototype.maxCols = function () {
  return VisuMZ.PartySystem.Settings.Window.ReserveCol || 0x1;
};
Window_PartyReserve.prototype.itemHeight = function () {
  return this.lineHeight() * Window_PartyReserve._rowThickness + 0x6;
};
Window_PartyReserve.prototype.addRemoveCommand = function () {
  return VisuMZ.PartySystem.Settings.General.AddRemoveCmd;
};
Window_PartyReserve.prototype.maxItems = function () {
  let _0x5f043b = $gameParty.reserveMembers().length;
  if (this.addRemoveCommand()) {
    _0x5f043b++;
  }
  return _0x5f043b;
};
Window_PartyReserve.prototype.actor = function (_0x8f21d7) {
  return $gameParty.reserveMembers()[_0x8f21d7];
};
Window_PartyReserve.prototype.currentActor = function () {
  return this.actor(this.index());
};
Window_PartyReserve.prototype.playOkSound = function () {
  SoundManager.playEquip();
};
Window_PartyReserve.prototype.isCurrentItemEnabled = function () {
  const _0x21c8d6 = this.actor(this.index());
  return _0x21c8d6 ? _0x21c8d6.isFormationChangeOk() : true;
};
Window_PartyReserve.prototype.processCursorMove = function () {
  Window_StatusBase.prototype.processCursorMove.call(this);
  this.checkShiftSortShortcut();
};
Window_PartyReserve.prototype.cursorUp = function (_0x1e24c8) {
  if (this.index() <= 0x0 && Input.isTriggered('up')) {
    this.processCancel();
  } else {
    Window_StatusBase.prototype.cursorUp.call(this, _0x1e24c8);
  }
};
Window_PartyReserve.prototype.cursorPagedown = function () {
  const _0x10154b = this.index();
  const _0x141a85 = _0x10154b + 0x1 >= this.maxItems() - 0x1 ? 0x0 : _0x10154b + 0x1;
  this.quickSwap(_0x10154b, _0x141a85);
};
Window_PartyReserve.prototype.cursorPageup = function () {
  const _0x57da49 = this.index();
  const _0x55302d = _0x57da49 - 0x1 < 0x0 ? this.maxItems() - 0x2 : _0x57da49 - 0x1;
  this.quickSwap(_0x57da49, _0x55302d);
};
Window_PartyReserve.prototype.quickSwap = function (_0x5b894e, _0x572c8f) {
  const _0x1aaa45 = this.actor(_0x5b894e);
  const _0x4d5a97 = this.actor(_0x572c8f);
  if (!_0x1aaa45?.['isFormationChangeOk']() || !_0x4d5a97?.["isFormationChangeOk"]()) {
    return;
  } else {
    if (!_0x1aaa45 || !_0x4d5a97) {
      return;
    }
  }
  const _0x58f61e = $gameParty._actors;
  const _0x3c87c0 = _0x58f61e.indexOf(_0x1aaa45.actorId());
  const _0x5e6050 = _0x58f61e.indexOf(_0x4d5a97.actorId());
  _0x58f61e[_0x3c87c0] = _0x4d5a97 ? _0x4d5a97.actorId() : 0x0;
  _0x58f61e[_0x5e6050] = _0x1aaa45 ? _0x1aaa45.actorId() : 0x0;
  this.refresh();
  this.playCursorSound();
  this.smoothSelect(_0x572c8f);
};
Window_PartyReserve.prototype.checkShiftSortShortcut = function () {
  if (!this.isShiftShortcutEnabled()) {
    return;
  }
  if (Input.isTriggered('shift')) {
    this.processShiftSortShortcut();
  }
};
Window_PartyReserve.prototype.processShiftSortShortcut = function () {
  SoundManager.playEquip();
  $gameParty.sortActors();
  this.smoothSelect(0x0);
  SceneManager._scene.refreshAllWindows();
};
Window_PartyReserve.prototype.isShiftShortcutEnabled = function () {
  return this.active;
};
Window_PartyReserve.prototype.pendingIndex = function () {
  const _0x2e3692 = this.currentActor();
  return _0x2e3692 ? _0x2e3692.index() : -0x1;
};
Window_PartyReserve.prototype.select = function (_0x2b1701) {
  Window_StatusBase.prototype.select.call(this, _0x2b1701);
  if (_0x2b1701 >= 0x0) {
    this._lastIndex = _0x2b1701;
  }
};
Window_PartyReserve.prototype.reselect = function () {
  this._lastIndex = Math.min(this._lastIndex, this.maxItems() - 0x1);
  this.smoothSelect(this._lastIndex);
  this.ensureCursorVisible(true);
  this.cursorVisible = true;
};
Window_PartyReserve.prototype.drawItem = function (_0x12cc4c) {
  const _0x23c873 = this.actor(_0x12cc4c);
  if (!_0x23c873) {
    return this.drawRemoveCommand(_0x12cc4c);
  }
  const _0x48024b = this.itemLineRect(_0x12cc4c);
  this.drawItemImage(_0x12cc4c);
  const _0x41534d = Window_PartyReserve._rowThickness === 0x1;
  const _0x54b409 = ImageManager.iconWidth * (_0x41534d ? 0x2 : 0x1);
  const _0x24d4dc = this.nameStartPosition() + this.itemPadding();
  const _0x5ef609 = _0x48024b.width - 0xa8;
  const _0x3ade16 = _0x48024b.x + _0x54b409 + Math.min(_0x24d4dc, _0x5ef609);
  const _0x2236f8 = !_0x41534d;
  this.changePaintOpacity(_0x23c873.isFormationChangeOk());
  this.drawActorPartyIcons(_0x23c873, _0x48024b.x, _0x48024b.y, _0x2236f8);
  this.drawActorName(_0x23c873, _0x3ade16, _0x48024b.y, 0xa8);
  this.changePaintOpacity(true);
};
Window_PartyReserve.prototype.nameStartPosition = function () {
  const _0x452bd8 = VisuMZ.PartySystem.Settings.Window;
  switch (Window_PartyReserve._actorGraphic.toLowerCase().trim()) {
    case "face":
      return ImageManager.faceWidth;
    case "sprite":
      return _0x452bd8.ReserveSpriteOffsetX * 0x2;
    case "svbattler":
      return _0x452bd8.ReserveBattlerOffsetX * 0x2;
  }
  ;
};
Window_PartyReserve.prototype.drawRemoveCommand = function (_0x17802f) {
  const _0x3939e1 = this.itemLineRect(_0x17802f);
  this.changePaintOpacity(true);
  const _0x4f1949 = TextManager.removePartyMember;
  this.drawText(_0x4f1949, _0x3939e1.x, _0x3939e1.y, _0x3939e1.width, "center");
};
Window_PartyReserve.prototype.drawItemImage = function (_0x5351fb) {
  switch (Window_PartyReserve._actorGraphic.toLowerCase().trim()) {
    case "face":
      this.drawItemImageFace(_0x5351fb);
      break;
    case 'sprite':
      this.drawItemImageSprite(_0x5351fb);
      break;
    case "svbattler":
      if (Imported.VisuMZ_1_MainMenuCore) {
        this.drawItemImageSvActor(_0x5351fb);
      }
      break;
  }
  ;
};
Window_PartyReserve.prototype.drawItemImageFace = function (_0x32ffca) {
  const _0x3204cd = this.actor(_0x32ffca);
  const _0x2d6080 = this.itemRect(_0x32ffca);
  const _0x37abc4 = Window_PartyReserve._rowThickness === 0x1;
  _0x2d6080.x += ImageManager.iconWidth * (_0x37abc4 ? 0x2 : 0x1);
  const _0x38d96e = ImageManager.faceWidth;
  const _0x2ed30e = _0x2d6080.height - 0x2;
  this.changePaintOpacity(_0x3204cd.isFormationChangeOk());
  this.drawActorFace(_0x3204cd, _0x2d6080.x + 0x1, _0x2d6080.y + 0x1, _0x38d96e, _0x2ed30e);
  this.changePaintOpacity(true);
};
Window_PartyReserve.prototype.drawItemImageSprite = function (_0x26499e) {
  const _0xa2afce = this.actor(_0x26499e);
  const _0x4009dc = this.itemRect(_0x26499e);
  const _0x1a578c = Window_PartyReserve._rowThickness === 0x1;
  _0x4009dc.x += ImageManager.iconWidth * (_0x1a578c ? 0x2 : 0x1);
  const _0x10e96a = VisuMZ.PartySystem.Settings.Window;
  const _0x5788ef = _0x4009dc.x + _0x10e96a.ReserveSpriteOffsetX + this.itemPadding();
  const _0x14bbef = _0x4009dc.y + _0x4009dc.height - _0x10e96a.ReserveSpriteOffsetY;
  this.drawActorCharacter(_0xa2afce, _0x5788ef, _0x14bbef);
};
Window_PartyReserve.prototype.drawItemImageSvActor = function (_0x52f36d) {
  const _0x473314 = this.actor(_0x52f36d);
  const _0xbb2532 = _0x473314.battlerName();
  const _0x3daa05 = this.itemRect(_0x52f36d);
  const _0x5e181c = Window_PartyReserve._rowThickness === 0x1;
  _0x3daa05.x += ImageManager.iconWidth * (_0x5e181c ? 0x2 : 0x1);
  const _0x5cece2 = VisuMZ.PartySystem.Settings.Window;
  const _0x593001 = _0x3daa05.x + _0x5cece2.ReserveBattlerOffsetX + this.itemPadding();
  const _0x17758d = _0x3daa05.y + _0x3daa05.height - _0x5cece2.ReserveBattlerOffsetY;
  this.drawSvActor(_0xbb2532, _0x593001, _0x17758d);
};
Window_PartyReserve.prototype.setStatusWindow = function (_0x41b2da) {
  this._statusWindow = _0x41b2da;
  this.callUpdateHelp();
};
Window_PartyReserve.prototype.callUpdateHelp = function () {
  if (this._statusWindow) {
    this._statusWindow.setActor(this.actor(this.index()));
  }
};
function Window_PartyStatus() {
  this.initialize(...arguments);
}
Window_PartyStatus.prototype = Object.create(Window_StatusBase.prototype);
Window_PartyStatus.prototype.constructor = Window_PartyStatus;
Window_PartyStatus.prototype.initialize = function (_0x14ddad) {
  this._actor = null;
  Window_StatusBase.prototype.initialize.call(this, _0x14ddad);
};
Window_PartyStatus.prototype.drawItemDarkRect = function (_0x2bed77, _0x9e7fdd, _0x2128b0, _0x463768, _0x2d7358) {
  if (VisuMZ.PartySystem.Settings.General.DrawBackRect === false) {
    return;
  }
  _0x2d7358 = Math.max(_0x2d7358 || 0x1, 0x1);
  while (_0x2d7358--) {
    _0x463768 = _0x463768 || this.lineHeight();
    this.contents.paintOpacity = 0xa0;
    const _0x2ec651 = ColorManager.getPartySystemBackColor();
    this.contents.fillRect(_0x2bed77 + 0x1, _0x9e7fdd + 0x1, _0x2128b0 - 0x2, _0x463768 - 0x2, _0x2ec651);
    this.contents.paintOpacity = 0xff;
  }
};
ColorManager.getPartySystemBackColor = function () {
  const _0x2fa64d = VisuMZ.PartySystem.Settings.General;
  let _0x3e6209 = _0x2fa64d.BackRectColor !== undefined ? _0x2fa64d.BackRectColor : 0x13;
  return ColorManager.getColor(_0x3e6209);
};
Window_PartyStatus.prototype.setActor = function (_0x367301) {
  if (this._actor === _0x367301) {
    return;
  }
  this._actor = _0x367301;
  if (_0x367301) {
    const _0x233706 = ImageManager.loadFace(_0x367301.faceName());
    _0x233706.addLoadListener(this.refresh.bind(this));
  } else {
    this.refresh();
  }
};
Window_PartyStatus.prototype.refresh = function () {
  Window_StatusBase.prototype.refresh.call(this);
  this.contents.clear();
  this.resetFontSettings();
  VisuMZ.PartySystem.Settings.Window.StatusWindowDraw.call(this);
};
Window_PartyStatus.prototype.refreshOG = function () {
  if (!this._actor) {
    this.drawItemDarkRect(0x0, 0x0, this.innerWidth, this.innerHeight);
    const _0x474d6a = Math.round((this.innerHeight - this.lineHeight()) / 0x2);
    this.changeTextColor(ColorManager.systemColor());
    this.drawText(TextManager.emptyPartyMember, 0x0, _0x474d6a, this.innerWidth, "center");
    return;
  }
  this.drawActorFace(this._actor, 0x1, 0x0, ImageManager.faceWidth, ImageManager.faceHeight);
  this.drawActorSimpleStatus(this._actor, ImageManager.faceWidth + 0x24, 0x0);
  const _0x3ee25c = this.lineHeight();
  const _0x236e66 = this.actorParams();
  const _0xcf7911 = Math.round(this.innerWidth / 0x2);
  let _0x3f3b46 = 0x0;
  let _0x59489c = ImageManager.faceHeight + _0x3ee25c / 0x2;
  for (const _0x368bdd of _0x236e66) {
    this.drawItemDarkRect(_0x3f3b46, _0x59489c, _0xcf7911, _0x3ee25c);
    this.drawParamName(_0x368bdd, _0x3f3b46, _0x59489c, _0xcf7911);
    this.drawParamValue(_0x368bdd, _0x3f3b46, _0x59489c, _0xcf7911);
    if (_0x3f3b46 === 0x0) {
      _0x3f3b46 += _0xcf7911;
    } else {
      _0x3f3b46 = 0x0;
      _0x59489c += _0x3ee25c;
    }
  }
};
Window_PartyStatus.prototype.actorParams = function () {
  return Imported.VisuMZ_0_CoreEngine ? VisuMZ.CoreEngine.Settings.Param.DisplayedParams : [0x2, 0x3, 0x4, 0x5, 0x6, 0x7];
};
Window_PartyStatus.prototype.drawParamName = function (_0x4ef49c, _0x2261cc, _0x55aaa1, _0x5895bc) {
  const _0x59560d = this.itemPadding();
  _0x5895bc -= _0x59560d * 0x2;
  if (Imported.VisuMZ_0_CoreEngine) {
    this.drawParamText(_0x2261cc + _0x59560d, _0x55aaa1, _0x5895bc, _0x4ef49c, false);
  } else {
    const _0x1cd036 = TextManager.param(_0x4ef49c);
    this.changeTextColor(ColorManager.systemColor());
    this.drawText(_0x1cd036, _0x2261cc + _0x59560d, _0x55aaa1, _0x5895bc);
  }
};
Window_PartyStatus.prototype.drawParamValue = function (_0x6852e2, _0x4cf6eb, _0x3feea3, _0x1e58e1) {
  this.resetFontSettings();
  const _0x285152 = this.itemPadding();
  const _0x5d90d5 = this.getParamValue(_0x6852e2);
  this.drawText(_0x5d90d5, _0x4cf6eb + _0x285152, _0x3feea3, _0x1e58e1 - _0x285152 * 0x2, "right");
};
Window_PartyStatus.prototype.getParamValue = function (_0x3f68c4) {
  const _0xf0bac6 = this._actor;
  return Imported.VisuMZ_0_CoreEngine ? _0xf0bac6.paramValueByName(_0x3f68c4, true) : _0xf0bac6.param(_0x3f68c4);
};
function Window_PartyBattleSwitch() {
  this.initialize(...arguments);
}
Window_PartyBattleSwitch.prototype = Object.create(Window_StatusBase.prototype);
Window_PartyBattleSwitch.prototype.constructor = Window_PartyBattleSwitch;
Window_PartyBattleSwitch.prototype.initialize = function (_0x3bd096) {
  Window_StatusBase.prototype.initialize.call(this, _0x3bd096);
  this.setBackgroundType(VisuMZ.PartySystem.Settings.Window.BattleSwitchWindowBgType);
  this.openness = 0x0;
};
Window_PartyBattleSwitch.prototype.loadFaceImages = function () {
  for (const _0x513c23 of $gameParty.allMembers()) {
    ImageManager.loadFace(_0x513c23.faceName());
  }
};
Window_PartyBattleSwitch.prototype.maxCols = function () {
  return 0x1;
};
Window_PartyBattleSwitch.prototype.actor = function (_0x5abd1a) {
  return $gameParty.reserveMembers()[_0x5abd1a];
};
Window_PartyBattleSwitch.prototype.currentActor = function () {
  return this.actor(this.index());
};
Window_PartyBattleSwitch.prototype.itemHeight = function () {
  return this.lineHeight() * 0x2 + 0x8;
};
Window_PartyBattleSwitch.prototype.maxItems = function () {
  return $gameParty.reserveMembers().length;
};
Window_PartyBattleSwitch.prototype.activate = function () {
  Window_StatusBase.prototype.activate.call(this);
  this.open();
  this.refresh();
  this.smoothSelect(0x0);
};
Window_PartyBattleSwitch.prototype.deactivate = function () {
  Window_StatusBase.prototype.deactivate.call(this);
  this.close();
};
Window_PartyBattleSwitch.prototype.isCurrentItemEnabled = function () {
  return this.isEnabled(this.currentActor());
};
Window_PartyBattleSwitch.prototype.isEnabled = function (_0xaf9fe0) {
  if (!_0xaf9fe0) {
    return false;
  }
  return _0xaf9fe0.isFormationChangeOk() && _0xaf9fe0.isAlive();
};
Window_PartyBattleSwitch.prototype.drawItem = function (_0x6cddae) {
  const _0x42d2da = this.actor(_0x6cddae);
  if (!_0x42d2da) {
    return;
  }
  const _0x3c27e2 = ImageManager.loadFace(_0x42d2da.faceName());
  _0x3c27e2.addLoadListener(this.processDrawItem.bind(this, _0x6cddae));
};
Window_PartyBattleSwitch.prototype.processDrawItem = function (_0x1f523a) {
  this.drawItemImage(_0x1f523a);
  this.drawItemStatus(_0x1f523a);
};
Window_PartyBattleSwitch.prototype.drawItemImage = function (_0x26188d) {
  const _0x38b4b1 = this.actor(_0x26188d);
  const _0x35c15e = this.itemRect(_0x26188d);
  this.changePaintOpacity(this.isEnabled(_0x38b4b1));
  this.drawActorFace(_0x38b4b1, _0x35c15e.x + 0x1, _0x35c15e.y + 0x1, ImageManager.faceWidth, _0x35c15e.height - 0x2);
  this.changePaintOpacity(true);
};
Window_PartyBattleSwitch.prototype.drawItemStatus = function (_0x18a672) {
  const _0x247d25 = this.actor(_0x18a672);
  const _0x3f70c1 = this.itemRectWithPadding(_0x18a672);
  const _0x2025af = _0x3f70c1.x + ImageManager.faceWidth + 0x24;
  const _0x1f9fa4 = _0x2025af + 0xb4;
  this.changePaintOpacity(this.isEnabled(_0x247d25));
  this.drawActorName(_0x247d25, _0x2025af, _0x3f70c1.y);
  this.drawActorClass(_0x247d25, _0x2025af, _0x3f70c1.y + this.lineHeight());
  this.placeBasicGauges(_0x247d25, _0x1f9fa4, _0x3f70c1.y);
  this.changePaintOpacity(true);
};
if (Imported.VisuMZ_1_BattleCore) {
  ImageManager.battlePartyChangeIcon = VisuMZ.PartySystem.Settings.General.BattlePartyIcon ?? 0x4b;
  TextManager.battlePartyChangeCmd = VisuMZ.PartySystem.Settings.Vocab.BattlePartyCmd;
  TextManager.battlePartyChangeCmdHelp = VisuMZ.PartySystem.Settings.Vocab.BattleHelpFormation;
  TextManager.battlePartySwitchCmd = VisuMZ.PartySystem.Settings.Vocab.BattleSwitchOut;
  TextManager.battlePartySwitchCmdHelp = VisuMZ.PartySystem.Settings.Vocab.BattleHelpSwitch;
  TextManager.ActiveTpbFormationMessage = VisuMZ.PartySystem.Settings.Vocab.QueuePartyScene;
  VisuMZ.PartySystem.SceneManager_isPreviousSceneBattleTransitionable = SceneManager.isPreviousSceneBattleTransitionable;
  SceneManager.isPreviousSceneBattleTransitionable = function () {
    if (SceneManager.isPreviousScene(Scene_Party)) {
      return true;
    }
    return VisuMZ.PartySystem.SceneManager_isPreviousSceneBattleTransitionable.call(this);
  };
  VisuMZ.PartySystem.SceneManager_isNextSceneBattleTransitionable = SceneManager.isNextSceneBattleTransitionable;
  SceneManager.isNextSceneBattleTransitionable = function () {
    if (SceneManager.isNextScene(Scene_Party)) {
      return true;
    }
    return VisuMZ.PartySystem.SceneManager_isNextSceneBattleTransitionable.call(this);
  };
  SceneManager.isSceneMap = function () {
    return this._scene && this._scene.constructor === Scene_Map;
  };
  VisuMZ.PartySystem.Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
  Scene_Battle.prototype.createAllWindows = function () {
    VisuMZ.PartySystem.Scene_Battle_createAllWindows.call(this);
    this.createPartySwitchWindow();
    this.postPartySwitchMenuTpb();
    this.postPartySwitchMenuTurnBased();
  };
  Scene_Battle.prototype.createPartySwitchWindow = function () {
    const _0x5af691 = this.partySwitchWindowRect();
    this._partyMemberSwitchWindow = new Window_PartyBattleSwitch(_0x5af691);
    this.addWindow(this._partyMemberSwitchWindow);
    this._partyMemberSwitchWindow.setHandler('ok', this.onPartySwitchOk.bind(this));
    this._partyMemberSwitchWindow.setHandler("cancel", this.onPartySwitchCancel.bind(this));
  };
  Scene_Battle.prototype.partySwitchWindowRect = function () {
    const _0x5b8fa9 = this.battleLayoutStyle();
    return _0x5b8fa9 === "border" ? this.partySwitchWindowRectBorder() : this.partySwitchWindowRectStandard();
  };
  Scene_Battle.prototype.partySwitchWindowRectStandard = function () {
    return VisuMZ.PartySystem.Settings.Window.BattleSwitchWindowRect.call(this);
  };
  Scene_Battle.prototype.partySwitchWindowRectBorder = function () {
    const _0x11fcc1 = this.skillItemWindowRectBorderStyle();
    const _0x49090b = $gameSystem.windowPadding() * 0x2;
    _0x11fcc1.width = 0x204 + _0x49090b;
    return _0x11fcc1;
  };
  VisuMZ.PartySystem.Scene_Battle_isAnyInputWindowActive = Scene_Battle.prototype.isAnyInputWindowActive;
  Scene_Battle.prototype.isAnyInputWindowActive = function () {
    if (this._partyMemberSwitchWindow && this._partyMemberSwitchWindow.active) {
      return true;
    }
    if (this._partySystemSwitchOut) {
      return true;
    }
    if (this._callPartyMemberSwitch) {
      return true;
    }
    if (this._callSceneParty) {
      return true;
    }
    return VisuMZ.PartySystem.Scene_Battle_isAnyInputWindowActive.call(this);
  };
  VisuMZ.PartySystem.Scene_Battle_createPartyCommandWindowBattleCore = Scene_Battle.prototype.createPartyCommandWindowBattleCore;
  Scene_Battle.prototype.createPartyCommandWindowBattleCore = function () {
    VisuMZ.PartySystem.Scene_Battle_createPartyCommandWindowBattleCore.call(this);
    this._partyCommandWindow.setHandler("formation", this.commandFormation.bind(this));
  };
  Scene_Battle.prototype.commandFormation = function () {
    if (this.isQueueFormationMenu()) {
      this._callSceneParty = true;
      this._logWindow.addText(TextManager.ActiveTpbFormationMessage.format(TextManager.formation));
    } else {
      this.callFormation();
    }
  };
  Scene_Battle.prototype.isQueueFormationMenu = function () {
    return BattleManager.isActiveTpb();
  };
  Scene_Battle.prototype.callFormation = function () {
    this._callSceneParty = false;
    this._spriteset.update();
    this._windowLayer.visible = false;
    SceneManager.snapForBackground();
    SceneManager.push(Scene_Party);
    $gameParty.applyBattlePartySwitchCooldown();
    if (BattleManager.isTpb()) {
      BattleManager._tpbSceneChangeCacheActor = BattleManager.actor();
    }
  };
  VisuMZ.PartySystem.Scene_Battle_updateBattleProcess = Scene_Battle.prototype.updateBattleProcess;
  Scene_Battle.prototype.updateBattleProcess = function () {
    VisuMZ.PartySystem.Scene_Battle_updateBattleProcess.call(this);
    if (this._callSceneParty && !BattleManager._subject) {
      this.callFormation();
    }
    if (this._callPartyMemberSwitch && !BattleManager._subject) {
      this.callPartyMemberSwitch();
    }
  };
  VisuMZ.PartySystem.Scene_Battle_isTimeActive = Scene_Battle.prototype.isTimeActive;
  Scene_Battle.prototype.isTimeActive = function () {
    if (BattleManager.isActiveTpb()) {
      if (this._partyMemberSwitchWindow && this._partyMemberSwitchWindow.active) {
        return false;
      }
    }
    return VisuMZ.PartySystem.Scene_Battle_isTimeActive.call(this);
  };
  VisuMZ.PartySystem.Scene_Battle_createActorCommandWindow = Scene_Battle.prototype.createActorCommandWindow;
  Scene_Battle.prototype.createActorCommandWindow = function () {
    VisuMZ.PartySystem.Scene_Battle_createActorCommandWindow.call(this);
    this._actorCommandWindow.setHandler("formation", this.commandPartyMemberSwitch.bind(this));
  };
  Scene_Battle.prototype.commandPartyMemberSwitch = function () {
    if (this.isQueueFormationMenu()) {
      this._callPartyMemberSwitch = true;
      this._logWindow.addText(TextManager.ActiveTpbFormationMessage.format(TextManager.formation));
    } else {
      this.callPartyMemberSwitch();
    }
  };
  Scene_Battle.prototype.callPartyMemberSwitch = function () {
    this._callPartyMemberSwitch = false;
    this._logWindow.clear();
    if (BattleManager.actor()) {
      this._partyMemberSwitchWindow.activate();
    }
  };
  Scene_Battle.prototype.onPartySwitchOk = function () {
    const _0x543ff1 = this._partyMemberSwitchWindow.currentActor();
    if (_0x543ff1) {
      this.preparePartySwitchMember(_0x543ff1);
    } else {
      this._partyMemberSwitchWindow.deactivate();
      this._actorCommandWindow.activate();
    }
  };
  Scene_Battle.prototype.preparePartySwitchMember = function (_0x86c0f7) {
    const _0x5c7d0f = BattleManager.actor();
    const _0x1061ef = _0x5c7d0f.battler();
    this._partyMemberSwitchWindow.deactivate();
    if (this.isShowPartySwitchOutAnimation() && _0x1061ef) {
      this._partySystemSwitchOut = true;
      _0x1061ef.startSwitchOutAnimation(_0x86c0f7);
    } else {
      this.processPartySwitchMember(_0x86c0f7);
    }
  };
  Scene_Battle.prototype.isShowPartySwitchOutAnimation = function () {
    return VisuMZ.PartySystem.Settings.General.SwitchOutAnimation;
  };
  Scene_Battle.prototype.processPartySwitchMember = function (_0x1ee747) {
    this._partySystemSwitchOut = false;
    const _0x4ae229 = BattleManager.actor();
    const _0x37059b = _0x4ae229.battler();
    const _0x38c1b6 = $gameParty._battleMembers.indexOf(_0x4ae229.actorId());
    $gameParty._battleMembers[_0x38c1b6] = _0x1ee747.actorId();
    $gameParty.partyChangeRefresh();
    if (this.isImmediateTpb()) {
      _0x1ee747._tpbChargeTime = _0x4ae229._tpbChargeTime;
      _0x1ee747._tpbState = "charged";
    } else if (BattleManager.isTpb()) {
      _0x1ee747.clearTpbChargeTime();
    }
    BattleManager._currentActor = _0x1ee747;
    BattleManager.updateTargetsForPartySwitch(_0x4ae229, _0x1ee747);
    _0x1ee747.applyBattlePartySwitchCooldown();
    _0x1ee747.makeActions();
    _0x1ee747.onBattlePartySwitch(_0x4ae229);
    if (_0x37059b) {
      _0x37059b.setBattler(_0x1ee747);
    }
    this._statusWindow.switchStateIconActor(_0x4ae229, _0x1ee747);
    this._statusWindow.refresh();
    this._actorCommandWindow.setup(_0x1ee747);
    this._actorCommandWindow.smoothSelect(0x0);
    this._actorCommandWindow.activate();
    this._actorCommandWindow._debug = true;
  };
  Scene_Battle.prototype.isImmediateTpb = function () {
    if (!BattleManager.isTpb()) {
      return false;
    }
    const _0x38f076 = VisuMZ.PartySystem.Settings.General;
    if (_0x38f076.tpbImmediateAction === undefined) {
      _0x38f076.tpbImmediateAction = true;
    }
    return _0x38f076.tpbImmediateAction;
  };
  Window_StatusBase.prototype.switchStateIconActor = function (_0x2dc7ef, _0x6f1eab) {
    const _0x2ff0fd = "actor%1-stateIcon".format(_0x2dc7ef.actorId());
    const _0x3247c2 = this.createInnerSprite(_0x2ff0fd, Sprite_StateIcon);
    _0x3247c2.setup(_0x6f1eab);
  };
  Scene_Battle.prototype.onPartySwitchCancel = function () {
    this._partyMemberSwitchWindow.deactivate();
    this._actorCommandWindow.activate();
    this._actorCommandWindow.refresh();
  };
  Scene_Battle.prototype.postPartySwitchMenuTpb = function () {
    if (!BattleManager.isTpb()) {
      return;
    }
    if (!SceneManager.isPreviousScene(Scene_Party)) {
      return;
    }
    this._partyCommandWindow.deactivate();
    this._partyCommandWindow.close();
    this._actorCommandWindow.deactivate();
    this._actorCommandWindow.close();
    BattleManager._currentActor = null;
    BattleManager._inputting = false;
  };
  Scene_Battle.prototype.postPartySwitchMenuTurnBased = function () {
    if (BattleManager.isTpb()) {
      return;
    }
    if (!SceneManager.isPreviousScene(Scene_Party)) {
      return;
    }
    if (Imported.VisuMZ_2_BattleSystemBTB && BattleManager.isBTB()) {
      BattleManager.makeActionOrders();
    }
    if (Imported.VisuMZ_2_BattleSystemFTB && BattleManager.isFTB()) {
      BattleManager.makeActionOrders();
      BattleManager._currentActor = $gameParty.teamBasedFirstAvailableMember();
      BattleManager._subject = BattleManager.actor();
      BattleManager._inputting = true;
      this._actorCommandWindow.setup(BattleManager.actor());
      this._statusWindow.selectActor(BattleManager.actor());
    }
    if (Imported.VisuMZ_2_BattleSystemETB && BattleManager.isETB()) {
      BattleManager.makeActionOrders();
      BattleManager._currentActor = $gameParty.teamBasedFirstAvailableMember();
      BattleManager._subject = BattleManager.actor();
      BattleManager._inputting = true;
      this._actorCommandWindow.setup(BattleManager.actor());
      this._statusWindow.selectActor(BattleManager.actor());
    }
    if (Imported.VisuMZ_2_BattleSystemPTB && BattleManager.isPTB()) {
      BattleManager.makeActionOrders();
      BattleManager._currentActor = $gameParty.teamBasedFirstAvailableMember();
      BattleManager._subject = BattleManager.actor();
      BattleManager._inputting = true;
      this._actorCommandWindow.setup(BattleManager.actor());
      this._statusWindow.selectActor(BattleManager.actor());
    }
  };
  Game_Party.prototype.teamBasedFirstAvailableMember = function () {
    let _0x4fbd7c = this.battleMembers();
    return _0x4fbd7c[0x0];
  };
  Sprite_Actor._partySwitchDuration = 0xc;
  Sprite_Actor.prototype.startSwitchOutAnimation = function (_0x181eae) {
    this._partySwitchTargetActor = _0x181eae;
    const _0x43a06b = Sprite_Actor._partySwitchDuration;
    this.startMove(0x12c, 0x0, _0x43a06b);
    this.startOpacity(0x0, _0x43a06b);
    this._partySwitchDuration = _0x43a06b;
  };
  Sprite_Actor.prototype.startSwitchInAnimation = function (_0x52d0b8) {
    if (SceneManager.isSceneBattle()) {
      SceneManager._scene.processPartySwitchMember(_0x52d0b8);
      const _0x378938 = Sprite_Actor._partySwitchDuration;
      this.stepForward();
      this.startOpacity(0xff, _0x378938);
    }
    this._partySwitchTargetActor = null;
  };
  VisuMZ.PartySystem.Sprite_Actor_update = Sprite_Actor.prototype.update;
  Sprite_Actor.prototype.update = function () {
    VisuMZ.PartySystem.Sprite_Actor_update.call(this);
    if (this._partySwitchDuration) {
      this.updatePartySwitch();
    }
  };
  Sprite_Actor.prototype.updatePartySwitch = function () {
    this._partySwitchDuration = this._partySwitchDuration || 0x0;
    this._partySwitchDuration--;
    if (this._partySwitchDuration <= 0x0) {
      this.startSwitchInAnimation(this._partySwitchTargetActor);
    }
  };
  Window_PartyCommand.prototype.addCustomCommands = function () {
    this.addFormationCommand();
  };
  Window_PartyCommand.prototype.addFormationCommand = function () {
    if (!this.isFormationCommandAdded()) {
      return;
    }
    if (this.hasBattleSystemIncompatibilities()) {
      if ($gameTemp.isPlaytest() && !BattleManager._battleSystemIncompatibilityError) {
        console.log("WARNING: Party Change command is unavailable for Window_PartyCommand for this Battle System");
        BattleManager._battleSystemIncompatibilityError = true;
      }
      return;
    }
    const _0x38eee5 = this.commandStyle();
    const _0x2d7427 = ImageManager.battlePartyChangeIcon;
    const _0x40ee93 = _0x38eee5 === "text" ? TextManager.battlePartyChangeCmd : "\\I[%1]%2".format(_0x2d7427, TextManager.battlePartyChangeCmd);
    const _0x4c46e2 = this.isFormationCommandEnabled();
    this.addCommand(_0x40ee93, 'formation', _0x4c46e2);
  };
  Window_PartyCommand.prototype.isFormationCommandAdded = function () {
    if (Imported.VisuMZ_2_BattleSystemOTB && BattleManager.isOTB()) {
      return false;
    }
    if (Imported.VisuMZ_2_BattleSystemSTB && BattleManager.isSTB()) {
      return false;
    }
    if (Imported.VisuMZ_2_BattleGridSystem && BattleManager.isUsingGridSystem()) {
      return false;
    }
    return VisuMZ.PartySystem.Settings.General.PartyCmdWinAddParty;
  };
  Window_PartyCommand.prototype.hasBattleSystemIncompatibilities = function () {
    return false;
  };
  Window_PartyCommand.prototype.isFormationCommandEnabled = function () {
    if ($gameParty.allMembers().length <= 0x1) {
      return false;
    }
    if (!$gameParty.canSwitchPartyInBattle()) {
      return false;
    }
    return $gameSystem.isFormationEnabled();
  };
  VisuMZ.PartySystem.Settings.Window_PartyCommand_updateHelp = Window_PartyCommand.prototype.updateHelp;
  Window_PartyCommand.prototype.updateHelp = function () {
    const _0x2ed6ba = this.currentSymbol();
    switch (_0x2ed6ba) {
      case "formation":
        this._helpWindow.setText(TextManager.battlePartyChangeCmdHelp);
        break;
      default:
        VisuMZ.PartySystem.Settings.Window_PartyCommand_updateHelp.call(this);
        break;
    }
  };
  Window_ActorCommand.prototype.addPartyCommand = function () {
    if (!this.isPartyCommandAdded()) {
      return;
    }
    if (this.findSymbol("formation") >= 0x0) {
      this.removePartyCommand();
    }
    const _0x41fccb = this.commandStyle();
    const _0x32ed22 = ImageManager.battlePartyChangeIcon;
    const _0x48b5a2 = _0x41fccb === "text" ? TextManager.battlePartySwitchCmd : "\\I[%1]%2".format(_0x32ed22, TextManager.battlePartyChangeCmd);
    const _0x3f29a7 = this.isPartyCommandEnabled();
    this.addCommand(_0x48b5a2, "formation", _0x3f29a7);
  };
  Window_ActorCommand.prototype.isPartyCommandAdded = function () {
    if (!this._actor) {
      return false;
    }
    return VisuMZ.PartySystem.Settings.General.ActorCmdWinAddParty;
  };
  Window_ActorCommand.prototype.isPartyCommandEnabled = function () {
    if ($gameParty.allMembers().length <= 0x1) {
      return false;
    }
    if (!this._actor) {
      return false;
    }
    if (!this._actor.canSwitchPartyInBattle()) {
      return false;
    }
    return this._actor.isFormationChangeOk();
  };
  VisuMZ.PartySystem.Settings.Window_ActorCommand_updateHelp = Window_ActorCommand.prototype.updateHelp;
  Window_ActorCommand.prototype.updateHelp = function () {
    const _0x5de976 = this.currentSymbol();
    if (!_0x5de976) {
      return;
    }
    switch (_0x5de976.toLowerCase()) {
      case 'formation':
        this._helpWindow.setText(TextManager.battlePartySwitchCmdHelp);
        break;
      default:
        VisuMZ.PartySystem.Settings.Window_ActorCommand_updateHelp.call(this);
        break;
    }
  };
  Window_ActorCommand.prototype.removePartyCommand = function () {
    while (this.findSymbol("formation") >= 0x0) {
      const _0x3e2ffb = this.findSymbol("formation");
      this._list.splice(_0x3e2ffb, 0x1);
    }
  };
}
;