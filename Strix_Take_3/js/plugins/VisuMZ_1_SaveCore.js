//=============================================================================
// VisuStella MZ - Save Core
// VisuMZ_1_SaveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_SaveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SaveCore = VisuMZ.SaveCore || {};
VisuMZ.SaveCore.version = 1.13;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.13] [SaveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Save_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Save Core plugin adds upon the existing functionality of how saves
 * operate in RPG Maker MZ and how the Save Menu appears in-game. Control over
 * autosaves is also provided by this plugin as well as the ability to make
 * Global Switches and Variables accessible across all game saves (including
 * new games).
 *
 * Features include all (but not limited to) the following:
 * 
 * * Save file technicalities including how filenames are made and or how
 *   forage keys are labeled to distinguish games from one another.
 * * Save types (standard, slot-locked, or single) to change saving to be
 *   suited for each game type.
 * * Save confirmation window added to relay information to player on whether
 *   or not a save has been made successfully.
 * * Global Switches and Variables that span across all saves and new games.
 * * Control over how autosaves handle (their own file, save over existing
 *   files, and/or both).
 * * Plugin Commands that enable/disable autosaves and forcefully activate them
 *   or request them.
 * * Change up how the Save Menu appears with various save styles.
 * * Add descriptions and pictures to the save files.
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
 * Global Switches and Global Variables
 * ============================================================================
 *
 * Global Switches and Global Variables are now added into the game engine via
 * this plugin. Global Switches and Global Variables exist in the same state
 * across all save files. This means if Switch 40 is declared to be a Global
 * Switch and is turned ON, then whether you start up a new game or open a
 * different save file, Switch 40 will be in the ON state. Similar will occur
 * with Global Variables.
 *
 * ---
 *
 * <Global> Switch/Variable Name
 *
 * To declare Global Switches and/or Global Variables, insert <Global> into
 * the Switch/Variable's name. That's all there is to it. Whatever value you
 * change the Global Switch/Variable to after declaring it will be changed
 * across all saves.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <Global>, <JS>, or <Self> simultaneously.
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
 * === Autosave Plugin Commands ===
 * 
 * ---
 *
 * Autosave: Enable/Disable
 * - Enables/disables Autosave on a local (lowest) level.
 * - Requires Database => System 1 => [x] Enable Autosave
 * - This does NOT mean it will change autosaving for other loaded game saves
 *   or new game sessions.
 * - This ONLY applies to the local session for the dev to control whether or
 *   not autosaving will occur at its usual conditions and scenarios.
 *
 *   Enable or Disable?:
 *   - Enable or disable autosave?
 *
 * ---
 *
 * Autosave: (Stage 1) Request
 * - Autosaves the game at current point if enabled.
 * - Requires Database => System 1 => [x] Enable Autosave
 * - Autosave does not go through if it is neither enabled in the database or
 *   in-game through the "Autosave: Enable/Disable" plugin command.
 * - This Plugin Command will not autosave if the player turned off "Autosave"
 *   in the Options Menu.
 *
 * ---
 *
 * Autosave: (Stage 2) Execute
 * - Executes autosaves the game at the current point.
 * - Requires Database => System 1 => [x] Enable Autosave
 * - This will require autosave to be enabled through the database, but it will
 *   ignore the "Autosave: Enable/Disable" plugin command state.
 * - This Plugin Command will not autosave if the player turned off "Autosave"
 *   in the Options Menu.
 *
 * ---
 *
 * Autosave: (Stage 3) Force
 * - Forces autosaves the game at the current point.
 * - Requires Database => System 1 => [x] Enable Autosave
 * - This will require autosave to be enabled through the database, but it will
 *   ignore the "Autosave: Enable/Disable" plugin command state.
 *
 * ---
 *
 * Save: Current Slot
 * - Process the game's current save at the current point.
 * - Must be outside of battle and on the map.
 *
 * ---
 * 
 * === Save Plugin Commands ===
 * 
 * ---
 *
 * Save: Set Description
 * - Set the description text that will appear in the save files.
 *
 *   Text:
 *   - Insert desired save description text here.
 *   - Text codes supported.
 *   - \V[x], \N[x], \P[x] are save local.
 *   - Other text codes will draw data from the currently active game.
 *
 * ---
 *
 * Save: Set Picture
 * - Set the picture that would appear in the save file.
 *
 *   Filename:
 *   - Input the filename here of the desired picture.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Save Settings
 * ============================================================================
 *
 * These are general settings pertaining to saves and the technicalities behind
 * how saves work in your game.
 *
 * ---
 *
 * General
 * 
 *   Save Style:
 *   - Select a save style for the game. Some of these options may alter other
 *     Plugin Parameter settings.
 *   - Standard: Save freely in any slot.
 *   - Slot-Locked: Select one dedicated slot at New Game.
 *   - Single: Only one slot is available for the game.
 * 
 *   Max Save Files:
 *   - Maximum number of save files for the game.
 * 
 *   Autosave Counts?:
 *   - Count the autosave file towards the max count?
 *
 * ---
 *
 * Local Mode
 * 
 *   Local Mode?:
 *   - When running the game on client, use the Local Mode of saving via files
 *     or store saves to forage keys?
 * 
 *   Filename Format:
 *   - Filename format for save files.
 *   - %1 - Save File ID
 * 
 *   Extension Format:
 *   - Filename extension format for save files.
 *   - %1 - Save Name
 *
 * ---
 *
 * Forage Key
 * 
 *   Forage Key Format:
 *   - Forage Key format when saving to memory.
 *   - %1 - Game ID, %2 - Save Name
 * 
 *   Forage Key Test:
 *   - Key used to test if saving a forage key is possible.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Help: Slot-Locked:
 *   - Help description used for initial slot-locked selection.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: On Save Success:
 *   - Code to perform when a save is successful.
 * 
 *   JS: On Save Failure:
 *   - Code to perform when a save has failed.
 * 
 *   JS: On Load Success:
 *   - Code to perform when a load is successful.
 * 
 *   JS: On Load Failure:
 *   - Code to perform when a load has failed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Save Confirm Window Settings
 * ============================================================================
 *
 * The Save Confirmation Window is a new feature added through this plugin.
 * It gives the player visual feedback letting the player know that a save is
 * successful or not.
 *
 * ---
 *
 * General
 * 
 *   Enable Window?:
 *   - Enable the Save Confirmation Window?
 * 
 *   Pop Up Duration:
 *   - How long should the window be open for before closing?
 *   - Insert the time in milliseconds.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions of the Save Confirmation Window.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Pop Up: Save Success:
 *   - Text used for a "Save Success" message popup.
 *   - Text codes are allowed.
 * 
 *   Pop Up: Save Failure:
 *   - Text used for a "Save Failure" message popup.
 *   - Text codes are allowed.
 * 
 *   Pop Up: Load Failure:
 *   - Text used for a "Load Failure" message popup.
 *   - Text codes are allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Autosave Settings
 * ============================================================================
 *
 * These settings adjust how autosaves work in your game project. The settings
 * will encompass the original autosave settings made by RPG Maker MZ as well
 * as new settings added through this plugin.
 *
 * ---
 *
 * General
 * 
 *   Autosave Type:
 *   - Select autosave type.
 *   - Requires Database => System 1 => [x] Enable Autosave
 *   - Autosave File: Dedicated save file for autosaves.
 *   - Current File: Overwrites the current save file.
 *   - Autosave File + Current File: Both of the above.
 *
 * ---
 *
 * Requests
 * 
 *   Requires Save Enable?:
 *   - Autosave requests require Saving to be enabled?
 * 
 *   Request after Battle?:
 *   - Requests an autosave after battle?
 * 
 *   Request on Transfer?:
 *   - Requests an autosave after a map transfer?
 * 
 *   Request on Menu Open?:
 *   - Requests an autosave after opening the main menu?
 * 
 *   Request on Menu Exit?:
 *   - Requests an autosave after exiting the main menu?
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: On Success:
 *   - Code to perform when an autosave is successful.
 * 
 *   JS: On Failure:
 *   - Code to perform when an autosave has failed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Autosave Confirm Window Settings
 * ============================================================================
 *
 * The Autosave Confirmation Window is a new feature added by this plugin to
 * notify the player whenever autosaving occurs.
 *
 * ---
 *
 * General
 * 
 *   Enable Window?:
 *   - Enable the Autoave Confirmation Window?
 * 
 *   Pop Up Duration:
 *   - How long should the window be open for before closing?
 *   - Insert the time in milliseconds.
 * 
 *   Screen Position:
 *   - Where does this window appear on the screen?
 *   - Lower Left
 *   - Lower Center
 *   - Lower Right
 *   - Middle Left
 *   - Middle Center
 *   - Middle Right
 *   - Upper Left
 *   - Upper Center
 *   - Upper Right
 *
 * ---
 *
 * Vocabulary
 * 
 *   Pop Up: Save Success:
 *   - Text used for an "Autosave Success" message popup.
 *   - Text codes are allowed
 * 
 *   Pop Up: Save Failure:
 *   - Text used for an "Autosave Failure" message popup.
 *   - Text codes are allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Autosave Options Settings
 * ============================================================================
 *
 * This plugin adds the "Autosave" option to the Options menu, allowing players
 * to decide if they want autosave enabled or not. This feature can be disabled
 * as well, to better suit games. If the "Autosave" option is turned off by the
 * player, then any Autosave requests and executions.
 *
 * ---
 *
 * Autosave Options
 * 
 *   Add Option?:
 *   - Add the 'Autosave' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
 *
 *   Default Value:
 *   - Determine the default value of this option.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Actor Graphic Settings
 * ============================================================================
 *
 * This Plugin Parameter lets you select which graphic to use for displaying
 * the actor party found inside the save menu.
 *
 * ---
 *
 * Actor Graphic
 * 
 *   None:
 *   - Don't display any actors.
 * 
 *   Face:
 *   - Display the face graphics for the actors.
 * 
 *   Map Sprite:
 *   - Display the sprite graphics for the actors.
 * 
 *   Sideview Battler:
 *   - Display the SV Battler graphics for the actors.
 *   - Note: If you have an existing save made before this plugin was
 *     installed, you may need to save over the existing ones to see the
 *     Sideview Battler graphics.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Save Menu Styles
 * ============================================================================
 *
 * Save Menu Styles affect how the save files themselves appear to the player,
 * as long horizontal lists, vertical columns, small boxes, or a large file.
 *
 * ---
 *
 * Save Menu Styles
 * 
 *   List:
 *   - Save files stretch horizontally across the screen.
 *   - Save files are listed as rows.
 * 
 *   Vertical:
 *   - Save files are stretched vertically across the screen.
 *   - Save files are depicted as columns.
 * 
 *   Box:
 *   - Save files are small boxes shown on the screen.
 *   - Save files are sign in both rows and columns.
 * 
 *   Large:
 *   - Save files take up the whole screen.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Style Settings
 * ============================================================================
 *
 * These settings allow you, the game dev, to manipulate how the save styles
 * appear in-game if they're not to your liking. JavaScript familiarity is a
 * must to adjust them.
 *
 * ---
 *
 * General
 * 
 *   Latest Text:
 *   - Text used to depict latest save file.
 *   - The "NEW!" text will not appear on auto save slots. This is intentional.
 * 
 *   Latest Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Sprite Width:
 *   - Pixel width of map sprites when drawn in the Save Menu.
 * 
 *   SV Battler Width:
 *   - Pixel width of sv battlers when drawn in the Save Menu.
 *
 *   JS: Save Display Info:
 *   - Code that, upon saving, determines which info is quickly stored
 *     for displaying.
 *
 * ---
 *
 * List Style
 * Vertical Style
 * Box Style
 * Large Style
 * 
 *   Rows:
 *   - Number of rows for this style.
 * 
 *   Columns:
 *   - Number of column for this style.
 * 
 *   JS: Draw Contents:
 *   - Code on how to draw the contents for this style.
 * 
 *   JS: Draw File Data:
 *   - Code on how to draw the file data for this style.
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
 * Version 1.13: August 29, 2024
 * * Bug Fixes!
 * ** Fixed a bug where single-mode save games would freeze after executed
 *    event movements made by Events & Movement Core. Fix made by Arisu.
 * ** Fixed a bug where if the main menu is skipped, face graphics won't be
 *    loaded in time for the save or load menu. Fix made by Arisu.
 * ** Fixed a bug where the pop up duration of the autosave confirmation text
 *    was using the pop up duration of the save menu confirmation.
 * 
 * Version 1.12: December 14, 2023
 * * Documentation Update!
 * ** Updated Plugin Command "Autosave: Enable/Disable" description for clarity
 * *** Enables/disables Autosave on a local (lowest) level.
 * ** Added extra text in the Plugin Commands help section for the Command:
 *    "Autosave: Enable/Disable":
 * *** This does NOT mean it will change autosaving for other loaded game saves
 *     or new game sessions.
 * *** This ONLY applies to the local session for the dev to control whether or
 *     not autosaving will occur at its usual conditions and scenarios.
 * 
 * Version 1.11: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where there is not a soft fade in after using the single slot
 *    loading screen from the VisuMZ Save Core. Fix made by Olivia.
 * 
 * Version 1.10: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a rare bug that prevents plugin commands from saving in the current
 *    save slot upon certain types of loading. Fix made by Arisu.
 * 
 * Version 1.09: February 10, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.08: December 16, 2021
 * * Bug Fixes!
 * ** Fixed default Plugin Parameters where the Autosave option was not
 *    properly working without the Options Core. Fix made by Olivia.
 * * Documentation Update!
 * ** Added further documentation on "Plugin Parameters: Style Settings"
 * ** Removal of "Start Enabled?" setting.
 * *** The "NEW!" text will not appear on auto save slots. This is intentional.
 * * Feature Update!
 * ** Plugin Parameter > Auto Save Settings > Start Enabled? is now removed.
 * *** This is due to it going against what RPG Maker MZ is supposed to behave
 *     like, causing potential misunderstandings when other autosave related
 *     features are utilized. Update made by Olivia.
 * 
 * Version 1.07: October 14, 2021
 * * Bug Fixes!
 * ** Fixed bugs caused by Core Engine's digit grouping that would make dates
 *    appear incorrectly. Fix made by Olivia.
 * 
 * Version 1.06: July 16, 2021
 * * Compatibility Update!
 * ** Compatibility update with Party System's max member change to fit a non-
 *    default amount of party members inside of the window. Update by Irina.
 * 
 * Version 1.05: May 14, 2021
 * * Feature Update!
 * ** Confirmation windows now have rounded coordinates to prevent distortions.
 *    Update made by Arisu.
 * 
 * Version 1.04: March 12, 2021
 * * Bug Fixes!
 * ** Fixed a bug where using the Plugin Command to save the current slot would
 *    not reload properly if the audio file BGM was not synched. Fix made by
 *    Arisu.
 * 
 * Version 1.03: November 29, 2020
 * * Bug Fixes!
 * ** Displayed month should now show the correct numeric value.
 *    Fix made by Arisu.
 * 
 * Version 1.02: September 13, 2020
 * * Compatibility Update!
 * ** Better compatibility for SV Actor graphics.
 * * Documentation Update!
 * ** The Plugin Command 'Save: Set Description' now has updated documentation
 *    for the text codes that are parsed on the local level.
 * * Feature Update!
 * ** The Plugin Command 'Save: Set Description' will now parse text code
 *    data for \V[x], \N[x], \P[x] on a local save file level. Feature updated
 *    by Yanfly.
 * 
 * Version 1.01: September 6, 2020
 * * Bug Fixes!
 * ** Disabling confirmation windows no longer cause crashes.
 *    Fix made by Yanfly.
 * ** Plugin Commands for for setting descriptions and save images work despite
 *    save settings found in the database. Fix made by Yanfly.
 * ** Save Core no longer crashes when going to the Save/Load scenes without
 *    the Core Engine enabled.
 * ** Single and Locked save styles no longer crash the game when loading.
 *    Fix made by Olivia.
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
 * @command AutosaveEnable
 * @text Autosave: Enable/Disable
 * @desc Requires Enables/disables Autosave on a local (lowest) level.
 * Requires Database => System 1 => [x] Enable Autosave
 *
 * @arg Enable:eval
 * @text Enable or Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable or disable autosave?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutosaveRequest
 * @text Autosave: (Stage 1) Request
 * @desc Autosaves the game at current point if enabled.
 * Requires Database => System 1 => [x] Enable Autosave
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutosaveExecute
 * @text Autosave: (Stage 2) Execute
 * @desc Executes autosaves the game at the current point.
 * Requires Database => System 1 => [x] Enable Autosave
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutosaveForce
 * @text Autosave: (Stage 3) Force
 * @desc Force autosaves the game at the current point.
 * Requires Database => System 1 => [x] Enable Autosave
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Save
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SaveCurrentSlot
 * @text Save: Current Slot
 * @desc Process the game's current save at the current point.
 * Must be outside of battle and on the map.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SaveDescription
 * @text Save: Set Description
 * @desc Set the description text that will appear in the save files.
 *
 * @arg Text:str
 * @text Text
 * @desc Insert desired save description text here. 
 * Text codes supported. \V[x], \N[x], \P[x] are save local.
 * @default Text
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SavePicture
 * @text Save: Set Picture
 * @desc Set the picture that would appear in the save file.
 *
 * @arg Filename:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc Input the filename here of the desired picture.
 * @default 
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
 * @param SaveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Save:struct
 * @text Save Settings
 * @type struct<Save>
 * @desc General save settings pertaining to the game.
 * @default {"General":"","SaveStyle:str":"standard","MaxSaveFiles:num":"20","AutosaveMaxCount:eval":"false","LocalMode":"","LocalMode:eval":"true","FilenameFmt:str":"file%1","ExtensionFmt:str":"%1.rmmzsave","ForageKey":"","KeyFmt:str":"rmmzsave.%1.%2","TestKey:str":"rmmzsave.test","Vocabulary":"","VocabLockedSaveSlot:str":"Pick a file to start a new game.","JavaScript":"","OnSaveSuccessJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\"","OnSaveFailureJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\"","OnLoadSuccessJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\"","OnLoadFailureJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\""}
 *
 * @param SaveConfirm:struct
 * @text Confirm Window
 * @parent Save:struct
 * @type struct<SaveConfirm>
 * @desc Settings regarding the Save Confirmation Window.
 * @default {"General":"","Enable:eval":"true","Duration:num":"1000","ConfirmRect:func":"\"const width = Graphics.boxWidth / 2;\\nconst height = this.calcWindowHeight(1, false);\\nconst x = (Graphics.width - width) / 2;\\nconst y = (Graphics.height - height) / 2;\\nreturn new Rectangle(x, y, width, height);\"","Vocabulary":"","VocabSaveSuccess:str":"Save Successful!","VocabSaveFailure:str":"Could not save!","VocabLoadFailure:str":"Could not load save file!"}
 *
 * @param Autosave:struct
 * @text Autoave Settings
 * @type struct<Autosave>
 * @desc Game settings related to autosave.
 * @default {"General":"","AutosaveType:str":"file0","StartEnabled:eval":"true","Requests":"","RequestsRequireSaveEnable:eval":"true","AfterBattle:eval":"true","AfterTransfer:eval":"true","AfterMenuCall:eval":"true","AfterExitMenu:eval":"true","JavaScript":"","OnAutosaveSuccessJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\"","OnAutosaveFailureJS:func":"\"// Declare Constants\\nconst scene = this;\\n\\n// Actions\\n\""}
 *
 * @param AutosaveConfirm:struct
 * @text Confirm Window
 * @parent Autosave:struct
 * @type struct<AutosaveConfirm>
 * @desc Settings regarding the Autosave Confirmation Window.
 * @default {"General":"","Enable:eval":"true","Duration:num":"1000","ScreenPosition:str":"lower right","Vocabulary":"","VocabAutosaveSuccess:str":"\\I[193]Autosaved!","VocabAutosaveFailure:str":"\\I[194]Autosave failed!"}
 *
 * @param AutosaveOption:struct
 * @text Options Settings
 * @parent Autosave:struct
 * @type struct<AutosaveOption>
 * @desc Options Menu settings regarding Autosave.
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Autosave","Default:eval":"true"}
 *
 * @param StyleBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ActorGraphic:str
 * @text Actor Graphic
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler
 * @value svbattler
 * @desc Choose how the actor graphics appear in save menus.
 * @default face
 *
 * @param SaveMenuStyle:str
 * @text Save Menu Style
 * @type select
 * @option List
 * @value list
 * @option Vertical
 * @value vertical
 * @option Box
 * @value box
 * @option Large
 * @value large
 * @desc Choose what kind of style to use for the Save Menu.
 * @default box
 *
 * @param SaveMenu:struct
 * @text Style Settings
 * @parent SaveMenuStyle:str
 * @type struct<SaveMenu>
 * @desc Settings regarding the individual Save Menu styles.
 * @default {"General":"","LatestText:str":"NEW!","LatestColor:str":"#f49ac1","SpriteWidth:num":"48","SvBattlerWidth:num":"64","MakeSavefileInfoJS:func":"\"// Declare Constants\\nconst info = arguments[0];\\n\\n// Store Displayed Save Data\\ninfo.gold = $gameParty.gold();\\ninfo.svbattlers = $gameParty.svbattlersForSaveFile();\\ninfo.description = $gameSystem.getSaveDescription() || '';\\ninfo.picture = $gameSystem.getSavePicture() || '';\\n\\n// Return Save Info\\nreturn info;\"","List":"","ListRows:num":"4","ListCols:num":"1","ListContentsJS:func":"\"// Declare Variables\\nconst info = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\n\\n// Draw Actors\\nconst minimumScale = true;\\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\\nlet ch = rect.height;\\nif (this.actorStyle() === 'sprite') {\\n    ch -= lineHeight - 8;\\n} else if (this.actorStyle() === 'svbattler') {\\n    ch -= lineHeight - 12;\\n}\\nthis.drawActors(info, rect.x + padding, rect.y, rect.width - padding * 2, ch);\\n\\n// Draw Gradients\\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\\nif (info.gold || info.description) {\\n    const gy = rect.y + rect.height - lineHeight;\\n    this.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight, c1, c2, true);\\n}\\n\\n// Draw Data\\nthis.contents.fontSize = 18;\\ny = rect.y;\\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'right');\\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'center');\\ny = rect.y + rect.height - lineHeight;\\nif (info.gold) {\\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\\n}\\n\\n// Draw Description\\ny = rect.y + rect.height - lineHeight;\\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');\"","ListFileDataJS:func":"\"// Declare Constants\\nconst savefileId = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst y2 = rect.y + ((rect.height - lineHeight) / 2);\\n\\n// Draw File Data\\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\\nthis.drawLatestMarker(savefileId, rect.x + padding, y2);\"","Vertical":"","VertRows:num":"1","VertCols:num":"3","VertContentsJS:func":"\"// Declare Variables\\nconst info = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\n\\n// Draw Actors\\nconst minimumScale = true;\\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\\nconst ch = this.actorStyle() === 'face' ? ImageManager.faceHeight : ImageManager.saveMenuSvBattlerWidth;\\nconst cy = rect.y + ((rect.height - ch) / 2);\\nthis.drawActors(info, rect.x + padding, cy, rect.width - padding * 2, ch);\\n\\n// Draw Gradients\\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\\nconst gy = rect.y + rect.height - lineHeight * 2;\\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight * 2, c1, c2, true);\\n\\n// Draw Description\\ny = rect.y + lineHeight * 2;\\nthis.setWordWrap(true);\\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');\\nthis.resetWordWrap(false);\\n\\n// Draw Data\\nthis.contents.fontSize = 18;\\ny = rect.y + rect.height - lineHeight;\\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'center');\\ny -= lineHeight;\\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'center');\\nif (info.gold) {\\n    y -= lineHeight;\\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\\n}\"","VertFileDataJS:func":"\"// Declare Constants\\nconst savefileId = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\n\\n// Draw File Data\\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\\nthis.drawLatestMarker(savefileId, x2, rect.y);\"","Box":"","BoxRows:num":"2","BoxCols:num":"3","BoxContentsJS:func":"\"// Declare Variables\\nconst info = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\n\\n// Draw Actors\\nconst minimumScale = false;\\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\\nconst rh = rect.height - lineHeight * 3;\\nconst ch = ImageManager.faceHeight;\\nconst cy = rect.y + ((rh - ch) / 2) + lineHeight;\\nthis.drawActors(info, rect.x + 1, cy, rect.width - 2, ch);\\n\\n// Draw Gradients\\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\\nconst gy = rect.y + rect.height - lineHeight * 2;\\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight * 2, c1, c2, true);\\n\\n// Draw Data\\nthis.contents.fontSize = 18;\\ny = rect.y + lineHeight;\\nthis.contents.gradientFillRect(rect.x, y, rect.width, lineHeight, c2, c1, false);\\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'right');\\ny += lineHeight;\\nconst hw = rect.width / 2;\\nthis.contents.gradientFillRect(rect.x + hw, y, hw, lineHeight, c2, c1, false);\\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'right');\\nif (info.gold) {\\n    // Ignore drawing gold in this style\\n    // y = rect.y + rect.height - lineHeight * 3;\\n    // this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\\n}\\n\\n// Draw Description\\ny = rect.y + rect.height - lineHeight * 2;\\nthis.setWordWrap(true);\\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');\\nthis.resetWordWrap(false);\"","BoxFileDataJS:func":"\"// Declare Constants\\nconst savefileId = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\n\\n// Draw File Data\\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\\nthis.drawLatestMarker(savefileId, x2, rect.y);\"","Large":"","LargeRows:num":"1","LargeCols:num":"1","LargeContentsJS:func":"\"// Declare Variables\\nconst info = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\n\\n// Draw Actors\\nconst minimumScale = false;\\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\\nconst ch = this.actorStyle() === 'face' ? ImageManager.faceHeight : ImageManager.saveMenuSvBattlerWidth;\\nconst cy = rect.y + ((rect.height - ch) / 2);\\nthis.drawActors(info, rect.x + padding, cy, rect.width - padding * 2, ch);\\n\\n// Draw Gradients\\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\\nconst gy = rect.y + rect.height - lineHeight;\\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight, c1, c2, true);\\n\\n// Draw Description\\ny = rect.y + lineHeight * 1.5;\\nthis.setWordWrap(true);\\nthis.drawDescription(info, rect.x + padding * 4, y, rect.width - padding * 8, 'left');\\nthis.resetWordWrap(false);\\n\\n// Draw Data\\nthis.contents.fontSize = 18;\\nthis.drawTimestamp(info, rect.x + padding, rect.y, rect.width - padding * 2, 'center');\\ny = rect.y + rect.height - lineHeight;\\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'center');\\nif (info.gold) {\\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\\n}\"","LargeFileDataJS:func":"\"// Declare Constants\\nconst savefileId = arguments[0];\\nconst rect = arguments[1];\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\n\\n// Draw File Data\\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\\nthis.drawLatestMarker(savefileId, x2, rect.y);\""}
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
 * General Save Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Save:
 *
 * @param General
 *
 * @param SaveStyle:str
 * @text Save Style
 * @parent General
 * @type select
 * @option Standard: Save freely in any slot.
 * @value standard
 * @option Slot-Locked: Select one dedicated slot at New Game.
 * @value locked
 * @option Single: Only one slot is available for the game.
 * @value single
 * @desc Select a save style for the game. Some of these options
 * may alter other Plugin Parameter settings.
 * @default standard
 *
 * @param MaxSaveFiles:num
 * @text Max Save Files
 * @parent General
 * @desc Maximum number of save files for the game.
 * @default 20
 *
 * @param AutosaveMaxCount:eval
 * @text Autosave Counts?
 * @parent General
 * @type boolean
 * @on Counts Towards Max
 * @off Doesn't Count
 * @desc Count the autosave file towards the max count?
 * @default false
 *
 * @param LocalMode
 * @text Local Mode
 *
 * @param LocalMode:eval
 * @text Local Mode?
 * @parent LocalMode
 * @type boolean
 * @on Local File
 * @off Forage Key
 * @desc When running the game on client, use the Local Mode of
 * saving via files or store saves to forage keys?
 * @default true
 *
 * @param FilenameFmt:str
 * @text Filename Format
 * @parent LocalMode
 * @desc Filename format for save files.
 * %1 - Save File ID
 * @default file%1
 *
 * @param ExtensionFmt:str
 * @text Extension Format
 * @parent LocalMode
 * @desc Filename extension format for save files.
 * %1 - Save Name
 * @default %1.rmmzsave
 *
 * @param ForageKey
 * @text Forage Key
 *
 * @param KeyFmt:str
 * @text Forage Key Format
 * @parent ForageKey
 * @desc Forage Key format when saving to memory.
 * %1 - Game ID, %2 - Save Name
 * @default rmmzsave.%1.%2
 *
 * @param TestKey:str
 * @text Forage Key Test
 * @parent ForageKey
 * @desc Key used to test if saving a forage key is possible.
 * @default rmmzsave.test
 *
 * @param Vocabulary
 *
 * @param VocabLockedSaveSlot:str
 * @text Help: Slot-Locked
 * @parent Vocabulary
 * @desc Help description used for initial slot-locked selection.
 * @default Pick a file to start a new game.
 *
 * @param JavaScript
 *
 * @param OnSaveSuccessJS:func
 * @text JS: On Save Success
 * @parent JavaScript
 * @type note
 * @desc Code to perform when a save is successful.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 * @param OnSaveFailureJS:func
 * @text JS: On Save Failure
 * @parent JavaScript
 * @type note
 * @desc Code to perform when a save has failed.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 * @param OnLoadSuccessJS:func
 * @text JS: On Load Success
 * @parent JavaScript
 * @type note
 * @desc Code to perform when a load is successful.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 * @param OnLoadFailureJS:func
 * @text JS: On Load Failure
 * @parent JavaScript
 * @type note
 * @desc Code to perform when a load has failed.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Save Confirm Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveConfirm:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable Window?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Enable the Save Confirmation Window?
 * @default true
 *
 * @param Duration:num
 * @text Pop Up Duration
 * @parent General
 * @type number
 * @min 1
 * @desc How long should the window be open for before closing?
 * Insert the time in milliseconds.
 * @default 1000
 *
 * @param ConfirmRect:func
 * @text JS: X, Y, W, H
 * @parent General
 * @type note
 * @desc Code used to determine the dimensions of the 
 * Save Confirmation Window.
 * @default "const width = Graphics.boxWidth / 2;\nconst height = this.calcWindowHeight(1, false);\nconst x = (Graphics.width - width) / 2;\nconst y = (Graphics.height - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param Vocabulary
 *
 * @param VocabSaveSuccess:str
 * @text Pop Up: Save Success
 * @parent Vocabulary
 * @desc Text used for a "Save Success" message popup.
 * Text codes are allowed.
 * @default Save Successful!
 *
 * @param VocabSaveFailure:str
 * @text Pop Up: Save Failure
 * @parent Vocabulary
 * @desc Text used for a "Save Failure" message popup.
 * Text codes are allowed.
 * @default Could not save!
 *
 * @param VocabLoadFailure:str
 * @text Pop Up: Load Failure
 * @parent Vocabulary
 * @desc Text used for a "Load Failure" message popup.
 * Text codes are allowed.
 * @default Could not load save file!
 *
 */
/* ----------------------------------------------------------------------------
 * Autosave Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Autosave:
 *
 * @param General
 *
 * @param AutosaveType:str
 * @text Autosave Type
 * @parent General
 * @type select
 * @option Autosave File: Dedicated file for autosaves.
 * @value file0
 * @option Current File: Overwrites the current save file.
 * @value current
 * @option Autosave File + Current File: Both of the above.
 * @value both
 * @desc Select autosave type.
 * Requires Database => System 1 => [x] Enable Autosave
 * @default file0
 *
 * @param Requests
 *
 * @param RequestsRequireSaveEnable:eval
 * @text Requires Save Enable?
 * @parent Requests
 * @type boolean
 * @on Requires Save Enable
 * @off Doesn't Require
 * @desc Autosave requests require Saving to be enabled?
 * @default true
 *
 * @param AfterBattle:eval
 * @text Request after Battle?
 * @parent Requests
 * @type boolean
 * @on Autosave
 * @off Don't
 * @desc Requests an autosave after battle?
 * @default true
 *
 * @param AfterTransfer:eval
 * @text Request on Transfer?
 * @parent Requests
 * @type boolean
 * @on Autosave
 * @off Don't
 * @desc Requests an autosave after a map transfer?
 * @default true
 *
 * @param AfterMenuCall:eval
 * @text Request on Menu Open?
 * @parent Requests
 * @type boolean
 * @on Autosave
 * @off Don't
 * @desc Requests an autosave after opening the main menu?
 * @default true
 *
 * @param AfterExitMenu:eval
 * @text Request on Menu Exit?
 * @parent Requests
 * @type boolean
 * @on Autosave
 * @off Don't
 * @desc Requests an autosave after exiting the main menu?
 * @default true
 *
 * @param JavaScript
 *
 * @param OnAutosaveSuccessJS:func
 * @text JS: On Success
 * @parent JavaScript
 * @type note
 * @desc Code to perform when an autosave is successful.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 * @param OnAutosaveFailureJS:func
 * @text JS: On Failure
 * @parent JavaScript
 * @type note
 * @desc Code to perform when an autosave has failed.
 * @default "// Declare Constants\nconst scene = this;\n\n// Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Autosave Confirm Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutosaveConfirm:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable Window?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Enable the Autoave Confirmation Window?
 * @default true
 *
 * @param Duration:num
 * @text Pop Up Duration
 * @parent General
 * @type number
 * @min 1
 * @desc How long should the window be open for before closing?
 * Insert the time in milliseconds.
 * @default 1000
 *
 * @param ScreenPosition:str
 * @text Screen Position
 * @parent General
 * @type select
 * @option Lower Left
 * @value lower left
 * @option Lower Center
 * @value lower center
 * @option Lower Right
 * @value lower right
 * @option Middle Left
 * @value middle left
 * @option Middle Center
 * @value middle center
 * @option Middle Right
 * @value middle right
 * @option Upper Left
 * @value upper left
 * @option Upper Center
 * @value upper center
 * @option Upper Right
 * @value upper right
 * @desc Where does this window appear on the screen?
 * @default lower right
 *
 * @param Vocabulary
 *
 * @param VocabAutosaveSuccess:str
 * @text Pop Up: Save Success
 * @parent Vocabulary
 * @desc Text used for an "Autosave Success" message popup.
 * Text codes are allowed.
 * @default \I[193]Autosaved!
 *
 * @param VocabAutosaveFailure:str
 * @text Pop Up: Save Failure
 * @parent Vocabulary
 * @desc Text used for an "Autosave Failure" message popup.
 * Text codes are allowed.
 * @default \I[194]Autosave failed!
 *
 */
/* ----------------------------------------------------------------------------
 * Autosave Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutosaveOption:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Autosave' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @desc Command name of the option.
 * @default Autosave
 *
 * @param Default:eval
 * @text Default Value
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Determine the default value of this option.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Save Menu Style Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveMenu:
 *
 * @param General
 *
 * @param LatestText:str
 * @text Latest Text
 * @parent General
 * @desc Text used to depict latest save file.
 * @default NEW!
 *
 * @param LatestColor:str
 * @text Latest Color
 * @parent General
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #f49ac1
 *
 * @param SpriteWidth:num
 * @text Sprite Width
 * @parent General
 * @type number
 * @desc Pixel width of map sprites when drawn in the Save Menu.
 * @default 48
 *
 * @param SvBattlerWidth:num
 * @text SV Battler Width
 * @parent General
 * @type number
 * @desc Pixel width of sv battlers when drawn in the Save Menu.
 * @default 64
 *
 * @param MakeSavefileInfoJS:func
 * @text JS: Save Display Info
 * @parent General
 * @type note
 * @desc Code that, upon saving, determines which info is quickly stored for displaying.
 * @default "// Declare Constants\nconst info = arguments[0];\n\n// Store Displayed Save Data\ninfo.gold = $gameParty.gold();\ninfo.svbattlers = $gameParty.svbattlersForSaveFile();\ninfo.description = $gameSystem.getSaveDescription() || '';\ninfo.picture = $gameSystem.getSavePicture() || '';\n\n// Return Save Info\nreturn info;"
 *
 * @param List
 * @text List Style
 *
 * @param ListRows:num
 * @text Rows
 * @parent List
 * @type number
 * @min 1
 * @desc Number of rows for this style.
 * @default 4
 *
 * @param ListCols:num
 * @text Columns
 * @parent List
 * @type number
 * @min 1
 * @desc Number of column for this style.
 * @default 1
 *
 * @param ListContentsJS:func
 * @text JS: Draw Contents
 * @parent List
 * @type note
 * @desc Code on how to draw the contents for this style.
 * @default "// Declare Variables\nconst info = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\n\n// Draw Actors\nconst minimumScale = true;\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\nlet ch = rect.height;\nif (this.actorStyle() === 'sprite') {\n    ch -= lineHeight - 8;\n} else if (this.actorStyle() === 'svbattler') {\n    ch -= lineHeight - 12;\n}\nthis.drawActors(info, rect.x + padding, rect.y, rect.width - padding * 2, ch);\n\n// Draw Gradients\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\nif (info.gold || info.description) {\n    const gy = rect.y + rect.height - lineHeight;\n    this.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight, c1, c2, true);\n}\n\n// Draw Data\nthis.contents.fontSize = 18;\ny = rect.y;\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'right');\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'center');\ny = rect.y + rect.height - lineHeight;\nif (info.gold) {\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\n}\n\n// Draw Description\ny = rect.y + rect.height - lineHeight;\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');"
 *
 * @param ListFileDataJS:func
 * @text JS: Draw File Data
 * @parent List
 * @type note
 * @desc Code on how to draw the file data for this style.
 * @default "// Declare Constants\nconst savefileId = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst y2 = rect.y + ((rect.height - lineHeight) / 2);\n\n// Draw File Data\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\nthis.drawLatestMarker(savefileId, rect.x + padding, y2);"
 *
 * @param Vertical
 * @text Vertical Style
 *
 * @param VertRows:num
 * @text Rows
 * @parent Vertical
 * @type number
 * @min 1
 * @desc Number of rows for this style.
 * @default 1
 *
 * @param VertCols:num
 * @text Columns
 * @parent Vertical
 * @type number
 * @min 1
 * @desc Number of column for this style.
 * @default 3
 *
 * @param VertContentsJS:func
 * @text JS: Draw Contents
 * @parent Vertical
 * @type note
 * @desc Code on how to draw the contents for this style.
 * @default "// Declare Variables\nconst info = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\n\n// Draw Actors\nconst minimumScale = true;\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\nconst ch = this.actorStyle() === 'face' ? ImageManager.faceHeight : ImageManager.saveMenuSvBattlerWidth;\nconst cy = rect.y + ((rect.height - ch) / 2);\nthis.drawActors(info, rect.x + padding, cy, rect.width - padding * 2, ch);\n\n// Draw Gradients\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\nconst gy = rect.y + rect.height - lineHeight * 2;\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight * 2, c1, c2, true);\n\n// Draw Description\ny = rect.y + lineHeight * 2;\nthis.setWordWrap(true);\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');\nthis.resetWordWrap(false);\n\n// Draw Data\nthis.contents.fontSize = 18;\ny = rect.y + rect.height - lineHeight;\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'center');\ny -= lineHeight;\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'center');\nif (info.gold) {\n    y -= lineHeight;\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\n}"
 *
 * @param VertFileDataJS:func
 * @text JS: Draw File Data
 * @parent Vertical
 * @type note
 * @desc Code on how to draw the file data for this style.
 * @default "// Declare Constants\nconst savefileId = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\n\n// Draw File Data\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\nthis.drawLatestMarker(savefileId, x2, rect.y);"
 *
 * @param Box
 * @text Box Style
 *
 * @param BoxRows:num
 * @text Rows
 * @parent Box
 * @type number
 * @min 1
 * @desc Number of rows for this style.
 * @default 2
 *
 * @param BoxCols:num
 * @text Columns
 * @parent Box
 * @type number
 * @min 1
 * @desc Number of column for this style.
 * @default 3
 *
 * @param BoxContentsJS:func
 * @text JS: Draw Contents
 * @parent Box
 * @type note
 * @desc Code on how to draw the contents for this style.
 * @default "// Declare Variables\nconst info = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\n\n// Draw Actors\nconst minimumScale = false;\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\nconst rh = rect.height - lineHeight * 3;\nconst ch = ImageManager.faceHeight;\nconst cy = rect.y + ((rh - ch) / 2) + lineHeight;\nthis.drawActors(info, rect.x + 1, cy, rect.width - 2, ch);\n\n// Draw Gradients\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\nconst gy = rect.y + rect.height - lineHeight * 2;\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight * 2, c1, c2, true);\n\n// Draw Data\nthis.contents.fontSize = 18;\ny = rect.y + lineHeight;\nthis.contents.gradientFillRect(rect.x, y, rect.width, lineHeight, c2, c1, false);\nthis.drawTimestamp(info, rect.x + padding, y, rect.width - padding * 2, 'right');\ny += lineHeight;\nconst hw = rect.width / 2;\nthis.contents.gradientFillRect(rect.x + hw, y, hw, lineHeight, c2, c1, false);\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'right');\nif (info.gold) {\n    // Ignore drawing gold in this style\n    // y = rect.y + rect.height - lineHeight * 3;\n    // this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\n}\n\n// Draw Description\ny = rect.y + rect.height - lineHeight * 2;\nthis.setWordWrap(true);\nthis.drawDescription(info, rect.x + padding, y, rect.width - padding * 2, 'left');\nthis.resetWordWrap(false);"
 *
 * @param BoxFileDataJS:func
 * @text JS: Draw File Data
 * @parent Box
 * @type note
 * @desc Code on how to draw the file data for this style.
 * @default "// Declare Constants\nconst savefileId = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\n\n// Draw File Data\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\nthis.drawLatestMarker(savefileId, x2, rect.y);"
 *
 * @param Large
 * @text Large Style
 *
 * @param LargeRows:num
 * @text Rows
 * @parent Large
 * @type number
 * @min 1
 * @desc Number of rows for this style.
 * @default 1
 *
 * @param LargeCols:num
 * @text Columns
 * @parent Large
 * @type number
 * @min 1
 * @desc Number of column for this style.
 * @default 1
 *
 * @param LargeContentsJS:func
 * @text JS: Draw Contents
 * @parent Large
 * @type note
 * @desc Code on how to draw the contents for this style.
 * @default "// Declare Variables\nconst info = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\n\n// Draw Actors\nconst minimumScale = false;\nthis.drawCenteredPicture(info.picture, rect.x, rect.y, rect.width, rect.height, minimumScale);\nconst ch = this.actorStyle() === 'face' ? ImageManager.faceHeight : ImageManager.saveMenuSvBattlerWidth;\nconst cy = rect.y + ((rect.height - ch) / 2);\nthis.drawActors(info, rect.x + padding, cy, rect.width - padding * 2, ch);\n\n// Draw Gradients\nthis.contents.gradientFillRect(rect.x, rect.y, rect.width, lineHeight, c2, c1, true);\nconst gy = rect.y + rect.height - lineHeight;\nthis.contents.gradientFillRect(rect.x, gy, rect.width, lineHeight, c1, c2, true);\n\n// Draw Description\ny = rect.y + lineHeight * 1.5;\nthis.setWordWrap(true);\nthis.drawDescription(info, rect.x + padding * 4, y, rect.width - padding * 8, 'left');\nthis.resetWordWrap(false);\n\n// Draw Data\nthis.contents.fontSize = 18;\nthis.drawTimestamp(info, rect.x + padding, rect.y, rect.width - padding * 2, 'center');\ny = rect.y + rect.height - lineHeight;\nthis.drawPlaytime(info, rect.x + padding, y, rect.width - padding * 2, 'center');\nif (info.gold) {\n    this.drawCurrency(info, rect.x + padding, y, rect.width - padding * 2);\n}"
 *
 * @param LargeFileDataJS:func
 * @text JS: Draw File Data
 * @parent Large
 * @type note
 * @desc Code on how to draw the file data for this style.
 * @default "// Declare Constants\nconst savefileId = arguments[0];\nconst rect = arguments[1];\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\n\n// Draw File Data\nthis.drawTitle(savefileId, rect.x + padding, rect.y);\nconst x2 = rect.x + rect.width - padding - this.textWidth(TextManager.latestSave);\nthis.drawLatestMarker(savefileId, x2, rect.y);"
 *
 */
//=============================================================================

var tier = tier || 0x0;
var dependencies = [];
var pluginData = $plugins.filter(function (_0x19da97) {
  return _0x19da97.status && _0x19da97.description.includes("[SaveCore]");
})[0x0];
VisuMZ.SaveCore.Settings = VisuMZ.SaveCore.Settings || {};
VisuMZ.ConvertParams = function (_0x6e0d9d, _0x23453d) {
  for (const _0x3f0713 in _0x23453d) {
    if (_0x3f0713.match(/(.*):(.*)/i)) {
      const _0x3fd97f = String(RegExp.$1);
      const _0x3d1679 = String(RegExp.$2).toUpperCase().trim();
      let _0x5446c7;
      let _0x48f1ac;
      let _0x1c8d41;
      switch (_0x3d1679) {
        case 'NUM':
          _0x5446c7 = _0x23453d[_0x3f0713] !== '' ? Number(_0x23453d[_0x3f0713]) : 0x0;
          break;
        case "ARRAYNUM":
          _0x48f1ac = _0x23453d[_0x3f0713] !== '' ? JSON.parse(_0x23453d[_0x3f0713]) : [];
          _0x5446c7 = _0x48f1ac.map(_0x55b7b9 => Number(_0x55b7b9));
          break;
        case "EVAL":
          _0x5446c7 = _0x23453d[_0x3f0713] !== '' ? eval(_0x23453d[_0x3f0713]) : null;
          break;
        case 'ARRAYEVAL':
          _0x48f1ac = _0x23453d[_0x3f0713] !== '' ? JSON.parse(_0x23453d[_0x3f0713]) : [];
          _0x5446c7 = _0x48f1ac.map(_0x5055a8 => eval(_0x5055a8));
          break;
        case "JSON":
          _0x5446c7 = _0x23453d[_0x3f0713] !== '' ? JSON.parse(_0x23453d[_0x3f0713]) : '';
          break;
        case "ARRAYJSON":
          _0x48f1ac = _0x23453d[_0x3f0713] !== '' ? JSON.parse(_0x23453d[_0x3f0713]) : [];
          _0x5446c7 = _0x48f1ac.map(_0x383aac => JSON.parse(_0x383aac));
          break;
        case "FUNC":
          _0x5446c7 = _0x23453d[_0x3f0713] !== '' ? new Function(JSON.parse(_0x23453d[_0x3f0713])) : new Function("return 0");
          break;
        case "ARRAYFUNC":
          _0x48f1ac = _0x23453d[_0x3f0713] !== '' ? JSON.parse(_0x23453d[_0x3f0713]) : [];
          _0x5446c7 = _0x48f1ac.map(_0x3b3fc1 => new Function(JSON.parse(_0x3b3fc1)));
          break;
        case "STR":
          _0x5446c7 = _0x23453d[_0x3f0713] !== '' ? String(_0x23453d[_0x3f0713]) : '';
          break;
        case "ARRAYSTR":
          _0x48f1ac = _0x23453d[_0x3f0713] !== '' ? JSON.parse(_0x23453d[_0x3f0713]) : [];
          _0x5446c7 = _0x48f1ac.map(_0x1abed5 => String(_0x1abed5));
          break;
        case "STRUCT":
          _0x1c8d41 = _0x23453d[_0x3f0713] !== '' ? JSON.parse(_0x23453d[_0x3f0713]) : {};
          _0x6e0d9d[_0x3fd97f] = {};
          VisuMZ.ConvertParams(_0x6e0d9d[_0x3fd97f], _0x1c8d41);
          continue;
        case "ARRAYSTRUCT":
          _0x48f1ac = _0x23453d[_0x3f0713] !== '' ? JSON.parse(_0x23453d[_0x3f0713]) : [];
          _0x5446c7 = _0x48f1ac.map(_0x27c16a => VisuMZ.ConvertParams({}, JSON.parse(_0x27c16a)));
          break;
        default:
          continue;
      }
      _0x6e0d9d[_0x3fd97f] = _0x5446c7;
    }
  }
  return _0x6e0d9d;
};
(_0x5c6aea => {
  const _0x5a4c0e = _0x5c6aea.name;
  for (const _0x155e6f of dependencies) {
    if (!Imported[_0x155e6f]) {
      alert("%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.".format(_0x5a4c0e, _0x155e6f));
      SceneManager.exit();
      break;
    }
  }
  const _0x128ef6 = _0x5c6aea.description;
  if (_0x128ef6.match(/\[Version[ ](.*?)\]/i)) {
    const _0x322019 = Number(RegExp.$1);
    if (_0x322019 !== VisuMZ.SaveCore.version) {
      alert("%1's version does not match plugin's. Please update it in the Plugin Manager.".format(_0x5a4c0e, _0x322019));
      SceneManager.exit();
    }
  }
  if (_0x128ef6.match(/\[Tier[ ](\d+)\]/i)) {
    const _0x356227 = Number(RegExp.$1);
    if (_0x356227 < tier) {
      alert("%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.".format(_0x5a4c0e, _0x356227, tier));
      SceneManager.exit();
    } else {
      tier = Math.max(_0x356227, tier);
    }
  }
  VisuMZ.ConvertParams(VisuMZ.SaveCore.Settings, _0x5c6aea.parameters);
})(pluginData);
PluginManager.registerCommand(pluginData.name, "AutosaveEnable", _0x3c29e2 => {
  if (!DataManager.isAutosaveCompatible()) {
    return;
  }
  VisuMZ.ConvertParams(_0x3c29e2, _0x3c29e2);
  if ($gameSystem) {
    $gameSystem.enableAutosave(_0x3c29e2.Enable);
  }
});
PluginManager.registerCommand(pluginData.name, "AutosaveRequest", _0x3a5ef0 => {
  if (!DataManager.isAutosaveCompatible() || $gameParty.inBattle()) {
    return;
  }
  SceneManager._scene.requestAutosave();
});
PluginManager.registerCommand(pluginData.name, 'AutosaveExecute', _0x41b8a3 => {
  if (!DataManager.isAutosaveCompatible() || $gameParty.inBattle()) {
    return;
  }
  SceneManager._scene.executeAutosave();
});
PluginManager.registerCommand(pluginData.name, "AutosaveForce", _0x5c18e2 => {
  if (!DataManager.isAutosaveCompatible() || $gameParty.inBattle()) {
    return;
  }
  SceneManager._scene.forceAutosave();
});
PluginManager.registerCommand(pluginData.name, "SaveCurrentSlot", _0x33c0fc => {
  SceneManager._scene.saveCurrentSlot();
});
PluginManager.registerCommand(pluginData.name, 'SaveDescription', _0x1ceb88 => {
  VisuMZ.ConvertParams(_0x1ceb88, _0x1ceb88);
  if ($gameSystem) {
    $gameSystem.setSaveDescription(_0x1ceb88.Text);
  }
});
PluginManager.registerCommand(pluginData.name, "SavePicture", _0x5783df => {
  VisuMZ.ConvertParams(_0x5783df, _0x5783df);
  if ($gameSystem) {
    $gameSystem.setSavePicture(_0x5783df.Filename);
  }
});
VisuMZ.SaveCore.Scene_Boot_onDatabaseLoaded = Scene_Boot.prototype.onDatabaseLoaded;
Scene_Boot.prototype.onDatabaseLoaded = function () {
  VisuMZ.SaveCore.Scene_Boot_onDatabaseLoaded.call(this);
  this.process_VisuMZ_SaveCore_Settings();
  this.process_VisuMZ_SaveCore_Switches_Variables();
};
Scene_Boot.prototype.process_VisuMZ_SaveCore_Settings = function () {
  if (StorageManager.saveStyle() === "single") {
    $dataSystem.optAutosave = true;
  }
};
VisuMZ.GlobalSwitches = [];
VisuMZ.GlobalVariables = [];
Scene_Boot.prototype.process_VisuMZ_SaveCore_Switches_Variables = function () {
  for (let _0xf02887 = 0x1; _0xf02887 < $dataSystem.switches.length; _0xf02887++) {
    if ($dataSystem.switches[_0xf02887].match(/<GLOBAL>/i)) {
      VisuMZ.GlobalSwitches.push(_0xf02887);
    }
  }
  for (let _0x3ec314 = 0x1; _0x3ec314 < $dataSystem.variables.length; _0x3ec314++) {
    if ($dataSystem.variables[_0x3ec314].match(/<GLOBAL>/i)) {
      VisuMZ.GlobalVariables.push(_0x3ec314);
    }
  }
};
VisuMZ.SaveCore.DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function () {
  VisuMZ.SaveCore.DataManager_createGameObjects.call(this);
  Scene_File.MAX_BATTLE_MEMBERS = $gameParty.maxBattleMembers();
};
DataManager.isAutosaveCompatible = function () {
  return !DataManager.isBattleTest() && !DataManager.isEventTest() && $dataSystem.optAutosave;
};
DataManager.maxSavefiles = function () {
  if (StorageManager.saveStyle() === "single") {
    return 0x1;
  }
  let _0x2bb8c6 = VisuMZ.SaveCore.Settings.Save.AutosaveMaxCount ? 0x0 : 0x1;
  return VisuMZ.SaveCore.Settings.Save.MaxSaveFiles + _0x2bb8c6;
};
DataManager.makeSavename = function (_0xf4adc4) {
  const _0x83e653 = VisuMZ.SaveCore.Settings.Save.FilenameFmt;
  return _0x83e653.format(_0xf4adc4);
};
VisuMZ.SaveCore.DataManager_makeSavefileInfo = DataManager.makeSavefileInfo;
DataManager.makeSavefileInfo = function () {
  const _0x446ae9 = VisuMZ.SaveCore.DataManager_makeSavefileInfo.call(this);
  return VisuMZ.SaveCore.Settings.SaveMenu.MakeSavefileInfoJS.call(this, _0x446ae9);
};
VisuMZ.SaveCore.DataManager_loadAllSavefileImages = DataManager.loadAllSavefileImages;
DataManager.loadAllSavefileImages = function () {
  VisuMZ.SaveCore.DataManager_loadAllSavefileImages.call(this);
  this.loadPartyImagesForSavefile();
};
DataManager.loadPartyImagesForSavefile = function () {
  for (const _0xc4f95b of $gameParty.members()) {
    if (_0xc4f95b.faceName()) {
      ImageManager.loadFace(_0xc4f95b.faceName());
    }
    if (_0xc4f95b.characterName()) {
      ImageManager.loadCharacter(_0xc4f95b.characterName());
    }
    if (_0xc4f95b.battlerName()) {
      ImageManager.loadSvActor(_0xc4f95b.battlerName());
    }
  }
};
ConfigManager.autosave = VisuMZ.SaveCore.Settings.AutosaveOption.Default;
ConfigManager.globalSwitches = [];
ConfigManager.globalVariables = [];
VisuMZ.SaveCore.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function () {
  const _0x4229db = VisuMZ.SaveCore.ConfigManager_makeData.call(this);
  _0x4229db.autosave = this.autosave || VisuMZ.SaveCore.Settings.AutosaveOption.Default;
  _0x4229db.globalSwitches = this.globalSwitches || [];
  _0x4229db.globalVariables = this.globalVariables || [];
  return _0x4229db;
};
VisuMZ.SaveCore.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function (_0x47a1f6) {
  VisuMZ.SaveCore.ConfigManager_applyData.call(this, _0x47a1f6);
  this.autosave = _0x47a1f6.autosave !== undefined ? _0x47a1f6.autosave : VisuMZ.SaveCore.Settings.AutosaveOption.Default;
  this.globalSwitches = _0x47a1f6.globalSwitches || [];
  this.globalVariables = _0x47a1f6.globalVariables || [];
};
StorageManager.isLocalMode = function () {
  return Utils.isNwjs() ? VisuMZ.SaveCore.Settings.Save.LocalMode : false;
};
StorageManager.filePath = function (_0x2d1374) {
  const _0x267dfa = this.fileDirectoryPath();
  const _0x5118c0 = VisuMZ.SaveCore.Settings.Save.ExtensionFmt;
  return _0x267dfa + _0x5118c0.format(_0x2d1374);
};
StorageManager.forageKey = function (_0x41ecaf) {
  const _0x723c4d = $dataSystem.advanced.gameId;
  const _0xe7a7f5 = VisuMZ.SaveCore.Settings.Save.KeyFmt;
  return _0xe7a7f5.format(_0x723c4d, _0x41ecaf);
};
StorageManager.forageTestKey = function () {
  return VisuMZ.SaveCore.Settings.Save.TestKey;
};
StorageManager.saveStyle = function () {
  return VisuMZ.SaveCore.Settings.Save.SaveStyle;
};
StorageManager.autosaveType = function () {
  return this.saveStyle() === "single" ? "file0" : VisuMZ.SaveCore.Settings.Autosave.AutosaveType;
};
TextManager.pickLockedSaveSlot = VisuMZ.SaveCore.Settings.Save.VocabLockedSaveSlot;
TextManager.saveSuccess = VisuMZ.SaveCore.Settings.SaveConfirm.VocabSaveSuccess;
TextManager.saveFailure = VisuMZ.SaveCore.Settings.SaveConfirm.VocabSaveFailure;
TextManager.loadFailure = VisuMZ.SaveCore.Settings.SaveConfirm.VocabLoadFailure;
TextManager.autosaveOption = VisuMZ.SaveCore.Settings.AutosaveOption.Name;
TextManager.autosaveSuccess = VisuMZ.SaveCore.Settings.AutosaveConfirm.VocabAutosaveSuccess;
TextManager.autosaveFailure = VisuMZ.SaveCore.Settings.AutosaveConfirm.VocabAutosaveFailure;
TextManager.latestSave = VisuMZ.SaveCore.Settings.SaveMenu.LatestText;
ColorManager.latestSavefile = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_latestSavefile) {
    return this._colorCache._stored_latestSavefile;
  }
  const _0x57f945 = VisuMZ.SaveCore.Settings.SaveMenu.LatestColor;
  return this.getColorDataFromPluginParameters("_stored_latestSavefile", _0x57f945);
};
ColorManager.getColorDataFromPluginParameters = function (_0x76f653, _0xf2b095) {
  _0xf2b095 = String(_0xf2b095);
  this._colorCache = this._colorCache || {};
  if (_0xf2b095.match(/#(.*)/i)) {
    this._colorCache[_0x76f653] = "#%1".format(String(RegExp.$1));
  } else {
    this._colorCache[_0x76f653] = this.textColor(Number(_0xf2b095));
  }
  return this._colorCache[_0x76f653];
};
VisuMZ.SaveCore.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
  VisuMZ.SaveCore.Game_System_initialize.call(this);
  this.initSaveCore();
};
Game_System.prototype.initSaveCore = function () {
  this._SaveCoreSettings = {
    'autosaveEnabled': true,
    'saveDescription': '',
    'savePicture': ''
  };
};
Game_System.prototype.isAutosaveEnabled = function () {
  if (!$dataSystem.optAutosave) {
    return false;
  }
  if (this._SaveCoreSettings === undefined) {
    this.initSaveCore();
  }
  if (this._SaveCoreSettings.autosaveEnabled === undefined) {
    this.initSaveCore();
  }
  return this._SaveCoreSettings.autosaveEnabled;
};
Game_System.prototype.enableAutosave = function (_0x3623ef) {
  if (!$dataSystem.optAutosave) {
    return;
  }
  if (this._SaveCoreSettings === undefined) {
    this.initSaveCore();
  }
  if (this._SaveCoreSettings.autosaveEnabled === undefined) {
    this.initSaveCore();
  }
  this._SaveCoreSettings.autosaveEnabled = _0x3623ef;
};
Game_System.prototype.getSaveDescription = function () {
  if (this._SaveCoreSettings === undefined) {
    this.initSaveCore();
  }
  if (this._SaveCoreSettings.saveDescription === undefined) {
    this.initSaveCore();
  }
  return this._SaveCoreSettings.saveDescription;
};
Game_System.prototype.setSaveDescription = function (_0xd813ea) {
  if (this._SaveCoreSettings === undefined) {
    this.initSaveCore();
  }
  if (this._SaveCoreSettings.saveDescription === undefined) {
    this.initSaveCore();
  }
  this._SaveCoreSettings.saveDescription = VisuMZ.SaveCore.ParseTextCodes(_0xd813ea);
};
VisuMZ.SaveCore.ParseTextCodes = function (_0x13d433) {
  while (_0x13d433.match(/\\V\[(\d+)\]/gi)) {
    _0x13d433 = _0x13d433.replace(/\\V\[(\d+)\]/gi, (_0x320ed5, _0x485463) => $gameVariables.value(parseInt(_0x485463)));
  }
  while (_0x13d433.match(/\\N\[(\d+)\]/gi)) {
    _0x13d433 = _0x13d433.replace(/\\N\[(\d+)\]/gi, (_0x2d0c7f, _0x304142) => Window_Base.prototype.actorName(parseInt(_0x304142)));
  }
  while (_0x13d433.match(/\\P\[(\d+)\]/gi)) {
    _0x13d433 = _0x13d433.replace(/\\P\[(\d+)\]/gi, (_0x2253f2, _0x3969f3) => Window_Base.prototype.partyMemberName(parseInt(_0x3969f3)));
  }
  return _0x13d433;
};
Game_System.prototype.getSavePicture = function () {
  if (this._SaveCoreSettings === undefined) {
    this.initSaveCore();
  }
  if (this._SaveCoreSettings.savePicture === undefined) {
    this.initSaveCore();
  }
  return this._SaveCoreSettings.savePicture;
};
Game_System.prototype.setSavePicture = function (_0x505870) {
  if (this._SaveCoreSettings === undefined) {
    this.initSaveCore();
  }
  if (this._SaveCoreSettings.savePicture === undefined) {
    this.initSaveCore();
  }
  this._SaveCoreSettings.savePicture = _0x505870;
};
VisuMZ.SaveCore.Game_System_savefileId = Game_System.prototype.savefileId;
Game_System.prototype.savefileId = function () {
  const _0x5d9769 = StorageManager.saveStyle();
  switch (_0x5d9769) {
    case 'locked':
      return VisuMZ.SaveCore.Game_System_savefileId.call(this) || 0x1;
      break;
    case "single":
      return 0x0;
      break;
    default:
      return VisuMZ.SaveCore.Game_System_savefileId.call(this);
      break;
  }
};
VisuMZ.SaveCore.Game_System_onAfterLoad = Game_System.prototype.onAfterLoad;
Game_System.prototype.onAfterLoad = function () {
  VisuMZ.SaveCore.Game_System_onAfterLoad.call(this);
  if ($gameMap && Imported.VisuMZ_1_EventsMoveCore) {
    $gameMap.clearEventCache();
  }
  const _0x1c2b39 = VisuMZ.SaveCore.Settings.SaveConfirm.Duration;
  setTimeout(VisuMZ.SaveCore.RemoveSaveCoreCache.bind(this), _0x1c2b39 + 0xa);
};
Game_Switches.prototype.isGlobal = function (_0x1b8056) {
  return $dataSystem.switches[_0x1b8056] && VisuMZ.GlobalSwitches.includes(_0x1b8056);
};
VisuMZ.SaveCore.Game_Switches_value = Game_Switches.prototype.value;
Game_Switches.prototype.value = function (_0x59450f) {
  return this.isGlobal(_0x59450f) ? this.globalValue(_0x59450f) : VisuMZ.SaveCore.Game_Switches_value.call(this, _0x59450f);
};
Game_Switches.prototype.globalValue = function (_0x52028a) {
  ConfigManager.globalSwitches = ConfigManager.globalSwitches || [];
  return !!ConfigManager.globalSwitches[_0x52028a];
};
VisuMZ.SaveCore.Game_Switches_setValue = Game_Switches.prototype.setValue;
Game_Switches.prototype.setValue = function (_0x2683b1, _0xe1ab6b) {
  if (this.isGlobal(_0x2683b1)) {
    this.setGlobalValue(_0x2683b1, _0xe1ab6b);
  }
  VisuMZ.SaveCore.Game_Switches_setValue.call(this, _0x2683b1, _0xe1ab6b);
};
Game_Switches.prototype.setGlobalValue = function (_0x22ccfd, _0x40c9a8) {
  if (_0x22ccfd > 0x0 && _0x22ccfd < $dataSystem.switches.length) {
    ConfigManager.globalSwitches = ConfigManager.globalSwitches || [];
    ConfigManager.globalSwitches[_0x22ccfd] = _0x40c9a8;
    ConfigManager.save();
  }
};
Game_Variables.prototype.isGlobal = function (_0x34c045) {
  return $dataSystem.variables[_0x34c045] && VisuMZ.GlobalVariables.includes(_0x34c045);
};
VisuMZ.SaveCore.Game_Variables_value = Game_Variables.prototype.value;
Game_Variables.prototype.value = function (_0x4eeaf2) {
  return this.isGlobal(_0x4eeaf2) ? this.globalValue(_0x4eeaf2) : VisuMZ.SaveCore.Game_Variables_value.call(this, _0x4eeaf2);
};
Game_Variables.prototype.globalValue = function (_0x50db05) {
  ConfigManager.globalVariables = ConfigManager.globalVariables || [];
  if (ConfigManager.globalVariables[_0x50db05] === undefined) {
    ConfigManager.globalVariables[_0x50db05] = 0x0;
  }
  return ConfigManager.globalVariables[_0x50db05];
};
VisuMZ.SaveCore.Game_Variables_setValue = Game_Variables.prototype.setValue;
Game_Variables.prototype.setValue = function (_0x3473d6, _0x2f385f) {
  if (this.isGlobal(_0x3473d6)) {
    this.setGlobalValue(_0x3473d6, _0x2f385f);
  }
  VisuMZ.SaveCore.Game_Variables_setValue.call(this, _0x3473d6, _0x2f385f);
};
Game_Variables.prototype.setGlobalValue = function (_0x2c5eff, _0x1393a4) {
  if (_0x2c5eff > 0x0 && _0x2c5eff < $dataSystem.variables.length) {
    ConfigManager.globalVariables = ConfigManager.globalVariables || [];
    if (typeof _0x1393a4 === "number") {
      _0x1393a4 = Math.floor(_0x1393a4);
    }
    ConfigManager.globalVariables[_0x2c5eff] = _0x1393a4;
    ConfigManager.save();
  }
};
Game_Party.prototype.svbattlersForSaveFile = function () {
  return this.battleMembers().map(_0x584384 => _0x584384.battlerName());
};
Scene_Base.prototype.determineAutosaveBypass = function (_0x4f3d74) {
  const _0x48aff3 = VisuMZ.SaveCore.Settings.Autosave;
  switch (_0x4f3d74) {
    case "battle":
      this._bypassAutosave = !_0x48aff3.AfterBattle;
      break;
    case "transfer":
      if (!this.shouldAutosave()) {
        return;
      }
      this._bypassAutosave = !_0x48aff3.AfterTransfer;
      break;
    case "callMenu":
      this._bypassAutosave = !_0x48aff3.AfterMenuCall;
      break;
    case "exitMenu":
      this._bypassAutosave = !_0x48aff3.AfterExitMenu;
      break;
  }
};
VisuMZ.SaveCore.Scene_Base_requestAutosave = Scene_Base.prototype.requestAutosave;
Scene_Base.prototype.requestAutosave = function () {
  if (!this._bypassAutosave) {
    VisuMZ.SaveCore.Scene_Base_requestAutosave.call(this);
  }
  this._bypassAutosave = false;
};
Scene_Base.prototype.isAutosaveEnabled = function () {
  return !DataManager.isBattleTest() && !DataManager.isEventTest() && $gameSystem.isAutosaveEnabled() && (VisuMZ.SaveCore.Settings.Autosave.RequestsRequireSaveEnable ? $gameSystem.isSaveEnabled() : true);
};
Scene_Base.prototype.executeAutosave = function () {
  if (!ConfigManager.autosave) {
    return;
  }
  this.forceAutosave();
};
Scene_Base.prototype.forceAutosave = function () {
  $gameSystem.onBeforeSave();
  this._processingAutosave = false;
  const _0x5bdcd8 = StorageManager.autosaveType();
  if (["file0", "both"].includes(_0x5bdcd8)) {
    DataManager.saveGame(0x0).then(() => this.onAutosaveSuccess())["catch"](() => this.onAutosaveFailure());
  }
  if (['current', 'both'].includes(_0x5bdcd8)) {
    const _0xa79a44 = $gameSystem.savefileId();
    if (_0xa79a44 > 0x0) {
      DataManager.saveGame(_0xa79a44).then(() => this.onAutosaveSuccess())["catch"](() => this.onAutosaveFailure());
    }
  }
  this._processingAutosave = false;
};
VisuMZ.SaveCore.Scene_Base_onAutosaveSuccess = Scene_Base.prototype.onAutosaveSuccess;
Scene_Base.prototype.onAutosaveSuccess = function () {
  if (this._processingAutosave) {
    return;
  }
  VisuMZ.SaveCore.Scene_Base_onAutosaveSuccess.call(this);
  VisuMZ.SaveCore.Settings.Autosave.OnAutosaveSuccessJS.call(this);
  this.openAutosaveConfirmationWindow(true);
  this._processingAutosave = true;
};
VisuMZ.SaveCore.Scene_Base_onAutosaveFailure = Scene_Base.prototype.onAutosaveFailure;
Scene_Base.prototype.onAutosaveFailure = function () {
  if (this._processingAutosave) {
    return;
  }
  VisuMZ.SaveCore.Scene_Base_onAutosaveFailure.call(this);
  VisuMZ.SaveCore.Settings.Autosave.OnAutosaveFailureJS.call(this);
  this.openAutosaveConfirmationWindow(false);
};
Scene_Base.prototype.createSaveConfirmationWindow = function () {
  if (this._saveConfirmWindow) {
    return;
  }
  const _0x22a556 = this.saveConfirmationWindowRect();
  this._saveConfirmWindow = new Window_Base(_0x22a556);
  this._saveConfirmWindow.openness = 0x0;
};
Scene_Base.prototype.saveConfirmationWindowRect = function () {
  return VisuMZ.SaveCore.Settings.SaveConfirm.ConfirmRect.call(this);
};
Scene_Base.prototype.isSaveConfirmWindowEnabled = function () {
  return VisuMZ.SaveCore.Settings.SaveConfirm.Enable;
};
Scene_Base.prototype.openSaveConfirmationWindow = function (_0x2de1b7, _0x3b5f47) {
  if (!this.isSaveConfirmWindowEnabled()) {
    return this.closeSaveConfirmationWindow(_0x2de1b7);
  }
  if (!this._saveConfirmWindow) {
    this.createSaveConfirmationWindow();
  }
  const _0x3366d1 = this._saveConfirmWindow;
  this.removeChild(_0x3366d1);
  this.addChild(_0x3366d1);
  _0x3366d1.open();
  _0x3366d1.resetFontSettings();
  _0x3366d1.contents.clear();
  let _0x3e5452 = '';
  if (_0x3b5f47) {
    _0x3e5452 = TextManager.loadFailure;
  } else {
    _0x3e5452 = _0x2de1b7 ? TextManager.saveSuccess : TextManager.saveFailure;
  }
  const _0xcc8e0 = _0x3366d1.textSizeEx(_0x3e5452).width;
  const _0x1ae648 = (_0x3366d1.innerWidth - _0xcc8e0) / 0x2;
  _0x3366d1.drawTextEx(_0x3e5452, _0x1ae648, 0x0, _0xcc8e0);
  const _0x15d0ff = VisuMZ.SaveCore.Settings.SaveConfirm.Duration;
  setTimeout(this.closeSaveConfirmationWindow.bind(this, _0x2de1b7), _0x15d0ff);
};
Scene_Base.prototype.loadFailureConfirmationWindow = function () {
  this.openSaveConfirmationWindow(false, true);
};
Scene_Base.prototype.closeSaveConfirmationWindow = function (_0x32a40a) {
  if (this._saveConfirmWindow) {
    this._saveConfirmWindow.close();
  }
};
Scene_Base.prototype.createAutosaveConfirmationWindow = function () {
  if (this._autosaveConfirmWindow) {
    return;
  }
  const _0x540717 = this.autosaveConfirmationWindowRect();
  this._autosaveConfirmWindow = new Window_AutosaveConfirm(_0x540717);
};
Scene_Base.prototype.autosaveConfirmationWindowRect = function () {
  const _0x167b11 = this.mainCommandWidth();
  const _0xf4284d = this.calcWindowHeight(0x1, false);
  const _0xdc6e81 = Graphics.width - _0x167b11;
  const _0x5f5dc8 = Graphics.height - _0xf4284d;
  return new Rectangle(_0xdc6e81, _0x5f5dc8, _0x167b11, _0xf4284d);
};
Scene_Base.prototype.isAutosaveConfirmWindowEnabled = function () {
  return VisuMZ.SaveCore.Settings.AutosaveConfirm.Enable;
};
Scene_Base.prototype.openAutosaveConfirmationWindow = function (_0x398e85) {
  if (!this.isAutosaveConfirmWindowEnabled()) {
    return this.closeAutosaveConfirmationWindow(_0x398e85);
  }
  if (!this._autosaveConfirmWindow) {
    this.createAutosaveConfirmationWindow();
  }
  const _0x1feb93 = this._autosaveConfirmWindow;
  this.removeChild(_0x1feb93);
  this.addChild(_0x1feb93);
  _0x1feb93.setSetSuccess(_0x398e85);
  _0x1feb93.fadeIn();
  const _0x530b9e = VisuMZ.SaveCore.Settings.AutosaveConfirm.Duration;
  setTimeout(this.closeAutosaveConfirmationWindow.bind(this, _0x398e85), _0x530b9e);
};
Scene_Base.prototype.closeAutosaveConfirmationWindow = function (_0x2bfd63) {
  if (this._autosaveConfirmWindow) {
    this._autosaveConfirmWindow.fadeOut();
  }
};
Scene_Base.prototype.saveCurrentSlot = function () {};
VisuMZ.SaveCore.Scene_Title_initialize = Scene_Title.prototype.initialize;
Scene_Title.prototype.initialize = function () {
  VisuMZ.SaveCore.Scene_Title_initialize.call(this);
  this._loadSuccess = false;
};
VisuMZ.SaveCore.Scene_Title_terminate = Scene_Title.prototype.terminate;
Scene_Title.prototype.terminate = function () {
  VisuMZ.SaveCore.Scene_Title_terminate.call(this);
  if (this._loadSuccess) {
    $gameSystem.onAfterLoad();
  }
};
VisuMZ.SaveCore.Scene_Title_commandNewGame = Scene_Title.prototype.commandNewGame;
Scene_Title.prototype.commandNewGame = function () {
  if (StorageManager.saveStyle() === "locked") {
    this.commandNewGameSaveCoreLocked();
  } else {
    VisuMZ.SaveCore.Scene_Title_commandNewGame.call(this);
  }
};
Scene_Title.prototype.commandNewGameSaveCoreLocked = function () {
  DataManager.setupNewGame();
  $gameTemp._pickLockedSaveSlot = true;
  this._commandWindow.close();
  SceneManager.push(Scene_Save);
};
VisuMZ.SaveCore.Scene_Title_commandContinue = Scene_Title.prototype.commandContinue;
Scene_Title.prototype.commandContinue = function () {
  if (StorageManager.saveStyle() === "single") {
    this.commandContinueSaveCoreSingle();
  } else {
    VisuMZ.SaveCore.Scene_Title_commandContinue.call(this);
  }
};
Scene_Title.prototype.commandContinueSaveCoreSingle = function () {
  DataManager.loadGame(0x0).then(() => this.onSaveCoreLoadSuccess())['catch'](() => this.onSaveCoreLoadFailure());
};
Scene_Title.prototype.onSaveCoreLoadSuccess = function () {
  this._commandWindow.close();
  SoundManager.playLoad();
  this.fadeOutAll();
  Scene_Load.prototype.reloadMapIfUpdated();
  SceneManager.goto(Scene_Map);
  this._loadSuccess = true;
  VisuMZ.SaveCore.Settings.Save.OnLoadSuccessJS.call(this);
};
Scene_Title.prototype.onSaveCoreLoadFailure = function () {
  SoundManager.playBuzzer();
  VisuMZ.SaveCore.Settings.Save.OnLoadFailureJS.call(this);
  this.loadFailureConfirmationWindow();
};
Scene_Title.prototype.closeSaveConfirmationWindow = function (_0x1763d7) {
  Scene_Base.prototype.closeSaveConfirmationWindow.call(this, _0x1763d7);
  this._commandWindow.open();
  this._commandWindow.activate();
};
VisuMZ.SaveCore.Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
Scene_Map.prototype.onMapLoaded = function () {
  VisuMZ.SaveCore.Scene_Map_onMapLoaded.call(this);
  if (SceneManager.isPreviousScene(Scene_Menu)) {
    this.determineAutosaveBypass('exitMenu');
    this.requestAutosave();
  } else if (SceneManager.isPreviousScene(Scene_Battle)) {
    this.determineAutosaveBypass("battle");
    this.requestAutosave();
  }
};
VisuMZ.SaveCore.Scene_Map_onTransferEnd = Scene_Map.prototype.onTransferEnd;
Scene_Map.prototype.onTransferEnd = function () {
  if (this.shouldAutosave()) {
    this.determineAutosaveBypass("transfer");
  }
  VisuMZ.SaveCore.Scene_Map_onTransferEnd.call(this);
};
Scene_Map.prototype.saveCurrentSlot = function () {
  if ($gameSystem._saveCorePluginCommandSave) {
    return;
  }
  const _0x278248 = $gameSystem.savefileId();
  if (StorageManager.saveStyle() !== "single" && _0x278248 <= 0x0) {
    return;
  }
  this._active = false;
  $gameSystem.setSavefileId(_0x278248);
  $gameSystem.onBeforeSave();
  $gameSystem._saveCorePluginCommandSave = true;
  DataManager.saveGame(_0x278248).then(() => this.onSaveSuccess())['catch'](() => this.onSaveFailure());
  $gameSystem._saveCorePluginCommandSave = undefined;
};
Scene_Map.prototype.onSaveSuccess = function () {
  SoundManager.playSave();
  VisuMZ.SaveCore.Settings.Save.OnSaveSuccessJS.call(this);
  this.openSaveConfirmationWindow(true);
};
Scene_Map.prototype.onSaveFailure = function () {
  SoundManager.playBuzzer();
  VisuMZ.SaveCore.Settings.Save.OnSaveFailureJS.call(this);
  this.openSaveConfirmationWindow(false);
};
Scene_Map.prototype.closeSaveConfirmationWindow = function (_0x36a289) {
  Scene_Message.prototype.closeSaveConfirmationWindow.call(this, _0x36a289);
  this._active = true;
};
VisuMZ.SaveCore.Scene_Map_needsFadeIn = Scene_Map.prototype.needsFadeIn;
Scene_Map.prototype.needsFadeIn = function () {
  return VisuMZ.SaveCore.Scene_Map_needsFadeIn.call(this) || SceneManager.isPreviousScene(Scene_Title);
};
VisuMZ.SaveCore.Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function () {
  VisuMZ.SaveCore.Scene_Menu_create.call(this);
  if (SceneManager.isPreviousScene(Scene_Map)) {
    this.determineAutosaveBypass("callMenu");
    this.requestAutosave();
  }
};
VisuMZ.SaveCore.Scene_Menu_commandSave = Scene_Menu.prototype.commandSave;
Scene_Menu.prototype.commandSave = function () {
  const _0x3dc589 = StorageManager.saveStyle();
  switch (_0x3dc589) {
    case 'locked':
    case 'single':
      this.commandSaveLocked();
      break;
    default:
      VisuMZ.SaveCore.Scene_Menu_commandSave.call(this);
      break;
  }
};
Scene_Menu.prototype.commandSaveLocked = function () {
  const _0x580afb = $gameSystem.savefileId();
  $gameSystem.setSavefileId(_0x580afb);
  $gameSystem.onBeforeSave();
  DataManager.saveGame(_0x580afb).then(() => this.onSaveCoreSaveSuccess())['catch'](() => this.onSaveCoreSaveFailure());
};
Scene_Menu.prototype.onSaveCoreSaveSuccess = function () {
  SoundManager.playSave();
  VisuMZ.SaveCore.Settings.Save.OnSaveSuccessJS.call(this);
  this.openSaveConfirmationWindow(true);
};
Scene_Menu.prototype.onSaveCoreSaveFailure = function () {
  SoundManager.playBuzzer();
  VisuMZ.SaveCore.Settings.Save.OnSaveFailureJS.call(this);
  this.openSaveConfirmationWindow(false);
};
Scene_Menu.prototype.closeSaveConfirmationWindow = function (_0x48fede) {
  Scene_MenuBase.prototype.closeSaveConfirmationWindow.call(this, _0x48fede);
  this._commandWindow.activate();
};
Scene_Battle.prototype.requestAutosave = function () {};
VisuMZ.SaveCore.Scene_Options_maxCommands = Scene_Options.prototype.maxCommands;
Scene_Options.prototype.maxCommands = function () {
  let _0x30724b = VisuMZ.SaveCore.Scene_Options_maxCommands.call(this);
  const _0x379467 = VisuMZ.SaveCore.Settings;
  if (_0x379467.AutosaveOption.AddOption && _0x379467.AutosaveOption.AdjustRect) {
    _0x30724b++;
  }
  return _0x30724b;
};
Scene_Save.prototype.onSaveSuccess = function () {
  SoundManager.playSave();
  VisuMZ.SaveCore.Settings.Save.OnSaveSuccessJS.call(this);
  this._listWindow.refresh();
  this.openSaveConfirmationWindow(true);
};
VisuMZ.SaveCore.Scene_Save_onSaveFailure = Scene_Save.prototype.onSaveFailure;
Scene_Save.prototype.onSaveFailure = function () {
  SoundManager.playBuzzer();
  VisuMZ.SaveCore.Settings.Save.OnSaveFailureJS.call(this);
  this.openSaveConfirmationWindow(false);
};
Scene_Save.prototype.closeSaveConfirmationWindow = function (_0x51153b) {
  Scene_File.prototype.closeSaveConfirmationWindow.call(this, _0x51153b);
  if (_0x51153b) {
    this.activateListWindow();
  } else {
    this.activateListWindow();
  }
};
Scene_Save.prototype.popScene = function () {
  $gameTemp._pickLockedSaveSlot = false;
  Scene_File.prototype.popScene.call(this);
};
VisuMZ.SaveCore.Scene_Save_helpWindowText = Scene_Save.prototype.helpWindowText;
Scene_Save.prototype.helpWindowText = function () {
  return $gameTemp._pickLockedSaveSlot ? TextManager.pickLockedSaveSlot : VisuMZ.SaveCore.Scene_Save_helpWindowText.call(this);
};
VisuMZ.SaveCore.Scene_Save_executeSave = Scene_Save.prototype.executeSave;
Scene_Save.prototype.executeSave = function (_0x15d805) {
  if ($gameTemp._pickLockedSaveSlot) {
    this.startNewGameLockedSave(_0x15d805);
  } else {
    VisuMZ.SaveCore.Scene_Save_executeSave.call(this, _0x15d805);
  }
};
Scene_Save.prototype.startNewGameLockedSave = function (_0x540ceb) {
  $gameTemp._pickLockedSaveSlot = false;
  SoundManager.playLoad();
  $gameSystem.setSavefileId(_0x540ceb);
  this.fadeOutAll();
  SceneManager.goto(Scene_Map);
};
VisuMZ.SaveCore.Scene_Load_onLoadSuccess = Scene_Load.prototype.onLoadSuccess;
Scene_Load.prototype.onLoadSuccess = function () {
  VisuMZ.SaveCore.Scene_Load_onLoadSuccess.call(this);
  VisuMZ.SaveCore.Settings.Save.OnLoadSuccessJS.call(this);
  setTimeout(VisuMZ.SaveCore.RemoveSaveCoreCache.bind(this), 0x3e8);
};
Scene_Load.prototype.onLoadFailure = function () {
  SoundManager.playBuzzer();
  VisuMZ.SaveCore.Settings.Save.OnLoadFailureJS.call(this);
  this.loadFailureConfirmationWindow();
};
Scene_Load.prototype.closeSaveConfirmationWindow = function (_0x27f04a) {
  Scene_File.prototype.closeSaveConfirmationWindow.call(this, _0x27f04a);
  this.activateListWindow();
};
VisuMZ.SaveCore.RemoveSaveCoreCache = function () {
  $gameSystem._saveCorePluginCommandSave = undefined;
};
ImageManager.svActorHorzCells = ImageManager.svActorHorzCells || 0x9;
ImageManager.svActorVertCells = ImageManager.svActorVertCells || 0x6;
if (!Imported.VisuMZ_1_MainMenuCore) {
  Window_Base.prototype.drawSvActor = function (_0x30178b, _0x142959, _0x41530b) {
    const _0x57f1e2 = _0x30178b.match(/\$/i);
    const _0x193e0c = ImageManager.loadSvActor(_0x30178b);
    const _0x1355c3 = _0x193e0c.width / (_0x57f1e2 ? 0x1 : ImageManager.svActorHorzCells);
    const _0x49da42 = _0x193e0c.height / (_0x57f1e2 ? 0x1 : ImageManager.svActorVertCells);
    this.contents.blt(_0x193e0c, 0x0, 0x0, _0x1355c3, _0x49da42, _0x142959 - _0x1355c3 / 0x2, _0x41530b - _0x49da42);
  };
}
;
VisuMZ.SaveCore.Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function () {
  VisuMZ.SaveCore.Window_Options_addGeneralOptions.call(this);
  this.addSaveCoreCommands();
};
Window_Options.prototype.addSaveCoreCommands = function () {
  if (VisuMZ.SaveCore.Settings.AutosaveOption.AddOption) {
    this.addSaveCoreAutosaveCommand();
  }
};
Window_Options.prototype.addSaveCoreAutosaveCommand = function () {
  const _0x4647e5 = TextManager.autosaveOption;
  this.addCommand(_0x4647e5, "autosave");
};
function Window_AutosaveConfirm() {
  this.initialize(...arguments);
}
Window_AutosaveConfirm.prototype = Object.create(Window_Base.prototype);
Window_AutosaveConfirm.prototype.constructor = Window_AutosaveConfirm;
Window_AutosaveConfirm.prototype.initialize = function (_0x46afd9) {
  this._fadeSpeed = 0x0;
  Window_Base.prototype.initialize.call(this, _0x46afd9);
  this.opacity = 0x0;
  this.contentsOpacity = 0x0;
};
Window_AutosaveConfirm.prototype.drawBackground = function () {
  const _0x28d5de = this.innerWidth;
  const _0x2e5cb3 = this.innerHeight;
  const _0x3ebf9e = ColorManager.dimColor1();
  const _0x13febc = ColorManager.dimColor2();
  const _0x65a074 = _0x28d5de / 0x2;
  this.contents.gradientFillRect(0x0, 0x0, _0x65a074, _0x2e5cb3, _0x13febc, _0x3ebf9e);
  this.contents.gradientFillRect(0x0 + _0x65a074, 0x0, _0x65a074, _0x2e5cb3, _0x3ebf9e, _0x13febc);
};
Window_AutosaveConfirm.prototype.setSetSuccess = function (_0x31d8b0) {
  this._success = _0x31d8b0;
  this.refresh();
};
Window_AutosaveConfirm.prototype.refresh = function () {
  this.contents.clear();
  const _0x20974a = this._success ? TextManager.autosaveSuccess : TextManager.autosaveFailure;
  const _0x5e74b6 = Math.ceil(this.textSizeEx(_0x20974a).width);
  this.width = _0x5e74b6 + ($gameSystem.windowPadding() + this.itemPadding()) * 0x2;
  this.updatePosition();
  this.createContents();
  const _0x31bcab = Math.floor((this.innerWidth - _0x5e74b6) / 0x2);
  this.drawBackground();
  this.drawTextEx(_0x20974a, _0x31bcab, 0x0, _0x5e74b6);
};
Window_AutosaveConfirm.prototype.getScreenPosition = function () {
  return VisuMZ.SaveCore.Settings.AutosaveConfirm.ScreenPosition;
};
Window_AutosaveConfirm.prototype.updatePosition = function () {
  const _0x268c37 = this.getScreenPosition();
  if (_0x268c37.match(/upper/i)) {
    this.y = -0x1 * $gameSystem.windowPadding();
  } else if (_0x268c37.match(/lower/i)) {
    this.y = Graphics.height - this.height + $gameSystem.windowPadding();
  } else {
    this.y = (Graphics.height - this.height) / 0x2;
  }
  if (_0x268c37.match(/left/i)) {
    this.x = -0x1 * $gameSystem.windowPadding();
  } else if (_0x268c37.match(/right/i)) {
    this.x = Graphics.width - this.width + $gameSystem.windowPadding();
  } else {
    this.x = (Graphics.width - this.width) / 0x2;
  }
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
};
Window_AutosaveConfirm.prototype.update = function () {
  Window_Base.prototype.update.call(this);
  if (this._fadeSpeed !== 0x0) {
    this.updateFade();
  }
};
Window_AutosaveConfirm.prototype.updateFade = function () {
  this.contentsOpacity += this._fadeSpeed;
  if (this.contentsOpacity >= 0xff || this.contentsOpacity <= 0x0) {
    this.setFadeSpeed(0x0);
  }
};
Window_AutosaveConfirm.prototype.setFadeSpeed = function (_0x48f794) {
  this._fadeSpeed = _0x48f794;
};
Window_AutosaveConfirm.prototype.fadeIn = function () {
  this.setFadeSpeed(0x10);
};
Window_AutosaveConfirm.prototype.fadeOut = function () {
  this.setFadeSpeed(-0x10);
};
VisuMZ.SaveCore.Window_SavefileList_setMode = Window_SavefileList.prototype.setMode;
Window_SavefileList.prototype.setMode = function (_0x2822a4, _0x42b306) {
  if (StorageManager.autosaveType() === "current") {
    _0x42b306 = false;
  }
  if ($gameTemp._pickLockedSaveSlot) {
    _0x42b306 = false;
  }
  VisuMZ.SaveCore.Window_SavefileList_setMode.call(this, _0x2822a4, _0x42b306);
};
Window_SavefileList.prototype.numVisibleRows = function () {
  const _0x519d8d = VisuMZ.SaveCore.Settings.SaveMenu;
  const _0x5611aa = this.menuStyle();
  switch (_0x5611aa) {
    case 'vertical':
      return _0x519d8d.VertRows;
      break;
    case "box":
      return _0x519d8d.BoxRows;
      break;
    case 'large':
      return _0x519d8d.LargeRows;
      break;
    default:
      return _0x519d8d.ListRows;
      break;
  }
};
Window_SavefileList.prototype.maxCols = function () {
  const _0x908602 = VisuMZ.SaveCore.Settings.SaveMenu;
  const _0x1ee95d = this.menuStyle();
  switch (_0x1ee95d) {
    case "vertical":
      return _0x908602.VertCols;
      break;
    case "box":
      return _0x908602.BoxCols;
      break;
    case "large":
      return _0x908602.LargeCols;
      break;
    default:
      return _0x908602.ListCols;
      break;
  }
};
Window_SavefileList.prototype.resetWordWrap = function () {
  if (Imported.VisuMZ_1_MessageCore) {
    Window_Selectable.prototype.resetWordWrap.call(this);
  }
};
Window_SavefileList.prototype.setWordWrap = function (_0xce3cd8) {
  return Imported.VisuMZ_1_MessageCore ? Window_Selectable.prototype.setWordWrap.call(this, _0xce3cd8) : '';
};
Window_SavefileList.prototype.actorStyle = function () {
  return VisuMZ.SaveCore.Settings.ActorGraphic;
};
Window_SavefileList.prototype.menuStyle = function () {
  return VisuMZ.SaveCore.Settings.SaveMenuStyle;
};
Window_SavefileList.prototype.selectSavefile = function (_0x731b9d) {
  const _0x48fc49 = Math.max(0x0, this.savefileIdToIndex(_0x731b9d));
  this.smoothSelect(_0x48fc49);
};
Window_SavefileList.prototype.drawItem = function (_0x5f0952) {
  const _0x587ffa = this.indexToSavefileId(_0x5f0952);
  const _0x566cdf = DataManager.savefileInfo(_0x587ffa);
  if (_0x566cdf) {
    _0x566cdf.savefileId = _0x587ffa;
  }
  this._savefileId = _0x587ffa;
  const _0x515540 = this.itemRect(_0x5f0952);
  this.resetFontSettings();
  this.changePaintOpacity(this.isEnabled(_0x587ffa));
  this.drawContents(_0x566cdf, _0x515540);
};
Window_SavefileList.prototype.drawTitle = function (_0x817a75, _0x180574, _0x48caf2) {
  if (_0x817a75 === 0x0) {
    this.drawText(TextManager.autosave, _0x180574, _0x48caf2, 0xb4);
  } else {
    this.drawText(TextManager.file + " " + _0x817a75, _0x180574, _0x48caf2, 0xb4);
  }
};
Window_SavefileList.prototype.drawLatestMarker = function (_0x5a0c08, _0x4a5b29, _0x2cb172) {
  if (_0x5a0c08 === 0x0 || DataManager.latestSavefileId() !== _0x5a0c08) {
    return;
  }
  const _0x37c7e6 = TextManager.latestSave;
  this.changeTextColor(ColorManager.latestSavefile());
  this.drawText(_0x37c7e6, _0x4a5b29, _0x2cb172, 0xb4);
};
Window_SavefileList.prototype.drawActors = function (_0x33de2e, _0x53fcc3, _0x2fb033, _0x8ae22c, _0x350a57) {
  if (!_0x33de2e.characters) {
    return;
  }
  const _0x2e807a = this.actorStyle();
  switch (_0x2e807a) {
    case "face":
      this.drawActorFaces(_0x33de2e, _0x53fcc3, _0x2fb033, _0x8ae22c, _0x350a57);
      break;
    case "sprite":
      this.drawActorSprites(_0x33de2e, _0x53fcc3, _0x2fb033, _0x8ae22c, _0x350a57);
      break;
    case "svbattler":
      this.drawSvBattlerSprites(_0x33de2e, _0x53fcc3, _0x2fb033, _0x8ae22c, _0x350a57);
      break;
    default:
      break;
  }
};
Window_SavefileList.prototype.drawActorFaces = function (_0x3e8cfa, _0x14febf, _0x19adae, _0x3c2c26, _0x203455) {
  let _0x34093f = Math.max(_0x3e8cfa.faces.length, Scene_File.MAX_BATTLE_MEMBERS);
  const _0x53e7f0 = Math.min(ImageManager.faceWidth, Math.floor(_0x3c2c26 / _0x34093f));
  _0x14febf = _0x14febf + Math.round((_0x3c2c26 - _0x34093f * _0x53e7f0) / 0x2);
  for (const _0x14bc5a of _0x3e8cfa.faces) {
    this.drawFace(_0x14bc5a[0x0], _0x14bc5a[0x1], _0x14febf, _0x19adae + 0x1, _0x53e7f0, _0x203455 - 0x2);
    _0x14febf += _0x53e7f0;
  }
};
ImageManager.saveMenuSpriteWidth = VisuMZ.SaveCore.Settings.SaveMenu.SpriteWidth;
ImageManager.saveMenuSvBattlerWidth = VisuMZ.SaveCore.Settings.SaveMenu.SvBattlerWidth;
Window_SavefileList.prototype.drawActorSprites = function (_0x452d37, _0x2334cf, _0xc86ac2, _0x5386ab, _0x25f80f) {
  let _0x5967a9 = Math.max(_0x452d37.characters.length, Scene_File.MAX_BATTLE_MEMBERS);
  const _0x44937f = ImageManager.saveMenuSpriteWidth;
  _0x2334cf = _0x2334cf + Math.round((_0x5386ab - _0x5967a9 * _0x44937f) / 0x2) + _0x44937f / 0x2;
  _0xc86ac2 = _0xc86ac2 + _0x25f80f - 0x8;
  for (const _0x4e39f8 of _0x452d37.characters) {
    this.drawCharacter(_0x4e39f8[0x0], _0x4e39f8[0x1], _0x2334cf, _0xc86ac2);
    _0x2334cf += _0x44937f;
  }
};
Window_SavefileList.prototype.drawSvBattlerSprites = function (_0x3c4b11, _0x4d0fd3, _0x3da799, _0x46a7b6, _0x5428ff) {
  if (!_0x3c4b11.svbattlers) {
    return this.drawActorSprites(_0x3c4b11, _0x4d0fd3, _0x3da799, _0x46a7b6, _0x5428ff);
  }
  let _0x4302da = Math.max(_0x3c4b11.svbattlers.length, Scene_File.MAX_BATTLE_MEMBERS);
  const _0x3e9910 = ImageManager.saveMenuSvBattlerWidth;
  _0x4d0fd3 = _0x4d0fd3 + Math.round((_0x46a7b6 - _0x4302da * _0x3e9910) / 0x2) + _0x3e9910 / 0x2;
  _0x3da799 = _0x3da799 + _0x5428ff - 0x8;
  for (const _0x4b2fa0 of _0x3c4b11.svbattlers) {
    this.drawSvActor(_0x4b2fa0, _0x4d0fd3, _0x3da799);
    _0x4d0fd3 += _0x3e9910;
  }
};
Window_SavefileList.prototype.drawPicture = function (_0xd63214, _0x1e7980, _0x7429c7, _0x454db0, _0x517e64, _0x14fa4d) {
  if (_0xd63214 === '') {
    return;
  }
  _0x1e7980 += 0x2;
  _0x7429c7 += 0x2;
  _0x454db0 -= 0x4;
  _0x517e64 -= 0x4;
  const _0x53fd1 = ImageManager.loadPicture(_0xd63214);
  const _0x4f5522 = _0x53fd1.width;
  const _0x164819 = _0x53fd1.height;
  const _0x5d1daf = Math.min(_0x454db0 / _0x4f5522, _0x517e64 / _0x164819, _0x14fa4d ? 0x1 : 0x3e8);
  const _0xb73824 = Math.ceil(_0x53fd1.width * _0x5d1daf);
  const _0x3f11c4 = Math.ceil(_0x53fd1.height * _0x5d1daf);
  this.contentsBack.blt(_0x53fd1, 0x0, 0x0, _0x4f5522, _0x164819, _0x1e7980, _0x7429c7, _0xb73824, _0x3f11c4);
};
Window_SavefileList.prototype.drawCenteredPicture = function (_0x5a5902, _0x57cceb, _0xbaee7, _0x247bb4, _0x5566aa, _0xd2c904) {
  if (_0x5a5902 === '') {
    return;
  }
  _0x57cceb += 0x2;
  _0xbaee7 += 0x2;
  _0x247bb4 -= 0x4;
  _0x5566aa -= 0x4;
  const _0x2293e3 = ImageManager.loadPicture(_0x5a5902);
  const _0xfe05d7 = _0x2293e3.width;
  const _0x7bee4e = _0x2293e3.height;
  const _0x50ef85 = Math.min(_0x247bb4 / _0xfe05d7, _0x5566aa / _0x7bee4e, _0xd2c904 ? 0x1 : 0x3e8);
  const _0x4f6015 = Math.ceil(_0x2293e3.width * _0x50ef85);
  const _0x5ad636 = Math.ceil(_0x2293e3.height * _0x50ef85);
  _0x57cceb += (_0x247bb4 - _0x4f6015) / 0x2;
  _0xbaee7 += (_0x5566aa - _0x5ad636) / 0x2;
  this.contentsBack.blt(_0x2293e3, 0x0, 0x0, _0xfe05d7, _0x7bee4e, _0x57cceb, _0xbaee7, _0x4f6015, _0x5ad636);
};
Window_SavefileList.prototype.drawPlaytime = function (_0x11d410, _0x405dd8, _0x862660, _0x1edc3d, _0x268f64) {
  if (_0x11d410.playtime) {
    _0x268f64 = _0x268f64 || "left";
    this.drawText(_0x11d410.playtime, _0x405dd8, _0x862660, _0x1edc3d, _0x268f64);
  }
};
Window_SavefileList.prototype.drawTimestamp = function (_0x3dc5e5, _0x678f84, _0x270de5, _0x52a8a5, _0x140062) {
  if (_0x3dc5e5.timestamp) {
    _0x140062 = _0x140062 || "left";
    let _0x993a71 = this.getTimestamp(_0x3dc5e5);
    if (Imported.VisuMZ_0_CoreEngine && this.useDigitGrouping()) {
      _0x993a71 = '{{%1}}'.format(_0x993a71);
    }
    this.drawText(_0x993a71, _0x678f84, _0x270de5, _0x52a8a5, _0x140062);
  }
};
Window_SavefileList.prototype.getTimestamp = function (_0x19f01f) {
  const _0x280dda = _0x19f01f.timestamp;
  const _0x5b9031 = new Date(_0x280dda);
  let _0x3cd483 = "[Year].[Month].[Date] [Hour]:[Minute]:[Second]";
  _0x3cd483 = _0x3cd483.replace(/\[YEAR\]/gi, '%1');
  _0x3cd483 = _0x3cd483.replace(/\[MONTH\]/gi, '%2');
  _0x3cd483 = _0x3cd483.replace(/\[DATE\]/gi, '%3');
  _0x3cd483 = _0x3cd483.replace(/\[HOUR\]/gi, '%4');
  _0x3cd483 = _0x3cd483.replace(/\[MINUTE\]/gi, '%5');
  _0x3cd483 = _0x3cd483.replace(/\[SECOND\]/gi, '%6');
  let _0x385fc2 = String(_0x5b9031.getFullYear()).split('').join('​');
  let _0x1c6dcf = String(_0x5b9031.getMonth() + 0x1);
  let _0x243511 = String(_0x5b9031.getDate()).padStart(0x2, '0');
  let _0x4944ba = String(_0x5b9031.getHours()).padStart(0x2, '0');
  let _0x2250ca = String(_0x5b9031.getMinutes()).padStart(0x2, '0');
  let _0xf80ab0 = String(_0x5b9031.getSeconds()).padStart(0x2, '0');
  let _0x355c17 = _0x3cd483.format(_0x385fc2, _0x1c6dcf, _0x243511, _0x4944ba, _0x2250ca, _0xf80ab0);
  return _0x355c17;
};
Window_SavefileList.prototype.drawCurrency = function (_0x5a0abe, _0x3706d6, _0x4e5bd8, _0x68bfa0) {
  if (_0x5a0abe.gold === undefined) {
    return;
  }
  const _0x21e731 = _0x5a0abe.gold;
  const _0x5efe34 = TextManager.currencyUnit;
  Window_SavefileList.prototype.drawCurrencyValue.call(this, _0x21e731, _0x5efe34, _0x3706d6, _0x4e5bd8, _0x68bfa0);
};
Window_SavefileList.prototype.drawDescription = function (_0x1d1382, _0x107234, _0x220543, _0x167ce9, _0x5ef209) {
  if (_0x1d1382.description) {
    const _0x9ee8e6 = this.textSizeEx(_0x1d1382.description).width;
    _0x5ef209 = _0x5ef209 || 'left';
    if (_0x5ef209 === "right") {
      _0x107234 = _0x107234 + _0x167ce9 - _0x9ee8e6;
    } else if (_0x5ef209 === 'center') {
      _0x107234 = _0x107234 + (_0x167ce9 - _0x9ee8e6) / 0x2;
    }
    this.drawTextEx(_0x1d1382.description, _0x107234, _0x220543, _0x167ce9);
  }
};
Window_SavefileList.prototype.drawContents = function (_0x2a747d, _0x1474c1) {
  if (_0x2a747d) {
    const _0x573355 = ImageManager.loadPicture(_0x2a747d.picture || '');
    _0x573355.addLoadListener(this.drawContentsLoaded.bind(this, _0x2a747d, _0x1474c1));
  } else {
    this.drawFileData(this._savefileId, _0x1474c1);
  }
};
Window_SavefileList.prototype.drawContentsLoaded = function (_0x5bb456, _0x13b890) {
  const _0x252cf5 = this.menuStyle();
  switch (_0x252cf5) {
    case 'vertical':
      this.drawVerticalStyleContents(_0x5bb456, _0x13b890);
      break;
    case "box":
      this.drawBoxStyleContents(_0x5bb456, _0x13b890);
      break;
    case 'large':
      this.drawLargeStyleContents(_0x5bb456, _0x13b890);
      break;
    default:
      this.drawListStyleContents(_0x5bb456, _0x13b890);
      break;
  }
  this.resetFontSettings();
  const _0x48e75d = _0x5bb456.savefileId;
  this.drawFileData(_0x48e75d, _0x13b890);
};
Window_SavefileList.prototype.drawFileData = function (_0x56d1f1, _0x39c1fd) {
  const _0x450844 = this.menuStyle();
  switch (_0x450844) {
    case "vertical":
      this.drawVerticalStyleFileData(_0x56d1f1, _0x39c1fd);
      break;
    case "box":
      this.drawBoxStyleFileData(_0x56d1f1, _0x39c1fd);
      break;
    case "large":
      this.drawLargeStyleFileData(_0x56d1f1, _0x39c1fd);
      break;
    default:
      this.drawListStyleFileData(_0x56d1f1, _0x39c1fd);
      break;
  }
};
Window_SavefileList.prototype.drawListStyleContents = function (_0xc1ebac, _0x3397fa) {
  VisuMZ.SaveCore.Settings.SaveMenu.ListContentsJS.call(this, _0xc1ebac, _0x3397fa);
};
Window_SavefileList.prototype.drawVerticalStyleContents = function (_0x133420, _0x592e52) {
  VisuMZ.SaveCore.Settings.SaveMenu.VertContentsJS.call(this, _0x133420, _0x592e52);
};
Window_SavefileList.prototype.drawBoxStyleContents = function (_0x36d483, _0x51d1de) {
  VisuMZ.SaveCore.Settings.SaveMenu.BoxContentsJS.call(this, _0x36d483, _0x51d1de);
};
Window_SavefileList.prototype.drawLargeStyleContents = function (_0x253762, _0x3287e7) {
  VisuMZ.SaveCore.Settings.SaveMenu.LargeContentsJS.call(this, _0x253762, _0x3287e7);
};
Window_SavefileList.prototype.drawListStyleFileData = function (_0x2fd798, _0x4a2079) {
  VisuMZ.SaveCore.Settings.SaveMenu.ListFileDataJS.call(this, _0x2fd798, _0x4a2079);
};
Window_SavefileList.prototype.drawVerticalStyleFileData = function (_0x4a2cad, _0x4a91e4) {
  VisuMZ.SaveCore.Settings.SaveMenu.VertFileDataJS.call(this, _0x4a2cad, _0x4a91e4);
};
Window_SavefileList.prototype.drawBoxStyleFileData = function (_0x523664, _0x461d2d) {
  VisuMZ.SaveCore.Settings.SaveMenu.BoxFileDataJS.call(this, _0x523664, _0x461d2d);
};
Window_SavefileList.prototype.drawLargeStyleFileData = function (_0x4ba274, _0x2c3d41) {
  VisuMZ.SaveCore.Settings.SaveMenu.LargeFileDataJS.call(this, _0x4ba274, _0x2c3d41);
};