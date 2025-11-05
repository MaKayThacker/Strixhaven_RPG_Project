//=============================================================================
// VisuStella MZ - Main Menu Core
// VisuMZ_1_MainMenuCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MainMenuCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MainMenuCore = VisuMZ.MainMenuCore || {};
VisuMZ.MainMenuCore.version = 1.24;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.24] [MainMenuCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Main_Menu_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Main Menu Core plugin is designed to give you more control over the Main
 * Menu outside of RPG Maker MZ's editor's control. Game devs are given control
 * over how commands work, visual aesthetics pertaining to the Main Menu, and 
 * assign menu images to actors as background portraits.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general Main Menu settings.
 * * The ability to set Menu Background Portraits for individual actors.
 * * Flexibility in changing which commands appear in the Main Menu.
 * * Add new windows like the Playtime Window and Variable windows.
 * * Change the style of how the windows are arranged in the Main Menu.
 * * Change the way the status list is displayed and the way it's displayed.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
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
 * <Menu Portrait: filename>
 *
 * - Used for: Actor
 * - This is used with the "Portrait" style Main Menu List.
 * - Sets the menu image for the actor to 'filename'.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 *
 * ---
 * 
 * <Menu Portrait Offset: +x, +y>
 * <Menu Portrait Offset: -x, -y>
 * 
 * <Menu Portrait Offset X: +x>
 * <Menu Portrait Offset X: -x>
 * 
 * <Menu Portrait Offset Y: +y>
 * <Menu Portrait Offset Y: -y>
 *
 * - Used for: Actor
 * - This is used with the "Portrait" style Main Menu List.
 * - Offsets the X and Y coordinates for the menu image.
 * - Replace 'x' with a number value that offsets the x coordinate.
 * - Negative x values offset left. Positive x values offset right.
 * - Replace 'y' with a number value that offsets the y coordinate.
 * - Negative y values offset up. Positive x values offset down.
 * - This only applies to the Main Menu portraits.
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
 * Actor: Change Menu Image (Group)
 * Actor: Change Menu Image (Range)
 * Actor: Change Menu Image (JS)
 * - Changes the actor's Menu Image.
 * - Each version has a different means of selecting Actor ID's.
 *
 *   Actor ID:
 *   - Select which ID(s) to affect.
 *
 *   Filename:
 *   - Selected actor(s) will have their menu images changed to this.
 *
 * ---
 * 
 * Actor: Change Menu Image (JS) (v1.24)
 * - Changes an actor's Menu Image using JavaScript.
 * - Allows more control with more text entry.
 * 
 *   JS: Actor ID:
 *   - Enter which Actor ID to affect.
 *   - Uses JavaScript code.
 * 
 *   JS: Filename:
 *   - Enter the filename you wish to use.
 *   - Uses JavaScript code.
 * 
 * ---
 * 
 * === Menu Command Plugin Commands ===
 * 
 * ---
 * 
 * Menu Command: Clear Forced Settings
 * - Clear any forced settings for the menu command symbols.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Disable
 * - Forcefully disable specific menu commands via their symbols.
 * - Matching forced enabled symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Enable
 * - Forcefully enable specific menu commands via their symbols.
 * - Matching forced disabled symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Hide
 * - Forcefully hide specific menu commands via their symbols.
 * - Matching forced shown symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 * 
 * Menu Command: Force Show
 * - Forcefully show specific menu commands via their symbols.
 * - Matching forced hidden symbols will be overwritten.
 * 
 *   Symbol(s):
 *   - Insert the symbols of the menu commands here.
 *   - The symbols are case sensitive.
 *   - VisuStella is NOT responsible for any errors produced by menus that
 *     become accessible outside of their intended usage.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These general settings contain various settings on how the Main Menu scene
 * displays certain windows, alters how specific windows behave, and determines
 * which scenes would display actor menu images as background portraits.
 *
 * ---
 *
 * Gold Window
 * 
 *   Thinner Gold Window:
 *   - Make the Gold Window thinner in the Main Menu?
 *   - Used to match the Playtime and Variable Windows.
 *   - Only applies to the Command Window style: Default Vertical.
 * 
 *   Auto Adjust Height:
 *   - Automatically adjust the height for the thinner Gold Window?
 *
 *   Auto Adjust Y:
 *   - Automatically adjust the Y position for the thinner Gold Window?
 *
 * ---
 * 
 * Status Window
 * 
 *   Select Last?:
 *   - When picking a personal command from the Command Window, select the
 *     last picked actor or always the first?
 * 
 * ---
 *
 * Solo Party
 *
 *   Solo Quick Mode:
 *   - When selecting "Skills", "Equip", or "Status" with one party member,
 *     immediately go to the scene.
 *
 * ---
 *
 * Sub Menus
 *
 *   Menus with Actor BG's:
 *   - A list of the menus that would be compatible with Actor Menu Backgrounds
 *
 *   JS: Actor BG Action:
 *   - Code used to determine how to display the sprites upon loading.
 *
 * ---
 * 
 * Party Window
 * 
 *   Show Reserve Memebers:
 *   - Show reserve members while on the Main Menu scene?
 * 
 *   Hide Main Menu Only
 *   - If reserve members are hidden, hide them only in the main menu or
 *     all scenes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Command Window List
 * ============================================================================
 *
 * The Command Window functions as a hub to the various scenes linked from the
 * Main Menu. These include 'Item', 'Skill', 'Equip', 'Status', 'Save', and
 * so on. This Plugin Parameter is an array that lets you add, remove, and/or
 * alter the Command Window's various commands, how they're handled, whether or
 * not they're visible, and how they react when selected.
 *
 * These will require knowledge of JavaScript to use them properly.
 *
 * ---
 *
 * Command Window List
 * 
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   Subcategory:
 *   - The subcategory used for this command.
 *   - Leave empty for no subcategory.
 *
 *   Icon:
 *   - Icon used for this command.
 *   - Use 0 for no icon.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 * 
 *   JS: Personal Code:
 *   - JavaScript code that runs once the actor list is selected with this
 *     command highlighted.
 *
 * ---
 * 
 * ==== Subcategories ====
 * 
 * Subcategories are a new addition to the Main Menu Core version 1.18. When a
 * subcategory is set, it will only display Command Window items that belong
 * to that subcategory. Those Command Window items do not appear when there is
 * no subcategory active or if it's a different subcategory.
 * 
 * ---
 * 
 * To create a subcategory, a few things must be done:
 * 
 * 1. The subcategory symbol must be "subcategory".
 * 
 * 2. The string returned by JS: Ext determines the subcategory. In the default
 *    Plugin Parameters, 'datalog' is returned as the subcategory. This becomes
 *    the subcategory when picked.
 * 
 * 3. For the JS: Run Code, have the following code somewhere in it:
 * 
 *    const ext = arguments[0];
 *    this.setSubcategory(ext);
 * 
 * ---
 * 
 * To make a Command Window item be a part of a subcategory do the following:
 * 
 * 1. Take the JS: Ext string value (case sensitive).
 * 
 * 2. Set it as the target Command Window item's "Subcategory" value.
 * 
 * 3. If the subcategory doesn't exist, then this Command Window item will
 *    appear normally.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Playtime Window
 * ============================================================================
 *
 * The Playtime Window is an optional feature that can be displayed in the
 * Main Menu. As its name suggests, it displays the playtime of the player's
 * current play through.
 *
 * ---
 *
 * Playtime Window
 * 
 *   Enable:
 *   - Use the Playtime Window?
 * 
 *   Adjust Command Window:
 *   - Adjust the command window's height to fit in the Playtime Window?
 *
 *   Background Type:
 *   - Select background type for the Playtime window.
 * 
 *   Font Size:
 *   - Font size used for displaying Gold inside the Playtime window.
 * 
 *   Time Icon:
 *   - Icon displayed for the 'Time' label.
 * 
 *   Time Text:
 *   - Text for the display of 'Time' in the Playtime window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for the Playtime window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Variable Window
 * ============================================================================
 *
 * The Variable Window is an optional feature that can be displayed in the
 * Main Menu. If enabled, the Variable Window will display variables of the
 * game dev's choice in the Main Menu itself.
 *
 * ---
 *
 * Variable Window
 * 
 *   Enable:
 *   - Use the Variable Window?
 * 
 *   Adjust Command Window:
 *   - Adjust the command window's height to fit in the Variable Window?
 *
 *   Background Type:
 *   - Select background type for the Variable window.
 * 
 *   Font Size:
 *   - Font size used for displaying Gold inside the Variable window.
 * 
 *   Variable List:
 *   - Select variables to be displayed into the window.
 *     Use \i[x] to determine their icon.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for the Variable window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Command Window Style & Command Style Settings
 * ============================================================================
 *
 * This determines how the Main Menu appears based on the Command Window Style.
 * If anything but the 'Default' is used, then these settings will take over
 * the window placement settings for the Main Menu. This means that even if you
 * are using VisuStella's Core Engine, the window layouts will be overwritten.
 *
 * ---
 *
 * Command Window Style:
 * - Choose the positioning and style of the Main Menu Command Window.
 * - This will automatically rearrange windows.
 * 
 *   Default Vertical Side Style:
 *   - The default Main Menu layout style.
 *   - Affected by VisuStella's Core Engine's Plugin Parameter settings.
 * 
 *   Top Horizontal Style:
 *   - Puts the Command Window at the top of the screen.
 *   - Gold, Playlist, and Variable Windows are moved to the bottom.
 *   - The Actor List Window is placed in the middle.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 *
 *   Bottom Horizontal Style:
 *   - Puts the Command Window at the bottom of the screen.
 *   - Gold, Playlist, and Variable Windows are moved to the top.
 *   - The Actor List Window is placed in the middle.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 * 
 *   Mobile Full Screen Style:
 *   - Puts the Command Window at the center of the screen with larger buttons.
 *   - Gold, Playlist, and Variable Windows are moved to the bottom.
 *   - The Actor List Window is hidden until prompted to be selected.
 *   - Unaffected by VisuStella's Core Engine's Plugin Parameter settings.
 *
 * ---
 *
 * Command Style Settings
 *
 *   Style:
 *   - How do you wish to draw command entries in the Command Window?
 *   - Text Only: displays only text.
 *   - Icon Only: displays only the icon.
 *   - Icon + Text: displays icon first, then text.
 *   - Automatic: determines the best fit for the size
 *
 *   Text Alignment:
 *   - Decide how you want the text to be aligned.
 *   - Left, Center, or Right
 * 
 *   Rows:
 *   - Number of visible rows.
 *   - Applies only to Top, Bottom, and Mobile styles.
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - Applies only to Top, Bottom, and Mobile styles.
 * 
 *   Mobile Thickness:
 *   - The thickness of the buttons for mobile version.
 *   - Applies only to Top, Bottom, and Mobile styles.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Status Graphic, Status List Style, & List Style Settings
 * ============================================================================
 *
 * Choose how the contents Actor Status List Window in the Main Menu appears.
 * This can range from the which actor graphic is drawn to the style used for
 * the data that's displayed.
 *
 * ---
 *
 * Status Graphic:
 * - Choose how the graphic for actor graphics appear in status-like menus.
 * 
 *   None:
 *   - Don't display any graphic for the actors.
 * 
 *   Face:
 *   - Display the actors' faces. This is the default option in RPG Maker MZ.
 *
 *   Map Sprite:
 *   - Display the actors' map sprites.
 * 
 *   Sideview Battler:
 *   - Display the actors' sideview battlers.
 *
 * ---
 *
 * Main Menu List Style
 * - Choose how the actor status list looks in the Main Menu.
 *
 * Inner-Menu List Style
 * - Choose how the actor status list looks in the inner menus like Scene_Item,
 *   Scene_Skill, etc.
 *
 *   Default Horizontal Style:
 *   - This is the default style found in RPG Maker MZ's Main Menu.
 *
 *   Vertical Style:
 *   - Makes the display for the actor list vertical instead of horizontal.
 *
 *   Portrait Style:
 *   - Similar to the vertical style, except each actor's Menu Image is
 *     displayed in the background instead. Portraits are required.
 *   - If there is no Menu Image used, this will switch over to the Vertical
 *     Style and use a face graphic instead.
 *
 *   Solo Style:
 *   - Used for solo party member games. Extends the whole view of the Status
 *     Window to accomodate a single actor.
 *
 *   Thin Horizontal Style:
 *   - Makes the selectable menu entries for the actors a single line thin.
 *
 *   Thicker Horizontal Style:
 *   - Makes the selectable menu entries for the actors two lines thick.
 *
 * ---
 *
 * List Styles
 *   JavaScript code used to determine how the individual styles are drawn.
 *
 *   JS: Default:
 *   JS: Vertical:
 *   JS: Portrait:
 *   JS: Solo:
 *   JS: Thin:
 *   JS: Thicker:
 *   - Code used to draw the data for these styles.
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
 * Version 1.24: August 29, 2024
 * * Compatibility Update
 * ** When "Load" command is used with Save Core's Single-Save Mode,
 *    automatically load up the save instead of going to the Load Menu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Plugin Command renamed:
 * *** Actor: Change Menu Image (JS) to Actor: Change Menu Image (JS) (Legacy)
 * * New Features!
 * ** New Plugin Command added by Arisu:
 * *** Actor: Change Menu Image (JS) (v1.24)
 * **** Changes an actor's Menu Image using JavaScript.
 * **** Allows more control with more text entry.
 * 
 * Version 1.23: February 15, 2024
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Battle Tactics' command.
 * *** This is for the upcoming VisuStella MZ plugins.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'battleGridTactics' option(s)
 *      and click copy. Go to the target project's Main Menu Core's 'Command
 *      Window List' plugin parameter. Paste the command where you want it
 *      to go.
 * 
 * Version 1.22: October 12, 2023
 * * Feature Update!
 * ** Subcategories are now maintained when exiting a scene pushed forward by
 *    a subcategory. Added by Olivia and sponsored by AndyL.
 * 
 * Version 1.21: April 13, 2023
 * * Bug Fixes!
 * ** Multiple subcategories should now work properly. Fix made by Arisu.
 * 
 * Version 1.20: March 16, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Bestiary' command.
 * *** This is for the upcoming VisuStella MZ plugins.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'bestiary' option(s) and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * 
 * Version 1.19: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'CG Gallery', 'Credits Page', and 'Patch Notes' command.
 * *** This is for the upcoming VisuStella MZ plugins.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'cgGallery', 'creditsPage', or
 *      'patchNotes' option(s) and click copy. Go to the target project's Main
 *      Menu Core's 'Command Window List' plugin parameter. Paste the command
 *      where you want it to go.
 * 
 * Version 1.18: October 27, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added a new section into Plugin Parameters: Command Window List for
 *    "Subcategories" and adding info on how they are handled.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Tutorial List' command.
 * *** This is for the upcoming VisuMZ_2_TutorialPanelSys plugin.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'tutorialList' option and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * ** Subcategory called "Datalog" is now added.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'subcategory' option and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * **** Existing entries for Quest, Message Log, and Combat Log are now added
 *      to the Datalog subcategory.
 * * New Features!
 * ** Subcategory support is now added for the Main Menu Command Window.
 * *** Subcategories allow you to make some Command Window items invisible
 *     until a subcategory is selected. This helps reduce clutter and save room
 *     on the Command Window command list.
 * 
 * Version 1.17: August 18, 2022
 * * Bug Fixes!
 * ** Changed actor graphics now reflect properly for those using the default
 *    status menu. Fix made by Irina.
 * 
 * Version 1.16: April 21, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Menu Command: Clear Forced Settings
 * *** Menu Command: Force Disable
 * *** Menu Command: Force Enable
 * *** Menu Command: Force Hide
 * *** Menu Command: Force Show
 * **** These new Plugin Commands allow you to forcefully show, hide, enable,
 *      or disable Plugin Commands regardless of their required settings.
 * **** We are not responsible for errors that occur by accessing menus that
 *      should otherwise be disabled or hidden.
 * 
 * Version 1.15: February 10, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: October 25, 2021
 * * Bug Fixes!
 * ** Plugin Parameter settings for automatic Command Window height adjustment
 *    should now work properly. Fix made by Irina.
 * * Documentation Update!
 * ** Added a note for the Help File: Gold Window > Thinner Gold Window
 * *** Only applies to the Command Window style: Default Vertical.
 * 
 * Version 1.13: October 21, 2021
 * * Feature Update!
 * ** Rounding update applied to picture portraits so that coordinates aren't
 *    drawn on non-whole numbers due to base images having odd values. Update
 *    made by Olivia.
 * 
 * Version 1.12: July 16, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Message Log' command.
 * *** This is for the upcoming VisuMZ_3_MessageLog plugin.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'MessageLog' option and click
 *      copy. Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * 
 * Version 1.11: May 14, 2021
 * * Feature Update!
 * ** Updated the default Plugin Parameters for 'Command Window List' to
 *    include a 'Load' command after the 'Save' command.
 * *** This allows players to access the load game screen from the Main Menu.
 * *** Projects with the Main Menu Core already installed will not have this
 *     update, but you can copy over the settings from a new project with the
 *     following steps:
 * **** Create a new project. Install Main Menu Core. Open up the new project's
 *      'Command Window List'. Right click the 'Load' option and click copy.
 *      Go to the target project's Main Menu Core's 'Command Window List'
 *      plugin parameter. Paste the command where you want it to go.
 * 
 * Version 1.10: April 16, 2021
 * * Feature Update!
 * ** Default style for List Styles now have its code updated with the
 *    JS: Default plugin parameter for games whose vertical screen resolution
 *    is larger than normal.
 * *** To update this, do either of the following:
 * **** Open up the Main Menu Core Plugin Parameters. Select and press delete 
 *      on "List Style Settings". Press Enter. New updated settings will be
 *      replaced for the JS: Default settings.
 * **** Or Delete the existing VisuMZ_1_MainMenuCore.js in the Plugin Manager
 *      list and install the newest version.
 * 
 * Version 1.09: March 19, 2021
 * * Documentation Update!
 * ** Added clarity for the "Portrait Style" in Plugin Parameters section for
 *    "Status Graphic, Status List Style, & List Style Settings":
 * *** If there is no Menu Image used, this will switch over to the Vertical
 *     Style and use a face graphic instead.
 * 
 * Version 1.08: February 26, 2021
 * * Feature Update!
 * ** Default Plugin Parameters for the List Style Settings defaults have been
 *    updated with tighter coordinate values to allow for more accurate display
 *    of UI element positioning. Update made by Olivia.
 * 
 * Version 1.07: January 1, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Removed "<Menu Image: filename>" version of notetag to reduce confusion
 *    and to stick with the norm declared by the Battle Core.
 * * New Features!
 * ** New notetags added by Yanfly:
 * *** <Menu Portrait Offset: +x, +y>
 * *** <Menu Portrait Offset X: +x>
 * *** <Menu Portrait Offset Y: +y>
 * **** This is used with the "Portrait" style Main Menu list.
 * **** Offsets the X and Y coordinates for the menu portrait.
 * 
 * Version 1.06: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: October 11, 2020
 * * Documentation Update!
 * ** Documentation added for the new plugin parameter.
 * * New Features!
 * ** New plugin parameter added by Yanfly.
 * *** Plugin Parameters > General > Status Window > Select Last?
 * **** When picking a personal command from the Command Window, select the
 *      last picked actor or always the first?
 * 
 * Version 1.04: October 4, 2020
 * * Feature Update!
 * ** Certain windows will now pre-load all associated image types for the
 *    actor upon being created to avoid custom JS drawing problems.
 *    Change made by Irina.
 * ** Failsafes have been added to prevent non-existent variables from crashing
 *    the game if a user does not remove them from the variable list. Change
 *    made by Irina.
 * 
 * Version 1.03: September 20, 2020
 * * Documentation Update!
 * ** Added the alternative notetag <Menu Portrait: filename> that also works
 *    the same way as <Menu Image: filename>.
 * 
 * Version 1.02: September 13, 2020
 * * Compatibility Update!
 * ** Better compatibility for SV Actor graphics.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Skill check plugin parameter for show fixed. Fixed by Yanfly and Shaz.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Command Window List > skill >
 *     JS: Show > and changing 'this.needsCommand("item")' to
 *     'this.needsCommand("skill")'
 *
 * Version 1.00: August 20, 2020
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
 * @command ChangeActorMenuImageGroup
 * @text Actor: Change Menu Image (Group)
 * @desc Changes the actor's Menu Image.
 * Select from a group of actor ID's to change.
 *
 * @arg Step1:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Step2:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageRange
 * @text Actor: Change Menu Image (Range)
 * @desc Changes the actor's Menu Image.
 * Select from a range of actor ID's to change.
 *
 * @arg Step1
 * @text Actor ID Range
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type actor
 * @desc Select which Actor ID to end at.
 * @default 4
 *
 * @arg Step2:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageJS
 * @text Actor: Change Menu Image (JS) (Legacy)
 * @desc Changes the actor's Menu Image.
 * Select from a group of actor ID's using JavaScript.
 *
 * @arg Step1:arrayeval
 * @text Actor ID(s)
 * @type string[]
 * @desc Enter which Actor ID(s) to affect.
 * You may use JavaScript code.
 * @default ["$gameVariables.value(1)"]
 *
 * @arg Step2:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Selected actor(s) will have their menu images changed to this.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeActorMenuImageJS_v124
 * @text Actor: Change Menu Image (JS) (v1.24)
 * @desc Changes an actor's Menu Image using JavaScript.
 * Allows more control with more text entry.
 *
 * @arg ActorJS:func
 * @text JS: Actor ID
 * @type note
 * @desc Enter which Actor ID to affect.
 * Uses JavaScript code.
 * @default "// Get Actor ID here.\nlet actorID = 0;\nactorID = $gameParty.members()[0].actorId();\n\n// Return Actor ID\nreturn actorID;"
 *
 * @arg FilenameJS:func
 * @text JS: Filename
 * @type note
 * @desc Enter the filename you wish to use.
 * Uses JavaScript code.
 * @default "// Get Filename here.\nlet filename = 'Actor1_';\nfilename += String(Math.randomInt(8) + 1);\n\n// Return Filename\nreturn filename;"
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MenuCommand
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandClear
 * @text Menu Command: Clear Forced Settings
 * @desc Clear any forced settings for the menu command symbols.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceDisable
 * @text Menu Command: Force Disable
 * @desc Forcefully disable specific menu commands via their symbols.
 * Matching forced enabled symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceEnable
 * @text Menu Command: Force Enable
 * @desc Forcefully enable specific menu commands via their symbols.
 * Matching forced disabled symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceHide
 * @text Menu Command: Force Hide
 * @desc Forcefully hide specific menu commands via their symbols.
 * Matching forced shown symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MenuCommandForceShow
 * @text Menu Command: Force Show
 * @desc Forcefully show specific menu commands via their symbols.
 * Matching forced hidden symbols will be overwritten.
 *
 * @arg Symbols:arraystr
 * @text Symbol(s)
 * @type string[]
 * @desc Insert the symbols of the menu commands here.
 * The symbols are case sensitive.
 * @default []
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
 * @param MainMenuCore
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
 * @desc General settings pertaining to the Main Menu and related.
 * @default {"GoldWindow":"","ThinGoldWindow:eval":"true","AutoGoldHeight:eval":"true","AutoGoldY:eval":"true","StatusWindow":"","StatusSelectLast:eval":"false","SoloParty":"","SoloQuick:eval":"true","SubMenus":"","ActorBgMenus:arraystr":"[\"Scene_Skill\"]","ActorBgMenuJS:func":"\"this.anchor.x = 0.5;\\nconst scale = 1.25;\\nthis.scale.x = this.scale.y = scale;\\nthis.x = Graphics.width;\\nthis.y = Graphics.height - (this.bitmap.height * Math.abs(scale));\\nthis._targetX = Graphics.width * 3 / 4;\\nthis._targetY = Graphics.height - (this.bitmap.height * Math.abs(scale));\\nthis._duration = 10;\\nthis.opacity = 0;\"","PartyWindow":"","ShowReserve:eval":"true","HideMainMenuOnly:eval":"true"}
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @parent General:struct
 * @type struct<Command>[]
 * @desc Window commands used by the Main Menu.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"item\",\"Icon:num\":\"208\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.item;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"item\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandItem();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"classChange\",\"Icon:num\":\"133\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.classChangeMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_ClassChangeSystem &&\\\\n    this.isClassChangeCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled() &&\\\\n    this.isClassChangeCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_ClassChange);\\\"\"}","{\"Symbol:str\":\"skill\",\"Icon:num\":\"101\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.skill;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"skill\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Skill);\\\"\"}","{\"Symbol:str\":\"equip\",\"Icon:num\":\"137\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.equip;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"equip\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Equip);\\\"\"}","{\"Symbol:str\":\"status\",\"Icon:num\":\"82\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.status;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"status\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"SceneManager.push(Scene_Status);\\\"\"}","{\"Symbol:str\":\"itemCrafting\",\"Icon:num\":\"223\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.ItemCraftingMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_ItemCraftingSys &&\\\\n    this.isItemCraftingCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isItemCraftingCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandItemCrafting();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"subcategory\",\"Subcategory:str\":\"\",\"Icon:num\":\"230\",\"TextStr:str\":\"Datalog\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return this.isSubcategoryVisible(arguments[1]);\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"// This becomes the subcategory name. Case-sensitive.\\\\n\\\\nreturn 'datalog';\\\"\",\"CallHandlerJS:func\":\"\\\"const ext = arguments[0];\\\\nthis.setSubcategory(ext);\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"quest\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"186\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.questCommandName;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_QuestSystem &&\\\\n    this.isQuestCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isQuestCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandQuest();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"bestiary\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"10\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.BestiaryMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_Bestiary &&\\\\n    this.isBestiaryCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isBestiaryCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandBestiary();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"tutorialList\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"187\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.tutorial.menuCmd;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_TutorialPanelSys &&\\\\n    this.isTutorialListCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isTutorialListCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandTutorialList();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"messageLog\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"193\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.MessageLogMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_3_MessageLog &&\\\\n    this.isMessageLogCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isMessageLogCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandMessageLog();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"combatLog\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"189\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.combatLog_BattleCmd_Name;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CombatLog &&\\\\n    this.isCombatLogCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCombatLogCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCombatLog();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"cgGallery\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"311\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.cgGalleryMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CGGallery &&\\\\n    this.isCgGalleryCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCgGalleryCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCgGallery();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"creditsPage\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"193\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.CreditsPageMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_CreditsPage &&\\\\n    this.isCreditsPageCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isCreditsPageCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCreditsPage();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"patchNotes\",\"Subcategory:str\":\"datalog\",\"Icon:num\":\"83\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.PatchNotesMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_4_PatchNotes &&\\\\n    this.isPatchNotesCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isPatchNotesCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPatchNotes();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"formation\",\"Icon:num\":\"75\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.formation;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"formation\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isFormationEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandFormation();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"battleGridTactics\",\"Subcategory:str\":\"\",\"Icon:num\":\"76\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.BattleGridTacticsMenuCommand;\\\"\",\"ShowJS:func\":\"\\\"return Imported.VisuMZ_2_BattleGridSystem &&\\\\n    this.isBattleGridTacticsCommandVisible();\\\"\",\"EnableJS:func\":\"\\\"return this.isBattleGridTacticsCommandEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandBattleGridTactics();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"options\",\"Icon:num\":\"83\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"options\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isOptionsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"save\",\"Icon:num\":\"189\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.save;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"save\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isSaveEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandSave();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"load\",\"Icon:num\":\"191\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return 'Load';\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"save\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandLoad();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"commonEvent1\",\"Icon:num\":\"88\",\"TextStr:str\":\"Common Event 1\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return false;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return 1;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandCommonEvent();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}","{\"Symbol:str\":\"commonEvent2\",\"Icon:num\":\"87\",\"TextStr:str\":\"Common Event 2\",\"TextJS:func\":\"\\\"return 'Text';\\\"\",\"ShowJS:func\":\"\\\"return false;\\\"\",\"EnableJS:func\":\"\\\"return this.areMainCommandsEnabled();\\\"\",\"ExtJS:func\":\"\\\"return 2;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandPersonal();\\\"\",\"PersonalHandlerJS:func\":\"\\\"// Declare Ext\\\\nconst ext = arguments[0];\\\\n\\\\n// Declare Status Window\\\\nconst statusWindow = SceneManager._scene._statusWindow;\\\\n\\\\n// Declare Actor ID\\\\nconst actorId = statusWindow.actor(statusWindow.index()).actorId();\\\\n\\\\n// Set variable 1 to Actor ID\\\\n$gameVariables.setValue(1, actorId);\\\\n\\\\n// Prepare Common Event ext to run\\\\n$gameTemp.reserveCommonEvent(ext);\\\\n\\\\n// Exit Main Menu\\\\nSceneManager._scene.popScene();\\\"\"}","{\"Symbol:str\":\"gameEnd\",\"Icon:num\":\"187\",\"TextStr:str\":\"\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return this.needsCommand(\\\\\\\"gameEnd\\\\\\\");\\\"\",\"EnableJS:func\":\"\\\"return this.isGameEndEnabled();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandGameEnd();\\\"\",\"PersonalHandlerJS:func\":\"\\\"const ext = arguments[0];\\\"\"}"]
 *
 * @param Playtime:struct
 * @text Playtime Window
 * @type struct<Playtime>
 * @desc Settings for the Playtime Window.
 * @default {"Enable:eval":"true","AdjustCommandHeight:func":"true","BgType:num":"0","FontSize:num":"24","Icon:num":"75","Time:str":"Time","WindowRect:func":"\"const rows = 1;\\nconst ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(rows, false);\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nlet wy = this.mainAreaBottom() - wh;\\nif (this._goldWindow) wy -= this._goldWindow.height;\\nif (this.canCreateVariableWindow()) wy -= this.variableWindowRect().height;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param Variable:struct
 * @text Variable Window
 * @type struct<Variable>
 * @desc Settings for the Variable Window.
 * @default {"Enable:eval":"false","AdjustCommandHeight:func":"true","BgType:num":"0","FontSize:num":"24","VarList:arraynum":"[\"1\",\"2\"]","WindowRect:func":"\"const rows = VisuMZ.MainMenuCore.Settings.Variable.VarList.length;\\nconst ww = this.mainCommandWidth();\\nconst wh = this.calcWindowHeight(rows, false);\\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\\nlet wy = this.mainAreaBottom() - wh;\\nif (this._goldWindow) wy -= this._goldWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param ParamBreak1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param CommandWindowStyle:str
 * @text Command Window Style
 * @type select
 * @option Default Vertical Side Style
 * @value default
 * @option Top Horizontal Style
 * @value top
 * @option Thin Top Horizontal Style
 * @value thinTop
 * @option Bottom Horizontal Style
 * @value bottom
 * @option Thin Bottom Horizontal Style
 * @value thinBottom
 * @option Mobile Full Screen Style
 * @value mobile
 * @desc Choose the positioning and style of the Main Menu Command Window. This will automatically rearrange windows.
 * @default top
 *
 * @param CustomCmdWin:struct
 * @text Command Style Settings
 * @parent CommandWindowStyle:str
 * @type struct<CustomCmdWin>
 * @desc Settings for the non-default Command Window Styles.
 * @default {"Style:str":"auto","TextAlign:str":"center","Rows:num":"2","Cols:num":"4","MobileThickness:num":"5"}
 *
 * @param ParamBreak2
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param StatusGraphic:str
 * @text Status Graphic
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler
 * @value svbattler
 * @desc Choose how the actor graphics appear in status-like menus.
 * @default face
 *
 * @param StatusListStyle:str
 * @text Main Menu List Style
 * @type select
 * @option Default Horizontal Style
 * @value default
 * @option Vertical Style
 * @value vertical
 * @option Portrait Style
 * @value portrait
 * @option Solo Style
 * @value solo
 * @option Thin Horizontal Style
 * @value thin
 * @option Thicker Horizontal Style
 * @value thicker
 * @desc Choose how the actor status list looks in the Main Menu.
 * @default portrait
 *
 * @param InnerMenuListStyle:str
 * @text Inner-Menu List Style
 * @parent StatusListStyle:str
 * @type select
 * @option Default Horizontal Style
 * @value default
 * @option Vertical Style
 * @value vertical
 * @option Portrait Style
 * @value portrait
 * @option Solo Style
 * @value solo
 * @option Thin Horizontal Style
 * @value thin
 * @option Thicker Horizontal Style
 * @value thicker
 * @desc Choose how the actor status list looks in the inner menus
 * like Scene_Item, Scene_Skill, etc.
 * @default default
 *
 * @param ListStyles:struct
 * @text List Style Settings
 * @parent StatusListStyle:str
 * @type struct<ListStyles>
 * @desc JavaScript code used to determine how the individual styles are drawn.
 * @default {"DefaultStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst sx = rect.x + 180;\\nconst sy = rect.y + rect.height / 2 - this.lineHeight() * 1.5;\\nconst lineHeight = this.lineHeight();\\nconst sx2 = sx + 180;\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorLevel(actor, sx, sy + lineHeight * 1);\\nthis.drawActorIcons(actor, sx, sy + lineHeight * 2);\\nthis.drawActorClass(actor, sx2, sy);\\n\\n// Place Gauges\\nconst sy2 = sy + lineHeight;\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nthis.placeGauge(actor, \\\"hp\\\", sx2, sy2);\\nthis.placeGauge(actor, \\\"mp\\\", sx2, sy2 + gaugeLineHeight);\\nconst roomForTp = (sy2 + gaugeLineHeight * 3) <= rect.y + rect.height;\\nif ($dataSystem.optDisplayTp && roomForTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx2, sy2 + gaugeLineHeight * 2);\\n}\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nconst sx3 = sx2 + 180;\\nconst sw = rect.width - sx3 - 2;\\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    const pw = Math.floor(sw / 2) - 24;\\n    let px = sx3;\\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, py, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            py += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n}\"","VerticalStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\\n\\n// Draw Actor Graphic\\nconst gw = rect.width;\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nconst gx = rect.x;\\nconst gy = Math.max(rect.y, rect.y + (rect.height - totalHeight - gh) / 2);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Actor Name\\nlet sx = rect.x;\\nlet sy = Math.max(gy + gh, rect.y + (rect.height - totalHeight + gh) / 2);\\nlet sw = rect.width;\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Draw Gauges\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nif ($dataSystem.optDisplayTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n}\"","PortraitStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Make Constants\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\\n\\n// Draw Actor Graphic\\nconst gw = rect.width;\\nconst gh = rect.height;\\nconst gx = rect.x;\\nconst gy = rect.y;\\nthis.drawItemActorMenuImage(actor, gx, gy, gw, gh);\\n\\n// Draw Dark Rectangle\\nlet sx = rect.x;\\nlet sy = Math.max(rect.y, rect.y + (rect.height - totalHeight));\\nlet sw = rect.width;\\nlet sh = rect.y + rect.height - sy;\\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\\n\\n// Draw Actor Name\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Draw Gauges\\nsx = rect.x + Math.round((rect.width - 128) / 2);\\nsy += lineHeight;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nif ($dataSystem.optDisplayTp) {\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n}\"","SoloStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Make Constants\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\n\\n// Draw Actor Graphic\\nlet sx = rect.x;\\nlet sy = rect.y;\\nlet sw = rect.width;\\nlet sh = rect.height;\\n\\n// Portrait\\nif (actor.getMenuImage() !== '') {\\n    this.drawItemActorMenuImage(actor, rect.x, rect.y, rect.width, rect.height);\\n\\n// Everything Else\\n} else {\\n    const gx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - ImageManager.faceWidth) / 2));\\n    const gy = Math.max(0, rect.y + rect.height - Math.ceil(lineHeight * 4.5) - ImageManager.faceHeight);\\n    this.drawActorGraphic(actor, gx, gy, ImageManager.faceWidth, ImageManager.faceHeight);\\n}\\n\\n// Draw Dark Rectangle\\nsh = Math.ceil(lineHeight * 4.5);\\nsy = rect.y + rect.height - sh;\\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\\n\\n// Draw Actor Name\\nsw = Math.round(rect.width / 2);\\nthis.drawText(actor.name(), sx, sy, sw, 'center');\\n\\n// Draw Actor Level\\nsx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - 128) / 2));\\nsy += lineHeight;\\nthis.drawActorLevel(actor, sx, sy);\\n\\n// Draw Actor Class\\nconst className = actor.currentClass().name;\\nsx = rect.x + Math.round(((rect.width / 2) - this.textSizeEx(className).width) / 2);\\nsy += lineHeight;\\nthis.drawTextEx(className, sx, sy, sw);\\n\\n// Draw Actor Icons\\nsx = rect.x + Math.round(((rect.width / 2) - 128) / 2);\\nsy += lineHeight;\\nthis.drawActorIcons(actor, sx, sy);\\n\\n// Prepare Stat Coordinates\\nsx = rect.x + Math.floor(rect.width / 2);\\nsw = rect.width / 2;\\nsh = rect.height;\\nconst sx3 = sx;\\nconst cw = rect.width - sx3 - 2;\\n\\n// Prepare Total Content Height to vertically center the content.\\nlet totalHeight = gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    totalHeight += lineHeight;\\n    totalHeight += Math.ceil(params.length / 2) * gaugeLineHeight;\\n}\\nconst equips = actor.equips();\\ntotalHeight += lineHeight;\\ntotalHeight += equips.length * lineHeight;\\nsy = Math.max(rect.y, rect.y + Math.floor((rect.height - totalHeight) / 2));\\n\\n// Place Gauges\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsy += gaugeLineHeight;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nif ($dataSystem.optDisplayTp) {\\n    sy += gaugeLineHeight;\\n    this.placeGauge(actor, \\\"tp\\\", sx, sy);\\n    sy += gaugeLineHeight;\\n}\\nlet ny = sy;\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    sy += lineHeight;\\n    const pw = Math.floor(cw / 2) - 24;\\n    let px = sx3;\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, sy, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, sy, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            sy += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n    ny += lineHeight;\\n    ny += Math.ceil(params.length / 2) * gaugeLineHeight;\\n}\\n\\n// Draw Actor Equipment\\nthis.resetFontSettings();\\nsx = rect.x + Math.floor(rect.width / 2);\\nsy = ny + lineHeight;\\nsw = rect.width / 2;\\nfor (const equip of equips) {\\n    if (equip) {\\n        this.drawItemName(equip, sx, sy, sw);\\n        sy += lineHeight;\\n        if (sy + lineHeight > rect.y + rect.height) return;\\n    }\\n}\"","ThinStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst lineHeight = this.lineHeight();\\nlet sx = rect.x + 160;\\nlet sy = rect.y + ((rect.height - lineHeight) / 2) - 2;\\n\\n// Draw Actor Data\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\\n\\n// Place Gauges\\nsx += 180;\\nsy += (lineHeight - this.gaugeLineHeight()) / 2;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nsx += 140;\\nif ((sx + 128) > rect.x + rect.width) return;\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy);\\nsx += 140;\\nif ((sx + 128) > rect.x + rect.width) return;\\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \\\"tp\\\", sx, sy);\"","ThickerStyle:func":"\"// Declare Constants\\nconst actor = arguments[0];\\nconst rect = arguments[1];\\n\\n// Draw Actor Graphic\\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\\n\\n// Draw Status Stuff\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nlet sx = rect.x + 160;\\nlet sy = rect.y + ((rect.height - (lineHeight * 2)) / 2) - 2;\\n\\n// Draw Actor Data\\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\\nthis.drawActorName(actor, sx, sy);\\nthis.drawActorClass(actor, sx, sy + lineHeight);\\n//this.drawActorLevel(actor, sx, sy + lineHeight);\\n\\n// Place Gauges\\nsx += 180;\\nsy = rect.y + ((rect.height - (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2))) / 2) - 2;\\nthis.placeGauge(actor, \\\"hp\\\", sx, sy);\\nthis.placeGauge(actor, \\\"mp\\\", sx, sy + gaugeLineHeight);\\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \\\"tp\\\", sx, sy + (gaugeLineHeight * 2));\\nsx += 160;\\n\\n// Following Requires VisuStella MZ's Core Engine\\n// Draw Additional Parameter Data if Enough Room\\nconst sx3 = sx;\\nconst sw = rect.width - sx3 - 2;\\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\\n    const pw = Math.floor(sw / 2) - 24;\\n    sy = rect.y + ((rect.height - (gaugeLineHeight * Math.ceil(params.length / 2))) / 2) - 2;\\n    let px = sx3;\\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\\n    let counter = 0;\\n    for (const param of params) {\\n        this.resetFontSettings();\\n        this.drawParamText(px, py, pw, param, true);\\n        this.resetTextColor();\\n        this.contents.fontSize -= 8;\\n        const paramValue = actor.paramValueByName(param, true);\\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\\n        counter++;\\n        if (counter % 2 === 0) {\\n            px = sx3;\\n            py += gaugeLineHeight;\\n        } else {\\n            px += pw + 24;\\n        }\\n    }\\n}\""}
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
 * Commands Struct
 * ----------------------------------------------------------------------------
 */
/*~struct~Command:
 *
 * @param Symbol:str
 * @text Symbol
 * @desc The symbol used for this command.
 * @default Symbol
 *
 * @param Subcategory:str
 * @text Subcategory
 * @desc The subcategory used for this command.
 * Leave empty for no subcategory.
 * @default 
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this command.
 * Use 0 for no icon.
 * @default 0
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this menu command.
 * If this has a value, ignore the JS: Text version.
 * @default Untitled
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine string used for the displayed name.
 * @default "return 'Text';"
 *
 * @param ShowJS:func
 * @text JS: Show
 * @type note
 * @desc JavaScript code used to determine if the item is shown or not.
 * @default "return true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @type note
 * @desc JavaScript code used to determine if the item is enabled or not.
 * @default "return true;"
 *
 * @param ExtJS:func
 * @text JS: Ext
 * @type note
 * @desc JavaScript code used to determine any ext data that should be added.
 * @default "return null;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this command is selected.
 * @default "const ext = arguments[0];"
 *
 * @param PersonalHandlerJS:func
 * @text JS: Personal Code
 * @type note
 * @desc JavaScript code that runs once the actor list is selected with this command highlighted.
 * @default "const ext = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param ThinGoldWindow:eval
 * @text Thinner Gold Window
 * @parent GoldWindow
 * @type boolean
 * @on Thinner
 * @off Normal
 * @desc Make the Gold Window thinner in the Main Menu?
 * Used to match the Playtime and Variable Windows.
 * @default true
 *
 * @param AutoGoldHeight:eval
 * @text Auto Adjust Height
 * @parent GoldWindow
 * @type boolean
 * @on Automatic
 * @off Manual
 * @desc Automatically adjust the height for the thinner Gold Window?
 * @default true
 *
 * @param AutoGoldY:eval
 * @text Auto Adjust Y
 * @parent GoldWindow
 * @type boolean
 * @on Automatic
 * @off Manual
 * @desc Automatically adjust the Y position for the thinner Gold Window?
 * @default true
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusSelectLast:eval
 * @text Select Last?
 * @parent StatusWindow
 * @type boolean
 * @on Last Picked Actor
 * @off Always First Actor
 * @desc When picking a personal command from the Command Window,
 * select the last picked actor or always the first?
 * @default false
 *
 * @param SoloParty
 * @text Solo Party
 *
 * @param SoloQuick:eval
 * @text Solo Quick Mode
 * @parent SoloParty
 * @type boolean
 * @on Quick
 * @off Normal
 * @desc When selecting "Skills", "Equip", or "Status" with one party member, immediately go to the scene.
 * @default true
 *
 * @param SubMenus
 * @text Sub Menus
 *
 * @param ActorBgMenus:arraystr
 * @text Menus with Actor BG's
 * @parent SubMenus
 * @type string[]
 * @desc A list of the menus that would be compatible with Actor Menu Backgrounds.
 * @default ["Scene_Skill","Scene_Equip","Scene_Status"]
 *
 * @param ActorBgMenuJS:func
 * @text JS: Actor BG Action
 * @parent SubMenus
 * @type note
 * @desc Code used to determine how to display the sprites upon loading.
 * @default "this.anchor.x = 0.5;\nconst scale = 1.25;\nthis.scale.x = this.scale.y = scale;\nthis.x = Graphics.width;\nthis.y = Graphics.height - (this.bitmap.height * Math.abs(scale));\nthis._targetX = Graphics.width * 3 / 4;\nthis._targetY = Graphics.height - (this.bitmap.height * Math.abs(scale));\nthis._duration = 10;\nthis.opacity = 0;"
 *
 * @param PartyWindow
 * @text Party Window
 *
 * @param ShowReserve:eval
 * @text Show Reserve Memebers
 * @parent PartyWindow
 * @type boolean
 * @on Show Reserve Members
 * @off Hide Reserve Members
 * @desc Show reserve members while on the Main Menu scene?
 * @default true
 *
 * @param HideMainMenuOnly:eval
 * @text Hide Main Menu Only
 * @parent ShowReserve:eval
 * @type boolean
 * @on Hide in Main Menu Only
 * @off Hide in all Scenes
 * @desc If reserve members are hidden, hide them only in the main menu or all scenes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Playtime Window
 * ----------------------------------------------------------------------------
 */
/*~struct~Playtime:
 *
 * @param Enable:eval
 * @text Use Window
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Use the Playtime Window?
 * @default true
 *
 * @param AdjustCommandHeight:eval
 * @text Adjust Command Window
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Adjust the command window's height to fit in the Playtime Window?
 * @default true
 *
 * @param BgType:num
 * @text Background Type
 * @type select
 * @option Window
 * @value 0
 * @option Dim
 * @value 1
 * @option Transparent
 * @value 2
 * @desc Select background type for the Playtime window.
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside the Playtime window.
 * Default: 26
 * @default 20
 *
 * @param Icon:num
 * @text Time Icon
 * @desc Icon displayed for the 'Time' label.
 * @default 75
 *
 * @param Time:str
 * @text Time Text
 * @desc Text for the display of 'Time' in the Playtime window.
 * @default Time
 *
 * @param WindowRect:func
 * @text JS: X, Y, W, H
 * @type note
 * @desc Code used to determine the dimensions for the Playtime window.
 * @default "const rows = 1;\nconst ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(rows, false);\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nlet wy = this.mainAreaBottom() - wh;\nif (this._goldWindow) wy -= this._goldWindow.height;\nif (this.canCreateVariableWindow()) wy -= this.variableWindowRect().height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Variable Window
 * ----------------------------------------------------------------------------
 */
/*~struct~Variable:
 *
 * @param Enable:eval
 * @text Use Window
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Use the Variable Window?
 * @default false
 *
 * @param AdjustCommandHeight:eval
 * @text Adjust Command Window
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Adjust the command window's height to fit in the Variable Window?
 * @default true
 *
 * @param BgType:num
 * @text Background Type
 * @type select
 * @option Window
 * @value 0
 * @option Dim
 * @value 1
 * @option Transparent
 * @value 2
 * @desc Select background type for the Variable window.
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside the Variable window.
 * Default: 26
 * @default 20
 *
 * @param VarList:arraynum
 * @text Variable List
 * @type variable[]
 * @desc Select variables to be displayed into the window.
 * Use \i[x] to determine their icon.
 * @default ["1","2","3"]
 *
 * @param WindowRect:func
 * @text JS: X, Y, W, H
 * @type note
 * @desc Code used to determine the dimensions for the Variable window.
 * @default "const rows = VisuMZ.MainMenuCore.Settings.Variable.VarList.length;\nconst ww = this.mainCommandWidth();\nconst wh = this.calcWindowHeight(rows, false);\nconst wx = this.isRightInputMode() ? Graphics.boxWidth - ww : 0;\nlet wy = this.mainAreaBottom() - wh;\nif (this._goldWindow) wy -= this._goldWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Horizontal Command Window Style
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomCmdWin:
 *
 * @param Style:str
 * @text Command Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw command entries in the Command Window?
 * @default auto
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Rows:num
 * @text Rows
 * @type number
 * @min 1
 * @desc Number of visible rows.
 * @default 2
 *
 * @param Cols:num
 * @text Columns
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 4
 *
 * @param MobileThickness:num
 * @text Mobile Thickness
 * @type number
 * @min 1
 * @desc The thickness of the buttons for mobile version.
 * @default 5
 *
 */
/* ----------------------------------------------------------------------------
 * List Style Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ListStyles:
 *
 * @param DefaultStyle:func
 * @text JS: Default
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + Math.floor((rect.height - gh) / 2);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst sx = rect.x + 180;\nconst sy = rect.y + rect.height / 2 - this.lineHeight() * 1.5;\nconst lineHeight = this.lineHeight();\nconst sx2 = sx + 180;\nthis.drawActorName(actor, sx, sy);\nthis.drawActorLevel(actor, sx, sy + lineHeight * 1);\nthis.drawActorIcons(actor, sx, sy + lineHeight * 2);\nthis.drawActorClass(actor, sx2, sy);\n\n// Place Gauges\nconst sy2 = sy + lineHeight;\nconst gaugeLineHeight = this.gaugeLineHeight();\nthis.placeGauge(actor, \"hp\", sx2, sy2);\nthis.placeGauge(actor, \"mp\", sx2, sy2 + gaugeLineHeight);\nconst roomForTp = (sy2 + gaugeLineHeight * 3) <= rect.y + rect.height;\nif ($dataSystem.optDisplayTp && roomForTp) {\n    this.placeGauge(actor, \"tp\", sx2, sy2 + gaugeLineHeight * 2);\n}\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nconst sx3 = sx2 + 180;\nconst sw = rect.width - sx3 - 2;\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    const pw = Math.floor(sw / 2) - 24;\n    let px = sx3;\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, py, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            py += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n}"
 *
 * @param VerticalStyle:func
 * @text JS: Vertical
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\n\n// Draw Actor Graphic\nconst gw = rect.width;\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nconst gx = rect.x;\nconst gy = Math.max(rect.y, rect.y + (rect.height - totalHeight - gh) / 2);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Actor Name\nlet sx = rect.x;\nlet sy = Math.max(gy + gh, rect.y + (rect.height - totalHeight + gh) / 2);\nlet sw = rect.width;\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Draw Gauges\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsy += gaugeLineHeight;\nif ($dataSystem.optDisplayTp) {\n    this.placeGauge(actor, \"tp\", sx, sy);\n}"
 *
 * @param PortraitStyle:func
 * @text JS: Portrait
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Make Constants\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst totalHeight = (lineHeight * 4.5) + (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2));\n\n// Draw Actor Graphic\nconst gw = rect.width;\nconst gh = rect.height;\nconst gx = rect.x;\nconst gy = rect.y;\nthis.drawItemActorMenuImage(actor, gx, gy, gw, gh);\n\n// Draw Dark Rectangle\nlet sx = rect.x;\nlet sy = Math.max(rect.y, rect.y + (rect.height - totalHeight));\nlet sw = rect.width;\nlet sh = rect.y + rect.height - sy;\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\n\n// Draw Actor Name\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round((rect.width - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Draw Gauges\nsx = rect.x + Math.round((rect.width - 128) / 2);\nsy += lineHeight;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsy += gaugeLineHeight;\nif ($dataSystem.optDisplayTp) {\n    this.placeGauge(actor, \"tp\", sx, sy);\n}"
 *
 * @param SoloStyle:func
 * @text JS: Solo
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Make Constants\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\n\n// Draw Actor Graphic\nlet sx = rect.x;\nlet sy = rect.y;\nlet sw = rect.width;\nlet sh = rect.height;\n\n// Portrait\nif (actor.getMenuImage() !== '') {\n    this.drawItemActorMenuImage(actor, rect.x, rect.y, rect.width, rect.height);\n\n// Everything Else\n} else {\n    const gx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - ImageManager.faceWidth) / 2));\n    const gy = Math.max(0, rect.y + rect.height - Math.ceil(lineHeight * 4.5) - ImageManager.faceHeight);\n    this.drawActorGraphic(actor, gx, gy, ImageManager.faceWidth, ImageManager.faceHeight);\n}\n\n// Draw Dark Rectangle\nsh = Math.ceil(lineHeight * 4.5);\nsy = rect.y + rect.height - sh;\nthis.contents.fillRect(sx+1, sy+lineHeight/2, sw-2, sh-1-lineHeight/2, ColorManager.dimColor1());\nthis.contents.gradientFillRect(sx+1, sy-lineHeight/2, sw-2, lineHeight, ColorManager.dimColor2(), ColorManager.dimColor1(), true);\n\n// Draw Actor Name\nsw = Math.round(rect.width / 2);\nthis.drawText(actor.name(), sx, sy, sw, 'center');\n\n// Draw Actor Level\nsx = Math.max(0, rect.x + Math.floor(((rect.width / 2) - 128) / 2));\nsy += lineHeight;\nthis.drawActorLevel(actor, sx, sy);\n\n// Draw Actor Class\nconst className = actor.currentClass().name;\nsx = rect.x + Math.round(((rect.width / 2) - this.textSizeEx(className).width) / 2);\nsy += lineHeight;\nthis.drawTextEx(className, sx, sy, sw);\n\n// Draw Actor Icons\nsx = rect.x + Math.round(((rect.width / 2) - 128) / 2);\nsy += lineHeight;\nthis.drawActorIcons(actor, sx, sy);\n\n// Prepare Stat Coordinates\nsx = rect.x + Math.floor(rect.width / 2);\nsw = rect.width / 2;\nsh = rect.height;\nconst sx3 = sx;\nconst cw = rect.width - sx3 - 2;\n\n// Prepare Total Content Height to vertically center the content.\nlet totalHeight = gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    totalHeight += lineHeight;\n    totalHeight += Math.ceil(params.length / 2) * gaugeLineHeight;\n}\nconst equips = actor.equips();\ntotalHeight += lineHeight;\ntotalHeight += equips.length * lineHeight;\nsy = Math.max(rect.y, rect.y + Math.floor((rect.height - totalHeight) / 2));\n\n// Place Gauges\nthis.placeGauge(actor, \"hp\", sx, sy);\nsy += gaugeLineHeight;\nthis.placeGauge(actor, \"mp\", sx, sy);\nif ($dataSystem.optDisplayTp) {\n    sy += gaugeLineHeight;\n    this.placeGauge(actor, \"tp\", sx, sy);\n    sy += gaugeLineHeight;\n}\nlet ny = sy;\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nif (Imported.VisuMZ_0_CoreEngine && cw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    sy += lineHeight;\n    const pw = Math.floor(cw / 2) - 24;\n    let px = sx3;\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, sy, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, sy, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            sy += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n    ny += lineHeight;\n    ny += Math.ceil(params.length / 2) * gaugeLineHeight;\n}\n\n// Draw Actor Equipment\nthis.resetFontSettings();\nsx = rect.x + Math.floor(rect.width / 2);\nsy = ny + lineHeight;\nsw = rect.width / 2;\nfor (const equip of equips) {\n    if (equip) {\n        this.drawItemName(equip, sx, sy, sw);\n        sy += lineHeight;\n        if (sy + lineHeight > rect.y + rect.height) return;\n    }\n}"
 *
 * @param ThinStyle:func
 * @text JS: Thin
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst lineHeight = this.lineHeight();\nlet sx = rect.x + 160;\nlet sy = rect.y + ((rect.height - lineHeight) / 2) - 2;\n\n// Draw Actor Data\nthis.drawActorName(actor, sx, sy);\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\n\n// Place Gauges\nsx += 180;\nsy += (lineHeight - this.gaugeLineHeight()) / 2;\nthis.placeGauge(actor, \"hp\", sx, sy);\nsx += 140;\nif ((sx + 128) > rect.x + rect.width) return;\nthis.placeGauge(actor, \"mp\", sx, sy);\nsx += 140;\nif ((sx + 128) > rect.x + rect.width) return;\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \"tp\", sx, sy);"
 *
 * @param ThickerStyle:func
 * @text JS: Thicker
 * @type note
 * @desc Code used to draw the data for this particular style.
 * @default "// Declare Constants\nconst actor = arguments[0];\nconst rect = arguments[1];\n\n// Draw Actor Graphic\nconst gx = rect.x + (this.graphicType() === 'face' ? 1 : 0);\nconst gy = rect.y + (this.graphicType() === 'face' ? 1 : 0);\nconst gw = Math.min(rect.width, ImageManager.faceWidth);\nconst gh = Math.min(rect.height, ImageManager.faceHeight);\nthis.drawActorGraphic(actor, gx, gy, gw, gh);\n\n// Draw Status Stuff\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nlet sx = rect.x + 160;\nlet sy = rect.y + ((rect.height - (lineHeight * 2)) / 2) - 2;\n\n// Draw Actor Data\nthis.drawActorLevel(actor, gx+8, rect.y + rect.height - lineHeight +1);\nthis.drawActorName(actor, sx, sy);\nthis.drawActorClass(actor, sx, sy + lineHeight);\n//this.drawActorLevel(actor, sx, sy + lineHeight);\n\n// Place Gauges\nsx += 180;\nsy = rect.y + ((rect.height - (gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2))) / 2) - 2;\nthis.placeGauge(actor, \"hp\", sx, sy);\nthis.placeGauge(actor, \"mp\", sx, sy + gaugeLineHeight);\nif ($dataSystem.optDisplayTp) this.placeGauge(actor, \"tp\", sx, sy + (gaugeLineHeight * 2));\nsx += 160;\n\n// Following Requires VisuStella MZ's Core Engine\n// Draw Additional Parameter Data if Enough Room\nconst sx3 = sx;\nconst sw = rect.width - sx3 - 2;\nif (Imported.VisuMZ_0_CoreEngine && sw >= 300) {\n    const params = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;\n    const pw = Math.floor(sw / 2) - 24;\n    sy = rect.y + ((rect.height - (gaugeLineHeight * Math.ceil(params.length / 2))) / 2) - 2;\n    let px = sx3;\n    let py = rect.y + Math.floor((rect.height - (Math.ceil(params.length / 2) * gaugeLineHeight)) / 2);\n    let counter = 0;\n    for (const param of params) {\n        this.resetFontSettings();\n        this.drawParamText(px, py, pw, param, true);\n        this.resetTextColor();\n        this.contents.fontSize -= 8;\n        const paramValue = actor.paramValueByName(param, true);\n        this.contents.drawText(paramValue, px, py, pw, gaugeLineHeight, 'right');\n        counter++;\n        if (counter % 2 === 0) {\n            px = sx3;\n            py += gaugeLineHeight;\n        } else {\n            px += pw + 24;\n        }\n    }\n}"
 *
 */
//=============================================================================

var tier = tier || 0x0;
var dependencies = [];
var pluginData = $plugins.filter(function (_0x2951d0) {
  return _0x2951d0.status && _0x2951d0.description.includes("[MainMenuCore]");
})[0x0];
VisuMZ.MainMenuCore.Settings = VisuMZ.MainMenuCore.Settings || {};
VisuMZ.ConvertParams = function (_0x4dfcc1, _0x401296) {
  for (const _0x258c5e in _0x401296) {
    if (_0x258c5e.match(/(.*):(.*)/i)) {
      const _0x4e5433 = String(RegExp.$1);
      const _0x28191f = String(RegExp.$2).toUpperCase().trim();
      let _0x630e04;
      let _0x5a6dce;
      let _0x3e22f0;
      switch (_0x28191f) {
        case "NUM":
          _0x630e04 = _0x401296[_0x258c5e] !== '' ? Number(_0x401296[_0x258c5e]) : 0x0;
          break;
        case "ARRAYNUM":
          _0x5a6dce = _0x401296[_0x258c5e] !== '' ? JSON.parse(_0x401296[_0x258c5e]) : [];
          _0x630e04 = _0x5a6dce.map(_0x4ac471 => Number(_0x4ac471));
          break;
        case 'EVAL':
          _0x630e04 = _0x401296[_0x258c5e] !== '' ? eval(_0x401296[_0x258c5e]) : null;
          break;
        case 'ARRAYEVAL':
          _0x5a6dce = _0x401296[_0x258c5e] !== '' ? JSON.parse(_0x401296[_0x258c5e]) : [];
          _0x630e04 = _0x5a6dce.map(_0x180350 => eval(_0x180350));
          break;
        case 'JSON':
          _0x630e04 = _0x401296[_0x258c5e] !== '' ? JSON.parse(_0x401296[_0x258c5e]) : '';
          break;
        case "ARRAYJSON":
          _0x5a6dce = _0x401296[_0x258c5e] !== '' ? JSON.parse(_0x401296[_0x258c5e]) : [];
          _0x630e04 = _0x5a6dce.map(_0x18db5a => JSON.parse(_0x18db5a));
          break;
        case 'FUNC':
          _0x630e04 = _0x401296[_0x258c5e] !== '' ? new Function(JSON.parse(_0x401296[_0x258c5e])) : new Function("return 0");
          break;
        case 'ARRAYFUNC':
          _0x5a6dce = _0x401296[_0x258c5e] !== '' ? JSON.parse(_0x401296[_0x258c5e]) : [];
          _0x630e04 = _0x5a6dce.map(_0x38b40a => new Function(JSON.parse(_0x38b40a)));
          break;
        case "STR":
          _0x630e04 = _0x401296[_0x258c5e] !== '' ? String(_0x401296[_0x258c5e]) : '';
          break;
        case "ARRAYSTR":
          _0x5a6dce = _0x401296[_0x258c5e] !== '' ? JSON.parse(_0x401296[_0x258c5e]) : [];
          _0x630e04 = _0x5a6dce.map(_0x41d77a => String(_0x41d77a));
          break;
        case 'STRUCT':
          _0x3e22f0 = _0x401296[_0x258c5e] !== '' ? JSON.parse(_0x401296[_0x258c5e]) : {};
          _0x4dfcc1[_0x4e5433] = {};
          VisuMZ.ConvertParams(_0x4dfcc1[_0x4e5433], _0x3e22f0);
          continue;
        case "ARRAYSTRUCT":
          _0x5a6dce = _0x401296[_0x258c5e] !== '' ? JSON.parse(_0x401296[_0x258c5e]) : [];
          _0x630e04 = _0x5a6dce.map(_0x3c2137 => VisuMZ.ConvertParams({}, JSON.parse(_0x3c2137)));
          break;
        default:
          continue;
      }
      _0x4dfcc1[_0x4e5433] = _0x630e04;
    }
  }
  return _0x4dfcc1;
};
(_0x1aed1a => {
  const _0x53542a = _0x1aed1a.name;
  for (const _0x47c73c of dependencies) {
    if (!Imported[_0x47c73c]) {
      alert("%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.".format(_0x53542a, _0x47c73c));
      SceneManager.exit();
      break;
    }
  }
  const _0x704788 = _0x1aed1a.description;
  if (_0x704788.match(/\[Version[ ](.*?)\]/i)) {
    const _0x5d0f9e = Number(RegExp.$1);
    if (_0x5d0f9e !== VisuMZ.MainMenuCore.version) {
      alert("%1's version does not match plugin's. Please update it in the Plugin Manager.".format(_0x53542a, _0x5d0f9e));
      SceneManager.exit();
    }
  }
  if (_0x704788.match(/\[Tier[ ](\d+)\]/i)) {
    const _0x527722 = Number(RegExp.$1);
    if (_0x527722 < tier) {
      alert("%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.".format(_0x53542a, _0x527722, tier));
      SceneManager.exit();
    } else {
      tier = Math.max(_0x527722, tier);
    }
  }
  VisuMZ.ConvertParams(VisuMZ.MainMenuCore.Settings, _0x1aed1a.parameters);
})(pluginData);
PluginManager.registerCommand(pluginData.name, "ChangeActorMenuImageGroup", _0x7dc144 => {
  VisuMZ.ConvertParams(_0x7dc144, _0x7dc144);
  const _0x3f1214 = _0x7dc144.Step1;
  const _0x3be57f = _0x7dc144.Step2;
  for (let _0x4a8e87 of _0x3f1214) {
    _0x4a8e87 = parseInt(_0x4a8e87) || 0x0;
    if (_0x4a8e87 <= 0x0) {
      continue;
    }
    const _0x4d0f2a = $gameActors.actor(_0x4a8e87);
    if (!_0x4d0f2a) {
      continue;
    }
    _0x4d0f2a.setMenuImage(_0x3be57f);
  }
});
PluginManager.registerCommand(pluginData.name, "ChangeActorMenuImageRange", _0x368007 => {
  VisuMZ.ConvertParams(_0x368007, _0x368007);
  const _0xc938b7 = _0x368007.Step1End >= _0x368007.Step1Start ? _0x368007.Step1Start : _0x368007.Step1End;
  const _0x250acf = _0x368007.Step1End >= _0x368007.Step1Start ? _0x368007.Step1End : _0x368007.Step1Start;
  const _0x425c68 = Array(_0x250acf - _0xc938b7 + 0x1).fill().map((_0x3bb976, _0x474e10) => _0xc938b7 + _0x474e10);
  const _0x1d3ca1 = _0x368007.Step2;
  for (let _0x2dedd8 of _0x425c68) {
    _0x2dedd8 = parseInt(_0x2dedd8) || 0x0;
    if (_0x2dedd8 <= 0x0) {
      continue;
    }
    const _0x5ccc94 = $gameActors.actor(_0x2dedd8);
    if (!_0x5ccc94) {
      continue;
    }
    _0x5ccc94.setMenuImage(_0x1d3ca1);
  }
});
PluginManager.registerCommand(pluginData.name, "ChangeActorMenuImageJS", _0xd90e56 => {
  VisuMZ.ConvertParams(_0xd90e56, _0xd90e56);
  const _0x735b26 = _0xd90e56.Step1;
  let _0x5dba30 = [];
  while (_0x735b26.length > 0x0) {
    const _0x4af8eb = _0x735b26.shift();
    if (Array.isArray(_0x4af8eb)) {
      _0x5dba30 = _0x5dba30.concat(_0x4af8eb);
    } else {
      _0x5dba30.push(_0x4af8eb);
    }
  }
  const _0x148beb = _0xd90e56.Step2;
  for (let _0x1db431 of _0x5dba30) {
    _0x1db431 = parseInt(_0x1db431) || 0x0;
    if (_0x1db431 <= 0x0) {
      continue;
    }
    const _0x3905a7 = $gameActors.actor(_0x1db431);
    if (!_0x3905a7) {
      continue;
    }
    _0x3905a7.setMenuImage(_0x148beb);
  }
});
PluginManager.registerCommand(pluginData.name, 'ChangeActorMenuImageJS_v124', _0x222ad9 => {
  VisuMZ.ConvertParams(_0x222ad9, _0x222ad9);
  const _0x41bde5 = _0x222ad9.ActorJS();
  const _0x4955cb = $gameActors.actor(_0x41bde5) || null;
  if (!_0x4955cb) {
    console.log("NO ACTOR FOUND!");
    return;
  }
  const _0x16c97a = _0x222ad9.FilenameJS();
  _0x4955cb.setMenuImage(_0x16c97a);
});
PluginManager.registerCommand(pluginData.name, "MenuCommandClear", _0x56b4dc => {
  VisuMZ.ConvertParams(_0x56b4dc, _0x56b4dc);
  const _0x5433ea = _0x56b4dc.Symbols || [];
  for (const _0x31dc1d of _0x5433ea) {
    $gameSystem.clearShowMainMenuCommand(_0x31dc1d);
  }
});
PluginManager.registerCommand(pluginData.name, "MenuCommandForceEnable", _0x2f9b70 => {
  VisuMZ.ConvertParams(_0x2f9b70, _0x2f9b70);
  const _0x2c87cc = _0x2f9b70.Symbols || [];
  for (const _0x1cf186 of _0x2c87cc) {
    $gameSystem.forceEnableMainMenuCommand(_0x1cf186);
  }
});
PluginManager.registerCommand(pluginData.name, 'MenuCommandForceDisable', _0x632427 => {
  VisuMZ.ConvertParams(_0x632427, _0x632427);
  const _0x3b9d0e = _0x632427.Symbols || [];
  for (const _0x571fd2 of _0x3b9d0e) {
    $gameSystem.forceDisableMainMenuCommand(_0x571fd2);
  }
});
PluginManager.registerCommand(pluginData.name, 'MenuCommandForceHide', _0x16ad13 => {
  VisuMZ.ConvertParams(_0x16ad13, _0x16ad13);
  const _0x2ae8d8 = _0x16ad13.Symbols || [];
  for (const _0x352225 of _0x2ae8d8) {
    $gameSystem.forceHideMainMenuCommand(_0x352225);
  }
});
PluginManager.registerCommand(pluginData.name, "MenuCommandForceShow", _0x3534cf => {
  VisuMZ.ConvertParams(_0x3534cf, _0x3534cf);
  const _0x271929 = _0x3534cf.Symbols || [];
  for (const _0x54d222 of _0x271929) {
    $gameSystem.forceShowMainMenuCommand(_0x54d222);
  }
});
VisuMZ.MainMenuCore.SceneManager_push = SceneManager.push;
SceneManager.push = function (_0x14fd20) {
  if (_0x14fd20 === Scene_Menu) {
    $gameTemp._mainMenuSubcategory = undefined;
  }
  VisuMZ.MainMenuCore.SceneManager_push.call(this, _0x14fd20);
};
VisuMZ.MainMenuCore.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
  VisuMZ.MainMenuCore.Game_System_initialize.call(this);
  this.initMainMenuCore();
};
Game_System.prototype.initMainMenuCore = function () {
  this._mainMenuCore = this._mainMenuCore || {
    'forceShow': [],
    'forceHide': [],
    'forceEnable': [],
    'forceDisable': []
  };
};
Game_System.prototype.mainMenuCoreSettings = function () {
  if (this._mainMenuCore === undefined) {
    this.initMainMenuCore();
  }
  const _0x43752a = ["forceShow", 'forceHide', "forceEnable", "forceDisable"];
  for (const _0x203a95 of _0x43752a) {
    this._mainMenuCore[_0x203a95] = this._mainMenuCore[_0x203a95] || [];
  }
  return this._mainMenuCore;
};
Game_System.prototype.getMainMenuSymbolState = function (_0x4e7518, _0x3f5ecb) {
  const _0x51f40e = this.mainMenuCoreSettings();
  if (!_0x51f40e[_0x3f5ecb]) {
    return false;
  }
  return _0x51f40e[_0x3f5ecb].includes(_0x4e7518);
};
Game_System.prototype.clearShowMainMenuCommand = function (_0x1c6dd1) {
  const _0x3c443e = this.mainMenuCoreSettings();
  const _0x31065e = ["forceShow", "forceHide", "forceEnable", "forceDisable"];
  for (const _0x2347a6 of _0x31065e) {
    _0x3c443e[_0x2347a6].remove(_0x1c6dd1);
  }
};
Game_System.prototype.forceShowMainMenuCommand = function (_0xbabbd8) {
  const _0x4bc1bf = this.mainMenuCoreSettings();
  if (!_0x4bc1bf.forceShow.includes(_0xbabbd8)) {
    _0x4bc1bf.forceShow.push(_0xbabbd8);
  }
  _0x4bc1bf.forceHide.remove(_0xbabbd8);
};
Game_System.prototype.forceHideMainMenuCommand = function (_0x587f7d) {
  const _0x4a077c = this.mainMenuCoreSettings();
  if (!_0x4a077c.forceHide.includes(_0x587f7d)) {
    _0x4a077c.forceHide.push(_0x587f7d);
  }
  _0x4a077c.forceShow.remove(_0x587f7d);
};
Game_System.prototype.forceEnableMainMenuCommand = function (_0x2b58ad) {
  const _0x1ae9d6 = this.mainMenuCoreSettings();
  if (!_0x1ae9d6.forceEnable.includes(_0x2b58ad)) {
    _0x1ae9d6.forceEnable.push(_0x2b58ad);
  }
  _0x1ae9d6.forceDisable.remove(_0x2b58ad);
};
Game_System.prototype.forceDisableMainMenuCommand = function (_0x53b92f) {
  const _0x5e9025 = this.mainMenuCoreSettings();
  if (!_0x5e9025.forceDisable.includes(_0x53b92f)) {
    _0x5e9025.forceDisable.push(_0x53b92f);
  }
  _0x5e9025.forceEnable.remove(_0x53b92f);
};
VisuMZ.MainMenuCore.Game_Actor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function (_0x12f54d) {
  VisuMZ.MainMenuCore.Game_Actor_setup.call(this, _0x12f54d);
  this.initMenuImage();
};
Game_Actor.prototype.initMenuImage = function () {
  this._menuImage = '';
  if (this.actor() && this.actor().note.match(/<MENU (?:IMAGE|PORTRAIT):[ ](.*)>/i)) {
    this._menuImage = String(RegExp.$1);
  }
};
Game_Actor.prototype.getMenuImage = function () {
  if (this._menuImage === undefined) {
    this.initMenuImage();
  }
  return this._menuImage;
};
Game_Actor.prototype.setMenuImage = function (_0x3e90db) {
  if (this._menuImage === undefined) {
    this.initMenuImage();
  }
  this._menuImage = _0x3e90db;
};
Game_Actor.prototype.getMenuImageOffsetX = function () {
  if (this.actor().note.match(/<MENU (?:IMAGE|PORTRAIT) OFFSET X:[ ]([\+\-]\d+)>/i)) {
    return Number(RegExp.$1);
  } else {
    if (this.actor().note.match(/<MENU (?:IMAGE|PORTRAIT) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)) {
      return Number(RegExp.$1);
    }
  }
  return 0x0;
};
Game_Actor.prototype.getMenuImageOffsetY = function () {
  if (this.actor().note.match(/<MENU (?:IMAGE|PORTRAIT) OFFSET Y:[ ]([\+\-]\d+)>/i)) {
    return Number(RegExp.$1);
  } else {
    if (this.actor().note.match(/<MENU (?:IMAGE|PORTRAIT) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)) {
      return Number(RegExp.$2);
    }
  }
  return 0x0;
};
Scene_MenuBase.prototype.isDisplayActorMenuBackgroundImage = function () {
  return VisuMZ.MainMenuCore.Settings.General.ActorBgMenus.includes(this.constructor.name);
};
VisuMZ.MainMenuCore.Scene_MenuBase_createBackground = Scene_MenuBase.prototype.createBackground;
Scene_MenuBase.prototype.createBackground = function () {
  VisuMZ.MainMenuCore.Scene_MenuBase_createBackground.call(this);
  this.createActorMenuBackgroundImageSprite();
};
Scene_MenuBase.prototype.createActorMenuBackgroundImageSprite = function () {
  this._actorMenuBgSprite = new Sprite_MenuBackgroundActor();
  this.addChild(this._actorMenuBgSprite);
};
VisuMZ.MainMenuCore.Scene_MenuBase_updateActor = Scene_MenuBase.prototype.updateActor;
Scene_MenuBase.prototype.updateActor = function () {
  VisuMZ.MainMenuCore.Scene_MenuBase_updateActor.call(this);
  if (this.isDisplayActorMenuBackgroundImage() && this._actorMenuBgSprite) {
    this._actorMenuBgSprite.setActor(this._actor);
  }
};
VisuMZ.MainMenuCore.Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function () {
  VisuMZ.MainMenuCore.Scene_Menu_create.call(this);
  this.createPlaytimeWindow();
  this.createVariableWindow();
  this.createDummyWindow();
};
Scene_Menu.prototype.createCommandWindow = function () {
  const _0x2cb414 = this.commandWindowRect();
  const _0x169894 = new Window_MenuCommand(_0x2cb414);
  _0x169894.setHandler("cancel", this.commandCancel.bind(this));
  this.addWindow(_0x169894);
  this._commandWindow = _0x169894;
};
VisuMZ.MainMenuCore.Scene_Menu_commandWindowRect = Scene_Menu.prototype.commandWindowRect;
Scene_Menu.prototype.commandWindowRect = function () {
  const _0x2e18e8 = this.commandWindowStyle();
  if (_0x2e18e8 === "top") {
    return this.commandWindowRectTopStyle();
  } else {
    if (_0x2e18e8 === "thinTop") {
      return this.commandWindowRectThinTopStyle();
    } else {
      if (_0x2e18e8 === "bottom") {
        return this.commandWindowRectBottomStyle();
      } else {
        if (_0x2e18e8 === "thinBottom") {
          return this.commandWindowRectThinBottomStyle();
        } else {
          if (_0x2e18e8 === "mobile") {
            return this.commandWindowRectMobileStyle();
          } else {
            const _0x249a26 = VisuMZ.MainMenuCore.Scene_Menu_commandWindowRect.call(this);
            this.adjustDefaultCommandWindowRect(_0x249a26);
            return _0x249a26;
          }
        }
      }
    }
  }
};
Scene_Menu.prototype.adjustDefaultCommandWindowRect = function (_0x5ad97f) {
  if (this.adjustCommandHeightByPlaytime()) {
    _0x5ad97f.height -= this.playtimeWindowRect().height;
  }
  if (this.adjustCommandHeightByVariable()) {
    _0x5ad97f.height -= this.variableWindowRect().height;
  }
};
Scene_Menu.prototype.commandWindowRectTopStyle = function () {
  const _0x3ff31c = VisuMZ.MainMenuCore.Settings.CustomCmdWin.Rows;
  const _0x15e85d = Graphics.boxWidth;
  const _0x139956 = this.calcWindowHeight(_0x3ff31c, true);
  const _0x62d213 = this.mainAreaTop();
  return new Rectangle(0x0, _0x62d213, _0x15e85d, _0x139956);
};
Scene_Menu.prototype.commandWindowRectThinTopStyle = function () {
  const _0x15b6a4 = Graphics.boxWidth;
  const _0x3d157f = this.calcWindowHeight(0x1, true);
  const _0x11ed58 = this.mainAreaTop();
  return new Rectangle(0x0, _0x11ed58, _0x15b6a4, _0x3d157f);
};
Scene_Menu.prototype.commandWindowRectBottomStyle = function () {
  const _0x324e60 = VisuMZ.MainMenuCore.Settings.CustomCmdWin.Rows;
  const _0x121132 = Graphics.boxWidth;
  const _0x5ef1d8 = this.calcWindowHeight(_0x324e60, true);
  const _0x42c6c3 = this.mainAreaBottom() - _0x5ef1d8;
  return new Rectangle(0x0, _0x42c6c3, _0x121132, _0x5ef1d8);
};
Scene_Menu.prototype.commandWindowRectThinBottomStyle = function () {
  const _0x3e3853 = Graphics.boxWidth;
  const _0x5277da = this.calcWindowHeight(0x1, true);
  const _0x4c87dd = this.mainAreaBottom() - _0x5277da;
  return new Rectangle(0x0, _0x4c87dd, _0x3e3853, _0x5277da);
};
Scene_Menu.prototype.commandWindowRectMobileStyle = function () {
  const _0xcee805 = VisuMZ.MainMenuCore.Settings.CustomCmdWin.Rows;
  const _0x3a02a5 = Graphics.boxWidth;
  const _0x3f2e9f = Window_MenuCommand.prototype.fittingHeight(_0xcee805);
  const _0x553d8e = Math.round((Graphics.boxHeight - _0x3f2e9f) / 0x2);
  return new Rectangle(0x0, _0x553d8e, _0x3a02a5, _0x3f2e9f);
};
Scene_Menu.prototype.commandWindowStyle = function () {
  return VisuMZ.MainMenuCore.Settings.CommandWindowStyle;
};
Scene_Menu.prototype.thinGoldWindow = function () {
  if (this.commandWindowStyle() !== "default") {
    return true;
  }
  return VisuMZ.MainMenuCore.Settings.General.ThinGoldWindow;
};
Scene_Menu.prototype.createGoldWindow = function () {
  const _0x7386b9 = this.goldWindowRect();
  this._goldWindow = this.thinGoldWindow() ? new Window_ThinGold(_0x7386b9) : new Window_Gold(_0x7386b9);
  this.addWindow(this._goldWindow);
};
VisuMZ.MainMenuCore.Scene_Menu_goldWindowRect = Scene_Menu.prototype.goldWindowRect;
Scene_Menu.prototype.goldWindowRect = function () {
  const _0x3b987d = this.commandWindowStyle();
  if (["top", "thinTop", "mobile"].includes(_0x3b987d)) {
    return this.goldWindowRectTopStyle();
  } else {
    if (["bottom", "thinBottom"].includes(_0x3b987d)) {
      return this.goldWindowRectBottomStyle();
    } else {
      const _0x342b5b = VisuMZ.MainMenuCore.Scene_Menu_goldWindowRect.call(this);
      this.applyThinnerGoldWindowRect(_0x342b5b);
      return _0x342b5b;
    }
  }
};
Scene_Menu.prototype.applyThinnerGoldWindowRect = function (_0xa03a41) {
  if (this.thinGoldWindow()) {
    if (VisuMZ.MainMenuCore.Settings.General.AutoGoldY) {
      const _0x934fb = _0xa03a41.height - this.calcWindowHeight(0x1, false);
      _0xa03a41.y += _0x934fb;
    }
    if (VisuMZ.MainMenuCore.Settings.General.AutoGoldHeight) {
      _0xa03a41.height = this.calcWindowHeight(0x1, false);
    }
  }
};
Scene_Menu.prototype.goldWindowRectTopStyle = function () {
  const _0x1c37e3 = this.mainCommandWidth();
  const _0x2bd181 = this.calcWindowHeight(0x1, false);
  const _0x27d6ec = Graphics.boxWidth - _0x1c37e3;
  const _0x535659 = this.mainAreaBottom() - _0x2bd181;
  return new Rectangle(_0x27d6ec, _0x535659, _0x1c37e3, _0x2bd181);
};
Scene_Menu.prototype.goldWindowRectBottomStyle = function () {
  const _0x493575 = this.mainCommandWidth();
  const _0x51a24f = this.calcWindowHeight(0x1, false);
  const _0x4bce87 = Graphics.boxWidth - _0x493575;
  const _0x189c11 = this.mainAreaTop();
  return new Rectangle(_0x4bce87, _0x189c11, _0x493575, _0x51a24f);
};
VisuMZ.MainMenuCore.Scene_Menu_createStatusWindow = Scene_Menu.prototype.createStatusWindow;
Scene_Menu.prototype.createStatusWindow = function () {
  VisuMZ.MainMenuCore.Scene_Menu_createStatusWindow.call(this);
  this.adjustStatusWindowMobile();
};
Scene_Menu.prototype.adjustStatusWindowMobile = function () {
  if (this.commandWindowStyle() === 'mobile') {
    this._statusWindow.openness = 0x0;
  }
};
VisuMZ.MainMenuCore.Scene_Menu_statusWindowRect = Scene_Menu.prototype.statusWindowRect;
Scene_Menu.prototype.statusWindowRect = function () {
  const _0x417971 = this.commandWindowStyle();
  if (["top", 'thinTop'].includes(_0x417971)) {
    return this.statusWindowRectTopStyle();
  } else {
    if (["bottom", "thinBottom"].includes(_0x417971)) {
      return this.statusWindowRectBottomStyle();
    } else {
      return _0x417971 === "mobile" ? this.statusWindowRectMobileStyle() : VisuMZ.MainMenuCore.Scene_Menu_statusWindowRect.call(this);
    }
  }
};
Scene_Menu.prototype.statusWindowRectTopStyle = function () {
  const _0x3bfb72 = Graphics.boxWidth;
  const _0x48f460 = this.mainAreaHeight() - this._commandWindow.height - this._goldWindow.height;
  const _0x50a8e = this._commandWindow.y + this._commandWindow.height;
  return new Rectangle(0x0, _0x50a8e, _0x3bfb72, _0x48f460);
};
Scene_Menu.prototype.statusWindowRectBottomStyle = function () {
  const _0xaed6d8 = Graphics.boxWidth;
  const _0x18333d = this.mainAreaHeight() - this._commandWindow.height - this._goldWindow.height;
  const _0x408b38 = this._goldWindow.y + this._goldWindow.height;
  return new Rectangle(0x0, _0x408b38, _0xaed6d8, _0x18333d);
};
Scene_Menu.prototype.statusWindowRectMobileStyle = function () {
  const _0x41ebe9 = Graphics.boxWidth;
  const _0x21ab11 = this.mainAreaHeight() - this._goldWindow.height;
  const _0x361838 = this.mainAreaBottom() - this._goldWindow.height - _0x21ab11;
  return new Rectangle(0x0, _0x361838, _0x41ebe9, _0x21ab11);
};
Scene_Menu.prototype.createPlaytimeWindow = function () {
  if (!this.canCreatePlaytimeWindow()) {
    return new Rectangle(0x0, 0x0, 0x0, 0x0);
  }
  const _0x212890 = this.playtimeWindowRect();
  this._playtimeWindow = new Window_Playtime(_0x212890);
  this._playtimeWindow.setBackgroundType(VisuMZ.MainMenuCore.Settings.Playtime.BgType);
  this.addWindow(this._playtimeWindow);
};
Scene_Menu.prototype.canCreatePlaytimeWindow = function () {
  return VisuMZ.MainMenuCore.Settings.Playtime.Enable;
};
Scene_Menu.prototype.adjustCommandHeightByPlaytime = function () {
  return this.canCreatePlaytimeWindow() && (VisuMZ.MainMenuCore.Settings.Playtime.AdjustCommandHeight ?? true);
};
Scene_Menu.prototype.playtimeWindowRect = function () {
  const _0x2f2e09 = this.commandWindowStyle();
  if (["top", "thinTop", "mobile"].includes(_0x2f2e09)) {
    return this.playtimeWindowRectTopStyle();
  } else {
    return ['bottom', "thinBottom"].includes(_0x2f2e09) ? this.playtimeWindowRectBottomStyle() : VisuMZ.MainMenuCore.Settings.Playtime.WindowRect.call(this);
  }
};
Scene_Menu.prototype.playtimeWindowRectTopStyle = function () {
  const _0x22d351 = this.mainCommandWidth();
  const _0x16c065 = this.calcWindowHeight(0x1, false);
  const _0xad7e8f = this.mainAreaBottom() - _0x16c065;
  return new Rectangle(0x0, _0xad7e8f, _0x22d351, _0x16c065);
};
Scene_Menu.prototype.playtimeWindowRectBottomStyle = function () {
  const _0x365233 = this.mainCommandWidth();
  const _0x4bea75 = this.calcWindowHeight(0x1, false);
  const _0x16acc4 = this.mainAreaTop();
  return new Rectangle(0x0, _0x16acc4, _0x365233, _0x4bea75);
};
Scene_Menu.prototype.createVariableWindow = function () {
  if (!this.canCreateVariableWindow()) {
    return new Rectangle(0x0, 0x0, 0x0, 0x0);
  }
  const _0x5ab786 = this.variableWindowRect();
  this._variableWindow = new Window_MenuVariables(_0x5ab786);
  this._variableWindow.setBackgroundType(VisuMZ.MainMenuCore.Settings.Variable.BgType);
  this.addWindow(this._variableWindow);
};
Scene_Menu.prototype.canCreateVariableWindow = function () {
  return VisuMZ.MainMenuCore.Settings.Variable.Enable;
};
Scene_Menu.prototype.adjustCommandHeightByVariable = function () {
  return this.canCreateVariableWindow() && (VisuMZ.MainMenuCore.Settings.Variable.AdjustCommandHeight ?? true);
};
Scene_Menu.prototype.variableWindowRect = function () {
  const _0x3988ce = this.commandWindowStyle();
  if (["top", "thinTop", "mobile"].includes(_0x3988ce)) {
    return this.variableWindowRectTopStyle();
  } else {
    return ["bottom", "thinBottom"].includes(_0x3988ce) ? this.variableWindowRectBottomStyle() : VisuMZ.MainMenuCore.Settings.Variable.WindowRect.call(this);
  }
};
Scene_Menu.prototype.variableWindowRectTopStyle = function () {
  const _0x213626 = Graphics.boxWidth - this._goldWindow.width - (this._playtimeWindow ? this._playtimeWindow.width : 0x0);
  const _0x5cb362 = this.calcWindowHeight(0x1, false);
  const _0x3f7de5 = this._goldWindow.x - _0x213626;
  const _0x3debf6 = this.mainAreaBottom() - _0x5cb362;
  return new Rectangle(_0x3f7de5, _0x3debf6, _0x213626, _0x5cb362);
};
Scene_Menu.prototype.variableWindowRectBottomStyle = function () {
  const _0x5e64b7 = Graphics.boxWidth - this._goldWindow.width - (this._playtimeWindow ? this._playtimeWindow.width : 0x0);
  const _0x26da24 = this.calcWindowHeight(0x1, false);
  const _0x15b167 = this._goldWindow.x - _0x5e64b7;
  const _0x539c31 = this.mainAreaTop();
  return new Rectangle(_0x15b167, _0x539c31, _0x5e64b7, _0x26da24);
};
Scene_Menu.prototype.createDummyWindow = function () {
  if (!this.needsDummyWindow()) {
    return;
  }
  const _0x1360c6 = this.variableWindowRect();
  this._dummyWindow = new Window_Base(_0x1360c6);
  this._dummyWindow.setBackgroundType(VisuMZ.MainMenuCore.Settings.Variable.BgType);
  this.addWindow(this._dummyWindow);
};
Scene_Menu.prototype.needsDummyWindow = function () {
  if (['default', 'mobile'].includes(this.commandWindowStyle())) {
    return false;
  }
  if (this._variableWindow) {
    return false;
  }
  return true;
};
VisuMZ.MainMenuCore.Scene_Menu_commandPersonal = Scene_Menu.prototype.commandPersonal;
Scene_Menu.prototype.commandPersonal = function () {
  if (this.isSoloQuickMode() && this._statusWindow) {
    $gameParty.setTargetActor($gameParty.members()[0x0]);
    this.onPersonalOk();
  } else {
    if (this.commandWindowStyle() === "mobile") {
      this._statusWindow.open();
    }
    VisuMZ.MainMenuCore.Scene_Menu_commandPersonal.call(this);
  }
};
Scene_Menu.prototype.isSoloQuickMode = function () {
  return VisuMZ.MainMenuCore.Settings.General.SoloQuick && $gameParty.members().length <= 0x1;
};
Scene_Menu.prototype.onPersonalOk = function () {
  const _0xcabf4c = this._commandWindow.currentSymbol();
  const _0x2a88d2 = this._commandWindow.currentExt();
  for (const _0x376c0e of Window_MenuCommand._commandList) {
    if (_0x376c0e.Symbol === _0xcabf4c) {
      _0x376c0e.PersonalHandlerJS.call(this, _0x2a88d2);
      return;
    }
  }
};
VisuMZ.MainMenuCore.Scene_Menu_onPersonalCancel = Scene_Menu.prototype.onPersonalCancel;
Scene_Menu.prototype.onPersonalCancel = function () {
  VisuMZ.MainMenuCore.Scene_Menu_onPersonalCancel.call(this);
  if (this.commandWindowStyle() === "mobile") {
    this._statusWindow.close();
  }
};
Scene_Menu.prototype.commandCommonEvent = function () {
  const _0x1cdcf7 = parseInt(this._commandWindow.currentExt());
  if (_0x1cdcf7) {
    $gameTemp.reserveCommonEvent(_0x1cdcf7);
    this.popScene();
  } else {
    this._commandWindow.activate();
  }
};
VisuMZ.MainMenuCore.Scene_Menu_commandFormation = Scene_Menu.prototype.commandFormation;
Scene_Menu.prototype.commandFormation = function () {
  VisuMZ.MainMenuCore.Scene_Menu_commandFormation.call(this);
  if (this.commandWindowStyle() === "mobile") {
    this._statusWindow.open();
  }
};
VisuMZ.MainMenuCore.Scene_Menu_onFormationCancel = Scene_Menu.prototype.onFormationCancel;
Scene_Menu.prototype.onFormationCancel = function () {
  VisuMZ.MainMenuCore.Scene_Menu_onFormationCancel.call(this);
  if (this.commandWindowStyle() === "mobile") {
    this._statusWindow.close();
  }
};
Scene_Menu.prototype.commandLoad = function () {
  if (Imported.VisuMZ_1_SaveCore && StorageManager.saveStyle() === 'single') {
    DataManager.loadGame(0x0).then(() => this.onSaveCoreLoadSuccess())["catch"](() => this.onSaveCoreLoadFailure());
  } else {
    SceneManager.push(Scene_Load);
  }
};
Scene_Menu.prototype.commandCancel = function () {
  if (this._commandWindow.currentSubcategory() !== '') {
    this._commandWindow.removeSubcategory();
  } else {
    this.popScene();
  }
};
Scene_Menu.prototype.onSaveCoreLoadSuccess = function () {
  SoundManager.playLoad();
  this.fadeOutAll();
  Scene_Load.prototype.reloadMapIfUpdated();
  SceneManager.goto(Scene_Map);
  this._loadSuccess = true;
  VisuMZ.SaveCore.Settings.Save.OnLoadSuccessJS.call(this);
};
Scene_Menu.prototype.onSaveCoreLoadFailure = function () {
  SoundManager.playBuzzer();
  VisuMZ.SaveCore.Settings.Save.OnLoadFailureJS.call(this);
  this.loadFailureConfirmationWindow();
};
VisuMZ.MainMenuCore.Scene_Title_terminate = Scene_Menu.prototype.terminate;
Scene_Menu.prototype.terminate = function () {
  VisuMZ.MainMenuCore.Scene_Title_terminate.call(this);
  if (this._loadSuccess) {
    $gameSystem.onAfterLoad();
  }
};
function Sprite_MenuBackgroundActor() {
  this.initialize(...arguments);
}
Sprite_MenuBackgroundActor.prototype = Object.create(Sprite.prototype);
Sprite_MenuBackgroundActor.prototype.constructor = Sprite_MenuBackgroundActor;
Sprite_MenuBackgroundActor.prototype.initialize = function () {
  this._actor = null;
  this._bitmapReady = false;
  Sprite.prototype.initialize.call(this);
  this.x = Graphics.width;
};
Sprite_MenuBackgroundActor.prototype.setActor = function (_0x2615ef) {
  if (this._actor !== _0x2615ef) {
    this._actor = _0x2615ef;
    this.loadBitmap();
  }
};
Sprite_MenuBackgroundActor.prototype.loadBitmap = function () {
  this._bitmapReady = false;
  if (this._actor) {
    this.bitmap = ImageManager.loadPicture(this._actor.getMenuImage());
    this.bitmap.addLoadListener(this.onBitmapLoad.bind(this));
  } else {
    this.bitmap = new Bitmap(0x1, 0x1);
  }
};
Sprite_MenuBackgroundActor.prototype.onBitmapLoad = function () {
  this._bitmapReady = true;
  VisuMZ.MainMenuCore.Settings.General.ActorBgMenuJS.call(this);
};
Sprite_MenuBackgroundActor.prototype.update = function () {
  Sprite.prototype.update.call(this);
  if (this._bitmapReady) {
    this.updateOpacity();
    this.updatePosition();
    this.updateDuration();
  }
};
Sprite_MenuBackgroundActor.prototype.updateOpacity = function () {
  if (this._duration > 0x0) {
    const _0x51cc49 = this._duration;
    this.opacity = (this.opacity * (_0x51cc49 - 0x1) + 0xff) / _0x51cc49;
  }
};
Sprite_MenuBackgroundActor.prototype.updatePosition = function () {
  if (this._duration > 0x0) {
    const _0x435f1f = this._duration;
    this.x = (this.x * (_0x435f1f - 0x1) + this._targetX) / _0x435f1f;
    this.y = (this.y * (_0x435f1f - 0x1) + this._targetY) / _0x435f1f;
  }
};
Sprite_MenuBackgroundActor.prototype.updateDuration = function () {
  if (this._duration > 0x0) {
    this._duration--;
  }
};
ImageManager.svActorHorzCells = ImageManager.svActorHorzCells || 0x9;
ImageManager.svActorVertCells = ImageManager.svActorVertCells || 0x6;
Window_Base.prototype.drawSvActor = function (_0xf93d55, _0x53a408, _0x65de2d) {
  const _0x17a24e = _0xf93d55.match(/\$/i);
  const _0x5dba8a = ImageManager.loadSvActor(_0xf93d55);
  const _0x47c7b4 = _0x5dba8a.width / (_0x17a24e ? 0x1 : ImageManager.svActorHorzCells);
  const _0x5adf9a = _0x5dba8a.height / (_0x17a24e ? 0x1 : ImageManager.svActorVertCells);
  this.contents.blt(_0x5dba8a, 0x0, 0x0, _0x47c7b4, _0x5adf9a, _0x53a408 - _0x47c7b4 / 0x2, _0x65de2d - _0x5adf9a);
};
Window_MenuCommand._commandList = VisuMZ.MainMenuCore.Settings.CommandList;
Window_MenuCommand.SUBCATEGORY_LIST = undefined;
VisuMZ.MainMenuCore.Window_MenuCommand_initialize = Window_MenuCommand.prototype.initialize;
Window_MenuCommand.prototype.initialize = function (_0x2cf608) {
  this._subcategory = $gameTemp._mainMenuSubcategory || '';
  VisuMZ.MainMenuCore.Window_MenuCommand_initialize.call(this, _0x2cf608);
  this.createCommandNameWindow(_0x2cf608);
};
Window_MenuCommand.prototype.createCommandNameWindow = function (_0x3e5aff) {
  const _0x3ee8ee = new Rectangle(0x0, 0x0, _0x3e5aff.width, _0x3e5aff.height);
  this._commandNameWindow = new Window_Base(_0x3ee8ee);
  this._commandNameWindow.opacity = 0x0;
  this.addChild(this._commandNameWindow);
  this.updateCommandNameWindow();
};
Window_MenuCommand.prototype.callUpdateHelp = function () {
  Window_HorzCommand.prototype.callUpdateHelp.call(this);
  if (this._commandNameWindow) {
    this.updateCommandNameWindow();
  }
};
Window_MenuCommand.prototype.updateCommandNameWindow = function () {
  const _0x68c570 = this._commandNameWindow;
  _0x68c570.contents.clear();
  const _0x2b6174 = this.commandStyleCheck(this.index());
  if (_0x2b6174 === "icon") {
    const _0x1dfdde = this.itemLineRect(this.index());
    let _0x52513c = this.commandName(this.index());
    _0x52513c = _0x52513c.replace(/\\I\[(\d+)\]/gi, '');
    _0x68c570.resetFontSettings();
    this.commandNameWindowDrawBackground(_0x52513c, _0x1dfdde);
    this.commandNameWindowDrawText(_0x52513c, _0x1dfdde);
    this.commandNameWindowCenter(_0x52513c, _0x1dfdde);
  }
};
Window_MenuCommand.prototype.commandNameWindowDrawBackground = function (_0x103fdb, _0x58939f) {};
Window_MenuCommand.prototype.commandNameWindowDrawText = function (_0x5b748e, _0x26b47d) {
  const _0x48bf1a = this._commandNameWindow;
  _0x48bf1a.drawText(_0x5b748e, 0x0, _0x26b47d.y, _0x48bf1a.innerWidth, "center");
};
Window_MenuCommand.prototype.commandNameWindowCenter = function (_0xf1f56c, _0x5242b2) {
  const _0x125ccd = this._commandNameWindow;
  const _0x55ddee = $gameSystem.windowPadding();
  const _0x4cd48e = _0x5242b2.x + Math.floor(_0x5242b2.width / 0x2) + _0x55ddee;
  _0x125ccd.x = _0x125ccd.width / -0x2 + _0x4cd48e;
  _0x125ccd.y = Math.floor(_0x5242b2.height / 0x4);
};
Window_MenuCommand.prototype.itemHeight = function () {
  const _0x3c5986 = SceneManager._scene.commandWindowStyle();
  if (_0x3c5986 === 'mobile') {
    const _0x3ddad7 = VisuMZ.MainMenuCore.Settings.CustomCmdWin.MobileThickness;
    return this.lineHeight() * _0x3ddad7 + 0x8;
  } else {
    return Window_Command.prototype.itemHeight.call(this);
  }
};
Window_MenuCommand.prototype.makeCommandList = function () {
  this.makeMainMenuCoreCommandList();
};
Window_MenuCommand.prototype.makeMainMenuCoreCommandList = function () {
  let _0x5f29a2 = 0x0;
  for (const _0x19a755 of Window_MenuCommand._commandList) {
    let _0x3c9681 = _0x19a755.Symbol;
    if (this.isMainMenuCommandVisible(_0x3c9681, _0x19a755)) {
      let _0x4f9997 = _0x19a755.TextStr;
      if (['', "Untitled"].includes(_0x4f9997)) {
        _0x4f9997 = _0x19a755.TextJS.call(this);
      }
      const _0x59422d = _0x19a755.Icon;
      if (_0x59422d > 0x0 && this.commandStyle() !== "text") {
        _0x4f9997 = "\\I[%1]%2".format(_0x59422d, _0x4f9997);
      }
      const _0x5dcc64 = this.isMainMenuCommandEnabled(_0x3c9681, _0x19a755);
      const _0x40b08b = _0x19a755.ExtJS.call(this);
      if (_0x3c9681 === "subcategory") {
        _0x5f29a2++;
        _0x3c9681 += _0x5f29a2;
      }
      this.addCommand(_0x4f9997, _0x3c9681, _0x5dcc64, _0x40b08b);
      this.setHandler(_0x3c9681, _0x19a755.CallHandlerJS.bind(this, _0x40b08b));
    }
    this.addSymbolBridge(_0x3c9681);
  }
};
Window_MenuCommand.prototype.isMainMenuCommandVisible = function (_0x964b4a, _0xf26910, _0x5d9144) {
  if (!_0x5d9144) {
    if (!this.isIncludedInSubcategory(_0x964b4a, _0xf26910)) {
      return false;
    }
  }
  if ($gameSystem.getMainMenuSymbolState(_0x964b4a, "forceShow")) {
    return true;
  }
  if ($gameSystem.getMainMenuSymbolState(_0x964b4a, 'forceHide')) {
    return false;
  }
  return _0xf26910.ShowJS.call(this, _0x964b4a, _0xf26910);
};
Window_MenuCommand.prototype.isMainMenuCommandEnabled = function (_0x12cfca, _0x31ea5f) {
  if ($gameSystem.getMainMenuSymbolState(_0x12cfca, "forceEnable")) {
    return true;
  }
  if ($gameSystem.getMainMenuSymbolState(_0x12cfca, "forceDisable")) {
    return false;
  }
  return _0x31ea5f.EnableJS.call(this, _0x12cfca, _0x31ea5f);
};
Window_MenuCommand.prototype.addSymbolBridge = function (_0x292859) {
  switch (_0x292859) {
    case "item":
      this.addMainCommands();
      break;
    case "formation":
      this.addFormationCommand();
      this.addOriginalCommands();
      break;
    case "options":
      this.addOptionsCommand();
      break;
    case "save":
      this.addSaveCommand();
      break;
    case "gameEnd":
      this.addGameEndCommand();
      break;
  }
};
Window_MenuCommand.prototype.addMainCommands = function () {};
Window_MenuCommand.prototype.addFormationCommand = function () {};
Window_MenuCommand.prototype.addOriginalCommands = function () {};
Window_MenuCommand.prototype.addOptionsCommand = function () {};
Window_MenuCommand.prototype.addSaveCommand = function () {};
Window_MenuCommand.prototype.addGameEndCommand = function () {};
Window_MenuCommand.prototype.maxCols = function () {
  const _0x5cc32b = SceneManager._scene.commandWindowStyle();
  if (["thinTop", "thinBottom"].includes(_0x5cc32b)) {
    return this._list ? this.maxItems() : 0x4;
  } else {
    return _0x5cc32b !== 'default' ? VisuMZ.MainMenuCore.Settings.CustomCmdWin.Cols : Window_Command.prototype.maxCols.call(this);
  }
};
Window_MenuCommand.prototype.currentSubcategory = function () {
  return this._subcategory || '';
};
Window_MenuCommand.prototype.isIncludedInSubcategory = function (_0x3881bf, _0x14a605) {
  const _0x5604a2 = _0x14a605.Subcategory || '';
  if (!this.doesSubcategoryExist(_0x5604a2) && this.currentSubcategory() === '') {
    return true;
  }
  return _0x5604a2 === this.currentSubcategory();
};
Window_MenuCommand.prototype.doesSubcategoryExist = function (_0x4a8d58) {
  return this.getSubcategoryList().includes(_0x4a8d58);
};
Window_MenuCommand.prototype.getSubcategoryList = function () {
  if (Window_MenuCommand.SUBCATEGORY_LIST !== undefined) {
    return Window_MenuCommand.SUBCATEGORY_LIST;
  }
  Window_MenuCommand.SUBCATEGORY_LIST = [];
  for (const _0x12e262 of Window_MenuCommand._commandList) {
    const _0x5388ae = _0x12e262.Symbol;
    if (_0x5388ae !== "subcategory") {
      continue;
    }
    const _0x18242d = _0x12e262.ExtJS.call(this);
    Window_MenuCommand.SUBCATEGORY_LIST.push(_0x18242d);
  }
  return Window_MenuCommand.SUBCATEGORY_LIST;
};
Window_MenuCommand.prototype.isSubcategoryVisible = function (_0x3a02fd) {
  if (!_0x3a02fd) {
    return true;
  }
  const _0x35c3e6 = _0x3a02fd.ExtJS.call(this);
  for (const _0x2b245e of Window_MenuCommand._commandList) {
    if (_0x2b245e === _0x3a02fd) {
      continue;
    }
    const _0x1c6fdc = _0x2b245e.Subcategory || '';
    if (_0x1c6fdc !== _0x35c3e6) {
      continue;
    }
    const _0x1c3fb5 = _0x2b245e.Symbol;
    if (this.isMainMenuCommandVisible(_0x1c3fb5, _0x2b245e, true)) {
      return true;
    }
  }
  return false;
};
Window_MenuCommand.prototype.setSubcategory = function (_0x383e17) {
  _0x383e17 = _0x383e17;
  if (this.currentSubcategory() === _0x383e17) {
    return;
  }
  this._subcategory = _0x383e17;
  $gameTemp._mainMenuSubcategory = _0x383e17;
  this.refresh();
  this.select(0x0);
  this.setTopRow(0x0);
  this.activate();
};
Window_MenuCommand.prototype.removeSubcategory = function () {
  const _0x43ffa0 = this.currentSubcategory();
  this._subcategory = '';
  $gameTemp._mainMenuSubcategory = undefined;
  this.refresh();
  this.setTopRow(0x0);
  if (this._scrollDuration > 0x1) {
    this._scrollDuration = 0x1;
    this.updateSmoothScroll();
  }
  const _0x4ea69d = Math.max(this.findExt(_0x43ffa0), 0x0);
  this.smoothSelect(_0x4ea69d);
  this.activate();
};
Window_MenuCommand.prototype.itemTextAlign = function () {
  return VisuMZ.MainMenuCore.Settings.CustomCmdWin.TextAlign;
};
Window_MenuCommand.prototype.drawItem = function (_0x4b98e2) {
  const _0x3fadea = this.commandStyleCheck(_0x4b98e2);
  if (_0x3fadea === "iconText") {
    this.drawItemStyleIconText(_0x4b98e2);
  } else if (_0x3fadea === "icon") {
    this.drawItemStyleIcon(_0x4b98e2);
  } else {
    Window_Command.prototype.drawItem.call(this, _0x4b98e2);
  }
};
Window_MenuCommand.prototype.commandStyle = function () {
  return VisuMZ.MainMenuCore.Settings.CustomCmdWin.Style;
};
Window_MenuCommand.prototype.commandStyleCheck = function (_0x2e919e) {
  const _0x8732d = this.commandStyle();
  if (_0x8732d !== "auto") {
    return _0x8732d;
  } else {
    const _0x542586 = this.commandName(_0x2e919e);
    if (_0x542586.match(/\\I\[(\d+)\]/i)) {
      const _0x358bc6 = this.itemLineRect(_0x2e919e);
      const _0x3d20a9 = this.textSizeEx(_0x542586).width;
      return _0x3d20a9 <= _0x358bc6.width ? "iconText" : 'icon';
    } else {
      return "text";
    }
  }
};
Window_MenuCommand.prototype.drawItemStyleIconText = function (_0x35ff7f) {
  const _0x238ad6 = this.itemLineRect(_0x35ff7f);
  const _0x5db931 = this.commandName(_0x35ff7f);
  const _0x3a4b23 = this.textSizeEx(_0x5db931).width;
  this.changePaintOpacity(this.isCommandEnabled(_0x35ff7f));
  let _0x59e1a6 = this.itemTextAlign();
  if (_0x59e1a6 === "right") {
    this.drawTextEx(_0x5db931, _0x238ad6.x + _0x238ad6.width - _0x3a4b23, _0x238ad6.y, _0x3a4b23);
  } else {
    if (_0x59e1a6 === "center") {
      const _0x37d0d8 = _0x238ad6.x + Math.floor((_0x238ad6.width - _0x3a4b23) / 0x2);
      this.drawTextEx(_0x5db931, _0x37d0d8, _0x238ad6.y, _0x3a4b23);
    } else {
      this.drawTextEx(_0x5db931, _0x238ad6.x, _0x238ad6.y, _0x3a4b23);
    }
  }
};
Window_MenuCommand.prototype.drawItemStyleIcon = function (_0x542f6a) {
  this.commandName(_0x542f6a).match(/\\I\[(\d+)\]/i);
  const _0x512b72 = Number(RegExp.$1);
  const _0x1af9fe = this.itemLineRect(_0x542f6a);
  const _0x26c153 = _0x1af9fe.x + Math.floor((_0x1af9fe.width - ImageManager.iconWidth) / 0x2);
  const _0x26325a = _0x1af9fe.y + (_0x1af9fe.height - ImageManager.iconHeight) / 0x2;
  this.drawIcon(_0x512b72, _0x26c153, _0x26325a);
};
VisuMZ.MainMenuCore.Window_StatusBase_loadFaceImages = Window_StatusBase.prototype.loadFaceImages;
Window_StatusBase.prototype.loadFaceImages = function () {
  VisuMZ.MainMenuCore.Window_StatusBase_loadFaceImages.call(this);
  this.loadOtherActorImages();
};
Window_StatusBase.prototype.loadOtherActorImages = function () {
  for (const _0x526749 of $gameParty.members()) {
    if (!_0x526749) {
      continue;
    }
    if (_0x526749.characterName()) {
      ImageManager.loadCharacter(_0x526749.characterName());
    }
    if (_0x526749.battlerName()) {
      ImageManager.loadSvActor(_0x526749.battlerName());
    }
    if (_0x526749.getMenuImage()) {
      ImageManager.loadPicture(_0x526749.getMenuImage());
    }
  }
};
Window_StatusBase.prototype.graphicType = function () {
  return VisuMZ.MainMenuCore.Settings.StatusGraphic;
};
Window_StatusBase.prototype.drawItemActorFace = function (_0x3ca693, _0x10464f, _0x104fa1, _0x192266, _0x26f232) {
  _0x192266 = _0x192266 || ImageManager.faceWidth;
  _0x26f232 = _0x26f232 || ImageManager.faceHeight;
  const _0x3dd6c5 = ImageManager.faceWidth;
  const _0x6f1663 = _0x26f232 - 0x2;
  const _0x479df4 = _0x10464f + Math.floor((_0x192266 - _0x3dd6c5) / 0x2);
  if (this.constructor === Window_MenuStatus) {
    this.changePaintOpacity(_0x3ca693.isBattleMember());
  }
  this.drawActorFace(_0x3ca693, _0x479df4, _0x104fa1, _0x3dd6c5, _0x6f1663);
  this.changePaintOpacity(true);
};
Window_StatusBase.prototype.drawItemActorSprite = function (_0x140e08, _0x5761cb, _0x13aa43, _0x812ad5, _0x7a1c0b) {
  _0x812ad5 = _0x812ad5 || ImageManager.faceWidth;
  _0x7a1c0b = _0x7a1c0b || ImageManager.faceHeight;
  const _0x1554ac = _0x140e08.characterName();
  const _0x379522 = _0x140e08.characterIndex();
  const _0xe07218 = ImageManager.loadCharacter(_0x1554ac);
  const _0x1bb690 = ImageManager.isBigCharacter(_0x1554ac);
  const _0x9a452b = _0xe07218.width / (_0x1bb690 ? 0x3 : 0xc);
  const _0x2c5b15 = _0xe07218.height / (_0x1bb690 ? 0x4 : 0x8);
  if (this.constructor === Window_MenuStatus) {
    this.changePaintOpacity(_0x140e08.isBattleMember());
  }
  const _0x5797eb = Math.min(_0x812ad5, _0x9a452b);
  const _0x2582d0 = Math.min(_0x7a1c0b, _0x2c5b15);
  const _0x531faf = Math.floor(_0x5761cb + Math.max(_0x812ad5 - _0x9a452b, 0x0) / 0x2);
  const _0x18e618 = Math.floor(_0x13aa43 + Math.max(_0x7a1c0b - _0x2c5b15, 0x0) / 0x2);
  const _0x43d9bf = _0x1bb690 ? 0x0 : _0x379522;
  const _0x21684a = (_0x43d9bf % 0x4 * 0x3 + 0x1) * _0x9a452b;
  const _0x2f9fff = Math.floor(_0x43d9bf / 0x4) * 0x4 * _0x2c5b15;
  this.contents.blt(_0xe07218, _0x21684a, _0x2f9fff, _0x5797eb, _0x2582d0, _0x531faf, _0x18e618);
  this.changePaintOpacity(true);
};
Window_StatusBase.prototype.drawItemActorSvBattler = function (_0x485a90, _0x3c32e3, _0x2ec594, _0x3b7a94, _0x497afb) {
  _0x3b7a94 = _0x3b7a94 || ImageManager.faceWidth;
  _0x497afb = _0x497afb || ImageManager.faceHeight;
  const _0x170d78 = ImageManager.loadSvActor(_0x485a90.battlerName());
  const _0x4f75b3 = _0x170d78.width / ImageManager.svActorHorzCells;
  const _0x25d151 = _0x170d78.height / ImageManager.svActorVertCells;
  if (this.constructor === Window_MenuStatus) {
    this.changePaintOpacity(_0x485a90.isBattleMember());
  }
  const _0x197b48 = _0x485a90.hasStaticSvBattler && _0x485a90.hasStaticSvBattler();
  const _0x2a8988 = _0x197b48 ? _0x170d78.width : _0x4f75b3;
  const _0x227488 = _0x197b48 ? _0x170d78.height : _0x25d151;
  const _0x28e561 = Math.min(0x1, _0x3b7a94 / _0x2a8988, _0x497afb / _0x227488);
  const _0x2ceb3e = _0x28e561 * _0x2a8988;
  const _0x792fce = _0x28e561 * _0x227488;
  const _0x1046b4 = Math.floor(_0x3c32e3 + Math.max(_0x3b7a94 - _0x2ceb3e, 0x0) / 0x2);
  const _0x51c359 = Math.floor(_0x2ec594 + Math.max(_0x497afb - _0x792fce, 0x0) / 0x2);
  this.contents.blt(_0x170d78, 0x0, 0x0, _0x2a8988, _0x227488, _0x1046b4, _0x51c359, _0x2ceb3e, _0x792fce);
  this.changePaintOpacity(true);
};
Window_StatusBase.prototype.drawItemActorMenuImage = function (_0x11424d, _0x5042ed, _0x4407a7, _0x4c00b0, _0x5e60ee) {
  const _0x5172c8 = ImageManager.loadPicture(_0x11424d.getMenuImage());
  _0x4c00b0 = (_0x4c00b0 || ImageManager.faceWidth) - 0x2;
  _0x5e60ee = (_0x5e60ee || ImageManager.faceHeight) - 0x2;
  const _0x23d4f3 = _0x5172c8.width;
  const _0x2fcfdb = _0x5172c8.height;
  const _0x18ff51 = _0x5e60ee - 0x2;
  if (this.constructor === Window_MenuStatus) {
    this.changePaintOpacity(_0x11424d.isBattleMember());
  }
  const _0x3bf370 = Math.min(_0x4c00b0, _0x23d4f3);
  const _0x380d46 = Math.min(_0x5e60ee, _0x2fcfdb);
  const _0x59ce69 = _0x5042ed + 0x1;
  const _0x19c910 = Math.max(_0x4407a7 + 0x1, _0x4407a7 + _0x18ff51 - _0x2fcfdb + 0x3);
  let _0xcda87e = Math.round((_0x23d4f3 - _0x3bf370) / 0x2);
  let _0x1a61a7 = Math.round((_0x2fcfdb - _0x380d46) / 0x2);
  _0xcda87e -= _0x11424d.getMenuImageOffsetX();
  _0x1a61a7 -= _0x11424d.getMenuImageOffsetY();
  if (Imported.VisuMZ_0_CoreEngine) {
    if (VisuMZ.CoreEngine.Settings.QoL.PixelateImageRendering) {}
  }
  this.contents.blt(_0x5172c8, _0xcda87e, _0x1a61a7, _0x3bf370, _0x380d46, _0x59ce69, _0x19c910);
  this.changePaintOpacity(true);
};
Window_Status.prototype.drawActorFace = function (_0xfff565, _0x1ee5e1, _0x12e183, _0x32edf5, _0x16646e) {
  switch (this.graphicType()) {
    case "none":
      break;
    case 'sprite':
      this.drawItemActorSprite(_0xfff565, _0x1ee5e1, _0x12e183, _0x32edf5, _0x16646e);
      break;
    case "svbattler":
      this.drawItemActorSvBattler(_0xfff565, _0x1ee5e1, _0x12e183, _0x32edf5, _0x16646e);
      break;
    default:
      Window_StatusBase.prototype.drawActorFace.call(this, _0xfff565, _0x1ee5e1, _0x12e183, _0x32edf5, _0x16646e);
      break;
  }
};
VisuMZ.MainMenuCore.Window_MenuStatus_selectLast = Window_MenuStatus.prototype.selectLast;
Window_MenuStatus.prototype.selectLast = function () {
  if (VisuMZ.MainMenuCore.Settings.General.StatusSelectLast) {
    VisuMZ.MainMenuCore.Window_MenuStatus_selectLast.call(this);
  } else {
    this.smoothSelect(0x0);
  }
};
VisuMZ.MainMenuCore.Window_MenuStatus_maxItems = Window_MenuStatus.prototype.maxItems;
Window_MenuStatus.prototype.maxItems = function () {
  return this.showOnlyBattleMembers() ? $gameParty.battleMembers().length : VisuMZ.MainMenuCore.Window_MenuStatus_maxItems.call(this);
};
Window_MenuStatus.prototype.showOnlyBattleMembers = function () {
  const _0x1f1203 = VisuMZ.MainMenuCore.Settings.General;
  if (_0x1f1203.ShowReserve === undefined) {
    _0x1f1203.ShowReserve = true;
  }
  const _0x2df3ce = SceneManager._scene;
  if (!_0x1f1203.ShowReserve) {
    if (_0x1f1203.HideMainMenuOnly) {
      return _0x2df3ce.constructor === Scene_Menu;
    }
    return true;
  }
  return false;
};
Window_MenuStatus.prototype.listStyle = function () {
  const _0xc235c4 = SceneManager._scene.constructor;
  return _0xc235c4 === Scene_Menu ? VisuMZ.MainMenuCore.Settings.StatusListStyle : VisuMZ.MainMenuCore.Settings.InnerMenuListStyle;
};
Window_MenuStatus.prototype.numVisibleRows = function () {
  const _0x755ad0 = this.listStyle();
  switch (_0x755ad0) {
    case 'vertical':
    case "portrait":
      return 0x1;
    case "solo":
      return 0x1;
    default:
      return $gameParty.maxBattleMembers();
  }
};
Window_MenuStatus.prototype.maxCols = function () {
  const _0x55f676 = this.listStyle();
  switch (_0x55f676) {
    case "vertical":
    case "portrait":
      return $gameParty.maxBattleMembers();
    default:
      return 0x1;
  }
};
VisuMZ.MainMenuCore.Window_MenuStatus_itemHeight = Window_MenuStatus.prototype.itemHeight;
Window_MenuStatus.prototype.itemHeight = function () {
  const _0x119fc9 = this.listStyle();
  switch (_0x119fc9) {
    case 'vertical':
    case "portrait":
    case "solo":
      return this.innerHeight;
    case 'thin':
      return Window_Selectable.prototype.itemHeight.call(this);
    case "thicker":
      return this.lineHeight() * 0x2 + 0x8;
    default:
      return VisuMZ.MainMenuCore.Window_MenuStatus_itemHeight.call(this);
  }
};
Window_MenuStatus.prototype.drawItem = function (_0x4c9541) {
  this.drawPendingItemBackground(_0x4c9541);
  this.drawItemStatus(_0x4c9541);
};
VisuMZ.MainMenuCore.Window_MenuStatus_drawItemImage = Window_MenuStatus.prototype.drawItemImage;
Window_MenuStatus.prototype.drawActorGraphic = function (_0xf70955, _0x17c026, _0x33d6fd, _0x22a777, _0xf592d1) {
  switch (this.graphicType()) {
    case "none":
      break;
    case "sprite":
      this.drawItemActorSprite(_0xf70955, _0x17c026, _0x33d6fd + 0x1, _0x22a777, _0xf592d1 - 0x2);
      break;
    case "svbattler":
      this.drawItemActorSvBattler(_0xf70955, _0x17c026, _0x33d6fd + 0x1, _0x22a777, _0xf592d1 - 0x2);
      break;
    default:
      this.drawItemActorFace(_0xf70955, _0x17c026, _0x33d6fd, _0x22a777, _0xf592d1);
      break;
  }
};
Window_MenuStatus.prototype.drawItemStatus = function (_0x565a49) {
  this.resetFontSettings();
  const _0x759d53 = this.actor(_0x565a49);
  const _0x2e8e94 = this.itemRect(_0x565a49);
  const _0x5527bc = this.listStyle();
  switch (_0x5527bc) {
    case "vertical":
      this.drawItemStatusVerticalStyle(_0x759d53, _0x2e8e94);
      break;
    case "portrait":
      this.drawItemStatusPortraitStyle(_0x759d53, _0x2e8e94);
      break;
    case "solo":
      this.drawItemStatusSoloStyle(_0x759d53, _0x2e8e94);
      break;
    case "thin":
      this.drawItemStatusThinStyle(_0x759d53, _0x2e8e94);
      break;
    case "thicker":
      this.drawItemStatusThickerStyle(_0x759d53, _0x2e8e94);
      break;
    default:
      this.drawItemStatusDefaultStyle(_0x759d53, _0x2e8e94);
      break;
  }
};
Window_MenuStatus.prototype.drawItemStatusVerticalStyle = function (_0x302435, _0xc36384) {
  VisuMZ.MainMenuCore.Settings.ListStyles.VerticalStyle.call(this, _0x302435, _0xc36384);
};
Window_MenuStatus.prototype.drawItemStatusPortraitStyle = function (_0x23f729, _0x119756) {
  if (_0x23f729.getMenuImage() !== '') {
    const _0x2ff448 = ImageManager.loadPicture(_0x23f729.getMenuImage());
    _0x2ff448.addLoadListener(this.drawItemStatusPortraitStyleOnLoad.bind(this, _0x23f729, _0x119756));
  } else {
    this.drawItemStatusVerticalStyle(_0x23f729, _0x119756);
  }
};
Window_MenuStatus.prototype.drawItemStatusPortraitStyleOnLoad = function (_0x489a0e, _0x567cb1) {
  VisuMZ.MainMenuCore.Settings.ListStyles.PortraitStyle.call(this, _0x489a0e, _0x567cb1);
};
Window_MenuStatus.prototype.drawItemStatusSoloStyle = function (_0x2856e1, _0x2934ab) {
  const _0x15566d = ImageManager.loadPicture(_0x2856e1.getMenuImage());
  _0x15566d.addLoadListener(this.drawItemStatusSoloStyleOnLoad.bind(this, _0x2856e1, _0x2934ab));
};
Window_MenuStatus.prototype.drawItemStatusSoloStyleOnLoad = function (_0x2fab9d, _0x6ba44a) {
  VisuMZ.MainMenuCore.Settings.ListStyles.SoloStyle.call(this, _0x2fab9d, _0x6ba44a);
};
Window_MenuStatus.prototype.drawItemStatusThinStyle = function (_0x21609d, _0x4e7fcd) {
  VisuMZ.MainMenuCore.Settings.ListStyles.ThinStyle.call(this, _0x21609d, _0x4e7fcd);
};
Window_MenuStatus.prototype.drawItemStatusThickerStyle = function (_0x1157ae, _0x548448) {
  VisuMZ.MainMenuCore.Settings.ListStyles.ThickerStyle.call(this, _0x1157ae, _0x548448);
};
Window_MenuStatus.prototype.isExpGaugeDrawn = function () {
  const _0x47a919 = this.listStyle();
  if (["thin", "thicker"].includes(_0x47a919)) {
    return false;
  }
  return Window_StatusBase.prototype.isExpGaugeDrawn.call(this);
};
Window_MenuStatus.prototype.drawItemStatusDefaultStyle = function (_0x4a9d4a, _0x414621) {
  VisuMZ.MainMenuCore.Settings.ListStyles.DefaultStyle.call(this, _0x4a9d4a, _0x414621);
};
Window_SkillStatus.prototype.drawActorFace = function (_0x3a98fa, _0x3427d8, _0x20c8bf, _0x530026, _0x18630a) {
  switch (this.graphicType()) {
    case "none":
      break;
    case "sprite":
      this.drawItemActorSprite(_0x3a98fa, _0x3427d8, _0x20c8bf, _0x530026, _0x18630a);
      break;
    case "svbattler":
      this.drawItemActorSvBattler(_0x3a98fa, _0x3427d8, _0x20c8bf, _0x530026, _0x18630a);
      break;
    default:
      Window_StatusBase.prototype.drawActorFace.call(this, _0x3a98fa, _0x3427d8, _0x20c8bf, _0x530026, _0x18630a);
      break;
  }
};
Window_EquipStatus.prototype.drawActorFace = function (_0x10733f, _0x98714b, _0x26e878, _0xb68029, _0x479b8f) {
  switch (this.graphicType()) {
    case 'none':
      break;
    case "sprite":
      this.drawItemActorSprite(_0x10733f, _0x98714b, _0x26e878, _0xb68029, _0x479b8f);
      break;
    case "svbattler":
      this.drawItemActorSvBattler(_0x10733f, _0x98714b, _0x26e878, _0xb68029, _0x479b8f);
      break;
    default:
      Window_StatusBase.prototype.drawActorFace.call(this, _0x10733f, _0x98714b, _0x26e878, _0xb68029, _0x479b8f);
      break;
  }
};
function Window_ThinGold() {
  this.initialize(...arguments);
}
Window_ThinGold.prototype = Object.create(Window_Gold.prototype);
Window_ThinGold.prototype.constructor = Window_ThinGold;
Window_ThinGold.prototype.itemHeight = function () {
  return this.lineHeight();
};
Window_ThinGold.prototype.colSpacing = function () {
  return Window_Selectable.prototype.colSpacing.call(this);
};
function Window_Playtime() {
  this.initialize(...arguments);
}
Window_Playtime.prototype = Object.create(Window_Selectable.prototype);
Window_Playtime.prototype.constructor = Window_Playtime;
Window_Playtime.prototype.initialize = function (_0x12d0a8) {
  this._playtimeText = $gameSystem.playtimeText();
  this._timer = 0x3c;
  Window_Selectable.prototype.initialize.call(this, _0x12d0a8);
  this.refresh();
};
Window_Playtime.prototype.itemHeight = function () {
  return this.lineHeight();
};
Window_Playtime.prototype.update = function () {
  Window_Selectable.prototype.update.call(this);
  this.updateTimer();
};
Window_Playtime.prototype.updateTimer = function () {
  if (this._timer-- > 0x0) {
    if (this._timer <= 0x0) {
      this.refresh();
    }
  }
};
Window_Playtime.prototype.refresh = function () {
  this._timer = 0x3c;
  const _0x54a7f3 = this.itemLineRect(0x0);
  this.contents.clear();
  this.drawTimeIcon(_0x54a7f3);
  this.drawTimeLabel(_0x54a7f3);
  this.drawPlaytime(_0x54a7f3);
};
Window_Playtime.prototype.resetFontSettings = function () {
  Window_Selectable.prototype.resetFontSettings.call(this);
  this.contents.fontSize = VisuMZ.MainMenuCore.Settings.Playtime.FontSize;
};
Window_Playtime.prototype.drawTimeIcon = function (_0x347f38) {
  if (VisuMZ.MainMenuCore.Settings.Playtime.Icon > 0x0) {
    const _0x1b6e2a = VisuMZ.MainMenuCore.Settings.Playtime.Icon;
    const _0x5518df = _0x347f38.y + (this.lineHeight() - ImageManager.iconHeight) / 0x2;
    this.drawIcon(_0x1b6e2a, _0x347f38.x, _0x5518df);
    const _0x30877e = ImageManager.iconWidth + 0x4;
    _0x347f38.x += _0x30877e;
    _0x347f38.width -= _0x30877e;
  }
};
Window_Playtime.prototype.drawTimeLabel = function (_0x422790) {
  this.resetFontSettings();
  this.changeTextColor(ColorManager.systemColor());
  const _0x4ddff7 = VisuMZ.MainMenuCore.Settings.Playtime.Time;
  this.drawText(_0x4ddff7, _0x422790.x, _0x422790.y, _0x422790.width, 'left');
  this.resetTextColor();
};
Window_Playtime.prototype.drawPlaytime = function (_0x2d99ea) {
  const _0x169610 = $gameSystem.playtimeText();
  this.drawText(_0x169610, _0x2d99ea.x, _0x2d99ea.y, _0x2d99ea.width, "right");
};
function Window_MenuVariables() {
  this.initialize(...arguments);
}
Window_MenuVariables.prototype = Object.create(Window_Selectable.prototype);
Window_MenuVariables.prototype.constructor = Window_MenuVariables;
Window_MenuVariables.prototype.initialize = function (_0x540426) {
  Window_Selectable.prototype.initialize.call(this, _0x540426);
  this._data = VisuMZ.MainMenuCore.Settings.Variable.VarList;
  this.refresh();
};
Window_MenuVariables.prototype.itemHeight = function () {
  return this.lineHeight();
};
Window_MenuVariables.prototype.maxCols = function () {
  const _0x20f508 = SceneManager._scene.commandWindowStyle();
  return _0x20f508 === "default" ? 0x1 : VisuMZ.MainMenuCore.Settings.Variable.VarList.length;
};
Window_MenuVariables.prototype.resetFontSettings = function () {
  Window_Selectable.prototype.resetFontSettings.call(this);
  this.contents.fontSize = VisuMZ.MainMenuCore.Settings.Variable.FontSize;
  this.changeTextColor(ColorManager.systemColor());
};
Window_MenuVariables.prototype.maxItems = function () {
  return this._data.length;
};
Window_MenuVariables.prototype.drawAllItems = function () {
  const _0x2d562d = this.topIndex();
  for (let _0x1378eb = 0x0; _0x1378eb < this.maxVisibleItems(); _0x1378eb++) {
    const _0x2261b6 = _0x2d562d + _0x1378eb;
    if (_0x2261b6 < this.maxItems()) {
      this.drawItemBackground(_0x2261b6);
      this.drawItem(_0x2261b6);
    }
  }
};
Window_MenuVariables.prototype.drawItemBackground = function (_0x3a2f75) {};
Window_MenuVariables.prototype.drawItem = function (_0x3e49d4) {
  const _0x9358a5 = this._data[_0x3e49d4];
  if (_0x9358a5 <= 0x0) {
    return;
  }
  if (!$dataSystem.variables[_0x9358a5]) {
    return;
  }
  const _0x175418 = this.itemLineRect(_0x3e49d4);
  this.resetFontSettings();
  let _0x1f9492 = 0x0;
  let _0x33a320 = $dataSystem.variables[_0x9358a5].trim();
  if (_0x33a320.match(/\\I\[(\d+)\]/i)) {
    _0x1f9492 = Number(RegExp.$1);
    _0x33a320 = _0x33a320.replace(/\\I\[(\d+)\]/i, '').trim();
  }
  if (_0x1f9492 > 0x0) {
    const _0x11d090 = _0x175418.y + (this.lineHeight() - ImageManager.iconHeight) / 0x2;
    this.drawIcon(_0x1f9492, _0x175418.x, _0x11d090);
    const _0x2d8245 = ImageManager.iconWidth + 0x4;
    _0x175418.x += _0x2d8245;
    _0x175418.width -= _0x2d8245;
  }
  this.drawText(_0x33a320, _0x175418.x, _0x175418.y, _0x175418.width, "left");
  this.changeTextColor(ColorManager.normalColor());
  this.drawText($gameVariables.value(_0x9358a5), _0x175418.x, _0x175418.y, _0x175418.width, "right");
};