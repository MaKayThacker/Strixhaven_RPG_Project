//=============================================================================
// VisuStella MZ - Core Engine
// VisuMZ_0_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_0_CoreEngine = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CoreEngine = VisuMZ.CoreEngine || {};
VisuMZ.CoreEngine.version = 1.84;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 0] [Version 1.84] [CoreEngine]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Core_Engine_VisuStella_MZ
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Core Engine plugin is designed to fix any bugs that may have slipped
 * past RPG Maker MZ's source code and to give game devs more control over
 * RPG Maker MZ's various features, ranging from mechanics to aesthetics to
 * quality of life improvements.
 *
 * Features include all (but not limited to) the following:
 *
 * * Bug fixes for the problems existing in the RPG Maker MZ base code.
 * * Failsafes added for Script Call related event commands.
 * * Lots of Quality of Life Settings that can be activated through the
 *   Plugin Parameters.
 * * Control over the various Text Colors used throughout the game.
 * * Change up the maximum amount of gold carried, give it an icon attached to
 *   the label, and include text for overlap specifics.
 * * Preload images as the game boots up.
 * * Add specific background images for menus found throughout the game.
 * * A button assist window will appear at the top or bottom of the screen,
 *   detailing which buttons do what when inside a menu. This feature can be
 *   turned off.
 * * Choose which in-game battler parameters to display inside menus (ie ATK,
 *   DEF, AGI, etc.) and determine their maximum values, along with plenty of
 *   notetags to give more control over parameter, x-parameter, s-parameter
 *   bonuses through equipment, states, and other trait objects.
 * * Control over how the UI objects appear (such as the menu button, cancel
 *   button, left/right actor switch buttons).
 * * Reposition actors and enemies if the battle resolution is larger.
 * * Allow class names and nicknames to support text codes when displayed.
 * * Determine how windows behave in the game, if they will mask other windows,
 *   their line height properties, and more.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 0 ------
 *
 * This plugin is a Tier 0 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ Plugin library.
 *
 * ============================================================================
 * Important Changes: Bug Fixes
 * ============================================================================
 *
 * This plugin also serves to fix various bugs found in RPG Maker MZ that have
 * been unaddressed or not yet taken care of. The following is a list of bugs
 * that have been fixed by this plugin:
 *
 * ---
 *
 * Attack Skill Trait
 *
 * Enemies are unaffected by the Attack Skill Trait. This means if they have
 * an Attack action, they will always use Attack over and over even if their
 * Attack Skill Trait has been changed. This plugin will change it up so that
 * the Attack skill will comply with whatever their Attack Skill Trait's skill
 * is set to.
 *
 * ---
 *
 * Auto Battle Actor Skill Usage
 *
 * If an actor with Auto Battle has access to a skill but not have any access
 * to that skill's type, that actor will still be able to use the skill during
 * Auto Battle despite the fact that the actor cannot use that skill during
 * manual input.
 *
 * ---
 * 
 * Auto Battle Attack Seal Bypass
 * 
 * By default, if the attack skill is sealed via a trait and an actor has
 * auto-battle, the action can still be used via auto-battle. This is now fixed
 * and actors should not be able to attack via auto-battle if their attack
 * ability is sealed.
 * 
 * ---
 * 
 * Auto Battle Lock Up
 * 
 * If an auto battle Actor fights against an enemy whose DEF/MDF is too high,
 * they will not use any actions at all. This can cause potential game freezing
 * and softlocks. This plugin will change that and have them default to a
 * regular Attack.
 * 
 * ---
 * 
 * Auto Save After New Game
 * 
 * Normally, when starting a new game through the "New Game" option, there is
 * no auto save trigger. However, if you start a new game or load a saved game,
 * then go to the Game End screen, return back to the title screen, then start
 * a New Game, the auto save trigger occurs when it shouldn't. The Core Engine
 * will now patch this and prevent the trigger from taking place.
 * 
 * ---
 * 
 * Battle Forced End Action Crash
 * 
 * Depending on various circumstances, currently active battlers can be cleared
 * from the battle system at will due to a number of reasons. However, if it
 * just so happens that the targets are cleared, too, with actions remaining,
 * then a crash will follow up. This plugin will prevent that change. Fix made
 * by Olivia.
 * 
 * ---
 * 
 * Debug Console Refresh Bug
 * 
 * When pressing F5 to refresh while the debug console (DevTools) is open,
 * some graphics will fail to load properly. This started occurring since the
 * RPG Maker MZ 1.5.0 update and the code for loading the images has now been
 * reverted to the 1.4.4 version where it was last stable.
 * 
 * ---
 * 
 * Gamepad Repeat Input
 * 
 * Cleared inputs on gamepads do not have a downtime and will trigger the
 * following input frame. The causes problems with certain RPG Maker MZ menus
 * where the inputs have to be cleared as the next immediate frame will have
 * them inputted again. This plugin changes it so that whenever inputs are
 * cleared, there is a downtime equal to the keyboard clear frames before the
 * gamepad input is registered once more.
 * 
 * ---
 * 
 * Invisible Battle Sprites
 * 
 * If you removed a party member during battle and added that exact party
 * member back into the same slot, their sprite would appear invisible. The
 * VisuStella Core Engine will fix this problem and prevent it from happening.
 * 
 * ---
 * 
 * Instant Text Discrepancy for Window_Message
 * 
 * Window_Message displays text differently when it draws letters one by one
 * versus when the text is displayed instantly. This isn't noticeable with the
 * default font, but it's very visible when using something like Arial. The
 * error is due to Bitmap.measureTextWidth yielding a rounded value per letter
 * versus per word. The Core Engine will provide a bug fix that will single out
 * the cause and make it so that only Window_Message will not utilize any round
 * number values when determining the width of each letter, whether or not it
 * is shown instantly. This change will only affect Window_Message and not any
 * other window in order to prevent unintended side effects.
 * 
 * This can be disabled through the Plugin Parameters:
 * 
 * Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * 
 * ---
 *
 * Move Picture, Origin Differences
 *
 * If a Show Picture event command is made with an Origin setting of
 * "Upper Left" and a Move Picture event command is made afterwards with an
 * Origin setting of "Center", RPG Maker MZ would originally have it instantly
 * jump into the new origin setting without making a clean transition between
 * them. This plugin will create that clean transition between origins.
 *
 * ---
 * 
 * Overly-Protective Substitute
 * 
 * When an ally with critical health is being targeted by a friendly non-
 * Certain Hit skill (such as a heal or buff) and another ally has the
 * substitute state, the other ally would "protect" the originally targeted
 * ally and take the heal or buff.
 * 
 * The new changed behavior is that now, substitute will not trigger for any
 * actions whose scope targets allies.
 * 
 * ---
 * 
 * Skill List Active After Party Member Change
 * 
 * If the skill list is active (ie. the player can move the cursor around) and
 * the party member currently being viewed is changed via the button commands,
 * then previously, RPG Maker MZ would still have that window be active despite
 * having the cursor hidden temporarily. Upon pressing direction buttons, the
 * cursor reveals itself and both the skill type window and skill list window
 * are both active, making way for lots of potential problems to happen.
 * 
 * ---
 * 
 * Sprite Removal and Destroy Crash
 * 
 * A texture check will now occur for sprites that are being removed and
 * destroyed in order to prevent crashes. In the off chance that someone
 * creates a sprite through a script call and removes it through such, the
 * likelihood of this occurance becomes higher. This makes the "destroy"
 * property take into account a texture check in order to see if the sprite
 * removal is taking extra steps and will reduce those extra steps.
 * 
 * ---
 * 
 * Status Window Name Vertical Cutoffs
 * 
 * In the battle status windows, whenever actor names are displayed, the bitmap
 * used to display their name text do not extend vertically all the way,
 * causing letters like lowercase "Q" and "G" to be cut off, making them hard
 * to distinguish from one another. The Core Engine will remedy this by
 * extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * ---
 * 
 * Termination Clear Effects
 * 
 * In RPG Maker MZ, requesting an animation while transitioning between
 * scenes, such as going from the map scene to the battle scene, can cause
 * crashes. This is because the animation queue does not take off immediately
 * and will likely register incorrect targets for the scene. This plugin will
 * forcefully clear any registered animations and balloon effects when
 * terminating a scene in order to prevent crashes.
 * 
 * ---
 * 
 * Timer Sprite
 * 
 * By default, RPG Maker MZ adds Sprite_Timer into its spriteset, either for
 * maps or for battles. There is one major problem with this: when spritesets
 * are affected by filters, zooms, and/or blurs, this hinders how readable the
 * timer sprite is, making the information perceived by the player to be much
 * harder than it needs to be. The Core Engine adds the sprite to the parent
 * scene instead of the spriteset to ensure it's unobscured by anything else.
 * 
 * ---
 * 
 * Unusable Battle Items
 * 
 * If any party member is able to use an item in battle, then all party members
 * are able to use said item, even if that party member is supposed to be
 * unable to use that item. This is now changed so that battle items are
 * checked on an individual basis and not on a party-wide basis.
 * 
 * ---
 * 
 * Water Tile Bug
 * 
 * It seems like there's a new bug that occurs if you create a tileset from
 * scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 * does is it causes many tiles to become water tiles without intending to.
 * You can find this out by turning off all the plugins in your project,
 * putting a Ship or Boat on what are normally ground tiles, and then seeing
 * the Ship or Boat traverse through it.
 * 
 * There are two ways to fix this. We cannot fix it through code in this plugin
 * as it's a problem that involves the tileset json data there are ways to work
 * around it so that you can get the proper water-flags to go where they need
 * to be at.
 * 
 * 1. Copy a working un-bugged tileset onto the currently bugged one and
 *    reapply the tile features like passability, terrain tags, etc. This will
 *    make sure the water-passability tiles get copied over correctly.
 * 
 * 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *    un-bugged tileset (usually a pre-existing tileset when a new project is
 *    made), click the "Copy Page" button, go to the bugged tileset and press
 *    "Paste Page". You'll have to reapply any different properties like
 *    passabilities and terrain tags, but the water tile flags should now be
 *    working properly.
 * 
 * The plugin will not fix the problem itself since flag data is delicate and
 * should not be tampered with midgame as the changes made by the plugin might
 * not match the desired settings.
 * 
 * This plugin, however, will also send out an alert message when coming across
 * such a tile. Pay attention to it and do one of the following two steps above
 * to fix the problem.
 * 
 * ---
 * 
 * Window Arrows Sprite Tearing
 * 
 * If a window object in RPG Maker MZ were to have an odd number for width size
 * then the arrow elements found for the window would be positioned on a half
 * pixel, giving it a blurry look and also have sprite tearing issues. This is
 * now fixed by rounding the number to the nearest whole number.
 * 
 * ---
 * 
 * Window Client Area Scaling Bug
 * 
 * If the window has a scale value different from 1.0, the client area (the
 * interactable parts) will not scale properly and appear clipped out. This
 * is now fixed by adjusting the client area to the window's scale values and
 * rounding upward to the nearest whole number.
 * 
 * ---
 * 
 * Window Skin Bleeding
 * 
 * This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 * been set from 96 to 95. This results in the window skin bleeding past the
 * window's intended borders. The Core Engine now reverts this change to
 * prevent the bleeding effect from happening.
 * 
 * ---
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Scroll-Linked Pictures
 *
 * - If a Parallax has a ! at the start of its filename, it is bound to the map
 * scrolling. The same thing now happens with pictures. If a Picture has a ! at
 * the start of its filename, it is bound to the map's scrolling as well.
 *
 * ---
 *
 * Movement Route Scripts
 *
 * - If code in a Movement Route Script command fails, instead of crashing the
 * game, it will now act as if nothing happened except to display the cause of
 * the error inside the console.
 *
 * ---
 * 
 * Script Call Failsafes
 * 
 * - If code found in Conditional Branches, Control Variables, and/or Script
 * Calls fail to activate, instead of crashing the game, it will now act as if
 * nothing happened except to display the cause of the error inside the
 * console.
 * 
 * ---
 * 
 * Digit Grouping
 * 
 * - There exists an option to change how numbers are displayed and converted
 * in your game. This option can be enabled or disabled by going into the
 * Plugin Manager > VisuMZ_0_OptionsCore > Quality of Life Settings >
 * Digit Grouping and toggling on/off whichever ones you want.
 * 
 * - Digit Grouping will follow the rules of whatever country/locale the Plugin
 * Parameters are set to. If it's to default 'en-US', then 1234567.123456 will
 * become 1,234,567.123456. Set it to 'es-ES' and it becomes 1.234.567,123456
 * instead.
 * 
 * - This uses JavaScript's Number.toLocaleString() function and will therefore
 * follow whatever rules it has. This means if there are trailing zeroes at the
 * end of a decimal, it will cut them off. Numbers like 123.45000 will become
 * 123.45 instead. Excess numbers past 6 decimal places will be rounded. A
 * number like 0.123456789 will become 0.123457 instead.
 * 
 * - Numbers in between [ and ], < and > will be excluded from digit grouping
 * in order for text codes to be preserved accurately. \I[1234] will remain as
 * \I[1234].
 * 
 * - If you would like to enter in a number without digit grouping, surround it
 * with {{ and }}. Typing in {{1234567890}} will yield 1234567890.
 * 
 * ---
 * 
 * Show Scrolling Text, additional functionality
 * 
 * The event command "Show Scrolling Text" now has additional functionality as
 * long as the VisuStella MZ Core Engine is installed. If the game dev inserts
 * "// Script Call" (without the quotes) inside the scrolling text, then the
 * entirity of the Show Scrolling Text event command will be ran as a giant
 * script call event command.
 * 
 * The reason why this functionality is added is because the "Script..." event
 * command contains only 12 lines maximum. This means for any script call
 * larger than 12 lines of code cannot be done by normal means as each script
 * call is ran as a separate instance.
 * 
 * By repurposing the "Show Scrolling Text" event command to be able to
 * function as an extended "Script..." event command, such a thing is now
 * possible with less hassle and more lines to code with.
 * 
 * This effect does not occur if the Show Scrolling Text event command does not
 * have "// Script Call" in its contents.
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
 * === Actors-Related Notetags ===
 *
 * Parameter limits can be adjusted in the Plugin Parameters, but this won't
 * lift the ability to change the values of an actor's initial or max level
 * past the editor's limits. Instead, this must be done through the usage of
 * notetags to accomplish the feat.
 *
 * ---
 *
 * <Max Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's max level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * <Initial Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's initial level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * === Classes-Related Notetags ===
 *
 * As actor levels can now surpass 99 due to the notetag system, there may be
 * some skills you wish certain classes can learn upon reaching higher levels
 * past 99, too.
 *
 * ---
 * 
 * <Learn At Level: x>
 *
 * - Used for: Class Skill Learn Notetags
 * - Replace 'x' with an integer to determine the level this class will learn
 *   the associated skill at.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the class's database value.
 *
 * ---
 *
 * === Enemies-Related Notetags ===
 *
 * Enemies are now given levels. The levels don't do anything except to serve
 * as a container for a number value. This way, levels can be used in damage
 * formulas (ie. a.atk - b.level) without causing any errors. To give enemies
 * levels, use the notetags below. These notetags also allow you to adjust the
 * base parameters, EXP, and Gold past the database limitations.
 *
 * ---
 *
 * <Level: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's level.
 * - If no level is declared, the level will default to 1.
 *
 * ---
 *
 * <param: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to alter.
 *   - This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * - Replace 'x' with an integer to set an enemy's 'param' base value.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 *
 * <EXP: x>
 * <Gold: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's EXP or Gold values.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 * 
 * === Animations-Related Notetags ===
 * 
 * Animations in RPG Maker MZ are done by Effekseer and the animation system
 * has been revamped. However, the animations are only centered on the targets
 * now, and cannot be attached to the head or foot. Insert these tags into
 * the names of the animations in the database to adjust their positions.
 * 
 * ---
 * 
 * <Head>
 * <Foot>
 * 
 * - Used for: Animation Name Tags
 * - Will set the animation to anchor on top of the sprite (if <Head> is used)
 *   or at the bottom of the sprite (if <Foot> is used).
 * 
 * ---
 * 
 * <Anchor X: x>
 * <Anchor Y: y>
 * 
 * <Anchor: x, y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation at a specific point within the sprite based on
 *   the 'x' and 'y' values.
 * - Replace 'x' and 'y' with numeric values representing their positions based
 *   on a rate where 0.0 is the furthest left/up (x, y respectively) to 1.0 for
 *   the furthest right/down (x, y respectively).
 * 
 * Examples:
 * 
 * <Anchor X: 0.4>
 * <Anchor Y: 0.8>
 * 
 * <Anchor: 0.2, 0.9>
 * 
 * ---
 * 
 * <Offset X: +x>
 * <Offset X: -x>
 * <Offset Y: +y>
 * <Offset Y: -y>
 * 
 * <Offset: +x, +y>
 * <Offset: -x, -y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation to be offset by an exact number of pixels.
 * - This does the same the editor does, except it lets you input values
 *   greater than 999 and lower than -999.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the animation's x and y coordinates by.
 * 
 * Examples:
 * 
 * <Offset X: +20>
 * <Offset Y: -50>
 * 
 * <Offset: +10, -30>
 * 
 * ---
 * 
 * <Mirror Offset X>
 * <No Mirror Offset X>
 * 
 * - Used for: Animation Name Tags
 * - If an animation is mirrored, you can choose to have the animation's Offset
 *   X value be mirrored, too (or not at all).
 * - If no name tag is discovered, this will use the setting found in the
 *   Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset X setting.
 * 
 * ---
 * 
 * <Rate: x>
 * 
 * - Used for: MV Animation Name Tags
 * - Allows you to adjust the update for this MV Animation.
 *   - Does NOT work with Effekseer animations.
 * - The lower the number, the faster.
 * - Replace 'x' with a number representing the animation update rate.
 *   - Default rate: 4.
 *   - Minimum rate: 1.
 *   - Maximum rate: 10.
 * 
 * ---
 *
 * === Quality of Life-Related Notetags ===
 *
 * By default, RPG Maker MZ does not offer an encounter step minimum after a
 * random encounter has finished. This means that one step immediately after
 * finishing a battle, the player can immediately enter another battle. The
 * Quality of Life improvement: Minimum Encounter Steps allows you to set a
 * buffer range between battles for the player to have some breathing room.
 *
 * ---
 *
 * <Minimum Encounter Steps: x>
 *
 * - Used for: Map Notetags
 * - Replace 'x' with the minimum number of steps before the player enters a
 *   random encounter on that map.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => Encounter Rate Min.
 *
 * ---
 *
 * Tile shadows are automatically added to certain tiles in the map editor.
 * These tile shadows may or may not fit some types of maps. You can turn them
 * on/off with the Quality of Life Plugin Parameters or you can override the
 * settings with the following notetags:
 *
 * ---
 *
 * <Show Tile Shadows>
 * <Hide Tile Shadows>
 *
 * - Used for: Map Notetags
 * - Use the respective notetag for the function you wish to achieve.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => No Tile Shadows.
 *
 * ---
 * 
 * <Scroll Lock X>
 * <Scroll Lock Y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - This will use the display nudge setting found in the Plugin Parameters.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 * 
 * <Scroll Lock X: x>
 * <Scroll Lock Y: y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present and will nudge the map camera slightly.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - Replace 'x' and 'y' with numbers between 0 and 1 to represent how much is
 *   being judged.
 *   - For example, for a 1280x720 resolution, a 27 tile wide map will benefit
 *     from a nudge of 0.15625. Play with these numbers to determine the best
 *     value for your maps.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 *
 * === Basic, X, and S Parameters-Related Notetags ===
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * behaviors and give boosts to trait objects in a more controlled manner.
 *
 * ---
 *
 * <param Plus: +x>
 * <param Plus: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Rate: x%>
 * <param Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'param' value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Flat: +x>
 * <param Flat: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Max: x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Sets max caps for the 'param' to be 'x'. If there are multiple max caps
 *   available to the unit, then the highest will be selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer to determine what the max cap should be.
 * - This does NOT set the max cap to be lower than the default cap.
 *
 * ---
 *
 * <xparam Plus: +x%>
 * <xparam Plus: -x%>
 *
 * <xparam Plus: +x.x>
 * <xparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Rate: x%>
 * <xparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'xparam' value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Flat: +x%>
 * <xparam Flat: -x%>
 *
 * <xparam Flat: +x.x>
 * <xparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <sparam Plus: +x%>
 * <sparam Plus: -x%>
 *
 * <sparam Plus: +x.x>
 * <sparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Rate: x%>
 * <sparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'sparam' value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Flat: +x%>
 * <sparam Flat: -x%>
 *
 * <sparam Flat: +x.x>
 * <sparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 * 
 * ---
 * 
 * === Tileset-Related Notetags ===
 * 
 * ---
 * 
 * <Taller By x: id>
 * 
 * - Used for: Tileset Notetags
 * - Changes any page B, C, D, E tile marked by terrain tag 'id' to be taller
 *   by 'x' tiles.
 *   - Replace 'x' with a number representing the tiles to be taller by.
 *   - Replace 'id' with a number representing the Terrain Tag you will use to
 *     mark this tile with in the Database editor.
 * - When placing these tiles on the map, all you have to do is just place the
 *   bottom tile.
 *   - ie.: For a tree that's one tile taller, just place the tile at the
 *     bottom where you see the trunk).
 *   - Then, in-game, the tree will appear taller by one tile as marked.
 * - Depending on the priority settings, the tile will appear on different
 *   layers.
 *   - O will place the tile on the below player layer.
 *   - X will place the tile on the same level as the player.
 *   - ★ will place the tile on the above player layer.
 *   - O/X layer tiles have a special property where tall sprites standing in
 *     front of it will no longer clip the top of the sprite, while sprites
 *     standing behind it will be covered by it.
 *   - The X layer sprite will only have a hitbox of 1x1 at the base.
 * - This does not work with events using tiles as graphics. Instead, if you
 *   want to do similar, use the Event & Movement Core's <Tile Expand> notetags
 *   for better control.
 * 
 * ---
 *
 * === JavaScript Notetags: Basic, X, and S Parameters ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Basic, X, and S Parameters.
 *
 * ---
 *
 * <JS param Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' plus value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' rate value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' flat value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Max: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to determine what the max cap for 'param' should be. If there
 *   are multiple max caps available to the unit, then the highest is selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine the max cap for the
 *   desired parameter.
 *
 * ---
 *
 * <JS xparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' plus value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the X parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' rate value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the X parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Flat: code>
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' flat value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the X parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' plus value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the S parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' rate value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the S parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' flat value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the S parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 * 
 * === Battle Setting-Related Notetags ===
 * 
 * These tags will change the settings for battle regardless of how the battle
 * system is set up normally. Insert these tags in either the noteboxes of maps
 * or the names of troops for them to take effect. If both are present for a
 * specific battle, then priority goes to the setting found in the troop name.
 * 
 * ---
 * 
 * <FV>
 * <Front View>
 * <Battle View: FV>
 * <Battle View: Front View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to front view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/enemies/
 *   folder as they will used instead of the "sv_enemies" graphics.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <SV>
 * <Side View>
 * <Battle View: SV>
 * <Battle View: Side View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to side view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/sv_enemies/
 *   folder as they will used instead of the "enemies" graphics.
 * - Make sure your actors have "sv_actor" graphics attached to them.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <DTB>
 * <Battle System: DTB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the default battle system (DTB).
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <TPB Active>
 * <ATB Active>
 * <Battle System: TPB Active>
 * <Battle System: ATB Active>
 * 
 * <TPB Wait>
 * <ATB Wait>
 * <Battle System: TPB Wait>
 * <Battle System: ATB Wait>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the time progress battle system (TPB) or
 *   active turn battle system (ATB) if you have VisuMZ_2_BattleSystemATB
 *   installed for the game project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <BTB>
 * <Battle System: BTB>
 * 
 * <CTB>
 * <Battle System: CTB>
 * 
 * <ETB>
 * <Battle System: ETB>
 * 
 * <FTB>
 * <Battle System: FTB>
 * 
 * <OTB>
 * <Battle System: OTB>
 * 
 * <PTB>
 * <Battle System: PTB>
 * 
 * <STB>
 * <Battle System: STB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the respective battle system as long as you
 *   have those plugins installed in the current project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <Grid>
 * <Battle Grid>
 * 
 * <No Grid>
 * <No Battle Grid>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Requires VisuMZ_2_BattleGridSystem!
 * - Changes the battle system to utilize the Battle Grid System or not.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * - If none of these notetags or comment tags are found, refer to the default
 *   settings found in the Plugin Parameters.
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
 * === Animation Commands ===
 * 
 * ---
 * 
 * Animation: Play at Coordinate
 * - Plays an animation on the screen at a specific x, y coordinate even if
 *   there is no sprite attached.
 * 
 *   Animation ID:
 *   - Plays this animation.
 * 
 *   Coordinates:
 * 
 *     X:
 *     Y:
 *     - X/Y coordinate used for the animation.
 *       You may use JavaScript code.
 * 
 *   Mirror Animation?:
 *   - Mirror the animation?
 * 
 *   Mute Animation?:
 *   - Mute the animation?
 * 
 * ---
 * 
 * === Audio Plugin Commands ===
 * 
 * ---
 * 
 * Audio: Change Current BGM Volume
 * - Changes the current BGM volume without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Volume:
 *   - Change the current BGM's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pitch
 * - Changes the current BGM pitch without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pitch:
 *   - Change the current BGM's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pan
 * - Changes the current BGM pan without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pan:
 *   - Change the current BGM's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Volume
 * - Changes the current BGM volume without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Volume:
 *   - Change the current BGM's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pitch
 * - Changes the current BGM pitch without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pitch:
 *   - Change the current BGM's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pan
 * - Changes the current BGM pan without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pan:
 *   - Change the current BGM's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * === Debug Plugin Commands ===
 * 
 * ---
 * 
 * Debug: Current Controller ID
 * - PLAY TEST ONLY.
 * - Shows current controller ID in debug console.
 * - If you press a key on the keyboard, this data will be erased.
 * - Also copies to computer clipboard if possible.
 * 
 * ---
 * 
 * === Export Plugin Commands ===
 * 
 * ---
 * 
 * Export: All Maps Text
 * - PLAY TEST ONLY. Exports all of the text from all maps,
 *   their events, event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: All Troops Text
 * - PLAY TEST ONLY. Exports all of the text from all troops,
 *   their event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: Current Map Text
 * - PLAY TEST ONLY. Exports all of the text on the current map,
 *   its events, the event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * Export: Current Troop Text
 * - PLAY TEST ONLY. Exports all of the text on the current troop,
 *   the troop's event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * === Game Plugin Commands ===
 * 
 * ---
 *
 * Game: Open URL
 * - Opens a website URL from the game.
 *
 *   URL:
 *   - Where do you want to take the player?
 *
 * ---
 * 
 * === Gold Plugin Commands ===
 * 
 * ---
 *
 * Gold: Gain/Lose
 * - Allows you to give/take more gold than the event editor limit.
 *
 *   Value:
 *   - How much gold should the player gain/lose?
 *   - Use negative values to remove gold.
 *
 * ---
 * 
 * === Map Plugin Commands ===
 * 
 * ---
 * 
 * Map: Once Parallel
 * - Plays a Common Event parallel to the event once without repeating itself
 *   when done.
 * - Map only!
 * 
 *   Common Event ID:
 *   - The ID of the parallel Common Event to play.
 *   - Does NOT repeat itself when finished.
 *   - When exiting map scene or changing maps, all Once Parallels are cleared.
 *   - Once Parallels are not retained upon reentering the scene or map.
 *   - Once Parallels are not stored in memory and cannot be saved.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Coordinates Mode
 * - Play Test Mode only! Gets the coordinates of a specific picture as you
 *   move it across the screen.
 * 
 *   Picture ID: 
 *   - The ID of the pictures to track the coordinates of.
 * 
 * ---
 *
 * Picture: Easing Type
 * - Changes the easing type to a number of options.
 *
 *   Picture ID:
 *   - Which picture do you wish to apply this easing to?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 *   Instructions:
 *   - Insert this Plugin Command after a "Move Picture" event command.
 *   - Turn off "Wait for Completion" in the "Move Picture" event.
 *   - You may have to add in your own "Wait" event command after.
 *
 * ---
 * 
 * Picture: Erase All
 * - Erases all pictures on the screen because it's extremely tedious to do it
 *   one by one.
 * 
 * ---
 * 
 * Picture: Erase Range
 * - Erases all pictures within a range of numbers because it's extremely
 *   tedious to do it one by one.
 * 
 *   Starting ID:
 *   - The starting ID of the pictures to erase.
 * 
 *   Ending ID:
 *   - The ending ID of the pictures to erase.
 * 
 * ---
 * 
 * Picture: Rotate by Angle
 * - Rotates target picture by a amount angle over a set duration instead of
 *   continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Adjust Angle:
 *   - What is the angle you wish to rotate the picture by?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * Picture: Rotate to Angle
 * - Rotates target picture to a certain angle over a set duration
 *   instead of continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Target Angle:
 *   - What is the target angle you wish to rotate the picture?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * Picture: Show Icon
 * - Shows an icon instead of a picture image.
 * - The picture icon can be controlled like any other picture.
 * 
 *   General:
 *
 *     Picture ID Number:
 *     - What is the ID of the picture you wish to show at?
 *     - Use a number between 1 and 100.
 *     - You may use JavaScript code.
 *
 *     Icon Index:
 *     - Select the icon index to use for this picture.
 *     - You may use JavaScript code.
 *
 *     Smooth Icon?:
 *     - This will make the icon smoothed out or pixelated.
 * 
 *   Picture Settings:
 * 
 *     Position:
 *
 *       Origin:
 *       - What is the origin of this picture icon?
 *         - Upper Left
 *         - Center
 *
 *       Position X:
 *       - X coordinate of the picture.
 *       - You may use JavaScript code.
 *
 *       Position Y:
 *       - Y coordinate of the picture.
 *       - You may use JavaScript code.
 * 
 *     Scale:
 *
 *       Width %:
 *       - Horizontal scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 *
 *       Height %:
 *       - Vertical scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 * 
 *     Blend:
 *
 *       Opacity:
 *       - Insert a number to determine opacity level.
 *       - Use a number between 0 and 255.
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the picture?
 * 
 * ---
 * 
 * === Screen Shake Plugin Commands ===
 * 
 * ---
 * 
 * Screen Shake: Custom:
 * - Creates a custom screen shake effect and also sets the following uses of
 *   screen shake to this style.
 * 
 *   Shake Style:
 *   - Select shake style type.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   Power:
 *   - Power level for screen shake.
 * 
 *   Speed:
 *   - Speed level for screen shake.
 * 
 *   Duration:
 *   - Duration of screenshake.
 *   - You can use code as well.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * === Switch Plugin Commands ===
 * 
 * ---
 * 
 * Switches: Randomize ID(s)
 * - Select specific Switch ID's to randomize ON/OFF.
 * 
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 * 
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 * 
 * ---
 *
 * Switches: Randomize Range
 * - Select specific Switch ID Range to randomize ON/OFF.
 * - The ratio determines the ON/OFF distribution.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 *
 * ---
 *
 * Switches: Toggle ID(s)
 * - Select specific Switch ID's to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 *
 * ---
 *
 * Switches: Toggle Range
 * - Select specific Switch ID Range to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Battle System Change
 * - Switch to a different battle system in-game.
 * - Some battle systems REQUIRE their specific plugins!
 *
 *   Change To:
 *   - Choose which battle system to switch to.
 *     - Database Default (Use game database setting)
 *     - -
 *     - DTB: Default Turn Battle
 *     - TPB Active: Time Progress Battle (Active)
 *     - TPB Wait: Time Progress Battle (Wait)
 *     - -
 *     - BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *     - CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *     - OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *     - STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 *
 * ---
 * 
 * System: Load Images
 * - Allows you to (pre) load up images ahead of time.
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory?
 * 
 * ---
 *
 * System: Main Font Size
 * - Set the game's main font size.
 *
 *   Change To:
 *   - Change the font size to this number.
 *
 * ---
 *
 * System: Side View Battle
 * - Switch between Front View or Side View for battle.
 *
 *   Change To:
 *   - Choose which view type to switch to.
 *
 * ---
 *
 * System: Window Padding
 * - Change the game's window padding amount.
 *
 *   Change To:
 *   - Change the game's standard window padding to this value.
 *
 * ---
 * 
 * === Text Popup Command ===
 * 
 * ---
 * 
 * Text Popup: Show Text
 * - Adds text to a text popup window to briefly appear.
 * - Multiple text popups will be queued.
 * - Does not halt the game and works parallel to game activity.
 * 
 *   Text:
 *   - Write the text that you want to appear here.
 *   - You may use text codes.
 * 
 * ---
 * 
 * === Variable Plugin Commands ===
 * 
 * ---
 * 
 * Variable: JS Eval
 * - Pick a variable ID and value to alter through JS.
 * - Allows one line of code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 * 
 * Variable: JS Block
 * - Pick a variable ID and value to alter through JS.
 * - Allows JS block code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Quality of Life Settings
 * ============================================================================
 *
 * A variety of (optional) settings and changes are added with the Core Engine
 * to improve the quality of life for both the game devs and players alike.
 *
 * ---
 *
 * Play Test
 * 
 *   New Game on Boot:
 *   - Automatically start a new game on Play Test?
 *   - Only enabled during Play Test.
 *
 *   No Play Test Mode:
 *   - Force the game to be out of Play Test mode when play testing.
 * 
 *   Open Console on Boot:
 *   - Open the Debug Console upon booting up your game?
 *   - Only enabled during Play Test.
 *
 *   F6: Toggle Sound:
 *   - F6 Key Function: Turn on all sound to 100% or to 0%, toggling between
 *     the two.
 *   - Only enabled during Play Test.
 *
 *   F7: Toggle Fast Mode:
 *   - F7 Key Function: Toggle fast mode.
 *   - Only enabled during Play Test.
 * 
 *   CTRL + n: Quick Load:
 *   - CTRL + a number from 1 to 9 will yield a quick load of that safe file.
 *   - Does not count auto saves.
 *
 *   New Game > Common Event:
 *   - Runs a common event each time a new game is started.
 *   - Only enabled during Play Test.
 *
 * ---
 * 
 * Battle Test
 * 
 *   Add Item Type:
 *   Add Weapon Type:
 *   Add Armor Type:
 *   - Add copies of each database item, weapon, and/or armor?
 *   - Effective only during battle test.
 * 
 *   Added Quantity:
 *   - Determines how many items are added during a battle test instead of
 *     the maximum amount.
 * 
 *   Shift+R: Recover All:
 *   - For Play Test only!
 *   - During battle, pressing SHIFT + R will refill the whole party's HP
 *     and MP and status.
 * 
 *   Shift+T: Full TP
 *   - For Play Test only! 
 *   - During battle, pressing SHIFT + T will refill the whole party's TP.
 * 
 * ---
 *
 * Digit Grouping
 *
 *   Standard Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for standard text
 *     inside windows?
 *
 *   Ex Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for ex text,
 *     written through drawTextEx (like messages)?
 *
 *   Damage Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for in-battle
 *     damage sprites?
 *
 *   Gauge Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for visible gauge
 *     sprites such as HP, MP, and TP gauges?
 * 
 *   Country/Locale
 *   - Base the digit grouping on which country/locale?
 *   - This will follow all of the digit grouping rules found here:
 *     https://www.w3schools.com/JSREF/jsref_tolocalestring_number.asp
 *
 * ---
 *
 * Player Benefit
 *
 *   Encounter Rate Min:
 *   - Minimum number of steps the player can take without any
 *     random encounters.
 *
 *   Escape Always:
 *   - If the player wants to escape a battle, let them escape the battle
 *     with 100% chance.
 *
 *   Accuracy Formula:
 *   - Accuracy formula calculation change to
 *     Skill Hit% * (User HIT - Target EVA) for better results.
 *
 *   Accuracy Boost:
 *   - Boost HIT and EVA rates in favor of the player.
 *
 *   Level Up -> Full HP:
 *   Level Up -> Full MP:
 *   - Recovers full HP or MP when an actor levels up.
 *
 * ---
 * 
 * Picture-Related
 * 
 *   Anti-Zoom Pictures:
 *   - If on, prevents pictures from being affected by zoom.
 * 
 *   Picture Containers > Detach in Battle:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the battle scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 *   Picture Containers > Detach in Map:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the map scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 * ---
 *
 * Misc
 * 
 *   Animation: Mirror Offset X:
 *   - When animations are mirrored, mirror their Offset X values, too.
 *   - The animation name tags <Mirror Offset X> and <No Mirror Offset X> will
 *     override this effect for that specific animation.
 *
 *   Font Shadows:
 *   - If on, text uses shadows instead of outlines.
 *
 *   Font Smoothing:
 *   - If on, smoothes fonts shown in-game.
 * 
 *   Font Width Fix:
 *   - Fixes the font width issue with instant display non-monospaced fonts
 *     in the Message Window.
 *
 *   Key Item Protection:
 *   - If on, prevents Key Items from being able to be sold and from being
 *     able to be consumed.
 * 
 *   Map Name Text Code:
 *   - If on, map names will use text codes.
 *   - If off, only the raw map name will be used.
 *
 *   Modern Controls:
 *   - If on, allows usage of the Home/End buttons.
 *   - Home would scroll to the first item on a list.
 *   - End would scroll to the last item on a list.
 *   - Shift + Up would page up.
 *   - Shift + Down would page down.
 *
 *   MV Animation Rate:
 *   - Adjusts the rate at which MV animations play.
 *   - Default: 4.
 *   - Lower for faster.
 *   - Higher for slower.
 * 
 *   NewGame > CommonEvent:
 *   - Runs a common event each time a new game during any session is started.
 *   - Applies to all types of sessions, play test or not.
 *
 *   No Tile Shadows:
 *   - Removes tile shadows from being displayed in-game.
 *
 *   Pixel Image Rendering:
 *   - If on, pixelates the image rendering (for pixel games).
 *
 *   Require Focus?
 *   - Requires the game to be focused? If the game isn't focused, it will
 *     pause if it's not the active window.
 * 
 *   Shortcut Scripts:
 *   - Enables shortcut-based script variables and functions that can be used
 *     for script calls.
 *   - Shortcut list enabled for this is as follows:
 * 
 *     $commonEvent(id)
 *     - Queues a common event.
 *     - This does not interrupt the current event to run the desired common
 *       event. Any queued common events will run after the current event list
 *       has finished.
 *     - Replace 'id' with the ID of the common event you wish to queue.
 *     - Common events only run in the map scene and battle scene.
 * 
 *     $onceParallel(id)
 *     - Runs a common event in the background as a once parallel event.
 *     - Once parallel events will run in the background like a parallel
 *       process, except that it does not repeat after finishing.
 *     - Replace 'id' with the ID of the common event you wish to run.
 *     - Only works in the map scene and battle scene. Battle scene usage will
 *       require VisuMZ_1_BattleCore.
 * 
 *     $scene
 *     - Returns current scene.
 * 
 *     $spriteset
 *     - Returns current scene's spriteset if there is one.
 * 
 *     $subject
 *     - Returns last recorded identity of the battle's subject/user.
 * 
 *     $targets
 *     - Returns last recorded targets marked in battle.
 * 
 *     $target
 *     - Returns last recorded target marked in battle.
 *     - Works better with VisuMZ_1_BattleCore.
 * 
 *     $event
 *     - Returns currently initiated map event.
 *
 *   Smart Event Collision:
 *   - Makes events only able to collide with one another if they're
 *    'Same as characters' priority.
 * 
 *   Subfolder Name Purge:
 *   - Purge subfolder name from Plugin Parameters when reading data to let
 *     Plugin Commands work properly.
 *   - This is for plugins (such as the VisuMZ library) that utilize dynamic
 *     name registrations for Plugin Commands. Turn this on if you plan on
 *     using subfolders with VisuMZ plugins.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle System
 * ============================================================================
 * 
 * Choose which battle system to use for your game.
 * 
 * Some battle systems REQUIRE their specific plugins! This means if you do not
 * have the required battle system plugin installed, it will not change over.
 * The Core Engine plugin does not contain data for all of the battle systems
 * inside its code.
 * 
 * ---
 * 
 *   Database Default (Use game database setting)
 * 
 *   -
 * 
 *   DTB: Default Turn Battle
 *   TPB Active: Time Progress Battle (Active)
 *   TPB Wait: Time Progress Battle (Wait)
 * 
 *   -
 * 
 *   BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *   CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *   ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 *   FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 *   OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *   PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 *   STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * 
 *   -
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Color Settings
 * ============================================================================
 *
 * These settings allow you, the game dev, to have more control over which
 * colors appear for what conditions found in the game. You can use regular
 * numbers to use the colors predetermined by the game's Window Skin or you
 * can use the #rrggbb format for a hex color code.
 * 
 * If the game's Window Skin is changed mid-game, the colors used will still be
 * based off the default Window Skin's colors. This is due to storing them in a
 * cache and preventing extra processing and reduces lag.
 *
 * You can find out what hex codes belong to which color from this website:
 * https://htmlcolorcodes.com/
 *
 * ---
 *
 * Basic Colors
 * - These are colors that almost never change and are used globally throughout
 *   the in-game engine.
 *
 *   Normal:
 *   System:
 *   Crisis:
 *   Death:
 *   Gauge Back:
 *   HP Gauge:
 *   MP Gauge:
 *   MP Cost:
 *   Power Up:
 *   Power Down:
 *   CT Gauge:
 *   TP Gauge:
 *   Pending Color:
 *   EXP Gauge:
 *   MaxLv Gauge:
 *   - Use #rrggbb for custom colors or regular numbers
 *   for text colors from the Window Skin.
 *
 * ---
 *
 * Alpha Colors:
 * - These are colors that have a bit of transparency to them and are specified
 *   by the 'rgba(red, green, blue, alpha)' format.
 * - Replace 'red' with a number between 0-255 (integer).
 * - Replace 'green' with a number between 0-255 (integer).
 * - Replace 'blue' with a number between 0-255 (integer).
 * - Replace 'alpha' with a number between 0 and 1 (decimal).
 * 
 *   Window Font Outline:
 *   Gauge Number Outline:
 *   Dim Color:
 *   Item Back Color:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Conditional Colors:
 * - These require a bit of JavaScript knowledge. These determine what colors
 *   to use under which situations and uses such as different values of HP, MP,
 *   TP, for comparing equipment, and determine damage popup colors.
 * 
 *   JS: Actor HP Color:
 *   JS: Actor MP Color:
 *   JS: Actor TP Color:
 *   - Code used for determining what HP, MP, or TP color to use for actors.
 *
 *   JS: Parameter Change:
 *   - Code used for determining whatcolor to use for parameter changes.
 *
 *   JS: Damage Colors:
 *   - Code used for determining what color to use for damage types.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gold Settings
 * ============================================================================
 *
 * Gold is the main currency in RPG Maker MZ. The settings provided here will
 * determine how Gold appears in the game and certain behaviors Gold has.
 *
 * ---
 *
 * Gold Settings
 *
 *   Gold Max:
 *   - Maximum amount of Gold the party can hold.
 *   - Default 99999999
 *
 *   Gold Font Size:
 *   - Font size used for displaying Gold inside Gold Windows.
 *   - Default: 26
 *
 *   Gold Icon:
 *   - Icon used to represent Gold.
 *   - Use 0 for no icon.
 *
 *   Gold Overlap:
 *   - Text used too much Gold to fit in the window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Image Loading
 * ============================================================================
 *
 * Not all images are loaded at once in-game. RPG Maker MZ uses asynchronous
 * loading which means images are loaded when needed. This may cause delays in
 * when you want certain images to appear. However, if an image is loaded
 * beforehand, they can be used immediately provided they aren't removed from
 * the image cache.
 *
 * ---
 *
 * Image Loading
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory upon starting
 *     up the game?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Keyboard Input Settings
 * ============================================================================
 *
 * Settings for the game that utilize keyboard input. These are primarily for
 * the name input scene (Scene_Name) and the number input event command. These
 * settings have only been tested on English keyboards and may or may not be
 * compatible with other languages, so please disable these features if they do
 * not fit in with your game.
 * 
 * If a controller is connected upon entering the name change scene, it will
 * use the default manual-entry mode instead of the keyboard-entry mode. If a
 * controller button is pressed during the keyboard-entry mode, it will
 * automatically switch to the manual-entry mode.
 * 
 * This plugin does not provide support for controllers that are undetected by
 * RPG Maker MZ's default controller support.
 *
 * ---
 * 
 * Controls
 * 
 *   WASD Movement:
 *   - Enables or disables WASD movement for your game project.
 *   - Moves the W page down button to E.
 * 
 *   R Button: Dash Toggle:
 *   - Enables or disables R button as an Always Dash option toggle.
 * 
 * ---
 *
 * Name Input
 * 
 *   Enable?:
 *   - Enables keyboard input for name entry.
 *   - Only tested with English keyboards.
 * 
 *   Default Mode:
 *   - Select default mode when entering the scene.
 *     - Default - Uses Arrow Keys to select letters.
 *     - Keyboard - Uses Keyboard to type in letters.
 * 
 *   QWERTY Layout:
 *   - Uses the QWERTY layout for manual entry.
 * 
 *   Keyboard Message:
 *   - The message displayed when allowing keyboard entry.
 *   - You may use text codes here.
 * 
 *   Banned Words:
 *   - Players cannot use these words for names.
 *   - These include words inside the names.
 *   - If a banned word is used, a buzzer sound will play.
 *
 * ---
 *
 * Number Input
 * 
 *   Enable?:
 *   - Enables keyboard input for number entry.
 *   - Only tested with English keyboards.
 *
 * ---
 * 
 * Button Assist
 * 
 *   Finish Entry:
 *   - Text used to describe finish entry.
 * 
 *   Page Change:
 *   - Text used to describe character page changing.
 * 
 *   Switch to Keyboard:
 *   - Text used to describe the keyboard switch.
 * 
 *   Switch To Manual:
 *   - Text used to describe the manual entry switch.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Background Settings
 * ============================================================================
 *
 * These settings in the Plugin Parameters allow you to adjust the background
 * images used for each of the scenes. The images will be taken from the game
 * project folders img/titles1/ and img/titles2/ to load into the game.
 *
 * These settings are only available to scenes found within the Main Menu, the
 * Shop scene, and the Actor Naming scene.
 *
 * ---
 *
 * Menu Background Settings:
 * 
 *   Blur Strength:
 *   - Strength used for menu background snapshots.
 *   - Default: 8. Higher is stronger. Lower is weaker.
 *
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Individual background settings for the scene.
 *
 *   Scene_Unlisted
 *   - Individual background settings for any scenes that aren't listed above.
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
 * Plugin Parameters: Menu Button Assist Window
 * ============================================================================
 *
 * In most modern RPG's, there exist small windows on the screen which tell the
 * player what the control schemes are for that scene. This plugin gives you
 * the option to add that window to the menu scenes in the form of a Button
 * Assist Window.
 *
 * ---
 *
 * General
 * 
 *   Enable:
 *   - Enable the Menu Button Assist Window.
 * 
 *   Location:
 *   - Determine the location of the Button Assist Window.
 *   - Requires Plugin Parameters => UI => Side Buttons ON.
 *
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Split "Escape":
 *   - Used ONLY for those making their own custom keyboard key input maps.
 *   - "Split" option makes separate instances of "Cancel" and "Menu" keys.
 *   - "Don't" option will consolidate both into "Escape" keys.
 *
 * ---
 *
 * Text
 * 
 *   Text Format:
 *   - Format on how the buttons are displayed.
 *   - Text codes allowed. %1 - Key, %2 - Text
 * 
 *   Multi-Key Format:
 *   - Format for actions with multiple keys.
 *   - Text codes allowed. %1 - Key 1, %2 - Key 2
 * 
 *   OK Text:
 *   Cancel Text:
 *   Switch Actor Text:
 *   - Default text used to display these various actions.
 *
 * ---
 *
 * Keys
 * 
 *   Key: Unlisted Format:
 *   - If a key is not listed below, use this format.
 *   - Text codes allowed. %1 - Key
 * 
 *   Key: Up:
 *   Key: Down:
 *   Key: Left:
 *   Key: Right:
 *   Key: Shift:
 *   Key: Tab:
 *   Key: A through Z:
 *   - How this key is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Controller Button Assist Settings
 * ============================================================================
 *
 * These are sub-settings for the Button Assist Window Plugin Parameters. Where
 * the Button Assist Window Plugin Parameters are focused on keyboard entries,
 * these sections are focused on gamepad controllers.
 * 
 * Add multiple gamepads to the list to give them different button assist text.
 * If a gamepad is being used but not listed here, the button assist text will
 * default to the keyboard version.
 * 
 * For those looking for more information regarding controllers, visit this
 * site: https://gamepad-tester.com/
 *
 * ---
 *
 * ID Information
 * 
 *   Controller ID Name:
 *   - Exact string used for this controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - Example: Xbox 360 Controller (XInput STANDARD GAMEPAD)
 * 
 *   Similarity Match:
 *   - Partial string used to check for controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - This check occurs secondary to the exact name.
 *   - Example: Xbox
 *
 * ---
 *
 * Directions
 * 
 *   Up:
 *   Left:
 *   Right:
 *   Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * Actions
 * 
 *   OK:
 *   Cancel:
 *   Menu:
 *   Shift:
 *   Page Up:
 *   Page Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *   - *NOTE*: Controllers use a different mapping scheme from keyboards.
 *     - The "cancel" button is separate from the "menu" button though, for the
 *       majority of the button assist window help text, we'll be referring to
 *       the cancel button usually.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Layout Settings
 * ============================================================================
 *
 * These settings allow you to rearrange the positions of the scenes accessible
 * from the Main Menu, the Shop scene, and the Actor Naming scene. This will
 * require you to have some JavaScript knowledge to make the windows work the
 * way you would like.
 *
 * ---
 *
 * Menu Layout Settings
 *
 *   Scene_Title:
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Various options on adjusting the selected scene.
 *
 * ---
 *
 * Scene Window Settings
 *
 *   Background Type:
 *   - Selects the background type for the selected window.
 *   - Window
 *   - Dim
 *   - Transparent
 *
 *   JS: X, Y, W, H
 *   - Code used to determine the dimensions for the selected window.
 *
 * ---
 *
 * Scene_Title Settings
 * - The following are settings unique to Scene_Title.
 *
 * Title Screen
 *
 *   Document Title Format:
 *   - Format to display text in document title.
 *   - %1 - Main Title, %2 - Subtitle, %3 - Version
 *
 *   Subtitle:
 *   - Subtitle to be displayed under the title name.
 *   
 *   Version:
 *   - Version to be display in the title screen corner.
 *   
 *   JS: Draw Title:
 *   - Code used to draw the game title.
 *   
 *   JS: Draw Subtitle:
 *   - Code used to draw the game subtitle.
 *   
 *   JS: Draw Version:
 *   - Code used to draw the game version.
 *   
 *   Button Fade Speed:
 *   - Speed at which the buttons fade in at (1-255).
 *
 * ---
 *
 * Scene_GameEnd Settings
 * - The following are settings unique to Scene_GameEnd.
 *   
 *   Command Window List:
 *   - Window commands used by the title screen.
 *   - Add new commands here.
 *
 * ---
 *
 * Command Window List
 * - This is found under Scene_Title and Scene_GameEnd settings.
 *
 *   Symbol:
 *   - The symbol used for this command.
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
 * ---
 *
 * Title Picture Buttons:
 * - This is found under Scene_Title settings.
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 *
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 *
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 *
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 *
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Parameter Settings
 * ============================================================================
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * their behaviors and give boosts to trait objects in a controlled manner.
 *
 * ---
 *
 * Parameter Settings
 *
 *   Displayed Parameters
 *   - A list of the parameters that will be displayed in-game.
 *   - Shown in the Equip Menu.
 *   - Shown in the Status Menu.
 *
 *   Extended Parameters
 *   - The list shown in extended scenes (for other VisuStella plugins).
 *
 * ---
 *
 * === Basic Parameters ===
 *
 * MHP - MaxHP
 * - This is the maximum health points value. The amount of health points (HP)
 * a battler has determines whether or not the battler is in a living state or
 * a dead state. If the HP value is above 0, then the battler is living. If it
 * is 0 or below, the battler is in a dead state unless the battler has a way
 * to counteract death (usually through immortality). When the battler takes
 * damage, it is usually dealt to the HP value and reduces it. If the battler
 * is healed, then the HP value is increased. The MaxHP value determines what's
 * the maximum amount the HP value can be held at, meaning the battler cannot
 * be healed past that point.
 *
 * MMP - MaxMP
 * - This is the maximum magic points value. Magic points (MP) are typically
 * used for the cost of skills and spells in battle. If the battler has enough
 * MP to fit the cost of the said skill, the battler is able to use the said
 * skill provided that all of the skill's other conditions are met. If not, the
 * battler is then unable to use the skill. Upon using a skill that costs MP,
 * the battler's MP is reduced. However, the battler's MP can be recovered and
 * results in a gain of MP. The MaxMP value determines what is the maximum
 * amount the MP value can be held at, meaning the battler cannot recover MP
 * past the MaxMP value.
 *
 * ATK - Attack
 * - This is the attack value of the battler. By default, this stat is used for
 * the purpose of damage calculations only, and is typically used to represent
 * the battler's physical attack power. Given normal damage formulas, higher
 * values mean higher damage output for physical attacks.
 *
 * DEF - Defense
 * - This is the defense value of the battler. By default, this stat is used
 * for the purpose of damage calculations only, and is typically used to
 * represent the battler's physical defense. Given normal damage formulas,
 * higher values mean less damage received from physical attacks.
 *
 * MAT - Magic Attack
 * - This is the magic attack value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical attack power. Given normal damage formulas,
 * higher values mean higher damage output for magical attacks.
 *
 * MDF - Magic Defense
 * - This is the magic defense value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical defense. Given normal damage formulas,
 * higher values mean less damage received from magical attacks.
 *
 * AGI - Agility
 * - This is the agility value of the battler. By default, this stat is used to
 * determine battler's position in the battle turn's order. Given a normal turn
 * calculation formula, the higher the value, the faster the battler is, and
 * the more likely the battler will have its turn earlier in a turn.
 *
 * LUK - Luck
 * - This is the luck value of the battler. By default, this stat is used to
 * affect the success rate of states, buffs, and debuffs applied by the battler
 * and received by the battler. If the user has a higher LUK value, the state,
 * buff, or debuff is more likely to succeed. If the target has a higher LUK
 * value, then the state, buff, or debuff is less likely to succeed.
 *
 * ---
 *
 * Basic Parameters
 * 
 *   Show Actor Level?:
 *   - Show the actor level when displaying actors?
 *   - Affects for most windows in-game.
 *
 *   HP Crisis Rate:
 *   - HP Ratio at which a battler can be considered in crisis mode.
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 8 basic parameters:
 *   - MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 *
 * Parameter Caps:
 *
 *   MaxHP Cap:
 *   MaxMP Cap:
 *   ATK Cap:
 *   DEF Cap:
 *   MAT Cap:
 *   MDF Cap:
 *   AGI Cap:
 *   LUK Cap:
 *   - Formula used to determine the selected parameter's cap.
 *   - These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 *
 * ---
 *
 * === X Parameters ===
 *
 * HIT - Hit Rate%
 * - This determines the physical hit success rate of the any physical action.
 * All physical attacks make a check through the HIT rate to see if the attack
 * will connect. If the HIT value passes the randomizer check, the attack will
 * connect. If the HIT value fails to pass the randomizer check, the attack
 * will be considered a MISS.
 *
 * EVA - Evasion Rate%
 * - This determines the physical evasion rate against any incoming physical
 * actions. If the HIT value passes, the action is then passed to the EVA check
 * through a randomizer check. If the randomizer check passes, the physical
 * attack is evaded and will fail to connect. If the randomizer check passes,
 * the attempt to evade the action will fail and the action connects.
 *
 * CRI - Critical Hit Rate%
 * - Any actions that enable Critical Hits will make a randomizer check with
 * this number. If the randomizer check passes, extra damage will be carried
 * out by the initiated action. If the randomizer check fails, no extra damage
 * will be added upon the action.
 *
 * CEV - Critical Evasion Rate%
 * - This value is put against the Critical Hit Rate% in a multiplicative rate.
 * If the Critical Hit Rate is 90% and the Critical Evasion Rate is
 * 20%, then the randomizer check will make a check against 72% as the values
 * are calculated by the source code as CRI * (1 - CEV), therefore, with values
 * as 0.90 * (1 - 0.20) === 0.72.
 *
 * MEV - Magic Evasion Rate%
 * - Where EVA is the evasion rate against physical actions, MEV is the evasion
 * rate against magical actions. As there is not magical version of HIT, the
 * MEV value will always be bit against when a magical action is initiated. If
 * the randomizer check passes for MEV, the magical action will not connect. If
 * the randomizer check fails for MEV, the magical action will connect.
 *
 * MRF - Magic Reflect Rate%
 * - If a magical action connects and passes, there is a chance the magical
 * action can be bounced back to the caster. That chance is the Magic Reflect
 * Rate. If the randomizer check for the Magic Reflect Rate passes, then the
 * magical action is bounced back to the caster, ignoring the caster's Magic
 * Evasion Rate. If the randomizer check for the Magic Reflect Rate fails, then
 * the magical action will connect with its target.
 *
 * CNT - Counter Attack Rate%
 * - If a physical action connects and passes, there is a chance the physical
 * action can be avoided and a counter attack made by the user will land on the
 * attacking unit. This is the Counter Attack Rate. If the randomizer check for
 * the Counter Attack Rate passes, the physical action is evaded and the target
 * will counter attack the user. If the randomizer check fails, the physical
 * action will connect to the target.
 *
 * HRG - HP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxHP as gained HP with a 100% success rate.
 *
 * MRG - MP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxMP as gained MP with a 100% success rate.
 *
 * TRG - TP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxTP as gained TP with a 100% success rate.
 *
 * ---
 *
 * X Parameters
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 10 X parameters:
 *   - HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 *
 * Vocabulary
 *
 *   HIT:
 *   EVA:
 *   CRI:
 *   CEV:
 *   MEV:
 *   MRF:
 *   CNT:
 *   HRG:
 *   MRG:
 *   TRG:
 *   - In-game vocabulary used for the selected X Parameter.
 *
 * ---
 *
 * === S Parameters ===
 *
 * TGR - Target Rate
 * - Against the standard enemy, the Target Rate value determines the odds of
 * an enemy specifically targeting the user for a single target attack. At 0%,
 * the enemy will almost never target the user. At 100%, it will have normal
 * targeting opportunity. At 100%+, the user will have an increased chance of
 * being targeted.
 * *NOTE: For those using the Battle A.I. Core, any actions that have specific
 * target conditions will bypass the TGR rate.
 *
 * GRD - Guard Effect
 * - This is the effectiveness of guarding. This affects the guard divisor
 * value of 2. At 100% GRD, damage will become 'damage / (2 * 1.00)'. At 50%
 * GRD, damage will become 'damage / (2 * 0.50)'. At 200% GRD, damage will
 * become 'damage / (2 * 2.00)' and so forth.
 *
 * REC - Recovery Effect
 * - This is how effective heals are towards the user. The higher the REC rate,
 * the more the user is healed. If a spell were to heal for 100 and the user
 * has 300% REC, then the user is healed for 300 instead.
 *
 * PHA - Pharmacology
 * - This is how effective items are when used by the user. The higher the PHA
 * rate, the more effective the item effect. If the user is using a Potion that
 * recovers 100% on a target ally and the user has 300% PHA, then the target
 * ally will receive healing for 300 instead.
 *
 * MCR - MP Cost Rate
 * - This rate affects how much MP skills with an MP Cost will require to use.
 * If the user has 100% MCR, then the MP Cost will be standard. If the user has
 * 50% MCR, then all skills that cost MP will cost only half the required MP.
 * If the user has 200% MCR, then all skills will cost 200% their MP cost.
 *
 * TCR - TP Charge Rate
 * - This rate affects how much TP skills with an TP will charge when gaining
 * TP through various actions. At 100%, TP will charge normally. At 50%, TP
 * will charge at half speed. At 200%, TP will charge twice as fast.
 *
 * PDR - Physical Damage Rate
 * - This rate affects how much damage the user will take from physical damage.
 * If the user has 100% PDR, then the user takes the normal amount. If the user
 * has 50% PDR, then all physical damage dealt to the user is halved. If the
 * user has 200% PDR, then all physical damage dealt to the user is doubled.
 *
 * MDR - Magical Damage Rate
 * - This rate affects how much damage the user will take from magical damage.
 * If the user has 100% MDR, then the user takes the normal amount. If the user
 * has 50% MDR, then all magical damage dealt to the user is halved. If the
 * user has 200% MDR, then all magical damage dealt to the user is doubled.
 *
 * FDR - Floor Damage Rate
 * - On the field map, this alters how much damage the user will take when the
 * player walks over a tile that damages the party. The FDR value only affects
 * the damage dealt to the particular actor and not the whole party. If FDR is
 * at 100%, then the user takes the full damage. If FDR is at 50%, then only
 * half of the damage goes through. If FDR is at 200%, then floor damage is
 * doubled for that actor.
 *
 * EXR - Experience Rate
 * - This determines the amount of experience gain the user whenever the user
 * gains any kind of EXP. At 100% EXR, the rate of experience gain is normal.
 * At 50%, the experience gain is halved. At 200%, the experience gain for the
 * user is doubled.
 *
 * ---
 *
 * S Parameters
 *
 *   JS: Formula
 *   - Formula used to determine the total value all 10 S parameters:
 *   - TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 *
 * Vocabulary
 *
 *   TGR:
 *   GRD:
 *   REC:
 *   PHA:
 *   MCR:
 *   TCR:
 *   PDR:
 *   MDR:
 *   FDR:
 *   EXR:
 *   - In-game vocabulary used for the selected S Parameter.
 *
 * ---
 *
 * Icons
 * 
 *   Draw Icons?
 *   - Draw icons next to parameter names?
 *
 *   MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK:
 *   HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG:
 *   TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR:
 *   - Icon used for the selected parameter.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Parameters Settings
 * ============================================================================
 *
 * As of version 1.07, you can add Custom Parameters to your game if RPG Maker
 * MZ's default set of parameters isn't enough for you. These parameters can
 * have variable functionality depending on how you code it. More importantly,
 * these are compatible with the VisuStella MZ menus and the VisuStella Core
 * Engine's Parameters settings.
 * 
 * For clarification, these settings do NOT create brand-new parameters for you
 * to use and add to your game nor are the bonuses supported by other plugins
 * in the VisuStella MZ library. These settings exist to function as a bridge
 * for non-VisuStella MZ plugins that have created their own parameter values
 * and to show them inside VisuStella menus.
 *
 * ---
 *
 * Custom Parameter
 * 
 *   Parameter Name:
 *   - What's the parameter's name?
 *   - Used for VisuStella MZ menus.
 * 
 *   Abbreviation:
 *   - What abbreviation do you want to use for the parameter?
 *   - Do not use special characters. Avoid numbers if possible.
 * 
 *   Icon:
 *   - What icon do you want to use to represent this parameter?
 *   - Used for VisuStella MZ menus.
 * 
 *   Type:
 *   - What kind of number value will be returned with this parameter?
 *     - Integer (Whole Numbers Only)
 *     - Float (Decimals are Allowed)
 * 
 *   JS: Value:
 *   - Run this code when this parameter is to be returned.
 *
 * ---
 * 
 * Instructions on Adding Custom Parameters to VisuStella Menus
 * 
 * In the Core Engine and Elements and Status Menu Core plugins, there are
 * plugin parameter fields for you to insert the parameters you want displayed
 * and visible to the player.
 * 
 * Insert in those the abbreviation of the custom parameter. For example, if
 * you want to add the "Strength" custom parameter and the abbreviation is
 * "str", then add "str" to the Core Engine/Elements and Status Menu Core's
 * plugin parameter field for "Strength" to appear in-game. Case does not
 * matter here so you can insert "str" or "STR" and it will register all the
 * same to make them appear in-game.
 * 
 * ---
 * 
 * Instructions on Using Custom Parameters as Mechanics
 * 
 * If you want to use a custom parameter in, say, a damage formula, refer to
 * the abbreviation you have set for the custom parameter. For example, if you
 * want to call upon the "Strength" custom parameter's value and its set
 * abbreviation is "str", then refer to it as such. This is case sensitive.
 * 
 * An example damage formula would be something like the following if using
 * "str" for "Strength" and "con" for "Constitution":
 * 
 *   a.str - b.con
 * 
 * These values are attached to the Game_Battlerbase prototype class.
 * 
 * ---
 * 
 * Instructions on Setting Custom Parameter Values
 * 
 * This requires JavaScript knowledge. There is no way around it. Whatever code
 * you insert into the "JS: Value" field will return the value desired. The
 * 'user' variable will refer to the Game_Battlerbase prototype object in which
 * the information is to be drawn from.
 * 
 * Depending on the "type" you've set for the Custom Parameter, the returned
 * value will be rounded using Math.round for integers and left alone if set as
 * a float number.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Resolution Settings
 * ============================================================================
 *
 * Alter various properties to make the game look better for varying screen
 * resolutions. This is mostly for RPG Maker MZ version 1.3.0 and up where the
 * Troops tab has been updated to match the screen resolution settings found in
 * the System 2 Database tab.
 *
 * ---
 * 
 * Maps
 * 
 *   Scroll Lock Small X?:
 *   Scroll Lock Small Y?:
 *   - Automatically scroll lock X/Y scrolling if the map is too small?
 *   - Useful for 1280x720 resolutions when the map is 27 tiles wide.
 *     - This will get rid of the subtle scrolling when moving from one half of
 *       the screen to the other.
 *   - This setting will be disabled if the map is zoomed in.
 * 
 *   Locked Display X?:
 *   Locked Display Y?:
 *   - What display X/Y value do you want for auto-scroll locked maps?
 *   - Use a number between 0 and 1 for best results.
 * 
 * ---
 *
 * Troops
 * 
 *   Reposition Actors:
 *   - Update the position of actors in battle if the screen resolution
 *     has changed to become larger than 816x624.
 *   - Ignore if using the VisuStella MZ Battle Core.
 *   - When using the VisuStella MZ Battle Core, adjust the position through
 *     Battle Core > Parameters > Actor Battler Settings > JS: Home Position
 *
 *   Reposition Enemies:
 *   - Update the position of enemies in battle if the screen resolution
 *     has changed to become larger than 816x624.
 * 
 *     For MZ 1.3.0+?:
 *     - Both this parameter and its parent parameter need to be on when using
 *       RPG Maker MZ 1.3.0+.
 *     - If the Core Script is below 1.3.0, this setting is ignored. This does
 *       not take into account what version the editor is on. Pay attention to
 *       that as the plugin will not auto adjust for it.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Shake Settings
 * ============================================================================
 *
 * Get more screen shake effects into your game!
 * 
 * These effects have been added by Aries of Sheratan!
 *
 * ---
 *
 * Settings
 * 
 *   Default Style:
 *   - The default style used for screen shakes.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   JS: Original Style:
 *   JS: Random Style
 *   JS: Horizontal Style
 *   JS: Vertical Style
 *   - This code gives you control over screen shake for this screen
 *     shake style.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Command List Settings
 * ============================================================================
 *
 * This plugin parameter allows you to adjust the commands that appear on the
 * title screen. Some JavaScript knowledge is needed.
 *
 * ---
 *
 * Title Command
 * 
 *   Symbol:
 *   - The symbol used for this command.
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
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Picture Buttons Settings
 * ============================================================================
 *
 * These allow you to insert picture buttons on your title screen that can
 * send users to various links on the internet when clicked.
 *
 * ---
 *
 * Settings
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 * 
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 * 
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 * 
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: UI Settings
 * ============================================================================
 *
 * In previous iterations of RPG Maker, the Core Engine would allow you to
 * change the screen resolution. In MZ, that functionality is provided by
 * default but a number of UI settings still remain. These settings allow you
 * adjust how certain in-game objects and menus are displayed.
 *
 * ---
 *
 * UI Area
 *
 *   Fade Speed:
 *   - Default fade speed for transitions.
 *
 *   Box Margin:
 *   - Set the margin in pixels for the screen borders.
 *
 *   Command Window Width:
 *   - Sets the width for standard Command Windows.
 *
 *   Bottom Help Window:
 *   - Put the Help Window at the bottom of the screen?
 *
 *   Right Aligned Menus:
 *   - Put most command windows to the right side of the screen.
 *
 *   Show Buttons:
 *   - Show clickable buttons in your game?
 * 
 *     Show Cancel Button:
 *     Show Menu Button:
 *     Show Page Up/Down:
 *     Show Number Buttons:
 *     - Show/hide these respective buttons if the above is enabled.
 *     - If 'Show Buttons' is false, these will be hidden no matter what.
 *
 *   Button Area Height:
 *   - Sets the height for the button area.
 *
 *   Bottom Buttons:
 *   - Put the buttons at the bottom of the screen?
 *
 *   Side Buttons:
 *   - Push buttons to the side of the UI if there is room.
 * 
 *   State Icons Non-Frame:
 *   - Replace sprite frame system for non-frame.
 *   - Better for any instances where icons are zoomed.
 *
 * ---
 *
 * Larger Resolutions
 *
 * ---
 *
 * Menu Objects
 *
 *   Level -> EXP Gauge:
 *   - Draw an EXP Gauge under the drawn level.
 *
 *   Parameter Arrow:
 *   - The arrow used to show changes in the parameter values.
 *
 * ---
 *
 * Text Code Support
 *
 *   Class Names:
 *   - Make class names support text codes?
 *
 *   Nicknames:
 *   - Make nicknames support text codes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Adjust the default settings of the windows in-game. This ranges from things
 * such as the line height (to better fit your font size) to the opacity level
 * (to fit your window skins).
 * 
 * These settings also allow you to add scroll bars to scrollable windows,
 * letting the player know how much of the window's contents there are left for
 * scrolling. The scroll bar can be enabled, disabled, have its thickness
 * changed, colors changed, etc.
 *
 * ---
 *
 * Window Defaults
 * 
 *   Enable Masking:
 *   - Enable window masking (windows hide other windows behind them)?
 *   - WARNING: Turning it on can obscure data.
 * 
 *   Correct Skin Bleed:
 *   - Allows you to enable/disable the window skin bleeding correction for
 *     those who wish to use the 95 calculator instead of 96 to augment higher
 *     and larger screen resolutions.
 *   - Read the "Bug Fixes" section if you don't understand what the window
 *     skin bleeding problem is.
 * 
 *   Line Height:
 *   - Default line height used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Item Padding:
 *   - Default line padding used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Back Opacity:
 *   - Default back opacity used for standard windows.
 *   - As of version 1.3.0, this is no longer needed.
 *   - This will still work for lower versions.
 * 
 *   Translucent Opacity:
 *   - Default translucent opacity used for standard windows.
 * 
 *   Window Opening Speed:
 *   - Default open speed used for standard windows.
 *   - Default: 32 (Use a number between 0-255)
 * 
 *   Column Spacing:
 *   - Default column spacing for selectable windows.
 *   - Default: 8
 * 
 *   Row Spacing:
 *   - Default row spacing for selectable windows.
 *   - Default: 4
 *
 * ---
 * 
 * Scroll Bar
 * 
 *   Show Scroll Bar?:
 *   - Show the scroll bar for scrollable windows?
 * 
 *   Thickness:
 *   - How thick do you want the scroll bar to be?
 * 
 *   Offset:
 *   - How much do you want to offset the scroll bar by?
 * 
 *   Bar Body Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Opacity:
 *   - What opacity value do you want the off bar opacity to be?
 *   - Use a number between 0 and 255.
 * 
 * ---
 * 
 * Selectable Items:
 * 
 *   Show Background?:
 *   - Selectable menu items have dark boxes behind them. Show them?
 * 
 *   Item Height Padding:
 *   - Default padding for selectable items.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   JS: Draw Background:
 *   - Code used to draw the background rectangle behind clickable menu objects
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: JS: Quick Functions
 * ============================================================================
 * 
 * WARNING: This feature is highly experimental! Use it at your own risk!
 * 
 * JavaScript Quick Functions allow you to quickly declare functions in the
 * global namespace for ease of access. It's so that these functions can be
 * used in Script Calls, Control Variable Script Inputs, Conditional Branch
 * Script Inputs, Damage Formulas, and more.
 * 
 * ---
 * 
 * JS: Quick Function
 * 
 *   Function Name:
 *   - The function's name in the global namespace.
 *   - Will not overwrite functions/variables of the same name.
 * 
 *   JS: Code:
 *   - Run this code when using the function.
 * 
 * ---
 * 
 * If you have a Function Name of "Example", then typing "Example()" in a
 * Script Call, Conditional Branch Script Input, or similar field will yield
 * whatever the code is instructed to return.
 * 
 * If a function or variable of a similar name already exists in the global
 * namespace, then the quick function will be ignored and not created.
 * 
 * If a quick function contains bad code that would otherwise crash the game,
 * a fail safe has been implemented to prevent it from doing so, display an
 * error log, and then return a 0 value.
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
 * Version 1.84: August 29, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New notetags added by Arisu:
 * *** Tileset Notetag: <Taller By x: id>
 * **** Changes any page B, C, D, E tile marked by terrain tag 'id' to be
 *      taller by 'x' tiles.
 * **** When placing these tiles on the map, all you have to do is just place
 *      the bottom tile.
 * ***** ie.: For a tree that's one tile taller, just place the tile at the
 *       bottom where you see the trunk). Then, in-game, the tree will appear
 *       taller by one tile as marked.
 * **** O/X layer tiles have a special property where tall sprites standing in
 *      front of it will no longer clip the top of the sprite, while sprites
 *      standing behind it will be covered by it.
 * **** This does not work with events using tiles as graphics. Instead, if
 *      you want to do similar, use the Event & Movement Core's <Tile Expand>
 *      notetags for better control.
 * 
 * Version 1.83: June 13, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated documentation for <param Max: x> notetag.
 * *** This does not set the max cap to be lower than the default cap.
 * * New Feature!
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > UI Settings > State Icons Non-Frame
 * **** Replace sprite frame system for non-frame.
 * **** Better for any instances where icons are zoomed.
 * 
 * Version 1.82: April 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added failsafe for $textPopup when some windows have not been initialized
 *    and requesting the text popup.
 * * New Feature!
 * ** New Plugin Parameter and playtest shortcut added by Arisu:
 * *** Plugin Parameters > QoL Settings > Playtest > CTRL + n: Quick Load
 * **** CTRL + a number from 1 to 9 will yield a quick load of that save file.
 * **** Does not count auto saves.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.81: February 15, 2024
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added for future plugin: VisuMZ_2_BattleGridSystem
 * *** <Grid>
 * *** <No Grid>
 * **** Requires the future plugin VisuMZ_2_BattleGridSystem!
 * **** Read the help section for more information on these.
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > Window > Correct Skin Bleed
 * **** Allows you to enable/disable the window skin bleeding correction for
 *      those who wish to use the 95 calculator instead of 96 to augment higher
 *      and larger screen resolutions.
 * **** Read the "Bug Fixes" section if you don't understand what the window
 *      skin bleeding problem is.
 * 
 * Version 1.80: January 18, 2024
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Auto Save After New Game
 * **** Normally, when starting a new game through the "New Game" option, there
 *      is no auto save trigger. However, if you start a new game or load a
 *      saved game, then go to the Game End screen, return back to the title
 *      screen, then start a New Game, the auto save trigger occurs when it
 *      shouldn't. The Core Engine will now patch this and prevent the trigger
 *      from taking place.
 * 
 * Version 1.79: November 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Plugin Command added by Arisu:
 * ** Text Popup: Show Text
 * *** Adds text to a text popup window to briefly appear.
 * *** Multiple text popups will be queued.
 * *** Does not halt the game and works parallel to game activity.
 * 
 * Version 1.78: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia and sponsored by AndyL:
 * *** QoL Settings > Battle Test > Shift+R: Recover All
 * **** For Play Test only! During battle, pressing SHIFT + R will refill the
 *      whole party's HP and MP and status.
 * *** QoL Settings > Battle Test > Shift+T: Full TP
 * **** For Play Test only! During battle, pressing SHIFT + T will refill the
 *      whole party's TP.
 * 
 * Version 1.77: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause the BGS related Plugin Commands to crash.
 *    Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Scroll-Linked Pictures now work if the image file are in a folder within
 *    the img/pictures/ folder without the folder needing a ! at the start.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Picture: Rotate by Angle
 * **** Rotates target picture by a amount angle over a set duration instead of
 *      continuously.
 * **** View help file for more information on the Plugin Command.
 * *** Picture: Rotate to Angle
 * **** Rotates target picture to a certain angle over a set duration instead
 *      of continuously.
 * **** View help file for more information on the Plugin Command.
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Menu Button Assist > General > Split "Escape":
 * **** Used ONLY for those making their own custom keyboard key input maps.
 * **** "Split" option makes separate instances of "Cancel" and "Menu" keys.
 * **** "Don't" option will consolidate both into "Escape" keys.
 * 
 * Version 1.76: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a bug that displayed the incorrect button press key for name input
 *    processing's cancel action. Fix made by Olivia.
 * 
 * Version 1.75: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** In Scene_Name, when using the Keyboard Input, the button assist windows
 *    will no longer display the keyboard shortcuts for Ok and Cancel, but
 *    instead, show them for ENTER and BKSP. Update made by Arisu.
 * ** In Scene_Name, when manual inputting, the Page Up/Dn keys are now
 *    displayed to show changing character pages.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by AndyL:
 * *** Params > Keyboard Input > Button Assist > Finish Entry
 * **** Text used to describe finish entry.
 * *** Params > Keyboard Input > Button Assist > Page Change
 * **** Text used to describe changing character pages.
 * *** Params > Window Settings > Scroll Bar
 * **** These settings also allow you to add scroll bars to scrollable windows,
 *      letting the player know how much of the window's contents there are
 *      left for scrolling. The scroll bar can be enabled, disabled, have its
 *      thickness changed, colors changed, etc.
 * 
 * Version 1.74: February 16, 2023
 * * Compatibility Update!
 * ** Plugin Commands for: Audio: Change Current BGM/BGS Volume/Pitch/Pan
 *    should now work properly with the updated RPG Maker MZ version and
 *    WebAudio changes. Update made by Arisu.
 * 
 * Version 1.73: January 20, 2023
 * * Compatibility Update!
 * ** Added better Effekseer version compatibility.
 * 
 * Version 1.72: December 15, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Skill List Active After Party Member Change
 * **** If the skill list is active (ie. the player can move the cursor around)
 *      and the party member currently being viewed is changed via the button
 *      commands, then previously, RPG Maker MZ would still have that window be
 *      active despite having the cursor hidden temporarily. Upon pressing
 *      direction buttons, the cursor reveals itself and both the skill type
 *      window and skill list window are both active, making way for lots of
 *      potential problems to happen.
 * ** Water Tile Bug
 * *** It seems like there's a new bug that occurs if you create a tileset from
 *     scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 *     does is it causes many tiles to become water tiles without intending to.
 *     You can find this out by turning off all the plugins in your project,
 *     putting a Ship or Boat on what are normally ground tiles, and then
 *     seeing the Ship or Boat traverse through it.
 * *** There are two ways to fix this. We cannot fix it through code in this
 *     plugin as it's a problem that involves the tileset json data there are
 *     ways to work around it so that you can get the proper water-flags to go
 *     where they need to be at.
 * **** 1. Copy a working un-bugged tileset onto the currently bugged one and
 *      reapply the tile features like passability, terrain tags, etc. This
 *      will make sure the water-passability tiles get copied over correctly.
 * **** 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *      un-bugged tileset (usually a pre-existing tileset when a new project is
 *      made), click the "Copy Page" button, go to the bugged tileset and press
 *      "Paste Page". You'll have to reapply any different properties like
 *      passabilities and terrain tags, but the water tile flags should now be
 *      working properly.
 * *** The plugin will not fix the problem itself since flag data is delicate
 *     and should not be tampered with midgame as the changes made by the
 *     plugin might not match the desired settings.
 * *** This plugin, however, will also send out an alert message when coming
 *     across such a tile. Pay attention to it and do one of the following two
 *     steps above to fix the problem.
 * * Documentation Update!
 * ** Added "Skill List Active After Party Member Change" section to the
 *    "Important Changes: Bug Fixes" section of the help file.
 * ** Added "Water Tile Bug" section to the "Important Changes: Bug Fixes"
 *    section of the help file.
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Menu Backgrounds > Blur Strength
 * **** Strength used for menu background snapshots.
 * 
 * Version 1.71: November 10, 2022
 * * Bug Fixes!
 * ** Title Command Window should now allow for more than 4 custom commands
 *    without hidden commands. Fix made by Irina.
 * ** Fixed a problem with repeating animations from Visual State Effects
 *    causing softlocks. Fix made by Olivia.
 * 
 * Version 1.70: October 6, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** A texture check will now occur for sprites that are being removed and
 *     destroyed in order to prevent crashes. In the off chance that someone
 *     creates a sprite through a script call and removes it through such, the
 *     likelihood of this occurance becomes higher. This makes the destroy
 *     property take into account a texture check in order to see if the sprite
 *     removal is taking extra steps and will reduce those extra steps.
 * * Documentation Update!
 * ** Added "Sprite Removal and Destroy Crash" section to the "Important
 *    Changes: Bug Fixes" section.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.69: September 8, 2022
 * * Bug Fixes!
 * ** Fixed the combination of Button Assist Location: Top with Help Location:
 *    Bottom combination not working properly. Fix made by Irina.
 * 
 * Version 1.68: August 4, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Olivia and sponsored by Archeia:
 * *** Audio: Change Current BGM Volume
 * *** Audio: Change Current BGM Pitch
 * *** Audio: Change Current BGM Pan
 * *** Audio: Change Current BGS Volume
 * *** Audio: Change Current BGS Pitch
 * *** Audio: Change Current BGS Pan
 * **** Changes the current BGM/BGS volume/pitch/pan without changing any of
 *      the current BGM/BGS's other properties and without restarting BGM/BGS.
 * 
 * Version 1.67: July 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added notes for Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * *** This setting will be disabled if the map is zoomed in.
 * * New Features!
 * ** New map notetags added by Irina and sponsored by AndyL:
 * *** <Scroll Lock X>
 * *** <Scroll Lock X: x>
 * *** <Scroll Lock Y>
 * *** <Scroll Lock Y: y>
 * **** Causes the map to not scroll left/right(x) or up/down(y). Useful for
 *      when maps are just slightly smaller than normal and the tiny scrolling
 *      is distracting.
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small X?
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small Y?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display X?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display Y?
 * **** Automatically scroll locks small maps to prevent them from scrolling
 *      horizontally/vertically. Useful for 1280x720 resolutions when the map
 *      is 27 tiles wide. This will get rid of the subtle scrolling when moving
 *      from one half of the screen to the other.
 * **** This setting will be disabled if the map is zoomed in.
 * * Feature Update!
 * ** Warnings added to Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 * Version 1.66: July 14, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Debug Console Refresh Bug
 * **** When pressing F5 to refresh while the debug console (DevTools) is open,
 *      some graphics will fail to load properly. This started occurring since
 *      the RPG Maker MZ 1.5.0 update and the code for loading the images has
 *      now been reverted to the 1.4.4 version where it was last stable.
 * * Documentation Update!
 * ** Help file updated for new major bug fix.
 * 
 * Version 1.65: June 30, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Parameter Settings > Show Actor Level?
 * **** Show the actor level when displaying actors?
 * **** Used for most windows in-game.
 * 
 * Version 1.64: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Debug: Current Controller ID
 * **** PLAY TEST ONLY. Shows current controller ID in debug console.
 * **** Also copies to computer clipboard if possible.
 * ** New Plugin Parameters made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Subsettings for Button Assist Window: Controller Button Assist
 * **** These are sub-settings for the Button Assist Window Plugin Parameters.
 *      Where the Button Assist Window Plugin Parameters are focused on
 *      keyboard entries, these sections are focused on gamepad controllers.
 * **** Add multiple gamepads to the list to give them different button assist
 *      text. If a gamepad is being used but not listed here, the button assist
 *      text will default to the keyboard version.
 * 
 * Version 1.63: May 2, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > QoL Settings > Misc > Map Name Text Code
 * **** If on, map names will use text codes.
 * **** If off, only the raw map name will be used.
 * * Feature Update!
 * ** The map name text code change will no longer be on forcefully. It is now
 *    something that can be toggled by Plugin Parameters. Update by Irina.
 * 
 * Version 1.62: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu and sponsored by Archeia:
 * *** Variable: JS Eval
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows one line of code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * *** Variable: JS Block
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows JS block code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * ** Map names can now use text codes. Made by Arisu and sponsored by Archeia.
 * 
 * Version 1.61: April 21, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Battle Forced End Action Crash
 * **** Depending on various circumstances, currently active battlers can be
 *      cleared from the battle system at will due to a number of reasons.
 *      However, if it just so happens that the targets are cleared, too, with
 *      actions remaining, then a crash will follow up. This plugin will
 *      prevent that change. Fix made by Olivia.
 * 
 * Version 1.60: April 14, 2022
 * * Bug Fixes!
 * ** Number Input window will now respond to Home/End keys properly.
 *    Fix made by Olivia.
 * 
 * Version 1.59: April 7, 2022
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.4 compatibility update!
 * *** "Shutdown" command should now be more compatible with other aspects of
 *     the client when running from Node JS client on other OS's.
 * 
 * Version 1.58: March 24, 2022
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.57: March 3, 2022
 * * Compatibility Update!
 * ** The "Shutdown" command from the title screen should now be compatible
 *    with RPG Maker MZ 1.4.4 and up. Update made by Olivia.
 * 
 * Version 1.56: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Arisu and sponsored by Anon:
 * *** Plugin Parameters > QoL > Misc > Shortcut Scripts
 * **** Enables shortcut-based script variables and functions that can be used
 *      for script calls.
 * **** Shortcut list enabled for this is as follows:
 * ***** $commonEvent(id), $onceParallel(id), $scene, $spriteset, $subject, 
 *       $targets, $target, $event
 * ***** For more information on how to use them, review the help file.
 * 
 * Version 1.55: January 27, 2022
 * * Feature Update!
 * ** Once Parallels for the map are now able to update even while other events
 *    are running. Update made by Arisu.
 * 
 * Version 1.54: January 13, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Overly-Protective Substitute
 * *** When an ally with critical health is being targeted by a friendly non-
 *     Certain Hit skill (such as a heal or buff) and another ally has the
 *     substitute state, the other ally would "protect" the originally targeted
 *     ally and take the heal or buff.
 * *** The new changed behavior is that now, substitute will not trigger for
 *     any actions whose scope targets allies.
 * *** Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new MZ Bug: Overly-Protective Substitute.
 * * Feature Update!
 * ** Added a failsafe for those who did not update the plugin parameter
 *    settings and are using MV Animations.
 * 
 * Version 1.53: December 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetag added by Olivia:
 * *** <Rate: x>
 * **** Allows you to adjust the update for this MV Animation.
 * ***** Does NOT work with Effekseer animations.
 * **** The lower the number, the faster.
 * **** Replace 'x' with a number representing the animation update rate.
 * ***** Default rate: 4.
 * ***** Minimum rate: 1.
 * ***** Maximum rate: 10.
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Qualify of Life Settings > MV Animation Rate
 * **** Adjusts the rate at which MV animations play.
 * **** Default: 4. Lower for faster. Higher for slower.
 * * Optimization Update!
 * ** MV Animations should run more optimized.
 * 
 * Version 1.52: December 16, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.0 compatibility update!
 * *** MV Animations played on screen level will now show up properly in the
 *     center of the screen.
 * 
 * Version 1.51: December 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** In the battle status windows, whenever actor names are displayed, the
 *     bitmap used to display their name text do not extend vertically all the
 *     way, causing letters like lowercase "Q" and "G" to be cut off, making
 *     them hard to distinguish from one another. The Core Engine will remedy
 *     this by extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * Version 1.50: November 4, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** By default, if the attack skill is sealed via a trait and an actor has
 *     auto-battle, the action can still be used via auto-battle. This is now
 *     fixed and actors should not be able to attack via auto-battle if their
 *     attack ability is sealed. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.49: October 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Map: Once Parallel
 * **** Plays a Common Event parallel to the event once without repeating
 *      itself when done. Map only!
 * **** When exiting map scene or changing maps, all Once Parallels are cleared
 * **** Once Parallels are not retained upon reentering the scene or map.
 * **** Once Parallels are not stored in memory and cannot be saved.
 * 
 * Version 1.48: October 21, 2021
 * * Feature Update!
 * ** Bitmap.blt function will now have source coordinates and destination X
 *    and Y coordinates rounded to prevent blurring. Update made by Olivia.
 * 
 * Version 1.47: October 14, 2021
 * * Bug Fixes!
 * ** Prevents Number Input window from having a NaN value due to holding down
 *    the fast forward key. Fix made by Arisu.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * **** Fixes the font width issue with non-monospaced fonts in the Message
 *      Window. This is now an optional fix.
 * 
 * Version 1.46: September 23, 2021
 * * Documentation Update!
 * ** Added line to Plugin Command: "System: Battle System Change":
 * *** Some battle systems REQUIRE their specific plugins!
 * ** Added lines to "Plugin Parameters: Battle System":
 * *** Some battle systems REQUIRE their specific plugins! This means if you do
 *     not have the required battle system plugin installed, it will not change
 *     over. The Core Engine plugin does not contain data for all of the battle
 *     systems inside its code.
 * 
 * Version 1.45: September 17, 2021
 * * Bug Fixes!
 * ** Fixed a problem with "Picture: Coordinates Mode" to properly utilize the
 *    correct picture ID. Fix made by Arisu.
 * ** RPG Maker MZ Bug Fix:
 * *** Instant Text Discrepancy for Window_Message
 * **** Window_Message displays text differently when it draws letters one by
 *      one versus when the text is displayed instantly. This isn't noticeable
 *      with the default font, but it's very visible when using something like
 *      Arial. The error is due to Bitmap.measureTextWidth yielding a rounded
 *      value per letter versus per word. The Core Engine will provide a bug
 *      fix that will single out the cause and make it so that only
 *      Window_Message will not utilize any round number values when
 *      determining the width of each letter, whether or not it is shown
 *      instantly. This change will only affect Window_Message and not any
 *      other window in order to prevent unintended side effects.
 * **** Fix made by Yanfly.
 * * Compatibility Update!
 * ** RPG Maker MZ 1.3.3 compatibility.
 * *** Updated how gauges are drawn.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.44: August 20, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Anon.
 * *** "Animation: Play at Coordinate"
 * **** Plays an animation on the screen at a specific x, y coordinate even if
 *      there is no sprite attached.
 * 
 * Version 1.43: July 23, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Archeia!
 * *** "Picture: Coordinates Mode"
 * **** Play Test Mode only!
 * **** Gets the coordinates of a specific picture as you move it across the
 *      screen.
 * **** Helpful for those who don't want to do guess work on the screen
 *      coordinates when it comes to placing down pictures.
 * 
 * Version 1.42: July 16, 2021
 * * Documentation Update
 * ** Added text to "Plugin Parameters: Color Settings" for clarification:
 * *** If the game's Window Skin is changed mid-game, the colors used will
 *     still be based off the default Window Skin's colors. This is due to
 *     storing them in a cache and preventing extra processing and reduces lag.
 * 
 * Version 1.41: July 2, 2021
 * * Compatibility Update
 * ** Further compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update
 * ** Added extra notes to "Important Changes: Bug Fixes" section for the
 *    "Window Skin Bleeding" bug:
 * *** This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Version 1.40: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update:
 * ** Plugin Parameters > Window Settings > Back Opacity
 * *** As of version 1.3.0, this is no longer needed.
 * *** This will still work for lower versions.
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Window Skin Bleeding fix updated to newest version.
 * * New Plugin Parameters added:
 * ** Plugin Parmaeters > Screen Resolution Settings
 * *** These settings have been moved from the UI settings to be its own thing.
 * **** This is mostly for RPG Maker MZ version 1.3.0 and up where the Troops
 *      tab has been updated to match the screen resolution settings found in
 *      the System 2 Database tab.
 * *** Reposition Enemies > For MZ 1.3.0+?
 * **** Both of these plugin parameters need to be set to true in order for the
 *      repositioning to work for MZ v1.3.0.
 * **** If the Core Script is below 1.3.0, this setting is ignored. This does
 *      not take into account what version the editor is on. Pay attention to
 *      that as the plugin will not auto adjust for it.
 * 
 * Version 1.39: June 18, 2021
 * * Bug Fixes!
 * ** Number Inputs should now work with the controller if keyboard Number
 *    Input is enabled. Fix made by Olivia.
 * ** RPG Maker Bug: Termination Clear Effects
 * *** In RPG Maker MZ, requesting an animation while transitioning between
 *     scenes, such as going from the map scene to the battle scene, can cause
 *     crashes. This is because the animation queue does not take off
 *     immediately and will likely register incorrect targets for the scene.
 *     This plugin will forcefully clear any registered animations and balloon
 *     effects when terminating a scene in order to prevent crashes.
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** <Battle View: x> Troop Name tags can now work with comment tags.
 * ** <Battle System: x> Troop Name tags can now work with comment tags.
 * *** Updates made by Irina.
 * 
 * Version 1.38: June 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Caz!
 * *** Picture: Show Icon
 * **** Shows an icon instead of a picture image.
 * **** The picture icon can be controlled like any other picture.
 * 
 * Version 1.37: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Switches: Randomize ID(s)
 * *** Switches: Randomize Range
 * *** Switches: Toggle ID(s)
 * *** Switches: Toggle Range
 * **** These Plugin Commands allow you to randomize the ON/OFF positions of
 *      switches or toggle them so that they flip their ON/OFF status.
 * 
 * Version 1.36: May 14, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Export: All Maps Text
 * *** Export: All Troops Text
 * *** Export: Current Map Text
 * *** Export: Current Troop Text
 * **** Play Test Only Plugin Commands. These Plugin Commands are used for
 *      extracting all messages, show choices, comments, and scrolling text to
 *      parse and export them as a TXT file. Useful for getting a game's script
 *      to a voice actor or voice actress.
 * 
 * Version 1.35: May 7, 2021
 * * Documentation Update!
 * ** Added the following text to "Parameter Settings" Plugin Parameters for
 *    extra clarity regarding Parameter Caps:
 * *** These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 * 
 * Version 1.34: April 23, 2021
 * * Bug Fixes!
 * ** For the vanilla Equip Status window, custom parameters with integer
 *    values will now show up as integers and not percentiles. Fix by Olivia.
 * * Documentation Update!
 * ** Added clarity to the <param: x> notetag for enemies.
 * *** This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * 
 * Version 1.33: April 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Window Skin Bleeding
 * *** Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 *     been set from 96 to 95. This results in the window skin bleeding past
 *     the window's intended borders. The Core Engine now reverts this change
 *     to prevent the bleeding effect from happening.
 * * Feature Update!
 * ** "Encounter Rate Minimum" now has a valid minimum value of 1. Update made
 *    by Olivia.
 * 
 * Version 1.32: April 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Item Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Weapon Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Armor Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Added Quantity
 * **** By default, RPG Maker MZ only adds 99 of items and not weapons or armor
 *      making it awkward for testing specific battle mechanics. These settings
 *      allow you to add in custom amounts of items, weapons, and/or armors if
 *      you so wish.
 * 
 * Version 1.31: March 26, 2021
 * * Feature Update!
 * ** Title screen buttons will now become fully opaque when hovered over them
 *    instead of only when pressed. Update made by Yanfly.
 * 
 * Version 1.30: March 19, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Invisible Battle Sprites
 * *** If you removed a party member during battle and added that exact party
 *     member back into the same slot, their sprite would appear invisible. The
 *     VisuStella Core Engine will fix this problem and prevent it from
 *     happening. Fix made by Olivia.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset
 * **** When animations are mirrored, mirror their Offset X values, too.
 * ** New animation name tags added by Arisu:
 * *** <Mirror Offset X> and <No Mirror Offset X>
 * **** If these text tags are placed in an animation's name, it will cause the
 *      offset X value to be mirrored when the animation is mirrored or have it
 *      ignored despite being mirrored.
 * 
 * Version 1.29: March 12, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Interactable window client area does not conform to the
 *    window's declared scale when the scale is anything but 1.0. This will now
 *    be fixed through this plugin. Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** Name Input should be more controller-friendly. If a controller is
 *    connected upon entering the name change scene, it will use the default
 *    manual-entry mode instead of the keyboard-entry mode. If a controller
 *    button is pressed during the keyboard-entry mode, it will automatically
 *    switch to the manual-entry mode.
 * ** This plugin does not provide support for controllers that are undetected
 *    by RPG Maker MZ's default controller support.
 * ** This feature was already implemented since version 1.27 but wasn't
 *    documented so here we are. Update made by Irina.
 * 
 * Version 1.28: March 5, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: The arrows drawn by a window skin will no longer by
 *    placed on a half pixel when a window's size is an odd number. This would
 *    cause sprite tearing problems and look awful. Fix made by Irina.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * 
 * Version 1.27: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Moved "Show Scrolling Text, additional functionality" section from Bug
 *    Fixes to Major Changes as it was placed in the wrong section.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > Keyboard Input > Name Input > Banned Words
 * **** Insert words you don't want your players to use for character names.
 * 
 * Version 1.26: February 19, 2021
 * * Bug Fixes!
 * ** Certain Plugin Parameters no longer have settings that restrict them to
 *    a maximum of 1. Fix made by Arisu.
 * * Feature Update!
 * ** Changed the default value for a New Game > Common Event upon Play Testing
 *    to 0 to prevent confusion. Update made by Arisu.
 * 
 * Version 1.25: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Show Scrolling Text, additional functionality added by Arisu
 * *** The event command "Show Scrolling Text" now has additional functionality
 *     as long as the VisuStella MZ Core Engine is installed. If the game dev
 *     inserts "// Script Call" (without the quotes) inside the scrolling text,
 *     then the entirity of the Show Scrolling Text event command will be ran
 *     as a giant script call event command.
 * *** The reason why this functionality is added is because the "Script..."
 *     event command contains only 12 lines maximum. This means for any script
 *     call larger than 12 lines of code cannot be done by normal means as each
 *     script call is ran as a separate instance.
 * *** By repurposing the "Show Scrolling Text" event command to be able to
 *     function as an extended "Script..." event command, such a thing is now
 *     possible with less hassle and more lines to code with.
 * *** This effect does not occur if the Show Scrolling Text event command does
 *     not have "// Script Call" in its contents.
 * 
 * Version 1.24: January 29, 2021
 * * Documentation Update!
 * ** Plugin Parameters: Custom Parameters Settings added the following note:
 * *** For clarification, these settings do NOT create brand-new parameters for
 *     you to use and add to your game nor are the bonuses supported by other
 *     plugins in the VisuStella MZ library. These settings exist to function
 *     as a bridge for non-VisuStella MZ plugins that have created their own
 *     parameter values and to show them inside VisuStella menus.
 * * Feature Update!
 * ** Default JS Plugin Parameter for the Title Command: "Shutdown" now has a
 *    note in it that reads: "Do NOT use this command with mobile devices or
 *    browser games. All it does is cause the game to display a blank, black
 *    canvas which the player is unable to do anything with. It does NOT force
 *    close the browser tab nor the app."
 * *** This is also why this command is disabled by default for any non-NodeJS
 *     client deployed game versions.
 * ** Disabled some bug fixes made by the Core Engine for the default RMMZ code
 *    base since the 1.1.1 version now contains those very same fixes.
 * 
 * Version 1.23: January 22, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: January 15, 2021
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Sprite_Timer is added to the spriteset for the parent
 *    scene, making it affected by any filers, zooms, and/or blurs, hindering
 *    its readability.
 * 
 * Version 1.21: January 8, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Keyboard Input > Controls > WASD Movement
 * *** Plugin Parameters > Keyboard Input > Controls > R Button: Dash Toggle
 * 
 * Version 1.20: January 1, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.19: December 25, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s) and feature updates!
 * * Bug Fixes!
 * ** Fixed typo inside of the comments inside the JS: Quick Functions.
 * * Feature Update!
 * ** Plugin Parameters > Color Settings > Outline Color is now renamed to
 *    Font Outline.
 * * New Features!
 * ** New Plugin Parameters added by Shaz!
 * *** Plugin Parameters > Color Settings > Gauge Number Outline
 * 
 * Version 1.18: December 18, 2020
 * * Bug Fixes!
 * ** Compatible string text from the Items and Equips Core will no longer
 *    register MaxHP and MaxMP as percentile values for the info window.
 * ** RPG Maker MZ Bug: Gamepads no longer go rapidfire after a cleared input.
 *    There is now a period of delay for gamepads after an input clear.
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * ** RPG Maker MV animations will no longer crash for unplayable sound
 *    effects. Fix made by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * New Features!
 * ** New Plugin Parameters added by Yanfly!
 * *** Plugin Parameters > Button Assist > Key: Shift
 * *** Plugin Parameters > Button Assist > Key: Tab
 * **** These let you assign text codes to the Shift and Tab buttons for the
 *      Button Assist windows.
 * *** Plugin Parameters > QoL Settings > Misc > NewGame > CommonEvent
 * **** For an all version (including non-play test) common event to start new
 *      games with.
 * 
 * Version 1.17: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.16: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Button Assist Window for the change name scene will now default to "Tab"
 *    for switching between both modes. Update made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > Keyboard Input > Default Mode
 * **** Select default mode when entering the scene.
 * 
 * Version 1.15: November 29, 2020
 * * Bug Fixes!
 * ** Pressing "Enter" in the change name scene while the actor's name is
 *    completely empty will no longer result in endless buzzer sounds. Fix made
 *    by Arisu.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** For the name change scene, the "Tab" key now also lets the user switch
 *    between the two modes. Update made by Yanfly.
 * * New Features!
 * ** Two new plugin parameters added to Keyboard Input:
 * *** "Switch To Keyboard" and "Switch To Manual"
 * **** These determine the text used for the button assist window when
 *      switching between the two modes. Update made by Yanfly.
 * **** Button Assist window now takes into consideration for these texts.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: November 22, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Command added by Yanfly!
 * *** System: Load Images
 * **** Allows you to (pre) load up images ahead of time.
 * 
 * Version 1.13: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.12: November 8, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Screen Shake Plugin Parameters and JS: Quick Function Plugin Parameters
 *    have been taken off experimental status.
 * * New Features!
 * ** New plugin parameters added by Arisu.
 * *** Plugin Parameters > Keyboard Input
 * **** Settings for the game that utilize keyboard input. These are primarily
 *      for the name input scene (Scene_Name) and the number input event
 *      command. These settings have only been tested on English keyboards and
 *      may or may not be compatible with other languages, so please disable
 *      these features if they do not fit in with your game.
 * 
 * Version 1.11: November 1, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Feature Update!
 * ** Bitmap smoothing now takes into consideration for rounding coordinates.
 *    Update made by Irina.
 * 
 * Version 1.10: October 25, 2020
 * * Feature Update!
 * ** Sprite animation location now adjusts position relative to the sprite's
 *    scale, too. Update made by Arisu.
 *
 * Version 1.09: October 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Auto Battle Lock Up. Fixed by Yanfly.
 * *** If an auto battle Actor fights against an enemy whose DEF/MDF is too
 *     high, they will not use any actions at all. This can cause potential
 *     game freezing and softlocks. This plugin will change that and have them
 *     default to a regular Attack.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.08: October 11, 2020
 * * Feature Update!
 * ** Altered sprite bitmaps via the various draw functions will now be marked
 *    as modified and will automatically purge themselves from graphical memory
 *    upon a sprite's removal to free up more resources. Change made by Yanfly.
 * ** Picture Sprite Origin anchors are now tied to the Game_Picture show and
 *    move commands instead of the Game_Interpretter commands. Change by Arisu.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** New documentation added for the new Plugin Parameter category:
 *    "Custom Parameters".
 * * New Features!
 * ** New Plugin Parameter "Custom Parameters" added by Yanfly.
 * *** Create custom parameters for your game! These will appear in
 *     VisuStella MZ menus.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Battler evasion pose can now occur if there is a miss. These were made
 *    separate in RPG Maker MZ and misses didn't enable the evasion pose. Fix
 *    made by Olivia.
 * * New Features!
 * ** New notetags for Maps and name tags for Troops added by Yanfly!
 * *** <Frontview>, <Sideview> to change the battle view for that specific map,
 *     or troop regardless of what other settings are.
 * *** <DTB>, <TPB Active>, <TPB Wait> to change the battle system for that
 *     specific map or troop regardless of what other settings are.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** <Level: x> notetag for enemies is now fixed! Fix made by Arisu.
 * * Documentation Update!
 * ** Documentation added for the new "System: Battle System Change" Plugin
 *    Command and removed the old "System: Set Time Progress Battle".
 * * Feature Update!
 * ** The Plugin Command "System: Set Time Progress Battle" has been replaced
 *    with "System: Battle System Change" instead. This is to accommodate
 *    future plugins that allow for different battle systems. Added by Yanfly.
 * *** If you have previously used "System: Set Time Progress Battle", please
 *     replace them. We apologize for the inconvenience.
 * * New Features!
 * ** In the Core Engine's plugin parameters, you can now set the Battle System
 *    used. This will default to whatever is the game database's setting. This
 *    feature is used for the future when new battle systems are made. Feature
 *    added by Yanfly.
 * 
 * Version 1.04: September 13, 2020
 * * Documentation Update!
 * ** Added new documentation for the "Title Command List" and Title Picture
 *    Buttons" plugin parameters. They now have a dedicated section each.
 * * Feature Updates!
 * ** Moved the "Title Command List" and "Title Picture Buttons" parameters
 *    from the Menu Layout > Title settings. They were far too hidden away and
 *    users had a hard time finding them. Update made by Yanfly.
 * *** Users who have customized these settings before will need to readjust
 *     them again. We apologize for the inconvenience.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Having QoL > Modern Controls disabled (why would you) used to prevent the
 *    down button from working. It works again. Fix made by Yanfly.
 * * New Feature!
 * ** Plugin default settings now come with a "Game End" option on the title
 *    screen. For those updating from version 1.02 or order, you can add this
 *    in by opening the Core Engine > Plugin Parameters > Menu Layout Settings
 *    > press "delete" on Scene_Title > open it up, then the new settings will
 *    fill in automatically.
 * * New Experimental Feature Added:
 * ** Screen Shake Settings added to the Plugin Parameters.
 * *** Screen Shake: Custom Plugin Command added!
 * *** Credit to Aries of Sheratan, who gave us permission to use her formula.
 * *** We'll be expanding on more screen shaking options in the future.
 * * Optimization Update
 * ** Digit Grouping now works more efficiently.
 * 
 * Version 1.02: August 30, 2020
 * * New Feature!
 * ** New Plugin Command: "Picture: Erase All". Added by Olivia.
 * *** Erases all pictures on the screen because it's extremely tedious to do
 *     it one by one.
 * ** New Plugin Command: "Picture: Erase Range"
 * *** Erases all pictures within a range of numbers because it's extremely
 *     tedious to do it one by one.
 * * Optimization Update
 * ** Added a more accurate means of parsing numbers for Digit Grouping.
 * ** Window_Base.prototype.textSizeEx now stores data to a cache.
 * * Documentation Update
 * ** Added a section to Major Changes: New Hard-Coded Features on
 *    Digit Grouping and explaining its intricacies.
 * ** Added a note to Plugin Parameters > UI > Reposition Actors to ignore the
 *    setting if using the Battle Core.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Digit grouping fixed to allow text codes to detect values larger than
 *    1000. Fix made by Olivia and Yanfly.
 * ** Param Plus, Rate, Flat notetags fixed. Fix made by Yanfly.
 * * New Experimental Feature Added:
 * ** JS: Quick Functions found in the Plugin Parameters
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
 * @command Separator_Animation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AnimationPoint
 * @text Animation: Play at Coordinate
 * @desc Plays an animation on the screen at a specific x, y
 * coordinate even if there is no sprite attached.
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Plays this animation.
 * @default 1
 * 
 * @arg Coordinates
 *
 * @arg pointX:eval
 * @text X
 * @parent Coordinates
 * @desc X coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.width / 2
 *
 * @arg pointY:eval
 * @text Y
 * @parent Coordinates
 * @desc Y coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.height / 2
 *
 * @arg Mirror:eval
 * @text Mirror Animation?
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation?
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the animation?
 * @default false
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Audio
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmVolume
 * @text Audio: Change Current BGM Volume
 * @desc Changes the current BGM volume without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGM's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPitch
 * @text Audio: Change Current BGM Pitch
 * @desc Changes the current BGM pitch without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGM's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPan
 * @text Audio: Change Current BGM Pan
 * @desc Changes the current BGM pan without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGM's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsVolume
 * @text Audio: Change Current BGS Volume
 * @desc Changes the current BGS volume without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGS's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPitch
 * @text Audio: Change Current BGS Pitch
 * @desc Changes the current BGS pitch without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGS's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPan
 * @text Audio: Change Current BGS Pan
 * @desc Changes the current BGS pan without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGS's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Debug
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugConsoleLastControllerID
 * @text Debug: Current Controller ID
 * @desc PLAY TEST ONLY. Shows current controller ID in debug console.
 * Also copies to computer clipboard if possible.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Export
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllMapText
 * @text Export: All Maps Text
 * @desc PLAY TEST ONLY. Exports all of the text from all maps,
 * their events, event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllTroopText
 * @text Export: All Troops Text
 * @desc PLAY TEST ONLY. Exports all of the text from all troops,
 * their event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurMapText
 * @text Export: Current Map Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current map,
 * its events, the event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurTroopText
 * @text Export: Current Troop Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current troop,
 * the troop's event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Game
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OpenURL
 * @text Game: Open URL
 * @desc Opens a website URL from the game.
 *
 * @arg URL:str
 * @text URL
 * @desc Where do you want to take the player?
 * @default https://www.google.com/
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Gold
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GoldChange
 * @text Gold: Gain/Lose
 * @desc Allows you to give/take more gold than the event editor limit.
 *
 * @arg value:eval
 * @text Value
 * @desc How much gold should the player gain/lose?
 * Use negative values to remove gold. You may use JS.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Map
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapOnceParallel
 * @text Map: Once Parallel
 * @desc Plays a Common Event parallel to the event once without
 * repeating itself when done. Map only!
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc The ID of the parallel Common Event to play.
 * Does NOT repeat itself when finished.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureCoordinatesMode
 * @text Picture: Coordinates Mode
 * @desc Play Test Mode only! Gets the coordinates of a specific
 * picture as you move it across the screen.
 *
 * @arg PictureID:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ID of the pictures to track the coordinates of.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEasingType
 * @text Picture: Easing Type
 * @desc Changes the easing type to a number of options.
 *
 * @arg pictureId:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Which picture do you wish to apply this easing to?
 * @default 1
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg LineBreak
 * @text ------------------------
 * @default --------------------------------
 *
 * @arg Instructions1
 * @text Instructions
 * @default Insert this Plugin Command after
 *
 * @arg Instructions2
 * @text -
 * @default a "Move Picture" event command.
 * 
 * @arg Instructions3
 * @text -
 * @default Turn off "Wait for Completion"
 *
 * @arg Instructions4
 * @text -
 * @default in the "Move Picture" event.
 *
 * @arg Instructions5
 * @text -
 * @default You may have to add in your own
 *
 * @arg Instructions6
 * @text -
 * @default "Wait" event command after.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseAll
 * @text Picture: Erase All
 * @desc Erases all pictures on the screen because it's extremely
 * tedious to do it one by one.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseRange
 * @text Picture: Erase Range
 * @desc Erases all pictures within a range of numbers because it's
 * extremely tedious to do it one by one.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type number
 * @min 1
 * @max 100
 * @desc The starting ID of the pictures to erase.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ending ID of the pictures to erase.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureRotateBy
 * @text Picture: Rotate By Angle
 * @desc Rotates target picture by a amount angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg AdjustAngle:eval
 * @text Adjust Angle
 * @desc What is the angle you wish to rotate the picture by?
 * Use degrees (360 degrees per full rotation).
 * @default 0
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureRotate
 * @text Picture: Rotate to Angle
 * @desc Rotates target picture to a certain angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg TargetAngle:eval
 * @text Target Angle
 * @desc What is the target angle you wish to rotate the picture?
 * Use degrees (360 degrees per full rotation).
 * @default 0
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command PictureShowIcon
 * @text Picture: Show Icon
 * @desc Shows an icon instead of a picture image.
 * The picture icon can be controlled like any other picture.
 * 
 * @arg General
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @parent General
 * @desc What is the ID of the picture you wish to show at? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg IconIndex:eval
 * @text Icon Index
 * @parent General
 * @desc Select the icon index to use for this picture.
 * You may use JavaScript code.
 * @default 23
 *
 * @arg Smooth:eval
 * @text Smooth Icon?
 * @parent General
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc This will make the icon smoothed out or pixelated.
 * @default false
 * 
 * @arg PictureSettings
 * @text Picture Settings
 *
 * @arg Settings:struct
 * @text Settings
 * @parent PictureSettings
 * @type struct<ShowPicture>
 * @desc Alter the settings for how the picture will be shown.
 * @default {"Position":"","Origin:num":"0","PositionX:eval":"0","PositionY:eval":"0","Scale":"","ScaleX:eval":"100","ScaleY:eval":"100","Blend":"","Opacity:eval":"255","BlendMode:num":"0"}
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ScreenShake
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ScreenShake
 * @text Screen Shake: Custom
 * @desc Creates a custom screen shake effect and also sets
 * the following uses of screen shake to this style.
 *
 * @arg Type:str
 * @text Shake Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc Select shake style type.
 * @default random
 *
 * @arg Power:num
 * @text Power
 * @type number
 * @min 1
 * @max 9
 * @desc Power level for screen shake.
 * @default 5
 *
 * @arg Speed:num
 * @text Speed
 * @type number
 * @min 1
 * @max 9
 * @desc Speed level for screen shake.
 * @default 5
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of screenshake.
 * You can use code as well.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Switch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeOne
 * @text Switches: Randomize ID(s)
 * @desc Select specific Switch ID's to randomize ON/OFF.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeRange
 * @text Switches: Randomize Range
 * @desc Select specific Switch ID Range to randomize ON/OFF.
 * The ratio determines the ON/OFF distribution.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleOne
 * @text Switches: Toggle ID(s)
 * @desc Select specific Switch ID's to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleRange
 * @text Switches: Toggle Range
 * @desc Select specific Switch ID Range to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetBattleSystem
 * @text System: Battle System Change
 * @desc Switch to a different battle system in-game.
 * Some battle systems REQUIRE their specific plugins!
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB Wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to switch to.
 * @default database
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemLoadImages
 * @text System: Load Images
 * @desc Allows you to (pre) load up images ahead of time.
 *
 * @arg animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetFontSize
 * @text System: Main Font Size
 * @desc Set the game's main font size.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the font size to this number.
 * @default 26
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetSideView
 * @text System: Side View Battle
 * @desc Switch between Front View or Side View for battle.
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Front View
 * @value Front View
 * @option Side View
 * @value Side View
 * @option Toggle
 * @value Toggle
 * @desc Choose which view type to switch to.
 * @default Toggle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetWindowPadding
 * @text System: Window Padding
 * @desc Change the game's window padding amount.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the game's standard window padding to this value.
 * Default: 12
 * @default 12
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_TextPopup
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TextPopupShow
 * @text Text Popup: Show Text
 * @desc Adds text to a text popup window to briefly appear.
 * Multiple text popups will be queued.
 *
 * @arg text:json
 * @text Text
 * @type note
 * @desc Write the text that you want to appear here.
 * You may use text codes.
 * @default "Insert message here."
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Variable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableEvalReference
 * @text Variable: JS Eval
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:eval
 * @text Variable ID
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 1
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:eval
 * @text Operand Modifier
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableJsBlock
 * @text Variable: JS Block
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:func
 * @text Variable ID
 * @type note
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet varID = 1;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn varID;"
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:func
 * @text Operand Modifier
 * @type note
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet value = 0;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn value;"
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
 * @param CoreEngine
 * @default Plugin Parameters
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param QoL:struct
 * @text Quality of Life Settings
 * @type struct<QoLSettings>
 * @desc Quality of Life settings for both developers and players.
 * @default {"PlayTest":"","NewGameBoot:eval":"true","ForceNoPlayTest:eval":"false","OpenConsole:eval":"true","F6key:eval":"true","F7key:eval":"true","NewGameCommonEvent:num":"0","BattleTest":"","BTestItems:eval":"true","BTestWeapons:eval":"true","BTestArmors:eval":"true","BTestAddedQuantity:num":"90","ShiftR_Toggle:eval":"true","ShiftT_Toggle:eval":"true","DigitGrouping":"","DigitGroupingStandardText:eval":"true","DigitGroupingExText:eval":"true","DigitGroupingDamageSprites:eval":"true","DigitGroupingGaugeSprites:eval":"true","DigitGroupingLocale:str":"en-US","PlayerBenefit":"","EncounterRateMinimum:num":"10","EscapeAlways:eval":"true","ImprovedAccuracySystem:eval":"true","AccuracyBoost:eval":"true","LevelUpFullHp:eval":"true","LevelUpFullMp:eval":"true","Pictures":"","AntiZoomPictures:eval":"true","PictureContainers":"","DetachBattlePictureContainer:eval":"false","DetachMapPictureContainer:eval":"false","Misc":"","AnimationMirrorOffset:eval":"false","AutoStretch:str":"default","FontShadows:eval":"false","FontSmoothing:eval":"true","FontWidthFix:eval":"true","KeyItemProtect:eval":"true","MapNameTextCode:eval":"true","ModernControls:eval":"true","MvAnimationRate:num":"4","NewGameCommonEventAll:num":"0","NoTileShadows:eval":"false","PixelateImageRendering:eval":"false","RequireFocus:eval":"false","ShortcutScripts:eval":"true","SmartEventCollisionPriority:eval":"true","SubfolderParse:eval":"true"}
 * 
 * @param BattleSystem:str
 * @text Battle System
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to use for your game.
 * Some battle systems REQUIRE their specific plugins!
 * @default database
 *
 * @param Color:struct
 * @text Color Settings
 * @type struct<Color>
 * @desc Change the colors used for in-game text.
 * @default {"BasicColors":"","ColorNormal:str":"0","ColorSystem:str":"16","ColorCrisis:str":"17","ColorDeath:str":"18","ColorGaugeBack:str":"19","ColorHPGauge1:str":"20","ColorHPGauge2:str":"21","ColorMPGauge1:str":"22","ColorMPGauge2:str":"23","ColorMPCost:str":"23","ColorPowerUp:str":"24","ColorPowerDown:str":"25","ColorCTGauge1:str":"26","ColorCTGauge2:str":"27","ColorTPGauge1:str":"28","ColorTPGauge2:str":"29","ColorTPCost:str":"29","ColorPending:str":"#2a847d","ColorExpGauge1:str":"30","ColorExpGauge2:str":"31","ColorMaxLvGauge1:str":"14","ColorMaxLvGauge2:str":"6","AlphaColors":"","OutlineColor:str":"rgba(0, 0, 0, 0.6)","DimColor1:str":"rgba(0, 0, 0, 0.6)","DimColor2:str":"rgba(0, 0, 0, 0)","ItemBackColor1:str":"rgba(32, 32, 32, 0.5)","ItemBackColor2:str":"rgba(0, 0, 0, 0.5)","ConditionalColors":"","ActorHPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If the actor is dead, return death color.\\n} else if (actor.isDead()) {\\n    return this.deathColor();\\n\\n// If the actor is dying, return crisis color.\\n} else if (actor.isDying()) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorMPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If MP rate is below 25%, return crisis color.\\n} else if (actor.mpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorTPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If TP rate is below 25%, return crisis color.\\n} else if (actor.tpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ParamChange:func":"\"// Set the variables used in this function.\\nlet change = arguments[0];\\n\\n// If a positive change, use power up color.\\nif (change > 0) {\\n    return this.powerUpColor();\\n\\n// If a negative change, use power down color.\\n} else if (change < 0) {\\n    return this.powerDownColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","DamageColor:func":"\"// Set the variables used in this function.\\nlet colorType = arguments[0];\\n\\n// Check the value of the color type\\n// and return an appropriate color.\\nswitch (colorType) {\\n\\n    case 0: // HP damage\\n        return \\\"#ffffff\\\";\\n\\n    case 1: // HP recover\\n        return \\\"#b9ffb5\\\";\\n\\n    case 2: // MP damage\\n        return \\\"#bb88bb\\\";\\n\\n    case 3: // MP recover\\n        return \\\"#80b0ff\\\";\\n\\n    default:\\n        return \\\"#808080\\\";\\n}\""}
 *
 * @param Gold:struct
 * @text Gold Settings
 * @type struct<Gold>
 * @desc Change up how gold operates and is displayed in-game.
 * @default {"GoldMax:num":"999999999","GoldFontSize:num":"24","GoldIcon:num":"314","GoldOverlap:str":"A Lot","ItemStyle:eval":"true"}
 *
 * @param ImgLoad:struct
 * @text Image Loading
 * @type struct<ImgLoad>
 * @desc Game images that will be loaded upon booting up the game.
 * Use this responsibly!!!
 * @default {"animations:arraystr":"[]","battlebacks1:arraystr":"[]","battlebacks2:arraystr":"[]","characters:arraystr":"[]","enemies:arraystr":"[]","faces:arraystr":"[]","parallaxes:arraystr":"[]","pictures:arraystr":"[]","sv_actors:arraystr":"[]","sv_enemies:arraystr":"[]","system:arraystr":"[\"Balloon\",\"IconSet\"]","tilesets:arraystr":"[]","titles1:arraystr":"[]","titles2:arraystr":"[]"}
 *
 * @param KeyboardInput:struct
 * @text Keyboard Input
 * @type struct<KeyboardInput>
 * @desc Settings for the game that utilize keyboard input.
 * @default {"Controls":"","WASD:eval":"false","DashToggleR:eval":"false","NameInput":"","EnableNameInput:eval":"true","DefaultMode:str":"keyboard","QwertyLayout:eval":"true","NameInputMessage:eval":"\"Type in this character's name.\\nPress \\\\c[5]ENTER\\\\c[0] when you're done.\\n\\n-or-\\n\\nPress \\\\c[5]arrow keys\\\\c[0]/\\\\c[5]TAB\\\\c[0] to switch\\nto manual character entry.\\n\\nPress \\\\c[5]ESC\\\\c[0]/\\\\c[5]TAB\\\\c[0] to use to keyboard.\"","NumberInput":"","EnableNumberInput:eval":"true","ButtonAssist":"","Keyboard:str":"Keyboard","Manual:str":"Manual"}
 *
 * @param MenuBg:struct
 * @text Menu Background Settings
 * @type struct<MenuBg>
 * @desc Change how menu backgrounds look for each scene.
 * @default {"Scene_Menu:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Item:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Skill:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Equip:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Status:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Options:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Save:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Load:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_GameEnd:struct":"{\"SnapshotOpacity:num\":\"128\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Shop:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Name:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Unlisted:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}"}
 *
 * @param ButtonAssist:struct
 * @text Menu Button Assist Window
 * @type struct<ButtonAssist>
 * @desc Settings pertaining to the Button Assist window found in in-game menus.
 * @default {"General":"","Enable:eval":"true","Location:str":"bottom","BgType:num":"0","Text":"","TextFmt:str":"%1:%2","MultiKeyFmt:str":"%1/%2","OkText:str":"Select","CancelText:str":"Back","SwitchActorText:str":"Switch Ally","Keys":"","KeyUnlisted:str":"\\}❪%1❫\\{","KeyUP:str":"^","KeyDOWN:str":"v","KeyLEFT:str":"<<","KeyRIGHT:str":">>","KeySHIFT:str":"\\}❪SHIFT❫\\{","KeyTAB:str":"\\}❪TAB❫\\{","KeyA:str":"A","KeyB:str":"B","KeyC:str":"C","KeyD:str":"D","KeyE:str":"E","KeyF:str":"F","KeyG:str":"G","KeyH:str":"H","KeyI:str":"I","KeyJ:str":"J","KeyK:str":"K","KeyL:str":"L","KeyM:str":"M","KeyN:str":"N","KeyO:str":"O","KeyP:str":"P","KeyQ:str":"Q","KeyR:str":"R","KeyS:str":"S","KeyT:str":"T","KeyU:str":"U","KeyV:str":"V","KeyW:str":"W","KeyX:str":"X","KeyY:str":"Y","KeyZ:str":"Z"}
 *
 * @param ControllerButtons:arraystruct
 * @text Controller Button Assist
 * @parent ButtonAssist:struct
 * @type struct<ControllerButtons>[]
 * @desc Make different icons appear for the Button Assist window when using different controllers.
 * @default []
 *
 * @param MenuLayout:struct
 * @text Menu Layout Settings
 * @type struct<MenuLayout>
 * @desc Change how menu layouts look for each scene.
 * @default {"Title:struct":"{\"TitleScreen\":\"\",\"DocumentTitleFmt:str\":\"%1: %2 - Version %3\",\"Subtitle:str\":\"Subtitle\",\"Version:str\":\"0.00\",\"drawGameTitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = $dataSystem.gameTitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 8;\\\\nbitmap.fontSize = 72;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameSubtitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4 + 72;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = Scene_Title.subtitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 6;\\\\nbitmap.fontSize = 48;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameVersion:func\":\"\\\"const bitmap = this._gameTitleSprite.bitmap;\\\\nconst x = 0;\\\\nconst y = Graphics.height - 20;\\\\nconst width = Math.round(Graphics.width / 4);\\\\nconst height = 20;\\\\nconst c1 = ColorManager.dimColor1();\\\\nconst c2 = ColorManager.dimColor2();\\\\nconst text = 'Version ' + Scene_Title.version;\\\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 3;\\\\nbitmap.fontSize = 16;\\\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\\\\\"left\\\\\\\");\\\"\",\"CommandRect:func\":\"\\\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\\\nconst rows = this.commandWindowRows();\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ButtonFadeSpeed:num\":\"4\"}","MainMenu:struct":"{\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const width = this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight();\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ItemMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaBottom() - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SkillMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SkillTypeWindow\":\"\",\"SkillTypeBgType:num\":\"0\",\"SkillTypeRect:func\":\"\\\"const rows = 3;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this._skillTypeWindow.height;\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._statusWindow.y + this._statusWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","EquipMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = this.statusWidth();\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = this.statusWidth();\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SlotWindow\":\"\",\"SlotBgType:num\":\"0\",\"SlotRect:func\":\"\\\"const commandWindowRect = this.commandWindowRect();\\\\nconst x = this.statusWidth();\\\\nconst y = commandWindowRect.y + commandWindowRect.height;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"return this.slotWindowRect();\\\"\"}","StatusMenu:struct":"{\"ProfileWindow\":\"\",\"ProfileBgType:num\":\"0\",\"ProfileRect:func\":\"\\\"const width = Graphics.boxWidth;\\\\nconst height = this.profileHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.statusParamsWindowRect().y - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusParamsWindow\":\"\",\"StatusParamsBgType:num\":\"0\",\"StatusParamsRect:func\":\"\\\"const width = this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusEquipWindow\":\"\",\"StatusEquipBgType:num\":\"0\",\"StatusEquipRect:func\":\"\\\"const width = Graphics.boxWidth - this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = this.statusParamsWidth();\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","OptionsMenu:struct":"{\"OptionsWindow\":\"\",\"OptionsBgType:num\":\"0\",\"OptionsRect:func\":\"\\\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\\\nconst width = 400;\\\\nconst height = this.calcWindowHeight(n, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SaveMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","LoadMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","GameEnd:struct":"{\"CommandList:arraystruct\":\"[\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"toTitle\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.toTitle;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"cancel\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.cancel;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.popScene();\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const rows = 2;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ShopMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const wx = 0;\\\\nconst wy = this.helpAreaTop();\\\\nconst ww = Graphics.boxWidth;\\\\nconst wh = this.helpAreaHeight();\\\\nreturn new Rectangle(wx, wy, ww, wh);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = this._goldWindow.x;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"DummyWindow\":\"\",\"DummyBgType:num\":\"0\",\"DummyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._commandWindow.y + this._commandWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"NumberWindow\":\"\",\"NumberBgType:num\":\"0\",\"NumberRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this._dummyWindow.y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"BuyWindow\":\"\",\"BuyBgType:num\":\"0\",\"BuyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SellWindow\":\"\",\"SellBgType:num\":\"0\",\"SellRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height =\\\\n    this.mainAreaHeight() -\\\\n    this._commandWindow.height -\\\\n    this._categoryWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","NameMenu:struct":"{\"EditWindow\":\"\",\"EditBgType:num\":\"0\",\"EditRect:func\":\"\\\"const rows = 9;\\\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\\\nconst padding = $gameSystem.windowPadding();\\\\nconst width = 600;\\\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"InputWindow\":\"\",\"InputBgType:num\":\"0\",\"InputRect:func\":\"\\\"const x = this._editWindow.x;\\\\nconst y = this._editWindow.y + this._editWindow.height;\\\\nconst rows = 9;\\\\nconst width = this._editWindow.width;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}"}
 *
 * @param Param:struct
 * @text Parameter Settings
 * @type struct<Param>
 * @desc Change up the limits of parameters and how they're calculated.
 * @default {"DisplayedParams:arraystr":"[\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","ExtDisplayedParams:arraystr":"[\"MaxHP\",\"MaxMP\",\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","BasicParameters":"","CrisisRate:num":"0.25","BasicParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet paramId = arguments[0];\\nlet base = this.paramBase(paramId);\\nlet plus = this.paramPlus(paramId);\\nlet paramRate = this.paramRate(paramId);\\nlet buffRate = this.paramBuffRate(paramId);\\nlet flatBonus = this.paramFlatBonus(paramId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\\n\\n// Determine the limits\\nconst maxValue = this.paramMax(paramId);\\nconst minValue = this.paramMin(paramId);\\n\\n// Final value\\nreturn Math.round(value.clamp(minValue, maxValue));\"","BasicParamCaps":"","BasicActorParamCaps":"","BasicActorParamMax0:str":"9999","BasicActorParamMax1:str":"9999","BasicActorParamMax2:str":"999","BasicActorParamMax3:str":"999","BasicActorParamMax4:str":"999","BasicActorParamMax5:str":"999","BasicActorParamMax6:str":"999","BasicActorParamMax7:str":"999","BasicEnemyParamCaps":"","BasicEnemyParamMax0:str":"999999","BasicEnemyParamMax1:str":"9999","BasicEnemyParamMax2:str":"999","BasicEnemyParamMax3:str":"999","BasicEnemyParamMax4:str":"999","BasicEnemyParamMax5:str":"999","BasicEnemyParamMax6:str":"999","BasicEnemyParamMax7:str":"999","XParameters":"","XParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet xparamId = arguments[0];\\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\\nlet plus = this.xparamPlus(xparamId);\\nlet paramRate = this.xparamRate(xparamId);\\nlet flatBonus = this.xparamFlatBonus(xparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","XParamVocab":"","XParamVocab0:str":"Hit","XParamVocab1:str":"Evasion","XParamVocab2:str":"Critical Rate","XParamVocab3:str":"Critical Evade","XParamVocab4:str":"Magic Evade","XParamVocab5:str":"Magic Reflect","XParamVocab6:str":"Counter","XParamVocab7:str":"HP Regen","XParamVocab8:str":"MP Regen","XParamVocab9:str":"TP Regen","SParameters":"","SParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet sparamId = arguments[0];\\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\\nlet plus = this.sparamPlus(sparamId);\\nlet paramRate = this.sparamRate(sparamId);\\nlet flatBonus = this.sparamFlatBonus(sparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","SParamVocab":"","SParamVocab0:str":"Aggro","SParamVocab1:str":"Guard","SParamVocab2:str":"Recovery","SParamVocab3:str":"Item Effect","SParamVocab4:str":"MP Cost","SParamVocab5:str":"TP Charge","SParamVocab6:str":"Physical DMG","SParamVocab7:str":"Magical DMG","SParamVocab8:str":"Floor DMG","SParamVocab9:str":"EXP Gain","Icons":"","DrawIcons:eval":"true","IconParam0:str":"84","IconParam1:str":"165","IconParam2:str":"76","IconParam3:str":"81","IconParam4:str":"101","IconParam5:str":"133","IconParam6:str":"140","IconParam7:str":"87","IconXParam0:str":"102","IconXParam1:str":"82","IconXParam2:str":"78","IconXParam3:str":"82","IconXParam4:str":"171","IconXParam5:str":"222","IconXParam6:str":"77","IconXParam7:str":"72","IconXParam8:str":"72","IconXParam9:str":"72","IconSParam0:str":"5","IconSParam1:str":"128","IconSParam2:str":"72","IconSParam3:str":"176","IconSParam4:str":"165","IconSParam5:str":"164","IconSParam6:str":"76","IconSParam7:str":"79","IconSParam8:str":"141","IconSParam9:str":"73"}
 *
 * @param CustomParam:arraystruct
 * @text Custom Parameters
 * @parent Param:struct
 * @type struct<CustomParam>[]
 * @desc Create custom parameters for your game!
 * These will appear in VisuStella MZ menus.
 * @default ["{\"ParamName:str\":\"Strength\",\"Abbreviation:str\":\"str\",\"Icon:num\":\"77\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.atk * 0.75) + (user.def * 0.25);\\\"\"}","{\"ParamName:str\":\"Dexterity\",\"Abbreviation:str\":\"dex\",\"Icon:num\":\"82\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.agi * 0.75) + (user.atk * 0.25);\\\"\"}","{\"ParamName:str\":\"Constitution\",\"Abbreviation:str\":\"con\",\"Icon:num\":\"81\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.def * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Intelligence\",\"Abbreviation:str\":\"int\",\"Icon:num\":\"79\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mat * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Wisdom\",\"Abbreviation:str\":\"wis\",\"Icon:num\":\"72\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mdf * 0.75) + (user.luk * 0.25);\\\"\"}","{\"ParamName:str\":\"Charisma\",\"Abbreviation:str\":\"cha\",\"Icon:num\":\"84\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.luk * 0.75) + (user.agi * 0.25);\\\"\"}"]
 *
 * @param ScreenResolution:struct
 * @text Screen Resolution Settings
 * @type struct<ScreenResolution>
 * @desc Alter various properties to make the game look better for varying screen resolutions.
 * @default {"Maps":"","AutoScrollLockX:eval":"true","AutoScrollLockY:eval":"true","DisplayLockX:num":"0.15625","DisplayLockY:num":"0.00000","Troops":"","RepositionActors:eval":"true","RepositionEnemies:eval":"true","RepositionEnemies130:eval":"false"}
 *
 * @param ScreenShake:struct
 * @text Screen Shake Settings
 * @type struct<ScreenShake>
 * @desc Get more screen shake effects into your game!
 * @default {"DefaultStyle:str":"random","originalJS:func":"\"// Calculation\\nthis.x += Math.round($gameScreen.shake());\"","randomJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","horzJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","vertJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\""}
 *
 * @param TitleCommandList:arraystruct
 * @text Title Command List
 * @type struct<Command>[]
 * @desc Window commands used by the title screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"newGame\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.newGame;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandNewGame();\\\"\"}","{\"Symbol:str\":\"continue\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.continue_;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandContinue();\\\"\"}","{\"Symbol:str\":\"options\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\"}","{\"Symbol:str\":\"shutdown\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return Utils.isNwjs();\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager.exit();\\\\n\\\\n// Note!\\\\n// Do NOT use this command with mobile devices or\\\\n// browser games. All it does is cause the game to\\\\n// display a blank, black canvas which the player\\\\n// is unable to do anything with. It does NOT force\\\\n// close the browser tab nor the app.\\\"\"}"]
 *
 * @param TitlePicButtons:arraystruct
 * @text Title Picture Buttons
 * @type struct<TitlePictureButton>[]
 * @desc Buttons that can be inserted into the title screen.
 * Add new title buttons here.
 * @default []
 *
 * @param UI:struct
 * @text UI Settings
 * @type struct<UI>
 * @desc Change up various in-game UI aspects.
 * @default {"UIArea":"","FadeSpeed:num":"24","BoxMargin:num":"4","CommandWidth:num":"240","BottomHelp:eval":"false","RightMenus:eval":"true","ShowButtons:eval":"true","cancelShowButton:eval":"true","menuShowButton:eval":"true","pagedownShowButton:eval":"true","numberShowButton:eval":"true","ButtonHeight:num":"52","BottomButtons:eval":"false","SideButtons:eval":"true","MenuObjects":"","LvExpGauge:eval":"true","ParamArrow:str":"→","TextCodeSupport":"","TextCodeClassNames:eval":"true","TextCodeNicknames:eval":"true"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Adjust various in-game window settings.
 * @default {"WindowDefaults":"","EnableMasking:eval":"false","LineHeight:num":"36","ItemPadding:num":"8","BackOpacity:num":"192","TranslucentOpacity:num":"160","OpenSpeed:num":"32","ColSpacing:num":"8","RowSpacing:num":"4","ScrollBar":"","ShowScrollBar:eval":"true","BarThickness:num":"2","BarOffset:num":"+2","BarBodyColor:str":"0","OffBarColor:str":"7","OffBarOpacity:num":"128","SelectableItems":"","ShowItemBackground:eval":"true","ItemHeight:num":"8","DrawItemBackgroundJS:func":"\"const rect = arguments[0];\\nconst c1 = ColorManager.itemBackColor1();\\nconst c2 = ColorManager.itemBackColor2();\\nconst x = rect.x;\\nconst y = rect.y;\\nconst w = rect.width;\\nconst h = rect.height;\\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\\nthis.contentsBack.strokeRect(x, y, w, h, c1);\"","TextPopup":"","DurationPerChat:num":"1.5","MinDuration:num":"90","MaxDuration:num":"300"}
 *
 * @param jsQuickFunc:arraystruct
 * @text JS: Quick Functions
 * @type struct<jsQuickFunc>[]
 * @desc Create quick JavaScript functions available from the
 * global namespace. Use with caution and moderation!!!
 * @default ["{\"FunctionName:str\":\"Example\",\"CodeJS:json\":\"\\\"// Insert this as a function anywhere you can input code\\\\n// such as Script Calls or Conditional Branch Scripts.\\\\n\\\\n// Process Code\\\\nreturn 'Example';\\\"\"}","{\"FunctionName:str\":\"Bad  Code  Name\",\"CodeJS:json\":\"\\\"// If a function name has spaces in them, the spaces will\\\\n// be removed. \\\\\\\"Bad  Code  Name\\\\\\\" becomes \\\\\\\"BadCodeName\\\\\\\".\\\\n\\\\n// Process Code\\\\nOhNoItsBadCode()\\\\n\\\\n// If a function has bad code, a fail safe will catch the\\\\n// error and display it in the console.\\\"\"}","{\"FunctionName:str\":\"RandomNumber\",\"CodeJS:json\":\"\\\"// This generates a random number from 0 to itself.\\\\n// Example: RandomNumber(10)\\\\n\\\\n// Process Code\\\\nconst number = (arguments[0] || 0) + 1;\\\\nreturn Math.floor(number * Math.random());\\\"\"}","{\"FunctionName:str\":\"RandomBetween\",\"CodeJS:json\":\"\\\"// This generates a random number between two arguments.\\\\n// Example: RandomBetween(5, 10)\\\\n\\\\n// Process Code\\\\nlet min = Math.min(arguments[0] || 0, arguments[1] || 0);\\\\nlet max = Math.max(arguments[0] || 0, arguments[1] || 0);\\\\nreturn Math.floor(Math.random() * (max - min + 1) + min);\\\"\"}","{\"FunctionName:str\":\"RandomFrom\",\"CodeJS:json\":\"\\\"// Selects a number from the list of inserted numbers.\\\\n// Example: RandomFrom(5, 10, 15, 20)\\\\n\\\\n// Process Code\\\\nreturn arguments[Math.randomInt(arguments.length)];\\\"\"}"]
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
 * Quality of Life Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~QoLSettings:
 *
 * @param PlayTest
 * @text Play Test
 *
 * @param NewGameBoot:eval
 * @text New Game on Boot
 * @parent PlayTest
 * @type boolean
 * @on Start New Game
 * @off Keep Title Screen
 * @desc Automatically start a new game on Play Test?
 * Only enabled during Play Test.
 * @default false
 *
 * @param ForceNoPlayTest:eval
 * @text No Play Test Mode
 * @parent PlayTest
 * @type boolean
 * @on Cancel Play Test
 * @off Keep Play Test
 * @desc Force the game to be out of Play Test mode when play testing.
 * @default false
 *
 * @param OpenConsole:eval
 * @text Open Console on Boot
 * @parent PlayTest
 * @type boolean
 * @on Open
 * @off Don't Open
 * @desc Open the Debug Console upon booting up your game?
 * Only enabled during Play Test.
 * @default true
 *
 * @param F6key:eval
 * @text F6: Toggle Sound
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F6 Key Function: Turn on all sound to 100% or to 0%,
 * toggling between the two.
 * @default true
 *
 * @param F7key:eval
 * @text F7: Toggle Fast Mode
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F7 Key Function: Toggle fast mode.
 * @default true
 *
 * @param CtrlQuickLoad:eval
 * @text CTRL + n: Quick Load
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc CTRL + a number from 1 to 9 will yield a quick load of
 * that safe file. Does not count auto saves.
 * @default true
 *
 * @param NewGameCommonEvent:num
 * @text NewGame > CommonEvent
 * @parent PlayTest
 * @type common_event
 * @desc Runs a common event each time a new game during play test
 * session is started.
 * @default 0
 *
 * @param BattleTest
 * @text Battle Test
 *
 * @param BTestItems:eval
 * @text Add Item Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database item?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestWeapons:eval
 * @text Add Weapon Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database weapon?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestArmors:eval
 * @text Add Armor Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database armor?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestAddedQuantity:num
 * @text Added Quantity
 * @parent BattleTest
 * @type number
 * @min 1
 * @desc Determines how many items are added during a battle test instead of the maximum amount.
 * @default 90
 *
 * @param ShiftR_Toggle:eval
 * @text Shift+R: Recover All
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + R will refill the whole party's HP and MP and status.
 * @default true
 *
 * @param ShiftT_Toggle:eval
 * @text Shift+T: Full TP
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + T will refill the whole party's TP.
 * @default true
 *
 * @param DigitGrouping
 * @text Digit Grouping
 *
 * @param DigitGroupingStandardText:eval
 * @text Standard Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * standard text inside windows?
 * @default true
 *
 * @param DigitGroupingExText:eval
 * @text Ex Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * ex text, written through drawTextEx (like messages)?
 * @default true
 *
 * @param DigitGroupingDamageSprites:eval
 * @text Damage Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * in-battle damage sprites?
 * @default true
 *
 * @param DigitGroupingGaugeSprites:eval
 * @text Gauge Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * visible gauge sprites such as HP, MP, and TP gauges?
 * @default true
 *
 * @param DigitGroupingLocale:str
 * @text Country/Locale
 * @parent DigitGrouping
 * @type combo
 * @option ar-SA
 * @option bn-BD
 * @option bn-IN
 * @option cs-CZ
 * @option da-DK
 * @option de-AT
 * @option de-CH
 * @option de-DE
 * @option el-GR
 * @option en-AU
 * @option en-CA
 * @option en-GB
 * @option en-IE
 * @option en-IN
 * @option en-NZ
 * @option en-US
 * @option en-ZA
 * @option es-AR
 * @option es-CL
 * @option es-CO
 * @option es-ES
 * @option es-MX
 * @option es-US
 * @option fi-FI
 * @option fr-BE
 * @option fr-CA
 * @option fr-CH
 * @option fr-FR
 * @option he-IL
 * @option hi-IN
 * @option hu-HU
 * @option id-ID
 * @option it-CH
 * @option it-IT
 * @option jp-JP
 * @option ko-KR
 * @option nl-BE
 * @option nl-NL
 * @option no-NO
 * @option pl-PL
 * @option pt-BR
 * @option pt-PT
 * @option ro-RO
 * @option ru-RU
 * @option sk-SK
 * @option sv-SE
 * @option ta-IN
 * @option ta-LK
 * @option th-TH
 * @option tr-TR
 * @option zh-CN
 * @option zh-HK
 * @option zh-TW
 * @desc Base the digit grouping on which country/locale?
 * @default en-US
 *
 * @param PlayerBenefit
 * @text Player Benefit
 *
 * @param EncounterRateMinimum:num
 * @text Encounter Rate Min
 * @parent PlayerBenefit
 * @min 1
 * @desc Minimum number of steps the player can take without any random encounters.
 * @default 10
 *
 * @param EscapeAlways:eval
 * @text Escape Always
 * @parent PlayerBenefit
 * @type boolean
 * @on Always
 * @off Default
 * @desc If the player wants to escape a battle, let them escape the battle with 100% chance.
 * @default true
 *
 * @param ImprovedAccuracySystem:eval
 * @text Accuracy Formula
 * @parent PlayerBenefit
 * @type boolean
 * @on Improve
 * @off Default
 * @desc Accuracy formula calculation change to
 * Skill Hit% * (User HIT - Target EVA) for better results.
 * @default true
 *
 * @param AccuracyBoost:eval
 * @text Accuracy Boost
 * @parent PlayerBenefit
 * @type boolean
 * @on Boost
 * @off Default
 * @desc Boost HIT and EVA rates in favor of the player.
 * @default true
 *
 * @param LevelUpFullHp:eval
 * @text Level Up -> Full HP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full HP when an actor levels up.
 * @default true
 *
 * @param LevelUpFullMp:eval
 * @text Level Up -> Full MP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full MP when an actor levels up.
 * @default true
 *
 * @param Pictures
 * @text Picture-Related
 *
 * @param AntiZoomPictures:eval
 * @text Anti-Zoom Pictures
 * @parent Pictures
 * @type boolean
 * @on Anti-Zoom
 * @off Normal
 * @desc If on, prevents pictures from being affected by zoom.
 * @default true
 * 
 * @param PictureContainers
 * @text Picture Containers
 * @parent Pictures
 *
 * @param DetachBattlePictureContainer:eval
 * @text Detach in Battle
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the battle scene.
 * @default false
 *
 * @param DetachMapPictureContainer:eval
 * @text Detach in Map
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the map scene.
 * @default false
 *
 * @param Misc
 * @text Misc
 *
 * @param AnimationMirrorOffset:eval
 * @text Ani: Mirror Offset
 * @parent Misc
 * @type boolean
 * @on Mirror
 * @off Don't Mirror
 * @desc When animations are mirrored,
 * mirror their Offset X values, too.
 * @default false
 *
 * @param AutoStretch:str
 * @text Auto-Stretch
 * @parent Misc
 * @type select
 * @option Default
 * @value default
 * @option Stretch
 * @value stretch
 * @option Normal
 * @value normal
 * @desc Automatically stretch the game to fit the size of the client?
 * @default default
 *
 * @param FontShadows:eval
 * @text Font Shadows
 * @parent Misc
 * @type boolean
 * @on Shadows
 * @off Outlines
 * @desc If on, text uses shadows instead of outlines.
 * @default false
 *
 * @param FontSmoothing:eval
 * @text Font Smoothing
 * @parent Misc
 * @type boolean
 * @on Smooth
 * @off None
 * @desc If on, smoothes fonts shown in-game.
 * @default true
 *
 * @param FontWidthFix:eval
 * @text Font Width Fix
 * @parent Misc
 * @type boolean
 * @on Fix
 * @off Default
 * @desc Fixes the font width issue with instant display
 * non-monospaced fonts in the Message Window.
 * @default true
 *
 * @param KeyItemProtect:eval
 * @text Key Item Protection
 * @parent Misc
 * @type boolean
 * @on Unsellable
 * @off Sellable
 * @desc If on, prevents Key Items from being able to be sold and from being able to be consumed.
 * @default true
 *
 * @param MapNameTextCode:eval
 * @text Map Name Text Code
 * @parent Misc
 * @type boolean
 * @on Text Codes
 * @off Raw Text
 * @desc If on, map names will use text codes.
 * If off, only the raw map name will be used.
 * @default true
 *
 * @param ModernControls:eval
 * @text Modern Controls
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Default
 * @desc If on, allows usage of the Home/End buttons as well as other modern configs. Affects other VisuStella plugins.
 * @default true
 *
 * @param MvAnimationRate:num
 * @text MV Animation Rate
 * @parent Misc
 * @min 1
 * @max 10
 * @desc Adjusts the rate at which MV animations play.
 * Default: 4. Lower for faster. Higher for slower.
 * @default 4
 *
 * @param NewGameCommonEventAll:num
 * @text NewGame > CommonEvent
 * @parent Misc
 * @type common_event
 * @desc Runs a common event each time a new game during any session is started.
 * @default 0
 *
 * @param NoTileShadows:eval
 * @text No Tile Shadows
 * @parent Misc
 * @type boolean
 * @on Disable Tile Shadows
 * @off Default
 * @desc Removes tile shadows from being displayed in-game.
 * @default false
 *
 * @param PixelateImageRendering:eval
 * @text Pixel Image Rendering
 * @parent Misc
 * @type boolean
 * @on Pixelate
 * @off Smooth
 * @desc If on, pixelates the image rendering (for pixel games).
 * @default false
 *
 * @param RequireFocus:eval
 * @text Require Focus?
 * @parent Misc
 * @type boolean
 * @on Require
 * @off No Requirement
 * @desc Requires the game to be focused? If the game isn't
 * focused, it will pause if it's not the active window.
 * @default true
 *
 * @param ShortcutScripts:eval
 * @text Shortcut Scripts
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables shortcut-based scripts.
 * View the helpfile for more information.
 * @default true
 *
 * @param SmartEventCollisionPriority:eval
 * @text Smart Event Collision
 * @parent Misc
 * @type boolean
 * @on Only Same Level
 * @off Default
 * @desc Makes events only able to collide with one another if they're 'Same as characters' priority.
 * @default true
 *
 * @param SubfolderParse:eval
 * @text Subfolder Name Purge
 * @parent Misc
 * @type boolean
 * @on Purge Subfolders Names
 * @off Don't Purge Name
 * @desc Purge subfolder name from Plugin Parameters when reading
 * data to let Plugin Commands work properly.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Color:
 *
 * @param BasicColors
 * @text Basic Colors
 *
 * @param ColorNormal:str
 * @text Normal
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorSystem:str
 * @text System
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 16
 *
 * @param ColorCrisis:str
 * @text Crisis
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param ColorDeath:str
 * @text Death
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param ColorGaugeBack:str
 * @text Gauge Back
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param ColorHPGauge1:str
 * @text HP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 20
 *
 * @param ColorHPGauge2:str
 * @text HP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 21
 *
 * @param ColorMPGauge1:str
 * @text MP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 22
 *
 * @param ColorMPGauge2:str
 * @text MP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorMPCost:str
 * @text MP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorPowerUp:str
 * @text Power Up
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorPowerDown:str
 * @text Power Down
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 25
 *
 * @param ColorCTGauge1:str
 * @text CT Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param ColorCTGauge2:str
 * @text CT Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param ColorTPGauge1:str
 * @text TP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 28
 *
 * @param ColorTPGauge2:str
 * @text TP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorTPCost:str
 * @text TP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorPending:str
 * @text Pending Color
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #2a847d
 *
 * @param ColorExpGauge1:str
 * @text EXP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 30
 *
 * @param ColorExpGauge2:str
 * @text EXP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 31
 *
 * @param ColorMaxLvGauge1:str
 * @text MaxLv Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 * @param ColorMaxLvGauge2:str
 * @text MaxLv Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param AlphaColors
 * @text Alpha Colors
 *
 * @param OutlineColor:str
 * @text Window Font Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param OutlineColorGauge:str
 * @text Gauge Number Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1.0)
 *
 * @param DimColor1:str
 * @text Dim Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param DimColor2:str
 * @text Dim Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0)
 *
 * @param ItemBackColor1:str
 * @text Item Back Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(32, 32, 32, 0.5)
 *
 * @param ItemBackColor2:str
 * @text Item Back Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param ConditionalColors
 * @text Conditional Colors
 *
 * @param ActorHPColor:func
 * @text JS: Actor HP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what HP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If the actor is dead, return death color.\n} else if (actor.isDead()) {\n    return this.deathColor();\n\n// If the actor is dying, return crisis color.\n} else if (actor.isDying()) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorMPColor:func
 * @text JS: Actor MP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what MP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If MP rate is below 25%, return crisis color.\n} else if (actor.mpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorTPColor:func
 * @text JS: Actor TP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what TP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If TP rate is below 25%, return crisis color.\n} else if (actor.tpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ParamChange:func
 * @text JS: Parameter Change
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining whatcolor to use for parameter changes.
 * @default "// Set the variables used in this function.\nlet change = arguments[0];\n\n// If a positive change, use power up color.\nif (change > 0) {\n    return this.powerUpColor();\n\n// If a negative change, use power down color.\n} else if (change < 0) {\n    return this.powerDownColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param DamageColor:func
 * @text JS: Damage Colors
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what color to use for damage types.
 * @default "// Set the variables used in this function.\nlet colorType = arguments[0];\n\n// Check the value of the color type\n// and return an appropriate color.\nswitch (colorType) {\n\n    case 0: // HP damage\n        return \"#ffffff\";\n\n    case 1: // HP recover\n        return \"#b9ffb5\";\n\n    case 2: // MP damage\n        return \"#bb88bb\";\n\n    case 3: // MP recover\n        return \"#80b0ff\";\n\n    default:\n        return \"#808080\";\n}"
 */
/* ----------------------------------------------------------------------------
 * Gold Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gold:
 *
 * @param GoldMax:num
 * @text Gold Max
 * @type num
 * @min 1
 * @desc Maximum amount of Gold the party can hold.
 * Default 99999999
 * @default 99999999
 *
 * @param GoldFontSize:num
 * @text Gold Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside Gold Windows.
 * Default: 26
 * @default 24
 *
 * @param GoldIcon:num
 * @text Gold Icon
 * @desc Icon used to represent Gold.
 * Use 0 for no icon.
 * @default 314
 *
 * @param GoldOverlap:str
 * @text Gold Overlap
 * @desc Text used too much Gold to fit in the window.
 * @default A Lot
 *
 * @param ItemStyle:eval
 * @text Item Style
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Draw gold in the item style?
 * ie: Icon, Label, Value
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Image Loading Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ImgLoad:
 *
 * @param animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default ["Balloon","IconSet"]
 *
 * @param tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Keyboard Input Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~KeyboardInput:
 *
 * @param Controls
 *
 * @param WASD:eval
 * @text WASD Movement
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables WASD movement for your game project.
 * Moves the W page down button to E.
 * @default false
 *
 * @param DashToggleR:eval
 * @text R Button: Dash Toggle
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables R button as an Always Dash option toggle.
 * @default false
 *
 * @param NameInput
 * @text Name Input
 *
 * @param EnableNameInput:eval
 * @text Enable?
 * @parent NameInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for name entry.
 * Only tested with English keyboards.
 * @default true
 * 
 * @param DefaultMode:str
 * @text Default Mode
 * @parent NameInput
 * @type select
 * @option Default - Uses Arrow Keys to select letters.
 * @value default
 * @option Keyboard - Uses Keyboard to type in letters.
 * @value keyboard
 * @desc Select default mode when entering the scene.
 * @default keyboard
 *
 * @param QwertyLayout:eval
 * @text QWERTY Layout
 * @parent NameInput
 * @type boolean
 * @on QWERTY Layout
 * @off ABCDEF Layout
 * @desc Uses the QWERTY layout for manual entry.
 * @default true
 *
 * @param NameInputMessage:eval
 * @text Keyboard Message
 * @parent NameInput
 * @type note
 * @desc The message displayed when allowing keyboard entry.
 * You may use text codes here.
 * @default "Type in this character's name.\nPress \\c[5]ENTER\\c[0] when you're done.\n\n-or-\n\nPress \\c[5]arrow keys\\c[0]/\\c[5]TAB\\c[0] to switch\nto manual character entry.\n\nPress \\c[5]ESC\\c[0]/\\c[5]TAB\\c[0] to use to keyboard."
 * 
 * @param BannedWords:arraystr
 * @text Banned Words
 * @parent NameInput
 * @type string[]
 * @desc Players cannot use these words for names.
 * These include words inside the names.
 * @default []
 *
 * @param NumberInput
 * @text Number Input
 *
 * @param EnableNumberInput:eval
 * @text Enable?
 * @parent NumberInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for number entry.
 * Only tested with English keyboards.
 * @default true
 *
 * @param ButtonAssist
 * @text Button Assist
 * 
 * @param Finish:str
 * @text Finish Entry
 * @parent ButtonAssist
 * @desc Text used to describe finish entry.
 * @default Finish
 * 
 * @param PageChange:str
 * @text Page Change
 * @parent ButtonAssist
 * @desc Text used to describe character page changing.
 * @default Page
 * 
 * @param Keyboard:str
 * @text Switch To Keyboard
 * @parent ButtonAssist
 * @desc Text used to describe the keyboard switch.
 * @default Keyboard
 * 
 * @param Manual:str
 * @text Switch To Manual
 * @parent ButtonAssist
 * @desc Text used to describe the manual entry switch.
 * @default Manual
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuBg:
 * 
 * @param BlurStrength:num
 * @text Blur Strength
 * @desc Strength used for menu background snapshots.
 * Default: 8. Higher is stronger. Lower is weaker.
 * @default 8
 *
 * @param Scene_Menu:struct
 * @text Scene_Menu
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Item:struct
 * @text Scene_Item
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Skill:struct
 * @text Scene_Skill
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Equip:struct
 * @text Scene_Equip
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Status:struct
 * @text Scene_Status
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Options:struct
 * @text Scene_Options
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Save:struct
 * @text Scene_Save
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Load:struct
 * @text Scene_Load
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_GameEnd:struct
 * @text Scene_GameEnd
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"128","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Shop:struct
 * @text Scene_Shop
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Name:struct
 * @text Scene_Name
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Unlisted:struct
 * @text Scene_Unlisted
 * @type struct<BgSettings>
 * @desc The individual background settings for any scenes that aren't listed here.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
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
 * Menu Button Assist Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ButtonAssist:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Enable the Menu Button Assist Window.
 * @default true
 *
 * @param Location:str
 * @text Location
 * @parent General
 * @type select
 * @option Top of Screen
 * @value top
 * @option Bottom of Screen
 * @value bottom
 * @desc Determine the location of the Button Assist Window.
 * Requires Plugin Parameters => UI => Side Buttons ON.
 * @default bottom
 *
 * @param BgType:num
 * @text Background Type
 * @parent General
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
 * @param SplitEscape:eval
 * @text Split "Escape"
 * @parent General
 * @type boolean
 * @on Split
 * @off Don't
 * @desc "Split" makes separate instances of "Cancel" and "Menu".
 * "Don't" will consolidate both into "Escape".
 * @default false
 *
 * @param Text
 *
 * @param TextFmt:str
 * @text Text Format
 * @parent Text
 * @desc Format on how the buttons are displayed.
 * Text codes allowed. %1 - Key, %2 - Text
 * @default %1:%2
 *
 * @param MultiKeyFmt:str
 * @text Multi-Key Format
 * @parent Text
 * @desc Format for actions with multiple keys.
 * Text codes allowed. %1 - Key 1, %2 - Key 2
 * @default %1/%2
 *
 * @param OkText:str
 * @text OK Text
 * @parent Text
 * @desc Default text used to display OK Key Action.
 * Text codes allowed.
 * @default Select
 *
 * @param CancelText:str
 * @text Cancel Text
 * @parent Text
 * @desc Default text used to display Cancel Key Action.
 * Text codes allowed.
 * @default Back
 *
 * @param SwitchActorText:str
 * @text Switch Actor Text
 * @parent Text
 * @desc Default text used to display Switch Actor Action.
 * Text codes allowed.
 * @default Switch Ally
 *
 * @param Keys
 *
 * @param KeyUnlisted:str
 * @text Key: Unlisted Format
 * @parent Keys
 * @desc If a key is not listed below, use this format.
 * Text codes allowed. %1 - Key
 * @default \}❪%1❫\{
 *
 * @param KeyUP:str
 * @text Key: Up
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default ^
 *
 * @param KeyDOWN:str
 * @text Key: Down
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default v
 *
 * @param KeyLEFT:str
 * @text Key: Left
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default <<
 *
 * @param KeyRIGHT:str
 * @text Key: Right
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default >>
 *
 * @param KeySHIFT:str
 * @text Key: Shift
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪SHIFT❫\{
 *
 * @param KeyTAB:str
 * @text Key: Tab
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪TAB❫\{
 *
 * @param KeyA:str
 * @text Key: A
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default A
 *
 * @param KeyB:str
 * @text Key: B
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default B
 *
 * @param KeyC:str
 * @text Key: C
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default C
 *
 * @param KeyD:str
 * @text Key: D
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default D
 *
 * @param KeyE:str
 * @text Key: E
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default E
 *
 * @param KeyF:str
 * @text Key: F
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default F
 *
 * @param KeyG:str
 * @text Key: G
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default G
 *
 * @param KeyH:str
 * @text Key: H
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default H
 *
 * @param KeyI:str
 * @text Key: I
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default I
 *
 * @param KeyJ:str
 * @text Key: J
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default J
 *
 * @param KeyK:str
 * @text Key: K
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default K
 *
 * @param KeyL:str
 * @text Key: L
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default L
 *
 * @param KeyM:str
 * @text Key: M
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default M
 *
 * @param KeyN:str
 * @text Key: N
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default N
 *
 * @param KeyO:str
 * @text Key: O
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default O
 *
 * @param KeyP:str
 * @text Key: P
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default P
 *
 * @param KeyQ:str
 * @text Key: Q
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Q
 *
 * @param KeyR:str
 * @text Key: R
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default R
 *
 * @param KeyS:str
 * @text Key: S
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default S
 *
 * @param KeyT:str
 * @text Key: T
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default T
 *
 * @param KeyU:str
 * @text Key: U
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default U
 *
 * @param KeyV:str
 * @text Key: V
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default V
 *
 * @param KeyW:str
 * @text Key: W
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default W
 *
 * @param KeyX:str
 * @text Key: X
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default X
 *
 * @param KeyY:str
 * @text Key: Y
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Y
 *
 * @param KeyZ:str
 * @text Key: Z
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Z
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
 * @desc Exact string used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 *
 * @param Match:str
 * @text Similarity Match
 * @parent ID
 * @desc Similar text used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 * 
 * @param Directions
 *
 * @param up:str
 * @text Up
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param left:str
 * @text Left
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param right:str
 * @text Right
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param down:str
 * @text Down
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 * 
 * @param Actions
 *
 * @param ok:str
 * @text OK
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param cancel:str
 * @text Cancel
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param menu:str
 * @text Menu
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param shift:str
 * @text Shift
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pageup:str
 * @text Page Up
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pagedown:str
 * @text Page Down
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Layout Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuLayout:
 *
 * @param Title:struct
 * @text Scene_Title
 * @parent SceneSettings
 * @type struct<Title>
 * @desc Various options on adjusting the Title Scene.
 * @default {"TitleScreen":"","DocumentTitleFmt:str":"%1: %2 - Version %3","Subtitle:str":"Subtitle","Version:str":"0.00","drawGameTitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = $dataSystem.gameTitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 8;\\nbitmap.fontSize = 72;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameSubtitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4 + 72;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = Scene_Title.subtitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 6;\\nbitmap.fontSize = 48;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameVersion:func":"\"const bitmap = this._gameTitleSprite.bitmap;\\nconst x = 0;\\nconst y = Graphics.height - 20;\\nconst width = Math.round(Graphics.width / 4);\\nconst height = 20;\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\nconst text = 'Version ' + Scene_Title.version;\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 3;\\nbitmap.fontSize = 16;\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\"left\\\");\"","CommandRect:func":"\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\nconst rows = this.commandWindowRows();\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\nreturn new Rectangle(x, y, width, height);\"","ButtonFadeSpeed:num":"4"}
 *
 * @param MainMenu:struct
 * @text Scene_Menu
 * @parent SceneSettings
 * @type struct<MainMenu>
 * @desc Various options on adjusting the Main Menu Scene.
 * @default {"CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const width = this.mainCommandWidth();\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this.mainAreaHeight();\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ItemMenu:struct
 * @text Scene_Item
 * @parent SceneSettings
 * @type struct<ItemMenu>
 * @desc Various options on adjusting the Item Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaBottom() - y;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SkillMenu:struct
 * @text Scene_Skill
 * @parent SceneSettings
 * @type struct<SkillMenu>
 * @desc Various options on adjusting the Skill Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","SkillTypeWindow":"","SkillTypeBgType:num":"0","SkillTypeRect:func":"\"const rows = 3;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this._skillTypeWindow.height;\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._statusWindow.y + this._statusWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param EquipMenu:struct
 * @text Scene_Equip
 * @parent SceneSettings
 * @type struct<EquipMenu>
 * @desc Various options on adjusting the Equip Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = this.statusWidth();\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = this.statusWidth();\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SlotWindow":"","SlotBgType:num":"0","SlotRect:func":"\"const commandWindowRect = this.commandWindowRect();\\nconst x = this.statusWidth();\\nconst y = commandWindowRect.y + commandWindowRect.height;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"return this.slotWindowRect();\""}
 *
 * @param StatusMenu:struct
 * @text Scene_Status
 * @parent SceneSettings
 * @type struct<StatusMenu>
 * @desc Various options on adjusting the Status Menu Scene.
 * @default {"ProfileWindow":"","ProfileBgType:num":"0","ProfileRect:func":"\"const width = Graphics.boxWidth;\\nconst height = this.profileHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.statusParamsWindowRect().y - y;\\nreturn new Rectangle(x, y, width, height);\"","StatusParamsWindow":"","StatusParamsBgType:num":"0","StatusParamsRect:func":"\"const width = this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusEquipWindow":"","StatusEquipBgType:num":"0","StatusEquipRect:func":"\"const width = Graphics.boxWidth - this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = this.statusParamsWidth();\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param OptionsMenu:struct
 * @text Scene_Options
 * @parent SceneSettings
 * @type struct<OptionsMenu>
 * @desc Various options on adjusting the Options Menu Scene.
 * @default {"OptionsWindow":"","OptionsBgType:num":"0","OptionsRect:func":"\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\nconst width = 400;\\nconst height = this.calcWindowHeight(n, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SaveMenu:struct
 * @text Scene_Save
 * @parent SceneSettings
 * @type struct<SaveMenu>
 * @desc Various options on adjusting the Save Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param LoadMenu:struct
 * @text Scene_Load
 * @parent SceneSettings
 * @type struct<LoadMenu>
 * @desc Various options on adjusting the Load Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param GameEnd:struct
 * @text Scene_GameEnd
 * @parent SceneSettings
 * @type struct<GameEnd>
 * @desc Various options on adjusting the Game End Scene.
 * @default {"CommandList:arraystruct":"[\"{\\\"Symbol:str\\\":\\\"toTitle\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.toTitle;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"cancel\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.cancel;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.popScene();\\\\\\\"\\\"}\"]","CommandBgType:num":"0","CommandRect:func":"\"const rows = 2;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ShopMenu:struct
 * @text Scene_Shop
 * @parent SceneSettings
 * @type struct<ShopMenu>
 * @desc Various options on adjusting the Shop Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const wx = 0;\\nconst wy = this.helpAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.helpAreaHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = this._goldWindow.x;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","DummyWindow":"","DummyBgType:num":"0","DummyRect:func":"\"const x = 0;\\nconst y = this._commandWindow.y + this._commandWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","NumberWindow":"","NumberBgType:num":"0","NumberRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._dummyWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._dummyWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","BuyWindow":"","BuyBgType:num":"0","BuyRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SellWindow":"","SellBgType:num":"0","SellRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height =\\n    this.mainAreaHeight() -\\n    this._commandWindow.height -\\n    this._categoryWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param NameMenu:struct
 * @text Scene_Name
 * @parent SceneSettings
 * @type struct<NameMenu>
 * @desc Various options on adjusting the Actor Rename Scene.
 * @default {"EditWindow":"","EditBgType:num":"0","EditRect:func":"\"const rows = 9;\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\nconst padding = $gameSystem.windowPadding();\\nconst width = 600;\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","InputWindow":"","InputBgType:num":"0","InputRect:func":"\"const x = this._editWindow.x;\\nconst y = this._editWindow.y + this._editWindow.height;\\nconst rows = 9;\\nconst width = this._editWindow.width;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\""}
 *
 */
/* ----------------------------------------------------------------------------
 * Main Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
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
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.mainCommandWidth();\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
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
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
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
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this.mainAreaHeight();\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
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
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
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
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
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
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaBottom() - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
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
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
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
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param SkillTypeBgType:num
 * @text Background Type
 * @parent SkillTypeWindow
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
 * @param SkillTypeRect:func
 * @text JS: X, Y, W, H
 * @parent SkillTypeWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 3;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
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
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this._skillTypeWindow.height;\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
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
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._statusWindow.y + this._statusWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._statusWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
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
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
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
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
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
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = this.statusWidth();\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
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
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this.statusWidth();\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SlotWindow
 * @text Slot Window
 *
 * @param SlotBgType:num
 * @text Background Type
 * @parent SlotWindow
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
 * @param SlotRect:func
 * @text JS: X, Y, W, H
 * @parent SlotWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const commandWindowRect = this.commandWindowRect();\nconst x = this.statusWidth();\nconst y = commandWindowRect.y + commandWindowRect.height;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.mainAreaHeight() - commandWindowRect.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
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
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "return this.slotWindowRect();"
 *
 */
/* ----------------------------------------------------------------------------
 * Status Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusMenu:
 *
 * @param ProfileWindow
 * @text Profile Window
 *
 * @param ProfileBgType:num
 * @text Background Type
 * @parent ProfileWindow
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
 * @param ProfileRect:func
 * @text JS: X, Y, W, H
 * @parent ProfileWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth;\nconst height = this.profileHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
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
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.statusParamsWindowRect().y - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusParamsWindow
 * @text Parameters Window
 *
 * @param StatusParamsBgType:num
 * @text Background Type
 * @parent StatusParamsWindow
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
 * @param StatusParamsRect:func
 * @text JS: X, Y, W, H
 * @parent StatusParamsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusEquipWindow
 * @text Equipment Window
 *
 * @param StatusEquipBgType:num
 * @text Background Type
 * @parent StatusEquipWindow
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
 * @param StatusEquipRect:func
 * @text JS: X, Y, W, H
 * @parent StatusEquipWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = this.statusParamsWidth();\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Options Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OptionsMenu:
 *
 * @param OptionsWindow
 * @text Options Window
 *
 * @param OptionsBgType:num
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
 * @param OptionsRect:func
 * @text JS: X, Y, W, H
 * @parent OptionsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\nconst width = 400;\nconst height = this.calcWindowHeight(n, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Save Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
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
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
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
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Load Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LoadMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
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
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
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
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Game End Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameEnd:
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @type struct<Command>[]
 * @desc Window commands used by the Game End screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"toTitle\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.toTitle;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandToTitle();\\\"\"}","{\"Symbol:str\":\"cancel\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.cancel;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.popScene();\\\"\"}"]
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandList:arraystruct
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
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandList:arraystruct
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 2;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
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
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.helpAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.helpAreaHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
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
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
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
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = this._goldWindow.x;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param DummyWindow
 * @text Dummy Window
 *
 * @param DummyBgType:num
 * @text Background Type
 * @parent DummyWindow
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
 * @param DummyRect:func
 * @text JS: X, Y, W, H
 * @parent DummyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._commandWindow.y + this._commandWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._commandWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param NumberWindow
 * @text Number Window
 *
 * @param NumberBgType:num
 * @text Background Type
 * @parent NumberWindow
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
 * @param NumberRect:func
 * @text JS: X, Y, W, H
 * @parent NumberWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
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
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusWidth();\nconst height = this._dummyWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._dummyWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param BuyWindow
 * @text Buy Window
 *
 * @param BuyBgType:num
 * @text Background Type
 * @parent BuyWindow
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
 * @param BuyRect:func
 * @text JS: X, Y, W, H
 * @parent BuyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
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
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SellWindow
 * @text Sell Window
 *
 * @param SellBgType:num
 * @text Background Type
 * @parent SellWindow
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
 * @param SellRect:func
 * @text JS: X, Y, W, H
 * @parent SellWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height =\n    this.mainAreaHeight() -\n    this._commandWindow.height -\n    this._categoryWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Name Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NameMenu:
 *
 * @param EditWindow
 * @text Edit Window
 *
 * @param EditBgType:num
 * @text Background Type
 * @parent EditWindow
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
 * @param EditRect:func
 * @text JS: X, Y, W, H
 * @parent EditWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 9;\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\nconst padding = $gameSystem.windowPadding();\nconst width = 600;\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param InputWindow
 * @text Input Window
 *
 * @param InputBgType:num
 * @text Background Type
 * @parent InputWindow
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
 * @param InputRect:func
 * @text JS: X, Y, W, H
 * @parent InputWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this._editWindow.x;\nconst y = this._editWindow.y + this._editWindow.height;\nconst rows = 9;\nconst width = this._editWindow.width;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Title Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Title:
 *
 * @param TitleScreen
 * @text Title Screen
 *
 * @param DocumentTitleFmt:str
 * @text Document Title Format
 * @parent TitleScreen
 * @desc Format to display text in document title.
 * %1 - Main Title, %2 - Subtitle, %3 - Version
 * @default %1: %2 - Version %3
 *
 * @param Subtitle:str
 * @text Subtitle
 * @parent TitleScreen
 * @desc Subtitle to be displayed under the title name.
 * @default Subtitle
 *
 * @param Version:str
 * @text Version
 * @parent TitleScreen
 * @desc Version to be display in the title screen corner.
 * @default 0.00
 *
 * @param drawGameTitle:func
 * @text JS: Draw Title
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game title.
 * @default "const x = 20;\nconst y = Graphics.height / 4;\nconst maxWidth = Graphics.width - x * 2;\nconst text = $dataSystem.gameTitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 8;\nbitmap.fontSize = 72;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameSubtitle:func
 * @text JS: Draw Subtitle
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game subtitle.
 * @default "const x = 20;\nconst y = Graphics.height / 4 + 72;\nconst maxWidth = Graphics.width - x * 2;\nconst text = Scene_Title.subtitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 6;\nbitmap.fontSize = 48;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameVersion:func
 * @text JS: Draw Version
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game version.
 * @default "const bitmap = this._gameTitleSprite.bitmap;\nconst x = 0;\nconst y = Graphics.height - 20;\nconst width = Math.round(Graphics.width / 4);\nconst height = 20;\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\nconst text = 'Version ' + Scene_Title.version;\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 3;\nbitmap.fontSize = 16;\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \"left\");"
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent TitleScreen
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const offsetX = $dataSystem.titleCommandWindow.offsetX;\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\nconst rows = this.commandWindowRows();\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\nconst y = Graphics.boxHeight - height - 96 + offsetY;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonFadeSpeed:num
 * @text Button Fade Speed
 * @parent TitleScreen
 * @type number
 * @min 1
 * @max 255
 * @desc Speed at which the buttons fade in at (1-255).
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Param:
 *
 * @param DisplayedParams:arraystr
 * @text Displayed Parameters
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc A list of the parameters that will be displayed in-game.
 * @default ["ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param ExtDisplayedParams:arraystr
 * @text Extended Parameters
 * @parent DisplayedParams:arraystr
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc The list shown in extended scenes (for other VisuStella plugins).
 * @default ["MaxHP","MaxMP","ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param BasicParameters
 * @text Basic Parameters
 *
 * @param ShowActorLevel:eval
 * @text Show Actor Level?
 * @parent BasicParameters
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the actor level when displaying actors?
 * Affects for most windows in-game.
 * @default true
 *
 * @param CrisisRate:num
 * @text HP Crisis Rate
 * @parent BasicParameters
 * @desc HP Ratio at which a battler can be considered in crisis mode.
 * @default 0.25
 *
 * @param BasicParameterFormula:func
 * @text JS: Formula
 * @parent BasicParameters
 * @type note
 * @desc Formula used to determine the total value all 8 basic parameters: MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 * @default "// Determine the variables used in this calculation.\nlet paramId = arguments[0];\nlet base = this.paramBase(paramId);\nlet plus = this.paramPlus(paramId);\nlet paramRate = this.paramRate(paramId);\nlet buffRate = this.paramBuffRate(paramId);\nlet flatBonus = this.paramFlatBonus(paramId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\n\n// Determine the limits\nconst maxValue = this.paramMax(paramId);\nconst minValue = this.paramMin(paramId);\n\n// Final value\nreturn Math.round(value.clamp(minValue, maxValue));"
 *
 * @param BasicParamCaps
 * @text Parameter Caps
 * @parent BasicParameters
 *
 * @param BasicActorParamCaps
 * @text Actors
 * @parent BasicParamCaps
 *
 * @param BasicActorParamMax0:str
 * @text MaxHP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax1:str
 * @text MaxMP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax2:str
 * @text ATK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax3:str
 * @text DEF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax4:str
 * @text MAT Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax5:str
 * @text MDF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax6:str
 * @text AGI Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax7:str
 * @text LUK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamCaps
 * @text Enemies
 * @parent BasicParamCaps
 *
 * @param BasicEnemyParamMax0:str
 * @text MaxHP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999999
 *
 * @param BasicEnemyParamMax1:str
 * @text MaxMP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicEnemyParamMax2:str
 * @text ATK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax3:str
 * @text DEF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax4:str
 * @text MAT Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax5:str
 * @text MDF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax6:str
 * @text AGI Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax7:str
 * @text LUK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param XParameters
 * @text X Parameters
 *
 * @param XParameterFormula:func
 * @text JS: Formula
 * @parent XParameters
 * @type note
 * @desc Formula used to determine the total value all 10 X parameters: HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 * @default "// Determine the variables used in this calculation.\nlet xparamId = arguments[0];\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\nlet plus = this.xparamPlus(xparamId);\nlet paramRate = this.xparamRate(xparamId);\nlet flatBonus = this.xparamFlatBonus(xparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param XParamVocab
 * @text Vocabulary
 * @parent XParameters
 *
 * @param XParamVocab0:str
 * @text HIT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Hit
 *
 * @param XParamVocab1:str
 * @text EVA
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Evasion
 *
 * @param XParamVocab2:str
 * @text CRI
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Rate
 *
 * @param XParamVocab3:str
 * @text CEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Evade
 *
 * @param XParamVocab4:str
 * @text MEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Evade
 *
 * @param XParamVocab5:str
 * @text MRF
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Reflect
 *
 * @param XParamVocab6:str
 * @text CNT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Counter
 *
 * @param XParamVocab7:str
 * @text HRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default HP Regen
 *
 * @param XParamVocab8:str
 * @text MRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default MP Regen
 *
 * @param XParamVocab9:str
 * @text TRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default TP Regen
 *
 * @param SParameters
 * @text S Parameters
 *
 * @param SParameterFormula:func
 * @text JS: Formula
 * @parent SParameters
 * @type note
 * @desc Formula used to determine the total value all 10 S parameters: TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 * @default "// Determine the variables used in this calculation.\nlet sparamId = arguments[0];\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\nlet plus = this.sparamPlus(sparamId);\nlet paramRate = this.sparamRate(sparamId);\nlet flatBonus = this.sparamFlatBonus(sparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param SParamVocab
 * @text Vocabulary
 * @parent SParameters
 *
 * @param SParamVocab0:str
 * @text TGR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Aggro
 *
 * @param SParamVocab1:str
 * @text GRD
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Guard
 *
 * @param SParamVocab2:str
 * @text REC
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Recovery
 *
 * @param SParamVocab3:str
 * @text PHA
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Item Effect
 *
 * @param SParamVocab4:str
 * @text MCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default MP Cost
 *
 * @param SParamVocab5:str
 * @text TCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default TP Charge
 *
 * @param SParamVocab6:str
 * @text PDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Physical DMG
 *
 * @param SParamVocab7:str
 * @text MDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Magical DMG
 *
 * @param SParamVocab8:str
 * @text FDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Floor DMG
 *
 * @param SParamVocab9:str
 * @text EXR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default EXP Gain
 *
 * @param Icons
 * @text Icons
 *
 * @param DrawIcons:eval
 * @text Draw Icons?
 * @parent Icons
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Draw icons next to parameter names?
 * @default true
 *
 * @param IconParam0:str
 * @text MaxHP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 84
 *
 * @param IconParam1:str
 * @text MaxMP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconParam2:str
 * @text ATK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconParam3:str
 * @text DEF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 81
 *
 * @param IconParam4:str
 * @text MAT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 101
 *
 * @param IconParam5:str
 * @text MDF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 133
 *
 * @param IconParam6:str
 * @text AGI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 140
 *
 * @param IconParam7:str
 * @text LUK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 87
 *
 * @param IconXParam0:str
 * @text HIT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 102
 *
 * @param IconXParam1:str
 * @text EVA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam2:str
 * @text CRI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 78
 *
 * @param IconXParam3:str
 * @text CEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam4:str
 * @text MEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 171
 *
 * @param IconXParam5:str
 * @text MRF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 222
 *
 * @param IconXParam6:str
 * @text CNT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 77
 *
 * @param IconXParam7:str
 * @text HRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam8:str
 * @text MRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam9:str
 * @text TRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam0:str
 * @text TGR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 5
 *
 * @param IconSParam1:str
 * @text GRD
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 128
 *
 * @param IconSParam2:str
 * @text REC
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam3:str
 * @text PHA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 176
 *
 * @param IconSParam4:str
 * @text MCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconSParam5:str
 * @text TCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 164
 *
 * @param IconSParam6:str
 * @text PDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconSParam7:str
 * @text MDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 79
 *
 * @param IconSParam8:str
 * @text FDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 141
 *
 * @param IconSParam9:str
 * @text EXR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 73
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
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this title command.
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
 * @default ""
 *
 */
/* ----------------------------------------------------------------------------
 * Title Picture Buttons
 * ----------------------------------------------------------------------------
 */
/*~struct~TitlePictureButton:
 *
 * @param PictureFilename:str
 * @text Picture's Filename
 * @type file
 * @dir img/pictures/
 * @desc Filename used for the picture.
 * @default 
 *
 * @param ButtonURL:str
 * @text Button URL
 * @desc URL for the button to go to upon being clicked.
 * @default https://www.google.com/
 *
 * @param PositionJS:func
 * @text JS: Position
 * @type note
 * @desc JavaScript code that helps determine the button's Position.
 * @default "this.x = Graphics.width - this.bitmap.width - 20;\nthis.y = Graphics.height - this.bitmap.height - 20;"
 *
 * @param OnLoadJS:func
 * @text JS: On Load
 * @type note
 * @desc JavaScript code that runs once this button bitmap is loaded.
 * @default "this.opacity = 0;\nthis.visible = true;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this button is pressed.
 * @default "const url = this._data.ButtonURL;\nVisuMZ.openURL(url);"
 *
 */
/* ----------------------------------------------------------------------------
 * UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UI:
 *
 * @param UIArea
 * @text UI Area
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent UIArea
 * @desc Default fade speed for transitions.
 * @default 24
 *
 * @param BoxMargin:num
 * @text Box Margin
 * @parent UIArea
 * @type number
 * @min 0
 * @desc Set the margin in pixels for the screen borders.
 * Default: 4
 * @default 4
 *
 * @param CommandWidth:num
 * @text Command Window Width
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the width for standard Command Windows.
 * Default: 240
 * @default 240
 *
 * @param BottomHelp:eval
 * @text Bottom Help Window
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the Help Window at the bottom of the screen?
 * @default false
 *
 * @param RightMenus:eval
 * @text Right Aligned Menus
 * @parent UIArea
 * @type boolean
 * @on Right
 * @off Left
 * @desc Put most command windows to the right side of the screen.
 * @default true
 *
 * @param ShowButtons:eval
 * @text Show Buttons
 * @parent UIArea
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show clickable buttons in your game?
 * This will affect all buttons.
 * @default true
 *
 * @param cancelShowButton:eval
 * @text Show Cancel Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show cancel button?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param menuShowButton:eval
 * @text Show Menu Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show main menu button from the map scene?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param pagedownShowButton:eval
 * @text Show Page Up/Down
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show page up/down buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param numberShowButton:eval
 * @text Show Number Buttons
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show number adjustment buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param ButtonHeight:num
 * @text Button Area Height
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the height for the button area.
 * Default: 52
 * @default 52
 *
 * @param BottomButtons:eval
 * @text Bottom Buttons
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the buttons at the bottom of the screen?
 * @default false
 *
 * @param SideButtons:eval
 * @text Side Buttons
 * @parent UIArea
 * @type boolean
 * @on Side
 * @off Normal
 * @desc Push buttons to the side of the UI if there is room.
 * @default true
 *
 * @param StateIconsNonFrame:eval
 * @text State Icons Non-Frame
 * @parent UIArea
 * @type boolean
 * @on Non-Frame
 * @off Normal
 * @desc Replace sprite frame system for non-frame.
 * Better for any instances where icons are zoomed.
 * @default true
 *
 * @param MenuObjects
 * @text Menu Objects
 *
 * @param LvExpGauge:eval
 * @text Level -> EXP Gauge
 * @parent MenuObjects
 * @type boolean
 * @on Draw Gauge
 * @off Keep As Is
 * @desc Draw an EXP Gauge under the drawn level.
 * @default true
 *
 * @param ParamArrow:str
 * @text Parameter Arrow
 * @parent MenuObjects
 * @desc The arrow used to show changes in the parameter values.
 * @default →
 *
 * @param TextCodeSupport
 * @text Text Code Support
 *
 * @param TextCodeClassNames:eval
 * @text Class Names
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make class names support text codes?
 * @default true
 *
 * @param TextCodeNicknames:eval
 * @text Nicknames
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make nicknames support text codes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param WindowDefaults
 * @text Defaults
 *
 * @param EnableMasking:eval
 * @text Enable Masking
 * @parent WindowDefaults
 * @type boolean
 * @on Masking On
 * @off Masking Off
 * @desc Enable window masking (windows hide other windows behind 
 * them)? WARNING: Turning it on can obscure data.
 * @default false
 *
 * @param CorrectSkinBleeding:eval
 * @text Correct Skin Bleed
 * @parent WindowDefaults
 * @type boolean
 * @on Correct
 * @off Don't Correct
 * @desc Corrects window skin bleeding bug when used with higher
 * screen resolutions?
 * @default true
 *
 * @param LineHeight:num
 * @text Line Height
 * @parent WindowDefaults
 * @desc Default line height used for standard windows.
 * Default: 36. Avoid using odd numbers.
 * @default 36
 *
 * @param ItemPadding:num
 * @text Item Padding
 * @parent WindowDefaults
 * @desc Default line padding used for standard windows.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param BackOpacity:num
 * @text Back Opacity
 * @parent WindowDefaults
 * @desc Default back opacity used for standard windows.
 * Default: 192
 * @default 192
 *
 * @param TranslucentOpacity:num
 * @text Translucent Opacity
 * @parent WindowDefaults
 * @desc Default translucent opacity used for standard windows.
 * Default: 160
 * @default 160
 *
 * @param OpenSpeed:num
 * @text Window Opening Speed
 * @parent WindowDefaults
 * @desc Default open speed used for standard windows.
 * Default: 32 (Use a number between 0-255)
 * @default 32
 * @default 24
 *
 * @param ColSpacing:num
 * @text Column Spacing
 * @parent WindowDefaults
 * @desc Default column spacing for selectable windows.
 * Default: 8
 * @default 8
 *
 * @param RowSpacing:num
 * @text Row Spacing
 * @parent WindowDefaults
 * @desc Default row spacing for selectable windows.
 * Default: 4
 * @default 4
 * 
 * @param ScrollBar
 * @text Scroll Bar
 *
 * @param ShowScrollBar:eval
 * @text Show Scroll Bar?
 * @parent ScrollBar
 * @type boolean
 * @on Show Scroll Bar
 * @off Don't Show
 * @desc Show the scroll bar for scrollable windows?
 * @default true
 *
 * @param BarThickness:num
 * @text Thickness
 * @parent ScrollBar
 * @type number
 * @min 1
 * @desc How thick do you want the scroll bar to be?
 * @default 2
 *
 * @param BarOffset:num
 * @text Offset
 * @parent ScrollBar
 * @desc How much do you want to offset the scroll bar by?
 * @default +2
 *
 * @param BarBodyColor:str
 * @text Bar Body Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param OffBarColor:str
 * @text Off Bar Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param OffBarOpacity:num
 * @text Off Bar Opacity
 * @parent ScrollBar
 * @type number
 * @min 1
 * @max 255
 * @desc What opacity value do you want the off bar opacity
 * to be? Use a number between 0 and 255.
 * @default 128
 * 
 * @param SelectableItems
 * @text Selectable Items
 *
 * @param ShowItemBackground:eval
 * @text Show Background?
 * @parent SelectableItems
 * @type boolean
 * @on Show Backgrounds
 * @off No Backgrounds
 * @desc Selectable menu items have dark boxes behind them. Show them?
 * @default true
 *
 * @param ItemHeight:num
 * @text Item Height Padding
 * @parent SelectableItems
 * @desc Default padding for selectable items.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param DrawItemBackgroundJS:func
 * @text JS: Draw Background
 * @parent SelectableItems
 * @type note
 * @desc Code used to draw the background rectangle behind clickable menu objects
 * @default "const rect = arguments[0];\nconst c1 = ColorManager.itemBackColor1();\nconst c2 = ColorManager.itemBackColor2();\nconst x = rect.x;\nconst y = rect.y;\nconst w = rect.width;\nconst h = rect.height;\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\nthis.contentsBack.strokeRect(x, y, w, h, c1);"
 *
 * @param TextPopup
 * @text Text Popup Window
 *
 * @param DurationPerChat:num
 * @text Duration Per Text
 * @parent TextPopup
 * @desc What is the increase in duration per text character?
 * @default 1.5
 *
 * @param MinDuration:num
 * @text Minimum Duration
 * @parent TextPopup
 * @type number
 * @min 1
 * @desc Minimum duration for window to stay on the screen.
 * @default 90
 *
 * @param MaxDuration:num
 * @text Maximum Duration
 * @parent TextPopup
 * @type number
 * @min 1
 * @desc Maximum duration for window to stay on the screen.
 * @default 300
 * 
 */
/* ----------------------------------------------------------------------------
 * Screen Resolution Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenResolution:
 *
 * @param Maps
 * 
 * @param AutoScrollLockX:eval
 * @text Scroll Lock Small X?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock X scrolling if the map is too small?
 * @default true
 * 
 * @param AutoScrollLockY:eval
 * @text Scroll Lock Small Y?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock Y scrolling if the map is too small?
 * @default true
 * 
 * @param DisplayLockX:num
 * @text Locked Display X?
 * @parent Maps
 * @desc What display X value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.15625
 * 
 * @param DisplayLockY:num
 * @text Locked Display Y?
 * @parent Maps
 * @desc What display Y value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.00000
 * 
 * @param Troops
 *
 * @param RepositionActors:eval
 * @text Reposition Actors
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of actors in battle if the screen resolution has changed. Ignore if using Battle Core.
 * @default true
 *
 * @param RepositionEnemies:eval
 * @text Reposition Enemies
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of enemies in battle if the screen resolution has changed.
 * @default true
 *
 * @param RepositionEnemies130:eval
 * @text For MZ 1.3.0+?
 * @parent RepositionEnemies:eval
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Both this parameter and its parent parameter need to be on when using RPG Maker MZ 1.3.0+.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Screen Shake Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenShake:
 *
 * @param DefaultStyle:str
 * @text Default Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc The default style used for screen shakes.
 * @default random
 *
 * @param originalJS:func
 * @text JS: Original Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\nthis.x += Math.round($gameScreen.shake());"
 *
 * @param randomJS:func
 * @text JS: Random Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param horzJS:func
 * @text JS: Horizontal Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param vertJS:func
 * @text JS: Vertical Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomParam:
 *
 * @param ParamName:str
 * @text Parameter Name
 * @desc What's the parameter's name?
 * Used for VisuStella MZ menus.
 * @default Untitled
 *
 * @param Abbreviation:str
 * @text Abbreviation
 * @parent ParamName:str
 * @desc What abbreviation do you want to use for the parameter?
 * Do not use special characters. Avoid numbers if possible.
 * @default unt
 *
 * @param Icon:num
 * @text Icon
 * @parent ParamName:str
 * @desc What icon do you want to use to represent this parameter?
 * Used for VisuStella MZ menus.
 * @default 160
 *
 * @param Type:str
 * @text Type
 * @parent ParamName:str
 * @type select
 * @option Integer (Whole Numbers Only)
 * @value integer
 * @option Float (Decimals are Allowed)
 * @value float
 * @desc What kind of number value will be returned with this parameter?
 * @default integer
 *
 * @param ValueJS:json
 * @text JS: Value
 * @type note
 * @desc Run this code when this parameter is to be returned.
 * @default "// Declare Constants\nconst user = this;\n\n// Calculations\nreturn 1;"
 *
 */
/* ----------------------------------------------------------------------------
 * Show Picture Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShowPicture:
 * 
 * @param Position
 *
 * @param Origin:num
 * @text Origin
 * @parent Position
 * @type select
 * @option 0 - Upper Left
 * @value 0
 * @option 1 - Center
 * @value 1
 * @desc What is the origin of this picture icon?
 * @default 0
 *
 * @param PositionX:eval
 * @text Position X
 * @parent Position
 * @desc X coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 *
 * @param PositionY:eval
 * @text Position Y
 * @parent Position
 * @desc Y coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 * 
 * @param Scale
 *
 * @param ScaleX:eval
 * @text Width %
 * @parent Scale
 * @desc Horizontal scale of the picture.
 * You may use JavaScript code.
 * @default 100
 *
 * @param ScaleY:eval
 * @text Height %
 * @parent Scale
 * @desc Vertical scale of the picture.
 * You may use JavaScript code.
 * @default 100
 * 
 * @param Blend
 *
 * @param Opacity:eval
 * @text Opacity
 * @parent Blend
 * @desc Insert a number to determine opacity level. Use a
 * number between 0 and 255. You may use JavaScript code.
 * @default 255
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent Blend
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the picture?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * JS Quick Function Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~jsQuickFunc:
 *
 * @param FunctionName:str
 * @text Function Name
 * @desc The function's name in the global namespace.
 * Will not overwrite functions/variables of the same name.
 * @default Untitled
 *
 * @param CodeJS:json
 * @text JS: Code
 * @type note
 * @desc Run this code when using the function.
 * @default "// Insert this as a function anywhere you can input code\n// such as Script Calls or Conditional Branch Scripts.\n\n// Process Code\n"
 *
 */
//=============================================================================

var tier = tier || 0x0;
var dependencies = [];
var pluginData = $plugins.filter(function (_0x2da5e0) {
  return _0x2da5e0.status && _0x2da5e0.description.includes("[CoreEngine]");
})[0x0];
VisuMZ.CoreEngine.Settings = VisuMZ.CoreEngine.Settings || {};
VisuMZ.ConvertParams = function (_0x4d64e7, _0x32d52e) {
  for (const _0x330285 in _0x32d52e) {
    if (_0x330285.match(/(.*):(.*)/i)) {
      const _0x216557 = String(RegExp.$1);
      const _0x2b7aaa = String(RegExp.$2).toUpperCase().trim();
      let _0x297165;
      let _0x2481a5;
      let _0x119b8b;
      switch (_0x2b7aaa) {
        case "NUM":
          _0x297165 = _0x32d52e[_0x330285] !== '' ? Number(_0x32d52e[_0x330285]) : 0x0;
          break;
        case "ARRAYNUM":
          _0x2481a5 = _0x32d52e[_0x330285] !== '' ? JSON.parse(_0x32d52e[_0x330285]) : [];
          _0x297165 = _0x2481a5.map(_0x59f2d1 => Number(_0x59f2d1));
          break;
        case "EVAL":
          _0x297165 = _0x32d52e[_0x330285] !== '' ? eval(_0x32d52e[_0x330285]) : null;
          break;
        case "ARRAYEVAL":
          _0x2481a5 = _0x32d52e[_0x330285] !== '' ? JSON.parse(_0x32d52e[_0x330285]) : [];
          _0x297165 = _0x2481a5.map(_0x533f89 => eval(_0x533f89));
          break;
        case "JSON":
          _0x297165 = _0x32d52e[_0x330285] !== '' ? JSON.parse(_0x32d52e[_0x330285]) : '';
          break;
        case "ARRAYJSON":
          _0x2481a5 = _0x32d52e[_0x330285] !== '' ? JSON.parse(_0x32d52e[_0x330285]) : [];
          _0x297165 = _0x2481a5.map(_0x1b0486 => JSON.parse(_0x1b0486));
          break;
        case "FUNC":
          _0x297165 = _0x32d52e[_0x330285] !== '' ? new Function(JSON.parse(_0x32d52e[_0x330285])) : new Function("return 0");
          break;
        case 'ARRAYFUNC':
          _0x2481a5 = _0x32d52e[_0x330285] !== '' ? JSON.parse(_0x32d52e[_0x330285]) : [];
          _0x297165 = _0x2481a5.map(_0x38b2f7 => new Function(JSON.parse(_0x38b2f7)));
          break;
        case "STR":
          _0x297165 = _0x32d52e[_0x330285] !== '' ? String(_0x32d52e[_0x330285]) : '';
          break;
        case "ARRAYSTR":
          _0x2481a5 = _0x32d52e[_0x330285] !== '' ? JSON.parse(_0x32d52e[_0x330285]) : [];
          _0x297165 = _0x2481a5.map(_0x46c4cb => String(_0x46c4cb));
          break;
        case 'STRUCT':
          _0x119b8b = _0x32d52e[_0x330285] !== '' ? JSON.parse(_0x32d52e[_0x330285]) : {};
          _0x4d64e7[_0x216557] = {};
          VisuMZ.ConvertParams(_0x4d64e7[_0x216557], _0x119b8b);
          continue;
        case "ARRAYSTRUCT":
          _0x2481a5 = _0x32d52e[_0x330285] !== '' ? JSON.parse(_0x32d52e[_0x330285]) : [];
          _0x297165 = _0x2481a5.map(_0x43d011 => VisuMZ.ConvertParams({}, JSON.parse(_0x43d011)));
          break;
        default:
          continue;
      }
      _0x4d64e7[_0x216557] = _0x297165;
    }
  }
  return _0x4d64e7;
};
VisuMZ.CoreEngine.SceneManager_exit = SceneManager.exit;
SceneManager.exit = function () {
  VisuMZ.CoreEngine.SceneManager_exit.call(this);
  if (Utils.RPGMAKER_VERSION >= "1.4.4") {
    if (typeof nw === "object") {
      nw.App.quit();
    }
  }
};
(_0x1b534d => {
  const _0x163b43 = _0x1b534d.name;
  for (const _0x1614df of dependencies) {
    if (!Imported[_0x1614df]) {
      alert("%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.".format(_0x163b43, _0x1614df));
      SceneManager.exit();
      break;
    }
  }
  const _0x22438a = _0x1b534d.description;
  if (_0x22438a.match(/\[Version[ ](.*?)\]/i)) {
    const _0x3ede74 = Number(RegExp.$1);
    if (_0x3ede74 !== VisuMZ.CoreEngine.version) {
      alert("%1's version does not match plugin's. Please update it in the Plugin Manager.".format(_0x163b43, _0x3ede74));
      SceneManager.exit();
    }
  }
  if (_0x22438a.match(/\[Tier[ ](\d+)\]/i)) {
    const _0x213362 = Number(RegExp.$1);
    if (_0x213362 < tier) {
      alert("%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.".format(_0x163b43, _0x213362, tier));
      SceneManager.exit();
    } else {
      tier = Math.max(_0x213362, tier);
    }
  }
  VisuMZ.ConvertParams(VisuMZ.CoreEngine.Settings, _0x1b534d.parameters);
})(pluginData);
(() => {
  if (VisuMZ.CoreEngine.Settings.QoL.SubfolderParse ?? true) {
    for (const _0x28193a in $plugins) {
      const _0x4c2fc2 = $plugins[_0x28193a];
      if (_0x4c2fc2.name.match(/(.*)\/(.*)/i)) {
        _0x4c2fc2.name = String(RegExp.$2.trim());
      }
    }
  }
})();
PluginManager.registerCommand(pluginData.name, 'AnimationPoint', _0x27470e => {
  if (!SceneManager._scene) {
    return;
  }
  if (!SceneManager._scene._spriteset) {
    return;
  }
  VisuMZ.ConvertParams(_0x27470e, _0x27470e);
  const _0x26e1db = Math.round(_0x27470e.pointX);
  const _0x4da5fb = Math.round(_0x27470e.pointY);
  $gameTemp.requestPointAnimation(_0x26e1db, _0x4da5fb, _0x27470e.AnimationID, _0x27470e.Mirror, _0x27470e.Mute);
});
PluginManager.registerCommand(pluginData.name, "AudioChangeBgmVolume", _0x364efd => {
  VisuMZ.ConvertParams(_0x364efd, _0x364efd);
  const _0x34a5a5 = Math.round(_0x364efd.volume).clamp(0x0, 0x64);
  const _0x33481b = AudioManager._currentBgm;
  if (_0x33481b) {
    _0x33481b.volume = _0x34a5a5;
    _0x33481b.pos = AudioManager._bgmBuffer.seek();
    AudioManager.updateBgmParameters(_0x33481b);
    AudioManager.playBgm(_0x33481b, _0x33481b.pos);
    AudioManager._bgmBuffer._startPlaying(_0x33481b.pos);
  }
});
PluginManager.registerCommand(pluginData.name, 'AudioChangeBgmPitch', _0x3182ed => {
  VisuMZ.ConvertParams(_0x3182ed, _0x3182ed);
  const _0x56b2c3 = Math.round(_0x3182ed.pitch).clamp(0x32, 0x96);
  const _0x262294 = AudioManager._currentBgm;
  if (_0x262294) {
    _0x262294.pitch = _0x56b2c3;
    _0x262294.pos = AudioManager._bgmBuffer.seek();
    AudioManager.updateBgmParameters(_0x262294);
    AudioManager.playBgm(_0x262294, _0x262294.pos);
    AudioManager._bgmBuffer._startPlaying(_0x262294.pos);
  }
});
PluginManager.registerCommand(pluginData.name, "AudioChangeBgmPan", _0x4b458a => {
  VisuMZ.ConvertParams(_0x4b458a, _0x4b458a);
  const _0x32fcb1 = Math.round(_0x4b458a.pan).clamp(-0x64, 0x64);
  const _0x3eb4f7 = AudioManager._currentBgm;
  if (_0x3eb4f7) {
    _0x3eb4f7.pan = _0x32fcb1;
    _0x3eb4f7.pos = AudioManager._bgmBuffer.seek();
    AudioManager.updateBgmParameters(_0x3eb4f7);
    AudioManager.playBgm(_0x3eb4f7, _0x3eb4f7.pos);
    AudioManager._bgmBuffer._startPlaying(_0x3eb4f7.pos);
  }
});
PluginManager.registerCommand(pluginData.name, "AudioChangeBgsVolume", _0x2ae570 => {
  VisuMZ.ConvertParams(_0x2ae570, _0x2ae570);
  const _0x33e2d2 = Math.round(_0x2ae570.volume).clamp(0x0, 0x64);
  const _0x394b83 = AudioManager._currentBgs;
  if (_0x394b83) {
    _0x394b83.volume = _0x33e2d2;
    _0x394b83.pos = AudioManager._bgsBuffer.seek();
    AudioManager.updateBgsParameters(_0x394b83);
    AudioManager.playBgs(_0x394b83, _0x394b83.pos);
    AudioManager._bgsBuffer._startPlaying(_0x394b83.pos);
  }
});
PluginManager.registerCommand(pluginData.name, "AudioChangeBgsPitch", _0x44420e => {
  VisuMZ.ConvertParams(_0x44420e, _0x44420e);
  const _0x16c194 = Math.round(_0x44420e.pitch).clamp(0x32, 0x96);
  const _0x4c9360 = AudioManager._currentBgs;
  if (_0x4c9360) {
    _0x4c9360.pitch = _0x16c194;
    _0x4c9360.pos = AudioManager._bgsBuffer.seek();
    AudioManager.updateBgsParameters(_0x4c9360);
    AudioManager.playBgs(_0x4c9360, _0x4c9360.pos);
    AudioManager._bgsBuffer._startPlaying(_0x4c9360.pos);
  }
});
PluginManager.registerCommand(pluginData.name, "AudioChangeBgsPan", _0x1efbd3 => {
  VisuMZ.ConvertParams(_0x1efbd3, _0x1efbd3);
  const _0x486160 = Math.round(_0x1efbd3.pan).clamp(-0x64, 0x64);
  const _0x2762e7 = AudioManager._currentBgs;
  if (_0x2762e7) {
    _0x2762e7.pan = _0x486160;
    _0x2762e7.pos = AudioManager._bgsBuffer.seek();
    AudioManager.updateBgsParameters(_0x2762e7);
    AudioManager.playBgs(_0x2762e7, _0x2762e7.pos);
    AudioManager._bgsBuffer._startPlaying(_0x2762e7.pos);
  }
});
PluginManager.registerCommand(pluginData.name, "DebugConsoleLastControllerID", _0x4781f6 => {
  if (!$gameTemp.isPlaytest()) {
    return;
  }
  const _0x3ee347 = Input.getLastUsedGamepadType();
  console.log(_0x3ee347);
});
PluginManager.registerCommand(pluginData.name, "ExportAllMapText", _0x58316e => {
  if (!$gameTemp.isPlaytest()) {
    return;
  }
  if (!Utils.isNwjs()) {
    return;
  }
  SceneManager._scene._active = false;
  VisuMZ.CoreEngine.ExportStrFromAllMaps();
});
PluginManager.registerCommand(pluginData.name, "ExportAllTroopText", _0x40c6ce => {
  if (!$gameTemp.isPlaytest()) {
    return;
  }
  if (!Utils.isNwjs()) {
    return;
  }
  SceneManager._scene._active = false;
  VisuMZ.CoreEngine.ExportStrFromAllTroops();
});
PluginManager.registerCommand(pluginData.name, 'ExportCurMapText', _0x133d17 => {
  if (!$gameTemp.isPlaytest()) {
    return;
  }
  if (!Utils.isNwjs()) {
    return;
  }
  if (!$gameMap) {
    return;
  }
  if ($gameMap.mapId() <= 0x0) {
    return;
  }
  VisuMZ.ConvertParams(_0x133d17, _0x133d17);
  const _0x579da4 = 'Map%1'.format($gameMap.mapId().padZero(0x3));
  const _0x49efa8 = VisuMZ.CoreEngine.ExtractStrFromMap($gameMap.mapId());
  VisuMZ.CoreEngine.ExportString(_0x49efa8, _0x579da4, true);
});
PluginManager.registerCommand(pluginData.name, "ExportCurTroopText", _0x10b819 => {
  if (!$gameTemp.isPlaytest()) {
    return;
  }
  if (!Utils.isNwjs()) {
    return;
  }
  if (!$gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x10b819, _0x10b819);
  const _0x29e7f0 = "Troop%1".format($gameTroop._troopId.padZero(0x4));
  const _0x2692b2 = VisuMZ.CoreEngine.ExtractStrFromTroop($gameTroop._troopId);
  VisuMZ.CoreEngine.ExportString(_0x2692b2, _0x29e7f0, true);
});
VisuMZ.CoreEngine.ExportString = function (_0x2022bc, _0x599bfc, _0x188271) {
  const _0x456e7d = require('fs');
  let _0x5badfc = "Exported_Script_%1.txt".format(_0x599bfc || '0');
  _0x456e7d.writeFile(_0x5badfc, _0x2022bc, _0x30d32b => {
    if (_0x30d32b) {
      throw err;
    } else if (_0x188271) {
      alert("Saved file as %1 in project folder.".format(_0x5badfc));
    }
  });
};
VisuMZ.CoreEngine.ExportStrFromAllMaps = function () {
  const _0x3555df = [];
  for (const _0x39b9ac of $dataMapInfos) {
    if (!_0x39b9ac) {
      continue;
    }
    _0x3555df.push(_0x39b9ac.id);
  }
  const _0x4f8d94 = _0x3555df.length * 0x64 + Math.randomInt(0x64);
  alert("Export Map Text operation will finish in %1 ms(s)".format(_0x4f8d94));
  this._storedMapText = [];
  this._currentMap = $dataMap;
  for (const _0x177956 of _0x3555df) {
    VisuMZ.CoreEngine.loadMapData(_0x177956);
  }
  setTimeout(VisuMZ.CoreEngine.exportAllMapStrings.bind(this), _0x4f8d94);
};
VisuMZ.CoreEngine.loadMapData = function (_0x4ae89b) {
  const _0x1ba330 = "Map%1.json".format(_0x4ae89b.padZero(0x3));
  const _0x1b834e = new XMLHttpRequest();
  const _0x4b76aa = "data/" + _0x1ba330;
  _0x1b834e.open('GET', _0x4b76aa);
  _0x1b834e.overrideMimeType("application/json");
  _0x1b834e.onload = () => this.storeMapData(_0x1b834e, _0x4ae89b, _0x1ba330, _0x4b76aa);
  _0x1b834e.onerror = () => DataManager.onXhrError('$dataMap', _0x1ba330, _0x4b76aa);
  _0x1b834e.send();
};
VisuMZ.CoreEngine.storeMapData = function (_0x1fdfc3, _0x2865ab, _0x162dbe, _0x25b099) {
  $dataMap = JSON.parse(_0x1fdfc3.responseText);
  DataManager.onLoad($dataMap);
  this._storedMapText[_0x2865ab] = VisuMZ.CoreEngine.ExtractStrFromMap(_0x2865ab);
  $dataMap = this._currentMap;
};
VisuMZ.CoreEngine.exportAllMapStrings = function () {
  this._storedMapText.remove(undefined).remove('').remove(null);
  const _0x4b3b05 = this._storedMapText.join("\n\n\n\n\n").trim();
  VisuMZ.CoreEngine.ExportString(_0x4b3b05, "AllMaps", true);
  SceneManager._scene._active = true;
};
VisuMZ.CoreEngine.ExtractStrFromMap = function (_0x405da7) {
  if (!$dataMap) {
    return '';
  }
  let _0xc335e5 = '█'.repeat(0x46) + "\n\n";
  let _0x1c5998 = '═'.repeat(0x46) + "\n\n";
  let _0x265c74 = '';
  this._commonEventLayers = 0x0;
  for (const _0x5d91a6 of $dataMap.events) {
    if (!_0x5d91a6) {
      continue;
    }
    let _0x1a81c0 = _0x5d91a6.id;
    let _0x3a5c53 = _0x5d91a6.name;
    let _0x26edf4 = _0x5d91a6.pages;
    for (const _0x42617f of _0x26edf4) {
      const _0x3d08f1 = _0x26edf4.indexOf(_0x42617f) + 0x1;
      let _0x1ab43e = _0x1c5998 + "《《《 Event %1: %2, Page %3 》》》\n%4\n";
      let _0x1b44a3 = VisuMZ.CoreEngine.ExtractStrFromList(_0x42617f.list);
      if (_0x1b44a3.length > 0x0) {
        if (_0x265c74.length > 0x0) {
          _0x265c74 += _0x1c5998 + "\n\n\n\n\n";
        } else {
          const _0x1452bf = $dataMapInfos[_0x405da7].name;
          _0x265c74 += _0xc335e5 + "〖〖〖 Map %1: %2 Script 〗〗〗\n\n".format(_0x405da7, _0x1452bf || 'Unnamed') + _0xc335e5;
        }
        _0x265c74 += _0x1ab43e.format(_0x1a81c0, _0x3a5c53, _0x3d08f1, _0x1b44a3);
      }
    }
  }
  if (_0x265c74.length > 0x0) {
    _0x265c74 += _0x1c5998;
  }
  return _0x265c74;
};
VisuMZ.CoreEngine.ExportStrFromAllTroops = function () {
  const _0x3e8d6c = $dataTroops.length * 0xa + Math.randomInt(0xa);
  alert("Export Troop Text operation will finish in %1 ms(s)".format(_0x3e8d6c));
  const _0x54cdf4 = [];
  for (const _0x487b5f of $dataTroops) {
    if (!_0x487b5f) {
      continue;
    }
    const _0x723855 = _0x487b5f.id;
    _0x54cdf4[_0x723855] = VisuMZ.CoreEngine.ExtractStrFromTroop(_0x723855);
  }
  setTimeout(VisuMZ.CoreEngine.exportAllTroopStrings.bind(this, _0x54cdf4), _0x3e8d6c);
};
VisuMZ.CoreEngine.ExtractStrFromTroop = function (_0x23f5f5) {
  if (!$dataTroops[_0x23f5f5]) {
    return '';
  }
  let _0x25f4ce = '█'.repeat(0x46) + "\n\n";
  let _0x4d8ff4 = '═'.repeat(0x46) + "\n\n";
  let _0xb8435 = '';
  this._commonEventLayers = 0x0;
  const _0x567347 = $dataTroops[_0x23f5f5];
  let _0x4c4136 = _0x567347.pages;
  for (const _0x2d02d6 of _0x4c4136) {
    const _0xbf6e85 = _0x4c4136.indexOf(_0x2d02d6) + 0x1;
    let _0x44ef04 = _0x4d8ff4 + "《《《 Page %1 》》》\n%2\n";
    let _0x5d540c = VisuMZ.CoreEngine.ExtractStrFromList(_0x2d02d6.list);
    if (_0x5d540c.length > 0x0) {
      if (_0xb8435.length > 0x0) {
        _0xb8435 += _0x4d8ff4 + "\n\n\n\n\n";
      } else {
        _0xb8435 += _0x25f4ce + "〖〖〖 Troop %1: %2 Script 〗〗〗\n\n".format(_0x23f5f5, _0x567347.name || "Unnamed") + _0x25f4ce;
      }
      _0xb8435 += _0x44ef04.format(_0xbf6e85, _0x5d540c);
    }
  }
  if (_0xb8435.length > 0x0) {
    _0xb8435 += _0x4d8ff4;
  }
  return _0xb8435;
};
VisuMZ.CoreEngine.exportAllTroopStrings = function (_0x53eec3) {
  _0x53eec3.remove(undefined).remove('').remove(null);
  const _0x1fe6f6 = _0x53eec3.join("\n\n\n\n\n").trim();
  VisuMZ.CoreEngine.ExportString(_0x1fe6f6, 'AllTroops', true);
  SceneManager._scene._active = true;
};
VisuMZ.CoreEngine.ExtractStrFromList = function (_0x2f3030) {
  let _0x37c719 = "\n" + '─'.repeat(0x46) + "\n";
  let _0x1d1392 = "\n" + '┄'.repeat(0x46) + "\n";
  let _0x40bad7 = '';
  for (const _0x27911b of _0x2f3030) {
    if (!_0x27911b) {
      continue;
    }
    if (_0x27911b.code === 0x65) {
      _0x40bad7 += _0x37c719 + "\n";
      _0x40bad7 += "〘Show Text〙\n";
      if (_0x27911b.parameters[0x4] !== '' && _0x27911b.parameters[0x4] !== undefined) {
        _0x40bad7 += "【%1】\n".format(_0x27911b.parameters[0x4]);
      }
    } else {
      if (_0x27911b.code === 0x191) {
        _0x40bad7 += "%1\n".format(_0x27911b.parameters[0x0]);
      } else {
        if (_0x27911b.code === 0x192) {
          _0x40bad7 += _0x37c719;
          _0x40bad7 += "%1〘Choice %2〙 %3%1".format(_0x1d1392, _0x27911b.parameters[0x0] + 0x1, _0x27911b.parameters[0x1]);
        } else {
          if (_0x27911b.code === 0x193) {
            _0x40bad7 += _0x37c719;
            _0x40bad7 += "%1〘Choice Cancel〙%1".format(_0x1d1392);
          } else {
            if (_0x27911b.code === 0x194) {
              _0x40bad7 += _0x37c719;
              _0x40bad7 += "%1〘End Choice Selection〙%1".format(_0x1d1392);
            } else {
              if (_0x27911b.code === 0x69) {
                _0x40bad7 += _0x37c719 + "\n";
                _0x40bad7 += "〘Scrolling Text〙\n";
              } else {
                if (_0x27911b.code === 0x6c) {
                  _0x40bad7 += _0x37c719 + "\n";
                  _0x40bad7 += "》Comment《\n%1\n".format(_0x27911b.parameters[0x0]);
                } else {
                  if (_0x27911b.code === 0x198) {
                    _0x40bad7 += "%1\n".format(_0x27911b.parameters[0x0]);
                  } else {
                    if (_0x27911b.code === 0x75) {
                      const _0x2d8316 = $dataCommonEvents[_0x27911b.parameters[0x0]];
                      if (_0x2d8316 && this._commonEventLayers <= 0xa) {
                        this._commonEventLayers++;
                        let _0x46eeb5 = VisuMZ.CoreEngine.ExtractStrFromList(_0x2d8316.list);
                        if (_0x46eeb5.length > 0x0) {
                          _0x40bad7 += _0x37c719;
                          _0x40bad7 += _0x1d1392;
                          _0x40bad7 += "〘Common Event %1: %2〙 Start".format(_0x2d8316.id, _0x2d8316.name);
                          _0x40bad7 += _0x1d1392;
                          _0x40bad7 += _0x46eeb5;
                          _0x40bad7 += _0x1d1392;
                          _0x40bad7 += "〘Common Event %1: %2〙 End".format(_0x2d8316.id, _0x2d8316.name);
                          _0x40bad7 += _0x1d1392;
                        }
                        this._commonEventLayers--;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (_0x40bad7.length > 0x0) {
    _0x40bad7 += _0x37c719;
  }
  return _0x40bad7;
};
PluginManager.registerCommand(pluginData.name, "OpenURL", _0x1bb7a9 => {
  VisuMZ.ConvertParams(_0x1bb7a9, _0x1bb7a9);
  const _0x5592ff = _0x1bb7a9.URL;
  VisuMZ.openURL(_0x5592ff);
});
PluginManager.registerCommand(pluginData.name, "GoldChange", _0x5b1085 => {
  VisuMZ.ConvertParams(_0x5b1085, _0x5b1085);
  const _0x24e658 = _0x5b1085.value || 0x0;
  $gameParty.gainGold(_0x24e658);
});
PluginManager.registerCommand(pluginData.name, 'MapOnceParallel', _0x30a826 => {
  if (!SceneManager.isSceneMap()) {
    return;
  }
  VisuMZ.ConvertParams(_0x30a826, _0x30a826);
  const _0x44fe31 = _0x30a826.CommonEventID;
  SceneManager._scene.playOnceParallelInterpreter(_0x44fe31);
});
PluginManager.registerCommand(pluginData.name, "PictureCoordinatesMode", _0x283171 => {
  if (!$gameTemp.isPlaytest()) {
    return;
  }
  if (!Utils.isNwjs()) {
    return;
  }
  VisuMZ.ConvertParams(_0x283171, _0x283171);
  const _0x2ebe7b = _0x283171.PictureID || 0x1;
  $gameTemp._pictureCoordinatesMode = _0x2ebe7b;
});
PluginManager.registerCommand(pluginData.name, "PictureEasingType", _0x4f9093 => {
  VisuMZ.ConvertParams(_0x4f9093, _0x4f9093);
  const _0x58f6f0 = _0x4f9093.pictureId || 0x1;
  const _0x170ffc = _0x4f9093.easingType || "Linear";
  const _0x21bb02 = $gameScreen.picture(_0x58f6f0);
  if (_0x21bb02) {
    _0x21bb02.setEasingType(_0x170ffc);
  }
});
PluginManager.registerCommand(pluginData.name, "PictureEraseAll", _0x180d56 => {
  for (let _0x2d6d41 = 0x1; _0x2d6d41 <= 0x64; _0x2d6d41++) {
    $gameScreen.erasePicture(_0x2d6d41);
  }
});
PluginManager.registerCommand(pluginData.name, "PictureEraseRange", _0x338ff7 => {
  VisuMZ.ConvertParams(_0x338ff7, _0x338ff7);
  const _0x1b4c07 = Math.min(_0x338ff7.StartID, _0x338ff7.EndingID);
  const _0x1b6e44 = Math.max(_0x338ff7.StartID, _0x338ff7.EndingID);
  for (let _0x1990fb = _0x1b4c07; _0x1990fb <= _0x1b6e44; _0x1990fb++) {
    $gameScreen.erasePicture(_0x1990fb);
  }
});
PluginManager.registerCommand(pluginData.name, "PictureRotateBy", _0x49e665 => {
  VisuMZ.ConvertParams(_0x49e665, _0x49e665);
  const _0x292b81 = Math.round(_0x49e665.PictureID).clamp(0x1, 0x64);
  const _0x4c51d7 = -Number(_0x49e665.AdjustAngle || 0x0);
  const _0x3eb121 = Math.max(_0x49e665.Duration || 0x0, 0x0);
  const _0x567e55 = _0x49e665.easingType || "Linear";
  const _0x5826ac = _0x49e665.Wait;
  const _0x1e03e5 = $gameScreen.picture(_0x292b81);
  if (!_0x1e03e5) {
    return;
  }
  _0x1e03e5.changeAnglePlusData(_0x4c51d7, _0x3eb121, _0x567e55);
  if (_0x5826ac) {
    const _0x421bc2 = $gameTemp.getLastPluginCommandInterpreter();
    if (_0x421bc2) {
      _0x421bc2.wait(_0x3eb121);
    }
  }
});
PluginManager.registerCommand(pluginData.name, 'PictureRotate', _0x47493d => {
  VisuMZ.ConvertParams(_0x47493d, _0x47493d);
  const _0x552435 = Math.round(_0x47493d.PictureID).clamp(0x1, 0x64);
  const _0x51e6c0 = -Number(_0x47493d.TargetAngle || 0x0);
  const _0x10e8c4 = Math.max(_0x47493d.Duration || 0x0, 0x0);
  const _0x50327c = _0x47493d.easingType || "Linear";
  const _0xad086e = _0x47493d.Wait;
  const _0x9fa040 = $gameScreen.picture(_0x552435);
  if (!_0x9fa040) {
    return;
  }
  _0x9fa040.setAnglePlusData(_0x51e6c0, _0x10e8c4, _0x50327c);
  if (_0xad086e) {
    const _0x385b6b = $gameTemp.getLastPluginCommandInterpreter();
    if (_0x385b6b) {
      _0x385b6b.wait(_0x10e8c4);
    }
  }
});
PluginManager.registerCommand(pluginData.name, 'PictureShowIcon', _0x3bb4a9 => {
  VisuMZ.ConvertParams(_0x3bb4a9, _0x3bb4a9);
  const _0x1e156f = Math.round(_0x3bb4a9.PictureID).clamp(0x1, 0x64);
  const _0x237008 = _0x3bb4a9.Settings;
  const _0x5a5e5f = _0x237008.Origin.clamp(0x0, 0x1);
  const _0x1be8eb = Math.round(_0x237008.PositionX || 0x0);
  const _0x4463a4 = Math.round(_0x237008.PositionY || 0x0);
  const _0x6a8968 = Math.round(_0x237008.ScaleX || 0x0);
  const _0x5a6a4d = Math.round(_0x237008.ScaleY || 0x0);
  const _0x4fc2ac = Math.round(_0x237008.Opacity).clamp(0x0, 0xff);
  const _0x2e74ae = _0x237008.BlendMode;
  const _0x177cea = _0x3bb4a9.Smooth ? "Smooth" : "Pixelated";
  const _0x25b553 = "VisuMZ CoreEngine PictureIcon %1 %2".format(_0x3bb4a9.IconIndex, _0x177cea);
  $gameScreen.showPicture(_0x1e156f, _0x25b553, _0x5a5e5f, _0x1be8eb, _0x4463a4, _0x6a8968, _0x5a6a4d, _0x4fc2ac, _0x2e74ae);
});
PluginManager.registerCommand(pluginData.name, "ScreenShake", _0xca1f45 => {
  VisuMZ.ConvertParams(_0xca1f45, _0xca1f45);
  const _0x686321 = _0xca1f45.Type || 'random';
  const _0x2c8eba = _0xca1f45.Power.clamp(0x1, 0x9);
  const _0x54a998 = _0xca1f45.Speed.clamp(0x1, 0x9);
  const _0xd84b2a = _0xca1f45.Duration || 0x1;
  const _0x294ad6 = _0xca1f45.Wait;
  $gameScreen.setCoreEngineScreenShakeStyle(_0x686321);
  $gameScreen.startShake(_0x2c8eba, _0x54a998, _0xd84b2a);
  if (_0x294ad6) {
    const _0x5ddd29 = $gameTemp.getLastPluginCommandInterpreter();
    if (_0x5ddd29) {
      _0x5ddd29.wait(_0xd84b2a);
    }
  }
});
PluginManager.registerCommand(pluginData.name, "SwitchRandomizeOne", _0x2376d8 => {
  if ($gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x2376d8, _0x2376d8);
  const _0x2bc093 = _0x2376d8.IDs;
  const _0x37aa9c = (_0x2376d8.Chance || 0x0) / 0x64;
  for (const _0x388345 of _0x2bc093) {
    const _0x563ce5 = Math.random() <= _0x37aa9c;
    $gameSwitches.setValue(_0x388345, _0x563ce5);
  }
});
PluginManager.registerCommand(pluginData.name, "SwitchRandomizeRange", _0x39f8fb => {
  if ($gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x39f8fb, _0x39f8fb);
  const _0x2e6192 = Math.min(_0x39f8fb.StartID, _0x39f8fb.EndingID);
  const _0x401777 = Math.max(_0x39f8fb.StartID, _0x39f8fb.EndingID);
  const _0x51f68d = (_0x39f8fb.Chance || 0x0) / 0x64;
  for (let _0x581c23 = _0x2e6192; _0x581c23 <= _0x401777; _0x581c23++) {
    const _0x57ff46 = Math.random() <= _0x51f68d;
    $gameSwitches.setValue(_0x581c23, _0x57ff46);
  }
});
PluginManager.registerCommand(pluginData.name, "SwitchToggleOne", _0x31b0b4 => {
  if ($gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x31b0b4, _0x31b0b4);
  const _0x2f7433 = _0x31b0b4.IDs;
  for (const _0x212435 of _0x2f7433) {
    const _0x401945 = $gameSwitches.value(_0x212435);
    $gameSwitches.setValue(_0x212435, !_0x401945);
  }
});
PluginManager.registerCommand(pluginData.name, "SwitchToggleRange", _0x22cfe => {
  if ($gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x22cfe, _0x22cfe);
  const _0x2d226c = Math.min(_0x22cfe.StartID, _0x22cfe.EndingID);
  const _0x59051b = Math.max(_0x22cfe.StartID, _0x22cfe.EndingID);
  for (let _0x3fb10f = _0x2d226c; _0x3fb10f <= _0x59051b; _0x3fb10f++) {
    const _0x370ec7 = $gameSwitches.value(_0x3fb10f);
    $gameSwitches.setValue(_0x3fb10f, !_0x370ec7);
  }
});
PluginManager.registerCommand(pluginData.name, "SystemSetFontSize", _0x46c969 => {
  VisuMZ.ConvertParams(_0x46c969, _0x46c969);
  const _0x484f64 = _0x46c969.option || 0x1;
  $gameSystem.setMainFontSize(_0x484f64);
});
PluginManager.registerCommand(pluginData.name, 'SystemSetSideView', _0x206610 => {
  if ($gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x206610, _0x206610);
  const _0x323d6e = _0x206610.option;
  if (_0x323d6e.match(/Front/i)) {
    $gameSystem.setSideView(false);
  } else if (_0x323d6e.match(/Side/i)) {
    $gameSystem.setSideView(true);
  } else {
    $gameSystem.setSideView(!$gameSystem.isSideView());
  }
});
PluginManager.registerCommand(pluginData.name, "SystemLoadAudio", _0x4d9380 => {
  if ($gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x4d9380, _0x4d9380);
  const _0x2937a2 = ['bgm', "bgs", 'me', 'se'];
  for (const _0x5f1729 of _0x2937a2) {
    const _0x296983 = _0x4d9380[_0x5f1729];
    const _0x3bbc51 = '%1/'.format(_0x5f1729);
    for (const _0x24a240 of _0x296983) {
      AudioManager.createBuffer(_0x3bbc51, _0x24a240);
    }
  }
});
PluginManager.registerCommand(pluginData.name, "SystemLoadImages", _0x39dff6 => {
  if ($gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x39dff6, _0x39dff6);
  const _0x30897d = ["animations", "battlebacks1", "battlebacks2", "characters", "enemies", "faces", "parallaxes", "pictures", "sv_actors", "sv_enemies", "system", "tilesets", 'titles1', "titles2"];
  for (const _0x565680 of _0x30897d) {
    const _0x3ff36a = _0x39dff6[_0x565680];
    const _0x2a3e4e = "img/%1/".format(_0x565680);
    for (const _0x2148a5 of _0x3ff36a) {
      ImageManager.loadBitmap(_0x2a3e4e, _0x2148a5);
    }
  }
});
PluginManager.registerCommand(pluginData.name, "SystemSetBattleSystem", _0x33e874 => {
  if ($gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x33e874, _0x33e874);
  const _0x4599db = _0x33e874.option.toUpperCase().trim();
  const _0x544c2c = VisuMZ.CoreEngine.CreateBattleSystemID(_0x4599db);
  $gameSystem.setBattleSystem(_0x544c2c);
});
VisuMZ.CoreEngine.CreateBattleSystemID = function (_0x59f923) {
  _0x59f923 = _0x59f923 || "DATABASE";
  _0x59f923 = String(_0x59f923).toUpperCase().trim();
  switch (_0x59f923) {
    case "DTB":
      return 0x0;
    case "TPB ACTIVE":
      if (Imported.VisuMZ_1_OptionsCore) {
        ConfigManager.atbActive = true;
      }
      return 0x1;
    case "TPB WAIT":
      if (Imported.VisuMZ_1_OptionsCore) {
        ConfigManager.atbActive = false;
      }
      return 0x2;
    case "CTB":
      if (Imported.VisuMZ_2_BattleSystemCTB) {
        return "CTB";
      }
      break;
    case 'STB':
      if (Imported.VisuMZ_2_BattleSystemSTB) {
        return 'STB';
      }
      break;
    case "BTB":
      if (Imported.VisuMZ_2_BattleSystemBTB) {
        return "BTB";
      }
      break;
    case "FTB":
      if (Imported.VisuMZ_2_BattleSystemFTB) {
        return "FTB";
      }
      break;
    case "OTB":
      if (Imported.VisuMZ_2_BattleSystemOTB) {
        return 'OTB';
      }
      break;
    case 'ETB':
      if (Imported.VisuMZ_2_BattleSystemETB) {
        return "ETB";
      }
      break;
    case "PTB":
      if (Imported.VisuMZ_2_BattleSystemPTB) {
        return 'PTB';
      }
      break;
  }
  return $dataSystem.battleSystem;
};
PluginManager.registerCommand(pluginData.name, 'SystemSetWindowPadding', _0x5785ee => {
  VisuMZ.ConvertParams(_0x5785ee, _0x5785ee);
  const _0x50973d = _0x5785ee.option || 0x1;
  $gameSystem.setWindowPadding(_0x50973d);
});
PluginManager.registerCommand(pluginData.name, 'TextPopupShow', _0x90c3a5 => {
  VisuMZ.ConvertParams(_0x90c3a5, _0x90c3a5);
  const _0x54ff3b = _0x90c3a5.text || '';
  $textPopup(_0x54ff3b);
});
PluginManager.registerCommand(pluginData.name, "VariableEvalReference", _0x2a0b52 => {
  VisuMZ.ConvertParams(_0x2a0b52, _0x2a0b52);
  const _0x9636e7 = _0x2a0b52.id || 0x1;
  const _0xf39f9c = _0x2a0b52.operation;
  const _0x3415e9 = _0x2a0b52.operand || 0x0;
  let _0x27b164 = $gameVariables.value(_0x9636e7) || 0x0;
  switch (_0xf39f9c) {
    case '=':
      _0x27b164 = _0x3415e9;
      break;
    case '+':
      _0x27b164 += _0x3415e9;
      break;
    case '-':
      _0x27b164 -= _0x3415e9;
      break;
    case '*':
      _0x27b164 *= _0x3415e9;
      break;
    case '/':
      _0x27b164 /= _0x3415e9;
      break;
    case '%':
      _0x27b164 %= _0x3415e9;
      break;
  }
  _0x27b164 = _0x27b164 || 0x0;
  $gameVariables.setValue(_0x9636e7, _0x27b164);
});
PluginManager.registerCommand(pluginData.name, 'VariableJsBlock', _0x2037d2 => {
  VisuMZ.ConvertParams(_0x2037d2, _0x2037d2);
  const _0x292afb = _0x2037d2.id() || 0x1;
  const _0x603b9d = _0x2037d2.operation;
  const _0x24aec8 = _0x2037d2.operand() || 0x0;
  let _0x4912a9 = $gameVariables.value(_0x292afb) || 0x0;
  switch (_0x603b9d) {
    case '=':
      _0x4912a9 = _0x24aec8;
      break;
    case '+':
      _0x4912a9 += _0x24aec8;
      break;
    case '-':
      _0x4912a9 -= _0x24aec8;
      break;
    case '*':
      _0x4912a9 *= _0x24aec8;
      break;
    case '/':
      _0x4912a9 /= _0x24aec8;
      break;
    case '%':
      _0x4912a9 %= _0x24aec8;
      break;
  }
  _0x4912a9 = _0x4912a9 || 0x0;
  $gameVariables.setValue(_0x292afb, _0x4912a9);
});
VisuMZ.CoreEngine.Scene_Boot_onDatabaseLoaded = Scene_Boot.prototype.onDatabaseLoaded;
Scene_Boot.prototype.onDatabaseLoaded = function () {
  VisuMZ.CoreEngine.Scene_Boot_onDatabaseLoaded.call(this);
  this.process_VisuMZ_CoreEngine_RegExp();
  this.process_VisuMZ_CoreEngine_Notetags();
  this.process_VisuMZ_CoreEngine_Settings();
  this.process_VisuMZ_CoreEngine_Functions();
  this.process_VisuMZ_CoreEngine_CustomParameters();
  this.process_VisuMZ_CoreEngine_ControllerButtons();
  VisuMZ.ParseAllNotetags();
};
VisuMZ.CoreEngine.RegExp = {};
Scene_Boot.prototype.process_VisuMZ_CoreEngine_RegExp = function () {
  const _0x474939 = ["MAXHP", "MAXMP", "ATK", "DEF", "MAT", "MDF", "AGI", "LUK"];
  const _0x362c8d = ['HIT', 'EVA', 'CRI', "CEV", "MEV", "MRF", "CNT", "HRG", "MRG", "TRG"];
  const _0x1259d6 = ["TGR", "GRD", 'REC', "PHA", "MCR", "TCR", "PDR", "MDR", "FDR", "EXR"];
  const _0xe8d2b0 = [_0x474939, _0x362c8d, _0x1259d6];
  const _0x1435ad = ["Plus", "Plus1", 'Plus2', "Max", "Rate", 'Rate1', "Rate2", 'Flat', "Flat1", "Flat2"];
  for (const _0x51e622 of _0xe8d2b0) {
    let _0x48ae54 = '';
    if (_0x51e622 === _0x474939) {
      _0x48ae54 = "param";
    }
    if (_0x51e622 === _0x362c8d) {
      _0x48ae54 = "xparam";
    }
    if (_0x51e622 === _0x1259d6) {
      _0x48ae54 = "sparam";
    }
    for (const _0xc63113 of _0x1435ad) {
      let _0x4588c7 = "%1%2".format(_0x48ae54, _0xc63113);
      VisuMZ.CoreEngine.RegExp[_0x4588c7] = [];
      VisuMZ.CoreEngine.RegExp[_0x4588c7 + 'JS'] = [];
      let _0x3332ea = "<%1 %2:[ ]";
      if (["Plus", "Flat"].includes(_0xc63113)) {
        _0x3332ea += "([\\+\\-]\\d+)>";
      } else {
        if (['Plus1', 'Flat1'].includes(_0xc63113)) {
          _0x3332ea += "([\\+\\-]\\d+)([%％])>";
        } else {
          if (["Plus2", 'Flat2'].includes(_0xc63113)) {
            _0x3332ea += "([\\+\\-]\\d+\\.?\\d+)>";
          } else {
            if (_0xc63113 === "Max") {
              _0x3332ea += "(\\d+)>";
            } else {
              if (_0xc63113 === 'Rate1') {
                _0x3332ea += "(\\d+)([%％])>";
              } else if (_0xc63113 === "Rate2") {
                _0x3332ea += "(\\d+\\.?\\d+)>";
              }
            }
          }
        }
      }
      for (const _0x2de992 of _0x51e622) {
        let _0x36320 = _0xc63113.replace(/[\d+]/g, '').toUpperCase();
        const _0x433245 = _0x3332ea.format(_0x2de992, _0x36320);
        VisuMZ.CoreEngine.RegExp[_0x4588c7].push(new RegExp(_0x433245, 'i'));
        const _0x5672dc = "<JS %1 %2:[ ](.*)>".format(_0x2de992, _0x36320);
        VisuMZ.CoreEngine.RegExp[_0x4588c7 + 'JS'].push(new RegExp(_0x5672dc, 'i'));
      }
    }
  }
};
Scene_Boot.prototype.process_VisuMZ_CoreEngine_Notetags = function () {
  if (VisuMZ.ParseAllNotetags) {
    return;
  }
};
Scene_Boot.prototype.process_VisuMZ_CoreEngine_Settings = function () {
  const _0x4af0c0 = VisuMZ.CoreEngine.Settings;
  if (_0x4af0c0.QoL.OpenConsole) {
    VisuMZ.ShowDevTools(true);
  }
  if (_0x4af0c0.QoL.ModernControls) {
    Input.keyMapper[0x23] = 'end';
    Input.keyMapper[0x24] = "home";
  }
  if (_0x4af0c0.ButtonAssist) {
    const _0x4f6f2a = _0x4af0c0.ButtonAssist;
    _0x4f6f2a.KeySHIFT = _0x4f6f2a.KeySHIFT || "\\}❪SHIFT❫\\{";
    _0x4f6f2a.KeyTAB = _0x4f6f2a.KeyTAB || "\\}❪TAB❫\\{";
  }
  if (_0x4af0c0.KeyboardInput.WASD) {
    Input.keyMapper[0x57] = 'up';
    Input.keyMapper[0x41] = "left";
    Input.keyMapper[0x53] = "down";
    Input.keyMapper[0x44] = "right";
    Input.keyMapper[0x45] = "pagedown";
  }
  if (_0x4af0c0.KeyboardInput.DashToggleR) {
    Input.keyMapper[0x52] = "dashToggle";
  }
  _0x4af0c0.Param.DisplayedParams = _0x4af0c0.Param.DisplayedParams.map(_0x2caa68 => _0x2caa68.toUpperCase().trim());
  _0x4af0c0.Param.ExtDisplayedParams = _0x4af0c0.Param.ExtDisplayedParams.map(_0x58fe74 => _0x58fe74.toUpperCase().trim());
  _0x4af0c0.QoL.ShiftR_Toggle = _0x4af0c0.QoL.ShiftR_Toggle ?? true;
  _0x4af0c0.QoL.ShiftT_Toggle = _0x4af0c0.QoL.ShiftT_Toggle ?? true;
};
Scene_Boot.prototype.process_VisuMZ_CoreEngine_Functions = function () {
  this.process_VisuMZ_CoreEngine_jsQuickFunctions();
};
Scene_Boot.prototype.process_VisuMZ_CoreEngine_jsQuickFunctions = function () {
  const _0xbcca71 = VisuMZ.CoreEngine.Settings.jsQuickFunc;
  for (const _0x3aa763 of _0xbcca71) {
    const _0x3936f4 = _0x3aa763.FunctionName.replace(/[ ]/g, '');
    const _0x2b1ebc = _0x3aa763.CodeJS;
    VisuMZ.CoreEngine.createJsQuickFunction(_0x3936f4, _0x2b1ebc);
  }
};
VisuMZ.CoreEngine.createJsQuickFunction = function (_0x298283, _0x683d9f) {
  if (!!window[_0x298283]) {
    if ($gameTemp.isPlaytest()) {
      console.log("WARNING: %1 has already been declared\nand cannot be used as a Quick JS Function".format(_0x298283));
    }
  }
  const _0x397c27 = "\n        try {\n            %2\n        } catch (e) {\n            if ($gameTemp.isPlaytest()) {\n                console.log('JS Quick Function \"%1\" Error!');\n                console.log(e);\n            }\n            return 0;\n        }\n    ".format(_0x298283, _0x683d9f);
  window[_0x298283] = new Function(_0x397c27);
};
Scene_Boot.prototype.process_VisuMZ_CoreEngine_CustomParameters = function () {
  const _0x5c1466 = VisuMZ.CoreEngine.Settings.CustomParam;
  if (!_0x5c1466) {
    return;
  }
  for (const _0x5e121d of _0x5c1466) {
    if (!_0x5e121d) {
      continue;
    }
    VisuMZ.CoreEngine.createCustomParameter(_0x5e121d);
  }
};
VisuMZ.CoreEngine.CustomParamNames = {};
VisuMZ.CoreEngine.CustomParamIcons = {};
VisuMZ.CoreEngine.CustomParamType = {};
VisuMZ.CoreEngine.CustomParamAbb = {};
VisuMZ.CoreEngine.createCustomParameter = function (_0x5882be) {
  const _0x49b6a2 = _0x5882be.Abbreviation;
  const _0x24f738 = _0x5882be.ParamName;
  const _0x88a5ca = _0x5882be.Icon;
  const _0x2b1242 = _0x5882be.Type;
  const _0x3687f8 = new Function(_0x5882be.ValueJS);
  VisuMZ.CoreEngine.CustomParamNames[_0x49b6a2.toUpperCase().trim()] = _0x24f738;
  VisuMZ.CoreEngine.CustomParamIcons[_0x49b6a2.toUpperCase().trim()] = _0x88a5ca;
  VisuMZ.CoreEngine.CustomParamType[_0x49b6a2.toUpperCase().trim()] = _0x2b1242;
  VisuMZ.CoreEngine.CustomParamAbb[_0x49b6a2.toUpperCase().trim()] = _0x49b6a2;
  Object.defineProperty(Game_BattlerBase.prototype, _0x49b6a2, {
    'get'() {
      const _0x4db98a = _0x3687f8.call(this);
      return _0x2b1242 === 'integer' ? Math.round(_0x4db98a) : _0x4db98a;
    }
  });
};
VisuMZ.CoreEngine.ControllerButtons = {};
VisuMZ.CoreEngine.ControllerMatches = {};
Scene_Boot.prototype.process_VisuMZ_CoreEngine_ControllerButtons = function () {
  const _0x5c6231 = VisuMZ.CoreEngine.Settings.ControllerButtons;
  for (const _0x19bcfd of _0x5c6231) {
    const _0x549abf = (_0x19bcfd.Name || '').toLowerCase().trim();
    const _0x36e38e = (_0x19bcfd.Match || '').toLowerCase().trim();
    VisuMZ.CoreEngine.ControllerButtons[_0x549abf] = _0x19bcfd;
    VisuMZ.CoreEngine.ControllerMatches[_0x36e38e] = _0x549abf;
  }
};
VisuMZ.ParseAllNotetags = function () {
  for (const _0x3c20ef of $dataActors) {
    if (_0x3c20ef) {
      VisuMZ.ParseActorNotetags(_0x3c20ef);
    }
  }
  for (const _0x5ae497 of $dataClasses) {
    if (_0x5ae497) {
      VisuMZ.ParseClassNotetags(_0x5ae497);
    }
  }
  for (const _0x18e510 of $dataSkills) {
    if (_0x18e510) {
      VisuMZ.ParseSkillNotetags(_0x18e510);
    }
  }
  for (const _0x72e363 of $dataItems) {
    if (_0x72e363) {
      VisuMZ.ParseItemNotetags(_0x72e363);
    }
  }
  for (const _0x49fb07 of $dataWeapons) {
    if (_0x49fb07) {
      VisuMZ.ParseWeaponNotetags(_0x49fb07);
    }
  }
  for (const _0x33d9d7 of $dataArmors) {
    if (_0x33d9d7) {
      VisuMZ.ParseArmorNotetags(_0x33d9d7);
    }
  }
  for (const _0x40a222 of $dataEnemies) {
    if (_0x40a222) {
      VisuMZ.ParseEnemyNotetags(_0x40a222);
    }
  }
  for (const _0x2abe6b of $dataStates) {
    if (_0x2abe6b) {
      VisuMZ.ParseStateNotetags(_0x2abe6b);
    }
  }
  for (const _0x450dac of $dataTilesets) {
    if (_0x450dac) {
      VisuMZ.ParseTilesetNotetags(_0x450dac);
    }
  }
};
VisuMZ.ParseActorNotetags = function (_0x53e512) {};
VisuMZ.ParseClassNotetags = function (_0x4abab6) {};
VisuMZ.ParseSkillNotetags = function (_0x49f199) {};
VisuMZ.ParseItemNotetags = function (_0x485eef) {};
VisuMZ.ParseWeaponNotetags = function (_0x472d48) {};
VisuMZ.ParseArmorNotetags = function (_0x2aef49) {};
VisuMZ.ParseEnemyNotetags = function (_0x5b8c9c) {};
VisuMZ.ParseStateNotetags = function (_0x28881e) {};
VisuMZ.ParseTilesetNotetags = function (_0x50f8c3) {};
VisuMZ.CoreEngine.ParseActorNotetags = VisuMZ.ParseActorNotetags;
VisuMZ.ParseActorNotetags = function (_0x2b1297) {
  VisuMZ.CoreEngine.ParseActorNotetags.call(this, _0x2b1297);
  const _0x3e885c = _0x2b1297.note;
  if (_0x3e885c.match(/<MAX LEVEL:[ ](\d+)>/i)) {
    _0x2b1297.maxLevel = Number(RegExp.$1);
    if (_0x2b1297.maxLevel === 0x0) {
      _0x2b1297.maxLevel = Number.MAX_SAFE_INTEGER;
    }
  }
  if (_0x3e885c.match(/<INITIAL LEVEL:[ ](\d+)>/i)) {
    _0x2b1297.initialLevel = Math.min(Number(RegExp.$1), _0x2b1297.maxLevel);
  }
};
VisuMZ.CoreEngine.ParseClassNotetags = VisuMZ.ParseClassNotetags;
VisuMZ.ParseClassNotetags = function (_0x52699f) {
  VisuMZ.CoreEngine.ParseClassNotetags.call(this, _0x52699f);
  if (_0x52699f.learnings) {
    for (const _0x415d72 of _0x52699f.learnings) {
      if (_0x415d72.note.match(/<LEARN AT LEVEL:[ ](\d+)>/i)) {
        _0x415d72.level = Math.max(Number(RegExp.$1), 0x1);
      }
    }
  }
};
VisuMZ.CoreEngine.ParseEnemyNotetags = VisuMZ.ParseEnemyNotetags;
VisuMZ.ParseEnemyNotetags = function (_0x705f93) {
  VisuMZ.CoreEngine.ParseEnemyNotetags.call(this, _0x705f93);
  _0x705f93.level = 0x1;
  const _0x413ec9 = _0x705f93.note;
  if (_0x413ec9.match(/<LEVEL:[ ](\d+)>/i)) {
    _0x705f93.level = Number(RegExp.$1);
  }
  if (_0x413ec9.match(/<MAXHP:[ ](\d+)>/i)) {
    _0x705f93.params[0x0] = Number(RegExp.$1);
  }
  if (_0x413ec9.match(/<MAXMP:[ ](\d+)>/i)) {
    _0x705f93.params[0x1] = Number(RegExp.$1);
  }
  if (_0x413ec9.match(/<ATK:[ ](\d+)>/i)) {
    _0x705f93.params[0x2] = Number(RegExp.$1);
  }
  if (_0x413ec9.match(/<DEF:[ ](\d+)>/i)) {
    _0x705f93.params[0x3] = Number(RegExp.$1);
  }
  if (_0x413ec9.match(/<MAT:[ ](\d+)>/i)) {
    _0x705f93.params[0x4] = Number(RegExp.$1);
  }
  if (_0x413ec9.match(/<MDF:[ ](\d+)>/i)) {
    _0x705f93.params[0x5] = Number(RegExp.$1);
  }
  if (_0x413ec9.match(/<AGI:[ ](\d+)>/i)) {
    _0x705f93.params[0x6] = Number(RegExp.$1);
  }
  if (_0x413ec9.match(/<LUK:[ ](\d+)>/i)) {
    _0x705f93.params[0x7] = Number(RegExp.$1);
  }
  if (_0x413ec9.match(/<EXP:[ ](\d+)>/i)) {
    _0x705f93.exp = Number(RegExp.$1);
  }
  if (_0x413ec9.match(/<GOLD:[ ](\d+)>/i)) {
    _0x705f93.gold = Number(RegExp.$1);
  }
};
VisuMZ.CoreEngine.Graphics_defaultStretchMode = Graphics._defaultStretchMode;
Graphics._defaultStretchMode = function () {
  switch (VisuMZ.CoreEngine.Settings.QoL.AutoStretch) {
    case "stretch":
      return true;
    case "normal":
      return false;
    default:
      return VisuMZ.CoreEngine.Graphics_defaultStretchMode.call(this);
  }
};
VisuMZ.CoreEngine.Graphics_printError = Graphics.printError;
Graphics.printError = function (_0x198600, _0x267cf1, _0x208a00 = null) {
  VisuMZ.CoreEngine.Graphics_printError.call(this, _0x198600, _0x267cf1, _0x208a00);
  VisuMZ.ShowDevTools(false);
};
VisuMZ.CoreEngine.Graphics_centerElement = Graphics._centerElement;
Graphics._centerElement = function (_0x332129) {
  VisuMZ.CoreEngine.Graphics_centerElement.call(this, _0x332129);
  this._centerElementCoreEngine(_0x332129);
};
Graphics._centerElementCoreEngine = function (_0x562084) {
  if (VisuMZ.CoreEngine.Settings.QoL.FontSmoothing) {
    _0x562084.style['font-smooth'] = "none";
  }
  if (VisuMZ.CoreEngine.Settings.QoL.PixelateImageRendering) {
    _0x562084.style['image-rendering'] = "pixelated";
  }
  const _0x55cf9a = Math.max(0x0, Math.floor(_0x562084.width * this._realScale));
  const _0x40b3fc = Math.max(0x0, Math.floor(_0x562084.height * this._realScale));
  _0x562084.style.width = _0x55cf9a + 'px';
  _0x562084.style.height = _0x40b3fc + 'px';
};
VisuMZ.CoreEngine.Bitmap_initialize = Bitmap.prototype.initialize;
Bitmap.prototype.initialize = function (_0x36699c, _0x1cf303) {
  VisuMZ.CoreEngine.Bitmap_initialize.call(this, _0x36699c, _0x1cf303);
  this._smooth = !(VisuMZ.CoreEngine.Settings.QoL.PixelateImageRendering ?? true);
};
Bitmap.prototype.markCoreEngineModified = function () {
  this._customModified = true;
};
VisuMZ.CoreEngine.Sprite_destroy = Sprite.prototype.destroy;
Sprite.prototype.destroy = function () {
  if (this._texture) {
    VisuMZ.CoreEngine.Sprite_destroy.call(this);
  }
  this.destroyCoreEngineMarkedBitmaps();
};
Sprite.prototype.destroyCoreEngineMarkedBitmaps = function () {
  if (!this.bitmap) {
    return;
  }
  if (!this.bitmap._customModified) {
    return;
  }
  if (this.bitmap._baseTexture && !this._bitmap._baseTexture.destroyed) {
    this.bitmap.destroy();
  }
};
VisuMZ.CoreEngine.Bitmap_resize = Bitmap.prototype.resize;
Bitmap.prototype.resize = function (_0xa11a80, _0x4c7dbf) {
  VisuMZ.CoreEngine.Bitmap_resize.call(this, _0xa11a80, _0x4c7dbf);
  this.markCoreEngineModified();
};
VisuMZ.CoreEngine.Bitmap_blt = Bitmap.prototype.blt;
Bitmap.prototype.blt = function (_0x1b5fcb, _0x3fdd64, _0x4ec1b0, _0x17649d, _0x15adea, _0x4a8a6a, _0x3d8952, _0x5c60ea, _0x18fd86) {
  _0x3fdd64 = Math.round(_0x3fdd64);
  _0x4ec1b0 = Math.round(_0x4ec1b0);
  _0x17649d = Math.round(_0x17649d);
  _0x15adea = Math.round(_0x15adea);
  _0x4a8a6a = Math.round(_0x4a8a6a);
  _0x3d8952 = Math.round(_0x3d8952);
  VisuMZ.CoreEngine.Bitmap_blt.call(this, _0x1b5fcb, _0x3fdd64, _0x4ec1b0, _0x17649d, _0x15adea, _0x4a8a6a, _0x3d8952, _0x5c60ea, _0x18fd86);
  this.markCoreEngineModified();
};
VisuMZ.CoreEngine.Bitmap_clearRect = Bitmap.prototype.clearRect;
Bitmap.prototype.clearRect = function (_0x265c09, _0x4d69fc, _0x326c17, _0x1848e7) {
  VisuMZ.CoreEngine.Bitmap_clearRect.call(this, _0x265c09, _0x4d69fc, _0x326c17, _0x1848e7);
  this.markCoreEngineModified();
};
VisuMZ.CoreEngine.Bitmap_fillRect = Bitmap.prototype.fillRect;
Bitmap.prototype.fillRect = function (_0x3d37c3, _0x43aebd, _0x5e1851, _0x414f23, _0x328ff8) {
  VisuMZ.CoreEngine.Bitmap_fillRect.call(this, _0x3d37c3, _0x43aebd, _0x5e1851, _0x414f23, _0x328ff8);
  this.markCoreEngineModified();
};
VisuMZ.CoreEngine.Bitmap_strokeRect = Bitmap.prototype.strokeRect;
Bitmap.prototype.strokeRect = function (_0x253298, _0x3672f5, _0xf89c92, _0x34f901, _0x437d80) {
  VisuMZ.CoreEngine.Bitmap_strokeRect.call(this, _0x253298, _0x3672f5, _0xf89c92, _0x34f901, _0x437d80);
  this.markCoreEngineModified();
};
VisuMZ.CoreEngine.Bitmap_gradientFillRect = Bitmap.prototype.gradientFillRect;
Bitmap.prototype.gradientFillRect = function (_0x10222e, _0x41f637, _0x5c57f9, _0x7b1873, _0x48683b, _0x57ee4a, _0x18c452) {
  VisuMZ.CoreEngine.Bitmap_gradientFillRect.call(this, _0x10222e, _0x41f637, _0x5c57f9, _0x7b1873, _0x48683b, _0x57ee4a, _0x18c452);
  this.markCoreEngineModified();
};
VisuMZ.CoreEngine.Bitmap_drawCircle = Bitmap.prototype.drawCircle;
Bitmap.prototype.drawCircle = function (_0x1efcb3, _0x2fa764, _0x4e85a9, _0x9f8c57) {
  _0x1efcb3 = Math.round(_0x1efcb3);
  _0x2fa764 = Math.round(_0x2fa764);
  _0x4e85a9 = Math.round(_0x4e85a9);
  VisuMZ.CoreEngine.Bitmap_drawCircle.call(this, _0x1efcb3, _0x2fa764, _0x4e85a9, _0x9f8c57);
  this.markCoreEngineModified();
};
VisuMZ.CoreEngine.Bitmap_measureTextWidth = Bitmap.prototype.measureTextWidth;
Bitmap.prototype.measureTextWidth = function (_0x25f7dd) {
  return Math.ceil(VisuMZ.CoreEngine.Bitmap_measureTextWidth.call(this, _0x25f7dd));
};
VisuMZ.CoreEngine.Bitmap_drawText = Bitmap.prototype.drawText;
Bitmap.prototype.drawText = function (_0x110887, _0x545d95, _0x1bcdda, _0x2c423a, _0x2020b3, _0x597ae) {
  _0x545d95 = Math.round(_0x545d95);
  _0x1bcdda = Math.round(_0x1bcdda);
  _0x2c423a = Math.ceil(_0x2c423a);
  _0x2020b3 = Math.ceil(_0x2020b3);
  VisuMZ.CoreEngine.Bitmap_drawText.call(this, _0x110887, _0x545d95, _0x1bcdda, _0x2c423a, _0x2020b3, _0x597ae);
  this.markCoreEngineModified();
};
VisuMZ.CoreEngine.Bitmap_drawTextOutline = Bitmap.prototype._drawTextOutline;
Bitmap.prototype._drawTextOutline = function (_0x564b61, _0x9dd6da, _0x1bd665, _0x255c83) {
  if (VisuMZ.CoreEngine.Settings.QoL.FontShadows) {
    this._drawTextShadow(_0x564b61, _0x9dd6da, _0x1bd665, _0x255c83);
  } else {
    VisuMZ.CoreEngine.Bitmap_drawTextOutline.call(this, _0x564b61, _0x9dd6da, _0x1bd665, _0x255c83);
  }
};
Bitmap.prototype._drawTextShadow = function (_0x3b6182, _0x20e774, _0x477b2b, _0xe771c7) {
  const _0x1e0d4c = this.context;
  _0x1e0d4c.fillStyle = this.outlineColor;
  _0x1e0d4c.fillText(_0x3b6182, _0x20e774 + 0x2, _0x477b2b + 0x2, _0xe771c7);
};
VisuMZ.CoreEngine.Input_clear = Input.clear;
Input.clear = function () {
  VisuMZ.CoreEngine.Input_clear.call(this);
  this._inputString = undefined;
  this._inputSpecialKeyCode = undefined;
  this._gamepadWait = Input.keyRepeatWait;
};
VisuMZ.CoreEngine.Input_update = Input.update;
Input.update = function () {
  VisuMZ.CoreEngine.Input_update.call(this);
  if (this._gamepadWait) {
    this._gamepadWait--;
  }
};
VisuMZ.CoreEngine.Input_pollGamepads = Input._pollGamepads;
Input._pollGamepads = function () {
  if (this._gamepadWait) {
    return;
  }
  VisuMZ.CoreEngine.Input_pollGamepads.call(this);
};
VisuMZ.CoreEngine.Input_setupEventHandlers = Input._setupEventHandlers;
Input._setupEventHandlers = function () {
  VisuMZ.CoreEngine.Input_setupEventHandlers.call(this);
  document.addEventListener("keypress", this._onKeyPress.bind(this));
};
VisuMZ.CoreEngine.Input_onKeyDown = Input._onKeyDown;
Input._onKeyDown = function (_0x2df368) {
  this._inputSpecialKeyCode = _0x2df368.keyCode;
  VisuMZ.CoreEngine.Input_onKeyDown.call(this, _0x2df368);
  this.setLastGamepadUsed(null);
};
Input._onKeyPress = function (_0x390269) {
  this._registerKeyInput(_0x390269);
};
Input._registerKeyInput = function (_0x263831) {
  this._inputSpecialKeyCode = _0x263831.keyCode;
  let _0x493b2b = String.fromCharCode(_0x263831.charCode);
  if (this._inputString === undefined) {
    this._inputString = _0x493b2b;
  } else {
    this._inputString += _0x493b2b;
  }
};
VisuMZ.CoreEngine.Input_shouldPreventDefault = Input._shouldPreventDefault;
Input._shouldPreventDefault = function (_0x47394a) {
  if (_0x47394a === 0x8) {
    return false;
  }
  return VisuMZ.CoreEngine.Input_shouldPreventDefault.call(this, _0x47394a);
};
Input.isSpecialCode = function (_0x2ea9f9) {
  if (_0x2ea9f9.match(/backspace/i)) {
    return this._inputSpecialKeyCode === 0x8;
  }
  if (_0x2ea9f9.match(/enter/i)) {
    return this._inputSpecialKeyCode === 0xd;
  }
  if (_0x2ea9f9.match(/escape/i)) {
    return this._inputSpecialKeyCode === 0x1b;
  }
};
Input.isNumpadPressed = function () {
  return [0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39].contains(this._inputSpecialKeyCode);
};
Input.isArrowPressed = function () {
  return [0x25, 0x26, 0x27, 0x28].contains(this._inputSpecialKeyCode);
};
Input.isGamepadConnected = function () {
  if (navigator.getGamepads) {
    const _0xe4be8c = navigator.getGamepads();
    if (_0xe4be8c) {
      for (const _0x54f350 of _0xe4be8c) {
        if (_0x54f350 && _0x54f350.connected) {
          return true;
        }
      }
    }
  }
  return false;
};
Input.isGamepadTriggered = function () {
  if (navigator.getGamepads) {
    const _0x6d059e = navigator.getGamepads();
    if (_0x6d059e) {
      for (const _0x29af8b of _0x6d059e) {
        if (_0x29af8b && _0x29af8b.connected) {
          if (this.isGamepadButtonPressed(_0x29af8b)) {
            return true;
          }
          if (this.isGamepadAxisMoved(_0x29af8b)) {
            return true;
          }
        }
      }
    }
  }
  return false;
};
Input.isGamepadButtonPressed = function (_0x4839f4) {
  const _0xd9ed4a = _0x4839f4.buttons;
  for (let _0x540267 = 0x0; _0x540267 < _0xd9ed4a.length; _0x540267++) {
    if (_0xd9ed4a[_0x540267].pressed) {
      return true;
    }
  }
  return false;
};
Input.isGamepadAxisMoved = function (_0xd88a2c) {
  const _0x3d26bd = _0xd88a2c.axes;
  if (_0x3d26bd[0x0] < -0.5) {
    return true;
  }
  if (_0x3d26bd[0x0] > 0.5) {
    return true;
  }
  if (_0x3d26bd[0x1] < -0.5) {
    return true;
  }
  if (_0x3d26bd[0x1] > 0.5) {
    return true;
  }
  return false;
};
Input.getLastGamepadUsed = function () {
  return this._lastGamepad || null;
};
Input.setLastGamepadUsed = function (_0x2e0128) {
  this._lastGamepad = _0x2e0128;
};
VisuMZ.CoreEngine.Input_updateGamepadState = Input._updateGamepadState;
Input._updateGamepadState = function (_0x400564) {
  VisuMZ.CoreEngine.Input_updateGamepadState.call(this, _0x400564);
  if (this.isGamepadButtonPressed(_0x400564) || this.isGamepadAxisMoved(_0x400564)) {
    this.setLastGamepadUsed(_0x400564);
  }
};
Input.getLastUsedGamepadType = function () {
  return this._lastGamepad ? this._lastGamepad.id : 'Keyboard';
};
VisuMZ.CoreEngine.Tilemap_addShadow = Tilemap.prototype._addShadow;
Tilemap.prototype._addShadow = function (_0x232e2d, _0x98ed57, _0x2a5826, _0x18cc57) {
  if ($gameMap && $gameMap.areTileShadowsHidden()) {
    return;
  }
  VisuMZ.CoreEngine.Tilemap_addShadow.call(this, _0x232e2d, _0x98ed57, _0x2a5826, _0x18cc57);
};
Tilemap.Renderer.prototype._createInternalTextures = function () {
  this._destroyInternalTextures();
  for (let _0x15f43c = 0x0; _0x15f43c < Tilemap.Layer.MAX_GL_TEXTURES; _0x15f43c++) {
    const _0x5ab484 = new PIXI.BaseTexture();
    _0x5ab484.setSize(0x800, 0x800);
    if (VisuMZ.CoreEngine.Settings.QoL.PixelateImageRendering) {
      _0x5ab484.scaleMode = PIXI.SCALE_MODES.NEAREST;
    }
    this._internalTextures.push(_0x5ab484);
  }
};
WindowLayer.prototype.isMaskingEnabled = function () {
  return SceneManager && SceneManager._scene ? SceneManager._scene.isWindowMaskingEnabled() : true;
};
VisuMZ.CoreEngine.WindowLayer_render = WindowLayer.prototype.render;
WindowLayer.prototype.render = function render(_0xde64b2) {
  if (this.isMaskingEnabled()) {
    VisuMZ.CoreEngine.WindowLayer_render.call(this, _0xde64b2);
  } else {
    this.renderNoMask(_0xde64b2);
  }
};
WindowLayer.prototype.renderNoMask = function render(_0x4fcf83) {
  if (!this.visible) {
    return;
  }
  const _0x25a1a6 = new PIXI.Graphics();
  const _0x234141 = _0x4fcf83.gl;
  const _0x567f99 = this.children.clone();
  _0x4fcf83.framebuffer.forceStencil();
  _0x25a1a6.transform = this.transform;
  _0x4fcf83.batch.flush();
  _0x234141.enable(_0x234141.STENCIL_TEST);
  while (_0x567f99.length > 0x0) {
    const _0x854686 = _0x567f99.shift();
    if (_0x854686._isWindow && _0x854686.visible && _0x854686.openness > 0x0) {
      _0x234141.stencilFunc(_0x234141.EQUAL, 0x0, -1);
      _0x234141.stencilOp(_0x234141.KEEP, _0x234141.KEEP, _0x234141.KEEP);
      _0x854686.render(_0x4fcf83);
      _0x4fcf83.batch.flush();
      _0x25a1a6.clear();
      _0x234141.stencilFunc(_0x234141.ALWAYS, 0x1, -1);
      _0x234141.stencilOp(_0x234141.REPLACE, _0x234141.REPLACE, _0x234141.REPLACE);
      _0x234141.blendFunc(_0x234141.ZERO, _0x234141.ONE);
      _0x25a1a6.render(_0x4fcf83);
      _0x4fcf83.batch.flush();
      _0x234141.blendFunc(_0x234141.ONE, _0x234141.ONE_MINUS_SRC_ALPHA);
    }
  }
  _0x234141.disable(_0x234141.STENCIL_TEST);
  _0x234141.clear(_0x234141.STENCIL_BUFFER_BIT);
  _0x234141.clearStencil(0x0);
  _0x4fcf83.batch.flush();
  for (const _0x5f5b6a of this.children) {
    if (!_0x5f5b6a._isWindow && _0x5f5b6a.visible) {
      _0x5f5b6a.render(_0x4fcf83);
    }
  }
  _0x4fcf83.batch.flush();
};
DataManager.isKeyItem = function (_0x566994) {
  return this.isItem(_0x566994) && _0x566994.itypeId === 0x2;
};
VisuMZ.CoreEngine.DataManager_setupNewGame = DataManager.setupNewGame;
DataManager.setupNewGame = function () {
  VisuMZ.CoreEngine.DataManager_setupNewGame.call(this);
  this.reservePlayTestNewGameCommonEvent();
  this.reserveNewGameCommonEvent();
};
DataManager.reservePlayTestNewGameCommonEvent = function () {
  if ($gameTemp.isPlaytest()) {
    const _0x35b5bd = VisuMZ.CoreEngine.Settings.QoL.NewGameCommonEvent;
    if (_0x35b5bd > 0x0) {
      $gameTemp.reserveCommonEvent(_0x35b5bd);
    }
  }
};
DataManager.reserveNewGameCommonEvent = function () {
  const _0x3e237f = VisuMZ.CoreEngine.Settings.QoL.NewGameCommonEventAll || 0x0;
  if (_0x3e237f > 0x0) {
    $gameTemp.reserveCommonEvent(_0x3e237f);
  }
};
DataManager.createTroopNote = function (_0x2715bd) {
  const _0x41f9f9 = $dataTroops[_0x2715bd];
  if (!_0x41f9f9) {
    return '';
  }
  let _0x1d795e = '';
  _0x1d795e += _0x41f9f9.name;
  for (const _0x297d1c of _0x41f9f9.pages) {
    for (const _0x129818 of _0x297d1c.list) {
      if ([0x6c, 0x198].includes(_0x129818.code)) {
        _0x1d795e += "\n";
        _0x1d795e += _0x129818.parameters[0x0];
      }
    }
  }
  return _0x1d795e;
};
if (VisuMZ.CoreEngine.Settings.QoL.ShortcutScripts ?? true) {
  $scene = null;
  VisuMZ.CoreEngine.Scene_Base_create = Scene_Base.prototype.create;
  Scene_Base.prototype.create = function () {
    VisuMZ.CoreEngine.Scene_Base_create.call(this);
    $scene = this;
  };
  $spriteset = null;
  VisuMZ.CoreEngine.Scene_Map_createSpriteset = Scene_Map.prototype.createSpriteset;
  Scene_Map.prototype.createSpriteset = function () {
    VisuMZ.CoreEngine.Scene_Map_createSpriteset.call(this);
    $spriteset = this._spriteset;
  };
  VisuMZ.CoreEngine.Scene_Battle_createSpriteset = Scene_Battle.prototype.createSpriteset;
  Scene_Battle.prototype.createSpriteset = function () {
    VisuMZ.CoreEngine.Scene_Battle_createSpriteset.call(this);
    $spriteset = this._spriteset;
  };
  VisuMZ.CoreEngine.Scene_Base_terminate = Scene_Base.prototype.terminate;
  Scene_Base.prototype.terminate = function () {
    VisuMZ.CoreEngine.Scene_Base_terminate.call(this);
    $spriteset = null;
    $subject = null;
    $targets = null;
    $target = null;
  };
  $subject = null;
  $targets = null;
  $target = null;
  VisuMZ.CoreEngine.BattleManager_update = BattleManager.update;
  BattleManager.update = function (_0x16fe45) {
    VisuMZ.CoreEngine.BattleManager_update.call(this, _0x16fe45);
    $subject = this._subject;
    $targets = this._targets;
    $target = this._target || this._targets[0x0];
  };
  $event = null;
  VisuMZ.CoreEngine.Game_Event_start = Game_Event.prototype.start;
  Game_Event.prototype.start = function () {
    VisuMZ.CoreEngine.Game_Event_start.call(this);
    $event = this;
  };
  VisuMZ.CoreEngine.Scene_Map_update = Scene_Map.prototype.update;
  Scene_Map.prototype.update = function () {
    VisuMZ.CoreEngine.Scene_Map_update.call(this);
    $gameMap.updateCurrentEvent();
  };
  Game_Map.prototype.updateCurrentEvent = function () {
    if (!this.isEventRunning() && $event !== null) {
      $event = null;
    }
  };
  $commonEvent = function (_0xa5686b) {
    if ($gameTemp) {
      $gameTemp.reserveCommonEvent(_0xa5686b);
    }
  };
  $onceParallel = function (_0x877e29, _0x5c8ed9) {
    if (SceneManager.isSceneMap()) {
      $scene.playOnceParallelInterpreter(_0x877e29, _0x5c8ed9);
    } else {
      if (SceneManager.isSceneBattle()) {
        if (Imported.VisuMZ_1_BattleCore) {
          $scene.playOnceParallelInterpreter(_0x877e29);
        } else if ($gameTemp && $gameTemp.isPlaytest()) {
          alert("Once Parallel for Battle requires VisuMZ_1_BattleCore!");
        }
      } else if ($gameTemp && $gameTemp.isPlaytest()) {
        alert("This scene cannot utilize a Once Parallel!");
      }
    }
  };
}
;
StorageManager.jsonToZip = function (_0x756c6d) {
  return new Promise((_0x1441ec, _0x557c0b) => {
    try {
      const _0x28fd24 = pako.deflate(_0x756c6d, {
        'to': "string",
        'level': 0x1
      });
      if (_0x28fd24.length >= 0xc350) {}
      _0x1441ec(_0x28fd24);
    } catch (_0x5f2736) {
      _0x557c0b(_0x5f2736);
    }
  });
};
TextManager.stringKeyMap = ['', '', '', "CANCEL", '', '', "HELP", '', 'BACKSPACE', "TAB", '', '', "CLEAR", "ENTER", "ENTER_SPECIAL", '', "SHIFT", "CTRL", "ALT", "PAUSE", "CAPSLOCK", "KANA", "EISU", "JUNJA", 'FINAL', "HANJA", '', 'ESC', 'CONVERT', 'NONCONVERT', "ACCEPT", "MODECHANGE", "SPACE", "PGUP", 'PGDN', "END", 'HOME', "LEFT", 'UP', "RIGHT", "DOWN", "SELECT", 'PRINT', "EXECUTE", "PRINTSCREEN", "INSERT", 'DELETE', '', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "COLON", "SEMICOLON", "LESS_THAN", "EQUALS", 'GREATER_THAN', "QUESTION_MARK", 'AT', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "OS_KEY", '', "CONTEXT_MENU", '', "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", 'NUMPAD4', "NUMPAD5", "NUMPAD6", "NUMPAD7", 'NUMPAD8', "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', "F10", "F11", 'F12', "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", 'F23', "F24", '', '', '', '', '', '', '', '', "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", 'WIN_OEM_FJ_ROYA', '', '', '', '', '', '', '', '', '', "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", 'HYPHEN_MINUS', "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", '', '', '', '', 'VOLUME_MUTE', "VOLUME_DOWN", "VOLUME_UP", '', '', 'SEMICOLON', 'EQUALS', "COMMA", "MINUS", "PERIOD", 'SLASH', "BACK_QUOTE", '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', "OPEN_BRACKET", 'BACK_SLASH', "CLOSE_BRACKET", 'QUOTE', '', "META", "ALTGR", '', "WIN_ICO_HELP", "WIN_ICO_00", '', 'WIN_ICO_CLEAR', '', '', "WIN_OEM_RESET", 'WIN_OEM_JUMP', "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", 'WIN_OEM_ATTN', "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", 'EXSEL', "EREOF", "PLAY", 'ZOOM', '', "PA1", "WIN_OEM_CLEAR", ''];
TextManager.buttonAssistOk = VisuMZ.CoreEngine.Settings.ButtonAssist.OkText;
TextManager.buttonAssistCancel = VisuMZ.CoreEngine.Settings.ButtonAssist.CancelText;
TextManager.buttonAssistSwitch = VisuMZ.CoreEngine.Settings.ButtonAssist.SwitchActorText;
VisuMZ.CoreEngine.TextManager_param = TextManager.param;
TextManager.param = function (_0x1b1780) {
  return typeof _0x1b1780 === "number" ? VisuMZ.CoreEngine.TextManager_param.call(this, _0x1b1780) : this.paramName(_0x1b1780);
};
TextManager.paramName = function (_0x14e2e9) {
  _0x14e2e9 = String(_0x14e2e9 || '').toUpperCase();
  const _0x4d6472 = VisuMZ.CoreEngine.Settings.Param;
  if (_0x14e2e9 === "MAXHP") {
    return $dataSystem.terms.params[0x0];
  }
  if (_0x14e2e9 === "MAXMP") {
    return $dataSystem.terms.params[0x1];
  }
  if (_0x14e2e9 === 'ATK') {
    return $dataSystem.terms.params[0x2];
  }
  if (_0x14e2e9 === "DEF") {
    return $dataSystem.terms.params[0x3];
  }
  if (_0x14e2e9 === "MAT") {
    return $dataSystem.terms.params[0x4];
  }
  if (_0x14e2e9 === "MDF") {
    return $dataSystem.terms.params[0x5];
  }
  if (_0x14e2e9 === "AGI") {
    return $dataSystem.terms.params[0x6];
  }
  if (_0x14e2e9 === "LUK") {
    return $dataSystem.terms.params[0x7];
  }
  if (_0x14e2e9 === 'HIT') {
    return _0x4d6472.XParamVocab0;
  }
  if (_0x14e2e9 === "EVA") {
    return _0x4d6472.XParamVocab1;
  }
  if (_0x14e2e9 === "CRI") {
    return _0x4d6472.XParamVocab2;
  }
  if (_0x14e2e9 === 'CEV') {
    return _0x4d6472.XParamVocab3;
  }
  if (_0x14e2e9 === "MEV") {
    return _0x4d6472.XParamVocab4;
  }
  if (_0x14e2e9 === "MRF") {
    return _0x4d6472.XParamVocab5;
  }
  if (_0x14e2e9 === "CNT") {
    return _0x4d6472.XParamVocab6;
  }
  if (_0x14e2e9 === "HRG") {
    return _0x4d6472.XParamVocab7;
  }
  if (_0x14e2e9 === "MRG") {
    return _0x4d6472.XParamVocab8;
  }
  if (_0x14e2e9 === "TRG") {
    return _0x4d6472.XParamVocab9;
  }
  if (_0x14e2e9 === "TGR") {
    return _0x4d6472.SParamVocab0;
  }
  if (_0x14e2e9 === "GRD") {
    return _0x4d6472.SParamVocab1;
  }
  if (_0x14e2e9 === "REC") {
    return _0x4d6472.SParamVocab2;
  }
  if (_0x14e2e9 === "PHA") {
    return _0x4d6472.SParamVocab3;
  }
  if (_0x14e2e9 === 'MCR') {
    return _0x4d6472.SParamVocab4;
  }
  if (_0x14e2e9 === "TCR") {
    return _0x4d6472.SParamVocab5;
  }
  if (_0x14e2e9 === "PDR") {
    return _0x4d6472.SParamVocab6;
  }
  if (_0x14e2e9 === 'MDR') {
    return _0x4d6472.SParamVocab7;
  }
  if (_0x14e2e9 === 'FDR') {
    return _0x4d6472.SParamVocab8;
  }
  if (_0x14e2e9 === "EXR") {
    return _0x4d6472.SParamVocab9;
  }
  if (VisuMZ.CoreEngine.CustomParamNames[_0x14e2e9]) {
    return VisuMZ.CoreEngine.CustomParamNames[_0x14e2e9];
  }
  return '';
};
TextManager.getInputButtonString = function (_0x1145d5) {
  const _0x44699a = Input.getLastUsedGamepadType();
  return _0x44699a === 'Keyboard' ? this.getKeyboardInputButtonString(_0x1145d5) : this.getControllerInputButtonString(_0x44699a, _0x1145d5);
};
TextManager.getKeyboardInputButtonString = function (_0x2be127) {
  const _0x35e6dc = VisuMZ.CoreEngine.Settings.ButtonAssist.SplitEscape;
  if (!_0x35e6dc) {
    if (_0x2be127 === "cancel") {
      _0x2be127 = "escape";
    }
    if (_0x2be127 === "menu") {
      _0x2be127 = "escape";
    }
  }
  let _0x16acf5 = [];
  for (let _0x1bf53f in Input.keyMapper) {
    _0x1bf53f = Number(_0x1bf53f);
    if (_0x1bf53f >= 0x60 && _0x1bf53f <= 0x69) {
      continue;
    }
    if ([0x12, 0x20].includes(_0x1bf53f)) {
      continue;
    }
    if (_0x2be127 === Input.keyMapper[_0x1bf53f]) {
      _0x16acf5.push(_0x1bf53f);
    }
  }
  for (let _0x2a2040 = 0x0; _0x2a2040 < _0x16acf5.length; _0x2a2040++) {
    _0x16acf5[_0x2a2040] = TextManager.stringKeyMap[_0x16acf5[_0x2a2040]];
  }
  return this.makeInputButtonString(_0x16acf5);
};
TextManager.makeInputButtonString = function (_0x4c5592) {
  const _0x30960d = VisuMZ.CoreEngine.Settings.ButtonAssist;
  const _0x9d2292 = _0x30960d.KeyUnlisted;
  const _0x489a9d = _0x4c5592.pop();
  const _0x6476ae = "Key%1".format(_0x489a9d);
  return _0x30960d[_0x6476ae] ? _0x30960d[_0x6476ae] : _0x9d2292.format(_0x489a9d);
};
TextManager.getInputMultiButtonStrings = function (_0x4b761d, _0xdb4ab1) {
  const _0x1a2fed = VisuMZ.CoreEngine.Settings.ButtonAssist;
  const _0x499c3a = _0x1a2fed.MultiKeyFmt;
  const _0x2b8ff3 = this.getInputButtonString(_0x4b761d);
  const _0x3837e7 = this.getInputButtonString(_0xdb4ab1);
  return _0x499c3a.format(_0x2b8ff3, _0x3837e7);
};
TextManager.getControllerInputButtonString = function (_0x307117, _0x11bcab) {
  const _0x4a8c2e = _0x307117.toLowerCase().trim();
  const _0x22dc8a = VisuMZ.CoreEngine.ControllerButtons[_0x4a8c2e];
  if (!_0x22dc8a) {
    return this.getControllerInputButtonMatch(_0x307117, _0x11bcab);
  }
  return _0x22dc8a[_0x11bcab] || this.getKeyboardInputButtonString(_0x307117, _0x11bcab);
};
TextManager.getControllerInputButtonMatch = function (_0x270328, _0x1e66a4) {
  const _0x3852af = _0x270328.toLowerCase().trim();
  for (const _0x2e3462 in VisuMZ.CoreEngine.ControllerMatches) {
    if (_0x3852af.includes(_0x2e3462)) {
      const _0xaf1e74 = VisuMZ.CoreEngine.ControllerMatches[_0x2e3462];
      const _0x2b7d76 = VisuMZ.CoreEngine.ControllerButtons[_0xaf1e74];
      return _0x2b7d76[_0x1e66a4] || this.getKeyboardInputButtonString(_0x1e66a4);
    }
  }
  return this.getKeyboardInputButtonString(_0x1e66a4);
};
VisuMZ.CoreEngine.ColorManager_loadWindowskin = ColorManager.loadWindowskin;
ColorManager.loadWindowskin = function () {
  VisuMZ.CoreEngine.ColorManager_loadWindowskin.call(this);
  this._colorCache = this._colorCache || {};
};
ColorManager.getColorDataFromPluginParameters = function (_0x58b50e, _0x168f06) {
  _0x168f06 = String(_0x168f06);
  this._colorCache = this._colorCache || {};
  if (_0x168f06.match(/#(.*)/i)) {
    this._colorCache[_0x58b50e] = "#%1".format(String(RegExp.$1));
  } else {
    this._colorCache[_0x58b50e] = this.textColor(Number(_0x168f06));
  }
  return this._colorCache[_0x58b50e];
};
ColorManager.getColor = function (_0x437e61) {
  _0x437e61 = String(_0x437e61);
  return _0x437e61.match(/#(.*)/i) ? "#%1".format(String(RegExp.$1)) : this.textColor(Number(_0x437e61));
};
ColorManager.clearCachedKeys = function () {
  this._colorCache = {};
};
ColorManager.normalColor = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_normalColor) {
    return this._colorCache._stored_normalColor;
  }
  const _0x395efb = VisuMZ.CoreEngine.Settings.Color.ColorNormal;
  return this.getColorDataFromPluginParameters("_stored_normalColor", _0x395efb);
};
ColorManager.systemColor = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_systemColor) {
    return this._colorCache._stored_systemColor;
  }
  const _0xfbd64d = VisuMZ.CoreEngine.Settings.Color.ColorSystem;
  return this.getColorDataFromPluginParameters("_stored_systemColor", _0xfbd64d);
};
ColorManager.crisisColor = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_crisisColor) {
    return this._colorCache._stored_crisisColor;
  }
  const _0x30552c = VisuMZ.CoreEngine.Settings.Color.ColorCrisis;
  return this.getColorDataFromPluginParameters("_stored_crisisColor", _0x30552c);
};
ColorManager.deathColor = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_deathColor) {
    return this._colorCache._stored_deathColor;
  }
  const _0xc766a4 = VisuMZ.CoreEngine.Settings.Color.ColorDeath;
  return this.getColorDataFromPluginParameters('_stored_deathColor', _0xc766a4);
};
ColorManager.gaugeBackColor = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_gaugeBackColor) {
    return this._colorCache._stored_gaugeBackColor;
  }
  const _0x365989 = VisuMZ.CoreEngine.Settings.Color.ColorGaugeBack;
  return this.getColorDataFromPluginParameters('_stored_gaugeBackColor', _0x365989);
};
ColorManager.hpGaugeColor1 = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_hpGaugeColor1) {
    return this._colorCache._stored_hpGaugeColor1;
  }
  const _0x5171c3 = VisuMZ.CoreEngine.Settings.Color.ColorHPGauge1;
  return this.getColorDataFromPluginParameters("_stored_hpGaugeColor1", _0x5171c3);
};
ColorManager.hpGaugeColor2 = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_hpGaugeColor2) {
    return this._colorCache._stored_hpGaugeColor2;
  }
  const _0x5ed06e = VisuMZ.CoreEngine.Settings.Color.ColorHPGauge2;
  return this.getColorDataFromPluginParameters("_stored_hpGaugeColor2", _0x5ed06e);
};
ColorManager.mpGaugeColor1 = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_mpGaugeColor1) {
    return this._colorCache._stored_mpGaugeColor1;
  }
  const _0x420875 = VisuMZ.CoreEngine.Settings.Color.ColorMPGauge1;
  return this.getColorDataFromPluginParameters('_stored_mpGaugeColor1', _0x420875);
};
ColorManager.mpGaugeColor2 = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_mpGaugeColor2) {
    return this._colorCache._stored_mpGaugeColor2;
  }
  const _0x403faa = VisuMZ.CoreEngine.Settings.Color.ColorMPGauge2;
  return this.getColorDataFromPluginParameters("_stored_mpGaugeColor2", _0x403faa);
};
ColorManager.mpCostColor = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_mpCostColor) {
    return this._colorCache._stored_mpCostColor;
  }
  const _0x420d59 = VisuMZ.CoreEngine.Settings.Color.ColorMPCost;
  return this.getColorDataFromPluginParameters("_stored_mpCostColor", _0x420d59);
};
ColorManager.powerUpColor = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_powerUpColor) {
    return this._colorCache._stored_powerUpColor;
  }
  const _0x189c2e = VisuMZ.CoreEngine.Settings.Color.ColorPowerUp;
  return this.getColorDataFromPluginParameters("_stored_powerUpColor", _0x189c2e);
};
ColorManager.powerDownColor = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_powerDownColor) {
    return this._colorCache._stored_powerDownColor;
  }
  const _0x1e0f38 = VisuMZ.CoreEngine.Settings.Color.ColorPowerDown;
  return this.getColorDataFromPluginParameters("_stored_powerDownColor", _0x1e0f38);
};
ColorManager.ctGaugeColor1 = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_ctGaugeColor1) {
    return this._colorCache._stored_ctGaugeColor1;
  }
  const _0x4359a4 = VisuMZ.CoreEngine.Settings.Color.ColorCTGauge1;
  return this.getColorDataFromPluginParameters("_stored_ctGaugeColor1", _0x4359a4);
};
ColorManager.ctGaugeColor2 = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_ctGaugeColor2) {
    return this._colorCache._stored_ctGaugeColor2;
  }
  const _0x1a0a45 = VisuMZ.CoreEngine.Settings.Color.ColorCTGauge2;
  return this.getColorDataFromPluginParameters("_stored_ctGaugeColor2", _0x1a0a45);
};
ColorManager.tpGaugeColor1 = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_tpGaugeColor1) {
    return this._colorCache._stored_tpGaugeColor1;
  }
  const _0x4d35d0 = VisuMZ.CoreEngine.Settings.Color.ColorTPGauge1;
  return this.getColorDataFromPluginParameters("_stored_tpGaugeColor1", _0x4d35d0);
};
ColorManager.tpGaugeColor2 = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_tpGaugeColor2) {
    return this._colorCache._stored_tpGaugeColor2;
  }
  const _0x18bf4f = VisuMZ.CoreEngine.Settings.Color.ColorTPGauge2;
  return this.getColorDataFromPluginParameters("_stored_tpGaugeColor2", _0x18bf4f);
};
ColorManager.tpCostColor = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_tpCostColor) {
    return this._colorCache._stored_tpCostColor;
  }
  const _0x3d0e7e = VisuMZ.CoreEngine.Settings.Color.ColorTPCost;
  return this.getColorDataFromPluginParameters("_stored_tpCostColor", _0x3d0e7e);
};
ColorManager.pendingColor = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_pendingColor) {
    return this._colorCache._stored_pendingColor;
  }
  const _0x54f722 = VisuMZ.CoreEngine.Settings.Color.ColorTPCost;
  return this.getColorDataFromPluginParameters("_stored_pendingColor", _0x54f722);
};
ColorManager.expGaugeColor1 = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_expGaugeColor1) {
    return this._colorCache._stored_expGaugeColor1;
  }
  const _0x2f250a = VisuMZ.CoreEngine.Settings.Color.ColorExpGauge1;
  return this.getColorDataFromPluginParameters("_stored_expGaugeColor1", _0x2f250a);
};
ColorManager.expGaugeColor2 = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_expGaugeColor2) {
    return this._colorCache._stored_expGaugeColor2;
  }
  const _0x266b48 = VisuMZ.CoreEngine.Settings.Color.ColorExpGauge2;
  return this.getColorDataFromPluginParameters('_stored_expGaugeColor2', _0x266b48);
};
ColorManager.maxLvGaugeColor1 = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_maxLvGaugeColor1) {
    return this._colorCache._stored_maxLvGaugeColor1;
  }
  const _0x946840 = VisuMZ.CoreEngine.Settings.Color.ColorMaxLvGauge1;
  return this.getColorDataFromPluginParameters("_stored_maxLvGaugeColor1", _0x946840);
};
ColorManager.maxLvGaugeColor2 = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_maxLvGaugeColor2) {
    return this._colorCache._stored_maxLvGaugeColor2;
  }
  const _0x162fe3 = VisuMZ.CoreEngine.Settings.Color.ColorMaxLvGauge2;
  return this.getColorDataFromPluginParameters("_stored_maxLvGaugeColor2", _0x162fe3);
};
ColorManager.hpColor = function (_0x33fdd5) {
  return VisuMZ.CoreEngine.Settings.Color.ActorHPColor.call(this, _0x33fdd5);
};
ColorManager.mpColor = function (_0x4fcda0) {
  return VisuMZ.CoreEngine.Settings.Color.ActorMPColor.call(this, _0x4fcda0);
};
ColorManager.tpColor = function (_0x2941e7) {
  return VisuMZ.CoreEngine.Settings.Color.ActorTPColor.call(this, _0x2941e7);
};
ColorManager.paramchangeTextColor = function (_0x3c88aa) {
  return VisuMZ.CoreEngine.Settings.Color.ParamChange.call(this, _0x3c88aa);
};
ColorManager.damageColor = function (_0x4156f2) {
  return VisuMZ.CoreEngine.Settings.Color.DamageColor.call(this, _0x4156f2);
};
ColorManager.outlineColor = function () {
  return VisuMZ.CoreEngine.Settings.Color.OutlineColor;
};
ColorManager.outlineColorDmg = function () {
  return VisuMZ.CoreEngine.Settings.Color.OutlineColorDmg || "rgba(0, 0, 0, 0.7)";
};
ColorManager.outlineColorGauge = function () {
  return VisuMZ.CoreEngine.Settings.Color.OutlineColorGauge || "rgba(0, 0, 0, 1.0)";
};
ColorManager.dimColor1 = function () {
  return VisuMZ.CoreEngine.Settings.Color.DimColor1;
};
ColorManager.dimColor2 = function () {
  return VisuMZ.CoreEngine.Settings.Color.DimColor2;
};
ColorManager.itemBackColor1 = function () {
  return VisuMZ.CoreEngine.Settings.Color.ItemBackColor1;
};
ColorManager.itemBackColor2 = function () {
  return VisuMZ.CoreEngine.Settings.Color.ItemBackColor2;
};
SceneManager._storedStack = [];
SceneManager.isSceneBattle = function () {
  return this._scene && this._scene.constructor === Scene_Battle;
};
SceneManager.isSceneMap = function () {
  return this._scene && this._scene.constructor === Scene_Map;
};
SceneManager.isInstanceOfSceneMap = function () {
  return this._scene && this._scene instanceof Scene_Map;
};
VisuMZ.CoreEngine.SceneManager_initialize = SceneManager.initialize;
SceneManager.initialize = function () {
  VisuMZ.CoreEngine.SceneManager_initialize.call(this);
  this.initVisuMZCoreEngine();
};
VisuMZ.CoreEngine.SceneManager_onKeyDown = SceneManager.onKeyDown;
SceneManager.onKeyDown = function (_0xd6c1fd) {
  if ($gameTemp) {
    this.onKeyDownKeysF6F7(_0xd6c1fd);
  }
  VisuMZ.CoreEngine.SceneManager_onKeyDown.call(this, _0xd6c1fd);
};
SceneManager.onKeyDownKeysF6F7 = function (_0x26f249) {
  if (!_0x26f249.ctrlKey && !_0x26f249.altKey) {
    switch (_0x26f249.keyCode) {
      case 0x52:
        this.playTestShiftR();
        break;
      case 0x54:
        this.playTestShiftT();
        break;
      case 0x75:
        this.playTestF6();
        break;
      case 0x76:
        if (Input.isPressed("shift") || Input.isPressed('ctrl')) {
          return;
        }
        this.playTestF7();
        break;
    }
  } else {
    if (_0x26f249.ctrlKey) {
      let _0x11212a = _0x26f249.keyCode;
      if (_0x11212a >= 0x31 && _0x11212a <= 0x39) {
        const _0x1e88d7 = _0x11212a - 0x30;
        return SceneManager.playtestQuickLoad(_0x1e88d7);
      } else {
        if (_0x11212a >= 0x61 && _0x11212a <= 0x69) {
          const _0x1032d5 = _0x11212a - 0x60;
          return SceneManager.playtestQuickLoad(_0x1032d5);
        }
      }
    }
  }
};
SceneManager.playTestF6 = function () {
  if ($gameTemp.isPlaytest() && VisuMZ.CoreEngine.Settings.QoL.F6key) {
    if (ConfigManager.seVolume !== 0x0) {
      ConfigManager.bgmVolume = 0x0;
      ConfigManager.bgsVolume = 0x0;
      ConfigManager.meVolume = 0x0;
      ConfigManager.seVolume = 0x0;
    } else {
      ConfigManager.bgmVolume = 0x64;
      ConfigManager.bgsVolume = 0x64;
      ConfigManager.meVolume = 0x64;
      ConfigManager.seVolume = 0x64;
    }
    ConfigManager.save();
    if (this._scene.constructor === Scene_Options) {
      if (this._scene._optionsWindow) {
        this._scene._optionsWindow.refresh();
      }
      if (this._scene._listWindow) {
        this._scene._listWindow.refresh();
      }
    }
  }
};
SceneManager.playTestF7 = function () {
  if ($gameTemp.isPlaytest() && VisuMZ.CoreEngine.Settings.QoL.F7key) {
    $gameTemp._playTestFastMode = !$gameTemp._playTestFastMode;
  }
};
SceneManager.playTestShiftR = function () {
  if (!VisuMZ.CoreEngine.Settings.QoL.ShiftR_Toggle) {
    return;
  }
  if (!$gameTemp.isPlaytest()) {
    return;
  }
  if (!SceneManager.isSceneBattle()) {
    return;
  }
  if (!Input.isPressed("shift")) {
    return;
  }
  for (const _0x425dfa of $gameParty.members()) {
    if (!_0x425dfa) {
      continue;
    }
    _0x425dfa.recoverAll();
  }
};
SceneManager.playTestShiftT = function () {
  if (!VisuMZ.CoreEngine.Settings.QoL.ShiftT_Toggle) {
    return;
  }
  if (!$gameTemp.isPlaytest()) {
    return;
  }
  if (!SceneManager.isSceneBattle()) {
    return;
  }
  if (!Input.isPressed('shift')) {
    return;
  }
  for (const _0x54b07a of $gameParty.members()) {
    if (!_0x54b07a) {
      continue;
    }
    _0x54b07a.gainSilentTp(_0x54b07a.maxTp());
  }
};
SceneManager.playtestQuickLoad = function (_0x260540) {
  if (!$gameTemp.isPlaytest()) {
    return;
  }
  if (!DataManager.savefileInfo(_0x260540)) {
    return;
  }
  if (!(VisuMZ.CoreEngine.Settings.QoL.CtrlQuickLoad ?? true)) {
    return;
  }
  this.push(Scene_QuickLoad);
  this.prepareNextScene(_0x260540);
};
SceneManager.initVisuMZCoreEngine = function () {
  this._sideButtonLayout = false;
  this._hideButtons = !VisuMZ.CoreEngine.Settings.UI.ShowButtons;
};
SceneManager.setSideButtonLayout = function (_0xe55359) {
  if (VisuMZ.CoreEngine.Settings.UI.SideButtons) {
    this._sideButtonLayout = _0xe55359;
  }
};
SceneManager.isSideButtonLayout = function () {
  return this._sideButtonLayout;
};
SceneManager.areButtonsHidden = function () {
  return this._hideButtons;
};
SceneManager.areButtonsOutsideMainUI = function () {
  return this.areButtonsHidden() || this.isSideButtonLayout();
};
VisuMZ.CoreEngine.SceneManager_isGameActive = SceneManager.isGameActive;
SceneManager.isGameActive = function () {
  return VisuMZ.CoreEngine.Settings.QoL.RequireFocus ? VisuMZ.CoreEngine.SceneManager_isGameActive.call(this) : true;
};
SceneManager.catchException = function (_0x418a3b) {
  if (_0x418a3b instanceof Error) {
    this.catchNormalError(_0x418a3b);
  } else if (_0x418a3b instanceof Array && _0x418a3b[0x0] === "LoadError") {
    this.catchLoadError(_0x418a3b);
  } else {
    this.catchUnknownError(_0x418a3b);
  }
  this.stop();
};
VisuMZ.CoreEngine.BattleManager_processEscape = BattleManager.processEscape;
BattleManager.processEscape = function () {
  return VisuMZ.CoreEngine.Settings.QoL.EscapeAlways ? this.processAlwaysEscape() : VisuMZ.CoreEngine.BattleManager_processEscape.call(this);
};
BattleManager.processAlwaysEscape = function () {
  $gameParty.performEscape();
  SoundManager.playEscape();
  this.onEscapeSuccess();
  return true;
};
BattleManager.isTpb = function () {
  return $gameSystem.getBattleSystem() >= 0x1;
};
BattleManager.isActiveTpb = function () {
  return $gameSystem.getBattleSystem() === 0x1;
};
VisuMZ.CoreEngine.Game_Temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function () {
  VisuMZ.CoreEngine.Game_Temp_initialize.call(this);
  this.forceOutOfPlaytest();
  this.createFauxAnimationQueue();
  this.createPointAnimationQueue();
};
Game_Temp.prototype.forceOutOfPlaytest = function () {
  if (VisuMZ.CoreEngine.Settings.QoL.ForceNoPlayTest) {
    this._isPlaytest = false;
  }
};
Game_Temp.prototype.setLastPluginCommandInterpreter = function (_0x1dc3c2) {
  this._lastPluginCommandInterpreter = _0x1dc3c2;
};
Game_Temp.prototype.getLastPluginCommandInterpreter = function () {
  return this._lastPluginCommandInterpreter;
};
Game_Temp.prototype.clearForcedGameTroopSettingsCoreEngine = function () {
  this._forcedTroopView = undefined;
  this._forcedBattleSys = undefined;
  this._forcedBattleGridSystem = undefined;
};
Game_Temp.prototype.applyForcedGameTroopSettingsCoreEngine = function (_0x3b125f) {
  if ($gameMap && $dataMap && $dataMap.note) {
    this.parseForcedGameTroopSettingsCoreEngine($dataMap.note);
  }
  const _0x59d83f = $dataTroops[_0x3b125f];
  if (_0x59d83f) {
    let _0x551ea6 = DataManager.createTroopNote(_0x59d83f.id);
    this.parseForcedGameTroopSettingsCoreEngine(_0x551ea6);
  }
};
Game_Temp.prototype.parseForcedGameTroopSettingsCoreEngine = function (_0x42c67e) {
  if (!_0x42c67e) {
    return;
  }
  if (_0x42c67e.match(/<(?:FRONTVIEW|FRONT VIEW|FV)>/i)) {
    this._forcedTroopView = 'FV';
  } else {
    if (_0x42c67e.match(/<(?:SIDEVIEW|SIDE VIEW|SV)>/i)) {
      this._forcedTroopView = 'SV';
    } else {
      if (_0x42c67e.match(/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)) {
        const _0xb330fc = String(RegExp.$1);
        if (_0xb330fc.match(/(?:FRONTVIEW|FRONT VIEW|FV)/i)) {
          this._forcedTroopView = 'FV';
        } else if (_0xb330fc.match(/(?:SIDEVIEW|SIDE VIEW|SV)/i)) {
          this._forcedTroopView = 'SV';
        }
      }
    }
  }
  if (_0x42c67e.match(/<(?:DTB)>/i)) {
    this._forcedBattleSys = 0x0;
  } else {
    if (_0x42c67e.match(/<(?:TPB|ATB)[ ]ACTIVE>/i)) {
      this._forcedBattleSys = 0x1;
    } else {
      if (_0x42c67e.match(/<(?:TPB|ATB)[ ]WAIT>/i)) {
        this._forcedBattleSys = 0x2;
      } else {
        if (_0x42c67e.match(/<(?:TPB|ATB)>/i)) {
          this._forcedBattleSys = 0x2;
        } else {
          if (_0x42c67e.match(/<(?:CTB)>/i)) {
            if (Imported.VisuMZ_2_BattleSystemCTB) {
              this._forcedBattleSys = 'CTB';
            }
          } else {
            if (_0x42c67e.match(/<(?:STB)>/i)) {
              if (Imported.VisuMZ_2_BattleSystemSTB) {
                this._forcedBattleSys = "STB";
              }
            } else {
              if (_0x42c67e.match(/<(?:BTB)>/i)) {
                if (Imported.VisuMZ_2_BattleSystemBTB) {
                  this._forcedBattleSys = "BTB";
                }
              } else {
                if (_0x42c67e.match(/<(?:FTB)>/i)) {
                  if (Imported.VisuMZ_2_BattleSystemFTB) {
                    this._forcedBattleSys = "FTB";
                  }
                } else {
                  if (_0x42c67e.match(/<(?:OTB)>/i)) {
                    if (Imported.VisuMZ_2_BattleSystemOTB) {
                      this._forcedBattleSys = 'OTB';
                    }
                  } else {
                    if (_0x42c67e.match(/<(?:ETB)>/i)) {
                      if (Imported.VisuMZ_2_BattleSystemETB) {
                        this._forcedBattleSys = "ETB";
                      }
                    } else {
                      if (_0x42c67e.match(/<(?:PTB)>/i)) {
                        if (Imported.VisuMZ_2_BattleSystemPTB) {
                          this._forcedBattleSys = 'PTB';
                        }
                      } else {
                        if (_0x42c67e.match(/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)) {
                          const _0x8b4c63 = String(RegExp.$1);
                          if (_0x8b4c63.match(/DTB/i)) {
                            this._forcedBattleSys = 0x0;
                          } else {
                            if (_0x8b4c63.match(/(?:TPB|ATB)[ ]ACTIVE/i)) {
                              this._forcedBattleSys = 0x1;
                            } else {
                              if (_0x8b4c63.match(/(?:TPB|ATB)[ ]WAIT/i)) {
                                this._forcedBattleSys = 0x2;
                              } else {
                                if (_0x8b4c63.match(/CTB/i)) {
                                  if (Imported.VisuMZ_2_BattleSystemCTB) {
                                    this._forcedBattleSys = 'CTB';
                                  }
                                } else {
                                  if (_0x8b4c63.match(/STB/i)) {
                                    if (Imported.VisuMZ_2_BattleSystemSTB) {
                                      this._forcedBattleSys = 'STB';
                                    }
                                  } else {
                                    if (_0x8b4c63.match(/BTB/i)) {
                                      if (Imported.VisuMZ_2_BattleSystemBTB) {
                                        this._forcedBattleSys = "BTB";
                                      }
                                    } else {
                                      if (_0x8b4c63.match(/FTB/i)) {
                                        if (Imported.VisuMZ_2_BattleSystemFTB) {
                                          this._forcedBattleSys = "FTB";
                                        }
                                      } else {
                                        if (_0x8b4c63.match(/OTB/i)) {
                                          if (Imported.VisuMZ_2_BattleSystemOTB) {
                                            this._forcedBattleSys = 'OTB';
                                          }
                                        } else {
                                          if (_0x8b4c63.match(/ETB/i)) {
                                            if (Imported.VisuMZ_2_BattleSystemETB) {
                                              this._forcedBattleSys = "ETB";
                                            }
                                          } else if (_0x8b4c63.match(/PTB/i)) {
                                            if (Imported.VisuMZ_2_BattleSystemPTB) {
                                              this._forcedBattleSys = "PTB";
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (_0x42c67e.match(/<(?:|BATTLE )GRID>/i)) {
    this._forcedBattleGridSystem = true;
  } else if (_0x42c67e.match(/<NO (?:|BATTLE )GRID>/i)) {
    this._forcedBattleGridSystem = false;
  }
};
Game_Temp.prototype.createFauxAnimationQueue = function () {
  this._fauxAnimationQueue = [];
};
Game_Temp.prototype.requestFauxAnimation = function (_0x230bd9, _0x5f4d7d, _0x232916, _0x4a0d66) {
  if (!this.showFauxAnimations()) {
    return;
  }
  _0x232916 = _0x232916 || false;
  _0x4a0d66 = _0x4a0d66 || false;
  if ($dataAnimations[_0x5f4d7d]) {
    const _0x4b06a2 = {
      'targets': _0x230bd9,
      'animationId': _0x5f4d7d,
      'mirror': _0x232916,
      'mute': _0x4a0d66
    };
    this._fauxAnimationQueue.push(_0x4b06a2);
    for (const _0x53042d of _0x230bd9) {
      if (_0x53042d.startAnimation) {
        _0x53042d.startAnimation();
      }
    }
  }
};
Game_Temp.prototype.showFauxAnimations = function () {
  return true;
};
Game_Temp.prototype.retrieveFauxAnimation = function () {
  return this._fauxAnimationQueue.shift();
};
Game_Temp.prototype.createPointAnimationQueue = function () {
  this._pointAnimationQueue = [];
};
Game_Temp.prototype.requestPointAnimation = function (_0x19d9f1, _0x1429ae, _0x3bcfed, _0x355856, _0x2ca538) {
  if (!this.showPointAnimations()) {
    return;
  }
  _0x355856 = _0x355856 || false;
  _0x2ca538 = _0x2ca538 || false;
  if ($dataAnimations[_0x3bcfed]) {
    const _0x1f844d = {
      'x': _0x19d9f1,
      'y': _0x1429ae,
      'animationId': _0x3bcfed,
      'mirror': _0x355856,
      'mute': _0x2ca538
    };
    this._pointAnimationQueue.push(_0x1f844d);
  }
};
Game_Temp.prototype.showPointAnimations = function () {
  return true;
};
Game_Temp.prototype.retrievePointAnimation = function () {
  return this._pointAnimationQueue.shift();
};
VisuMZ.CoreEngine.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
  VisuMZ.CoreEngine.Game_System_initialize.call(this);
  this.initCoreEngine();
};
Game_System.prototype.initCoreEngine = function () {
  this._CoreEngineSettings = {
    'SideView': $dataSystem.optSideView,
    'BattleSystem': this.initialBattleSystem(),
    'FontSize': $dataSystem.advanced.fontSize,
    'Padding': 0xc
  };
};
Game_System.prototype.isSideView = function () {
  if ($gameTemp._forcedTroopView === 'SV') {
    return true;
  } else {
    if ($gameTemp._forcedTroopView === 'FV') {
      return false;
    }
  }
  if (this._CoreEngineSettings === undefined) {
    this.initCoreEngine();
  }
  if (this._CoreEngineSettings.SideView === undefined) {
    this.initCoreEngine();
  }
  return this._CoreEngineSettings.SideView;
};
Game_System.prototype.setSideView = function (_0x5bdf5f) {
  if (this._CoreEngineSettings === undefined) {
    this.initCoreEngine();
  }
  if (this._CoreEngineSettings.SideView === undefined) {
    this.initCoreEngine();
  }
  this._CoreEngineSettings.SideView = _0x5bdf5f;
};
Game_System.prototype.resetBattleSystem = function () {
  if (this._CoreEngineSettings === undefined) {
    this.initCoreEngine();
  }
  this._CoreEngineSettings.BattleSystem = this.initialBattleSystem();
};
Game_System.prototype.initialBattleSystem = function () {
  const _0x5d89f4 = (VisuMZ.CoreEngine.Settings.BattleSystem || "DATABASE").toUpperCase().trim();
  return VisuMZ.CoreEngine.CreateBattleSystemID(_0x5d89f4);
};
Game_System.prototype.getBattleSystem = function () {
  if ($gameTemp._forcedBattleSys !== undefined) {
    return $gameTemp._forcedBattleSys;
  }
  if (this._CoreEngineSettings === undefined) {
    this.initCoreEngine();
  }
  if (this._CoreEngineSettings.BattleSystem === undefined) {
    this.resetBattleSystem();
  }
  return this._CoreEngineSettings.BattleSystem;
};
Game_System.prototype.setBattleSystem = function (_0x547ca5) {
  if (this._CoreEngineSettings === undefined) {
    this.initCoreEngine();
  }
  if (this._CoreEngineSettings.BattleSystem === undefined) {
    this.resetBattleSystem();
  }
  this._CoreEngineSettings.BattleSystem = _0x547ca5;
};
Game_System.prototype.mainFontSize = function () {
  if (this._CoreEngineSettings === undefined) {
    this.initCoreEngine();
  }
  if (this._CoreEngineSettings.FontSize === undefined) {
    this.initCoreEngine();
  }
  return this._CoreEngineSettings.FontSize;
};
Game_System.prototype.setMainFontSize = function (_0x16b195) {
  if (this._CoreEngineSettings === undefined) {
    this.initCoreEngine();
  }
  if (this._CoreEngineSettings.TimeProgress === undefined) {
    this.initCoreEngine();
  }
  this._CoreEngineSettings.FontSize = _0x16b195;
};
Game_System.prototype.windowPadding = function () {
  if (this._CoreEngineSettings === undefined) {
    this.initCoreEngine();
  }
  if (this._CoreEngineSettings.Padding === undefined) {
    this.initCoreEngine();
  }
  return this._CoreEngineSettings.Padding;
};
Game_System.prototype.setWindowPadding = function (_0x5b446c) {
  if (this._CoreEngineSettings === undefined) {
    this.initCoreEngine();
  }
  if (this._CoreEngineSettings.TimeProgress === undefined) {
    this.initCoreEngine();
  }
  this._CoreEngineSettings.Padding = _0x5b446c;
};
VisuMZ.CoreEngine.Game_Screen_initialize = Game_Screen.prototype.initialize;
Game_Screen.prototype.initialize = function () {
  VisuMZ.CoreEngine.Game_Screen_initialize.call(this);
  this.initCoreEngineScreenShake();
};
Game_Screen.prototype.initCoreEngineScreenShake = function () {
  const _0x2fae3e = VisuMZ.CoreEngine.Settings.ScreenShake;
  this._coreEngineShakeStyle = _0x2fae3e?.['DefaultStyle'] || "random";
};
Game_Screen.prototype.getCoreEngineScreenShakeStyle = function () {
  if (this._coreEngineShakeStyle === undefined) {
    this.initCoreEngineScreenShake();
  }
  return this._coreEngineShakeStyle;
};
Game_Screen.prototype.setCoreEngineScreenShakeStyle = function (_0x308fd0) {
  if (this._coreEngineShakeStyle === undefined) {
    this.initCoreEngineScreenShake();
  }
  this._coreEngineShakeStyle = _0x308fd0.toLowerCase().trim();
};
Game_Picture.prototype.isMapScrollLinked = function () {
  if ($gameParty.inBattle()) {
    return false;
  }
  return this.onlyfilename() && this.onlyfilename().charAt(0x0) === '!';
};
Game_Picture.prototype.onlyfilename = function () {
  return this._name.split('/').pop();
};
VisuMZ.CoreEngine.Game_Picture_x = Game_Picture.prototype.x;
Game_Picture.prototype.x = function () {
  return this.isMapScrollLinked() ? this.xScrollLinkedOffset() : VisuMZ.CoreEngine.Game_Picture_x.call(this);
};
Game_Picture.prototype.xScrollLinkedOffset = function () {
  const _0x3115a2 = $gameMap.displayX() * $gameMap.tileWidth();
  return (this._x - _0x3115a2) * $gameScreen.zoomScale();
};
VisuMZ.CoreEngine.Game_Picture_y = Game_Picture.prototype.y;
Game_Picture.prototype.y = function () {
  return this.isMapScrollLinked() ? this.yScrollLinkedOffset() : VisuMZ.CoreEngine.Game_Picture_y.call(this);
};
Game_Picture.prototype.yScrollLinkedOffset = function () {
  const _0x46cde7 = $gameMap.displayY() * $gameMap.tileHeight();
  return (this._y - _0x46cde7) * $gameScreen.zoomScale();
};
VisuMZ.CoreEngine.Game_Picture_scaleX = Game_Picture.prototype.scaleX;
Game_Picture.prototype.scaleX = function () {
  let _0x4625d9 = VisuMZ.CoreEngine.Game_Picture_scaleX.call(this);
  if (this.isMapScrollLinked()) {
    _0x4625d9 *= $gameScreen.zoomScale();
  }
  return _0x4625d9;
};
VisuMZ.CoreEngine.Game_Picture_scaleY = Game_Picture.prototype.scaleY;
Game_Picture.prototype.scaleY = function () {
  let _0x3efa3e = VisuMZ.CoreEngine.Game_Picture_scaleY.call(this);
  if (this.isMapScrollLinked()) {
    _0x3efa3e *= $gameScreen.zoomScale();
  }
  return _0x3efa3e;
};
Game_Picture.prototype.setEasingType = function (_0x4e83a5) {
  this._coreEasingType = _0x4e83a5;
};
VisuMZ.CoreEngine.Game_Picture_calcEasing = Game_Picture.prototype.calcEasing;
Game_Picture.prototype.calcEasing = function (_0x5394ba) {
  this._coreEasingType = this._coreEasingType || 0x0;
  return [0x0, 0x1, 0x2, 0x3].includes(this._coreEasingType) ? VisuMZ.CoreEngine.Game_Picture_calcEasing.call(this, _0x5394ba) : VisuMZ.ApplyEasing(_0x5394ba, this._coreEasingType);
};
VisuMZ.CoreEngine.Game_Picture_initRotation = Game_Picture.prototype.initRotation;
Game_Picture.prototype.initRotation = function () {
  VisuMZ.CoreEngine.Game_Picture_initRotation.call(this);
  this.initRotationCoreEngine();
};
Game_Picture.prototype.initRotationCoreEngine = function () {
  this._anglePlus = {
    'current': 0x0,
    'target': 0x0,
    'duration': 0x0,
    'wholeDuration': 0x0,
    'easingType': "Linear"
  };
};
VisuMZ.CoreEngine.Game_Picture_angle = Game_Picture.prototype.angle;
Game_Picture.prototype.angle = function () {
  let _0x4d85cb = VisuMZ.CoreEngine.Game_Picture_angle.call(this);
  _0x4d85cb += this.anglePlus();
  return _0x4d85cb;
};
Game_Picture.prototype.anglePlus = function () {
  if (this._anglePlus === undefined) {
    this.initRotationCoreEngine();
  }
  return this._anglePlus.current || 0x0;
};
Game_Picture.prototype.setAnglePlusData = function (_0x452d20, _0x355d2b, _0x451250) {
  if (this._anglePlus === undefined) {
    this.initRotationCoreEngine();
  }
  this._anglePlus.target = _0x452d20 || 0x0;
  this._anglePlus.duration = _0x355d2b || 0x0;
  this._anglePlus.wholeDuration = _0x355d2b || 0x0;
  this._anglePlus.easingType = _0x451250 || 'Linear';
  if (_0x355d2b <= 0x0) {
    this._anglePlus.current = this._anglePlus.target;
  }
};
Game_Picture.prototype.changeAnglePlusData = function (_0xc5bf58, _0x4882db, _0x3c85d6) {
  if (this._anglePlus === undefined) {
    this.initRotationCoreEngine();
  }
  this._anglePlus.target += _0xc5bf58 || 0x0;
  this._anglePlus.duration = _0x4882db || 0x0;
  this._anglePlus.wholeDuration = _0x4882db || 0x0;
  this._anglePlus.easingType = _0x3c85d6 || 'Linear';
  if (_0x4882db <= 0x0) {
    this._anglePlus.current = this._anglePlus.target;
  }
};
VisuMZ.CoreEngine.Game_Picture_updateRotation = Game_Picture.prototype.updateRotation;
Game_Picture.prototype.updateRotation = function () {
  VisuMZ.CoreEngine.Game_Picture_updateRotation.call(this);
  this.updateAnglePlus();
};
Game_Picture.prototype.updateAnglePlus = function () {
  if (this._anglePlus === undefined) {
    this.initRotationCoreEngine();
  }
  const _0x320d1c = this._anglePlus;
  if (_0x320d1c.duration <= 0x0) {
    return;
  }
  _0x320d1c.current = this.applyEasingAnglePlus(_0x320d1c.current, _0x320d1c.target);
  _0x320d1c.duration--;
  if (_0x320d1c.duration <= 0x0) {
    _0x320d1c.current = _0x320d1c.target;
  }
};
Game_Picture.prototype.applyEasingAnglePlus = function (_0x2bf760, _0x2fa85d) {
  const _0x142d09 = this._anglePlus;
  const _0x5952b1 = _0x142d09.easingType;
  const _0x18c623 = _0x142d09.duration;
  const _0x2816aa = _0x142d09.wholeDuration;
  const _0x329382 = VisuMZ.ApplyEasing((_0x2816aa - _0x18c623) / _0x2816aa, _0x5952b1);
  const _0x268468 = VisuMZ.ApplyEasing((_0x2816aa - _0x18c623 + 0x1) / _0x2816aa, _0x5952b1);
  const _0x162bf0 = (_0x2bf760 - _0x2fa85d * _0x329382) / (0x1 - _0x329382);
  return _0x162bf0 + (_0x2fa85d - _0x162bf0) * _0x268468;
};
VisuMZ.CoreEngine.Game_Action_itemHit = Game_Action.prototype.itemHit;
Game_Action.prototype.itemHit = function (_0x4988ad) {
  return VisuMZ.CoreEngine.Settings.QoL.ImprovedAccuracySystem ? this.itemHitImprovedAccuracy(_0x4988ad) : VisuMZ.CoreEngine.Game_Action_itemHit.call(this, _0x4988ad);
};
Game_Action.prototype.itemHitImprovedAccuracy = function (_0x34ae1b) {
  const _0x26b445 = this.itemSuccessRate(_0x34ae1b);
  const _0x3889aa = this.subjectHitRate(_0x34ae1b);
  const _0x4db6b1 = this.targetEvaRate(_0x34ae1b);
  return _0x26b445 * (_0x3889aa - _0x4db6b1);
};
VisuMZ.CoreEngine.Game_Action_itemEva = Game_Action.prototype.itemEva;
Game_Action.prototype.itemEva = function (_0x1f1fbe) {
  return VisuMZ.CoreEngine.Settings.QoL.ImprovedAccuracySystem ? 0x0 : VisuMZ.CoreEngine.Game_Action_itemEva.call(this, _0x1f1fbe);
};
Game_Action.prototype.itemSuccessRate = function (_0x1c1935) {
  return this.item().successRate * 0.01;
};
Game_Action.prototype.subjectHitRate = function (_0x202255) {
  if (VisuMZ.CoreEngine.Settings.QoL.AccuracyBoost && this.isItem()) {
    return 0x1;
  }
  return this.isPhysical() ? VisuMZ.CoreEngine.Settings.QoL.AccuracyBoost && this.subject().isActor() ? this.subject().hit + 0.05 : this.subject().hit : 0x1;
};
Game_Action.prototype.targetEvaRate = function (_0x133999) {
  if (this.subject().isActor() === _0x133999.isActor()) {
    return 0x0;
  }
  if (this.isPhysical()) {
    return VisuMZ.CoreEngine.Settings.QoL.AccuracyBoost && _0x133999.isEnemy() ? _0x133999.eva - 0.05 : _0x133999.eva;
  } else {
    return this.isMagical() ? _0x133999.mev : 0x0;
  }
};
VisuMZ.CoreEngine.Game_Action_updateLastTarget = Game_Action.prototype.updateLastTarget;
Game_Action.prototype.updateLastTarget = function (_0x1f1e53) {
  VisuMZ.CoreEngine.Game_Action_updateLastTarget.call(this, _0x1f1e53);
  if (VisuMZ.CoreEngine.Settings.QoL.ImprovedAccuracySystem) {
    return;
  }
  const _0x1a2921 = _0x1f1e53.result();
  if (_0x1a2921.missed) {
    if (0x1 - this.itemEva(_0x1f1e53) > this.itemHit(_0x1f1e53)) {
      _0x1a2921.missed = false;
      _0x1a2921.evaded = true;
    }
  }
};
VisuMZ.CoreEngine.Game_BattlerBase_initMembers = Game_BattlerBase.prototype.initMembers;
Game_BattlerBase.prototype.initMembers = function () {
  this._cache = {};
  VisuMZ.CoreEngine.Game_BattlerBase_initMembers.call(this);
};
VisuMZ.CoreEngine.Game_BattlerBase_refresh = Game_BattlerBase.prototype.refresh;
Game_BattlerBase.prototype.refresh = function () {
  this._cache = {};
  VisuMZ.CoreEngine.Game_BattlerBase_refresh.call(this);
};
Game_BattlerBase.prototype.checkCacheKey = function (_0x412e50) {
  this._cache = this._cache || {};
  return this._cache[_0x412e50] !== undefined;
};
Game_BattlerBase.prototype.paramPlus = function (_0xb33ba) {
  const _0x26624c = (_0x158d79, _0xb3af88) => {
    if (!_0xb3af88) {
      return _0x158d79;
    }
    if (_0xb3af88.note.match(VisuMZ.CoreEngine.RegExp.paramPlus[_0xb33ba])) {
      var _0x1267ae = Number(RegExp.$1);
      _0x158d79 += _0x1267ae;
    }
    if (_0xb3af88.note.match(VisuMZ.CoreEngine.RegExp.paramPlusJS[_0xb33ba])) {
      var _0x5cfab2 = String(RegExp.$1);
      try {
        _0x158d79 += eval(_0x5cfab2);
      } catch (_0x559f28) {
        if ($gameTemp.isPlaytest()) {
          console.log(_0x559f28);
        }
      }
    }
    return _0x158d79;
  };
  return this.traitObjects().reduce(_0x26624c, this._paramPlus[_0xb33ba]);
};
Game_BattlerBase.prototype.paramMax = function (_0x33e5df) {
  var _0x5ef36d = "Basic" + (this.isActor() ? "Actor" : "Enemy") + 'ParamMax' + _0x33e5df;
  if (this.checkCacheKey(_0x5ef36d)) {
    return this._cache[_0x5ef36d];
  }
  this._cache[_0x5ef36d] = eval(VisuMZ.CoreEngine.Settings.Param[_0x5ef36d]);
  const _0x3853a2 = (_0x1f7624, _0xb6ee94) => {
    if (!_0xb6ee94) {
      return _0x1f7624;
    }
    if (_0xb6ee94.note.match(VisuMZ.CoreEngine.RegExp.paramMax[_0x33e5df])) {
      var _0x4d3515 = Number(RegExp.$1);
      if (_0x4d3515 === 0x0) {
        _0x4d3515 = Number.MAX_SAFE_INTEGER;
      }
      _0x1f7624 = Math.max(_0x1f7624, _0x4d3515);
    }
    if (_0xb6ee94.note.match(VisuMZ.CoreEngine.RegExp.paramMaxJS[_0x33e5df])) {
      var _0x57e117 = String(RegExp.$1);
      try {
        _0x1f7624 = Math.max(_0x1f7624, Number(eval(_0x57e117)));
      } catch (_0x3d16c1) {
        if ($gameTemp.isPlaytest()) {
          console.log(_0x3d16c1);
        }
      }
    }
    return _0x1f7624;
  };
  if (this._cache[_0x5ef36d] === 0x0) {
    this._cache[_0x5ef36d] = Number.MAX_SAFE_INTEGER;
  }
  this._cache[_0x5ef36d] = this.traitObjects().reduce(_0x3853a2, this._cache[_0x5ef36d]);
  return this._cache[_0x5ef36d];
};
Game_BattlerBase.prototype.paramRate = function (_0x2919b8) {
  const _0x59748c = this.traitsPi(Game_BattlerBase.TRAIT_PARAM, _0x2919b8);
  const _0x343c4b = (_0x218c9d, _0x2c22e8) => {
    if (!_0x2c22e8) {
      return _0x218c9d;
    }
    if (_0x2c22e8.note.match(VisuMZ.CoreEngine.RegExp.paramRate1[_0x2919b8])) {
      var _0x4ec5ff = Number(RegExp.$1) / 0x64;
      _0x218c9d *= _0x4ec5ff;
    }
    if (_0x2c22e8.note.match(VisuMZ.CoreEngine.RegExp.paramRate2[_0x2919b8])) {
      var _0x4ec5ff = Number(RegExp.$1);
      _0x218c9d *= _0x4ec5ff;
    }
    if (_0x2c22e8.note.match(VisuMZ.CoreEngine.RegExp.paramRateJS[_0x2919b8])) {
      var _0xfc8595 = String(RegExp.$1);
      try {
        _0x218c9d *= eval(_0xfc8595);
      } catch (_0x48bd20) {
        if ($gameTemp.isPlaytest()) {
          console.log(_0x48bd20);
        }
      }
    }
    return _0x218c9d;
  };
  return this.traitObjects().reduce(_0x343c4b, _0x59748c);
};
Game_BattlerBase.prototype.paramFlatBonus = function (_0x26b9c7) {
  const _0x3efb8a = (_0x5b2211, _0x396259) => {
    if (!_0x396259) {
      return _0x5b2211;
    }
    if (_0x396259.note.match(VisuMZ.CoreEngine.RegExp.paramFlat[_0x26b9c7])) {
      var _0x31d0d6 = Number(RegExp.$1);
      _0x5b2211 += _0x31d0d6;
    }
    if (_0x396259.note.match(VisuMZ.CoreEngine.RegExp.paramFlatJS[_0x26b9c7])) {
      var _0x21cf5a = String(RegExp.$1);
      try {
        _0x5b2211 += eval(_0x21cf5a);
      } catch (_0x4bcbd6) {
        if ($gameTemp.isPlaytest()) {
          console.log(_0x4bcbd6);
        }
      }
    }
    return _0x5b2211;
  };
  return this.traitObjects().reduce(_0x3efb8a, 0x0);
};
Game_BattlerBase.prototype.param = function (_0x4b4637) {
  let _0x5c029f = "param" + _0x4b4637 + "Total";
  if (this.checkCacheKey(_0x5c029f)) {
    return this._cache[_0x5c029f];
  }
  this._cache[_0x5c029f] = Math.round(VisuMZ.CoreEngine.Settings.Param.BasicParameterFormula.call(this, _0x4b4637));
  return this._cache[_0x5c029f];
};
Game_BattlerBase.prototype.xparamPlus = function (_0x1d5288) {
  const _0x29b587 = (_0x111e03, _0x8acc49) => {
    if (!_0x8acc49) {
      return _0x111e03;
    }
    if (_0x8acc49.note.match(VisuMZ.CoreEngine.RegExp.xparamPlus1[_0x1d5288])) {
      var _0xd4d37c = Number(RegExp.$1) / 0x64;
      _0x111e03 += _0xd4d37c;
    }
    if (_0x8acc49.note.match(VisuMZ.CoreEngine.RegExp.xparamPlus2[_0x1d5288])) {
      var _0xd4d37c = Number(RegExp.$1);
      _0x111e03 += _0xd4d37c;
    }
    if (_0x8acc49.note.match(VisuMZ.CoreEngine.RegExp.xparamPlusJS[_0x1d5288])) {
      var _0x53104a = String(RegExp.$1);
      try {
        _0x111e03 += eval(_0x53104a);
      } catch (_0x433f2d) {
        if ($gameTemp.isPlaytest()) {
          console.log(_0x433f2d);
        }
      }
    }
    return _0x111e03;
  };
  return this.traitObjects().reduce(_0x29b587, 0x0);
};
Game_BattlerBase.prototype.xparamRate = function (_0x35468d) {
  const _0x414281 = (_0x199f35, _0x1ebc39) => {
    if (!_0x1ebc39) {
      return _0x199f35;
    }
    if (_0x1ebc39.note.match(VisuMZ.CoreEngine.RegExp.xparamRate1[_0x35468d])) {
      var _0x3d0f1a = Number(RegExp.$1) / 0x64;
      _0x199f35 *= _0x3d0f1a;
    }
    if (_0x1ebc39.note.match(VisuMZ.CoreEngine.RegExp.xparamRate2[_0x35468d])) {
      var _0x3d0f1a = Number(RegExp.$1);
      _0x199f35 *= _0x3d0f1a;
    }
    if (_0x1ebc39.note.match(VisuMZ.CoreEngine.RegExp.xparamRateJS[_0x35468d])) {
      var _0x26a3a2 = String(RegExp.$1);
      try {
        _0x199f35 *= eval(_0x26a3a2);
      } catch (_0x2bb44a) {
        if ($gameTemp.isPlaytest()) {
          console.log(_0x2bb44a);
        }
      }
    }
    return _0x199f35;
  };
  return this.traitObjects().reduce(_0x414281, 0x1);
};
Game_BattlerBase.prototype.xparamFlatBonus = function (_0x485b37) {
  const _0x457195 = (_0x2881e3, _0x58524d) => {
    if (!_0x58524d) {
      return _0x2881e3;
    }
    if (_0x58524d.note.match(VisuMZ.CoreEngine.RegExp.xparamFlat1[_0x485b37])) {
      var _0x3ef140 = Number(RegExp.$1) / 0x64;
      _0x2881e3 += _0x3ef140;
    }
    if (_0x58524d.note.match(VisuMZ.CoreEngine.RegExp.xparamFlat2[_0x485b37])) {
      var _0x3ef140 = Number(RegExp.$1);
      _0x2881e3 += _0x3ef140;
    }
    if (_0x58524d.note.match(VisuMZ.CoreEngine.RegExp.xparamFlatJS[_0x485b37])) {
      var _0x38a03f = String(RegExp.$1);
      try {
        _0x2881e3 += eval(_0x38a03f);
      } catch (_0x410f08) {
        if ($gameTemp.isPlaytest()) {
          console.log(_0x410f08);
        }
      }
    }
    return _0x2881e3;
  };
  return this.traitObjects().reduce(_0x457195, 0x0);
};
Game_BattlerBase.prototype.xparam = function (_0x19bbf7) {
  let _0x347e6b = "xparam" + _0x19bbf7 + 'Total';
  if (this.checkCacheKey(_0x347e6b)) {
    return this._cache[_0x347e6b];
  }
  this._cache[_0x347e6b] = VisuMZ.CoreEngine.Settings.Param.XParameterFormula.call(this, _0x19bbf7);
  return this._cache[_0x347e6b];
};
Game_BattlerBase.prototype.sparamPlus = function (_0x13ee69) {
  const _0x5d241a = (_0x32ed9e, _0x19f86f) => {
    if (!_0x19f86f) {
      return _0x32ed9e;
    }
    if (_0x19f86f.note.match(VisuMZ.CoreEngine.RegExp.sparamPlus1[_0x13ee69])) {
      var _0xa5bd5f = Number(RegExp.$1) / 0x64;
      _0x32ed9e += _0xa5bd5f;
    }
    if (_0x19f86f.note.match(VisuMZ.CoreEngine.RegExp.sparamPlus2[_0x13ee69])) {
      var _0xa5bd5f = Number(RegExp.$1);
      _0x32ed9e += _0xa5bd5f;
    }
    if (_0x19f86f.note.match(VisuMZ.CoreEngine.RegExp.sparamPlusJS[_0x13ee69])) {
      var _0x3da418 = String(RegExp.$1);
      try {
        _0x32ed9e += eval(_0x3da418);
      } catch (_0x39ab4c) {
        if ($gameTemp.isPlaytest()) {
          console.log(_0x39ab4c);
        }
      }
    }
    return _0x32ed9e;
  };
  return this.traitObjects().reduce(_0x5d241a, 0x0);
};
Game_BattlerBase.prototype.sparamRate = function (_0x2db169) {
  const _0x5c8545 = (_0x4a6aaa, _0x549765) => {
    if (!_0x549765) {
      return _0x4a6aaa;
    }
    if (_0x549765.note.match(VisuMZ.CoreEngine.RegExp.sparamRate1[_0x2db169])) {
      var _0x43d339 = Number(RegExp.$1) / 0x64;
      _0x4a6aaa *= _0x43d339;
    }
    if (_0x549765.note.match(VisuMZ.CoreEngine.RegExp.sparamRate2[_0x2db169])) {
      var _0x43d339 = Number(RegExp.$1);
      _0x4a6aaa *= _0x43d339;
    }
    if (_0x549765.note.match(VisuMZ.CoreEngine.RegExp.sparamRateJS[_0x2db169])) {
      var _0x23a721 = String(RegExp.$1);
      try {
        _0x4a6aaa *= eval(_0x23a721);
      } catch (_0x1dd9a2) {
        if ($gameTemp.isPlaytest()) {
          console.log(_0x1dd9a2);
        }
      }
    }
    return _0x4a6aaa;
  };
  return this.traitObjects().reduce(_0x5c8545, 0x1);
};
Game_BattlerBase.prototype.sparamFlatBonus = function (_0x5b147f) {
  const _0x10cad1 = (_0x577347, _0x1d5efd) => {
    if (!_0x1d5efd) {
      return _0x577347;
    }
    if (_0x1d5efd.note.match(VisuMZ.CoreEngine.RegExp.sparamFlat1[_0x5b147f])) {
      var _0x274203 = Number(RegExp.$1) / 0x64;
      _0x577347 += _0x274203;
    }
    if (_0x1d5efd.note.match(VisuMZ.CoreEngine.RegExp.sparamFlat2[_0x5b147f])) {
      var _0x274203 = Number(RegExp.$1);
      _0x577347 += _0x274203;
    }
    if (_0x1d5efd.note.match(VisuMZ.CoreEngine.RegExp.sparamFlatJS[_0x5b147f])) {
      var _0x2c2ea3 = String(RegExp.$1);
      try {
        _0x577347 += eval(_0x2c2ea3);
      } catch (_0x56ed62) {
        if ($gameTemp.isPlaytest()) {
          console.log(_0x56ed62);
        }
      }
    }
    return _0x577347;
  };
  return this.traitObjects().reduce(_0x10cad1, 0x0);
};
Game_BattlerBase.prototype.sparam = function (_0x2f2e8a) {
  let _0x3cec9f = "sparam" + _0x2f2e8a + "Total";
  if (this.checkCacheKey(_0x3cec9f)) {
    return this._cache[_0x3cec9f];
  }
  this._cache[_0x3cec9f] = VisuMZ.CoreEngine.Settings.Param.SParameterFormula.call(this, _0x2f2e8a);
  return this._cache[_0x3cec9f];
};
Game_BattlerBase.prototype.paramValueByName = function (_0x38e9e0, _0x44ca16) {
  if (typeof paramId === 'number') {
    return this.param(_0x38e9e0);
  }
  _0x38e9e0 = String(_0x38e9e0 || '').toUpperCase();
  if (_0x38e9e0 === "MAXHP") {
    return this.param(0x0);
  }
  if (_0x38e9e0 === "MAXMP") {
    return this.param(0x1);
  }
  if (_0x38e9e0 === "ATK") {
    return this.param(0x2);
  }
  if (_0x38e9e0 === "DEF") {
    return this.param(0x3);
  }
  if (_0x38e9e0 === "MAT") {
    return this.param(0x4);
  }
  if (_0x38e9e0 === 'MDF') {
    return this.param(0x5);
  }
  if (_0x38e9e0 === "AGI") {
    return this.param(0x6);
  }
  if (_0x38e9e0 === "LUK") {
    return this.param(0x7);
  }
  if (_0x38e9e0 === "HIT") {
    return _0x44ca16 ? String(Math.round(this.xparam(0x0) * 0x64)) + '%' : this.xparam(0x0);
  }
  if (_0x38e9e0 === 'EVA') {
    return _0x44ca16 ? String(Math.round(this.xparam(0x1) * 0x64)) + '%' : this.xparam(0x1);
  }
  if (_0x38e9e0 === "CRI") {
    return _0x44ca16 ? String(Math.round(this.xparam(0x2) * 0x64)) + '%' : this.xparam(0x2);
  }
  if (_0x38e9e0 === "CEV") {
    return _0x44ca16 ? String(Math.round(this.xparam(0x3) * 0x64)) + '%' : this.xparam(0x3);
  }
  if (_0x38e9e0 === "MEV") {
    return _0x44ca16 ? String(Math.round(this.xparam(0x4) * 0x64)) + '%' : this.xparam(0x4);
  }
  if (_0x38e9e0 === 'MRF') {
    return _0x44ca16 ? String(Math.round(this.xparam(0x5) * 0x64)) + '%' : this.xparam(0x5);
  }
  if (_0x38e9e0 === "CNT") {
    return _0x44ca16 ? String(Math.round(this.xparam(0x6) * 0x64)) + '%' : this.xparam(0x6);
  }
  if (_0x38e9e0 === 'HRG') {
    return _0x44ca16 ? String(Math.round(this.xparam(0x7) * 0x64)) + '%' : this.xparam(0x7);
  }
  if (_0x38e9e0 === "MRG") {
    return _0x44ca16 ? String(Math.round(this.xparam(0x8) * 0x64)) + '%' : this.xparam(0x8);
  }
  if (_0x38e9e0 === "TRG") {
    return _0x44ca16 ? String(Math.round(this.xparam(0x9) * 0x64)) + '%' : this.xparam(0x9);
  }
  if (_0x38e9e0 === "TGR") {
    return _0x44ca16 ? String(Math.round(this.sparam(0x0) * 0x64)) + '%' : this.sparam(0x0);
  }
  if (_0x38e9e0 === "GRD") {
    return _0x44ca16 ? String(Math.round(this.sparam(0x1) * 0x64)) + '%' : this.sparam(0x1);
  }
  if (_0x38e9e0 === 'REC') {
    return _0x44ca16 ? String(Math.round(this.sparam(0x2) * 0x64)) + '%' : this.sparam(0x2);
  }
  if (_0x38e9e0 === "PHA") {
    return _0x44ca16 ? String(Math.round(this.sparam(0x3) * 0x64)) + '%' : this.sparam(0x3);
  }
  if (_0x38e9e0 === "MCR") {
    return _0x44ca16 ? String(Math.round(this.sparam(0x4) * 0x64)) + '%' : this.sparam(0x4);
  }
  if (_0x38e9e0 === "TCR") {
    return _0x44ca16 ? String(Math.round(this.sparam(0x5) * 0x64)) + '%' : this.sparam(0x5);
  }
  if (_0x38e9e0 === 'PDR') {
    return _0x44ca16 ? String(Math.round(this.sparam(0x6) * 0x64)) + '%' : this.sparam(0x6);
  }
  if (_0x38e9e0 === "MDR") {
    return _0x44ca16 ? String(Math.round(this.sparam(0x7) * 0x64)) + '%' : this.sparam(0x7);
  }
  if (_0x38e9e0 === "FDR") {
    return _0x44ca16 ? String(Math.round(this.sparam(0x8) * 0x64)) + '%' : this.sparam(0x8);
  }
  if (_0x38e9e0 === "EXR") {
    return _0x44ca16 ? String(Math.round(this.sparam(0x9) * 0x64)) + '%' : this.sparam(0x9);
  }
  if (VisuMZ.CoreEngine.CustomParamAbb[_0x38e9e0]) {
    const _0x34b0d4 = VisuMZ.CoreEngine.CustomParamAbb[_0x38e9e0];
    const _0x4395b2 = this[_0x34b0d4];
    return VisuMZ.CoreEngine.CustomParamType[_0x38e9e0] === "integer" ? _0x4395b2 : _0x44ca16 ? String(Math.round(_0x4395b2 * 0x64)) + '%' : _0x4395b2;
  }
  return '';
};
Game_BattlerBase.prototype.isDying = function () {
  return this.isAlive() && this._hp < this.mhp * VisuMZ.CoreEngine.Settings.Param.CrisisRate;
};
Game_Battler.prototype.performMiss = function () {
  SoundManager.playMiss();
  this.requestMotion("evade");
};
VisuMZ.CoreEngine.Game_Actor_paramBase = Game_Actor.prototype.paramBase;
Game_Actor.prototype.paramBase = function (_0x1f667a) {
  if (this.level > 0x63) {
    return this.paramBaseAboveLevel99(_0x1f667a);
  }
  return VisuMZ.CoreEngine.Game_Actor_paramBase.call(this, _0x1f667a);
};
Game_Actor.prototype.paramBaseAboveLevel99 = function (_0xe62b9b) {
  const _0x4987f4 = this.currentClass().params[_0xe62b9b][0x63];
  const _0x1feae0 = this.currentClass().params[_0xe62b9b][0x62];
  return _0x4987f4 + (_0x4987f4 - _0x1feae0) * (this.level - 0x63);
};
VisuMZ.CoreEngine.Game_Actor_changeClass = Game_Actor.prototype.changeClass;
Game_Actor.prototype.changeClass = function (_0x2878af, _0x548c89) {
  $gameTemp._changingClass = true;
  VisuMZ.CoreEngine.Game_Actor_changeClass.call(this, _0x2878af, _0x548c89);
  $gameTemp._changingClass = undefined;
};
VisuMZ.CoreEngine.Game_Actor_levelUp = Game_Actor.prototype.levelUp;
Game_Actor.prototype.levelUp = function () {
  VisuMZ.CoreEngine.Game_Actor_levelUp.call(this);
  if (!$gameTemp._changingClass) {
    this.levelUpRecovery();
  }
};
Game_Actor.prototype.levelUpRecovery = function () {
  this._cache = {};
  if (VisuMZ.CoreEngine.Settings.QoL.LevelUpFullHp) {
    this._hp = this.mhp;
  }
  if (VisuMZ.CoreEngine.Settings.QoL.LevelUpFullMp) {
    this._mp = this.mmp;
  }
};
Game_Actor.prototype.expRate = function () {
  if (this.isMaxLevel()) {
    return 0x1;
  }
  const _0x457e49 = this.nextLevelExp() - this.currentLevelExp();
  const _0x2e38e7 = this.currentExp() - this.currentLevelExp();
  return (_0x2e38e7 / _0x457e49).clamp(0x0, 0x1);
};
Game_Actor.prototype.traitObjects = function () {
  const _0x1d7fe3 = Game_Battler.prototype.traitObjects.call(this);
  for (const _0x4bfc32 of this.equips()) {
    if (_0x4bfc32) {
      _0x1d7fe3.push(_0x4bfc32);
    }
  }
  _0x1d7fe3.push(this.currentClass(), this.actor());
  return _0x1d7fe3;
};
Object.defineProperty(Game_Enemy.prototype, "level", {
  'get': function () {
    return this.getLevel();
  },
  'configurable': true
});
Game_Enemy.prototype.getLevel = function () {
  return this.enemy().level;
};
Game_Enemy.prototype.moveRelativeToResolutionChange = function () {
  if (!this._repositioned) {
    this._screenY += Math.round((Graphics.height - 0x270) / 0x2);
    this._screenY -= Math.floor((Graphics.height - Graphics.boxHeight) / 0x2);
    if ($gameSystem.isSideView()) {
      this._screenX -= Math.floor((Graphics.width - Graphics.boxWidth) / 0x2);
    } else {
      this._screenX += Math.round((Graphics.boxWidth - 0x330) / 0x2);
    }
  }
  this._repositioned = true;
};
Game_Party.prototype.maxGold = function () {
  return VisuMZ.CoreEngine.Settings.Gold.GoldMax;
};
VisuMZ.CoreEngine.Game_Party_consumeItem = Game_Party.prototype.consumeItem;
Game_Party.prototype.consumeItem = function (_0x533e73) {
  if (VisuMZ.CoreEngine.Settings.QoL.KeyItemProtect && DataManager.isKeyItem(_0x533e73)) {
    return;
  }
  VisuMZ.CoreEngine.Game_Party_consumeItem.call(this, _0x533e73);
};
Game_Party.prototype.setupBattleTestItems = function () {
  const _0x5eb3a4 = VisuMZ.CoreEngine.Settings.QoL;
  const _0x5816be = _0x5eb3a4.BTestAddedQuantity ?? 0x63;
  let _0x1a188e = [];
  if (_0x5eb3a4.BTestItems ?? true) {
    _0x1a188e = _0x1a188e.concat($dataItems);
  }
  if (_0x5eb3a4.BTestWeapons ?? true) {
    _0x1a188e = _0x1a188e.concat($dataWeapons);
  }
  if (_0x5eb3a4.BTestArmors ?? true) {
    _0x1a188e = _0x1a188e.concat($dataArmors);
  }
  for (const _0x458c08 of _0x1a188e) {
    if (!_0x458c08) {
      continue;
    }
    if (_0x458c08.name.trim() <= 0x0) {
      continue;
    }
    if (_0x458c08.name.match(/-----/i)) {
      continue;
    }
    this.gainItem(_0x458c08, _0x5816be);
  }
};
VisuMZ.CoreEngine.Game_Troop_setup = Game_Troop.prototype.setup;
Game_Troop.prototype.setup = function (_0x3a9d9a) {
  $gameTemp.clearForcedGameTroopSettingsCoreEngine();
  $gameTemp.applyForcedGameTroopSettingsCoreEngine(_0x3a9d9a);
  VisuMZ.CoreEngine.Game_Troop_setup.call(this, _0x3a9d9a);
};
VisuMZ.CoreEngine.Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function (_0x3fcaf3) {
  VisuMZ.CoreEngine.Game_Map_setup.call(this, _0x3fcaf3);
  this.checkCoreEngineDisplayCenter();
  this.setupCoreEngine(_0x3fcaf3);
  this.setupTileExtendTerrainTags();
};
Game_Map.prototype.setupCoreEngine = function () {
  this._hideTileShadows = VisuMZ.CoreEngine.Settings.QoL.NoTileShadows || false;
  const _0xdebbf6 = VisuMZ.CoreEngine.Settings.ScreenResolution;
  const _0x32b386 = $dataMap ? $dataMap.note || '' : '';
  if (_0x32b386.match(/<SHOW TILE SHADOWS>/i)) {
    this._hideTileShadows = false;
  } else if (_0x32b386.match(/<HIDE TILE SHADOWS>/i)) {
    this._hideTileShadows = true;
  }
  if (_0x32b386.match(/<SCROLL LOCK X>/i)) {
    this.centerCameraCheckData().centerX = true;
    this.centerCameraCheckData().displayX = _0xdebbf6.DisplayLockX;
  } else if (_0x32b386.match(/<SCROLL LOCK X: (.*?)>/i)) {
    this.centerCameraCheckData().centerX = true;
    this.centerCameraCheckData().displayX = Number(RegExp.$1);
  }
  if (_0x32b386.match(/<SCROLL LOCK Y>/i)) {
    this.centerCameraCheckData().centerY = true;
    this.centerCameraCheckData().displayY = _0xdebbf6.DisplayLockY;
  } else if (_0x32b386.match(/<SCROLL LOCK Y: (.*?)>/i)) {
    this.centerCameraCheckData().centerY = true;
    this.centerCameraCheckData().displayY = Number(RegExp.$1);
  }
};
Game_Map.prototype.areTileShadowsHidden = function () {
  if (this._hideTileShadows === undefined) {
    this.setupCoreEngine();
  }
  return this._hideTileShadows;
};
Game_Map.prototype.checkCoreEngineDisplayCenter = function () {
  const _0x8626fe = VisuMZ.CoreEngine.Settings.ScreenResolution;
  this._centerCameraCheck = {
    'centerX': false,
    'centerY': false,
    'displayX': 0x0,
    'displayY': 0x0
  };
  if (_0x8626fe.AutoScrollLockX) {
    const _0x448d7b = Graphics.width / this.tileWidth();
    if (_0x448d7b % 0x1 !== 0x0 && Math.ceil(_0x448d7b) === this.width() && !this.isLoopHorizontal()) {
      this._centerCameraCheck.centerX = true;
      this._centerCameraCheck.displayX = _0x8626fe.DisplayLockX || 0x0;
    }
  }
  if (_0x8626fe.AutoScrollLockY) {
    const _0x45ef1f = Graphics.height / this.tileHeight();
    if (_0x45ef1f % 0x1 !== 0x0 && Math.ceil(_0x45ef1f) === this.height() && !this.isLoopVertical()) {
      this._centerCameraCheck.centerY = true;
      this._centerCameraCheck.displayY = _0x8626fe.DisplayLockY || 0x0;
    }
  }
  if ($gameScreen.zoomScale() === 0x1) {
    if (this.centerCameraCheckData().centerX) {
      this._displayX = this.centerCameraCheckData().displayX;
    }
    if (this.centerCameraCheckData().centerY) {
      this._displayY = this.centerCameraCheckData().displayY;
    }
  }
};
VisuMZ.CoreEngine.Game_Map_setDisplayPos = Game_Map.prototype.setDisplayPos;
Game_Map.prototype.setDisplayPos = function (_0x5641a5, _0x493450) {
  VisuMZ.CoreEngine.Game_Map_setDisplayPos.call(this, _0x5641a5, _0x493450);
  if ($gameScreen.zoomScale() === 0x1) {
    if (!this.isLoopHorizontal() && this.centerCameraCheckData().centerX) {
      this._displayX = this.centerCameraCheckData().displayX;
    }
    if (!this.isLoopVertical() && this.centerCameraCheckData().centerY) {
      this._displayY = this.centerCameraCheckData().displayY;
    }
  }
};
Game_Map.prototype.centerCameraCheckData = function () {
  if (this._centerCameraCheck === undefined) {
    this.checkCoreEngineDisplayCenter();
  }
  return this._centerCameraCheck;
};
VisuMZ.CoreEngine.Game_Map_scrollDown = Game_Map.prototype.scrollDown;
Game_Map.prototype.scrollDown = function (_0x5ed6e9) {
  if (this.centerCameraCheckData().centerY && $gameScreen.zoomScale() === 0x1) {
    this._displayY = this.centerCameraCheckData().displayY;
    return;
  }
  VisuMZ.CoreEngine.Game_Map_scrollDown.call(this, _0x5ed6e9);
};
VisuMZ.CoreEngine.Game_Map_scrollLeft = Game_Map.prototype.scrollLeft;
Game_Map.prototype.scrollLeft = function (_0x59ed5f) {
  if (this.centerCameraCheckData().centerX && $gameScreen.zoomScale() === 0x1) {
    this._displayX = this.centerCameraCheckData().displayX;
    return;
  }
  VisuMZ.CoreEngine.Game_Map_scrollLeft.call(this, _0x59ed5f);
};
VisuMZ.CoreEngine.Game_Map_scrollRight = Game_Map.prototype.scrollRight;
Game_Map.prototype.scrollRight = function (_0x5ba3dc) {
  if (this.centerCameraCheckData().centerX && $gameScreen.zoomScale() === 0x1) {
    this._displayX = this.centerCameraCheckData().displayX;
    return;
  }
  VisuMZ.CoreEngine.Game_Map_scrollRight.call(this, _0x5ba3dc);
};
VisuMZ.CoreEngine.Game_Map_scrollUp = Game_Map.prototype.scrollUp;
Game_Map.prototype.scrollUp = function (_0x31ef43) {
  if (this.centerCameraCheckData().centerY && $gameScreen.zoomScale() === 0x1) {
    this._displayY = this.centerCameraCheckData().displayY;
    return;
  }
  VisuMZ.CoreEngine.Game_Map_scrollUp.call(this, _0x31ef43);
};
Game_Map.prototype.setupTileExtendTerrainTags = function () {
  this._tileExtendTerrainTags = {};
  const _0xdd4106 = this.tileset();
  if (!_0xdd4106) {
    return {};
  }
  const _0x12a1ae = _0xdd4106.note || '';
  const _0x1cc119 = /<(?:TALLER|EXT|EXTEND|RAISE)[ ]BY[ ](\d+):[ ](.*)>/gi;
  let _0x1be181 = {};
  const _0x4c38d7 = _0x12a1ae.match(_0x1cc119);
  if (_0x4c38d7) {
    for (const _0x2398e1 of _0x4c38d7) {
      _0x2398e1.match(_0x1cc119);
      const _0x20d1a5 = Number(RegExp.$1).clamp(0x1, 0x10);
      const _0x9b0f0a = String(RegExp.$2).split(',').map(_0x490a4c => Number(_0x490a4c).clamp(0x1, 0x7));
      for (const _0x182761 of _0x9b0f0a) {
        _0x1be181[_0x182761] = _0x20d1a5;
      }
    }
  }
  this._tileExtendTerrainTags = _0x1be181;
};
Game_Map.prototype.getTileExtendTerrainTags = function () {
  if (this._tileExtendTerrainTags === undefined) {
    this.setupTileExtendTerrainTags();
  }
  return this._tileExtendTerrainTags;
};
Game_Map.prototype.isTileExtended = function (_0x46d1fc) {
  if (_0x46d1fc >= 0x400) {
    return false;
  }
  const _0x385bca = $gameMap.getTileExtendTerrainTags();
  if (Object.keys(_0x385bca).length <= 0x0) {
    return false;
  }
  const _0x161997 = this.tilesetFlags();
  const _0x16aaf5 = _0x161997[_0x46d1fc] >> 0xc;
  const _0x22d72a = _0x385bca[_0x16aaf5] || 0x0;
  return _0x22d72a > 0x0;
};
Game_Map.prototype.refreshSpritesetForExtendedTiles = function () {
  const _0x54d6ef = this.getTileExtendTerrainTags();
  if (Object.keys(_0x54d6ef).length <= 0x0) {
    return;
  }
  if ($spriteset) {
    if ($spriteset.removeTileExtendSprites) {
      $spriteset.removeTileExtendSprites();
    }
    if ($spriteset.createTileExtendSprites) {
      $spriteset.createTileExtendSprites();
    }
  }
};
VisuMZ.CoreEngine.Game_Character_processMoveCommand = Game_Character.prototype.processMoveCommand;
Game_Character.prototype.processMoveCommand = function (_0x14daf6) {
  try {
    VisuMZ.CoreEngine.Game_Character_processMoveCommand.call(this, _0x14daf6);
  } catch (_0xd690a7) {
    if ($gameTemp.isPlaytest()) {
      console.log(_0xd690a7);
    }
  }
};
Game_Player.prototype.makeEncounterCount = function () {
  const _0x557739 = $gameMap.encounterStep();
  this._encounterCount = Math.randomInt(_0x557739) + Math.randomInt(_0x557739) + this.encounterStepsMinimum();
};
Game_Player.prototype.encounterStepsMinimum = function () {
  return $dataMap && $dataMap.note && $dataMap.note.match(/<MINIMUM ENCOUNTER STEPS:[ ](\d+)>/i) ? Number(RegExp.$1) : VisuMZ.CoreEngine.Settings.QoL.EncounterRateMinimum;
};
VisuMZ.CoreEngine.Game_Event_isCollidedWithEvents = Game_Event.prototype.isCollidedWithEvents;
Game_Event.prototype.isCollidedWithEvents = function (_0x2a3bbc, _0x31183d) {
  return this.isSmartEventCollisionOn() ? this.checkSmartEventCollision(_0x2a3bbc, _0x31183d) : VisuMZ.CoreEngine.Game_Event_isCollidedWithEvents.call(this, _0x2a3bbc, _0x31183d);
};
Game_Event.prototype.isSmartEventCollisionOn = function () {
  return VisuMZ.CoreEngine.Settings.QoL.SmartEventCollisionPriority;
};
Game_Event.prototype.checkSmartEventCollision = function (_0x3a8db0, _0x4bfc3e) {
  if (!this.isNormalPriority()) {
    return false;
  } else {
    const _0x172f15 = $gameMap.eventsXyNt(_0x3a8db0, _0x4bfc3e).filter(_0x18233f => _0x18233f.isNormalPriority());
    return _0x172f15.length > 0x0;
  }
};
VisuMZ.CoreEngine.Game_Interpreter_command105 = Game_Interpreter.prototype.command105;
Game_Interpreter.prototype.command105 = function (_0x9d104d) {
  const _0xbd1dc8 = this.getCombinedScrollingText();
  return _0xbd1dc8.match(/\/\/[ ]SCRIPT[ ]CALL/i) ? this.runCombinedScrollingTextAsCode(_0xbd1dc8) : VisuMZ.CoreEngine.Game_Interpreter_command105.call(this, _0x9d104d);
};
Game_Interpreter.prototype.getCombinedScrollingText = function () {
  let _0x902bd0 = '';
  let _0x56e50f = this._index + 0x1;
  while (this._list[_0x56e50f] && this._list[_0x56e50f].code === 0x195) {
    _0x902bd0 += this._list[_0x56e50f].parameters[0x0] + "\n";
    _0x56e50f++;
  }
  return _0x902bd0;
};
Game_Interpreter.prototype.runCombinedScrollingTextAsCode = function (_0xc92e68) {
  try {
    eval(_0xc92e68);
  } catch (_0x7ef95d) {
    if ($gameTemp.isPlaytest()) {
      console.log("Show Scrolling Text Script Error");
      console.log(_0x7ef95d);
    }
  }
  return true;
};
VisuMZ.CoreEngine.Game_Interpreter_command111 = Game_Interpreter.prototype.command111;
Game_Interpreter.prototype.command111 = function (_0x43abd3) {
  try {
    VisuMZ.CoreEngine.Game_Interpreter_command111.call(this, _0x43abd3);
  } catch (_0xf3701c) {
    if ($gameTemp.isPlaytest()) {
      console.log("Conditional Branch Script Error");
      console.log(_0xf3701c);
    }
    this.skipBranch();
  }
  return true;
};
VisuMZ.CoreEngine.Game_Interpreter_command122 = Game_Interpreter.prototype.command122;
Game_Interpreter.prototype.command122 = function (_0x3dcaa0) {
  try {
    VisuMZ.CoreEngine.Game_Interpreter_command122.call(this, _0x3dcaa0);
  } catch (_0x3bf186) {
    if ($gameTemp.isPlaytest()) {
      console.log("Control Variables Script Error");
      console.log(_0x3bf186);
    }
  }
  return true;
};
VisuMZ.CoreEngine.Game_Interpreter_command355 = Game_Interpreter.prototype.command355;
Game_Interpreter.prototype.command355 = function () {
  try {
    VisuMZ.CoreEngine.Game_Interpreter_command355.call(this);
  } catch (_0x5430c9) {
    if ($gameTemp.isPlaytest()) {
      console.log("Script Call Error");
      console.log(_0x5430c9);
    }
  }
  return true;
};
VisuMZ.CoreEngine.Game_Interpreter_PluginCommand = Game_Interpreter.prototype.command357;
Game_Interpreter.prototype.command357 = function (_0x3c354e) {
  $gameTemp.setLastPluginCommandInterpreter(this);
  return VisuMZ.CoreEngine.Game_Interpreter_PluginCommand.call(this, _0x3c354e);
};
Scene_Base.prototype.fadeSpeed = function () {
  return VisuMZ.CoreEngine.Settings.UI.FadeSpeed;
};
Scene_Base.prototype.isBottomHelpMode = function () {
  return VisuMZ.CoreEngine.Settings.UI.BottomHelp;
};
Scene_Base.prototype.isBottomButtonMode = function () {
  return VisuMZ.CoreEngine.Settings.UI.BottomButtons;
};
Scene_Base.prototype.isRightInputMode = function () {
  return VisuMZ.CoreEngine.Settings.UI.RightMenus;
};
Scene_Base.prototype.mainCommandWidth = function () {
  return VisuMZ.CoreEngine.Settings.UI.CommandWidth;
};
Scene_Base.prototype.buttonAreaHeight = function () {
  return VisuMZ.CoreEngine.Settings.UI.ButtonHeight;
};
Scene_Base.prototype.isWindowMaskingEnabled = function () {
  return VisuMZ.CoreEngine.Settings.Window.EnableMasking;
};
VisuMZ.CoreEngine.Scene_Base_createWindowLayer = Scene_Base.prototype.createWindowLayer;
Scene_Base.prototype.createWindowLayer = function () {
  VisuMZ.CoreEngine.Scene_Base_createWindowLayer.call(this);
  this.createButtonAssistWindow();
  this.createTextPopupWindow();
  this._windowLayer.x = Math.round(this._windowLayer.x);
  this._windowLayer.y = Math.round(this._windowLayer.y);
};
Scene_Base.prototype.createButtonAssistWindow = function () {};
Scene_Base.prototype.createTextPopupWindow = function () {
  this._textPopupWindow = new Window_TextPopup();
  this.addChild(this._textPopupWindow);
};
$textPopup = function (_0x20b710) {
  const _0x31ea33 = SceneManager._scene._textPopupWindow;
  if (_0x31ea33) {
    _0x31ea33.addQueue(_0x20b710);
  }
};
Scene_Base.prototype.buttonAssistKey1 = function () {
  return TextManager.getInputMultiButtonStrings('pageup', "pagedown");
};
Scene_Base.prototype.buttonAssistKey2 = function () {
  return TextManager.getInputButtonString("tab");
};
Scene_Base.prototype.buttonAssistKey3 = function () {
  return TextManager.getInputButtonString("shift");
};
Scene_Base.prototype.buttonAssistKey4 = function () {
  return TextManager.getInputButtonString('ok');
};
Scene_Base.prototype.buttonAssistKey5 = function () {
  return TextManager.getInputButtonString('cancel');
};
Scene_Base.prototype.buttonAssistText1 = function () {
  return this._pageupButton && this._pageupButton.visible ? TextManager.buttonAssistSwitch : '';
};
Scene_Base.prototype.buttonAssistText2 = function () {
  return '';
};
Scene_Base.prototype.buttonAssistText3 = function () {
  return '';
};
Scene_Base.prototype.buttonAssistText4 = function () {
  return TextManager.buttonAssistOk;
};
Scene_Base.prototype.buttonAssistText5 = function () {
  return TextManager.buttonAssistCancel;
};
Scene_Base.prototype.buttonAssistOffset1 = function () {
  return 0x0;
};
Scene_Base.prototype.buttonAssistOffset2 = function () {
  return 0x0;
};
Scene_Base.prototype.buttonAssistOffset3 = function () {
  return 0x0;
};
Scene_Base.prototype.buttonAssistOffset4 = function () {
  return 0x0;
};
Scene_Base.prototype.buttonAssistOffset5 = function () {
  return 0x0;
};
VisuMZ.CoreEngine.Scene_Boot_loadSystemImages = Scene_Boot.prototype.loadSystemImages;
Scene_Boot.prototype.loadSystemImages = function () {
  VisuMZ.CoreEngine.Scene_Boot_loadSystemImages.call(this);
  this.loadGameImagesCoreEngine();
};
Scene_Boot.prototype.loadGameImagesCoreEngine = function () {
  const _0x3558e5 = ["animations", 'battlebacks1', "battlebacks2", "characters", "enemies", 'faces', "parallaxes", "pictures", "sv_actors", "sv_enemies", 'system', 'tilesets', "titles1", "titles2"];
  for (const _0x3a72f8 of _0x3558e5) {
    const _0x574bd5 = VisuMZ.CoreEngine.Settings.ImgLoad[_0x3a72f8];
    const _0x3a6db8 = "img/%1/".format(_0x3a72f8);
    for (const _0xe69a92 of _0x574bd5) {
      ImageManager.loadBitmap(_0x3a6db8, _0xe69a92);
    }
  }
};
VisuMZ.CoreEngine.Scene_Boot_startNormalGame = Scene_Boot.prototype.startNormalGame;
Scene_Boot.prototype.startNormalGame = function () {
  if (Utils.isOptionValid("test") && VisuMZ.CoreEngine.Settings.QoL.NewGameBoot) {
    this.startAutoNewGame();
  } else {
    VisuMZ.CoreEngine.Scene_Boot_startNormalGame.call(this);
  }
};
Scene_Boot.prototype.startAutoNewGame = function () {
  this.checkPlayerLocation();
  DataManager.setupNewGame();
  SceneManager.goto(Scene_Map);
};
Scene_Boot.prototype.adjustBoxSize = function () {
  const _0xac0a3c = $dataSystem.advanced.uiAreaWidth;
  const _0x4964dc = $dataSystem.advanced.uiAreaHeight;
  const _0x1ed994 = VisuMZ.CoreEngine.Settings.UI.BoxMargin;
  Graphics.boxWidth = _0xac0a3c - _0x1ed994 * 0x2;
  Graphics.boxHeight = _0x4964dc - _0x1ed994 * 0x2;
  this.determineSideButtonLayoutValid();
};
VisuMZ.CoreEngine.Scene_Boot_updateDocumentTitle = Scene_Boot.prototype.updateDocumentTitle;
Scene_Boot.prototype.updateDocumentTitle = function () {
  if (this.isFullDocumentTitle()) {
    this.makeDocumentTitle();
  } else {
    VisuMZ.CoreEngine.Scene_Boot_updateDocumentTitle.call(this);
  }
};
Scene_Boot.prototype.isFullDocumentTitle = function () {
  if (Scene_Title.subtitle === '') {
    return false;
  }
  if (Scene_Title.subtitle === "Subtitle") {
    return false;
  }
  if (Scene_Title.version === '') {
    return false;
  }
  if (Scene_Title.version === '0.00') {
    return false;
  }
  return true;
};
Scene_Boot.prototype.makeDocumentTitle = function () {
  const _0x37b642 = $dataSystem.gameTitle;
  const _0x19378e = Scene_Title.subtitle || '';
  const _0x492bfc = Scene_Title.version || '';
  const _0x19487d = VisuMZ.CoreEngine.Settings.MenuLayout.Title.DocumentTitleFmt;
  const _0x1d97c9 = _0x19487d.format(_0x37b642, _0x19378e, _0x492bfc);
  document.title = _0x1d97c9;
};
Scene_Boot.prototype.determineSideButtonLayoutValid = function () {
  if (VisuMZ.CoreEngine.Settings.UI.SideButtons) {
    const _0x1dbd59 = Graphics.width - Graphics.boxWidth - VisuMZ.CoreEngine.Settings.UI.BoxMargin * 0x2;
    const _0xd65202 = Sprite_Button.prototype.blockWidth.call(this) * 0x4;
    if (_0x1dbd59 >= _0xd65202) {
      SceneManager.setSideButtonLayout(true);
    }
  }
};
Scene_Title.subtitle = VisuMZ.CoreEngine.Settings.MenuLayout.Title.Subtitle;
Scene_Title.version = VisuMZ.CoreEngine.Settings.MenuLayout.Title.Version;
Scene_Title.pictureButtons = VisuMZ.CoreEngine.Settings.TitlePicButtons;
VisuMZ.CoreEngine.Scene_Title_drawGameTitle = Scene_Title.prototype.drawGameTitle;
Scene_Title.prototype.drawGameTitle = function () {
  VisuMZ.CoreEngine.Settings.MenuLayout.Title.drawGameTitle.call(this);
  if (Scene_Title.subtitle !== '' && Scene_Title.subtitle !== "Subtitle") {
    this.drawGameSubtitle();
  }
  if (Scene_Title.version !== '' && Scene_Title.version !== "0.00") {
    this.drawGameVersion();
  }
};
Scene_Title.prototype.drawGameSubtitle = function () {
  VisuMZ.CoreEngine.Settings.MenuLayout.Title.drawGameSubtitle.call(this);
};
Scene_Title.prototype.drawGameVersion = function () {
  VisuMZ.CoreEngine.Settings.MenuLayout.Title.drawGameVersion.call(this);
};
Scene_Title.prototype.createCommandWindow = function () {
  this.createTitleButtons();
  const _0x1d2f86 = $dataSystem.titleCommandWindow.background;
  const _0x107d69 = this.commandWindowRect();
  this._commandWindow = new Window_TitleCommand(_0x107d69);
  this._commandWindow.setBackgroundType(_0x1d2f86);
  const _0x5901ae = this.commandWindowRect();
  this._commandWindow.move(_0x5901ae.x, _0x5901ae.y, _0x5901ae.width, _0x5901ae.height);
  this._commandWindow.createContents();
  this._commandWindow.refresh();
  this._commandWindow.selectLast();
  this.addWindow(this._commandWindow);
};
Scene_Title.prototype.commandWindowRows = function () {
  return this._commandWindow ? this._commandWindow.maxItems() : VisuMZ.CoreEngine.Settings.TitleCommandList.length;
};
Scene_Title.prototype.commandWindowRect = function () {
  return VisuMZ.CoreEngine.Settings.MenuLayout.Title.CommandRect.call(this);
};
Scene_Title.prototype.createTitleButtons = function () {
  for (const _0xd1b321 of Scene_Title.pictureButtons) {
    const _0x59fed1 = new Sprite_TitlePictureButton(_0xd1b321);
    this.addChild(_0x59fed1);
  }
};
VisuMZ.CoreEngine.Scene_Map_initialize = Scene_Map.prototype.initialize;
Scene_Map.prototype.initialize = function () {
  VisuMZ.CoreEngine.Scene_Map_initialize.call(this);
  $gameTemp.clearForcedGameTroopSettingsCoreEngine();
  this.clearOnceParallelInterpreters();
};
VisuMZ.CoreEngine.Scene_Map_updateMainMultiply = Scene_Map.prototype.updateMainMultiply;
Scene_Map.prototype.updateMainMultiply = function () {
  VisuMZ.CoreEngine.Scene_Map_updateMainMultiply.call(this);
  if ($gameTemp._playTestFastMode && !$gameMessage.isBusy()) {
    this.updateMain();
    SceneManager.updateEffekseer();
  }
};
Scene_Map.prototype.terminate = function () {
  Scene_Message.prototype.terminate.call(this);
  if (!SceneManager.isNextScene(Scene_Battle)) {
    this._spriteset.update();
    this._mapNameWindow.hide();
    this._windowLayer.visible = false;
    SceneManager.snapForBackground();
  }
  $gameScreen.clearZoom();
  this.clearOnceParallelInterpreters();
};
VisuMZ.CoreEngine.Scene_Map_createMenuButton = Scene_Map.prototype.createMenuButton;
Scene_Map.prototype.createMenuButton = function () {
  VisuMZ.CoreEngine.Scene_Map_createMenuButton.call(this);
  if (SceneManager.isSideButtonLayout()) {
    this.moveMenuButtonSideButtonLayout();
  }
};
Scene_Map.prototype.moveMenuButtonSideButtonLayout = function () {
  this._menuButton.x = Graphics.boxWidth + 0x4;
};
VisuMZ.CoreEngine.Scene_Map_updateScene = Scene_Map.prototype.updateScene;
Scene_Map.prototype.updateScene = function () {
  VisuMZ.CoreEngine.Scene_Map_updateScene.call(this);
  this.updateDashToggle();
};
Scene_Map.prototype.updateDashToggle = function () {
  if (Input.isTriggered("dashToggle")) {
    ConfigManager.alwaysDash = !ConfigManager.alwaysDash;
    ConfigManager.save();
  }
};
VisuMZ.CoreEngine.Scene_Map_updateMain = Scene_Map.prototype.updateMain;
Scene_Map.prototype.updateMain = function () {
  VisuMZ.CoreEngine.Scene_Map_updateMain.call(this);
  this.updateOnceParallelInterpreters();
};
Scene_Map.prototype.clearOnceParallelInterpreters = function () {
  this._onceParallelInterpreters = [];
};
Scene_Map.prototype.updateOnceParallelInterpreters = function () {
  if (!this._onceParallelInterpreters) {
    return;
  }
  for (const _0x45c952 of this._onceParallelInterpreters) {
    if (_0x45c952) {
      _0x45c952.update();
    }
  }
};
Scene_Map.prototype.playOnceParallelInterpreter = function (_0x56c5c9, _0x483401) {
  const _0x552ecc = $dataCommonEvents[_0x56c5c9];
  if (!_0x552ecc) {
    return;
  }
  const _0x2035f9 = new Game_OnceParallelInterpreter();
  this.addOnceParallelInterpreter(_0x2035f9);
  _0x2035f9.setCommonEvent(_0x56c5c9);
  _0x2035f9.setEvent(_0x483401);
};
Scene_Map.prototype.addOnceParallelInterpreter = function (_0x1e6dbb) {
  this._onceParallelInterpreters = this._onceParallelInterpreters || [];
  this._onceParallelInterpreters.push(_0x1e6dbb);
};
Scene_Map.prototype.removeOnceParallelInterpreter = function (_0x4aa215) {
  this._onceParallelInterpreters = this._onceParallelInterpreters || [];
  this._onceParallelInterpreters.remove(_0x4aa215);
};
function Game_OnceParallelInterpreter() {
  this.initialize(...arguments);
}
Game_OnceParallelInterpreter.prototype = Object.create(Game_Interpreter.prototype);
Game_OnceParallelInterpreter.prototype.constructor = Game_OnceParallelInterpreter;
Game_OnceParallelInterpreter.prototype.setCommonEvent = function (_0x23d59b) {
  const _0x3135ee = $dataCommonEvents[_0x23d59b];
  if (_0x3135ee) {
    this.setup(_0x3135ee.list, 0x0);
  } else {
    this.terminate();
  }
};
Game_OnceParallelInterpreter.prototype.setEvent = function (_0x115e41) {
  this._eventId = _0x115e41 || 0x0;
};
Game_OnceParallelInterpreter.prototype.terminate = function () {
  if (!SceneManager.isSceneMap()) {
    return;
  }
  SceneManager._scene.removeOnceParallelInterpreter(this);
  Game_Interpreter.prototype.terminate.call(this);
};
VisuMZ.CoreEngine.Scene_MenuBase_helpAreaTop = Scene_MenuBase.prototype.helpAreaTop;
Scene_MenuBase.prototype.helpAreaTop = function () {
  let _0xda7d2d = 0x0;
  if (SceneManager.areButtonsOutsideMainUI()) {
    _0xda7d2d = this.helpAreaTopSideButtonLayout();
  } else {
    _0xda7d2d = VisuMZ.CoreEngine.Scene_MenuBase_helpAreaTop.call(this);
  }
  return _0xda7d2d;
};
Scene_MenuBase.prototype.helpAreaTopSideButtonLayout = function () {
  return this.isBottomHelpMode() ? this.mainAreaBottom() : 0x0;
};
VisuMZ.CoreEngine.Scene_MenuBase_mainAreaTop = Scene_MenuBase.prototype.mainAreaTop;
Scene_MenuBase.prototype.mainAreaTop = function () {
  return SceneManager.areButtonsOutsideMainUI() ? this.mainAreaTopSideButtonLayout() : VisuMZ.CoreEngine.Scene_MenuBase_mainAreaTop.call(this);
};
Scene_MenuBase.prototype.mainAreaTopSideButtonLayout = function () {
  if (!this.isBottomHelpMode()) {
    return this.helpAreaBottom();
  } else {
    return this.isMenuButtonAssistEnabled() && this.getButtonAssistLocation() === "top" ? Window_ButtonAssist.prototype.lineHeight() : 0x0;
  }
};
VisuMZ.CoreEngine.Scene_MenuBase_mainAreaHeight = Scene_MenuBase.prototype.mainAreaHeight;
Scene_MenuBase.prototype.mainAreaHeight = function () {
  let _0xe90d8f = 0x0;
  if (SceneManager.areButtonsOutsideMainUI()) {
    _0xe90d8f = this.mainAreaHeightSideButtonLayout();
  } else {
    _0xe90d8f = VisuMZ.CoreEngine.Scene_MenuBase_mainAreaHeight.call(this);
  }
  if (this.isMenuButtonAssistEnabled() && this.getButtonAssistLocation() !== "button") {
    _0xe90d8f -= Window_ButtonAssist.prototype.lineHeight();
  }
  return _0xe90d8f;
};
Scene_MenuBase.prototype.mainAreaHeightSideButtonLayout = function () {
  return Graphics.boxHeight - this.helpAreaHeight();
};
VisuMZ.CoreEngine.Scene_MenuBase_createBackground = Scene_MenuBase.prototype.createBackground;
Scene_MenuBase.prototype.createBackground = function () {
  const _0x2c8f96 = VisuMZ.CoreEngine.Settings.MenuBg.BlurStrength ?? 0x8;
  this._backgroundFilter = new PIXI.filters.BlurFilter(_0x2c8f96);
  this._backgroundSprite = new Sprite();
  this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
  this._backgroundSprite.filters = [this._backgroundFilter];
  this.addChild(this._backgroundSprite);
  this.setBackgroundOpacity(0xc0);
  this.setBackgroundOpacity(this.getBackgroundOpacity());
  this.createCustomBackgroundImages();
};
Scene_MenuBase.prototype.getBackgroundOpacity = function () {
  const _0x8cb43a = String(this.constructor.name);
  const _0x535625 = this.getCustomBackgroundSettings(_0x8cb43a);
  return _0x535625 ? _0x535625.SnapshotOpacity : 0xc0;
};
Scene_MenuBase.prototype.createCustomBackgroundImages = function () {
  const _0x1033c2 = String(this.constructor.name);
  const _0x3c31d3 = this.getCustomBackgroundSettings(_0x1033c2);
  if (_0x3c31d3 && (_0x3c31d3.BgFilename1 !== '' || _0x3c31d3.BgFilename2 !== '')) {
    this._backSprite1 = new Sprite(ImageManager.loadTitle1(_0x3c31d3.BgFilename1));
    this._backSprite2 = new Sprite(ImageManager.loadTitle2(_0x3c31d3.BgFilename2));
    this.addChild(this._backSprite1);
    this.addChild(this._backSprite2);
    this._backSprite1.bitmap.addLoadListener(this.adjustSprite.bind(this, this._backSprite1));
    this._backSprite2.bitmap.addLoadListener(this.adjustSprite.bind(this, this._backSprite2));
  }
};
Scene_MenuBase.prototype.getCustomBackgroundSettings = function (_0x5d93c6) {
  return VisuMZ.CoreEngine.Settings.MenuBg[_0x5d93c6] || VisuMZ.CoreEngine.Settings.MenuBg.Scene_Unlisted;
};
Scene_MenuBase.prototype.adjustSprite = function (_0x4b80ce) {
  this.scaleSprite(_0x4b80ce);
  this.centerSprite(_0x4b80ce);
};
VisuMZ.CoreEngine.Scene_MenuBase_createCancelButton = Scene_MenuBase.prototype.createCancelButton;
Scene_MenuBase.prototype.createCancelButton = function () {
  VisuMZ.CoreEngine.Scene_MenuBase_createCancelButton.call(this);
  if (SceneManager.isSideButtonLayout()) {
    this.moveCancelButtonSideButtonLayout();
  }
};
Scene_MenuBase.prototype.moveCancelButtonSideButtonLayout = function () {
  this._cancelButton.x = Graphics.boxWidth + 0x4;
};
VisuMZ.CoreEngine.Scene_MenuBase_createPageButtons = Scene_MenuBase.prototype.createPageButtons;
Scene_MenuBase.prototype.createPageButtons = function () {
  VisuMZ.CoreEngine.Scene_MenuBase_createPageButtons.call(this);
  if (SceneManager.isSideButtonLayout()) {
    this.movePageButtonSideButtonLayout();
  }
};
Scene_MenuBase.prototype.movePageButtonSideButtonLayout = function () {
  this._pageupButton.x = -0x1 * (this._pageupButton.width + this._pagedownButton.width + 0x8);
  this._pagedownButton.x = -0x1 * (this._pagedownButton.width + 0x4);
};
Scene_MenuBase.prototype.isMenuButtonAssistEnabled = function () {
  return VisuMZ.CoreEngine.Settings.ButtonAssist.Enable;
};
Scene_MenuBase.prototype.getButtonAssistLocation = function () {
  return SceneManager.isSideButtonLayout() || SceneManager.areButtonsHidden() ? VisuMZ.CoreEngine.Settings.ButtonAssist.Location : 'button';
};
Scene_MenuBase.prototype.createButtonAssistWindow = function () {
  if (!this.isMenuButtonAssistEnabled()) {
    return;
  }
  const _0x43bee5 = this.buttonAssistWindowRect();
  this._buttonAssistWindow = new Window_ButtonAssist(_0x43bee5);
  this.addWindow(this._buttonAssistWindow);
};
Scene_MenuBase.prototype.buttonAssistWindowRect = function () {
  return this.getButtonAssistLocation() === "button" ? this.buttonAssistWindowButtonRect() : this.buttonAssistWindowSideRect();
};
Scene_MenuBase.prototype.buttonAssistWindowButtonRect = function () {
  const _0x1ae34a = ConfigManager.touchUI ? (Sprite_Button.prototype.blockWidth() + 0x6) * 0x2 : 0x0;
  const _0x531ebe = this.buttonY();
  const _0xd45f4a = Graphics.boxWidth - _0x1ae34a * 0x2;
  const _0x1d0e6e = this.buttonAreaHeight();
  return new Rectangle(_0x1ae34a, _0x531ebe, _0xd45f4a, _0x1d0e6e);
};
Scene_MenuBase.prototype.buttonAssistWindowSideRect = function () {
  const _0x3d1a91 = Graphics.boxWidth;
  const _0x12544a = Window_ButtonAssist.prototype.lineHeight();
  let _0x32ffc0 = 0x0;
  if (this.getButtonAssistLocation() === "top") {
    _0x32ffc0 = 0x0;
  } else {
    _0x32ffc0 = Graphics.boxHeight - _0x12544a;
  }
  return new Rectangle(0x0, _0x32ffc0, _0x3d1a91, _0x12544a);
};
Scene_Menu.layoutSettings = VisuMZ.CoreEngine.Settings.MenuLayout.MainMenu;
VisuMZ.CoreEngine.Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function () {
  VisuMZ.CoreEngine.Scene_Menu_create.call(this);
  this.setCoreEngineUpdateWindowBg();
};
Scene_Menu.prototype.setCoreEngineUpdateWindowBg = function () {
  if (this._commandWindow) {
    this._commandWindow.setBackgroundType(Scene_Menu.layoutSettings.CommandBgType);
  }
  if (this._goldWindow) {
    this._goldWindow.setBackgroundType(Scene_Menu.layoutSettings.GoldBgType);
  }
  if (this._statusWindow) {
    this._statusWindow.setBackgroundType(Scene_Menu.layoutSettings.StatusBgType);
  }
};
Scene_Menu.prototype.commandWindowRect = function () {
  return Scene_Menu.layoutSettings.CommandRect.call(this);
};
Scene_Menu.prototype.goldWindowRect = function () {
  return Scene_Menu.layoutSettings.GoldRect.call(this);
};
Scene_Menu.prototype.statusWindowRect = function () {
  return Scene_Menu.layoutSettings.StatusRect.call(this);
};
Scene_Item.layoutSettings = VisuMZ.CoreEngine.Settings.MenuLayout.ItemMenu;
VisuMZ.CoreEngine.Scene_Item_create = Scene_Item.prototype.create;
Scene_Item.prototype.create = function () {
  VisuMZ.CoreEngine.Scene_Item_create.call(this);
  this.setCoreEngineUpdateWindowBg();
};
Scene_Item.prototype.setCoreEngineUpdateWindowBg = function () {
  if (this._helpWindow) {
    this._helpWindow.setBackgroundType(Scene_Item.layoutSettings.HelpBgType);
  }
  if (this._categoryWindow) {
    this._categoryWindow.setBackgroundType(Scene_Item.layoutSettings.CategoryBgType);
  }
  if (this._itemWindow) {
    this._itemWindow.setBackgroundType(Scene_Item.layoutSettings.ItemBgType);
  }
  if (this._actorWindow) {
    this._actorWindow.setBackgroundType(Scene_Item.layoutSettings.ActorBgType);
  }
};
Scene_Item.prototype.helpWindowRect = function () {
  return Scene_Item.layoutSettings.HelpRect.call(this);
};
Scene_Item.prototype.categoryWindowRect = function () {
  return Scene_Item.layoutSettings.CategoryRect.call(this);
};
Scene_Item.prototype.itemWindowRect = function () {
  return Scene_Item.layoutSettings.ItemRect.call(this);
};
Scene_Item.prototype.actorWindowRect = function () {
  return Scene_Item.layoutSettings.ActorRect.call(this);
};
Scene_Skill.layoutSettings = VisuMZ.CoreEngine.Settings.MenuLayout.SkillMenu;
VisuMZ.CoreEngine.Scene_Skill_create = Scene_Skill.prototype.create;
Scene_Skill.prototype.create = function () {
  VisuMZ.CoreEngine.Scene_Skill_create.call(this);
  this.setCoreEngineUpdateWindowBg();
};
Scene_Skill.prototype.setCoreEngineUpdateWindowBg = function () {
  if (this._helpWindow) {
    this._helpWindow.setBackgroundType(Scene_Skill.layoutSettings.HelpBgType);
  }
  if (this._skillTypeWindow) {
    this._skillTypeWindow.setBackgroundType(Scene_Skill.layoutSettings.SkillTypeBgType);
  }
  if (this._statusWindow) {
    this._statusWindow.setBackgroundType(Scene_Skill.layoutSettings.StatusBgType);
  }
  if (this._itemWindow) {
    this._itemWindow.setBackgroundType(Scene_Skill.layoutSettings.ItemBgType);
  }
  if (this._actorWindow) {
    this._actorWindow.setBackgroundType(Scene_Skill.layoutSettings.ActorBgType);
  }
};
Scene_Skill.prototype.helpWindowRect = function () {
  return Scene_Skill.layoutSettings.HelpRect.call(this);
};
Scene_Skill.prototype.skillTypeWindowRect = function () {
  return Scene_Skill.layoutSettings.SkillTypeRect.call(this);
};
Scene_Skill.prototype.statusWindowRect = function () {
  return Scene_Skill.layoutSettings.StatusRect.call(this);
};
Scene_Skill.prototype.itemWindowRect = function () {
  return Scene_Skill.layoutSettings.ItemRect.call(this);
};
Scene_Skill.prototype.actorWindowRect = function () {
  return Scene_Skill.layoutSettings.ActorRect.call(this);
};
Scene_Equip.layoutSettings = VisuMZ.CoreEngine.Settings.MenuLayout.EquipMenu;
VisuMZ.CoreEngine.Scene_Equip_create = Scene_Equip.prototype.create;
Scene_Equip.prototype.create = function () {
  VisuMZ.CoreEngine.Scene_Equip_create.call(this);
  this.setCoreEngineUpdateWindowBg();
};
Scene_Equip.prototype.setCoreEngineUpdateWindowBg = function () {
  if (this._helpWindow) {
    this._helpWindow.setBackgroundType(Scene_Equip.layoutSettings.HelpBgType);
  }
  if (this._statusWindow) {
    this._statusWindow.setBackgroundType(Scene_Equip.layoutSettings.StatusBgType);
  }
  if (this._commandWindow) {
    this._commandWindow.setBackgroundType(Scene_Equip.layoutSettings.CommandBgType);
  }
  if (this._slotWindow) {
    this._slotWindow.setBackgroundType(Scene_Equip.layoutSettings.SlotBgType);
  }
  if (this._itemWindow) {
    this._itemWindow.setBackgroundType(Scene_Equip.layoutSettings.ItemBgType);
  }
};
Scene_Equip.prototype.helpWindowRect = function () {
  return Scene_Equip.layoutSettings.HelpRect.call(this);
};
Scene_Equip.prototype.statusWindowRect = function () {
  return Scene_Equip.layoutSettings.StatusRect.call(this);
};
Scene_Equip.prototype.commandWindowRect = function () {
  return Scene_Equip.layoutSettings.CommandRect.call(this);
};
Scene_Equip.prototype.slotWindowRect = function () {
  return Scene_Equip.layoutSettings.SlotRect.call(this);
};
Scene_Equip.prototype.itemWindowRect = function () {
  return Scene_Equip.layoutSettings.ItemRect.call(this);
};
Scene_Status.layoutSettings = VisuMZ.CoreEngine.Settings.MenuLayout.StatusMenu;
VisuMZ.CoreEngine.Scene_Status_create = Scene_Status.prototype.create;
Scene_Status.prototype.create = function () {
  VisuMZ.CoreEngine.Scene_Status_create.call(this);
  this.setCoreEngineUpdateWindowBg();
};
Scene_Status.prototype.setCoreEngineUpdateWindowBg = function () {
  if (this._profileWindow) {
    this._profileWindow.setBackgroundType(Scene_Status.layoutSettings.ProfileBgType);
  }
  if (this._statusWindow) {
    this._statusWindow.setBackgroundType(Scene_Status.layoutSettings.StatusBgType);
  }
  if (this._statusParamsWindow) {
    this._statusParamsWindow.setBackgroundType(Scene_Status.layoutSettings.StatusParamsBgType);
  }
  if (this._statusEquipWindow) {
    this._statusEquipWindow.setBackgroundType(Scene_Status.layoutSettings.StatusEquipBgType);
  }
};
Scene_Status.prototype.profileWindowRect = function () {
  return Scene_Status.layoutSettings.ProfileRect.call(this);
};
Scene_Status.prototype.statusWindowRect = function () {
  return Scene_Status.layoutSettings.StatusRect.call(this);
};
Scene_Status.prototype.statusParamsWindowRect = function () {
  return Scene_Status.layoutSettings.StatusParamsRect.call(this);
};
Scene_Status.prototype.statusEquipWindowRect = function () {
  return Scene_Status.layoutSettings.StatusEquipRect.call(this);
};
Scene_Options.layoutSettings = VisuMZ.CoreEngine.Settings.MenuLayout.OptionsMenu;
VisuMZ.CoreEngine.Scene_Options_create = Scene_Options.prototype.create;
Scene_Options.prototype.create = function () {
  VisuMZ.CoreEngine.Scene_Options_create.call(this);
  this.setCoreEngineUpdateWindowBg();
};
Scene_Options.prototype.setCoreEngineUpdateWindowBg = function () {
  if (this._optionsWindow) {
    this._optionsWindow.setBackgroundType(Scene_Options.layoutSettings.OptionsBgType);
  }
};
Scene_Options.prototype.optionsWindowRect = function () {
  return Scene_Options.layoutSettings.OptionsRect.call(this);
};
Scene_Save.layoutSettings = VisuMZ.CoreEngine.Settings.MenuLayout.SaveMenu;
Scene_Save.prototype.create = function () {
  Scene_File.prototype.create.call(this);
  this.setCoreEngineUpdateWindowBg();
};
Scene_Save.prototype.setCoreEngineUpdateWindowBg = function () {
  if (this._helpWindow) {
    this._helpWindow.setBackgroundType(Scene_Save.layoutSettings.HelpBgType);
  }
  if (this._listWindow) {
    this._listWindow.setBackgroundType(Scene_Save.layoutSettings.ListBgType);
  }
};
Scene_Save.prototype.helpWindowRect = function () {
  return Scene_Save.layoutSettings.HelpRect.call(this);
};
Scene_Save.prototype.listWindowRect = function () {
  return Scene_Save.layoutSettings.ListRect.call(this);
};
Scene_Load.layoutSettings = VisuMZ.CoreEngine.Settings.MenuLayout.LoadMenu;
Scene_Load.prototype.create = function () {
  Scene_File.prototype.create.call(this);
  this.setCoreEngineUpdateWindowBg();
};
Scene_Load.prototype.setCoreEngineUpdateWindowBg = function () {
  if (this._helpWindow) {
    this._helpWindow.setBackgroundType(Scene_Load.layoutSettings.HelpBgType);
  }
  if (this._listWindow) {
    this._listWindow.setBackgroundType(Scene_Load.layoutSettings.ListBgType);
  }
};
Scene_Load.prototype.helpWindowRect = function () {
  return Scene_Load.layoutSettings.HelpRect.call(this);
};
Scene_Load.prototype.listWindowRect = function () {
  return Scene_Load.layoutSettings.ListRect.call(this);
};
function Scene_QuickLoad() {
  this.initialize(...arguments);
}
Scene_QuickLoad.prototype = Object.create(Scene_Load.prototype);
Scene_QuickLoad.prototype.constructor = Scene_QuickLoad;
Scene_QuickLoad.prototype.initialize = function () {
  Scene_Load.prototype.initialize.call(this);
};
Scene_QuickLoad.prototype.create = function () {
  this.executeLoad(this._saveFileID);
};
Scene_QuickLoad.prototype.prepare = function (_0x423090) {
  this._saveFileID = _0x423090;
};
Scene_QuickLoad.prototype.start = function () {
  Scene_MenuBase.prototype.start.call(this);
};
Scene_GameEnd.layoutSettings = VisuMZ.CoreEngine.Settings.MenuLayout.GameEnd;
VisuMZ.CoreEngine.Scene_GameEnd_createBackground = Scene_GameEnd.prototype.createBackground;
Scene_GameEnd.prototype.createBackground = function () {
  Scene_MenuBase.prototype.createBackground.call(this);
};
Scene_GameEnd.prototype.createCommandWindow = function () {
  const _0x5b5f33 = this.commandWindowRect();
  this._commandWindow = new Window_GameEnd(_0x5b5f33);
  this._commandWindow.setHandler("cancel", this.popScene.bind(this));
  this.addWindow(this._commandWindow);
  this._commandWindow.setBackgroundType(Scene_GameEnd.layoutSettings.CommandBgType);
};
Scene_GameEnd.prototype.commandWindowRect = function () {
  return Scene_GameEnd.layoutSettings.CommandRect.call(this);
};
Scene_Shop.layoutSettings = VisuMZ.CoreEngine.Settings.MenuLayout.ShopMenu;
VisuMZ.CoreEngine.Scene_Shop_create = Scene_Shop.prototype.create;
Scene_Shop.prototype.create = function () {
  VisuMZ.CoreEngine.Scene_Shop_create.call(this);
  this.setCoreEngineUpdateWindowBg();
};
Scene_Shop.prototype.setCoreEngineUpdateWindowBg = function () {
  if (this._helpWindow) {
    this._helpWindow.setBackgroundType(Scene_Shop.layoutSettings.HelpBgType);
  }
  if (this._goldWindow) {
    this._goldWindow.setBackgroundType(Scene_Shop.layoutSettings.GoldBgType);
  }
  if (this._commandWindow) {
    this._commandWindow.setBackgroundType(Scene_Shop.layoutSettings.CommandBgType);
  }
  if (this._dummyWindow) {
    this._dummyWindow.setBackgroundType(Scene_Shop.layoutSettings.DummyBgType);
  }
  if (this._numberWindow) {
    this._numberWindow.setBackgroundType(Scene_Shop.layoutSettings.NumberBgType);
  }
  if (this._statusWindow) {
    this._statusWindow.setBackgroundType(Scene_Shop.layoutSettings.StatusBgType);
  }
  if (this._buyWindow) {
    this._buyWindow.setBackgroundType(Scene_Shop.layoutSettings.BuyBgType);
  }
  if (this._categoryWindow) {
    this._categoryWindow.setBackgroundType(Scene_Shop.layoutSettings.CategoryBgType);
  }
  if (this._sellWindow) {
    this._sellWindow.setBackgroundType(Scene_Shop.layoutSettings.SellBgType);
  }
};
Scene_Shop.prototype.helpWindowRect = function () {
  return Scene_Shop.layoutSettings.HelpRect.call(this);
};
Scene_Shop.prototype.goldWindowRect = function () {
  return Scene_Shop.layoutSettings.GoldRect.call(this);
};
Scene_Shop.prototype.commandWindowRect = function () {
  return Scene_Shop.layoutSettings.CommandRect.call(this);
};
Scene_Shop.prototype.dummyWindowRect = function () {
  return Scene_Shop.layoutSettings.DummyRect.call(this);
};
Scene_Shop.prototype.numberWindowRect = function () {
  return Scene_Shop.layoutSettings.NumberRect.call(this);
};
Scene_Shop.prototype.statusWindowRect = function () {
  return Scene_Shop.layoutSettings.StatusRect.call(this);
};
Scene_Shop.prototype.buyWindowRect = function () {
  return Scene_Shop.layoutSettings.BuyRect.call(this);
};
Scene_Shop.prototype.categoryWindowRect = function () {
  return Scene_Shop.layoutSettings.CategoryRect.call(this);
};
Scene_Shop.prototype.sellWindowRect = function () {
  return Scene_Shop.layoutSettings.SellRect.call(this);
};
Scene_Name.layoutSettings = VisuMZ.CoreEngine.Settings.MenuLayout.NameMenu;
VisuMZ.CoreEngine.Scene_Name_create = Scene_Name.prototype.create;
Scene_Name.prototype.create = function () {
  VisuMZ.CoreEngine.Scene_Name_create.call(this);
  this.setCoreEngineUpdateWindowBg();
};
Scene_Name.prototype.setCoreEngineUpdateWindowBg = function () {
  if (this._editWindow) {
    this._editWindow.setBackgroundType(Scene_Name.layoutSettings.EditBgType);
  }
  if (this._inputWindow) {
    this._inputWindow.setBackgroundType(Scene_Name.layoutSettings.InputBgType);
  }
};
Scene_Name.prototype.helpAreaHeight = function () {
  return 0x0;
};
Scene_Name.prototype.editWindowRect = function () {
  return Scene_Name.layoutSettings.EditRect.call(this);
};
Scene_Name.prototype.inputWindowRect = function () {
  return Scene_Name.layoutSettings.InputRect.call(this);
};
Scene_Name.prototype.EnableNameInput = function () {
  if (!this._inputWindow) {
    return false;
  }
  return VisuMZ.CoreEngine.Settings.KeyboardInput.EnableNameInput;
};
Scene_Name.prototype.buttonAssistKey1 = function () {
  if (this.EnableNameInput() && this._inputWindow._mode !== "keyboard") {
    return TextManager.getInputMultiButtonStrings("pageup", "pagedown");
  }
  return Scene_MenuBase.prototype.buttonAssistKey1.call(this);
};
Scene_Name.prototype.buttonAssistKey3 = function () {
  return this.EnableNameInput() ? TextManager.getInputButtonString('tab') : Scene_MenuBase.prototype.buttonAssistKey3.call(this);
};
Scene_Name.prototype.buttonAssistKey4 = function () {
  if (this.EnableNameInput() && this._inputWindow._mode === "keyboard") {
    return TextManager.makeInputButtonString(["ENTER"]);
  }
  return Scene_MenuBase.prototype.buttonAssistKey4.call(this);
};
Scene_Name.prototype.buttonAssistKey5 = function () {
  if (this.EnableNameInput() && this._inputWindow._mode === "keyboard") {
    return TextManager.makeInputButtonString(["BKSP"]);
  }
  return Scene_MenuBase.prototype.buttonAssistKey5.call(this);
};
Scene_Name.prototype.buttonAssistText1 = function () {
  if (this.EnableNameInput() && this._inputWindow._mode !== "keyboard") {
    const _0x68ea03 = VisuMZ.CoreEngine.Settings.KeyboardInput;
    return _0x68ea03.PageChange || "Page";
  }
  return Scene_MenuBase.prototype.buttonAssistText1.call(this);
};
Scene_Name.prototype.buttonAssistText3 = function () {
  if (this.EnableNameInput()) {
    const _0x7d9dd7 = VisuMZ.CoreEngine.Settings.KeyboardInput;
    return this._inputWindow._mode === "keyboard" ? _0x7d9dd7.Keyboard || "Keyboard" : _0x7d9dd7.Manual || "Manual";
  } else {
    return Scene_MenuBase.prototype.buttonAssistText3.call(this);
  }
};
Scene_Name.prototype.buttonAssistText4 = function () {
  if (this.EnableNameInput()) {
    const _0x14df71 = VisuMZ.CoreEngine.Settings.KeyboardInput;
    if (this._inputWindow._mode === 'keyboard') {
      return _0x14df71.Finish || "Finish";
    }
  }
  return Scene_MenuBase.prototype.buttonAssistText4.call(this);
};
VisuMZ.CoreEngine.Scene_Name_onInputOk = Scene_Name.prototype.onInputOk;
Scene_Name.prototype.onInputOk = function () {
  if (this.doesNameContainBannedWords()) {
    this.onInputBannedWords();
  } else {
    VisuMZ.CoreEngine.Scene_Name_onInputOk.call(this);
  }
};
Scene_Name.prototype.doesNameContainBannedWords = function () {
  const _0x3b1b05 = VisuMZ.CoreEngine.Settings.KeyboardInput;
  if (!_0x3b1b05) {
    return false;
  }
  const _0x382217 = _0x3b1b05.BannedWords;
  if (!_0x382217) {
    return false;
  }
  const _0xc218c0 = this._editWindow.name().toLowerCase();
  for (const _0x1de37b of _0x382217) {
    if (_0xc218c0.includes(_0x1de37b.toLowerCase())) {
      return true;
    }
  }
  return false;
};
Scene_Name.prototype.onInputBannedWords = function () {
  SoundManager.playBuzzer();
};
VisuMZ.CoreEngine.Scene_Battle_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function () {
  VisuMZ.CoreEngine.Scene_Battle_update.call(this);
  if ($gameTemp._playTestFastMode) {
    this.updatePlayTestF7();
  }
};
Scene_Battle.prototype.updatePlayTestF7 = function () {
  if (!BattleManager.isInputting() && !this._playtestF7Looping && !$gameMessage.isBusy()) {
    this._playtestF7Looping = true;
    this.update();
    SceneManager.updateEffekseer();
    this._playtestF7Looping = false;
  }
};
VisuMZ.CoreEngine.Scene_Battle_createCancelButton = Scene_Battle.prototype.createCancelButton;
Scene_Battle.prototype.createCancelButton = function () {
  VisuMZ.CoreEngine.Scene_Battle_createCancelButton.call(this);
  if (SceneManager.isSideButtonLayout()) {
    this.repositionCancelButtonSideButtonLayout();
  }
};
Scene_Battle.prototype.repositionCancelButtonSideButtonLayout = function () {
  this._cancelButton.x = Graphics.boxWidth + 0x4;
  if (this.isBottomButtonMode()) {
    this._cancelButton.y = Graphics.boxHeight - this.buttonAreaHeight();
  } else {
    this._cancelButton.y = 0x0;
  }
};
VisuMZ.CoreEngine.Sprite_Button_initialize = Sprite_Button.prototype.initialize;
Sprite_Button.prototype.initialize = function (_0x567c46) {
  VisuMZ.CoreEngine.Sprite_Button_initialize.call(this, _0x567c46);
  this.initButtonHidden();
};
Sprite_Button.prototype.initButtonHidden = function () {
  const _0x248664 = VisuMZ.CoreEngine.Settings.UI;
  this._isButtonHidden = false;
  switch (this._buttonType) {
    case 'cancel':
      this._isButtonHidden = !_0x248664.cancelShowButton;
      break;
    case 'pageup':
    case 'pagedown':
      this._isButtonHidden = !_0x248664.pagedownShowButton;
      break;
    case 'down':
    case 'up':
    case "down2":
    case 'up2':
    case 'ok':
      this._isButtonHidden = !_0x248664.numberShowButton;
      break;
    case "menu":
      this._isButtonHidden = !_0x248664.menuShowButton;
      break;
  }
};
VisuMZ.CoreEngine.Sprite_Button_updateOpacity = Sprite_Button.prototype.updateOpacity;
Sprite_Button.prototype.updateOpacity = function () {
  if (SceneManager.areButtonsHidden() || this._isButtonHidden) {
    this.hideButtonFromView();
  } else {
    VisuMZ.CoreEngine.Sprite_Button_updateOpacity.call(this);
  }
};
Sprite_Button.prototype.hideButtonFromView = function () {
  this.visible = false;
  this.opacity = 0x0;
  this.x = Graphics.width * 0xa;
  this.y = Graphics.height * 0xa;
};
VisuMZ.CoreEngine.Sprite_Battler_startMove = Sprite_Battler.prototype.startMove;
Sprite_Battler.prototype.startMove = function (_0x437990, _0x1a301d, _0x19ecb0) {
  if (this._targetOffsetX !== _0x437990 || this._targetOffsetY !== _0x1a301d) {
    this.setMoveEasingType('Linear');
    this._movementWholeDuration = _0x19ecb0;
  }
  VisuMZ.CoreEngine.Sprite_Battler_startMove.call(this, _0x437990, _0x1a301d, _0x19ecb0);
};
Sprite_Battler.prototype.setMoveEasingType = function (_0x5395c3) {
  this._moveEasingType = _0x5395c3;
};
Sprite_Battler.prototype.updateMove = function () {
  if (this._movementDuration <= 0x0) {
    return;
  }
  const _0x490a14 = this._movementDuration;
  const _0x519eb1 = this._movementWholeDuration;
  const _0x4fe3c8 = this._moveEasingType;
  this._offsetX = this.applyEasing(this._offsetX, this._targetOffsetX, _0x490a14, _0x519eb1, _0x4fe3c8);
  this._offsetY = this.applyEasing(this._offsetY, this._targetOffsetY, _0x490a14, _0x519eb1, _0x4fe3c8);
  this._movementDuration--;
  if (this._movementDuration <= 0x0) {
    this.onMoveEnd();
  }
};
Sprite_Battler.prototype.applyEasing = function (_0x59fa1b, _0x274cbd, _0x3cc950, _0x475a0e, _0x4f35b2) {
  const _0x42de9c = VisuMZ.ApplyEasing((_0x475a0e - _0x3cc950) / _0x475a0e, _0x4f35b2 || 'Linear');
  const _0x166b79 = VisuMZ.ApplyEasing((_0x475a0e - _0x3cc950 + 0x1) / _0x475a0e, _0x4f35b2 || "Linear");
  const _0x220304 = (_0x59fa1b - _0x274cbd * _0x42de9c) / (0x1 - _0x42de9c);
  return _0x220304 + (_0x274cbd - _0x220304) * _0x166b79;
};
VisuMZ.CoreEngine.Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
Sprite_Actor.prototype.setActorHome = function (_0x54cf11) {
  if (VisuMZ.CoreEngine.Settings.UI.RepositionActors) {
    this.setActorHomeRepositioned(_0x54cf11);
  } else {
    VisuMZ.CoreEngine.Sprite_Actor_setActorHome.call(this, _0x54cf11);
  }
};
Sprite_Actor.prototype.setActorHomeRepositioned = function (_0x4736c0) {
  let _0x2fffa1 = Math.round(Graphics.width / 0x2 + 0xc0);
  _0x2fffa1 -= Math.floor((Graphics.width - Graphics.boxWidth) / 0x2);
  _0x2fffa1 += _0x4736c0 * 0x20;
  let _0x9df1f7 = Graphics.height - 0xc8 - $gameParty.maxBattleMembers() * 0x30;
  _0x9df1f7 -= Math.floor((Graphics.height - Graphics.boxHeight) / 0x2);
  _0x9df1f7 += _0x4736c0 * 0x30;
  this.setHome(_0x2fffa1, _0x9df1f7);
};
Sprite_Actor.prototype.retreat = function () {
  this.startMove(0x4b0, 0x0, 0x78);
};
Sprite_Animation.prototype.setMute = function (_0x58f6a4) {
  this._muteSound = _0x58f6a4;
};
VisuMZ.CoreEngine.Sprite_Animation_processSoundTimings = Sprite_Animation.prototype.processSoundTimings;
Sprite_Animation.prototype.processSoundTimings = function () {
  if (this._muteSound) {
    return;
  }
  VisuMZ.CoreEngine.Sprite_Animation_processSoundTimings.call(this);
};
VisuMZ.CoreEngine.Sprite_Animation_setViewport = Sprite_Animation.prototype.setViewport;
Sprite_Animation.prototype.setViewport = function (_0x14d314) {
  if (this.isAnimationOffsetXMirrored()) {
    this.setViewportCoreEngineFix(_0x14d314);
  } else {
    VisuMZ.CoreEngine.Sprite_Animation_setViewport.call(this, _0x14d314);
  }
};
Sprite_Animation.prototype.isAnimationOffsetXMirrored = function () {
  if (!this._animation) {
    return false;
  }
  const _0x96b189 = this._animation.name || '';
  if (_0x96b189.match(/<MIRROR OFFSET X>/i)) {
    return true;
  }
  if (_0x96b189.match(/<NO MIRROR OFFSET X>/i)) {
    return false;
  }
  return VisuMZ.CoreEngine.Settings.QoL.AnimationMirrorOffset;
};
Sprite_Animation.prototype.setViewportCoreEngineFix = function (_0x115aff) {
  const _0x36fc6c = this._viewportSize;
  const _0x303776 = this._viewportSize;
  const _0x155353 = this._animation.offsetX * (this._mirror ? -0x1 : 0x1) - _0x36fc6c / 0x2;
  const _0xecc832 = this._animation.offsetY - _0x303776 / 0x2;
  const _0x3482b8 = this.targetPosition(_0x115aff);
  _0x115aff.gl.viewport(_0x155353 + _0x3482b8.x, _0xecc832 + _0x3482b8.y, _0x36fc6c, _0x303776);
};
Sprite_Animation.prototype.targetSpritePosition = function (_0x10c583) {
  if (_0x10c583._mainSprite) {}
  const _0x3d0e9a = this._animation.name;
  let _0x2c4bb6 = _0x10c583.height * _0x10c583.scale.y;
  let _0x4f14c0 = 0x0;
  let _0x40e4af = -_0x2c4bb6 / 0x2;
  if (_0x3d0e9a.match(/<(?:HEAD|HEADER|TOP)>/i)) {
    _0x40e4af = -_0x2c4bb6;
  }
  if (_0x3d0e9a.match(/<(?:FOOT|FOOTER|BOTTOM)>/i)) {
    _0x40e4af = 0x0;
  }
  if (this._animation.alignBottom) {
    _0x40e4af = 0x0;
  }
  if (_0x3d0e9a.match(/<(?:LEFT)>/i)) {
    _0x4f14c0 = -_0x10c583.width / 0x2;
  }
  if (_0x3d0e9a.match(/<(?:RIGHT)>/i)) {
    _0x4f14c0 = _0x10c583.width / 0x2;
  }
  if (_0x3d0e9a.match(/<ANCHOR X:[ ](\d+\.?\d*)>/i)) {
    _0x4f14c0 = Number(RegExp.$1) * _0x10c583.width;
  }
  if (_0x3d0e9a.match(/<ANCHOR Y:[ ](\d+\.?\d*)>/i)) {
    _0x40e4af = (0x1 - Number(RegExp.$1)) * -_0x2c4bb6;
  }
  if (_0x3d0e9a.match(/<ANCHOR:[ ](\d+\.?\d*),[ ](\d+\.?\d*)>/i)) {
    _0x4f14c0 = Number(RegExp.$1) * _0x10c583.width;
    _0x40e4af = (0x1 - Number(RegExp.$2)) * -_0x2c4bb6;
  }
  if (_0x3d0e9a.match(/<OFFSET X:[ ]([\+\-]\d+)>/i)) {
    _0x4f14c0 += Number(RegExp.$1);
  }
  if (_0x3d0e9a.match(/<OFFSET Y:[ ]([\+\-]\d+)>/i)) {
    _0x40e4af += Number(RegExp.$1);
  }
  if (_0x3d0e9a.match(/<OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)) {
    _0x4f14c0 += Number(RegExp.$1);
    _0x40e4af += Number(RegExp.$2);
  }
  const _0x417a93 = new Point(_0x4f14c0, _0x40e4af);
  _0x10c583.updateTransform();
  return _0x10c583.worldTransform.apply(_0x417a93);
};
Sprite_AnimationMV.prototype.setupRate = function () {
  this._rate = VisuMZ.CoreEngine.Settings.QoL.MvAnimationRate ?? 0x4;
  this.setupCustomRateCoreEngine();
  this._rate = this._rate.clamp(0x1, 0xa);
};
Sprite_AnimationMV.prototype.setupCustomRateCoreEngine = function () {
  if (!this._animation) {
    ;
  }
  const _0x16c0ef = this._animation.name || '';
  if (_0x16c0ef.match(/<RATE:[ ](\d+)>/i)) {
    this._rate = (Number(RegExp.$1) || 0x1).clamp(0x1, 0xa);
  }
};
Sprite_AnimationMV.prototype.setMute = function (_0xbc6cec) {
  this._muteSound = _0xbc6cec;
};
VisuMZ.CoreEngine.Sprite_AnimationMV_processTimingData = Sprite_AnimationMV.prototype.processTimingData;
Sprite_AnimationMV.prototype.processTimingData = function (_0x1a95ad) {
  if (this._muteSound) {
    _0x1a95ad = JsonEx.makeDeepCopy(_0x1a95ad);
    if (_0x1a95ad.se) {
      _0x1a95ad.se.volume = 0x0;
    }
  }
  VisuMZ.CoreEngine.Sprite_AnimationMV_processTimingData.call(this, _0x1a95ad);
};
VisuMZ.CoreEngine.Sprite_AnimationMV_updatePosition = Sprite_AnimationMV.prototype.updatePosition;
Sprite_AnimationMV.prototype.updatePosition = function () {
  VisuMZ.CoreEngine.Sprite_AnimationMV_updatePosition.call(this);
  if (this._animation.position === 0x3) {
    if (this.x === 0x0) {
      this.x = Math.round(Graphics.width / 0x2);
    }
    if (this.y === 0x0) {
      this.y = Math.round(Graphics.height / 0x2);
    }
  }
};
Sprite_Damage.prototype.createDigits = function (_0x595fe2) {
  let _0x22f15e = Math.abs(_0x595fe2).toString();
  if (this.useDigitGrouping()) {
    _0x22f15e = VisuMZ.GroupDigits(_0x22f15e);
  }
  const _0x20430b = this.fontSize();
  const _0x2ed9b1 = Math.floor(_0x20430b * 0.75);
  for (let _0x2dabff = 0x0; _0x2dabff < _0x22f15e.length; _0x2dabff++) {
    const _0x7873b6 = this.createChildSprite(_0x2ed9b1, _0x20430b);
    _0x7873b6.bitmap.drawText(_0x22f15e[_0x2dabff], 0x0, 0x0, _0x2ed9b1, _0x20430b, 'center');
    _0x7873b6.x = (_0x2dabff - (_0x22f15e.length - 0x1) / 0x2) * _0x2ed9b1;
    _0x7873b6.dy = -_0x2dabff;
  }
};
Sprite_Damage.prototype.useDigitGrouping = function () {
  return VisuMZ.CoreEngine.Settings.QoL.DigitGroupingDamageSprites;
};
Sprite_Damage.prototype.valueOutlineColor = function () {
  return ColorManager.outlineColorDmg();
};
VisuMZ.CoreEngine.Sprite_Gauge_gaugeRate = Sprite_Gauge.prototype.gaugeRate;
Sprite_Gauge.prototype.gaugeRate = function () {
  return VisuMZ.CoreEngine.Sprite_Gauge_gaugeRate.call(this).clamp(0x0, 0x1);
};
VisuMZ.CoreEngine.Sprite_Gauge_currentValue = Sprite_Gauge.prototype.currentValue;
Sprite_Gauge.prototype.currentValue = function () {
  let _0x4ca374 = VisuMZ.CoreEngine.Sprite_Gauge_currentValue.call(this);
  return _0x4ca374;
};
Sprite_Gauge.prototype.drawValue = function () {
  let _0x251585 = this.currentValue();
  if (this.useDigitGrouping()) {
    _0x251585 = VisuMZ.GroupDigits(_0x251585);
  }
  const _0x392702 = this.bitmapWidth() - 0x1;
  const _0x5cf17a = this.textHeight ? this.textHeight() : this.bitmapHeight();
  this.setupValueFont();
  this.bitmap.drawText(_0x251585, 0x0, 0x0, _0x392702, _0x5cf17a, "right");
};
Sprite_Gauge.prototype.valueOutlineWidth = function () {
  return 0x3;
};
Sprite_Gauge.prototype.useDigitGrouping = function () {
  return VisuMZ.CoreEngine.Settings.QoL.DigitGroupingGaugeSprites;
};
Sprite_Gauge.prototype.valueOutlineColor = function () {
  return ColorManager.outlineColorGauge();
};
Sprite_StateIcon.NON_FRAME = VisuMZ.CoreEngine.Settings.UI.StateIconsNonFrame ?? true;
VisuMZ.CoreEngine.Sprite_StateIcon_loadBitmap = Sprite_StateIcon.prototype.loadBitmap;
Sprite_StateIcon.prototype.loadBitmap = function () {
  if (Sprite_StateIcon.NON_FRAME) {
    this.loadBitmapCoreEngine();
  } else {
    VisuMZ.CoreEngine.Sprite_StateIcon_loadBitmap.call(this);
  }
};
Sprite_StateIcon.prototype.loadBitmapCoreEngine = function () {
  this.bitmap = new Bitmap(ImageManager.iconWidth, ImageManager.iconHeight);
  this._srcBitmap = ImageManager.loadSystem("IconSet");
};
VisuMZ.CoreEngine.Sprite_StateIcon_updateFrame = Sprite_StateIcon.prototype.updateFrame;
Sprite_StateIcon.prototype.updateFrame = function () {
  if (Sprite_StateIcon.NON_FRAME) {
    this.updateFrameCoreEngine();
  } else {
    VisuMZ.CoreEngine.Sprite_StateIcon_updateFrame.call(this);
  }
};
Sprite_StateIcon.prototype.updateFrameCoreEngine = function () {
  if (this._lastIconIndex === this._iconIndex) {
    return;
  }
  this._lastIconIndex = this._iconIndex;
  const _0x47f0ca = ImageManager.iconWidth;
  const _0x50c8e0 = ImageManager.iconHeight;
  const _0x2cde5f = this._iconIndex % 0x10 * _0x47f0ca;
  const _0x575381 = Math.floor(this._iconIndex / 0x10) * _0x50c8e0;
  const _0x28b0cf = this._srcBitmap;
  const _0x395ba2 = this.bitmap;
  _0x395ba2.clear();
  _0x395ba2.blt(_0x28b0cf, _0x2cde5f, _0x575381, _0x47f0ca, _0x50c8e0, 0x0, 0x0, _0x395ba2.width, _0x395ba2.height);
};
VisuMZ.CoreEngine.Sprite_Picture_loadBitmap = Sprite_Picture.prototype.loadBitmap;
Sprite_Picture.prototype.loadBitmap = function () {
  if (this._pictureName && this._pictureName.match(/VisuMZ CoreEngine PictureIcon (\d+)/i)) {
    this.loadIconBitmap(Number(RegExp.$1));
  } else {
    VisuMZ.CoreEngine.Sprite_Picture_loadBitmap.call(this);
  }
};
Sprite_Picture.prototype.loadIconBitmap = function (_0x2d1c8c) {
  const _0x3889e0 = ImageManager.iconWidth;
  const _0x881423 = ImageManager.iconHeight;
  const _0x47a80b = this._pictureName.match(/SMOOTH/i);
  this.bitmap = new Bitmap(_0x3889e0, _0x881423);
  const _0x7d2e7f = ImageManager.loadSystem("IconSet");
  const _0x2dd745 = _0x2d1c8c % 0x10 * _0x3889e0;
  const _0x25ba86 = Math.floor(_0x2d1c8c / 0x10) * _0x881423;
  this.bitmap.smooth = _0x47a80b;
  this.bitmap.blt(_0x7d2e7f, _0x2dd745, _0x25ba86, _0x3889e0, _0x881423, 0x0, 0x0, _0x3889e0, _0x881423);
};
function Sprite_TitlePictureButton() {
  this.initialize(...arguments);
}
Sprite_TitlePictureButton.prototype = Object.create(Sprite_Clickable.prototype);
Sprite_TitlePictureButton.prototype.constructor = Sprite_TitlePictureButton;
Sprite_TitlePictureButton.prototype.initialize = function (_0x232d91) {
  Sprite_Clickable.prototype.initialize.call(this);
  this._data = _0x232d91;
  this._clickHandler = null;
  this.setup();
};
Sprite_TitlePictureButton.prototype.setup = function () {
  this.x = Graphics.width;
  this.y = Graphics.height;
  this.visible = false;
  this.setupButtonImage();
};
Sprite_TitlePictureButton.prototype.setupButtonImage = function () {
  this.bitmap = ImageManager.loadPicture(this._data.PictureFilename);
  this.bitmap.addLoadListener(this.onButtonImageLoad.bind(this));
};
Sprite_TitlePictureButton.prototype.onButtonImageLoad = function () {
  this._data.OnLoadJS.call(this);
  this._data.PositionJS.call(this);
  this.setClickHandler(this._data.CallHandlerJS.bind(this));
};
Sprite_TitlePictureButton.prototype.update = function () {
  Sprite_Clickable.prototype.update.call(this);
  this.updateOpacity();
  this.processTouch();
};
Sprite_TitlePictureButton.prototype.fadeSpeed = function () {
  return VisuMZ.CoreEngine.Settings.MenuLayout.Title.ButtonFadeSpeed;
};
Sprite_TitlePictureButton.prototype.updateOpacity = function () {
  if (this._pressed || this._hovered) {
    this.opacity = 0xff;
  } else {
    this.opacity += this.visible ? this.fadeSpeed() : -0x1 * this.fadeSpeed();
    this.opacity = Math.min(0xc0, this.opacity);
  }
};
Sprite_TitlePictureButton.prototype.setClickHandler = function (_0x48fc74) {
  this._clickHandler = _0x48fc74;
};
Sprite_TitlePictureButton.prototype.onClick = function () {
  if (this._clickHandler) {
    this._clickHandler();
  }
};
function Sprite_ExtendedTile() {
  this.initialize(...arguments);
}
Sprite_ExtendedTile.prototype = Object.create(Sprite.prototype);
Sprite_ExtendedTile.prototype.constructor = Sprite_ExtendedTile;
Sprite_ExtendedTile.prototype.initialize = function (_0x22ec26, _0x37367b, _0x3d18cb, _0x114466) {
  this._shiftY = Game_CharacterBase.DEFAULT_SHIFT_Y || -0x6;
  this._mapX = _0x22ec26;
  this._mapY = _0x37367b;
  this._tile = _0x3d18cb;
  this._patternHeight = _0x114466;
  Sprite.prototype.initialize.call(this);
  this.createSubSprite();
  this.loadTileBitmap();
  this.setTileFrame();
  this.update();
};
Sprite_ExtendedTile.prototype.createSubSprite = function () {
  this._tileSprite = new Sprite();
  this._tileSprite.anchor.x = 0.5;
  this._tileSprite.anchor.y = 0x1;
  this._tileSprite.y = -this._shiftY + 0x1;
  this.addChild(this._tileSprite);
};
Sprite_ExtendedTile.prototype.loadTileBitmap = function () {
  const _0x3bd972 = $gameMap.tileset();
  const _0xb2696a = 0x5 + Math.floor(this._tile / 0x100);
  this._tileSprite.bitmap = ImageManager.loadTileset(_0x3bd972.tilesetNames[_0xb2696a]);
};
Sprite_ExtendedTile.prototype.setTileFrame = function () {
  const _0x28d6f1 = this._tile;
  const _0xc17a9c = $gameMap.tileWidth();
  const _0x315763 = $gameMap.tileHeight();
  const _0x52b913 = (Math.floor(_0x28d6f1 / 0x80) % 0x2 * 0x8 + _0x28d6f1 % 0x8) * _0xc17a9c;
  const _0x20b985 = Math.floor(_0x28d6f1 % 0x100 / 0x8) % 0x10 * _0x315763;
  const _0xe62e76 = this._patternHeight * _0x315763;
  this._tileSprite.setFrame(_0x52b913, _0x20b985 - _0xe62e76, _0xc17a9c, _0x315763 + _0xe62e76);
};
Sprite_ExtendedTile.prototype.update = function () {
  Sprite.prototype.update.call(this);
  this.updatePosition();
};
Sprite_ExtendedTile.prototype.updatePosition = function () {
  const _0x25f3f9 = $gameMap.tileWidth();
  const _0x35e351 = $gameMap.tileHeight();
  const _0x4fd0ec = this._mapX;
  const _0x5d2bae = this._mapY;
  this.x = Math.floor(($gameMap.adjustX(_0x4fd0ec) + 0.5) * _0x25f3f9);
  this.y = Math.floor(($gameMap.adjustY(_0x5d2bae) + 0x1) * _0x35e351) + this._shiftY - 0x1;
};
VisuMZ.CoreEngine.Spriteset_Base_initialize = Spriteset_Base.prototype.initialize;
Spriteset_Base.prototype.initialize = function () {
  VisuMZ.CoreEngine.Spriteset_Base_initialize.call(this);
  this.initMembersCoreEngine();
};
Spriteset_Base.prototype.initMembersCoreEngine = function () {
  this._fauxAnimationSprites = [];
  this._pointAnimationSprites = [];
  this._cacheScaleX = this.scale.x;
  this._cacheScaleY = this.scale.y;
};
VisuMZ.CoreEngine.Spriteset_Base_destroy = Spriteset_Base.prototype.destroy;
Spriteset_Base.prototype.destroy = function (_0x100657) {
  this.removeAllFauxAnimations();
  this.removeAllPointAnimations();
  VisuMZ.CoreEngine.Spriteset_Base_destroy.call(this, _0x100657);
};
VisuMZ.CoreEngine.Spriteset_Base_update = Spriteset_Base.prototype.update;
Spriteset_Base.prototype.update = function () {
  VisuMZ.CoreEngine.Spriteset_Base_update.call(this);
  this.updatePictureSettings();
  this.updatePictureAntiZoom();
  this.updateFauxAnimations();
  this.updatePointAnimations();
};
Spriteset_Base.prototype.updatePictureSettings = function () {};
Spriteset_Base.prototype.updatePictureAntiZoom = function () {
  if (!VisuMZ.CoreEngine.Settings.QoL.AntiZoomPictures) {
    return;
  }
  if (this._cacheScaleX === this.scale.x && this._cacheScaleY === this.scale.y) {
    return;
  }
  this.adjustPictureAntiZoom();
  this._cacheScaleX = this.scale.x;
  this._cacheScaleY = this.scale.y;
};
Spriteset_Base.prototype.adjustPictureAntiZoom = function () {
  if (SceneManager.isSceneMap() && Spriteset_Map.DETACH_PICTURE_CONTAINER) {
    return;
  } else {
    if (SceneManager.isSceneBattle() && Spriteset_Battle.DETACH_PICTURE_CONTAINER) {
      return;
    }
  }
  if (this.scale.x !== 0x0) {
    this._pictureContainer.scale.x = 0x1 / this.scale.x;
    this._pictureContainer.x = -(this.x / this.scale.x);
  }
  if (this.scale.y !== 0x0) {
    this._pictureContainer.scale.y = 0x1 / this.scale.y;
    this._pictureContainer.y = -(this.y / this.scale.y);
  }
};
VisuMZ.CoreEngine.Spriteset_Base_updatePosition = Spriteset_Base.prototype.updatePosition;
Spriteset_Base.prototype.updatePosition = function () {
  VisuMZ.CoreEngine.Spriteset_Base_updatePosition.call(this);
  this.updatePositionCoreEngine();
};
Spriteset_Base.prototype.updatePositionCoreEngine = function () {
  if (!$gameScreen) {
    return;
  }
  if ($gameScreen._shakeDuration <= 0x0) {
    return;
  }
  this.x -= Math.round($gameScreen.shake());
  switch ($gameScreen.getCoreEngineScreenShakeStyle()) {
    case 'original':
      this.updatePositionCoreEngineShakeOriginal();
      break;
    case "horizontal":
      this.updatePositionCoreEngineShakeHorz();
      break;
    case "vertical":
      this.updatePositionCoreEngineShakeVert();
      break;
    default:
      this.updatePositionCoreEngineShakeRand();
      break;
  }
};
Spriteset_Base.prototype.updatePositionCoreEngineShakeOriginal = function () {
  const _0x4a3364 = VisuMZ.CoreEngine.Settings.ScreenShake;
  if (_0x4a3364 && _0x4a3364.originalJS) {
    return _0x4a3364.originalJS.call(this);
  }
  this.x += Math.round($gameScreen.shake());
};
Spriteset_Base.prototype.updatePositionCoreEngineShakeRand = function () {
  const _0x130ee4 = VisuMZ.CoreEngine.Settings.ScreenShake;
  if (_0x130ee4 && _0x130ee4.randomJS) {
    return _0x130ee4.randomJS.call(this);
  }
  const _0x294738 = $gameScreen._shakePower * 0.75;
  const _0xe0d8a4 = $gameScreen._shakeSpeed * 0.6;
  const _0x1d63ba = $gameScreen._shakeDuration;
  this.x += Math.round(Math.randomInt(_0x294738) - Math.randomInt(_0xe0d8a4)) * (Math.min(_0x1d63ba, 0x1e) * 0.5);
  this.y += Math.round(Math.randomInt(_0x294738) - Math.randomInt(_0xe0d8a4)) * (Math.min(_0x1d63ba, 0x1e) * 0.5);
};
Spriteset_Base.prototype.updatePositionCoreEngineShakeHorz = function () {
  const _0x46641b = VisuMZ.CoreEngine.Settings.ScreenShake;
  if (_0x46641b && _0x46641b.horzJS) {
    return _0x46641b.horzJS.call(this);
  }
  const _0x3ac92a = $gameScreen._shakePower * 0.75;
  const _0x288414 = $gameScreen._shakeSpeed * 0.6;
  const _0x2cc0fb = $gameScreen._shakeDuration;
  this.x += Math.round(Math.randomInt(_0x3ac92a) - Math.randomInt(_0x288414)) * (Math.min(_0x2cc0fb, 0x1e) * 0.5);
};
Spriteset_Base.prototype.updatePositionCoreEngineShakeVert = function () {
  const _0x2c68e7 = VisuMZ.CoreEngine.Settings.ScreenShake;
  if (_0x2c68e7 && _0x2c68e7.vertJS) {
    return _0x2c68e7.vertJS.call(this);
  }
  const _0x25d480 = $gameScreen._shakePower * 0.75;
  const _0x28c683 = $gameScreen._shakeSpeed * 0.6;
  const _0x47fb96 = $gameScreen._shakeDuration;
  this.y += Math.round(Math.randomInt(_0x25d480) - Math.randomInt(_0x28c683)) * (Math.min(_0x47fb96, 0x1e) * 0.5);
};
Spriteset_Base.prototype.updateFauxAnimations = function () {
  for (const _0x53899b of this._fauxAnimationSprites) {
    if (!_0x53899b.isPlaying()) {
      this.removeFauxAnimation(_0x53899b);
    }
  }
  this.processFauxAnimationRequests();
};
Spriteset_Base.prototype.processFauxAnimationRequests = function () {
  for (;;) {
    const _0x53caf5 = $gameTemp.retrieveFauxAnimation();
    if (_0x53caf5) {
      this.createFauxAnimation(_0x53caf5);
    } else {
      break;
    }
  }
};
Spriteset_Base.prototype.createFauxAnimation = function (_0x17931a) {
  const _0x1a81fd = $dataAnimations[_0x17931a.animationId];
  const _0xc0ad3d = _0x17931a.targets;
  const _0x441b1c = _0x17931a.mirror;
  const _0x579c0a = _0x17931a.mute;
  let _0x4ecc1f = this.animationBaseDelay();
  const _0x3a6f17 = this.animationNextDelay();
  if (this.isAnimationForEach(_0x1a81fd)) {
    for (const _0x44ed05 of _0xc0ad3d) {
      this.createFauxAnimationSprite([_0x44ed05], _0x1a81fd, _0x441b1c, _0x4ecc1f, _0x579c0a);
      _0x4ecc1f += _0x3a6f17;
    }
  } else {
    this.createFauxAnimationSprite(_0xc0ad3d, _0x1a81fd, _0x441b1c, _0x4ecc1f, _0x579c0a);
  }
};
Spriteset_Base.prototype.createAnimationSprite = function (_0x53aed0, _0x506d0a, _0x34acce, _0x3aec4f) {
  const _0x25d237 = this.isMVAnimation(_0x506d0a);
  const _0x10b560 = new (_0x25d237 ? Sprite_AnimationMV : Sprite_Animation)();
  const _0x308e3e = this.makeTargetSprites(_0x53aed0);
  const _0x1406dc = this.animationBaseDelay();
  const _0x389fe9 = _0x3aec4f > _0x1406dc ? this.lastAnimationSprite() : null;
  if (this.animationShouldMirror(_0x53aed0[0x0])) {
    _0x34acce = !_0x34acce;
  }
  _0x10b560.targetObjects = _0x53aed0;
  _0x10b560.setup(_0x308e3e, _0x506d0a, _0x34acce, _0x3aec4f, _0x389fe9);
  this.addAnimationSpriteToContainer(_0x10b560);
  this._animationSprites.push(_0x10b560);
};
Spriteset_Base.prototype.createFauxAnimationSprite = function (_0x28e447, _0x1dd847, _0x5ecf49, _0x50eecb, _0xa26b5) {
  const _0x366756 = this.isMVAnimation(_0x1dd847);
  const _0x15964a = new (_0x366756 ? Sprite_AnimationMV : Sprite_Animation)();
  const _0x589e97 = this.makeTargetSprites(_0x28e447);
  if (this.animationShouldMirror(_0x28e447[0x0])) {
    _0x5ecf49 = !_0x5ecf49;
  }
  _0x15964a.targetObjects = _0x28e447;
  _0x15964a.setup(_0x589e97, _0x1dd847, _0x5ecf49, _0x50eecb);
  _0x15964a.setMute(_0xa26b5);
  this.addAnimationSpriteToContainer(_0x15964a);
  if (this._animationSprites) {
    this._animationSprites.remove(_0x15964a);
  }
  this._fauxAnimationSprites.push(_0x15964a);
};
Spriteset_Base.prototype.addAnimationSpriteToContainer = function (_0x3d08c2) {
  this._effectsContainer.addChild(_0x3d08c2);
};
Spriteset_Base.prototype.removeAnimation = function (_0x72a817) {
  this._animationSprites.remove(_0x72a817);
  this.removeAnimationFromContainer(_0x72a817);
  for (const _0x5318bb of _0x72a817.targetObjects) {
    if (_0x5318bb.endAnimation) {
      _0x5318bb.endAnimation();
    }
  }
  _0x72a817.destroy();
};
Spriteset_Base.prototype.removeFauxAnimation = function (_0x531fff) {
  this._fauxAnimationSprites.remove(_0x531fff);
  this.removeAnimationFromContainer(_0x531fff);
  for (const _0x1c4db2 of _0x531fff.targetObjects) {
    if (_0x1c4db2.endAnimation) {
      _0x1c4db2.endAnimation();
    }
  }
  _0x531fff.destroy();
};
Spriteset_Base.prototype.removeAnimationFromContainer = function (_0x20a999) {
  this._effectsContainer.removeChild(_0x20a999);
};
Spriteset_Base.prototype.removeAllFauxAnimations = function () {
  for (const _0x16fcf1 of this._fauxAnimationSprites) {
    this.removeFauxAnimation(_0x16fcf1);
  }
};
Spriteset_Base.prototype.isFauxAnimationPlaying = function () {
  return this._fauxAnimationSprites.length > 0x0;
};
Spriteset_Base.prototype.updatePointAnimations = function () {
  for (const _0x1f8e07 of this._pointAnimationSprites) {
    if (!_0x1f8e07.isPlaying()) {
      this.removePointAnimation(_0x1f8e07);
    }
  }
  this.processPointAnimationRequests();
};
Spriteset_Base.prototype.processPointAnimationRequests = function () {
  for (;;) {
    const _0x580431 = $gameTemp.retrievePointAnimation();
    if (_0x580431) {
      this.createPointAnimation(_0x580431);
    } else {
      break;
    }
  }
};
Spriteset_Base.prototype.createPointAnimation = function (_0x289801) {
  const _0x1bdd0c = $dataAnimations[_0x289801.animationId];
  const _0x228dc7 = this.createPointAnimationTargets(_0x289801);
  const _0x33a94e = _0x289801.mirror;
  const _0x4eef7b = _0x289801.mute;
  let _0x5703ff = this.animationBaseDelay();
  const _0x76d985 = this.animationNextDelay();
  if (this.isAnimationForEach(_0x1bdd0c)) {
    for (const _0x3f6174 of _0x228dc7) {
      this.createPointAnimationSprite([_0x3f6174], _0x1bdd0c, _0x33a94e, _0x5703ff, _0x4eef7b);
      _0x5703ff += _0x76d985;
    }
  } else {
    this.createPointAnimationSprite(_0x228dc7, _0x1bdd0c, _0x33a94e, _0x5703ff, _0x4eef7b);
  }
};
Spriteset_Base.prototype.createPointAnimationTargets = function (_0x484a3a) {
  const _0x11c173 = new Sprite_Clickable();
  const _0x48e916 = this.getPointAnimationLayer();
  _0x11c173.x = _0x484a3a.x - _0x48e916.x;
  _0x11c173.y = _0x484a3a.y - _0x48e916.y;
  _0x11c173.z = 0x64;
  const _0x1c89b7 = this.getPointAnimationLayer();
  _0x1c89b7.addChild(_0x11c173);
  return [_0x11c173];
};
Spriteset_Base.prototype.getPointAnimationLayer = function () {
  return this;
};
Spriteset_Map.prototype.getPointAnimationLayer = function () {
  return this._tilemap || this;
};
Spriteset_Battle.prototype.getPointAnimationLayer = function () {
  return this._battleField || this;
};
Spriteset_Base.prototype.createPointAnimationSprite = function (_0x114a05, _0x92d7be, _0xcdffeb, _0x585484, _0x33ca5d) {
  const _0x121ada = this.isMVAnimation(_0x92d7be);
  const _0x51b274 = new (_0x121ada ? Sprite_AnimationMV : Sprite_Animation)();
  _0x51b274.targetObjects = _0x114a05;
  _0x51b274.setup(_0x114a05, _0x92d7be, _0xcdffeb, _0x585484);
  _0x51b274.setMute(_0x33ca5d);
  this.addAnimationSpriteToContainer(_0x51b274);
  this._pointAnimationSprites.push(_0x51b274);
};
Spriteset_Base.prototype.removePointAnimation = function (_0x3d8d14) {
  this._pointAnimationSprites.remove(_0x3d8d14);
  this._effectsContainer.removeChild(_0x3d8d14);
  for (const _0x3bf2c0 of _0x3d8d14.targetObjects) {
    if (_0x3bf2c0.endAnimation) {
      _0x3bf2c0.endAnimation();
    }
    const _0x5ae7be = this.getPointAnimationLayer();
    if (_0x5ae7be) {
      _0x5ae7be.removeChild(_0x3bf2c0);
    }
  }
  _0x3d8d14.destroy();
};
Spriteset_Base.prototype.removeAllPointAnimations = function () {
  for (const _0x4f6532 of this._pointAnimationSprites) {
    this.removePointAnimation(_0x4f6532);
  }
};
Spriteset_Base.prototype.isPointAnimationPlaying = function () {
  return this._pointAnimationSprites.length > 0x0;
};
VisuMZ.CoreEngine.Spriteset_Base_isAnimationPlaying = Spriteset_Base.prototype.isAnimationPlaying;
Spriteset_Base.prototype.isAnimationPlaying = function () {
  return VisuMZ.CoreEngine.Spriteset_Base_isAnimationPlaying.call(this) || this.isPointAnimationPlaying();
};
Spriteset_Map.DETACH_PICTURE_CONTAINER = VisuMZ.CoreEngine.Settings.QoL.DetachMapPictureContainer || false;
VisuMZ.CoreEngine.Scene_Map_createSpriteset_detach = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function () {
  VisuMZ.CoreEngine.Scene_Map_createSpriteset_detach.call(this);
  if (!Spriteset_Map.DETACH_PICTURE_CONTAINER) {
    return;
  }
  const _0x2c8562 = this._spriteset;
  if (!_0x2c8562) {
    return;
  }
  this._pictureContainer = _0x2c8562._pictureContainer;
  if (!this._pictureContainer) {
    return;
  }
  this.addChild(this._pictureContainer);
};
VisuMZ.CoreEngine.Spriteset_Map_createTilemap = Spriteset_Map.prototype.createTilemap;
Spriteset_Map.prototype.createTilemap = function () {
  VisuMZ.CoreEngine.Spriteset_Map_createTilemap.call(this);
  this.createTileExtendSprites();
};
Spriteset_Map.prototype.createTileExtendSprites = function () {
  const _0x5ae31e = $gameMap.tileset();
  if (!_0x5ae31e) {
    return;
  }
  const _0x4cf238 = $gameMap.getTileExtendTerrainTags();
  if (Object.keys(_0x4cf238).length <= 0x0) {
    return;
  }
  const _0x56bc7 = $gameMap.tilesetFlags();
  this._tileExtendSprites = this._tileExtendSprites || [];
  for (let _0x54f29f = 0x0; _0x54f29f < $gameMap.height(); _0x54f29f++) {
    for (let _0x264732 = 0x0; _0x264732 < $gameMap.width(); _0x264732++) {
      for (const _0x10f2fd of $gameMap.layeredTiles(_0x264732, _0x54f29f)) {
        const _0xdfc9ae = _0x56bc7[_0x10f2fd] >> 0xc;
        const _0x2a8929 = _0x4cf238[_0xdfc9ae] || 0x0;
        if (_0x2a8929 <= 0x0) {
          continue;
        }
        this.createExtendedTileSprite(_0x264732, _0x54f29f, _0x10f2fd, _0x2a8929);
      }
    }
  }
};
Spriteset_Map.prototype.removeTileExtendSprites = function () {
  this._tileExtendSprites = this._tileExtendSprites || [];
  for (const _0x42d8b3 of this._tileExtendSprites) {
    this._tilemap.removeChild(_0x42d8b3);
  }
  this._tileExtendSprites = [];
};
Spriteset_Map.prototype.createExtendedTileSprite = function (_0x13e2c1, _0xcfccdb, _0x313644, _0x3e03e7) {
  const _0x588220 = new Sprite_ExtendedTile(_0x13e2c1, _0xcfccdb, _0x313644, _0x3e03e7);
  const _0x3d092b = $gameMap.tilesetFlags();
  if (_0x3d092b[_0x313644] & 0x10) {
    _0x588220.z = 0x4;
  } else {
    _0x588220.z = 0x3;
  }
  this._tilemap.addChild(_0x588220);
  this._tileExtendSprites.push(_0x588220);
};
VisuMZ.CoreEngine.Tilemap_addSpotTile = Tilemap.prototype._addSpotTile;
Tilemap.prototype._addSpotTile = function (_0xe51dfb, _0x54466e, _0x271bd1) {
  if ($gameMap.isTileExtended(_0xe51dfb)) {
    return;
  }
  VisuMZ.CoreEngine.Tilemap_addSpotTile.call(this, _0xe51dfb, _0x54466e, _0x271bd1);
};
Spriteset_Battle.DETACH_PICTURE_CONTAINER = VisuMZ.CoreEngine.Settings.QoL.DetachBattlePictureContainer || false;
VisuMZ.CoreEngine.Scene_Battle_createSpriteset_detach = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function () {
  VisuMZ.CoreEngine.Scene_Battle_createSpriteset_detach.call(this);
  if (!Spriteset_Battle.DETACH_PICTURE_CONTAINER) {
    return;
  }
  const _0x20588f = this._spriteset;
  if (!_0x20588f) {
    return;
  }
  this._pictureContainer = _0x20588f._pictureContainer;
  if (!this._pictureContainer) {
    return;
  }
  this.addChild(this._pictureContainer);
};
Spriteset_Battle.prototype.createBackground = function () {
  this._backgroundFilter = new PIXI.filters.BlurFilter(clamp = true);
  this._backgroundSprite = new Sprite();
  this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
  this._backgroundSprite.filters = [this._backgroundFilter];
  this._baseSprite.addChild(this._backgroundSprite);
};
VisuMZ.CoreEngine.Spriteset_Battle_createEnemies = Spriteset_Battle.prototype.createEnemies;
Spriteset_Battle.prototype.createEnemies = function () {
  if (this.coreEngineRepositionEnemies()) {
    this.repositionEnemiesByResolution();
  }
  VisuMZ.CoreEngine.Spriteset_Battle_createEnemies.call(this);
};
Spriteset_Battle.prototype.coreEngineRepositionEnemies = function () {
  const _0x4713cd = VisuMZ.CoreEngine.Settings.ScreenResolution;
  if (!_0x4713cd) {
    return false;
  }
  if (Utils.RPGMAKER_VERSION >= "1.3.0" && !_0x4713cd.RepositionEnemies130) {
    return false;
  }
  return _0x4713cd.RepositionEnemies;
};
Spriteset_Battle.prototype.repositionEnemiesByResolution = function () {
  for (member of $gameTroop.members()) {
    member.moveRelativeToResolutionChange();
  }
};
VisuMZ.CoreEngine.Window_Base_initialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function (_0x2682d6) {
  _0x2682d6.x = Math.round(_0x2682d6.x);
  _0x2682d6.y = Math.round(_0x2682d6.y);
  _0x2682d6.width = Math.round(_0x2682d6.width);
  _0x2682d6.height = Math.round(_0x2682d6.height);
  this.initDigitGrouping();
  VisuMZ.CoreEngine.Window_Base_initialize.call(this, _0x2682d6);
  this.initCoreEasing();
};
Window_Base.prototype.initDigitGrouping = function () {
  this._digitGrouping = VisuMZ.CoreEngine.Settings.QoL.DigitGroupingStandardText;
  this._digitGroupingEx = VisuMZ.CoreEngine.Settings.QoL.DigitGroupingExText;
};
Window_Base.prototype.lineHeight = function () {
  return VisuMZ.CoreEngine.Settings.Window.LineHeight;
};
Window_Base.prototype.itemPadding = function () {
  return VisuMZ.CoreEngine.Settings.Window.ItemPadding;
};
Window_Base.prototype.updateBackOpacity = function () {
  if ($gameSystem.windowOpacity) {
    this.backOpacity = $gameSystem.windowOpacity();
  } else {
    this.backOpacity = VisuMZ.CoreEngine.Settings.Window.BackOpacity;
  }
};
Window_Base.prototype.translucentOpacity = function () {
  return VisuMZ.CoreEngine.Settings.Window.TranslucentOpacity;
};
Window_Base.prototype.openingSpeed = function () {
  return VisuMZ.CoreEngine.Settings.Window.OpenSpeed;
};
VisuMZ.CoreEngine.Window_Base_update = Window_Base.prototype.update;
Window_Base.prototype.update = function () {
  VisuMZ.CoreEngine.Window_Base_update.call(this);
  this.updateCoreEasing();
};
Window_Base.prototype.updateOpen = function () {
  if (this._opening) {
    this.openness += this.openingSpeed();
    if (this.isOpen()) {
      this._opening = false;
    }
  }
};
Window_Base.prototype.updateClose = function () {
  if (this._closing) {
    this.openness -= this.openingSpeed();
    if (this.isClosed()) {
      this._closing = false;
    }
  }
};
VisuMZ.CoreEngine.Window_Base_drawText = Window_Base.prototype.drawText;
Window_Base.prototype.drawText = function (_0x21fe09, _0x3e02d6, _0x34e485, _0x918809, _0x454437) {
  if (this.useDigitGrouping()) {
    _0x21fe09 = VisuMZ.GroupDigits(_0x21fe09);
  }
  VisuMZ.CoreEngine.Window_Base_drawText.call(this, _0x21fe09, _0x3e02d6, _0x34e485, _0x918809, _0x454437);
};
Window_Base.prototype.useDigitGrouping = function () {
  return this._digitGrouping;
};
VisuMZ.CoreEngine.Window_Base_createTextState = Window_Base.prototype.createTextState;
Window_Base.prototype.createTextState = function (_0x3b7db1, _0x177335, _0x20f452, _0xb6690a) {
  var _0xe04589 = VisuMZ.CoreEngine.Window_Base_createTextState.call(this, _0x3b7db1, _0x177335, _0x20f452, _0xb6690a);
  if (this.useDigitGroupingEx()) {
    _0xe04589.text = String(VisuMZ.GroupDigits(_0xe04589.text)) || '';
  }
  return _0xe04589;
};
Window_Base.prototype.useDigitGroupingEx = function () {
  return this._digitGroupingEx;
};
Window_Base.prototype.enableDigitGrouping = function (_0xc96d45) {
  this._digitGrouping = _0xc96d45;
};
Window_Base.prototype.enableDigitGroupingEx = function (_0x3a4476) {
  this._digitGroupingEx = _0x3a4476;
};
VisuMZ.CoreEngine.Window_Base_drawIcon = Window_Base.prototype.drawIcon;
Window_Base.prototype.drawIcon = function (_0x28d9ae, _0x396e2e, _0x5f4ca7) {
  _0x396e2e = Math.round(_0x396e2e);
  _0x5f4ca7 = Math.round(_0x5f4ca7);
  VisuMZ.CoreEngine.Window_Base_drawIcon.call(this, _0x28d9ae, _0x396e2e, _0x5f4ca7);
};
VisuMZ.CoreEngine.Window_Base_drawFace = Window_Base.prototype.drawFace;
Window_Base.prototype.drawFace = function (_0x16ecf0, _0xb2cf5, _0x611477, _0xa0a519, _0x117cac, _0x32e734) {
  _0x117cac = _0x117cac || ImageManager.faceWidth;
  _0x32e734 = _0x32e734 || ImageManager.faceHeight;
  _0x611477 = Math.round(_0x611477);
  _0xa0a519 = Math.round(_0xa0a519);
  _0x117cac = Math.round(_0x117cac);
  _0x32e734 = Math.round(_0x32e734);
  VisuMZ.CoreEngine.Window_Base_drawFace.call(this, _0x16ecf0, _0xb2cf5, _0x611477, _0xa0a519, _0x117cac, _0x32e734);
};
VisuMZ.CoreEngine.Window_Base_drawCharacter = Window_Base.prototype.drawCharacter;
Window_Base.prototype.drawCharacter = function (_0x312fdb, _0x1c6d0c, _0x442cb7, _0xc2c6e0) {
  _0x442cb7 = Math.round(_0x442cb7);
  _0xc2c6e0 = Math.round(_0xc2c6e0);
  VisuMZ.CoreEngine.Window_Base_drawCharacter.call(this, _0x312fdb, _0x1c6d0c, _0x442cb7, _0xc2c6e0);
};
VisuMZ.CoreEngine.Window_Selectable_itemRect = Window_Selectable.prototype.itemRect;
Window_Selectable.prototype.itemRect = function (_0x4f83c9) {
  let _0x1e34f3 = VisuMZ.CoreEngine.Window_Selectable_itemRect.call(this, _0x4f83c9);
  _0x1e34f3.x = Math.round(_0x1e34f3.x);
  _0x1e34f3.y = Math.round(_0x1e34f3.y);
  _0x1e34f3.width = Math.round(_0x1e34f3.width);
  _0x1e34f3.height = Math.round(_0x1e34f3.height);
  return _0x1e34f3;
};
VisuMZ.CoreEngine.Window_StatusBase_drawActorSimpleStatus = Window_StatusBase.prototype.drawActorSimpleStatus;
Window_StatusBase.prototype.drawActorSimpleStatus = function (_0x3e7672, _0x4f715c, _0x3e51cc) {
  _0x4f715c = Math.round(_0x4f715c);
  _0x3e51cc = Math.round(_0x3e51cc);
  VisuMZ.CoreEngine.Window_StatusBase_drawActorSimpleStatus.call(this, _0x3e7672, _0x4f715c, _0x3e51cc);
};
Window_Base.prototype.initCoreEasing = function () {
  this._coreEasing = {
    'duration': 0x0,
    'wholeDuration': 0x0,
    'type': "LINEAR",
    'targetX': this.x,
    'targetY': this.y,
    'targetScaleX': this.scale.x,
    'targetScaleY': this.scale.y,
    'targetOpacity': this.opacity,
    'targetBackOpacity': this.backOpacity,
    'targetContentsOpacity': this.contentsOpacity
  };
};
Window_Base.prototype.updateCoreEasing = function () {
  if (!this._coreEasing) {
    return;
  }
  if (this._coreEasing.duration <= 0x0) {
    return;
  }
  this.x = this.applyCoreEasing(this.x, this._coreEasing.targetX);
  this.y = this.applyCoreEasing(this.y, this._coreEasing.targetY);
  this.scale.x = this.applyCoreEasing(this.scale.x, this._coreEasing.targetScaleX);
  this.scale.y = this.applyCoreEasing(this.scale.y, this._coreEasing.targetScaleY);
  this.opacity = this.applyCoreEasing(this.opacity, this._coreEasing.targetOpacity);
  this.backOpacity = this.applyCoreEasing(this.backOpacity, this._coreEasing.targetBackOpacity);
  this.contentsOpacity = this.applyCoreEasing(this.contentsOpacity, this._coreEasing.targetContentsOpacity);
  this._coreEasing.duration--;
};
Window_Base.prototype.applyCoreEasing = function (_0x5c18dd, _0x177e1b) {
  if (!this._coreEasing) {
    return _0x177e1b;
  }
  const _0x4f4baf = this._coreEasing.duration;
  const _0x1d7cb2 = this._coreEasing.wholeDuration;
  const _0x3141a0 = this.calcCoreEasing((_0x1d7cb2 - _0x4f4baf) / _0x1d7cb2);
  const _0x17c031 = this.calcCoreEasing((_0x1d7cb2 - _0x4f4baf + 0x1) / _0x1d7cb2);
  const _0x3869ee = (_0x5c18dd - _0x177e1b * _0x3141a0) / (0x1 - _0x3141a0);
  return _0x3869ee + (_0x177e1b - _0x3869ee) * _0x17c031;
};
Window_Base.prototype.calcCoreEasing = function (_0x1855fe) {
  if (!this._coreEasing) {
    return _0x1855fe;
  }
  return VisuMZ.ApplyEasing(_0x1855fe, this._coreEasing.type || "LINEAR");
};
Window_Base.prototype.anchorCoreEasing = function (_0x4a9194, _0x4ff2a7) {
  if (!this._coreEasing) {
    return;
  }
  this.x = this._coreEasing.targetX;
  this.y = this._coreEasing.targetY;
  this.scale.x = this._coreEasing.targetScaleX;
  this.scale.y = this._coreEasing.targetScaleY;
  this.opacity = this._coreEasing.targetOpacity;
  this.backOpacity = this._coreEasing.targetBackOpacity;
  this.contentsOpacity = this._coreEasing.targetContentsOpacity;
  this.setupCoreEasing(_0x4a9194, _0x4ff2a7, this.x, this.y, this.scale.x, this.scale.y, this.opacity, this.backOpacity, this.contentsOpacity);
};
Window_Base.prototype.setupCoreEasing = function (_0x39ca0a, _0x21e10d, _0x36dcd2, _0x598860, _0x133da0, _0x4a4a80, _0x7410bc, _0xa86e38, _0x25d0ae) {
  this._coreEasing = {
    'duration': _0x39ca0a,
    'wholeDuration': _0x39ca0a,
    'type': _0x21e10d,
    'targetX': _0x36dcd2,
    'targetY': _0x598860,
    'targetScaleX': _0x133da0,
    'targetScaleY': _0x4a4a80,
    'targetOpacity': _0x7410bc,
    'targetBackOpacity': _0xa86e38,
    'targetContentsOpacity': _0x25d0ae
  };
};
Window_Base.prototype.drawCurrencyValue = function (_0xfa885f, _0x14fef3, _0x4d09a3, _0x4eee6a, _0x44143d) {
  this.resetFontSettings();
  this.contents.fontSize = VisuMZ.CoreEngine.Settings.Gold.GoldFontSize;
  const _0x1f8f38 = VisuMZ.CoreEngine.Settings.Gold.GoldIcon;
  if (_0x1f8f38 > 0x0 && _0x14fef3 === TextManager.currencyUnit) {
    const _0x13762f = _0x4eee6a + (this.lineHeight() - ImageManager.iconHeight) / 0x2;
    this.drawIcon(_0x1f8f38, _0x4d09a3 + (_0x44143d - ImageManager.iconWidth), _0x13762f);
    _0x44143d -= ImageManager.iconWidth + 0x4;
  } else {
    this.changeTextColor(ColorManager.systemColor());
    this.drawText(_0x14fef3, _0x4d09a3, _0x4eee6a, _0x44143d, "right");
    _0x44143d -= this.textWidth(_0x14fef3) + 0x6;
  }
  this.resetTextColor();
  const _0x493191 = this.textWidth(this._digitGrouping ? VisuMZ.GroupDigits(_0xfa885f) : _0xfa885f);
  if (_0x493191 > _0x44143d) {
    this.drawText(VisuMZ.CoreEngine.Settings.Gold.GoldOverlap, _0x4d09a3, _0x4eee6a, _0x44143d, "right");
  } else {
    this.drawText(_0xfa885f, _0x4d09a3, _0x4eee6a, _0x44143d, "right");
  }
  this.resetFontSettings();
};
Window_Base.prototype.drawIconBySize = function (_0x26fa94, _0x48a141, _0x811828, _0x12db28, _0x2064e4) {
  const _0x55502f = ImageManager.loadSystem("IconSet");
  const _0x5e9ace = ImageManager.iconWidth;
  const _0x4c6052 = ImageManager.iconHeight;
  const _0x1d0e9e = _0x26fa94 % 0x10 * _0x5e9ace;
  const _0x1260d4 = Math.floor(_0x26fa94 / 0x10) * _0x4c6052;
  this.contents._context.imageSmoothingEnabled = _0x2064e4;
  this.contents.blt(_0x55502f, _0x1d0e9e, _0x1260d4, _0x5e9ace, _0x4c6052, _0x48a141, _0x811828, _0x12db28, _0x12db28);
  this.contents._context.imageSmoothingEnabled = true;
};
Window_Base.prototype.drawGauge = function (_0x419df4, _0x3e3fc2, _0x379a66, _0x3a7ad4, _0x2bb9da, _0x5405b2) {
  const _0x68da36 = Math.floor((_0x379a66 - 0x2) * _0x3a7ad4);
  const _0x111c11 = Sprite_Gauge.prototype.gaugeHeight.call(this);
  const _0x161198 = _0x3e3fc2 + this.lineHeight() - _0x111c11 - 0x2;
  this.contents.fillRect(_0x419df4, _0x161198, _0x379a66, _0x111c11, ColorManager.gaugeBackColor());
  this.contents.gradientFillRect(_0x419df4 + 0x1, _0x161198 + 0x1, _0x68da36, _0x111c11 - 0x2, _0x2bb9da, _0x5405b2);
};
Window_Scrollable.SCROLLBAR = {
  'enabled': VisuMZ.CoreEngine.Settings.Window.ShowScrollBar ?? true,
  'thickness': VisuMZ.CoreEngine.Settings.Window.BarThickness ?? 0x2,
  'offset': VisuMZ.CoreEngine.Settings.Window.BarOffset ?? 0x2,
  'bodyColor': VisuMZ.CoreEngine.Settings.Window.BarBodyColor ?? 0x0,
  'offColor': VisuMZ.CoreEngine.Settings.Window.OffBarColor ?? 0x7,
  'offOpacity': VisuMZ.CoreEngine.Settings.Window.OffBarOpacity ?? 0x80
};
Window_Base.prototype.isScrollBarVisible = function () {
  return Window_Scrollable.SCROLLBAR.enabled && Window_Scrollable.SCROLLBAR.thickness > 0x0;
};
VisuMZ.CoreEngine.Window_Base_createContents = Window_Base.prototype.createContents;
Window_Base.prototype.createContents = function () {
  VisuMZ.CoreEngine.Window_Base_createContents.call(this);
  this.createScrollBarSprites();
  this.setupScrollBarBitmap(true);
  this.setupScrollBarBitmap(false);
};
Window_Base.prototype.createScrollBarSprites = function () {
  if (!this.isScrollBarVisible()) {
    return;
  }
  if (this._scrollBarHorz || this._scrollBarVert) {
    return;
  }
  this._lastScrollBarValues = {
    'horz': null,
    'vert': null,
    'maxHorz': null,
    'maxVert': null
  };
  this._scrollBarHorz = new Sprite();
  this._scrollBarVert = new Sprite();
  this.addChild(this._scrollBarHorz);
  this.addChild(this._scrollBarVert);
};
Window_Base.prototype.setupScrollBarBitmap = function (_0x4457e5) {
  const _0x307b3f = _0x4457e5 ? this._scrollBarHorz : this._scrollBarVert;
  if (!_0x307b3f) {
    return;
  }
  const _0xbb01bc = Window_Scrollable.SCROLLBAR;
  const _0x3af199 = _0xbb01bc.thickness;
  const _0x5f0c7e = _0x4457e5 ? this.innerWidth - _0x3af199 * 0x2 : _0x3af199;
  const _0x3d7e54 = _0x4457e5 ? _0x3af199 : this.innerHeight - _0x3af199 * 0x2;
  _0x307b3f.bitmap = new Bitmap(_0x5f0c7e, _0x3d7e54);
  _0x307b3f.setFrame(0x0, 0x0, _0x5f0c7e, _0x3d7e54);
  this.updateScrollBarPosition(_0x4457e5);
};
VisuMZ.CoreEngine.Window_Base_destroyContents = Window_Base.prototype.destroyContents;
Window_Base.prototype.destroyContents = function () {
  VisuMZ.CoreEngine.Window_Base_destroyContents.call(this);
  this.destroyScrollBarBitmaps();
};
Window_Base.prototype.destroyScrollBarBitmaps = function () {
  const _0xb21c48 = [this._scrollBarHorz, this._scrollBarVert];
  for (const _0xd919f of _0xb21c48) {
    if (_0xd919f && _0xd919f.bitmap) {
      _0xd919f.bitmap.destroy();
    }
  }
};
VisuMZ.CoreEngine.Window_Scrollable_update = Window_Scrollable.prototype.update;
Window_Scrollable.prototype.update = function () {
  VisuMZ.CoreEngine.Window_Scrollable_update.call(this);
  this.updateScrollBars();
};
Window_Scrollable.prototype.updateScrollBars = function () {
  this.updateScrollBarVisibility();
  this.checkScrollBarBitmap(true);
  this.checkScrollBarBitmap(false);
  this.updateScrollBarPosition(true);
  this.updateScrollBarPosition(false);
};
Window_Scrollable.prototype.updateScrollBarVisibility = function () {
  const _0x1e10eb = [this._scrollBarHorz, this._scrollBarVert];
  for (const _0x240581 of _0x1e10eb) {
    if (_0x240581) {
      _0x240581.visible = this.isScrollBarVisible() && this.isOpen();
    }
  }
};
Window_Scrollable.prototype.checkScrollBarBitmap = function (_0x1c189c) {
  if (!this._lastScrollBarValues) {
    return;
  }
  const _0x367058 = this.scrollbar(_0x1c189c);
  const _0x1db38d = this.maxScrollbar(_0x1c189c);
  const _0x69683a = _0x1c189c ? 'horz' : "vert";
  const _0x37fa6c = _0x1c189c ? "maxHorz" : "maxVert";
  if (this._lastScrollBarValues[_0x69683a] !== _0x367058 || this._lastScrollBarValues[_0x37fa6c] !== _0x1db38d) {
    this._lastScrollBarValues[_0x69683a] = _0x367058;
    this._lastScrollBarValues[_0x37fa6c] = _0x1db38d;
    this.refreshScrollBarBitmap(_0x1c189c, _0x367058, _0x1db38d);
  }
};
Window_Scrollable.prototype.scrollbar = function (_0x5348e5) {
  if (this._allTextHeight !== undefined) {
    return _0x5348e5 ? this.scrollX() : this.origin.y;
  }
  return _0x5348e5 ? this.scrollX() : this.scrollY();
};
Window_Scrollable.prototype.maxScrollbar = function (_0x526ba9) {
  if (this._allTextHeight !== undefined) {
    return _0x526ba9 ? this.maxScrollX() : Math.max(0x0, this._allTextHeight - this.innerHeight);
  }
  return _0x526ba9 ? this.maxScrollX() : this.maxScrollY();
};
Window_Scrollable.prototype.scrollbarHeight = function () {
  if (this._allTextHeight !== undefined) {
    return Math.max(0x0, this._allTextHeight);
  }
  return this.overallHeight();
};
Window_Scrollable.prototype.refreshScrollBarBitmap = function (_0xa036b4, _0x51c021, _0x68a24d) {
  const _0x105c5b = _0xa036b4 ? this._scrollBarHorz : this._scrollBarVert;
  if (!_0x105c5b) {
    return;
  }
  if (!_0x105c5b.bitmap) {
    return;
  }
  const _0x25bbc3 = _0x105c5b.bitmap;
  _0x25bbc3.clear();
  if (_0x68a24d <= 0x0) {
    return;
  }
  const _0x43e43a = _0xa036b4 ? this.innerWidth / this.overallWidth() : this.innerHeight / this.scrollbarHeight();
  const _0xe3d7d = _0xa036b4 ? Math.round(_0x51c021 * _0x43e43a) : 0x0;
  const _0x4ed07d = _0xa036b4 ? 0x0 : Math.round(_0x51c021 * _0x43e43a);
  const _0x574d4c = _0xa036b4 ? Math.round(_0x25bbc3.width * _0x43e43a) : _0x25bbc3.width;
  const _0x1d8fdc = _0xa036b4 ? _0x25bbc3.height : Math.round(_0x25bbc3.height * _0x43e43a);
  const _0x2d6f8c = Window_Scrollable.SCROLLBAR;
  const _0x1de55e = ColorManager.getColor(_0x2d6f8c.offColor);
  const _0x21d0df = ColorManager.getColor(_0x2d6f8c.bodyColor);
  const _0x1a2755 = _0x2d6f8c.offOpacity;
  _0x25bbc3.paintOpacity = _0x1a2755;
  _0x25bbc3.fillAll(_0x1de55e);
  _0x25bbc3.paintOpacity = 0xff;
  _0x25bbc3.fillRect(_0xe3d7d, _0x4ed07d, _0x574d4c, _0x1d8fdc, _0x21d0df);
};
Window_Base.prototype.updateScrollBarPosition = function (_0x273b2e) {
  const _0x3addf8 = _0x273b2e ? this._scrollBarHorz : this._scrollBarVert;
  if (!_0x3addf8) {
    return;
  }
  const _0x396093 = Window_Scrollable.SCROLLBAR;
  const _0x503600 = _0x396093.thickness;
  const _0x3ca077 = _0x396093.offset;
  if (!_0x3addf8.transform) {
    return;
  }
  _0x3addf8.x = this.padding + (_0x273b2e ? _0x503600 : this.innerWidth + _0x3ca077);
  _0x3addf8.y = this.padding + (_0x273b2e ? this.innerHeight + _0x3ca077 : _0x503600);
};
Window_Selectable.prototype.cursorDown = function (_0x1e7841) {
  let _0x14522c = this.index();
  const _0xc5f01e = this.maxItems();
  const _0x46510e = this.maxCols();
  if (this.isUseModernControls() && (_0x14522c < _0xc5f01e || _0x1e7841 && _0x46510e === 0x1)) {
    _0x14522c += _0x46510e;
    if (_0x14522c >= _0xc5f01e) {
      _0x14522c = _0xc5f01e - 0x1;
    }
    this.smoothSelect(_0x14522c);
  } else if (!this.isUseModernControls()) {
    if (_0x14522c < _0xc5f01e - _0x46510e || _0x1e7841 && _0x46510e === 0x1) {
      this.smoothSelect((_0x14522c + _0x46510e) % _0xc5f01e);
    }
  }
};
VisuMZ.CoreEngine.Window_Selectable_cursorDown = Window_Selectable.prototype.cursorDown;
Window_Selectable.prototype.cursorDown = function (_0x3ad8f2) {
  if (this.isUseModernControls() && _0x3ad8f2 && this.maxCols() === 0x1 && this.index() === this.maxItems() - 0x1) {
    this.smoothSelect(0x0);
  } else {
    VisuMZ.CoreEngine.Window_Selectable_cursorDown.call(this, _0x3ad8f2);
  }
};
Window_Selectable.prototype.cursorUp = function (_0x4a3670) {
  let _0x141f7b = Math.max(0x0, this.index());
  const _0x2f4d69 = this.maxItems();
  const _0x3d4c05 = this.maxCols();
  if (this.isUseModernControls() && _0x141f7b > 0x0 || _0x4a3670 && _0x3d4c05 === 0x1) {
    _0x141f7b -= _0x3d4c05;
    if (_0x141f7b <= 0x0) {
      _0x141f7b = 0x0;
    }
    this.smoothSelect(_0x141f7b);
  } else if (!this.isUseModernControls()) {
    if (_0x141f7b >= _0x3d4c05 || _0x4a3670 && _0x3d4c05 === 0x1) {
      this.smoothSelect((_0x141f7b - _0x3d4c05 + _0x2f4d69) % _0x2f4d69);
    }
  }
};
VisuMZ.CoreEngine.Window_Selectable_cursorUp = Window_Selectable.prototype.cursorUp;
Window_Selectable.prototype.cursorUp = function (_0x5bdf45) {
  if (this.isUseModernControls() && _0x5bdf45 && this.maxCols() === 0x1 && this.index() === 0x0) {
    this.smoothSelect(this.maxItems() - 0x1);
  } else {
    VisuMZ.CoreEngine.Window_Selectable_cursorUp.call(this, _0x5bdf45);
  }
};
Window_Selectable.prototype.isUseModernControls = function () {
  return VisuMZ.CoreEngine.Settings.QoL.ModernControls;
};
VisuMZ.CoreEngine.Window_Selectable_processCursorMove = Window_Selectable.prototype.processCursorMove;
Window_Selectable.prototype.processCursorMove = function () {
  if (this.isUseModernControls()) {
    this.processCursorMoveModernControls();
    this.processCursorHomeEndTrigger();
  } else {
    VisuMZ.CoreEngine.Window_Selectable_processCursorMove.call(this);
  }
};
Window_Selectable.prototype.allowShiftScrolling = function () {
  return true;
};
Window_Selectable.prototype.processCursorMoveModernControls = function () {
  if (this.isCursorMovable()) {
    const _0x2517bf = this.index();
    if (Input.isRepeated('down')) {
      if (Input.isPressed('shift') && this.allowShiftScrolling()) {
        this.cursorPagedown();
      } else {
        this.cursorDown(Input.isTriggered("down"));
      }
    }
    if (Input.isRepeated('up')) {
      if (Input.isPressed("shift") && this.allowShiftScrolling()) {
        this.cursorPageup();
      } else {
        this.cursorUp(Input.isTriggered('up'));
      }
    }
    if (Input.isRepeated("right")) {
      this.cursorRight(Input.isTriggered("right"));
    }
    if (Input.isRepeated("left")) {
      this.cursorLeft(Input.isTriggered('left'));
    }
    if (!this.isHandled("pagedown") && Input.isRepeated("pagedown")) {
      this.cursorPagedown();
    }
    if (!this.isHandled("pageup") && Input.isRepeated("pageup")) {
      this.cursorPageup();
    }
    if (this.index() !== _0x2517bf) {
      this.playCursorSound();
    }
  }
};
Window_Selectable.prototype.processCursorHomeEndTrigger = function () {
  if (this.isCursorMovable()) {
    const _0x603b02 = this.index();
    if (Input.isTriggered("home")) {
      this.smoothSelect(Math.min(this.index(), 0x0));
    }
    if (Input.isTriggered('end')) {
      this.smoothSelect(Math.max(this.index(), this.maxItems() - 0x1));
    }
    if (this.index() !== _0x603b02) {
      this.playCursorSound();
    }
  }
};
VisuMZ.CoreEngine.Window_Selectable_processTouch = Window_Selectable.prototype.processTouch;
Window_Selectable.prototype.processTouch = function () {
  if (this.isUseModernControls()) {
    this.processTouchModernControls();
  } else {
    VisuMZ.CoreEngine.Window_Selectable_processTouch.call(this);
  }
};
Window_Selectable.prototype.processTouchModernControls = function () {
  VisuMZ.CoreEngine.Window_Selectable_processTouch.call(this);
};
Window_Selectable.prototype.colSpacing = function () {
  return VisuMZ.CoreEngine.Settings.Window.ColSpacing;
};
Window_Selectable.prototype.rowSpacing = function () {
  return VisuMZ.CoreEngine.Settings.Window.RowSpacing;
};
Window_Selectable.prototype.itemHeight = function () {
  return Window_Scrollable.prototype.itemHeight.call(this) + VisuMZ.CoreEngine.Settings.Window.ItemHeight;
  ;
};
VisuMZ.CoreEngine.Window_Selectable_drawBackgroundRect = Window_Selectable.prototype.drawBackgroundRect;
Window_Selectable.prototype.drawBackgroundRect = function (_0x296620) {
  const _0x2913e6 = VisuMZ.CoreEngine.Settings.Window;
  if (_0x2913e6.ShowItemBackground === false) {
    return;
  }
  if (_0x2913e6.DrawItemBackgroundJS) {
    _0x2913e6.DrawItemBackgroundJS.call(this, _0x296620);
  } else {
    VisuMZ.CoreEngine.Window_Selectable_drawBackgroundRect.call(this, _0x296620);
  }
};
VisuMZ.CoreEngine.Window_Gold_refresh = Window_Gold.prototype.refresh;
Window_Gold.prototype.refresh = function () {
  if (this.isItemStyle()) {
    this.drawGoldItemStyle();
  } else {
    VisuMZ.CoreEngine.Window_Gold_refresh.call(this);
  }
};
Window_Gold.prototype.isItemStyle = function () {
  if (TextManager.currencyUnit !== this.currencyUnit()) {
    return false;
  }
  return VisuMZ.CoreEngine.Settings.Gold.ItemStyle;
};
Window_Gold.prototype.drawGoldItemStyle = function () {
  this.resetFontSettings();
  this.contents.clear();
  this.contents.fontSize = VisuMZ.CoreEngine.Settings.Gold.GoldFontSize;
  const _0x2fce27 = VisuMZ.CoreEngine.Settings.Gold.GoldIcon;
  const _0x5b2633 = this.itemLineRect(0x0);
  if (_0x2fce27 > 0x0) {
    const _0x213f1f = _0x5b2633.y + (this.lineHeight() - ImageManager.iconHeight) / 0x2;
    this.drawIcon(_0x2fce27, _0x5b2633.x, _0x213f1f);
    const _0x16cb06 = ImageManager.iconWidth + 0x4;
    _0x5b2633.x += _0x16cb06;
    _0x5b2633.width -= _0x16cb06;
  }
  this.changeTextColor(ColorManager.systemColor());
  this.drawText(this.currencyUnit(), _0x5b2633.x, _0x5b2633.y, _0x5b2633.width, "left");
  const _0x5b3c09 = this.textWidth(this.currencyUnit()) + 0x6;
  ;
  _0x5b2633.x += _0x5b3c09;
  _0x5b2633.width -= _0x5b3c09;
  this.resetTextColor();
  const _0xdb80a7 = this.textWidth(this._digitGrouping ? VisuMZ.GroupDigits(this.value()) : this.value());
  if (_0xdb80a7 > _0x5b2633.width) {
    this.drawText(VisuMZ.CoreEngine.Settings.Gold.GoldOverlap, _0x5b2633.x, _0x5b2633.y, _0x5b2633.width, "right");
  } else {
    this.drawText(this.value(), _0x5b2633.x, _0x5b2633.y, _0x5b2633.width, "right");
  }
  this.resetFontSettings();
};
Window_StatusBase.prototype.drawParamText = function (_0x54ff0c, _0x3d947e, _0x164cea, _0x3cda14, _0x5124cc) {
  _0x3cda14 = String(_0x3cda14 || '').toUpperCase();
  if (VisuMZ.CoreEngine.Settings.Param.DrawIcons) {
    const _0x2fec0c = VisuMZ.GetParamIcon(_0x3cda14);
    if (_0x5124cc) {
      this.drawIconBySize(_0x2fec0c, _0x54ff0c, _0x3d947e, this.gaugeLineHeight());
      _0x164cea -= this.gaugeLineHeight() + 0x2;
      _0x54ff0c += this.gaugeLineHeight() + 0x2;
    } else {
      this.drawIcon(_0x2fec0c, _0x54ff0c + 0x2, _0x3d947e + 0x2);
      _0x164cea -= ImageManager.iconWidth + 0x4;
      _0x54ff0c += ImageManager.iconWidth + 0x4;
    }
  }
  const _0x3ad53e = TextManager.param(_0x3cda14);
  this.resetFontSettings();
  this.changeTextColor(ColorManager.systemColor());
  if (_0x5124cc) {
    this.contents.fontSize = this.smallParamFontSize();
    this.contents.drawText(_0x3ad53e, _0x54ff0c, _0x3d947e, _0x164cea, this.gaugeLineHeight(), "left");
  } else {
    this.drawText(_0x3ad53e, _0x54ff0c, _0x3d947e, _0x164cea);
  }
  this.resetFontSettings();
};
Window_StatusBase.prototype.smallParamFontSize = function () {
  return $gameSystem.mainFontSize() - 0x8;
};
Window_StatusBase.prototype.drawActorClass = function (_0x18fcba, _0x25381c, _0xc386f1, _0x39cd17) {
  _0x39cd17 = _0x39cd17 || 0xa8;
  this.resetTextColor();
  if (VisuMZ.CoreEngine.Settings.UI.TextCodeClassNames) {
    this.drawTextEx(_0x18fcba.currentClass().name, _0x25381c, _0xc386f1, _0x39cd17);
  } else {
    const _0x2293c3 = _0x18fcba.currentClass().name.replace(/\\I\[(\d+)\]/gi, '');
    this.drawText(_0x2293c3, _0x25381c, _0xc386f1, _0x39cd17);
  }
};
Window_StatusBase.prototype.drawActorNickname = function (_0x4576b, _0x26d87, _0x4a0bbc, _0x51308e) {
  _0x51308e = _0x51308e || 0x10e;
  this.resetTextColor();
  if (VisuMZ.CoreEngine.Settings.UI.TextCodeNicknames) {
    this.drawTextEx(_0x4576b.nickname(), _0x26d87, _0x4a0bbc, _0x51308e);
  } else {
    this.drawText(_0x4576b.nickname(), _0x26d87, _0x4a0bbc, _0x51308e);
  }
};
VisuMZ.CoreEngine.Window_StatusBase_drawActorLevel = Window_StatusBase.prototype.drawActorLevel;
Window_StatusBase.prototype.drawActorLevel = function (_0x142ff8, _0x11d120, _0x30e734) {
  if (VisuMZ.CoreEngine.Settings.Param.ShowActorLevel === false) {
    return;
  }
  if (this.isExpGaugeDrawn()) {
    this.drawActorExpGauge(_0x142ff8, _0x11d120, _0x30e734);
  }
  VisuMZ.CoreEngine.Window_StatusBase_drawActorLevel.call(this, _0x142ff8, _0x11d120, _0x30e734);
};
Window_StatusBase.prototype.isExpGaugeDrawn = function () {
  return VisuMZ.CoreEngine.Settings.UI.LvExpGauge;
};
Window_StatusBase.prototype.drawActorExpGauge = function (_0x24af71, _0x18f0f4, _0x354191) {
  if (!_0x24af71) {
    return;
  }
  if (!_0x24af71.isActor()) {
    return;
  }
  const _0x1ffe2c = _0x24af71.expRate();
  let _0x22c2c0 = ColorManager.expGaugeColor1();
  let _0x1f721a = ColorManager.expGaugeColor2();
  if (_0x1ffe2c >= 0x1) {
    _0x22c2c0 = ColorManager.maxLvGaugeColor1();
    _0x1f721a = ColorManager.maxLvGaugeColor2();
  }
  this.drawGauge(_0x18f0f4, _0x354191, 0x80, _0x1ffe2c, _0x22c2c0, _0x1f721a);
};
Window_EquipStatus.prototype.drawAllParams = function () {
  let _0x36f348 = 0x0;
  for (const _0x1a5832 of VisuMZ.CoreEngine.Settings.Param.DisplayedParams) {
    const _0xdb5b53 = this.itemPadding();
    const _0xb296d3 = this.paramY(_0x36f348);
    this.drawItem(_0xdb5b53, _0xb296d3, _0x1a5832);
    _0x36f348++;
  }
};
Window_EquipStatus.prototype.drawParamName = function (_0x2ada16, _0x4b32d9, _0x4ec8a6) {
  const _0x12c30d = this.paramX() - this.itemPadding() * 0x2;
  this.drawParamText(_0x2ada16, _0x4b32d9, _0x12c30d, _0x4ec8a6, false);
};
Window_EquipStatus.prototype.drawCurrentParam = function (_0x1d251a, _0x5823a2, _0x2032c7) {
  const _0x52886f = this.paramWidth();
  this.resetTextColor();
  this.drawText(this._actor.paramValueByName(_0x2032c7, true), _0x1d251a, _0x5823a2, _0x52886f, "right");
};
Window_EquipStatus.prototype.drawRightArrow = function (_0x18e1c1, _0x43f6a9) {
  const _0x30a259 = this.rightArrowWidth();
  this.changeTextColor(ColorManager.systemColor());
  const _0x34f000 = VisuMZ.CoreEngine.Settings.UI.ParamArrow;
  this.drawText(_0x34f000, _0x18e1c1, _0x43f6a9, _0x30a259, "center");
};
Window_EquipStatus.prototype.drawNewParam = function (_0x500697, _0x352985, _0xc9506d) {
  const _0x51e545 = this.paramWidth();
  const _0x5adf62 = this._tempActor.paramValueByName(_0xc9506d);
  const _0x17aba4 = _0x5adf62 - this._actor.paramValueByName(_0xc9506d);
  this.changeTextColor(ColorManager.paramchangeTextColor(_0x17aba4));
  this.drawText(this._tempActor.paramValueByName(_0xc9506d, true), _0x500697, _0x352985, _0x51e545, "right");
};
VisuMZ.CoreEngine.Window_EquipItem_isEnabled = Window_EquipItem.prototype.isEnabled;
Window_EquipItem.prototype.isEnabled = function (_0x133025) {
  return _0x133025 && this._actor ? this._actor.canEquip(_0x133025) : VisuMZ.CoreEngine.Window_EquipItem_isEnabled.call(this, _0x133025);
};
Window_StatusParams.prototype.maxItems = function () {
  return VisuMZ.CoreEngine.Settings.Param.DisplayedParams.length;
};
Window_StatusParams.prototype.drawItem = function (_0x353c1f) {
  const _0x5b8089 = this.itemLineRect(_0x353c1f);
  const _0x4488ba = VisuMZ.CoreEngine.Settings.Param.DisplayedParams[_0x353c1f];
  const _0x4cd913 = this._actor.paramValueByName(_0x4488ba, true);
  this.drawParamText(_0x5b8089.x, _0x5b8089.y, 0xa0, _0x4488ba, false);
  this.resetTextColor();
  this.drawText(_0x4cd913, _0x5b8089.x + 0xa0, _0x5b8089.y, 0x3c, "right");
};
if (VisuMZ.CoreEngine.Settings.KeyboardInput.EnableNameInput) {
  if (VisuMZ.CoreEngine.Settings.KeyboardInput.QwertyLayout) {
    Window_NameInput.LATIN1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', "'", '`', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '~', 'z', 'x', 'c', 'v', 'b', 'n', 'm', "\"", ';', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '[', ']', '-', '_', '/', " ", "Page", 'OK'];
  }
  ;
  VisuMZ.CoreEngine.Window_NameInput_initialize = Window_NameInput.prototype.initialize;
  Window_NameInput.prototype.initialize = function (_0x2d96dc) {
    this._mode = this.defaultInputMode();
    VisuMZ.CoreEngine.Window_NameInput_initialize.call(this, _0x2d96dc);
    if (this._mode === 'default') {
      this.select(0x0);
    } else {
      Input.clear();
      this.deselect();
    }
  };
  Window_NameInput.prototype.defaultInputMode = function () {
    if (Input.isGamepadConnected()) {
      return "default";
    }
    return VisuMZ.CoreEngine.Settings.KeyboardInput.DefaultMode || "keyboard";
  };
  VisuMZ.CoreEngine.Window_NameInput_processHandling = Window_NameInput.prototype.processHandling;
  Window_NameInput.prototype.processHandling = function () {
    if (!this.isOpen()) {
      return;
    }
    if (!this.active) {
      return;
    }
    if (this._mode === "keyboard" && Input.isGamepadTriggered()) {
      this.switchModes("default");
    } else {
      if (Input.isSpecialCode('backspace')) {
        Input.clear();
        this.processBack();
      } else {
        if (Input.isTriggered('tab')) {
          Input.clear();
          if (this._mode === "keyboard") {
            this.switchModes("default");
          } else {
            this.switchModes("keyboard");
          }
        } else {
          if (this._mode === "keyboard") {
            this.processKeyboardHandling();
          } else if (Input.isSpecialCode("escape")) {
            Input.clear();
            this.switchModes("keyboard");
          } else {
            VisuMZ.CoreEngine.Window_NameInput_processHandling.call(this);
          }
        }
      }
    }
  };
  VisuMZ.CoreEngine.Window_NameInput_processTouch = Window_NameInput.prototype.processTouch;
  Window_NameInput.prototype.processTouch = function () {
    if (!this.isOpenAndActive()) {
      return;
    }
    if (this._mode === "keyboard") {
      if (TouchInput.isTriggered() && this.isTouchedInsideFrame()) {
        this.switchModes("default");
      } else if (TouchInput.isCancelled()) {
        this.switchModes("default");
      }
    } else {
      VisuMZ.CoreEngine.Window_NameInput_processTouch.call(this);
    }
  };
  Window_NameInput.prototype.processKeyboardHandling = function () {
    if (Input.isSpecialCode("enter")) {
      Input.clear();
      this.onNameOk();
    } else {
      if (Input._inputString !== undefined) {
        let _0x22637d = Input._inputString;
        let _0x2860c4 = _0x22637d.length;
        for (let _0x26b76a = 0x0; _0x26b76a < _0x2860c4; ++_0x26b76a) {
          if (this._editWindow.add(_0x22637d[_0x26b76a])) {
            SoundManager.playOk();
          } else {
            SoundManager.playBuzzer();
          }
        }
        Input.clear();
      }
    }
  };
  Window_NameInput.prototype.switchModes = function (_0x3acaf2) {
    let _0x1f66bd = this._mode;
    this._mode = _0x3acaf2;
    if (_0x1f66bd !== this._mode) {
      this.refresh();
      SoundManager.playOk();
      if (this._mode === "default") {
        this.select(0x0);
      } else {
        this.select(-0x1);
      }
    }
  };
  VisuMZ.CoreEngine.Window_NameInput_cursorDown = Window_NameInput.prototype.cursorDown;
  Window_NameInput.prototype.cursorDown = function (_0x278904) {
    if (this._mode === 'keyboard' && !Input.isArrowPressed()) {
      return;
    }
    if (Input.isNumpadPressed()) {
      return;
    }
    VisuMZ.CoreEngine.Window_NameInput_cursorDown.call(this, _0x278904);
    this.switchModes("default");
  };
  VisuMZ.CoreEngine.Window_NameInput_cursorUp = Window_NameInput.prototype.cursorUp;
  Window_NameInput.prototype.cursorUp = function (_0x2b8d14) {
    if (this._mode === "keyboard" && !Input.isArrowPressed()) {
      return;
    }
    if (Input.isNumpadPressed()) {
      return;
    }
    VisuMZ.CoreEngine.Window_NameInput_cursorUp.call(this, _0x2b8d14);
    this.switchModes('default');
  };
  VisuMZ.CoreEngine.Window_NameInput_cursorRight = Window_NameInput.prototype.cursorRight;
  Window_NameInput.prototype.cursorRight = function (_0x215275) {
    if (this._mode === "keyboard" && !Input.isArrowPressed()) {
      return;
    }
    if (Input.isNumpadPressed()) {
      return;
    }
    VisuMZ.CoreEngine.Window_NameInput_cursorRight.call(this, _0x215275);
    this.switchModes("default");
  };
  VisuMZ.CoreEngine.Window_NameInput_cursorLeft = Window_NameInput.prototype.cursorLeft;
  Window_NameInput.prototype.cursorLeft = function (_0x455f8f) {
    if (this._mode === 'keyboard' && !Input.isArrowPressed()) {
      return;
    }
    if (Input.isNumpadPressed()) {
      return;
    }
    VisuMZ.CoreEngine.Window_NameInput_cursorLeft.call(this, _0x455f8f);
    this.switchModes("default");
  };
  VisuMZ.CoreEngine.Window_NameInput_cursorPagedown = Window_NameInput.prototype.cursorPagedown;
  Window_NameInput.prototype.cursorPagedown = function () {
    if (this._mode === 'keyboard') {
      return;
    }
    if (Input.isNumpadPressed()) {
      return;
    }
    VisuMZ.CoreEngine.Window_NameInput_cursorPagedown.call(this);
    this.switchModes("default");
  };
  VisuMZ.CoreEngine.Window_NameInput_cursorPageup = Window_NameInput.prototype.cursorPageup;
  Window_NameInput.prototype.cursorPageup = function () {
    if (this._mode === 'keyboard') {
      return;
    }
    if (Input.isNumpadPressed()) {
      return;
    }
    VisuMZ.CoreEngine.Window_NameInput_cursorPageup.call(this);
    this.switchModes("default");
  };
  VisuMZ.CoreEngine.Window_NameInput_refresh = Window_NameInput.prototype.refresh;
  Window_NameInput.prototype.refresh = function () {
    if (this._mode === "keyboard") {
      this.contents.clear();
      this.contentsBack.clear();
      this.resetTextColor();
      let _0x276cd5 = VisuMZ.CoreEngine.Settings.KeyboardInput.NameInputMessage.split("\n");
      let _0x48f4b0 = _0x276cd5.length;
      let _0x23db7e = (this.innerHeight - _0x48f4b0 * this.lineHeight()) / 0x2;
      for (let _0x5ba7e2 = 0x0; _0x5ba7e2 < _0x48f4b0; ++_0x5ba7e2) {
        let _0x2809f6 = _0x276cd5[_0x5ba7e2];
        let _0x49227f = this.textSizeEx(_0x2809f6).width;
        let _0x3d0d62 = Math.floor((this.contents.width - _0x49227f) / 0x2);
        this.drawTextEx(_0x2809f6, _0x3d0d62, _0x23db7e);
        _0x23db7e += this.lineHeight();
      }
    } else {
      VisuMZ.CoreEngine.Window_NameInput_refresh.call(this);
    }
  };
}
;
VisuMZ.CoreEngine.Window_ShopSell_isEnabled = Window_ShopSell.prototype.isEnabled;
Window_ShopSell.prototype.isEnabled = function (_0x8c43eb) {
  return VisuMZ.CoreEngine.Settings.QoL.KeyItemProtect && DataManager.isKeyItem(_0x8c43eb) ? false : VisuMZ.CoreEngine.Window_ShopSell_isEnabled.call(this, _0x8c43eb);
};
Window_NumberInput.prototype.isUseModernControls = function () {
  return false;
};
if (VisuMZ.CoreEngine.Settings.KeyboardInput.EnableNumberInput) {
  VisuMZ.CoreEngine.Window_NumberInput_start = Window_NumberInput.prototype.start;
  Window_NumberInput.prototype.start = function () {
    VisuMZ.CoreEngine.Window_NumberInput_start.call(this);
    this.select(this._maxDigits - 0x1);
    Input.clear();
  };
  VisuMZ.CoreEngine.Window_NumberInput_processDigitChange = Window_NumberInput.prototype.processDigitChange;
  Window_NumberInput.prototype.processDigitChange = function () {
    if (!this.isOpenAndActive()) {
      return;
    }
    if (Input.isNumpadPressed()) {
      this.processKeyboardDigitChange();
    } else {
      if (Input.isSpecialCode("backspace")) {
        this.processKeyboardBackspace();
      } else {
        if (Input._inputSpecialKeyCode === 0x2e) {
          this.processKeyboardDelete();
        } else {
          if (Input._inputSpecialKeyCode === 0x24) {
            this.processKeyboardHome();
          } else if (Input._inputSpecialKeyCode === 0x23) {
            this.processKeyboardEnd();
          } else {
            VisuMZ.CoreEngine.Window_NumberInput_processDigitChange.call(this);
          }
        }
      }
    }
  };
  Window_NumberInput.prototype.processCursorMove = function () {
    if (!this.isCursorMovable()) {
      return;
    }
    if (Input.isNumpadPressed()) {
      this.processKeyboardDigitChange();
    } else {
      Window_Selectable.prototype.processCursorMove.call(this);
    }
  };
  Window_NumberInput.prototype.processCursorHomeEndTrigger = function () {};
  Window_NumberInput.prototype.processKeyboardDigitChange = function () {
    if (String(this._number).length >= this._maxDigits) {
      return;
    }
    const _0x5a1bfc = Number(String(this._number) + Input._inputString);
    if (isNaN(_0x5a1bfc)) {
      return;
    }
    this._number = _0x5a1bfc;
    const _0x5811f6 = '9'.repeat(this._maxDigits);
    this._number = this._number.clamp(0x0, _0x5811f6);
    Input.clear();
    this.refresh();
    SoundManager.playCursor();
    this.select(this._maxDigits - 0x1);
  };
  Window_NumberInput.prototype.processKeyboardBackspace = function () {
    this._number = Number(String(this._number).slice(0x0, -0x1));
    this._number = Math.max(0x0, this._number);
    Input.clear();
    this.refresh();
    SoundManager.playCursor();
    this.select(this._maxDigits - 0x1);
  };
  Window_NumberInput.prototype.processKeyboardDelete = function () {
    this._number = Number(String(this._number).substring(0x1));
    this._number = Math.max(0x0, this._number);
    Input.clear();
    this.refresh();
    SoundManager.playCursor();
    this.select(this._maxDigits - 0x1);
  };
  Window_NumberInput.prototype.processKeyboardHome = function () {
    if (this.index() === 0x0) {
      return;
    }
    Input.clear();
    this.refresh();
    SoundManager.playCursor();
    this.select(0x0);
  };
  Window_NumberInput.prototype.processKeyboardEnd = function () {
    if (this.index() === this._maxDigits - 0x1) {
      return;
    }
    Input.clear();
    this.refresh();
    SoundManager.playCursor();
    this.select(this._maxDigits - 0x1);
  };
}
;
VisuMZ.CoreEngine.Window_MapName_refresh = Window_MapName.prototype.refresh;
Window_MapName.prototype.refresh = function () {
  if (VisuMZ.CoreEngine.Settings.QoL.MapNameTextCode) {
    this.refreshWithTextCodeSupport();
  } else {
    VisuMZ.CoreEngine.Window_MapName_refresh.call(this);
  }
};
Window_MapName.prototype.refreshWithTextCodeSupport = function () {
  this.contents.clear();
  if ($gameMap.displayName()) {
    const _0x2b198f = this.innerWidth;
    this.drawBackground(0x0, 0x0, _0x2b198f, this.lineHeight());
    const _0x3ac989 = this.textSizeEx($gameMap.displayName()).width;
    this.drawTextEx($gameMap.displayName(), Math.floor((_0x2b198f - _0x3ac989) / 0x2), 0x0);
  }
};
Window_TitleCommand._commandList = VisuMZ.CoreEngine.Settings.TitleCommandList;
Window_TitleCommand.prototype.makeCommandList = function () {
  this.makeCoreEngineCommandList();
};
Window_TitleCommand.prototype.makeCoreEngineCommandList = function () {
  for (const _0x4dc660 of Window_TitleCommand._commandList) {
    if (_0x4dc660.ShowJS.call(this)) {
      const _0x1032f4 = _0x4dc660.Symbol;
      let _0x1d2365 = _0x4dc660.TextStr;
      if (['', "Untitled"].includes(_0x1d2365)) {
        _0x1d2365 = _0x4dc660.TextJS.call(this);
      }
      const _0x364ce8 = _0x4dc660.EnableJS.call(this);
      const _0x403ea4 = _0x4dc660.ExtJS.call(this);
      this.addCommand(_0x1d2365, _0x1032f4, _0x364ce8, _0x403ea4);
      this.setHandler(_0x1032f4, _0x4dc660.CallHandlerJS.bind(this, _0x403ea4));
    }
  }
};
VisuMZ.CoreEngine.Window_TitleCommand_selectLast = Window_TitleCommand.prototype.selectLast;
Window_TitleCommand.prototype.selectLast = function () {
  VisuMZ.CoreEngine.Window_TitleCommand_selectLast.call(this);
  if (!Window_TitleCommand._lastCommandSymbol) {
    return;
  }
  const _0x2c5cbf = this.findSymbol(Window_TitleCommand._lastCommandSymbol);
  const _0x130c80 = Math.floor(this.maxVisibleItems() / 0x2) - 0x1;
  this.smoothSelect(_0x2c5cbf);
  if (this._scrollDuration > 0x1) {
    this._scrollDuration = 0x1;
    this.updateSmoothScroll();
  }
  this.setTopRow(_0x2c5cbf - _0x130c80);
};
Window_GameEnd._commandList = VisuMZ.CoreEngine.Settings.MenuLayout.GameEnd.CommandList;
Window_GameEnd.prototype.makeCommandList = function () {
  this.makeCoreEngineCommandList();
};
Window_GameEnd.prototype.makeCoreEngineCommandList = function () {
  for (const _0x2e48d5 of Window_GameEnd._commandList) {
    if (_0x2e48d5.ShowJS.call(this)) {
      const _0x38b2d2 = _0x2e48d5.Symbol;
      let _0x7489bd = _0x2e48d5.TextStr;
      if (['', "Untitled"].includes(_0x7489bd)) {
        _0x7489bd = _0x2e48d5.TextJS.call(this);
      }
      const _0x14cb38 = _0x2e48d5.EnableJS.call(this);
      const _0x29b21e = _0x2e48d5.ExtJS.call(this);
      this.addCommand(_0x7489bd, _0x38b2d2, _0x14cb38, _0x29b21e);
      this.setHandler(_0x38b2d2, _0x2e48d5.CallHandlerJS.bind(this, _0x29b21e));
    }
  }
};
function Window_ButtonAssist() {
  this.initialize(...arguments);
}
Window_ButtonAssist.prototype = Object.create(Window_Base.prototype);
Window_ButtonAssist.prototype.constructor = Window_ButtonAssist;
Window_ButtonAssist.prototype.initialize = function (_0x3527a8) {
  this._data = {};
  Window_Base.prototype.initialize.call(this, _0x3527a8);
  this.setBackgroundType(VisuMZ.CoreEngine.Settings.ButtonAssist.BgType || 0x0);
  this.refresh();
};
Window_ButtonAssist.prototype.makeFontBigger = function () {
  if (this.contents.fontSize <= 0x60) {
    this.contents.fontSize += 0x6;
  }
};
Window_ButtonAssist.prototype.makeFontSmaller = function () {
  if (this.contents.fontSize >= 0x18) {
    this.contents.fontSize -= 0x6;
  }
};
Window_ButtonAssist.prototype.update = function () {
  Window_Base.prototype.update.call(this);
  this.updateKeyText();
};
Window_ButtonAssist.prototype.updatePadding = function () {
  this.padding = SceneManager._scene.getButtonAssistLocation() !== "button" ? 0x0 : 0x8;
};
Window_ButtonAssist.prototype.updateKeyText = function () {
  const _0xea4bce = SceneManager._scene;
  for (let _0x190068 = 0x1; _0x190068 <= 0x5; _0x190068++) {
    if (this._data["key%1".format(_0x190068)] !== _0xea4bce['buttonAssistKey%1'.format(_0x190068)]()) {
      return this.refresh();
    }
    if (this._data['text%1'.format(_0x190068)] !== _0xea4bce["buttonAssistText%1".format(_0x190068)]()) {
      return this.refresh();
    }
  }
};
Window_ButtonAssist.prototype.refresh = function () {
  this.contents.clear();
  for (let _0x1a0f3f = 0x1; _0x1a0f3f <= 0x5; _0x1a0f3f++) {
    this.drawSegment(_0x1a0f3f);
  }
};
Window_ButtonAssist.prototype.drawSegment = function (_0x51c5e9) {
  const _0x8a4d8b = this.innerWidth / 0x5;
  const _0x21c754 = SceneManager._scene;
  const _0x2e5703 = _0x21c754["buttonAssistKey%1".format(_0x51c5e9)]();
  const _0x1cb8b3 = _0x21c754["buttonAssistText%1".format(_0x51c5e9)]();
  this._data["key%1".format(_0x51c5e9)] = _0x2e5703;
  this._data["text%1".format(_0x51c5e9)] = _0x1cb8b3;
  if (_0x2e5703 === '') {
    return;
  }
  if (_0x1cb8b3 === '') {
    return;
  }
  const _0x401a91 = _0x21c754["buttonAssistOffset%1".format(_0x51c5e9)]();
  const _0x510093 = this.itemPadding();
  const _0x11465d = _0x8a4d8b * (_0x51c5e9 - 0x1) + _0x510093 + _0x401a91;
  const _0x300e48 = VisuMZ.CoreEngine.Settings.ButtonAssist.TextFmt;
  this.drawTextEx(_0x300e48.format(_0x2e5703, _0x1cb8b3), _0x11465d, 0x0, _0x8a4d8b - _0x510093 * 0x2);
};
VisuMZ.CoreEngine.Game_Interpreter_updateWaitMode = Game_Interpreter.prototype.updateWaitMode;
Game_Interpreter.prototype.updateWaitMode = function () {
  if ($gameTemp._pictureCoordinatesMode !== undefined) {
    return VisuMZ.CoreEngine.UpdatePictureCoordinates();
  }
  return VisuMZ.CoreEngine.Game_Interpreter_updateWaitMode.call(this);
};
VisuMZ.CoreEngine.UpdatePictureCoordinates = function () {
  const _0x225d17 = $gameTemp._pictureCoordinatesMode || 0x0;
  if (_0x225d17 < 0x0 || _0x225d17 > 0x64 || TouchInput.isCancelled() || Input.isTriggered("cancel")) {
    $gameTemp._pictureCoordinatesMode = undefined;
    Input.clear();
    TouchInput.clear();
  }
  const _0x5019ab = $gameScreen.picture(_0x225d17);
  if (_0x5019ab) {
    _0x5019ab._x = TouchInput._x;
    _0x5019ab._y = TouchInput._y;
  }
  VisuMZ.CoreEngine.updatePictureCoordinates();
  return $gameTemp._pictureCoordinatesMode !== undefined;
};
VisuMZ.CoreEngine.updatePictureCoordinates = function () {
  const _0x30fba3 = SceneManager._scene;
  if (!_0x30fba3) {
    return;
  }
  if (!_0x30fba3._pictureCoordinatesWindow) {
    SoundManager.playLoad();
    _0x30fba3._pictureCoordinatesWindow = new Window_PictureCoordinates();
    _0x30fba3.addChild(_0x30fba3._pictureCoordinatesWindow);
  }
  if ($gameTemp._pictureCoordinatesMode === undefined) {
    SoundManager.playCancel();
    _0x30fba3.removeChild(_0x30fba3._pictureCoordinatesWindow);
    _0x30fba3._pictureCoordinatesWindow = undefined;
  }
};
function Window_PictureCoordinates() {
  this.initialize(...arguments);
}
Window_PictureCoordinates.prototype = Object.create(Window_Base.prototype);
Window_PictureCoordinates.prototype.constructor = Window_PictureCoordinates;
Window_PictureCoordinates.prototype.initialize = function () {
  this._lastOrigin = "nah";
  this._lastX = "nah";
  this._lastY = "nah";
  const _0x15a854 = this.windowRect();
  Window_Base.prototype.initialize.call(this, _0x15a854);
  this.setBackgroundType(0x2);
};
Window_PictureCoordinates.prototype.windowRect = function () {
  let _0x34d769 = Graphics.height - this.lineHeight();
  let _0x56e317 = Graphics.width;
  let _0x1cdb2c = this.lineHeight();
  return new Rectangle(0x0, _0x34d769, _0x56e317, _0x1cdb2c);
};
Window_PictureCoordinates.prototype.updatePadding = function () {
  this.padding = 0x0;
};
Window_PictureCoordinates.prototype.update = function () {
  Window_Base.prototype.update.call(this);
  this.updateData();
};
Window_PictureCoordinates.prototype.updateData = function () {
  if (!this.needsUpdate()) {
    return;
  }
  this.refresh();
};
Window_PictureCoordinates.prototype.needsUpdate = function () {
  const _0x55843d = $gameTemp._pictureCoordinatesMode;
  const _0x5ed779 = $gameScreen.picture(_0x55843d);
  return _0x5ed779 ? this._lastOrigin !== _0x5ed779._origin || this._lastX !== _0x5ed779._x || this._lastY !== _0x5ed779._y : false;
};
Window_PictureCoordinates.prototype.refresh = function () {
  this.contents.clear();
  const _0x49b6b7 = $gameTemp._pictureCoordinatesMode;
  const _0xfb9fa0 = $gameScreen.picture(_0x49b6b7);
  if (!_0xfb9fa0) {
    return;
  }
  this._lastOrigin = _0xfb9fa0._origin;
  this._lastX = _0xfb9fa0._x;
  this._lastY = _0xfb9fa0._y;
  const _0xcaa938 = ColorManager.itemBackColor1();
  this.contents.fillRect(0x0, 0x0, this.innerWidth, this.innerHeight, _0xcaa938);
  const _0x5621dc = " Origin: %1".format(_0xfb9fa0._origin === 0x0 ? "Upper Left" : "Center");
  const _0x2f3488 = "X: %1".format(_0xfb9fa0._x);
  const _0x19ee3c = "Y: %1".format(_0xfb9fa0._y);
  const _0x1fcea7 = "%1: Exit ".format(TextManager.getInputButtonString("cancel"));
  let _0x40e810 = Math.floor(this.innerWidth / 0x4);
  this.drawText(_0x5621dc, _0x40e810 * 0x0, 0x0, _0x40e810);
  this.drawText(_0x2f3488, _0x40e810 * 0x1, 0x0, _0x40e810, "center");
  this.drawText(_0x19ee3c, _0x40e810 * 0x2, 0x0, _0x40e810, "center");
  const _0x7f7931 = this.textSizeEx(_0x1fcea7).width;
  const _0x254304 = this.innerWidth - _0x7f7931;
  this.drawTextEx(_0x1fcea7, _0x254304, 0x0, _0x7f7931);
};
function Window_TextPopup() {
  this.initialize(...arguments);
}
Window_TextPopup.prototype = Object.create(Window_Base.prototype);
Window_TextPopup.prototype.constructor = Window_TextPopup;
Window_TextPopup.SETTINGS = {
  'framesPerChar': VisuMZ.CoreEngine.Settings.Window.DurationPerChat ?? 1.5,
  'framesMin': VisuMZ.CoreEngine.Settings.Window.MinDuration ?? 0x5a,
  'framesMax': VisuMZ.CoreEngine.Settings.Window.MaxDuration ?? 0x12c
};
Window_TextPopup.prototype.initialize = function () {
  const _0xb71ae7 = new Rectangle(0x0, 0x0, 0x1, 0x1);
  Window_Base.prototype.initialize.call(this, _0xb71ae7);
  this.openness = 0x0;
  this._text = '';
  this._textQueue = [];
  this._timeDuration = 0x0;
};
Window_TextPopup.prototype.isAutoColorAffected = function () {
  return true;
};
Window_TextPopup.prototype.addQueue = function (_0x31672a) {
  if (this._textQueue[this._textQueue.length - 0x1] === _0x31672a) {
    return;
  }
  this._textQueue.push(_0x31672a);
  SceneManager._scene.addChild(this);
};
Window_TextPopup.prototype.update = function () {
  Window_Base.prototype.update.call(this);
  this.updateText();
  this.updateDuration();
};
Window_TextPopup.prototype.updateText = function () {
  if (this._text !== '') {
    return;
  }
  if (this._textQueue.length <= 0x0) {
    return;
  }
  if (!this.isClosed()) {
    return;
  }
  this._text = this._textQueue.shift();
  const _0x158b92 = Window_TextPopup.SETTINGS;
  const _0x7ee630 = Math.ceil(this._text.length * _0x158b92.framesPerChar);
  this._timeDuration = _0x7ee630.clamp(_0x158b92.framesMin, _0x158b92.framesMax);
  const _0x18d736 = this.textSizeEx(this._text);
  let _0x11d17c = _0x18d736.width + this.itemPadding() * 0x2;
  _0x11d17c += $gameSystem.windowPadding() * 0x2;
  let _0x5d1a52 = Math.max(_0x18d736.height, this.lineHeight());
  _0x5d1a52 += $gameSystem.windowPadding() * 0x2;
  const _0x2318d7 = Math.round((Graphics.width - _0x11d17c) / 0x2);
  const _0x2c304b = Math.round((Graphics.height - _0x5d1a52) / 0x2);
  const _0xe966ad = new Rectangle(_0x2318d7, _0x2c304b, _0x11d17c, _0x5d1a52);
  this.move(_0xe966ad.x, _0xe966ad.y, _0xe966ad.width, _0xe966ad.height);
  this.createContents();
  this.refresh();
  this.open();
  SceneManager._scene.addChild(this);
};
Window_TextPopup.prototype.refresh = function () {
  const _0x4eedf3 = this.baseTextRect();
  this.contents.clear();
  this.drawTextEx(this._text, _0x4eedf3.x, _0x4eedf3.y, _0x4eedf3.width);
};
Window_TextPopup.prototype.updateDuration = function () {
  if (this.isOpening() || this.isClosing()) {
    return;
  }
  if (this._timeDuration <= 0x0) {
    return;
  }
  this._timeDuration--;
  if (this._timeDuration <= 0x0) {
    this.close();
    this._text = '';
  }
};
VisuMZ.ShowDevTools = function (_0x2a3b46) {
  if (Utils.isOptionValid("test")) {
    var _0x48dfd6 = require("nw.gui").Window.get();
    SceneManager.showDevTools();
    if (_0x2a3b46) {
      setTimeout(_0x48dfd6.focus.bind(_0x48dfd6), 0x190);
    }
  }
};
VisuMZ.ApplyEasing = function (_0x4cf16e, _0x635473) {
  _0x635473 = _0x635473.toUpperCase();
  switch (_0x635473) {
    case 'LINEAR':
      return _0x4cf16e;
    case "INSINE":
      return -0x1 * Math.cos(_0x4cf16e * (Math.PI / 0x2)) + 0x1;
    case 'OUTSINE':
      return Math.sin(_0x4cf16e * (Math.PI / 0x2));
    case 'INOUTSINE':
      return -0.5 * (Math.cos(Math.PI * _0x4cf16e) - 0x1);
    case 'INQUAD':
      return _0x4cf16e * _0x4cf16e;
    case "OUTQUAD":
      return _0x4cf16e * (0x2 - _0x4cf16e);
    case 'INOUTQUAD':
      return _0x4cf16e < 0.5 ? 0x2 * _0x4cf16e * _0x4cf16e : -0x1 + (0x4 - 0x2 * _0x4cf16e) * _0x4cf16e;
    case "INCUBIC":
      return _0x4cf16e * _0x4cf16e * _0x4cf16e;
    case 'OUTCUBIC':
      var _0x3c3a5a = _0x4cf16e - 0x1;
      return _0x3c3a5a * _0x3c3a5a * _0x3c3a5a + 0x1;
    case "INOUTCUBIC":
      return _0x4cf16e < 0.5 ? 0x4 * _0x4cf16e * _0x4cf16e * _0x4cf16e : (_0x4cf16e - 0x1) * (0x2 * _0x4cf16e - 0x2) * (0x2 * _0x4cf16e - 0x2) + 0x1;
    case "INQUART":
      return _0x4cf16e * _0x4cf16e * _0x4cf16e * _0x4cf16e;
    case 'OUTQUART':
      var _0x3c3a5a = _0x4cf16e - 0x1;
      return 0x1 - _0x3c3a5a * _0x3c3a5a * _0x3c3a5a * _0x3c3a5a;
    case "INOUTQUART":
      var _0x3c3a5a = _0x4cf16e - 0x1;
      return _0x4cf16e < 0.5 ? 0x8 * _0x4cf16e * _0x4cf16e * _0x4cf16e * _0x4cf16e : 0x1 - 0x8 * _0x3c3a5a * _0x3c3a5a * _0x3c3a5a * _0x3c3a5a;
    case "INQUINT":
      return _0x4cf16e * _0x4cf16e * _0x4cf16e * _0x4cf16e * _0x4cf16e;
    case "OUTQUINT":
      var _0x3c3a5a = _0x4cf16e - 0x1;
      return 0x1 + _0x3c3a5a * _0x3c3a5a * _0x3c3a5a * _0x3c3a5a * _0x3c3a5a;
    case 'INOUTQUINT':
      var _0x3c3a5a = _0x4cf16e - 0x1;
      return _0x4cf16e < 0.5 ? 0x10 * _0x4cf16e * _0x4cf16e * _0x4cf16e * _0x4cf16e * _0x4cf16e : 0x1 + 0x10 * _0x3c3a5a * _0x3c3a5a * _0x3c3a5a * _0x3c3a5a * _0x3c3a5a;
    case "INEXPO":
      if (_0x4cf16e === 0x0) {
        return 0x0;
      }
      return Math.pow(0x2, 0xa * (_0x4cf16e - 0x1));
    case "OUTEXPO":
      if (_0x4cf16e === 0x1) {
        return 0x1;
      }
      return -Math.pow(0x2, -0xa * _0x4cf16e) + 0x1;
    case "INOUTEXPO":
      if (_0x4cf16e === 0x0 || _0x4cf16e === 0x1) {
        return _0x4cf16e;
      }
      var _0x133204 = _0x4cf16e * 0x2;
      var _0x2e774f = _0x133204 - 0x1;
      if (_0x133204 < 0x1) {
        return 0.5 * Math.pow(0x2, 0xa * _0x2e774f);
      }
      return 0.5 * (-Math.pow(0x2, -0xa * _0x2e774f) + 0x2);
    case 'INCIRC':
      var _0x133204 = _0x4cf16e / 0x1;
      return -0x1 * (Math.sqrt(0x1 - _0x133204 * _0x4cf16e) - 0x1);
    case "OUTCIRC":
      var _0x3c3a5a = _0x4cf16e - 0x1;
      return Math.sqrt(0x1 - _0x3c3a5a * _0x3c3a5a);
    case "INOUTCIRC":
      var _0x133204 = _0x4cf16e * 0x2;
      var _0x2e774f = _0x133204 - 0x2;
      if (_0x133204 < 0x1) {
        return -0.5 * (Math.sqrt(0x1 - _0x133204 * _0x133204) - 0x1);
      }
      return 0.5 * (Math.sqrt(0x1 - _0x2e774f * _0x2e774f) + 0x1);
    case 'INBACK':
      return _0x4cf16e * _0x4cf16e * (2.70158 * _0x4cf16e - 1.70158);
    case "OUTBACK":
      var _0x133204 = _0x4cf16e / 0x1 - 0x1;
      return _0x133204 * _0x133204 * (2.70158 * _0x133204 + 1.70158) + 0x1;
      break;
    case "INOUTBACK":
      var _0x133204 = _0x4cf16e * 0x2;
      var _0x49b849 = _0x133204 - 0x2;
      var _0x14a0aa = 2.5949095;
      if (_0x133204 < 0x1) {
        return 0.5 * _0x133204 * _0x133204 * ((_0x14a0aa + 0x1) * _0x133204 - _0x14a0aa);
      }
      return 0.5 * (_0x49b849 * _0x49b849 * ((_0x14a0aa + 0x1) * _0x49b849 + _0x14a0aa) + 0x2);
    case "INELASTIC":
      if (_0x4cf16e === 0x0 || _0x4cf16e === 0x1) {
        return _0x4cf16e;
      }
      var _0x133204 = _0x4cf16e / 0x1;
      var _0x2e774f = _0x133204 - 0x1;
      var _0x1702a6 = 0.30000000000000004;
      var _0x14a0aa = _0x1702a6 / (0x2 * Math.PI) * Math.asin(0x1);
      return -(Math.pow(0x2, 0xa * _0x2e774f) * Math.sin((_0x2e774f - _0x14a0aa) * (0x2 * Math.PI) / _0x1702a6));
    case "OUTELASTIC":
      var _0x1702a6 = 0.30000000000000004;
      var _0x133204 = _0x4cf16e * 0x2;
      if (_0x4cf16e === 0x0 || _0x4cf16e === 0x1) {
        return _0x4cf16e;
      }
      var _0x14a0aa = _0x1702a6 / (0x2 * Math.PI) * Math.asin(0x1);
      return Math.pow(0x2, -0xa * _0x133204) * Math.sin((_0x133204 - _0x14a0aa) * (0x2 * Math.PI) / _0x1702a6) + 0x1;
    case "INOUTELASTIC":
      var _0x1702a6 = 0.30000000000000004;
      if (_0x4cf16e === 0x0 || _0x4cf16e === 0x1) {
        return _0x4cf16e;
      }
      var _0x133204 = _0x4cf16e * 0x2;
      var _0x2e774f = _0x133204 - 0x1;
      var _0x14a0aa = _0x1702a6 / (0x2 * Math.PI) * Math.asin(0x1);
      if (_0x133204 < 0x1) {
        return -0.5 * (Math.pow(0x2, 0xa * _0x2e774f) * Math.sin((_0x2e774f - _0x14a0aa) * (0x2 * Math.PI) / _0x1702a6));
      }
      return Math.pow(0x2, -0xa * _0x2e774f) * Math.sin((_0x2e774f - _0x14a0aa) * (0x2 * Math.PI) / _0x1702a6) * 0.5 + 0x1;
    case "OUTBOUNCE":
      var _0x133204 = _0x4cf16e / 0x1;
      if (_0x133204 < 0.36363636363636365) {
        return 7.5625 * _0x133204 * _0x133204;
      } else {
        if (_0x133204 < 0.7272727272727273) {
          var _0x49b849 = _0x133204 - 0.5454545454545454;
          return 7.5625 * _0x49b849 * _0x49b849 + 0.75;
        } else {
          if (_0x133204 < 0.9090909090909091) {
            var _0x49b849 = _0x133204 - 0.8181818181818182;
            return 7.5625 * _0x49b849 * _0x49b849 + 0.9375;
          } else {
            var _0x49b849 = _0x133204 - 0.9545454545454546;
            return 7.5625 * _0x49b849 * _0x49b849 + 0.984375;
          }
        }
      }
    case "INBOUNCE":
      var _0x106bde = 0x1 - VisuMZ.ApplyEasing(0x1 - _0x4cf16e, "outbounce");
      return _0x106bde;
    case "INOUTBOUNCE":
      if (_0x4cf16e < 0.5) {
        var _0x106bde = VisuMZ.ApplyEasing(_0x4cf16e * 0x2, "inbounce") * 0.5;
      } else {
        var _0x106bde = VisuMZ.ApplyEasing(_0x4cf16e * 0x2 - 0x1, "outbounce") * 0.5 + 0.5;
      }
      return _0x106bde;
    default:
      return _0x4cf16e;
  }
};
VisuMZ.GetParamIcon = function (_0x5d03a7) {
  _0x5d03a7 = String(_0x5d03a7).toUpperCase();
  const _0x5eb627 = VisuMZ.CoreEngine.Settings.Param;
  if (_0x5d03a7 === "MAXHP") {
    return _0x5eb627.IconParam0;
  }
  if (_0x5d03a7 === "MAXMP") {
    return _0x5eb627.IconParam1;
  }
  if (_0x5d03a7 === "ATK") {
    return _0x5eb627.IconParam2;
  }
  if (_0x5d03a7 === 'DEF') {
    return _0x5eb627.IconParam3;
  }
  if (_0x5d03a7 === "MAT") {
    return _0x5eb627.IconParam4;
  }
  if (_0x5d03a7 === "MDF") {
    return _0x5eb627.IconParam5;
  }
  if (_0x5d03a7 === 'AGI') {
    return _0x5eb627.IconParam6;
  }
  if (_0x5d03a7 === "LUK") {
    return _0x5eb627.IconParam7;
  }
  if (_0x5d03a7 === "HIT") {
    return _0x5eb627.IconXParam0;
  }
  if (_0x5d03a7 === 'EVA') {
    return _0x5eb627.IconXParam1;
  }
  if (_0x5d03a7 === 'CRI') {
    return _0x5eb627.IconXParam2;
  }
  if (_0x5d03a7 === "CEV") {
    return _0x5eb627.IconXParam3;
  }
  if (_0x5d03a7 === "MEV") {
    return _0x5eb627.IconXParam4;
  }
  if (_0x5d03a7 === 'MRF') {
    return _0x5eb627.IconXParam5;
  }
  if (_0x5d03a7 === "CNT") {
    return _0x5eb627.IconXParam6;
  }
  if (_0x5d03a7 === 'HRG') {
    return _0x5eb627.IconXParam7;
  }
  if (_0x5d03a7 === "MRG") {
    return _0x5eb627.IconXParam8;
  }
  if (_0x5d03a7 === "TRG") {
    return _0x5eb627.IconXParam9;
  }
  if (_0x5d03a7 === "TGR") {
    return _0x5eb627.IconSParam0;
  }
  if (_0x5d03a7 === "GRD") {
    return _0x5eb627.IconSParam1;
  }
  if (_0x5d03a7 === "REC") {
    return _0x5eb627.IconSParam2;
  }
  if (_0x5d03a7 === "PHA") {
    return _0x5eb627.IconSParam3;
  }
  if (_0x5d03a7 === 'MCR') {
    return _0x5eb627.IconSParam4;
  }
  if (_0x5d03a7 === "TCR") {
    return _0x5eb627.IconSParam5;
  }
  if (_0x5d03a7 === "PDR") {
    return _0x5eb627.IconSParam6;
  }
  if (_0x5d03a7 === "MDR") {
    return _0x5eb627.IconSParam7;
  }
  if (_0x5d03a7 === 'FDR') {
    return _0x5eb627.IconSParam8;
  }
  if (_0x5d03a7 === "EXR") {
    return _0x5eb627.IconSParam9;
  }
  if (VisuMZ.CoreEngine.CustomParamIcons[_0x5d03a7]) {
    return VisuMZ.CoreEngine.CustomParamIcons[_0x5d03a7] || 0x0;
  }
  return 0x0;
};
VisuMZ.ConvertNumberToString = function (_0x513048, _0x1e855a, _0x24db47) {
  if (_0x24db47 === undefined && _0x513048 % 0x1 === 0x0) {
    return _0x513048;
  }
  if (_0x24db47 !== undefined && ['MAXHP', "MAXMP", "ATK", "DEF", "MAT", "MDF", 'AGI', "LUK"].includes(String(_0x24db47).toUpperCase().trim())) {
    return _0x513048;
  }
  _0x1e855a = _0x1e855a || 0x0;
  if (VisuMZ.CoreEngine.CustomParamAbb[_0x24db47]) {
    return VisuMZ.CoreEngine.CustomParamType[_0x24db47] === "integer" ? _0x513048 : String((_0x513048 * 0x64).toFixed(_0x1e855a)) + '%';
  }
  return String((_0x513048 * 0x64).toFixed(_0x1e855a)) + '%';
};
VisuMZ.GroupDigits = function (_0x55996f) {
  _0x55996f = String(_0x55996f);
  if (!_0x55996f) {
    return _0x55996f;
  }
  if (typeof _0x55996f !== "string") {
    return _0x55996f;
  }
  const _0x3a7760 = VisuMZ.CoreEngine.Settings.QoL.DigitGroupingLocale || "en-US";
  const _0x2f7bc3 = {
    'maximumFractionDigits': 0x6
  };
  _0x55996f = _0x55996f.replace(/\[(.*?)\]/g, (_0x227061, _0x100ba7) => {
    return VisuMZ.PreserveNumbers(_0x100ba7, '[', ']');
  });
  _0x55996f = _0x55996f.replace(/<(.*?)>/g, (_0x3eae68, _0x407d08) => {
    return VisuMZ.PreserveNumbers(_0x407d08, '<', '>');
  });
  _0x55996f = _0x55996f.replace(/\{\{(.*?)\}\}/g, (_0x2da4cf, _0x56e24a) => {
    return VisuMZ.PreserveNumbers(_0x56e24a, '', '');
  });
  _0x55996f = _0x55996f.replace(/(\d+\.?\d*)/g, (_0xa28cd9, _0x2206ef) => {
    if (_0x2206ef[0x0] === '0') {
      return _0x2206ef;
    }
    if (_0x2206ef[_0x2206ef.length - 0x1] === '.') {
      return Number(_0x2206ef).toLocaleString(_0x3a7760, _0x2f7bc3) + '.';
    } else {
      return _0x2206ef[_0x2206ef.length - 0x1] === ',' ? Number(_0x2206ef).toLocaleString(_0x3a7760, _0x2f7bc3) + ',' : Number(_0x2206ef).toLocaleString(_0x3a7760, _0x2f7bc3);
    }
  });
  let _0x52cb77 = 0x3;
  while (_0x52cb77--) {
    _0x55996f = VisuMZ.RevertPreserveNumbers(_0x55996f);
  }
  return _0x55996f;
};
VisuMZ.PreserveNumbers = function (_0x5a4bd2, _0x498bce, _0x4d7875) {
  _0x5a4bd2 = _0x5a4bd2.replace(/(\d)/gi, (_0x285f93, _0x5ce765) => "PRESERVCONVERSION(%1)".format(Number(_0x5ce765)));
  return "%2%1%3".format(_0x5a4bd2, _0x498bce, _0x4d7875);
};
VisuMZ.RevertPreserveNumbers = function (_0x298785) {
  _0x298785 = _0x298785.replace(/PRESERVCONVERSION\((\d+)\)/gi, (_0x206c90, _0x5a184e) => Number(parseInt(_0x5a184e)));
  return _0x298785;
};
VisuMZ.openURL = function (_0x16fb94) {
  SoundManager.playOk();
  if (!Utils.isNwjs()) {} else {
    const _0x4cce98 = process.platform == "darwin" ? "open" : process.platform == "win32" ? 'start' : "xdg-open";
    require('child_process').exec(_0x4cce98 + " " + _0x16fb94);
  }
};
VisuMZ.createKeyJS = function (_0x1467f6, _0x9ee693) {
  if (!_0x1467f6) {
    return '';
  }
  const _0x195bef = _0x1467f6.baseId || _0x1467f6.id;
  let _0x237dda = '';
  if (_0x1467f6.initialLevel !== undefined && _0x1467f6.nickname !== undefined) {
    _0x237dda = "Actor-%1-%2".format(_0x195bef, _0x9ee693);
  }
  if (_0x1467f6.expParams !== undefined && _0x1467f6.learnings !== undefined) {
    _0x237dda = "Class-%1-%2".format(_0x195bef, _0x9ee693);
  }
  if (_0x1467f6.stypeId !== undefined && _0x1467f6.requiredWtypeId1 !== undefined) {
    _0x237dda = "Skill-%1-%2".format(_0x195bef, _0x9ee693);
  }
  if (_0x1467f6.itypeId !== undefined && _0x1467f6.consumable !== undefined) {
    _0x237dda = "Item-%1-%2".format(_0x195bef, _0x9ee693);
  }
  if (_0x1467f6.wtypeId !== undefined && _0x1467f6.etypeId === 0x1) {
    _0x237dda = "Weapon-%1-%2".format(_0x195bef, _0x9ee693);
  }
  if (_0x1467f6.atypeId !== undefined && _0x1467f6.etypeId > 0x1) {
    _0x237dda = "Armor-%1-%2".format(_0x195bef, _0x9ee693);
  }
  if (_0x1467f6.dropItems !== undefined && _0x1467f6.battlerHue !== undefined) {
    _0x237dda = "Enemy-%1-%2".format(_0x195bef, _0x9ee693);
  }
  if (_0x1467f6.autoRemovalTiming !== undefined && _0x1467f6.maxTurns !== undefined) {
    _0x237dda = "State-%1-%2".format(_0x195bef, _0x9ee693);
  }
  return _0x237dda;
};
Game_Picture.prototype.anchor = function () {
  return this._anchor;
};
VisuMZ.CoreEngine.Game_Picture_initBasic = Game_Picture.prototype.initBasic;
Game_Picture.prototype.initBasic = function () {
  VisuMZ.CoreEngine.Game_Picture_initBasic.call(this);
  this._anchor = {
    'x': 0x0,
    'y': 0x0
  };
  this._targetAnchor = {
    'x': 0x0,
    'y': 0x0
  };
};
VisuMZ.CoreEngine.Game_Picture_updateMove = Game_Picture.prototype.updateMove;
Game_Picture.prototype.updateMove = function () {
  this.updateAnchor();
  const _0x5ad659 = this._duration;
  VisuMZ.CoreEngine.Game_Picture_updateMove.call(this);
  if (_0x5ad659 > 0x0 && this._duration <= 0x0) {
    this._x = this._targetX;
    this._y = this._targetY;
    this._scaleX = this._targetScaleX;
    this._scaleY = this._targetScaleY;
    this._opacity = this._targetOpacity;
    if (this._anchor) {
      this._anchor.x = this._targetAnchor.x;
      this._anchor.y = this._targetAnchor.y;
    }
  }
};
VisuMZ.CoreEngine.Game_Picture_show = Game_Picture.prototype.show;
Game_Picture.prototype.show = function (_0x5cc7f2, _0x2c6f4e, _0xd25f5f, _0x494723, _0x2074b8, _0x33f0d1, _0x5da273, _0x59fadd) {
  VisuMZ.CoreEngine.Game_Picture_show.call(this, _0x5cc7f2, _0x2c6f4e, _0xd25f5f, _0x494723, _0x2074b8, _0x33f0d1, _0x5da273, _0x59fadd);
  this.setAnchor([{
    'x': 0x0,
    'y': 0x0
  }, {
    'x': 0.5,
    'y': 0.5
  }][_0x2c6f4e] || {
    'x': 0x0,
    'y': 0x0
  });
};
VisuMZ.CoreEngine.Game_Picture_move = Game_Picture.prototype.move;
Game_Picture.prototype.move = function (_0x452eb1, _0xcdf269, _0x49cf3a, _0x38b9fb, _0x49bb32, _0x548008, _0x3d7916, _0x2609b5, _0x35c10a) {
  VisuMZ.CoreEngine.Game_Picture_move.call(this, _0x452eb1, _0xcdf269, _0x49cf3a, _0x38b9fb, _0x49bb32, _0x548008, _0x3d7916, _0x2609b5, _0x35c10a);
  this.setTargetAnchor([{
    'x': 0x0,
    'y': 0x0
  }, {
    'x': 0.5,
    'y': 0.5
  }][_0x452eb1] || {
    'x': 0x0,
    'y': 0x0
  });
};
Game_Picture.prototype.updateAnchor = function () {
  if (this._duration > 0x0) {
    this._anchor.x = this.applyEasing(this._anchor.x, this._targetAnchor.x);
    this._anchor.y = this.applyEasing(this._anchor.y, this._targetAnchor.y);
  }
};
Game_Picture.prototype.setAnchor = function (_0x4e63af) {
  this._anchor = _0x4e63af;
  this._targetAnchor = JsonEx.makeDeepCopy(this._anchor);
};
Game_Picture.prototype.setTargetAnchor = function (_0x319619) {
  this._targetAnchor = _0x319619;
};
VisuMZ.CoreEngine.Sprite_Picture_updateOrigin = Sprite_Picture.prototype.updateOrigin;
Sprite_Picture.prototype.updateOrigin = function () {
  const _0xf1204d = this.picture();
  if (!_0xf1204d.anchor()) {
    VisuMZ.CoreEngine.Sprite_Picture_updateOrigin.call(this);
  } else {
    this.anchor.x = _0xf1204d.anchor().x;
    this.anchor.y = _0xf1204d.anchor().y;
  }
};
Game_Action.prototype.setEnemyAction = function (_0x15e24f) {
  if (_0x15e24f) {
    const _0x1bb579 = _0x15e24f.skillId;
    if (_0x1bb579 === 0x1 && this.subject().attackSkillId() !== 0x1) {
      this.setAttack();
    } else if (_0x1bb579 === 0x2 && this.subject().guardSkillId() !== 0x2) {
      this.setGuard();
    } else {
      this.setSkill(_0x1bb579);
    }
  } else {
    this.clear();
  }
};
Game_Actor.prototype.usableSkills = function () {
  return this.skills().filter(_0x5dc9bc => this.canUse(_0x5dc9bc) && this.skillTypes().includes(_0x5dc9bc.stypeId));
};
Window_Base.prototype.createDimmerSprite = function () {
  this._dimmerSprite = new Sprite();
  this._dimmerSprite.bitmap = new Bitmap(0x0, 0x0);
  this._dimmerSprite.x = 0x0;
  this.addChildToBack(this._dimmerSprite);
};
Window_Base.prototype.refreshDimmerBitmap = function () {
  if (this._dimmerSprite) {
    const _0x78775e = this._dimmerSprite.bitmap;
    const _0x2c20b5 = this.width;
    const _0x3b0ce3 = this.height;
    const _0xfa78ed = this.padding;
    const _0x3575e7 = ColorManager.dimColor1();
    const _0x2bb2b2 = ColorManager.dimColor2();
    _0x78775e.resize(_0x2c20b5, _0x3b0ce3);
    _0x78775e.gradientFillRect(0x0, 0x0, _0x2c20b5, _0xfa78ed, _0x2bb2b2, _0x3575e7, true);
    _0x78775e.fillRect(0x0, _0xfa78ed, _0x2c20b5, _0x3b0ce3 - _0xfa78ed * 0x2, _0x3575e7);
    _0x78775e.gradientFillRect(0x0, _0x3b0ce3 - _0xfa78ed, _0x2c20b5, _0xfa78ed, _0x3575e7, _0x2bb2b2, true);
    this._dimmerSprite.setFrame(0x0, 0x0, _0x2c20b5, _0x3b0ce3);
  }
};
Game_Actor.prototype.makeAutoBattleActions = function () {
  for (let _0x3cb2e0 = 0x0; _0x3cb2e0 < this.numActions(); _0x3cb2e0++) {
    const _0x2b98a2 = this.makeActionList();
    let _0x5cc26e = Number.MIN_SAFE_INTEGER;
    this.setAction(_0x3cb2e0, _0x2b98a2[0x0]);
    for (const _0x2fb762 of _0x2b98a2) {
      const _0x24b7f5 = _0x2fb762.evaluate();
      if (_0x24b7f5 > _0x5cc26e) {
        _0x5cc26e = _0x24b7f5;
        this.setAction(_0x3cb2e0, _0x2fb762);
      }
    }
  }
  this.setActionState('waiting');
};
Window_BattleItem.prototype.isEnabled = function (_0x5ce737) {
  return BattleManager.actor() ? BattleManager.actor().canUse(_0x5ce737) : Window_ItemList.prototype.isEnabled.call(this, _0x5ce737);
};
VisuMZ.CoreEngine.Scene_Map_createSpritesetFix = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function () {
  VisuMZ.CoreEngine.Scene_Map_createSpritesetFix.call(this);
  const _0x26c128 = this._spriteset._timerSprite;
  if (_0x26c128) {
    this.addChild(_0x26c128);
  }
};
VisuMZ.CoreEngine.Scene_Battle_createSpritesetFix = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function () {
  VisuMZ.CoreEngine.Scene_Battle_createSpritesetFix.call(this);
  const _0x5a8070 = this._spriteset._timerSprite;
  if (_0x5a8070) {
    this.addChild(_0x5a8070);
  }
};
Sprite_Actor.prototype.update = function () {
  Sprite_Battler.prototype.update.call(this);
  this.updateShadow();
  if (this._actor) {
    this.updateMotion();
  } else if (this._battlerName !== '') {
    this._battlerName = '';
  }
};
Window.prototype._refreshArrows = function () {
  const _0x247d81 = this._width;
  const _0x5ad6e7 = this._height;
  this._downArrowSprite.bitmap = this._windowskin;
  this._downArrowSprite.anchor.x = 0.5;
  this._downArrowSprite.anchor.y = 0.5;
  this._downArrowSprite.setFrame(132, 60, 0x18, 12);
  this._downArrowSprite.move(Math.round(_0x247d81 / 0x2), Math.round(_0x5ad6e7 - 12));
  this._upArrowSprite.bitmap = this._windowskin;
  this._upArrowSprite.anchor.x = 0.5;
  this._upArrowSprite.anchor.y = 0.5;
  this._upArrowSprite.setFrame(132, 24, 0x18, 12);
  this._upArrowSprite.move(Math.round(_0x247d81 / 0x2), Math.round(12));
};
Window.prototype._refreshPauseSign = function () {
  this._pauseSignSprite.bitmap = this._windowskin;
  this._pauseSignSprite.anchor.x = 0.5;
  this._pauseSignSprite.anchor.y = 0x1;
  this._pauseSignSprite.move(Math.round(this._width / 0x2), this._height);
  this._pauseSignSprite.setFrame(0x90, 0x60, 0x18, 0x18);
  this._pauseSignSprite.alpha = 0xff;
};
Window.prototype._updateFilterArea = function () {
  const _0x97df53 = this._clientArea.worldTransform.apply(new Point(0x0, 0x0));
  const _0x35ba3c = this._clientArea.filterArea;
  _0x35ba3c.x = _0x97df53.x + this.origin.x;
  _0x35ba3c.y = _0x97df53.y + this.origin.y;
  _0x35ba3c.width = Math.ceil(this.innerWidth * this.scale.x);
  _0x35ba3c.height = Math.ceil(this.innerHeight * this.scale.y);
};
VisuMZ.CoreEngine.Window_refreshBack = Window.prototype._refreshBack;
Window.prototype._refreshBack = function () {
  const _0x1dcd1c = VisuMZ.CoreEngine.Settings.Window.CorrectSkinBleeding ?? true;
  if (!_0x1dcd1c) {
    return VisuMZ.CoreEngine.Window_refreshBack.call(this);
  }
  const _0x380077 = this._margin;
  const _0x57f00b = Math.max(0x0, this._width - _0x380077 * 0x2);
  const _0x5a2b6f = Math.max(0x0, this._height - _0x380077 * 0x2);
  const _0x1795c2 = this._backSprite;
  const _0x5b5a03 = _0x1795c2.children[0x0];
  _0x1795c2.bitmap = this._windowskin;
  _0x1795c2.setFrame(0x0, 0x0, 0x60, 0x60);
  _0x1795c2.move(_0x380077, _0x380077);
  _0x1795c2.scale.x = _0x57f00b / 0x60;
  _0x1795c2.scale.y = _0x5a2b6f / 0x60;
  _0x5b5a03.bitmap = this._windowskin;
  _0x5b5a03.setFrame(0x0, 0x60, 0x60, 0x60);
  _0x5b5a03.move(0x0, 0x0, _0x57f00b, _0x5a2b6f);
  _0x5b5a03.scale.x = 0x1 / _0x1795c2.scale.x;
  _0x5b5a03.scale.y = 0x1 / _0x1795c2.scale.y;
  _0x1795c2.setColorTone(this._colorTone);
};
Game_Temp.prototype.sceneTerminationClearEffects = function () {
  this._animationQueue = [];
  this._fauxAnimationQueue = [];
  this._pointAnimationQueue = [];
  this._balloonQueue = [];
};
VisuMZ.CoreEngine.Scene_Base_terminateAnimationClearBugFix = Scene_Base.prototype.terminate;
Scene_Base.prototype.terminate = function () {
  if ($gameTemp) {
    $gameTemp.sceneTerminationClearEffects();
  }
  VisuMZ.CoreEngine.Scene_Base_terminateAnimationClearBugFix.call(this);
};
Bitmap.prototype.measureTextWidthNoRounding = function (_0x594c95) {
  const _0x476d61 = this.context;
  _0x476d61.save();
  _0x476d61.font = this._makeFontNameText();
  const _0x5e6c92 = _0x476d61.measureText(_0x594c95).width;
  _0x476d61.restore();
  return _0x5e6c92;
};
Window_Message.prototype.textWidth = function (_0x243492) {
  return this.useFontWidthFix() ? this.contents.measureTextWidthNoRounding(_0x243492) : Window_Base.prototype.textWidth.call(this, _0x243492);
};
Window_Message.prototype.useFontWidthFix = function () {
  return VisuMZ.CoreEngine.Settings.QoL.FontWidthFix ?? true;
};
VisuMZ.CoreEngine.Game_Action_numRepeats = Game_Action.prototype.numRepeats;
Game_Action.prototype.numRepeats = function () {
  return this.item() ? VisuMZ.CoreEngine.Game_Action_numRepeats.call(this) : 0x0;
};
VisuMZ.CoreEngine.Game_Action_setAttack = Game_Action.prototype.setAttack;
Game_Action.prototype.setAttack = function () {
  if (this.subject() && this.subject().canAttack()) {
    VisuMZ.CoreEngine.Game_Action_setAttack.call(this);
  } else {
    this.clear();
  }
};
Sprite_Name.prototype.bitmapHeight = function () {
  return 0x24;
};
Sprite_Name.prototype.redraw = function () {
  const _0x2f3888 = this.name();
  const _0x39d287 = this.bitmapWidth();
  const _0xa4f47b = this.bitmapHeight();
  this.setupFont();
  this.bitmap.clear();
  this.bitmap.drawTextTopAligned(_0x2f3888, 0x4, 0x0, _0x39d287 - 0xa, _0xa4f47b, 'left');
};
Bitmap.prototype.drawTextTopAligned = function (_0x3bdac6, _0x23d9b7, _0xd0e9f8, _0xd08c4b, _0x2ac194, _0x5d8b0a) {
  const _0x330011 = this.context;
  const _0x16a8c0 = _0x330011.globalAlpha;
  _0xd08c4b = _0xd08c4b || 0xffffffff;
  let _0xb89a78 = _0x23d9b7;
  let _0x3fdbd1 = Math.round(_0xd0e9f8 + 12 + this.fontSize * 0.35);
  if (_0x5d8b0a === "center") {
    _0xb89a78 += _0xd08c4b / 0x2;
  }
  if (_0x5d8b0a === 'right') {
    _0xb89a78 += _0xd08c4b;
  }
  _0x330011.save();
  _0x330011.font = this._makeFontNameText();
  _0x330011.textAlign = _0x5d8b0a;
  _0x330011.textBaseline = "alphabetic";
  _0x330011.globalAlpha = 0x1;
  this._drawTextOutline(_0x3bdac6, _0xb89a78, _0x3fdbd1, _0xd08c4b);
  _0x330011.globalAlpha = _0x16a8c0;
  this._drawTextBody(_0x3bdac6, _0xb89a78, _0x3fdbd1, _0xd08c4b);
  _0x330011.restore();
  this._baseTexture.update();
};
VisuMZ.CoreEngine.BattleManager_checkSubstitute = BattleManager.checkSubstitute;
BattleManager.checkSubstitute = function (_0xe26e0f) {
  if (this._action.isForFriend()) {
    return false;
  }
  return VisuMZ.CoreEngine.BattleManager_checkSubstitute.call(this, _0xe26e0f);
};
BattleManager.endAction = function () {
  if (this._subject) {
    this._logWindow.endAction(this._subject);
  }
  this._phase = "turn";
  if (this._subject && this._subject.numActions() === 0x0) {
    this.endBattlerActions(this._subject);
    this._subject = null;
  }
};
Bitmap.prototype._startLoading = function () {
  this._image = new Image();
  this._image.onload = this._onLoad.bind(this);
  this._image.onerror = this._onError.bind(this);
  this._destroyCanvas();
  this._loadingState = "loading";
  if (Utils.hasEncryptedImages()) {
    this._startDecrypting();
  } else {
    this._image.src = this._url;
    if (false && this._image.width > 0x0) {
      this._image.onload = null;
      this._onLoad();
    }
  }
};
Scene_Skill.prototype.onActorChange = function () {
  Scene_MenuBase.prototype.onActorChange.call(this);
  this.refreshActor();
  this._itemWindow.deactivate();
  this._itemWindow.deselect();
  this._skillTypeWindow.activate();
};
Scene_Skill.prototype.arePageButtonsEnabled = function () {
  return this._skillTypeWindow && this._skillTypeWindow.active;
};
Game_Map.prototype.checkPassage = function (_0x15cafb, _0x2aa0ad, _0x4da274) {
  const _0x199fe0 = this.tilesetFlags();
  const _0x2731b2 = this.allTiles(_0x15cafb, _0x2aa0ad);
  for (const _0x43b66b of _0x2731b2) {
    const _0x24a6a3 = _0x199fe0[_0x43b66b];
    if (_0x24a6a3 === undefined || _0x24a6a3 === null) {
      if ($gameTemp.isPlaytest() && !DataManager.isEventTest()) {
        let _0x224fee = "Current tileset has incomplete flag data.\n";
        _0x224fee += "Click \"Copy Page\" from another tileset's pages\n";
        _0x224fee += "and add it onto this one.";
        if (this.showIncompleteTilesetError()) {
          alert(_0x224fee);
          SceneManager.exit();
        } else {
          console.log(_0x224fee);
          if (!$gameTemp._showDevTools) {
            $gameTemp._showDevTools = true;
            SceneManager.showDevTools();
          }
        }
      }
    }
    if ((_0x24a6a3 & 0x10) !== 0x0) {
      continue;
    }
    if ((_0x24a6a3 & _0x4da274) === 0x0) {
      return true;
    }
    if ((_0x24a6a3 & _0x4da274) === _0x4da274) {
      return false;
    }
  }
  return false;
};
Game_Map.prototype.showIncompleteTilesetError = function () {
  if (Imported.VisuMZ_3_EventChainReact) {
    return true;
  }
  if (Imported.VisuMZ_4_UniqueTileEffects) {
    return true;
  }
  return false;
};
Sprite_Animation.prototype.saveViewport = function (_0xd07f97) {
  if (!this._originalViewport) {
    this._originalViewport = _0xd07f97.gl.getParameter(_0xd07f97.gl.VIEWPORT);
  }
};
VisuMZ.CoreEngine.Scene_Map_shouldAutosave = Scene_Map.prototype.shouldAutosave;
Scene_Map.prototype.shouldAutosave = function () {
  const _0x49c753 = SceneManager._previousClass.name;
  if (["Scene_Title", "Scene_Load", 'Scene_TitleTransition', "Scene_SingleLoadTransition"].includes(_0x49c753)) {
    return false;
  }
  return VisuMZ.CoreEngine.Scene_Map_shouldAutosave.call(this);
};