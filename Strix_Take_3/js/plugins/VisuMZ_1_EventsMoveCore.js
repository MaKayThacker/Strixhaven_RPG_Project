//=============================================================================
// VisuStella MZ - Events & Movement Core
// VisuMZ_1_EventsMoveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_EventsMoveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventsMoveCore = VisuMZ.EventsMoveCore || {};
VisuMZ.EventsMoveCore.version = 1.60;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.60] [EventsMoveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Events_and_Movement_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Events & Movement Core plugin adds a lot of new functionality in terms
 * of event flexibility and movement options to RPG Maker MZ. These range from
 * adding in old capabilities from previous iterations of RPG Maker to more
 * mainstream techniques found in other game engines. Movement options are also
 * expanded to support 8-directional movement as well as sprite sheets provided
 * that the VisuStella 8 format is used.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Event commands expanded upon to include old and new functions.
 * * Event templates for Copying Events, Morphing Events, and Spawning Events.
 * * 8-directional movement option available and sprite sheet support.
 * * Aesthetics for tilting the sprite when dashing and having shadows below.
 * * Pathfinding support for event movement through custom Move Route commands.
 * * Advanced switches and variable support to run code automatically.
 * * Turn regular Switches and Variables into Self Switches and Self Variables.
 * * Put labels and icons over events.
 * * Allow numerous ways to trigger events, through clicking, proximity, or by
 *   usage of Regions.
 * * Change the hitbox sizes of events to larger in any direction.
 * * Synchronize event movement options to move when player/other events move.
 * * The ability for the player to turn in place.
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
 * Features: Advanced Switches and Variables
 * ============================================================================
 *
 * Switches and variables can now run JavaScript code and return values
 * instantly. While at first glance, this may seem no different from using
 * the Control Variables event command's Script option, this can be used to
 * instantly set up Switch and/or Variable conditions for Parallel Common
 * Events, Event Page Conditions, Enemy Skill Conditions, and Troop Page
 * Conditions instantly without needing to make an event command to do so.
 *
 * ---
 *
 * <JS> code </JS>
 * - Used for: Switch and Variable names
 * - Replace 'code' with JavaScript code on what value to return.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 *
 * ============================================================================
 * Features: Self Switches and Variables
 * ============================================================================
 *
 * RPG Maker MZ by default has 4 Self Switches: A, B, C, D. For some types of
 * games, this isn't enough. This plugin gives you the ability convert regular
 * Switches into Self Switches so you could have more.
 *
 * Self Variables also do not exist in RPG Maker MZ by default. Just like with
 * Switches, you can turn regular Variables into Self Variables.
 *
 * ---
 *
 * <Self>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Self Switch/Variable.
 *
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Self> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that event.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Self Switch or Self Variable's
 * value, you can use the following script calls.
 * 
 *   ---
 * 
 *   Get Self Switch Values:
 * 
 *   getSelfSwitchValue(mapID, eventID, switchID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - This will return the true/false value of the Self Switch.
 *   - Example: getSelfSwitchValue(12, 34, 56)
 *   - Example: getSelfSwitchValue(12, 34, 'B')
 * 
 *   ---
 * 
 *   Get Self Variable Values:
 * 
 *   getSelfVariableValue(mapID, eventID, variableID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - This will return whatever stored value is found in the Self Variable.
 *   - Example: getSelfVariableValue(12, 34, 56)
 * 
 *   ---
 * 
 *   Set Self Switch Values:
 * 
 *   setSelfSwitchValue(mapID, eventID, switchID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - This will change the Self Switch's value to true/false.
 *     - Example: setSelfSwitchValue(12, 34, 56, false)
 *     - Example: setSelfSwitchValue(12, 34, 'B', true)
 * 
 *   ---
 * 
 *   Set Self Variable Values:
 * 
 *   setSelfVariableValue(mapID, eventID, variableID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - Replace 'value' with the value you want to set the Self Variable to.
 *   - Example: setSelfVariableValue(12, 34, 56, 88888)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Map Switches and Variables
 * ============================================================================
 * 
 * Similar to Self Switches and Self Variables, Map Switches and Map Variables
 * are switches and variables that retain data based on the map the player is
 * currently located in. In other words, they're self switches and variables
 * but for maps instead!
 * 
 * These features do not exist in RPG Maker MZ by default. Just like with the
 * Self Switches and Self Variables, you can turn regular Switches or Variables
 * into Map Switches and Map Variables using the following name tag:
 * 
 * ---
 * 
 * <Map>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Map Switch/Variable.
 * 
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Map> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that map.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Map Switch or Map Variable's
 * value, you can use the following script calls:
 * 
 *   ---
 * 
 *   Get Map Switch Values:
 * 
 *   getMapSwitchValue(mapID, switchID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Example: getMapSwitchValue(4, 20)
 * 
 *   ---
 * 
 *   Get Variable Switch Values:
 * 
 *   getMapVariableValue(mapID, variableID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Example: getMapVariableValue(6, 9)
 * 
 *   ---
 * 
 *   Set Map Switch Values:
 * 
 *   setMapSwitchValue(mapID, switchID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - Example: setMapSwitchValue(4, 20, true)
 *   - Example: setMapSwitchValue(6, 9, false)
 * 
 *   ---
 * 
 *   Set Map Variable Values:
 * 
 *   setMapVariableValue(mapID, variableID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Replace 'value' with the value you want to set the Map Variable to.
 *   - Example: setMapVariableValue(6, 9, 420)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Character Sprite Filename Tags
 * ============================================================================
 * 
 * For the files located inside of your project's /img/characters/ folder, if
 * the filenames themselves have specific "tags" in them, special properties
 * will be applied to them. These tags can be combined together with a few
 * exceptions.
 * 
 * Some of these are new to VisuStella MZ, while others are default to MZ.
 * 
 * ---
 * 
 *   !filename.png
 *   - Tag: !
 *   - Causes this character's sprite to align with the tile grid instead of
 *     being lifted a few pixels higher.
 *   - This is primarily used for things like doors, chests, and floor plates.
 *   - Default to RPG Maker MZ.
 * 
 * ---
 * 
 *   $filename.png
 *   - Tag: $
 *   - Causes this character's sprite to use the "big character" format.
 *   - Primarily used for sprites like the big monsters and such which only
 *     have 3x4 cells as opposed to 12x8 cells that regular sprite sheets have.
 *   - Cannot be combined with the [VS8] tag.
 *   - Default to RPG Maker MZ.
 * 
 * ---
 * 
 *   filename[Invisible].png
 *   - Tag: [Invisible] or [Inv]
 *   - This character's sprite will become invisible on the map screen in-game
 *     while almost everything else about it is visible.
 *   - This is used for those who wish to use sprite labels for things such as
 *     autorun and parallel events.
 * 
 * ---
 * 
 *   filename[VS8].png
 *   - Tag: [VS8]
 *   - Converts this sprite into a VisuStella-Style 8-Direction Sprite Sheet.
 *   - Refer to the section below.
 *   - Cannot be combined with the $ tag.
 * 
 * ---
 *
 * ============================================================================
 * Features: VisuStella-Style 8-Directional Sprite Sheets
 * ============================================================================
 *
 * This plugin provides support for the VisuStella-Style 8-Directional Sprite
 * Sheets, also know as VS8. VS8 sprite sheets offer support for walking
 * frames, dashing frames, carrying frames, and emotes.
 *
 * ---
 *
 * To designate a sprite sheet as VS8, simply add [VS8] to the filename.
 * Something like Actor1.png would become Actor1_[VS8].png.
 *
 * ---
 *
 * VS8 sprites are formatted as such. Each block below is a set of 3 frames.
 *
 * Walk Down    Walk DL     Dash Down   Dash DL
 * Walk Left    Walk DR     Dash Left   Dash DR
 * Walk Right   Walk UL     Dash Right  Dash UL
 * Walk Up      Walk UR     Dash Up     Dash UR
 *
 * Carry Down   Carry DL    Ladder      Emotes 3
 * Carry Left   Carry DR    Rope        Emotes 4
 * Carry Right  Carry UL    Emotes 1    Emotes 5
 * Carry Up     Carry UR    Emotes 2    Emotes 6
 *
 * ---
 *
 * Here are how each of the emote sets are grouped from left to right.
 *
 * Emotes 1: Item, Hmph, Victory
 * Emotes 2: Hurt, Kneel, Collapse
 * Emotes 3: !, ?, Music Note
 * Emotes 4: Heart, Anger, Sweat
 * Emotes 5: Cobweb, ..., Light Bulb
 * Emotes 6: Sleep0, Sleep1, Sleep2
 *
 * ---
 *
 * ============================================================================
 * Features: Weighted Random Movement
 * ============================================================================
 * 
 * When creating events to place on the map, you can determine what type of
 * autonomous movement the event will have. When selecting "Random", the event
 * will move randomly across the map.
 * 
 * However, with the way "Random" movement works with the RPG Maker MZ default
 * code, the event is more likely to hit a wall and then hug the said wall as
 * it maps laps around the map's outer borders making it feel very unnatural
 * for any player who's been on the map long enough.
 * 
 * This is where "Weighted Random Movement" comes in. It changes up the random
 * movement behavior to function where the farther the event is, the more
 * likely the event is to step back towards its "home" position (aka where it
 * spawned upon loading the map). This is so that a housewife NPC doesn't
 * suddenly wander off into the middle of an army's training grounds on the
 * same town map.
 * 
 * The event will stay closer to its home value depending on how high the
 * weight's value is. There are a number of ways to adjust the weighted value.
 * 
 * ---
 * 
 * Plugin Parameters > Movement > Event Movement > Random Move Weight
 * 
 * This Plugin Parameter setting allows you to set the default weight for all
 * events with "Random" autonomous movement. It is set at a default value of
 * 0.10 to give the event an understandable degree of freedom.
 * 
 * Lower numbers give events more freedom to move. Larger numbers will make the
 * events stick closer to home.
 * 
 * Change this value to 0 to disable it.
 * 
 * ---
 * 
 * You can customize this individually per event by using Notetags and/or
 * Comment Tags for the events.
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * ============================================================================
 * Notetags and Comment Tags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * Some of these are comment tags. Comment tags are used for events to mark and
 * affect individual event pages rather than the whole event.
 *
 * === Map Notetags ===
 *
 * The following notetags are used for maps only. While some of these options
 * are also available in the Plugin Parameters, some of these notetags extend
 * usage to specific maps marked by these notetags as well.
 *
 * ---
 *
 * <Diagonal Movement: On>
 * <Diagonal Movement: Off>
 *
 * - Used for: Map Notetags
 * - Turns on/off diagonal movement for those maps.
 * - If notetag isn't present, use Plugin Parameter setting.
 *
 * ---
 *
 * <type Allow Region: x>
 * <type Allow Region: x, x, x>
 *
 * <type Forbid Region: x>
 * <type Forbid Region: x, x, x>
 *
 * <type Dock Region: x>
 * <type Dock Region: x, x, x>
 *
 * - Used for: Map Notetags
 * - Replace 'type' with 'All', 'Walk', 'Player', 'Event', 'Vehicle', 'Boat',
 *   'Ship', or 'Airship'.
 * - 'Allow' notetag variants allow that type to pass through them no matter
 *   what other passability settings are in place.
 * - 'Forbid' notetag variants forbid that type from passing through at all.
 * - 'Dock' notetag variants allow vehicles to dock there. Boats and ships must
 *   face the region direction while airships must land directly on top.
 *
 * ---
 * 
 * <Map Load Common Event: x>
 * <Map Load Common Events: x, x, x>
 * 
 * - Used for: Map Notetags
 * - When this map is loaded, run the specified Common Events once available.
 *   - Does NOT trigger if you transfer to a different part of the same map.
 * - Replace 'x' with a number representing the ID of the Common Event you wish
 *   to reserve and run once ready.
 * 
 * ---
 *
 * <Save Event Locations>
 *
 * - Used for: Maps Notetags
 * - Saves the locations of all events on the map so that when you return to
 *   that map at a later point, the events will be in the position they were
 *   last in.
 *
 * ---
 * 
 * <Hide Player>
 * <Show Player>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player sprite. This is so you don't need to
 *   manually turn the setting on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - If the player sprite is hidden, so are the player's followers.
 * - If the player sprite is visible, the player's followers will still depend
 *   on their settings.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * <Hide Followers>
 * <Show Followers>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player's followers. This is so you don't
 *   need to manually turn them on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * === Page Comment Tags ===
 * 
 * The following comment tags are to be put inside of the pages of events,
 * troops, and common events for them to work!
 * 
 * ---
 * 
 * <Page Conditions>
 *   conditions
 *   conditions
 *   conditions
 * </Page Conditions>
 * 
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - This allows you to create custom page conditions that utilize the
 *   Conditional Branch event command to see if the additional page conditions
 *   are met.
 * 
 * ---
 * 
 * <Conditions Met>
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - If used between the <Page Conditions> and </Page Conditions> comment tag,
 *   upon reaching this part of event command list, the custom page conditions
 *   will be considered met.
 * 
 * ---
 * 
 * Example:
 * 
 * ◆Comment：<Page Conditions>
 * ◆If：Reid has equipped Potion Sword
 *   ◆Comment：If Reid has equipped the Potion Sword
 * ：       ：<Condition Met>
 *   ◆
 * ：End
 * ◆Comment：</Page Conditions>
 * 
 * If Reid has the "Potion Sword" weapon equipped, then the additional custom
 * page conditions are met and the event page will be present/active.
 * 
 * If this is a troop condition, the troop page event will activate.
 * 
 * If this is a common event, there will be a parallel common event active.
 * 
 * ---
 *
 * === Event and Event Page Notetags ===
 *
 * The following notetags have comment tag variants (with a few exceptions).
 * If a notetag is used for an event, it will affect the event constantly.
 * If a comment tag is used, it will only affect the page the comment tag is
 * on and only that page.
 *
 * ---
 *
 * <Activation Region: x>
 * <Activation Regions: x,x,x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   standing within a tile marked by a designated region.
 * - Replace 'x' with the regions you wish to remotely activate this event in.
 *   - Action Button: Player must press OK while being in the region.
 *   - Player/Event Touch: Player must step onto the region.
 *   - Autorun/Parallel: Player be in the region.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Activation Square: x>
 * <Activation Circle: x>
 * <Activation Delta: x>
 * <Activation Row: x>
 * <Activation Column: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   within range of its activation type.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Always Update Movement>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Events normally have to be within screen range for them to update their
 *   self movement. If this tag is present, the event is always updating.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Click Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to activate upon being clicked on with the mouse.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Copy Event: Map x, Event y>
 * <Copy Event: x, y>
 *
 * <Copy Event: template>
 *
 * - Used for: Event Notetags ONLY
 * - Makes this event copy all of the event settings from a different event
 *   that can be found on a different map (as long as that map is registered
 *   inside of Plugin Parameters => Event Template Settings => Preloaded Maps).
 * - Replace 'x' with a number representing the copied event's Map ID.
 *   - If '0' is used for the Map ID, reference the current map.
 * - Replace 'y' with a number representing the copied event's Event ID.
 * - For the 'template' variant, replace 'template' with the name of the
 *   template made in Plugin Parameters => Event Template Settings =>
 *   Event Template List.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 *
 * ---
 * 
 * <Custom Z: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number value to determine the event sprite's Z value
 *   relative to the tilemap.
 * - For reference from rmmz_core.js:
 *   - 0 : Lower tiles
 *   - 1 : Lower characters
 *   - 3 : Normal characters
 *   - 4 : Upper tiles
 *   - 5 : Upper characters
 *   - 6 : Airship shadow
 *   - 7 : Balloon
 *   - 8 : Animation
 *   - 9 : Destination
 * - You can use numbers below 0 and above 9.
 *   - Values under 0 go below the tilemap.
 *   - Values above 9 go above everything else on the tilemap.
 *   - These values do NOT go below or above other screen objects that are
 *     NOT attached to the tilemap layer such as parallaxes or weather or
 *     windows because that's simply not how z-axis work with sprite layers.
 * 
 * ---
 * 
 * <Encounter Half Square: x>
 * <Encounter Half Circle: x>
 * <Encounter Half Delta: x>
 * <Encounter Half Row: x>
 * <Encounter Half Column: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If the player is within the 'x' area effect of this event, the random
 *   encounter rate will be halved.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * Script Call Check:
 * 
 *   $isTileEncounterHalf(x, y)
 * 
 * - This can be used to check if a certain map tile (x, y) has an encounter
 *   rate halving effect on it.
 * - Returns a boolean (true or false) when used.
 * 
 * ---
 * 
 * <Encounter None Square: x>
 * <Encounter None Circle: x>
 * <Encounter None Delta: x>
 * <Encounter None Row: x>
 * <Encounter None Column: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If the player is within the 'x' area effect of this event, the random
 *   encounter rate will be suppressed completely.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * Script Call Check:
 * 
 *   $isTileEncounterNone(x, y)
 * 
 * - This can be used to check if a certain map tile (x, y) has an encounter
 *   rate suppression effect on it.
 * - Returns a boolean (true or false) when used.
 * 
 * ---
 * 
 * <Erase if Encounter Half>
 * <Erase if Encounter None>
 * 
 * - Used for: Event Notetags ONLY
 * - Automatically erase this event if the player's party has an encounter half
 *   or encounter none effect, or if the event has spawned in an encounter half
 *   or encounter none area.
 * - This check only occurs in two situations: when the map is first loaded
 *   after being teleported into or when the player leaves a menu and returns
 *   back to the map.
 * - Events that have been erased due to this effect will NOT return even if
 *   the encounter half/none effect is removed while the player is still on the
 *   map. The event will return if the player exits the map and comes back.
 * 
 * ---
 * 
 * <Exit Reset Self Data>
 * 
 * - Used for: Event Notetags ONLY
 * - When the player leaves the current map, all Self Switches and Self
 *   Variables related to this event will be reset.
 * 
 * ---
 *
 * <Hitbox Left: x>
 * <Hitbox Right: x>
 * <Hitbox Up: x>
 * <Hitbox Down: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number to extend the hitbox of the event by that many
 *   tiles towards the listed direction.
 * - Use multiples of this notetag to extend them to different directions.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with the Icon ID you wish to put above this event.
 * - This will not override any Icons designated to the ID through a
 *   Plugin Command.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon Buffer X: +x>
 * <Icon Buffer X: -x>
 *
 * <Icon Buffer Y: +x>
 * <Icon Buffer Y: -x>
 *
 * <Icon Buffer: +x, +y>
 * <Icon Buffer: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the icon on the envent by buffers.
 * - Replace 'x' and 'y' with the values to adjust the position buffers by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label: text>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - Text codes can be used.
 *   - If text codes are used, avoid text codes that use < and > wrappers.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label>
 * text
 * text
 * </Label>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - This can display multiple lines.
 * - Text codes can be used.
 *   - You can use text codes with < and > wrappers.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range requirement for the player to be in order for the event's
 *   label to appear.
 * - Replace 'x' with a number value depicting the range in tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If this tag is not used, refer to the default plugin parameter settings.
 *
 * ---
 * 
 * <Label Range Type: Square>
 * <Label Range Type: Circle>
 * <Label Range Type: Diamond>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range type for the label to appear visible for.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Diamond: A diamond-shaped range with the event at the center.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If this tag is not used, refer to the default plugin parameter settings.
 * 
 * ---
 *
 * <Label Offset X: +x>
 * <Label Offset X: -x>
 *
 * <Label Offset Y: +x>
 * <Label Offset Y: -x>
 *
 * <Label Offset: +x, +y>
 * <Label Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the label on the envent by offsets.
 * - Replace 'x' and 'y' with the values to adjust the position offsets by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Label Hue Shift: +x>
 * <Label Hue Shift: -x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the hue of the event label by +x or -x every frame.
 *   - Keep in mind that since this is changing hue, this will appear to have
 *     no effect if you are using black and white labels.
 *   - Use labels with text codes that add color to them like '\C[4]text'
 * - This only works with the sprite version of event labels and does not work
 *   with the legacy version.
 * 
 * ---
 * 
 * <Location X: +x>
 * <Location X: -x>
 * 
 * <Location Y: +x>
 * <Location Y: -x>
 * 
 * <Location: +x, +y>
 * <Location: +x, -y>
 * <Location: -x, +y>
 * <Location: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the initial location of this event by +x and +y (or -x and -y).
 * - This allows you to stack events on top of each other or even move them to
 *   various places of the map.
 * - Replace 'x' with a number that represents the horizontal tiles to adjust
 *   the initial starting location by.
 * - Replace 'y' with a number that represents the vertical tiles to adjust
 *   the initial starting location by.
 * 
 * ---
 * 
 * <Mirror Sprite>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event sprite's visual appearance is mirrored.
 * 
 * ---
 * 
 * <Move Only Region: x>
 * <Move Only Regions: x,x,x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the move range of this event to only the region(s) marked by the
 *   notetag(s) or comment tag(s).
 * - This will bypass terrain passability.
 * - This will not bypass event collision.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Move Synch Target: Player>
 *
 * <Move Synch Target: Event x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Synchronizes the movement of this event with a target (either the player
 *   or another event). This event will only move whenever the synchronized
 *   target moves.
 * - For 'Event x' variant, replace 'x' with the ID of the event to synch to.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Type: Random>
 * <Move Synch Type: Approach>
 * <Move Synch Type: Away>
 * <Move Synch Type: Custom>
 *
 * <Move Synch Type: Mimic>
 * <Move Synch Type: Reverse Mimic>
 *
 * <Move Synch Type: Mirror Horizontal>
 * <Move Synch Type: Mirror Vertical>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Choose the type of movement the event will have if it is synchronized to
 *   a target.
 *   - Random: Move to a random position.
 *   - Approach: Approaches target.
 *   - Away: Flees from target.
 *   - Custom: Follows a custom move route.
 *   - Mimic: Imitates the target's movement style.
 *   - Reverse Mimic: Does the opposite of the target's movement.
 *   - Mirror Horizontal: Moves as if a mirror is placed horizontally.
 *   - Mirror Vertical: Moves as if a mirror is placed vertically.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is present, the event will wait a bit after each move before
 *   moving again.
 * - Replace 'x' with the number of movement instances in between.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Move Synch Distance Opacity: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the opacity of the event based on the distance between it and its
 *   move synched target. Closer means more opaque. Further away means more
 *   transparent.
 * - Replace 'x' with a number representing the opacity change per pixel
 *   distance away. 'x' can use decimal values like 1.05 and 1.5.
 * 
 * ---
 * 
 * <Picture Filename: filename>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Applies a picture graphic from the /img/pictures/ folder of your project.
 * - This graphic will be on top of the character sprite but below the event
 *   icon sprite.
 *   - The picture priority will be the same as the event's priority.
 *   - If it is "below characters", the player can walk on top of it.
 *   - If it is "above characters", the player will behind it.
 *   - If it is "same as characters", the priority will be based on the
 *     current relative Y position. This also means, if the picture is big
 *     enough, it can clip into the top of tree tiles and such.
 * - Replace 'filename' with a filename from the game project's /img/pictures/
 *   folder. This is case sensitive. Do NOT include the file extension.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Type: Enemy>
 * <Picture Type: SV Enemy>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Will use /img/enemies/ or /img/sv_enemies/ instead of /img/pictures/ to
 *   grab a picture graphic from.
 * - Other picture graphic sprite related notetags will apply as normal.
 * 
 * ---
 * 
 * <Picture Max Size: x>
 * <Picture Scale: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - If the "Max Size" or "Scale" supplementary notetags are used, the picture
 *   graphic will be scaled proportionally to fit either the exact pixel size
 *   for "Max Size" or the "Scale" ratio.
 *   - Both the "Max Size" and "Scale" notetags require the "Filename" notetag.
 * - Replace 'x' with a number value representing the exact pixel size for the
 *   "Max Size" notetag.
 * - Replace 'y' with a number value representing the scale on which to shrink
 *   or enlarge the picture. 100% is normal size. 50% is half size. 200% is
 *   double size.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Picture Offset X: +x>
 * <Picture Offset X: -x>
 *
 * <Picture Offset Y: +x>
 * <Picture Offset Y: -x>
 *
 * <Picture Offset: +x, +y>
 * <Picture Offset: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Offsets the X and Y position of the event picture relative to the event
 *   sprite's own position.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Wait Frames: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Requires VisuMZ_4_AnimatedPictures!
 * - "Wait Frames" is used with VisuMZ's Animated Pictures plugin. This
 *   determines the delay inbetween frame changes.
 * - Replace 'x' with a number representing the amount of frames to wait
 *   inbetween frame changes.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Playtest>
 * 
 * - Used for: Event Notetags.
 * - This does NOT work when it's in the Event Page Comment Tags.
 * - If this notetag is found in the event's notebox (NOT comments), then the
 *   event will only appear during a playtest session. It will not appear in a
 *   deployed game where the playtest flag is not on.
 * 
 * ---
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * ---
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * <Save Event Location>
 *
 * - Used for: Event Notetags ONLY
 * - Saves the locations of the event on the map so that when you return to
 *   that map at a later point, the event will be in the position it was
 *   last in.
 *
 * ---
 *
 * <Hide Shadow>
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Hides the shadow for the event.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Scale: x%>
 * 
 * <Scale X: x%>
 * <Scale Y: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the scale of the sprite to the designated size.
 * - For <Scale: x%> variant: replace 'x' with a number representing the
 *   scaling overall percentage to be used.
 * - For <Scale X: x%> variant, replace 'x' with a number representing the x
 *   factor for the horizontal scaling percentage to be used.
 * - For <Scale Y: y%> variant, replace 'y' with a number representing the y
 *   factor for the vertical scaling percentage to be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Shadow Filename: filename>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replaces the shadow graphic used with 'filename' found in the
 *   img/system/ project folder.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Sprite Offset X: +x>
 * <Sprite Offset X: -x>
 *
 * <Sprite Offset Y: +x>
 * <Sprite Offset Y: -x>
 *
 * <Sprite Offset: +x, +y>
 * <Sprite Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes how much the event's sprite is visibly offset by.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Step Pattern: Left to Right>
 * <Step Pattern: Right to Left>
 *
 * <Step Pattern: Spin Clockwise>
 * <Step Pattern: Spin CW>
 *
 * <Step Pattern: Spin CounterClockwise>
 * <Step Pattern: Spin CCW>
 * <Step Pattern: Spin AntiClockwise>
 * <Step Pattern: Spin ACW>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the way the event animates if a tag is present.
 *   - Left to Right: Makes the event sprite's step behavior go from frame 0 to
 *     1 to 2, then back to 0 instead of looping backward.
 *   - Right to Left: Makes the event sprite's step behavior go from frame 2 to
 *     1 to 0, then back to 2 instead of looping forward.
 *   - Spin Clockwise: Makes the event sprite's step behavior spin CW.
 *   - Spin CounterClockwise: Makes the event sprite's step behavior spin CCW.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Tile Expand Up: x>
 * <Tile Expand Down: x>
 * <Tile Expand Left: x>
 * <Tile Expand Right: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used for events with tile graphics. Expands the graphic up, down, left, or
 *   right from the spritesheet.
 *   - This does NOT expand the hitbox.
 * - The graphic will be anchored to the tile it's expanded from. This means
 *   even if you expanded downward, the actual event's position will still be
 *   the current event's X/Y coordinates. It's just grown more vertically and
 *   is still centered horizontally.
 * - This is primarily used to save on having to use too many events for tiles
 *   that expanded past 1x1 tile sizes.
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
 * === Auto Movement Plugin Commands ===
 * 
 * ---
 *
 * Auto Movement: Events
 * - Allow/stop events from auto movement.
 *
 *   Value:
 *   - Allow events to move automatically?
 *
 * ---
 * 
 * === Call Event Plugin Commands ===
 * 
 * ---
 *
 * Call Event: Remote Read
 * - Runs the page of a different event remotely.
 * - This will run the page of the target event on the CURRENT event.
 * - This means that any "This Event" commands will be applied to the event
 *   using this Plugin Command and NOT the target event that page data is being
 *   retrieved from.
 * - Think of it as the current event using the target called event as a
 *   Common Event ala how RPG Maker 2003 works (for those familiar with it).
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Page ID:
 *   - The page of the remote event to run.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Dash Plugin Commands ===
 * 
 * ---
 *
 * Dash Enable: Toggle
 * - Enable/Disable Dashing on maps.
 *
 *   Value:
 *   - What do you wish to change dashing to?
 *
 * ---
 * 
 * === Event Icon Plugin Commands ===
 * 
 * ---
 *
 * Event Icon: Change (Temporary)
 * - Change the icon that appears on an event.
 * - This change is temporary and resets upon new events.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Change (Forced)
 * - Change the icon that appears on an event.
 * - This change is forced and needs to be restored.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Delete
 * - Delete the icon that appears on an event.
 * - This will remain deleted and invisible for events.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * Event Icon: Restore
 * - Restores a deleted or forced icon that appears on an event.
 * 
 *   Map ID: 
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * === Event Label Plugin Commands ===
 * 
 * ---
 *
 * Event Label: Refresh
 * - Refresh all Event Labels on screen.
 * - This is used to refresh page conditions for map changes that don't
 *   force a refresh.
 *
 * ---
 *
 * Event Label: Visible
 * - Change the visibility of Event Labels.
 *
 *   Visibility:
 *   - What do you wish to change visibility to?
 *
 * ---
 * 
 * === Event Location Plugin Commands ===
 * 
 * ---
 *
 * Event Location: Save
 * - Memorize an event's map location so it reappears there the next time the
 *   map is loaded.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Delete
 * - Deletes an event's saved map location.
 * - The event will reappear at its default location.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *   
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Create
 * - Creates a custom spawn location for a specific map's event so it appears
 *   there the next time the map is loaded.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   X Coordinate:
 *   - The X coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - The Y coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Direction:
 *   - The direction the event will be facing.
 *
 *   Optional:
 *
 *     Page ID:
 *     - The page of the event to set the move route to.
 *     - You may use JavaScript code.
 *
 *     Move Route Index:
 *     - The point in the move route for this event to be at if the page ID
 *       matches the rest of the page conditions.
 *
 * ---
 * 
 * === Event Popup Plugin Commands ===
 * 
 * ---
 * 
 * Event Popup: Player
 * - Makes a centered event popup on the player sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Follower
 * - Makes a centered event popup on target follower sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Follower Index:
 *   - Which follower index to play popup?
 *   - Index starts at 0.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second.
 *   - You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Event
 * - Makes a centered event popup on target event sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Event ID:
 *   - The ID of the event to play popup on.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Target Tile
 * - Makes a centered event popup on target tile.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Map Tile X:
 *   Map Tile Y:
 *   - The x/y coordinate of the map tile.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Popup Settings
 * 
 *   Fade Settings:
 * 
 *     Fade In Duration:
 *     - How many frames does it take to fade in?
 *     - 60 frames = 1 second.
 * 
 *     Fade Out Duration:
 *     - How many frames does it take to fade out?
 *     - 60 frames = 1 second.
 * 
 *   Offset Settings:
 * 
 *     Starting Offset X:
 *     - Offsets the starting x position.
 *     - Negative: left. Positive: right.
 *     - You may use code.
 * 
 *     Starting Offset Y:
 *     - Offsets the starting y position. 
 *     - Negative: up. Positive: down.
 *     - You may use code.
 * 
 *     Ending Offset X:
 *     - Offsets the ending x position. 
 *     - Negative: left. Positive: right.
 *     - You may use code.
 * 
 *     Ending Offset Y:
 *     - Offsets the ending y position. 
 *     - Negative: up. Positive: down.
 *     - You may use code.
 * 
 *   Scaling Settings:
 * 
 *     Starting Scale X:
 *     - What is the starting scale x?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Starting Scale Y:
 *     - What is the starting scale y?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Ending Scale X:
 *     - What is the ending scale x?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Ending Scale Y:
 *     - What is the ending scale y?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *   Angle Settings:
 * 
 *     Starting Offset Angle:
 *     - What is the starting angle offset?
 *     - Use numbers between 0 and 360.
 *     - You may use code.
 * 
 *     Ending Offset Angle:
 *     - What is the ending angle offset?
 *     - Use numbers between 0 and 360.
 *     - You may use code.
 * 
 *   Misc Settings:
 * 
 *     Arc Peak:
 *     - This is the height of the popup's trajectory arc in pixels.
 *     - Positive: up. Negative: down.
 *     - You may use code.
 * 
 * ---
 * 
 * === Event Timer Plugin Commands ===
 * 
 * ---
 *
 * Event Timer: Change Speed
 * - Changes the timer frame decrease (or increase) speed.
 *
 *   Speed:
 *   - How many 1/60ths of a second does each frame increase or decrease by?
 *   - Negative decreases.
 *   - Positive increases.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Expire Event Assign
 * - Sets a Common Event to run upon expiration.
 * - Bypasses the default code if one is set.
 *
 *   Common Event ID:
 *   - Select the Common Event to run upon the timer's expiration.
 *
 * ---
 *
 * Event Timer: Expire Event Clear
 * - Clears any set to expire Common Event and instead, run the default
 *   Game_Timer expiration code.
 *
 * ---
 *
 * Event Timer: Frames Gain
 * - Chooses how many frames, seconds, minutes, or hours are gained or lost for
 *   the event timer.
 *
 *   Frames:
 *   - How many 1/60ths of a second are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - How many seconds are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - How many minutes are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - How many hours are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Frames Set
 * - Chooses how many frames, seconds, minutes, or hours are set for the event
 *   timer.
 *
 *   Frames:
 *   - Set frame count to this value.
 *   - Each frame is 1/60th of a second.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - Set seconds to this value.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - Set minutes to this value.
 *   - Each minute is 60 seconds.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - Set hours to this value.
 *   - Each hour is 60 minutes.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Pause
 * - Pauses the current event timer, but does not stop it.
 *
 * ---
 *
 * Event Timer: Resume
 * - Resumes the current event timer from the paused state.
 *
 * ---
 * 
 * === Follower Control Plugin Commands ===
 * 
 * ---
 *
 * Follower: Set Global Chase
 * - Disables all followers from chasing the player or reenables it.
 *
 *   Chase:
 *   - Sets all followers to chase the player or not.
 *
 * ---
 *
 * Follower: Set Target Chase
 * - Disables target follower from chasing the player or reenables it.
 *
 *   Follower ID:
 *   - Select which follower ID to disable/reenable chasing for.
 *
 *   Chase:
 *   - Sets target follower to chase its target or not.
 *
 * ---
 *
 * Follower: Set Control
 * - Sets the event commands to target a follower when "Player" is selected as
 *   the target.
 *
 *   Follower ID:
 *   - Select which follower ID to control.
 *   - 0 is the player.
 *
 * ---
 *
 * Follower: Reset
 * - Resets all follower controls. Event Commands that target the "Player"
 *   return to normal and followers chase again.
 *
 * ---
 * 
 * === Global Switch Plugin Commands ===
 * 
 * ---
 * 
 * Global Switch: Get Self Switch A B C D
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Letter:
 *   - Letter of the target event's Self Switch to obtain data from.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * Global Switch: Get Self Switch ID
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Switch ID:
 *   - The ID of the source switch.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * === Global Variable Plugin Commands ===
 * 
 * ---
 * 
 * Global Variable: Get Self Variable ID
 * - Gets the current stored value from a Self Variable and stores it onto a
 *   Global Variable.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Variable ID:
 *   - The ID of the source variable.
 * 
 *   -
 * 
 *   Target Variable ID:
 *   - The ID of the target variable.
 * 
 * ---
 * 
 * === Morph Event Plugin Commands ===
 * 
 * ---
 *
 * Morph Event: Change
 * - Runs the page of a different event remotely.
 *
 *   Step 1:
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Template Name:
 *     - Name of the target event template to morph into.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *     Preserve Morph:
 *     - Is the morph effect preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Morph Event: Remove
 * - Remove the morph status of an event.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Remove Preservation:
 *   - Also remove the preservation effect?
 *
 * ---
 * 
 * === Player Icon Plugin Commands ===
 * 
 * ---
 *
 * Player Icon: Change
 * - Change the icon that appears on on the player.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Player Icon: Delete
 * - Delete the icon that appears on the player.
 *
 * ---
 * 
 * === Player Movement Plugin Commands ===
 * 
 * ---
 * 
 * Player Movement: Control
 * - Enable or disable player control over the player character's movement.
 * 
 *   Enable?:
 *   - Let the player control where the player character moves?
 * 
 * ---
 * 
 * Player Movement: Diagonal
 * - Override settings to for player diagonal movement.
 * 
 *   Setting:
 *   - How do you want to change diagonal movement?
 *   - Default: Whatever the Map Uses
 *   - Forcefully Disable Diagonal Movement
 *   - Forcefully Enable Diagonal Movement
 * 
 * ---
 * 
 * === Self Data Plugin Commands ===
 * 
 * ---
 * 
 * Self Data: Reset All
 * - Reset the Self Switch and Self Variable data of all events within the
 *   specified map.
 * 
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * === Self Switch Plugin Commands ===
 * 
 * ---
 *
 * Self Switch: A B C D
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Letter:
 *   - Letter of the target event's Self Switch to change.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Self Switch: Switch ID
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Switch ID:
 *   - The ID of the target switch.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Self Variable Plugin Commands ===
 * 
 * ---
 *
 * Self Variable: Variable ID
 * - Change the Self Variable of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Variable ID:
 *   - The ID of the target variable.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Spawn Event Plugin Commands ===
 * 
 * ---
 *
 * Spawn Event: Spawn At X, Y
 * - Spawns desired event at X, Y location on the current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     X Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Y Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Region
 * - Spawns desired event at a random region-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Region ID(s):
 *     - Pick region(s) to spawn this event at.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Terrain Tag
 * - Spawns desired event at a random terrain tag-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Terrain Tag(s):
 *     - Pick terrain tag(s) to spawn this event at.
 *     - Insert numbers between 0 and 7.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Despawn Event ID
 * - Despawns the selected Event ID on the current map.
 *
 *   Event ID
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn At X, Y
 * - Despawns any spawned event(s) at X, Y location on the current map.
 *
 *   X Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn Region(s)
 * - Despawns the selected Region(s) on the current map.
 *
 *   Region ID(s):
 *   - Pick region(s) and despawn everything inside it.
 *
 * ---
 *
 * Spawn Event: Despawn Terrain Tag(s)
 * - Despawns the selected Terrain Tags(s) on the current map.
 *
 *   Terrain Tag(s):
 *   - Pick terrain tag(s) and despawn everything inside it.
 *   - Insert numbers between 0 and 7.
 *
 * ---
 *
 * Spawn Event: Despawn Everything
 * - Despawns all spawned events on the current map.
 *
 * ---
 *
 * ============================================================================
 * Move Route Custom Commands
 * ============================================================================
 *
 * Some custom commands have been added to the "Set Movement Route" event
 * command. These can be accessed by pressing the "Script..." command and
 * typing in the following, which don't need to be in code form.
 *
 * Keep in mind that since these are custom additions and RPG Maker MZ does not
 * allow plugins to modify the editor, the "Preview" button will not factor in
 * the effects of these commands.
 * 
 * If you wish to use a value from a variable, insert $gameVariables.value(x)
 * or \V[x] in place of the x in any of the below.
 * 
 * If you wish to use a value from a self variable, insert \SelfVar[x] in place
 * of the x in any of the below. This will only draw from the current event. If
 * you wish to draw data from outside event self variables, we recommend you
 * use the \V[x] variant after using the Plugin Commands to draw data from them
 * for the best accuracy.
 *
 * ---
 * 
 * Animation: x
 * - Replace 'x' with the ID of the animation to play on moving unit.
 *
 * ---
 * 
 * Balloon: name
 * - Replace 'name' with any of the following to play a balloon on that the
 *   target moving unit.
 * - '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep', 'User-Defined 1', 'User-Defined 2',
 *   'User-Defined 3', 'User-Defined 4', 'User-Defined 5'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: !
 *   - Balloon: Sleep
 *   - Balloon: Heart
 *
 * ---
 * 
 * Fade In: x
 * Fade Out: x
 * - Fades in/out the sprite's opacity.
 * - Fade In will continuously raise the opacity level until it reaches 255.
 * - Fade Out will continuously lower the opacity level until it reaches 0.
 * - Replace 'x' with the speed to fade in/out the sprite.
 * 
 * ---
 * 
 * Force Carry: On
 * Force Carry: Off
 * - For usage with the VS8 sprite sheet.
 * - Use ON to turn force carrying on.
 * - Use OFF to turn force carrying off.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Carry frames.
 * 
 * ---
 * 
 * Force Dash: On
 * Force Dash: Off
 * - Use ON to turn force dashing on.
 * - Use OFF to turn force dashing off.
 * - Forces dashing will prompt the player or event to be in the dashing state.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Dashing frames.
 * 
 * ---
 * 
 * Hug: Left
 * Hug: Right
 * - Causes the moving unit to hug the left/right side of the wall.
 *
 * ---
 * 
 * Index: x
 * - Replace 'x' with a number depicting the character index to change the
 *   moving unit's sprite to.
 *
 * ---
 * 
 * Index: +x
 * Index: -x
 * - Replace 'x' with the value to change the character index of the moving
 *   unit's sprite by.
 *
 * ---
 * 
 * Jump Forward: x
 * - Replace 'x' with the number of tiles for the unit to jump forward by.
 *
 * ---
 * 
 * Jump To: x, y
 * - Replace 'x' and 'y' with the coordinates for the unit to jump to.
 *
 * ---
 * 
 * Jump to Event: x
 * - Replace 'x' with the ID of the event for the unit to jump to.
 *
 * ---
 * 
 * Jump to Player
 * - Causes the moving unit to jump to the player.
 *
 * ---
 * 
 * Jump To Home
 * - Causes the event to jump to its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Move Lower Left Until Stop
 * Move Down Until Stop
 * Move Lower Right Until Stop
 * Move Left Until Stop
 * Move Right Until Stop
 * Move Upper Left Until Stop
 * Move Up Until Stop
 * Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events will stop moving before they make contact with the player.
 *
 * ---
 * 
 * Crash Move Lower Left Until Stop
 * Crash Move Down Until Stop
 * Crash Move Lower Right Until Stop
 * Crash Move Left Until Stop
 * Crash Move Right Until Stop
 * Crash Move Upper Left Until Stop
 * Crash Move Up Until Stop
 * Crash Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Player
 * - Moves the unit to the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Crash Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 * 
 * ---
 * 
 * Move Lower Left: x
 * Move Down: x
 * Move Lower Right: x
 * Move Left: x
 * Move Right: x
 * Move Upper Left: x
 * Move Up: x
 * Move Upper Right: x
 * - Replace 'x' with the number of times to move the unit by in the designated
 *   direction on the map.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Opacity: x%
 * - Replace 'x' with the percentage to change the unit's sprite opacity to.
 *
 * ---
 * 
 * Opacity: +x
 * Opacity: -x
 * - Replace 'x' with the increment to change the unit's sprite opacity by.
 *
 * ---
 *
 * Pattern Lock: x
 * - Replace 'x' with the step pattern to lock the unit's sprite to.
 *
 * ---
 *
 * Pattern Unlock
 * - Removes pattern lock effect.
 *
 * ---
 * 
 * Pose: name
 * - If using a VS8 sprite, this will cause the unit to strike a pose.
 * - Replace 'name' with any the following:
 * - 'Item', 'Hmph', 'Victory', 'Hurt', 'Kneel', 'Collapse',
 *   '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: Item
 *   - Balloon: Victory
 *   - Balloon: ?
 *
 * ---
 * 
 * Step Toward: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step towards.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Player
 * - Causes event to take one step towards the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Home
 * - Causes the event to take one step towards its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Step Away From: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step away from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Player
 * - Causes event to take one step away from the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Home
 * - Causes the event to take one step away from its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Turn To: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Event: x
 * - Replace 'x' with the ID of the event to turn the unit towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Player
 * - Causes the unit to turn towards the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Home
 * - Causes the event to turn towards its home position.
 * - This refers to the original position's X/Y on the map.
 * - The event will turn and face the tile that is its original X/Y location.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Away From: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Event: x
 * - Replace 'x' with the ID of the event to turn the unit away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Player
 * - Causes the unit to turn away from the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Home
 * - Causes the event to turn away from its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Lower Left
 * Turn Lower Right
 * Turn Upper Left
 * Turn Upper Right
 * - Causes the unit to turn to one of the diagonal directions.
 *
 * ---
 * 
 * Self Switch x: On
 * Self Switch x: Off
 * Self Switch x: Toggle
 * - Replace 'x' with 'A', 'B', 'C', 'D', or a <Self> Switch ID to adjust the
 *   unit's Self Switch.
 *
 * ---
 * 
 * Self Variable x: y
 * - Replace 'x' with a <Self> Variable ID to adjust the unit's Self Variable.
 * - Replace 'y' with a number value to set the Self Variable to.
 *
 * ---
 * 
 * Teleport To: x, y
 * - Replace 'x' and 'y' with the coordinates to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Event: x
 * - Replace 'x' with the ID of the event to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Player
 * - Instantly moves the unit to the player's location.
 *
 * ---
 * 
 * Teleport to Home
 * - Instantly teleports an event to its home position on the map.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * If none of the commands are detected above, then a script call will be ran.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Label Settings
 * ============================================================================
 *
 * Event Labels are small windows created to display text over an event's head.
 * They're set up using the <Label> notetags and/or comment tags. Event Labels
 * are a great way to instantly relay information about the event's role to
 * the player.
 *
 * ---
 *
 * Event Labels
 * 
 *   Sprite Based?:
 *   - Use sprite-based labels instead of legacy-window version.
 *   - Legacy-window version will not be supported in future.
 *   - Sprite-based labels are more memory efficient and work better
 *     compatibility-wise.
 * 
 *   Mobile-Enabled?:
 *   - Enable event labels for mobile devices?
 * 
 *   Font Size:
 *   - The font size used for the Event Labels.
 * 
 *   Icon Size:
 *   - The size of the icons used in the Event Labels.
 * 
 *   Line Height:
 *   - The line height used for the Event Labels.
 * 
 *   Offset X:
 *   - Globally offset all labels horizontally by this amount.
 * 
 *   Offset Y:
 *   - Globally offset all labels vertically by this amount.
 * 
 *   Fade Speed:
 *   - Fade speed for labels.
 * 
 *   Visible Range:
 *   - Range the player has to be within the event to make its label visible.
 * 
 *     Range Type:
 *     - What do you want the default label visible range type?
 *       - Square
 *       - Diamond
 *       - Circle
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Icon Settings
 * ============================================================================
 *
 * Icons can be displayed over an event's head through the <Icon> notetags
 * and/or comment tags. These can be used for a variety of things such as
 * making them look like they're carrying an item or to indicate they have a
 * specific role.
 *
 * ---
 *
 * Event Icon
 * 
 *   Buffer X:
 *   - Default X position buffer for event icons.
 * 
 *   Buffer Y:
 *   - Default Y position buffer for event icons.
 * 
 *   Blend Mode:
 *   - Default blend mode for even icons.
 *     - 0 - Normal
 *     - 1 - Additive
 *     - 2 - Multiply
 *     - 3 - Screen
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Template Settings
 * ============================================================================
 *
 * Event Templates allow you to store specific maps and/or event data to bring
 * out on need while having a premade set base. They're similar to prefabs but
 * aren't things that can be altered individually as one setting for an event
 * template will serve as a blueprint for all of them that use them.
 *
 * Event Templates are used for the <Copy Event> notetags, the Morph Event and
 * Spawn Event Plugin Commands.
 *
 * ---
 *
 * Settings
 * 
 *   Preloaded Maps:
 *   - A list of all the ID's of the maps that will be preloaded to serve as
 *     template maps for this plugin.
 *
 * ---
 *
 * Templates
 * - A list of all the Event Templates used by this project. Used for notetags
 *   and Plugin Commands.
 * 
 *     Name:
 *     - Name of the template. It'll be used as anchor points for notetags and
 *       Plugin Commands.
 * 
 *     Map ID:
 *     - ID of the map the template event is stored on.
 *     - This will automatically add this ID to preloaded list.
 * 
 *     Event ID:
 *     - ID of the event the template event is based on.
 * 
 *     JavaScript:
 *       JS: Pre-Copy:
 *       JS: Post-Copy:
 *       JS: Pre-Morph:
 *       JS: Post-Morph:
 *       JS: Pre-Spawn:
 *       JS: Post-Spawn:
 *       - Code that's ran during certain circumstances.
 *       - The code will occur at the same time as the ones listed in the main
 *         Event Template Settings Plugin Parameters. However, the ones listed
 *         in these individual entries will only occur for these specific
 *         templates and only if the templates are used.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Pre-Copy:
 *   JS: Post-Copy:
 *   JS: Pre-Morph:
 *   JS: Post-Morph:
 *   JS: Pre-Spawn:
 *   JS: Post-Spawn:
 *   - Code that's ran during certain circumstances.
 *   - These are global and are ran for all copies, morphs, and/or spawns.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Movement Settings
 * ============================================================================
 *
 * These plugin parameters allow you to control how movement works in your
 * game, toggling it from 4-directional to 8-directional, setting up rules to
 * stop self-movement from events while an event or message is present, and
 * other aesthetics such as tilting the sprite while dashing, setting shadows
 * beneath the sprites, and allow for turning in place.
 *
 * ---
 *
 * 8 Directional Movement
 * 
 *   Enable:
 *   - Allow 8-directional movement by default? Players can move diagonally.
 * 
 *   Strict Collision:
 *   - Enforce strict collission rules where the player must be able to pass
 *     both cardinal directions?
 * 
 *   Favor Horizontal:
 *   - Favor horizontal if cannot pass diagonally but can pass both
 *     horizontally and vertically?
 * 
 *   Slower Diagonals?
 *   - Enforce a slower movement speed when moving diagonally?
 * 
 *     Speed Multiplier
 *     - What's the multiplier to adjust movement speed when moving diagonally?
 *
 * ---
 *
 * Automatic Movement
 * 
 *   Stop During Events:
 *   - Stop automatic event movement while events are running.
 * 
 *   Stop During Messages:
 *   - Stop automatic event movement while a message is running.
 *
 * ---
 * 
 * Bitmap
 * 
 *   Smoothing:
 *   - Do you want to smooth or pixelate the map sprites?
 *   - Pixelating them is better for zooming and tilting.
 * 
 * ---
 *
 * Dash
 * 
 *   Dash Modifier:
 *   - Alters the dash speed modifier.
 * 
 *   Dash on Ladder?
 *   - Allow dashing while on a ladder or rope?
 * 
 *   Enable Dash Tilt?:
 *   - Tilt any sprites that are currently dashing?
 * 
 *     Tilt Left Amount:
 *     - Amount in radians when moving left (upper left, left, lower left).
 * 
 *     Tilt Right Amount:
 *     - Amount in radians when moving right (upper right, right, lower right).
 * 
 *     Tilt Vertical Amount:
 *     - Amount in radians when moving vertical (up, down).
 *
 * ---
 * 
 * Event Movement
 * 
 *   Random Move Weight:
 *   - Use numbers between 0 and 1.
 *   - Numbers closer to 1 stay closer to their home position.
 *   - 0 to disable it.
 * 
 *   Shift Y:
 *   - How many pixels should non-tile characters be shifted by?
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Path Finding
 * 
 *   Mobile-Enabled?:
 *   - Enable diagonal pathfinding for mobile devices?
 * 
 * ---
 *
 * Shadows
 * 
 *   Show:
 *   - Show shadows on all events and player-related sprites.
 * 
 *   Default Filename:
 *   - Default filename used for shadows found in img/system/ folder.
 *
 * ---
 *
 * Turn in Place
 * 
 *   Enable:
 *   - When not dashing, player will turn in place before moving.
 *   - This only applies with keyboard inputs.
 * 
 *   Delay in Frames:
 *   - The number of frames to wait before moving.
 *
 * ---
 * 
 * Vehicle Speeds
 * 
 *   Boat Speed:
 *   - Allows you to adjust the base speed of the boat vehicle.
 * 
 *   Ship Speed:
 *   - Allows you to adjust the base speed of the ship vehicle.
 * 
 *   Airship Speed:
 *   - Allows you to adjust the base speed of the airship vehicle.
 * 
 * ---
 * 
 * Wall Bump
 * 
 *   Enable?:
 *   - Enable the sound effect to be played when bumping into a wall?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: VisuStella 8-Dir Settings
 * ============================================================================
 *
 * These are settings for sprite sheets using the VS8 format.
 * For more information on the VS8 format, look in the help section above.
 *
 * ---
 *
 * Balloon Icon Settings
 * 
 *   Auto-Balloon Poses:
 *   - Automatically pose VS8 sprites when using balloon icons.
 * 
 *   Balloon Offset X:
 *   - Offset balloon icons on VS8 sprites by x pixels.
 * 
 *   Balloon Offset Y:
 *   - Offset balloon icons on VS8 sprites by y pixels.
 *
 * ---
 *
 * Icons
 * 
 *   Auto Buffer:
 *   - Automatically buffer the X and Y coordinates of VS8 sprites?
 * 
 *   Use Carry Pose:
 *   - Use the carry pose when moving with an icon overhead.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Region Rulings
 * ============================================================================
 *
 * These settings allow you to decide the passability of the player, events,
 * and various vehicles through the usage of Regions.
 *
 * ---
 *
 * Allow Regions
 * 
 *   All Allow:
 *   Walk Allow:
 *   Player Allow:
 *   Event Allow:
 *   Vehicle Allow:
 *   Boat Allow:
 *   Ship Allow:
 *   Airship Allow:
 *   - Insert Region ID's where the affected unit type can enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Forbid Regions
 * 
 *   All Forbid:
 *   Walk Forbid:
 *   Player Forbid:
 *   Event Forbid:
 *   Vehicle Forbid:
 *   Boat Forbid:
 *   Ship Forbid:
 *   Airship Forbid:
 *   - Insert Region ID's where the affected unit type cannot enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Dock Regions
 * 
 *   Vehicle Dock:
 *   Boat Dock:
 *   Ship Dock:
 *   Airship Dock:
 *   - Insert Region ID's where the affected vehicle can dock
 *   - Region ID's range from 0 to 255.
 * 
 *   Only Region Dockable:
 *   - Vehicles are only able to dock at designated regions.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on OK Button
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that activate using
 * Regions when pressing the OK button while standing on top of them or in
 * front of them. These let you create near universally interactable objects
 * using Regions, such as rivers to start up fishing events or locations to
 * places items on.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * Target Tile
 * 
 *   Target Tile:
 *   - Which tile should be checked for Common Event on OK Button?
 *     - Tile in front of player.
 *     - Tile player is standing on top of.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on Touch
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that trigger when
 * stepping onto Region-marked tiles. These let you create custom effects that
 * will occur such as customized damage floors, traps, and/or events.
 * 
 * Areas marked with these regions will not allow random encounters to occur.
 * This is how RPG Maker works. Assuming you are not using plugins at all, by
 * putting on touch events all over the map, tiles with those on touch events
 * will not let random encounters trigger.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Terrain Tag Settings
 * ============================================================================
 *
 * Terrain Tags are used in Database => Tilesets to mark certain tiles and
 * give them unique properties through terrain tags.
 *
 * ---
 *
 * Terrain Tag ID's
 * 
 *   Rope:
 *   - Which terrain tag number to use for ropes?
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
 * Version 1.60: August 29, 2024
 * * Bug Fixes!
 * ** Fixed a bug where events with large hitboxes do not work with crash move.
 *    Fix made by Arisu.
 * ** Fixed a bug where single-mode save games by Save Core would freeze after
 *    executed event movements. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Event Labels will adjust their vertical position to the picture of any
 *    attached event picture if one is present. Update by Arisu.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Picture Type: Enemy>
 * *** <Picture Type: SV Enemy>
 * **** Will use /img/enemies/ or /img/sv_enemies/ instead of /img/pictures/ to
 *      grab a picture graphic from.
 * **** Other picture graphic sprite related notetags will apply as normal.
 * *** <Label Range Type: Square>
 * *** <Label Range Type: Circle>
 * *** <Label Range Type: Diamond>
 * **** Sets a range type for the label to appear visible for.
 * ** New Plugin Parameters added by Arisu:
 * *** Parameters > Event Label Settings > Visible Range > Range Type:
 * **** What do you want the default label visible range type?
 * 
 * Version 1.59: June 13, 2024
 * * Bug Fixes!
 * ** Added a cache check for character sprite tag names to reduce frame drops.
 *    Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Arisu:
 * *** <Location X: +x>, <Location X: -x>
 * *** <Location Y: +y>, <Location Y: -y>
 * *** <Location: +x, +y>, <Location: +x, -y>
 * *** <Location: -x, +y>, <Location: -x, -y>
 * **** Adjusts the initial location of this event by +x and +y (or -x and -y).
 * **** This allows you to stack events on top of each other or even move them
 *      to various places of the map.
 * *** <Tile Expand Up: x>
 * *** <Tile Expand Down: x>
 * *** <Tile Expand Left: x>
 * *** <Tile Expand Right: x>
 * **** Used for events with tile graphics. Expands the graphic up, down, left,
 *      or right from the spritesheet.
 * **** This does NOT expand the hitbox.
 * **** The graphic will be anchored to the tile it's expanded from. This means
 *      even if you expanded downward, the actual event's position will still
 *      be the current event's X/Y coordinates. It's just grown more vertically
 *      and is still centered horizontally.
 * **** This is primarily used to save on having to use too many events for
 *      tiles that expanded past 1x1 tile sizes.
 * 
 * Version 1.58: May 16, 2024
 * * Documentation Update!
 * ** Added "Features: Character Sprite Filename Tags" section.
 * * New Features!
 * ** [Invisible] tag added to character sprite filenames.
 * *** If a character sprite's filename has [invisible] in it, it will become
 *     invisible on the map screen in-game while almost everything else about
 *     it is visible. This is used for those who wish to use sprite labels for
 *     things such as autorun and parallel events.
 * 
 * Version 1.57: March 14, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Plugin Command: "Event Icon: Delete" will now keep an event icon cleared
 *    until the newly added Plugin Command: "Event Icon: Restore" is used.
 *    Update made by Arisu.
 * ** Plugin Command: "Event Icon: Change" is now renamed to have "(Temporary)"
 *    after its name in order to clarify the temporary changes made to it.
 * * New Features!
 * ** New Plugin Command added by Arisu:
 * *** Event Icon: Event Icon: Change (Forced)
 * **** Change the icon that appears on an event.
 * **** This change is forced and needs to be restored.
 * *** Event Icon: Restore
 * **** Restores a deleted or forced icon that appears on an event.
 * 
 * Version 1.56: February 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added fail safes for activation proximity notetags when loaded from past
 *    save files without Events and Movement Core installed. Added by Arisu.
 * * New Features!
 * ** New notetags added by Arisu:
 * *** <Encounter Half Square: x>
 * *** <Encounter Half Circle: x>
 * *** <Encounter Half Delta: x>
 * *** <Encounter Half Row: x>
 * *** <Encounter Half Column: x>
 * *** <Encounter None Square: x>
 * *** <Encounter None Circle: x>
 * *** <Encounter None Delta: x>
 * *** <Encounter None Row: x>
 * *** <Encounter None Column: x>
 * **** If the player is within the 'x' area effect of this event, the random
 *      encounter rate will be halved or suppressed completely depending on the
 *      notetag used.
 * **** These include script call checks.
 * *** <Erase if Encounter Half>
 * *** <Erase if Encounter None>
 * **** Automatically erase this event if the player's party has an encounter
 *      half or encounter none effect, or if the event has spawned in an
 *      encounter half or encounter none area.
 * **** This check only occurs in two situations: when the map is first loaded
 *      after being teleported into or when the player leaves a menu and
 *      returns back to the map.
 * **** Events that have been erased due to this effect will NOT return even if
 *      the encounter half/none effect is removed while the player is still on
 *      the map. The event will return if the player exits the map and comes
 *      back.
 * 
 * Version 1.55: December 14, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Event Popup: Player
 * *** Event Popup: Follower
 * *** Event Popup: Event
 * *** Event Popup: Target Tile
 * **** Makes a centered event popup on the player sprite, target follower
 *      sprite, target event sprite, or target tile.
 * **** All of these new Plugin Commands require VisuMZ_1_MessageCore and
 *      cannot be used in battle.
 * 
 * Version 1.54: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated to reduce confusion:
 * *** Call Event: Remote Read
 * **** This will run the page of the target event on the current event.
 * **** This means that any "This Event" commands will be applied to the event
 *      using this Plugin Command and NOT the target event that page data is
 *      being retrieved from.
 * **** Think of it as the current event using the target called event as a
 *      Common Event ala how RPG Maker 2003 works (for those familiar with it).
 * * Feature Update!
 * ** Renamed "Call Event: Remote Activation" to "Call Event: Remote Read" to
 *    reduce confusion.
 * * Feature Update!
 * ** <Activation Radius: x> notetag is now defined as <Activation Delta: x>
 * *** 'Radius' variant will still work and function as 'Delta' but will no
 *     longer be listed in the help file as 'Radius'
 * *** This is changed to avoid confusion with the new notetag.
 * * New Features!
 * ** New notetag added by Arisu and sponsored by AndyL:
 * *** <Activation Circle: x>
 * **** A circle-shaped range with the event at the center.
 * **** 'x' represents the distance from the center.
 * 
 * Version 1.53: August 17, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** <Map Load Common Event: x>
 * ** <Map Load Common Events: x, x, x>
 * *** When this map is loaded, run the specified Common Events once available.
 * **** Does NOT trigger if you transfer to a different part of the same map.
 * 
 * Version 1.52: July 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated help file for <Label: text> notetags:
 * *** If text codes are used, avoid text codes that use < and > wrappers.
 * ** Updated help file for <Label> sandwich notetags:
 * *** You can use text codes with < and > wrappers.
 * * Feature Update!
 * ** Event labels now work properly with scaling sprites.
 * * New Features!
 * ** New notetag added by Arisu and sponsored by Anon:
 * *** <Label Hue Shift: +x>
 * *** <Label Hue Shift: -x>
 * **** Changes the hue of the event label by +x or -x every frame.
 * **** Keep in mind that since this is changing hue, this will appear to have
 *      no effect if you are using black and white labels.
 * **** Use labels with text codes that add color to them like '\C[4]text'
 * **** This only works with the sprite version of event labels and does not
 *      work with the legacy version.
 * 
 * Version 1.51: June 15, 2023
 * * Bug Fixes!
 * ** Provided a fail safe for plugins using the scaling options from this
 *    plugin but do not have scaling parameters identified. The scaling ratio
 *    should now default to 1.0. Fix made by Olivia.
 * * Feature Update!
 * ** Diagonal pathfinding is now improved as to not get stuck on tight corners
 *    on the map. Feature update made by Arisu.
 * 
 * Version 1.50: April 13, 2023
 * * Bug Fixes!
 * ** <Icon: x> should now update correctly when changing pages through self
 *    switches or other event conditions. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Event Labels > Mobile-Enabled?
 * *** Plugin Parameters > Movement > Pathfinding > Mobile-Enabled?
 * **** These settings allow you to enable or disable certain features when
 *      played on mobile devices for better performance.
 * 
 * Version 1.49: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Event Notetag and Comment Tags added by Arisu:
 * *** <Scale: x%>
 * *** <Scale X: x%>
 * *** <Scale Y: y%>
 * **** Changes the scale of the sprite to the designated size.
 * 
 * Version 1.48: January 20, 2023
 * * Feature Update!
 * ** <Move Synch> for certain types will also copy facing directions even if
 *    there are no tile movements (ie changing directions when pressed up
 *    against and obstacle). Update made by Arisu.
 * 
 * Version 1.47: November 10, 2022
 * * Feature Update!
 * ** If "Follower: Set Global Chase" is set to false, followers will no longer
 *    jump towards the player location when the player jumps. This does NOT
 *    apply to gather or location changing players. Followers will still have
 *    to synchronize their positions there regardless in order to maintain
 *    consistency. Update made by Olivia.
 * 
 * Version 1.46: September 29, 2022
 * * Bug Fixes!
 * ** Altered the self switch auto-reset timing to reduce errors. Fix by Arisu.
 * * Feature Update!
 * ** Added self-movement prevention whenever scenes are deactivated. Update
 *    made by Arisu.
 * 
 * Version 1.45: August 18, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused event labels with variables from refreshing
 *    properly. Fix made by Arisu.
 * 
 * Version 1.44: July 21, 2022
 * * Bug Fixes!
 * ** Fixed a problem that caused <Exit Reset Self Data> notetag to not work.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Diagonal pathfinding is now disabled when there are too many events on a
 *    map, causing extra collission checks. This value is set to 100 for the
 *    time being until we can figure out a better way to calculate diagonal
 *    pathfinding. Update made by Irina.
 * 
 * Version 1.43: July 14, 2022
 * * Bug Fixes!
 * ** Move to Player for events should no longer cause hang ups. Fix by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added caching function for pathfinding when using touch movement for a
 *    smoother experience. When touch movement is held down, pathfinding will
 *    utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Update made by Arisu.
 * * New Features!
 * ** New notetag added by Arisu:
 * *** <Playtest>
 * **** If this notetag is found in the event's notebox (NOT comments), then
 *      the event will only appear during a playtest session. It will not
 *      appear in a deployed game where the playtest flag is not on.
 * 
 * Version 1.42: June 23, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added to <Copy Event: x, y> notetag help:
 * *** - If '0' is used for the Map ID, reference the current map.
 * * Feature Update!
 * ** Default MZ behavior would have "below characters" trigger events with
 *    only comments lock out facing "same as characters" trigger events. This
 *    is now bypassed. Update made by Arisu.
 * ** The <Copy Event: mapID, eventID> notetags now allow usage of '0' for the
 *    mapID to reference the current map. Update made by Arisu.
 * ** <Save Event Location> should now work more efficiently. Update by Arisu.
 * ** Dashing animations for followers will no longer look weird after having
 *    gathered up and then proceeding to dash. Update made by Irina.
 * * New Features!
 * ** New event notetag added by Arisu:
 * *** <Exit Reset Self Data>
 * **** When the player leaves the current map, all Self Switches and Self
 *      Variables related to this event will be reset.
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Self Data: Reset All
 * **** Reset the Self Switch and Self Variable data of all events within the
 *      specified map.
 * ** New Plugin Parameter added by Arisu and sponsored by Anon:
 * *** Plugin Params > Movement Settings > Dash > Dash on Ladder?
 * **** Allow dashing while on a ladder or rope?
 * 
 * Version 1.41: June 1, 2022
 * * Bug Fixes!
 * ** Parallel Process Common Events above 1000 should no longer crash the
 *    game. Bug fixed by Irina.
 * 
 * Version 1.40: May 19, 2022
 * * Bug Fixes!
 * ** Sprite Event Labels with distance properties will now work properly
 *    when changing from a non-met page condition to a met page condition.
 *    Fix made by Arisu.
 * 
 * Version 1.39: May 5, 2022
 * * Bug Fixes!
 * ** Save event location should now work properly with Set Event Location
 *    command. Fix made by Arisu.
 * ** Sprite Event Labels with distance properties will no longer be visible
 *    when constantly entering/exiting the Main Menu. Fix made by Arisu.
 * 
 * Version 1.38: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu and sponsored by Archeia:
 * *** Plugin Parameters > Movement Settings > Event Movement > Shift Y
 * **** How many pixels should non-tile characters be shifted by?
 * ** New Notetags added by Arisu and sponsored by Archeia:
 * *** <Picture Filename: filename>
 * **** applies a picture graphic from the /img/pictures/ folder of your
 *      game project.
 * **** This graphic will be on top of the character sprite but below the event
 *      icon sprite.
 * **** The picture priority will be the same as the event's priority. If it is
 *      "below characters", the player can walk on top of it. If it is "above
 *      characters", the player will behind it. If it is "same as characters",
 *      the priority will be based on the current relative Y position.
 * *** <Picture Max Size: x>
 * *** <Picture Scale: y%>
 * **** If the "Max Size" or "Scale" supplementary notetags are used, the
 *      picture graphic will be scaled proportionally to fit either the exact
 *      pixel size for "Max Size" or the "Scale" ratio.
 * *** <Picture Offset: +x, +y>
 * *** <Picture Offset: -x, -y>
 * **** Offsets the X and Y position of the event picture relative to the event
 *      sprite's own position.
 * *** <Picture Wait Frames: x>
 * **** Requires VisuMZ_4_AnimatedPictures! "Wait Frames" is used with VisuMZ's
 *      Animated Pictures plugin. This determines the delay inbetween
 *      frame changes.
 * 
 * Version 1.37: March 24, 2022
 * * Documentation Update!
 * ** Added extra clarity to "Turn to Home" Movement Command.
 * *** This refers to the original position's X/Y on the map.
 * *** The event will turn and face the tile that is its original X/Y location.
 * 
 * Version 1.36: March 17, 2022
 * * Bug Fixes!
 * ** "Turn To Home" movement command now properly faces the home position.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.35: March 3, 2022
 * * IMPORTANT! Compatibility Update!
 * ** Compatibility Update with RPG Maker MZ 1.4.4.
 * *** For some reason this update broke any saves made before 1.4.4 was
 *     updated and they cannot be loaded. The only way saves would load is if
 *     you made a safe after 1.4.4 was done. This should be fixed and saves
 *     made with 1.4.3 and before should now be working. Update made by Irina.
 * 
 * Version 1.34: February 17, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** Arisu has created new event notetag/comment tags:
 * *** <Custom Z: x>
 * **** Replace 'x' with a number value to determine the event sprite's Z value
 *      relative to the tilemap.
 * **** View the helpfile for more information.
 * *** <Mirror Sprite>
 * **** The event sprite's visual appearance is mirrored.
 * *** <Move Synch Distance Opacity: x>
 * **** Changes the opacity of the event based on the distance between it and
 *      its move synched target. Closer means more opaque. Further away means
 *      more transparent.
 * ** Irina has created a more memory efficient version of Event Labels.
 * *** Plugin Parameters > Event Label Settings > Sprite Based?
 * **** Use sprite-based labels instead of legacy-window version.
 * **** Legacy-window version will not be supported in future.
 * 
 * Version 1.33: February 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu!
 * *** <Hide Player>
 * *** <Show Player>
 * **** Map Notetag. Forcefully hides or shows the player sprite. This is so
 *      you don't need to manually turn the setting on/off each time you enter
 *      a specific map.
 * *** <Hide Followers>
 * *** <Show Followers>
 * **** Map Notetag. Forcefully hides or shows the player's followers. This is
 *      so you don't need to manually turn them on/off each time you enter a
 *      specific map.
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Self Variable changes from custom move routes should no longer cause
 *    crashes. Fix made by Arisu.
 * ** Self Switch custom move route toggles should now work properly. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Better shadow tracking algorithm to remove any shadow twitching.
 *    Update made by Yanfly.
 * 
 * Version 1.31: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.30: November 25, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Map Switches and Map Variables added by Arisu:
 * *** Map Switches are self-switches for maps. Instead of using <Self>, use
 *     <Map> in the Switch name to designate it as a Map Switch. The ON/OFF
 *     data for that Switch will vary depending on the map the player is
 *     currently on.
 * *** Map Variables are self-variables for maps. Instead of using <Self>, use
 *     <Map> in the Variable name to designate it as a Map Switch. The number
 *     data for that Variable will vary depending on the map the player is
 *     currently on.
 * *** Script Calls have been added for these features as well.
 * **** See help file for them.
 * 
 * Version 1.29: October 7, 2021
 * * Bug Fixes!
 * ** Same map event spawning should now work properly without the need to add
 *    the current map ID to the preloaded map array. Update made by Arisu.
 * 
 * Version 1.28: September 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New move route commands added by Arisu:
 * *** Jump to Home
 * *** Move to Home
 * *** Crash Move to Home
 * *** Step Toward Home
 * *** Step Away From Home
 * *** Turn to Home
 * *** Turn Away From Home
 * *** Teleport to Home
 * **** These only work on events. Their actions should be reflective of what
 *      their command names suggest.
 * 
 * Version 1.27: September 17, 2021
 * * Bug Fixes!
 * ** Fixed event spawn templates so that they can work properly with Common
 *    Events. Fix made by Arisu.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** "Step Towards Player" custom command should now work properly. Fix made
 *    by Arisu.
 * ** Having multiple region restriction notetags for a map will no longer
 *    cause others to lock out. Fix made by Arisu.
 * 
 * Version 1.25: July 30, 2021
 * * Bug Fixes!
 * ** Fixed a problem that caused the 'setSelfSwitchValue' and
 *    'setSelfVariableValue' functions to not work properly. Fix made by Irina.
 * 
 * Version 1.24: June 4, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added extra clarification on which commands will go around the player
 *    character and which ones won't.
 * * New Move Route Custom Commands added by Arisu:
 * ** Crash Move (direction) Until Stop
 * ** Crash Move To: x, y
 * ** Crash Move To Event: x
 * *** These allow events to collide with the player character and trigger
 *     Event Touch events.
 * 
 * Version 1.23: May 21, 2021
 * * Bug Fixes!
 * ** Morphing by templates should no longer cause a crash. Fix made by Arisu.
 * 
 * Version 1.22: May 7, 2021
 * * Bug Fixes!
 * ** Plugin Commands for Event Label Visibility should now update without
 *    needing to take steps as per distance detection. Fix made by Arisu.
 * * Documentation Update!
 * ** Added clarity to "Common Event on Touch" Plugin Parameters.
 * *** Areas marked with these regions will not allow random encounters to
 *     occur. This is how RPG Maker works. Assuming you are not using plugins
 *     at all, by putting on touch events all over the map, tiles with those on
 *     touch events will not let random encounters trigger.
 * 
 * Version 1.21: March 12, 2021
 * * Bug Fixes!
 * ** Move until stop custom move routes should no longer cause crashes.
 *    Fix made by Arisu.
 * 
 * Version 1.20: February 26, 2021
 * * Bug Fixes!
 * ** Region Restrictions regarding Player Allow will no longer affect vehicle
 *    passability. Update made by Arisu.
 * 
 * Version 1.19: February 12, 2021
 * * Bug Fixes!
 * ** "Self Variable: Variable ID" plugin command's Map ID should now be able
 *    to use "0" to self reference the current map. Fix made by Olivia.
 * 
 * Version 1.18: February 5, 2021
 * * Bug Fixes!
 * ** Event icon plugin commands should now work properly. Fix made by Arisu.
 * * Documentation Update!
 * ** Added new "Features: Weighted Random Movement" section.
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Random Move Weight: x>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then the event will stick closer to their home location (where they are
 *      located upon spawning on the map). How close they stick to their home
 *      location will depend on the weighted 'x' value.
 * *** <True Random Move>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then that event will ignore the effects of weighted randomized
 *      movement.
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Event Timer: Change Speed
 * *** Event Timer: Expire Event Assign
 * *** Event Timer: Expire Event Clear
 * *** Event Timer: Frames Gain
 * *** Event Timer: Frames Set
 * *** Event Timer: Pause
 * *** Event Timer: Resume
 * **** The above Plugin Commands allow you to control the game timer better.
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Movement > Event Movement > Random Move Weight
 * **** Use numbers between 0 and 1. Numbers closer to 1 stay closer to their
 *      home position.
 * 
 * Version 1.17: January 29, 2021
 * * Documentation Update!
 * ** Added "Do NOT insert quotes" to "Balloon: name" and "Pose: name".
 * ** Added Examples for extra clarification.
 * * Optimization Update!
 * ** When touch clicking an event on a map with multiple events, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.16: January 22, 2021
 * * Optimization Update!
 * ** When touch clicking multiple times on an impassable tile, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.15: January 1, 2021
 * * Bug Fixes!
 * ** Spawned events should now resume their automated self movement after
 *    being interacted with. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for updated features.
 * * Feature Updates!
 * ** Collission checks for the Spawn Event Plugin Commands now account for
 *    the spawning event's Hitbox, too. Update made by Yanfly.
 * ** Spawn Event Plugin Commands adds a new parameter "Success Switch ID" to
 *    check if the spawning has been successful or not.
 * * New Features!
 * ** New Plugin Commands added by Yanfly!
 * *** Spawn Event: Spawn At Terrain Tag
 * *** Spawn Event: Despawn Terrain Tag(s)
 * **** These function similar to their region counterparts except they target
 *      terrain tags instead.
 * 
 * Version 1.14: December 18, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for page index.
 *    Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the new features!
 * * New Features!
 * ** New Plugin Commands added by Irina.
 * *** Follower: Set Global Chase
 * *** Follower: Set Target Chase
 * *** Follower: Set Control
 * *** Follower: Reset
 * **** These plugin commands allow you to change whether or not the followers
 *      will chase their intended targets and/or shift control over their
 *      movement route from the "Player" to the target follower.
 * 
 * Version 1.13: December 4, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for one-screen maps.
 *    Fix made by Arisu.
 * 
 * Version 1.12: November 29, 2020
 * * Bug Fixes!
 * ** Click Triggers no longer work on erased events. Fix made by Arisu.
 * ** Erased events no longer have icons appear above their heads.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Initialization of the plugin's effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 15, 2020
 * * Bug Fixes!
 * ** Morph plugin command should no longer cause crashes. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the updated features!
 * * Feature Updates!
 * ** Updates to these Plugin Commands made by Yanfly:
 * *** Call Event: Remote Activation
 * *** Event Icon: Change
 * *** Event Icon: Delete
 * *** Event Location: Create
 * *** Event Location: Delete
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * *** Morph Event: Change
 * *** Morph Event: Remove
 * *** Self Switch: A B C D
 * *** Self Switch: Switch ID
 * *** Self Variable: Variable ID
 * **** All of the above Plugin Commands can now use 0 for their Event ID's in
 *      order to refer to the running event's ID value.
 * 
 * Version 1.10: November 1, 2020
 * * Bug Fixes!
 * ** Spawned Event preserve function now works properly. Fix made by Arisu.
 * 
 * Version 1.09: October 25, 2020
 * * Documentation Update
 * ** Added clarity on the notetags and comment tags on when their effects
 *    are present.
 * * Feature Update!
 * ** Event icons now have an unsmoothing property to them to make them
 *    look better. Update made by Irina.
 * 
 * Version 1.08: October 11, 2020
 * * Compatibility Update
 * ** Added failsafes for better compatibility.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** Updated for the new features!
 * * Feature Update!
 * ** Data from deleted events will now be cleared and removed from maps if the
 *    events do not exist to prevent conflict with plugins from the VisuStella
 *    MZ library and other plugins. Feature added by Irina.
 * ** Move Route Custom Commands now support self variable values! If you wish
 *    to use a value from a self variable, insert \SelfVar[x] in place of the x
 *    in any of the below. This will only draw from the current event. If you 
 *    wish to draw data from outside event self variables, we recommend you
 *    use the \V[x] variant after using the Plugin Commands to draw data from
 *    them for the best accuracy.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly!
 * *** Movement > Bitmap > Smoothing
 * **** Do you want to smooth or pixelate the map sprites? Pixelating them is
 *      better for zooming and tilting.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Events & Movement Core no longer disables the Core Engine's Smart Event
 *    Collision plugin parameter. Fix made by Yanfly.
 * * Documentation Update!
 * ** Move Route Custom Commands updated with the new feature for inserting
 *    variable values.
 * * Feature Update!
 * ** Move Route Custom Commands now support $gameVariable.value(x) values.
 *    You can also just use \V[x] for variable values, too. Added by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** If player movement is disabled, mouse movement is disabled, too.
 *    Fix made by Arisu.
 * ** The region restriction notetags should be fixed and work again.
 *    Fix made by Arisu.
 * 
 * Version 1.04: September 13, 2020
 * * Feature Update!
 * * Some Move Route Custom Commands are updated to ignore spaces:
 * ** Jump To: x, y
 * ** Move To: x, y
 * ** Step Toward: x, y
 * ** Step Away From: x, y
 * ** Turn To: x, y
 * ** Turn Away From: x, y
 * ** Teleport To: x, y
 * *** These can now be written as x,y. There still needs to be a space between
 *     the : and x for parsing clarity, however.
 * *** Feature updated by Arisu with help from BlueMoon and Zeriab.
 * * New Features!
 * ** New 'Move Route Custom Commands' added by Arisu.
 * *** Fade In: x
 * *** Fade Out: x
 * *** Force Carry: On
 * *** Force Carry: Off
 * *** Force Dash: On
 * *** Force Dash: Off
 * ** New Plugin Commands added by Arisu.
 * *** Player Movement: Control
 * **** Enable or disable player control over the player character's movement.
 * *** Player Movement: Diagonal
 * **** Override settings to for player diagonal movement.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Sleeping pose is now fixed and working! Fix made by Yanfly.
 * * Documentation Update!
 * ** Extended "Features: Self Switches and Variables" to explain how to use
 *    script calls to grab self switch information.
 * * New Features!
 * ** New Plugin Commands added by Yanfly:
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * **** These plugin commands allow you to transfer data stored in a self
 *      switch or Self Variable into a global switch or global variable.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** <Diagonal Movement: Off> notetag now works properly. Fix made by Yanfly.
 * ** Plugin Command "Event Label: Visible" now works properly. Fix made by
 *    Shaz.
 * ** Custom Move Route commands should now be working properly. Fix made by
 *    Shaz.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Event Cache issues fixed upon loading a saved game. Fix made by Yanfly.
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
 * @command Separator_AutoMove
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutoMoveEvents
 * @text Auto Movement: Events
 * @desc Allow/stop events from auto movement.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Allow
 * @value Allow
 * @option Stop
 * @value Stop
 * @option Toggle
 * @value Toggle
 * @desc Allow events to move automatically?
 * @default Allow
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_CallEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEvent
 * @text Call Event: Remote Read
 * @desc Runs the page of a different event remotely. This will run
 * the page of the target event on the CURRENT event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to remotely run. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg PageId:eval
 * @text Page ID
 * @desc The page of the remote event to run.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_DashEnable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DashEnableToggle
 * @text Dash Enable: Toggle
 * @desc Enable/Disable Dashing on maps.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Enable
 * @value Enable
 * @option Disable
 * @value Disable
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change dashing to?
 * @default Enable
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChange
 * @text Event Icon: Change (Temporary)
 * @desc Change the icon that appears on an event.
 * This change is temporary and resets upon new events.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChangeForced
 * @text Event Icon: Change (Forced)
 * @desc Change the icon that appears on an event.
 * This change is forced and needs to be restored.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconDelete
 * @text Event Icon: Delete
 * @desc Delete the icon that appears on an event.
 * This will remain deleted and invisible for events.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconRestore
 * @text Event Icon: Restore
 * @desc Restores a deleted or forced icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLabel
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelRefresh
 * @text Event Label: Refresh
 * @desc Refresh all Event Labels on screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelVisible
 * @text Event Label: Visible
 * @desc Change the visibility of Event Labels.
 *
 * @arg Visibility:str
 * @text Visibility
 * @type select
 * @option Visible
 * @value Visible
 * @option Hidden
 * @value Hidden
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change visibility to?
 * @default Visible
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLocation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationSave
 * @text Event Location: Save
 * @desc Memorize an event's map location so it reappears there
 * the next time the map is loaded.
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationCreate
 * @text Event Location: Create
 * @desc Creates a custom spawn location for a specific map's event
 * so it appears there the next time the map is loaded.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent MapId:eval
 * @desc The X coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent MapId:eval
 * @desc The Y coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Direction:num
 * @text Direction
 * @parent MapId:eval
 * @type select
 * @option 1 - Lower Left
 * @value 1
 * @option 2 - Down
 * @value 2
 * @option 3 - Lower Right
 * @value 3
 * @option 4 - Left
 * @value 4
 * @option 6 - Right
 * @value 6
 * @option 7 - Upper Left
 * @value 7
 * @option 8 - Up
 * @value 8
 * @option 9 - Upper Right
 * @value 9
 * @desc The direction the event will be facing.
 * @default 2
 *
 * @arg Optional
 *
 * @arg PageId:eval
 * @text Page ID
 * @parent Optional
 * @desc The page of the event to set the move route to.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg MoveRouteIndex:eval
 * @text Move Route Index
 * @parent Optional
 * @desc The point in the move route for this event to be at
 * if the page ID matches the rest of the page conditions.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationDelete
 * @text Event Location: Delete
 * @desc Deletes an event's saved map location.
 * The event will reappear at its default location.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventPopup
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupPlayer
 * @text Event Popup: Player
 * @desc Makes a centered event popup on the player sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "+\\LastGainObjQuantity\\LastGainObj"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupFollower
 * @text Event Popup: Follower
 * @desc Makes a centered event popup on target follower sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg FollowerIndex:eval
 * @text Follower Index
 * @desc Which follower index to play popup?
 * Index starts at 0. You may use JavaScript code.
 * @default 0
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "\\I[23]"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupEvent
 * @text Event Popup: Event
 * @desc Makes a centered event popup on target event sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to play popup on.
 * Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "Line1\nLine2"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupTargetTile
 * @text Event Popup: Target Tile
 * @desc Makes a centered event popup on target tile.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg TileX:eval
 * @text Map Tile X
 * @desc The x coordinate of the map tile.
 * You may use JavaScript code.
 * @default $gameMap.width() / 2
 *
 * @arg TileY:eval
 * @text Map Tile Y
 * @desc The y coordinate of the map tile.
 * You may use JavaScript code.
 * @default $gameMap.height() / 2
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "\\I[87]"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-24","endOffsetX:eval":"+0","endOffsetY:eval":"-24","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventTimer
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireEvent
 * @text Event Timer: Expire Event Assign
 * @desc Sets a Common Event to run upon expiration.
 * Bypasses the default code if one is set.
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Select the Common Event to run upon the timer's expiration.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerSpeed
 * @text Event Timer: Change Speed
 * @desc Changes the timer frame decrease (or increase) speed.
 *
 * @arg Speed:eval
 * @text Speed
 * @desc How many 1/60ths of a second does each frame increase or
 * decrease by? Negative decreases. Positive increases.
 * @default -1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireClear
 * @text Event Timer: Expire Event Clear
 * @desc Clears any set to expire Common Event and instead,
 * run the default Game_Timer expiration code.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesGain
 * @text Event Timer: Frames Gain
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are gained or lost for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc How many 1/60ths of a second are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc How many seconds are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc How many minutes are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc How many hours are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesSet
 * @text Event Timer: Frames Set
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are set for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc Set frame count to this value.
 * Each frame is 1/60th of a second. JavaScript allowed.
 * @default 0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc Set seconds to this value.
 * JavaScript allowed.
 * @default 0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc Set minutes to this value.
 * Each minute is 60 seconds. JavaScript allowed.
 * @default 0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc Set hours to this value.
 * Each hour is 60 minutes. JavaScript allowed.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerPause
 * @text Event Timer: Pause
 * @desc Pauses the current event timer, but does not stop it.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerResume
 * @text Event Timer: Resume
 * @desc Resumes the current event timer from the paused state.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Follower
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetGlobalChase
 * @text Follower: Set Global Chase
 * @desc Disables all followers from chasing the player
 * or reenables it.
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets all followers to chase the player or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetTargetChase
 * @text Follower: Set Target Chase
 * @desc Disables target follower from chasing the player
 * or reenables it.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to disable/reenable chasing for.
 * @default 1
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets target follower to chase its target or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetControl
 * @text Follower: Set Control
 * @desc Sets the event commands to target a follower when "Player"
 * is selected as the target.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to control.
 * 0 is the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerReset
 * @text Follower: Reset
 * @desc Resets all follower controls. Event Commands that target
 * the "Player" return to normal and followers chase again.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchABCD
 * @text Global Switch: Get Self Switch A B C D
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to obtain data from.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchID
 * @text Global Switch: Get Self Switch ID
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the source switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableGetSelfVariableID
 * @text Global Variable: Get Self Variable ID
 * @desc Gets the current stored value from a Self Variable and
 * stores it onto a Global Variable.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the source variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetVariableId:num
 * @text Target Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MorphEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventTo
 * @text Morph Event: Change
 * @desc Runs the page of a different event remotely.
 *
 * @arg Step1
 * @text Step 1: To Be Changed
 *
 * @arg Step1MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step1EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2
 * @text Step 2: Change Into
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step2
 * @desc Name of the target event template to morph into.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg Step2MapId:eval
 * @text Map ID
 * @parent Step2
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2EventId:eval
 * @text Event ID
 * @parent Step2
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2Preserve:eval
 * @text Preserve Morph
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the morph effect preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventRemove
 * @text Morph Event: Remove
 * @desc Remove the morph status of an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the event to remove morph from. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg RemovePreserve:eval
 * @text Remove Preservation
 * @parent Step2
 * @type boolean
 * @on Remove
 * @off Contain
 * @desc Also remove the preservation effect?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconChange
 * @text Player Icon: Change
 * @desc Change the icon that appears on on the player.
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconDelete
 * @text Player Icon: Delete
 * @desc Delete the icon that appears on the player.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerMovement
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementChange
 * @text Player Movement: Control
 * @desc Enable or disable player control over the player character's movement.
 *
 * @arg Enable:eval
 * @text Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Let the player control where the player character moves?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementDiagonal
 * @text Player Movement: Diagonal
 * @desc Override settings to for player diagonal movement.
 *
 * @arg Setting:str
 * @text Setting
 * @type select
 * @option Default: Whatever the Map Uses
 * @value default
 * @option Forcefully Disable Diagonal Movement
 * @value disable
 * @option Forcefully Enable Diagonal Movement
 * @value enable
 * @desc How do you want to change diagonal movement?
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfData
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfDataResetAll
 * @text Self Data: Reset All
 * @desc Reset the Self Switch and Self Variable data of all events
 * within the specified map.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchABCD
 * @text Self Switch: A B C D
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to change.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchID
 * @text Self Switch: Switch ID
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfVariableID
 * @text Self Variable: Variable ID
 * @desc Change the Self Variable of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Operation:str
 * @text Operation
 * @type select
 * @option = Set
 * @value =
 * @option + Add
 * @value +
 * @option - Subtract
 * @value -
 * @option * Multiply
 * @value *
 * @option / Divide
 * @value /
 * @option % Modulus
 * @value %
 * @desc Set the operation used.
 * @default =
 *
 * @arg Break2
 * @text -
 *
 * @arg Value:eval
 * @text Value
 * @desc Insert the value to modify the Self Variable by.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SpawnEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtXY
 * @text Spawn Event: Spawn At X, Y
 * @desc Spawns desired event at X, Y location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtRegion
 * @text Spawn Event: Spawn At Region
 * @desc Spawns desired event at a random region-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) to spawn this event at.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtTerrainTag
 * @text Spawn Event: Spawn At Terrain Tag
 * @desc Spawns desired event at a random terrain tag-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) to spawn this event at.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEventID
 * @text Spawn Event: Despawn Event ID
 * @desc Despawns the selected Event ID on the current map.
 *
 * @arg EventID:eval
 * @text Event ID
 * @type combo
 * @option $gameMap.firstSpawnedEventID()
 * @option $gameMap.lastSpawnedEventID()
 * @option 1001
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default $gameMap.lastSpawnedEventID()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnAtXY
 * @text Spawn Event: Despawn At X, Y
 * @desc Despawns any spawned event(s) at X, Y location on the current map.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnRegions
 * @text Spawn Event: Despawn Region(s)
 * @desc Despawns the selected Region(s) on the current map.
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) and despawn everything inside it.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnTerrainTags
 * @text Spawn Event: Despawn Terrain Tag(s)
 * @desc Despawns the selected Terrain Tags(s) on the current map.
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) and despawn everything inside it.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEverything
 * @text Spawn Event: Despawn Everything
 * @desc Despawns all spawned events on the current map.
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
 * @param EventsMoveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Label:struct
 * @text Event Label Settings
 * @type struct<Label>
 * @desc Choose settings regarding the Event Labels.
 * @default {"FontSize:num":"22","IconSize:num":"26","LineHeight:num":"30","OffsetX:num":"0","OffsetY:num":"12","OpacitySpeed:num":"16","VisibleRange:num":"30"}
 *
 * @param Icon:struct
 * @text Event Icon Settings
 * @type struct<Icon>
 * @desc Choose settings regarding the Event Icons.
 * @default {"BufferX:num":"0","BufferY:num":"12","BlendMode:num":"0"}
 *
 * @param Template:struct
 * @text Event Template Settings
 * @type struct<Template>
 * @desc Choose settings regarding Event Templates.
 * @default {"Settings":"","PreloadMaps:arraynum":"[\"1\"]","Prefabs":"","List:arraystruct":"[]","JavaScript":"","PreCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\""}
 *
 * @param EventBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Movement:struct
 * @text Movement Settings
 * @type struct<Movement>
 * @desc Change the rules regarding movement in the game.
 * @default {"Dir8":"","EnableDir8:eval":"true","StrictCollision:eval":"true","FavorHorz:eval":"true","SlowerSpeed:eval":"false","DiagonalSpeedMultiplier:num":"0.85","AutoMove":"","StopAutoMoveEvents:eval":"true","StopAutoMoveMessages:eval":"true","Bitmap":"","BitmapSmoothing:eval":"false","Dash":"","DashModifier:num":"+1.0","EnableDashTilt:eval":"true","TiltLeft:num":"-0.15","TiltRight:num":"0.15","TiltVert:num":"0.05","EventMove":"","RandomMoveWeight:num":"0.10","Shadows":"","ShowShadows:eval":"true","DefaultShadow:str":"Shadow1","TurnInPlace":"","EnableTurnInPlace:eval":"false","TurnInPlaceDelay:num":"10","Vehicle":"","BoatSpeed:num":"4.0","ShipSpeed:num":"5.0","AirshipSpeed:num":"6.0"}
 *
 * @param VS8:struct
 * @text VisuStella 8-Dir Settings
 * @type struct<VS8>
 * @desc Choose settings regarding VisuStella 8-Directional Sprites.
 * @default {"Balloons":"","AutoBalloon:eval":"true","BalloonOffsetX:num":"0","BalloonOffsetY:num":"12","Icons":"","AutoBuffer:eval":"true","CarryPose:eval":"true"}
 *
 * @param MovementBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Region:struct
 * @text Region Rulings
 * @type struct<Region>
 * @desc Choose settings regarding regions.
 * @default {"Allow":"","AllAllow:arraynum":"[]","WalkAllow:arraynum":"[]","PlayerAllow:arraynum":"[]","EventAllow:arraynum":"[]","VehicleAllow:arraynum":"[]","BoatAllow:arraynum":"[]","ShipAllow:arraynum":"[]","AirshipAllow:arraynum":"[]","Forbid":"","AllForbid:arraynum":"[]","WalkForbid:arraynum":"[]","PlayerForbid:arraynum":"[]","EventForbid:arraynum":"[]","VehicleForbid:arraynum":"[]","BoatForbid:arraynum":"[]","ShipForbid:arraynum":"[]","AirshipForbid:arraynum":"[]","Dock":"","VehicleDock:arraynum":"[]","BoatDock:arraynum":"[]","BoatDockRegionOnly:eval":"false","ShipDock:arraynum":"[]","ShipDockRegionOnly:eval":"false","AirshipDock:arraynum":"[]","AirshipDockRegionOnly:eval":"false"}
 *
 * @param RegionOk:struct
 * @text Common Event on OK Button
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon pressing the
 * OK button while standing on top of designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param RegionOkTarget:str
 * @text Target Tile
 * @parent RegionOk:struct
 * @type select
 * @option Tile in front of player.
 * @value front
 * @option Tile player is standing on top of.
 * @value standing
 * @desc Which tile should be checked for
 * Common Event on OK Button?
 * @default front
 *
 * @param RegionTouch:struct
 * @text Common Event on Touch
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon stepping the tiles
 * marked by the designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param TerrainTag:struct
 * @text Terrain Tag Settings
 * @type struct<TerrainTag>
 * @desc Choose settings regarding terrain tags.
 * @default {"TerrainTag":"","Rope:num":"1"}
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
 * Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Label:
 *
 * @param SpriteBased:eval
 * @text Sprite Based?
 * @type boolean
 * @on Sprite-Based
 * @off Legacy-Window
 * @desc Use sprite-based labels instead of legacy-window version.
 * Legacy-window version will not be supported in future.
 * @default true
 *
 * @param MobileEnabled:eval
 * @text Mobile-Enabled?
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable event labels for mobile devices?
 * @default true
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc The font size used for the Event Labels.
 * @default 22
 *
 * @param IconSize:num
 * @text Icon Size
 * @type number
 * @min 1
 * @desc The size of the icons used in the Event Labels.
 * @default 26
 *
 * @param LineHeight:num
 * @text Line Height
 * @type number
 * @min 1
 * @desc The line height used for the Event Labels.
 * @default 26
 *
 * @param OffsetX:num
 * @text Offset X
 * @type number
 * @min 0
 * @desc Globally offset all labels horizontally by this amount.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @type number
 * @min 0
 * @desc Globally offset all labels vertically by this amount.
 * @default 12
 *
 * @param OpacitySpeed:num
 * @text Fade Speed
 * @type number
 * @min 1
 * @desc Fade speed for labels.
 * @default 16
 *
 * @param VisibleRange:num
 * @text Visible Range
 * @type number
 * @min 1
 * @desc Range the player has to be within the event to make its label visible.
 * @default 30
 *
 * @param RangeType:str
 * @text Range Type
 * @parent VisibleRange:num
 * @type select
 * @option square
 * @option circle
 * @option diamond
 * @desc What do you want the default label visible range type?
 * @default square
 *
 */
/* ----------------------------------------------------------------------------
 * Icon Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Icon:
 *
 * @param BufferX:num
 * @text Buffer X
 * @desc Default X position buffer for event icons.
 * @default 0
 *
 * @param BufferY:num
 * @text Buffer Y
 * @desc Default Y position buffer for event icons.
 * @default 12
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc Default blend mode for even icons.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Template Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Template:
 *
 * @param Settings
 *
 * @param PreloadMaps:arraynum
 * @text Preloaded Maps
 * @parent Settings
 * @type number[]
 * @desc A list of all the ID's of the maps that will be preloaded
 * to serve as template maps for this plugin.
 * @default ["1"]
 *
 * @param Templates
 *
 * @param List:arraystruct
 * @text Event Template List
 * @parent Templates
 * @type struct<EventTemplate>[]
 * @desc A list of all the Event Templates used by this project.
 * Used for notetags and Plugin Commands.
 * @default []
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Event Template
 * ----------------------------------------------------------------------------
 */
/*~struct~EventTemplate:
 *
 * @param Name:str
 * @text Name
 * @desc Name of the template. It'll be used as anchor points for
 * notetags and Plugin Commands.
 * @default Untitled
 *
 * @param MapID:num
 * @text Map ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the map the template event is stored on.
 * This will automatically add this ID to preloaded list.
 * @default 1
 *
 * @param EventID:num
 * @text Event ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the event the template event is based on.
 * @default 1
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Movement Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Movement:
 *
 * @param Dir8
 * @text 8 Directional Movement
 *
 * @param EnableDir8:eval
 * @text Enable
 * @parent Dir8
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Allow 8-directional movement by default? Players can move diagonally.
 * @default true
 *
 * @param StrictCollision:eval
 * @text Strict Collision
 * @parent Dir8
 * @type boolean
 * @on Strict
 * @off Flexible
 * @desc Enforce strict collission rules where the player must be able to pass both cardinal directions?
 * @default true
 *
 * @param FavorHorz:eval
 * @text Favor Horizontal
 * @parent StrictCollision:eval
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Favor horizontal if cannot pass diagonally but can pass both horizontally and vertically?
 * @default true
 *
 * @param SlowerSpeed:eval
 * @text Slower Diagonals?
 * @parent Dir8
 * @type boolean
 * @on Slower
 * @off Normal
 * @desc Enforce a slower movement speed when moving diagonally?
 * @default false
 *
 * @param DiagonalSpeedMultiplier:num
 * @text Speed Multiplier
 * @parent SlowerSpeed:eval
 * @desc What's the multiplier to adjust movement speed when moving diagonally?
 * @default 0.85
 *
 * @param AutoMove
 * @text Automatic Movement
 *
 * @param StopAutoMoveEvents:eval
 * @text Stop During Events
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while events are running.
 * @default true
 *
 * @param StopAutoMoveMessages:eval
 * @text Stop During Messages
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while a message is running.
 * @default true
 *
 * @param Bitmap
 *
 * @param BitmapSmoothing:eval
 * @text Smoothing
 * @parent Bitmap
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Do you want to smooth or pixelate the map sprites?
 * Pixelating them is better for zooming and tilting.
 * @default false
 *
 * @param Dash
 * @text Dash
 *
 * @param DashModifier:num
 * @text Dash Modifier
 * @parent Dash
 * @desc Alters the dash speed modifier.
 * @default +1.0
 *
 * @param DashOnLadder:eval
 * @text Dash On Ladder?
 * @parent Dash
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow dashing while on a ladder or rope?
 * @default false
 *
 * @param EnableDashTilt:eval
 * @text Enable Dash Tilt?
 * @parent Dash
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Tilt any sprites that are currently dashing?
 * @default true
 *
 * @param TiltLeft:num
 * @text Tilt Left Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving left (upper left, left, lower left).
 * @default -0.15
 *
 * @param TiltRight:num
 * @text Tilt Right Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving right (upper right, right, lower right).
 * @default 0.15
 *
 * @param TiltVert:num
 * @text Tilt Vertical Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving vertical (up, down).
 * @default 0.05
 * 
 * @param EventMove
 * @text Event Movement
 *
 * @param RandomMoveWeight:num
 * @text Random Move Weight
 * @parent EventMove
 * @desc Use numbers between 0 and 1. Numbers closer to 1 stay
 * closer to their home position. 0 to disable it.
 * @default 0.10
 *
 * @param ShiftY:num
 * @text Shift Y
 * @parent EventMove
 * @desc How many pixels should non-tile characters be shifted by?
 * Negative: up. Positive: down.
 * @default -6
 *
 * @param PathFind
 * @text Path Finding
 *
 * @param PathfindMobileEnabled:eval
 * @text Mobile-Enabled?
 * @parent PathFind
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable diagonal pathfinding for mobile devices?
 * @default false
 *
 * @param Shadows
 *
 * @param ShowShadows:eval
 * @text Show
 * @parent Shadows
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show shadows on all events and player-related sprites.
 * @default true
 *
 * @param DefaultShadow:str
 * @text Default Filename
 * @parent Shadows
 * @type file
 * @dir img/system/
 * @desc Default filename used for shadows found in img/system/ folder.
 * @default Shadow1
 *
 * @param TurnInPlace
 * @text Turn in Place
 *
 * @param EnableTurnInPlace:eval
 * @text Enable
 * @parent TurnInPlace
 * @type boolean
 * @on Turn in Place
 * @off Skip
 * @desc When not dashing, player will turn in place before moving.
 * This only applies with keyboard inputs.
 * @default false
 *
 * @param TurnInPlaceDelay:num
 * @text Delay in Frames
 * @parent TurnInPlace
 * @type number
 * @min 0
 * @desc The number of frames to wait before moving.
 * @default 10
 *
 * @param Vehicle
 * @text Vehicle Speeds
 *
 * @param BoatSpeed:num
 * @text Boat Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the boat vehicle.
 * @default 4.0
 *
 * @param ShipSpeed:num
 * @text Ship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the ship vehicle.
 * @default 5.0
 *
 * @param AirshipSpeed:num
 * @text Airship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the airship vehicle.
 * @default 6.0
 *
 */
/* ----------------------------------------------------------------------------
 * Region Rulings
 * ----------------------------------------------------------------------------
 */
/*~struct~Region:
 *
 * @param Allow
 * @text Allow Regions
 *
 * @param AllAllow:arraynum
 * @text All Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkAllow:arraynum
 * @text Walk Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerAllow:arraynum
 * @text Player Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventAllow:arraynum
 * @text Event Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleAllow:arraynum
 * @text Vehicle Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatAllow:arraynum
 * @text Boat Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipAllow:arraynum
 * @text Ship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipAllow:arraynum
 * @text Airship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Forbid
 * @text Forbid Regions
 *
 * @param AllForbid:arraynum
 * @text All Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkForbid:arraynum
 * @text Walk Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerForbid:arraynum
 * @text Player Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventForbid:arraynum
 * @text Event Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleForbid:arraynum
 * @text Vehicle Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where vehicles cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatForbid:arraynum
 * @text Boat Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipForbid:arraynum
 * @text Ship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipForbid:arraynum
 * @text Airship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Dock
 * @text Dock Regions
 *
 * @param VehicleDock:arraynum
 * @text Vehicle Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDock:arraynum
 * @text Boat Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent BoatDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Boats can only dock at designated regions.
 * @default false
 *
 * @param ShipDock:arraynum
 * @text Ship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent ShipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Ships can only dock at designated regions.
 * @default false
 *
 * @param AirshipDock:arraynum
 * @text Airship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent AirshipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Airships can only dock at designated regions.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Region Common Events
 * ----------------------------------------------------------------------------
 */
/*~struct~RegionCommonEvent:
 *
 * @param Region1:num
 * @text Region 1
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region2:num
 * @text Region 2
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region3:num
 * @text Region 3
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region4:num
 * @text Region 4
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region5:num
 * @text Region 5
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region6:num
 * @text Region 6
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region7:num
 * @text Region 7
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region8:num
 * @text Region 8
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region9:num
 * @text Region 9
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region10:num
 * @text Region 10
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region11:num
 * @text Region 11
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region12:num
 * @text Region 12
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region13:num
 * @text Region 13
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region14:num
 * @text Region 14
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region15:num
 * @text Region 15
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region16:num
 * @text Region 16
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region17:num
 * @text Region 17
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region18:num
 * @text Region 18
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region19:num
 * @text Region 19
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region20:num
 * @text Region 20
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region21:num
 * @text Region 21
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region22:num
 * @text Region 22
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region23:num
 * @text Region 23
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region24:num
 * @text Region 24
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region25:num
 * @text Region 25
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region26:num
 * @text Region 26
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region27:num
 * @text Region 27
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region28:num
 * @text Region 28
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region29:num
 * @text Region 29
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region30:num
 * @text Region 30
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region31:num
 * @text Region 31
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region32:num
 * @text Region 32
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region33:num
 * @text Region 33
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region34:num
 * @text Region 34
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region35:num
 * @text Region 35
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region36:num
 * @text Region 36
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region37:num
 * @text Region 37
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region38:num
 * @text Region 38
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region39:num
 * @text Region 39
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region40:num
 * @text Region 40
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region41:num
 * @text Region 41
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region42:num
 * @text Region 42
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region43:num
 * @text Region 43
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region44:num
 * @text Region 44
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region45:num
 * @text Region 45
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region46:num
 * @text Region 46
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region47:num
 * @text Region 47
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region48:num
 * @text Region 48
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region49:num
 * @text Region 49
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region50:num
 * @text Region 50
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region51:num
 * @text Region 51
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region52:num
 * @text Region 52
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region53:num
 * @text Region 53
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region54:num
 * @text Region 54
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region55:num
 * @text Region 55
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region56:num
 * @text Region 56
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region57:num
 * @text Region 57
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region58:num
 * @text Region 58
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region59:num
 * @text Region 59
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region60:num
 * @text Region 60
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region61:num
 * @text Region 61
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region62:num
 * @text Region 62
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region63:num
 * @text Region 63
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region64:num
 * @text Region 64
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region65:num
 * @text Region 65
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region66:num
 * @text Region 66
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region67:num
 * @text Region 67
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region68:num
 * @text Region 68
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region69:num
 * @text Region 69
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region70:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region71:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region72:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region73:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region74:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region75:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region76:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region77:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region78:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region79:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 90
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 91
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 92
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 93
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 94
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 95
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 96
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 97
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 98
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 99
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region100:num
 * @text Region 100
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region101:num
 * @text Region 101
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region102:num
 * @text Region 102
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region103:num
 * @text Region 103
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region104:num
 * @text Region 104
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region105:num
 * @text Region 105
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region106:num
 * @text Region 106
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region107:num
 * @text Region 107
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region108:num
 * @text Region 108
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region109:num
 * @text Region 109
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region110:num
 * @text Region 110
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region111:num
 * @text Region 111
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region112:num
 * @text Region 112
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region113:num
 * @text Region 113
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region114:num
 * @text Region 114
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region115:num
 * @text Region 115
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region116:num
 * @text Region 116
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region117:num
 * @text Region 117
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region118:num
 * @text Region 118
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region119:num
 * @text Region 119
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region120:num
 * @text Region 120
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region121:num
 * @text Region 121
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region122:num
 * @text Region 122
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region123:num
 * @text Region 123
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region124:num
 * @text Region 124
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region125:num
 * @text Region 125
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region126:num
 * @text Region 126
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region127:num
 * @text Region 127
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region128:num
 * @text Region 128
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region129:num
 * @text Region 129
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region130:num
 * @text Region 130
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region131:num
 * @text Region 131
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region132:num
 * @text Region 132
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region133:num
 * @text Region 133
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region134:num
 * @text Region 134
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region135:num
 * @text Region 135
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region136:num
 * @text Region 136
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region137:num
 * @text Region 137
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region138:num
 * @text Region 138
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region139:num
 * @text Region 139
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region140:num
 * @text Region 140
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region141:num
 * @text Region 141
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region142:num
 * @text Region 142
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region143:num
 * @text Region 143
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region144:num
 * @text Region 144
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region145:num
 * @text Region 145
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region146:num
 * @text Region 146
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region147:num
 * @text Region 147
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region148:num
 * @text Region 148
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region149:num
 * @text Region 149
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region150:num
 * @text Region 150
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region151:num
 * @text Region 151
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region152:num
 * @text Region 152
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region153:num
 * @text Region 153
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region154:num
 * @text Region 154
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region155:num
 * @text Region 155
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region156:num
 * @text Region 156
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region157:num
 * @text Region 157
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region158:num
 * @text Region 158
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region159:num
 * @text Region 159
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region160:num
 * @text Region 160
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region161:num
 * @text Region 161
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region162:num
 * @text Region 162
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region163:num
 * @text Region 163
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region164:num
 * @text Region 164
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region165:num
 * @text Region 165
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region166:num
 * @text Region 166
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region167:num
 * @text Region 167
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region168:num
 * @text Region 168
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region169:num
 * @text Region 169
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region170:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region171:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region172:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region173:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region174:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region175:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region176:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region177:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region178:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region179:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 190
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 191
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 192
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 193
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 194
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 195
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 196
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 197
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 198
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 199
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region200:num
 * @text Region 200
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region201:num
 * @text Region 201
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region202:num
 * @text Region 202
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region203:num
 * @text Region 203
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region204:num
 * @text Region 204
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region205:num
 * @text Region 205
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region206:num
 * @text Region 206
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region207:num
 * @text Region 207
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region208:num
 * @text Region 208
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region209:num
 * @text Region 209
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region210:num
 * @text Region 210
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region211:num
 * @text Region 211
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region212:num
 * @text Region 212
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region213:num
 * @text Region 213
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region214:num
 * @text Region 214
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region215:num
 * @text Region 215
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region216:num
 * @text Region 216
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region217:num
 * @text Region 217
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region218:num
 * @text Region 218
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region219:num
 * @text Region 219
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region220:num
 * @text Region 220
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region221:num
 * @text Region 221
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region222:num
 * @text Region 222
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region223:num
 * @text Region 223
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region224:num
 * @text Region 224
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region225:num
 * @text Region 225
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region226:num
 * @text Region 226
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region227:num
 * @text Region 227
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region228:num
 * @text Region 228
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region229:num
 * @text Region 229
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region230:num
 * @text Region 230
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region231:num
 * @text Region 231
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region232:num
 * @text Region 232
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region233:num
 * @text Region 233
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region234:num
 * @text Region 234
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region235:num
 * @text Region 235
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region236:num
 * @text Region 236
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region237:num
 * @text Region 237
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region238:num
 * @text Region 238
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region239:num
 * @text Region 239
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region240:num
 * @text Region 240
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region241:num
 * @text Region 241
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region242:num
 * @text Region 242
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region243:num
 * @text Region 243
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region244:num
 * @text Region 244
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region245:num
 * @text Region 245
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region246:num
 * @text Region 246
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region247:num
 * @text Region 247
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region248:num
 * @text Region 248
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region249:num
 * @text Region 249
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region250:num
 * @text Region 250
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region251:num
 * @text Region 251
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region252:num
 * @text Region 252
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region253:num
 * @text Region 253
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region254:num
 * @text Region 254
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region255:num
 * @text Region 255
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Terrain Tag Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TerrainTag:
 *
 * @param TerrainTag
 * @text Terrain Tag ID's
 *
 * @param Rope:num
 * @text Rope
 * @parent TerrainTag
 * @type number
 * @min 0
 * @max 7
 * @desc Which terrain tag number to use for ropes?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * VisuStella 8-Dir Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VS8:
 *
 * @param Balloons
 * @text Balloon Icon Settings
 *
 * @param AutoBalloon:eval
 * @text Auto-Balloon Poses
 * @parent Balloons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically pose VS8 sprites when using balloon icons.
 * @default true
 *
 * @param BalloonOffsetX:num
 * @text Balloon Offset X
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by x pixels.
 * @default 0
 *
 * @param BalloonOffsetY:num
 * @text Balloon Offset Y
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by y pixels.
 * @default 10
 *
 * @param Icons
 * 
 * @param AutoBuffer:eval
 * @text Auto Buffer
 * @parent Icons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically buffer the X and Y coordinates of
 * VS8 sprites?
 * @default true
 * 
 * @param CarryPose:eval
 * @text Use Carry Pose
 * @parent Icons
 * @type boolean
 * @on Carry Pose
 * @off Normal
 * @desc Use the carry pose when moving with an icon overhead.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Popup Extra Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PopupExtra:
 *
 * @param Fade
 * @text Fade Settings
 *
 * @param fadeInDuration:eval
 * @text Fade In Duration
 * @parent Fade
 * @desc How many frames does it take to fade in?
 * 60 frames = 1 second.
 * @default 8
 *
 * @param fadeOutDuration:eval
 * @text Fade Out Duration
 * @parent Fade
 * @desc How many frames does it take to fade out?
 * 60 frames = 1 second.
 * @default 8
 *
 * @param Offset
 * @text Offset Settings
 *
 * @param startOffsetX:eval
 * @text Starting Offset X
 * @parent Offset
 * @desc Offsets the starting x position. You may use code.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param startOffsetY:eval
 * @text Starting Offset Y
 * @parent Offset
 * @desc Offsets the starting y position. You may use code.
 * Negative: up. Positive: down.
 * @default -48
 *
 * @param endOffsetX:eval
 * @text Ending Offset X
 * @parent Offset
 * @desc Offsets the ending x position. You may use code.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param endOffsetY:eval
 * @text Ending Offset Y
 * @parent Offset
 * @desc Offsets the ending y position. You may use code.
 * Negative: up. Positive: down.
 * @default -96
 *
 * @param Scale
 * @text Scaling Settings
 *
 * @param startScaleX:eval
 * @text Starting Scale X
 * @parent Scale
 * @desc What is the starting scale x? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param startScaleY:eval
 * @text Starting Scale Y
 * @parent Scale
 * @desc What is the starting scale y? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param endScaleX:eval
 * @text Ending Scale X
 * @parent Scale
 * @desc What is the ending scale x? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param endScaleY:eval
 * @text Ending Scale Y
 * @parent Scale
 * @desc What is the ending scale y? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param Angle
 * @text Angle Settings
 *
 * @param startAngle:eval
 * @text Starting Offset Angle
 * @parent Angle
 * @desc What is the starting angle offset?
 * Use numbers between 0 and 360. You may use code.
 * @default +0
 *
 * @param endAngle:eval
 * @text Ending Offset Angle
 * @parent Angle
 * @desc What is the ending angle offset?
 * Use numbers between 0 and 360. You may use code.
 * @default +0
 * 
 * @param Misc
 * @text Misc Settings
 * 
 * @param Arc:eval
 * @text Arc Peak
 * @parent Misc
 * @desc This is the height of the popup's trajectory arc
 * in pixels. Positive: up. Negative: down. Code allowed.
 * @default +0
 *
 */
//=============================================================================

var tier = tier || 0x0;
var dependencies = [];
var pluginData = $plugins.filter(function (_0x2c4839) {
  return _0x2c4839.status && _0x2c4839.description.includes("[EventsMoveCore]");
})[0x0];
VisuMZ.EventsMoveCore.Settings = VisuMZ.EventsMoveCore.Settings || {};
VisuMZ.ConvertParams = function (_0x2550c1, _0xbc9f4a) {
  for (const _0xd31522 in _0xbc9f4a) {
    if (_0xd31522.match(/(.*):(.*)/i)) {
      const _0x2c4465 = String(RegExp.$1);
      const _0x388404 = String(RegExp.$2).toUpperCase().trim();
      let _0x447c47;
      let _0x935a91;
      let _0x13afcb;
      switch (_0x388404) {
        case "NUM":
          _0x447c47 = _0xbc9f4a[_0xd31522] !== '' ? Number(_0xbc9f4a[_0xd31522]) : 0x0;
          break;
        case "ARRAYNUM":
          _0x935a91 = _0xbc9f4a[_0xd31522] !== '' ? JSON.parse(_0xbc9f4a[_0xd31522]) : [];
          _0x447c47 = _0x935a91.map(_0x4aefcb => Number(_0x4aefcb));
          break;
        case "EVAL":
          _0x447c47 = _0xbc9f4a[_0xd31522] !== '' ? eval(_0xbc9f4a[_0xd31522]) : null;
          break;
        case "ARRAYEVAL":
          _0x935a91 = _0xbc9f4a[_0xd31522] !== '' ? JSON.parse(_0xbc9f4a[_0xd31522]) : [];
          _0x447c47 = _0x935a91.map(_0x219484 => eval(_0x219484));
          break;
        case "JSON":
          _0x447c47 = _0xbc9f4a[_0xd31522] !== '' ? JSON.parse(_0xbc9f4a[_0xd31522]) : '';
          break;
        case "ARRAYJSON":
          _0x935a91 = _0xbc9f4a[_0xd31522] !== '' ? JSON.parse(_0xbc9f4a[_0xd31522]) : [];
          _0x447c47 = _0x935a91.map(_0x11982e => JSON.parse(_0x11982e));
          break;
        case "FUNC":
          _0x447c47 = _0xbc9f4a[_0xd31522] !== '' ? new Function(JSON.parse(_0xbc9f4a[_0xd31522])) : new Function("return 0");
          break;
        case "ARRAYFUNC":
          _0x935a91 = _0xbc9f4a[_0xd31522] !== '' ? JSON.parse(_0xbc9f4a[_0xd31522]) : [];
          _0x447c47 = _0x935a91.map(_0x57b30c => new Function(JSON.parse(_0x57b30c)));
          break;
        case 'STR':
          _0x447c47 = _0xbc9f4a[_0xd31522] !== '' ? String(_0xbc9f4a[_0xd31522]) : '';
          break;
        case "ARRAYSTR":
          _0x935a91 = _0xbc9f4a[_0xd31522] !== '' ? JSON.parse(_0xbc9f4a[_0xd31522]) : [];
          _0x447c47 = _0x935a91.map(_0x352f97 => String(_0x352f97));
          break;
        case 'STRUCT':
          _0x13afcb = _0xbc9f4a[_0xd31522] !== '' ? JSON.parse(_0xbc9f4a[_0xd31522]) : {};
          _0x2550c1[_0x2c4465] = {};
          VisuMZ.ConvertParams(_0x2550c1[_0x2c4465], _0x13afcb);
          continue;
        case "ARRAYSTRUCT":
          _0x935a91 = _0xbc9f4a[_0xd31522] !== '' ? JSON.parse(_0xbc9f4a[_0xd31522]) : [];
          _0x447c47 = _0x935a91.map(_0x38bcd9 => VisuMZ.ConvertParams({}, JSON.parse(_0x38bcd9)));
          break;
        default:
          continue;
      }
      _0x2550c1[_0x2c4465] = _0x447c47;
    }
  }
  return _0x2550c1;
};
(_0x4cde14 => {
  const _0x2d1ee3 = _0x4cde14.name;
  for (const _0x2478f0 of dependencies) {
    if (!Imported[_0x2478f0]) {
      alert("%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.".format(_0x2d1ee3, _0x2478f0));
      SceneManager.exit();
      break;
    }
  }
  const _0x5a2778 = _0x4cde14.description;
  if (_0x5a2778.match(/\[Version[ ](.*?)\]/i)) {
    const _0x104893 = Number(RegExp.$1);
    if (_0x104893 !== VisuMZ.EventsMoveCore.version) {
      alert("%1's version does not match plugin's. Please update it in the Plugin Manager.".format(_0x2d1ee3, _0x104893));
      SceneManager.exit();
    }
  }
  if (_0x5a2778.match(/\[Tier[ ](\d+)\]/i)) {
    const _0x32f445 = Number(RegExp.$1);
    if (_0x32f445 < tier) {
      alert("%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.".format(_0x2d1ee3, _0x32f445, tier));
      SceneManager.exit();
    } else {
      tier = Math.max(_0x32f445, tier);
    }
  }
  VisuMZ.ConvertParams(VisuMZ.EventsMoveCore.Settings, _0x4cde14.parameters);
})(pluginData);
VisuMZ.OperateValues = function (_0x2a6f36, _0x13827c, _0x3c108c) {
  switch (_0x3c108c) {
    case '=':
      return _0x13827c;
      break;
    case '+':
      return _0x2a6f36 + _0x13827c;
      break;
    case '-':
      return _0x2a6f36 - _0x13827c;
      break;
    case '*':
      return _0x2a6f36 * _0x13827c;
      break;
    case '/':
      return _0x2a6f36 / _0x13827c;
      break;
    case '%':
      return _0x2a6f36 % _0x13827c;
      break;
  }
  return _0x2a6f36;
};
PluginManager.registerCommand(pluginData.name, "AutoMoveEvents", _0xf8691d => {
  VisuMZ.ConvertParams(_0xf8691d, _0xf8691d);
  switch (_0xf8691d.Value) {
    case "Allow":
      $gameSystem.setAllowEventAutoMovement(true);
      break;
    case "Stop":
      $gameSystem.setAllowEventAutoMovement(false);
      break;
    case "Toggle":
      $gameSystem.setAllowEventAutoMovement(!$gameSystem.isAllowEventAutoMovement());
      break;
  }
});
PluginManager.registerCommand(pluginData.name, 'CallEvent', _0x1b0dfb => {
  VisuMZ.ConvertParams(_0x1b0dfb, _0x1b0dfb);
  const _0x22db92 = $gameTemp.getLastPluginCommandInterpreter();
  const _0x385e42 = {
    'mapId': _0x1b0dfb.MapId,
    'eventId': _0x1b0dfb.EventId || _0x22db92.eventId(),
    'pageId': _0x1b0dfb.PageId
  };
  if (_0x385e42.mapId <= 0x0) {
    _0x385e42.mapId = $gameMap ? $gameMap.mapId() : 0x1;
  }
  $gameTemp.getLastPluginCommandInterpreter().pluginCommandCallEvent(_0x385e42);
});
PluginManager.registerCommand(pluginData.name, "DashEnableToggle", _0x2145ee => {
  VisuMZ.ConvertParams(_0x2145ee, _0x2145ee);
  switch (_0x2145ee.Value) {
    case 'Enable':
      $gameSystem.setDashingEnabled(true);
      break;
    case "Disable":
      $gameSystem.setDashingEnabled(false);
      break;
    case "Toggle":
      $gameSystem.setDashingEnabled(!$gameSystem.isDashingEnabled());
      break;
  }
});
PluginManager.registerCommand(pluginData.name, "EventIconChange", _0x135814 => {
  VisuMZ.ConvertParams(_0x135814, _0x135814);
  const _0x34b350 = $gameTemp.getLastPluginCommandInterpreter();
  _0x135814.MapId = _0x135814.MapId || $gameMap.mapId();
  $gameSystem.setEventIconDataKey(_0x135814.MapId, _0x135814.EventId || _0x34b350.eventId(), _0x135814.IconIndex, _0x135814.IconBufferX, _0x135814.IconBufferY, _0x135814.IconBlendMode, false);
});
PluginManager.registerCommand(pluginData.name, "EventIconChangeForced", _0x2c7cda => {
  VisuMZ.ConvertParams(_0x2c7cda, _0x2c7cda);
  const _0xc06e9d = $gameTemp.getLastPluginCommandInterpreter();
  _0x2c7cda.MapId = _0x2c7cda.MapId || $gameMap.mapId();
  $gameSystem.setEventIconDataKey(_0x2c7cda.MapId, _0x2c7cda.EventId || _0xc06e9d.eventId(), _0x2c7cda.IconIndex, _0x2c7cda.IconBufferX, _0x2c7cda.IconBufferY, _0x2c7cda.IconBlendMode, true);
});
PluginManager.registerCommand(pluginData.name, "EventIconDelete", _0x2700a5 => {
  VisuMZ.ConvertParams(_0x2700a5, _0x2700a5);
  const _0xeac0fe = $gameTemp.getLastPluginCommandInterpreter();
  _0x2700a5.MapId = _0x2700a5.MapId || $gameMap.mapId();
  $gameSystem.deleteIconsOnEventsDataKey(_0x2700a5.MapId, _0x2700a5.EventId || _0xeac0fe.eventId());
});
PluginManager.registerCommand(pluginData.name, "EventIconRestore", _0x1a1519 => {
  VisuMZ.ConvertParams(_0x1a1519, _0x1a1519);
  const _0x4fdf2a = $gameTemp.getLastPluginCommandInterpreter();
  _0x1a1519.MapId = _0x1a1519.MapId || $gameMap.mapId();
  $gameSystem.restoreIconsOnEventsDataKey(_0x1a1519.MapId, _0x1a1519.EventId || _0x4fdf2a.eventId());
});
PluginManager.registerCommand(pluginData.name, "EventLabelRefresh", _0x17b6e4 => {
  if ($gameMap) {
    for (const _0x1c189f of $gameMap.events()) {
      _0x1c189f.refresh();
      _0x1c189f.updateEventLabelText();
    }
  }
  if (SceneManager.isSceneMap()) {
    const _0x5ada6f = SceneManager._scene._spriteset;
    if (_0x5ada6f) {
      _0x5ada6f.refreshEventLabels();
    }
  }
});
PluginManager.registerCommand(pluginData.name, "EventLabelVisible", _0x412b17 => {
  VisuMZ.ConvertParams(_0x412b17, _0x412b17);
  switch (_0x412b17.Visibility) {
    case "Visible":
      $gameSystem.setEventLabelsVisible(true);
      break;
    case "Hidden":
      $gameSystem.setEventLabelsVisible(false);
      break;
    case "Toggle":
      $gameSystem.setEventLabelsVisible(!$gameSystem.eventLabelsVisible());
      break;
  }
});
PluginManager.registerCommand(pluginData.name, 'EventLocationSave', _0x13c9dc => {
  VisuMZ.ConvertParams(_0x13c9dc, _0x13c9dc);
  const _0x1b6a09 = $gameTemp.getLastPluginCommandInterpreter();
  if (!$gameMap) {
    return;
  }
  const _0x243455 = $gameMap.event(_0x13c9dc.EventId || _0x1b6a09.eventId());
  if (_0x243455) {
    _0x243455.saveEventLocation();
  }
});
PluginManager.registerCommand(pluginData.name, "EventLocationCreate", _0x4a317a => {
  VisuMZ.ConvertParams(_0x4a317a, _0x4a317a);
  const _0x3e5fdd = $gameTemp.getLastPluginCommandInterpreter();
  const _0x4dd5f6 = _0x4a317a.MapId || $gameMap.mapId();
  const _0x4118d2 = _0x4a317a.EventId || _0x3e5fdd.eventId();
  const _0x3bb645 = _0x4a317a.PosX || 0x0;
  const _0x5c8b9b = _0x4a317a.PosY || 0x0;
  const _0x2dea61 = _0x4a317a.Direction || 0x2;
  const _0x24fddb = ((_0x4a317a.PageId || 0x1) - 0x1).clamp(0x0, 0x13);
  const _0xf50484 = _0x4a317a.MoveRouteIndex || 0x0;
  $gameSystem.createSaveEventLocationData(_0x4dd5f6, _0x4118d2, _0x3bb645, _0x5c8b9b, _0x2dea61, _0x24fddb, _0xf50484);
});
PluginManager.registerCommand(pluginData.name, "EventLocationDelete", _0x46dac8 => {
  VisuMZ.ConvertParams(_0x46dac8, _0x46dac8);
  const _0x5d88b1 = $gameTemp.getLastPluginCommandInterpreter();
  const _0x4d3fb1 = _0x46dac8.MapId || $gameMap.mapId();
  const _0x3f80db = _0x46dac8.EventId || _0x5d88b1.eventId();
  $gameSystem.deleteSavedEventLocationKey(_0x4d3fb1, _0x3f80db);
});
VisuMZ.EventsMoveCore.ApplyPopupExtraSettings = function (_0x3eac3c, _0x1df9e1) {
  _0x1df9e1 = _0x1df9e1 || {};
  _0x3eac3c.fadeDuration = {
    'fadeIn': _0x1df9e1.fadeInDuration || 0x0,
    'fadeOut': _0x1df9e1.fadeOutDuration || 0x0
  };
  _0x3eac3c.startOffset = {
    'x': _0x1df9e1.startOffsetX || 0x0,
    'y': _0x1df9e1.startOffsetY || 0x0
  };
  _0x3eac3c.endOffset = {
    'x': _0x1df9e1.endOffsetX || 0x0,
    'y': _0x1df9e1.endOffsetY || 0x0
  };
  _0x3eac3c.endScale = {
    'x': _0x1df9e1.endScaleX || 0x0,
    'y': _0x1df9e1.endScaleY || 0x0
  };
  _0x3eac3c.startScale = {
    'x': _0x1df9e1.startScaleX || 0x0,
    'y': _0x1df9e1.startScaleY || 0x0
  };
  _0x3eac3c.angle = {
    'start': _0x1df9e1.startAngle || 0x0,
    'end': _0x1df9e1.endAngle || 0x0
  };
  _0x3eac3c.misc = {
    'arc': _0x1df9e1.Arc || 0x0
  };
};
PluginManager.registerCommand(pluginData.name, 'MsgPopupPlayer', _0xd7d342 => {
  if (!SceneManager.isInstanceOfSceneMap()) {
    return;
  }
  if (!Imported.VisuMZ_1_MessageCore) {
    if ($gameTemp.isPlaytest()) {
      alert("VisuMZ_1_MessageCore is required to run \"Event Popup: Player\" plugin command!");
    }
    return;
  }
  VisuMZ.ConvertParams(_0xd7d342, _0xd7d342);
  const _0x14ba7e = {
    'text': _0xd7d342.MessageText || '',
    'duration': Math.max(_0xd7d342.MsgDuration || 0x3c, 0xc)
  };
  const _0x21a9a9 = _0xd7d342.PopupExtra || {};
  VisuMZ.EventsMoveCore.ApplyPopupExtraSettings(_0x14ba7e, _0x21a9a9);
  const _0x207ea1 = SceneManager._scene._spriteset;
  if (_0x207ea1) {
    _0x207ea1.createEventsMoveCoreMessagePopup($gamePlayer, _0x14ba7e);
  }
});
PluginManager.registerCommand(pluginData.name, "MsgPopupFollower", _0x1ef7b2 => {
  if (!SceneManager.isInstanceOfSceneMap()) {
    return;
  }
  if (!Imported.VisuMZ_1_MessageCore) {
    if ($gameTemp.isPlaytest()) {
      alert("VisuMZ_1_MessageCore is required to run \"Event Popup: Player\" plugin command!");
    }
    return;
  }
  VisuMZ.ConvertParams(_0x1ef7b2, _0x1ef7b2);
  const _0x33d632 = _0x1ef7b2.FollowerIndex || 0x0;
  const _0x1495f6 = {
    'text': _0x1ef7b2.MessageText || '',
    'duration': Math.max(_0x1ef7b2.MsgDuration || 0x3c, 0xc)
  };
  const _0x186e5d = _0x1ef7b2.PopupExtra || {};
  VisuMZ.EventsMoveCore.ApplyPopupExtraSettings(_0x1495f6, _0x186e5d);
  const _0x103041 = SceneManager._scene._spriteset;
  if (_0x103041) {
    const _0x4a9712 = $gamePlayer.followers().follower(_0x33d632);
    _0x103041.createEventsMoveCoreMessagePopup(_0x4a9712, _0x1495f6);
  }
});
PluginManager.registerCommand(pluginData.name, "MsgPopupEvent", _0x7b76d3 => {
  if (!SceneManager.isInstanceOfSceneMap()) {
    return;
  }
  if (!Imported.VisuMZ_1_MessageCore) {
    if ($gameTemp.isPlaytest()) {
      alert("VisuMZ_1_MessageCore is required to run \"Event Popup: Player\" plugin command!");
    }
    return;
  }
  VisuMZ.ConvertParams(_0x7b76d3, _0x7b76d3);
  const _0xd27862 = $gameTemp.getLastPluginCommandInterpreter();
  const _0x5b9b6b = _0x7b76d3.EventId || (_0xd27862 ? _0xd27862.eventId() : 0x1);
  const _0x2ea2d5 = {
    'text': _0x7b76d3.MessageText || '',
    'duration': Math.max(_0x7b76d3.MsgDuration || 0x3c, 0xc)
  };
  const _0x5b6bc6 = _0x7b76d3.PopupExtra || {};
  VisuMZ.EventsMoveCore.ApplyPopupExtraSettings(_0x2ea2d5, _0x5b6bc6);
  const _0x42df7b = SceneManager._scene._spriteset;
  if (_0x42df7b) {
    const _0x3053c4 = $gameMap.event(_0x5b9b6b);
    _0x42df7b.createEventsMoveCoreMessagePopup(_0x3053c4, _0x2ea2d5);
  }
});
PluginManager.registerCommand(pluginData.name, "MsgPopupTargetTile", _0x3f244e => {
  if (!SceneManager.isInstanceOfSceneMap()) {
    return;
  }
  if (!Imported.VisuMZ_1_MessageCore) {
    if ($gameTemp.isPlaytest()) {
      alert("VisuMZ_1_MessageCore is required to run \"Event Popup: Player\" plugin command!");
    }
    return;
  }
  VisuMZ.ConvertParams(_0x3f244e, _0x3f244e);
  const _0x50e8ca = {
    'text': _0x3f244e.MessageText || '',
    'duration': Math.max(_0x3f244e.MsgDuration || 0x3c, 0xc),
    'tileCoordinates': {
      'x': Math.round(_0x3f244e.TileX || 0x0),
      'y': Math.round(_0x3f244e.TileY || 0x0)
    }
  };
  const _0x1d1ce1 = _0x3f244e.PopupExtra || {};
  VisuMZ.EventsMoveCore.ApplyPopupExtraSettings(_0x50e8ca, _0x1d1ce1);
  const _0x33b039 = SceneManager._scene._spriteset;
  if (_0x33b039) {
    _0x33b039.createEventsMoveCoreTileMessagePopup(_0x50e8ca);
  }
});
PluginManager.registerCommand(pluginData.name, 'EventTimerExpireEvent', _0x12b0df => {
  VisuMZ.ConvertParams(_0x12b0df, _0x12b0df);
  const _0x3febb0 = _0x12b0df.CommonEventID;
  $gameTimer.setCommonEvent(_0x3febb0);
});
PluginManager.registerCommand(pluginData.name, 'EventTimerExpireClear', _0x437110 => {
  $gameTimer.setCommonEvent(0x0);
});
PluginManager.registerCommand(pluginData.name, 'EventTimerFramesGain', _0x3649ce => {
  if (!$gameTimer.isWorking()) {
    return;
  }
  VisuMZ.ConvertParams(_0x3649ce, _0x3649ce);
  let _0x12b9d3 = 0x0;
  _0x12b9d3 += _0x3649ce.Frames;
  _0x12b9d3 += _0x3649ce.Seconds * 0x3c;
  _0x12b9d3 += _0x3649ce.Minutes * 0x3c * 0x3c;
  _0x12b9d3 += _0x3649ce.Hours * 0x3c * 0x3c * 0x3c;
  $gameTimer.gainFrames(_0x12b9d3);
});
PluginManager.registerCommand(pluginData.name, "EventTimerFramesSet", _0x5020bc => {
  if (!$gameTimer.isWorking()) {
    return;
  }
  VisuMZ.ConvertParams(_0x5020bc, _0x5020bc);
  let _0x104977 = 0x0;
  _0x104977 += _0x5020bc.Frames;
  _0x104977 += _0x5020bc.Seconds * 0x3c;
  _0x104977 += _0x5020bc.Minutes * 0x3c * 0x3c;
  _0x104977 += _0x5020bc.Hours * 0x3c * 0x3c * 0x3c;
  $gameTimer.setFrames(_0x104977);
});
PluginManager.registerCommand(pluginData.name, "EventTimerPause", _0x1d0c19 => {
  if (!$gameTimer.isWorking()) {
    return;
  }
  $gameTimer.pause();
});
PluginManager.registerCommand(pluginData.name, "EventTimerResume", _0x444229 => {
  if (!$gameTimer.isWorking()) {
    return;
  }
  $gameTimer.resume();
});
PluginManager.registerCommand(pluginData.name, "EventTimerSpeed", _0x2969d0 => {
  VisuMZ.ConvertParams(_0x2969d0, _0x2969d0);
  const _0x452540 = _0x2969d0.Speed || 0x0;
  $gameTimer.changeSpeed(_0x452540);
});
PluginManager.registerCommand(pluginData.name, "FollowerSetGlobalChase", _0x237912 => {
  VisuMZ.ConvertParams(_0x237912, _0x237912);
  const _0x124a48 = !_0x237912.Chase;
  $gameSystem.setStopFollowerChasing(_0x124a48);
});
PluginManager.registerCommand(pluginData.name, 'FollowerSetTargetChase', _0x347566 => {
  VisuMZ.ConvertParams(_0x347566, _0x347566);
  const _0x5d2bc7 = (_0x347566.FollowerID || 0x0) - 0x1;
  const _0x315257 = !_0x347566.Chase;
  const _0x2dec08 = $gamePlayer.followers().follower(_0x5d2bc7);
  if (_0x2dec08) {
    _0x2dec08.setChaseOff(_0x315257);
  }
});
PluginManager.registerCommand(pluginData.name, "FollowerSetControl", _0x538274 => {
  VisuMZ.ConvertParams(_0x538274, _0x538274);
  const _0x501a0c = _0x538274.FollowerID;
  $gameSystem.setControlledFollowerID(_0x501a0c);
});
PluginManager.registerCommand(pluginData.name, "FollowerReset", _0x437a40 => {
  VisuMZ.ConvertParams(_0x437a40, _0x437a40);
  $gameSystem.setControlledFollowerID(0x0);
  $gameSystem.setStopFollowerChasing(false);
  for (const _0x6a9ad4 of $gamePlayer.followers()._data) {
    if (_0x6a9ad4) {
      _0x6a9ad4.setChaseOff(false);
    }
  }
});
PluginManager.registerCommand(pluginData.name, "SwitchGetSelfSwitchABCD", _0x351ac1 => {
  VisuMZ.ConvertParams(_0x351ac1, _0x351ac1);
  const _0x437410 = $gameTemp.getLastPluginCommandInterpreter();
  _0x351ac1.MapId = _0x351ac1.MapId || $gameMap.mapId();
  const _0x34cc55 = [_0x351ac1.MapId, _0x351ac1.EventId || _0x437410.eventId(), _0x351ac1.Letter];
  const _0x30d114 = _0x351ac1.TargetSwitchId;
  const _0x1d7f13 = $gameSelfSwitches.value(_0x34cc55) || false;
  $gameSwitches.setValue(_0x30d114, _0x1d7f13);
});
PluginManager.registerCommand(pluginData.name, 'SwitchGetSelfSwitchID', _0x330b24 => {
  VisuMZ.ConvertParams(_0x330b24, _0x330b24);
  const _0x59cabf = $gameTemp.getLastPluginCommandInterpreter();
  _0x330b24.MapId = _0x330b24.MapId || $gameMap.mapId();
  const _0x4f785b = [_0x330b24.MapId, _0x330b24.EventId || _0x59cabf.eventId(), "Self Switch %1".format(_0x330b24.SwitchId)];
  const _0x39f137 = _0x330b24.TargetSwitchId;
  const _0x5335a0 = $gameSelfSwitches.value(_0x4f785b) || false;
  $gameSwitches.setValue(_0x39f137, _0x5335a0);
});
PluginManager.registerCommand(pluginData.name, "VariableGetSelfVariableID", _0x538a10 => {
  VisuMZ.ConvertParams(_0x538a10, _0x538a10);
  const _0x85ebc8 = $gameTemp.getLastPluginCommandInterpreter();
  _0x538a10.MapId = _0x538a10.MapId || $gameMap.mapId();
  const _0x1ae362 = [_0x538a10.MapId, _0x538a10.EventId || _0x85ebc8.eventId(), "Self Variable %1".format(_0x538a10.VariableId)];
  const _0x57375b = _0x538a10.TargetVariableId;
  const _0x5bf941 = $gameSelfSwitches.value(_0x1ae362) || false;
  $gameVariables.setValue(_0x57375b, _0x5bf941);
});
PluginManager.registerCommand(pluginData.name, "MorphEventTo", _0x555347 => {
  VisuMZ.ConvertParams(_0x555347, _0x555347);
  if (!$gameMap) {
    return;
  }
  const _0x5e6f29 = $gameTemp.getLastPluginCommandInterpreter();
  const _0x5ca89a = _0x555347.Step2Preserve;
  _0x555347.Step1MapId = _0x555347.Step1MapId || $gameMap.mapId();
  _0x555347.Step2MapId = _0x555347.Step2MapId || $gameMap.mapId();
  _0x555347.TemplateName = _0x555347.TemplateName.toUpperCase().trim();
  if (!_0x5ca89a && _0x555347.Step1MapId !== $gameMap.mapId()) {
    return;
  }
  if ($gameMap.mapId() === _0x555347.Step1MapId) {
    const _0x43932c = $gameMap.event(_0x555347.Step1EventId || _0x5e6f29.eventId());
    if (!_0x43932c) {
      return;
    }
    if (_0x555347.TemplateName !== "UNTITLED") {
      _0x43932c.morphIntoTemplate(_0x555347.TemplateName);
    } else {
      _0x43932c.morphInto(_0x555347.Step2MapId, _0x555347.Step2EventId || _0x5e6f29.eventId());
    }
  }
  if (_0x5ca89a) {
    $gameSystem.savePreservedMorphEventDataKey(_0x555347.Step1MapId, _0x555347.Step1EventId, _0x555347.TemplateName, _0x555347.Step2MapId, _0x555347.Step2EventId);
  }
});
PluginManager.registerCommand(pluginData.name, 'MorphEventRemove', _0x43b2d4 => {
  VisuMZ.ConvertParams(_0x43b2d4, _0x43b2d4);
  if (!$gameMap) {
    return;
  }
  const _0x805a08 = $gameTemp.getLastPluginCommandInterpreter();
  _0x43b2d4.MapId = _0x43b2d4.MapId || $gameMap.mapId();
  if ($gameMap.mapId() === _0x43b2d4.MapId) {
    const _0x26ce01 = $gameMap.event(_0x43b2d4.EventId || _0x805a08.eventId());
    _0x26ce01.removeMorph();
  }
  if (_0x43b2d4.RemovePreserve) {
    $gameSystem.deletePreservedMorphEventDataKey(_0x43b2d4.MapId, _0x43b2d4.EventId || _0x805a08.eventId());
  }
});
PluginManager.registerCommand(pluginData.name, 'PlayerIconChange', _0x3467b9 => {
  VisuMZ.ConvertParams(_0x3467b9, _0x3467b9);
  $gameSystem.setEventIconData($gamePlayer, _0x3467b9.IconIndex, _0x3467b9.IconBufferX, _0x3467b9.IconBufferY, _0x3467b9.IconBlendMode);
});
PluginManager.registerCommand(pluginData.name, 'PlayerIconDelete', _0x13d6fe => {
  VisuMZ.ConvertParams(_0x13d6fe, _0x13d6fe);
  $gameSystem.deleteIconsOnEventsData($gamePlayer);
});
PluginManager.registerCommand(pluginData.name, 'PlayerMovementChange', _0x3bf0c2 => {
  VisuMZ.ConvertParams(_0x3bf0c2, _0x3bf0c2);
  $gameSystem.setPlayerControlDisable(!_0x3bf0c2.Enable);
});
PluginManager.registerCommand(pluginData.name, 'PlayerMovementDiagonal', _0x58487d => {
  VisuMZ.ConvertParams(_0x58487d, _0x58487d);
  $gameSystem.setPlayerDiagonalSetting(_0x58487d.Setting);
});
PluginManager.registerCommand(pluginData.name, "SelfDataResetAll", _0x5b615f => {
  VisuMZ.ConvertParams(_0x5b615f, _0x5b615f);
  const _0x498dc2 = _0x5b615f.MapId || $gameMap.mapId();
  $gameSelfSwitches.resetSelfSwitchesForMap(_0x498dc2);
});
PluginManager.registerCommand(pluginData.name, "SelfSwitchABCD", _0x2c57ce => {
  VisuMZ.ConvertParams(_0x2c57ce, _0x2c57ce);
  const _0x3fc6c6 = $gameTemp.getLastPluginCommandInterpreter();
  _0x2c57ce.MapId = _0x2c57ce.MapId || $gameMap.mapId();
  const _0x2e76f9 = [_0x2c57ce.MapId, _0x2c57ce.EventId || _0x3fc6c6.eventId(), _0x2c57ce.Letter];
  switch (_0x2c57ce.Value) {
    case 'ON':
      $gameSelfSwitches.setValue(_0x2e76f9, true);
      break;
    case 'OFF':
      $gameSelfSwitches.setValue(_0x2e76f9, false);
      break;
    case "Toggle":
      $gameSelfSwitches.setValue(_0x2e76f9, !$gameSelfSwitches.value(_0x2e76f9));
      break;
  }
});
PluginManager.registerCommand(pluginData.name, "SelfSwitchID", _0x39407e => {
  VisuMZ.ConvertParams(_0x39407e, _0x39407e);
  const _0x5d0640 = $gameTemp.getLastPluginCommandInterpreter();
  _0x39407e.MapId = _0x39407e.MapId || $gameMap.mapId();
  const _0x546d11 = [_0x39407e.MapId, _0x39407e.EventId || _0x5d0640.eventId(), "Self Switch %1".format(_0x39407e.SwitchId)];
  switch (_0x39407e.Value) {
    case 'ON':
      $gameSelfSwitches.setValue(_0x546d11, true);
      break;
    case "OFF":
      $gameSelfSwitches.setValue(_0x546d11, false);
      break;
    case "Toggle":
      $gameSelfSwitches.setValue(_0x546d11, !$gameSelfSwitches.value(_0x546d11));
      break;
  }
});
PluginManager.registerCommand(pluginData.name, 'SelfVariableID', _0x199714 => {
  VisuMZ.ConvertParams(_0x199714, _0x199714);
  const _0x22a5c8 = $gameTemp.getLastPluginCommandInterpreter();
  _0x199714.MapId = _0x199714.MapId || $gameMap.mapId();
  const _0x30629a = [_0x199714.MapId, _0x199714.EventId || _0x22a5c8.eventId(), "Self Variable %1".format(_0x199714.VariableId)];
  const _0xf4aad6 = VisuMZ.OperateValues($gameSelfSwitches.value(_0x30629a), _0x199714.Value, _0x199714.Operation);
  $gameSelfSwitches.setValue(_0x30629a, _0xf4aad6);
});
PluginManager.registerCommand(pluginData.name, 'SpawnEventAtXY', _0x4b9a65 => {
  VisuMZ.ConvertParams(_0x4b9a65, _0x4b9a65);
  const _0x3d7108 = $gameTemp.getLastPluginCommandInterpreter();
  const _0xe003b7 = {
    'template': _0x4b9a65.TemplateName,
    'mapId': _0x4b9a65.MapId || $gameMap.mapId(),
    'eventId': _0x4b9a65.EventId || _0x3d7108.eventId(),
    'x': _0x4b9a65.PosX,
    'y': _0x4b9a65.PosY,
    'spawnPreserved': _0x4b9a65.Preserve,
    'spawnEventId': $gameMap._spawnedEvents.length + 0x3e8
  };
  const _0x3067b4 = _0x4b9a65.SuccessSwitchId || 0x0;
  if (!VisuMZ.PreloadedMaps[_0xe003b7.mapId] && _0xe003b7.mapId !== $gameMap.mapId()) {
    let _0x1f3e89 = "You do not have Map %1 added to the list\n".format(_0xe003b7.mapId);
    _0x1f3e89 += "of Preloaded Maps.\n\n";
    _0x1f3e89 += "Set this up in Events & Movement Core's\n";
    _0x1f3e89 += "Plugin Parameters > Event Template Settings >\n";
    _0x1f3e89 += "Preloaded Maps and add in Map %1".format(_0xe003b7.mapId);
    alert(_0x1f3e89);
    return;
  }
  const _0x48c235 = $gameMap.prepareSpawnedEventAtXY(_0xe003b7, _0x4b9a65.Collision, _0x4b9a65.Passability);
  if (_0x3067b4) {
    $gameSwitches.setValue(_0x3067b4, !!_0x48c235);
  }
});
PluginManager.registerCommand(pluginData.name, "SpawnEventAtRegion", _0x391e73 => {
  VisuMZ.ConvertParams(_0x391e73, _0x391e73);
  const _0x3f9084 = $gameTemp.getLastPluginCommandInterpreter();
  const _0x432ba8 = {
    'template': _0x391e73.TemplateName,
    'mapId': _0x391e73.MapId || $gameMap.mapId(),
    'eventId': _0x391e73.EventId || _0x3f9084.eventId(),
    'x': -0x1,
    'y': -0x1,
    'spawnPreserved': _0x391e73.Preserve,
    'spawnEventId': $gameMap._spawnedEvents.length + 0x3e8
  };
  const _0x3731ee = _0x391e73.SuccessSwitchId || 0x0;
  if (!VisuMZ.PreloadedMaps[_0x432ba8.mapId] && _0x432ba8.mapId !== $gameMap.mapId()) {
    let _0x2787e1 = "You do not have Map %1 added to the list\n".format(_0x432ba8.mapId);
    _0x2787e1 += "of Preloaded Maps.\n\n";
    _0x2787e1 += "Set this up in Events & Movement Core's\n";
    _0x2787e1 += "Plugin Parameters > Event Template Settings >\n";
    _0x2787e1 += "Preloaded Maps and add in Map %1".format(_0x432ba8.mapId);
    alert(_0x2787e1);
    return;
  }
  const _0x5148ed = $gameMap.prepareSpawnedEventAtRegion(_0x432ba8, _0x391e73.Region, _0x391e73.Collision, _0x391e73.Passability);
  if (_0x3731ee) {
    $gameSwitches.setValue(_0x3731ee, !!_0x5148ed);
  }
});
PluginManager.registerCommand(pluginData.name, "SpawnEventAtTerrainTag", _0x15ebe8 => {
  VisuMZ.ConvertParams(_0x15ebe8, _0x15ebe8);
  const _0x22e4a7 = $gameTemp.getLastPluginCommandInterpreter();
  const _0x3c5cac = {
    'template': _0x15ebe8.TemplateName,
    'mapId': _0x15ebe8.MapId || $gameMap.mapId(),
    'eventId': _0x15ebe8.EventId || _0x22e4a7.eventId(),
    'x': -0x1,
    'y': -0x1,
    'spawnPreserved': _0x15ebe8.Preserve,
    'spawnEventId': $gameMap._spawnedEvents.length + 0x3e8
  };
  const _0x1337fb = _0x15ebe8.SuccessSwitchId || 0x0;
  if (!VisuMZ.PreloadedMaps[_0x3c5cac.mapId] && _0x3c5cac.mapId !== $gameMap.mapId()) {
    let _0x5671f5 = "You do not have Map %1 added to the list\n".format(_0x3c5cac.mapId);
    _0x5671f5 += "of Preloaded Maps.\n\n";
    _0x5671f5 += "Set this up in Events & Movement Core's\n";
    _0x5671f5 += "Plugin Parameters > Event Template Settings >\n";
    _0x5671f5 += "Preloaded Maps and add in Map %1".format(_0x3c5cac.mapId);
    alert(_0x5671f5);
    return;
  }
  const _0x33f1ad = $gameMap.prepareSpawnedEventAtTerrainTag(_0x3c5cac, _0x15ebe8.TerrainTags, _0x15ebe8.Collision, _0x15ebe8.Passability);
  if (_0x1337fb) {
    $gameSwitches.setValue(_0x1337fb, !!_0x33f1ad);
  }
});
PluginManager.registerCommand(pluginData.name, "SpawnEventDespawnEventID", _0x5bdc21 => {
  VisuMZ.ConvertParams(_0x5bdc21, _0x5bdc21);
  const _0x2ebd86 = $gameTemp.getLastPluginCommandInterpreter();
  $gameMap.despawnEventId(_0x5bdc21.EventID || _0x2ebd86.eventId());
});
PluginManager.registerCommand(pluginData.name, "SpawnEventDespawnAtXY", _0x3814cd => {
  VisuMZ.ConvertParams(_0x3814cd, _0x3814cd);
  const _0x4e6376 = _0x3814cd.PosX;
  const _0x375fee = _0x3814cd.PosY;
  $gameMap.despawnAtXY(_0x4e6376, _0x375fee);
});
PluginManager.registerCommand(pluginData.name, "SpawnEventDespawnRegions", _0x5c5285 => {
  VisuMZ.ConvertParams(_0x5c5285, _0x5c5285);
  $gameMap.despawnRegions(_0x5c5285.Region);
});
PluginManager.registerCommand(pluginData.name, "SpawnEventDespawnTerrainTags", _0x2c51b8 => {
  VisuMZ.ConvertParams(_0x2c51b8, _0x2c51b8);
  $gameMap.despawnTerrainTags(_0x2c51b8.TerrainTags);
});
PluginManager.registerCommand(pluginData.name, "SpawnEventDespawnEverything", _0x3f3c68 => {
  VisuMZ.ConvertParams(_0x3f3c68, _0x3f3c68);
  $gameMap.despawnEverything();
});
VisuMZ.EventsMoveCore.Scene_Boot_onDatabaseLoaded = Scene_Boot.prototype.onDatabaseLoaded;
Scene_Boot.prototype.onDatabaseLoaded = function () {
  VisuMZ.EventsMoveCore.Scene_Boot_onDatabaseLoaded.call(this);
  this.process_VisuMZ_EventsMoveCore_LoadTemplateMaps();
  this.process_VisuMZ_EventsMoveCore_Switches_Variables();
  if (VisuMZ.EventsMoveCore.CustomPageConditions) {
    VisuMZ.EventsMoveCore.CustomPageConditions.initialize();
  }
};
VisuMZ.PreloadedMaps = [];
VisuMZ.EventTemplates = {};
Scene_Boot.prototype.process_VisuMZ_EventsMoveCore_LoadTemplateMaps = function () {
  if (DataManager.isBattleTest() || DataManager.isEventTest()) {
    return;
  }
  const _0x31f039 = VisuMZ.EventsMoveCore.Settings.Template;
  const _0x4311ad = _0x31f039.PreloadMaps.slice(0x0);
  for (const _0x30f950 of _0x31f039.List) {
    _0x30f950.Name = _0x30f950.Name.toUpperCase().trim();
    VisuMZ.EventTemplates[_0x30f950.Name] = _0x30f950;
    if (!_0x4311ad.includes(_0x30f950.MapID)) {
      _0x4311ad.push(_0x30f950.MapID);
    }
  }
  for (const _0x4d559b of _0x4311ad) {
    if (VisuMZ.PreloadedMaps[_0x4d559b]) {
      continue;
    }
    const _0x4a7215 = "Map%1.json".format(_0x4d559b.padZero(0x3));
    const _0x2c0e7d = "$preloadedMap_%1".format(_0x4d559b);
    DataManager.loadDataFile(_0x2c0e7d, _0x4a7215);
    setTimeout(this.VisuMZ_Setup_Preload_Map.bind(this, _0x4d559b, _0x2c0e7d), 0x64);
  }
};
Scene_Boot.prototype.VisuMZ_Setup_Preload_Map = function (_0x1c9090, _0x5489a7) {
  if (window[_0x5489a7]) {
    VisuMZ.PreloadedMaps[_0x1c9090] = window[_0x5489a7];
    window[_0x5489a7] = undefined;
  } else {
    setTimeout(this.VisuMZ_Setup_Preload_Map.bind(this, _0x1c9090, _0x5489a7), 0x64);
  }
};
VisuMZ.AdvancedSwitches = [];
VisuMZ.SelfSwitches = [];
VisuMZ.MapSwitches = [];
VisuMZ.AdvancedVariables = [];
VisuMZ.SelfVariables = [];
VisuMZ.MapVariables = [];
Scene_Boot.prototype.process_VisuMZ_EventsMoveCore_Switches_Variables = function () {
  for (let _0x4870f6 = 0x1; _0x4870f6 < $dataSystem.switches.length; _0x4870f6++) {
    if ($dataSystem.switches[_0x4870f6].match(/<JS>\s*([\s\S]*)\s*<\/JS>/i)) {
      VisuMZ.AdvancedSwitches.push(_0x4870f6);
    }
    if ($dataSystem.switches[_0x4870f6].match(/<SELF>/i)) {
      VisuMZ.SelfSwitches.push(_0x4870f6);
    }
    if ($dataSystem.switches[_0x4870f6].match(/<MAP>/i)) {
      VisuMZ.MapSwitches.push(_0x4870f6);
    }
  }
  for (let _0x4cbdc8 = 0x1; _0x4cbdc8 < $dataSystem.variables.length; _0x4cbdc8++) {
    if ($dataSystem.variables[_0x4cbdc8].match(/<JS>\s*([\s\S]*)\s*<\/JS>/i)) {
      VisuMZ.AdvancedVariables.push(_0x4cbdc8);
    }
    if ($dataSystem.variables[_0x4cbdc8].match(/<SELF>/i)) {
      VisuMZ.SelfVariables.push(_0x4cbdc8);
    }
    if ($dataSystem.variables[_0x4cbdc8].match(/<MAP>/i)) {
      VisuMZ.MapVariables.push(_0x4cbdc8);
    }
  }
};
VisuMZ.EventsMoveCore.CustomPageConditions = {};
VisuMZ.EventsMoveCore.CustomPageConditions.initialize = function () {
  this._interpreter = new Game_CPCInterpreter();
  this.determineCommonEventsWithCPC();
};
VisuMZ.EventsMoveCore.CustomPageConditions.determineCommonEventsWithCPC = function () {
  this._commonEvents = [];
  for (const _0x208087 of $dataCommonEvents) {
    if (!_0x208087) {
      continue;
    }
    VisuMZ.EventsMoveCore.CustomPageConditions.loadCPC(_0x208087);
    if (_0x208087.CPC.length > 0x0) {
      this._commonEvents.push(_0x208087.id);
    }
  }
};
VisuMZ.EventsMoveCore.CustomPageConditions.metCPC = function (_0x313af6, _0x3d5859, _0x576aba) {
  this._interpreter.setup(_0x313af6, _0x3d5859);
  if (_0x576aba) {
    this._interpreter.executeCommonEvent(_0x576aba);
  } else {
    this._interpreter.execute();
  }
  return this._interpreter._cpc;
};
VisuMZ.EventsMoveCore.CustomPageConditions.loadCPC = function (_0x45ca78) {
  let _0x2ea7f4 = false;
  _0x45ca78.CPC = [];
  for (const _0x45be35 of _0x45ca78.list) {
    if ([0x6c, 0x198].includes(_0x45be35.code)) {
      const _0x583af7 = _0x45be35.parameters[0x0];
      if (_0x583af7.match(/<PAGE (?:CONDITION|CONDITIONS)>/i)) {
        _0x2ea7f4 = true;
      } else if (_0x583af7.match(/<\/PAGE (?:CONDITION|CONDITIONS)>/i)) {
        _0x2ea7f4 = false;
      }
    }
    if (_0x2ea7f4) {
      _0x45ca78.CPC.push(_0x45be35);
    }
  }
};
getSelfSwitchValue = function (_0x3bdd8f, _0x49b9d0, _0x586115) {
  let _0x1dbf1d = [_0x3bdd8f, _0x49b9d0, "Self Switch %1".format(_0x586115)];
  if (typeof _0x586115 === "string") {
    _0x1dbf1d = [_0x3bdd8f, _0x49b9d0, _0x586115.toUpperCase().trim()];
  }
  return $gameSelfSwitches.value(_0x1dbf1d);
};
getMapSwitchValue = function (_0x301083, _0x1a91c0) {
  let _0x3bbffa = [0x0, 0x0, "Map %1 Switch %2".format(_0x301083, _0x1a91c0)];
  return $gameSelfSwitches.value(_0x3bbffa);
};
getMapVariableValue = function (_0x27d043, _0x121919) {
  let _0x5cd5a0 = [0x0, 0x0, "Map %1 Variable %2".format(_0x27d043, _0x121919)];
  return $gameSelfSwitches.value(_0x5cd5a0);
};
getSelfVariableValue = function (_0x450e80, _0x22c4ab, _0x4c10e6) {
  const _0x2b11d1 = [_0x450e80, _0x22c4ab, "Self Variable %1".format(_0x4c10e6)];
  return $gameSelfSwitches.value(_0x2b11d1);
};
setSelfSwitchValue = function (_0x39a65b, _0x5aac4a, _0x174b73, _0x5228c4) {
  let _0x9d0180 = [_0x39a65b, _0x5aac4a, "Self Switch %1".format(_0x174b73)];
  if (typeof _0x174b73 === "string") {
    _0x9d0180 = [_0x39a65b, _0x5aac4a, _0x174b73.toUpperCase().trim()];
  }
  $gameSelfSwitches.setValue(_0x9d0180, _0x5228c4);
};
setSelfVariableValue = function (_0x12e498, _0xd3adf3, _0x10c6cd, _0x78d929) {
  const _0x432650 = [_0x12e498, _0xd3adf3, "Self Variable %1".format(_0x10c6cd)];
  $gameSelfSwitches.setValue(_0x432650, _0x78d929);
};
setMapSwitchValue = function (_0x4486d0, _0x5eb812, _0x10e6ff) {
  let _0x599e30 = [0x0, 0x0, "Map %1 Switch %2".format(_0x4486d0, _0x5eb812)];
  $gameSelfSwitches.setValue(_0x599e30, _0x10e6ff);
};
setMapVariableValue = function (_0x35a617, _0x220a8c, _0x48b5bf) {
  let _0x17d7c1 = [0x0, 0x0, "Map %1 Variable %2".format(_0x35a617, _0x220a8c)];
  $gameSelfSwitches.setValue(_0x17d7c1, _0x48b5bf);
};
DataManager.isAdvancedSwitch = function (_0x14a80f) {
  if (SceneManager._scene.constructor === Scene_Debug) {
    return false;
  }
  return VisuMZ.AdvancedSwitches.includes(_0x14a80f);
};
DataManager.isAdvancedVariable = function (_0x357254) {
  if (SceneManager._scene.constructor === Scene_Debug) {
    return false;
  }
  return VisuMZ.AdvancedVariables.includes(_0x357254);
};
DataManager.isSelfSwitch = function (_0x1d6f17) {
  if (SceneManager._scene.constructor === Scene_Debug) {
    return false;
  }
  return VisuMZ.SelfSwitches.includes(_0x1d6f17);
};
DataManager.isSelfVariable = function (_0x2c8b87) {
  if (SceneManager._scene.constructor === Scene_Debug) {
    return false;
  }
  return VisuMZ.SelfVariables.includes(_0x2c8b87);
};
DataManager.isMapSwitch = function (_0x209c8f) {
  if (BattleManager.isBattleTest()) {
    return false;
  }
  return VisuMZ.MapSwitches.includes(_0x209c8f);
};
DataManager.isMapVariable = function (_0x4c0c7b) {
  if (BattleManager.isBattleTest()) {
    return false;
  }
  return VisuMZ.MapVariables.includes(_0x4c0c7b);
};
ImageManager.isInvisibleCharacter = function (_0x135318) {
  return _0x135318.match(/\[INV(?:|ISIBLE)\]/i);
};
SceneManager.isSceneMap = function () {
  return this._scene && this._scene.constructor === Scene_Map;
};
SceneManager.isInstanceOfSceneMap = function () {
  return this._scene && this._scene instanceof Scene_Map;
};
VisuMZ.EventsMoveCore.Game_Temp_setDestination = Game_Temp.prototype.setDestination;
Game_Temp.prototype.setDestination = function (_0x2948e3, _0x7a6218) {
  if (this.isEventClickTriggered(_0x2948e3, _0x7a6218)) {
    return;
  }
  VisuMZ.EventsMoveCore.Game_Temp_setDestination.call(this, _0x2948e3, _0x7a6218);
};
Game_Temp.prototype.isEventClickTriggered = function (_0x323433, _0x35fa06) {
  const _0x215893 = $gameMap.eventsXy(_0x323433, _0x35fa06);
  for (const _0x5be2d2 of _0x215893) {
    if (_0x5be2d2 && _0x5be2d2.hasClickTrigger()) {
      _0x5be2d2.onClickTrigger();
      return true;
    }
  }
  if (TouchInput.isLongPressed() && _0x215893.length > 0x0) {
    TouchInput.clear();
  }
  return false;
};
Game_Temp.prototype.setLastPluginCommandInterpreter = function (_0x26c51a) {
  this._lastPluginCommandInterpreter = _0x26c51a;
};
Game_Temp.prototype.getLastPluginCommandInterpreter = function () {
  return this._lastPluginCommandInterpreter;
};
Game_Temp.prototype.registerSelfTarget = function (_0x51dff3) {
  this._selfTarget = _0x51dff3;
};
Game_Temp.prototype.clearSelfTarget = function () {
  this._selfTarget = undefined;
};
Game_Temp.prototype.getSelfTarget = function () {
  return this._selfTarget;
};
VisuMZ.EventsMoveCore.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
  VisuMZ.EventsMoveCore.Game_System_initialize.call(this);
  this.initEventsMoveCore();
  this.initFollowerController();
};
Game_System.prototype.initEventsMoveCore = function () {
  this._EventsMoveCoreSettings = {
    'DashingEnable': true,
    'EventAutoMovement': true,
    'VisibleEventLabels': true
  };
  this._EventIcons = {};
  this._MapSpawnedEventData = [];
  this._PreservedEventMorphData = {};
  this._SavedEventLocations = {};
  this._DisablePlayerControl = false;
  this._PlayerDiagonalSetting = 'default';
};
Game_System.prototype.isDashingEnabled = function () {
  if (this._EventsMoveCoreSettings === undefined) {
    this.initEventsMoveCore();
  }
  if (this._EventsMoveCoreSettings.DashingEnable === undefined) {
    this.initEventsMoveCore();
  }
  return this._EventsMoveCoreSettings.DashingEnable;
};
Game_System.prototype.setDashingEnabled = function (_0x4334a1) {
  if (this._EventsMoveCoreSettings === undefined) {
    this.initEventsMoveCore();
  }
  if (this._EventsMoveCoreSettings.DashingEnable === undefined) {
    this.initEventsMoveCore();
  }
  this._EventsMoveCoreSettings.DashingEnable = _0x4334a1;
};
Game_System.prototype.isAllowEventAutoMovement = function () {
  if (this._EventsMoveCoreSettings === undefined) {
    this.initEventsMoveCore();
  }
  if (this._EventsMoveCoreSettings.EventAutoMovement === undefined) {
    this.initEventsMoveCore();
  }
  return this._EventsMoveCoreSettings.EventAutoMovement;
};
Game_System.prototype.setAllowEventAutoMovement = function (_0x42efe9) {
  if (this._EventsMoveCoreSettings === undefined) {
    this.initEventsMoveCore();
  }
  if (this._EventsMoveCoreSettings.EventAutoMovement === undefined) {
    this.initEventsMoveCore();
  }
  this._EventsMoveCoreSettings.EventAutoMovement = _0x42efe9;
};
Game_System.prototype.eventLabelsVisible = function () {
  if (this._EventsMoveCoreSettings === undefined) {
    this.initEventsMoveCore();
  }
  if (this._EventsMoveCoreSettings.VisibleEventLabels === undefined) {
    this.initEventsMoveCore();
  }
  return this._EventsMoveCoreSettings.VisibleEventLabels;
};
Game_System.prototype.setEventLabelsVisible = function (_0x59568c) {
  if (this._EventsMoveCoreSettings === undefined) {
    this.initEventsMoveCore();
  }
  if (this._EventsMoveCoreSettings.VisibleEventLabels === undefined) {
    this.initEventsMoveCore();
  }
  this._EventsMoveCoreSettings.VisibleEventLabels = _0x59568c;
};
Game_System.prototype.isPlayerControlDisabled = function () {
  if (this._DisablePlayerControl === undefined) {
    this._DisablePlayerControl = false;
  }
  return this._DisablePlayerControl;
};
Game_System.prototype.setPlayerControlDisable = function (_0x10a7aa) {
  this._DisablePlayerControl = _0x10a7aa;
};
Game_System.prototype.getPlayerDiagonalSetting = function () {
  return this._PlayerDiagonalSetting;
};
Game_System.prototype.setPlayerDiagonalSetting = function (_0x137df1) {
  this._PlayerDiagonalSetting = String(_0x137df1).toLowerCase().trim();
};
Game_System.prototype.getEventIconData = function (_0x404530) {
  if (this._EventIcons === undefined) {
    this.initEventsMoveCore();
  }
  if (!_0x404530) {
    return null;
  }
  if (_0x404530 === $gamePlayer) {
    return this._EventIcons.Player;
  } else {
    const _0x1cb246 = VisuMZ.EventsMoveCore.Settings;
    const _0x3847ed = "Map%1-Event%2".format(_0x404530._mapId, _0x404530._eventId);
    this._EventIcons[_0x3847ed] = this._EventIcons[_0x3847ed] || {
      'iconIndex': 0x0,
      'bufferX': _0x1cb246.Icon.BufferX,
      'bufferY': _0x1cb246.Icon.BufferY,
      'blendMode': _0x1cb246.Icon.BlendMode
    };
    return this._EventIcons[_0x3847ed];
  }
};
Game_System.prototype.setEventIconData = function (_0x57e372, _0x5b32c2, _0x5a8a34, _0x56d4f3, _0x89aa8b) {
  if (this._EventIcons === undefined) {
    this.initEventsMoveCore();
  }
  const _0x5c02fe = _0x57e372 === $gamePlayer ? "Player" : "Map%1-Event%2".format(_0x57e372._mapId, _0x57e372._eventId);
  this._EventIcons[_0x5c02fe] = {
    'iconIndex': _0x5b32c2,
    'bufferX': _0x5a8a34,
    'bufferY': _0x56d4f3,
    'blendMode': _0x89aa8b
  };
};
Game_System.prototype.setEventIconDataKey = function (_0x50b17a, _0x189d5e, _0x47e48b, _0x4830ed, _0x29d40f, _0x876fea, _0x2aeefd) {
  if (this._EventIcons === undefined) {
    this.initEventsMoveCore();
  }
  const _0x1582c3 = 'Map%1-Event%2'.format(_0x50b17a, _0x189d5e);
  this._EventIcons[_0x1582c3] = {
    'iconIndex': _0x47e48b,
    'forced': _0x2aeefd,
    'bufferX': _0x4830ed,
    'bufferY': _0x29d40f,
    'blendMode': _0x876fea
  };
};
Game_System.prototype.deleteIconsOnEventsData = function (_0x5d0904) {
  if (this._EventIcons === undefined) {
    this.initEventsMoveCore();
  }
  if (!_0x5d0904) {
    return null;
  }
  if (_0x5d0904 === $gamePlayer) {
    delete this._EventIcons.Player;
  } else {
    this.deleteIconsOnEventsDataKey(_0x5d0904._mapId, _0x5d0904._eventId);
  }
};
Game_System.prototype.deleteIconsOnEventsDataKey = function (_0x3bc111, _0x3fa70f) {
  if (this._EventIcons === undefined) {
    this.initEventsMoveCore();
  }
  this.setEventIconDataKey(_0x3bc111, _0x3fa70f, -0x1, 0x0, 0x0, 0x0, false);
};
Game_System.prototype.resetIconsOnEventsData = function (_0x10aaec) {
  if (this._EventIcons === undefined) {
    this.initEventsMoveCore();
  }
  if (!_0x10aaec) {
    return null;
  }
  if (_0x10aaec === $gamePlayer) {
    delete this._EventIcons.Player;
  } else {
    this.resetIconsOnEventsDataKey(_0x10aaec._mapId, _0x10aaec._eventId);
  }
};
Game_System.prototype.resetIconsOnEventsDataKey = function (_0x104047, _0x2e4073) {
  if (this._EventIcons === undefined) {
    this.initEventsMoveCore();
  }
  const _0x29e25c = "Map%1-Event%2".format(_0x104047, _0x2e4073);
  if (this._EventIcons[_0x29e25c]) {
    if (this._EventIcons[_0x29e25c].iconIndex < 0x0) {
      return;
    }
    if (this._EventIcons[_0x29e25c].forced) {
      return;
    }
  }
  delete this._EventIcons[_0x29e25c];
};
Game_System.prototype.restoreIconsOnEventsDataKey = function (_0x594127, _0xde9978) {
  if (this._EventIcons === undefined) {
    this.initEventsMoveCore();
  }
  const _0x4fbfbc = 'Map%1-Event%2'.format(_0x594127, _0xde9978);
  delete this._EventIcons[_0x4fbfbc];
  if (_0x594127 !== $gameMap.mapId()) {
    return;
  }
  const _0x52cd4e = $gameMap.event(_0xde9978);
  if (!_0x52cd4e) {
    return;
  }
  _0x52cd4e.setupPageSettings();
};
Game_System.prototype.getSavedEventLocation = function (_0xa7af94) {
  if (this._SavedEventLocations === undefined) {
    this.initEventsMoveCore();
  }
  if (!_0xa7af94) {
    return null;
  }
  const _0x3db8db = "Map%1-Event%2".format(_0xa7af94._mapId, _0xa7af94._eventId);
  return this._SavedEventLocations[_0x3db8db];
};
Game_System.prototype.saveEventLocation = function (_0x177dd1) {
  if (this._SavedEventLocations === undefined) {
    this.initEventsMoveCore();
  }
  if (!_0x177dd1) {
    return;
  }
  const _0x4cca22 = "Map%1-Event%2".format(_0x177dd1._mapId, _0x177dd1._eventId);
  this._SavedEventLocations[_0x4cca22] = {
    'direction': _0x177dd1.direction(),
    'x': Math.round(_0x177dd1.x),
    'y': Math.round(_0x177dd1.y),
    'pageIndex': _0x177dd1._pageIndex,
    'moveRouteIndex': _0x177dd1._moveRouteIndex
  };
};
Game_System.prototype.deleteSavedEventLocation = function (_0x521c86) {
  if (this._SavedEventLocations === undefined) {
    this.initEventsMoveCore();
  }
  if (!_0x521c86) {
    return;
  }
  this.deleteSavedEventLocationKey(_0x521c86._mapId, _0x521c86._eventId);
};
Game_System.prototype.deleteSavedEventLocationKey = function (_0x1826f1, _0x20be94) {
  if (this._SavedEventLocations === undefined) {
    this.initEventsMoveCore();
  }
  const _0x16e79d = 'Map%1-Event%2'.format(_0x1826f1, _0x20be94);
  delete this._SavedEventLocations[_0x16e79d];
};
Game_System.prototype.createSaveEventLocationData = function (_0x376170, _0x173723, _0x36ad48, _0x13fdec, _0x119a82, _0x5dc81f, _0x18c781) {
  if (this._SavedEventLocations === undefined) {
    this.initEventsMoveCore();
  }
  const _0x4ff0a1 = "Map%1-Event%2".format(_0x376170, _0x173723);
  this._SavedEventLocations[_0x4ff0a1] = {
    'direction': _0x119a82,
    'x': Math.round(_0x36ad48),
    'y': Math.round(_0x13fdec),
    'pageIndex': _0x5dc81f,
    'moveRouteIndex': _0x18c781
  };
};
Game_System.prototype.getPreservedMorphEventData = function (_0x156e29) {
  if (this._PreservedEventMorphData === undefined) {
    this.initEventsMoveCore();
  }
  if (!_0x156e29) {
    return;
  }
  const _0x4d4e6a = "Map%1-Event%2".format(_0x156e29._mapId, _0x156e29._eventId);
  return this._PreservedEventMorphData[_0x4d4e6a];
};
Game_System.prototype.savePreservedMorphEventDataKey = function (_0x364390, _0x118879, _0x4260cf, _0x3b22aa, _0x17882e) {
  if (this._PreservedEventMorphData === undefined) {
    this.initEventsMoveCore();
  }
  const _0x45a9ae = "Map%1-Event%2".format(_0x364390, _0x118879);
  this._PreservedEventMorphData[_0x45a9ae] = {
    'template': _0x4260cf,
    'mapId': _0x3b22aa,
    'eventId': _0x17882e
  };
};
Game_System.prototype.deletePreservedMorphEventDataKey = function (_0x175ba7, _0x1f5047) {
  if (this._PreservedEventMorphData === undefined) {
    this.initEventsMoveCore();
  }
  const _0x30d17f = "Map%1-Event%2".format(_0x175ba7, _0x1f5047);
  delete this._PreservedEventMorphData[_0x30d17f];
};
Game_System.prototype.getMapSpawnedEventData = function (_0x3b96f0) {
  if (this._MapSpawnedEventData === undefined) {
    this.initEventsMoveCore();
  }
  this._MapSpawnedEventData[_0x3b96f0] = this._MapSpawnedEventData[_0x3b96f0] || [];
  return this._MapSpawnedEventData[_0x3b96f0];
};
Game_System.prototype.removeTemporaryMapSpawnedEvents = function (_0x25e410) {
  const _0x21f133 = this.getMapSpawnedEventData(_0x25e410);
  for (const _0x1b1c0d of _0x21f133) {
    if (!_0x1b1c0d) {
      continue;
    }
    if (_0x1b1c0d._spawnPreserved) {
      continue;
    }
    const _0x15562a = _0x21f133.indexOf(_0x1b1c0d);
    _0x21f133[_0x15562a] = null;
  }
};
Game_System.prototype.initFollowerController = function () {
  this._followerControlID = 0x0;
  this._followerChaseOff = false;
};
Game_System.prototype.getControlledFollowerID = function () {
  if (this._followerControlID === undefined) {
    this.initFollowerController();
  }
  return this._followerControlID;
};
Game_System.prototype.setControlledFollowerID = function (_0x1f1e26) {
  if (this._followerControlID === undefined) {
    this.initFollowerController();
  }
  this._followerControlID = _0x1f1e26;
  ;
};
VisuMZ.EventsMoveCore.Game_Interpreter_character = Game_Interpreter.prototype.character;
Game_Interpreter.prototype.character = function (_0x32b044) {
  if (!$gameParty.inBattle() && _0x32b044 < 0x0) {
    let _0x318e69 = $gameSystem.getControlledFollowerID();
    if (_0x318e69 > 0x0) {
      return $gamePlayer.followers().follower(_0x318e69 - 0x1);
    }
  }
  return VisuMZ.EventsMoveCore.Game_Interpreter_character.call(this, _0x32b044);
};
Game_System.prototype.isStopFollowerChasing = function () {
  if (this._followerChaseOff === undefined) {
    this.initFollowerController();
  }
  return this._followerChaseOff;
};
Game_System.prototype.setStopFollowerChasing = function (_0x28b86f) {
  if (this._followerChaseOff === undefined) {
    this.initFollowerController();
  }
  this._followerChaseOff = _0x28b86f;
  ;
};
VisuMZ.EventsMoveCore.Game_Followers_jumpAll = Game_Followers.prototype.jumpAll;
Game_Followers.prototype.jumpAll = function () {
  if ($gameSystem.isStopFollowerChasing()) {
    return;
  }
  VisuMZ.EventsMoveCore.Game_Followers_jumpAll.call(this);
};
VisuMZ.EventsMoveCore.Game_Timer_initialize = Game_Timer.prototype.initialize;
Game_Timer.prototype.initialize = function () {
  VisuMZ.EventsMoveCore.Game_Timer_initialize.call(this);
  this.initEventsMoveCore();
};
Game_Timer.prototype.initEventsMoveCore = function () {
  this._paused = false;
  this._speed = -0x1;
  this._expireCommonEvent = 0x0;
};
Game_Timer.prototype.update = function (_0x2a00e9) {
  if (!_0x2a00e9) {
    return;
  }
  if (!this._working) {
    return;
  }
  if (this._paused) {
    return;
  }
  if (this._frames <= 0x0) {
    return;
  }
  if (this._speed === undefined) {
    this.initEventsMoveCore();
  }
  this._frames += this._speed;
  if (this._frames <= 0x0) {
    this.onExpire();
  }
};
VisuMZ.EventsMoveCore.Game_Timer_start = Game_Timer.prototype.start;
Game_Timer.prototype.start = function (_0x466945) {
  VisuMZ.EventsMoveCore.Game_Timer_start.call(this, _0x466945);
  if (this._paused === undefined) {
    this.initEventsMoveCore();
  }
  this._paused = false;
};
VisuMZ.EventsMoveCore.Game_Timer_stop = Game_Timer.prototype.stop;
Game_Timer.prototype.stop = function () {
  VisuMZ.EventsMoveCore.Game_Timer_stop.call(this);
  if (this._paused === undefined) {
    this.initEventsMoveCore();
  }
  this._paused = false;
};
Game_Timer.prototype.pause = function () {
  if (this._frames <= 0x0) {
    return;
  }
  this._paused = true;
  this._working = true;
};
Game_Timer.prototype.resume = function () {
  if (this._frames <= 0x0) {
    return;
  }
  this._paused = false;
  this._working = true;
};
Game_Timer.prototype.gainFrames = function (_0x28bc64) {
  this._frames = this._frames || 0x0;
  this._frames += _0x28bc64;
  this._working = true;
  this._frames = Math.max(0x1, this._frames);
};
Game_Timer.prototype.setFrames = function (_0x3aff92) {
  this._frames = this._frames || 0x0;
  this._frames = _0x3aff92;
  this._working = true;
  this._frames = Math.max(0x1, this._frames);
};
Game_Timer.prototype.changeSpeed = function (_0x157748) {
  this._speed = _0x157748;
  this._working = true;
  if (_0x157748 > 0x0) {
    this._frames = Math.max(this._frames, 0x1);
  }
};
Game_Timer.prototype.setCommonEvent = function (_0x506434) {
  if (this._expireCommonEvent === undefined) {
    this.initEventsMoveCore();
  }
  this._expireCommonEvent = _0x506434;
};
VisuMZ.EventsMoveCore.Game_Timer_onExpire = Game_Timer.prototype.onExpire;
Game_Timer.prototype.onExpire = function () {
  if (this._expireCommonEvent === undefined) {
    this.initEventsMoveCore();
  }
  if (this._expireCommonEvent) {
    $gameTemp.reserveCommonEvent(this._expireCommonEvent);
  } else {
    VisuMZ.EventsMoveCore.Game_Timer_onExpire.call(this);
  }
};
VisuMZ.EventsMoveCore.Game_Message_add = Game_Message.prototype.add;
Game_Message.prototype.add = function (_0x456256) {
  VisuMZ.EventsMoveCore.Game_Message_add.call(this, _0x456256);
  this._selfEvent = $gameTemp.getSelfTarget();
};
Game_Message.prototype.registerSelfEvent = function () {
  $gameTemp.registerSelfTarget(this._selfEvent);
};
VisuMZ.EventsMoveCore.Game_Switches_value = Game_Switches.prototype.value;
Game_Switches.prototype.value = function (_0x20c04d) {
  if (DataManager.isAdvancedSwitch(_0x20c04d)) {
    return !!this.advancedValue(_0x20c04d);
  } else {
    if (DataManager.isSelfSwitch(_0x20c04d)) {
      return !!this.selfValue(_0x20c04d);
    } else {
      return DataManager.isMapSwitch(_0x20c04d) ? !!this.mapValue(_0x20c04d) : VisuMZ.EventsMoveCore.Game_Switches_value.call(this, _0x20c04d);
    }
  }
};
Game_Switches.advancedFunc = {};
Game_Switches.prototype.advancedValue = function (_0x3d17d4) {
  if (!Game_Switches.advancedFunc[_0x3d17d4]) {
    $dataSystem.switches[_0x3d17d4].match(/<JS>\s*([\s\S]*)\s*<\/JS>/i);
    const _0x25183a = "return %1".format(String(RegExp.$1));
    Game_Switches.advancedFunc[_0x3d17d4] = new Function("switchId", _0x25183a);
  }
  const _0xb9c214 = $gameTemp.getSelfTarget() || this;
  return Game_Switches.advancedFunc[_0x3d17d4].call(_0xb9c214, _0x3d17d4);
};
Game_Switches.prototype.selfValue = function (_0x333984) {
  const _0x5dac41 = $gameTemp.getSelfTarget() || this;
  if (_0x5dac41.constructor !== Game_Event) {
    return VisuMZ.EventsMoveCore.Game_Switches_value.call(this, _0x333984);
  } else {
    const _0x739a18 = [_0x5dac41._mapId, _0x5dac41._eventId, "Self Switch %1".format(_0x333984)];
    return $gameSelfSwitches.value(_0x739a18);
  }
};
Game_Switches.prototype.mapValue = function (_0x1e58fa) {
  const _0x2a98ef = $gameMap ? $gameMap.mapId() : 0x0;
  const _0x34bfdb = [0x0, 0x0, "Map %1 Switch %2".format(_0x2a98ef, _0x1e58fa)];
  return $gameSelfSwitches.value(_0x34bfdb);
};
VisuMZ.EventsMoveCore.Game_Switches_setValue = Game_Switches.prototype.setValue;
Game_Switches.prototype.setValue = function (_0x6533dc, _0x4cdc3f) {
  if (DataManager.isSelfSwitch(_0x6533dc)) {
    this.setSelfValue(_0x6533dc, _0x4cdc3f);
  } else if (DataManager.isMapSwitch(_0x6533dc)) {
    this.setMapValue(_0x6533dc, _0x4cdc3f);
  } else {
    VisuMZ.EventsMoveCore.Game_Switches_setValue.call(this, _0x6533dc, _0x4cdc3f);
  }
};
Game_Switches.prototype.setSelfValue = function (_0x43e01a, _0x46fe99) {
  const _0x39553d = $gameTemp.getSelfTarget() || this;
  if (_0x39553d.constructor !== Game_Event) {
    VisuMZ.EventsMoveCore.Game_Switches_setValue.call(this, _0x43e01a, _0x46fe99);
  } else {
    const _0x334be6 = [_0x39553d._mapId, _0x39553d._eventId, "Self Switch %1".format(_0x43e01a)];
    $gameSelfSwitches.setValue(_0x334be6, _0x46fe99);
  }
};
Game_Switches.prototype.setMapValue = function (_0x923dd8, _0x144952) {
  const _0x227f23 = $gameMap ? $gameMap.mapId() : 0x0;
  const _0x2d4818 = [0x0, 0x0, "Map %1 Switch %2".format(_0x227f23, _0x923dd8)];
  return $gameSelfSwitches.setValue(_0x2d4818, _0x144952);
};
VisuMZ.EventsMoveCore.Game_Variables_value = Game_Variables.prototype.value;
Game_Variables.prototype.value = function (_0x5a4acb) {
  if (DataManager.isAdvancedVariable(_0x5a4acb)) {
    return this.advancedValue(_0x5a4acb);
  } else {
    if (DataManager.isSelfVariable(_0x5a4acb)) {
      return this.selfValue(_0x5a4acb);
    } else {
      return DataManager.isMapVariable(_0x5a4acb) ? this.mapValue(_0x5a4acb) : VisuMZ.EventsMoveCore.Game_Variables_value.call(this, _0x5a4acb);
    }
  }
};
Game_Variables.advancedFunc = {};
Game_Variables.prototype.advancedValue = function (_0x3e66c2) {
  if (!Game_Variables.advancedFunc[_0x3e66c2]) {
    $dataSystem.variables[_0x3e66c2].match(/<JS>\s*([\s\S]*)\s*<\/JS>/i);
    const _0x1c24b1 = "return %1".format(String(RegExp.$1));
    Game_Variables.advancedFunc[_0x3e66c2] = new Function("variableId", _0x1c24b1);
  }
  const _0x3beff7 = $gameTemp.getSelfTarget() || this;
  return Game_Variables.advancedFunc[_0x3e66c2].call(_0x3beff7, _0x3e66c2);
};
Game_Variables.prototype.selfValue = function (_0x24c33b) {
  const _0x208250 = $gameTemp.getSelfTarget() || this;
  if (_0x208250.constructor !== Game_Event) {
    return VisuMZ.EventsMoveCore.Game_Variables_value.call(this, _0x24c33b);
  } else {
    const _0x5478db = [_0x208250._mapId, _0x208250._eventId, "Self Variable %1".format(_0x24c33b)];
    return $gameSelfSwitches.value(_0x5478db);
  }
};
Game_Variables.prototype.mapValue = function (_0x4cea84) {
  const _0x3b6803 = $gameMap ? $gameMap.mapId() : 0x0;
  const _0x4ca36c = [0x0, 0x0, "Map %1 Variable %2".format(_0x3b6803, _0x4cea84)];
  return $gameSelfSwitches.value(_0x4ca36c) || 0x0;
};
VisuMZ.EventsMoveCore.Game_Variables_setValue = Game_Variables.prototype.setValue;
Game_Variables.prototype.setValue = function (_0x3a63c4, _0x204b85) {
  if (DataManager.isSelfVariable(_0x3a63c4)) {
    this.setSelfValue(_0x3a63c4, _0x204b85);
  } else if (DataManager.isMapVariable(_0x3a63c4)) {
    this.setMapValue(_0x3a63c4, _0x204b85);
  } else {
    VisuMZ.EventsMoveCore.Game_Variables_setValue.call(this, _0x3a63c4, _0x204b85);
  }
};
Game_Variables.prototype.setSelfValue = function (_0x4f01b8, _0x548bfb) {
  const _0x2dd27a = $gameTemp.getSelfTarget() || this;
  if (_0x2dd27a.constructor !== Game_Event) {
    VisuMZ.EventsMoveCore.Game_Variables_setValue.call(this, _0x4f01b8, _0x548bfb);
  } else {
    const _0x3980fd = [_0x2dd27a._mapId, _0x2dd27a._eventId, "Self Variable %1".format(_0x4f01b8)];
    $gameSelfSwitches.setValue(_0x3980fd, _0x548bfb);
  }
};
Game_Variables.prototype.setMapValue = function (_0x13d654, _0x4a6eda) {
  const _0x1fa29c = $gameMap ? $gameMap.mapId() : 0x0;
  const _0x148579 = [0x0, 0x0, "Map %1 Variable %2".format(_0x1fa29c, _0x13d654)];
  $gameSelfSwitches.setValue(_0x148579, _0x4a6eda);
};
VisuMZ.EventsMoveCore.Game_SelfSwitches_value = Game_SelfSwitches.prototype.value;
Game_SelfSwitches.prototype.value = function (_0x171049) {
  if (_0x171049[0x2].match(/(?:SELF|MAP)/i)) {
    return this.selfValue(_0x171049);
  } else {
    return VisuMZ.EventsMoveCore.Game_SelfSwitches_value.call(this, _0x171049);
    ;
  }
};
Game_SelfSwitches.prototype.selfValue = function (_0x208cd1) {
  return _0x208cd1[0x2].match(/VAR/i) ? this._data[_0x208cd1] || 0x0 : !!this._data[_0x208cd1];
};
VisuMZ.EventsMoveCore.Game_SelfSwitches_setValue = Game_SelfSwitches.prototype.setValue;
Game_SelfSwitches.prototype.setValue = function (_0x3543e8, _0x5ff1f9) {
  if (_0x3543e8[0x2].match(/(?:SELF|MAP)/i)) {
    this.setSelfValue(_0x3543e8, _0x5ff1f9);
  } else {
    VisuMZ.EventsMoveCore.Game_SelfSwitches_setValue.call(this, _0x3543e8, _0x5ff1f9);
  }
};
Game_SelfSwitches.prototype.setSelfValue = function (_0x6b157e, _0x31778b) {
  this._data[_0x6b157e] = _0x6b157e[0x2].match(/VAR/i) ? _0x31778b : !!_0x31778b;
  this.onChange();
};
VisuMZ.EventsMoveCore.Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
Scene_Map.prototype.createDisplayObjects = function () {
  $gameMap.resetExitSelfSwitches();
  VisuMZ.EventsMoveCore.Scene_Map_createDisplayObjects.call(this);
};
Game_Map.prototype.resetExitSelfSwitches = function () {
  if (this._lastSesetExitSelfSwitchesMapId === this.mapId()) {
    return;
  }
  this._lastSesetExitSelfSwitchesMapId = this.mapId();
  this._eventCache = undefined;
  const _0xb89eec = this.events();
  for (const _0x175d0f of _0xb89eec) {
    if (_0x175d0f) {
      $gameSelfSwitches.resetSelfSwitchesForEvent(_0x175d0f);
    }
  }
};
Game_SelfSwitches.prototype.resetSelfSwitchesForEvent = function (_0xadf26f) {
  if (!_0xadf26f) {
    return;
  }
  if (!_0xadf26f.event()) {
    return;
  }
  const _0x185be7 = _0xadf26f.event().note || '';
  if (_0x185be7.match(/<(?:EXIT RESET|EXIT|TEMP|TEMPORARY) (?:SELF|SELF SWITCH|SELF SWITCHES|SELF DATA)>/i)) {
    const _0x5282c3 = "%1,%2,".format($gameMap._mapId, _0xadf26f._eventId);
    const _0x4a4286 = Object.keys(this._data).filter(_0x253210 => _0x253210.startsWith(_0x5282c3));
    while (_0x4a4286.length > 0x0) {
      const _0x383fa4 = _0x4a4286.shift();
      delete this._data[_0x383fa4];
    }
  }
};
Game_SelfSwitches.prototype.resetSelfSwitchesForMap = function (_0x20edde) {
  const _0x2e0e0c = "%1,".format($gameMap._mapId);
  const _0x2551de = Object.keys(this._data).filter(_0x5976fe => _0x5976fe.startsWith(_0x2e0e0c));
  while (_0x2551de.length > 0x0) {
    const _0xd23f22 = _0x2551de.shift();
    delete this._data[_0xd23f22];
  }
  if (_0x20edde === $gameMap.mapId()) {
    $gameMap.requestRefresh();
  }
};
VisuMZ.EventsMoveCore.Game_Enemy_meetsSwitchCondition = Game_Enemy.prototype.meetsSwitchCondition;
Game_Enemy.prototype.meetsSwitchCondition = function (_0x3cc0ef) {
  $gameTemp.registerSelfTarget(this);
  const _0x41e966 = VisuMZ.EventsMoveCore.Game_Enemy_meetsSwitchCondition.call(this, _0x3cc0ef);
  $gameTemp.clearSelfTarget();
  return _0x41e966;
};
VisuMZ.EventsMoveCore.Game_Party_hasEncounterHalf = Game_Party.prototype.hasEncounterHalf;
Game_Party.prototype.hasEncounterHalf = function () {
  if (this.isPlayerWithinEncounterHalfEvents()) {
    return true;
  }
  return VisuMZ.EventsMoveCore.Game_Party_hasEncounterHalf.call(this);
};
Game_Party.prototype.isPlayerWithinEncounterHalfEvents = function () {
  if (this._checkEncounterRaw) {
    return false;
  }
  return $isTileEncounterHalf($gamePlayer.x, $gamePlayer.y);
};
VisuMZ.EventsMoveCore.Game_Party_hasEncounterNone = Game_Party.prototype.hasEncounterNone;
Game_Party.prototype.hasEncounterNone = function () {
  if (this.isPlayerWithinEncounterNoneEvents()) {
    return true;
  }
  return VisuMZ.EventsMoveCore.Game_Party_hasEncounterNone.call(this);
};
Game_Party.prototype.isPlayerWithinEncounterNoneEvents = function () {
  if (this._checkEncounterRaw) {
    return false;
  }
  return $isTileEncounterNone($gamePlayer.x, $gamePlayer.y);
};
var $isTileEncounterHalf = function (_0x3ea51a, _0x130fbb) {
  if (!$gameMap) {
    return false;
  }
  _0x3ea51a = Math.round(_0x3ea51a || 0x0);
  _0x130fbb = Math.round(_0x130fbb || 0x0);
  const _0x25426c = $gameMap.events();
  for (const _0x2a12f2 of _0x25426c) {
    if (!_0x2a12f2) {
      continue;
    }
    if (_0x2a12f2._erased) {
      continue;
    }
    const _0x2bfdb0 = _0x2a12f2.encounterProximityType(true);
    const _0x3dcb0f = _0x2a12f2.encounterProximityDistance(true);
    if ($gameMap.checkEventProximity(_0x3ea51a, _0x130fbb, _0x2a12f2, _0x2bfdb0, _0x3dcb0f)) {
      return true;
    }
  }
  return false;
};
var $isTileEncounterNone = function (_0xb990a2, _0x56cc56) {
  if (!$gameMap) {
    return false;
  }
  _0xb990a2 = Math.round(_0xb990a2 || 0x0);
  _0x56cc56 = Math.round(_0x56cc56 || 0x0);
  const _0x3de0e1 = $gameMap.events();
  for (const _0x490faf of _0x3de0e1) {
    if (!_0x490faf) {
      continue;
    }
    if (_0x490faf._erased) {
      continue;
    }
    const _0x4f9863 = _0x490faf.encounterProximityType(false);
    const _0x217a73 = _0x490faf.encounterProximityDistance(false);
    if ($gameMap.checkEventProximity(_0xb990a2, _0x56cc56, _0x490faf, _0x4f9863, _0x217a73)) {
      return true;
    }
  }
  return false;
};
VisuMZ.EventsMoveCore.Game_Troop_meetsConditions = Game_Troop.prototype.meetsConditions;
Game_Troop.prototype.meetsConditions = function (_0x383c3e) {
  $gameTemp.registerSelfTarget(this);
  const _0x369c06 = VisuMZ.EventsMoveCore.Game_Troop_meetsConditions.call(this, _0x383c3e);
  $gameTemp.clearSelfTarget();
  return _0x369c06;
};
VisuMZ.EventsMoveCore.Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function (_0x56cdab) {
  this.removeTemporaryMapSpawnedEvents(_0x56cdab);
  this.clearEventCache();
  VisuMZ.EventsMoveCore.Game_Map_setup.call(this, _0x56cdab);
  this.clearEventCache();
  this.setupDiagonalSupport();
  this.setupRegionRestrictions();
  this.setupSaveEventLocations();
  this.setupSpawnedEvents();
  this.setupPlayerVisibilityOverrides();
  this.setupFollowerVisibilityOverrides();
  this.processEraseEncounterEvents();
  this.requestMapLoadCommonEvents();
  this.clearEventCache();
};
VisuMZ.EventsMoveCore.Game_Map_setupEvents = Game_Map.prototype.setupEvents;
Game_Map.prototype.setupEvents = function () {
  VisuMZ.EventsMoveCore.Game_Map_setupEvents.call(this);
  this.refreshIfNeeded();
};
Game_Map._eventOverloadThreshold = 0xc8;
Game_Map.prototype.determineEventOverload = function () {
  const _0x1287a1 = Game_Map._eventOverloadThreshold;
  this._eventOverload = this.events().length > _0x1287a1;
  if (this._eventOverload && $gameTemp.isPlaytest()) {}
};
Game_Map.prototype.isEventOverloaded = function () {
  return this._eventOverload;
};
Game_Map.prototype.clearEventCache = function () {
  this._eventCache = undefined;
};
Game_Map.prototype.setupDiagonalSupport = function () {
  this._diagonalSupport = VisuMZ.EventsMoveCore.Settings.Movement.EnableDir8;
  const _0x8b27af = $dataMap.note || '';
  if (_0x8b27af.match(/<DIAGONAL MOVEMENT: ON>/i)) {
    this._diagonalSupport = true;
  } else if (_0x8b27af.match(/<DIAGONAL MOVEMENT: OFF>/i)) {
    this._diagonalSupport = false;
  }
};
Game_Map.MOBILE_DIAGONAL_PATHFINDING = VisuMZ.EventsMoveCore.Settings.Movement.PathfindMobileEnabled ?? false;
Game_Map.prototype.isSupportDiagonalMovement = function () {
  if (Utils.isMobileDevice()) {
    if (!Game_Map.MOBILE_DIAGONAL_PATHFINDING) {
      return false;
    }
  }
  const _0x5bbea4 = $gameSystem.getPlayerDiagonalSetting();
  if (_0x5bbea4 === 'enable') {
    return true;
  }
  if (_0x5bbea4 === "disable") {
    return false;
  }
  if (this._diagonalSupport === undefined) {
    this.setupDiagonalSupport();
  }
  return this._diagonalSupport;
};
Game_Map.prototype.roundXWithDirection = function (_0x389290, _0x54c749) {
  if ([0x1, 0x4, 0x7].includes(_0x54c749)) {
    _0x389290 -= 0x1;
  }
  if ([0x3, 0x6, 0x9].includes(_0x54c749)) {
    _0x389290 += 0x1;
  }
  return this.roundX(_0x389290);
};
Game_Map.prototype.roundYWithDirection = function (_0x147e95, _0xe564a2) {
  if ([0x1, 0x2, 0x3].includes(_0xe564a2)) {
    _0x147e95 += 0x1;
  }
  if ([0x7, 0x8, 0x9].includes(_0xe564a2)) {
    _0x147e95 -= 0x1;
  }
  return this.roundY(_0x147e95);
};
Game_Map.prototype.absDistance = function (_0x5e7b25, _0x20f924, _0x120701, _0x4e7a67) {
  return Math.max(Math.abs(this.deltaX(_0x5e7b25, _0x120701)), Math.abs(this.deltaY(_0x20f924, _0x4e7a67)));
};
Game_Map.prototype.setupRegionRestrictions = function () {
  const _0x3ef229 = VisuMZ.EventsMoveCore.Settings.Region;
  const _0x240814 = {};
  const _0x19c37f = ["Allow", "Forbid", "Dock"];
  const _0x5d5e51 = ['All', "Walk", "Player", "Event", "Vehicle", "Boat", "Ship", "Airship"];
  for (const _0x31de2 of _0x19c37f) {
    for (const _0x4f84c7 of _0x5d5e51) {
      const _0x52d3c5 = "%1%2".format(_0x4f84c7, _0x31de2);
      if (_0x3ef229[_0x52d3c5]) {
        _0x240814[_0x52d3c5] = _0x3ef229[_0x52d3c5].slice(0x0);
      }
    }
  }
  const _0x7db770 = $dataMap.note || '';
  const _0x373c7c = _0x7db770.match(/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/gi);
  if (_0x373c7c) {
    for (const _0x1a506a of _0x373c7c) {
      _0x1a506a.match(/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);
      let _0x3ec0d7 = String(RegExp.$1).toLowerCase().trim();
      let _0x4e6196 = String(RegExp.$2).toLowerCase().trim();
      const _0x1bca22 = JSON.parse('[' + RegExp.$3.match(/\d+/g) + ']');
      _0x3ec0d7 = _0x3ec0d7.charAt(0x0).toUpperCase() + _0x3ec0d7.slice(0x1);
      _0x4e6196 = _0x4e6196.charAt(0x0).toUpperCase() + _0x4e6196.slice(0x1);
      const _0x589609 = "%1%2".format(_0x3ec0d7, _0x4e6196);
      if (_0x240814[_0x589609]) {
        _0x240814[_0x589609] = _0x240814[_0x589609].concat(_0x1bca22);
      }
    }
  }
  this._regionRules = _0x240814;
};
Game_Map.prototype.isRegionAllowPass = function (_0x19bcae, _0x1bc1ef, _0x23563e, _0x2f54b4) {
  const _0xca1f5 = this.roundXWithDirection(_0x19bcae, _0x23563e);
  const _0x5d5a3a = this.roundYWithDirection(_0x1bc1ef, _0x23563e);
  const _0x22fb38 = this.regionId(_0xca1f5, _0x5d5a3a);
  const _0x526013 = this._regionRules;
  if (_0x526013.AllAllow.includes(_0x22fb38)) {
    return true;
  } else {
    if (_0x2f54b4 === "player") {
      return _0x526013.PlayerAllow.includes(_0x22fb38) || _0x526013.WalkAllow.includes(_0x22fb38);
    } else {
      if (_0x2f54b4 === "event") {
        return _0x526013.EventAllow.includes(_0x22fb38) || _0x526013.WalkAllow.includes(_0x22fb38);
      } else {
        if (_0x526013.VehicleAllow.includes(_0x22fb38)) {
          return true;
        } else {
          const _0x1e4489 = '%1Allow'.format(_0x2f54b4.charAt(0x0).toUpperCase() + _0x2f54b4.slice(0x1));
          if (_0x526013[_0x1e4489]) {
            return _0x526013[_0x1e4489].includes(_0x22fb38);
          }
        }
      }
    }
  }
  return false;
};
Game_Map.prototype.isRegionForbidPass = function (_0x35f88e, _0x546d03, _0x537758, _0x428683) {
  const _0x3b8040 = this.roundXWithDirection(_0x35f88e, _0x537758);
  const _0x5a6c17 = this.roundYWithDirection(_0x546d03, _0x537758);
  const _0x29bc07 = this.regionId(_0x3b8040, _0x5a6c17);
  const _0x484824 = this._regionRules;
  if (_0x484824.AllForbid.includes(_0x29bc07)) {
    return true;
  } else {
    if (_0x428683 === "player") {
      return _0x484824.PlayerForbid.includes(_0x29bc07) || _0x484824.WalkForbid.includes(_0x29bc07);
    } else {
      if (_0x428683 === "event") {
        return _0x484824.EventForbid.includes(_0x29bc07) || _0x484824.WalkForbid.includes(_0x29bc07);
      } else {
        if (_0x484824.VehicleForbid.includes(_0x29bc07)) {
          return true;
        } else {
          const _0x19897b = '%1Forbid'.format(_0x428683.charAt(0x0).toUpperCase() + _0x428683.slice(0x1));
          if (_0x484824[_0x19897b]) {
            return _0x484824[_0x19897b].includes(_0x29bc07);
          }
        }
      }
    }
  }
  return false;
};
Game_Map.prototype.isRegionDockable = function (_0x1cc2dc, _0x37d3ac, _0x5149d6, _0x472b13) {
  _0x5149d6 = _0x472b13 === 'airship' ? 0x5 : _0x5149d6;
  const _0x2d5845 = this.roundXWithDirection(_0x1cc2dc, _0x5149d6);
  const _0x49880c = this.roundYWithDirection(_0x37d3ac, _0x5149d6);
  const _0x14d20b = this.regionId(_0x2d5845, _0x49880c);
  const _0xf4bb05 = this._regionRules;
  if (_0xf4bb05.VehicleDock.includes(_0x14d20b)) {
    return true;
  } else {
    const _0x18fb01 = "%1Dock".format(_0x472b13.charAt(0x0).toUpperCase() + _0x472b13.slice(0x1));
    if (_0xf4bb05[_0x18fb01]) {
      return _0xf4bb05[_0x18fb01].includes(_0x14d20b);
    }
  }
  return false;
};
VisuMZ.EventsMoveCore.Game_Map_refresh = Game_Map.prototype.refresh;
Game_Map.prototype.refresh = function () {
  VisuMZ.EventsMoveCore.Game_Map_refresh.call(this);
  this.checkNeedForPeriodicRefresh();
};
Game_Map.prototype.checkNeedForPeriodicRefresh = function () {
  this._needsPeriodicRefresh = false;
  if (this.events().some(_0x15ab4a => _0x15ab4a.hasAdvancedSwitchVariable())) {
    this._needsPeriodicRefresh = true;
    return;
  }
  if (this.events().some(_0x323a85 => _0x323a85.hasCPCs())) {
    this._needsPeriodicRefresh = true;
    return;
  }
  if (this._commonEvents.some(_0x50776a => _0x50776a.hasAdvancedSwitchVariable())) {
    this._needsPeriodicRefresh = true;
    return;
  }
  if (this._commonEvents.some(_0x3b78f2 => _0x3b78f2.hasCPCs())) {
    this._needsPeriodicRefresh = true;
    return;
  }
};
VisuMZ.EventsMoveCore.Game_Map_update = Game_Map.prototype.update;
Game_Map.prototype.update = function (_0xdeca1a) {
  this.updatePeriodicRefresh();
  VisuMZ.EventsMoveCore.Game_Map_update.call(this, _0xdeca1a);
};
Game_Map.prototype.updatePeriodicRefresh = function () {
  if (!this._needsPeriodicRefresh) {
    return;
  }
  this._periodicRefreshTimer = this._periodicRefreshTimer || 0x3c;
  this._periodicRefreshTimer--;
  if (this._periodicRefreshTimer <= 0x0) {
    this.requestRefresh();
    this._periodicRefreshTimer = 0x3c;
  }
};
VisuMZ.EventsMoveCore.Game_Map_isDashDisabled = Game_Map.prototype.isDashDisabled;
Game_Map.prototype.isDashDisabled = function () {
  if (!$gameSystem.isDashingEnabled()) {
    return true;
  }
  return VisuMZ.EventsMoveCore.Game_Map_isDashDisabled.call(this);
};
Game_Map.prototype.setupSaveEventLocations = function () {
  this._saveEventLocations = false;
  const _0x11fc80 = $dataMap.note || '';
  if (_0x11fc80.match(/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)) {
    this._saveEventLocations = true;
  }
};
Game_Map.prototype.isSaveEventLocations = function () {
  if (this._saveEventLocations === undefined) {
    this.setupSaveEventLocations();
  }
  return this._saveEventLocations;
};
Game_Map.prototype.removeTemporaryMapSpawnedEvents = function (_0x515215) {
  if (_0x515215 !== this.mapId() && $gamePlayer) {
    $gameSystem.removeTemporaryMapSpawnedEvents(this.mapId());
  }
};
Game_Map.prototype.setupSpawnedEvents = function () {
  this._spawnedEvents = $gameSystem.getMapSpawnedEventData(this.mapId());
  this._needsRefresh = true;
};
VisuMZ.EventsMoveCore.Game_Map_events = Game_Map.prototype.events;
Game_Map.prototype.events = function () {
  if (this._eventCache) {
    return this._eventCache;
  }
  const _0x35ec1b = VisuMZ.EventsMoveCore.Game_Map_events.call(this);
  const _0x52dd1e = _0x35ec1b.concat(this._spawnedEvents || []);
  this._eventCache = _0x52dd1e.filter(_0x4a651e => !!_0x4a651e);
  return this._eventCache;
};
VisuMZ.EventsMoveCore.Game_Map_event = Game_Map.prototype.event;
Game_Map.prototype.event = function (_0x351d0f) {
  return _0x351d0f >= 0x3e8 ? (_0x351d0f -= 0x3e8, this._spawnedEvents[_0x351d0f]) : VisuMZ.EventsMoveCore.Game_Map_event.call(this, _0x351d0f);
};
Game_Map.prototype.eraseEvent = function (_0x2db63b) {
  const _0x15f195 = this.event(_0x2db63b);
  if (_0x15f195) {
    _0x15f195.erase();
  }
};
Game_Map.prototype.setupSpawnTest = function () {
  const _0x58c2c3 = {
    'template': "Button",
    'mapId': 0x1,
    'eventId': 0xc,
    'x': $gamePlayer.x + 0x1,
    'y': $gamePlayer.y + 0x1,
    'spawnPreserved': true,
    'spawnEventId': this._spawnedEvents.length + 0x3e8
  };
  this.createSpawnedEventWithData(_0x58c2c3);
};
Game_Map.prototype.checkExistingEntitiesAt = function (_0x289359, _0x2f6869) {
  if (this.eventsXy(_0x289359, _0x2f6869).length > 0x0) {
    return true;
  }
  if ($gamePlayer.x === _0x289359 && $gamePlayer.y === _0x2f6869) {
    return true;
  }
  if (this.boat().posNt(_0x289359, _0x2f6869)) {
    return true;
  }
  if (this.ship().posNt(_0x289359, _0x2f6869)) {
    return true;
  }
  return false;
};
Game_Map.prototype.isSpawnHitboxCollisionOk = function (_0x4c8ac8, _0x6948dd, _0x5b307d) {
  $gameTemp._spawnData = _0x4c8ac8;
  const _0x151be8 = new Game_Event(_0x4c8ac8.mapId, _0x4c8ac8.eventId);
  $gameTemp._spawnData = undefined;
  _0x151be8.refresh();
  let _0x6e7be9 = _0x6948dd - _0x151be8._addedHitbox.left;
  let _0x27e49f = _0x6948dd + _0x151be8._addedHitbox.right;
  let _0x57b348 = _0x5b307d - _0x151be8._addedHitbox.up;
  let _0x2aedf5 = _0x5b307d + _0x151be8._addedHitbox.down;
  for (let _0x3a0604 = _0x6e7be9; _0x3a0604 <= _0x27e49f; _0x3a0604++) {
    for (let _0x196836 = _0x57b348; _0x196836 <= _0x2aedf5; _0x196836++) {
      if (this.checkExistingEntitiesAt(_0x3a0604, _0x196836)) {
        return false;
      }
    }
  }
  return true;
};
Game_Map.prototype.createSpawnedEventWithData = function (_0x450db6) {
  $gameTemp._spawnData = _0x450db6;
  const _0x3a8064 = new Game_Event(_0x450db6.mapId, _0x450db6.eventId);
  $gameTemp._spawnData = undefined;
  this._spawnedEvents.push(_0x3a8064);
  _0x3a8064.setupSpawn(_0x450db6);
  this.clearEventCache();
};
Game_Map.prototype.prepareSpawnedEventAtXY = function (_0x390d61, _0x1c5426, _0x1a3be6) {
  const _0x56d783 = _0x390d61.template.toUpperCase().trim();
  if (_0x56d783 !== "UNTITLED") {
    const _0x385f55 = VisuMZ.EventTemplates[_0x56d783];
    if (_0x385f55) {
      _0x390d61.mapId = _0x385f55.MapID;
      _0x390d61.eventId = _0x385f55.EventID;
    }
  }
  const _0x16b0d9 = _0x390d61.x;
  const _0x397edd = _0x390d61.y;
  if (!this.isValid(_0x16b0d9, _0x397edd)) {
    return false;
  }
  if (_0x1c5426) {
    if (this.checkExistingEntitiesAt(_0x16b0d9, _0x397edd)) {
      return false;
    }
    if (!this.isSpawnHitboxCollisionOk(_0x390d61, _0x16b0d9, _0x397edd)) {
      return false;
    }
  }
  if (_0x1a3be6) {
    if (!this.isPassableByAnyDirection(_0x16b0d9, _0x397edd)) {
      return false;
    }
  }
  this.createSpawnedEventWithData(_0x390d61);
  return true;
};
Game_Map.prototype.prepareSpawnedEventAtRegion = function (_0x5e8176, _0x1696d5, _0x1fd181, _0x1c23e0) {
  const _0x34f2b9 = _0x5e8176.template.toUpperCase().trim();
  if (_0x34f2b9 !== "UNTITLED") {
    const _0x256014 = VisuMZ.EventTemplates[_0x34f2b9];
    if (_0x256014) {
      _0x5e8176.mapId = _0x256014.MapID;
      _0x5e8176.eventId = _0x256014.EventID;
    }
  }
  const _0x486019 = [];
  const _0x549485 = this.width();
  const _0xded2da = this.height();
  for (let _0x5388ad = 0x0; _0x5388ad < _0x549485; _0x5388ad++) {
    for (let _0xb532d8 = 0x0; _0xb532d8 < _0xded2da; _0xb532d8++) {
      if (!_0x1696d5.includes(this.regionId(_0x5388ad, _0xb532d8))) {
        continue;
      }
      if (!this.isValid(_0x5388ad, _0xb532d8)) {
        continue;
      }
      if (_0x1fd181) {
        if (this.checkExistingEntitiesAt(_0x5388ad, _0xb532d8)) {
          continue;
        }
        if (!this.isSpawnHitboxCollisionOk(_0x5e8176, _0x5388ad, _0xb532d8)) {
          continue;
        }
      }
      if (_0x1c23e0) {
        if (!this.isPassableByAnyDirection(_0x5388ad, _0xb532d8)) {
          continue;
        }
      }
      _0x486019.push([_0x5388ad, _0xb532d8]);
    }
  }
  if (_0x486019.length > 0x0) {
    const _0x5781f2 = _0x486019[Math.randomInt(_0x486019.length)];
    _0x5e8176.x = _0x5781f2[0x0];
    _0x5e8176.y = _0x5781f2[0x1];
    this.createSpawnedEventWithData(_0x5e8176);
    return true;
  }
  return false;
};
Game_Map.prototype.prepareSpawnedEventAtTerrainTag = function (_0x57d424, _0x2a3f52, _0xfde882, _0x289df9) {
  const _0x535baf = _0x57d424.template.toUpperCase().trim();
  if (_0x535baf !== "UNTITLED") {
    const _0x3435b2 = VisuMZ.EventTemplates[_0x535baf];
    if (_0x3435b2) {
      _0x57d424.mapId = _0x3435b2.MapID;
      _0x57d424.eventId = _0x3435b2.EventID;
    }
  }
  const _0x591ce9 = [];
  const _0x598084 = this.width();
  const _0x2de88b = this.height();
  for (let _0xef6fad = 0x0; _0xef6fad < _0x598084; _0xef6fad++) {
    for (let _0x47089e = 0x0; _0x47089e < _0x2de88b; _0x47089e++) {
      if (!_0x2a3f52.includes(this.terrainTag(_0xef6fad, _0x47089e))) {
        continue;
      }
      if (!this.isValid(_0xef6fad, _0x47089e)) {
        continue;
      }
      if (_0xfde882) {
        if (this.checkExistingEntitiesAt(_0xef6fad, _0x47089e)) {
          continue;
        }
        if (!this.isSpawnHitboxCollisionOk(_0x57d424, _0xef6fad, _0x47089e)) {
          continue;
        }
      }
      if (_0x289df9) {
        if (!this.isPassableByAnyDirection(_0xef6fad, _0x47089e)) {
          continue;
        }
      }
      _0x591ce9.push([_0xef6fad, _0x47089e]);
    }
  }
  if (_0x591ce9.length > 0x0) {
    const _0x4de8db = _0x591ce9[Math.randomInt(_0x591ce9.length)];
    _0x57d424.x = _0x4de8db[0x0];
    _0x57d424.y = _0x4de8db[0x1];
    this.createSpawnedEventWithData(_0x57d424);
    return true;
  }
  return false;
};
Game_Map.prototype.isPassableByAnyDirection = function (_0x5671e4, _0x538b06) {
  if (this.isPassable(_0x5671e4, _0x538b06, 0x2)) {
    return true;
  }
  if (this.isPassable(_0x5671e4, _0x538b06, 0x4)) {
    return true;
  }
  if (this.isPassable(_0x5671e4, _0x538b06, 0x6)) {
    return true;
  }
  if (this.isPassable(_0x5671e4, _0x538b06, 0x8)) {
    return true;
  }
  return false;
};
Game_Map.prototype.despawnEventId = function (_0xb8a7af) {
  if (_0xb8a7af < 0x3e8) {
    return;
  }
  if (!this._spawnedEvents) {
    return;
  }
  const _0x26f6b5 = this.event(_0xb8a7af);
  _0x26f6b5.locate(-0x1, -0x1);
  _0x26f6b5.erase();
  this._spawnedEvents[_0xb8a7af - 0x3e8] = null;
  this.clearEventCache();
};
Game_Map.prototype.firstSpawnedEvent = function () {
  for (const _0x3401de of this._spawnedEvents) {
    if (_0x3401de) {
      return _0x3401de;
    }
  }
  return null;
};
Game_Map.prototype.firstSpawnedEventID = function () {
  const _0x45acc9 = this.firstSpawnedEvent();
  return _0x45acc9 ? _0x45acc9._eventId : 0x0;
};
Game_Map.prototype.lastSpawnedEvent = function () {
  const _0x573669 = this._spawnedEvents.slice(0x0).reverse();
  for (const _0x50536f of _0x573669) {
    if (_0x50536f) {
      return _0x50536f;
    }
  }
  return null;
};
Game_Map.prototype.lastSpawnedEventID = function () {
  const _0x4bd1bb = this.lastSpawnedEvent();
  return _0x4bd1bb ? _0x4bd1bb._eventId : 0x0;
};
Game_Map.prototype.despawnAtXY = function (_0x5afe5d, _0x5f21af) {
  const _0x3652af = this.eventsXy(_0x5afe5d, _0x5f21af);
  for (const _0x180225 of _0x3652af) {
    if (!_0x180225) {
      continue;
    }
    if (_0x180225.isSpawnedEvent()) {
      this.despawnEventId(_0x180225._eventId);
    }
  }
};
Game_Map.prototype.despawnRegions = function (_0x1c3b30) {
  for (const _0x1a27d3 of this._spawnedEvents) {
    if (!_0x1a27d3) {
      continue;
    }
    if (_0x1c3b30.includes(_0x1a27d3.regionId())) {
      this.despawnEventId(_0x1a27d3._eventId);
    }
  }
};
Game_Map.prototype.despawnTerrainTags = function (_0x410cd7) {
  for (const _0x5122b5 of this._spawnedEvents) {
    if (!_0x5122b5) {
      continue;
    }
    if (_0x410cd7.includes(_0x5122b5.terrainTag())) {
      this.despawnEventId(_0x5122b5._eventId);
    }
  }
};
Game_Map.prototype.despawnEverything = function () {
  for (const _0x5471bb of this._spawnedEvents) {
    if (!_0x5471bb) {
      continue;
    }
    this.despawnEventId(_0x5471bb._eventId);
  }
};
VisuMZ.EventsMoveCore.Game_Map_unlockEvent = Game_Map.prototype.unlockEvent;
Game_Map.prototype.unlockEvent = function (_0x5dade5) {
  VisuMZ.EventsMoveCore.Game_Map_unlockEvent.call(this, _0x5dade5);
  if (_0x5dade5 >= 0x3e8) {
    const _0x2e4feb = this.event(_0x5dade5);
    if (_0x2e4feb) {
      _0x2e4feb.unlock();
    }
  }
};
Game_Map.prototype.setupPlayerVisibilityOverrides = function () {
  this._forceShowPlayer = false;
  this._forceHidePlayer = false;
  if (!$dataMap) {
    return;
  }
  const _0x2fe050 = $dataMap.note || '';
  if (_0x2fe050.match(/<HIDE PLAYER>/i)) {
    this._forceShowPlayer = false;
    this._forceHidePlayer = true;
  } else if (_0x2fe050.match(/<SHOW PLAYER>/i)) {
    this._forceShowPlayer = true;
    this._forceHidePlayer = false;
  }
};
Game_Map.prototype.isPlayerForceShown = function () {
  if (this._forceShowPlayer === undefined) {
    this.setupPlayerVisibilityOverrides();
  }
  return this._forceShowPlayer;
};
Game_Map.prototype.isPlayerForceHidden = function () {
  if (this._forceHidePlayer === undefined) {
    this.setupPlayerVisibilityOverrides();
  }
  return this._forceHidePlayer;
};
VisuMZ.EventsMoveCore.Game_CharacterBase_isTransparent = Game_CharacterBase.prototype.isTransparent;
Game_CharacterBase.prototype.isTransparent = function () {
  if (this === $gamePlayer) {
    if ($gameMap.isPlayerForceShown()) {
      return false;
    }
    if ($gameMap.isPlayerForceHidden()) {
      return true;
    }
  }
  return VisuMZ.EventsMoveCore.Game_CharacterBase_isTransparent.call(this);
};
Game_Map.prototype.setupFollowerVisibilityOverrides = function () {
  this._forceShowFollower = false;
  this._forceHideFollower = false;
  if (!$dataMap) {
    return;
  }
  const _0x3caab7 = $dataMap.note || '';
  if (_0x3caab7.match(/<HIDE FOLLOWERS>/i)) {
    this._forceShowFollower = false;
    this._forceHideFollower = true;
  } else if (_0x3caab7.match(/<SHOW FOLLOWERS>/i)) {
    this._forceShowFollower = true;
    this._forceHideFollower = false;
  }
};
Game_Map.prototype.areFollowersForceShown = function () {
  if (this._forceShowFollower === undefined) {
    this.setupFollowerVisibilityOverrides();
  }
  return this._forceShowFollower;
};
Game_Map.prototype.areFollowersForceHidden = function () {
  if (this._forceHideFollower === undefined) {
    this.setupFollowerVisibilityOverrides();
  }
  return this._forceHideFollower;
};
VisuMZ.EventsMoveCore.Game_Followers_isVisible = Game_Followers.prototype.isVisible;
Game_Followers.prototype.isVisible = function () {
  if ($gameMap.areFollowersForceShown()) {
    return true;
  }
  if ($gameMap.areFollowersForceHidden()) {
    return false;
  }
  return VisuMZ.EventsMoveCore.Game_Followers_isVisible.call(this);
};
Game_Map.prototype.processEraseEncounterEvents = function () {
  const _0x33708e = this.events();
  const _0x13cf21 = [];
  $gameParty._checkEncounterRaw = true;
  for (const _0x1e91ba of _0x33708e) {
    if (!_0x1e91ba) {
      continue;
    }
    if (_0x1e91ba._erased) {
      continue;
    }
    if (_0x1e91ba.processEraseEncounterSpawn()) {
      _0x13cf21.push(_0x1e91ba);
    }
  }
  $gameParty._checkEncounterRaw = undefined;
  for (const _0x5419d8 of _0x13cf21) {
    if (!_0x5419d8) {
      continue;
    }
    if (_0x5419d8._erased) {
      continue;
    }
    this.eraseEvent(_0x5419d8.eventId());
  }
};
Game_Event.prototype.processEraseEncounterSpawn = function () {
  const _0x31750f = this.event().note || '';
  if (_0x31750f.match(/<ERASE IF ENC(?:|OUNTER) HALF>/i)) {
    if ($gameParty.hasEncounterHalf()) {
      return true;
    }
    if ($isTileEncounterHalf(this.x, this.y)) {
      return true;
    }
  }
  if (_0x31750f.match(/<ERASE IF ENC(?:|OUNTER) NONE>/i)) {
    if ($gameParty.hasEncounterNone()) {
      return true;
    }
    if ($isTileEncounterNone(this.x, this.y)) {
      return true;
    }
  }
  return false;
};
VisuMZ.EventsMoveCore.Scene_Map_onMapLoadedEncErase = Scene_Map.prototype.onMapLoaded;
Scene_Map.prototype.onMapLoaded = function () {
  VisuMZ.EventsMoveCore.Scene_Map_onMapLoadedEncErase.call(this);
  $gameMap.processEraseEncounterEvents();
};
Game_Map.prototype.requestMapLoadCommonEvents = function () {
  if (!$dataMap) {
    return;
  }
  if (!$dataMap.note) {
    return;
  }
  const _0x11fccd = $dataMap.note;
  if (_0x11fccd.match(/<MAP LOAD COMMON EVENT(?:|S):[ ](.*)>/i)) {
    const _0x1fd601 = String(RegExp.$1).split(',').map(_0x3493c7 => Number(_0x3493c7));
    for (const _0x4b2be6 of _0x1fd601) {
      $gameTemp.reserveCommonEvent(_0x4b2be6);
    }
  }
};
Game_CommonEvent.prototype.hasAdvancedSwitchVariable = function () {
  const _0x9dc96e = this.event();
  return this.isActive() && _0x9dc96e.trigger >= 0x1 && DataManager.isAdvancedSwitch(_0x9dc96e.switchId);
};
Game_CommonEvent.prototype.hasCPCs = function () {
  return VisuMZ.EventsMoveCore.CustomPageConditions._commonEvents.includes(this._commonEventId);
};
VisuMZ.EventsMoveCore.Game_CommonEvent_isActive = Game_CommonEvent.prototype.isActive;
Game_CommonEvent.prototype.isActive = function () {
  if (VisuMZ.EventsMoveCore.Game_CommonEvent_isActive.call(this)) {
    return true;
  } else {
    const _0x1a8c14 = this.event();
    return VisuMZ.EventsMoveCore.CustomPageConditions.metCPC(this.event().CPC, this._commonEventId, _0x1a8c14);
  }
};
VisuMZ.EventsMoveCore.Game_Map_parallelCommonEvents = Game_Map.prototype.parallelCommonEvents;
Game_Map.prototype.parallelCommonEvents = function () {
  const _0x3bad50 = VisuMZ.EventsMoveCore.Game_Map_parallelCommonEvents.call(this);
  const _0x1b9e64 = VisuMZ.EventsMoveCore.CustomPageConditions._commonEvents.map(_0x516cb3 => $dataCommonEvents[_0x516cb3]);
  return _0x3bad50.concat(_0x1b9e64).filter((_0x5c8a50, _0x5201af, _0x66a706) => _0x66a706.indexOf(_0x5c8a50) === _0x5201af);
};
Game_CharacterBase.ALLOW_LADDER_DASH = VisuMZ.EventsMoveCore.Settings.Movement.DashOnLadder ?? false;
VisuMZ.EventsMoveCore.Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function () {
  VisuMZ.EventsMoveCore.Game_CharacterBase_initMembers.call(this);
  this.initEventsMoveCoreSettings();
};
Game_CharacterBase.prototype.initEventsMoveCoreSettings = function () {
  this._scaleBaseX = 0x1;
  this._scaleBaseY = 0x1;
  this._patternLocked = false;
  this.clearPose();
  this.clearDashing();
  this.clearSpriteOffsets();
  this.clearStepPattern();
};
VisuMZ.EventsMoveCore.Game_CharacterBase_opacity = Game_CharacterBase.prototype.opacity;
Game_CharacterBase.prototype.opacity = function () {
  let _0x2704fa = VisuMZ.EventsMoveCore.Game_CharacterBase_opacity.call(this);
  _0x2704fa = this.adjustMoveSynchOpacityDelta(_0x2704fa);
  return _0x2704fa;
};
Game_CharacterBase.prototype.adjustMoveSynchOpacityDelta = function (_0x351162) {
  return _0x351162;
};
Game_CharacterBase.prototype.isSpriteVS8dir = function () {
  if (this.constructor === Game_Player && this.isInVehicle()) {
    return this.vehicle().characterName().match(/\[VS8\]/i);
  } else {
    return Imported.VisuMZ_2_DragonbonesUnion && this.hasDragonbones() ? true : this.characterName().match(/\[VS8\]/i);
  }
};
VisuMZ.EventsMoveCore.Game_CharacterBase_direction = Game_CharacterBase.prototype.direction;
Game_CharacterBase.prototype.direction = function () {
  if (!$dataMap) {
    return this._direction || 0x2;
  }
  if (this.isOnLadder() && !this.isJumping() && this.isSpriteVS8dir()) {
    return this.directionOnLadderSpriteVS8dir();
  } else {
    if (this.isOnLadder() && !this.isJumping()) {
      return 0x8;
    } else {
      return this.isPosing() && this.isSpriteVS8dir() ? this.getPosingCharacterDirection() : VisuMZ.EventsMoveCore.Game_CharacterBase_direction.call(this);
    }
  }
};
VisuMZ.EventsMoveCore.Game_CharacterBase_setDirection = Game_CharacterBase.prototype.setDirection;
Game_CharacterBase.prototype.setDirection = function (_0x1755f6) {
  if (!this.isSpriteVS8dir()) {
    _0x1755f6 = this.correctFacingDirection(_0x1755f6);
  }
  VisuMZ.EventsMoveCore.Game_CharacterBase_setDirection.call(this, _0x1755f6);
  this.updateMoveSynchDirection();
};
Game_CharacterBase.prototype.correctFacingDirection = function (_0x3182c8) {
  if (_0x3182c8 === 0x1) {
    return this.canPass(this._x, this._y, 0x4) ? 0x4 : 0x2;
  }
  if (_0x3182c8 === 0x3) {
    return this.canPass(this._x, this._y, 0x6) ? 0x6 : 0x2;
  }
  if (_0x3182c8 === 0x7) {
    return this.canPass(this._x, this._y, 0x4) ? 0x4 : 0x8;
  }
  if (_0x3182c8 === 0x9) {
    return this.canPass(this._x, this._y, 0x6) ? 0x6 : 0x8;
  }
  return _0x3182c8;
};
Game_CharacterBase.prototype.isDiagonalDirection = function (_0x5d5eb1) {
  return [0x1, 0x3, 0x5, 0x7, 0x9].includes(_0x5d5eb1);
};
Game_CharacterBase.prototype.lastMovedDirection = function () {
  return this._lastMovedDirection || 0x0;
};
VisuMZ.EventsMoveCore.Game_CharacterBase_moveStraight = Game_CharacterBase.prototype.moveStraight;
Game_CharacterBase.prototype.moveStraight = function (_0x5cc0ab) {
  this._lastMovedDirection = _0x5cc0ab;
  VisuMZ.EventsMoveCore.Game_CharacterBase_moveStraight.call(this, _0x5cc0ab);
};
Game_CharacterBase.prototype.executeMoveDir8 = function (_0x3e1b0a) {
  if (!this.isDiagonalDirection(_0x3e1b0a)) {
    return this.moveStraight(_0x3e1b0a);
  }
  let _0x319a13 = 0x0;
  let _0x51e4a3 = 0x0;
  switch (_0x3e1b0a) {
    case 0x1:
      _0x319a13 = 0x4;
      _0x51e4a3 = 0x2;
      break;
    case 0x3:
      _0x319a13 = 0x6;
      _0x51e4a3 = 0x2;
      break;
    case 0x7:
      _0x319a13 = 0x4;
      _0x51e4a3 = 0x8;
      break;
    case 0x9:
      _0x319a13 = 0x6;
      _0x51e4a3 = 0x8;
      break;
  }
  if (VisuMZ.EventsMoveCore.Settings.Movement.StrictCollision) {
    if (!this.canPass(this._x, this._y, _0x319a13)) {
      return this.moveStraight(_0x51e4a3);
    }
    if (!this.canPass(this._x, this._y, _0x51e4a3)) {
      return this.moveStraight(_0x319a13);
    }
    if (!this.canPassDiagonally(this._x, this._y, _0x319a13, _0x51e4a3)) {
      let _0x28fefa = VisuMZ.EventsMoveCore.Settings.Movement.FavorHorz ? _0x319a13 : _0x51e4a3;
      return this.moveStraight(_0x28fefa);
    }
  }
  this._lastMovedDirection = _0x3e1b0a;
  this.moveDiagonally(_0x319a13, _0x51e4a3);
};
VisuMZ.EventsMoveCore.Game_CharacterBase_realMoveSpeed = Game_CharacterBase.prototype.realMoveSpeed;
Game_CharacterBase.prototype.realMoveSpeed = function () {
  let _0x341b0b = this._moveSpeed;
  if (this.isDashing()) {
    _0x341b0b += this.dashSpeedModifier();
  }
  return this.adjustDir8MovementSpeed(_0x341b0b);
};
Game_CharacterBase.prototype.dashSpeedModifier = function () {
  const _0x16f46b = VisuMZ.EventsMoveCore.Settings.Movement;
  return _0x16f46b.DashModifier !== undefined ? _0x16f46b.DashModifier : VisuMZ.EventsMoveCore.Game_CharacterBase_realMoveSpeed.call(this) - this._moveSpeed;
};
Game_CharacterBase.prototype.adjustDir8MovementSpeed = function (_0x4a621e) {
  const _0x17b683 = VisuMZ.EventsMoveCore.Settings.Movement;
  if (!_0x17b683.SlowerSpeed) {
    return _0x4a621e;
  }
  if ([0x1, 0x3, 0x7, 0x9].includes(this._lastMovedDirection)) {
    _0x4a621e *= _0x17b683.DiagonalSpeedMultiplier || 0.01;
  }
  return _0x4a621e;
};
VisuMZ.EventsMoveCore.Game_CharacterBase_isDashing = Game_CharacterBase.prototype.isDashing;
Game_CharacterBase.prototype.isDashing = function () {
  if (!Game_CharacterBase.ALLOW_LADDER_DASH && this.isOnLadder()) {
    return false;
  }
  if (this._forceDashing) {
    return true;
  }
  return VisuMZ.EventsMoveCore.Game_CharacterBase_isDashing.call(this);
};
Game_CharacterBase.prototype.isDashingAndMoving = function () {
  return this.isDashing() && this._stopCount === 0x0;
};
VisuMZ.EventsMoveCore.Game_CharacterBase_pattern = Game_CharacterBase.prototype.pattern;
Game_CharacterBase.prototype.pattern = function () {
  return this.isPosing() ? this.getPosingCharacterPattern() : VisuMZ.EventsMoveCore.Game_CharacterBase_pattern.call(this);
};
VisuMZ.EventsMoveCore.Game_CharacterBase_increaseSteps = Game_CharacterBase.prototype.increaseSteps;
Game_CharacterBase.prototype.increaseSteps = function () {
  VisuMZ.EventsMoveCore.Game_CharacterBase_increaseSteps.call(this);
  this.clearPose();
};
VisuMZ.EventsMoveCore.Game_CharacterBase_characterIndex = Game_CharacterBase.prototype.characterIndex;
Game_CharacterBase.prototype.characterIndex = function () {
  if (this.isSpriteVS8dir()) {
    return this.characterIndexVS8();
  }
  return VisuMZ.EventsMoveCore.Game_CharacterBase_characterIndex.call(this);
};
Game_CharacterBase.prototype.characterIndexVS8 = function () {
  const _0xc7cd = this.direction();
  if (this.isJumping()) {
    if ([0x2, 0x4, 0x6, 0x8].includes(_0xc7cd)) {
      return 0x4;
    }
    if ([0x1, 0x3, 0x7, 0x9].includes(_0xc7cd)) {
      return 0x5;
    }
  } else {
    if (this.isOnLadder()) {
      return 0x6;
    } else {
      if (this.isPosing()) {
        return this.getPosingCharacterIndex();
      } else {
        if (this._forceCarrying) {
          if ([0x2, 0x4, 0x6, 0x8].includes(_0xc7cd)) {
            return 0x4;
          }
          if ([0x1, 0x3, 0x7, 0x9].includes(_0xc7cd)) {
            return 0x5;
          }
        } else {
          if (this.hasEventIcon() && this.useCarryPoseForIcons()) {
            if ([0x2, 0x4, 0x6, 0x8].includes(_0xc7cd)) {
              return 0x4;
            }
            if ([0x1, 0x3, 0x7, 0x9].includes(_0xc7cd)) {
              return 0x5;
            }
          } else {
            if (this.isDashingAndMoving()) {
              if ([0x2, 0x4, 0x6, 0x8].includes(_0xc7cd)) {
                return 0x2;
              }
              if ([0x1, 0x3, 0x7, 0x9].includes(_0xc7cd)) {
                return 0x3;
              }
            } else {
              if ([0x2, 0x4, 0x6, 0x8].includes(_0xc7cd)) {
                return 0x0;
              }
              if ([0x1, 0x3, 0x7, 0x9].includes(_0xc7cd)) {
                return 0x1;
              }
            }
          }
        }
      }
    }
  }
};
Game_CharacterBase.prototype.useCarryPoseForIcons = function () {
  return VisuMZ.EventsMoveCore.Settings.VS8.CarryPose;
};
Game_CharacterBase.prototype.isOnRope = function () {
  return this.isOnLadder() && this.terrainTag() === VisuMZ.EventsMoveCore.Settings.TerrainTag.Rope;
};
Game_CharacterBase.prototype.directionOnLadderSpriteVS8dir = function () {
  return this.isOnRope() ? 0x4 : 0x2;
};
VisuMZ.EventsMoveCore.Game_CharacterBase_update = Game_CharacterBase.prototype.update;
Game_CharacterBase.prototype.update = function () {
  this.updateScaleBase();
  VisuMZ.EventsMoveCore.Game_CharacterBase_update.call(this);
  this.updatePose();
};
Game_CharacterBase.prototype.updateScaleBase = function () {
  this._scaleX = this._scaleBaseX ?? 0x1;
  this._scaleY = this._scaleBaseY ?? 0x1;
};
VisuMZ.EventsMoveCore.Game_CharacterBase_bushDepth = Game_CharacterBase.prototype.bushDepth;
Game_CharacterBase.prototype.bushDepth = function () {
  let _0x2f3a54 = VisuMZ.EventsMoveCore.Game_CharacterBase_bushDepth.call(this);
  if (this._scaleY !== undefined) {
    _0x2f3a54 /= Math.max(this._scaleY, 0.00001);
  }
  return Math.floor(_0x2f3a54);
};
Game_CharacterBase.prototype.updatePose = function () {
  this._poseDuration = this._poseDuration || 0x0;
  if (this._poseDuration > 0x0) {
    this._poseDuration--;
    if (this._poseDuration <= 0x0 && this._pose !== "ZZZ") {
      this.clearPose();
    }
  }
};
VisuMZ.EventsMoveCore.Game_CharacterBase_moveDiagonally = Game_CharacterBase.prototype.moveDiagonally;
Game_CharacterBase.prototype.moveDiagonally = function (_0xd04db6, _0x16d0ba) {
  VisuMZ.EventsMoveCore.Game_CharacterBase_moveDiagonally.call(this, _0xd04db6, _0x16d0ba);
  if (this.isSpriteVS8dir()) {
    this.setDiagonalDirection(_0xd04db6, _0x16d0ba);
  }
};
Game_CharacterBase.prototype.setDiagonalDirection = function (_0xca3827, _0x163f8f) {
  if (_0xca3827 === 0x4 && _0x163f8f === 0x2) {
    this.setDirection(0x1);
  }
  if (_0xca3827 === 0x6 && _0x163f8f === 0x2) {
    this.setDirection(0x3);
  }
  if (_0xca3827 === 0x4 && _0x163f8f === 0x8) {
    this.setDirection(0x7);
  }
  if (_0xca3827 === 0x6 && _0x163f8f === 0x8) {
    this.setDirection(0x9);
  }
};
VisuMZ.EventsMoveCore.Game_CharacterBase_hasStepAnime = Game_CharacterBase.prototype.hasStepAnime;
Game_CharacterBase.prototype.hasStepAnime = function () {
  if (this.isPosing() && this.getPose() === "ZZZ") {
    return true;
  }
  return VisuMZ.EventsMoveCore.Game_CharacterBase_hasStepAnime.call(this);
};
Game_CharacterBase.prototype.setPose = function (_0xfdcb49, _0x121f9b) {
  if (_0xfdcb49.match(/Z/i)) {
    _0xfdcb49 = "ZZZ";
  }
  if (_0xfdcb49.match(/SLEEP/i)) {
    _0xfdcb49 = "ZZZ";
  }
  if (this.isSpriteVS8dir()) {
    this._pose = _0xfdcb49.toUpperCase().trim();
    this._poseDuration = _0x121f9b || Infinity;
  }
};
Game_CharacterBase.prototype.getPose = function () {
  return this.isSpriteVS8dir() ? (this._pose || '').toUpperCase().trim() : ''.toUpperCase().trim();
};
Game_CharacterBase.prototype.setBalloonPose = function (_0x3c13e5, _0x34fc7) {
  if (this.isSpriteVS8dir()) {
    const _0x3295ec = ['', "EXCLAMATION", "QUESTION", "MUSIC NOTE", "HEART", 'ANGER', "SWEAT", "COBWEB", "SILENCE", "LIGHT BULB", 'ZZZ', '', '', '', '', ''][_0x3c13e5];
    this.setPose(_0x3295ec, _0x34fc7);
  }
};
Game_CharacterBase.prototype.clearPose = function () {
  this._pose = '';
  this._poseDuration = 0x0;
};
Game_CharacterBase.prototype.isPosing = function () {
  return this.isSpriteVS8dir() && !!this._pose;
};
Game_CharacterBase.prototype.getPosingCharacterIndex = function () {
  switch (this._pose.toUpperCase().trim()) {
    case "ITEM":
    case "HMPH":
    case 'VICTORY':
    case "HURT":
    case 'KNEEL':
    case "COLLAPSE":
      return 0x6;
      break;
    default:
      return 0x7;
      break;
  }
};
Game_CharacterBase.prototype.getPosingCharacterDirection = function () {
  switch (this._pose.toUpperCase()) {
    case "EXCLAMATION":
    case 'QUESTION':
    case "MUSIC NOTE":
    case '!':
    case '?':
      return 0x2;
      break;
    case "HEART":
    case "ANGER":
    case "SWEAT":
      return 0x4;
      break;
    case "ITEM":
    case "HMPH":
    case 'VICTORY':
    case "COBWEB":
    case "SILENCE":
    case "LIGHT BULB":
      return 0x6;
      break;
    case "HURT":
    case "KNEEL":
    case "COLLAPSE":
    case 'ZZZ':
    case "SLEEP":
      return 0x8;
      break;
    default:
      return VisuMZ.EventsMoveCore.Game_CharacterBase_setDirection.call(this);
      break;
  }
};
Game_CharacterBase.prototype.getPosingCharacterPattern = function () {
  switch (this._pose.toUpperCase()) {
    case "ITEM":
    case "HURT":
    case "EXCLAMATION":
    case '!':
    case "HEART":
    case "COBWEB":
      return 0x0;
      break;
    case "HMPH":
    case 'KNEEL':
    case "QUESTION":
    case '?':
    case 'ANGER':
    case "SILENCE":
      return 0x1;
      break;
    case "VICTORY":
    case "COLLAPSE":
    case "MUSIC NOTE":
    case "SWEAT":
    case "LIGHT BULB":
      return 0x2;
      break;
    default:
      return VisuMZ.EventsMoveCore.Game_CharacterBase_pattern.call(this);
      break;
  }
};
Game_CharacterBase.prototype.forceCarrying = function () {
  this._forceCarrying = true;
};
Game_CharacterBase.prototype.clearCarrying = function () {
  this._forceCarrying = false;
};
Game_CharacterBase.prototype.forceDashing = function () {
  this._forceDashing = true;
};
Game_CharacterBase.prototype.clearDashing = function () {
  this._forceDashing = false;
};
Game_CharacterBase.prototype.isShadowVisible = function () {
  if (this.isTile()) {
    return false;
  }
  if (this._isObjectCharacter) {
    return false;
  }
  if (this._characterName === '') {
    return false;
  }
  if (this.constructor === Game_Vehicle) {
    return false;
  }
  if (this.isTransparent()) {
    return false;
  }
  return true;
};
Game_CharacterBase.prototype.isShadowShrink = function () {
  if (this.isOnLadder()) {
    return true;
  }
  if (this.constructor === Game_Player && this.isInVehicle()) {
    return true;
  }
  return false;
};
Game_CharacterBase.prototype.shadowFilename = function () {
  return VisuMZ.EventsMoveCore.Settings.Movement.DefaultShadow;
};
Game_CharacterBase.prototype.shadowX = function () {
  return this.screenX();
};
Game_CharacterBase.prototype.shadowY = function () {
  const _0x1d76a0 = $gameMap.tileHeight();
  return Math.floor(this.scrolledY() * _0x1d76a0 + _0x1d76a0);
};
Game_CharacterBase.DIAGONAL_PATHFINDING_EVENT_LIMIT = 0x64;
Game_CharacterBase.prototype.getDiagonalDestination = function (_0x2525d4, _0x3e417a) {
  if (TouchInput.isPressed()) {
    return false;
  }
  if (!$gameMap.isSupportDiagonalMovement()) {
    return false;
  }
  if ($gameMap.eventsXyNt(_0x2525d4, _0x3e417a).length > 0x0) {
    return false;
  }
  if (!$gameMap.isPassableByAnyDirection(_0x2525d4, _0x3e417a)) {
    return false;
  }
  const _0x511dea = $gameMap._events.length;
  if (_0x511dea >= Game_CharacterBase.DIAGONAL_PATHFINDING_EVENT_LIMIT) {
    return false;
  }
  return true;
};
Game_Character.prototype.findDiagonalDirectionTo = function (_0x57a254, _0xd257ca) {
  let _0x17c4f3 = this.findDirectionTo(_0x57a254, _0xd257ca);
  if (!this.getDiagonalDestination(_0x57a254, _0xd257ca)) {
    return _0x17c4f3;
  }
  if (this.isCollidedWithEvents(_0x57a254, _0xd257ca)) {
    return _0x17c4f3;
  }
  const _0x16cd8a = _0x17c4f3;
  if (_0x17c4f3 === 0x2) {
    if (_0x57a254 > this.x && this.canPass(this.x, this.y, 0x6)) {
      _0x17c4f3 = 0x3;
    }
    if (_0x57a254 < this.x && this.canPass(this.x, this.y, 0x4)) {
      _0x17c4f3 = 0x1;
    }
  } else {
    if (_0x17c4f3 === 0x4) {
      if (_0xd257ca > this.y && this.canPass(this.x, this.y, 0x4)) {
        _0x17c4f3 = 0x1;
      }
      if (_0xd257ca < this.y && this.canPass(this.x, this.y, 0x6)) {
        _0x17c4f3 = 0x7;
      }
    } else {
      if (_0x17c4f3 === 0x6) {
        if (_0xd257ca > this.y && this.canPass(this.x, this.y, 0x4)) {
          _0x17c4f3 = 0x3;
        }
        if (_0xd257ca < this.y && this.canPass(this.x, this.y, 0x6)) {
          _0x17c4f3 = 0x9;
        }
      } else {
        if (_0x17c4f3 === 0x8) {
          if (_0x57a254 > this.x && this.canPass(this.x, this.y, 0x6)) {
            _0x17c4f3 = 0x9;
          }
          if (_0x57a254 < this.x && this.canPass(this.x, this.y, 0x4)) {
            _0x17c4f3 = 0x7;
          }
        }
      }
    }
  }
  if (!this.canPass(this.x, this.y, _0x17c4f3)) {
    return _0x16cd8a;
  }
  const _0x1a97d8 = $gameMap.roundXWithDirection(this.x, _0x17c4f3);
  const _0x19b777 = $gameMap.roundYWithDirection(this.y, _0x17c4f3);
  if (this.isCollidedWithEvents(_0x1a97d8, _0x19b777)) {
    _0x17c4f3 = _0x16cd8a;
  }
  return _0x17c4f3;
};
VisuMZ.EventsMoveCore.Game_CharacterBase_canPass = Game_CharacterBase.prototype.canPass;
Game_CharacterBase.prototype.canPass = function (_0x4435ec, _0x2d2087, _0x2dc17c) {
  return this._vehicleType === 'airship' ? this.vehicle().isAirshipPassable(_0x4435ec, _0x2d2087, _0x2dc17c) : VisuMZ.EventsMoveCore.Game_CharacterBase_canPass.call(this, _0x4435ec, _0x2d2087, _0x2dc17c);
};
Game_CharacterBase.prototype.clearSpriteOffsets = function () {
  this._spriteOffsetX = 0x0;
  this._spriteOffsetY = 0x0;
};
VisuMZ.EventsMoveCore.Game_CharacterBase_screenX = Game_CharacterBase.prototype.screenX;
Game_CharacterBase.prototype.screenX = function () {
  return VisuMZ.EventsMoveCore.Game_CharacterBase_screenX.call(this) + (this._spriteOffsetX || 0x0);
};
VisuMZ.EventsMoveCore.Game_CharacterBase_screenY = Game_CharacterBase.prototype.screenY;
Game_CharacterBase.prototype.screenY = function () {
  return VisuMZ.EventsMoveCore.Game_CharacterBase_screenY.call(this) + (this._spriteOffsetY || 0x0);
};
Game_CharacterBase.DEFAULT_SHIFT_Y = VisuMZ.EventsMoveCore.Settings.Movement.ShiftY ?? -0x6;
Game_CharacterBase.prototype.shiftY = function () {
  let _0x317675 = this.isObjectCharacter() ? 0x0 : -Game_CharacterBase.DEFAULT_SHIFT_Y;
  if (this._scaleY) {
    _0x317675 *= this._scaleY;
  }
  return Math.round(_0x317675);
};
Game_CharacterBase.prototype.clearStepPattern = function () {
  this._stepPattern = '';
};
VisuMZ.EventsMoveCore.Game_CharacterBase_updatePattern = Game_CharacterBase.prototype.updatePattern;
Game_CharacterBase.prototype.updatePattern = function () {
  if (this._patternLocked) {
    return;
  }
  if (this.updatePatternEventsMoveCore()) {
    return;
  }
  VisuMZ.EventsMoveCore.Game_CharacterBase_updatePattern.call(this);
};
Game_CharacterBase.prototype.updatePatternEventsMoveCore = function () {
  if (!this.hasStepAnime() && this._stopCount > 0x0) {
    return false;
  }
  switch (String(this._stepPattern).toUpperCase().trim()) {
    case "LEFT TO RIGHT":
      this._pattern += 0x1;
      if (this._pattern > 0x2) {
        this.setPattern(0x0);
      }
      break;
    case "RIGHT TO LEFT":
      this._pattern -= 0x1;
      if (this._pattern < 0x0) {
        this.setPattern(0x2);
      }
      break;
    case "SPIN CLOCKWISE":
    case "SPIN CW":
      this.turnRight90();
      break;
    case "SPIN COUNTERCLOCKWISE":
    case "SPIN CCW":
    case "SPIN ANTICLOCKWISE":
    case "SPIN ACW":
      this.turnLeft90();
      break;
    default:
      return false;
  }
  return true;
};
Game_CharacterBase.prototype.getEventIconData = function () {
  return $gameSystem.getEventIconData(this);
};
Game_CharacterBase.prototype.hasEventIcon = function () {
  const _0xba1d0b = this.getEventIconData();
  if (!_0xba1d0b) {
    return false;
  }
  return _0xba1d0b.iconIndex > 0x0;
};
Game_CharacterBase.prototype.frontX = function () {
  const _0x26ac9d = this.direction();
  return $gameMap.roundXWithDirection(this.x, _0x26ac9d);
};
Game_CharacterBase.prototype.frontY = function () {
  const _0x2d3b08 = this.direction();
  return $gameMap.roundYWithDirection(this.y, _0x2d3b08);
};
Game_CharacterBase.prototype.backX = function () {
  const _0x299526 = this.reverseDir(this.direction());
  return $gameMap.roundXWithDirection(this.x, _0x299526);
};
Game_CharacterBase.prototype.backY = function () {
  const _0x46fd05 = this.reverseDir(this.direction());
  return $gameMap.roundYWithDirection(this.y, _0x46fd05);
};
Game_CharacterBase.prototype.ccwX = function () {
  const _0x1fc6be = [0x0, 0x3, 0x6, 0x9, 0x2, 0x5, 0x8, 0x1, 0x4, 0x7][this.direction()];
  return $gameMap.roundXWithDirection(this.x, _0x1fc6be);
};
Game_CharacterBase.prototype.ccwY = function () {
  const _0x3ccd63 = [0x0, 0x3, 0x6, 0x9, 0x2, 0x5, 0x8, 0x1, 0x4, 0x7][this.direction()];
  return $gameMap.roundYWithDirection(this.y, _0x3ccd63);
};
Game_CharacterBase.prototype.cwX = function () {
  const _0x4c8b81 = [0x0, 0x7, 0x4, 0x1, 0x8, 0x5, 0x2, 0x9, 0x6, 0x3][this.direction()];
  return $gameMap.roundXWithDirection(this.x, _0x4c8b81);
};
Game_CharacterBase.prototype.cwY = function () {
  const _0x405874 = [0x0, 0x7, 0x4, 0x1, 0x8, 0x5, 0x2, 0x9, 0x6, 0x3][this.direction()];
  return $gameMap.roundYWithDirection(this.y, _0x405874);
};
VisuMZ.EventsMoveCore.Game_Character_setMoveRoute = Game_Character.prototype.setMoveRoute;
Game_Character.prototype.setMoveRoute = function (_0x824b7) {
  route = JsonEx.makeDeepCopy(_0x824b7);
  VisuMZ.EventsMoveCore.Game_Character_setMoveRoute.call(this, route);
};
VisuMZ.EventsMoveCore.Game_Character_forceMoveRoute = Game_Character.prototype.forceMoveRoute;
Game_Character.prototype.forceMoveRoute = function (_0x17213d) {
  route = JsonEx.makeDeepCopy(_0x17213d);
  VisuMZ.EventsMoveCore.Game_Character_forceMoveRoute.call(this, route);
};
VisuMZ.EventsMoveCore.Game_Character_processMoveCommand = Game_Character.prototype.processMoveCommand;
Game_Character.prototype.processMoveCommand = function (_0x27dbfb) {
  if (_0x27dbfb.code === Game_Character.ROUTE_SCRIPT) {
    let _0x41a26e = _0x27dbfb.parameters[0x0];
    _0x41a26e = this.convertVariableValuesInScriptCall(_0x41a26e);
    _0x41a26e = this.convertSelfVariableValuesInScriptCall(_0x41a26e);
    this.processMoveCommandEventsMoveCore(_0x27dbfb, _0x41a26e);
  } else {
    VisuMZ.EventsMoveCore.Game_Character_processMoveCommand.call(this, _0x27dbfb);
  }
};
Game_Character.prototype.convertVariableValuesInScriptCall = function (_0x2223d2) {
  const _0x279eca = /\$gameVariables\.value\((\d+)\)/gi;
  const _0x2e9964 = /\\V\[(\d+)\]/gi;
  while (_0x2223d2.match(_0x279eca)) {
    _0x2223d2 = _0x2223d2.replace(_0x279eca, (_0x3dce67, _0xa42eef) => $gameVariables.value(parseInt(_0xa42eef)));
  }
  while (_0x2223d2.match(_0x2e9964)) {
    _0x2223d2 = _0x2223d2.replace(_0x2e9964, (_0x6408a1, _0x17fa4b) => $gameVariables.value(parseInt(_0x17fa4b)));
  }
  return _0x2223d2;
};
Game_Character.prototype.convertSelfVariableValuesInScriptCall = function (_0x4d7e27) {
  const _0x33b5d4 = /\\SELFVAR\[(\d+)\]/gi;
  while (_0x4d7e27.match(_0x33b5d4)) {
    _0x4d7e27 = _0x4d7e27.replace(_0x33b5d4, (_0x44e081, _0x21dda3) => getSelfVariableValue(this._mapId, this._eventId, parseInt(_0x21dda3)));
  }
  return _0x4d7e27;
};
Game_Character.prototype.processMoveCommandEventsMoveCore = function (_0x8b9b9e, _0x148df3) {
  if (_0x148df3.match(/ANIMATION:[ ](\d+)/i)) {
    return this.processMoveRouteAnimation(Number(RegExp.$1));
  }
  if (_0x148df3.match(/BALLOON:[ ](.*)/i)) {
    return this.processMoveRouteBalloon(String(RegExp.$1));
  }
  if (_0x148df3.match(/FADE IN:[ ](\d+)/i)) {
    return this.processMoveRouteFadeIn(Number(RegExp.$1));
  }
  if (_0x148df3.match(/FADE OUT:[ ](\d+)/i)) {
    return this.processMoveRouteFadeOut(Number(RegExp.$1));
  }
  if (_0x148df3.match(/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:TRUE|ON)/i)) {
    return this.forceCarrying();
  }
  if (_0x148df3.match(/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:FALSE|OFF)/i)) {
    return this.clearCarrying();
  }
  if (_0x148df3.match(/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:TRUE|ON)/i)) {
    return this.forceDashing();
  }
  if (_0x148df3.match(/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:FALSE|OFF)/i)) {
    return this.clearDashing();
  }
  if (_0x148df3.match(/HUG:[ ]LEFT/i)) {
    return this.processMoveRouteHugWall("left");
  }
  if (_0x148df3.match(/HUG:[ ]RIGHT/i)) {
    return this.processMoveRouteHugWall("right");
  }
  if (_0x148df3.match(/INDEX:[ ](\d+)/i)) {
    return this.processMoveRouteSetIndex(Number(RegExp.$1));
  }
  if (_0x148df3.match(/INDEX:[ ]([\+\-]\d+)/i)) {
    const _0x4c02a8 = this._characterIndex + Number(RegExp.$1);
    return this.processMoveRouteSetIndex(_0x4c02a8);
  }
  if (_0x148df3.match(/JUMP FORWARD:[ ](\d+)/i)) {
    return this.processMoveRouteJumpForward(Number(RegExp.$1));
  }
  if (_0x148df3.match(/JUMP TO:\s*(\d+)\s*[, ]\s*(\d+)/i)) {
    return this.processMoveRouteJumpTo(Number(RegExp.$1), Number(RegExp.$2));
  }
  if (_0x148df3.match(/JUMP TO EVENT:[ ](\d+)/i)) {
    const _0x4b8c9d = $gameMap.event(Number(RegExp.$1));
    return this.processMoveRouteJumpToCharacter(_0x4b8c9d);
  }
  if (_0x148df3.match(/JUMP TO PLAYER/i)) {
    return this.processMoveRouteJumpToCharacter($gamePlayer);
  }
  if (_0x148df3.match(/JUMP TO HOME/i) && this.eventId) {
    const _0x14d0d8 = this._randomHomeX;
    const _0x5adf96 = this._randomHomeY;
    return this.processMoveRouteJumpTo(_0x14d0d8, _0x5adf96);
  }
  if (_0x148df3.match(/MOVE[ ](.*)[ ]UNTIL STOP/i)) {
    const _0x246489 = String(RegExp.$1);
    const _0x296704 = this.checkCollisionKeywords(_0x148df3);
    return this.processMoveRouteMoveUntilStop(_0x246489, _0x296704);
  }
  if (_0x148df3.match(/MOVE TO:\s*(\d+)\s*[, ]\s*(\d+)/i)) {
    const _0x4ed7e5 = Number(RegExp.$1);
    const _0x5753dd = Number(RegExp.$2);
    const _0x18ca7f = this.checkCollisionKeywords(_0x148df3);
    return this.processMoveRouteMoveTo(_0x4ed7e5, _0x5753dd, _0x18ca7f);
  }
  if (_0x148df3.match(/MOVE TO EVENT:[ ](\d+)/i)) {
    const _0x1c6b53 = $gameMap.event(Number(RegExp.$1));
    const _0x56c57d = this.checkCollisionKeywords(_0x148df3);
    return this.processMoveRouteMoveToCharacter(_0x1c6b53, _0x56c57d);
  }
  if (_0x148df3.match(/MOVE TO PLAYER/i)) {
    const _0x2966fd = this.checkCollisionKeywords(_0x148df3);
    return this.processMoveRouteMoveToCharacter($gamePlayer, _0x2966fd);
  }
  if (_0x148df3.match(/MOVE TO HOME/i) && this.eventId) {
    const _0x13574a = this._randomHomeX;
    const _0x4ebc03 = this._randomHomeY;
    const _0x3f8d29 = this.checkCollisionKeywords(_0x148df3);
    return this.processMoveRouteMoveTo(_0x13574a, _0x4ebc03, _0x3f8d29);
  }
  if (_0x148df3.match(/MOVE LOWER LEFT:[ ](\d+)/i)) {
    return this.processMoveRouteMoveRepeat(0x1, Number(RegExp.$1));
  }
  if (_0x148df3.match(/MOVE DOWN:[ ](\d+)/i)) {
    return this.processMoveRouteMoveRepeat(0x2, Number(RegExp.$1));
  }
  if (_0x148df3.match(/MOVE LOWER RIGHT:[ ](\d+)/i)) {
    return this.processMoveRouteMoveRepeat(0x3, Number(RegExp.$1));
  }
  if (_0x148df3.match(/MOVE LEFT:[ ](\d+)/i)) {
    return this.processMoveRouteMoveRepeat(0x4, Number(RegExp.$1));
  }
  if (_0x148df3.match(/MOVE RIGHT:[ ](\d+)/i)) {
    return this.processMoveRouteMoveRepeat(0x6, Number(RegExp.$1));
  }
  if (_0x148df3.match(/MOVE UPPER LEFT:[ ](\d+)/i)) {
    return this.processMoveRouteMoveRepeat(0x7, Number(RegExp.$1));
  }
  if (_0x148df3.match(/MOVE UP:[ ](\d+)/i)) {
    return this.processMoveRouteMoveRepeat(0x8, Number(RegExp.$1));
  }
  if (_0x148df3.match(/MOVE UPPER RIGHT:[ ](\d+)/i)) {
    return this.processMoveRouteMoveRepeat(0x9, Number(RegExp.$1));
  }
  if (_0x148df3.match(/OPACITY:[ ](\d+)([%％])/i)) {
    const _0xc69974 = Math.round(Number(RegExp.$1) / 0x64 * 0xff);
    return this.setOpacity(_0xc69974.clamp(0x0, 0xff));
  }
  if (_0x148df3.match(/OPACITY:[ ]([\+\-]\d+)([%％])/i)) {
    const _0x15f9f6 = this._opacity + Math.round(Number(RegExp.$1) / 0x64 * 0xff);
    return this.setOpacity(_0x15f9f6.clamp(0x0, 0xff));
  }
  if (_0x148df3.match(/OPACITY:[ ]([\+\-]\d+)/i)) {
    const _0x2ffd9d = this._opacity + Number(RegExp.$1);
    return this.setOpacity(_0x2ffd9d.clamp(0x0, 0xff));
  }
  if (_0x148df3.match(/PATTERN LOCK:[ ](\d+)/i)) {
    return this.processMoveRoutePatternLock(Number(RegExp.$1));
  }
  if (_0x148df3.match(/PATTERN UNLOCK/i)) {
    return this._patternLocked = false;
  }
  if (_0x148df3.match(/POSE:[ ](.*)/i)) {
    const _0x3cce1e = String(RegExp.$1).toUpperCase().trim();
    return this.setPose(_0x3cce1e);
  }
  if (_0x148df3.match(/STEP TOWARD:\s*(\d+)\s*[, ]\s*(\d+)/i)) {
    const _0x52e8dc = Number(RegExp.$1);
    const _0x2cea43 = Number(RegExp.$2);
    return this.processMoveRouteStepTo(_0x52e8dc, _0x2cea43);
  }
  if (_0x148df3.match(/STEP TOWARD EVENT:[ ](\d+)/i)) {
    const _0x184161 = $gameMap.event(Number(RegExp.$1));
    return this.processMoveRouteStepToCharacter(_0x184161);
  }
  if (_0x148df3.match(/STEP TOWARD PLAYER/i)) {
    return this.processMoveRouteStepToCharacter($gamePlayer);
  }
  if (_0x148df3.match(/STEP TOWARD HOME/i) && this.eventId) {
    const _0x37e2a2 = this._randomHomeX;
    const _0x48c97f = this._randomHomeY;
    return this.processMoveRouteStepTo(_0x37e2a2, _0x48c97f);
  }
  if (_0x148df3.match(/STEP AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i)) {
    return this.moveAwayFromPoint(Number(RegExp.$1), Number(RegExp.$2));
  }
  if (_0x148df3.match(/STEP AWAY FROM EVENT:[ ](\d+)/i)) {
    const _0x195551 = $gameMap.event(Number(RegExp.$1));
    return this.moveAwayFromCharacter(_0x195551);
  }
  if (_0x148df3.match(/STEP AWAY FROM PLAYER/i)) {
    return this.moveAwayFromCharacter($gamePlayer);
  }
  if (_0x148df3.match(/STEP AWAY FROM HOME/i) && this.eventId) {
    const _0x8450e6 = this._randomHomeX;
    const _0x240e63 = this._randomHomeY;
    return this.moveAwayFromPoint(_0x8450e6, _0x240e63);
  }
  if (_0x148df3.match(/TURN TO:\s*(\d+)\s*[, ]\s*(\d+)/i)) {
    return this.moveTowardPoint(Number(RegExp.$1), Number(RegExp.$2));
  }
  if (_0x148df3.match(/TURN TO EVENT:[ ](\d+)/i)) {
    const _0x3bc8a0 = $gameMap.event(Number(RegExp.$1));
    return this.turnTowardCharacter(_0x3bc8a0);
  }
  if (_0x148df3.match(/TURN TO PLAYER/i)) {
    return this.turnTowardCharacter($gamePlayer);
  }
  if (_0x148df3.match(/TURN TO HOME/i) && this.eventId) {
    const _0x208ad8 = this._randomHomeX;
    const _0x10a9e3 = this._randomHomeY;
    return this.turnTowardPoint(_0x208ad8, _0x10a9e3);
  }
  if (_0x148df3.match(/TURN AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i)) {
    return this.turnAwayFromPoint(Number(RegExp.$1), Number(RegExp.$2));
  }
  if (_0x148df3.match(/TURN AWAY FROM EVENT:[ ](\d+)/i)) {
    const _0x578f13 = $gameMap.event(Number(RegExp.$1));
    return this.turnAwayFromCharacter(_0x578f13);
  }
  if (_0x148df3.match(/TURN AWAY FROM PLAYER/i)) {
    return this.turnAwayFromCharacter($gamePlayer);
  }
  if (_0x148df3.match(/TURN AWAY FROM HOME/i) && this.eventId) {
    const _0x28b41e = this._randomHomeX;
    const _0x21fb9d = this._randomHomeY;
    return this.turnAwayFromPoint(_0x28b41e, _0x21fb9d);
  }
  if (_0x148df3.match(/TURN LOWER LEFT/i)) {
    return this.setDirection(0x1);
  }
  if (_0x148df3.match(/TURN LOWER RIGHT/i)) {
    return this.setDirection(0x3);
  }
  if (_0x148df3.match(/TURN UPPER LEFT/i)) {
    return this.setDirection(0x7);
  }
  if (_0x148df3.match(/TURN UPPER RIGHT/i)) {
    return this.setDirection(0x9);
  }
  if (_0x148df3.match(/Self Switch[ ](.*):[ ](.*)/i)) {
    return this.processMoveRouteSelfSwitch(RegExp.$1, RegExp.$2);
  }
  if (_0x148df3.match(/Self Variable[ ](.*):[ ](.*)/i)) {
    return this.processMoveRouteSelfVariable(RegExp.$1, RegExp.$2);
  }
  if (_0x148df3.match(/TELEPORT TO:\s*(\d+)\s*[, ]\s*(\d+)/i)) {
    return this.processMoveRouteTeleportTo(Number(RegExp.$1), Number(RegExp.$2));
  }
  if (_0x148df3.match(/TELEPORT TO EVENT:[ ](\d+)/i)) {
    const _0x258090 = $gameMap.event(Number(RegExp.$1));
    return this.processMoveRouteTeleportToCharacter(_0x258090);
  }
  if (_0x148df3.match(/TELEPORT TO PLAYER/i)) {
    return this.processMoveRouteTeleportToCharacter($gamePlayer);
  }
  if (_0x148df3.match(/TELEPORT TO HOME/i) && this.eventId) {
    const _0x9160ac = this._randomHomeX;
    const _0x365633 = this._randomHomeY;
    return this.processMoveRouteTeleportTo(_0x9160ac, _0x365633);
  }
  try {
    VisuMZ.EventsMoveCore.Game_Character_processMoveCommand.call(this, _0x8b9b9e);
  } catch (_0x2cdafb) {
    if ($gameTemp.isPlaytest()) {
      console.log(_0x2cdafb);
    }
  }
};
Game_Character.prototype.processMoveRouteAnimation = function (_0x428165) {
  $gameTemp.requestAnimation([this], _0x428165);
};
Game_Character.prototype.processMoveRouteBalloon = function (_0x780b0b) {
  let _0x259594 = 0x0;
  switch (_0x780b0b.toUpperCase().trim()) {
    case '!':
    case "EXCLAMATION":
      _0x259594 = 0x1;
      break;
    case '?':
    case "QUESTION":
      _0x259594 = 0x2;
      break;
    case "MUSIC":
    case "NOTE":
    case "MUSIC NOTE":
    case "MUSIC-NOTE":
    case 'MUSICNOTE':
      _0x259594 = 0x3;
      break;
    case "HEART":
    case "LOVE":
      _0x259594 = 0x4;
      break;
    case "ANGER":
      _0x259594 = 0x5;
      break;
    case "SWEAT":
      _0x259594 = 0x6;
      break;
    case "COBWEB":
    case "ANNOYED":
    case "FRUSTRATION":
      _0x259594 = 0x7;
      break;
    case "SILENCE":
    case '...':
      _0x259594 = 0x8;
      break;
    case "LIGHT":
    case 'BULB':
    case "LIGHT BULB":
    case "LIGHT-BULB":
    case "LIGHTBULB":
      _0x259594 = 0x9;
      break;
    case 'Z':
    case 'ZZ':
    case "ZZZ":
    case "SLEEP":
      _0x259594 = 0xa;
      break;
    case "USER-DEFINED 1":
      _0x259594 = 0xb;
      break;
    case "USER-DEFINED 2":
      _0x259594 = 0xc;
      break;
    case "USER-DEFINED 3":
      _0x259594 = 0xd;
      break;
    case "USER-DEFINED 4":
      _0x259594 = 0xe;
      break;
    case "USER-DEFINED 5":
      _0x259594 = 0xf;
      break;
  }
  $gameTemp.requestBalloon(this, _0x259594);
};
Game_Character.prototype.processMoveRouteFadeIn = function (_0x43882d) {
  _0x43882d += this._opacity;
  this.setOpacity(_0x43882d.clamp(0x0, 0xff));
  if (this._opacity < 0xff) {
    this._moveRouteIndex--;
  }
};
Game_Character.prototype.processMoveRouteFadeOut = function (_0x346aac) {
  _0x346aac = this._opacity - _0x346aac;
  this.setOpacity(_0x346aac.clamp(0x0, 0xff));
  if (this._opacity > 0x0) {
    this._moveRouteIndex--;
  }
};
Game_Character.prototype.processMoveRouteHugWall = function (_0x1f47a4) {
  const _0x4d3bde = [0x0, 0x3, 0x6, 0x9, 0x2, 0x0, 0x8, 0x1, 0x4, 0x7];
  const _0x3c4cf6 = [0x0, 0x7, 0x4, 0x1, 0x8, 0x0, 0x2, 0x9, 0x6, 0x3];
  const _0x1562c2 = this.direction();
  const _0x2a0448 = (_0x1f47a4 === "left" ? _0x4d3bde : _0x3c4cf6)[_0x1562c2];
  const _0x35cb7e = (_0x1f47a4 === "left" ? _0x3c4cf6 : _0x4d3bde)[_0x1562c2];
  if (this.canPass(this.x, this.y, _0x2a0448)) {
    if (_0x1f47a4 === "left") {
      this.turnLeft90();
    } else {
      this.turnRight90();
    }
  } else if (!this.canPass(this.x, this.y, this.direction())) {
    if (this.canPass(this.x, this.y, _0x35cb7e)) {
      if (_0x1f47a4 === "left") {
        this.turnRight90();
      } else {
        this.turnLeft90();
      }
    } else {
      this.turn180();
    }
  }
  if (this.canPass(this.x, this.y, this.direction())) {
    this.moveForward();
  }
};
Game_Character.prototype.processMoveRouteSetIndex = function (_0x289bd3) {
  if (ImageManager.isBigCharacter(this._characterName)) {
    return;
  }
  _0x289bd3 = _0x289bd3.clamp(0x0, 0x7);
  this.setImage(this._characterName, _0x289bd3);
};
Game_Character.prototype.processMoveRouteJumpForward = function (_0x3292c2) {
  switch (this.direction()) {
    case 0x1:
      this.jump(-_0x3292c2, _0x3292c2);
      break;
    case 0x2:
      this.jump(0x0, _0x3292c2);
      break;
    case 0x3:
      this.jump(_0x3292c2, _0x3292c2);
      break;
    case 0x4:
      this.jump(-_0x3292c2, 0x0);
      break;
    case 0x6:
      this.jump(_0x3292c2, 0x0);
      break;
    case 0x7:
      this.jump(-_0x3292c2, -_0x3292c2);
      break;
    case 0x8:
      this.jump(0x0, -_0x3292c2);
      break;
    case 0x9:
      this.jump(_0x3292c2, -_0x3292c2);
      break;
  }
};
Game_Character.prototype.processMoveRouteJumpTo = function (_0x409b8a, _0x38d96c) {
  const _0x372c6c = Math.round(_0x409b8a - this.x);
  const _0x3b6b0a = Math.round(_0x38d96c - this.y);
  this.jump(_0x372c6c, _0x3b6b0a);
};
Game_Character.prototype.processMoveRouteJumpToCharacter = function (_0x4b1eb6) {
  if (_0x4b1eb6) {
    this.processMoveRouteJumpTo(_0x4b1eb6.x, _0x4b1eb6.y);
  }
};
Game_Character.prototype.processMoveRouteStepTo = function (_0x4d4116, _0x4d51ae, _0x5c6038) {
  let _0x627b77 = 0x0;
  if (_0x5c6038) {
    $gameTemp._moveAllowPlayerCollision = true;
  }
  if ($gameMap.isSupportDiagonalMovement()) {
    _0x627b77 = this.findDiagonalDirectionTo(_0x4d4116, _0x4d51ae);
  } else {
    _0x627b77 = this.findDirectionTo(_0x4d4116, _0x4d51ae);
  }
  if (_0x5c6038) {
    $gameTemp._moveAllowPlayerCollision = false;
  }
  this.executeMoveDir8(_0x627b77);
  this.setMovementSuccess(true);
};
Game_Character.prototype.processMoveRouteStepToCharacter = function (_0x2c3edb) {
  if (_0x2c3edb) {
    this.processMoveRouteStepTo(_0x2c3edb.x, _0x2c3edb.y);
  }
};
Game_Character.prototype.processMoveRouteStepFrom = function (_0x881836, _0x280acc) {};
Game_Character.prototype.checkCollisionKeywords = function (_0x4cac94) {
  if (_0x4cac94.match(/(?:CRASH|COLLIDE|COLLISION|ENCOUNTER|TOUCH)/i)) {
    return true;
  } else {
    _0x4cac94.match(/(?:AVOID|EVADE|DODGE)/i);
    return false;
  }
};
VisuMZ.EventsMoveCore.Game_Event_isCollidedWithPlayerCharacters = Game_Event.prototype.isCollidedWithPlayerCharacters;
Game_Event.prototype.isCollidedWithPlayerCharacters = function (_0x57b73b, _0x48cde0) {
  if ($gameTemp._moveAllowPlayerCollision) {
    return false;
  }
  return VisuMZ.EventsMoveCore.Game_Event_isCollidedWithPlayerCharacters.call(this, _0x57b73b, _0x48cde0);
};
Game_Character.prototype.processMoveRouteMoveUntilStop = function (_0x45fe84, _0x37f682) {
  const _0x366d0c = ['', "LOWER LEFT", "DOWN", "LOWER RIGHT", "LEFT", '', "RIGHT", "UPPER LEFT", 'UP', "UPPER RIGHT"];
  const _0x3a71db = _0x366d0c.indexOf(_0x45fe84.toUpperCase().trim());
  if (_0x3a71db <= 0x0) {
    return;
  }
  if (_0x37f682) {
    $gameTemp._moveAllowPlayerCollision = true;
  }
  if (this.canPass(this.x, this.y, _0x3a71db)) {
    if (_0x37f682) {
      $gameTemp._moveAllowPlayerCollision = false;
    }
    this.executeMoveDir8(_0x3a71db);
    this._moveRouteIndex -= 0x1;
  }
  if (_0x37f682) {
    $gameTemp._moveAllowPlayerCollision = false;
  }
};
VisuMZ.EventsMoveCore.Game_Event_checkEventTriggerTouch = Game_Event.prototype.checkEventTriggerTouch;
Game_Event.prototype.checkEventTriggerTouch = function (_0x118087, _0x2c8f96) {
  if (VisuMZ.EventsMoveCore.Game_Event_checkEventTriggerTouch.call(this, _0x118087, _0x2c8f96)) {
    return true;
  }
  if ($gameMap.isEventRunning()) {
    return false;
  }
  for (let _0x7899b7 = -this._addedHitbox.left; _0x7899b7 <= this._addedHitbox.right; _0x7899b7++) {
    for (let _0x200384 = -this._addedHitbox.up; _0x200384 <= this._addedHitbox.down; _0x200384++) {
      if (VisuMZ.EventsMoveCore.Game_Event_checkEventTriggerTouch.call(this, _0x118087 + _0x7899b7, _0x2c8f96 + _0x200384)) {
        return true;
      }
    }
  }
  return false;
};
Game_Character.prototype.processMoveRouteMoveTo = function (_0x3bafa9, _0x430fdf, _0x3d96f3) {
  this.processMoveRouteStepTo(_0x3bafa9, _0x430fdf, _0x3d96f3);
  if (this.x !== _0x3bafa9 || this.y !== _0x430fdf) {
    this._moveRouteIndex--;
  }
};
Game_Character.prototype.processMoveRouteMoveToCharacter = function (_0x138ead, _0x1688e4) {
  if (_0x138ead && !_0x138ead._erased) {
    this.processMoveRouteMoveTo(_0x138ead.x, _0x138ead.y, _0x1688e4);
    if (_0x138ead.isNormalPriority() && this.isNormalPriority()) {
      const _0x28dcab = $gameMap.distance(this.x, this.y, _0x138ead.x, _0x138ead.y);
      if (_0x28dcab <= 0x1) {
        this._moveRouteIndex++;
      }
    }
  }
};
Game_Character.prototype.processMoveRouteMoveRepeat = function (_0x51cb32, _0x52232f) {
  _0x52232f = _0x52232f || 0x0;
  const _0x3cf68a = {
    'code': 0x1,
    'indent': null,
    'parameters': []
  };
  _0x3cf68a.code = [0x0, 0x5, 0x1, 0x6, 0x2, 0x0, 0x3, 0x7, 0x4, 0x8][_0x51cb32];
  this._moveRoute.list[this._moveRouteIndex].parameters[0x0] = '';
  while (_0x52232f--) {
    this._moveRoute.list.splice(this._moveRouteIndex + 0x1, 0x0, _0x3cf68a);
  }
};
Game_Character.prototype.processMoveRoutePatternLock = function (_0x17173e) {
  this._patternLocked = true;
  this.setPattern(_0x17173e);
};
Game_Character.prototype.processMoveRouteSelfSwitch = function (_0x5877c5, _0x6b5a62) {
  if (this === $gamePlayer) {
    return;
  }
  const _0x536b13 = [this._mapId, this._eventId, 'A'];
  if (_0x5877c5.match(/\b[ABCD]\b/i)) {
    _0x536b13[0x2] = String(_0x5877c5).charAt(0x0).toUpperCase().trim();
  } else {
    _0x536b13[0x2] = "Self Switch %1".format(_0x5877c5);
  }
  switch (_0x6b5a62.toUpperCase().trim()) {
    case 'ON':
    case "TRUE":
      $gameSelfSwitches.setValue(_0x536b13, true);
      break;
    case "OFF":
    case "FALSE":
      $gameSelfSwitches.setValue(_0x536b13, false);
      break;
    case "TOGGLE":
      $gameSelfSwitches.setValue(_0x536b13, !$gameSelfSwitches.value(_0x536b13));
      break;
  }
};
Game_Character.prototype.processMoveRouteSelfVariable = function (_0x727dc1, _0x388316) {
  if (this === $gamePlayer) {
    return;
  }
  const _0x5dec4c = [this._mapId, this._eventId, "Self Variable %1".format(_0x727dc1)];
  $gameSelfSwitches.setValue(_0x5dec4c, Number(_0x388316));
};
Game_Character.prototype.processMoveRouteTeleportTo = function (_0x385724, _0x5215d0) {
  this.locate(_0x385724, _0x5215d0);
};
Game_Character.prototype.processMoveRouteTeleportToCharacter = function (_0x415aa4) {
  if (_0x415aa4) {
    this.processMoveRouteTeleportTo(_0x415aa4.x, _0x415aa4.y);
  }
};
Game_Character.prototype.turnRight90 = function () {
  switch (this.direction()) {
    case 0x1:
      this.setDirection(0x7);
      break;
    case 0x2:
      this.setDirection(0x4);
      break;
    case 0x3:
      this.setDirection(0x1);
      break;
    case 0x4:
      this.setDirection(0x8);
      break;
    case 0x6:
      this.setDirection(0x2);
      break;
    case 0x7:
      this.setDirection(0x9);
      break;
    case 0x8:
      this.setDirection(0x6);
      break;
    case 0x9:
      this.setDirection(0x3);
      break;
  }
};
Game_Character.prototype.turnLeft90 = function () {
  switch (this.direction()) {
    case 0x1:
      this.setDirection(0x3);
      break;
    case 0x2:
      this.setDirection(0x6);
      break;
    case 0x3:
      this.setDirection(0x9);
      break;
    case 0x4:
      this.setDirection(0x2);
      break;
    case 0x6:
      this.setDirection(0x8);
      break;
    case 0x7:
      this.setDirection(0x1);
      break;
    case 0x8:
      this.setDirection(0x4);
      break;
    case 0x9:
      this.setDirection(0x7);
      break;
  }
};
Game_Character.prototype.getDirectionToPoint = function (_0x4fb493, _0x152f77, _0x1df670) {
  const _0x5551d0 = this.deltaXFrom(_0x4fb493);
  const _0x3fd578 = this.deltaYFrom(_0x152f77);
  if ($gameMap.isSupportDiagonalMovement()) {
    if (_0x1df670 || this.isSpriteVS8dir()) {
      if (_0x5551d0 > 0x0 && _0x3fd578 < 0x0) {
        return 0x1;
      }
      if (_0x5551d0 < 0x0 && _0x3fd578 < 0x0) {
        return 0x3;
      }
      if (_0x5551d0 > 0x0 && _0x3fd578 > 0x0) {
        return 0x7;
      }
      if (_0x5551d0 < 0x0 && _0x3fd578 > 0x0) {
        return 0x9;
      }
    }
  }
  if (Math.abs(_0x5551d0) > Math.abs(_0x3fd578)) {
    return _0x5551d0 > 0x0 ? 0x4 : 0x6;
  } else {
    if (_0x3fd578 !== 0x0) {
      return _0x3fd578 > 0x0 ? 0x8 : 0x2;
    }
  }
  return 0x0;
};
Game_Character.prototype.getDirectionFromPoint = function (_0x4ae0f9, _0x33b31a, _0x3dc662) {
  const _0x474517 = this.deltaXFrom(_0x4ae0f9);
  const _0x5ab421 = this.deltaYFrom(_0x33b31a);
  if ($gameMap.isSupportDiagonalMovement()) {
    if (_0x3dc662 || this.isSpriteVS8dir()) {
      if (_0x474517 > 0x0 && _0x5ab421 < 0x0) {
        return 0x9;
      }
      if (_0x474517 < 0x0 && _0x5ab421 < 0x0) {
        return 0x7;
      }
      if (_0x474517 > 0x0 && _0x5ab421 > 0x0) {
        return 0x3;
      }
      if (_0x474517 < 0x0 && _0x5ab421 > 0x0) {
        return 0x1;
      }
    }
  }
  if (Math.abs(_0x474517) > Math.abs(_0x5ab421)) {
    return _0x474517 > 0x0 ? 0x6 : 0x4;
  } else {
    if (_0x5ab421 !== 0x0) {
      return _0x5ab421 > 0x0 ? 0x2 : 0x8;
    }
  }
  return 0x0;
};
Game_Character.prototype.moveTowardPoint = function (_0x2b9978, _0x12fabc) {
  const _0x44dc29 = this.getDirectionToPoint(_0x2b9978, _0x12fabc, true);
  if (_0x44dc29) {
    this.executeMoveDir8(_0x44dc29);
  }
};
Game_Character.prototype.moveAwayFromPoint = function (_0x4261f2, _0x119f84) {
  const _0xda5f85 = this.getDirectionFromPoint(_0x4261f2, _0x119f84, true);
  if (_0xda5f85) {
    this.executeMoveDir8(_0xda5f85);
  }
};
Game_Character.prototype.turnTowardPoint = function (_0x2980b3, _0x54ac9d) {
  const _0x4e495a = this.getDirectionToPoint(_0x2980b3, _0x54ac9d, false);
  if (_0x4e495a) {
    this.setDirection(_0x4e495a);
  }
};
Game_Character.prototype.turnAwayFromPoint = function (_0x3c2f58, _0x3da250) {
  const _0x1e6810 = this.getDirectionFromPoint(_0x3c2f58, _0x3da250, false);
  if (_0x1e6810) {
    this.setDirection(_0x1e6810);
  }
};
Game_Character.prototype.moveTowardCharacter = function (_0x36c702) {
  if (_0x36c702) {
    this.moveTowardPoint(_0x36c702.x, _0x36c702.y);
  }
};
Game_Character.prototype.moveAwayFromCharacter = function (_0x44de08) {
  if (_0x44de08) {
    this.moveAwayFromPoint(_0x44de08.x, _0x44de08.y);
  }
};
Game_Character.prototype.turnTowardCharacter = function (_0x5950d1) {
  if (_0x5950d1) {
    this.turnTowardPoint(_0x5950d1.x, _0x5950d1.y);
  }
};
Game_Character.prototype.turnAwayFromCharacter = function (_0x3ba361) {
  if (_0x3ba361) {
    this.turnAwayFromPoint(_0x3ba361.x, _0x3ba361.y);
  }
};
VisuMZ.EventsMoveCore.Game_Player_isDashing = Game_Player.prototype.isDashing;
Game_Player.prototype.isDashing = function () {
  if (!Game_CharacterBase.ALLOW_LADDER_DASH && this.isOnLadder()) {
    return false;
  }
  if (this._forceDashing) {
    return true;
  }
  return VisuMZ.EventsMoveCore.Game_Player_isDashing.call(this);
};
VisuMZ.EventsMoveCore.Game_Player_getInputDirection = Game_Player.prototype.getInputDirection;
Game_Player.prototype.getInputDirection = function () {
  return $gameMap.isSupportDiagonalMovement() ? this.getInputDir8() : VisuMZ.EventsMoveCore.Game_Player_getInputDirection.call(this);
};
Game_Player.prototype.getInputDir8 = function () {
  return Input.dir8;
};
Game_Player.prototype.moveByInput = function () {
  if ($gameSystem.isPlayerControlDisabled()) {
    return 0x0;
  }
  if (!this.isMoving() && this.canMove()) {
    let _0x3c6fd2 = this.getInputDirection();
    if (_0x3c6fd2 > 0x0) {
      $gameTemp.clearDestination();
    } else {
      if ($gameTemp.isDestinationValid()) {
        const _0x98bf99 = $gameTemp.destinationX();
        const _0x1088f8 = $gameTemp.destinationY();
        if (this.getDiagonalDestination(_0x98bf99, _0x1088f8)) {
          _0x3c6fd2 = this.findDiagonalDirectionTo(_0x98bf99, _0x1088f8);
        } else {
          _0x3c6fd2 = this.findDirectionTo(_0x98bf99, _0x1088f8);
        }
      }
    }
    if (_0x3c6fd2 > 0x0) {
      this._inputTime = this._inputTime || 0x0;
      if (this.isTurnInPlace()) {
        this.setDirection(_0x3c6fd2);
      } else {
        this.executeMove(_0x3c6fd2);
      }
      this._inputTime++;
    } else {
      this._inputTime = 0x0;
    }
  }
};
Game_Player.prototype.isTurnInPlace = function () {
  const _0x10fe37 = VisuMZ.EventsMoveCore.Settings.Movement;
  if (!_0x10fe37.EnableTurnInPlace) {
    return false;
  }
  if ($gameTemp.isDestinationValid()) {
    return false;
  }
  if (this.isDashing() || this.isMoving() || this.isOnLadder()) {
    return false;
  }
  return this._inputTime < _0x10fe37.TurnInPlaceDelay;
};
VisuMZ.EventsMoveCore.Game_Player_executeMove = Game_Player.prototype.executeMove;
Game_Player.prototype.executeMove = function (_0x47360d) {
  if ($gameMap.isSupportDiagonalMovement()) {
    this.executeMoveDir8(_0x47360d);
  } else {
    VisuMZ.EventsMoveCore.Game_Player_executeMove.call(this, _0x47360d);
  }
};
VisuMZ.EventsMoveCore.Game_Player_isMapPassable = Game_Player.prototype.isMapPassable;
Game_Player.prototype.isMapPassable = function (_0x39f983, _0x5309b3, _0x2bb09e) {
  if ($gameMap.isRegionAllowPass(_0x39f983, _0x5309b3, _0x2bb09e, "player")) {
    return this.isInVehicle() && this.vehicle() ? this.vehicle().isMapPassable(_0x39f983, _0x5309b3, _0x2bb09e) : true;
  }
  if ($gameMap.isRegionForbidPass(_0x39f983, _0x5309b3, _0x2bb09e, "player")) {
    return false;
  }
  return VisuMZ.EventsMoveCore.Game_Player_isMapPassable.call(this, _0x39f983, _0x5309b3, _0x2bb09e);
};
VisuMZ.EventsMoveCore.Game_Player_checkEventTriggerHere = Game_Player.prototype.checkEventTriggerHere;
Game_Player.prototype.checkEventTriggerHere = function (_0x2484f5) {
  VisuMZ.EventsMoveCore.Game_Player_checkEventTriggerHere.call(this, _0x2484f5);
  if (this.canStartLocalEvents()) {
    this.checkEventTriggerEventsMoveCore(_0x2484f5);
    if (_0x2484f5.includes(0x0) && this.startMapCommonEventOnOKTarget() === 'standing') {
      this.startMapCommonEventOnOK(this.x, this.y);
    } else if (_0x2484f5.includes(0x1) || _0x2484f5.includes(0x2)) {
      this.startMapCommonEventOnTouch();
    }
  }
};
VisuMZ.EventsMoveCore.Game_Player_checkEventTriggerThere = Game_Player.prototype.checkEventTriggerThere;
Game_Player.prototype.checkEventTriggerThere = function (_0x4142da) {
  VisuMZ.EventsMoveCore.Game_Player_checkEventTriggerThere.call(this, _0x4142da);
  if (this.canStartLocalEvents() && _0x4142da.includes(0x0) && this.startMapCommonEventOnOKTarget() === "front") {
    const _0x4192fd = this.direction();
    const _0x3bc3fa = $gameMap.roundXWithDirection(this.x, _0x4192fd);
    const _0x50d51b = $gameMap.roundYWithDirection(this.y, _0x4192fd);
    this.startMapCommonEventOnOK(_0x3bc3fa, _0x50d51b);
  }
};
Game_Player.prototype.checkEventTriggerEventsMoveCore = function (_0x18d2b9) {
  if ($gameMap.isEventRunning()) {
    return;
  }
  if ($gameMap.isAnyEventStarting()) {
    return;
  }
  const _0xf120c1 = $gameMap.events();
  for (const _0x1da180 of _0xf120c1) {
    if (!_0x1da180) {
      continue;
    }
    if (!_0x1da180.isTriggerIn(_0x18d2b9)) {
      continue;
    }
    if (this.meetActivationRegionConditions(_0x1da180)) {
      return _0x1da180.start();
    }
    if (this.meetActivationProximityConditions(_0x1da180)) {
      return _0x1da180.start();
    }
  }
};
Game_Player.prototype.meetActivationRegionConditions = function (_0x88998c) {
  if ($gameMap.isEventRunning()) {
    return false;
  }
  if ($gameMap.isAnyEventStarting()) {
    return false;
  }
  return _0x88998c.activationRegionList().includes(this.regionId());
};
Game_Player.prototype.meetActivationProximityConditions = function (_0x1341a2) {
  if ($gameMap.isEventRunning()) {
    return false;
  }
  if ($gameMap.isAnyEventStarting()) {
    return false;
  }
  if (["none", "region"].includes(_0x1341a2.activationProximityType())) {
    return false;
  }
  const _0x4158c6 = _0x1341a2.activationProximityType();
  const _0x42f4c5 = _0x1341a2.activationProximityDistance();
  return this.checkEventProximity(_0x1341a2, _0x4158c6, _0x42f4c5);
};
Game_Map.prototype.checkEventProximity = function (_0x3aea86, _0x2279a9, _0xce07dc, _0x4f8a05, _0x238fe7) {
  switch (_0x4f8a05) {
    case "square":
      return _0x238fe7 >= Math.abs(_0xce07dc.deltaXFrom(_0x3aea86)) && _0x238fe7 >= Math.abs(_0xce07dc.deltaYFrom(_0x2279a9));
      break;
    case "circle":
      const _0x215221 = Math.pow(_0xce07dc.x - _0x3aea86, 0x2);
      const _0x243b81 = Math.pow(_0xce07dc.y - _0x2279a9, 0x2);
      return _0x238fe7 >= Math.round(Math.sqrt(_0x215221 + _0x243b81));
      break;
    case 'radius':
    case "delta":
    case "diamond":
      const _0x4c1934 = $gameMap.distance(_0x3aea86, _0x2279a9, _0xce07dc.x, _0xce07dc.y);
      return _0x238fe7 >= _0x4c1934;
      break;
    case "row":
      return _0x238fe7 >= Math.abs(_0xce07dc.deltaYFrom(_0x2279a9));
      break;
    case 'column':
      return _0x238fe7 >= Math.abs(_0xce07dc.deltaXFrom(_0x3aea86));
      break;
  }
  return false;
};
Game_Player.prototype.checkEventProximity = function (_0x5223d3, _0x3313a6, _0x46368c) {
  const _0x5662e9 = this.x;
  const _0x4f18c5 = this.y;
  return $gameMap.checkEventProximity(_0x5662e9, _0x4f18c5, _0x5223d3, _0x3313a6, _0x46368c);
};
Game_Player.prototype.startMapCommonEventOnOK = function (_0x8346c6, _0x5a6fee) {
  if ($gameMap.isEventRunning()) {
    return;
  }
  if ($gameMap.isAnyEventStarting()) {
    return;
  }
  let _0x5f3699 = VisuMZ.EventsMoveCore.Settings.RegionOk;
  let _0x2f0f5e = $gameMap.regionId(_0x8346c6, _0x5a6fee);
  const _0xcf30dd = "Region%1".format(_0x2f0f5e);
  if (_0x5f3699[_0xcf30dd]) {
    $gameTemp.reserveCommonEvent(_0x5f3699[_0xcf30dd]);
  }
};
Game_Player.prototype.startMapCommonEventOnOKTarget = function () {
  return VisuMZ.EventsMoveCore.Settings.RegionOkTarget;
};
Game_Player.prototype.startMapCommonEventOnTouch = function () {
  if ($gameMap.isEventRunning()) {
    return;
  }
  if ($gameMap.isAnyEventStarting()) {
    return;
  }
  let _0x4c6c6a = VisuMZ.EventsMoveCore.Settings.RegionTouch;
  const _0x29dd4b = "Region%1".format(this.regionId());
  if (_0x4c6c6a[_0x29dd4b]) {
    $gameTemp.reserveCommonEvent(_0x4c6c6a[_0x29dd4b]);
  }
};
VisuMZ.EventsMoveCore.Game_Player_increaseSteps = Game_Player.prototype.increaseSteps;
Game_Player.prototype.increaseSteps = function () {
  VisuMZ.EventsMoveCore.Game_Player_increaseSteps.call(this);
  VisuMZ.MoveAllSynchTargets(0x0);
};
Game_Player.prototype.updateMoveSynchDirection = function () {
  VisuMZ.FaceSynchAllSynchTargets(0x0);
};
VisuMZ.EventsMoveCore.Game_Follower_initialize = Game_Follower.prototype.initialize;
Game_Follower.prototype.initialize = function (_0x4be8a5) {
  VisuMZ.EventsMoveCore.Game_Follower_initialize.call(this, _0x4be8a5);
  this._chaseOff = false;
};
Game_Follower.prototype.isDashing = function () {
  if (this._chaseOff) {
    return Game_Character.prototype.isDashing.call(this);
  }
  return $gamePlayer.isDashing();
};
Game_Follower.prototype.isDashingAndMoving = function () {
  if (this._chaseOff) {
    return Game_Character.prototype.isDashingAndMoving.call(this);
  }
  return $gamePlayer.isDashingAndMoving() && this._actuallyMoving;
};
Game_Follower.prototype.realMoveSpeed = function () {
  return $gamePlayer.realMoveSpeed();
};
Game_Follower.prototype.updateStop = function () {
  Game_Character.prototype.updateStop.call(this);
  if (this._stopCount > 0x0) {
    this._actuallyMoving = false;
  }
};
Game_Follower.prototype.setChaseOff = function (_0x515493) {
  this._chaseOff = _0x515493;
};
VisuMZ.EventsMoveCore.Game_Follower_chaseCharacter = Game_Follower.prototype.chaseCharacter;
Game_Follower.prototype.chaseCharacter = function (_0x56946a) {
  if (this._chaseOff) {
    return;
  }
  if ($gameSystem.isStopFollowerChasing()) {
    return;
  }
  VisuMZ.EventsMoveCore.Game_Follower_chaseCharacter.call(this, _0x56946a);
  this._actuallyMoving = true;
};
VisuMZ.EventsMoveCore.Game_Vehicle_isMapPassable = Game_Vehicle.prototype.isMapPassable;
Game_Vehicle.prototype.isMapPassable = function (_0xd44ba1, _0x64b540, _0x28979a) {
  if ($gameMap.isRegionAllowPass(_0xd44ba1, _0x64b540, _0x28979a, this._type)) {
    return true;
  }
  if ($gameMap.isRegionForbidPass(_0xd44ba1, _0x64b540, _0x28979a, this._type)) {
    return false;
  }
  return VisuMZ.EventsMoveCore.Game_Vehicle_isMapPassable.call(this, _0xd44ba1, _0x64b540, _0x28979a);
};
Game_Vehicle.prototype.isAirshipPassable = function (_0x36f11a, _0x1ee1e9, _0x3b36df) {
  if ($gameMap.isRegionAllowPass(_0x36f11a, _0x1ee1e9, _0x3b36df, this._type)) {
    return true;
  }
  if ($gameMap.isRegionForbidPass(_0x36f11a, _0x1ee1e9, _0x3b36df, this._type)) {
    return false;
  }
  return VisuMZ.EventsMoveCore.Game_CharacterBase_canPass.call($gamePlayer, _0x36f11a, _0x1ee1e9, _0x3b36df);
};
VisuMZ.EventsMoveCore.Game_Vehicle_isLandOk = Game_Vehicle.prototype.isLandOk;
Game_Vehicle.prototype.isLandOk = function (_0x465f3a, _0x45e28d, _0x3cd0fe) {
  if ($gameMap.isRegionDockable(_0x465f3a, _0x45e28d, _0x3cd0fe, this._type)) {
    return true;
  }
  const _0x5735ad = this._type.charAt(0x0).toUpperCase() + this._type.slice(0x1);
  const _0x457ba3 = "%1DockRegionOnly".format(_0x5735ad);
  return VisuMZ.EventsMoveCore.Settings.Region[_0x457ba3] ? false : VisuMZ.EventsMoveCore.Game_Vehicle_isLandOk.call(this, _0x465f3a, _0x45e28d, _0x3cd0fe);
};
VisuMZ.EventsMoveCore.Game_Vehicle_initMoveSpeed = Game_Vehicle.prototype.initMoveSpeed;
Game_Vehicle.prototype.initMoveSpeed = function () {
  VisuMZ.EventsMoveCore.Game_Vehicle_initMoveSpeed.call(this);
  const _0x3d27fa = VisuMZ.EventsMoveCore.Settings.Movement;
  if (this.isBoat()) {
    if (_0x3d27fa.BoatSpeed) {
      this.setMoveSpeed(_0x3d27fa.BoatSpeed);
    }
  } else {
    if (this.isShip()) {
      if (_0x3d27fa.ShipSpeed) {
        this.setMoveSpeed(_0x3d27fa.ShipSpeed);
      }
    } else {
      if (this.isAirship()) {
        if (_0x3d27fa.AirshipSpeed) {
          this.setMoveSpeed(_0x3d27fa.AirshipSpeed);
        }
      }
    }
  }
};
VisuMZ.EventsMoveCore.Game_Event_initialize = Game_Event.prototype.initialize;
Game_Event.prototype.initialize = function (_0x341480, _0x1fa405) {
  this._checkRelocateNotetag = true;
  VisuMZ.EventsMoveCore.Game_Event_initialize.call(this, _0x341480, _0x1fa405);
  this._checkRelocateNotetag = undefined;
  this.setupCopyEvent();
  this.setupMorphEvent();
  this.restoreSavedEventPosition();
};
Game_Map.prototype.referEvent = function (_0xefa039, _0x583c84) {
  return _0xefa039 === $gameMap.mapId() ? $dataMap.events[_0x583c84] : VisuMZ.PreloadedMaps[_0xefa039].events[_0x583c84];
};
VisuMZ.EventsMoveCore.Game_Event_event = Game_Event.prototype.event;
Game_Event.prototype.event = function () {
  if (this._eventMorphData !== undefined) {
    const _0x85a6df = this._eventMorphData.mapId;
    const _0x64f301 = this._eventMorphData.eventId;
    return $gameMap.referEvent(_0x85a6df, _0x64f301);
  }
  if (this._eventCopyData !== undefined) {
    const _0x39447b = this._eventCopyData.mapId;
    const _0x5c491a = this._eventCopyData.eventId;
    return $gameMap.referEvent(_0x39447b, _0x5c491a);
  }
  if (this._eventSpawnData !== undefined) {
    const _0x4fe8d6 = this._eventSpawnData.mapId;
    const _0x1f0f44 = this._eventSpawnData.eventId;
    return $gameMap.referEvent(_0x4fe8d6, _0x1f0f44);
  }
  if ($gameTemp._spawnData !== undefined) {
    const _0x44b57e = $gameTemp._spawnData.mapId;
    const _0x5a5bd5 = $gameTemp._spawnData.eventId;
    return $gameMap.referEvent(_0x44b57e, _0x5a5bd5);
  }
  return VisuMZ.EventsMoveCore.Game_Event_event.call(this);
};
Game_Event.prototype.checkValidEventerMap = function (_0x463cc5, _0x375f3b) {
  if (_0x463cc5 === 0x0 || _0x375f3b === 0x0) {
    return false;
  }
  if (_0x463cc5 === $gameMap.mapId()) {
    return true;
  }
  if (!VisuMZ.PreloadedMaps[_0x463cc5] && _0x463cc5 !== $gameMap.mapId()) {
    if ($gameTemp.isPlaytest()) {
      console.log("ERROR: Map %1 has not been preloaded for remove usage.".format(_0x463cc5));
    }
    return false;
  }
  return true;
};
VisuMZ.EventsMoveCore.Game_Event_start = Game_Event.prototype.start;
Game_Event.prototype.start = function () {
  VisuMZ.EventsMoveCore.Game_Event_start.call(this);
  if (Imported.VisuMZ_1_MessageCore && Input.isPressed(VisuMZ.MessageCore.Settings.General.FastForwardKey)) {
    Input.clear();
  }
};
Game_Event.prototype.setupCopyEvent = function () {
  const _0xf44afd = this.event().note;
  if (_0xf44afd === '') {
    return;
  }
  if (DataManager.isBattleTest() || DataManager.isEventTest()) {
    return;
  }
  const _0x50bf23 = VisuMZ.EventsMoveCore.Settings.Template;
  let _0x5bea99 = null;
  let _0x4d7bf4 = 0x0;
  let _0x9f9c7f = 0x0;
  if (_0xf44afd.match(/<COPY EVENT:[ ]MAP[ ](\d+),[ ]EVENT[ ](\d+)>/i)) {
    _0x4d7bf4 = Number(RegExp.$1);
    _0x9f9c7f = Number(RegExp.$2);
    if (_0x4d7bf4 === 0x0) {
      _0x4d7bf4 = $gameMap.mapId();
    }
  } else {
    if (_0xf44afd.match(/<COPY EVENT:[ ](\d+),[ ](\d+)>/i)) {
      _0x4d7bf4 = Number(RegExp.$1);
      _0x9f9c7f = Number(RegExp.$2);
      if (_0x4d7bf4 === 0x0) {
        _0x4d7bf4 = $gameMap.mapId();
      }
    } else {
      if (_0xf44afd.match(/<COPY EVENT:[ ](.*?)>/i)) {
        const _0x4ac457 = String(RegExp.$1).toUpperCase().trim();
        _0x5bea99 = VisuMZ.EventTemplates[_0x4ac457];
        if (!_0x5bea99) {
          return;
        }
        _0x4d7bf4 = _0x5bea99.MapID;
        _0x9f9c7f = _0x5bea99.EventID;
      }
    }
  }
  if (!this.checkValidEventerMap(_0x4d7bf4, _0x9f9c7f)) {
    return;
  }
  _0x50bf23.PreCopyJS.call(this, _0x4d7bf4, _0x9f9c7f, this);
  if (_0x5bea99) {
    _0x5bea99.PreCopyJS.call(this, _0x4d7bf4, _0x9f9c7f, this);
  }
  this._eventCopyData = {
    'mapId': _0x4d7bf4,
    'eventId': _0x9f9c7f
  };
  this._pageIndex = -0x2;
  this.refresh();
  _0x50bf23.PostCopyJS.call(this, _0x4d7bf4, _0x9f9c7f, this);
  if (_0x5bea99) {
    _0x5bea99.PostCopyJS.call(this, _0x4d7bf4, _0x9f9c7f, this);
  }
  $gameMap.clearEventCache();
};
Game_Event.prototype.setupMorphEvent = function () {
  const _0x334d9c = $gameSystem.getPreservedMorphEventData(this);
  if (!_0x334d9c) {
    return;
  }
  const _0x2dec9c = _0x334d9c.template.toUpperCase().trim();
  if (_0x2dec9c !== "UNTITLED") {
    this.morphIntoTemplate(_0x2dec9c, true);
  } else {
    this.morphInto(_0x334d9c.mapId, _0x334d9c.eventId, true);
  }
};
Game_Event.prototype.morphInto = function (_0x398f04, _0x1d4977, _0x8bc2a5) {
  if (!this.checkValidEventerMap(_0x398f04, _0x1d4977)) {
    return;
  }
  const _0x21231a = VisuMZ.EventsMoveCore.Settings.Template;
  if (!_0x8bc2a5) {
    _0x21231a.PreMorphJS.call(this, _0x398f04, _0x1d4977, this);
  }
  this._eventMorphData = {
    'mapId': _0x398f04,
    'eventId': _0x1d4977
  };
  this._pageIndex = -0x2;
  this.refresh();
  if (!_0x8bc2a5) {
    _0x21231a.PostMorphJS.call(this, _0x398f04, _0x1d4977, this);
  }
  $gameMap.clearEventCache();
};
Game_Event.prototype.morphIntoTemplate = function (_0x1ad201, _0x18d86e) {
  _0x1ad201 = _0x1ad201.toUpperCase().trim();
  const _0x1fe540 = VisuMZ.EventTemplates[_0x1ad201];
  if (!_0x1fe540) {
    return;
  }
  const _0x742959 = _0x1fe540.MapID;
  const _0x139d45 = _0x1fe540.EventID;
  if (!this.checkValidEventerMap(_0x742959, _0x139d45)) {
    return;
  }
  if (!_0x18d86e) {
    _0x1fe540.PreMorphJS.call(this, _0x742959, _0x139d45, this);
  }
  this.morphInto(_0x742959, _0x139d45, _0x18d86e);
  if (!_0x18d86e) {
    _0x1fe540.PostMorphJS.call(this, _0x742959, _0x139d45, this);
  }
  if ($gameMap) {
    $gameMap.clearEventCache();
  }
};
Game_Event.prototype.removeMorph = function () {
  this._eventMorphData = undefined;
  this._pageIndex = -0x2;
  this.refresh();
};
Game_Event.prototype.setupSpawn = function (_0x512627) {
  const _0xfd5717 = VisuMZ.EventsMoveCore.Settings.Template;
  const _0x82afbf = _0x512627.template.toUpperCase().trim();
  const _0x273ddd = !['', "UNTITLED"].includes(_0x82afbf);
  let _0x134657 = 0x0;
  let _0x423127 = 0x0;
  if (_0x273ddd) {
    const _0xef06d3 = VisuMZ.EventTemplates[_0x82afbf];
    if (!_0xef06d3) {
      return;
    }
    _0x134657 = _0xef06d3.MapID;
    _0x423127 = _0xef06d3.EventID;
  } else {
    _0x134657 = _0x512627.mapId;
    _0x423127 = _0x512627.eventId;
  }
  if (!this.checkValidEventerMap(_0x134657, _0x423127)) {
    return;
  }
  if (_0x273ddd) {
    const _0x210277 = VisuMZ.EventTemplates[_0x82afbf];
    _0x210277.PreSpawnJS.call(this, _0x134657, _0x423127, this);
  }
  _0xfd5717.PreSpawnJS.call(this, _0x134657, _0x423127, this);
  this._eventSpawnData = _0x512627;
  this._pageIndex = -0x2;
  this._mapId = $gameMap.mapId();
  this._eventId = _0x512627.spawnEventId;
  this._spawnPreserved = _0x512627.spawnPreserved;
  this.locate(_0x512627.x, _0x512627.y);
  this.setDirection(_0x512627.direction);
  this.refresh();
  if (_0x273ddd) {
    const _0x19a97b = VisuMZ.EventTemplates[_0x82afbf];
    if (!_0x19a97b) {
      return;
    }
    _0x19a97b.PostSpawnJS.call(this, _0x134657, _0x423127, this);
  }
  _0xfd5717.PostSpawnJS.call(this, _0x134657, _0x423127, this);
  const _0x21f31d = SceneManager._scene;
  if (_0x21f31d && _0x21f31d._spriteset) {
    _0x21f31d._spriteset.createSpawnedEvent(this);
  }
};
Game_Event.prototype.isSpawnedEvent = function () {
  return !!this._eventSpawnData;
};
Game_Event.prototype.start = function () {
  if (!this.list()) {
    return;
  }
  const _0x1fb904 = this.list().filter(_0x308830 => _0x308830.code !== 0x6c && _0x308830.code !== 0x198);
  if (_0x1fb904.length > 0x1) {
    this._starting = true;
    if (this.isTriggerIn([0x0, 0x1, 0x2])) {
      this.lock();
    }
  }
};
VisuMZ.EventsMoveCore.Game_Event_clearPageSettings = Game_Event.prototype.clearPageSettings;
Game_Event.prototype.clearPageSettings = function () {
  VisuMZ.EventsMoveCore.Game_Event_clearPageSettings.call(this);
  this.initEventsMoveCoreEffects();
  this.autosaveEventLocation();
};
VisuMZ.EventsMoveCore.Game_Event_setupPageSettings = Game_Event.prototype.setupPageSettings;
Game_Event.prototype.setupPageSettings = function () {
  this._activationProximityAutoTriggerBypass = true;
  VisuMZ.EventsMoveCore.Game_Event_setupPageSettings.call(this);
  this.setupEventsMoveCoreEffects();
  this.autosaveEventLocation();
  this._activationProximityAutoTriggerBypass = false;
};
Game_Event.prototype.setupEventsMoveCoreEffects = function () {
  if (!this.event()) {
    return;
  }
  this.initEventsMoveCoreEffects();
  this.setupEventsMoveCoreNotetags();
  this.setupEventsMoveCoreCommentTags();
  this.updateEventsMoveCoreTagChanges();
};
Game_Event.prototype.setupEventsMoveCoreNotetags = function () {
  const _0xb9820d = this.event().note;
  if (_0xb9820d === '') {
    return;
  }
  this.checkEventsMoveCoreStringTags(_0xb9820d);
};
Game_Event.prototype.setupEventsMoveCoreCommentTags = function () {
  if (!this.page()) {
    return;
  }
  const _0x567d5f = this.list();
  let _0x5b3a58 = '';
  for (const _0x4dcbd9 of _0x567d5f) {
    if ([0x6c, 0x198].includes(_0x4dcbd9.code)) {
      if (_0x5b3a58 !== '') {
        _0x5b3a58 += "\n";
      }
      _0x5b3a58 += _0x4dcbd9.parameters[0x0];
    }
  }
  this.checkEventsMoveCoreStringTags(_0x5b3a58);
};
Game_Event.prototype.initEventsMoveCoreEffects = function () {
  const _0x276761 = VisuMZ.EventsMoveCore.Settings;
  this._activationProximity = {
    'type': 'none',
    'distance': 0x0,
    'regionList': []
  };
  this._alwaysUpdateMove = false;
  this.clearAttachPictureSettings();
  this._clickTrigger = false;
  this._customZ = false;
  this._addedHitbox = {
    'up': 0x0,
    'down': 0x0,
    'left': 0x0,
    'right': 0x0
  };
  this._encounterHalfProximity = {
    'type': "none",
    'distance': 0x0
  };
  this._encounterNoneProximity = {
    'type': "none",
    'distance': 0x0
  };
  $gameSystem.resetIconsOnEventsData(this);
  this._eventIcon = $gameSystem.getEventIconData(this);
  this._labelWindow = {
    'originalText': '',
    'text': '',
    'visibleRange': _0x276761.Label.VisibleRange,
    'rangeType': _0x276761.Label.RangeType,
    'offsetX': _0x276761.Label.OffsetX,
    'offsetY': _0x276761.Label.OffsetY,
    'hueShift': 0x0
  };
  this._mirrorSprite = false;
  this._moveOnlyRegions = [];
  this._moveSynch = {
    'target': -0x1,
    'type': "random",
    'delay': 0x1,
    'opacityDelta': 0x0
  };
  this._randomMoveWeight = _0x276761.Movement.RandomMoveWeight ?? 0x0;
  this._saveEventLocation = false;
  this._scaleBaseX = 0x1;
  this._scaleBaseY = 0x1;
  this._screenActivation = false;
  this._screenParallel = false;
  this._screenParallelOnce = false;
  this._shadowGraphic = {
    'visible': true,
    'filename': _0x276761.Movement.DefaultShadow
  };
  this._tileExpand = {
    'up': 0x0,
    'down': 0x0,
    'left': 0x0,
    'right': 0x0
  };
  this.clearSpriteOffsets();
  this.clearStepPattern();
};
Game_Event.prototype.checkEventsMoveCoreStringTags = function (_0xef9f26) {
  if (_0xef9f26.match(/<ACTIVATION[ ](?:REGION|REGIONS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    this._activationProximity.regionList = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    this._activationProximity.type = "region";
  } else if (_0xef9f26.match(/<ACTIVATION[ ](.*?):[ ](\d+)>/i)) {
    type = String(RegExp.$1).toLowerCase().trim();
    this._activationProximity.type = type;
    this._activationProximity.distance = Number(RegExp.$2);
  }
  if (_0xef9f26.match(/<(?:ATTACH |)PICTURE FILENAME:[ ](.*?)>/i)) {
    this._attachPicture.filename = String(RegExp.$1);
    this._attachPicture.type = 'picture';
  }
  if (_0xef9f26.match(/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) BLEND MODE:[ ](.*?)>/i)) {
    const _0x5a2242 = String(RegExp.$1).toUpperCase().trim();
    const _0x2d27a0 = ["NORMAL", "ADDITIVE", 'MULTIPLY', "SCREEN"];
    this._attachPicture.blendMode = _0x2d27a0.indexOf(_0x5a2242).clamp(0x0, 0x3);
  }
  if (_0xef9f26.match(/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) (?:SIZE|MAX SIZE|MAX):[ ](\d+)>/i)) {
    this._attachPicture.maxSize = Number(RegExp.$1);
  }
  if (_0xef9f26.match(/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) OFFSET X:[ ]([\+\-]\d+)>/i)) {
    this._attachPicture.offsetX = Number(RegExp.$1);
  }
  if (_0xef9f26.match(/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) OFFSET Y:[ ]([\+\-]\d+)>/i)) {
    this._attachPicture.offsetY = Number(RegExp.$1);
  }
  if (_0xef9f26.match(/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)) {
    this._attachPicture.offsetX = Number(RegExp.$1);
    this._attachPicture.offsetY = Number(RegExp.$2);
  }
  if (_0xef9f26.match(/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) SCALE:[ ](\d+)([%％])>/i)) {
    this._attachPicture.scale = Number(RegExp.$1) * 0.01;
  }
  if (_0xef9f26.match(/<(?:ATTACH |)PICTURE TYPE:[ ](.*?)>/i)) {
    this._attachPicture.type = String(RegExp.$1).toLowerCase().trim();
  }
  if (_0xef9f26.match(/<(?:ATTACH |)ENEMY FILENAME:[ ](.*?)>/i)) {
    this._attachPicture.filename = String(RegExp.$1);
    this._attachPicture.type = "enemy";
  }
  if (_0xef9f26.match(/<(?:ATTACH |)SV ENEMY FILENAME:[ ](.*?)>/i)) {
    this._attachPicture.filename = String(RegExp.$1);
    this._attachPicture.type = "sv enemy";
  }
  if (_0xef9f26.match(/<ALWAYS UPDATE MOVEMENT>/i)) {
    this._alwaysUpdateMove = true;
  }
  if (_0xef9f26.match(/<CLICK TRIGGER>/i)) {
    this._clickTrigger = true;
  }
  if (_0xef9f26.match(/<CUSTOM Z:[ ](.*?)>/i)) {
    this._customZ = Number(RegExp.$1) || 0x0;
  }
  if (_0xef9f26.match(/<ENC(?:|OUNTER) HALF[ ](.*?):[ ](\d+)>/i)) {
    type = String(RegExp.$1).toLowerCase().trim();
    this._encounterHalfProximity.type = type;
    this._encounterHalfProximity.distance = Number(RegExp.$2);
  }
  if (_0xef9f26.match(/<ENC(?:|OUNTER) NONE[ ](.*?):[ ](\d+)>/i)) {
    type = String(RegExp.$1).toLowerCase().trim();
    this._encounterNoneProximity.type = type;
    this._encounterNoneProximity.distance = Number(RegExp.$2);
  }
  const _0x26813d = _0xef9f26.match(/<HITBOX[ ](.*?):[ ](\d+)>/gi);
  if (_0x26813d) {
    for (const _0x39f759 of _0x26813d) {
      if (_0x39f759.match(/<HITBOX[ ](.*?):[ ](\d+)>/i)) {
        const _0xb44d2c = String(RegExp.$1).toLowerCase().trim();
        const _0x37332f = Number(RegExp.$2);
        this._addedHitbox[_0xb44d2c] = _0x37332f;
      }
    }
  }
  if (this._eventIcon.iconIndex >= 0x0 && !this._eventIcon.forced) {
    if (_0xef9f26.match(/<ICON:[ ](\d+)>/i)) {
      this._eventIcon.iconIndex = Number(RegExp.$1);
    }
    if (_0xef9f26.match(/<ICON (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)) {
      this._eventIcon.bufferX = Number(RegExp.$1);
    }
    if (_0xef9f26.match(/<ICON (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)) {
      this._eventIcon.bufferY = Number(RegExp.$1);
    }
    if (_0xef9f26.match(/<ICON (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)) {
      this._eventIcon.bufferX = Number(RegExp.$1);
      this._eventIcon.bufferY = Number(RegExp.$2);
    }
    if (_0xef9f26.match(/<ICON BLEND MODE:[ ](.*?)>/i)) {
      const _0x1396d6 = String(RegExp.$1).toUpperCase().trim();
      const _0x4dfcef = ['NORMAL', 'ADDITIVE', "MULTIPLY", 'SCREEN'];
      this._eventIcon.blendMode = _0x4dfcef.indexOf(_0x1396d6).clamp(0x0, 0x3);
    }
    $gameSystem.setEventIconData(this, this._eventIcon.iconIndex, this._eventIcon.bufferX, this._eventIcon.bufferY, this._eventIcon.blendMode);
  }
  if (_0xef9f26.match(/<LABEL:[ ](.*?)>/i)) {
    let _0xde7688 = String(RegExp.$1).trim();
    this._labelWindow.text = _0xde7688;
    this._labelWindow.originalText = _0xde7688;
  }
  if (_0xef9f26.match(/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)) {
    let _0x124eb1 = String(RegExp.$1).trim();
    this._labelWindow.text = _0x124eb1;
    this._labelWindow.originalText = _0x124eb1;
  }
  if (_0xef9f26.match(/<LABEL (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)) {
    this._labelWindow.offsetX = Number(RegExp.$1);
  }
  if (_0xef9f26.match(/<LABEL (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)) {
    this._labelWindow.offsetY = Number(RegExp.$1);
  }
  if (_0xef9f26.match(/<LABEL (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)) {
    this._labelWindow.offsetX = Number(RegExp.$1);
    this._labelWindow.offsetY = Number(RegExp.$2);
  }
  if (_0xef9f26.match(/<LABEL HUE SHIFT:[ ](.*?)>/i)) {
    this._labelWindow.hueShift = Number(RegExp.$1);
  }
  if (_0xef9f26.match(/<LABEL RANGE:[ ](\d+)>/i)) {
    this._labelWindow.visibleRange = Number(RegExp.$1);
  }
  if (_0xef9f26.match(/<LABEL RANGE TYPE: SQUARE>/i)) {
    this._labelWindow.rangeType = 'square';
  }
  if (_0xef9f26.match(/<LABEL RANGE TYPE: (?:RADIUS|DELTA|DIAMOND)>/i)) {
    this._labelWindow.rangeType = "delta";
  }
  if (_0xef9f26.match(/<LABEL RANGE TYPE: CIRCLE>/i)) {
    this._labelWindow.rangeType = "circle";
  }
  this.updateEventLabelText();
  if (_0xef9f26.match(/<MIRROR SPRITE>/i)) {
    this._mirrorSprite = true;
  }
  if (_0xef9f26.match(/<MOVE ONLY (?:REGION|REGIONS):[ ](\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x4208ce = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    this._moveOnlyRegions = this._moveOnlyRegions.concat(_0x4208ce);
    this._moveOnlyRegions.remove(0x0);
  }
  if (_0xef9f26.match(/<MOVE SYNCH TARGET:[ ](.*?)>/i)) {
    const _0x39b658 = String(RegExp.$1);
    if (_0x39b658.match(/PLAYER/i)) {
      this._moveSynch.target = 0x0;
    } else if (_0x39b658.match(/EVENT[ ](\d+)/i)) {
      this._moveSynch.target = Number(RegExp.$1);
    }
  }
  if (_0xef9f26.match(/<MOVE SYNCH TYPE:[ ](.*?)>/i)) {
    this._moveSynch.type = String(RegExp.$1).toLowerCase().trim();
  }
  if (_0xef9f26.match(/<MOVE SYNCH DELAY:[ ](\d+)>/i)) {
    this._moveSynch.delay = Number(RegExp.$1);
  }
  if (_0xef9f26.match(/<MOVE SYNCH DISTANCE OPACITY:[ ](.*?)>/i)) {
    this._moveSynch.opacityDelta = Number(RegExp.$1);
  }
  if (_0xef9f26.match(/<TRUE RANDOM MOVE>/i)) {
    this._randomMoveWeight = 0x0;
  } else if (_0xef9f26.match(/<RANDOM MOVE WEIGHT:[ ](.*?)>/i)) {
    this._randomMoveWeight = Number(RegExp.$1) || 0x0;
  }
  if (_0xef9f26.match(/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)) {
    this._saveEventLocation = true;
  }
  if (_0xef9f26.match(/<SCALE X:[ ](\d+)([%％])>/i)) {
    this._scaleBaseX = Number(RegExp.$1) * 0.01;
  }
  if (_0xef9f26.match(/<SCALE Y:[ ](\d+)([%％])>/i)) {
    this._scaleBaseY = Number(RegExp.$1) * 0.01;
  }
  if (_0xef9f26.match(/<SCALE:[ ](\d+)([%％])>/i)) {
    const _0x283ec3 = Number(RegExp.$1) * 0.01;
    this._scaleBaseX = _0x283ec3;
    this._scaleBaseY = _0x283ec3;
  }
  if (_0xef9f26.match(/<SCREEN ACTIVATION>/i)) {
    this._screenActivation = true;
    this._screenParallel = false;
    this._screenParallelOnce = false;
  }
  if (_0xef9f26.match(/<SCREEN PARALLEL>/i)) {
    this._screenActivation = false;
    this._screenParallel = true;
    this._screenParallelOnce = false;
  } else if (_0xef9f26.match(/<SCREEN PARALLEL ONCE>/i)) {
    this._screenActivation = false;
    this._screenParallel = true;
    this._screenParallelOnce = true;
  }
  if (_0xef9f26.match(/<HIDE SHADOW>/i)) {
    this._shadowGraphic.visible = false;
  }
  if (_0xef9f26.match(/<SHADOW FILENAME:[ ](.*?)>/i)) {
    this._shadowGraphic.filename = String(RegExp.$1);
  }
  if (_0xef9f26.match(/<SPRITE OFFSET X:[ ]([\+\-]\d+)>/i)) {
    this._spriteOffsetX = Number(RegExp.$1);
  }
  if (_0xef9f26.match(/<SPRITE OFFSET Y:[ ]([\+\-]\d+)>/i)) {
    this._spriteOffsetY = Number(RegExp.$1);
  }
  if (_0xef9f26.match(/<SPRITE OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)) {
    this._spriteOffsetX = Number(RegExp.$1);
    this._spriteOffsetY = Number(RegExp.$2);
  }
  if (_0xef9f26.match(/<STEP PATTERN:[ ](.*)>/i)) {
    this._stepPattern = String(RegExp.$1).toUpperCase().trim();
  }
  if (_0xef9f26.match(/<(?:TILE EXPAND|EXPAND TILE) UP:[ ](\d+)>/i)) {
    this._tileExpand = this._tileExpand || {};
    this._tileExpand.up = Number(RegExp.$1);
  }
  if (_0xef9f26.match(/<(?:TILE EXPAND|EXPAND TILE) DOWN:[ ](\d+)>/i)) {
    this._tileExpand = this._tileExpand || {};
    this._tileExpand.down = Number(RegExp.$1);
  }
  if (_0xef9f26.match(/<(?:TILE EXPAND|EXPAND TILE) LEFT:[ ](\d+)>/i)) {
    this._tileExpand = this._tileExpand || {};
    this._tileExpand.left = Number(RegExp.$1);
  }
  if (_0xef9f26.match(/<(?:TILE EXPAND|EXPAND TILE) RIGHT:[ ](\d+)>/i)) {
    this._tileExpand = this._tileExpand || {};
    this._tileExpand.right = Number(RegExp.$1);
  }
};
Game_Event.prototype.updateEventLabelText = function () {
  $gameTemp.registerSelfTarget(this);
  this._labelWindow.text = this._labelWindow.originalText;
  for (;;) {
    if (this._labelWindow.text.match(/\\V\[(\d+)\]/gi)) {
      this._labelWindow.text = this._labelWindow.originalText.replace(/\\V\[(\d+)\]/gi, (_0x521b4d, _0x1672a0) => $gameVariables.value(parseInt(_0x1672a0)));
    } else {
      break;
    }
  }
  $gameTemp.clearSelfTarget();
};
Game_Event.prototype.updateEventsMoveCoreTagChanges = function () {
  this.updateShadowChanges();
};
Game_Event.prototype.isNearTheScreen = function () {
  if (this._alwaysUpdateMove) {
    return true;
  }
  return Game_Character.prototype.isNearTheScreen.call(this);
};
VisuMZ.EventsMoveCore.Game_Event_updateSelfMovement = Game_Event.prototype.updateSelfMovement;
Game_Event.prototype.updateSelfMovement = function () {
  if (this.isPreventSelfMovement()) {
    return;
  }
  VisuMZ.EventsMoveCore.Game_Event_updateSelfMovement.call(this);
  if (this.isMoving()) {
    VisuMZ.MoveAllSynchTargets(this._eventId);
  }
};
Game_Event.prototype.isPreventSelfMovement = function () {
  const _0x2327fd = VisuMZ.EventsMoveCore.Settings.Movement;
  if ($gameMap.isEventRunning() && _0x2327fd.StopAutoMoveEvents) {
    return true;
  }
  if ($gameMessage.isBusy() && _0x2327fd.StopAutoMoveMessages) {
    return true;
  }
  if (!$gameSystem.isAllowEventAutoMovement()) {
    return true;
  }
  if (this.moveSynchTarget() >= 0x0) {
    return true;
  }
  if (!SceneManager._scene._active) {
    return true;
  }
  return false;
};
Game_Event.prototype.updateShadowChanges = function () {
  const _0x56f512 = SceneManager._scene._spriteset;
  if (_0x56f512) {
    const _0x5b6049 = _0x56f512.findTargetSprite(this);
    if (_0x5b6049 && _0x5b6049._shadowSprite && _0x5b6049._shadowSprite._filename !== this.shadowFilename()) {
      _0x5b6049._shadowSprite._filename = this.shadowFilename();
      _0x5b6049._shadowSprite.bitmap = ImageManager.loadSystem(_0x5b6049._shadowSprite._filename);
    }
  }
};
Game_Event.prototype.shadowFilename = function () {
  return this._shadowGraphic.filename;
};
Game_Event.prototype.isShadowVisible = function () {
  if (!this._shadowGraphic.visible) {
    return false;
  }
  return Game_CharacterBase.prototype.isShadowVisible.call(this);
};
Game_Event.prototype.labelWindowText = function () {
  return this._labelWindow.text;
};
Game_Event.prototype.labelWindowRange = function () {
  return this._labelWindow.visibleRange ?? VisuMZ.EventsMoveCore.Settings.Label.VisibleRange;
};
Game_Event.prototype.labelWindowRangeType = function () {
  return this._labelWindow.rangeType ?? VisuMZ.EventsMoveCore.Settings.Label.RangeType ?? "square";
};
VisuMZ.EventsMoveCore.isInsideLabelRange = function (_0x5cb1c1) {
  const _0x4738fe = _0x5cb1c1.labelWindowRangeType();
  const _0x19839c = _0x5cb1c1.labelWindowRange();
  return $gameMap.checkEventProximity($gamePlayer.x, $gamePlayer.y, _0x5cb1c1, _0x4738fe, _0x19839c);
};
Game_Event.prototype.isMapPassable = function (_0x245a66, _0x25a1b6, _0x4114c1) {
  if (this.hasMoveOnlyRegions()) {
    return this.isMoveOnlyRegionPassable(_0x245a66, _0x25a1b6, _0x4114c1);
  }
  if ($gameMap.isRegionAllowPass(_0x245a66, _0x25a1b6, _0x4114c1, "event")) {
    return true;
  }
  if ($gameMap.isRegionForbidPass(_0x245a66, _0x25a1b6, _0x4114c1, "event")) {
    return false;
  }
  return Game_Character.prototype.isMapPassable.call(this, _0x245a66, _0x25a1b6, _0x4114c1);
};
Game_Event.prototype.hasMoveOnlyRegions = function () {
  if (this._moveOnlyRegions === undefined) {
    this.initEventsMoveCoreEffects();
  }
  return this._moveOnlyRegions.length > 0x0;
};
Game_Event.prototype.isMoveOnlyRegionPassable = function (_0x5de800, _0x4f1432, _0x194bcc) {
  const _0x4784db = $gameMap.roundXWithDirection(_0x5de800, _0x194bcc);
  const _0x35e049 = $gameMap.roundYWithDirection(_0x4f1432, _0x194bcc);
  const _0xcd62c5 = $gameMap.regionId(_0x4784db, _0x35e049);
  return this._moveOnlyRegions.includes(_0xcd62c5);
};
VisuMZ.EventsMoveCore.Game_Event_findProperPageIndex = Game_Event.prototype.findProperPageIndex;
Game_Event.prototype.findProperPageIndex = function () {
  if (this.event() && !$gameTemp.isPlaytest()) {
    if (this.event().note.match(/<(?:PLAYTEST|PLAY TEST)>/i)) {
      return -0x1;
    }
  }
  this._advancedSwitchVariable = false;
  this._CPCs = false;
  return this.event() ? VisuMZ.EventsMoveCore.Game_Event_findProperPageIndex.call(this) : -0x1;
};
VisuMZ.EventsMoveCore.Game_Event_meetsConditions = Game_Event.prototype.meetsConditions;
Game_Event.prototype.meetsConditions = function (_0xab359c) {
  this.checkAdvancedSwitchVariablePresent(_0xab359c);
  $gameTemp.registerSelfTarget(this);
  const _0x261b70 = VisuMZ.EventsMoveCore.Game_Event_meetsConditions.call(this, _0xab359c);
  $gameTemp.clearSelfTarget();
  return _0x261b70;
};
Game_Event.prototype.hasAdvancedSwitchVariable = function () {
  return this._advancedSwitchVariable;
};
Game_Event.prototype.checkAdvancedSwitchVariablePresent = function (_0x4e8e84) {
  const _0x5185f3 = _0x4e8e84.conditions;
  if (_0x5185f3.switch1Valid && DataManager.isAdvancedSwitch(_0x5185f3.switch1Id)) {
    this._advancedSwitchVariable = true;
  } else {
    if (_0x5185f3.switch2Valid && DataManager.isAdvancedSwitch(_0x5185f3.switch2Id)) {
      this._advancedSwitchVariable = true;
    } else if (_0x5185f3.variableValid && DataManager.isAdvancedVariable(_0x5185f3.variableId)) {
      this._advancedSwitchVariable = true;
    }
  }
};
Game_Event.prototype.hasClickTrigger = function () {
  if (this._erased) {
    return false;
  }
  return this._clickTrigger;
};
Game_Event.prototype.onClickTrigger = function () {
  $gameTemp.clearDestination();
  this.start();
};
Game_Event.prototype.pos = function (_0x4154fc, _0x2a177c) {
  return this._addedHitbox ? this.posEventsMoveCore(_0x4154fc, _0x2a177c) : Game_Character.prototype.pos.call(this, _0x4154fc, _0x2a177c);
};
Game_Event.prototype.posEventsMoveCore = function (_0xdcafff, _0xb5fed8) {
  var _0x24b0c2 = this.x - this._addedHitbox.left;
  var _0x1b9251 = this.x + this._addedHitbox.right;
  var _0x369ae3 = this.y - this._addedHitbox.up;
  var _0x367cc1 = this.y + this._addedHitbox.down;
  return _0x24b0c2 <= _0xdcafff && _0xdcafff <= _0x1b9251 && _0x369ae3 <= _0xb5fed8 && _0xb5fed8 <= _0x367cc1;
};
VisuMZ.EventsMoveCore.Game_Event_canPass = Game_Event.prototype.canPass;
Game_Event.prototype.canPass = function (_0x298ac3, _0x313244, _0x24feff) {
  for (let _0x371d8c = -this._addedHitbox.left; _0x371d8c <= this._addedHitbox.right; _0x371d8c++) {
    for (let _0x36f432 = -this._addedHitbox.up; _0x36f432 <= this._addedHitbox.down; _0x36f432++) {
      if (!Game_Character.prototype.canPass.call(this, _0x298ac3 + _0x371d8c, _0x313244 + _0x36f432, _0x24feff)) {
        return false;
      }
    }
  }
  return true;
};
Game_Event.prototype.isCollidedWithEvents = function (_0x3451ed, _0x1e6361) {
  if (Imported.VisuMZ_0_CoreEngine && this.isSmartEventCollisionOn()) {
    return this.checkSmartEventCollision(_0x3451ed, _0x1e6361);
  } else {
    const _0x421f20 = $gameMap.eventsXyNt(_0x3451ed, _0x1e6361).filter(_0x13f5d6 => _0x13f5d6 !== this);
    return _0x421f20.length > 0x0;
  }
};
Game_Event.prototype.checkSmartEventCollision = function (_0x4e04d6, _0x19725b) {
  if (!this.isNormalPriority()) {
    return false;
  } else {
    const _0x3716e2 = $gameMap.eventsXyNt(_0x4e04d6, _0x19725b).filter(_0x3c614c => _0x3c614c !== this && _0x3c614c.isNormalPriority());
    return _0x3716e2.length > 0x0;
  }
};
Game_Event.prototype.activationProximityType = function () {
  if (!this._activationProximity) {
    return "none";
  }
  return this._activationProximity.type || "none";
};
Game_Event.prototype.activationProximityDistance = function () {
  if (!this._activationProximity) {
    return 0x0;
  }
  return this._activationProximity.distance || 0x0;
};
Game_Event.prototype.activationRegionList = function () {
  if (!this._activationProximity) {
    return [];
  }
  return this._activationProximity.regionList || [];
};
Game_Event.prototype.increaseSteps = function () {
  Game_Character.prototype.increaseSteps.call(this);
  if (['none', "region"].includes(this.activationProximityType())) {
    return;
  }
  $gamePlayer.checkEventTriggerEventsMoveCore([0x2]);
};
Game_Event.prototype.isOnScreen = function () {
  const _0x4888c0 = Math.round($gameMap._displayX);
  const _0x52091a = _0x4888c0 + Math.ceil($gameMap.screenTileX()) - 0x1;
  const _0x26d89e = Math.round($gameMap._displayY);
  const _0x32b901 = _0x26d89e + Math.ceil($gameMap.screenTileY()) - 0x1;
  return this.x >= _0x4888c0 && this.x <= _0x52091a && this.y >= _0x26d89e && this.y <= _0x32b901;
};
VisuMZ.EventsMoveCore.Game_Event_checkEventTriggerAuto = Game_Event.prototype.checkEventTriggerAuto;
Game_Event.prototype.checkEventTriggerAuto = function () {
  if (this._screenActivation || this._screenParallel) {
    if (this.isOnScreen()) {
      if (!this._screenActivated) {
        this._screenActivated = true;
        if (this._screenActivation) {
          this.start();
        } else if (this._screenParallel) {
          if (!this._interpreter) {
            this._interpreter = new Game_Interpreter();
          }
          this._interpreter.setup(this.list(), this._eventId);
        }
      }
      return;
    } else {
      this._screenActivated = false;
      return;
    }
  }
  if (this._trigger !== 0x3) {
    return;
  }
  if (this._activationProximityAutoTriggerBypass) {
    return;
  }
  if (!this.checkRegionEventTrigger(false)) {
    return;
  }
  if (!this.checkActivationProximity(false)) {
    return;
  }
  VisuMZ.EventsMoveCore.Game_Event_checkEventTriggerAuto.call(this);
};
VisuMZ.EventsMoveCore.Game_Event_updateParallel = Game_Event.prototype.updateParallel;
Game_Event.prototype.updateParallel = function () {
  if (!this._interpreter) {
    return;
  }
  if (!this.checkRegionEventTrigger(true)) {
    return;
  }
  if (!this.checkActivationProximity(true)) {
    return;
  }
  if (this._interpreter && !this._interpreter.isRunning() && this._screenParallel) {
    if (!this._screenParallelOnce) {
      this._screenActivated = false;
    }
    return;
  }
  VisuMZ.EventsMoveCore.Game_Event_updateParallel.call(this);
};
Game_Event.prototype.checkRegionEventTrigger = function (_0x5b304a) {
  if (!_0x5b304a && $gameMap.isEventRunning()) {
    return false;
  }
  if (!_0x5b304a && $gameMap.isAnyEventStarting()) {
    return false;
  }
  if (this.activationRegionList() <= 0x0) {
    return true;
  }
  return $gamePlayer.meetActivationRegionConditions(this);
};
Game_Event.prototype.checkActivationProximity = function (_0x550df7) {
  if (!_0x550df7 && $gameMap.isEventRunning()) {
    return false;
  }
  if (!_0x550df7 && $gameMap.isAnyEventStarting()) {
    return false;
  }
  if (['none', 'region'].includes(this.activationProximityType())) {
    return true;
  }
  return $gamePlayer.meetActivationProximityConditions(this);
};
Game_Event.prototype.encounterProximityType = function (_0x1f1b4e) {
  const _0x5795c0 = _0x1f1b4e ? this._encounterHalfProximity : this._encounterNoneProximity;
  return _0x5795c0 ? _0x5795c0.type : "none";
};
Game_Event.prototype.encounterProximityDistance = function (_0x43938b) {
  const _0x3d6656 = _0x43938b ? this._encounterHalfProximity : this._encounterNoneProximity;
  return _0x3d6656 ? _0x3d6656.distance : 0x0;
};
VisuMZ.MoveAllSynchTargets = function (_0xf3055b) {
  for (const _0x157d18 of $gameMap.events()) {
    if (!_0x157d18) {
      continue;
    }
    if (_0x157d18.moveSynchTarget() === _0xf3055b) {
      _0x157d18.updateMoveSynch();
    }
  }
};
VisuMZ.GetMoveSynchTarget = function (_0x5abf5a) {
  if (_0x5abf5a === 0x0) {
    return $gamePlayer;
  }
  return $gameMap.event(_0x5abf5a);
};
Game_CharacterBase.prototype.updateMoveSynchDirection = function () {};
Game_Event.prototype.updateMoveSynchDirection = function () {
  VisuMZ.FaceSynchAllSynchTargets(this._eventId);
};
VisuMZ.FaceSynchAllSynchTargets = function (_0x36c1b3) {
  for (const _0x484858 of $gameMap.events()) {
    if (!_0x484858) {
      continue;
    }
    if (_0x484858.moveSynchTarget() === _0x36c1b3) {
      _0x484858.processMoveSynchDirection();
    }
  }
};
Game_Event.prototype.moveSynchTarget = function () {
  return this._moveSynch.target;
};
Game_Event.prototype.moveSynchType = function () {
  return this._moveSynch.type;
};
Game_Event.prototype.realMoveSpeed = function () {
  if (this.moveSynchTarget() >= 0x0) {
    const _0x134ef0 = VisuMZ.GetMoveSynchTarget(this.moveSynchTarget());
    if (_0x134ef0) {
      return _0x134ef0.realMoveSpeed();
    }
  }
  return Game_Character.prototype.realMoveSpeed.call(this);
};
Game_Event.prototype.updateMoveSynch = function () {
  this._moveSynch.timer = this._moveSynch.timer || 0x0;
  this._moveSynch.timer--;
  if (this._moveSynch.timer > 0x0) {
    return;
  }
  this._moveSynch.timer = this._moveSynch.delay;
  this.processMoveSynch();
};
Game_Event.prototype.adjustMoveSynchOpacityDelta = function (_0x422b45) {
  if (this.moveSynchTarget() >= 0x0) {
    const _0x162004 = VisuMZ.GetMoveSynchTarget(this.moveSynchTarget());
    if (_0x162004) {
      const _0x2285ab = $gameMap.distance(this._realX, this._realY, _0x162004._realX, _0x162004._realY) - 0x1;
      const _0x414cc9 = Math.min($gameMap.tileWidth(), $gameMap.tileHeight());
      const _0x7370ac = this._moveSynch.opacityDelta || 0x0;
      _0x422b45 -= Math.max(0x0, _0x2285ab) * _0x414cc9 * _0x7370ac;
    }
  }
  return _0x422b45;
};
Game_Event.prototype.processMoveSynch = function () {
  switch (this.moveSynchType()) {
    case "random":
      this.processMoveSynchRandom();
      break;
    case "approach":
      this.processMoveSynchApproach();
      break;
    case "away":
      this.processMoveSynchAway();
      break;
    case 'custom':
      this.processMoveSynchCustom();
      break;
    case "mimic":
    case "copy":
      this.processMoveSynchMimic();
      break;
    case "reverse mimic":
    case "reverse copy":
      this.processMoveSynchReverseMimic();
      break;
    case "mirror horizontal":
    case "horizontal mirror":
    case "mirror horz":
    case "horz mirror":
      this.processMoveSynchMirrorHorz();
      break;
    case "mirror vertical":
    case "vertical mirror":
    case "mirror vert":
    case "vert mirror":
      this.processMoveSynchMirrorVert();
      break;
    default:
      this.processMoveSynchRandom();
      break;
  }
  this.update();
};
Game_Event.prototype.processMoveSynchRandom = function () {
  const _0x59145d = [0x2, 0x4, 0x6, 0x8];
  if ($gameMap.isSupportDiagonalMovement()) {
    _0x59145d.push(0x1, 0x3, 0x7, 0x9);
  }
  const _0x499ac9 = [];
  for (const _0x2c2cdb of _0x59145d) {
    if (this.canPass(this.x, this.y, _0x2c2cdb)) {
      _0x499ac9.push(_0x2c2cdb);
    }
  }
  if (_0x499ac9.length > 0x0) {
    const _0x1dcdcc = _0x499ac9[Math.randomInt(_0x499ac9.length)];
    this.executeMoveDir8(_0x1dcdcc);
  }
};
Game_Event.prototype.processMoveSynchApproach = function () {
  const _0x3a3211 = VisuMZ.GetMoveSynchTarget(this.moveSynchTarget());
  this.moveTowardCharacter(_0x3a3211);
};
Game_Event.prototype.processMoveSynchAway = function () {
  const _0x27248d = VisuMZ.GetMoveSynchTarget(this.moveSynchTarget());
  this.moveAwayFromCharacter(_0x27248d);
};
Game_Event.prototype.processMoveSynchCustom = function () {
  this.updateRoutineMove();
};
Game_Event.prototype.processMoveSynchMimic = function () {
  const _0x1e5169 = VisuMZ.GetMoveSynchTarget(this.moveSynchTarget());
  this.executeMoveDir8(_0x1e5169.lastMovedDirection());
};
Game_Event.prototype.processMoveSynchReverseMimic = function () {
  const _0x3baa3a = VisuMZ.GetMoveSynchTarget(this.moveSynchTarget());
  this.executeMoveDir8(this.reverseDir(_0x3baa3a.lastMovedDirection()));
};
Game_Event.prototype.processMoveSynchMirrorHorz = function () {
  const _0x1e3865 = VisuMZ.GetMoveSynchTarget(this.moveSynchTarget());
  const _0x4e6675 = [0x0, 0x7, 0x8, 0x9, 0x4, 0x0, 0x6, 0x1, 0x2, 0x3][_0x1e3865.lastMovedDirection()];
  this.executeMoveDir8(_0x4e6675);
};
Game_Event.prototype.processMoveSynchMirrorVert = function () {
  const _0x75a98f = VisuMZ.GetMoveSynchTarget(this.moveSynchTarget());
  const _0x3dbb9c = [0x0, 0x3, 0x2, 0x1, 0x6, 0x0, 0x4, 0x9, 0x8, 0x7][_0x75a98f.lastMovedDirection()];
  this.executeMoveDir8(_0x3dbb9c);
};
Game_Event.prototype.processMoveSynchDirection = function () {
  const _0x378be6 = VisuMZ.GetMoveSynchTarget(this.moveSynchTarget());
  const _0x2c606e = _0x378be6.direction();
  switch (this.moveSynchType()) {
    case "mimic":
    case "copy":
      this.setDirection(_0x2c606e);
      break;
    case "reverse mimic":
    case "reverse copy":
      this.setDirection(this.reverseDir(_0x2c606e));
      break;
    case "mirror horizontal":
    case "horizontal mirror":
    case "mirror horz":
    case "horz mirror":
      this.setDirection([0x0, 0x7, 0x8, 0x9, 0x4, 0x0, 0x6, 0x1, 0x2, 0x3][_0x2c606e]);
      break;
    case "mirror vertical":
    case "vertical mirror":
    case "mirror vert":
    case "vert mirror":
      this.setDirection([0x0, 0x3, 0x2, 0x1, 0x6, 0x0, 0x4, 0x9, 0x8, 0x7][_0x2c606e]);
      break;
    default:
      return;
  }
  this.update();
};
Game_Event.prototype.restoreSavedEventPosition = function () {
  const _0x34578f = $gameSystem.getSavedEventLocation(this);
  if (!_0x34578f) {
    return;
  }
  this.setPosition(_0x34578f.x, _0x34578f.y);
  this.refreshBushDepth();
  this.setDirection(_0x34578f.direction);
  if (this._pageIndex === _0x34578f.pageIndex) {
    this._moveRouteIndex = _0x34578f.moveRouteIndex;
  }
};
VisuMZ.EventsMoveCore.Game_Event_update = Game_Event.prototype.update;
Game_Event.prototype.update = function () {
  VisuMZ.EventsMoveCore.Game_Event_update.call(this);
  if (!Utils.isMobileDevice()) {
    this.updateSaveEventLocation();
  }
};
Game_Event.prototype.updateMove = function () {
  Game_Character.prototype.updateMove.call(this);
  this.autosaveEventLocation();
};
Game_Event.prototype.isSaveEventLocation = function () {
  if ($gameMap.isSaveEventLocations()) {
    return true;
  }
  return this._saveEventLocation;
};
Game_Event.prototype.autosaveEventLocation = function () {
  if (!this.isSaveEventLocation()) {
    return;
  }
  this.saveEventLocation();
};
Game_Event.prototype.saveEventLocation = function () {
  this._requestSaveEventLocation = true;
};
Game_Event.prototype.updateSaveEventLocation = function () {
  if (this._requestSaveEventLocation) {
    this.processSaveEventLocation();
  }
};
Game_Event.prototype.processSaveEventLocation = function () {
  this._requestSaveEventLocation = false;
  $gameSystem.saveEventLocation(this);
};
Game_Event.prototype.deleteEventLocation = function () {
  $gameSystem.deleteSavedEventLocation(this);
};
Game_Event.prototype.getEventIconData = function () {
  return $gameSystem.getEventIconData(this) ? Game_Character.prototype.getEventIconData.call(this) : {
    'iconIndex': 0x0,
    'bufferX': settings.Icon.BufferX,
    'bufferY': settings.Icon.BufferY,
    'blendMode': settings.Icon.BlendMode
  };
};
Game_Event.prototype.hasCPCs = function () {
  return this._CPCs;
};
VisuMZ.EventsMoveCore.Game_Event_meetsConditionsCPC = Game_Event.prototype.meetsConditions;
Game_Event.prototype.meetsConditions = function (_0x1f1966) {
  const _0x530a04 = VisuMZ.EventsMoveCore.Game_Event_meetsConditionsCPC.call(this, _0x1f1966);
  if (!_0x530a04) {
    return false;
  }
  return this.meetsCPC(_0x1f1966);
};
Game_Event.prototype.meetsCPC = function (_0xae1bc1) {
  VisuMZ.EventsMoveCore.CustomPageConditions.loadCPC(_0xae1bc1);
  this._CPCs = _0xae1bc1.CPC.length > 0x0;
  if (_0xae1bc1.CPC === undefined) {
    VisuMZ.EventsMoveCore.CustomPageConditions.loadCPC(_0xae1bc1);
  }
  if (_0xae1bc1.CPC.length > 0x0) {
    return $gameMap.event(this._eventId) && VisuMZ.EventsMoveCore.CustomPageConditions.metCPC(_0xae1bc1.CPC, this._eventId);
  }
  return true;
};
VisuMZ.EventsMoveCore.Game_Troop_meetsConditionsCPC = Game_Troop.prototype.meetsConditions;
Game_Troop.prototype.meetsConditions = function (_0x16985b) {
  var _0x56dede = VisuMZ.EventsMoveCore.Game_Troop_meetsConditionsCPC.call(this, _0x16985b);
  return _0x56dede && this.CPCsMet(_0x16985b);
};
Game_Troop.prototype.CPCsMet = function (_0x36fbeb) {
  if (_0x36fbeb.CPC === undefined) {
    VisuMZ.EventsMoveCore.CustomPageConditions.loadCPC(_0x36fbeb);
  }
  if (_0x36fbeb.CPC.length > 0x0) {
    return VisuMZ.EventsMoveCore.CustomPageConditions.metCPC(_0x36fbeb.CPC, 0x0);
  }
  return true;
};
VisuMZ.EventsMoveCore.Game_Event_locate = Game_Event.prototype.locate;
Game_Event.prototype.locate = function (_0x22df53, _0x5ea06b) {
  if (this._checkRelocateNotetag) {
    const _0x533304 = this.event().note || '';
    if (_0x533304.match(/<(?:LOCATION|START|START LOCATION):[ ](.*?)>/i)) {
      const _0xd36878 = String(RegExp.$1).split(',').map(_0x59dc5d => Number(_0x59dc5d));
      _0x22df53 += Number(_0xd36878[0x0] || 0x0) || 0x0;
      _0x5ea06b += Number(_0xd36878[0x1] || 0x0) || 0x0;
    }
    if (_0x533304.match(/<(?:LOCATION|START|START LOCATION) X:[ ](.*?)>/i)) {
      _0x22df53 += Number(RegExp.$1);
    }
    if (_0x533304.match(/<(?:LOCATION|START|START LOCATION) Y:[ ](.*?)>/i)) {
      _0x5ea06b += Number(RegExp.$1);
    }
  }
  VisuMZ.EventsMoveCore.Game_Event_locate.call(this, _0x22df53, _0x5ea06b);
  this._randomHomeX = _0x22df53;
  this._randomHomeY = _0x5ea06b;
  this.autosaveEventLocation();
};
VisuMZ.EventsMoveCore.Game_Event_moveTypeRandom = Game_Event.prototype.moveTypeRandom;
Game_Event.prototype.moveTypeRandom = function () {
  const _0x536b79 = $gameMap.distance(this.x, this.y, this._randomHomeX, this._randomHomeY);
  const _0x20fc3f = _0x536b79 * (this._randomMoveWeight || 0x0);
  if (Math.random() >= _0x20fc3f) {
    VisuMZ.EventsMoveCore.Game_Event_moveTypeRandom.call(this);
  } else {
    this.moveBackToRandomHome();
  }
};
Game_Event.prototype.moveBackToRandomHome = function () {
  const _0x16abfc = this.deltaXFrom(this._randomHomeX);
  const _0x1bdd0f = this.deltaYFrom(this._randomHomeY);
  if (Math.abs(_0x16abfc) > Math.abs(_0x1bdd0f)) {
    this.moveStraight(_0x16abfc > 0x0 ? 0x4 : 0x6);
    if (!this.isMovementSucceeded() && _0x1bdd0f !== 0x0) {
      this.moveStraight(_0x1bdd0f > 0x0 ? 0x8 : 0x2);
    }
  } else if (_0x1bdd0f !== 0x0) {
    this.moveStraight(_0x1bdd0f > 0x0 ? 0x8 : 0x2);
    if (!this.isMovementSucceeded() && _0x16abfc !== 0x0) {
      this.moveStraight(_0x16abfc > 0x0 ? 0x4 : 0x6);
    }
  }
};
Game_CharacterBase.prototype.clearAttachPictureSettings = function () {
  this._attachPicture = {
    'filename': '',
    'type': "picture",
    'blendMode': 0x0,
    'maxSize': 0x0,
    'offsetX': 0x0,
    'offsetY': 0x0,
    'scale': 0x1
  };
};
Game_CharacterBase.prototype.attachPictureSettings = function () {
  if (this._attachPicture === undefined) {
    this.clearAttachPictureSettings();
  }
  return this._attachPicture;
};
Game_CharacterBase.prototype.attachPictureFilename = function () {
  return this.attachPictureSettings().filename ?? '';
};
Game_CharacterBase.prototype.attachPictureType = function () {
  return this.attachPictureSettings().picture ?? "picture";
};
Game_CharacterBase.prototype.attachPictureBlendMode = function () {
  return this.attachPictureSettings().blendMode ?? 0x0;
};
Game_CharacterBase.prototype.attachPictureMaxSize = function () {
  return this.attachPictureSettings().maxSize ?? 0x0;
};
Game_CharacterBase.prototype.attachPictureOffsetX = function () {
  return this.attachPictureSettings().offsetX ?? 0x0;
};
Game_CharacterBase.prototype.attachPictureOffsetY = function () {
  return this.attachPictureSettings().offsetY ?? 0x0;
};
Game_CharacterBase.prototype.attachPictureScale = function () {
  return this.attachPictureSettings().scale ?? 0x1;
};
VisuMZ.EventsMoveCore.Game_Interpreter_updateWaitMode = Game_Interpreter.prototype.updateWaitMode;
Game_Interpreter.prototype.updateWaitMode = function () {
  if (this._waitMode === 'CallEvent') {
    if (window[this._callEventMap]) {
      this._waitMode = '';
      this.startCallEvent();
    } else {
      return true;
    }
  } else {
    return VisuMZ.EventsMoveCore.Game_Interpreter_updateWaitMode.call(this);
  }
};
VisuMZ.EventsMoveCore.Game_Interpreter_executeCommand = Game_Interpreter.prototype.executeCommand;
Game_Interpreter.prototype.executeCommand = function () {
  const _0x2346d3 = $gameMap && this._eventId ? $gameMap.event(this._eventId) : null;
  $gameTemp.registerSelfTarget(_0x2346d3);
  const _0x651c14 = VisuMZ.EventsMoveCore.Game_Interpreter_executeCommand.call(this);
  $gameTemp.clearSelfTarget();
  return _0x651c14;
};
VisuMZ.EventsMoveCore.Game_Interpreter_PluginCommand = Game_Interpreter.prototype.command357;
Game_Interpreter.prototype.command357 = function (_0x1fde70) {
  $gameTemp.setLastPluginCommandInterpreter(this);
  return VisuMZ.EventsMoveCore.Game_Interpreter_PluginCommand.call(this, _0x1fde70);
};
Game_Interpreter.prototype.pluginCommandCallEvent = function (_0x479ca3) {
  this._callEventData = _0x479ca3;
  const _0x30f044 = "Map%1.json".format(_0x479ca3.mapId.padZero(0x3));
  this._callEventMap = "$callEventMap" + Graphics.frameCount + '_' + this.eventId();
  DataManager.loadDataFile(this._callEventMap, _0x30f044);
  if (window[this._callEventMap]) {
    this.startCallEvent();
  } else {
    this.setWaitMode("CallEvent");
  }
};
Game_Interpreter.prototype.startCallEvent = function () {
  const _0x5047af = this._callEventData;
  const _0x3666e2 = window[this._callEventMap];
  const _0x2fccbb = _0x3666e2.events[_0x5047af.eventId];
  if (_0x2fccbb && _0x2fccbb.pages[_0x5047af.pageId - 0x1]) {
    const _0x15ced6 = _0x2fccbb.pages[_0x5047af.pageId - 0x1].list;
    this.setupChild(_0x15ced6, this.eventId());
  }
  window[this._callEventMap] = undefined;
  this._callEventMap = undefined;
  this._callEventData = undefined;
};
function Game_CPCInterpreter() {
  this.initialize.apply(this, arguments);
}
;
Game_CPCInterpreter.prototype = Object.create(Game_Interpreter.prototype);
Game_CPCInterpreter.prototype.constructor = Game_CPCInterpreter;
Game_CPCInterpreter.prototype.clear = function () {
  Game_Interpreter.prototype.clear.call(this);
  this._cpc = false;
};
Game_CPCInterpreter.prototype.execute = function () {
  while (this.isRunning()) {
    this.executeCommand();
  }
};
Game_CPCInterpreter.prototype.executeCommonEvent = function (_0x48f40d) {
  while (this.isRunning()) {
    this.executeCommandCommonEvent(_0x48f40d);
  }
};
Game_CPCInterpreter.prototype.executeCommandCommonEvent = function (_0xddaa4f) {
  $gameTemp.registerSelfTarget(_0xddaa4f);
  const _0x380fd8 = VisuMZ.EventsMoveCore.Game_Interpreter_executeCommand.call(this);
  $gameTemp.clearSelfTarget();
  return _0x380fd8;
};
Game_CPCInterpreter.prototype.command108 = function (_0x59cb21) {
  Game_Interpreter.prototype.command108.call(this, _0x59cb21);
  if (this._comments.some(_0x2886ae => _0x2886ae.match(/<(?:CONDITION|CONDITIONS) MET>/i))) {
    this._cpc = true;
  }
  return true;
};
VisuMZ.EventsMoveCore.Scene_Map_startEncounterEffect = Scene_Map.prototype.startEncounterEffect;
Scene_Map.prototype.startEncounterEffect = function () {
  VisuMZ.EventsMoveCore.Scene_Map_startEncounterEffect.call(this);
  this._spriteset.hideShadows();
};
VisuMZ.EventsMoveCore.Scene_Load_onLoadSuccess = Scene_Load.prototype.onLoadSuccess;
Scene_Load.prototype.onLoadSuccess = function () {
  if ($gameMap) {
    $gameMap.clearEventCache();
  }
  VisuMZ.EventsMoveCore.Scene_Load_onLoadSuccess.call(this);
};
VisuMZ.EventsMoveCore.Game_System_onAfterLoad = Game_System.prototype.onAfterLoad;
Game_System.prototype.onAfterLoad = function () {
  VisuMZ.EventsMoveCore.Game_System_onAfterLoad.call(this);
  if ($gameMap) {
    $gameMap.clearEventCache();
  }
};
VisuMZ.EventsMoveCore.Sprite_Character_initMembers = Sprite_Character.prototype.initMembers;
Sprite_Character.prototype.initMembers = function () {
  VisuMZ.EventsMoveCore.Sprite_Character_initMembers.call(this);
  this.initMembersEventsMoveCore();
  this.createAttachPictureSprite();
  this.createIconSprite();
};
Sprite_Character.prototype.initMembersEventsMoveCore = function () {
  this._shadowOpacity = 0xff;
  this._isCharacterSpriteSheetInvisible = false;
};
Sprite_Character.prototype.isSpriteVS8dir = function () {
  return this._characterName && this._characterName.match(/\[VS8\]/i);
};
Sprite_Character.prototype.isAutoBufferIcon = function () {
  return this.isSpriteVS8dir() && VisuMZ.EventsMoveCore.Settings.VS8.AutoBuffer;
};
Sprite_Character.prototype.createAttachPictureSprite = function () {
  this._attachPictureSprite = new Sprite();
  this._attachPictureSprite.anchor.x = 0.5;
  this._attachPictureSprite.anchor.y = 0x1;
  this.addChild(this._attachPictureSprite);
  this.updateAttachPictureSprite();
};
Sprite_Character.prototype.createIconSprite = function () {
  this._eventIconSprite = new Sprite();
  this._eventIconSprite.bitmap = ImageManager.loadSystem("IconSet");
  this._eventIconSprite.bitmap.smooth = false;
  this._eventIconSprite.setFrame(0x0, 0x0, 0x0, 0x0);
  this._eventIconSprite.anchor.x = 0.5;
  this._eventIconSprite.anchor.y = 0x1;
  this.addChild(this._eventIconSprite);
};
VisuMZ.EventsMoveCore.Sprite_Character_update = Sprite_Character.prototype.update;
Sprite_Character.prototype.update = function () {
  VisuMZ.EventsMoveCore.Sprite_Character_update.call(this);
  this.updateEventsAndMovementCore();
};
Sprite_Character.prototype.updateVisibility = function () {
  Sprite.prototype.updateVisibility.call(this);
  if (this.isEventsMoveCoreInvisible()) {
    this.visible = false;
  }
};
Sprite_Character.prototype.isEventsMoveCoreInvisible = function () {
  if (this.getEventIconIndex() > 0x0) {
    return false;
  }
  if (this._character) {
    if (this._character.attachPictureFilename() !== '') {
      return false;
    }
  }
  return this.isEmptyCharacter() || this._character && this._character.isTransparent();
};
Sprite_Character.prototype.updateBitmapSmoothing = function () {
  if (!this.bitmap) {
    return;
  }
  this.bitmap.smooth = !!VisuMZ.EventsMoveCore.Settings.Movement.BitmapSmoothing;
};
Sprite_Character.prototype.updateEventsAndMovementCore = function () {
  this.updateScaleBase();
  this.updateTilt();
  this.updateShadow();
  this.updateEventIconSprite();
  this.updateEventCustomZ();
  this.updateEventMirrorSprite();
  this.updateAttachPictureSprite();
};
VisuMZ.EventsMoveCore.Sprite_Character_setTileBitmap = Sprite_Character.prototype.setTileBitmap;
Sprite_Character.prototype.setTileBitmap = function () {
  VisuMZ.EventsMoveCore.Sprite_Character_setTileBitmap.call(this);
  this.bitmap.addLoadListener(this.updateBitmapSmoothing.bind(this));
};
Sprite_Character.prototype.updateTileFrame = function () {
  const _0x9a31ef = this._tileId;
  const _0x52ac77 = this.patternWidth();
  const _0xc0aea4 = this.patternHeight();
  const _0x402e30 = (Math.floor(_0x9a31ef / 0x80) % 0x2 * 0x8 + _0x9a31ef % 0x8) * _0x52ac77;
  const _0x368e0c = Math.floor(_0x9a31ef % 0x100 / 0x8) % 0x10 * _0xc0aea4;
  const _0x9637b = this.getTileExpandData();
  let _0x28a377 = _0x402e30;
  let _0x1d5b56 = _0x368e0c;
  let _0x3ecdd9 = _0x52ac77;
  let _0x304e63 = _0xc0aea4;
  if (_0x9637b.up && _0x9637b.up > 0x0) {
    _0x1d5b56 -= _0xc0aea4 * _0x9637b.up;
    _0x304e63 += _0xc0aea4 * _0x9637b.up;
  }
  if (_0x9637b.down && _0x9637b.down > 0x0) {
    _0x304e63 += _0xc0aea4 * _0x9637b.down;
  }
  if (_0x9637b.left && _0x9637b.left > 0x0) {
    _0x28a377 -= _0x52ac77 * _0x9637b.left;
    _0x3ecdd9 += _0x52ac77 * _0x9637b.left;
  }
  if (_0x9637b.right && _0x9637b.right > 0x0) {
    _0x3ecdd9 += _0x52ac77 * _0x9637b.right;
  }
  this.setFrame(_0x28a377, _0x1d5b56, _0x3ecdd9, _0x304e63);
};
Sprite_Character.prototype.getTileExpandData = function () {
  return this._character ? this._character._tileExpand || {} : {};
};
VisuMZ.EventsMoveCore.Sprite_Character_setCharacterBitmap = Sprite_Character.prototype.setCharacterBitmap;
Sprite_Character.prototype.setCharacterBitmap = function () {
  VisuMZ.EventsMoveCore.Sprite_Character_setCharacterBitmap.call(this);
  this.bitmap.addLoadListener(this.updateBitmapSmoothing.bind(this));
  this._isCharacterSpriteSheetInvisible = ImageManager.isInvisibleCharacter(this._characterName);
  if (this._isCharacterSpriteSheetInvisible) {
    this.bitmap.addLoadListener(this.setCharacterSpriteSheetInvisible.bind(this));
  }
};
Sprite_Character.prototype.setCharacterSpriteSheetInvisible = function () {
  this.bitmap = new Bitmap(this.bitmap.width, this.bitmap.height);
};
VisuMZ.EventsMoveCore.Sprite_Character_characterPatternY = Sprite_Character.prototype.characterPatternY;
Sprite_Character.prototype.characterPatternY = function () {
  return this.isSpriteVS8dir() ? this.characterPatternYVS8() : this.characterPatternYBasic();
};
Sprite_Character.prototype.characterPatternYVS8 = function () {
  const _0x292981 = this._character.direction();
  let _0x2cbfe3 = [0x2, 0x2, 0x2, 0x4, 0x4, 0x2, 0x6, 0x6, 0x8, 0x8];
  if (this._character._mirrorSprite) {
    _0x2cbfe3 = [0x2, 0x4, 0x2, 0x2, 0x6, 0x2, 0x4, 0x8, 0x8, 0x6];
  }
  return (_0x2cbfe3[_0x292981] - 0x2) / 0x2;
};
Sprite_Character.prototype.characterPatternYBasic = function () {
  let _0x301ae1 = this._character.direction();
  if (this._character._mirrorSprite) {
    if (_0x301ae1 === 0x4) {
      _0x301ae1 = 0x6;
    } else if (_0x301ae1 === 0x6) {
      _0x301ae1 = 0x4;
    }
  }
  return (_0x301ae1 - 0x2) / 0x2;
};
Sprite_Character.prototype.updateScaleBase = function () {
  this.scale.x = this._character._scaleX ?? 0x1;
  this.scale.y = this._character._scaleY ?? 0x1;
};
Sprite_Character.prototype.updateTilt = function () {
  if (!VisuMZ.EventsMoveCore.Settings.Movement.EnableDashTilt) {
    return;
  }
  this.rotation = 0x0;
  if (this.isAllowCharacterTilt()) {
    const _0x5e6dcb = VisuMZ.EventsMoveCore.Settings.Movement;
    const _0x31fe44 = this._character.direction();
    let _0x2e572c = 0x0;
    if ([0x1, 0x4, 0x7].includes(_0x31fe44)) {
      _0x2e572c = _0x5e6dcb.TiltLeft;
    }
    if ([0x3, 0x6, 0x9].includes(_0x31fe44)) {
      _0x2e572c = _0x5e6dcb.TiltRight;
    }
    if ([0x2, 0x8].includes(_0x31fe44)) {
      _0x2e572c = [-_0x5e6dcb.TiltVert, 0x0, _0x5e6dcb.TiltVert][this._character.pattern()];
    }
    if (this._reflection) {
      _0x2e572c *= -0x1;
    }
    this.rotation = _0x2e572c;
  }
};
Sprite_Character.prototype.isAllowCharacterTilt = function () {
  if (this._dragonbones) {
    return false;
  }
  return this._character.isDashingAndMoving() && !this._character.isOnLadder() && !this._character.isPosing() && this.getEventIconIndex() === 0x0;
};
Sprite_Character.prototype.updateShadow = function () {
  if (!this._shadowSprite) {
    return;
  }
  this._shadowSprite.x = this._character.shadowX();
  this._shadowSprite.y = this._character.shadowY();
  this._shadowSprite.opacity = this.opacity;
  this._shadowSprite.visible = this._character.isShadowVisible();
  this._shadowSprite._hidden = this._hidden;
  if (this._character.isShadowShrink()) {
    this._shadowSprite.scale.x = Math.max(0x0, this._shadowSprite.scale.x - 0.1);
    this._shadowSprite.scale.y = Math.max(0x0, this._shadowSprite.scale.y - 0.1);
  } else {
    if (this._shadowSprite.scale.x !== this.scale.x) {
      if (this._shadowSprite.scale.x > this.scale.x) {
        this._shadowSprite.scale.x = Math.min(this._shadowSprite.scale.x + 0.1, this.scale.x);
      }
      if (this._shadowSprite.scale.x < this.scale.x) {
        this._shadowSprite.scale.x = Math.max(this._shadowSprite.scale.x - 0.1, this.scale.x);
      }
    }
    if (this._shadowSprite.scale.y !== this.scale.y) {
      if (this._shadowSprite.scale.y > this.scale.y) {
        this._shadowSprite.scale.y = Math.min(this._shadowSprite.scale.y + 0.1, this.scale.y);
      }
      if (this._shadowSprite.scale.y < this.scale.y) {
        this._shadowSprite.scale.y = Math.max(this._shadowSprite.scale.y - 0.1, this.scale.y);
      }
    }
  }
};
Sprite_Character.prototype.updateEventIconSprite = function () {
  if (!this._eventIconSprite) {
    return;
  }
  const _0x14b907 = this._eventIconSprite;
  const _0x54c05c = this.getEventIconIndex();
  if (_0x54c05c <= 0x0) {
    return _0x14b907.setFrame(0x0, 0x0, 0x0, 0x0);
  } else {
    const _0x470fd0 = ImageManager.iconWidth;
    const _0x3a529a = ImageManager.iconHeight;
    const _0x255465 = _0x54c05c % 0x10 * _0x470fd0;
    const _0x540e64 = Math.floor(_0x54c05c / 0x10) * _0x3a529a;
    _0x14b907.setFrame(_0x255465, _0x540e64, _0x470fd0, _0x3a529a);
    this.visible = true;
  }
  const _0x4745b4 = this._character.getEventIconData();
  if (this.isAutoBufferIcon()) {
    this.autoEventIconBuffer(_0x14b907);
  } else {
    _0x14b907.x = _0x4745b4 ? _0x4745b4.bufferX : 0x0;
    _0x14b907.y = _0x4745b4 ? -this.height + _0x4745b4.bufferY : 0x0;
  }
  _0x14b907.blendMode = _0x4745b4 ? _0x4745b4.blendMode : 0x0;
  this.removeChild(_0x14b907);
  this.addChild(_0x14b907);
  _0x14b907.rotation = -this.rotation;
};
Sprite_Character.prototype.autoEventIconBuffer = function (_0x1b9741) {
  _0x1b9741.x = 0x0;
  _0x1b9741.y = -this.height + this.height * 0x2 / 0x5;
  if (this._character.pattern() !== 0x1) {
    _0x1b9741.y += 0x1;
  }
};
Sprite_Character.prototype.getEventIconIndex = function () {
  if (!this._character) {
    return 0x0;
  }
  if (this._character._erased) {
    return 0x0;
  }
  const _0x1221c3 = this._character.getEventIconData();
  return _0x1221c3 ? _0x1221c3.iconIndex || 0x0 : 0x0;
};
Sprite_Character.prototype.updateEventCustomZ = function () {
  if (!this._character) {
    return;
  }
  if (this._character._customZ === undefined) {
    return;
  }
  if (this._character._customZ === false) {
    return;
  }
  this.z = this._character._customZ;
  if (this._shadowSprite) {
    if (this.z < 0x0) {
      this._shadowSprite.z = this.z - 0x1;
    } else {
      this._shadowSprite.z = 0x0;
    }
  }
};
Sprite_Character.prototype.updateEventMirrorSprite = function () {
  if (!this._character) {
    return;
  }
  let _0x137509 = !!this._character._mirrorSprite;
  this.scale.x = Math.abs(this.scale.x) * (_0x137509 ? -0x1 : 0x1);
};
Sprite_Character.prototype.updateAttachPictureSprite = function () {
  if (!this._attachPictureSprite) {
    return;
  }
  if (!this._character) {
    return;
  }
  this.setupAttachPictureBitmap();
  this.updateAttachPictureBitmap();
};
Sprite_Character.prototype.setupAttachPictureBitmap = function () {
  if (!this.needsAttachPictureUpdate()) {
    return;
  }
  const _0xd9328d = this._character.attachPictureSettings();
  this._lastAttachPictureFilename = _0xd9328d.filename;
  this._lastAttachPictureType = _0xd9328d.type;
  this._lastAttachPictureMaxSize = _0xd9328d.maxSize;
  this._lastAttachPictureScale = _0xd9328d.scale;
  if (_0xd9328d.filename !== '') {
    if (_0xd9328d.type === 'enemy') {
      const _0x36fdc4 = ImageManager.loadEnemy(_0xd9328d.filename);
      _0x36fdc4.addLoadListener(this.onLoadAttachPicture.bind(this, _0x36fdc4));
    } else {
      if (_0xd9328d.type === "sv enemy") {
        const _0x3492a5 = ImageManager.loadSvEnemy(_0xd9328d.filename);
        _0x3492a5.addLoadListener(this.onLoadAttachPicture.bind(this, _0x3492a5));
      } else {
        const _0xb64e8c = ImageManager.loadPicture(_0xd9328d.filename);
        _0xb64e8c.addLoadListener(this.onLoadAttachPicture.bind(this, _0xb64e8c));
      }
    }
  } else {
    this._attachPictureSprite.bitmap = new Bitmap(0x1, 0x1);
  }
};
Sprite_Character.prototype.updateAttachPictureBitmap = function () {
  const _0x4aa52f = this._attachPictureSprite;
  _0x4aa52f.x = this._character.attachPictureOffsetX();
  _0x4aa52f.y = this._character.attachPictureOffsetY();
  _0x4aa52f.blendMode = this._character.attachPictureBlendMode();
};
Sprite_Character.prototype.needsAttachPictureUpdate = function () {
  const _0x2eabab = this._character.attachPictureSettings();
  if (_0x2eabab) {
    if (this._lastAttachPictureFilename !== _0x2eabab.filename) {
      return true;
    }
    if (this._lastAttachPictureType !== _0x2eabab.type) {
      return true;
    }
    if (this._lastAttachPictureMaxSize !== _0x2eabab.maxSize) {
      return true;
    }
    if (this._lastAttachPictureScale !== _0x2eabab.scale) {
      return true;
    }
  }
  return false;
};
Sprite_Character.prototype.onLoadAttachPicture = function (_0x59c4ab) {
  const _0x31b6d6 = this._attachPictureSprite;
  _0x31b6d6.bitmap = _0x59c4ab;
  const _0xea6eb5 = this._character.attachPictureSettings();
  const _0x399228 = _0xea6eb5.maxSize;
  const _0x3e1149 = _0xea6eb5.scale;
  let _0x21e170 = 0x1;
  if (_0x399228 > 0x0) {
    let _0x1c4b2e = this.getAttachPictureBitmapWidth() || 0x1;
    let _0xe3c340 = this.getAttachPictureBitmapHeight() || 0x1;
    const _0x544ad4 = Math.max(0x1, _0x1c4b2e, _0xe3c340);
    _0x21e170 = _0x399228 / _0x544ad4;
  }
  _0x21e170 *= _0x3e1149;
  if (_0x21e170 !== 0x1) {
    this._attachPictureSprite.bitmap.smooth = true;
  }
  _0x31b6d6.scale.x = _0x21e170;
  _0x31b6d6.scale.y = _0x21e170;
  this.visible = true;
  this.updateAttachPictureBitmap();
};
Sprite_Character.prototype.getAttachPictureBitmapWidth = function () {
  const _0x39b2e9 = this._attachPictureSprite;
  if (!_0x39b2e9) {
    return 0x0;
  }
  return _0x39b2e9.bitmap.width;
};
Sprite_Character.prototype.getAttachPictureBitmapHeight = function () {
  const _0x205636 = this._attachPictureSprite;
  if (!_0x205636) {
    return 0x0;
  }
  return _0x205636.bitmap.height;
};
VisuMZ.EventsMoveCore.Sprite_Balloon_setup = Sprite_Balloon.prototype.setup;
Sprite_Balloon.prototype.setup = function (_0x102447, _0xbd74a0) {
  VisuMZ.EventsMoveCore.Sprite_Balloon_setup.call(this, _0x102447, _0xbd74a0);
  if (VisuMZ.EventsMoveCore.Settings.VS8.AutoBalloon) {
    this._target._character.setBalloonPose(_0xbd74a0, this._duration);
  }
};
VisuMZ.EventsMoveCore.Sprite_Balloon_updatePosition = Sprite_Balloon.prototype.updatePosition;
Sprite_Balloon.prototype.updatePosition = function () {
  VisuMZ.EventsMoveCore.Sprite_Balloon_updatePosition.call(this);
  this.updateVS8BalloonOffsets();
};
Sprite_Balloon.prototype.updateVS8BalloonOffsets = function () {
  if (this._target._character.isSpriteVS8dir()) {
    this.x += VisuMZ.EventsMoveCore.Settings.VS8.BalloonOffsetX;
    this.y += VisuMZ.EventsMoveCore.Settings.VS8.BalloonOffsetY;
  }
};
Sprite_Timer.prototype.createBitmap = function () {
  this.bitmap = new Bitmap(Math.round(Graphics.boxWidth / 0x2), 0x30);
  this.bitmap.fontFace = this.fontFace();
  this.bitmap.fontSize = this.fontSize();
  this.bitmap.outlineColor = ColorManager.outlineColor();
};
Sprite_Timer.prototype.timerText = function () {
  const _0x243b2f = Math.floor(this._seconds / 0x3c / 0x3c);
  const _0x53547a = Math.floor(this._seconds / 0x3c) % 0x3c;
  const _0x506205 = this._seconds % 0x3c;
  let _0x16929b = _0x53547a.padZero(0x2) + ':' + _0x506205.padZero(0x2);
  if (_0x243b2f > 0x0) {
    _0x16929b = "%1:%2".format(_0x243b2f, _0x16929b);
  }
  return _0x16929b;
};
function Sprite_EventLabel() {
  this.initialize(...arguments);
}
Sprite_EventLabel.prototype = Object.create(Sprite.prototype);
Sprite_EventLabel.prototype.constructor = Sprite_EventLabel;
Sprite_EventLabel.prototype.initialize = function (_0xac7061) {
  this._event = _0xac7061;
  Sprite.prototype.initialize.call(this);
  this.initMembers();
  this.createProxyWindow();
};
Sprite_EventLabel.prototype.initMembers = function () {
  this.anchor.x = 0.5;
  this.anchor.y = 0x1;
};
Sprite_EventLabel.prototype.createProxyWindow = function () {
  const _0x4188fa = new Rectangle(0x0, 0x0, 0x1, 0x1);
  this._proxyWindow = new Window_Base(_0x4188fa);
  this._proxyWindow.padding = 0x0;
  this.opacity = this.isLabelVisible() ? 0xff : 0x0;
};
Sprite_EventLabel.prototype.update = function () {
  Sprite.prototype.update.call(this);
  this.updateText();
  this.updateScale();
  this.updatePosition();
  this.updateOpacity();
  this.updateHueShift();
};
Sprite_EventLabel.prototype.updateText = function () {
  if (this._event.labelWindowText() !== this._text) {
    this._text = this._event.labelWindowText();
    this.refresh();
  }
};
Sprite_EventLabel.prototype.refresh = function () {
  if (!this._proxyWindow) {
    return;
  }
  this.resizeWindow();
  this.drawText();
};
Sprite_EventLabel.prototype.resizeWindow = function () {
  const _0x79a6f0 = this._proxyWindow.textSizeEx(this._text);
  const _0x20d9d1 = this._proxyWindow.itemPadding();
  const _0x245c1d = _0x79a6f0.width + _0x20d9d1 * 0x2;
  const _0x3750be = _0x79a6f0.height;
  this._proxyWindow.move(0x0, 0x0, _0x245c1d, _0x3750be);
  this._proxyWindow.createContents();
  this.bitmap = this._proxyWindow.contents;
};
Sprite_EventLabel.prototype.drawText = function () {
  const _0x4a21fe = this._proxyWindow.itemPadding();
  this._proxyWindow.drawTextEx(this._text, _0x4a21fe, 0x0);
};
Sprite_EventLabel.prototype.updateScale = function () {
  const _0x35ccf9 = VisuMZ.EventsMoveCore.Settings.Label.FontSize;
  const _0x4c2acc = $gameSystem.mainFontSize() || 0x1;
  this.scale.x = this.scale.y = _0x35ccf9 / _0x4c2acc;
};
Sprite_EventLabel.prototype.updatePosition = function () {
  if (!SceneManager._scene) {
    return;
  }
  if (!SceneManager._scene._spriteset) {
    return;
  }
  const _0x9a0cf1 = SceneManager._scene._spriteset.findTargetSprite(this._event);
  if (!_0x9a0cf1) {
    return;
  }
  this.x = this._event.screenX();
  this.x += this._event._labelWindow.offsetX;
  if (_0x9a0cf1._lastAttachPictureFilename) {
    const _0x5a20ee = _0x9a0cf1._attachPictureSprite;
    this.y = this._event.screenY() - _0x5a20ee.height * _0x5a20ee.scale.y;
  } else {
    this.y = this._event.screenY() - _0x9a0cf1.height * _0x9a0cf1.scale.y;
  }
  this.y += $gameSystem.windowPadding() * -0.5;
  this.y += this._event._labelWindow.offsetY;
};
Sprite_EventLabel.prototype.updateOpacity = function () {
  if (this.isLabelVisible()) {
    this.opacity += this.opacitySpeed();
  } else if (SceneManager._scene._encounterEffectDuration > 0x0) {
    this.opacity = 0x0;
  } else {
    this.opacity -= this.opacitySpeed();
  }
};
Sprite_EventLabel.prototype.updateHueShift = function () {
  if (this.isLabelVisible() && this._event && this._event._labelWindow.hueShift) {
    const _0x559308 = this._hue + (this._event._labelWindow.hueShift || 0x0);
    this.setHue(_0x559308);
  }
};
Sprite_EventLabel.prototype.isLabelVisible = function () {
  if (!$gameSystem.eventLabelsVisible()) {
    return false;
  }
  if (this._event?.["_erased"]) {
    return false;
  }
  if (this._event && this._event._pageIndex < 0x0) {
    return false;
  }
  if (SceneManager._scene._encounterEffectDuration > 0x0) {
    return false;
  }
  const _0x3b82a5 = $gamePlayer.x;
  const _0x4271de = $gamePlayer.y;
  const _0x558b35 = this._event.x;
  const _0x558083 = this._event.y;
  if (this._visiblePlayerX === _0x3b82a5 && this._visiblePlayerY === _0x4271de && this._visibleEventX === _0x558b35 && this._visibleEventY === _0x558083) {
    return this._cacheVisibility;
  }
  this._visiblePlayerX = $gamePlayer.x;
  this._visiblePlayerY = $gamePlayer.y;
  this._visibleEventX = this._event.x;
  this._visibleEventY = this._event.y;
  if (!VisuMZ.EventsMoveCore.isInsideLabelRange(this._event)) {
    this._cacheVisibility = false;
    return false;
  }
  this._cacheVisibility = true;
  return true;
};
Sprite_EventLabel.prototype.opacitySpeed = function () {
  return VisuMZ.EventsMoveCore.Settings.Label.OpacitySpeed;
};
function Sprite_VisuMz_MessagePopup() {
  this.initialize(...arguments);
}
Sprite_VisuMz_MessagePopup.prototype = Object.create(Sprite.prototype);
Sprite_VisuMz_MessagePopup.prototype.constructor = Sprite_VisuMz_MessagePopup;
Sprite_VisuMz_MessagePopup.prototype.initialize = function (_0x4ab3c8) {
  this._settings = _0x4ab3c8;
  Sprite.prototype.initialize.call(this);
  this.initMembers();
  this.createDummyWindow();
  this.createTextSprite();
  this.update();
};
Sprite_VisuMz_MessagePopup.prototype.initMembers = function () {
  this._duration = this._settings.duration;
  this._wholeDuration = this._settings.duration;
  this.z = 0x6;
  this._fadeInDuration = this._settings.fadeDuration.fadeIn;
  if (this._fadeInDuration > 0x0 && this._fadeInDuration >= Math.floor(this._duration * 0.48)) {
    this._fadeInDuration = Math.floor(this._duration * 0.48);
  }
  this.opacity = this._fadeInDuration > 0x0 ? 0x0 : 0xff;
  this._fadeOutDuration = this._settings.fadeDuration.fadeOut;
  if (this._fadeOutDuration > 0x0 && this._fadeOutDuration >= Math.floor(this._duration * 0.48)) {
    this._fadeOutDuration = Math.floor(this._duration * 0.48);
  }
  this._fadeOutStart = this._fadeOutDuration;
  this._startX = this._settings.startOffset.x;
  this._startY = this._settings.startOffset.y;
  this._targetX = this._settings.endOffset.x;
  this._targetY = this._settings.endOffset.y;
  this._offsetX = this._startX;
  this._offsetY = this._startY;
  this._startScaleX = this._settings.startScale.x;
  this._startScaleY = this._settings.startScale.y;
  this._targetScaleX = this._settings.endScale.x;
  this._targetScaleY = this._settings.endScale.y;
  this._startAngle = -this._settings.angle.start;
  this._targetAngle = -this._settings.angle.end;
  this._arcPeak = -this._settings.misc.arc;
  this._currentArc = 0x0;
};
Sprite_VisuMz_MessagePopup.prototype.createDummyWindow = function () {
  const _0x3d53e1 = this._settings;
  const _0x4dae6b = new Rectangle(0x0, 0x0, Graphics.width, Graphics.height);
  this._dummyWindow = new Window_Base(_0x4dae6b);
  const _0x52ebe6 = this._dummyWindow.textSizeEx(_0x3d53e1.text);
  const _0x1ac883 = _0x52ebe6.width;
  const _0x29d367 = _0x52ebe6.height;
  const _0x3d2e41 = _0x1ac883 + $gameSystem.windowPadding() * 0x2;
  const _0x2eb188 = _0x29d367 + $gameSystem.windowPadding() * 0x2;
  this._dummyWindow.move(0x0, 0x0, _0x3d2e41, _0x2eb188);
  this._dummyWindow.createContents();
  this._dummyWindow.drawTextEx(_0x3d53e1.text, 0x0, 0x0);
};
Sprite_VisuMz_MessagePopup.prototype.createTextSprite = function () {
  this._textSprite = new Sprite();
  this._textSprite.bitmap = this._dummyWindow.contents;
  this._textSprite.anchor.x = 0.5;
  this._textSprite.anchor.y = 0.5;
  this._textSprite.x = this._startX;
  this._textSprite.y = this._startY;
  this._textSprite.scale.x = this._startScaleX;
  this._textSprite.scale.y = this._startScaleY;
  this._textSprite.angle = this._startAngle;
  this.addChild(this._textSprite);
};
Sprite_VisuMz_MessagePopup.prototype.update = function () {
  Sprite.prototype.update.call(this);
  if (!this.canUpdate()) {
    return;
  }
  this.updateSpritePosition();
  this.updateTextPosition();
  this.updateTextScale();
  this.updateTextAngle();
  this.updateOpacity();
  this.updateDuration();
};
Sprite_VisuMz_MessagePopup.prototype.canUpdate = function () {
  return !!this._textSprite;
};
Sprite_VisuMz_MessagePopup.prototype.updateSpritePosition = function () {
  const _0x425385 = this._settings;
  {
    const _0x289152 = $gameMap.tileWidth();
    const _0x32ebbc = _0x425385.tileCoordinates.x;
    const _0x4bbf3b = $gameMap.adjustX(_0x32ebbc);
    this.x = Math.floor(_0x4bbf3b * _0x289152 + _0x289152 / 0x2);
  }
  {
    const _0x4a26aa = $gameMap.tileHeight();
    const _0x2bed90 = _0x425385.tileCoordinates.y;
    const _0x274483 = $gameMap.adjustY(_0x2bed90);
    this.y = Math.floor(_0x274483 * _0x4a26aa + _0x4a26aa);
  }
};
Sprite_VisuMz_MessagePopup.prototype.updateTextPosition = function () {
  if (this._duration <= 0x0) {
    return;
  }
  const _0x5b315b = this._duration;
  const _0x4516f5 = this._wholeDuration;
  {
    this._offsetX = (this._offsetX * (_0x5b315b - 0x1) + this._targetX) / _0x5b315b;
    this._offsetY = (this._offsetY * (_0x5b315b - 0x1) + this._targetY) / _0x5b315b;
  }
  {
    const _0x59a549 = _0x4516f5 - _0x5b315b;
    const _0x47c946 = _0x4516f5 / 0x2;
    const _0xcca665 = this._arcPeak;
    const _0x5cf236 = -_0xcca665 / Math.pow(_0x47c946, 0x2);
    this._currentArc = _0x5cf236 * Math.pow(_0x59a549 - _0x47c946, 0x2) + _0xcca665;
  }
  this._textSprite.x = this._offsetX;
  this._textSprite.y = this._offsetY + this._currentArc;
};
Sprite_VisuMz_MessagePopup.prototype.updateTextScale = function () {
  if (this._duration <= 0x0) {
    return;
  }
  const _0x2926da = this._duration;
  this._textSprite.scale.x = (this._textSprite.scale.x * (_0x2926da - 0x1) + this._targetScaleX) / _0x2926da;
  this._textSprite.scale.y = (this._textSprite.scale.y * (_0x2926da - 0x1) + this._targetScaleY) / _0x2926da;
};
Sprite_VisuMz_MessagePopup.prototype.updateTextAngle = function () {
  if (this._duration <= 0x0) {
    return;
  }
  const _0x5616d3 = this._duration;
  this._textSprite.angle = (this._textSprite.angle * (_0x5616d3 - 0x1) + this._targetAngle) / _0x5616d3;
};
Sprite_VisuMz_MessagePopup.prototype.updateOpacity = function () {
  this.updateFadeIn();
  this.updateFadeOut();
};
Sprite_VisuMz_MessagePopup.prototype.updateFadeIn = function () {
  if (this._fadeInDuration <= 0x0) {
    return;
  }
  const _0x6be498 = this._fadeInDuration;
  this.opacity = (this.opacity * (_0x6be498 - 0x1) + 0xff) / _0x6be498;
  this._fadeInDuration--;
  if (this._fadeInDuration <= 0x0) {
    this.opacity = 0xff;
  }
};
Sprite_VisuMz_MessagePopup.prototype.updateFadeOut = function () {
  if (this._fadeOutDuration <= 0x0) {
    return;
  }
  if (this._duration > this._fadeOutStart) {
    return;
  }
  const _0x3fa37a = this._fadeOutDuration;
  this.opacity = (this.opacity * (_0x3fa37a - 0x1) + 0x0) / _0x3fa37a;
  this._fadeOutDuration--;
  if (this._fadeOutDuration <= 0x0) {
    this.opacity = 0x0;
  }
};
Sprite_VisuMz_MessagePopup.prototype.updateDuration = function () {
  if (this._duration <= 0x0) {
    return;
  }
  this._duration--;
  if (this._duration <= 0x0) {
    if (this.parent) {
      this.parent.removeChild(this);
    }
    if (this._textSprite.bitmap) {
      this._textSprite.bitmap.destroy();
    }
  }
};
VisuMZ.EventsMoveCore.Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
Spriteset_Map.prototype.createLowerLayer = function () {
  VisuMZ.EventsMoveCore.Spriteset_Map_createLowerLayer.call(this);
  this.createLabelWindows();
};
VisuMZ.EventsMoveCore.Spriteset_Map_createShadow = Spriteset_Map.prototype.createShadow;
Spriteset_Map.prototype.createShadow = function () {
  VisuMZ.EventsMoveCore.Spriteset_Map_createShadow.call(this);
  this.createShadows();
};
Spriteset_Map.prototype.createShadows = function () {
  if (!VisuMZ.EventsMoveCore.Settings.Movement.ShowShadows) {
    return;
  }
  for (const _0x26f53a of this._characterSprites) {
    this.createCharacterShadow(_0x26f53a);
  }
};
Spriteset_Map.prototype.createCharacterShadow = function (_0x257640) {
  _0x257640._shadowSprite = new Sprite();
  _0x257640._shadowSprite._filename = _0x257640._character.shadowFilename();
  _0x257640._shadowSprite.bitmap = ImageManager.loadSystem(_0x257640._shadowSprite._filename);
  _0x257640._shadowSprite.anchor.x = 0.5;
  _0x257640._shadowSprite.anchor.y = 0x1;
  _0x257640._shadowSprite.z = 0x0;
  this._tilemap.addChild(_0x257640._shadowSprite);
};
Spriteset_Map.prototype.hideShadows = function () {
  if (!VisuMZ.EventsMoveCore.Settings.Movement.ShowShadows) {
    return;
  }
  for (const _0x372bd4 of this._characterSprites) {
    this._tilemap.removeChild(_0x372bd4._shadowSprite);
  }
};
Spriteset_Map.prototype.createLabelWindows = function () {
  this._labelWindows = [];
  for (const _0x5dae9c of $gameMap.events()) {
    this.createLabelWindowForTarget(_0x5dae9c);
  }
};
Spriteset_Map.MOBILE_EVENT_LABELS = VisuMZ.EventsMoveCore.Settings.Label.MobileEnabled ?? true;
Spriteset_Map.prototype.createLabelWindowForTarget = function (_0x38af69) {
  if (!this.isTargetEventValidForLabelWindow(_0x38af69)) {
    return;
  }
  if (Utils.isMobileDevice()) {
    if (!Spriteset_Map.MOBILE_EVENT_LABELS) {
      return;
    }
  }
  let _0x38bad0;
  const _0x52e67a = VisuMZ.EventsMoveCore.Settings.Label.SpriteBased ?? true;
  _0x38bad0 = _0x52e67a ? new Sprite_EventLabel(_0x38af69) : new Window_EventLabel(_0x38af69);
  _0x38bad0.z = 0x8;
  _0x38bad0.spriteId = Sprite._counter++;
  this._tilemap.addChild(_0x38bad0);
  this._labelWindows.push(_0x38bad0);
};
Spriteset_Map.prototype.isTargetEventValidForLabelWindow = function (_0x4b4a85) {
  const _0x41f970 = _0x4b4a85.event();
  if (_0x41f970.note.match(/<LABEL:[ ](.*?)>/i)) {
    return true;
  }
  if (_0x41f970.note.match(/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)) {
    return true;
  }
  for (const _0x4db040 of _0x41f970.pages) {
    let _0x3b73e4 = '';
    for (const _0x42670a of _0x4db040.list) {
      if ([0x6c, 0x198].includes(_0x42670a.code)) {
        _0x3b73e4 += _0x42670a.parameters[0x0];
      }
    }
    if (_0x3b73e4.match(/<LABEL:[ ](.*?)>/i)) {
      return true;
    }
    if (_0x3b73e4.match(/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)) {
      return true;
    }
  }
  return false;
};
Spriteset_Map.prototype.createSpawnedEvent = function (_0x202d5b) {
  this._characterSprites = this._characterSprites || [];
  const _0x237d32 = new Sprite_Character(_0x202d5b);
  this._characterSprites.push(_0x237d32);
  this._tilemap.addChild(_0x237d32);
  this.createCharacterShadow(_0x237d32);
  this.createLabelWindowForTarget(_0x202d5b);
  _0x237d32.update();
};
Spriteset_Map.prototype.refreshEventLabels = function () {
  if (!this._labelWindows) {
    return;
  }
  for (const _0x239ff3 of this._labelWindows) {
    if (_0x239ff3) {
      _0x239ff3._visiblePlayerX = undefined;
      _0x239ff3.refresh();
    }
  }
};
Spriteset_Map.prototype.createEventsMoveCoreMessagePopup = function (_0x134505, _0x3faaab) {
  if (!_0x134505) {
    return;
  }
  _0x3faaab.tileCoordinates = {
    'x': _0x134505.x,
    'y': _0x134505.y
  };
  this.createEventsMoveCoreTileMessagePopup(_0x3faaab);
};
Spriteset_Map.prototype.createEventsMoveCoreTileMessagePopup = function (_0x56cfa8) {
  if (!this._tilemap) {
    return;
  }
  const _0x5988c9 = new Sprite_VisuMz_MessagePopup(_0x56cfa8);
  this._tilemap.addChild(_0x5988c9);
};
VisuMZ.EventsMoveCore.Game_Message_setNumberInput = Game_Message.prototype.setNumberInput;
Game_Message.prototype.setNumberInput = function (_0x3aeea2, _0x5eaa2a) {
  this._selfTargetNumberInput = $gameTemp.getSelfTarget();
  VisuMZ.EventsMoveCore.Game_Message_setNumberInput.call(this, _0x3aeea2, _0x5eaa2a);
};
VisuMZ.EventsMoveCore.Window_NumberInput_start = Window_NumberInput.prototype.start;
Window_NumberInput.prototype.start = function () {
  $gameTemp.registerSelfTarget($gameMessage._selfTargetNumberInput);
  VisuMZ.EventsMoveCore.Window_NumberInput_start.call(this);
  $gameTemp.clearSelfTarget();
};
VisuMZ.EventsMoveCore.Window_NumberInput_processOk = Window_NumberInput.prototype.processOk;
Window_NumberInput.prototype.processOk = function () {
  $gameTemp.registerSelfTarget($gameMessage._selfTargetNumberInput);
  VisuMZ.EventsMoveCore.Window_NumberInput_processOk.call(this);
  $gameTemp.clearSelfTarget();
  $gameMessage._selfTargetNumberInput = undefined;
};
VisuMZ.EventsMoveCore.Game_Message_setItemChoice = Game_Message.prototype.setItemChoice;
Game_Message.prototype.setItemChoice = function (_0x434160, _0x49e7f5) {
  this._selfTargetItemChoice = $gameTemp.getSelfTarget();
  VisuMZ.EventsMoveCore.Game_Message_setItemChoice.call(this, _0x434160, _0x49e7f5);
};
VisuMZ.EventsMoveCore.Window_EventItem_onOk = Window_EventItem.prototype.onOk;
Window_EventItem.prototype.onOk = function () {
  $gameTemp.registerSelfTarget($gameMessage._selfTargetItemChoice);
  VisuMZ.EventsMoveCore.Window_EventItem_onOk.call(this);
  $gameTemp.clearSelfTarget();
  $gameMessage._selfTargetItemChoice = undefined;
};
VisuMZ.EventsMoveCore.Window_EventItem_onCancel = Window_EventItem.prototype.onCancel;
Window_EventItem.prototype.onCancel = function () {
  $gameTemp.registerSelfTarget($gameMessage._selfTargetItemChoice);
  VisuMZ.EventsMoveCore.Window_EventItem_onCancel.call(this);
  $gameTemp.clearSelfTarget();
  $gameMessage._selfTargetItemChoice = undefined;
};
VisuMZ.EventsMoveCore.Window_Message_startMessage = Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function () {
  $gameMessage.registerSelfEvent();
  VisuMZ.EventsMoveCore.Window_Message_startMessage.call(this);
  $gameTemp.clearSelfTarget();
};
VisuMZ.EventsMoveCore.Window_ScrollText_startMessage = Window_ScrollText.prototype.startMessage;
Window_ScrollText.prototype.startMessage = function () {
  $gameMessage.registerSelfEvent();
  VisuMZ.EventsMoveCore.Window_ScrollText_startMessage.call(this);
  $gameTemp.clearSelfTarget();
};
function Window_EventLabel() {
  this.initialize(...arguments);
}
Window_EventLabel.prototype = Object.create(Window_Base.prototype);
Window_EventLabel.prototype.constructor = Window_EventLabel;
Window_EventLabel.prototype.initialize = function (_0x248cf8) {
  this._event = _0x248cf8;
  const _0x15500b = new Rectangle(0x0, 0x0, Graphics.boxWidth / 0x4, this.fittingHeight(0x1));
  this.initMembers();
  Window_Base.prototype.initialize.call(this, _0x15500b);
  this.contentsOpacity = 0x0;
  this.setBackgroundType(0x2);
  this._text = '';
};
Window_EventLabel.prototype.initMembers = function () {
  this._eventErased = false;
  this._screenZoomScale = $gameScreen.zoomScale();
  this._eventScreenX = this._event.screenX();
  this._eventScreenY = this._event.screenY();
  this._eventLabelOffsetX = this._event._labelWindow.offsetX;
  this._eventLabelOffsetY = this._event._labelWindow.offsetY;
  this._eventPageIndex = this._event._pageIndex;
  this._cacheVisibility = this.isLabelVisible();
  this._cacheSystemVisible = $gameSystem.eventLabelsVisible();
  this._visiblePlayerX = $gamePlayer.x;
  this._visiblePlayerY = $gamePlayer.y;
  this._visibleEventX = this._event.x;
  this._visibleEventY = this._event.y;
};
Window_EventLabel.prototype.update = function () {
  Window_Base.prototype.update.call(this);
  if (!this.needsUpdate()) {
    return;
  }
  this.updateText();
  this.updateScale();
  this.updatePosition();
  this.updateOpacity();
};
Window_EventLabel.prototype.needsUpdate = function () {
  if (!this._event) {
    return false;
  }
  if (!this._event._labelWindow) {
    return false;
  }
  if (this._eventPageIndex !== this._event._pageIndex) {
    return true;
  }
  if (this._event._erased && !this._eventErased) {
    return true;
  }
  if (this._event._labelWindow.text === '') {
    return false;
  }
  if (this._screenZoomScale !== $gameScreen.zoomScale()) {
    return true;
  }
  if (this._eventScreenX !== this._event.screenX()) {
    return true;
  }
  if (this._eventScreenY !== this._event.screenY()) {
    return true;
  }
  if (this._eventLabelOffsetX !== this._event._labelWindow.offsetX) {
    return true;
  }
  if (this._eventLabelOffsetY !== this._event._labelWindow.offsetY) {
    return true;
  }
  if (this._visiblePlayerX !== $gamePlayer.x) {
    return true;
  }
  if (this._visiblePlayerY !== $gamePlayer.y) {
    return true;
  }
  if (this._visibleEventX !== this._event.x) {
    return true;
  }
  if (this._visibleEventY !== this._event.y) {
    return true;
  }
  if (this._cacheSystemVisible !== $gameSystem.eventLabelsVisible()) {
    return true;
  }
  if (this._cacheVisibility && this.contentsOpacity < 0xff) {
    return true;
  }
  if (!this._cacheVisibility && this.contentsOpacity > 0x0) {
    return true;
  }
  if (SceneManager._scene._encounterEffectDuration > 0x0) {
    return true;
  }
  return false;
};
Window_EventLabel.prototype.updateText = function () {
  if (this._event.labelWindowText() !== this._text) {
    this._text = this._event.labelWindowText();
    this.refresh();
  }
};
Window_EventLabel.prototype.updateScale = function () {
  this.scale.x = 0x1 / $gameScreen.zoomScale();
  this.scale.y = 0x1 / $gameScreen.zoomScale();
  this._screenZoomScale = $gameScreen.zoomScale();
};
Window_EventLabel.prototype.updatePosition = function () {
  if (!SceneManager._scene) {
    return;
  }
  if (!SceneManager._scene._spriteset) {
    return;
  }
  const _0x5f467a = SceneManager._scene._spriteset.findTargetSprite(this._event);
  if (!_0x5f467a) {
    return;
  }
  this.x = Math.round(this._event.screenX() - Math.floor(this.width * this.scale.x / 0x2));
  this.x += this._event._labelWindow.offsetX;
  this.y = this._event.screenY() - _0x5f467a.height;
  this.y += Math.round($gameSystem.windowPadding() * 0.5);
  this.y -= Math.round(this.height * this.scale.y);
  this.y += this._event._labelWindow.offsetY;
  this._eventErased = this._event._erased;
  this._eventScreenX = this._event.screenX();
  this._eventScreenY = this._event.screenY();
  this._eventLabelOffsetX = this._event._labelWindow.offsetX;
  this._eventLabelOffsetY = this._event._labelWindow.offsetY;
  this._eventPageIndex = this._event._pageIndex;
  if (this._eventErased) {
    this.contentsOpacity = 0x0;
  }
};
Window_EventLabel.prototype.updateOpacity = function () {
  if (this.isLabelVisible()) {
    this.contentsOpacity += this.opacitySpeed();
  } else if (SceneManager._scene._encounterEffectDuration > 0x0) {
    this.contentsOpacity = 0x0;
  } else {
    this.contentsOpacity -= this.opacitySpeed();
  }
};
Window_EventLabel.prototype.isLabelVisible = function () {
  if (!$gameSystem.eventLabelsVisible()) {
    return false;
  }
  if (this._event?.["_erased"]) {
    return false;
  }
  if (SceneManager._scene._encounterEffectDuration > 0x0) {
    return false;
  }
  const _0x5c24ff = $gamePlayer.x;
  const _0xc7fb5c = $gamePlayer.y;
  const _0x5528bb = this._event.x;
  const _0x5a6818 = this._event.y;
  if (this._visiblePlayerX === _0x5c24ff && this._visiblePlayerY === _0xc7fb5c && this._visibleEventX === _0x5528bb && this._visibleEventY === _0x5a6818) {
    return this._cacheVisibility;
  }
  this._visiblePlayerX = $gamePlayer.x;
  this._visiblePlayerY = $gamePlayer.y;
  this._visibleEventX = this._event.x;
  this._visibleEventY = this._event.y;
  if (!VisuMZ.EventsMoveCore.isInsideLabelRange(this._event)) {
    this._cacheVisibility = false;
    return false;
  }
  this._cacheVisibility = true;
  return true;
};
Window_EventLabel.prototype.opacitySpeed = function () {
  return VisuMZ.EventsMoveCore.Settings.Label.OpacitySpeed;
};
Window_EventLabel.prototype.resizeWindow = function () {
  const _0x9824f5 = this.textSizeEx(this._text);
  this.width = _0x9824f5.width + ($gameSystem.windowPadding() + this.itemPadding()) * 0x2;
  this.height = Math.max(this.lineHeight(), _0x9824f5.height) + $gameSystem.windowPadding() * 0x2;
  this.createContents();
};
Window_EventLabel.prototype.lineHeight = function () {
  return VisuMZ.EventsMoveCore.Settings.Label.LineHeight;
};
Window_EventLabel.prototype.resetFontSettings = function () {
  Window_Base.prototype.resetFontSettings.call(this);
  this.contents.fontSize = this.defaultFontSize();
};
Window_EventLabel.prototype.defaultFontSize = function () {
  return VisuMZ.EventsMoveCore.Settings.Label.FontSize;
};
Window_EventLabel.prototype.refresh = function () {
  this.resizeWindow();
  this.contents.clear();
  const _0x3c75aa = this._text.split(/[\r\n]+/);
  let _0x4e2e39 = 0x0;
  for (const _0x22a786 of _0x3c75aa) {
    const _0x247204 = this.textSizeEx(_0x22a786);
    const _0x31a4dc = Math.floor((this.innerWidth - _0x247204.width) / 0x2);
    this.drawTextEx(_0x22a786, _0x31a4dc, _0x4e2e39);
    _0x4e2e39 += _0x247204.height;
  }
};
Window_EventLabel.prototype.processDrawIcon = function (_0x22ba93, _0x582c9d) {
  if (_0x582c9d.drawing) {
    this.drawIcon(_0x22ba93, _0x582c9d.x + 0x2, _0x582c9d.y);
  }
  _0x582c9d.x += Math.min(this.iconSize(), ImageManager.iconWidth) + 0x4;
};
Window_EventLabel.prototype.drawIcon = function (_0x4092b9, _0x46ed83, _0x3bc389) {
  const _0x50c80f = ImageManager.loadSystem("IconSet");
  const _0x542386 = ImageManager.iconWidth;
  const _0x5a878d = ImageManager.iconHeight;
  const _0x18b7b7 = _0x4092b9 % 0x10 * _0x542386;
  const _0xbc3e41 = Math.floor(_0x4092b9 / 0x10) * _0x5a878d;
  const _0xce2e0b = Math.min(this.iconSize());
  const _0x5109c7 = Math.min(this.iconSize());
  this.contents.blt(_0x50c80f, _0x18b7b7, _0xbc3e41, _0x542386, _0x5a878d, _0x46ed83, _0x3bc389, _0xce2e0b, _0x5109c7);
};
Window_EventLabel.prototype.iconSize = function () {
  return VisuMZ.EventsMoveCore.Settings.Label.IconSize;
};