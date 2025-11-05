//=============================================================================
// VisuStella MZ - Options Core
// VisuMZ_1_OptionsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_OptionsCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.OptionsCore = VisuMZ.OptionsCore || {};
VisuMZ.OptionsCore.version = 1.26;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.26] [OptionsCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Options_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Options Core plugin revamps the Options Menu Scene in RPG Maker MZ to be
 * more extensive and sustain a larger variety of options. This plugin will add
 * new options to the list in addition to options from other VisuStella MZ
 * plugins provided that they're installed as well. Game devs that are adept
 * with JavaScript are also able to add in their own options to the menu as
 * well.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Revamped Options Menu Scene and layout.
 * * The ability to add in your own Categories and options inside each of the
 *   individual categories.
 * * Newly added options like Master Volume, Window Tone support, and more.
 * * Integrated options added from other VisuStella MZ plugins.
 * * An added Playtest options category that is only available during test play
 *   to help speed up the game debug process.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Options Menu Scene
 *
 * - The whole scene is revamped due to all the new additions provided by the
 * Options Core plugin. While basic functions will still work, do not expect
 * everything to integrate into it seamlessly.
 *
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list. Most of these enable new options for the
 * Options Core to utilize as the code for them to work is found in the newer
 * plugins.
 *
 * ---
 *
 * Many VisuMZ Plugins
 * 
 * - Many VisuMZ plugins have options that become available when installed
 *   together with the Options Core plugin that wouldn't be available normally.
 * 
 * ---
 *
 * ============================================================================
 * Understanding Options
 * ============================================================================
 * 
 * This section is to clarify a few things about the Options Core.
 * 
 * ---
 * 
 * === Global Settings ===
 * 
 * The majority of settings adjusted by the player in the Options menu are
 * global settings. This is the way it is for base RPG Maker MZ without using
 * any plugins and this is the way it will be when using the Options Core.
 * 
 * What does this mean?
 * 
 * This means that if your player changed the Options settings, then loaded up
 * a different save, the Options settings do not revert to the settings from
 * the last time that save was made.
 * 
 * Why is this?
 * 
 * Because that is the industry standard. If the player wants to adjust the
 * BGM volume down to 50% from 100%, that means that when the player loads a
 * save file, the BGM volume does not shoot back up to 100%. Doing that would
 * require the player to adjust the settings multiple times for each save and
 * that just is not user friendly.
 * 
 * Therefore, the majority of the Options Core settings are global for this
 * very reason and are not going to change because of it.
 * 
 * ---
 * 
 * === Exceptions ===
 * 
 * There are a few exceptions to the rule. These exceptions are the three
 * settings that govern the "Window Tone" in the UI section.
 * 
 * This means the values inserted for "Red", "Green", and "Blue" are saved
 * relative to the save file's settings.
 * 
 * Why is this?
 * 
 * That's because RPG Maker MZ's "Change Window Color" event command does the
 * same thing and we have no intentions of altering how it behaves to keep the
 * otherwise-global aspect.
 * 
 * ---
 *
 * ============================================================================
 * Options Category: General
 * ============================================================================
 *
 * The following are the options that have been added to the Options Menu. This
 * is the default "General" category that appears with the plugin parameters.
 * These can be added and/or removed. If a new option has been added through an
 * update, then there's a likelihood of it not appearing due to the plugin
 * parameters not being updated with them.
 *
 * === Exploration ===
 *
 * These options adjust the general exploration aspects of the game.
 *
 * ---
 *
 * Always Dash
 * - A default option that came with RPG Maker MZ.
 * - If ON, then this puts the player character in a constant state of dashing
 *   unless the Dash button is held down.
 *   - OFF: Walks normally. Holding down Dash button will make player dash.
 *   - ON: Dashes normally. Holding down Dash button will make player walk.
 *
 * ---
 *
 * Autosave
 * - Requires: VisuMZ_1_SaveCore
 * - Lets the player choose whether or not they want autosaving in their game.
 *   - OFF: Autosaves are disabled.
 *   - ON: Autosaves are enabled and occur at the set conditions.
 *
 * ---
 *
 * Show Compass
 * - Requires: VisuMZ_4_ProximityCompass
 * - Displays the Proximity Compass in the corner of the screen.
 *   - OFF: Compass is hidden.
 *   - ON: Compass is shown.
 * 
 * ---
 *
 * Compass Size
 * - Requires: VisuMZ_4_ProximityCompass
 * - Changes the size of the compass.
 *   - 50% for Smallest
 *   - 100% for Largest
 * 
 * ---
 * 
 * Show Date & Time
 * - Requires: VisuMZ_2_DateTimeSystem
 * - Displays the Date & Time HUD in the corner of the screen.
 *   - OFF: HUD is hidden.
 *   - ON: HUD is shown.
 * 
 * ---
 *
 * Show Quest Tracker
 * - Requires: VisuMZ_2_QuestSystem
 * - Player can choose if they want the Quest Tracker Window to appear on the
 *   map scene as they explore.
 *   - OFF: Quest Tracker Window does not appear.
 *   - ON: Quest Tracker Window is visible.
 *
 * ---
 *
 * Quest Tracker Position
 * - Requires: VisuMZ_2_QuestSystem
 * - Lets the player decide which half of the screen the Quest Tracker Window
 *   should appear.
 *   - ←: Quest Tracker Window appears on the left.
 *   - →: Quest Tracker Window appears on the right.
 *
 * ---
 *
 * Random Encounters
 * - Sometimes, random encounters can really take away the enjoyment a player
 *   has for the game if it's too frequent. This option lets the player turn
 *   them off or reduce their frequency by half.
 *   - None: No random encounters while this is selected.
 *   - Half: Random encounters occur at half frequency.
 *   - Normal: Random encounters occur at normal frequency.
 *
 * ---
 * 
 * Show Tutorials
 * - Requires: VisuMZ_2_TutorialPanelSys
 * - Allows tutorials to interrupt gameplay in order to teach the player about
 *   whatever new mechanic needs to be done.
 *   - OFF: Tutorials won't turn on but can still be accessed from main menu.
 *   - ON: Tutorials will halt gameplay to teach the player.
 * 
 * ---
 *
 * === Battle ===
 *
 * These options adjust the general battle aspects of the game.
 *
 * ---
 * 
 * Show Battle Animations:
 * - Players might want to turn off or some battle animations for various
 *   reasons. As examples, battle animations may take a toll on some players'
 *   computers while others might find them too distracting.
 *   - OFF: All battle animations are turned off.
 *   - SOME: Animations that aren't part of a skill/item's action sequence will
 *     not be displayed.
 *   - ON: All battle animations are visible.
 * 
 * ---
 *
 * Battle Animation Speed:
 * - Battles can become a slog for some types of players. This option comes
 *   with four speed types to blaze through the battle while animations are
 *   playing. Fret not, if it's time for an actor to input actions, then the
 *   battle speed will temporarily revert to normal speed.
 *   - Normal: The usual battle speed.
 *   - Fast: x2 the usual battle speed.
 *   - Faster: x3 the usual battle speed.
 *   - Fastest: x4 the usual battle speed.
 *
 * ---
 *
 * Battle Camera
 * - Requires: VisuMZ_3_ActSeqCamera
 * - Allows the player to turn on/off the camera in case the player is one
 *   who gets motion sick easily.
 *   - OFF: Battle camera is static and doesn't move/zoom.
 *   - ON: Battle camera has full range of movement and zoom.
 *
 * ---
 *
 * Command Remember
 * - A default Options menu command that remembers the last position of the
 *   battle input window.
 *   - OFF: Cursor position resets each time the battle input window is active.
 *   - ON: Cursor position remembers last position for battle input window.
 *
 * ---
 *
 * Active Battle Style
 * - Requires: VisuMZ_2_BattleSystemATB
 * - Lets the player switch betweent "Wait" and "Active".
 *   - Wait: ATB gauges stop filling up the moment an actor can input.
 *   - Active: ATB gauges keep filling even if actors can input.
 *
 * ---
 *
 * Active Battle Speed
 * - Requires: VisuMZ_2_BattleSystemATB
 * - Lets the player control how fast ATB gauges fill up.
 * - 1 for slowest.
 * - 5 for fastest.
 *
 * ---
 *
 * Auto Battle Start
 * - Requires: VisuMZ_1_BattleCore
 * - Start battles with Auto Battle on/off?
 *   - OFF: Battles do not start with Auto Battle on.
 *   - ON: Battles start with Auto Battle on.
 *
 * ---
 *
 * Auto Battle Style
 * - Requires: VisuMZ_1_BattleCore
 * - Determine if Auto Battle for the player party will attack only or be
 *   allowed to use skills as well.
 *   - Attack: Auto Battle actors will attack only.
 *   - Skills: Auto Battle actors can also use skills.
 * 
 * ---
 *
 * === Screen ===
 *
 * These options adjust the general screen-related aspects of the game.
 *
 * ---
 *
 * Display FPS
 * - Turns on/off the FPS counter in the upper left section of the screen.
 *
 * ---
 * 
 * Limit FPS
 * - Allows player to limit FPS counter. If ON, limit becomes 60. If off, the
 *   FPS counter is uncapped to whatever the player's monitor allows.
 * 
 * ---
 *
 * Full Screen
 * - Switches the game client between windowed mode and full screen.
 *
 * ---
 *
 * Stretch Screen
 * - If the game client is larger than the screen, then the game's canvas will
 *   stretch to fit the client. Turn this on or off.
 *
 * ---
 * 
 * Special Effects
 * - Requires: VisuMZ_2_BrightEffects and/or VisuMZ_2_HorrorEffects
 * - When using VisuStella MZ's Horror Effects or Bright Effects, users can opt
 *   to disable those effects by turning this option on/off.
 * 
 * ---
 * 
 * Dust Clouds
 * - Requires: VisuMZ_2_MovementEffects
 * - Plays dust cloud effects when the player and followers are running across
 *   the screen.
 * 
 * ---
 * 
 * Footprint Marks
 * - Requires: VisuMZ_2_MovementEffects
 * - Puts footprints down on the screen when the character sprites are moving
 *   on the screen.
 * 
 * ---
 * 
 * Smooth Scroll
 * - Requires: VisuMZ_2_MovementEffects
 * - Gradually shifts the screen camera to the player position.
 * 
 * ---
 * 
 * Blinking Lights
 * - Requires: VisuMZ_2_LightingEffects
 * - Turns off blinking effect from lighting effects.
 * 
 * ---
 * 
 * Pulsing Lights
 * - Requires: VisuMZ_2_LightingEffects
 * - Turns off pulsing effect from Lighting effects.
 * 
 * ---
 * 
 * Weather Density
 * - Requires: VisuMZ_2_WeatherEffects
 * - Allows players to control the density of weather patterns if it may be too
 *   much for their devices to handle.
 * 
 * ---
 *
 * === Controls ===
 *
 * These options adjust the keyboard and controller buttons and what functions
 * are assigned to them. The player can use these commands to rebind them.
 * These settings require VisuMZ_0_CoreEngine and for rebindings to be enabled
 * in the Plugin Parameters.
 *
 * ---
 * 
 * Rebind Keyboard
 * - Requires: VisuMZ_0_CoreEngine
 * - Allows players to rebind their keyboard controls.
 * 
 * ---
 * 
 * Rebind Gamepad
 * - Requires: VisuMZ_0_CoreEngine
 * - Allows players to rebind their gameplad controls.
 *   - Gamepad must be connected.
 * 
 * ---
 *
 * ============================================================================
 * Options Category: Audio
 * ============================================================================
 *
 * The following are the options that have been added to the Options Menu. This
 * is the default "Audio" category that appears with the plugin parameters.
 * These can be added and/or removed. If a new option has been added through an
 * update, then there's a likelihood of it not appearing due to the plugin
 * parameters not being updated with them.
 *
 * === Volume ===
 *
 * These options adjust the volume-related aspects of the game.
 *
 * ---
 *
 * Master Volume
 * - The master volume sets the volume of all the other volume types by a
 *   proportional amount from 0% to 100%.
 * - The Options Core allows players to adjust the volume in increments of 10%
 *   instead of the 20% by default.
 *
 * ---
 *
 * BGM Volume
 * - Controls the background music volume by a value between 0% and 100%.
 * - The Options Core allows players to adjust the volume in increments of 10%
 *   instead of the 20% by default.
 *
 * ---
 *
 * BGS Volume
 * - Controls the background ambience volume by a value between 0% and 100%.
 * - The Options Core allows players to adjust the volume in increments of 10%
 *   instead of the 20% by default.
 *
 * ---
 *
 * ME Volume
 * - Controls the fanfare volume by a value between 0% and 100%.
 * - The Options Core allows players to adjust the volume in increments of 10%
 *   instead of the 20% by default.
 *
 * ---
 *
 * SE Volume
 * - Controls the sound effect volume by a value between 0% and 100%.
 * - The Options Core allows players to adjust the volume in increments of 10%
 *   instead of the 20% by default.
 * 
 * ---
 * 
 * Voice Volume:
 * - Requires: VisuMZ_2_VoiceActControl
 * - Allows players to adjust the volume of the voice audio channel instead of
 *   having it linked to the SE audio channel. This is so players can choose to
 *   turn off sound effects while still hearing voices or vice versa.
 * 
 * ---
 * 
 * Voice Language:
 * - Requires: VisuMZ_2_VoiceActControl & Audio Languages enabled
 * - Allows players switch audio languages spoken by in-game characters.
 * 
 * ---
 * 
 * Advanced Sound Options
 * - Requires: Tome571/TF's "Advanced Sound Options plugin"
 * - Allows for very specialized control over sound settings.
 * - https://tome571.itch.io/advanced-audio-options-rmmz
 * 
 * ---
 *
 * === Sound Effects ===
 *
 * These options adjust the sound effects-related aspects of the game.
 *
 * ---
 * 
 * Battle Voices
 * - Requires: VisuMZ_3_BattleVoices
 * - Allows player to toggle the playing of battle voices in-battle.
 * 
 * ---
 * 
 * Footstep Sounds
 * - Requires: VisuMZ_2_MovementEffects
 * - Plays footstep sounds when the character sprites are moving on screen.
 * 
 * ---
 * 
 * Letter Sounds
 * - Requires VisuMZ_3_MessageSounds
 * - Allows player to toggle the playing of letter sounds for messages.
 * 
 * ---
 *
 * Sound Effects:
 * Cursor SFX:
 * Confirm SFX:
 * Cancel SFX:
 * Buzzer SFX:
 * - Not all sound effects register well with players and/or their computers.
 * - This lets players pick different sound effects if they have trouble
 *   hearing certain ones.
 *
 * ---
 *
 * ============================================================================
 * Options Category: UI
 * ============================================================================
 *
 * The following are the options that have been added to the Options Menu. This
 * is the default "UI" category that appears with the plugin parameters.
 * These can be added and/or removed. If a new option has been added through an
 * update, then there's a likelihood of it not appearing due to the plugin
 * parameters not being updated with them.
 *
 * === Windows ===
 *
 * These options adjust the Windows UI-related aspects of the game.
 *
 * ---
 *
 * Window Tone: Red:
 * Window Tone: Green:
 * Window Tone: Blue:
 * - Allows the player to adjust the Window Tone to their liking. This helps
 *   give players a more personal touch on their save file.
 *
 * ---
 *
 * === Text ===
 *
 * These options adjust the Text-related aspects of the game.
 *
 * ---
 * 
 * Text Language:
 * - Requires: VisuMZ_1_MessageCore & Text Languages to be enabled
 * - Allows the player to switch between different languages in the game.
 * - Languages are set up by the Message Core.
 * 
 * ---
 *
 * Text Font:
 * - Certain fonts are harder to read for different players. Let the players
 *   pick the font the game uses to allow themselves maximum comfort.
 *
 * ---
 *
 * Text Speed
 * - Requires: VisuMZ_1_MessageCore
 * - Allows the player to set the speed at which text displays during messages.
 * - There are speeds 1 through 10, with 1 being the slowest and 10 being the
 *   fastest.
 * - Speed 11 is "Instant" which causes text to display instantly.
 * 
 * ---
 * 
 * Text Effects
 * - Requires: VisuMZ_2_AniMsgTextEffects
 * - Allows the player to toggle animated text effects.
 *
 * ---
 *
 * === Touch Input ===
 *
 * These options adjust the Touch UI-related aspects of the game.
 *
 * ---
 *
 * Touch UI
 * - Requires VisuMZ_0_CoreEngine
 * - This sets the visibility of the UI elements that are touch-only in the
 *   game such as the cancel button and the left/right actor switch buttons.
 *   - OFF: The touch-only UI elements do not appear.
 *   - ON: The touch-only UI elements do appear.
 *
 * ---
 *
 * Button Position:
 * - Requires VisuMZ_0_CoreEngine
 * - Moves the clickable Cancel button, Page Up button, and Page down button
 *   to either the top of the screen or bottom of the screen.
 *
 * ---
 *
 * Hover Select:
 * - Turn on/off Hover Select when using the mouse. If Hover Select is on, then
 *   the window cursor will automatically follow the mouse when applicable.
 *   Otherwise, the player will have to manually move the cursor.
 *
 * ---
 *
 * === Menu Arrangement ===
 *
 * These options adjust the Menu Arrangement-related aspects of the game.
 *
 * ---
 *
 * Menu Style
 * - Switch between 'Recommended' and 'Custom'. Recommended will have the menus
 *   arranged in the way the game/plugins decide for them to be. Otherwise,
 *   the player will be able to customize the positions of these next windows:
 *
 * ---
 *
 * Help Window Position:
 * Input Window Position:
 * - Adjust the positions of these windows in the various positions listed to
 *   allow the player to select what they're most comfortable with.
 *
 * ---
 *
 * === Battle UI ===
 *
 * These options adjust the Battle UI-related aspects of the game.
 *
 * ---
 *
 * Show Provoke Origin
 * - Requires VisuMZ_2_AggroControlSystem
 * - If a battler is under the effects of "Provoke", then a line tracing back
 *   to the origin of the "Provoke" effect can be found.
 *   - OFF: Hide the Provoke Origin lines.
 *   - ON: Show the Provoke Origin lines.
 *
 * ---
 *
 * Show Aggro Gauge
 * - Requires VisuMZ_2_AggroControlSystem
 * - Displays the amount of aggro a party member has with a gauge.
 *   - OFF: The Aggro Gauge is hidden.
 *   - ON: The Aggro Gauge is visible.
 *
 * ---
 *
 * Show HP Gauges
 * - Requires VisuMZ_3_VisualHpGauge
 * - Displays the amount of HP each battler has with a gauge under their feet.
 *   - OFF: The battlefield's HP Gauges are hidden.
 *   - ON: The battlefield's HP Gauges are visible.
 *
 * ---
 *
 * Show ATB Gauges
 * - Requires VisuMZ_2_BattleSystemATB
 * - Displays ATB gauges on each battler showing how much time they have left
 *   before they can act.
 *   - OFF: The battlefield's ATB Gauges are hidden.
 *   - ON: The battlefield's ATB Gauges are hidden.
 *
 * ---
 *
 * ============================================================================
 * Options Category: Playtest
 * ============================================================================
 *
 * The following are the options that have been added to the Options Menu. This
 * is the default "Text" category that appears with the plugin parameters.
 * These can be added and/or removed. If a new option has been added through an
 * update, then there's a likelihood of it not appearing due to the plugin
 * parameters not being updated with them.
 * 
 * *NOTE* Unless changed, this category only appears during playtesting and
 * does not appear outside of playtesting, which means deployed games should
 * not display this unless you've given them access to playtest mode.
 *
 * === Effects ===
 * 
 * ---
 *
 * Playtest Effects:
 * - If this is 'OFF', then all the Playtesting options are turned off. If 'ON'
 *   then you can adjust them however you like.
 *
 * ---
 * 
 * === Exploration ===
 * 
 * These options adjust the Playtest Exploration-related aspects of the game.
 * 
 * ---
 *
 * Map Update Speed:
 * - Allows you to speed up the events and movement on the map with four speed
 *   levels ranging from normal to x3 speed.
 *   - Normal: The usual update speed.
 *   - Fast: x2 the usual update speed.
 *   - Faster: x3 the usual update speed.
 *   - Fastest: x4 the usual update speed.
 *
 * ---
 *
 * Random Encounters:
 * - Sometimes, random encounters can really take away the enjoyment a player
 *   has for the game if it's too frequent. This option lets the player turn
 *   them off or reduce their frequency by half.
 *   - None: No random encounters while this is selected.
 *   - Half: Random encounters occur at half frequency.
 *   - Normal: Random encounters occur at normal frequency.
 *
 * ---
 * 
 * === Battle ===
 * 
 * These options adjust the Playtest Battle-related aspects of the game.
 * 
 * ---
 *
 * God Mode:
 * - If this is ON, then actors will be unable to die even if their HP reaches
 *   0. They will continue to act as if they still have HP left.
 *
 * ---
 *
 * Resist Negative Effects:
 * - Requires VisuMZ_1_SkillsStatesCore.
 * - If ON, this will resist states with a <Negative State> notetag.
 * - If ON, this will also resist debuffs.
 *
 * ---
 *
 * Instant K.O.
 * - If ON, then actors attacking enemies will deal fatal damage to enemies.
 *
 * ---
 *
 * Skill Costs:
 * Consume Items:
 * - If OFF, then skills won't cost anything and items won't be consumed.
 *
 * ---
 * 
 * === Rewards ===
 * 
 * These options adjust the Playtest Rewards-related aspects of the game.
 * 
 * ---
 *
 * EXP Multiplier:
 * Gold Multiplier:
 * Drop Multiplier:
 * - Allows you to adjust the multipliers for EXP gained, Gold gained, and
 *   Drop rates from x2 to x1024.
 *
 * ---
 * 
 * === Spawners ===
 * 
 * These options adjust the Playtest Spawner-related aspects of the game.
 * 
 * ---
 *
 * Spawn Items:
 * Spawn Weapons:
 * Spawn Armors:
 * - Sends you to a "shop" where you can purchase any of the game's named items
 *   for 0 gold each.
 *
 * ---
 * 
 * === Debug ===
 * 
 * These options adjust the Playtest Debug-related aspects of the game.
 * 
 * ---
 *
 * Debug Menu:
 * - Sends you to the Debug Menu Scene.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * Allows you to adjust some default settings that may affect the way the
 * Options Menu Scene looks and/or some of the options available inside it.
 *
 * ---
 *
 * Categories
 * 
 *   Category Window Style:
 *   - How do you wish to draw commands in the Category Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Category Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Background Type:
 *   - Select background type for this window.
 *
 * ---
 * 
 * Options Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 * ---
 *
 * Button Assist Window
 *
 *   Switch Category:
 *   - Button assist text used for switching categories.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 * 
 *   Background Type:
 *   - Select background type for this window.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Sound
 * 
 *   Cursor Sounds:
 *   OK Sounds:
 *   Cancel Sounds:
 *   Buzzer Sounds:
 *   - SE files player can select from for OK SE.
 *   - The first in the list will always be the default SE.
 *
 * ---
 *
 * Text
 * 
 *   Font Options:
 *   - Available fonts for the player to select from.
 *   - The first font in the list is always be the default font.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Categories
 * ============================================================================
 *
 * Here, you can add/edit/remove the categories found in the Options Menu Scene
 * and their related Options.
 *
 * ---
 *
 * Options Categories
 * 
 *   Name:
 *   - The name of this category as seen in the Category Window.
 *   - Text codes are supported.
 * 
 *   Icon:
 *   - Icon used for this category.
 *   - Use 0 for no icon.
 * 
 *   JS: Show/Hide:
 *   - Code used to determine if this category is visible.
 * 
 *   Options List:
 *   - Add options to this category here.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Listed Options
 * ============================================================================
 *
 * These are the Options found within an Options Category's List. Add, edit,
 * and/or remove them as you see fit. Adding or altering an option will require
 * adequate knowledge of JavaScript to do so.
 *
 * ---
 *
 * Basic
 * 
 *   Symbol:
 *   - Symbol used for this option when selected.
 *   - Make sure this is unique from other symbols.
 * 
 *   Icon:
 *   - Icon used for this option.
 *   - Use 0 for no icon.
 * 
 *   STR: Text:
 *   - Displayed text used for this option.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 *
 * ---
 *
 * Accessibility
 * 
 *   JS: Show/Hide:
 *   - Code used to determine if this option is visible.
 * 
 *   JS: Enable:
 *   - Code used to determine if this option is enabled.
 *   - This does NOT determine the ON/OFF value of the option. It instead
 *     determines if the option can be changed (enabled) or not (disabled).
 * 
 *   JS: Ext:
 *   - Code used to determine if this option's ext value.
 *
 * ---
 *
 * Functions
 * 
 *   JS: Draw Option:
 *   - Code used to draw this item into the List Window.
 * 
 *   JS: Process OK:
 *   - Code used when OK button is pressed while selected.
 * 
 *   JS: Cursor Right:
 *   - Code used when Right button is pressed while selected.
 * 
 *   JS: Cursor Left:
 *   - Code used when Left button is pressed while selected.
 *
 * ---
 *
 * Data
 * 
 *   JS: Default Value:
 *   - Code used to determine the default value of this option.
 *   - This is what determines the default ON/OFF values of an option.
 * 
 *   JS: Save Option:
 *   - Code used when saving this options setting.
 * 
 *   JS: Load Option:
 *   - Code used when loading this options setting.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Keyboard/Controller Rebind Settings
 * ============================================================================
 *
 * Requires VisuMZ_0_CoreEngine!
 * 
 * These new Options Core menu commands will take the player to new scenes
 * where the players can rebind their keyboard or controller settings. This
 * will require the VisuStella MZ Core Engine in order to work.
 * 
 * ==== Keyboard Limitations ====
 * 
 * Not all keyboard keys are eligible for rebinding. Only a certain set of
 * keys are allowed. They are the following:
 * 
 *   - Numbers on the top row from 1 through 0.
 *   - Tilde (~), Minus (-), Plus/Equals (+/=)
 *   - Keys A through Z
 *   - [ ] \ ; ' < > /
 * 
 * The reason why only these keys are available is to avoid hitting any other
 * system bound keys like the function keys, caps lock, etc. These will also
 * function as a second set of controls with default controls bound to the
 * arrow keys, Enter, Space, Escape, and Numpad. This way, the player cannot
 * softlock themselves out of the key rebinding scene.
 * 
 * ---
 * 
 * ==== Gamepad Limitations ====
 * 
 * Just like the keyboard, not everything on the controller is eligible for
 * rebinding. However, the limitations are much less as the limitations are
 * only forbidden from rebinding the D-Pad. The reason for this is due to how
 * D-Pad actions may be hardcoded for some controllers and are better left
 * alone instead.
 * 
 * Gamepads cannot remove individual keys from bindings like keyboards can.
 * This is because there's no fallback key that would prevent a softlock from
 * happening. Instead, they get a function to reset the controller.
 * 
 * ---
 * 
 * ==== Plugin Parameters ====
 *
 * ---
 *   
 * General Settings:
 *   
 *   Enable Rebinding?:
 *   - Enable keyboard and controller rebinding?
 *   - Requires VisuMZ_0_CoreEngine!
 *   
 *   Keyboard Bindings:
 *   - Select the keys that can be rebound and the order they appear for
 *     keyboard. 
 *   
 *   Gamepad Bindings:
 *   - Select the keys that can be rebound and the order they appear for
 *     gamepad. 
 *   
 *     JS: Reset Gamepad:
 *     - Determine how the gamepad map should be when reset. 
 * 
 * ---
 *   
 * Vocabulary:
 *   
 *   Button Vocab:
 *   
 *     Up:
 *     Left:
 *     Down:
 *     Right:
 *     OK:
 *     Escape:
 *     Cancel:
 *     Menu:
 *     Page Up:
 *     Page Down:
 *     Shift:
 *     Tab:
 *     - Text used to represent this input type. Text codes allowed.
 * 
 *     Button Format:
 *     - Text format for unassigned gamepad buttons.
 *     - Text codes allowed.
 *     - %1 - Button ID.
 *   
 *     D-Pad Format:
 *     - Text format for directional pad buttons.
 *     - Text codes allowed.
 *     - %1 - Direction.
 *   
 *   Button Assist:
 *   
 *     Shift: Remove:
 *     Shift: Reset:
 *     OK: Select:
 *     Cancel: Exit:
 *     - Text used to represent this button assist. 
 *   
 *   Help Descriptions:
 *   
 *     Select for Keyboard:
 *     - Help description used for selecting a keyboard button.
 *     - Text codes allowed.
 *   
 *     Keyboard Instruct:
 *     - Help description used to ask for a key to press.
 *     - Text codes allowed.
 *   
 *     Forbidden Key:
 *     - Help description used when a keyboard key cannot be used.
 *     - Text codes allowed.
 *   
 *     Select for Gamepad:
 *     - Help description used for selecting a gamepad button.
 *     - Text codes allowed.
 *   
 *     Gamepad Instructions:
 *     - Help description used to ask for a gamepad button to press.
 *     - Text codes allowed.
 *   
 *     Forbidden Button:
 *     - Help description used when a gamepad button cannot be reassigned.
 *     - Text codes allowed.
 *   
 *     No Gamepad Detected:
 *     - Help description used when no gamepad is detected.
 *     - Text codes allowed.
 * 
 * ---
 *   
 * Window Settings:
 *   
 *   Window_Help:
 *   
 *     Background Type:
 *     - Select background type for this window. 
 *   
 *   Window_KeyRebinds:
 *   
 *     Background Type:
 *     - Select background type for this window. 
 *   
 *     Key Type Align:
 *     - Text alignment for the key types? 
 *   
 *     Rebind Key Align:
 *     - Text alignment for the rebind key? 
 *   
 *     JS: X, Y, W, H:
 *     - Code used to determine the dimensions for this window. 
 *   
 *   Window_RebindHelp:
 *   
 *     Background Type:
 *     - Select background type for this window. 
 *   
 *     JS: X, Y, W, H:
 *     - Code used to determine the dimensions for this window. 
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Master Volume Shortcut Settings
 * ============================================================================
 *
 * Settings regarding the Master Volume Shortcut keys. Requires the
 * Options Core to allow players to adjust the master volume.
 * 
 * Shortcut: Ctrl + PageUp / Ctrl + PageDn
 *
 * ---
 *
 * Shortcut
 * 
 *   Enabled?:
 *   - Enable the shortcut?
 *   - Shortcut: Ctrl + PageUp / Ctrl + PageDn
 * 
 *   Shortcut Change Value:
 *   - What is the change amount for the shortcut key?
 *   - Master volume caps at 0 and 100.
 *
 * ---
 *
 * Sound Effects > Volume Up
 * 
 *   Filename:
 *   - Filename of the sound effect played.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 *
 * ---
 *
 * Sound Effects > Volume Down
 * 
 *   Filename:
 *   - Filename of the sound effect played.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
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
 * Version 1.26: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Keyboard and Controller Rebinding added!
 * *** New General Option added: "Limit FPS"
 * **** Allows player to limit FPS counter. If ON, limit becomes 60. If off,
 *      the FPS counter is uncapped to whatever the player's monitor allows.
 * *** New Plugin Parameters added for Keyboard and Controller Rebinding.
 * **** See help file for more information.
 * *** Added Keyboard and Controller Rebinding access to Options menu.
 * *** If you want to acquire these settings for an already-existing project,
 *     do either of the following:
 * **** Delete the existing VisuMZ_1_OptionsCore.js in the Plugin Manager list
 *      and install the newest version.
 * **** Or create a new project, install VisuMZ_1_OptionsCore.js there, then
 *      copy over the "General" plugin parameters found in the Options Category
 *      plugin parameter settings to your current project.
 * 
 * Version 1.25: January 18, 2024
 * * Compatibility Update!
 * ** Added compatibility for Message Core's new Text Language options:
 * ** Added compatibility for Voice Acting Control's Voice Language options:
 * *** If you want to acquire these settings for an already-existing project,
 *     do either of the following:
 * **** Delete the existing VisuMZ_1_OptionsCore.js in the Plugin Manager list
 *      and install the newest version.
 * **** Or create a new project, install VisuMZ_1_OptionsCore.js there, then
 *      copy over the "Audio" and "UI" plugin parameters found in the Options
 *      Category plugin parameter settings to your current project.
 * * Documentation Update!
 * ** Help file updated for new features.
 * 
 * Version 1.24: December 14, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * ** Date & Time System
 * *** If you want to acquire these settings for an already-existing project,
 *     do either of the following:
 * **** Delete the existing VisuMZ_1_OptionsCore.js in the Plugin Manager list
 *      and install the newest version.
 * **** Or create a new project, install VisuMZ_1_OptionsCore.js there, then
 *      copy over the General plugin parameters found in the Options Category
 *      plugin parameter settings to your current project.
 * * Documentation Update!
 * ** Help file updated for new features.
 * 
 * Version 1.23: June 15, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * ** Voice Acting Control and Battle Voices
 * *** If you want to acquire these settings for an already-existing project,
 *     do either of the following:
 * **** Delete the existing VisuMZ_1_OptionsCore.js in the Plugin Manager list
 *      and install the newest version.
 * **** Or create a new project, install VisuMZ_1_OptionsCore.js there, then
 *      copy over the Audio plugin parameters found in the Options Category
 *      plugin parameter settings to your current project.
 * * Documentation Update!
 * ** Help file updated for new features.
 * 
 * Version 1.22: January 20, 2023
 * * Added compatibility functionality for future plugin:
 * ** Animated Message Text Effects
 * *** If you want to acquire these settings for an already-existing project,
 *     do either of the following:
 * **** Delete the existing VisuMZ_1_OptionsCore.js in the Plugin Manager list
 *      and install the newest version.
 * **** Or create a new project, install VisuMZ_1_OptionsCore.js there, then
 *      copy over the UI plugin parameters found in the Options Category plugin
 *      parameter settings to your current project.
 * 
 * Version 1.21: October 27, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Added compatibility functionality for future plugin:
 * ** Tutorial Panel System
 * *** If you want to acquire these settings for an already-existing project,
 *     do either of the following:
 * **** Delete the existing VisuMZ_1_OptionsCore.js in the Plugin Manager list
 *      and install the newest version.
 * **** Or create a new project, install VisuMZ_1_OptionsCore.js there, then
 *      copy over the General and Audio settings found in the Options Category
 *      plugin parameter to your current project.
 * * New Features!
 * ** Added "Master Volume Shortcut" Plugin Parameters.
 * *** Change the master volume anywhere in the game as long as the Options
 *     Core allows players to adjust the Master Volume.
 * *** Shortcut: Ctrl + PageUp / Ctrl + PageDn
 * 
 * Version 1.20: September 15, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Button Assist Window no longer follows the Core Engine's Option Scene
 *    settings, but instead follows the Button Assist Window's settings.
 *    Update made by Arisu.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Parameters > Options Settings > Categories > Background Type
 * *** Parameters > Options Settings > Options Window > Background Type
 * *** Parameters > Options Settings > Button Assist Window > Background Type
 * **** Select background type for this window.
 * 
 * Version 1.19: August 11, 2022
 * * Feature Update!
 * ** VisuMZ Core Engine menu layout window settings now apply to all windows
 *    found in the Options Scene. Update made by Arisu.
 * 
 * Version 1.18: March 3, 2022
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins: "Movement Effects",
 *    "Weather Effects", and "Lighting Effects". Hold on tight!
 * *** If you want to acquire these settings for an already-existing project,
 *     do either of the following:
 * **** Delete the existing VisuMZ_1_OptionsCore.js in the Plugin Manager list
 *      and install the newest version.
 * **** Or create a new project, install VisuMZ_1_OptionsCore.js there, then
 *      copy over the General and Audio settings found in the Options Category
 *      plugin parameter to your current project.
 * 
 * Version 1.17: December 30, 2021
 * * Bug Fixes!
 * ** Residual old code is now disabled from appearing on deployed projects if
 *    any carry over config data is brought over from the playtesting phase.
 * ** Yep, again again.
 * ** We had to call in the big boss to fix this.
 * 
 * Version 1.16: December 23, 2021
 * * Bug Fixes!
 * ** Residual old code is now disabled from appearing on deployed projects if
 *    any carry over config data is brought over from the playtesting phase.
 *    Fix made by Arisu.
 * ** Yep, again.
 * 
 * Version 1.15: December 16, 2021
 * * Bug Fixes!
 * ** Residual old code is now disabled from appearing on deployed projects if
 *    any carry over config data is brought over from the playtesting phase.
 *    Fix made by Arisu.
 * 
 * Version 1.14: December 9, 2021
 * * Compatibility Update!
 * ** Full Screen options have been updated to match the newest version of RPG
 *    Maker MZ's NodeJS client. Update made by Olivia.
 * *** The "Full Screen" settings have been updated in General settings. If
 *     you want to acquire these updated settings for an already-existing
 *     project, do either of the following:
 * **** Delete the existing VisuMZ_1_OptionsCore.js in the Plugin Manager list
 *      and install the newest version.
 * **** Or create a new project, install VisuMZ_1_OptionsCore.js there, then
 *      copy over the General settings found in the Options Category plugin
 *      parameter to your current project.
 * 
 * Version 1.13: April 23, 2021
 * * Documentation Update!
 * ** Added clarity for some of the JS plugin parameters:
 * *** JS: Enable:
 * **** This does NOT determine the ON/OFF value of the option. It instead
 *      determines if the option can be changed (enabled) or not (disabled).
 * *** JS: Default Value:
 * **** This is what determines the default ON/OFF values of an option.
 * 
 * Version 1.12: April 9, 2021
 * * Bug Fixes!
 * ** Turning Touch UI off should no longer disable the Button Assist Text for
 *    the Page Up/Down buttons from the Core Engine. Fix made by Olivia.
 * 
 * Version 1.11: April 2, 2021
 * * Bug Fixes!
 * ** Default "Special Effects" option added in v1.10 should now have a fixed
 *    load data sequence that does not force open the FPS counter. To acquire
 *    the fixed settings, do either of the following:
 * *** Delete the existing VisuMZ_1_OptionsCore.js in the Plugin Manager list
 *      and install the newest version.
 * *** Or create a new project, install VisuMZ_1_OptionsCore.js there, then
 *      copy over the General settings found in the Options Category plugin
 *      parameter to your current project.
 * * Documentation Update!
 * ** Added "Understanding Options" section.
 * ** Options Category: General section updated with "Special Effects" which
 *    was left out of the v1.10 update.
 * * Feature Update!
 * ** Default settings will now run regardless of undefined setting provided
 *    that their other conditions for usage have showed up first. This is to
 *    reduce confusion for users. Update made by Yanfly.
 * 
 * Version 1.10: March 12, 2021
 * * Compatibility Update!
 * ** Added compatibility for VisuStella MZ Bright Effects and Horror Effects.
 * *** "Special Effects" option allows users to turn on/off filters applied by
 *     the Bright Effects and Horror Effects plugins.
 * *** The "Special Effects" settings have been added to General settings. If
 *     you want to acquire these settings for an already-existing project, do
 *     either of the following:
 * **** Delete the existing VisuMZ_1_OptionsCore.js in the Plugin Manager list
 *      and install the newest version.
 * **** Or create a new project, install VisuMZ_1_OptionsCore.js there, then
 *      copy over the General settings found in the Options Category plugin
 *      parameter to your current project.
 * * Documentation Update!
 * ** Added Bright Effects and Horror Effects to the list of plugins with Extra
 *    Features. Update made by Olivia.
 * 
 * Version 1.09: January 29, 2021
 * * Compatibility Update
 * ** Added compatibility for Tome571/TF's "Advanced Sound Options plugin".
 * *** Default settings have been added to the Audio settings. If you want to
 *     acquire these settings for an already-existing project, do either of the
 *     following:
 * **** Delete the existing VisuMZ_1_OptionsCore.js in the Plugin Manager list
 *      and install the newest version.
 * **** Or create a new project, install VisuMZ_1_OptionsCore.js there, then
 *      copy over the Audio settings found in the Options Category plugin
 *      parameter to your current project.
 * 
 * Version 1.08: January 8, 2021
 * * Bug Fixes!
 * ** JS: Enabled accessibility option should now be working properly.
 * * Feature Update!
 * ** Disabled options should now be faded out completely.
 * 
 * Version 1.07: November 15, 2020
 * * Optimization update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: November 8, 2020
 * * Feature Update!
 * ** Modern Controls compatibility with Core Engine no longer enables the
 *    Item Categories window and child classes to utilize the Home/End keys.
 *
 * Version 1.05: October 18, 2020
 * * Optimization update!
 * 
 * Version 1.04: September 27, 2020
 * * Compatibility Update!
 * ** This plugin should offer better compatibility for future plugins!
 *    Update made by Yanfly.
 * 
 * Version 1.03: September 20, 2020
 * * Compatibility Update!
 * ** This plugin should offer better compatibility for future plugins!
 *    Update made by Yanfly.
 * 
 * Version 1.02: September 13, 2020
 * * Optimization Update!
 * ** Scrolling through menus should consume less resources.
 * 
 * Version 1.01: August 30, 2020
 * * Bug Fixes!
 * ** Before, already existing Options available in the RPG Maker MZ base code
 *    such as BGM Volume, Command Remember, Always Dash, and so on, would not
 *    have their default values declared through the Options Core. The Options
 *    Core now changes this functionality and gives priority to the Plugin
 *    Parameter settings declared by the game dev. Fix made by Yanfly.
 *
 * Version 1.00: August 20, 2020
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
 * @param OptionsCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param OptionsSettings:struct
 * @text Options Settings
 * @type struct<OptionsSettings>
 * @desc General settings pertaining to options found here.
 * @default {"Categories":"","CategoryStyle:str":"auto","CategoryTextAlign:str":"center","Sound":"","SFXCursorList:arraystr":"[\"Default\",\"Book2\",\"Coin\",\"Cursor1\",\"Cursor2\",\"Hammer\",\"Key\",\"Knock\",\"Open1\",\"Open2\",\"Open3\",\"Paralyze1\"]","SFXOKList:arraystr":"[\"Default\",\"Bell3\",\"Computer\",\"Decision2\",\"Flash1\",\"Bell3\",\"Cat\",\"Item1\",\"Item2\",\"Item3\",\"Ice4\",\"Decision1\"]","SFXCancelList:arraystr":"[\"Default\",\"Absorb1\",\"Book1\",\"Cancel1\",\"Cancel2\",\"Raise2\",\"Skill1\",\"Dog\",\"Shot2\",\"Ice3\",\"Magic1\",\"Magic2\"]","SFXBuzzerList:arraystr":"[\"Default\",\"Buzzer2\",\"Fall\",\"Skill2\",\"Shot3\",\"Bell1\",\"Crow\",\"Horn\",\"Ice2\",\"Magic3\",\"Open4\",\"Buzzer1\"]","Text":"","FontFaces:arraystr":"[\"Default\",\"Arial\",\"Candara\",\"Calibri\",\"Garamond\",\"Georgia\",\"Gill Sans MT\",\"Helvetica\",\"Impact\",\"Lato\",\"Rockwell\",\"Segoe UI\",\"Tahoma\",\"Times\",\"Trebuchet MS\",\"Verdana\"]","ButtonAssist":"","buttonAssistCategory:str":"Switch Category"}
 *
 * @param Categories:arraystruct
 * @text Options Categories
 * @type struct<Categories>[]
 * @desc Add categories and their options here.
 * @default ["{\"Name:str\":\"General\",\"Icon:num\":\"245\",\"ShowJS:func\":\"\\\"// Return Boolean\\\\nreturn true;\\\"\",\"List:arraystruct\":\"[\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Exploration\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"alwaysDash\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"82\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.alwaysDash;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"autosave\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"225\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.autosaveOption;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_1_SaveCore &&\\\\\\\\\\\\\\\\n    VisuMZ.SaveCore.Settings.AutosaveOption.AddOption\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"showCompass\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"222\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.showCompass;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_4_ProximityCompass &&\\\\\\\\\\\\\\\\n    VisuMZ.ProximityCompass.Settings.Options.AddShowOption\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"compassSize\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"222\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.compassSize;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_4_ProximityCompass &&\\\\\\\\\\\\\\\\n    VisuMZ.ProximityCompass.Settings.Options.AddSizeOption\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst rate = (value / 100).clamp(0, 1);\\\\\\\\\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.textColor(20);\\\\\\\\\\\\\\\\nconst color2 = ColorManager.textColor(21);\\\\\\\\\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Value\\\\\\\\\\\\\\\\nconst text = '%1%'.format(value);\\\\\\\\\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconsole.log((Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked()))\\\\\\\\\\\\\\\\nif (value >= 100 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 50;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\n    value = value.clamp(50, 100);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(50, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(50, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 100;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 100);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 100);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"dateTimeHud\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"70\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.dateTimeHud;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_2_DateTimeSystem &&\\\\\\\\\\\\\\\\n    VisuMZ.DateTimeSystem.Settings.Options.AddOption\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"questTrackerShow\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"186\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.questTrackerShow;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_2_QuestSystem &&\\\\\\\\\\\\\\\\n    VisuMZ.QuestSystem.Settings.Tracker.AddShowOption\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"questTrackerPosition\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"186\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.questTrackerPosition;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_2_QuestSystem &&\\\\\\\\\\\\\\\\n    VisuMZ.QuestSystem.Settings.Tracker.AddShowOption\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = TextManager.questTrackerPosOff;\\\\\\\\\\\\\\\\nconst on  = TextManager.questTrackerPosOn;\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"randomEncounters\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"76\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Random Encounters\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst segment = halfWidth / 3;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Segments\\\\\\\\\\\\\\\\nconst speedText = ['None', 'Half', 'Normal'];\\\\\\\\\\\\\\\\nfor (let i = 0; i < 3; i++) {\\\\\\\\\\\\\\\\n    this.changePaintOpacity(i === value);\\\\\\\\\\\\\\\\n    const text = speedText[i];\\\\\\\\\\\\\\\\n    const sx = rect.x + halfWidth + (segment * i);\\\\\\\\\\\\\\\\n    this.drawText(text, sx, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 2 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += 1;\\\\\\\\\\\\\\\\n    value = value.clamp(0, 2);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 2);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 2);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 2;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 2);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 2);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"showTutorials\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"189\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.tutorial.optionsCmd;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_2_TutorialPanelSys &&\\\\\\\\\\\\\\\\n    VisuMZ.TutorialPanelSys.Settings.Options.AddTutorialsOption\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Battle\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"battleAniShow\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"97\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Show Battle Animations';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn Imported.VisuMZ_1_OptionsCore;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst segment = halfWidth / 3;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Segments\\\\\\\\\\\\\\\\nconst showText = ['OFF', 'SOME', 'ON'];\\\\\\\\\\\\\\\\nfor (let i = 0; i < 3; i++) {\\\\\\\\\\\\\\\\n    this.changePaintOpacity(i === value);\\\\\\\\\\\\\\\\n    const text = showText[i];\\\\\\\\\\\\\\\\n    const sx = rect.x + halfWidth + (segment * i);\\\\\\\\\\\\\\\\n    this.drawText(text, sx, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 2 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += 1;\\\\\\\\\\\\\\\\n    value = value.clamp(0, 2);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 2);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 2);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 2;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 2);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 2);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"battleAniSpeed\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"97\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Battle Animation Speed\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst segment = halfWidth / 4;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Segments\\\\\\\\\\\\\\\\nconst speedText = ['Normal', 'Fast', 'Faster', 'Fastest'];\\\\\\\\\\\\\\\\nfor (let i = 0; i < 4; i++) {\\\\\\\\\\\\\\\\n    this.changePaintOpacity(i === value);\\\\\\\\\\\\\\\\n    const text = speedText[i];\\\\\\\\\\\\\\\\n    const sx = rect.x + halfWidth + (segment * i);\\\\\\\\\\\\\\\\n    this.drawText(text, sx, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 3 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += 1;\\\\\\\\\\\\\\\\n    value = value.clamp(0, 3);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 3);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 3);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 3);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 3);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"battleCamera\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"97\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.battleCameraOption;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn Imported.VisuMZ_3_ActSeqCamera && VisuMZ.ActSeqCamera.Settings.Options.AddOption;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"commandRemember\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"97\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.commandRemember;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"atbActive\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"97\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Active Battle Style\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn Imported.VisuMZ_2_BattleSystemATB && BattleManager.isATB();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'Wait';\\\\\\\\\\\\\\\\nconst on  = 'Active';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = $dataSystem.battleSystem === 1;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"atbSpeed\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"97\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Active Battle Speed\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn Imported.VisuMZ_2_BattleSystemATB && BattleManager.isATB();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst segment = halfWidth / 5;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.ctGaugeColor1();\\\\\\\\\\\\\\\\nconst color2 = ColorManager.ctGaugeColor2();\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Segments\\\\\\\\\\\\\\\\nfor (let i = 1; i <= 5; i++) {\\\\\\\\\\\\\\\\n    this.changePaintOpacity(true);\\\\\\\\\\\\\\\\n    const sx = rect.x + halfWidth + (segment * (i - 1));\\\\\\\\\\\\\\\\n    this.contents.fillRect(sx, gy, segment, 12, color0);\\\\\\\\\\\\\\\\n    if (value >= i) this.contents.gradientFillRect(sx + 1, gy + 1, segment - 2, 10, color1, color2);\\\\\\\\\\\\\\\\n    this.changePaintOpacity(i === value);\\\\\\\\\\\\\\\\n    this.drawText(i, sx, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 5 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 1;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += 1;\\\\\\\\\\\\\\\\n    value = value.clamp(1, 5);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(1, 5);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(1, 5);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 3;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(1, 5);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(1, 5);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"autoBattleAtStart\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"78\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.autoBattleStart;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn Imported.VisuMZ_1_BattleCore && VisuMZ.BattleCore.Settings.AutoBattle.AddOption;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = false;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"autoBattleUseSkills\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"78\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.autoBattleStyle;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn Imported.VisuMZ_1_BattleCore && VisuMZ.BattleCore.Settings.AutoBattle.AddOption;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = VisuMZ.BattleCore.Settings.AutoBattle.StyleOFF;\\\\\\\\\\\\\\\\nconst on  = VisuMZ.BattleCore.Settings.AutoBattle.StyleON;\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = false;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Screen\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"displayFPS\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"245\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Display FPS\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\\nif (!value) {\\\\\\\\\\\\\\\\n    Graphics._fpsCounter._boxDiv.style.display = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"block\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\n    Graphics._fpsCounter._showFps = true;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    Graphics._fpsCounter._boxDiv.style.display = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"none\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    Graphics._fpsCounter._boxDiv.style.display = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"block\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\n    Graphics._fpsCounter._showFps = true;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    Graphics._fpsCounter._boxDiv.style.display = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"none\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = false;\\\\\\\\\\\\\\\\nGraphics._fpsCounter._boxDiv.style.display = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"none\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\\nif (config[symbol]) {\\\\\\\\\\\\\\\\n    Graphics._fpsCounter._boxDiv.style.display = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"block\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\n    Graphics._fpsCounter._showFps = true;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"limitFPS\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"245\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Limit FPS\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\\nGraphics._app.ticker.maxFPS = ConfigManager[symbol] ? 60 : 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nGraphics._app.ticker.maxFPS = ConfigManager[symbol] ? 60 : 0;\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) SoundManager.playCursor();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nGraphics._app.ticker.maxFPS = ConfigManager[symbol] ? 60 : 0;\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) SoundManager.playCursor();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = false;\\\\\\\\\\\\\\\\nGraphics._app.ticker.maxFPS = 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\\nGraphics._app.ticker.maxFPS = config[symbol] ? 60 : 0;\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"fullScreen\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"245\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Full Screen\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn Utils.isNwjs();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = !!Graphics._isFullScreen();\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'Window Mode';\\\\\\\\\\\\\\\\nconst on  = 'Full Screen';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = !!Graphics._isFullScreen();\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\\nGraphics._switchFullScreen();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = !!Graphics._isFullScreen();\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    Graphics._requestFullScreen();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = !!Graphics._isFullScreen();\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    Graphics._cancelFullScreen();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = !!Graphics._isFullScreen();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"stretchScreen\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"245\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Stretch Screen\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = !!Graphics._stretchEnabled;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = !!Graphics._isFullScreen();\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\\nGraphics._switchStretchMode();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = !!Graphics._stretchEnabled;\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    Graphics._stretchEnabled = true;\\\\\\\\\\\\\\\\n    Graphics._updateAllElements();\\\\\\\\\\\\\\\\n    Graphics._stretchScreenOptionsCore();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = !!Graphics._stretchEnabled;\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    Graphics._stretchEnabled = false;\\\\\\\\\\\\\\\\n    Graphics._updateAllElements();\\\\\\\\\\\\\\\\n    Graphics._stretchScreenOptionsCore();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = !!Graphics._stretchEnabled;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\\nif (ConfigManager[symbol]) {\\\\\\\\\\\\\\\\n    Graphics._stretchEnabled = true;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    Graphics._stretchEnabled = false;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nGraphics._updateAllElements();\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"specialEffects\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"87\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Special Effects\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn Imported.VisuMZ_2_BrightEffects ||\\\\\\\\\\\\\\\\n    Imported.VisuMZ_2_HorrorEffects;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"dustCloud\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"160\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.MovementEffectsOptions.DustCloud;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_2_MovementEffects &&\\\\\\\\\\\\\\\\n    VisuMZ.MovementEffects.Settings.Options.AddDustCloud\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"footprints\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"141\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.MovementEffectsOptions.Footprints;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_2_MovementEffects &&\\\\\\\\\\\\\\\\n    VisuMZ.MovementEffects.Settings.Options.AddFootprints\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"smoothCamera\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"244\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.MovementEffectsOptions.SmoothCamera;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_2_MovementEffects &&\\\\\\\\\\\\\\\\n    VisuMZ.MovementEffects.Settings.Options.AddSmoothCamera\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"blinkingLights\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"214\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.LightingEffectsOptions.BlinkingLights;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_2_LightingEffects &&\\\\\\\\\\\\\\\\n    VisuMZ.LightingEffects.Settings.Options.AddBlinkingLights\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"pulsingLights\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"214\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.LightingEffectsOptions.PulsingLights;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_2_LightingEffects &&\\\\\\\\\\\\\\\\n    VisuMZ.LightingEffects.Settings.Options.AddPulsingLights\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"weatherDensity\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"65\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.weatherDensity;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_2_WeatherEffects &&\\\\\\\\\\\\\\\\n    VisuMZ.WeatherEffects.Settings.Options.AddWeatherDensityOption\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst rate = (value / 100).clamp(0, 1);\\\\\\\\\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.textColor(4);\\\\\\\\\\\\\\\\nconst color2 = ColorManager.textColor(0);\\\\\\\\\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Value\\\\\\\\\\\\\\\\nconst text = '%1%'.format(value);\\\\\\\\\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 100 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\n    value = value.clamp(0, 100);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 100;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 100);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 100);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Controls\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn this.isRebindingEnabled();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"rebindKeyboard\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"245\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Rebind Keyboard Controls\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn this.isRebindingEnabled();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nSoundManager.playOk();\\\\\\\\\\\\\\\\nSceneManager.push(Scene_RebindKeyboard);\\\\\\\\\\\\\\\\nthis.prepareOptionsCoreSceneChange();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"rebindGamepad\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"244\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Rebind Gamepad Controls\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn this.isRebindingEnabled();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nSoundManager.playOk();\\\\\\\\\\\\\\\\nSceneManager.push(Scene_RebindGamepad);\\\\\\\\\\\\\\\\nthis.prepareOptionsCoreSceneChange();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn this.isRebindingEnabled();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Name:str\":\"Audio\",\"Icon:num\":\"80\",\"ShowJS:func\":\"\\\"// Return Boolean\\\\nreturn true;\\\"\",\"List:arraystruct\":\"[\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Volume\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"masterVolume\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"80\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Master Volume\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst rate = (value / 100).clamp(0, 1);\\\\\\\\\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.textColor(22);\\\\\\\\\\\\\\\\nconst color2 = ColorManager.textColor(23);\\\\\\\\\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Value\\\\\\\\\\\\\\\\nconst text = '%1%'.format(value);\\\\\\\\\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 100 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\n    value = value.clamp(0, 100);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    WebAudio.setMasterVolume(value / 100);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    WebAudio.setMasterVolume(value / 100);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    WebAudio.setMasterVolume(value / 100);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 100;\\\\\\\\\\\\\\\\nWebAudio.setMasterVolume(100 / 100);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 100);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 100);\\\\\\\\\\\\\\\\nWebAudio.setMasterVolume(ConfigManager[symbol] / 100);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"bgmVolume\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"80\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.bgmVolume;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst rate = (value / 100).clamp(0, 1);\\\\\\\\\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.textColor(26);\\\\\\\\\\\\\\\\nconst color2 = ColorManager.textColor(27);\\\\\\\\\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Value\\\\\\\\\\\\\\\\nconst text = '%1%'.format(value);\\\\\\\\\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconsole.log((Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked()))\\\\\\\\\\\\\\\\nif (value >= 100 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\n    value = value.clamp(0, 100);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 40;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 100);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 100);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"bgsVolume\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"80\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.bgsVolume;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst rate = (value / 100).clamp(0, 1);\\\\\\\\\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.textColor(26);\\\\\\\\\\\\\\\\nconst color2 = ColorManager.textColor(27);\\\\\\\\\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Value\\\\\\\\\\\\\\\\nconst text = '%1%'.format(value);\\\\\\\\\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 100 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\n    value = value.clamp(0, 100);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 40;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 100);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 100);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"meVolume\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"80\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.meVolume;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst rate = (value / 100).clamp(0, 1);\\\\\\\\\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.textColor(26);\\\\\\\\\\\\\\\\nconst color2 = ColorManager.textColor(27);\\\\\\\\\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Value\\\\\\\\\\\\\\\\nconst text = '%1%'.format(value);\\\\\\\\\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 100 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\n    value = value.clamp(0, 100);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 40;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 100);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 100);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"seVolume\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"80\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.seVolume;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst rate = (value / 100).clamp(0, 1);\\\\\\\\\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.textColor(26);\\\\\\\\\\\\\\\\nconst color2 = ColorManager.textColor(27);\\\\\\\\\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Value\\\\\\\\\\\\\\\\nconst text = '%1%'.format(value);\\\\\\\\\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 100 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\n    value = value.clamp(0, 100);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 40;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 100);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 100);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"voiceVolume\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"80\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.voiceVolume;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn Imported.VisuMZ_2_VoiceActControl;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst rate = (value / 100).clamp(0, 1);\\\\\\\\\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.textColor(26);\\\\\\\\\\\\\\\\nconst color2 = ColorManager.textColor(27);\\\\\\\\\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Value\\\\\\\\\\\\\\\\nconst text = '%1%'.format(value);\\\\\\\\\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 100 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\n    value = value.clamp(0, 100);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 10;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 100);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 40;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 100);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 100);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"voiceLocale\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"80\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.voiceLocale;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_2_VoiceActControl &&\\\\\\\\\\\\\\\\n    AudioManager.isVisuMzLocalizationEnabled &&\\\\\\\\\\\\\\\\n    AudioManager.isVisuMzLocalizationEnabled() &&\\\\\\\\\\\\\\\\n    VisuMZ.VoiceActControl.Settings.Localization.AddOption\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst segment = halfWidth / 3;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 1\\\\\\\\\\\\\\\\nthis.changePaintOpacity(false);\\\\\\\\\\\\\\\\nconst name1 = TextManager.getAudioLanguageAt(-1) || '-----';\\\\\\\\\\\\\\\\nconst fx1 = rect.x + halfWidth + (segment * 0);\\\\\\\\\\\\\\\\nthis.drawText(name1, fx1, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 2\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nconst name2 = TextManager.getCurrentAudioLanguage() || '-----';\\\\\\\\\\\\\\\\nconst fx2 = rect.x + halfWidth + (segment * 1);\\\\\\\\\\\\\\\\nthis.drawText(name2, fx2, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 3\\\\\\\\\\\\\\\\nthis.changePaintOpacity(false);\\\\\\\\\\\\\\\\nconst name3 = TextManager.getAudioLanguageAt(1) || '-----';\\\\\\\\\\\\\\\\nconst fx3 = rect.x + halfWidth + (segment * 2);\\\\\\\\\\\\\\\\nthis.drawText(name3, fx3, rect.y, segment, 'center');\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"this.changeVisuMzVoiceLocale(true, true);\\\\\\\\\\\\\\\\nthis.refreshWindows();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"this.changeVisuMzVoiceLocale(true);\\\\\\\\\\\\\\\\nthis.refreshWindows();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"this.changeVisuMzVoiceLocale(false);\\\\\\\\\\\\\\\\nthis.refreshWindows();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"TF_AdvSoundOptions\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"80\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Advanced Sound Options\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn Imported.TFAdvancedSoundOptions;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nSoundManager.playOk();\\\\\\\\\\\\\\\\nSceneManager.push(Scene_TFAudioOptions);\\\\\\\\\\\\\\\\nthis.prepareOptionsCoreSceneChange();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = false;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nif (Imported.TFAdvancedSoundOptions) {\\\\\\\\\\\\\\\\n    config.freq1Gain = TF._audio_1Gain || 0;\\\\\\\\\\\\\\\\n    config.freq2Gain = TF._audio_2Gain || 0;\\\\\\\\\\\\\\\\n    config.freq3Gain = TF._audio_3Gain || 0;\\\\\\\\\\\\\\\\n    config.freq4Gain = TF._audio_4Gain || 0;\\\\\\\\\\\\\\\\n    config.freq5Gain = TF._audio_5Gain || 0;\\\\\\\\\\\\\\\\n    config.freq6Gain = TF._audio_6Gain || 0;\\\\\\\\\\\\\\\\n    config.freq7Gain = TF._audio_7Gain || 0;\\\\\\\\\\\\\\\\n    config.freq8Gain = TF._audio_8Gain || 0;\\\\\\\\\\\\\\\\n    config.freq9Gain = TF._audio_9Gain || 0;\\\\\\\\\\\\\\\\n    config.preset = TF._audio_preset || \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Preset\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Sound Effects\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"battleVoices\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"4\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.battleVoices;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_3_BattleVoices &&\\\\\\\\\\\\\\\\n    VisuMZ.BattleVoices.Settings.Options.AddOption\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"footsteps\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"141\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.MovementEffectsOptions.Footsteps;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_2_MovementEffects &&\\\\\\\\\\\\\\\\n    VisuMZ.MovementEffects.Settings.Options.AddSmoothCamera\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"msgLetterSound\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"189\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Letter Sounds\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_3_MessageSounds\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"seCursor\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"78\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Cursor SFX\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst segment = halfWidth / 3;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 1\\\\\\\\\\\\\\\\nthis.changePaintOpacity(false);\\\\\\\\\\\\\\\\nconst name1 = (value - 1) >= 0 ? 'Cursor %1'.format(value) : '-----';\\\\\\\\\\\\\\\\nconst fx1 = rect.x + halfWidth + (segment * 0);\\\\\\\\\\\\\\\\nthis.drawText(name1, fx1, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 2\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nconst name2 = 'Cursor %1'.format(value + 1);\\\\\\\\\\\\\\\\nconst fx2 = rect.x + halfWidth + (segment * 1);\\\\\\\\\\\\\\\\nthis.drawText(name2, fx2, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 3\\\\\\\\\\\\\\\\nthis.changePaintOpacity(false);\\\\\\\\\\\\\\\\nconst name3 = (value + 1) < SoundManager.cursorSFXs.length ? 'Cursor %1'.format(value + 2) : '-----';\\\\\\\\\\\\\\\\nconst fx3 = rect.x + halfWidth + (segment * 2);\\\\\\\\\\\\\\\\nthis.drawText(name3, fx3, rect.y, segment, 'center');\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconst length = SoundManager.cursorSFXs.length - 1;\\\\\\\\\\\\\\\\nif (value >= length && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += 1;\\\\\\\\\\\\\\\\n    value = value.clamp(0, length);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    const volume = ConfigManager.seVolume;\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = 100;\\\\\\\\\\\\\\\\n    SoundManager.playCursor();\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = volume;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconst length = SoundManager.cursorSFXs.length - 1;\\\\\\\\\\\\\\\\nvalue += 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, length);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    const volume = ConfigManager.seVolume;\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = 100;\\\\\\\\\\\\\\\\n    SoundManager.playCursor();\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = volume;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconst length = SoundManager.cursorSFXs.length - 1;\\\\\\\\\\\\\\\\nvalue -= 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, length);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    const volume = ConfigManager.seVolume;\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = 100;\\\\\\\\\\\\\\\\n    SoundManager.playCursor();\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = volume;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"seOK\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"78\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Confirm SFX\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst segment = halfWidth / 3;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 1\\\\\\\\\\\\\\\\nthis.changePaintOpacity(false);\\\\\\\\\\\\\\\\nconst name1 = (value - 1) >= 0 ? 'Confirm %1'.format(value) : '-----';\\\\\\\\\\\\\\\\nconst fx1 = rect.x + halfWidth + (segment * 0);\\\\\\\\\\\\\\\\nthis.drawText(name1, fx1, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 2\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nconst name2 = 'Confirm %1'.format(value + 1);\\\\\\\\\\\\\\\\nconst fx2 = rect.x + halfWidth + (segment * 1);\\\\\\\\\\\\\\\\nthis.drawText(name2, fx2, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 3\\\\\\\\\\\\\\\\nthis.changePaintOpacity(false);\\\\\\\\\\\\\\\\nconst name3 = (value + 1) < SoundManager.okSFXs.length ? 'Confirm %1'.format(value + 2) : '-----';\\\\\\\\\\\\\\\\nconst fx3 = rect.x + halfWidth + (segment * 2);\\\\\\\\\\\\\\\\nthis.drawText(name3, fx3, rect.y, segment, 'center');\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconst length = SoundManager.okSFXs.length - 1;\\\\\\\\\\\\\\\\nif (value >= length && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += 1;\\\\\\\\\\\\\\\\n    value = value.clamp(0, length);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    const volume = ConfigManager.seVolume;\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = 100;\\\\\\\\\\\\\\\\n    SoundManager.playOk();\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = volume;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconst length = SoundManager.okSFXs.length - 1;\\\\\\\\\\\\\\\\nvalue += 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, length);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    const volume = ConfigManager.seVolume;\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = 100;\\\\\\\\\\\\\\\\n    SoundManager.playOk();\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = volume;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconst length = SoundManager.okSFXs.length - 1;\\\\\\\\\\\\\\\\nvalue -= 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, length);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    const volume = ConfigManager.seVolume;\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = 100;\\\\\\\\\\\\\\\\n    SoundManager.playOk();\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = volume;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"seCancel\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"78\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Cancel SFX\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst segment = halfWidth / 3;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 1\\\\\\\\\\\\\\\\nthis.changePaintOpacity(false);\\\\\\\\\\\\\\\\nconst name1 = (value - 1) >= 0 ? 'Cancel %1'.format(value) : '-----';\\\\\\\\\\\\\\\\nconst fx1 = rect.x + halfWidth + (segment * 0);\\\\\\\\\\\\\\\\nthis.drawText(name1, fx1, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 2\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nconst name2 = 'Cancel %1'.format(value + 1);\\\\\\\\\\\\\\\\nconst fx2 = rect.x + halfWidth + (segment * 1);\\\\\\\\\\\\\\\\nthis.drawText(name2, fx2, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 3\\\\\\\\\\\\\\\\nthis.changePaintOpacity(false);\\\\\\\\\\\\\\\\nconst name3 = (value + 1) < SoundManager.cancelSFXs.length ? 'Cancel %1'.format(value + 2) : '-----';\\\\\\\\\\\\\\\\nconst fx3 = rect.x + halfWidth + (segment * 2);\\\\\\\\\\\\\\\\nthis.drawText(name3, fx3, rect.y, segment, 'center');\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconst length = SoundManager.cancelSFXs.length - 1;\\\\\\\\\\\\\\\\nif (value >= length && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += 1;\\\\\\\\\\\\\\\\n    value = value.clamp(0, length);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    const volume = ConfigManager.seVolume;\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = 100;\\\\\\\\\\\\\\\\n    SoundManager.playCancel();\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = volume;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconst length = SoundManager.cancelSFXs.length - 1;\\\\\\\\\\\\\\\\nvalue += 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, length);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    const volume = ConfigManager.seVolume;\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = 100;\\\\\\\\\\\\\\\\n    SoundManager.playCancel();\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = volume;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconst length = SoundManager.cancelSFXs.length - 1;\\\\\\\\\\\\\\\\nvalue -= 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, length);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    const volume = ConfigManager.seVolume;\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = 100;\\\\\\\\\\\\\\\\n    SoundManager.playCancel();\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = volume;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"seBuzzer\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"78\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Buzzer SFX\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst segment = halfWidth / 3;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 1\\\\\\\\\\\\\\\\nthis.changePaintOpacity(false);\\\\\\\\\\\\\\\\nconst name1 = (value - 1) >= 0 ? 'Buzzer %1'.format(value) : '-----';\\\\\\\\\\\\\\\\nconst fx1 = rect.x + halfWidth + (segment * 0);\\\\\\\\\\\\\\\\nthis.drawText(name1, fx1, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 2\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nconst name2 = 'Buzzer %1'.format(value + 1);\\\\\\\\\\\\\\\\nconst fx2 = rect.x + halfWidth + (segment * 1);\\\\\\\\\\\\\\\\nthis.drawText(name2, fx2, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 3\\\\\\\\\\\\\\\\nthis.changePaintOpacity(false);\\\\\\\\\\\\\\\\nconst name3 = (value + 1) < SoundManager.buzzerSFXs.length ? 'Buzzer %1'.format(value + 2) : '-----';\\\\\\\\\\\\\\\\nconst fx3 = rect.x + halfWidth + (segment * 2);\\\\\\\\\\\\\\\\nthis.drawText(name3, fx3, rect.y, segment, 'center');\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconst length = SoundManager.buzzerSFXs.length - 1;\\\\\\\\\\\\\\\\nif (value >= length && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += 1;\\\\\\\\\\\\\\\\n    value = value.clamp(0, length);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    const volume = ConfigManager.seVolume;\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = 100;\\\\\\\\\\\\\\\\n    SoundManager.playBuzzer();\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = volume;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconst length = SoundManager.buzzerSFXs.length - 1;\\\\\\\\\\\\\\\\nvalue += 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, length);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    const volume = ConfigManager.seVolume;\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = 100;\\\\\\\\\\\\\\\\n    SoundManager.playBuzzer();\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = volume;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconst length = SoundManager.buzzerSFXs.length - 1;\\\\\\\\\\\\\\\\nvalue -= 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, length);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    const volume = ConfigManager.seVolume;\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = 100;\\\\\\\\\\\\\\\\n    SoundManager.playBuzzer();\\\\\\\\\\\\\\\\n    ConfigManager.seVolume = volume;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Name:str\":\"UI\",\"Icon:num\":\"79\",\"ShowJS:func\":\"\\\"// Return Boolean\\\\nreturn true;\\\"\",\"List:arraystruct\":\"[\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Windows\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"windowToneRed\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"162\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Window Tone: Red\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = $gameSystem.windowTone()[0];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst rate = ((value + 255) / (255 * 2)).clamp(0, 1);\\\\\\\\\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.textColor(10);\\\\\\\\\\\\\\\\nconst color2 = ColorManager.textColor(2);\\\\\\\\\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Value\\\\\\\\\\\\\\\\nconst text = value;\\\\\\\\\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = $gameSystem.windowTone()[0];\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 255 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = -255;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 5;\\\\\\\\\\\\\\\\n    value = value.clamp(-255, 255);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\n$gameSystem.windowTone()[0] = value;\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = $gameSystem.windowTone()[0];\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 5;\\\\\\\\\\\\\\\\nvalue = value.clamp(-255, 255);\\\\\\\\\\\\\\\\n$gameSystem.windowTone()[0] = value;\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = $gameSystem.windowTone()[0];\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 5;\\\\\\\\\\\\\\\\nvalue = value.clamp(-255, 255);\\\\\\\\\\\\\\\\n$gameSystem.windowTone()[0] = value;\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"windowToneGreen\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"164\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Window Tone: Green\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = $gameSystem.windowTone()[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst rate = ((value + 255) / (255 * 2)).clamp(0, 1);\\\\\\\\\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.textColor(11);\\\\\\\\\\\\\\\\nconst color2 = ColorManager.textColor(3);\\\\\\\\\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Value\\\\\\\\\\\\\\\\nconst text = value;\\\\\\\\\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = $gameSystem.windowTone()[1];\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 255 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = -255;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 5;\\\\\\\\\\\\\\\\n    value = value.clamp(-255, 255);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\n$gameSystem.windowTone()[1] = value;\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = $gameSystem.windowTone()[1];\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 5;\\\\\\\\\\\\\\\\nvalue = value.clamp(-255, 255);\\\\\\\\\\\\\\\\n$gameSystem.windowTone()[1] = value;\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = $gameSystem.windowTone()[1];\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 5;\\\\\\\\\\\\\\\\nvalue = value.clamp(-255, 255);\\\\\\\\\\\\\\\\n$gameSystem.windowTone()[1] = value;\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"windowToneBlue\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"165\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Window Tone: Blue\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = $gameSystem.windowTone()[2];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst rate = ((value + 255) / (255 * 2)).clamp(0, 1);\\\\\\\\\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.textColor(12);\\\\\\\\\\\\\\\\nconst color2 = ColorManager.textColor(4);\\\\\\\\\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Value\\\\\\\\\\\\\\\\nconst text = value;\\\\\\\\\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = $gameSystem.windowTone()[2];\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 255 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = -255;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 5;\\\\\\\\\\\\\\\\n    value = value.clamp(-255, 255);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\n$gameSystem.windowTone()[2] = value;\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = $gameSystem.windowTone()[2];\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 5;\\\\\\\\\\\\\\\\nvalue = value.clamp(-255, 255);\\\\\\\\\\\\\\\\n$gameSystem.windowTone()[2] = value;\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = $gameSystem.windowTone()[2];\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= Input.isPressed(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"shift\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") ? 1 : 5;\\\\\\\\\\\\\\\\nvalue = value.clamp(-255, 255);\\\\\\\\\\\\\\\\n$gameSystem.windowTone()[2] = value;\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Text\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"textLocale\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"189\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.messageCoreLocalization;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_1_MessageCore &&\\\\\\\\\\\\\\\\n    TextManager.isVisuMzLocalizationEnabled &&\\\\\\\\\\\\\\\\n    TextManager.isVisuMzLocalizationEnabled() &&\\\\\\\\\\\\\\\\n    VisuMZ.MessageCore.Settings.Localization.AddOption\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst segment = halfWidth / 3;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 1\\\\\\\\\\\\\\\\nthis.changePaintOpacity(false);\\\\\\\\\\\\\\\\nconst name1 = TextManager.getLanguageAt(-1) || '-----';\\\\\\\\\\\\\\\\nconst fx1 = rect.x + halfWidth + (segment * 0);\\\\\\\\\\\\\\\\nthis.drawText(name1, fx1, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 2\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nconst name2 = TextManager.getCurrentLanguage() || '-----';\\\\\\\\\\\\\\\\nconst fx2 = rect.x + halfWidth + (segment * 1);\\\\\\\\\\\\\\\\nthis.drawText(name2, fx2, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 3\\\\\\\\\\\\\\\\nthis.changePaintOpacity(false);\\\\\\\\\\\\\\\\nconst name3 = TextManager.getLanguageAt(1) || '-----';\\\\\\\\\\\\\\\\nconst fx3 = rect.x + halfWidth + (segment * 2);\\\\\\\\\\\\\\\\nthis.drawText(name3, fx3, rect.y, segment, 'center');\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"this.changeVisuMzTextLocale(true, true);\\\\\\\\\\\\\\\\nthis.refreshWindows();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"this.changeVisuMzTextLocale(true);\\\\\\\\\\\\\\\\nthis.refreshWindows();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"this.changeVisuMzTextLocale(false);\\\\\\\\\\\\\\\\nthis.refreshWindows();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"textFont\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"225\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Text Font\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst segment = halfWidth / 3;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 1\\\\\\\\\\\\\\\\nthis.changePaintOpacity(false);\\\\\\\\\\\\\\\\nconst name1 = TextManager.optionsCoreFonts[value - 1] || '-----';\\\\\\\\\\\\\\\\nconst fx1 = rect.x + halfWidth + (segment * 0);\\\\\\\\\\\\\\\\nthis.drawText(name1, fx1, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 2\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nconst name2 = TextManager.optionsCoreFonts[value] || '-----';\\\\\\\\\\\\\\\\nconst fx2 = rect.x + halfWidth + (segment * 1);\\\\\\\\\\\\\\\\nthis.drawText(name2, fx2, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Font Name 3\\\\\\\\\\\\\\\\nthis.changePaintOpacity(false);\\\\\\\\\\\\\\\\nconst name3 = TextManager.optionsCoreFonts[value + 1] || '-----';\\\\\\\\\\\\\\\\nconst fx3 = rect.x + halfWidth + (segment * 2);\\\\\\\\\\\\\\\\nthis.drawText(name3, fx3, rect.y, segment, 'center');\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconst length = TextManager.optionsCoreFonts.length - 1;\\\\\\\\\\\\\\\\nif (value >= length && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += 1;\\\\\\\\\\\\\\\\n    value = value.clamp(0, length);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.refreshWindows();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconst length = TextManager.optionsCoreFonts.length - 1;\\\\\\\\\\\\\\\\nvalue += 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, length);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.refreshWindows();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nconst length = TextManager.optionsCoreFonts.length - 1;\\\\\\\\\\\\\\\\nvalue -= 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, length);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.refreshWindows();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"textSpeed\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"225\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.messageCoreTextSpeed;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_1_MessageCore &&\\\\\\\\\\\\\\\\n    VisuMZ.MessageCore.Settings.TextSpeed.AddOption\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst rate = (value / 10).clamp(0, 1);\\\\\\\\\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.textColor(value > 10 ? 20 : 28);\\\\\\\\\\\\\\\\nconst color2 = ColorManager.textColor(value > 10 ? 21 : 29);\\\\\\\\\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Value\\\\\\\\\\\\\\\\nconst text = this.textSpeedStatusText();\\\\\\\\\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 11 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 1;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += 1;\\\\\\\\\\\\\\\\n    value = value.clamp(1, 11);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(1, 11);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(1, 11);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = VisuMZ.MessageCore ? VisuMZ.MessageCore.Settings.TextSpeed.Default : 10;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(1, 11);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(1, 11);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"textEffects\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"79\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.textEffects;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    Imported.VisuMZ_2_AniMsgTextEffects &&\\\\\\\\\\\\\\\\n    VisuMZ.AniMsgTextEffects.Settings.Options.AddOption\\\\\\\\\\\\\\\\n);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Touch Input\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"touchUI\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"77\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.touchUI;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nif (Imported.VisuMZ_0_CoreEngine) {\\\\\\\\\\\\\\\\n    return !SceneManager.areButtonsHidden();\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    return true;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\\nthis.updateButtonVisibility();\\\\\\\\\\\\\\\\nthis.updateWindowPositions();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.updateButtonVisibility();\\\\\\\\\\\\\\\\n    this.updateWindowPositions();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.updateButtonVisibility();\\\\\\\\\\\\\\\\n    this.updateWindowPositions();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"uiButtonPosition\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"77\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Button Position\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nif (Imported.VisuMZ_0_CoreEngine) {\\\\\\\\\\\\\\\\n    return !SceneManager.areButtonsHidden();\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    return true;\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = '↑';\\\\\\\\\\\\\\\\nconst on  = '↓';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\\nthis.updateButtonPositions();\\\\\\\\\\\\\\\\nthis.updateWindowPositions();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.updateButtonPositions();\\\\\\\\\\\\\\\\n    this.updateWindowPositions();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.updateButtonPositions();\\\\\\\\\\\\\\\\n    this.updateWindowPositions();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = uiDefault.ButtonPosition.call(this);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"uiHoverSelect\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"77\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Hover Select\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = uiDefault.hoverEnabled.call(this);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Menu Arrangement\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"uiMenuStyle\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"244\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Menu Style\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'Recommended';\\\\\\\\\\\\\\\\nconst on  = 'Custom';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\\nthis.refresh();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.refresh();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.refresh();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = false;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"uiHelpPosition\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"244\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Help Window Position\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.uiMenuStyle;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(ConfigManager.uiMenuStyle);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = '↑';\\\\\\\\\\\\\\\\nconst on  = '↓';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(ConfigManager.uiMenuStyle && !value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(ConfigManager.uiMenuStyle && value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = uiDefault.HelpPosition.call(this);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"uiInputPosition\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"244\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Input Window Position\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.uiMenuStyle;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(ConfigManager.uiMenuStyle);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = '←';\\\\\\\\\\\\\\\\nconst on  = '→';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(ConfigManager.uiMenuStyle && !value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(ConfigManager.uiMenuStyle && value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = uiDefault.InputPosition.call(this);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Battle UI\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    (Imported.VisuMZ_2_AggroControlSystem && VisuMZ.AggroControlSystem.Settings.Provoke.AddOption) ||\\\\\\\\\\\\\\\\n    (Imported.VisuMZ_2_AggroControlSystem && VisuMZ.AggroControlSystem.Settings.Aggro.AddOption) ||\\\\\\\\\\\\\\\\n    (BattleManager.isTpb() && Imported.VisuMZ_3_VisualAtbGauge && VisuMZ.VisualAtbGauge.Settings.Options.AddOption) ||\\\\\\\\\\\\\\\\n    (Imported.VisuMZ_1_BattleCore && VisuMZ.BattleCore.Settings.HpGauge.AddHpGaugeOption) ||\\\\\\\\\\\\\\\\n  false);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"provokeOrigin\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.provokeOrigin;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn Imported.VisuMZ_2_AggroControlSystem && VisuMZ.AggroControlSystem.Settings.Provoke.AddOption;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\\nthis.refresh();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.refresh();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.refresh();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"aggroGauge\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"5\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.aggroGauge;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn Imported.VisuMZ_2_AggroControlSystem && VisuMZ.AggroControlSystem.Settings.Aggro.AddOption;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\\nthis.refresh();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.refresh();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.refresh();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"visualHpGauge\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"84\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.visualHpGauge;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn Imported.VisuMZ_1_BattleCore && VisuMZ.BattleCore.Settings.HpGauge.AddHpGaugeOption;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\\nthis.refresh();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.refresh();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.refresh();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"visualAtbGauge\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"97\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.visualAtbGauge;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn BattleManager.isTpb() && Imported.VisuMZ_2_BattleSystemATB && VisuMZ.BattleSystemATB.Settings.Options.AddOption;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\\nthis.refresh();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.refresh();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.refresh();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn (\\\\\\\\\\\\\\\\n    (Imported.VisuMZ_2_AggroControlSystem && VisuMZ.AggroControlSystem.Settings.Provoke.AddOption) ||\\\\\\\\\\\\\\\\n    (Imported.VisuMZ_2_AggroControlSystem && VisuMZ.AggroControlSystem.Settings.Aggro.AddOption) ||\\\\\\\\\\\\\\\\n    (BattleManager.isTpb() && Imported.VisuMZ_3_VisualAtbGauge && VisuMZ.VisualAtbGauge.Settings.Options.AddOption) ||\\\\\\\\\\\\\\\\n    (Imported.VisuMZ_1_BattleCore && VisuMZ.BattleCore.Settings.HpGauge.AddHpGaugeOption) ||\\\\\\\\\\\\\\\\n  false);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}","{\"Name:str\":\"Playtest\",\"Icon:num\":\"84\",\"ShowJS:func\":\"\\\"// Return Boolean\\\\nreturn $gameTemp.isPlaytest();\\\"\",\"List:arraystruct\":\"[\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Effects\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"assistMode\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"87\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Playtest Effects\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\\nthis.refresh();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.refresh();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n    this.refresh();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = false;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Exploration\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"assistMapSpeed\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"82\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Map Update Speed\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst segment = halfWidth / 4;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Segments\\\\\\\\\\\\\\\\nconst speedText = ['Normal', 'Fast', 'Faster', 'Fastest'];\\\\\\\\\\\\\\\\nfor (let i = 0; i < 4; i++) {\\\\\\\\\\\\\\\\n    this.changePaintOpacity(i === value);\\\\\\\\\\\\\\\\n    const text = speedText[i];\\\\\\\\\\\\\\\\n    const sx = rect.x + halfWidth + (segment * i);\\\\\\\\\\\\\\\\n    this.drawText(text, sx, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 3 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += 1;\\\\\\\\\\\\\\\\n    value = value.clamp(0, 3);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 3);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 3);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 3);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 3);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"assistRandomEncounters\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"76\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Random Encounters\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst segment = halfWidth / 3;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Segments\\\\\\\\\\\\\\\\nconst speedText = ['None', 'Half', 'Normal'];\\\\\\\\\\\\\\\\nfor (let i = 0; i < 3; i++) {\\\\\\\\\\\\\\\\n    this.changePaintOpacity(i === value);\\\\\\\\\\\\\\\\n    const text = speedText[i];\\\\\\\\\\\\\\\\n    const sx = rect.x + halfWidth + (segment * i);\\\\\\\\\\\\\\\\n    this.drawText(text, sx, rect.y, segment, 'center');\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 2 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += 1;\\\\\\\\\\\\\\\\n    value = value.clamp(0, 2);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 2);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 2);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 2;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 2);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 2);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Battle\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"assistGodmode\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"97\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"God Mode\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = false;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"assistResistNegatives\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"97\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Resist Negative Effects\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode && Imported.VisuMZ_1_SkillsStatesCore;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = false;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"assistInstantKO\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"97\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Instant K.O.\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = false;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"assistSkillCosts\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"97\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Skill Costs\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"assistConsumeItems\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"97\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Consume Items\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Status Text\\\\\\\\\\\\\\\\nconst off = 'OFF';\\\\\\\\\\\\\\\\nconst on  = 'ON';\\\\\\\\\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nthis.playCursorSound();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Rewards\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"assistExpMultiplier\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"88\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"EXP Multiplier\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst rate = (value / 10).clamp(0, 1);\\\\\\\\\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.textColor(30);\\\\\\\\\\\\\\\\nconst color2 = ColorManager.textColor(31);\\\\\\\\\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Value\\\\\\\\\\\\\\\\nconst text = 'x%1'.format(2 ** value);\\\\\\\\\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 10 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += 1;\\\\\\\\\\\\\\\\n    value = value.clamp(0, 10);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 10);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 10);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 10);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 10);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"assistGoldMultiplier\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"314\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Gold Multiplier\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst rate = (value / 10).clamp(0, 1);\\\\\\\\\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.textColor(14);\\\\\\\\\\\\\\\\nconst color2 = ColorManager.textColor(6);\\\\\\\\\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Value\\\\\\\\\\\\\\\\nconst text = 'x%1'.format(2 ** value);\\\\\\\\\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 10 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += 1;\\\\\\\\\\\\\\\\n    value = value.clamp(0, 10);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 10);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 10);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 10);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 10);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"assistDropMultiplier\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"176\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Drop Multiplier\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Gauge\\\\\\\\\\\\\\\\nconst rate = (value / 10).clamp(0, 1);\\\\\\\\\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\\\\\\\\\nconst color1 = ColorManager.textColor(11);\\\\\\\\\\\\\\\\nconst color2 = ColorManager.textColor(3);\\\\\\\\\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Value\\\\\\\\\\\\\\\\nconst text = 'x%1'.format(2 ** value);\\\\\\\\\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nif (value >= 10 && (Input.isTriggered(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\\\\\\\\\n    value = 0;\\\\\\\\\\\\\\\\n} else {\\\\\\\\\\\\\\\\n    value += 1;\\\\\\\\\\\\\\\\n    value = value.clamp(0, 10);\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue += 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 10);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\nconst lastValue = value;\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nvalue -= 1;\\\\\\\\\\\\\\\\nvalue = value.clamp(0, 10);\\\\\\\\\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\\\\\\\\\nif (lastValue !== value) {\\\\\\\\\\\\\\\\n    this.playCursorSound();\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Perform Actions\\\\\\\\\\\\\\\\nConfigManager[symbol] = 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 10);\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst config = arguments[0];\\\\\\\\\\\\\\\\nconst symbol = arguments[1];\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Return Value\\\\\\\\\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 10);\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Spawners\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"assistSpawnItems\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"176\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Spawn Items\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Spawn Items\\\\\\\\\\\\\\\\nconst goods = [];\\\\\\\\\\\\\\\\nfor (const item of $dataItems) {\\\\\\\\\\\\\\\\n    if (item && item.name.trim() !== '') {\\\\\\\\\\\\\\\\n        goods.push([0, item.id, 1, 0]);\\\\\\\\\\\\\\\\n    }\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nSceneManager.push(Scene_Shop);\\\\\\\\\\\\\\\\nSceneManager.prepareNextScene(goods, true);\\\\\\\\\\\\\\\\nthis.prepareOptionsCoreSceneChange();\\\\\\\\\\\\\\\\nSoundManager.playOk();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"assistSpawnWeapons\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"97\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Spawn Weapons\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Spawn Items\\\\\\\\\\\\\\\\nconst goods = [];\\\\\\\\\\\\\\\\nfor (const item of $dataWeapons) {\\\\\\\\\\\\\\\\n    if (item && item.name.trim() !== '') {\\\\\\\\\\\\\\\\n        goods.push([1, item.id, 1, 0]);\\\\\\\\\\\\\\\\n    }\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nSceneManager.push(Scene_Shop);\\\\\\\\\\\\\\\\nSceneManager.prepareNextScene(goods, true);\\\\\\\\\\\\\\\\nthis.prepareOptionsCoreSceneChange();\\\\\\\\\\\\\\\\nSoundManager.playOk();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"assistSpawnArmors\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"137\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Spawn Armors\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Spawn Items\\\\\\\\\\\\\\\\nconst goods = [];\\\\\\\\\\\\\\\\nfor (const item of $dataArmors) {\\\\\\\\\\\\\\\\n    if (item && item.name.trim() !== '') {\\\\\\\\\\\\\\\\n        goods.push([2, item.id, 1, 0]);\\\\\\\\\\\\\\\\n    }\\\\\\\\\\\\\\\\n}\\\\\\\\\\\\\\\\nSceneManager.push(Scene_Shop);\\\\\\\\\\\\\\\\nSceneManager.prepareNextScene(goods, true);\\\\\\\\\\\\\\\\nthis.prepareOptionsCoreSceneChange();\\\\\\\\\\\\\\\\nSoundManager.playOk();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\\C[16]Debug\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"assistCallDebug\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"89\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Debug Menu\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Declare Constants\\\\\\\\\\\\\\\\nconst symbol = arguments[0];\\\\\\\\\\\\\\\\nconst index = arguments[1];\\\\\\\\\\\\\\\\nconst title = this.commandName(index);\\\\\\\\\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\\\\\\\\\n\\\\\\\\\\\\\\\\n// Draw Command Name\\\\\\\\\\\\\\\\nthis.resetFontSettings();\\\\\\\\\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Call Debug Menu\\\\\\\\\\\\\\\\nSceneManager.push(Scene_Debug);\\\\\\\\\\\\\\\\nthis.prepareOptionsCoreSceneChange();\\\\\\\\\\\\\\\\nSoundManager.playOk();\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"-----------------------------\\\\\\\",\\\\\\\"Icon:num\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return 'Text';\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Accessibility\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Boolean\\\\\\\\\\\\\\\\nreturn true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Return Value\\\\\\\\\\\\\\\\nreturn 0;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Functions\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DrawJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ProcessOkJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorRightJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CursorLeftJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"Data\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"DefaultJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"SaveJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"LoadJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"// Do Nothing\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\"}"]
 *
 * @param Rebind:struct
 * @text Keyboard/Controller Rebind
 * @type struct<Rebind>
 * @desc Settings that allow the player to rebind their keyboard
 * and controller inputs. Requires VisuMZ_0_CoreEngine!
 * @default {"General":"","EnableRebind:eval":"true","keyOrder:arraystr":"[\"up\",\"left\",\"down\",\"right\",\"ok\",\"escape\",\"shift\",\"tab\",\"pageup\",\"pagedown\"]","gamepadOrder:arraystr":"[\"up\",\"left\",\"down\",\"right\",\"ok\",\"cancel\",\"menu\",\"shift\",\"pageup\",\"pagedown\"]","gamepadReset:func":"\"Input.gamepadMapper = {\\n    0: \\\"ok\\\", // A\\n    1: \\\"cancel\\\", // B\\n    2: \\\"shift\\\", // X\\n    3: \\\"menu\\\", // Y\\n    4: \\\"pageup\\\", // LB\\n    5: \\\"pagedown\\\", // RB\\n    12: \\\"up\\\", // D-pad up\\n    13: \\\"down\\\", // D-pad down\\n    14: \\\"left\\\", // D-pad left\\n    15: \\\"right\\\" // D-pad right\\n};\"","Vocab":"","ButtonVocab":"","up:str":"Up","left:str":"Left","down:str":"Down","right:str":"Right","ok:str":"Confirm","escape:str":"Cancel & Menu","cancel:str":"Cancel","menu:str":"Menu","pageup:str":"Switch Left","pagedown:str":"Switch Right","shift:str":"Dash","tab:str":"Tab","buttonFmt:str":"\\}Button\\{ %1","dpadFmt:str":"\\}D-Pad\\{ %1","ButtonAssistVocab":"","removeAssist:str":"Remove","resetAssist:str":"Reset","confirmAssist:str":"Rebind","cancelAssist:str":"Exit","HelpVocab":"","selectKeyboard:json":"\"Select a key to rebind/change.\"","pressKeyboard:json":"\"Press a keyboard button to assign this control.\"","pressForbidden:json":"\"That key cannot be bound to a control.\"","selectGamepad:json":"\"Select a button to rebind/change.\"","pressGamepad:json":"\"Press a gamepad button to assign this control.\"","buttonForbidden:json":"\"This button cannot be reassigned.\"","noGamepadFound:json":"\"No gamepad is detected!\"","Windows":"","HelpWindow":"","HelpWindow_BgType:num":"0","RebindWindow":"","RebindWindow_BgType:num":"0","keyNameAlign:str":"center","rebindAlign:str":"center","RebindWindow_RectJS:func":"\"const buffer = 48;\\nconst ww = Math.ceil((Graphics.boxWidth - (buffer * 2)) * (this.isForGamepad() ? 2/3 : 1));\\nconst wh = this.mainAreaHeight() - (buffer * 2);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = this.mainAreaTop() + Math.floor((this.mainAreaHeight() - wh) / 2);\\nreturn new Rectangle(wx, wy, ww, wh);\"","HelpRebindWindow":"","HelpRebindWindow_BgType:num":"0","HelpRebindWindow_RectJS:func":"\"const ww = Math.ceil(Graphics.boxWidth * 2/3);\\nconst wh = this.calcWindowHeight(2, false);\\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\\nconst wy = Math.floor((Graphics.boxHeight - wh) / 2);\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 *
 * @param ControllerButtons:arraystruct
 * @text Controller Buttons
 * @parent Rebind:struct
 * @type struct<ControllerButtons>[]
 * @desc Make different icons appear for different controllers.
 * Requires VisuMZ_0_CoreEngine!
 * @default []
 *
 * @param MasterVolShortcut:struct
 * @text Master Volume Shortcut
 * @type struct<MasterVolShortcut>
 * @desc Settings regarding the Master Volume Shortcut keys.
 * Shortcut: Ctrl + PageUp / Ctrl + PageDn
 * @default {"Shortcut":"","Enable:eval":"true","change:num":"10","Sfx":"","VolUpSfx":"","upName:str":"Up1","upVolume:num":"90","upPitch:num":"100","upPan:num":"0","VolDnSfx":"","downName:str":"Down1","downVolume:num":"90","downPitch:num":"100","downPan:num":"0"}
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
 * Categories List
 * ----------------------------------------------------------------------------
 */
/*~struct~Categories:
 *
 * @param Name:str
 * @text Name
 * @desc The name of this category as seen in the Category Window.
 * Text codes are supported.
 * @default Untitled
 *
 * @param Icon:num
 * @text Icon
 * @parent Name:str
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param ShowJS:func
 * @text JS: Show/Hide
 * @parent Name:str
 * @type note
 * @desc Code used to determine if this category is visible.
 * @default "// Return Boolean\nreturn true;"
 *
 * @param List:arraystruct
 * @text Options List
 * @type struct<Options>[]
 * @desc Add options to this category here.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Options List
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param Symbol:str
 * @text Symbol
 * @desc Symbol used for this option when selected.
 * Make sure this is unique from other symbols.
 * @default Symbol
 *
 * @param Icon:num
 * @text Icon
 * @parent Symbol:str
 * @desc Icon used for this option.
 * Use 0 for no icon.
 * @default 0
 *
 * @param TextStr:str
 * @text STR: Text
 * @parent Symbol:str
 * @desc Displayed text used for this option.
 * If this has a value, ignore the JS: Text version.
 * @default Untitled
 *
 * @param TextJS:func
 * @text JS: Text
 * @parent Symbol:str
 * @type note
 * @desc JavaScript code used to determine string used for the displayed name.
 * @default "return 'Text';"
 *
 * @param Accessibility
 *
 * @param ShowJS:func
 * @text JS: Show/Hide
 * @parent Accessibility
 * @type note
 * @desc Code used to determine if this option is visible.
 * @default "// Return Boolean\nreturn true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @parent Accessibility
 * @type note
 * @desc Code used to determine if this option is enabled.
 * @default "// Return Boolean\nreturn true;"
 *
 * @param ExtJS:func
 * @text JS: Ext
 * @parent Accessibility
 * @type note
 * @desc Code used to determine if this option's ext value.
 * @default "// Return Value\nreturn 0;"
 *
 * @param Functions
 *
 * @param DrawJS:func
 * @text JS: Draw Option
 * @parent Functions
 * @type note
 * @desc Code used to draw this item into the List Window.
 * @default "// Declare Constants\nconst symbol = arguments[0];\nconst index = arguments[1];\nconst title = this.commandName(index);\nconst rect = this.itemLineRect(index);\nconst quarterWidth = rect.width / 4;\nconst halfWidth = rect.width / 2;\nconst value = this.getConfigValue(symbol);\n\n// Draw Command Name\nthis.resetFontSettings();\nthis.changePaintOpacity(true);\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \"left\");\n\n// Draw Status Text\nconst off = 'OFF';\nconst on  = 'ON';\nthis.changePaintOpacity(!value);\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \"center\");\nthis.changePaintOpacity(value);\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \"center\");"
 *
 * @param ProcessOkJS:func
 * @text JS: Process OK
 * @parent Functions
 * @type note
 * @desc Code used when OK button is pressed while selected.
 * @default "// Declare Constants\nconst symbol = arguments[0];\nconst value = this.getConfigValue(symbol);\n\n// Perform Actions\nthis.setConfigValue(symbol, !value);\nthis.redrawItem(this.findSymbol(symbol));\nthis.playCursorSound();"
 *
 * @param CursorRightJS:func
 * @text JS: Cursor Right
 * @parent Functions
 * @type note
 * @desc Code used when Right button is pressed while selected.
 * @default "// Declare Constants\nconst symbol = arguments[0];\nconst value = this.getConfigValue(symbol);\nconst lastValue = value;\n\n// Perform Actions\nthis.setConfigValue(symbol, true);\nthis.redrawItem(this.findSymbol(symbol));\nif (this.getConfigValue(symbol) !== lastValue) {\n    this.playCursorSound();\n}"
 *
 * @param CursorLeftJS:func
 * @text JS: Cursor Left
 * @parent Functions
 * @type note
 * @desc Code used when Left button is pressed while selected.
 * @default "// Declare Constants\nconst symbol = arguments[0];\nconst value = this.getConfigValue(symbol);\nconst lastValue = value;\n\n// Perform Actions\nthis.setConfigValue(symbol, false);\nthis.redrawItem(this.findSymbol(symbol));\nif (this.getConfigValue(symbol) !== lastValue) {\n    this.playCursorSound();\n}"
 *
 * @param Data
 *
 * @param DefaultJS:func
 * @text JS: Default Value
 * @parent Data
 * @type note
 * @desc Code used to determine the default value of this option.
 * @default "// Declare Constants\nconst config = arguments[0];\nconst symbol = arguments[1];\n\n// Perform Actions\nConfigManager[symbol] = false;"
 *
 * @param SaveJS:func
 * @text JS: Save Option
 * @parent Data
 * @type note
 * @desc Code used when saving this options setting.
 * @default "// Declare Constants\nconst config = arguments[0];\nconst symbol = arguments[1];\n\n// Return Value\nconfig[symbol] = ConfigManager[symbol];"
 *
 * @param LoadJS:func
 * @text JS: Load Option
 * @parent Data
 * @type note
 * @desc Code used when loading this options setting.
 * @default "// Declare Constants\nconst config = arguments[0];\nconst symbol = arguments[1];\n\n// Return Value\nConfigManager[symbol] = config[symbol];"
 *
 */
/* ----------------------------------------------------------------------------
 * Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OptionsSettings:
 *
 * @param Categories
 *
 * @param CategoryStyle:str
 * @text Category Window Style
 * @parent Categories
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Category Window?
 * @default auto
 *
 * @param CategoryTextAlign:str
 * @text Category Text Align
 * @parent Categories
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param categoryWindowBgType:num
 * @text Background Type
 * @parent Categories
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
 * @param OptionsWindow
 * @text Options Window
 *
 * @param optionsWindowBgType:num
 * @text Background Type
 * @parent OptionsWindow
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
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistCategory:str
 * @text Switch Category
 * @parent ButtonAssist
 * @desc Button assist text used for switching categories.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Switch Category
 *
 * @param buttonAssistBgType:num
 * @text Background Type
 * @parent ButtonAssist
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * Requires VisuMZ_0_CoreEngine!
 * @default 0
 *
 * @param Sound
 *
 * @param SFXCursorList:arraystr
 * @text Cursor Sounds
 * @parent Sound
 * @type file[]
 * @dir audio/se/
 * @desc SE files player can select from for cursor SE.
 * The first in the list will always be the default SE.
 * @default ["Default"]
 *
 * @param SFXOKList:arraystr
 * @text OK Sounds
 * @parent Sound
 * @type file[]
 * @dir audio/se/
 * @desc SE files player can select from for OK SE.
 * The first in the list will always be the default SE.
 * @default ["Default"]
 *
 * @param SFXCancelList:arraystr
 * @text Cancel Sounds
 * @parent Sound
 * @type file[]
 * @dir audio/se/
 * @desc SE files player can select from for cancel SE.
 * The first in the list will always be the default SE.
 * @default ["Default"]
 *
 * @param SFXBuzzerList:arraystr
 * @text Buzzer Sounds
 * @parent Sound
 * @type file[]
 * @dir audio/se/
 * @desc SE files player can select from for buzzer SE.
 * The first in the list will always be the default SE.
 * @default ["Default"]
 *
 * @param Text
 *
 * @param FontFaces:arraystr
 * @text Font Options
 * @parent Text
 * @type string[]
 * @desc Available fonts for the player to select from.
 * The first font in the list is always be the default font.
 * @default ["Default","Arial","Verdana","Times New Roman"]
 *
 */
/* ----------------------------------------------------------------------------
 * Rebind Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Rebind:
 *
 * @param General
 * @text General Settings
 *
 * @param EnableRebind:eval
 * @text Enable Rebinding?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable keyboard and controller rebinding?
 * Requires VisuMZ_0_CoreEngine!
 * @default true
 *
 * @param keyOrder:arraystr
 * @text Keyboard Bindings
 * @parent General
 * @type select[]
 * @option up
 * @option left
 * @option down
 * @option right
 * @option ok
 * @option escape
 * @option cancel
 * @option menu
 * @option shift
 * @option tab
 * @option pageup
 * @option pagedown
 * @desc Select the keys that can be rebound and the order they appear for keyboard.
 * @default ["up","left","down","right","ok","escape","shift","tab","pageup","pagedown"]
 *
 * @param gamepadOrder:arraystr
 * @text Gamepad Bindings
 * @parent General
 * @type select[]
 * @option up
 * @option left
 * @option down
 * @option right
 * @option ok
 * @option escape
 * @option cancel
 * @option menu
 * @option shift
 * @option tab
 * @option pageup
 * @option pagedown
 * @desc Select the keys that can be rebound and the order they appear for gamepad.
 * @default ["up","left","down","right","ok","cancel","menu","shift","pageup","pagedown"]
 *
 * @param gamepadReset:func
 * @text JS: Reset Gamepad
 * @parent gamepadOrder:arraystr
 * @type note
 * @desc Determine how the gamepad map should be when reset.
 * @default "Input.gamepadMapper = {\n    0: \"ok\", // A\n    1: \"cancel\", // B\n    2: \"shift\", // X\n    3: \"menu\", // Y\n    4: \"pageup\", // LB\n    5: \"pagedown\", // RB\n    12: \"up\", // D-pad up\n    13: \"down\", // D-pad down\n    14: \"left\", // D-pad left\n    15: \"right\" // D-pad right\n};"
 *
 * @param Vocab
 * @text Vocabulary
 *
 * @param ButtonVocab
 * @text Button Vocab
 * @parent Vocab
 *
 * @param up:str
 * @text Up
 * @parent ButtonVocab
 * @desc Text used to represent this input type.
 * Text codes allowed.
 * @default Up
 *
 * @param left:str
 * @text Left
 * @parent ButtonVocab
 * @desc Text used to represent this input type.
 * Text codes allowed.
 * @default Left
 *
 * @param down:str
 * @text Down
 * @parent ButtonVocab
 * @desc Text used to represent this input type.
 * Text codes allowed.
 * @default Down
 *
 * @param right:str
 * @text Right
 * @parent ButtonVocab
 * @desc Text used to represent this input type.
 * Text codes allowed.
 * @default Right
 *
 * @param ok:str
 * @text OK
 * @parent ButtonVocab
 * @desc Text used to represent this input type.
 * Text codes allowed.
 * @default Confirm
 *
 * @param escape:str
 * @text Escape
 * @parent ButtonVocab
 * @desc Text used to represent this input type.
 * Text codes allowed.
 * @default Cancel & Menu
 *
 * @param cancel:str
 * @text Cancel
 * @parent ButtonVocab
 * @desc Text used to represent this input type.
 * Text codes allowed.
 * @default Cancel
 *
 * @param menu:str
 * @text Menu
 * @parent ButtonVocab
 * @desc Text used to represent this input type.
 * Text codes allowed.
 * @default Menu
 *
 * @param pageup:str
 * @text Page Up
 * @parent ButtonVocab
 * @desc Text used to represent this input type.
 * Text codes allowed.
 * @default Switch Left
 *
 * @param pagedown:str
 * @text Page Down
 * @parent ButtonVocab
 * @desc Text used to represent this input type.
 * Text codes allowed.
 * @default Switch Right
 *
 * @param shift:str
 * @text Shift
 * @parent ButtonVocab
 * @desc Text used to represent this input type.
 * Text codes allowed.
 * @default Dash
 *
 * @param tab:str
 * @text Tab
 * @parent ButtonVocab
 * @desc Text used to represent this input type.
 * Text codes allowed.
 * @default Tab
 *
 * @param buttonFmt:str
 * @text Button Format
 * @parent ButtonVocab
 * @desc Text format for unassigned gamepad buttons.
 * Text codes allowed. %1 - Button ID.
 * @default \}Button\{ %1
 *
 * @param dpadFmt:str
 * @text D-Pad Format
 * @parent ButtonVocab
 * @desc Text format for directional pad buttons.
 * Text codes allowed. %1 - Direction.
 * @default \}D-Pad\{ %1
 *
 * @param ButtonAssistVocab
 * @text Button Assist
 * @parent Vocab
 *
 * @param removeAssist:str
 * @text Shift: Remove
 * @parent ButtonAssistVocab
 * @desc Text used to represent this button assist.
 * @default Remove
 *
 * @param resetAssist:str
 * @text Shift: Reset
 * @parent ButtonAssistVocab
 * @desc Text used to represent this button assist.
 * @default Reset
 *
 * @param confirmAssist:str
 * @text OK: Select
 * @parent ButtonAssistVocab
 * @desc Text used to represent this button assist.
 * @default Rebind
 *
 * @param cancelAssist:str
 * @text Cancel: Exit
 * @parent ButtonAssistVocab
 * @desc Text used to represent this button assist.
 * @default Exit
 *
 * @param HelpVocab
 * @text Help Descriptions
 * @parent Vocab
 *
 * @param selectKeyboard:json
 * @text Select for Keyboard
 * @parent HelpVocab
 * @type note
 * @desc Help description used for selecting a keyboard button.
 * Text codes allowed.
 * @default "Select a key to rebind/change."
 *
 * @param pressKeyboard:json
 * @text Keyboard Instruct
 * @parent HelpVocab
 * @type note
 * @desc Help description used to ask for a key to press.
 * Text codes allowed.
 * @default "Press a keyboard button to assign this control."
 *
 * @param pressForbidden:json
 * @text Forbidden Key
 * @parent HelpVocab
 * @type note
 * @desc Help description used when a keyboard key cannot be used.
 * Text codes allowed.
 * @default "That key cannot be bound to a control."
 *
 * @param selectGamepad:json
 * @text Select for Gamepad
 * @parent HelpVocab
 * @type note
 * @desc Help description used for selecting a gamepad button.
 * Text codes allowed.
 * @default "Select a button to rebind/change."
 *
 * @param pressGamepad:json
 * @text Gamepad Instructions
 * @parent HelpVocab
 * @type note
 * @desc Help description used to ask for a gamepad button to press.
 * Text codes allowed.
 * @default "Press a gamepad button to assign this control."
 *
 * @param buttonForbidden:json
 * @text Forbidden Button
 * @parent HelpVocab
 * @type note
 * @desc Help description used when a gamepad button cannot be reassigned.
 * Text codes allowed.
 * @default "This button cannot be reassigned."
 *
 * @param noGamepadFound:json
 * @text No Gamepad Detected
 * @parent HelpVocab
 * @type note
 * @desc Help description used when no gamepad is detected.
 * Text codes allowed.
 * @default "No gamepad is detected!"
 *
 * @param Windows
 * @text Window Settings
 *
 * @param HelpWindow
 * @text Window_Help
 * @parent Windows
 *
 * @param HelpWindow_BgType:num
 * @text Background Type
 * @parent HelpWindow
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
 * @param RebindWindow
 * @text Window_KeyRebinds
 * @parent Windows
 *
 * @param RebindWindow_BgType:num
 * @text Background Type
 * @parent RebindWindow
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
 * @param keyNameAlign:str
 * @text Key Type Align
 * @parent RebindWindow
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the key types?
 * @default center
 *
 * @param rebindAlign:str
 * @text Rebind Key Align
 * @parent RebindWindow
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the rebind key?
 * @default center
 *
 * @param RebindWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent RebindWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const buffer = 48;\nconst ww = Math.ceil((Graphics.boxWidth - (buffer * 2)) * (this.isForGamepad() ? 2/3 : 1));\nconst wh = this.mainAreaHeight() - (buffer * 2);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = this.mainAreaTop() + Math.floor((this.mainAreaHeight() - wh) / 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param HelpRebindWindow
 * @text Window_RebindHelp
 * @parent Windows
 *
 * @param HelpRebindWindow_BgType:num
 * @text Background Type
 * @parent HelpRebindWindow
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
 * @param HelpRebindWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent HelpRebindWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.ceil(Graphics.boxWidth * 2/3);\nconst wh = this.calcWindowHeight(2, false);\nconst wx = Math.floor((Graphics.boxWidth - ww) / 2);\nconst wy = Math.floor((Graphics.boxHeight - wh) / 2);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Controller Buttons Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ControllerButtons:
 *
 * @param ID
 * @text ID Information
 *
 * @param Name:str
 * @text Controller ID Name
 * @parent ID
 * @desc Exact string used for this controller ID.
 * User VisuMZ_0_CoreEngine plugin commands for help.
 * @default Untitled
 *
 * @param Match:str
 * @text Similarity Match
 * @parent ID
 * @desc Similar text used for this controller ID.
 * User VisuMZ_0_CoreEngine plugin commands for help.
 * @default Untitled
 * 
 * @param Buttons
 * @text Button Text
 *
 * @param button0:str
 * @text Button 0
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 0
 *
 * @param button1:str
 * @text Button 1
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 1
 *
 * @param button2:str
 * @text Button 2
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 2
 *
 * @param button3:str
 * @text Button 3
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 3
 *
 * @param button4:str
 * @text Button 4
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 4
 *
 * @param button5:str
 * @text Button 5
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 5
 *
 * @param button6:str
 * @text Button 6
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 6
 *
 * @param button7:str
 * @text Button 7
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 7
 *
 * @param button8:str
 * @text Button 8
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 8
 *
 * @param button9:str
 * @text Button 9
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 9
 *
 * @param button10:str
 * @text Button 10
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 10
 *
 * @param button11:str
 * @text Button 11
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 11
 *
 * @param button12:str
 * @text Button 12
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}D-Pad\{ Up
 *
 * @param button13:str
 * @text Button 13
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}D-Pad\{ Down
 *
 * @param button14:str
 * @text Button 14
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}D-Pad\{ Left
 *
 * @param button15:str
 * @text Button 15
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}D-Pad\{ Right
 *
 * @param button16:str
 * @text Button 16
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 16
 *
 * @param button17:str
 * @text Button 17
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 17
 *
 * @param button18:str
 * @text Button 18
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 18
 *
 * @param button19:str
 * @text Button 19
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 19
 *
 * @param button20:str
 * @text Button 20
 * @parent Buttons
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default \}Button\{ 20
 * 
*/
/* ----------------------------------------------------------------------------
 * Master Volume Shortcut Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MasterVolShortcut:
 * 
 * @param Shortcut
 *
 * @param Enable:eval
 * @text Enabled?
 * @parent Shortcut
 * @type boolean
 * @on Enable Shortcut
 * @off Disable Shortcut
 * @desc Enable the shortcut?
 * Shortcut: Ctrl + PageUp / Ctrl + PageDn
 * @default true
 *
 * @param change:num
 * @text Shortcut Change Value
 * @parent Shortcut
 * @type number
 * @min 1
 * @max 100
 * @desc What is the change amount for the shortcut key?
 * Master volume caps at 0 and 100.
 * @default 10
 * 
 * @param Sfx
 * @text Sound Effects
 * 
 * @param VolUpSfx
 * @text Volume Up
 * @parent Sfx
 *
 * @param upName:str
 * @text Filename
 * @parent VolUpSfx
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Up1
 *
 * @param upVolume:num
 * @text Volume
 * @parent VolUpSfx
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param upPitch:num
 * @text Pitch
 * @parent VolUpSfx
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param upPan:num
 * @text Pan
 * @parent VolUpSfx
 * @desc Pan of the sound effect played.
 * @default 0
 * 
 * @param VolDnSfx
 * @text Volume Down
 * @parent Sfx
 *
 * @param downName:str
 * @text Filename
 * @parent VolDnSfx
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Down1
 *
 * @param downVolume:num
 * @text Volume
 * @parent VolDnSfx
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param downPitch:num
 * @text Pitch
 * @parent VolDnSfx
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param downPan:num
 * @text Pan
 * @parent VolDnSfx
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
//=============================================================================

var tier = tier || 0x0;
var dependencies = [];
var pluginData = $plugins.filter(function (_0x55a590) {
  return _0x55a590.status && _0x55a590.description.includes("[OptionsCore]");
})[0x0];
VisuMZ.OptionsCore.Settings = VisuMZ.OptionsCore.Settings || {};
VisuMZ.ConvertParams = function (_0x1d71c5, _0x4e1620) {
  for (const _0xcad3f2 in _0x4e1620) {
    if (_0xcad3f2.match(/(.*):(.*)/i)) {
      const _0x22a5fb = String(RegExp.$1);
      const _0x448962 = String(RegExp.$2).toUpperCase().trim();
      let _0x7bc8a0;
      let _0x18473e;
      let _0x1f3014;
      switch (_0x448962) {
        case "NUM":
          _0x7bc8a0 = _0x4e1620[_0xcad3f2] !== '' ? Number(_0x4e1620[_0xcad3f2]) : 0x0;
          break;
        case "ARRAYNUM":
          _0x18473e = _0x4e1620[_0xcad3f2] !== '' ? JSON.parse(_0x4e1620[_0xcad3f2]) : [];
          _0x7bc8a0 = _0x18473e.map(_0x193a63 => Number(_0x193a63));
          break;
        case 'EVAL':
          _0x7bc8a0 = _0x4e1620[_0xcad3f2] !== '' ? eval(_0x4e1620[_0xcad3f2]) : null;
          break;
        case "ARRAYEVAL":
          _0x18473e = _0x4e1620[_0xcad3f2] !== '' ? JSON.parse(_0x4e1620[_0xcad3f2]) : [];
          _0x7bc8a0 = _0x18473e.map(_0x29501a => eval(_0x29501a));
          break;
        case "JSON":
          _0x7bc8a0 = _0x4e1620[_0xcad3f2] !== '' ? JSON.parse(_0x4e1620[_0xcad3f2]) : '';
          break;
        case "ARRAYJSON":
          _0x18473e = _0x4e1620[_0xcad3f2] !== '' ? JSON.parse(_0x4e1620[_0xcad3f2]) : [];
          _0x7bc8a0 = _0x18473e.map(_0x112b5a => JSON.parse(_0x112b5a));
          break;
        case "FUNC":
          _0x7bc8a0 = _0x4e1620[_0xcad3f2] !== '' ? new Function(JSON.parse(_0x4e1620[_0xcad3f2])) : new Function("return 0");
          break;
        case "ARRAYFUNC":
          _0x18473e = _0x4e1620[_0xcad3f2] !== '' ? JSON.parse(_0x4e1620[_0xcad3f2]) : [];
          _0x7bc8a0 = _0x18473e.map(_0x53ca4a => new Function(JSON.parse(_0x53ca4a)));
          break;
        case "STR":
          _0x7bc8a0 = _0x4e1620[_0xcad3f2] !== '' ? String(_0x4e1620[_0xcad3f2]) : '';
          break;
        case "ARRAYSTR":
          _0x18473e = _0x4e1620[_0xcad3f2] !== '' ? JSON.parse(_0x4e1620[_0xcad3f2]) : [];
          _0x7bc8a0 = _0x18473e.map(_0x7b3a5b => String(_0x7b3a5b));
          break;
        case "STRUCT":
          _0x1f3014 = _0x4e1620[_0xcad3f2] !== '' ? JSON.parse(_0x4e1620[_0xcad3f2]) : {};
          _0x1d71c5[_0x22a5fb] = {};
          VisuMZ.ConvertParams(_0x1d71c5[_0x22a5fb], _0x1f3014);
          continue;
        case "ARRAYSTRUCT":
          _0x18473e = _0x4e1620[_0xcad3f2] !== '' ? JSON.parse(_0x4e1620[_0xcad3f2]) : [];
          _0x7bc8a0 = _0x18473e.map(_0x5baf46 => VisuMZ.ConvertParams({}, JSON.parse(_0x5baf46)));
          break;
        default:
          continue;
      }
      _0x1d71c5[_0x22a5fb] = _0x7bc8a0;
    }
  }
  return _0x1d71c5;
};
(_0x333b47 => {
  const _0x2f4d60 = _0x333b47.name;
  for (const _0x22ee37 of dependencies) {
    if (!Imported[_0x22ee37]) {
      alert("%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.".format(_0x2f4d60, _0x22ee37));
      SceneManager.exit();
      break;
    }
  }
  const _0x2dc079 = _0x333b47.description;
  if (_0x2dc079.match(/\[Version[ ](.*?)\]/i)) {
    const _0x498fe6 = Number(RegExp.$1);
    if (_0x498fe6 !== VisuMZ.OptionsCore.version) {
      alert("%1's version does not match plugin's. Please update it in the Plugin Manager.".format(_0x2f4d60, _0x498fe6));
      SceneManager.exit();
    }
  }
  if (_0x2dc079.match(/\[Tier[ ](\d+)\]/i)) {
    const _0x2b541f = Number(RegExp.$1);
    if (_0x2b541f < tier) {
      alert("%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.".format(_0x2f4d60, _0x2b541f, tier));
      SceneManager.exit();
    } else {
      tier = Math.max(_0x2b541f, tier);
    }
  }
  VisuMZ.ConvertParams(VisuMZ.OptionsCore.Settings, _0x333b47.parameters);
})(pluginData);
VisuMZ.OptionsCore.Scene_Boot_onDatabaseLoaded = Scene_Boot.prototype.onDatabaseLoaded;
Scene_Boot.prototype.onDatabaseLoaded = function () {
  this.process_VisuMZ_OptionsCore_DefaultLoad();
  VisuMZ.OptionsCore.Scene_Boot_onDatabaseLoaded.call(this);
  VisuMZ.OptionsCore.CheckCompatibility();
  SoundManager.processOptionsCoreSoundEffects();
  this.process_VisuMZ_OptionsCore_Failsafe();
  this.process_VisuMZ_OptionsCore_ControllerButtons();
  if (!Utils.isOptionValid('test')) {
    ConfigManager.assistMode = false;
  }
};
VisuMZ.OptionsCore.CheckCompatibility = function () {
  if (Imported.VisuMZ_0_CoreEngine && VisuMZ.CoreEngine.version < 1.64) {
    let _0x10033c = '';
    _0x10033c += "VisuMZ_0_CoreEngine needs to be updated ";
    _0x10033c += "in order for VisuMZ_1_OptionsCore to work.";
    alert(_0x10033c);
    SceneManager.exit();
  }
  if (Imported.VisuMZ_3_ButtonTriggerEvts && VisuMZ.ButtonTriggerEvts.version < 1.05) {
    let _0x2633d2 = '';
    _0x2633d2 += "VisuMZ_3_ButtonTriggerEvts needs to be updated ";
    _0x2633d2 += "in order for VisuMZ_1_OptionsCore to work.";
    alert(_0x2633d2);
    SceneManager.exit();
  }
  if (Imported.VisuMZ_4_ButtonCmnEvts && VisuMZ.ButtonCommonEvents.version < 1.09) {
    let _0x54e964 = '';
    _0x54e964 += "VisuMZ_4_ButtonCmnEvts needs to be updated ";
    _0x54e964 += "in order for VisuMZ_1_OptionsCore to work.";
    alert(_0x54e964);
    SceneManager.exit();
  }
};
Scene_Boot.prototype.process_VisuMZ_OptionsCore_DefaultLoad = function () {
  const _0x2ca8f2 = ["alwaysDash", "commandRemember", "touchUI", "bgmVolume", "bgsVolume", 'meVolume', 'seVolume'];
  for (const _0x1b0968 of VisuMZ.OptionsCore.Settings.Categories) {
    for (const _0x35b25e of _0x1b0968.List) {
      if (!_0x35b25e) {
        continue;
      }
      const _0xb710a8 = _0x35b25e.Symbol;
      if (!_0xb710a8) {
        continue;
      }
      if (_0x2ca8f2.includes(_0xb710a8)) {
        ConfigManager[_0xb710a8] = undefined;
      }
      _0x35b25e.DefaultJS.call(this, ConfigManager, _0xb710a8);
    }
  }
};
Scene_Boot.prototype.process_VisuMZ_OptionsCore_Failsafe = function () {
  if (VisuMZ.OptionsCore.CheckAmPresent()) {
    return;
  }
  const _0xefab36 = [0x3, 0x8, 0x5, 0x1, 0x14, 0x13];
  const _0x141860 = _0xefab36.reduce((_0x290234, _0x19e1a6) => _0x290234 + "0abCdefghijklmnopqrstuvwxyz"[_0x19e1a6], '');
  const _0x4299c2 = {
    'Name:str': _0x141860,
    'Icon:num': '7',
    'ShowJS:func': "\"// Return Boolean\\nreturn !$gameTemp.isPlaytest() && ConfigManager.assistMode;\"",
    'List:arraystruct': "[\"{\\\"Symbol:str\\\":\\\"\\\",\\\"Icon:num\\\":\\\"0\\\",\\\"TextStr:str\\\":\\\"\\\\\\\\C[16]Effects\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"assistMode\\\",\\\"Icon:num\\\":\\\"87\\\",\\\"TextStr:str\\\":\\\"Playtest Effects\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\\n\\\\\\\\n// Draw Status Text\\\\\\\\nconst off = 'OFF';\\\\\\\\nconst on  = 'ON';\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\");\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nthis.playCursorSound();\\\\\\\\nthis.refresh();\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n    this.refresh();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n    this.refresh();\\\\\\\\n}\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nConfigManager[symbol] = false;\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"-----------------------------\\\",\\\"Icon:num\\\":\\\"0\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"\\\",\\\"Icon:num\\\":\\\"0\\\",\\\"TextStr:str\\\":\\\"\\\\\\\\C[16]Exploration\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"assistMapSpeed\\\",\\\"Icon:num\\\":\\\"82\\\",\\\"TextStr:str\\\":\\\"Map Update Speed\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst segment = halfWidth / 4;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\\n\\\\\\\\n// Draw Segments\\\\\\\\nconst speedText = ['Normal', 'Fast', 'Faster', 'Fastest'];\\\\\\\\nfor (let i = 0; i < 4; i++) {\\\\\\\\n    this.changePaintOpacity(i === value);\\\\\\\\n    const text = speedText[i];\\\\\\\\n    const sx = rect.x + halfWidth + (segment * i);\\\\\\\\n    this.drawText(text, sx, rect.y, segment, 'center');\\\\\\\\n}\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nif (value >= 3 && (Input.isTriggered(\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\n    value = 0;\\\\\\\\n} else {\\\\\\\\n    value += 1;\\\\\\\\n    value = value.clamp(0, 3);\\\\\\\\n}\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (lastValue !== value) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nvalue += 1;\\\\\\\\nvalue = value.clamp(0, 3);\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (lastValue !== value) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nvalue -= 1;\\\\\\\\nvalue = value.clamp(0, 3);\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (lastValue !== value) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nConfigManager[symbol] = 0;\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 3);\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 3);\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"assistRandomEncounters\\\",\\\"Icon:num\\\":\\\"76\\\",\\\"TextStr:str\\\":\\\"Random Encounters\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst segment = halfWidth / 3;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\\n\\\\\\\\n// Draw Segments\\\\\\\\nconst speedText = ['None', 'Half', 'Normal'];\\\\\\\\nfor (let i = 0; i < 3; i++) {\\\\\\\\n    this.changePaintOpacity(i === value);\\\\\\\\n    const text = speedText[i];\\\\\\\\n    const sx = rect.x + halfWidth + (segment * i);\\\\\\\\n    this.drawText(text, sx, rect.y, segment, 'center');\\\\\\\\n}\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nif (value >= 2 && (Input.isTriggered(\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\n    value = 0;\\\\\\\\n} else {\\\\\\\\n    value += 1;\\\\\\\\n    value = value.clamp(0, 2);\\\\\\\\n}\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (lastValue !== value) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nvalue += 1;\\\\\\\\nvalue = value.clamp(0, 2);\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (lastValue !== value) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nvalue -= 1;\\\\\\\\nvalue = value.clamp(0, 2);\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (lastValue !== value) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nConfigManager[symbol] = 2;\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 2);\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 2);\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"-----------------------------\\\",\\\"Icon:num\\\":\\\"0\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"\\\",\\\"Icon:num\\\":\\\"0\\\",\\\"TextStr:str\\\":\\\"\\\\\\\\C[16]Battle\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"assistGodmode\\\",\\\"Icon:num\\\":\\\"97\\\",\\\"TextStr:str\\\":\\\"God Mode\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\\n\\\\\\\\n// Draw Status Text\\\\\\\\nconst off = 'OFF';\\\\\\\\nconst on  = 'ON';\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\");\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nthis.playCursorSound();\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nConfigManager[symbol] = false;\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"assistResistNegatives\\\",\\\"Icon:num\\\":\\\"97\\\",\\\"TextStr:str\\\":\\\"Resist Negative Effects\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode && Imported.VisuMZ_1_SkillsStatesCore;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\\n\\\\\\\\n// Draw Status Text\\\\\\\\nconst off = 'OFF';\\\\\\\\nconst on  = 'ON';\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\");\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nthis.playCursorSound();\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nConfigManager[symbol] = false;\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"assistInstantKO\\\",\\\"Icon:num\\\":\\\"97\\\",\\\"TextStr:str\\\":\\\"Instant K.O.\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\\n\\\\\\\\n// Draw Status Text\\\\\\\\nconst off = 'OFF';\\\\\\\\nconst on  = 'ON';\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\");\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nthis.playCursorSound();\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nConfigManager[symbol] = false;\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"assistSkillCosts\\\",\\\"Icon:num\\\":\\\"97\\\",\\\"TextStr:str\\\":\\\"Skill Costs\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\\n\\\\\\\\n// Draw Status Text\\\\\\\\nconst off = 'OFF';\\\\\\\\nconst on  = 'ON';\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\");\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nthis.playCursorSound();\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nConfigManager[symbol] = true;\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"assistConsumeItems\\\",\\\"Icon:num\\\":\\\"97\\\",\\\"TextStr:str\\\":\\\"Consume Items\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\\n\\\\\\\\n// Draw Status Text\\\\\\\\nconst off = 'OFF';\\\\\\\\nconst on  = 'ON';\\\\\\\\nthis.changePaintOpacity(!value);\\\\\\\\nthis.drawText(off, rect.x + halfWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\");\\\\\\\\nthis.changePaintOpacity(value);\\\\\\\\nthis.drawText(on, rect.x + halfWidth + quarterWidth, rect.y, quarterWidth, \\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, !value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nthis.playCursorSound();\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, true);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nthis.setConfigValue(symbol, false);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (this.getConfigValue(symbol) !== lastValue) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nConfigManager[symbol] = true;\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nconfig[symbol] = ConfigManager[symbol];\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nConfigManager[symbol] = config[symbol];\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"-----------------------------\\\",\\\"Icon:num\\\":\\\"0\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"\\\",\\\"Icon:num\\\":\\\"0\\\",\\\"TextStr:str\\\":\\\"\\\\\\\\C[16]Rewards\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"assistExpMultiplier\\\",\\\"Icon:num\\\":\\\"88\\\",\\\"TextStr:str\\\":\\\"EXP Multiplier\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\\n\\\\\\\\n// Draw Gauge\\\\\\\\nconst rate = (value / 10).clamp(0, 1);\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\nconst color1 = ColorManager.textColor(30);\\\\\\\\nconst color2 = ColorManager.textColor(31);\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\n\\\\\\\\n// Draw Value\\\\\\\\nconst text = 'x%1'.format(2 ** value);\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nif (value >= 10 && (Input.isTriggered(\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\n    value = 0;\\\\\\\\n} else {\\\\\\\\n    value += 1;\\\\\\\\n    value = value.clamp(0, 10);\\\\\\\\n}\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (lastValue !== value) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nvalue += 1;\\\\\\\\nvalue = value.clamp(0, 10);\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (lastValue !== value) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nvalue -= 1;\\\\\\\\nvalue = value.clamp(0, 10);\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (lastValue !== value) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nConfigManager[symbol] = 0;\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 10);\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 10);\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"assistGoldMultiplier\\\",\\\"Icon:num\\\":\\\"314\\\",\\\"TextStr:str\\\":\\\"Gold Multiplier\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\\n\\\\\\\\n// Draw Gauge\\\\\\\\nconst rate = (value / 10).clamp(0, 1);\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\nconst color1 = ColorManager.textColor(14);\\\\\\\\nconst color2 = ColorManager.textColor(6);\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\n\\\\\\\\n// Draw Value\\\\\\\\nconst text = 'x%1'.format(2 ** value);\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nif (value >= 10 && (Input.isTriggered(\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\n    value = 0;\\\\\\\\n} else {\\\\\\\\n    value += 1;\\\\\\\\n    value = value.clamp(0, 10);\\\\\\\\n}\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (lastValue !== value) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nvalue += 1;\\\\\\\\nvalue = value.clamp(0, 10);\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (lastValue !== value) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nvalue -= 1;\\\\\\\\nvalue = value.clamp(0, 10);\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (lastValue !== value) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nConfigManager[symbol] = 0;\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 10);\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 10);\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"assistDropMultiplier\\\",\\\"Icon:num\\\":\\\"176\\\",\\\"TextStr:str\\\":\\\"Drop Multiplier\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\\n\\\\\\\\n// Draw Gauge\\\\\\\\nconst rate = (value / 10).clamp(0, 1);\\\\\\\\nconst gx = rect.x + halfWidth;\\\\\\\\nconst gy = rect.y + rect.height - 14;\\\\\\\\nconst fillW = Math.floor((halfWidth - 2) * rate);\\\\\\\\nconst color0 = ColorManager.gaugeBackColor();\\\\\\\\nconst color1 = ColorManager.textColor(11);\\\\\\\\nconst color2 = ColorManager.textColor(3);\\\\\\\\nthis.contents.fillRect(gx, gy, halfWidth, 12, color0);\\\\\\\\nthis.contents.gradientFillRect(gx + 1, gy + 1, fillW, 10, color1, color2);\\\\\\\\n\\\\\\\\n// Draw Value\\\\\\\\nconst text = 'x%1'.format(2 ** value);\\\\\\\\nthis.drawText(text, rect.x + halfWidth, rect.y, halfWidth, \\\\\\\\\\\\\\\"center\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nif (value >= 10 && (Input.isTriggered(\\\\\\\\\\\\\\\"ok\\\\\\\\\\\\\\\") || TouchInput.isClicked())) {\\\\\\\\n    value = 0;\\\\\\\\n} else {\\\\\\\\n    value += 1;\\\\\\\\n    value = value.clamp(0, 10);\\\\\\\\n}\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (lastValue !== value) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nvalue += 1;\\\\\\\\nvalue = value.clamp(0, 10);\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (lastValue !== value) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nlet value = this.getConfigValue(symbol);\\\\\\\\nconst lastValue = value;\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nvalue -= 1;\\\\\\\\nvalue = value.clamp(0, 10);\\\\\\\\nthis.setConfigValue(symbol, value);\\\\\\\\nthis.redrawItem(this.findSymbol(symbol));\\\\\\\\nif (lastValue !== value) {\\\\\\\\n    this.playCursorSound();\\\\\\\\n}\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Perform Actions\\\\\\\\nConfigManager[symbol] = 0;\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nconfig[symbol] = ConfigManager[symbol].clamp(0, 10);\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst config = arguments[0];\\\\\\\\nconst symbol = arguments[1];\\\\\\\\n\\\\\\\\n// Return Value\\\\\\\\nConfigManager[symbol] = config[symbol].clamp(0, 10);\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"-----------------------------\\\",\\\"Icon:num\\\":\\\"0\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"\\\",\\\"Icon:num\\\":\\\"0\\\",\\\"TextStr:str\\\":\\\"\\\\\\\\C[16]Spawners\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"assistSpawnItems\\\",\\\"Icon:num\\\":\\\"176\\\",\\\"TextStr:str\\\":\\\"Spawn Items\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Spawn Items\\\\\\\\nconst goods = [];\\\\\\\\nfor (const item of $dataItems) {\\\\\\\\n    if (item && item.name.trim() !== '') {\\\\\\\\n        goods.push([0, item.id, 1, 0]);\\\\\\\\n    }\\\\\\\\n}\\\\\\\\nSceneManager.push(Scene_Shop);\\\\\\\\nSceneManager.prepareNextScene(goods, true);\\\\\\\\nthis.prepareOptionsCoreSceneChange();\\\\\\\\nSoundManager.playOk();\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"assistSpawnWeapons\\\",\\\"Icon:num\\\":\\\"97\\\",\\\"TextStr:str\\\":\\\"Spawn Weapons\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Spawn Items\\\\\\\\nconst goods = [];\\\\\\\\nfor (const item of $dataWeapons) {\\\\\\\\n    if (item && item.name.trim() !== '') {\\\\\\\\n        goods.push([1, item.id, 1, 0]);\\\\\\\\n    }\\\\\\\\n}\\\\\\\\nSceneManager.push(Scene_Shop);\\\\\\\\nSceneManager.prepareNextScene(goods, true);\\\\\\\\nthis.prepareOptionsCoreSceneChange();\\\\\\\\nSoundManager.playOk();\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"assistSpawnArmors\\\",\\\"Icon:num\\\":\\\"137\\\",\\\"TextStr:str\\\":\\\"Spawn Armors\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Spawn Items\\\\\\\\nconst goods = [];\\\\\\\\nfor (const item of $dataArmors) {\\\\\\\\n    if (item && item.name.trim() !== '') {\\\\\\\\n        goods.push([2, item.id, 1, 0]);\\\\\\\\n    }\\\\\\\\n}\\\\\\\\nSceneManager.push(Scene_Shop);\\\\\\\\nSceneManager.prepareNextScene(goods, true);\\\\\\\\nthis.prepareOptionsCoreSceneChange();\\\\\\\\nSoundManager.playOk();\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"-----------------------------\\\",\\\"Icon:num\\\":\\\"0\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"\\\",\\\"Icon:num\\\":\\\"0\\\",\\\"TextStr:str\\\":\\\"\\\\\\\\C[16]Debug\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"assistCallDebug\\\",\\\"Icon:num\\\":\\\"89\\\",\\\"TextStr:str\\\":\\\"Debug Menu\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Declare Constants\\\\\\\\nconst symbol = arguments[0];\\\\\\\\nconst index = arguments[1];\\\\\\\\nconst title = this.commandName(index);\\\\\\\\nconst rect = this.itemLineRect(index);\\\\\\\\nconst quarterWidth = rect.width / 4;\\\\\\\\nconst halfWidth = rect.width / 2;\\\\\\\\nconst value = this.getConfigValue(symbol);\\\\\\\\n\\\\\\\\n// Draw Command Name\\\\\\\\nthis.resetFontSettings();\\\\\\\\nthis.changePaintOpacity(true);\\\\\\\\nthis.drawTextEx(title, rect.x, rect.y, halfWidth, \\\\\\\\\\\\\\\"left\\\\\\\\\\\\\\\");\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Call Debug Menu\\\\\\\\nSceneManager.push(Scene_Debug);\\\\\\\\nthis.prepareOptionsCoreSceneChange();\\\\\\\\nSoundManager.playOk();\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"-----------------------------\\\",\\\"Icon:num\\\":\\\"0\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return 'Text';\\\\\\\"\\\",\\\"Accessibility\\\":\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn ConfigManager.assistMode;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"// Return Boolean\\\\\\\\nreturn true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"// Return Value\\\\\\\\nreturn 0;\\\\\\\"\\\",\\\"Functions\\\":\\\"\\\",\\\"DrawJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"ProcessOkJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorRightJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"CursorLeftJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"Data\\\":\\\"\\\",\\\"DefaultJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"SaveJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\",\\\"LoadJS:func\\\":\\\"\\\\\\\"// Do Nothing\\\\\\\"\\\"}\"]"
  };
  Window_OptionsCategory.categoryList.push(VisuMZ.ConvertParams(_0x4299c2, _0x4299c2));
};
VisuMZ.OptionsCore.CheckAmPresent = function () {
  const _0x3a6b7e = [0x1, 0x13, 0x13, 0x9, 0x13, 0x14, 0xd, 0xf, 0x4, 0x5];
  const _0x236aea = _0x3a6b7e.reduce((_0x1ee485, _0x1b3d56) => _0x1ee485 + "0abCdefghijklmnopqrstuvwxyz"[_0x1b3d56], '');
  for (const _0x439399 of Window_OptionsCategory.categoryList) {
    if (!_0x439399) {
      continue;
    }
    for (const _0x442a99 of _0x439399.List) {
      if (!_0x442a99) {
        continue;
      }
      if (_0x442a99.Symbol.toLowerCase().trim() === _0x236aea) {
        return true;
      }
    }
  }
  return false;
};
VisuMZ.OptionsCore.ControllerButtons = {};
VisuMZ.OptionsCore.ControllerMatches = {};
Scene_Boot.prototype.process_VisuMZ_OptionsCore_ControllerButtons = function () {
  const _0x533918 = VisuMZ.OptionsCore.Settings.ControllerButtons;
  for (const _0x114e6f of _0x533918) {
    const _0x56be99 = (_0x114e6f.Name || '').toLowerCase().trim();
    const _0x4f6902 = (_0x114e6f.Match || '').toLowerCase().trim();
    VisuMZ.OptionsCore.ControllerButtons[_0x56be99] = _0x114e6f;
    VisuMZ.OptionsCore.ControllerMatches[_0x4f6902] = _0x56be99;
  }
};
VisuMZ.OptionsCore.ConfigManager_save = ConfigManager.save;
ConfigManager.save = function () {
  if (this._saving || this._loading) {
    return;
  }
  VisuMZ.OptionsCore.ConfigManager_save.call(this);
};
VisuMZ.OptionsCore.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function () {
  let _0x4afdc6 = VisuMZ.OptionsCore.ConfigManager_makeData.call(this);
  ;
  _0x4afdc6 = this.makeDataOptionsCore(_0x4afdc6);
  _0x4afdc6 = this.makeRebindSave(_0x4afdc6);
  if (!Utils.isOptionValid("test")) {
    _0x4afdc6.assistMode = false;
  }
  return _0x4afdc6;
};
ConfigManager.makeDataOptionsCore = function (_0x35e1ea) {
  this._saving = true;
  for (const _0x340fc8 of Window_OptionsCategory.categoryList) {
    for (const _0x54deea of _0x340fc8.List) {
      if (!_0x54deea) {
        continue;
      }
      const _0x6b79ce = _0x54deea.Symbol;
      if (!_0x6b79ce) {
        continue;
      }
      if (ConfigManager[_0x6b79ce] === undefined) {
        _0x54deea.DefaultJS.call(this, _0x35e1ea, _0x6b79ce);
      }
      _0x54deea.SaveJS.call(this, _0x35e1ea, _0x6b79ce);
    }
  }
  this._saving = false;
  return _0x35e1ea;
};
ConfigManager.makeRebindSave = function (_0x17202a) {
  if (!Scene_Options.ADD_REBIND_OPTIONS) {
    return _0x17202a;
  }
  _0x17202a.keyMapper = Input.keyMapper;
  _0x17202a.gamepadMapper = Input.gamepadMapper;
  return _0x17202a;
};
VisuMZ.OptionsCore.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function (_0x29ed09) {
  VisuMZ.OptionsCore.ConfigManager_applyData.call(this, _0x29ed09);
  this.applyDataOptionsCore(_0x29ed09);
  this.applySavedRebinds(_0x29ed09);
};
ConfigManager.applyDataOptionsCore = function (_0xf9af24) {
  this._loading = true;
  for (const _0x191594 of Window_OptionsCategory.categoryList) {
    for (const _0x55a50e of _0x191594.List) {
      if (!_0x55a50e) {
        continue;
      }
      const _0x549b75 = _0x55a50e.Symbol;
      if (!_0x549b75) {
        continue;
      }
      if (_0xf9af24[_0x549b75] === undefined) {
        _0x55a50e.DefaultJS.call(this, _0xf9af24, _0x549b75);
      } else {
        _0x55a50e.LoadJS.call(this, _0xf9af24, _0x549b75);
      }
    }
  }
  this._loading = false;
};
ConfigManager.applySavedRebinds = function (_0x518666) {
  if (_0x518666.keyMapper) {
    Input.keyMapper = _0x518666.keyMapper;
  }
  if (_0x518666.gamepadMapper) {
    Input.gamepadMapper = _0x518666.gamepadMapper;
  }
};
Graphics._isFPSCounterOn = function () {
  return this._fpsCounter && this._fpsCounter._boxDiv.style.display !== "none";
};
VisuMZ.OptionsCore.Graphics_FPSCounter_switchMode = Graphics.FPSCounter.prototype.switchMode;
Graphics.FPSCounter.prototype.switchMode = function () {
  VisuMZ.OptionsCore.Graphics_FPSCounter_switchMode.call(this);
  this.switchModeOptionsCore();
};
Graphics.FPSCounter.prototype.switchModeOptionsCore = function () {
  if (ConfigManager && ConfigManager.displayFPS !== undefined) {
    ConfigManager.displayFPS = Graphics._isFPSCounterOn();
    ConfigManager.save();
  }
  if (SceneManager && SceneManager._scene) {
    const _0x23ce40 = SceneManager._scene;
    _0x23ce40.optionsCoreUpdateButtonPositions();
    if (_0x23ce40.constructor === Scene_Options) {
      _0x23ce40.refreshWindows();
    }
  }
};
VisuMZ.OptionsCore.Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function () {
  VisuMZ.OptionsCore.Scene_Boot_start.call(this);
  if (ConfigManager && ConfigManager.fullScreen) {
    Graphics._requestFullScreen();
  }
};
VisuMZ.OptionsCore.Graphics_switchFullScreen = Graphics._switchFullScreen;
Graphics._switchFullScreen = function () {
  if (this._isFullScreen()) {
    ConfigManager.fullScreen = false;
  } else {
    ConfigManager.fullScreen = true;
  }
  ConfigManager.save();
  VisuMZ.OptionsCore.Graphics_switchFullScreen.call(this);
  Graphics._fullScreenOptionsCore();
};
VisuMZ.OptionsCore.Graphics_requestFullScreen = Graphics._requestFullScreen;
Graphics._requestFullScreen = function () {
  VisuMZ.OptionsCore.Graphics_requestFullScreen.call(this);
  this._fullScreenOptionsCore();
};
VisuMZ.OptionsCore.Graphics_cancelFullScreen = Graphics._cancelFullScreen;
Graphics._cancelFullScreen = function () {
  VisuMZ.OptionsCore.Graphics_cancelFullScreen.call(this);
  this._fullScreenOptionsCore();
};
Graphics._fullScreenOptionsCore = function () {
  if (SceneManager && SceneManager._scene) {
    const _0x1c9192 = SceneManager._scene;
    if (_0x1c9192.constructor === Scene_Options) {
      setTimeout(_0x1c9192.refreshWindows.bind(_0x1c9192), 0x64);
    }
  }
};
VisuMZ.OptionsCore.Graphics_switchStretchMode = Graphics._switchStretchMode;
Graphics._switchStretchMode = function () {
  VisuMZ.OptionsCore.Graphics_switchStretchMode.call(this);
  this._stretchScreenOptionsCore();
};
Graphics._stretchScreenOptionsCore = function () {
  if (ConfigManager && ConfigManager.stretchScreen !== undefined) {
    ConfigManager.stretchScreen = !!this._stretchEnabled;
    setTimeout(ConfigManager.save.bind(ConfigManager), 0x64);
  }
  if (SceneManager && SceneManager._scene) {
    const _0x421613 = SceneManager._scene;
    if (_0x421613.constructor === Scene_Options) {
      setTimeout(_0x421613.refreshWindows.bind(_0x421613), 0x64);
    }
  }
};
VisuMZ.OptionsCore.VolumeShortcut = {
  'enabled': VisuMZ.OptionsCore.Settings.MasterVolShortcut.Enable ?? true,
  'change': VisuMZ.OptionsCore.Settings.MasterVolShortcut.change ?? true
};
VisuMZ.OptionsCore.Input_isTriggered = Input.isTriggered;
Input.isTriggered = function (_0x78fe78) {
  if (VisuMZ.OptionsCore.meetVolumeShortcutConditions(_0x78fe78, false)) {
    VisuMZ.OptionsCore.processVolumeShortcut(_0x78fe78);
    return false;
  }
  return VisuMZ.OptionsCore.Input_isTriggered.call(this, _0x78fe78);
};
VisuMZ.OptionsCore.Input_isRepeated = Input.isRepeated;
Input.isRepeated = function (_0xb8c0ab) {
  if (VisuMZ.OptionsCore.meetVolumeShortcutConditions(_0xb8c0ab, true)) {
    VisuMZ.OptionsCore.processVolumeShortcut(_0xb8c0ab);
    return false;
  }
  return VisuMZ.OptionsCore.Input_isRepeated.call(this, _0xb8c0ab);
};
VisuMZ.OptionsCore.meetVolumeShortcutConditions = function (_0x89c2, _0x2dc370) {
  if (!VisuMZ.OptionsCore.VolumeShortcut.enabled) {
    return false;
  }
  if (ConfigManager.masterVolume === undefined) {
    return false;
  }
  if (!Input.isPressed('control')) {
    return false;
  }
  if (_0x89c2 !== "pageup" && _0x89c2 !== "pagedown") {
    return false;
  }
  return _0x2dc370 ? VisuMZ.OptionsCore.Input_isRepeated.call(Input, _0x89c2) : VisuMZ.OptionsCore.Input_isTriggered.call(Input, _0x89c2);
};
VisuMZ.OptionsCore.processVolumeShortcut = function (_0x43ff88) {
  const _0x52e510 = this.changeMasterVolumeViaShortcut(_0x43ff88);
  this.updateOptionsCoreScene(_0x52e510);
};
VisuMZ.OptionsCore.changeMasterVolumeViaShortcut = function (_0x41a43c) {
  const _0xf6ea7d = VisuMZ.OptionsCore.VolumeShortcut.change;
  let _0x47cf88 = Math.round(WebAudio._masterVolume * 0x64);
  const _0x49393a = ConfigManager.masterVolume;
  if (_0x41a43c === "pageup") {
    _0x47cf88 += _0xf6ea7d;
  } else if (_0x41a43c === "pagedown") {
    _0x47cf88 -= _0xf6ea7d;
  }
  _0x47cf88 = _0x47cf88.clamp(0x0, 0x64);
  ConfigManager.masterVolume = _0x47cf88;
  ConfigManager.save();
  _0x47cf88 /= 0x64;
  WebAudio.setMasterVolume(_0x47cf88);
  if (_0x49393a !== ConfigManager.masterVolume) {
    if (_0x41a43c === "pageup") {
      SoundManager.playMasterVolumeUp();
    } else if (_0x41a43c === "pagedown") {
      SoundManager.playMasterVolumeDown();
    }
  }
  return ConfigManager.masterVolume !== _0x49393a;
};
VisuMZ.OptionsCore.updateOptionsCoreScene = function (_0x483f4c) {
  if (!_0x483f4c) {
    return;
  }
  const _0x5a6b2a = SceneManager._scene;
  if (_0x5a6b2a.constructor !== Scene_Options) {
    return;
  }
  _0x5a6b2a._optionsWindow.refresh();
};
Input.getKeyboardMappingByKeyType = function (_0x138ec4) {
  const _0x4788c7 = [];
  for (const _0x3f0d89 in Input.keyMapper) {
    const _0x57d62c = Number(_0x3f0d89);
    if ([0x60, 0x62, 0x64, 0x66, 0x68, 0x20, 0x2d].includes(_0x57d62c)) {
      continue;
    }
    if (Input.keyMapper[_0x57d62c] === _0x138ec4) {
      _0x4788c7.push(_0x57d62c);
    }
  }
  return _0x4788c7;
};
Input.getGamepadButtonID = function (_0x3f92cf) {
  const _0x1527e6 = [];
  for (const _0x1e6ca0 in Input.gamepadMapper) {
    const _0x563455 = Number(_0x1e6ca0);
    if (Input.gamepadMapper[_0x563455] === _0x3f92cf) {
      _0x1527e6.push(_0x563455);
    }
  }
  return _0x1527e6;
};
VisuMZ.OptionsCore.Input_updateGamepadState = Input._updateGamepadState;
Input._updateGamepadState = function (_0x2a338a) {
  VisuMZ.OptionsCore.Input_updateGamepadState.call(this, _0x2a338a);
  if (this._rebindState) {
    this._lastGamepadState = this._gamepadStates[_0x2a338a.index].indexOf(true);
  }
};
VisuMZ.OptionsCore.DataManager_setupNewGame = DataManager.setupNewGame;
DataManager.setupNewGame = function () {
  const _0x2f769a = ($gameSystem ? $gameSystem.windowTone() : $dataSystem.windowTone).slice(0x0);
  VisuMZ.OptionsCore.DataManager_setupNewGame.call(this);
  $gameSystem.setWindowTone(_0x2f769a);
};
SoundManager.cursorSFXs = JsonEx.makeDeepCopy(VisuMZ.OptionsCore.Settings.OptionsSettings.SFXCursorList);
SoundManager.okSFXs = JsonEx.makeDeepCopy(VisuMZ.OptionsCore.Settings.OptionsSettings.SFXOKList);
SoundManager.cancelSFXs = JsonEx.makeDeepCopy(VisuMZ.OptionsCore.Settings.OptionsSettings.SFXCancelList);
SoundManager.buzzerSFXs = JsonEx.makeDeepCopy(VisuMZ.OptionsCore.Settings.OptionsSettings.SFXBuzzerList);
SoundManager.processOptionsCoreSoundEffects = function () {
  const _0x4f6f04 = [];
  _0x4f6f04.push(SoundManager.cursorSFXs);
  _0x4f6f04.push(SoundManager.okSFXs);
  _0x4f6f04.push(SoundManager.cancelSFXs);
  _0x4f6f04.push(SoundManager.buzzerSFXs);
  let _0x473790 = 0x0;
  for (const _0x22a3cf of _0x4f6f04) {
    for (let _0x40e3ba = 0x1; _0x40e3ba < _0x22a3cf.length; _0x40e3ba++) {
      const _0x14751a = _0x22a3cf[_0x40e3ba];
      const _0xd8ed75 = JsonEx.makeDeepCopy($dataSystem.sounds[_0x473790]);
      _0xd8ed75.name = _0x14751a;
      _0x22a3cf[_0x40e3ba] = _0xd8ed75;
    }
    _0x473790++;
  }
};
VisuMZ.OptionsCore.SoundManager_playCursor = SoundManager.playCursor;
SoundManager.playCursor = function () {
  if (ConfigManager && ConfigManager.seCursor !== undefined) {
    if (ConfigManager.seCursor > 0x0) {
      const _0x3c149e = SoundManager.cursorSFXs[ConfigManager.seCursor];
      if (_0x3c149e) {
        return AudioManager.playStaticSe(_0x3c149e);
      }
    }
  }
  VisuMZ.OptionsCore.SoundManager_playCursor.call(this);
};
VisuMZ.OptionsCore.SoundManager_playOk = SoundManager.playOk;
SoundManager.playOk = function () {
  if (ConfigManager && ConfigManager.seOK !== undefined) {
    if (ConfigManager.seOK > 0x0) {
      const _0x2b41d7 = SoundManager.okSFXs[ConfigManager.seOK];
      if (_0x2b41d7) {
        return AudioManager.playStaticSe(_0x2b41d7);
      }
    }
  }
  VisuMZ.OptionsCore.SoundManager_playOk.call(this);
};
VisuMZ.OptionsCore.SoundManager_playCancel = SoundManager.playCancel;
SoundManager.playCancel = function () {
  if (ConfigManager && ConfigManager.seCancel !== undefined) {
    if (ConfigManager.seCancel > 0x0) {
      const _0x26e363 = SoundManager.cancelSFXs[ConfigManager.seCancel];
      if (_0x26e363) {
        return AudioManager.playStaticSe(_0x26e363);
      }
    }
  }
  VisuMZ.OptionsCore.SoundManager_playCancel.call(this);
};
VisuMZ.OptionsCore.SoundManager_playBuzzer = SoundManager.playBuzzer;
SoundManager.playBuzzer = function () {
  if (ConfigManager && ConfigManager.seBuzzer !== undefined) {
    if (ConfigManager.seBuzzer > 0x0) {
      const _0x5afa7f = SoundManager.buzzerSFXs[ConfigManager.seBuzzer];
      if (_0x5afa7f) {
        return AudioManager.playStaticSe(_0x5afa7f);
      }
    }
  }
  VisuMZ.OptionsCore.SoundManager_playBuzzer.call(this);
};
SoundManager.playMasterVolumeUp = function () {
  const _0x28781e = VisuMZ.OptionsCore.Settings.MasterVolShortcut;
  const _0x38666b = {
    'name': _0x28781e.upName,
    'volume': _0x28781e.upVolume,
    'pitch': _0x28781e.upPitch,
    'pan': _0x28781e.upPan
  };
  AudioManager.playSe(_0x38666b);
};
SoundManager.playMasterVolumeDown = function () {
  const _0x3573f3 = VisuMZ.OptionsCore.Settings.MasterVolShortcut;
  const _0x33f227 = {
    'name': _0x3573f3.downName,
    'volume': _0x3573f3.downVolume,
    'pitch': _0x3573f3.downPitch,
    'pan': _0x3573f3.downPan
  };
  AudioManager.playSe(_0x33f227);
};
TextManager.optionsCoreFonts = VisuMZ.OptionsCore.Settings.OptionsSettings.FontFaces;
TextManager.REBIND = {
  'up': VisuMZ.OptionsCore.Settings.Rebind.up ?? 'Up',
  'left': VisuMZ.OptionsCore.Settings.Rebind.left ?? 'Left',
  'down': VisuMZ.OptionsCore.Settings.Rebind.down ?? "Down",
  'right': VisuMZ.OptionsCore.Settings.Rebind.right ?? "Right",
  'ok': VisuMZ.OptionsCore.Settings.Rebind.ok ?? "Confirm",
  'escape': VisuMZ.OptionsCore.Settings.Rebind.escape ?? "Cancel & Menu",
  'cancel': VisuMZ.OptionsCore.Settings.Rebind.cancel ?? "Cancel",
  'menu': VisuMZ.OptionsCore.Settings.Rebind.menu ?? 'Menu',
  'pageup': VisuMZ.OptionsCore.Settings.Rebind.pageup ?? "Switch Left",
  'pagedown': VisuMZ.OptionsCore.Settings.Rebind.pagedown ?? "Switch Right",
  'shift': VisuMZ.OptionsCore.Settings.Rebind.shift ?? "Dash",
  'tab': VisuMZ.OptionsCore.Settings.Rebind.tab ?? "Tab",
  'buttonFmt': VisuMZ.OptionsCore.Settings.Rebind.buttonFmt ?? "\\}Button\\{ %1",
  'dpadFmt': VisuMZ.OptionsCore.Settings.Rebind.dpadFmt ?? "\\}D-Pad\\{ %1"
};
VisuMZ.OptionsCore.TextManager_getControllerInputButtonString = TextManager.getControllerInputButtonString;
TextManager.getControllerInputButtonString = function (_0x5d36cd, _0x1668d4) {
  if (Scene_Options.ADD_REBIND_OPTIONS) {
    return this.rebindControllerInputButtonString(_0x5d36cd, _0x1668d4);
  }
  return VisuMZ.OptionsCore.TextManager_getControllerInputButtonString.call(this, _0x5d36cd, _0x1668d4);
};
TextManager.rebindControllerInputButtonString = function (_0x19186a, _0x4aad8e) {
  const _0x3d7853 = _0x19186a.toLowerCase().trim();
  const _0xca636f = Input.getGamepadButtonID(_0x4aad8e)[0x0];
  const _0x42a439 = VisuMZ.OptionsCore.TextManager_getControllerInputButtonString;
  if (VisuMZ.OptionsCore.ControllerButtons[_0x3d7853]) {
    const _0x4e716b = VisuMZ.OptionsCore.ControllerButtons[_0x3d7853];
    return _0x4e716b["button%1".format(_0xca636f)] || _0x42a439.call(this, _0x19186a, _0x4aad8e);
  } else {
    if (!!TextManager.findControllerInputRebindMatch(_0x3d7853)) {
      const _0xd30850 = TextManager.findControllerInputRebindMatch(_0x3d7853);
      return _0xd30850['button%1'.format(_0xca636f)] || _0x42a439.call(this, _0x19186a, _0x4aad8e);
    } else {
      if (!$gameTemp._bypassForRebindController) {
        if (_0xca636f === 0x0) {
          return _0x42a439.call(this, _0x19186a, 'ok');
        }
        if (_0xca636f === 0x1) {
          return _0x42a439.call(this, _0x19186a, "cancel");
        }
        if (_0xca636f === 0x2) {
          return _0x42a439.call(this, _0x19186a, 'shift');
        }
        if (_0xca636f === 0x3) {
          return _0x42a439.call(this, _0x19186a, "menu");
        }
        if (_0xca636f === 0x4) {
          return _0x42a439.call(this, _0x19186a, 'pageup');
        }
        if (_0xca636f === 0x5) {
          return _0x42a439.call(this, _0x19186a, "pagedown");
        }
        if (_0xca636f === 0xc) {
          return _0x42a439.call(this, _0x19186a, 'up');
        }
        if (_0xca636f === 0xd) {
          return _0x42a439.call(this, _0x19186a, "down");
        }
        if (_0xca636f === 0xe) {
          return _0x42a439.call(this, _0x19186a, "left");
        }
        if (_0xca636f === 0xf) {
          return _0x42a439.call(this, _0x19186a, "right");
        }
      }
      if ([0xc, 0xd, 0xe, 0xf].includes(_0xca636f)) {
        const _0x126e08 = TextManager.REBIND.dpadFmt;
        return _0x126e08.format(TextManager.REBIND[_0x4aad8e]);
      } else {
        const _0x4c4914 = TextManager.REBIND.buttonFmt;
        return _0x4c4914.format(_0xca636f);
      }
    }
  }
  return _0x42a439.call(this, _0x19186a, _0x4aad8e);
};
TextManager.findControllerInputRebindMatch = function (_0xf22b59) {
  for (const _0x1cf4ed in VisuMZ.OptionsCore.ControllerMatches) {
    if (_0xf22b59.includes(_0x1cf4ed)) {
      const _0xcd8bff = VisuMZ.OptionsCore.ControllerMatches[_0x1cf4ed];
      return VisuMZ.OptionsCore.ControllerButtons[_0xcd8bff];
    }
  }
  return null;
};
if (Imported.VisuMZ_0_CoreEngine) {
  VisuMZ.OptionsCore.Game_Temp_requestAnimation = Game_Temp.prototype.requestAnimation;
  Game_Temp.prototype.requestAnimation = function (_0x414655, _0x29f91a, _0x39cb88) {
    if (!this.showRegularAnimations()) {
      return;
    }
    VisuMZ.OptionsCore.Game_Temp_requestAnimation.call(this, _0x414655, _0x29f91a, _0x39cb88);
  };
  Game_Temp.prototype.showRegularAnimations = function () {
    if ($gameParty.inBattle() && ConfigManager && ConfigManager.battleAniShow !== undefined) {
      return ConfigManager.battleAniShow >= 0x1;
    }
    return true;
  };
  if (Game_Temp.prototype.showFauxAnimations) {
    VisuMZ.OptionsCore.Game_Temp_showFauxAnimations = Game_Temp.prototype.showFauxAnimations;
    Game_Temp.prototype.showFauxAnimations = function () {
      if ($gameParty.inBattle() && ConfigManager && ConfigManager.battleAniShow !== undefined) {
        return ConfigManager.battleAniShow >= 0x2;
      }
      return VisuMZ.OptionsCore.Game_Temp_showFauxAnimations.call(this);
    };
  }
  ;
}
;
VisuMZ.OptionsCore.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
  VisuMZ.OptionsCore.Game_System_initialize.call(this);
  this.initOptionsCore();
};
Game_System.prototype.initOptionsCore = function () {
  this._windowTone = JsonEx.makeDeepCopy($dataSystem.windowTone);
};
Game_System.prototype.windowTone = function () {
  if (this._windowTone) {
    return this._windowTone;
  }
  this.initOptionsCore();
  return this._windowTone;
};
VisuMZ.OptionsCore.Game_System_mainFontFace = Game_System.prototype.mainFontFace;
Game_System.prototype.mainFontFace = function () {
  const _0x4c9a99 = VisuMZ.OptionsCore.Game_System_mainFontFace.call(this);
  if (ConfigManager && ConfigManager.textFont !== undefined) {
    if (ConfigManager.textFont > 0x0) {
      return TextManager.optionsCoreFonts[ConfigManager.textFont] || _0x4c9a99;
    }
  }
  return _0x4c9a99;
};
VisuMZ.OptionsCore.Game_Action_executeHpDamage = Game_Action.prototype.executeHpDamage;
Game_Action.prototype.executeHpDamage = function (_0x17dbb1, _0x16271f) {
  if (ConfigManager.assistMode) {
    if (this.subject().isActor() && _0x17dbb1.isEnemy()) {
      if (ConfigManager.assistInstantKO) {
        _0x16271f = Math.max(_0x16271f, _0x17dbb1.mhp);
      }
    }
  }
  VisuMZ.OptionsCore.Game_Action_executeHpDamage.call(this, _0x17dbb1, _0x16271f);
};
VisuMZ.OptionsCore.Game_BattlerBase_isStateResist = Game_BattlerBase.prototype.isStateResist;
Game_BattlerBase.prototype.isStateResist = function (_0x5bb2a8) {
  if (ConfigManager.assistMode && this.isActor()) {
    if (ConfigManager.assistGodmode && _0x5bb2a8 === this.deathStateId()) {
      return true;
    }
    if (Imported.VisuMZ_1_SkillsStatesCore && ConfigManager.assistResistNegatives) {
      const _0x487e7c = $dataStates[_0x5bb2a8];
      if (_0x487e7c && _0x487e7c.categories && _0x487e7c.categories.includes("NEGATIVE")) {
        return true;
      }
    }
  }
  return VisuMZ.OptionsCore.Game_BattlerBase_isStateResist.call(this, _0x5bb2a8);
};
VisuMZ.OptionsCore.Game_Battler_useItem = Game_Battler.prototype.useItem;
Game_Battler.prototype.useItem = function (_0x3ad839) {
  if (ConfigManager && ConfigManager.assistMode && this.isActor()) {
    if (DataManager.isSkill(_0x3ad839) && ConfigManager.assistSkillCosts === false) {
      return;
    }
    if (DataManager.isItem(_0x3ad839) && ConfigManager.assistConsumeItems === false) {
      return;
    }
  }
  VisuMZ.OptionsCore.Game_Battler_useItem.call(this, _0x3ad839);
};
VisuMZ.OptionsCore.Game_Battler_addDebuff = Game_Battler.prototype.addDebuff;
Game_Battler.prototype.addDebuff = function (_0x2d589c, _0x4a0f06) {
  if (ConfigManager.assistMode && this.isActor()) {
    if (Imported.VisuMZ_1_SkillsStatesCore && ConfigManager.assistResistNegatives) {
      return true;
    }
  }
  VisuMZ.OptionsCore.Game_Battler_addDebuff.call(this, _0x2d589c, _0x4a0f06);
};
VisuMZ.OptionsCore.Game_Enemy_dropItemRate = Game_Enemy.prototype.dropItemRate;
Game_Enemy.prototype.dropItemRate = function () {
  let _0x493bea = VisuMZ.OptionsCore.Game_Enemy_dropItemRate.call(this);
  if (ConfigManager.assistMode) {
    _0x493bea *= 0x2 ** (ConfigManager.assistDropMultiplier || 0x0);
  }
  return _0x493bea;
};
VisuMZ.OptionsCore.Game_Party_hasEncounterHalf = Game_Party.prototype.hasEncounterHalf;
Game_Party.prototype.hasEncounterHalf = function () {
  if (ConfigManager.assistMode && ConfigManager.assistRandomEncounters === 0x1) {
    return true;
  }
  if (ConfigManager.randomEncounters === 0x1) {
    return true;
  }
  return VisuMZ.OptionsCore.Game_Party_hasEncounterHalf.call(this);
};
VisuMZ.OptionsCore.Game_Party_hasEncounterNone = Game_Party.prototype.hasEncounterNone;
Game_Party.prototype.hasEncounterNone = function () {
  if (ConfigManager.assistMode && ConfigManager.assistRandomEncounters === 0x0) {
    return true;
  }
  if (ConfigManager.randomEncounters === 0x0) {
    return true;
  }
  return VisuMZ.OptionsCore.Game_Party_hasEncounterNone.call(this);
};
VisuMZ.OptionsCore.Game_Troop_expTotal = Game_Troop.prototype.expTotal;
Game_Troop.prototype.expTotal = function () {
  let _0x198e97 = VisuMZ.OptionsCore.Game_Troop_expTotal.call(this);
  if (ConfigManager.assistMode) {
    _0x198e97 *= 0x2 ** (ConfigManager.assistExpMultiplier || 0x0);
  }
  return _0x198e97;
};
VisuMZ.OptionsCore.Game_Troop_goldRate = Game_Troop.prototype.goldRate;
Game_Troop.prototype.goldRate = function () {
  let _0x2ca06c = VisuMZ.OptionsCore.Game_Troop_goldRate.call(this);
  if (ConfigManager.assistMode) {
    _0x2ca06c *= 0x2 ** (ConfigManager.assistGoldMultiplier || 0x0);
  }
  return _0x2ca06c;
};
var uiDefault = uiDefault || {};
uiDefault.HelpPosition = Scene_Base.prototype.isBottomHelpMode;
Scene_Base.prototype.isBottomHelpMode = function () {
  return ConfigManager.uiMenuStyle && ConfigManager.uiHelpPosition !== undefined ? ConfigManager.uiHelpPosition : uiDefault.HelpPosition.call(this);
};
uiDefault.ButtonPosition = Scene_Base.prototype.isBottomButtonMode;
Scene_Base.prototype.isBottomButtonMode = function () {
  return ConfigManager.uiButtonPosition !== undefined ? ConfigManager.uiButtonPosition : uiDefault.ButtonPosition.call(this);
};
uiDefault.InputPosition = Scene_Base.prototype.isRightInputMode;
Scene_Base.prototype.isRightInputMode = function () {
  return ConfigManager.uiMenuStyle && ConfigManager.uiInputPosition !== undefined ? ConfigManager.uiInputPosition : uiDefault.InputPosition.call(this);
};
Scene_Base.prototype.updateButtonVisibility = function () {
  if (this._cancelButton) {
    this._cancelButton.visible = ConfigManager.touchUI;
  }
  if (this._pageupButton) {
    this._pageupButton.visible = ConfigManager.touchUI;
  }
  if (this._pagedownButton) {
    this._pagedownButton.visible = ConfigManager.touchUI;
  }
};
Scene_Base.prototype.optionsCoreUpdateButtonPositions = function () {
  if (this._cancelButton) {
    this._cancelButton.y = this.buttonY();
  }
  if (this._pageupButton) {
    this._pageupButton.y = this.buttonY();
    if (Graphics._isFPSCounterOn() && !this.isBottomButtonMode()) {
      this._pageupButton.y += 0x32;
    }
  }
  if (this._pagedownButton) {
    this._pagedownButton.y = this.buttonY();
    if (Graphics._isFPSCounterOn() && !this.isBottomButtonMode()) {
      this._pagedownButton.y += 0x32;
    }
  }
};
VisuMZ.OptionsCore.Scene_Base_buttonAssistText1 = Scene_Base.prototype.buttonAssistText1;
Scene_Base.prototype.buttonAssistText1 = function () {
  return ConfigManager.touchUI ? VisuMZ.OptionsCore.Scene_Base_buttonAssistText1.call(this) : this.checkActiveWindowPageUpDownHandlers();
};
Scene_Base.prototype.checkActiveWindowPageUpDownHandlers = function () {
  if (this._windowLayer && this._windowLayer.children) {
    for (const _0x14d29b of this._windowLayer.children) {
      if (!_0x14d29b) {
        continue;
      }
      if (!_0x14d29b.active) {
        continue;
      }
      if (!_0x14d29b._handlers) {
        continue;
      }
      if (_0x14d29b._handlers.pageup) {
        return TextManager.buttonAssistSwitch;
      }
    }
  }
  return '';
};
VisuMZ.OptionsCore.Scene_MenuBase_createPageButtons = Scene_MenuBase.prototype.createPageButtons;
Scene_MenuBase.prototype.createPageButtons = function () {
  VisuMZ.OptionsCore.Scene_MenuBase_createPageButtons.call(this);
  if (Graphics._isFPSCounterOn() && !this.isBottomButtonMode()) {
    this._pageupButton.y += 0x32;
    this._pagedownButton.y += 0x32;
  }
};
Scene_MenuBase.prototype.updateButtonVisibility = function () {
  if (!this._cancelButton) {
    this.createButtons();
  }
  Scene_Base.prototype.updateButtonVisibility.call(this);
};
VisuMZ.OptionsCore.Scene_Title_update = Scene_Title.prototype.update;
Scene_Title.prototype.update = function () {
  this.updateOptionsCoreFailsafe();
  VisuMZ.OptionsCore.Scene_Title_update.call(this);
};
Scene_Title.prototype.updateOptionsCoreFailsafe = function () {
  if (ConfigManager.assistMode) {
    return;
  }
  if ($gameTemp.isPlaytest()) {
    return;
  }
  if (Input.isTriggered("down")) {
    this.processOptionsCoreFailsafe(0x2);
  }
  if (Input.isTriggered("left")) {
    this.processOptionsCoreFailsafe(0x4);
  }
  if (Input.isTriggered("right")) {
    this.processOptionsCoreFailsafe(0x6);
  }
  if (Input.isTriggered('up')) {
    this.processOptionsCoreFailsafe(0x8);
  }
};
Scene_Title.prototype.processOptionsCoreFailsafe = function (_0x15023b) {
  const _0x1c66da = [0x8, 0x8, 0x2, 0x2, 0x4, 0x6, 0x4, 0x6];
  this._optionsCoreFailsafeCheck = this._optionsCoreFailsafeCheck || 0x0;
  if (_0x15023b === _0x1c66da[this._optionsCoreFailsafeCheck]) {
    this._optionsCoreFailsafeCheck++;
  } else {
    this._optionsCoreFailsafeCheck = 0x0;
  }
  if (this._optionsCoreFailsafeCheck === _0x1c66da.length) {
    ConfigManager.assistMode = true;
    ConfigManager.save();
    SoundManager.playLoad();
  }
};
VisuMZ.OptionsCore.Scene_Map_updateMainMultiply = Scene_Map.prototype.updateMainMultiply;
Scene_Map.prototype.updateMainMultiply = function () {
  VisuMZ.OptionsCore.Scene_Map_updateMainMultiply.call(this);
  if (ConfigManager.assistMode && ConfigManager.assistMapSpeed && !$gameMessage.isBusy()) {
    this.updateMainMultiplyOptionsCore();
  }
};
Scene_Map.prototype.updateMainMultiplyOptionsCore = function () {
  let _0x51ff91 = ConfigManager.assistMapSpeed || 0x0;
  while (_0x51ff91--) {
    this.updateMain();
  }
};
VisuMZ.OptionsCore.Scene_Battle_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function () {
  VisuMZ.OptionsCore.Scene_Battle_update.call(this);
  if (ConfigManager.battleAniSpeed) {
    this.updateBattleAniSpeed();
  }
};
Scene_Battle.prototype.updateBattleAniSpeed = function () {
  if (this.allowUpdateBattleAniSpeed()) {
    this._battleAniSpeedLooping = true;
    let _0xb7de4 = ConfigManager.battleAniSpeed;
    while (_0xb7de4--) {
      this.update();
      SceneManager.updateEffekseer();
    }
    this._battleAniSpeedLooping = false;
  }
};
Scene_Battle.prototype.allowUpdateBattleAniSpeed = function () {
  return !BattleManager.isInputting() && !this._battleAniSpeedLooping && !$gameMessage.isBusy();
};
Scene_Options.ADD_REBIND_OPTIONS = VisuMZ.OptionsCore.Settings.Rebind.EnableRebind && Imported.VisuMZ_0_CoreEngine && VisuMZ.CoreEngine.version > 1.65;
Scene_Options.prototype.helpAreaHeight = function () {
  return 0x0;
};
Scene_Options.prototype.isUseModernControls = function () {
  return this._categoryWindow && this._categoryWindow.isUseModernControls();
};
Scene_Options.prototype.create = function () {
  Scene_MenuBase.prototype.create.call(this);
  this.createCategoryWindow();
  this.createOptionsWindow();
  this.postCreateWindows();
  if (Imported.VisuMZ_0_CoreEngine) {}
  this.updateOptionsSceneBgTypes();
};
Scene_Options.prototype.createCategoryWindow = function () {
  const _0x13ecb7 = this.categoryWindowRect();
  this._categoryWindow = new Window_OptionsCategory(_0x13ecb7);
  this.addWindow(this._categoryWindow);
  if (!this.isUseModernControls()) {
    this._categoryWindow.setHandler('category', this.commandCategory.bind(this));
    this._categoryWindow.setHandler("cancel", this.popScene.bind(this));
  }
};
Scene_Options.prototype.categoryWindowRect = function () {
  const _0x94b4d0 = Graphics.boxWidth;
  const _0x5d8ceb = this.calcWindowHeight(0x1, true);
  const _0x4bf909 = this.mainAreaTop();
  return new Rectangle(0x0, _0x4bf909, _0x94b4d0, _0x5d8ceb);
};
Scene_Options.prototype.createOptionsWindow = function () {
  const _0x5bab93 = this.optionsWindowRect();
  this._optionsWindow = new Window_Options(_0x5bab93);
  this.addWindow(this._optionsWindow);
  this._optionsWindow.setHandler("cancel", this.onListCancel.bind(this));
  this._categoryWindow.setListWindow(this._optionsWindow);
  if (this.isUseModernControls()) {
    this._optionsWindow.activate();
    this._optionsWindow.smoothSelect(0x0);
  } else {
    this._optionsWindow.deactivate();
    this._optionsWindow.deselect();
  }
};
Scene_Options.prototype.optionsWindowRect = function () {
  const _0x3c41d7 = Graphics.boxWidth;
  const _0x4693bc = this.mainAreaHeight() - this._categoryWindow.height;
  const _0x4768e0 = this._categoryWindow.y + this._categoryWindow.height;
  return new Rectangle(0x0, _0x4768e0, _0x3c41d7, _0x4693bc);
};
Scene_Options.prototype.postCreateWindows = function () {
  if ($gameTemp._returnOptionsCore !== undefined) {
    const _0x1bdc2e = $gameTemp._returnOptionsCore;
    this._categoryWindow.smoothSelect(_0x1bdc2e.category);
    this._categoryWindow.update();
    if (this.isUseModernControls()) {
      this._categoryWindow.activate();
    } else {
      this._categoryWindow.deactivate();
    }
    this._optionsWindow.activate();
    this._optionsWindow._index = _0x1bdc2e.index;
    this._optionsWindow._scrollX = _0x1bdc2e.scrollX;
    this._optionsWindow._scrollY = _0x1bdc2e.scrollY;
    this._optionsWindow._scrollDuration = 0x0;
    this._optionsWindow.refreshCursor();
    this._optionsWindow.update();
    $gameTemp._returnOptionsCore = undefined;
  }
};
Scene_Options.prototype.commandCategory = function () {
  this._optionsWindow.activate();
  this._optionsWindow.smoothSelect(0x0);
};
Scene_Options.prototype.onListCancel = function () {
  if (this.isUseModernControls()) {
    this.popScene();
  } else {
    this._categoryWindow.activate();
    this._optionsWindow.deselect();
  }
};
Scene_Options.prototype.optionsCoreUpdateButtonPositions = function () {
  Scene_MenuBase.prototype.optionsCoreUpdateButtonPositions.call(this);
  this.optionsCoreUpdateWindowPositions();
};
Scene_Options.prototype.optionsCoreUpdateWindowPositions = function () {
  if (this._categoryWindow) {
    const _0x549c80 = this.categoryWindowRect();
    this._categoryWindow.move(_0x549c80.x, _0x549c80.y, _0x549c80.width, _0x549c80.height);
  }
  if (this._optionsWindow) {
    const _0x4c975b = this.optionsWindowRect();
    this._optionsWindow.move(_0x4c975b.x, _0x4c975b.y, _0x4c975b.width, _0x4c975b.height);
  }
  if (this._buttonAssistWindow) {
    const _0xee89c6 = this.buttonAssistWindowRect();
    this._buttonAssistWindow.move(_0xee89c6.x, _0xee89c6.y, _0xee89c6.width, _0xee89c6.height);
    this._buttonAssistWindow.refresh();
  }
  this.refreshWindows();
};
Scene_Options.prototype.buttonAssistText1 = function () {
  return VisuMZ.OptionsCore.Settings.OptionsSettings.buttonAssistCategory;
};
Scene_Options.prototype.refreshWindows = function () {
  if (this._categoryWindow) {
    this._categoryWindow.refresh();
    this._categoryWindow.refreshCursor();
  }
  if (this._optionsWindow) {
    this._optionsWindow.refresh();
    this._optionsWindow.refreshCursor();
  }
  if (this._buttonAssistWindow) {
    this._buttonAssistWindow.refresh();
  }
};
Scene_Options.prototype.updateCoreEngineOptionsCoreWindowBgStyle = function () {
  const _0x515013 = Scene_Options.layoutSettings.OptionsBgType || 0x0;
  const _0xa326c1 = [this._categoryWindow, this._optionsWindow, this._buttonAssistWindow];
  for (const _0x39c6cf of _0xa326c1) {
    if (_0x39c6cf) {
      _0x39c6cf.setBackgroundType(_0x515013);
    }
  }
};
Scene_Options.prototype.updateOptionsSceneBgTypes = function () {
  const _0xe94a4d = VisuMZ.OptionsCore.Settings.OptionsSettings;
  if (this._categoryWindow) {
    const _0x2a0664 = _0xe94a4d.categoryWindowBgType ?? 0x0;
    this._categoryWindow.setBackgroundType(_0x2a0664);
  }
  if (this._optionsWindow) {
    const _0x32d165 = _0xe94a4d.optionsWindowBgType ?? 0x0;
    this._optionsWindow.setBackgroundType(_0x32d165);
  }
  if (this._buttonAssistWindow) {
    const _0x5bf74d = _0xe94a4d.buttonAssistBgType ?? 0x0;
    this._buttonAssistWindow.setBackgroundType(_0x5bf74d);
  }
};
function Scene_RebindBase() {
  this.initialize(...arguments);
}
Scene_RebindBase.prototype = Object.create(Scene_MenuBase.prototype);
Scene_RebindBase.prototype.constructor = Scene_RebindBase;
Scene_RebindBase.SETTINGS = {
  'helpBgType': VisuMZ.OptionsCore.Settings.Rebind.HelpWindow_BgType ?? 0x0,
  'inputBgType': VisuMZ.OptionsCore.Settings.Rebind.HelpRebindWindow_BgType ?? 0x0
};
Scene_RebindBase.prototype.initialize = function () {
  Scene_MenuBase.prototype.initialize.call(this);
  document.addEventListener('keydown', this.onKeyDown.bind(this));
  if (!Imported.VisuMZ_0_CoreEngine) {
    alert("This feature requires VisuMZ_0_CoreEngine to work!");
    SceneManager.exit();
  } else {
    if (VisuMZ.CoreEngine.version < 1.8) {
      let _0xd3255b = '';
      _0xd3255b += "VisuMZ_0_CoreEngine needs to be updated ";
      _0xd3255b += "in order for key rebinds to work.";
      alert(_0xd3255b);
      SceneManager.exit();
    }
  }
};
Scene_RebindBase.prototype.buttonAssistKey3 = function () {
  return TextManager.getInputButtonString("shift");
};
Scene_RebindBase.prototype.buttonAssistText3 = function () {
  return Window_KeyRebinds.SETTINGS.buttonAssist.remove;
};
Scene_RebindBase.prototype.buttonAssistText4 = function () {
  return Window_KeyRebinds.SETTINGS.buttonAssist.confirm;
};
Scene_RebindBase.prototype.buttonAssistText5 = function () {
  return Window_KeyRebinds.SETTINGS.buttonAssist.cancel;
};
Scene_RebindBase.prototype.create = function () {
  Scene_MenuBase.prototype.create.call(this);
  this.createHelpWindow();
  this.createRebindWindow();
  this.createInputMsgWindow();
};
Scene_RebindBase.prototype.createHelpWindow = function () {
  Scene_MenuBase.prototype.createHelpWindow.call(this);
  this._helpWindow.setBackgroundType(Scene_RebindBase.SETTINGS.helpBgType);
};
Scene_RebindBase.prototype.createRebindWindow = function () {
  const _0x5f381d = this.rebindWindowRect();
  const _0x342a31 = new Window_KeyRebinds(_0x5f381d);
  this.addWindow(_0x342a31);
  _0x342a31.setHandler("rebind", this.startRebind.bind(this));
  _0x342a31.setHandler("cancel", this.popScene.bind(this));
  _0x342a31.setHelpWindow(this._helpWindow);
  _0x342a31.setBackgroundType(Window_KeyRebinds.SETTINGS.bgType);
  this._rebindWindow = _0x342a31;
};
Scene_RebindBase.prototype.rebindWindowRect = function () {
  if (VisuMZ.OptionsCore.Settings.Rebind.RebindWindow_RectJS) {
    return VisuMZ.OptionsCore.Settings.Rebind.RebindWindow_RectJS.call(this);
  }
  const _0x43a3f8 = Math.ceil((Graphics.boxWidth - 96) * (this.isForGamepad() ? 0.6666666666666666 : 0x1));
  const _0x72c2e1 = this.mainAreaHeight() - 96;
  const _0x367fc0 = Math.floor((Graphics.boxWidth - _0x43a3f8) / 0x2);
  const _0x1c3f69 = this.mainAreaTop() + Math.floor((this.mainAreaHeight() - _0x72c2e1) / 0x2);
  return new Rectangle(_0x367fc0, _0x1c3f69, _0x43a3f8, _0x72c2e1);
};
Scene_RebindBase.prototype.isForKeyboard = function () {
  return false;
};
Scene_RebindBase.prototype.isForGamepad = function () {
  return false;
};
Scene_RebindBase.prototype.createInputMsgWindow = function () {
  const _0x1498d9 = this.inputMsgWindowRect();
  const _0x209cc2 = new Window_RebindHelp(_0x1498d9);
  this.addChild(_0x209cc2);
  _0x209cc2.openness = 0x0;
  _0x209cc2.setBackgroundType(Scene_RebindBase.SETTINGS.inputBgType);
  this._inputMsgWindow = _0x209cc2;
};
Scene_RebindBase.prototype.inputMsgWindowRect = function () {
  if (VisuMZ.OptionsCore.Settings.Rebind.HelpRebindWindow_RectJS) {
    return VisuMZ.OptionsCore.Settings.Rebind.HelpRebindWindow_RectJS.call(this);
  }
  const _0x48a440 = Math.ceil(Graphics.boxWidth * 0x2 / 0x3);
  const _0x47789d = this.calcWindowHeight(0x2, false);
  const _0x29d64b = Math.floor((Graphics.boxWidth - _0x48a440) / 0x2);
  const _0x4f43c1 = Math.floor((Graphics.boxHeight - _0x47789d) / 0x2);
  return new Rectangle(_0x29d64b, _0x4f43c1, _0x48a440, _0x47789d);
};
Scene_RebindBase.prototype.startRebind = function () {
  Input.clear();
  TouchInput.clear();
  this._helpWindow.clear();
  this._inputMsgWindow.open();
  this._inputMsgWindow.setText(this.inputKeyboardMessage());
};
Scene_RebindBase.prototype.inputKeyboardMessage = function () {
  return '-';
};
Scene_RebindBase.prototype.onKeyDown = function (_0x1383bb) {
  if (this._inputMsgWindow.isOpen()) {
    Input.clear();
    TouchInput.clear();
    this.processEventKeyDown(_0x1383bb);
  }
};
Scene_RebindBase.prototype.processEventKeyDown = function (_0x2e4ee7) {
  const _0x4853ef = _0x2e4ee7.keyCode;
  if (_0x4853ef === 0x1b) {
    this.cancelRebinding();
  } else {
    if (this.isForKeyboard() && this.isForbiddenKeycode(_0x4853ef)) {
      this.playErrorKeybind();
    } else if (this.isForKeyboard()) {
      this.processKeybind(_0x4853ef);
    }
  }
};
Scene_RebindBase.prototype.cancelRebinding = function () {
  SoundManager.playCancel();
  this._inputMsgWindow.close();
  this._rebindWindow.activate();
  this._rebindWindow.refresh();
};
Scene_RebindBase.prototype.isForbiddenKeycode = function (_0x38f853) {
  return true;
};
Scene_RebindBase.prototype.playErrorKeybind = function () {
  SoundManager.playBuzzer();
  const _0x5e72c2 = Window_KeyRebinds.SETTINGS.helpText.pressForbidden;
  this._inputMsgWindow.setText(_0x5e72c2);
};
Scene_RebindBase.prototype.processKeybind = function (_0x619ceb) {
  this.updateKeybinds(_0x619ceb);
  $gameMap.requestRefresh();
  Input.clear();
  TouchInput.clear();
  SoundManager.playEquip();
  this._inputMsgWindow.close();
  this._rebindWindow.activate();
  this._rebindWindow.refresh();
  ConfigManager.save();
};
function Scene_RebindKeyboard() {
  this.initialize(...arguments);
}
Scene_RebindKeyboard.prototype = Object.create(Scene_RebindBase.prototype);
Scene_RebindKeyboard.prototype.constructor = Scene_RebindKeyboard;
Scene_RebindKeyboard.prototype.initialize = function () {
  Scene_RebindBase.prototype.initialize.call(this);
};
Scene_RebindKeyboard.prototype.isForKeyboard = function () {
  return true;
};
Scene_RebindKeyboard.prototype.startRebind = function () {
  Scene_RebindBase.prototype.startRebind.call(this);
  this._replaceKeyID = this._rebindWindow.keyCode();
};
Scene_RebindKeyboard.prototype.inputKeyboardMessage = function () {
  return Window_KeyRebinds.SETTINGS.helpText.pressKeyboard;
};
Scene_RebindKeyboard.prototype.isForbiddenKeycode = function (_0x352754) {
  const _0x5672e6 = [];
  _0x5672e6.push(0xc0);
  for (let _0x5ce233 = 0x30; _0x5ce233 <= 0x39; _0x5ce233++) {
    _0x5672e6.push(_0x5ce233);
  }
  for (let _0x589020 = 0x41; _0x589020 <= 0x5a; _0x589020++) {
    _0x5672e6.push(_0x589020);
  }
  for (let _0x25bee6 = 0xba; _0x25bee6 <= 0xc0; _0x25bee6++) {
    _0x5672e6.push(_0x25bee6);
  }
  for (let _0xc6f862 = 0xdb; _0xc6f862 <= 0xde; _0xc6f862++) {
    _0x5672e6.push(_0xc6f862);
  }
  return !_0x5672e6.includes(_0x352754);
};
Scene_RebindKeyboard.prototype.updateKeybinds = function (_0x4cb81d) {
  Input.keyMapper[this._replaceKeyID] = Input.keyMapper[_0x4cb81d] || undefined;
  const _0x37ca8a = this._rebindWindow.keyType();
  Input.keyMapper[_0x4cb81d] = _0x37ca8a;
  Input.keyMapper[-0x1] = undefined;
  this.reassignCoreEngineControls();
};
Scene_RebindKeyboard.prototype.reassignCoreEngineControls = function () {
  const _0x2f7fb2 = VisuMZ.CoreEngine.Settings;
  if (_0x2f7fb2.KeyboardInput.DashToggleR) {
    if (Input.keyMapper[0x52] === undefined) {
      Input.keyMapper[0x52] = "dashToggle";
    }
  }
  if (_0x2f7fb2.QoL.ModernControls) {
    Input.keyMapper[0x23] = "end";
    Input.keyMapper[0x24] = 'home';
  }
};
Scene_RebindKeyboard.prototype.shiftRemove = function (_0x193d81) {
  Input.keyMapper[Number(_0x193d81)] = undefined;
  SoundManager.playEquip();
  this._rebindWindow.refresh();
  ConfigManager.save();
};
function Scene_RebindGamepad() {
  this.initialize(...arguments);
}
Scene_RebindGamepad.prototype = Object.create(Scene_RebindBase.prototype);
Scene_RebindGamepad.prototype.constructor = Scene_RebindGamepad;
Scene_RebindGamepad.prototype.initialize = function () {
  Scene_RebindBase.prototype.initialize.call(this);
};
Scene_RebindGamepad.prototype.isForGamepad = function () {
  return true;
};
Scene_RebindGamepad.prototype.buttonAssistText3 = function () {
  return Window_KeyRebinds.SETTINGS.buttonAssist.reset;
};
Scene_RebindGamepad.prototype.startRebind = function () {
  if (Input.isGamepadConnected()) {
    Input._rebindState = true;
    Input._lastGamepadState = -0x1;
    Scene_RebindBase.prototype.startRebind.call(this);
    this._replaceKeyID = this._rebindWindow.keyCode();
  } else {
    this._rebindWindow.activate();
    this._helpWindow.setText(Window_KeyRebinds.SETTINGS.helpText.noGamepadFound);
  }
};
Scene_RebindGamepad.prototype.inputKeyboardMessage = function () {
  return Window_KeyRebinds.SETTINGS.helpText.pressGamepad;
};
Scene_RebindGamepad.prototype.update = function () {
  Scene_RebindBase.prototype.update.call(this);
  this.checkGamepadButtonPress();
};
Scene_RebindGamepad.prototype.checkGamepadButtonPress = function () {
  if (!this._inputMsgWindow.isOpen()) {
    return;
  }
  if (Input._lastGamepadState >= 0x0) {
    if ([0xc, 0xd, 0xe, 0xf].includes(Input._lastGamepadState)) {
      return;
    }
    this.processKeybind(Input._lastGamepadState);
  }
};
Scene_RebindGamepad.prototype.cancelRebinding = function () {
  Input._rebindState = false;
  Input._lastGamepadState = -0x1;
  Scene_RebindBase.prototype.cancelRebinding.call(this);
};
Scene_RebindGamepad.prototype.updateKeybinds = function (_0x38d83b) {
  Input._rebindState = false;
  Input._lastGamepadState = -0x1;
  Input.gamepadMapper[this._replaceKeyID] = Input.gamepadMapper[_0x38d83b] || undefined;
  const _0x5e701d = this._rebindWindow.keyType();
  Input.gamepadMapper[_0x38d83b] = _0x5e701d;
  Input.gamepadMapper[-0x1] = undefined;
};
Scene_RebindGamepad.prototype.shiftReset = function () {
  if (VisuMZ.OptionsCore.Settings.Rebind.gamepadReset) {
    VisuMZ.OptionsCore.Settings.Rebind.gamepadReset.call(this);
  } else {
    Input.gamepadMapper = {
      0x0: 'ok',
      0x1: "cancel",
      0x2: "shift",
      0x3: "menu",
      0x4: "pageup",
      0x5: 'pagedown',
      0xc: 'up',
      0xd: 'down',
      0xe: 'left',
      0xf: "right"
    };
  }
  SoundManager.playEquip();
  this._rebindWindow.refresh();
  ConfigManager.save();
};
uiDefault.hoverEnabled = Window_Selectable.prototype.isHoverEnabled;
Window_Selectable.prototype.isHoverEnabled = function () {
  if (ConfigManager.uiHoverSelect !== undefined) {
    return ConfigManager.uiHoverSelect;
  } else {
    return uiDefault.hoverEnabled.call(this);
    ;
  }
};
function Window_OptionsCategory() {
  this.initialize(...arguments);
}
Window_OptionsCategory.categoryList = VisuMZ.OptionsCore.Settings.Categories;
Window_OptionsCategory.prototype = Object.create(Window_HorzCommand.prototype);
Window_OptionsCategory.prototype.constructor = Window_OptionsCategory;
Window_OptionsCategory.prototype.initialize = function (_0x2e5afd) {
  Window_HorzCommand.prototype.initialize.call(this, _0x2e5afd);
  this.createCommandNameWindow(_0x2e5afd);
};
Window_OptionsCategory.prototype.isUseModernControls = function () {
  return Imported.VisuMZ_0_CoreEngine && Window_HorzCommand.prototype.isUseModernControls.call(this);
};
Window_OptionsCategory.prototype.createCommandNameWindow = function (_0x51d2bb) {
  const _0x2f9c40 = new Rectangle(0x0, 0x0, _0x51d2bb.width, _0x51d2bb.height);
  this._commandNameWindow = new Window_Base(_0x2f9c40);
  this._commandNameWindow.opacity = 0x0;
  this.addChild(this._commandNameWindow);
  this.updateCommandNameWindow();
};
Window_OptionsCategory.prototype.callUpdateHelp = function () {
  Window_HorzCommand.prototype.callUpdateHelp.call(this);
  if (this._commandNameWindow) {
    this.updateCommandNameWindow();
  }
};
Window_OptionsCategory.prototype.updateCommandNameWindow = function () {
  const _0xc08a1a = this._commandNameWindow;
  _0xc08a1a.contents.clear();
  const _0x3a149f = this.commandStyleCheck(this.index());
  if (_0x3a149f === "icon") {
    const _0x197e66 = this.itemLineRect(this.index());
    let _0x83fe88 = this.commandName(this.index());
    _0x83fe88 = _0x83fe88.replace(/\\I\[(\d+)\]/gi, '');
    _0xc08a1a.resetFontSettings();
    this.commandNameWindowDrawBackground(_0x83fe88, _0x197e66);
    this.commandNameWindowDrawText(_0x83fe88, _0x197e66);
    this.commandNameWindowCenter(_0x83fe88, _0x197e66);
  }
};
Window_OptionsCategory.prototype.commandNameWindowDrawBackground = function (_0x4ef66c, _0x34d27b) {};
Window_OptionsCategory.prototype.processCursorHomeEndTrigger = function () {};
Window_OptionsCategory.prototype.commandNameWindowDrawText = function (_0x571bd4, _0x21dcda) {
  const _0x39a67f = this._commandNameWindow;
  _0x39a67f.drawText(_0x571bd4, 0x0, _0x21dcda.y, _0x39a67f.innerWidth, 'center');
};
Window_OptionsCategory.prototype.commandNameWindowCenter = function (_0x353f8c, _0x1aebd7) {
  const _0x4a22ca = this._commandNameWindow;
  const _0x1ac377 = $gameSystem.windowPadding();
  const _0x3c9bf3 = _0x1aebd7.x + Math.floor(_0x1aebd7.width / 0x2) + _0x1ac377;
  _0x4a22ca.x = _0x4a22ca.width / -0x2 + _0x3c9bf3;
  _0x4a22ca.y = Math.floor(_0x1aebd7.height / 0x2);
};
Window_OptionsCategory.prototype.maxCols = function () {
  return this._list ? this._list.length : 0x1;
};
Window_OptionsCategory.prototype.setListWindow = function (_0x2492ad) {
  this._optionsWindow = _0x2492ad;
  this.refresh();
};
Window_OptionsCategory.prototype.update = function () {
  Window_HorzCommand.prototype.update.call(this);
  if (this._optionsWindow) {
    this._optionsWindow.setCategory(this.currentData());
  }
};
Window_OptionsCategory.prototype.processCursorMoveModernControls = function () {
  if (this.isCursorMovable()) {
    const _0x8dcfc2 = this.index();
    if (Input.isRepeated('pagedown')) {
      this.cursorRight(Input.isTriggered("pagedown"));
    }
    if (Input.isRepeated("pageup")) {
      this.cursorLeft(Input.isTriggered("pageup"));
    }
    if (this.index() !== _0x8dcfc2) {
      this.playCursorSound();
    }
  }
};
Window_OptionsCategory.prototype.processHandling = function () {
  if (this.isUseModernControls()) {
    return;
  }
  Window_HorzCommand.prototype.processHandling.call(this);
};
Window_OptionsCategory.prototype.isHoverEnabled = function () {
  return this.isUseModernControls() ? false : Window_HorzCommand.prototype.isHoverEnabled.call(this);
};
Window_OptionsCategory.prototype.processTouchModernControls = function () {
  if (this.isOpenAndActive()) {
    if (TouchInput.isTriggered()) {
      this.onTouchSelect(true);
    }
    if (TouchInput.isClicked()) {
      this.onTouchOk();
    } else if (TouchInput.isCancelled()) {
      this.onTouchCancel();
    }
  }
};
Window_OptionsCategory.prototype.onTouchSelect = function (_0x1033ca) {
  if (this.isUseModernControls()) {
    this.onTouchSelectModern(true);
  } else {
    Window_HorzCommand.prototype.onTouchSelect.call(this, _0x1033ca);
  }
};
Window_OptionsCategory.prototype.onTouchSelectModern = function (_0x59585a) {
  this._doubleTouch = false;
  if (this.isCursorMovable()) {
    const _0x26c12a = this.index();
    const _0x10a93f = this.hitIndex();
    if (_0x10a93f >= 0x0 && _0x10a93f !== this.index()) {
      this.select(_0x10a93f);
    }
    if (_0x59585a && this.index() !== _0x26c12a) {
      this.playCursorSound();
    }
  }
};
Window_OptionsCategory.prototype.makeCommandList = function () {
  for (const _0xb597dd of Window_OptionsCategory.categoryList) {
    if (!_0xb597dd.ShowJS.call(this)) {
      continue;
    }
    const _0x466844 = this.commandStyle();
    const _0x6302d5 = _0xb597dd.Name;
    const _0x523d96 = _0xb597dd.Icon;
    const _0x4301c9 = _0x466844 === "text" ? _0x6302d5 : "\\I[%1]%2".format(_0x523d96, _0x6302d5);
    const _0x5ae529 = _0xb597dd.List;
    this.addCommand(_0x4301c9, "category", true, _0x5ae529);
  }
};
Window_OptionsCategory.prototype.itemTextAlign = function () {
  return VisuMZ.OptionsCore.Settings.OptionsSettings.CategoryTextAlign;
};
Window_OptionsCategory.prototype.drawItem = function (_0x3d4815) {
  const _0x2e062e = this.commandStyleCheck(_0x3d4815);
  if (_0x2e062e === "iconText") {
    this.drawItemStyleIconText(_0x3d4815);
  } else if (_0x2e062e === 'icon') {
    this.drawItemStyleIcon(_0x3d4815);
  } else {
    Window_HorzCommand.prototype.drawItem.call(this, _0x3d4815);
  }
};
Window_OptionsCategory.prototype.commandStyle = function () {
  return VisuMZ.OptionsCore.Settings.OptionsSettings.CategoryStyle;
};
Window_OptionsCategory.prototype.commandStyleCheck = function (_0x3b5c70) {
  if (_0x3b5c70 < 0x0) {
    return "text";
  }
  const _0x233c77 = this.commandStyle();
  if (_0x233c77 !== "auto") {
    return _0x233c77;
  } else {
    if (this.maxItems() > 0x0) {
      const _0x3bc222 = this.commandName(_0x3b5c70);
      if (_0x3bc222.match(/\\I\[(\d+)\]/i)) {
        const _0x7fb945 = this.itemLineRect(_0x3b5c70);
        const _0x182399 = this.textSizeEx(_0x3bc222).width;
        return _0x182399 <= _0x7fb945.width ? 'iconText' : "icon";
      }
    }
  }
  return "text";
};
Window_OptionsCategory.prototype.drawItemStyleIconText = function (_0x521b10) {
  const _0x5d482c = this.itemLineRect(_0x521b10);
  const _0x1f2b2e = this.commandName(_0x521b10);
  const _0x51dee5 = this.textSizeEx(_0x1f2b2e).width;
  this.changePaintOpacity(this.isCommandEnabled(_0x521b10));
  const _0x536b6c = this.itemTextAlign();
  if (_0x536b6c === 'right') {
    this.drawTextEx(_0x1f2b2e, _0x5d482c.x + _0x5d482c.width - _0x51dee5, _0x5d482c.y, _0x51dee5);
  } else {
    if (_0x536b6c === "center") {
      const _0x20e174 = _0x5d482c.x + Math.floor((_0x5d482c.width - _0x51dee5) / 0x2);
      this.drawTextEx(_0x1f2b2e, _0x20e174, _0x5d482c.y, _0x51dee5);
    } else {
      this.drawTextEx(_0x1f2b2e, _0x5d482c.x, _0x5d482c.y, _0x51dee5);
    }
  }
};
Window_OptionsCategory.prototype.drawItemStyleIcon = function (_0x162742) {
  this.commandName(_0x162742).match(/\\I\[(\d+)\]/i);
  const _0x20f2c9 = Number(RegExp.$1) || 0x0;
  const _0x583ac0 = this.itemLineRect(_0x162742);
  const _0xa1b41e = _0x583ac0.x + Math.floor((_0x583ac0.width - ImageManager.iconWidth) / 0x2);
  const _0x4479ce = _0x583ac0.y + (_0x583ac0.height - ImageManager.iconHeight) / 0x2;
  this.drawIcon(_0x20f2c9, _0xa1b41e, _0x4479ce);
};
VisuMZ.OptionsCore.Window_Options_initialize = Window_Options.prototype.initialize;
Window_Options.prototype.initialize = function (_0x2d3eef) {
  this._name = null;
  this._data = null;
  VisuMZ.OptionsCore.Window_Options_initialize.call(this, _0x2d3eef);
};
Window_Options.prototype.setCategory = function (_0x47e000) {
  if (!_0x47e000) {
    return;
  }
  if (_0x47e000.name === this._name) {
    return;
  }
  this._name = _0x47e000.name;
  this._data = _0x47e000.ext;
  this.smoothScrollTo(0x0, 0x0);
  this.refresh();
  if (this.isUseModernControls()) {
    this.smoothSelect(0x0);
  }
};
Window_Options.prototype.getConfigValue = function (_0x5a92a8) {
  return ConfigManager[_0x5a92a8];
};
Window_Options.prototype.setConfigValue = function (_0x48413a, _0x5b1846) {
  ConfigManager[_0x48413a] = _0x5b1846;
};
Window_Options.prototype.prepareOptionsCoreSceneChange = function () {
  $gameTemp._returnOptionsCore = {
    'category': SceneManager._scene._categoryWindow.index(),
    'index': this.index(),
    'scrollX': this._scrollX,
    'scrollY': this._scrollY
  };
};
Window_Options.prototype.isRebindingEnabled = function () {
  return Scene_Options.ADD_REBIND_OPTIONS;
};
Window_Options.prototype.isUseModernControls = function () {
  return Imported.VisuMZ_0_CoreEngine && Window_HorzCommand.prototype.isUseModernControls.call(this);
};
Window_Options.prototype.processCursorMoveModernControls = function () {
  if (this.isCursorMovable()) {
    const _0x4333ec = this.index();
    if (Input.isRepeated("down")) {
      if (Input.isPressed("shift")) {
        this.cursorPagedown();
      } else {
        this.cursorDown(Input.isTriggered('down'));
      }
    }
    if (Input.isRepeated('up')) {
      if (Input.isPressed("shift")) {
        this.cursorPageup();
      } else {
        this.cursorUp(Input.isTriggered('up'));
      }
    }
    if (Input.isRepeated("right")) {
      this.cursorRight(Input.isTriggered("right"));
    }
    if (Input.isRepeated("left")) {
      this.cursorLeft(Input.isTriggered("left"));
    }
    if (this.index() !== _0x4333ec) {
      this.playCursorSound();
    }
  }
};
VisuMZ.OptionsCore.Window_Options_processOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function () {
  const _0x4eb31c = this.index();
  const _0x500a0a = this.commandSymbol(_0x4eb31c);
  if (!this.isCommandEnabled(_0x4eb31c)) {
    this.playBuzzerSound();
    return;
  }
  try {
    this._dataFunc[_0x4eb31c].ProcessOkJS.call(this, _0x500a0a, _0x4eb31c);
  } catch (_0x4de3ff) {
    VisuMZ.OptionsCore.Window_Options_processOk.call(this);
  }
};
VisuMZ.OptionsCore.Window_Options_cursorRight = Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight = function () {
  const _0x5ac6ef = this.index();
  const _0x1e95e6 = this.commandSymbol(_0x5ac6ef);
  if (!this.isCommandEnabled(_0x5ac6ef)) {
    this.playBuzzerSound();
    return;
  }
  try {
    this._dataFunc[_0x5ac6ef].CursorRightJS.call(this, _0x1e95e6, _0x5ac6ef);
  } catch (_0x4f7b9f) {
    VisuMZ.OptionsCore.Window_Options_cursorRight.call(this);
  }
};
VisuMZ.OptionsCore.Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft = function () {
  const _0xc0c8dc = this.index();
  const _0x52e774 = this.commandSymbol(_0xc0c8dc);
  if (!this.isCommandEnabled(_0xc0c8dc)) {
    this.playBuzzerSound();
    return;
  }
  try {
    this._dataFunc[_0xc0c8dc].CursorLeftJS.call(this, _0x52e774, _0xc0c8dc);
  } catch (_0x53ccc3) {
    VisuMZ.OptionsCore.Window_Options_cursorLeft.call(this);
  }
};
Window_Options.prototype.makeCommandList = function () {
  if (!this._data) {
    return;
  }
  this._dataFunc = [];
  for (const _0x198387 of this._data) {
    if (!_0x198387.ShowJS.call(this)) {
      continue;
    }
    let _0x2e042b = _0x198387.TextStr;
    if (['', "Untitled"].includes(_0x2e042b)) {
      _0x2e042b = _0x198387.TextJS.call(this);
    }
    const _0x560a3a = _0x198387.Icon;
    if (_0x560a3a > 0x0) {
      _0x2e042b = "\\I[%1]%2".format(_0x560a3a, _0x2e042b);
    }
    const _0x5f09d4 = _0x198387.Symbol;
    const _0x52d837 = _0x198387.EnableJS.call(this);
    const _0x34af12 = _0x198387.ExtJS.call(this);
    this.addCommand(_0x2e042b, _0x5f09d4, _0x52d837, _0x34af12);
    this._dataFunc.push(_0x198387);
  }
};
VisuMZ.OptionsCore.Window_Options_drawItem = Window_Options.prototype.drawItem;
Window_Options.prototype.drawItem = function (_0xcc6f5) {
  this.resetFontSettings();
  this.changePaintOpacity(this.isCommandEnabled(_0xcc6f5));
  const _0x49b3e6 = this._list[_0xcc6f5].symbol;
  this._currentDrawingIndex = _0xcc6f5;
  try {
    this._dataFunc[_0xcc6f5].DrawJS.call(this, _0x49b3e6, _0xcc6f5);
  } catch (_0x1e1065) {
    VisuMZ.OptionsCore.Window_Options_drawItem.call(this, _0xcc6f5);
  }
  this._currentDrawingIndex = undefined;
};
Window_Options.prototype.updateButtonVisibility = function () {
  SceneManager._scene.updateButtonVisibility();
};
Window_Options.prototype.updateButtonPositions = function () {
  SceneManager._scene.optionsCoreUpdateButtonPositions();
};
Window_Options.prototype.updateWindowPositions = function () {
  SceneManager._scene.optionsCoreUpdateWindowPositions();
};
Window_Options.prototype.refreshWindows = function () {
  if (SceneManager._scene.constructor !== Scene_Options) {
    return;
  }
  SceneManager._scene.refreshWindows();
};
Window_Options.prototype.drawText = function (_0x3a13cb, _0x2d85a8, _0x4f24f0, _0x5798fc, _0x46dd3f) {
  const _0x42ef8a = this.contents.paintOpacity;
  if (this._currentDrawingIndex >= 0x0) {
    if (!this.isCommandEnabled(this._currentDrawingIndex)) {
      this.changePaintOpacity(false);
    }
  }
  Window_Command.prototype.drawText.call(this, _0x3a13cb, _0x2d85a8, _0x4f24f0, _0x5798fc, _0x46dd3f);
  this.contents.paintOpacity = _0x42ef8a;
};
Window_Options.prototype.drawTextEx = function (_0x19a731, _0xb675fb, _0x32d41f, _0x5d5f61) {
  this.resetFontSettings();
  const _0x2b68e7 = this.contents.paintOpacity;
  if (this._currentDrawingIndex >= 0x0) {
    if (!this.isCommandEnabled(this._currentDrawingIndex)) {
      this.changePaintOpacity(false);
    }
  }
  const _0x47467f = this.createTextState(_0x19a731, _0xb675fb, _0x32d41f, _0x5d5f61);
  this.processAllText(_0x47467f);
  const _0x125dfb = _0x47467f.outputWidth;
  this.contents.paintOpacity = _0x2b68e7;
  return _0x125dfb;
};
function Window_RebindHelp() {
  this.initialize(...arguments);
}
Window_RebindHelp.prototype = Object.create(Window_Help.prototype);
Window_RebindHelp.prototype.constructor = Window_RebindHelp;
Window_RebindHelp.prototype.initialize = function (_0x19bc43) {
  Window_Help.prototype.initialize.call(this, _0x19bc43);
};
Window_RebindHelp.prototype.updateBackOpacity = function () {
  this.backOpacity = 0xff;
};
Window_RebindHelp.prototype.refresh = function () {
  this.contents.clear();
  const _0x1998af = this.textSizeEx(this._text);
  const _0x4e1bff = Math.round((this.innerWidth - _0x1998af.width) / 0x2);
  const _0x2d162e = Math.round((this.innerHeight - _0x1998af.height) / 0x2);
  this.drawTextEx(this._text, _0x4e1bff, _0x2d162e);
};
function Window_KeyRebinds() {
  this.initialize(...arguments);
}
Window_KeyRebinds.prototype = Object.create(Window_Command.prototype);
Window_KeyRebinds.prototype.constructor = Window_KeyRebinds;
Window_KeyRebinds.SETTINGS = {
  'bgType': VisuMZ.OptionsCore.Settings.Rebind.RebindWindow_BgType ?? 0x0,
  'keyOrder': VisuMZ.OptionsCore.Settings.Rebind.keyOrder ?? ['up', "left", "down", "right", 'ok', "escape", 'shift', "tab", 'pageup', "pagedown"],
  'gamepadOrder': VisuMZ.OptionsCore.Settings.Rebind.gamepadOrder ?? ['up', 'left', "down", "right", 'ok', "cancel", "menu", 'shift', "pageup", 'pagedown'],
  'keyNameAlign': VisuMZ.OptionsCore.Settings.Rebind.keyNameAlign ?? "center",
  'rebindAlign': VisuMZ.OptionsCore.Settings.Rebind.rebindAlign ?? 'center',
  'buttonAssist': {
    'remove': VisuMZ.OptionsCore.Settings.Rebind.removeAssist ?? "Remove",
    'reset': VisuMZ.OptionsCore.Settings.Rebind.resetAssist ?? "Reset",
    'confirm': VisuMZ.OptionsCore.Settings.Rebind.confirmAssist ?? "Rebind",
    'cancel': VisuMZ.OptionsCore.Settings.Rebind.cancelAssist ?? 'Exit'
  },
  'helpText': {
    'selectKeyboard': VisuMZ.OptionsCore.Settings.Rebind.selectKeyboard ?? "Select a key to rebind/change.",
    'selectGamepad': VisuMZ.OptionsCore.Settings.Rebind.selectGamepad ?? "Select a button to rebind/change.",
    'pressKeyboard': VisuMZ.OptionsCore.Settings.Rebind.pressKeyboard ?? "Press a keyboard button to assign this control.",
    'pressGamepad': VisuMZ.OptionsCore.Settings.Rebind.pressGamepad ?? "Press a gamepad button to assign this control.",
    'pressForbidden': VisuMZ.OptionsCore.Settings.Rebind.pressForbidden ?? "That key cannot be bound to a control.",
    'buttonForbidden': VisuMZ.OptionsCore.Settings.Rebind.buttonForbidden ?? "This button cannot be reassigned.",
    'noGamepadFound': VisuMZ.OptionsCore.Settings.Rebind.noGamepadFound ?? "No gamepad is detected!"
  }
};
Window_KeyRebinds.prototype.initialize = function (_0x54a41f) {
  this.setupType();
  Window_Command.prototype.initialize.call(this, _0x54a41f);
  this.select(this.isForKeyboard() ? 0x2 : 0x1);
};
Window_KeyRebinds.prototype.setupType = function () {
  const _0x5225f7 = SceneManager._scene.constructor.name;
  if (_0x5225f7 === "Scene_RebindKeyboard") {
    this._type = "keyboard";
  } else if (_0x5225f7 === "Scene_RebindGamepad") {
    this._type = "gamepad";
  } else {
    this._type = 'none';
  }
};
Window_KeyRebinds.prototype.isForKeyboard = function () {
  return this._type === "keyboard";
};
Window_KeyRebinds.prototype.isForGamepad = function () {
  return this._type === "gamepad";
};
Window_KeyRebinds.prototype.maxCols = function () {
  return 0x1 + this.extraColumns();
};
Window_KeyRebinds.prototype.extraColumns = function () {
  if (this.isForKeyboard()) {
    return 0x2;
  } else {
    if (this.isForGamepad()) {
      return 0x1;
    }
  }
  return 0x0;
};
Window_KeyRebinds.prototype.keyCode = function () {
  if (this.isForKeyboard()) {
    const _0x32a92b = this.index();
    const _0x5df3fc = Number(this.commandName(_0x32a92b));
    const _0x554840 = String(this._list[_0x32a92b].ext || '');
    const _0xf18d61 = Input.getKeyboardMappingByKeyType(_0x554840) || [];
    return Number(_0xf18d61[_0x5df3fc] ?? -0x1);
  } else {
    if (this.isForGamepad()) {
      const _0x14f395 = this.index();
      const _0x3f4901 = String(this._list[_0x14f395].ext || '');
      return Input.getGamepadButtonID(_0x3f4901)[0x0];
    }
  }
};
Window_KeyRebinds.prototype.keyType = function () {
  const _0x5a6a69 = this.index();
  return String(this._list[_0x5a6a69].ext || '');
};
Window_KeyRebinds.prototype.select = function (_0x1121c7) {
  if (Input.isTriggered('home')) {
    _0x1121c7 = this.isForKeyboard() ? 0x2 : 0x1;
  }
  if (this.isForKeyboard()) {
    if (_0x1121c7 % this.maxCols() === 0x1) {
      return;
    }
  }
  if (_0x1121c7 % this.maxCols() === 0x0) {
    return;
  }
  Window_Command.prototype.select.call(this, _0x1121c7);
};
Window_KeyRebinds.prototype.playOkSound = function () {
  if (this.isForGamepad() && !Input.isGamepadConnected()) {
    this.playBuzzerSound();
  } else {
    Window_Command.prototype.playOkSound.call(this);
  }
};
Window_KeyRebinds.prototype.playBuzzerSound = function () {
  Window_Command.prototype.playBuzzerSound.call(this);
  if (this.isForGamepad() && this._helpWindow) {
    this._helpWindow.setText(Window_KeyRebinds.SETTINGS.helpText.buttonForbidden);
  }
};
Window_KeyRebinds.prototype.makeCommandList = function () {
  const _0x5d7381 = Window_KeyRebinds.SETTINGS;
  const _0x95453 = this.isForKeyboard() ? _0x5d7381.keyOrder : _0x5d7381.gamepadOrder;
  for (const _0x33b7f3 of _0x95453) {
    this.addKeyboardColumns(_0x33b7f3);
  }
};
Window_KeyRebinds.prototype.addKeyboardColumns = function (_0x1357b7) {
  const _0x57d0a5 = this.extraColumns();
  if (_0x57d0a5 <= 0x0) {
    return;
  }
  this.addCommand(_0x1357b7, "keyName", false, _0x1357b7);
  for (let _0x2e85e3 = 0x0; _0x2e85e3 < _0x57d0a5; _0x2e85e3++) {
    const _0x1a89d5 = this.canRebindInput(_0x1357b7, _0x2e85e3);
    this.addCommand(String(_0x2e85e3), "rebind", _0x1a89d5, _0x1357b7);
  }
};
Window_KeyRebinds.prototype.canRebindInput = function (_0xcaf685, _0x2cea12) {
  if (this.isForKeyboard()) {
    if (_0x2cea12 === 0x0) {
      return false;
    }
  } else {
    if (this.isForGamepad()) {
      if (['up', "left", "down", "right"].includes(_0xcaf685)) {
        return false;
      }
    }
  }
  return true;
};
Window_KeyRebinds.prototype.drawItemBackground = function (_0x7aca91) {
  if (_0x7aca91 % this.maxCols() === 0x0) {
    return;
  }
  const _0x22ab9f = this.itemRect(_0x7aca91);
  this.drawBackgroundRect(_0x22ab9f);
};
Window_KeyRebinds.prototype.drawItem = function (_0x3379c9) {
  const _0x5133f0 = this.commandSymbol(_0x3379c9);
  if (_0x5133f0 === 'keyName') {
    this.drawItemKeyName(_0x3379c9);
  } else if (_0x5133f0 === "rebind") {
    this.drawItemKeyRebind(_0x3379c9);
  }
};
Window_KeyRebinds.prototype.drawItemKeyName = function (_0x32ba8f) {
  const _0x169676 = Window_KeyRebinds.SETTINGS;
  const _0x35871e = this.itemLineRect(_0x32ba8f);
  const _0x46d198 = TextManager.REBIND[this._list[_0x32ba8f].ext] || '';
  const _0x17e4d4 = this.textSizeEx(_0x46d198).width;
  const _0x2e3f24 = _0x169676.keyNameAlign || 'center';
  this.resetFontSettings();
  this.changePaintOpacity(true);
  if (_0x2e3f24 === "right") {
    this.drawTextEx(_0x46d198, _0x35871e.x + _0x35871e.width - _0x17e4d4, _0x35871e.y, _0x17e4d4);
  } else {
    if (_0x2e3f24 === "center") {
      const _0x5e7a28 = _0x35871e.x + Math.floor((_0x35871e.width - _0x17e4d4) / 0x2);
      this.drawTextEx(_0x46d198, _0x5e7a28, _0x35871e.y, _0x17e4d4);
    } else {
      this.drawTextEx(_0x46d198, _0x35871e.x, _0x35871e.y, _0x17e4d4);
    }
  }
};
Window_KeyRebinds.prototype.drawItemKeyRebind = function (_0x5d8059) {
  const _0x4a180e = Window_KeyRebinds.SETTINGS;
  const _0x51f0be = this.itemLineRect(_0x5d8059);
  const _0x10a6f4 = Number(this.commandName(_0x5d8059));
  const _0x563b28 = String(this._list[_0x5d8059].ext || '');
  $gameTemp._bypassForRebindController = this.isForGamepad();
  const _0x140b34 = this.getKeyName(_0x10a6f4, _0x563b28);
  $gameTemp._bypassForRebindController = undefined;
  const _0x158164 = this.textSizeEx(_0x140b34).width;
  const _0xf7280f = _0x4a180e.keyNameAlign || "center";
  this.resetFontSettings();
  this.changePaintOpacity(this.isCommandEnabled(_0x5d8059));
  if (_0xf7280f === "right") {
    this.drawTextEx(_0x140b34, _0x51f0be.x + _0x51f0be.width - _0x158164, _0x51f0be.y, _0x158164);
  } else {
    if (_0xf7280f === "center") {
      const _0x3ebde7 = _0x51f0be.x + Math.floor((_0x51f0be.width - _0x158164) / 0x2);
      this.drawTextEx(_0x140b34, _0x3ebde7, _0x51f0be.y, _0x158164);
    } else {
      this.drawTextEx(_0x140b34, _0x51f0be.x, _0x51f0be.y, _0x158164);
    }
  }
};
Window_KeyRebinds.prototype.getKeyName = function (_0x1ee0f0, _0x32b2f7) {
  if (this.isForKeyboard()) {
    const _0x207958 = Input.getKeyboardMappingByKeyType(_0x32b2f7) || [];
    const _0x4bf0b3 = _0x207958[_0x1ee0f0];
    if (TextManager.stringKeyMap[_0x4bf0b3] === undefined) {
      return '-';
    }
    const _0x33d639 = [TextManager.stringKeyMap[_0x4bf0b3]];
    return TextManager.makeInputButtonString(_0x33d639);
  } else {
    if (this.isForGamepad()) {
      const _0xc5225 = Input.getLastUsedGamepadType();
      if (_0xc5225 !== 'Keyboard') {
        return TextManager.getControllerInputButtonString(_0xc5225, _0x32b2f7);
      }
      if (['up', 'left', "down", "right"].includes(_0x32b2f7)) {
        const _0x53c27e = TextManager.REBIND.dpadFmt;
        return _0x53c27e.format(TextManager.REBIND[_0x32b2f7]);
      } else {
        const _0x4152c4 = TextManager.REBIND.buttonFmt;
        return _0x4152c4.format(Input.getGamepadButtonID(_0x32b2f7));
      }
    } else {
      return '';
    }
  }
};
Window_KeyRebinds.prototype.update = function () {
  Window_Command.prototype.update.call(this);
  this.updateShiftRemoveShortcut();
  this.updateGamepadChange();
};
Window_KeyRebinds.prototype.updateShiftRemoveShortcut = function () {
  if (!this.isOpenAndActive()) {
    return;
  }
  if (!Input.isTriggered("shift")) {
    return;
  }
  if (this.isForKeyboard() && this.keyCode() >= 0x0) {
    SceneManager._scene.shiftRemove(this.keyCode());
  }
  if (this.isForGamepad()) {
    SceneManager._scene.shiftReset();
  }
};
Window_KeyRebinds.prototype.updateGamepadChange = function () {
  if (!this.isForGamepad()) {
    return;
  }
  if (this._lastGamepadID === Input.getLastUsedGamepadType()) {
    return;
  }
  this._lastGamepadID = Input.getLastUsedGamepadType();
  this.refresh();
};
Window_KeyRebinds.prototype.updateHelp = function () {
  const _0x10e5c6 = Window_KeyRebinds.SETTINGS.helpText;
  this._helpWindow.clear();
  if (this.isForKeyboard()) {
    this._helpWindow.setText(_0x10e5c6.selectKeyboard);
  } else if (this.isForGamepad()) {
    this._helpWindow.setText(_0x10e5c6.selectGamepad);
  }
};