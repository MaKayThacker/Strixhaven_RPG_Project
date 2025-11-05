//=============================================================================
// VisuStella MZ - Items & Equips Core
// VisuMZ_1_ItemsEquipsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_ItemsEquipsCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemsEquipsCore = VisuMZ.ItemsEquipsCore || {};
VisuMZ.ItemsEquipsCore.version = 1.53;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.53] [ItemsEquipsCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Items_and_Equips_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Items & Equips Core makes improvements to the RPG Maker MZ item and
 * equipment dedicated scenes (including the shop) and how they're handled.
 * From more item categories, better parameter control, rulings, and more, game
 * devs are able to take control over key aspects of their game's items.
 *
 * Features include all (but not limited to) the following:
 *
 * * Modifying the appearances to the Item Scene, Equip Scene, and Shop Scene.
 * * Categorizing items in unique and multiple categories.
 * * Item Scene and Shop Scene will now display detailed information on items.
 * * NEW! marker can be displayed over recently acquired items in-game.
 * * Equipment notetags to adjust parameters past the editor limitations.
 * * Equipment Rulings to adjust what slot types can and can't be unequipped
 *   and/or optimized.
 * * Equipment Type Handling offers more control over equipment loadouts.
 * * Items sold in shops can be hidden/shown based on Switches.
 * * Items sold in shops can have varying prices adjusted by notetags.
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
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Equipment Type Handling
 *
 * - Characters will no longer have one universal equipment slot setting.
 * Classes can have different equipment type loadouts, made possible through
 * the usage of notetags. Also, equipment types of matching names would be
 * treated as the same type, where previously, they would be different types.
 * This means if you have two "Accessory" slots, be it in the form of notetags
 * or through the Database > Types tab, they can both equip the same type of
 * accessories.
 *
 * - The Change Equip event command is now updated to reflect this new change.
 * When processing an equip change, the slot changed will go to the first
 * empty slot of matching type. If all of the actor's matching slot types are
 * equipped, then the equip will replace the last slot available.
 *
 * ---
 *
 * Shop Status Window
 *
 * - The Status Window found in the Shop Scene was originally barren and did
 * not display much information at all. This is changed through this plugin's
 * new features. While the contents of the Shop Status Window can be customized
 * through the Plugin Parameters, it is a change that cannot be reversed and
 * for the better since it gives players the much needed information revolving
 * around the game's items.
 *
 * ---
 *
 * Core Engine Compatibility: Modern Controls
 *
 * - If the VisuStella Core Engine is added to your game with Modern Controls
 * enabled, then the Item Menu Scene, Equip Menu Scene, and Shop Menu Scene's
 * controls will be changed a bit.
 *
 * - The Item Menu Scene will automatically have the Item List Window active,
 * with using the Left/Right (for single column) or Page Up/Page Down (for
 * multi-columns) to navigate between the Item Categories. Similar will occur
 * when trying to sell items in the Shop Menu Scene.
 *
 * - The Equip Menu Scene will automatically have the Equip Slots Window active
 * and only activate the command window upon moving up to it.
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
 * VisuMZ_1_BattleCore
 * 
 * Changing the "Damage Multiplier" or "Healing Multiplier" vocabulary for the
 * Item and Equip Core's Shop Status Window is not done with the Item and Equip
 * Core's Plugin Parameters if you have the Battle Core installed.
 * 
 * Instead, go to Battle Core's Plugin Parameters, Damage Settings, Damage
 * Styles, and adjust the style's version of the "Damage Multiplier" or
 * "Healing Multiplier" text instead.
 * 
 * Why does this work this way? Because not all damage styles work off
 * "Multipliers" so in order for it to convey the proper message to the player,
 * each damage style has its own vocabulary to be more accurate.
 * 
 * In case you forget about that, when you visit the Item and Equip Core's
 * plugin parameters for these, it should also remind you in the parameter's
 * description on where to change it.
 * 
 * ---
 *
 * VisuMZ_2_WeaponSwapSystem
 *
 * The custom equip slots feature from the VisuStella MZ Items and Equips Core
 * allowed you to add in extra weapon slots. This is now curated up to a max
 * of one weapon slot per character. This needs to be done to make the Weapon
 * Swap System viable.
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
 * === General ===
 * 
 * These notetags affect the Items, Weapons, and Armors on a general scale.
 *
 * ---
 *
 * <Max: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the maximum quantity that can be held for this item.
 * - Replace 'x' with a number value to determine the maximum amount.
 *
 * ---
 *
 * <Color: x>
 * <Color: #rrggbb>
 *
 * - Used for: Item, Weapon, Armor, Skill Notetags
 * - Determines the color of the object inside the in-game menus.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 *
 * <Category: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace 'x' with a category name to mark this item as.
 *
 * ---
 *
 * <Categories>
 *  x
 *  x
 * </Categories>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace each 'x' with a category name to mark this item as.
 *
 * ---
 * 
 * <Conserve: x%>
 * 
 * - Used for: Item
 * - Gives the item a percent chance when used to not consume the item.
 * - Replace 'x' with a number representing the percent chance to successfully
 *   conserve the item.
 * - If an item cannot be consumed, conserve chance will be 100% regardless.
 * 
 * ---
 * 
 * <ID Sort Priority: x>
 * 
 * - Used for: Item, Weapon, and Armor Notetags
 * - Used for Scene_Item, Scene_Equip, Scene_Battle, and Scene_Shop's sell
 *   option (only when selling).
 * - Changes sorting priority by ID for item, weapon, or armor to 'x'. 
 *   - Default priority level is '50'.
 * - Items, weapons, and armors with higher priority values will be sorted
 *   higher up on the list while lower values will be lower on the list.
 * 
 * ---
 *
 * === Item Accessibility Notetags ===
 *
 * The following notetags allow you to choose when items can/cannot be used
 * based on switches.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, item will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, item will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Item Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if an item can be accessible by code.
 *
 * ---
 *
 * <JS Item Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Item Enable>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on JavaScript code.
 * - If the actor this is disabled for is the only party member, it will not be
 *   visible in the item list unless the VisuStella Battle Core is installed.
 *   - If the VisuStella Battle Core is installed, then all battle scope items
 *     will be visible even if they're disabled.
 * - Replace 'code' to determine the type enabled status of the item.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   item will be enabled or not.
 * - The 'user' variable refers to the user with the item.
 * - The 'item' variable refers to the item being checked.
 * - All other item conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === Equipment Notetags ===
 *
 * The following notetags provide equipment-related effects from deciding what
 * equip slots can be given to classes to the base parameter changes asigned
 * to weapons and armors.
 *
 * ---
 *
 * <Equip Slots>
 *  slotName
 *  slotName
 *  slotName
 * </Equip Slots>
 *
 * - Used for: Class Notetags
 * - Changes the equipment slot loadout for any actor who is that class.
 * - Replace 'slotName' with an Equipment Type name from Database > Types.
 *   This is case-sensitive.
 * - Insert or remove as many "slotName" equipment types as needed.
 *
 * ---
 *
 * <param: +x>
 * <param: -x>
 *
 * - Used for: Weapon, Armor Notetags
 * - Changes the base parameter value for the equip item.
 * - Replace 'param' with any of the following: 'MaxHP', 'MaxMP', 'ATK', 'DEF',
 *   'MAT', 'MDF', 'AGI', or 'LUK' to change that specific parameter's value.
 *   - These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * - Replace 'x' with a number value to set the parameter value to.
 * - This allows you to bypass the Database Editor's number limitations.
 *
 * ---
 * 
 * <Equip Copy Limit: x>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Sets a maximum number of copies that the actor can wear of this equipment.
 * - Replace 'x' with a number value to determine the copy limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: Actors can only equip one copy of the "One-of-a-Kind Ring"
 *   on at any time despite having empty accessory slots because the ring has a
 *   <Equip Copy Limit: 1> notetag.
 * 
 * ---
 * 
 * <Equip Weapon Type Limit: x>
 * 
 * - Used for: Weapon
 * - This weapon cannot be equipped with other weapons of the same type once
 *   the limited amount has been reached.
 * - Replace 'x' with a number value to determine the weapon type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: A dualwielding warrior who can only equip one sword and a
 *   dagger but never two swords or two daggers because the swords and daggers
 *   all have the <Equip Weapon Type Limit: 1> notetags on them.
 * 
 * ---
 * 
 * <Equip Armor Type Limit: x>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped with other armors of the same type once the
 *   limited amount has been reached.
 * - Replace 'x' with a number value to determine the armor type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: People cannot equip more than two glove accessories on at a
 *   time because the glove is a "Glove" armor-type and each glove item has the
 *   <Equip Armor Type Limit: 2> notetags on them.
 * 
 * ---
 * 
 * <Party Artifact>
 * <Troop Artifact>
 * 
 * <Stackable Party Artifact>
 * <Stackable Troop Artifact>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped at all. However, by simply being in the
 *   party's inventory, its parameter bonuses and traits will be applied
 *   globally throughout the whole party or troop (depending on the notetag).
 * - Add both notetags to affect both groups.
 * - The normal versions of the notetag is only applied once regardless of the
 *   number of copies are found in the party's inventory.
 * - The stackable versions of the notetag will have the bonuses and traits
 *   stacked multiple times relative to the number of copies found in the
 *   party's inventory.
 * - This item will NOT be added during the setup phase for Battle Tests.
 *   - If you want to add the item, do it manually.
 * 
 * ---
 * 
 * <Equip For Class Only: x>
 * <Equip For Classes Only: x, x, x>
 * <Equip For Class Only: name>
 * <Equip For Classes Only: name, name, name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - This piece of equipment can only be worn by members with 'x' as the main
 *   class. If there are multiple classes listed, at least one of them need to
 *   be the actor's main class.
 * - Replace 'x' with a number representing the ID of the class required.
 * - For the 'name' variant, replace 'name' with the name of the required class
 *   the actor needs to have in order to equip this object.
 * 
 * ---
 * 
 * <Equip Requirements>
 *  requirement
 *  requirement
 *  requirement
 * </Equip Requirements>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Defines a requirement(s) for the actor to meet in order for the equip item
 *   to be equippable.
 * - Failure to meet these requirements will cause the equipment to unequip
 *   automatically.
 *   - Keep in mind that in some cases, this will not happen immediately.
 *     Things like switches will require the actor to meet its cache clear
 *     in order to trigger the automatic unequip.
 *   - Some ways to trigger a cache clear would be to change the actor's HP/MP,
 *     or adding and then removing a state for the actor (preferrably an unused
 *     state that has no real effect).
 * - Replace 'requirement' with one of the settings bellow:
 * - Add multiple 'requirement' lines for more requirements.
 * 
 *   Requirements:
 *
 *   param > x
 *   param >= x
 *   param === x
 *   param <= x
 *   param < x
 *   - Replace 'param' with 'level', 'maxhp', 'maxmp', 'atk', 'def', 'mat',
 *     'mdf', 'agi', or 'luk'.
 *   - This will make the piece of equipment require the actor's base parameter
 *     to be greater than (>), greater than or equal to (>=), equal to (===),
 *     less than or equal to (<=), or less than (<).
 *   - This is NOT the value for the total parameter, only the base parameter.
 *   - The base parameter is calculated by the user's class parameter value and
 *     any bonuses received through permanent stat increases.
 *
 *   learned skill: x
 *   learned skill: name
 *   - This will make the piece of equipment require the actor to have learned
 *     skill 'x'. 
 *   - If 'name' is used, priority will be given to the skill with the highest
 *     ID in the database.
 *   - The actor needs to have LEARNED the skill. This means that if you have
 *     added a skill to the actor's kit through a trait, it will not count.
 *
 *   switch: x
 *   - This will require switch X to be on.
 *   - If it isn't, the piece of equipment cannot be worn.
 *   - Insert multiple of these to add more switches that are are required to
 *     be on.
 * 
 *   ***NOTE 1***
 *   There is no "class: x" for these equip requirements. Instead, use the
 *   <Equip For Class Only: x> notetags.
 * 
 *   ***NOTE 2***
 *   For those wondering where "unique only" is, that does not exist in this
 *   plugin. Instead, use the <Equip Copy Limit: x> notetag listed above.
 * 
 *   Example A:
 * 
 *     <Equip Requirements>
 *     level >= 20
 *     </Equip Requirements>
 * 
 *     - Requires the user to be at least level 20 in order to equip.
 * 
 *   Example B:
 * 
 *     <Equip Requirements>
 *     atk >= 50
 *     def <= 50
 *     </Equip Requirements>
 *     - Requires the user have at least 50 base ATK to equip.
 *     - Requires the user to be under 50 base DEF to equip.
 * 
 * ---
 * 
 * <Added EType: x>
 * <Added ETypes: x, x, x>
 * 
 * - Used for: Armor Notetags
 * - This is for armors only and does NOT work with weapons!
 * - Allows a piece of armor to belong to multiple ETypes. This means a glove
 *   can be equipped as "Armgear" or as an "Accessory" if you so choose.
 * - Replace 'x' with a number representing the ID of the EType you wish to add
 *   to the list of ETypes.
 *   - Insert multiple 'x' entries to add more than one EType ID.
 * 
 * ---
 * 
 * <Cursed>
 * 
 * - Used for: Weapon, Armor Notetags
 * - If this weapon or armor is equipped, it cannot manually be removed by the
 *   player until it is purified.
 * - To remove it, it must be done by event commands, script calls, or through
 *   the Purify-related Plugin Commands provided by this plugin.
 * - Once purified, the weapon or armor will become unequipped unless it has a
 *   purify transformation.
 *   - If the newly transformed weapon/armor is equippable, it will remain in
 *     the actor's equipment slots.
 * - If you are using VisuMZ_2_WeaponSwapSystem, weapons cannot become cursed
 *   in order to allow free weapon swapping. Weaponry will not be cursed
 *   if VisuMZ_2_WeaponSwapSystem is installed.
 * 
 * ---
 * 
 * <Purify Transform: id>
 * <Purify Transform: name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - If this notetag is present on a <Cursed> weapon or armor, then upon the
 *   actor receiving purification, the weapon or armor will transform into a
 *   different item.
 * - Replace 'id' with a number representing the transformed weapon/armor's ID.
 * - Replace 'name' with text representing the transformed weapon/armor's name.
 * - Weapons can only transform into weapons.
 * - Armors can only transform into armors.
 * 
 * ---
 *
 * === JavaScript Notetags: Equipment ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * adjust the parameter through code.
 *
 * ---
 *
 * <JS Parameters>
 *  MaxHP = code;
 *  MaxMP = code;
 *  ATK = code;
 *  DEF = code;
 *  MAT = code;
 *  MDF = code;
 *  AGI = code;
 *  LUK = code;
 * </JS Parameters>
 *
 * - Used for: Weapon, Armor Notetags
 * - Uses JavaScript to determine the values for the basic parameters based on
 *   the code used to calculate its value.
 * - The variables 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', and
 *   'LUK' are used to determine the finalized value of the parameter. This
 *   variable is case sensitive.
 * - If a parameter is not present, its value will be treated as +0.
 * 
 * '''WARNING!''' If you are trying to calculate a value based off a full
 * parameter value, such as "ATK = user.atk * 0.10", it's going to break and
 * will cause an infinite loop. Use base parameter values instead.
 *
 * ---
 *
 * === Status Window Notetags ===
 *
 * The following notetags will affect the Shop Status Window info. If for any
 * reason the data that is displayed is not to your liking or insufficient,
 * you can change it up using the following notetags.
 *
 * ---
 *
 * <Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Status Info>
 *
 * - Used for: Skill, Item Notetags
 * - If you do not like the generated data that's displayed, you can change it
 *   using this notetag to display what you want.
 * - Replace 'key' with one of the following:
 *   - Consumable
 *   - Quantity
 *   - Occasion
 *   - Scope
 *   - Speed
 *   - Success Rate
 *   - Repeat
 *   - Hit Type
 *   - Element
 *   - Damage Multiplier
 *   - HP Recovery
 *   - MP Recovery
 *   - TP Recovery
 *   - HP Damage
 *   - MP Damage
 *   - TP Damage
 *   - User TP Gain
 *   - Added Effects
 *   - Removed Effects
 * - Replace 'data' with the text data you want to visually appear. You may use
 *   text codes for this.
 * - This only affects info entries that are already visible and won't make
 *   other categories suddenly appear.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 *
 * <Custom Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Custom Status Info>
 *
 * - Used for: Skill, Item
 * - If you want custom categories and data to be displayed for your items that
 *   aren't provided by the Shop Status Window Info to begin with, you can use
 *   this notetag to add in your own entries.
 * - Replace 'key' with text of the exact label you want. You may use text
 *   codes for this.
 * - Replace 'data' with text of the exact text data you want. You may use text
 *   codes for this.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 * 
 * <Shop Picture Name: filename>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Enables a shop picture for the status window. This image can be seen in
 *   the item scene, shop scene, and skill scene if enabled.
 * - If this notetag is not used, there will be no image.
 * - Replace 'filename' with the filename of the graphic to use from the game
 *   project's img/pictures/ folder. Filenames are case sensitive. Leave out
 *   the filename extension from the notetag.
 * - Use the supporting notetags to determine where the image appears. If not,
 *   they will default to the background, fit to the window dimensions,
 *   centered at the middle of the window.
 * 
 * ---
 * 
 * <Shop Picture Layer: Background>
 * <Shop Picture Layer: Foreground>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines which layer the graphic will be drawn on.
 * - If the background layer is selected, the picture will appear behind the
 *   data text.
 * - If the foreground layer is selected, the picture will appear in front of
 *   the data text.
 * - If this notetag is not used, it will default to the background layer.
 * 
 * ---
 * 
 * <Shop Picture Max Width: x>
 * <Shop Picture Max Height: y>
 * <Shop Picture Max Dimensions: x, y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines the maximum width and/or height for the image.
 * - This means the image will be automatically scaled proportionally to that
 *   width or height as long as everything else does not break boundaries.
 * - Replace 'x' and 'y' with number values representing the maximum dimensions
 *   the image can be in pixels.
 * - If these notetags are not used, the image will be automatically scaled to
 *   the dimensions of the shop status window.
 * 
 * ---
 * 
 * <Shop Picture Alignment: Left>
 * <Shop Picture Alignment: Center>
 * <Shop Picture Alignment: Right>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the horizontal alignment for the image.
 * - Left, center, right determines how it's aligned horizontally if the
 *   image does not horizontally fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'center' alignment.
 * 
 * ---
 * 
 * <Shop Picture Position: Top>
 * <Shop Picture Position: Middle>
 * <Shop Picture Position: Bottom>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the vertical position for the image.
 * - Top, middle, bottom determines how it's positioned vertically if the
 *   image does not vertically fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'middle' position.
 * 
 * ---
 * 
 * <Shop Picture Offset X: +x>
 * <Shop Picture Offset X: -x>
 * 
 * <Shop Picture Offset Y: +y>
 * <Shop Picture Offset Y: -y>
 * 
 * <Shop Picture Offset: +x, +y>
 * <Shop Picture Offset: -y, -y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Offsets the X and Y positions of the image in the shop status window.
 * - X offsets adjust the horizontal position by x pixels.
 *   - Positive goes right.
 *   - Negative goes left.
 * - Y offsets adjust the horizontal position by y pixels.
 *   - Positive goes down.
 *   - Negative goes up.
 * - Replace 'x' and 'y' with number values representing the pixels to offset
 *   the image by. The '+' and '-' signs are required.
 * - If none of these notetags are used, there will be no offsets.
 * 
 * ---
 * 
 * <Shop Picture Opacity: x>
 * <Shop Picture Opacity: x%>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the opacity of the image used.
 * - When using 'x' and not 'x%', use a number between 0 and 255.
 *   - The closer to 0, the more transparent the image is.
 *   - The closer to 255, the more opaque the image is.
 * - When using 'x%' and not 'x', use a number between 0% and 100%.
 *   - The closer to 0%, the more transparent the image is.
 *   - The closer to 100%, the more opaque the image is.
 * 
 * ---
 *
 * === Shop Menu Notetags ===
 *
 * These notetags adjust how prices and such are managed inside the Shop Menu
 * as well as whether or not some items are visible depending on switch states.
 *
 * ---
 *
 * <Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Adjusts the buying price for this item.
 * - Replace 'x' with a number depicting the desired value for the buy price.
 * - This allows you to bypass the RPG Maker MZ editor's limitation of 999,999.
 *
 * ---
 *
 * <Can Sell>
 * <Cannot Sell>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Makes the item either always sellable or cannot be sold.
 * - This bypasses the game's internal hard-coding to prevent items with a
 *   price of 0 from being able to be sold.
 * - This bypasses the game's internal hard-coding to always allow items with
 *   a price value of being able to be sold.
 *
 * ---
 *
 * <Sell Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the sell price to be something different than the default amount.
 * - Replace 'x' with a number depicting the desired value for the sell price.
 *
 * ---
 *
 * <Show Shop Switch: x>
 *
 * <Show Shop All Switches: x,x,x>
 * <Show Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, item will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Shop Switch: x>
 *
 * <Hide Shop All Switches: x,x,x>
 * <Hide Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, item will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Cannot Sell Switch: x>
 *
 * <Cannot Sell All Switches: x,x,x>
 * <Cannot Sell Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the sellability of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's sellability.
 * - If 'All' notetag variant is used, item cannot be sold until all switches
 *   are ON. Otherwise, it can be sold.
 * - If 'Any' notetag variant is used, item cannot be sold if any of the
 *   switches are ON. Otherwise, it can be sold.
 *
 * ---
 * 
 * <Buy Turn On Switch: x>
 * <Buy Turn On Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is bought in the shop scene, turn on the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn on.
 *   - Insert multiple 'x' values to turn on multiple switches upon buying.
 * 
 * ---
 * 
 * <Buy Turn Off Switch: x>
 * <Buy Turn Off Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is bought in the shop scene, turn off the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn off.
 *   - Insert multiple 'x' values to turn off multiple switches upon buying.
 * 
 * ---
 * 
 * <Sell Turn On Switch: x>
 * <Sell Turn On Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is sold in the shop scene, turn on the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn on.
 *   - Insert multiple 'x' values to turn on multiple switches upon selling.
 * 
 * ---
 * 
 * <Sell Turn Off Switch: x>
 * <Sell Turn Off Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is sold in the shop scene, turn off the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn off.
 *   - Insert multiple 'x' values to turn off multiple switches upon selling.
 * 
 * ---
 *
 * === JavaScript Notetags: Shop Menu ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Buy and Sell prices.
 *
 * ---
 *
 * <JS Buy Price>
 *  code
 *  code
 *  price = code;
 * </JS Buy Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the buying 'price' of the item.
 * - Insert the final buy price into the 'price' variable.
 * - The 'item' variable refers to the item being bought.
 *
 * ---
 *
 * <JS Sell Price>
 *  code
 *  code
 *  price = code;
 * </JS Sell Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the selling 'price' of the item.
 * - Insert the final sell price into the 'price' variable.
 * - The 'item' variable refers to the item being sold.
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
 * Actor: Change Equip Slots
 * - Forcefully change the actor(s) equip slots.
 * - These will persist through class changes.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Equip Slots:
 *   - Insert the equip slots you want the actor(s) to have.
 *   - These entries are case-sensitive.
 *
 * ---
 *
 * Actor: Reset Equip Slots
 * - Reset any forced equip slots for the actor(s).
 * - Equip slots will then be based on class.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Purify Plugin Commands ===
 * 
 * ---
 * 
 * Purify: Target Actor(s)
 * - Purifies target actor(s) of any cursed weapons or armors.
 * - Cannot be used in battle.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 * ---
 * 
 * Purify: Whole Party
 * - Purifies whole party of any cursed weapons or armors.
 * - Cannot be used in battle.
 * 
 * ---
 * 
 * === Shop Plugin Commands ===
 * 
 * ---
 *
 * Shop: Advanced
 * - Make it easier to put together inventories for a shop.
 * - WARNING: Does not allow for event-specific prices.
 *
 *   Step 1: Item ID's
 *   - Select which Item ID ranges to add.
 *
 *   Step 2: Weapon ID's
 *   - Select which Weapon ID ranges to add.
 *
 *   Step 3: Armor ID's
 *   - Select which Armor ID ranges to add.
 *
 *   Step 4: Purchase Only?
 *   - Make the shop purchase-only?
 * 
 *   Optional:
 * 
 *     Blacklist
 *     - A list of categories to blacklist from the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 * 
 *     Whitelist
 *     - A list of categories to whitelist for the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 *
 * This Plugin Command primarily functions as an alternative to the editor's
 * "Shop Processing" event command as that one requires you to add items one at
 * a time, making it extremely tedious to add large amounts of items. This
 * Plugin Command will mitigate that by allowing ID ranges to determine which
 * items to make available.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Menu Settings
 * ============================================================================
 *
 * The Item Menu Settings allow you to adjust specifics on how key objects and
 * windows in the Item Menu Scene operate.
 *
 * ---
 *
 * General Window
 *
 *   Use Updated Layout:
 *   - Use the Updated Item Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *
 * ---
 *
 * Item Quantity
 *
 *   Item Max:
 *   Weapon Max:
 *   Armor Max:
 *   - The default maximum quantity for items, weapons, and/or armors.
 * 
 *   Quantity Format:
 *   - How to display an item's quantity.
 *   - %1 - Item Quantity
 *
 *   Font Size:
 *   - Default font size for item quantity.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Item Menu?:
 *   - Show the Shop Status Window in the Item Menu?
 *   - This is enabled if the Updated Layout is on.
 *
 *   Adjust List Window?:
 *   - Automatically adjust the Item List Window in the Item Menu if using the
 *     Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 *
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Status Window in the
 *     Item Menu.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Switch Category:
 *   - Button assist text used for switching categories.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Categories
 * ============================================================================
 *
 * Item Categories appear both in the Item Menu Scene and Shop Menu Scene (but
 * only under the Sell command). These Plugin Parameters give you the ability
 * to add in the specific categories you want displayed, remove the ones you
 * don't, and associate them with icons.
 *
 * ---
 *
 * List
 *
 *   Category List
 *   - A list of the item categories displayed in the Item/Shop menus.
 * 
 *     Type:
 *     - A list of the item categories displayed in the Item/Shop menus.
 *     - Replace x with ID numbers or text.
 *     - AllItems, RegularItems, KeyItems
 *     - HiddenItemA, HiddenItemB
 *     - Consumable, Nonconsumable
 *     - AlwaysUsable, BattleUsable, FieldUsable, NeverUsable
 *     - AllWeapons, WType:x
 *     - AllArmors, AType:x, EType:x
 *     - Category:x
 * 
 *     Icon:
 *     - Icon used for this category.
 *     - Use 0 for no icon.
 * 
 *     Visibility Switch:
 *     - This Switch must be turned ON in order for the category to show.
 *     - Use 0 for no Switch requirement.
 * 
 *     Sort By:
 *     - Sort this category (in Scene_Item and Scene_Shop only) this way.
 *
 *   Style:
 *   - How do you wish to draw categorie entries in the Category Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 *
 *   Text Alignment
 *   - Decide how you want the text to be aligned.
 *
 * ---
 *
 * Vocabulary
 *
 *   Hidden Item A
 *   Hidden Item B
 *   Consumable
 *   Nonconsumable
 *   Always Usable
 *   Battle Usable
 *   Field Usable
 *   Never Usable
 *   - How these categories are named in the Item Menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: NEW! Labels
 * ============================================================================
 *
 * Whenever the player receives a new item(s), a NEW! Label can be placed on
 * top of the item's icon when browsing a menu displaying the item(s). This is
 * a quality of life addition from more modern RPG's to help players figure out
 * what they've recently received. The following are Plugin Parameters made to
 * adjust how the NEW! Labels are handled in-game.
 *
 * ---
 *
 * NEW! Labels
 * 
 *   Use NEW! Labels?:
 *   - Use the NEW! Labels or not?
 * 
 *   Icon:
 *   - The icon index used to represent the NEW! text.
 *   - Use 0 to not draw any icons.
 * 
 *   Text:
 *   - The text written on the NEW! Label.
 * 
 *     Font Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Font Size:
 *     - The font size used for the NEW! text.
 * 
 *   Fade Limit:
 *   - What's the upper opaque limit before reversing?
 * 
 *   Fade Speed:
 *   - What's the fade speed of the NEW! Label?
 * 
 *   Offset X:
 *   - How much to offset the NEW! Label's X position by.
 * 
 *   Offset Y:
 *   - How much to offset the NEW! Label's Y position by.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Equip Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust the Equipment Menu Scene, ranging from using
 * a more updated and modern layout, changing the styles of other windows, and
 * other key visual aspects of the Equip Menu Scene. Other settings here allow
 * you to adjust how equipment operate under certain rulings, too.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Equip Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 * 
 *     Param Font Size:
 *     - The font size used for parameter values.
 * 
 *     Show Menu Portraits?:
 *     - If Main Menu Core is installed, display the Menu Portraits instead of
 *       the actor's face in the status window?
 * 
 *     JS: Portrait Upper:
 *     - If Menu Portraits are available, this is code used to draw the upper
 *       data like this in the Status Window.
 * 
 *     JS: Face Upper:
 *     - If faces used used, this is code used to draw the upper data like this
 *       in the Status Window.
 * 
 *     JS: Parameter Lower:
 *     - Code to determine how parameters are drawn in the Status Window.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 * 
 *   Status Window Width:
 *   - The usual width of the status window if using the non-Updated Equip
 *     Menu Layout.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *   Cursed Equip Popup:
 *   - Text popup appears when an actor equips a cursed weapon/armor.
 *   - Text codes allowed.
 *   - Requires VisuMZ_0_CoreEngine!
 *   - Empty to not use.
 *   -  %1 - Actor, %2 - Equip, %3 - Icon.
 *
 * ---
 *
 * Command Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Equip Icon:
 *   - The icon used for the Equip command.
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *   Add Optimize Command?:
 *   - Add the "Optimize" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Optimize Icon:
 *     - The icon used for the Optimize command.
 * 
 *   Add Clear Command?:
 *   - Add the "Clear" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Clear Icon:
 *     - The icon used for the Clear command.
 *
 * ---
 *
 * Remove Equip
 * 
 *   Icon:
 *   - Icon used for equipment removal.
 * 
 *   Text:
 *   - Text used for equipment removal.
 * 
 *   Use SHIFT Shortcut?:
 *   - Add the "Shift" button as a shortcut key to removing items?
 *
 * ---
 *
 * Rulings
 * 
 *   Equip-Adjust HP/MP:
 *   - Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * 
 *   Non-Removable Types:
 *   - Insert ID's of the Equipment Types that must always have an item
 *     equipped and cannot be empty.
 * 
 *   Non-Optimized Types:
 *   - Insert ID's of the Equipment Types that will be ignored when equipment
 *     is being optimized.
 *
 * ---
 *
 * Button Assist Window
 *
 *   SHIFT: Remove:
 *   - Button assist text used for the SHIFT Remove Shortcut.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you a number of options to adjust the Shop
 * Menu Scene. These options range from enabling an updated and modern layout,
 * adjust how various key visual aspects appear, and determine how prices can
 * be affected when it comes to selling them or buying them (for coders).
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Shop Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 * 
 * Switches:
 * 
 *   Switch: Buy:
 *   - Buying items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 *   Switch: Sell
 *   - Selling items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 * ---
 *
 * Command Window
 * 
 *   Hide Unavailable?:
 *   - Hide all unavailable commands like when a shop is set to Purchase Only?
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Buy Icon:
 *   - The icon used for the Buy command.
 * 
 *   Sell Icon:
 *   - The icon used for the Sell command.
 * 
 *   Cancel Icon:
 *   - The icon used for the Cancel command.
 * 
 *   Rename "Cancel":
 *   - Rename Cancel to something more logical for the Shop Menu Scene.
 *
 * ---
 *
 * Prices
 * 
 *   Sell Price Rate:
 *   - The default sell price rate.
 * 
 *   JS: Buy Price:
 *   - Modificatons made to the buy price before finalizing it.
 * 
 *   JS: Sell Price:
 *   - Modificatons made to the sell price before finalizing it.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Small Increment:
 *   Large Increment:
 *   - Text used for changing amount bought/sold.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Status Window
 * ============================================================================
 *
 * These Plugin Parameters focuses on the Shop Status Window and determines how
 * its data is displayed.
 *
 * ---
 *
 * General
 * 
 *   Window Width:
 *   - The usual width of the status window.
 * 
 *   Parameter Font Size:
 *   - Font size used for parameter changes.
 * 
 *   Translucent Opacity:
 *   - Opacity setting used for translucent window objects.
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
 * Equipment Data
 * 
 *   Already Equipped:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   Can't Equip:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   Delay MS:
 *   - How many milliseconds (MS) to delay the preview update?
 *   - This is to prevent lag spikes for equips only.
 * 
 *   No Changes:
 *   - Marker used to show no changes have occurred.
 * 
 *   JS: Draw Equip Data:
 *   - Code used to draw the equipment data for the Shop Status Window.
 *
 * ---
 *
 * Item Data
 * 
 *   Max State/Buff Icons:
 *   - Maximum number of icons that can be displayed for Add/Remove
 *     States/Buffs.
 * 
 *   Multiplier Standard:
 *   - Constant standard to filter out random values when calculating the
 *     damage multiplier.
 * 
 *   JS: Draw Item Data:
 *   - Code used to draw the item data for the Shop Status Window.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Consumable:
 *   Occasions:
 *   Scope:
 *   Speed:
 *   Success Rate:
 *   Repeats:
 *   Hit Type:
 *   Element:
 *   Damage Type:
 *   Effects:
 *   - Vocabulary used for these data entries.
 *   - Some of these have Plugin Parameters have sub-entries.
 * 
 *   NOTE: Regarding Damage Labels
 * 
 *   If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * 
 *   Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
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
 * Version 1.53: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added warning to <JS Parameters>:
 * *** If you are trying to calculate a value based off a full parameter value,
 *     such as "ATK = user.atk * 0.10", it's going to break and will cause an
 *     infinite loop. Use base parameter values instead.
 * * New Features!
 * ** New notetags added by Irina:
 * *** <ID Sort Priority: x>
 * **** Used for Scene_Item, Scene_Equip, Scene_Battle, and Scene_Shop's sell
 *      option (only when selling).
 * **** Changes sorting priority by ID for item, weapon, or armor to 'x'. 
 * **** Default priority level is '50'.
 * **** Items, weapons, and armors with higher priority values will be sorted
 *      higher up on the list while lower values will be lower on the list.
 * 
 * Version 1.52: May 16, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Item Categories > Category List > Category > Sorted By:
 * **** You can now sort specific item categories by ID or Name.
 * **** Only usable within Scene_Item and Scene_Shop.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.51: December 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where if an item is unequipped, it may cause a crash. Fix
 *    made by Arisu.
 * ** Fixed a bug where <Proxy: id> did not properly give the proxy item. Fix
 *    made by Arisu.
 * 
 * Version 1.50: November 16, 2023
 * * Bug Fixes!
 * ** <JS Buy Price> and <JS Sell Price> was not working properly. Fix made
 *    by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Cursed>
 * **** If this weapon or armor is equipped, it cannot manually be removed by
 *      the player until it is purified.
 * **** To remove it, it must be done by event commands, script calls, or
 *     through the Purify-related Plugin Commands provided by this plugin.
 * **** Once purified, the weapon or armor will become unequipped unless it has
 *     a purify transformation.
 * **** If the newly transformed weapon/armor is equippable, it will remain in
 *     the actor's equipment slots.
 * **** If you are using VisuMZ_2_WeaponSwapSystem, weapons cannot become
 *      cursed in order to allow free weapon swapping. Weaponry will not be
 *      cursed if VisuMZ_2_WeaponSwapSystem is installed.
 * *** <Purify Transform: id>
 * *** <Purify Transform: name>
 * **** If this notetag is present on a <Cursed> weapon or armor, then upon the
 *      actor receiving purification, the weapon or armor will transform into a
 *      different item.
 * ** New Plugin Commands added by Arisu:
 * *** Purify: Target Actor(s)
 * **** Purifies target actor(s) of any cursed weapons or armors.
 * *** Purify: Whole Party
 * **** Purifies whole party of any cursed weapons or armors.
 * ** Added "Cursed Equip Popup" to Equip Scene Plugin Parameters.
 * *** Text popup appears when an actor equips a cursed weapon/armor.
 * ** Added "Ally or Enemy" or "Enemy or Ally" scopes to Shop Status Window
 *    Plugin Parameters.
 * *** If unused, will default to "1 Ally" or "1 Enemy" like usual.
 *     Added by Irina.
 * 
 * Version 1.49: October 12, 2023
 * * Bug Fixes!
 * ** Fixed a problem where for weapon types, all weapon types are listed in
 *    the equip menu even when the actor cannot equip them (though they would
 *    be disabled). Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Olivia and sponsored by AndyL:
 * *** <Added EType: x>
 * *** <Added ETypes: x, x, x>
 * **** This is for armors only and does NOT work with weapons!
 * **** Allows a piece of armor to belong to multiple ETypes. This means a
 *      glove can be equipped as "Armgear" or as an "Accessory" if you so
 *      choose.
 * 
 * Version 1.48: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a problem where the help window position of the non-updated layout
 *    would appear in the wrong position. Fix made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized when weapons and armors exceed 2000
 *    in database quantity.
 * 
 * Version 1.47: July 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause the shop status window to display incorrect
 *    removed buffs and debuffs. Fix made by Olivia.
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Changes made to dynamic shop listings in order to update upon listing
 *    changes rather than having to enter and exit the shop again. Update made
 *    by Arisu.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by AndyL:
 * *** <Conserve: x%>
 * **** Gives the item a percent chance when used to not consume the item.
 * *** <Buy Turn On Switches: x, x, x>
 * *** <Buy Turn Off Switches: x, x, x>
 * *** <Sell Turn On Switches: x, x, x>
 * *** <Sell Turn Off Switches: x, x, x>
 * **** When buying/selling an item, weapon, or armor with these notetags,
 *      turn on/off switch(es) 'x'.
 * *** New Plugin Parameters added by Arisu:
 * **** Params > Settings > Shop Status Window > Equipment Data > Delay MS:
 * ***** How many milliseconds (MS) to delay the preview update?
 * ***** This is to prevent lag spikes for equips only.
 * 
 * Version 1.46: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a problem where the help and input modes are not adequately
 *    adjusted when not used with the updated layout or without the Options
 *    Core custom UI placement. Fix made by Arisu.
 * 
 * Version 1.45: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause equip slots to not be recognized properly if
 *    the equip slot name ends in a space.
 * 
 * Version 1.44: April 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by Anon:
 * *** <Equip For Class Only: x>
 * *** <Equip For Classes Only: x, x, x>
 * *** <Equip For Class Only: name>
 * *** <Equip For Classes Only: name, name, name>
 * **** The piece of equipment can only be worn by the listed classes.
 * *** <Equip Requirements> notetag added.
 * **** Define multiple requirements that the actor needs to meet in order for
 *      this equip item to be equippable.
 * **** See help file for more information on the types of requirements that
 *      can be added.
 * 
 * Version 1.43: March 16, 2023
 * * Bug Fixes!
 * ** Artifact armors should now update and refresh the party members' cache
 *    upon acquisition. Fix made by Olivia.
 * 
 * Version 1.42: February 16, 2023
 * * Bug Fixes!
 * ** Proxy items should no longer cause infinite loops if they're made to
 *    reference other proxy items in a circular fashion. Instead, they just
 *    give the exact first found proxy instead of cycling through others.
 *    Fix made by Arisu.
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by Anon:
 * *** Equip Scene > Equip Command > Help Description
 * *** Equip Scene > Optimize Command > Help Description
 * *** Equip Scene > Clear Command > Help Description
 * **** Help description used when these commands are selected.
 * 
 * Version 1.40: October 20, 2022
 * * Feature Update!
 * ** For the shop status window, when comparing equipment of a type where
 *    there are multiple equipment slots (such as accessories), the plugin will
 *    now check for an empty equipment slot first and then make calculations
 *    there. Otherwise, it will use the first available equipment slot of that
 *    type regardless of the equipped item. Update made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.39: September 29, 2022:
 * * Feature Update!
 * ** Changed the default code for the equip scene's status window display to
 *    prevent the face graphic and basic actor stats from going above the
 *    window boundaries if there are too many parameters displayed in the
 *    status window at a time.
 * ** If you already have this plugin installed the changes will not be
 *    reflected unless you do the following:
 * **** BACKUP your game project.
 * **** REMOVE this plugin from the Plugin Manager list.
 * **** REINSTALL this plugin into the Plugin Manager list.
 * **** SAVE the game project.
 * 
 * Version 1.38: March 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New mechanics and notetags added by Olivia and sponsored by Anon:
 * *** <Party Artifact>
 * *** <Troop Artifact>
 * *** <Stackable Party Artifact>
 * *** <Stackable Troop Artifact>
 * **** Armors only! This armor cannot be equipped at all. However, by simply
 *      being in the party's inventory, its parameter bonuses and traits will
 *      be applied globally throughout the whole party or troop (depending on
 *      the notetag). Add both notetags to affect both groups.
 * **** The normal versions of the notetag is only applied once regardless of
 *      the number of copies are found in the party's inventory.
 * **** The stackable versions of the notetag will have the bonuses and traits
 *      stacked multiple times relative to the number of copies found in the
 *      party's inventory.
 * **** This item will NOT be added during the setup phase for Battle Tests.
 * ***** If you want to add the item, do it manually.
 * 
 * Version 1.37: December 23, 2021
 * * Compatibility Update
 * ** Created foundation for proxy items to be used in any applicable system
 *    and extension plugins. Update made by Arisu.
 * 
 * Version 1.36: December 2, 2021
 * * Feature Update!
 * ** For those using custom parameters from the Core Engine and do not have
 *    the parameters all-capitalized, the plugin will automatically do it for
 *    you to prevent errors. Update made by Olivia.
 * 
 * Version 1.35: November 18, 2021
 * * Compatibility Update!
 * ** If this plugin's updated scene is disabled, the Help Window locations for
 *    the Item, Equip, and Shop Scenes should now be at their designated
 *    locations as calculated by the VisuMZ Core Engine instead of the RMMZ
 *    default location. Update made by Irina.
 * 
 * Version 1.34: October 28, 2021
 * * Feature Update
 * ** Added fail safe checks for projects that are using old data for starting
 *    equipment that no longer exist, thus preventing the game from opening.
 *    Update made by Arisu.
 * 
 * Version 1.33: August 6, 2021
 * * Documentation Update!
 * ** Removed "Weapon" and "Armor" from "Used For" for <Status Info>. This was
 *    an unintended piece of documentation.
 * 
 * Version 1.32: July 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that would cause armor duplication when changing to classes
 *    with unaligned equipment slot types. Fix made by Arisu.
 * 
 * Version 1.31: July 9, 2021
 * * Feature Update!
 * ** Added a failsafe for price manipulation JavaScript to never have prices
 *    drop below 0 if possible. Update made by Arisu.
 * 
 * Version 1.30: July 2, 2021
 * * Documentation Update!
 * ** Added an extra note to the help file for the following:
 *    Plugin Parameters > Item Menu Settings > List Window > Columns
 * *** If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *    
 * 
 * Version 1.29: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Feature Update!
 * ** Phantom data when changing equipment types in the database should no
 *    longer affect actors with cached equip ID's. Update made by Arisu.
 * 
 * Version 1.28: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.27: May 21, 2021
 * * Bug Fixes!
 * ** Using the mouse right click in the Equip Scene while inside of the item
 *    to slot window will no longer exit the Equip Scene. Fix made by Yanfly.
 * 
 * Version 1.26: April 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** "VisuStella MZ Compatibility" added VisuMZ_1_BattleCore section regarding
 *    Damage Multiplier and Healing Multiplier vocabulary settings to reduce
 *    commonly asked questions.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Archeia:
 * *** <Shop Picture Name: filename>
 * *** <Shop Picture Layer: x>
 * *** <Shop Picture Max Width: x>
 * *** <Shop Picture Max Height: y>
 * *** <Shop Picture Max Dimensions: x, y>
 * *** <Shop Picture Alignment: x>
 * *** <Shop Picture Position: y>
 * *** <Shop Picture Offset X: +x>
 * *** <Shop Picture Offset X: -x>
 * *** <Shop Picture Offset Y: +y>
 * *** <Shop Picture Offset Y: -y>
 * *** <Shop Picture Offset: +x, +y>
 * *** <Shop Picture Offset: -x, -y>
 * *** <Shop Picture Opacity: x>
 * *** <Shop Picture Opacity: x%>
 * **** Add images from the game project's img/pictures/ folder to display in
 *      the Shop Status Window.
 * 
 * Version 1.25: April 23, 2021
 * * Documentation Update!
 * ** Added clarity to the <param: +x> and <param: -x> notetags:
 * *** These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * 
 * Version 1.24: April 16, 2021
 * * Bug Fixes!
 * ** Changing an actor's equipment slots to past their original amount will no
 *    longer yield errors with duplicate slot types. Fix made by Arisu.
 * ** Completely selling an item should now refresh the help window to the new
 *    selected item's help description. Fix made by Arisu.
 * * Optimization Update!
 * ** Non-removable equipment restrictions for the equipment scene are now
 *    better optimized. Update made by Olivia.
 * 
 * Version 1.23: April 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_4_BreakShields plugin.
 * 
 * Version 1.21: March 5, 2021
 * * Feature Update!
 * ** Custom equipment slots are disabled during Battle Testing for better
 *    accuracy and results.
 * 
 * Version 1.20: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Buy
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Sell
 * **** Buying/selling items in the Shop Scene turns this Switch to ON.
 * **** Switch reverts to OFF whenever the Shop Scene opens.
 * **** These switches can be used after a "Shop Processing" event command to
 *      determine if the player has bought an item, bought and sold an item,
 *      sold an item, or neither.
 * 
 * Version 1.19: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina.
 * *** <Equip Copy Limit: x>
 * **** Sets a maximum number of copies that the actor can wear of this
 *      equipment. Usage Example: Actors can only equip one copy of the
 *      "One-of-a-Kind Ring" on at any time despite having empty accessory
 *      slots because the ring has a <Equip Copy Limit: 1> notetag.
 * *** <Equip Weapon Type Limit: x>
 * **** This weapon cannot be equipped with other weapons of the same type once
 *      the limited amount has been reached. Usage Example: A dualwielding
 *      warrior who can only equip one sword and a dagger but never two swords
 *      or two daggers because the swords and daggers all have the
 *      <Equip Weapon Type Limit: 1> notetags on them.
 * *** <Equip Armor Type Limit: x>
 * **** This armor cannot be equipped with other armors of the same type once
 *      the limited amount has been reached. Usage Example: People cannot equip
 *      more than two glove accessories on at a time because the glove is a
 *      "Glove" armor-type and each glove item has the
 *      <Equip Armor Type Limit: 2> notetags on them.
 * 
 * Version 1.18: January 15, 2021
 * * Bug Fixes!
 * ** Pressing "Shift" to remove equipment will now refresh the status window
 *    unlike before. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Item Menu Settings > Background Type
 * 
 * Version 1.17: January 1, 2021
 * * Bug Fixes!
 * ** Equipping should be working properly again. Fix made by Yanfly.
 * 
 * Version 1.16: December 25, 2020
 * * Bug Fixes!
 * ** Equip-Adjust HP/MP should work properly now. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that if the VisuStella
 *    Battle Core is installed, then all battle scope items are visible, but
 *    not necessarily enabled if they are disabled otherwise.
 * 
 * Version 1.15: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that it removes the
 *    usable item from visibility as well if the actor unable to use it is the
 *    only person in the party.
 * 
 * Version 1.14: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.13: December 4, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Actor: Change Equip Slots
 * *** Actor: Reset Equip Slots
 * **** These plugin commands allow you to forcefully change the equip slots
 *      available to an actor regardless of the slots provided by its class as
 *      well as reset them.
 * 
 * Version 1.12: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 8, 2020
 * * Bug Fix!
 * ** Font size ratio for the shop status window now scales to a hard coded
 *    value to prevent smaller font sizes from expanding icon sizes. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Currency display in the shop menu is now reflected upon how the plugin
 *    parameters set them to display. Update made by Arisu.
 * 
 * Version 1.10: November 1, 2020
 * * Feature Update!
 * ** Modern Controls compatibility with Core Engine no longer enables the
 *    Item Categories window and child classes to utilize the Home/End keys.
 * 
 * Version 1.09: October 25, 2020
 * * Bug Fixes!
 * ** "All Items" category should now display the "Items" text. Fix by Irina.
 * ** WType, AType, and EType categories now work with text. Fix by Irina.
 *
 * Version 1.08: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: October 11, 2020
 * * Bug Fixes!
 * ** XParams and SParams in the Window_EquipStatus window will no longer show
 *    a non-percentile difference if the original value is not a whole value.
 *    Fix made by Yanfly.
 * 
 * Version 1.06: October 4, 2020
 * * Bug Fixes!
 * ** Select Item event command now displays the default amount of columns
 *    instead of whatever setting is made with the plugin parameters.
 * 
 * Version 1.05: September 27, 2020
 * * Bug Fixes!
 * ** When using the updated shop layout, leaving the sell option will no
 *    longer cause the dummy window to appear.
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Pressing Shift to quickly remove equipment should no longer crash the
 *    game. This will also clear the help window text. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** If both Optimize and Clear commands have been removed and using modern
 *    controls, pressing up at the top of the slot window list will not go to
 *    the window. Fix made by Yanfly.
 * ** If both Optimize and Clear commands have been removed, the window will no
 *    longer appear and the slot window will be moved upward to fill any empty
 *    spaces. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added in NEW! Label to let you adjust the font face.
 * ** New Plugin Parameters added in Equip Menu Scene Settings for disabling
 *    the back rectangles and/or changing their colors.
 * ** New Plugin Parameters added in Shop Status Window Settings for disabling
 *    the back rectangles and/or changing their colors.
 * 
 * Version 1.02: August 30, 2020
 * * Documentation Fix!
 * ** Added: NOTE: Regarding Damage Labels
 * *** If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * *** Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 * *** Documentation update added by Yanfly.
 * 
 * Version 1.01: August 23, 2020
 * * Added failsafe to prevent non-existent equipment (because the database
 *   entries have been deleted) from being equipped as initial equipment.
 *   Fix made by Olivia.
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
 * @command ActorChangeEquipSlots
 * @text Actor: Change Equip Slots
 * @desc Forcefully change the actor(s) equip slots.
 * These will persist through class changes.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 * 
 * @arg Slots:arraystr
 * @text Equip Slots
 * @type string[]
 * @desc Insert the equip slots you want the actor(s) to have.
 * These entries are case-sensitive.
 * @default ["Weapon","Shield","Head","Body","Accessory"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorResetEquipSlots
 * @text Actor: Reset Equip Slots
 * @desc Reset any forced equip slots for the actor(s).
 * Equip slots will then be based on class.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Purify
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PurifyActors
 * @text Purify: Target Actor(s)
 * @desc Purifies target actor(s) of any cursed weapons or armors.
 * Cannot be used in battle.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PurifyParty
 * @text Purify: Whole Party
 * @desc Purifies whole party of any cursed weapons or armors.
 * Cannot be used in battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Shop
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BatchShop
 * @text Shop: Advanced
 * @desc Make it easier to put together inventories for a shop.
 * WARNING: Does not allow for event-specific prices.
 *
 * @arg Step1
 * @text Step 1: Item ID's
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type item
 * @desc Select which Item ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type item
 * @desc Select which Item ID to end at.
 * @default 4
 *
 * @arg Step2
 * @text Step 2: Weapon ID's
 *
 * @arg Step2Start:num
 * @text Range Start
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to start from.
 * @default 1
 *
 * @arg Step2End:num
 * @text Range End
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to end at.
 * @default 4
 *
 * @arg Step3
 * @text Step 3: Armor ID's
 *
 * @arg Step3Start:num
 * @text Range Start
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to start from.
 * @default 1
 *
 * @arg Step3End:num
 * @text Range End
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to end at.
 * @default 4
 *
 * @arg PurchaseOnly:eval
 * @text Step 4: Purchase Only?
 * @type boolean
 * @on Purchase-Only
 * @off Sell Accessible
 * @desc Make the shop purchase-only?
 * @default false
 * 
 * @arg Optional
 * 
 * @arg Blacklist:arraystr
 * @text Blacklisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to blacklist from the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 * 
 * @arg Whitelist:arraystr
 * @text Whitelisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to whitelist for the shop.
 * Not used if empty. Mark categories with <Category: x>
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
 * @param ItemsEquipsCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemScene:struct
 * @text Item Menu Settings
 * @type struct<ItemScene>
 * @desc Change the Item Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","ListWindow":"","ListWindowCols:num":"1","ItemQt":"","MaxItems:num":"99","MaxWeapons:num":"99","MaxArmors:num":"99","ItemQuantityFmt:str":"×%1","ItemQuantityFontSize:num":"22","ShopStatusWindow":"","ShowShopStatus:eval":"true","ItemSceneAdjustItemList:eval":"true","ItemMenuStatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._itemWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._itemWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","ButtonAssist":"","buttonAssistCategory:str":"Switch Category"}
 *
 * @param Categories:struct
 * @text Item Categories
 * @parent ItemScene:struct
 * @type struct<Categories>
 * @desc Change the categories displayed in the Item/Shop menus.
 * @default {"MainList":"","List:arraystruct":"[\"{\\\"Type:str\\\":\\\"FieldUsable\\\",\\\"Icon:num\\\":\\\"208\\\"}\",\"{\\\"Type:str\\\":\\\"BattleUsable\\\",\\\"Icon:num\\\":\\\"218\\\"}\",\"{\\\"Type:str\\\":\\\"NeverUsable\\\",\\\"Icon:num\\\":\\\"302\\\"}\",\"{\\\"Type:str\\\":\\\"AllWeapons\\\",\\\"Icon:num\\\":\\\"97\\\"}\",\"{\\\"Type:str\\\":\\\"EType:2\\\",\\\"Icon:num\\\":\\\"128\\\"}\",\"{\\\"Type:str\\\":\\\"EType:3\\\",\\\"Icon:num\\\":\\\"131\\\"}\",\"{\\\"Type:str\\\":\\\"EType:4\\\",\\\"Icon:num\\\":\\\"137\\\"}\",\"{\\\"Type:str\\\":\\\"EType:5\\\",\\\"Icon:num\\\":\\\"145\\\"}\",\"{\\\"Type:str\\\":\\\"KeyItems\\\",\\\"Icon:num\\\":\\\"195\\\"}\"]","Style:str":"icon","TextAlign:str":"center","Vocabulary":"","HiddenItemA:str":"Special Items","HiddenItemB:str":"Unique Items","Consumable:str":"Consumable","Nonconsumable:str":"Nonconsumable","AlwaysUsable:str":"Usable","BattleUsable:str":"Battle","FieldUsable:str":"Field","NeverUsable:str":"Materials"}
 *
 * @param New:struct
 * @text NEW! Labels
 * @parent ItemScene:struct
 * @type struct<NewLabel>
 * @desc Change how NEW! Labels apply to your game project.
 * @default {"Enable:eval":"true","Icon:num":"0","Text:str":"NEW!","FontColor:str":"17","FontFace:str":"Verdana","FontSize:str":"16","FadeLimit:num":"360","FadeSpeed:num":"4","OffsetX:num":"0","OffsetY:num":"4"}
 *
 * @param EquipScene:struct
 * @text Equip Menu Settings
 * @type struct<EquipScene>
 * @desc Adjust the settings regarding the Equip Menu Scene.
 * @default {"General":"","EnableLayout:eval":"true","ParamValueFontSize:num":"22","MenuPortraits:eval":"true","DrawPortraitJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst x1 = padding;\\nconst x2 = this.innerWidth - 128 - padding;\\n\\n// Draw Menu Image\\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\\n\\n// Draw Data\\nthis.drawActorName(this._actor, x1, lineHeight * 0);\\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);\"","DrawFaceJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst x = Math.floor(this.innerWidth / 2);\\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\\nlet dataHeight = lineHeight * 3;\\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\\n\\n// Draw Data\\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);\"","DrawParamJS:func":"\"// Declare variables\\nconst params = this.actorParams();\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst baseX = 0;\\nconst baseY = this.innerHeight - params.length * lineHeight;\\nconst baseWidth = this.innerWidth;\\nconst valueFontSize = this.paramValueFontSize();\\n\\n// Calculate Widths\\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\\nparamNameWidth += padding * 2;\\nif (this.isUseParamNamesWithIcons()) {\\n    paramNameWidth += ImageManager.iconWidth + 4;\\n}\\nlet arrowWidth = this.rightArrowWidth();\\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\\n\\n// Draw Parameters\\nlet x = baseX;\\nlet y = baseY;\\nlet value = 0;\\nlet diffValue = 0;\\nlet alter = 2;\\nfor (const paramId of params) {\\n    // Draw Param Name\\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\\n    this.resetFontSettings();\\n    x += paramNameWidth;\\n\\n    // Draw Param Before\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\\n    this.resetFontSettings();\\n    x += paramValueWidth;\\n\\n    // Draw Arrow\\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\\n    this.drawRightArrow(x, y);\\n    x += arrowWidth;\\n\\n    // Draw Param After\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\\n    x += paramValueWidth;\\n\\n    // Draw Param Change\\n    if (totalDivides > 2) {\\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\\n    }\\n\\n    // Prepare Next Parameter\\n    x = baseX;\\n    y += lineHeight;\\n    alter = alter === 2 ? 1 : 2;\\n}\"","LayoutStyle:str":"upper/right","StatusWindowWidth:num":"312","DrawBackRect:eval":"true","BackRectColor:str":"19","CursedTextPopup:json":"\"%1 is cursed by %3%2!\"","Command":"","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconEquip:num":"136","equipCmdDesc:json":"\"Pick and choose equipment to change.\"","CommandAddOptimize:eval":"true","optimizeCmdDesc:json":"\"Equip the strongest available equipment.\"","CmdIconOptimize:num":"137","CommandAddClear:eval":"true","clearCmdDesc:json":"\"Remove all available equipment.\"","CmdIconClear:num":"135","RemoveEquip":"","RemoveEquipIcon:num":"16","RemoveEquipText:str":"Remove","ShiftShortcutKey:eval":"true","Rulings":"","EquipAdjustHpMp:eval":"true","NonRemoveETypes:arraynum":"[]","NonOptimizeETypes:arraynum":"[]","ButtonAssist":"","buttonAssistRemove:str":"Unequip"}
 *
 * @param ShopScene:struct
 * @text Shop Menu Settings
 * @type struct<ShopScene>
 * @desc Change the Shop Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","Command":"","CmdHideDisabled:eval":"true","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconBuy:num":"208","CmdIconSell:num":"314","CmdIconCancel:num":"82","CmdCancelRename:str":"Exit","Prices":"","SellPriceRate:num":"0.50","BuyPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","SellPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","ButtonAssist":"","buttonAssistSmallIncrement:str":"-1/+1","buttonAssistLargeIncrement:str":"-10/+10"}
 *
 * @param StatusWindow:struct
 * @text Shop Status Window
 * @parent ShopScene:struct
 * @type struct<StatusWindow>
 * @desc Change the Item Status Window settings.
 * @default {"General":"","Width:num":"352","ParamChangeFontSize:num":"22","Translucent:num":"64","DrawBackRect:eval":"true","BackRectColor:str":"19","EquipData":"","AlreadyEquipMarker:str":"E","CannotEquipMarker:str":"-","EquipDelayMS:num":"240","NoChangeMarker:str":"-","DrawEquipData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nconst paramheight = this.gaugeLineHeight() + 8;\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Parameter Names\\nconst params = this.actorParams();\\nconst backY = y;\\ny = height - (params.length * paramheight) - 4;\\nlet paramX = x;\\nlet paramWidth = 0;\\nlet tableY = y;\\nfor (const paramId of params) {\\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\\n    y += paramheight;\\n}\\n\\n// Draw Actor Data\\nconst actorMax = $gameParty.maxBattleMembers();\\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\\nparamWidth = width - (actorWidth * actorMax);\\nfor (const actor of $gameParty.battleMembers()) {\\n    const index = $gameParty.battleMembers().indexOf(actor);\\n    const actorX = paramX + paramWidth + (index * actorWidth);\\n    this.changePaintOpacity(actor.canEquip(this._item));\\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\\n    let actorY = tableY;\\n\\n    // Draw Parameter Changes\\n    for (const paramId of params) {\\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\\n        actorY += paramheight;\\n    }\\n}\\n\\n// Draw Back Rectangles\\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\\nfor (let i = 0; i < actorMax; i++) {\\n    const actorX = paramX + paramWidth + (i * actorWidth);\\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\\n}\\nfor (const paramId of params) {\\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\\n    for (let i = 0; i < actorMax; i++) {\\n        const actorX = paramX + paramWidth + (i * actorWidth);\\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\\n    }\\n    tableY += paramheight;\\n}\"","ItemData":"","ItemGeneral":"","MaxIcons:num":"8","MultiplierStandard:num":"1000000","DrawItemData:func":"\"const lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\n\\n// Draw Main Item Properties\\nif (this.drawItemConsumable(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\nif (this._item.occasion < 3) {\\n    y = this.drawItemDamage(x, y, width);\\n    y = this.drawItemEffects(x, y, width);\\n}\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Draw Remaining Item Properties\\nif (this._item.occasion < 3) {\\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemHitType(x, y, hw)) y += 0;\\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\\n}\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","Vocabulary":"","LabelConsume:str":"Consumable","Consumable:str":"✔","NotConsumable:str":"✘","Occasions":"","Occasion0:str":"Anytime Use","Occasion1:str":"Battle-Only","Occasion2:str":"Field-Only","Occasion3:str":"-","Scope":"","Scope0:str":"No Target","Scope1:str":"1 Foe","Scope2:str":"All Foes","Scope3:str":"Random Foe","Scope4:str":"2 Random Foes","Scope5:str":"3 Random Foes","Scope6:str":"4 Random Foes","Scope7:str":"1 Ally","Scope8:str":"Alive Allies","Scope9:str":"Dead Ally","Scope10:str":"Dead Allies","Scope11:str":"User","Scope12:str":"Any Ally","Scope13:str":"All Allies","Scope14:str":"Everybody","BattleCore":"","ScopeRandomAny:str":"%1 Random Units","ScopeRandomEnemies:str":"%1 Random Foes","ScopeRandomAllies:str":"%1 Random Allies","ScopeAlliesButUser:str":"Other Allies","ScopeAllyOrEnemy:str":"Ally/Enemy","ScopeEnemyOrAlly:str":"Enemy/Ally","LabelSpeed:str":"Speed","Speed2000:str":"Fastest","Speed1000:str":"Faster","Speed1:str":"Fast","Speed0:str":"Normal","SpeedNeg999:str":"Slow","SpeedNeg1999:str":"Slower","SpeedNeg2000:str":"Slowest","LabelSuccessRate:str":"Accuracy","LabelRepeats:str":"Hits","LabelHitType:str":"Type","HitType0:str":"Neutral","HitType1:str":"Physical","HitType2:str":"Magical","LabelElement:str":"Element","ElementWeapon:str":"\\I[97]Weapon","ElementNone:str":"\\I[160]No Element","DamageType":"","DamageType1:str":"%1 Damage Multiplier","DamageType2:str":"%1 Damage Multiplier","DamageType3:str":"%1 Recovery Multiplier","DamageType4:str":"%1 Recovery Multiplier","DamageType5:str":"%1 Drain Multiplier","DamageType6:str":"%1 Drain Multiplier","Effects":"","LabelRecoverHP:str":"%1 Recovery","LabelRecoverMP:str":"%1 Recovery","LabelRecoverTP:str":"%1 Recovery","LabelSelfGainTP:str":"User %1","LabelDamageHP:str":"%1 Damage","LabelDamageMP:str":"%1 Damage","LabelDamageTP:str":"%1 Damage","LabelApply:str":"Applies","LabelRemove:str":"Removes"}
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
 * Item Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Item Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ItemQt
 * @text Item Quantity
 *
 * @param MaxItems:num
 * @text Item Max
 * @parent ItemQt
 * @desc The default maximum quantity for items.
 * @default 99
 *
 * @param MaxWeapons:num
 * @text Weapon Max
 * @parent ItemQt
 * @desc The default maximum quantity for weapons.
 * @default 99
 *
 * @param MaxArmors:num
 * @text Armor Max
 * @parent ItemQt
 * @desc The default maximum quantity for armors.
 * @default 99
 *
 * @param ItemQuantityFmt:str
 * @text Quantity Format
 * @parent ItemQt
 * @desc How to display an item's quantity.
 * %1 - Item Quantity
 * @default ×%1
 *
 * @param ItemQuantityFontSize:num
 * @text Font Size
 * @parent ItemQt
 * @desc Default font size for item quantity.
 * @default 22
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Item Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Item Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param ItemSceneAdjustItemList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Item List Window in the Item Menu if using the Shop Status Window?
 * @default true
 *
 * @param ItemMenuStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
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
 * @param ItemMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Status Window in the Item Menu.
 * @default "const width = this.statusWidth();\nconst height = this._itemWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._itemWindow.y;\nreturn new Rectangle(x, y, width, height);"
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
 */
/* ----------------------------------------------------------------------------
 * Item Categories
 * ----------------------------------------------------------------------------
 */
/*~struct~Categories:
 *
 * @param MainList
 * @text List
 * 
 * @param List:arraystruct
 * @text Category List
 * @parent MainList
 * @type struct<Category>[]
 * @desc A list of the item categories displayed in the Item/Shop menus.
 * @default ["{\"Type:str\":\"RegularItems\",\"Icon:num\":\"208\"}","{\"Type:str\":\"AllWeapons\",\"Icon:num\":\"97\"}","{\"Type:str\":\"AllArmors\",\"Icon:num\":\"137\"}","{\"Type:str\":\"KeyItems\",\"Icon:num\":\"195\"}"]
 *
 * @param Style:str
 * @text Category Style
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
 * @desc How do you wish to draw categorie entries in the Category Window?
 * @default icon
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @parent MainList
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Vocabulary
 *
 * @param HiddenItemA:str
 * @text Hidden Item A
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Special Items
 *
 * @param HiddenItemB:str
 * @text Hidden Item B
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Unique Items
 *
 * @param Consumable:str
 * @text Consumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Consumable
 *
 * @param Nonconsumable:str
 * @text Nonconsumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Nonconsumable
 *
 * @param AlwaysUsable:str
 * @text Always Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Usable
 *
 * @param BattleUsable:str
 * @text Battle Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Battle
 *
 * @param FieldUsable:str
 * @text Field Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Field
 *
 * @param NeverUsable:str
 * @text Never Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Materials
 *
 */
/* ----------------------------------------------------------------------------
 * Category Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Type:str
 * @text Type
 * @type combo
 * @option AllItems
 * @option 
 * @option RegularItems
 * @option KeyItems
 * @option HiddenItemA
 * @option HiddenItemB
 * @option 
 * @option Consumable
 * @option Nonconsumable
 * @option 
 * @option AlwaysUsable
 * @option BattleUsable
 * @option FieldUsable
 * @option NeverUsable
 * @option 
 * @option AllWeapons
 * @option WType:x
 * @option 
 * @option AllArmors
 * @option AType:x
 * @option 
 * @option EType:x
 * @option 
 * @option Category:x
 * @option
 * @desc A list of the item categories displayed in the Item/Shop
 * menus. Replace x with ID numbers or text.
 * @default RegularItems
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param SwitchID:num
 * @text Visibility Switch
 * @type switch
 * @desc This Switch must be turned ON in order for the category to show.
 * Use 0 for no Switch requirement.
 * @default 0
 *
 * @param SortBy:str
 * @text Sorted By
 * @type select
 * @option ID
 * @option Name
 * @desc Sort this category (in Scene_Item and Scene_Shop only) this way.
 * @default ID
 *
 */
/* ----------------------------------------------------------------------------
 * New Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NewLabel:
 *
 * @param Enable:eval
 * @text Use NEW! Labels?
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the NEW! Labels or not?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @desc The icon index used to represent the NEW! text.
 * Use 0 to not draw any icons.
 * @default 0
 *
 * @param Text:str
 * @text Text
 * @desc The text written on the NEW! Label.
 * @default NEW!
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param FontFace:str
 * @text Font Face
 * @parent Text:str
 * @desc Font face used for the NEW! Label.
 * @default Verdana
 *
 * @param FontSize:str
 * @text Font Size
 * @parent Text:str
 * @desc The font size used for the NEW! text.
 * @default 16
 *
 * @param FadeLimit:num
 * @text Fade Limit
 * @desc What's the upper opaque limit before reversing?
 * @default 360
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @desc What's the fade speed of the NEW! Label?
 * @default 4
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the NEW! Label's X position by.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the NEW! Label's Y position by.
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Equip Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/right
 *
 * @param ParamValueFontSize:num
 * @text Param Font Size
 * @parent EnableLayout:eval
 * @desc The font size used for parameter values.
 * @default 22
 *
 * @param MenuPortraits:eval
 * @text Show Menu Portraits?
 * @parent EnableLayout:eval
 * @type boolean
 * @on Use Portraits
 * @off Use Faces
 * @desc If Main Menu Core is installed, display the Menu Portraits
 * instead of the actor's face in the status window?
 * @default true
 *
 * @param DrawPortraitJS:func
 * @text JS: Portrait Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If Menu Portraits are available, this is code used to draw
 * the upper data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst x1 = padding;\nconst x2 = this.innerWidth - 128 - padding;\n\n// Draw Menu Image\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\n\n// Draw Data\nthis.drawActorName(this._actor, x1, lineHeight * 0);\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);"
 *
 * @param DrawFaceJS:func
 * @text JS: Face Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If faces used used, this is code used to draw the upper
 * data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst x = Math.floor(this.innerWidth / 2);\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\nlet dataHeight = lineHeight * 3;\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\n\n// Draw Data\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);"
 *
 * @param DrawParamJS:func
 * @text JS: Parameter Lower
 * @parent EnableLayout:eval
 * @type note
 * @desc Code to determine how parameters are drawn in the
 * Status Window.
 * @default "// Declare variables\nconst params = this.actorParams();\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst baseX = 0;\nconst baseY = this.innerHeight - params.length * lineHeight;\nconst baseWidth = this.innerWidth;\nconst valueFontSize = this.paramValueFontSize();\n\n// Calculate Widths\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\nparamNameWidth += padding * 2;\nif (this.isUseParamNamesWithIcons()) {\n    paramNameWidth += ImageManager.iconWidth + 4;\n}\nlet arrowWidth = this.rightArrowWidth();\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\n\n// Draw Parameters\nlet x = baseX;\nlet y = baseY;\nlet value = 0;\nlet diffValue = 0;\nlet alter = 2;\nfor (const paramId of params) {\n    // Draw Param Name\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\n    this.resetFontSettings();\n    x += paramNameWidth;\n\n    // Draw Param Before\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\n    this.resetFontSettings();\n    x += paramValueWidth;\n\n    // Draw Arrow\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\n    this.drawRightArrow(x, y);\n    x += arrowWidth;\n\n    // Draw Param After\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\n    x += paramValueWidth;\n\n    // Draw Param Change\n    if (totalDivides > 2) {\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\n    }\n\n    // Prepare Next Parameter\n    x = baseX;\n    y += lineHeight;\n    alter = alter === 2 ? 1 : 2;\n}"
 *
 * @param StatusWindowWidth:num
 * @text Status Window Width
 * @parent General
 * @desc The usual width of the status window if using the 
 * non-Updated Equip Menu Layout.
 * @default 312
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
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
 * @param CursedTextPopup:json
 * @text Cursed Equip Popup
 * @parent General
 * @type note
 * @desc %1 - Actor, %2 - Equip, %3 - Icon. Text codes allowed.
 * Requires VisuMZ_0_CoreEngine! Empty to not use.
 * @default "%1 is cursed by %3%2!"
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconEquip:num
 * @text Equip Icon
 * @parent Command
 * @desc The icon used for the Equip command.
 * @default 136
 *
 * @param equipCmdDesc:json
 * @text Help Description
 * @parent CmdIconEquip:num
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Pick and choose equipment to change."
 *
 * @param CommandAddOptimize:eval
 * @text Add Optimize Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Optimize" command to the Command Window?
 * @default true
 *
 * @param optimizeCmdDesc:json
 * @text Help Description
 * @parent CommandAddOptimize:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Equip the strongest available equipment."
 *
 * @param CmdIconOptimize:num
 * @text Optimize Icon
 * @parent CommandAddOptimize:eval
 * @desc The icon used for the Optimize command.
 * @default 137
 *
 * @param CommandAddClear:eval
 * @text Add Clear Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Clear" command to the Command Window?
 * @default true
 *
 * @param clearCmdDesc:json
 * @text Help Description
 * @parent CommandAddClear:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Remove all available equipment."
 *
 * @param CmdIconClear:num
 * @text Clear Icon
 * @parent CommandAddClear:eval
 * @desc The icon used for the Clear command.
 * @default 135
 *
 * @param RemoveEquip
 * @text Remove Equip
 *
 * @param RemoveEquipIcon:num
 * @text Icon
 * @parent RemoveEquip
 * @desc Icon used for equipment removal.
 * @default 16
 *
 * @param RemoveEquipText:str
 * @text Text
 * @parent RemoveEquip
 * @desc Text used for equipment removal.
 * @default Remove
 *
 * @param ShiftShortcutKey:eval
 * @text Use SHIFT Shortcut?
 * @parent RemoveEquip
 * @type boolean
 * @on Use
 * @off Don't
 * @desc Add the "Shift" button as a shortcut key to removing items?
 * @default true

 * @param Rulings
 *
 * @param EquipAdjustHpMp:eval
 * @text Equip-Adjust HP/MP
 * @parent Rulings
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * @default true
 * 
 * @param NonRemoveETypes:arraynum
 * @text Non-Removable Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that must always have
 * an item equipped and cannot be empty.
 * @default []
 *
 * @param NonOptimizeETypes:arraynum
 * @text Non-Optimized Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that will be ignored
 * when equipment is being optimized.
 * @default []
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistRemove:str
 * @text SHIFT: Remove
 * @parent ButtonAssist
 * @desc Button assist text used for the SHIFT Remove Shortcut.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Unequip
 * 
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Shop Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param Switches
 *
 * @param SwitchBuy:num
 * @text Switch: Buy
 * @parent Switches
 * @type switch
 * @desc Buying items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param SwitchSell:num
 * @text Switch: Sell
 * @parent Switches
 * @type switch
 * @desc Selling items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdHideDisabled:eval
 * @text Hide Unavailable?
 * @parent Command
 * @type boolean
 * @on Hide
 * @off Default
 * @desc Hide all unavailable commands like when a shop is set to Purchase Only?
 * @default true
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconBuy:num
 * @text Buy Icon
 * @parent Command
 * @desc The icon used for the Buy command.
 * @default 208
 *
 * @param CmdIconSell:num
 * @text Sell Icon
 * @parent Command
 * @desc The icon used for the Sell command.
 * @default 314
 *
 * @param CmdIconCancel:num
 * @text Cancel Icon
 * @parent Command
 * @desc The icon used for the Cancel command.
 * @default 82
 *
 * @param CmdCancelRename:str
 * @text Rename "Cancel"
 * @parent Command
 * @desc Rename Cancel to something more logical for the Shop Menu Scene.
 * @default Exit
 *
 * @param Prices
 *
 * @param SellPriceRate:num
 * @text Sell Price Rate
 * @parent Prices
 * @desc The default sell price rate.
 * @default 0.50
 *
 * @param BuyPriceJS:func
 * @text JS: Buy Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the buy price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 *
 * @param SellPriceJS:func
 * @text JS: Sell Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the sell price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 * 
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistSmallIncrement:str
 * @text Small Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -1/+1
 *
 * @param buttonAssistLargeIncrement:str
 * @text Large Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -10/+10
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param General
 *
 * @param Width:num
 * @text Window Width
 * @parent General
 * @desc The usual width of the status window.
 * @default 352
 *
 * @param ParamChangeFontSize:num
 * @text Parameter Font Size
 * @parent General
 * @desc Font size used for parameter changes.
 * @default 22
 *
 * @param Translucent:num
 * @text Translucent Opacity
 * @parent General
 * @desc Opacity setting used for translucent window objects.
 * @default 64
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
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
 * @param EquipData
 * @text Equipment Data
 *
 * @param AlreadyEquipMarker:str
 * @text Already Equipped
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default E
 *
 * @param CannotEquipMarker:str
 * @text Can't Equip
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default -
 *
 * @param EquipDelayMS:num
 * @text Delay MS
 * @parent EquipData
 * @type number
 * @min 1
 * @max 999
 * @desc How many milliseconds (MS) to delay the preview update?
 * This is to prevent lag spikes for equips only.
 * @default 240
 *
 * @param NoChangeMarker:str
 * @text No Changes
 * @parent EquipData
 * @desc Marker used to show no changes have occurred.
 * @default -
 *
 * @param DrawEquipData:func
 * @text JS: Draw Equip Data
 * @parent EquipData
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nconst paramheight = this.gaugeLineHeight() + 8;\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Parameter Names\nconst params = this.actorParams();\nconst backY = y;\ny = height - (params.length * paramheight) - 4;\nlet paramX = x;\nlet paramWidth = 0;\nlet tableY = y;\nfor (const paramId of params) {\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\n    y += paramheight;\n}\n\n// Draw Actor Data\nconst actorMax = $gameParty.maxBattleMembers();\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\nparamWidth = width - (actorWidth * actorMax);\nfor (const actor of $gameParty.battleMembers()) {\n    const index = $gameParty.battleMembers().indexOf(actor);\n    const actorX = paramX + paramWidth + (index * actorWidth);\n    this.changePaintOpacity(actor.canEquip(this._item));\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\n    let actorY = tableY;\n\n    // Draw Parameter Changes\n    for (const paramId of params) {\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\n        actorY += paramheight;\n    }\n}\n\n// Draw Back Rectangles\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\nfor (let i = 0; i < actorMax; i++) {\n    const actorX = paramX + paramWidth + (i * actorWidth);\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\n}\nfor (const paramId of params) {\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\n    for (let i = 0; i < actorMax; i++) {\n        const actorX = paramX + paramWidth + (i * actorWidth);\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\n    }\n    tableY += paramheight;\n}"
 *
 * @param ItemData
 * @text Item Data
 *
 * @param ItemGeneral
 * @parent ItemData
 * @text Data Settings
 *
 * @param MaxIcons:num
 * @text Max State/Buff Icons
 * @parent ItemGeneral
 * @desc Maximum number of icons that can be displayed for Add/Remove States/Buffs.
 * @default 8
 *
 * @param MultiplierStandard:num
 * @text Multiplier Standard
 * @parent ItemGeneral
 * @desc Constant standard to filter out random values when calculating the damage multiplier.
 * @default 1000000
 *
 * @param DrawItemData:func
 * @text JS: Draw Item Data
 * @parent ItemGeneral
 * @type note
 * @desc Code used to draw the item data for the Shop Status Window.
 * @default "const lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\n\n// Draw Main Item Properties\nif (this.drawItemConsumable(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\nif (this._item.occasion < 3) {\n    y = this.drawItemDamage(x, y, width);\n    y = this.drawItemEffects(x, y, width);\n}\ny = this.drawItemCustomEntries(x, y, width);\n\n// Draw Remaining Item Properties\nif (this._item.occasion < 3) {\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\n    if (this.drawItemHitType(x, y, hw)) y += 0;\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\n}\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param Vocabulary
 * @parent ItemData
 *
 * @param LabelConsume:str
 * @text Consumable
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Consumable
 *
 * @param Consumable:str
 * @text Yes
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✔
 *
 * @param NotConsumable:str
 * @text No
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✘
 *
 * @param Occasions
 * @parent Vocabulary
 *
 * @param Occasion0:str
 * @text Always
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Anytime Use
 *
 * @param Occasion1:str
 * @text Battle Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Battle-Only
 *
 * @param Occasion2:str
 * @text Menu Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Field-Only
 *
 * @param Occasion3:str
 * @text Never
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default -
 *
 * @param Scope
 * @parent Vocabulary
 *
 * @param Scope0:str
 * @text None
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default No Target
 *
 * @param Scope1:str
 * @text 1 Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Foe
 *
 * @param Scope2:str
 * @text All Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Foes
 *
 * @param Scope3:str
 * @text 1 Random Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Random Foe
 *
 * @param Scope4:str
 * @text 2 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 2 Random Foes
 *
 * @param Scope5:str
 * @text 3 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 3 Random Foes
 *
 * @param Scope6:str
 * @text 4 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 4 Random Foes
 *
 * @param Scope7:str
 * @text 1 Ally
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Ally
 *
 * @param Scope8:str
 * @text All Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Alive Allies
 *
 * @param Scope9:str
 * @text 1 Ally (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Ally
 *
 * @param Scope10:str
 * @text All Allies (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Allies
 *
 * @param Scope11:str
 * @text The User
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default User
 *
 * @param Scope12:str
 * @text 1 Ally (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Any Ally
 *
 * @param Scope13:str
 * @text All Allies (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Allies
 *
 * @param Scope14:str
 * @text Enemies & Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Everybody
 *
 * @param BattleCore
 * @text Battle Core Support
 * @parent Vocabulary
 *
 * @param ScopeRandomAny:str
 * @text x Random Any
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Any> notetag.
 * @default %1 Random Units
 *
 * @param ScopeRandomEnemies:str
 * @text x Random Enemies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Enemies> notetag.
 * @default %1 Random Foes
 *
 * @param ScopeRandomAllies:str
 * @text x Random Allies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Allies> notetag.
 * @default %1 Random Allies
 *
 * @param ScopeAlliesButUser:str
 * @text All Allies But User
 * @parent BattleCore
 * @desc Vocabulary used for <Target: All Allies But User> notetag.
 * @default Other Allies
 *
 * @param ScopeAllyOrEnemy:str
 * @text Ally or Enemy
 * @parent BattleCore
 * @desc Vocabulary used for <Target: Ally or Enemy> notetag.
 * @default Ally/Enemy
 *
 * @param ScopeEnemyOrAlly:str
 * @text Enemy or Ally
 * @parent BattleCore
 * @desc Vocabulary used for <Target: Enemy or Ally> notetag.
 * @default Enemy/Ally
 *
 * @param LabelSpeed:str
 * @text Speed
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Speed
 *
 * @param Speed2000:str
 * @text >= 2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fastest
 *
 * @param Speed1000:str
 * @text >= 1000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Faster
 *
 * @param Speed1:str
 * @text >= 1 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fast
 *
 * @param Speed0:str
 * @text == 0 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Normal
 *
 * @param SpeedNeg999:str
 * @text >= -999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slow
 *
 * @param SpeedNeg1999:str
 * @text >= -1999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slower
 *
 * @param SpeedNeg2000:str
 * @text <= -2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slowest
 *
 * @param LabelSuccessRate:str
 * @text Success Rate
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Accuracy
 *
 * @param LabelRepeats:str
 * @text Repeats
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Hits
 *
 * @param LabelHitType:str
 * @text Hit Type
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Type
 *
 * @param HitType0:str
 * @text Certain Hit
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Neutral
 *
 * @param HitType1:str
 * @text Physical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Physical
 *
 * @param HitType2:str
 * @text Magical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Magical
 *
 * @param LabelElement:str
 * @text Element
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Element
 *
 * @param ElementWeapon:str
 * @text Weapon-Based
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[97]Weapon
 *
 * @param ElementNone:str
 * @text Nonelement Element
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[160]No Element
 *
 * @param DamageType
 * @text Damage Type
 * @parent Vocabulary
 *
 * @param DamageType1:str
 * @text HP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType2:str
 * @text MP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType3:str
 * @text HP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType4:str
 * @text MP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType5:str
 * @text HP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param DamageType6:str
 * @text MP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param Effects
 * @parent Vocabulary
 *
 * @param LabelRecoverHP:str
 * @text Recover HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverMP:str
 * @text Recover MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverTP:str
 * @text Recover TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelSelfGainTP:str
 * @text Self Gain TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default User %1
 *
 * @param LabelDamageHP:str
 * @text Damage HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageMP:str
 * @text Damage MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageTP:str
 * @text Damage TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelApply:str
 * @text Add State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Applies
 *
 * @param LabelRemove:str
 * @text Remove State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Removes
 *
 */
//=============================================================================

var tier = tier || 0x0;
var dependencies = [];
var pluginData = $plugins.filter(function (_0x2e6bbb) {
  return _0x2e6bbb.status && _0x2e6bbb.description.includes("[ItemsEquipsCore]");
})[0x0];
VisuMZ.ItemsEquipsCore.Settings = VisuMZ.ItemsEquipsCore.Settings || {};
VisuMZ.ConvertParams = function (_0x59e6c1, _0x566e77) {
  for (const _0x370fc6 in _0x566e77) {
    if (_0x370fc6.match(/(.*):(.*)/i)) {
      const _0x46f2f0 = String(RegExp.$1);
      const _0x2d95a3 = String(RegExp.$2).toUpperCase().trim();
      let _0x2f39de;
      let _0x4b2d49;
      let _0x13bb32;
      switch (_0x2d95a3) {
        case "NUM":
          _0x2f39de = _0x566e77[_0x370fc6] !== '' ? Number(_0x566e77[_0x370fc6]) : 0x0;
          break;
        case "ARRAYNUM":
          _0x4b2d49 = _0x566e77[_0x370fc6] !== '' ? JSON.parse(_0x566e77[_0x370fc6]) : [];
          _0x2f39de = _0x4b2d49.map(_0x3a853f => Number(_0x3a853f));
          break;
        case 'EVAL':
          _0x2f39de = _0x566e77[_0x370fc6] !== '' ? eval(_0x566e77[_0x370fc6]) : null;
          break;
        case "ARRAYEVAL":
          _0x4b2d49 = _0x566e77[_0x370fc6] !== '' ? JSON.parse(_0x566e77[_0x370fc6]) : [];
          _0x2f39de = _0x4b2d49.map(_0x8b7be4 => eval(_0x8b7be4));
          break;
        case "JSON":
          _0x2f39de = _0x566e77[_0x370fc6] !== '' ? JSON.parse(_0x566e77[_0x370fc6]) : '';
          break;
        case "ARRAYJSON":
          _0x4b2d49 = _0x566e77[_0x370fc6] !== '' ? JSON.parse(_0x566e77[_0x370fc6]) : [];
          _0x2f39de = _0x4b2d49.map(_0x517019 => JSON.parse(_0x517019));
          break;
        case "FUNC":
          _0x2f39de = _0x566e77[_0x370fc6] !== '' ? new Function(JSON.parse(_0x566e77[_0x370fc6])) : new Function("return 0");
          break;
        case 'ARRAYFUNC':
          _0x4b2d49 = _0x566e77[_0x370fc6] !== '' ? JSON.parse(_0x566e77[_0x370fc6]) : [];
          _0x2f39de = _0x4b2d49.map(_0xf8f160 => new Function(JSON.parse(_0xf8f160)));
          break;
        case 'STR':
          _0x2f39de = _0x566e77[_0x370fc6] !== '' ? String(_0x566e77[_0x370fc6]) : '';
          break;
        case "ARRAYSTR":
          _0x4b2d49 = _0x566e77[_0x370fc6] !== '' ? JSON.parse(_0x566e77[_0x370fc6]) : [];
          _0x2f39de = _0x4b2d49.map(_0x4e907b => String(_0x4e907b));
          break;
        case 'STRUCT':
          _0x13bb32 = _0x566e77[_0x370fc6] !== '' ? JSON.parse(_0x566e77[_0x370fc6]) : {};
          _0x59e6c1[_0x46f2f0] = {};
          VisuMZ.ConvertParams(_0x59e6c1[_0x46f2f0], _0x13bb32);
          continue;
        case 'ARRAYSTRUCT':
          _0x4b2d49 = _0x566e77[_0x370fc6] !== '' ? JSON.parse(_0x566e77[_0x370fc6]) : [];
          _0x2f39de = _0x4b2d49.map(_0x4bdca2 => VisuMZ.ConvertParams({}, JSON.parse(_0x4bdca2)));
          break;
        default:
          continue;
      }
      _0x59e6c1[_0x46f2f0] = _0x2f39de;
    }
  }
  return _0x59e6c1;
};
(_0x3b85f0 => {
  const _0x2bbc3f = _0x3b85f0.name;
  for (const _0xe99591 of dependencies) {
    if (!Imported[_0xe99591]) {
      alert("%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.".format(_0x2bbc3f, _0xe99591));
      SceneManager.exit();
      break;
    }
  }
  const _0x18e845 = _0x3b85f0.description;
  if (_0x18e845.match(/\[Version[ ](.*?)\]/i)) {
    const _0x55fbd1 = Number(RegExp.$1);
    if (_0x55fbd1 !== VisuMZ.ItemsEquipsCore.version) {
      alert("%1's version does not match plugin's. Please update it in the Plugin Manager.".format(_0x2bbc3f, _0x55fbd1));
      SceneManager.exit();
    }
  }
  if (_0x18e845.match(/\[Tier[ ](\d+)\]/i)) {
    const _0x46e1f3 = Number(RegExp.$1);
    if (_0x46e1f3 < tier) {
      alert("%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.".format(_0x2bbc3f, _0x46e1f3, tier));
      SceneManager.exit();
    } else {
      tier = Math.max(_0x46e1f3, tier);
    }
  }
  VisuMZ.ConvertParams(VisuMZ.ItemsEquipsCore.Settings, _0x3b85f0.parameters);
})(pluginData);
PluginManager.registerCommand(pluginData.name, "ActorChangeEquipSlots", _0x2d03ac => {
  VisuMZ.ConvertParams(_0x2d03ac, _0x2d03ac);
  const _0x38a08d = _0x2d03ac.Actors.map(_0x2f3290 => $gameActors.actor(_0x2f3290));
  const _0x4cae78 = _0x2d03ac.Slots.map(_0x242d33 => $dataSystem.equipTypes.indexOf(_0x242d33.trim()));
  for (const _0x35e62c of _0x38a08d) {
    if (!_0x35e62c) {
      continue;
    }
    _0x35e62c.forceChangeEquipSlots(_0x4cae78);
  }
});
PluginManager.registerCommand(pluginData.name, "ActorResetEquipSlots", _0x11fc99 => {
  VisuMZ.ConvertParams(_0x11fc99, _0x11fc99);
  const _0x387bd0 = _0x11fc99.Actors.map(_0x3c1136 => $gameActors.actor(_0x3c1136));
  for (const _0x271819 of _0x387bd0) {
    if (!_0x271819) {
      continue;
    }
    _0x271819.forceResetEquipSlots();
  }
});
PluginManager.registerCommand(pluginData.name, 'PurifyActors', _0x55108a => {
  if ($gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x55108a, _0x55108a);
  const _0x162c1b = _0x55108a.Actors.map(_0x23728b => $gameActors.actor(_0x23728b));
  for (const _0x4d8f0c of _0x162c1b) {
    if (!_0x4d8f0c) {
      continue;
    }
    _0x4d8f0c.purifyCursedEquips();
  }
});
PluginManager.registerCommand(pluginData.name, "PurifyParty", _0xdc3e76 => {
  if ($gameParty.inBattle()) {
    return;
  }
  $gameParty.purifyCursedEquips();
});
PluginManager.registerCommand(pluginData.name, 'BatchShop', _0x56674d => {
  VisuMZ.ConvertParams(_0x56674d, _0x56674d);
  const _0x34f732 = [];
  const _0x3baa1c = _0x56674d.Blacklist.map(_0x4550d9 => _0x4550d9.toUpperCase().trim());
  const _0x19cfd8 = _0x56674d.Whitelist.map(_0x5574ff => _0x5574ff.toUpperCase().trim());
  const _0x483146 = _0x56674d.Step1End >= _0x56674d.Step1Start ? _0x56674d.Step1Start : _0x56674d.Step1End;
  const _0x4a0e3a = _0x56674d.Step1End >= _0x56674d.Step1Start ? _0x56674d.Step1End : _0x56674d.Step1Start;
  const _0x1501b0 = Array(_0x4a0e3a - _0x483146 + 0x1).fill().map((_0x19e14b, _0x23f0be) => _0x483146 + _0x23f0be);
  for (const _0x186cd3 of _0x1501b0) {
    const _0x377819 = $dataItems[_0x186cd3];
    if (!_0x377819) {
      continue;
    }
    if (!VisuMZ.ItemsEquipsCore.IncludeShopItem(_0x377819, _0x3baa1c, _0x19cfd8)) {
      continue;
    }
    _0x34f732.push([0x0, _0x186cd3, 0x0, _0x377819.price]);
  }
  const _0x8cc9ba = _0x56674d.Step2End >= _0x56674d.Step2Start ? _0x56674d.Step2Start : _0x56674d.Step2End;
  const _0x54f849 = _0x56674d.Step2End >= _0x56674d.Step2Start ? _0x56674d.Step2End : _0x56674d.Step2Start;
  const _0x8a59ce = Array(_0x54f849 - _0x8cc9ba + 0x1).fill().map((_0x4855d4, _0x584b6a) => _0x8cc9ba + _0x584b6a);
  for (const _0x501fe2 of _0x8a59ce) {
    const _0x157f67 = $dataWeapons[_0x501fe2];
    if (!_0x157f67) {
      continue;
    }
    if (!VisuMZ.ItemsEquipsCore.IncludeShopItem(_0x157f67, _0x3baa1c, _0x19cfd8)) {
      continue;
    }
    _0x34f732.push([0x1, _0x501fe2, 0x0, _0x157f67.price]);
  }
  const _0x34fed9 = _0x56674d.Step3End >= _0x56674d.Step3Start ? _0x56674d.Step3Start : _0x56674d.Step3End;
  const _0x2d59cd = _0x56674d.Step3End >= _0x56674d.Step3Start ? _0x56674d.Step3End : _0x56674d.Step3Start;
  const _0x42a388 = Array(_0x2d59cd - _0x34fed9 + 0x1).fill().map((_0x125ab8, _0x4716d0) => _0x34fed9 + _0x4716d0);
  for (const _0x1fea24 of _0x42a388) {
    const _0x5ba9a9 = $dataArmors[_0x1fea24];
    if (!_0x5ba9a9) {
      continue;
    }
    if (!VisuMZ.ItemsEquipsCore.IncludeShopItem(_0x5ba9a9, _0x3baa1c, _0x19cfd8)) {
      continue;
    }
    _0x34f732.push([0x2, _0x1fea24, 0x0, _0x5ba9a9.price]);
  }
  SceneManager.push(Scene_Shop);
  SceneManager.prepareNextScene(_0x34f732, _0x56674d.PurchaseOnly);
});
VisuMZ.ItemsEquipsCore.IncludeShopItem = function (_0x15a003, _0x286cc0, _0xb96b4b) {
  if (_0x15a003.name.trim() === '') {
    return false;
  }
  if (_0x15a003.name.match(/-----/i)) {
    return false;
  }
  const _0x191bf7 = _0x15a003.categories;
  if (_0x286cc0.length > 0x0) {
    for (const _0x2fdf54 of _0x286cc0) {
      if (!_0x2fdf54) {
        continue;
      }
      if (_0x191bf7.includes(_0x2fdf54)) {
        return false;
      }
    }
  }
  if (_0xb96b4b.length > 0x0) {
    for (const _0x47e00f of _0xb96b4b) {
      if (!_0x47e00f) {
        continue;
      }
      if (_0x191bf7.includes(_0x47e00f)) {
        return true;
      }
    }
    return false;
  }
  return true;
};
VisuMZ.ItemsEquipsCore.Scene_Boot_onDatabaseLoaded = Scene_Boot.prototype.onDatabaseLoaded;
Scene_Boot.prototype.onDatabaseLoaded = function () {
  this.process_VisuMZ_ItemsEquipsCore_RegExp();
  VisuMZ.ItemsEquipsCore.Scene_Boot_onDatabaseLoaded.call(this);
  this.process_VisuMZ_ItemsEquipsCore_Notetags();
  VisuMZ.ItemsEquipsCore.SetupProxyItemGroups();
  VisuMZ.ItemsEquipsCore.SetupArtifactItemIDs();
};
Scene_Boot.prototype.process_VisuMZ_ItemsEquipsCore_RegExp = function () {
  VisuMZ.ItemsEquipsCore.RegExp = {};
  VisuMZ.ItemsEquipsCore.RegExp.EquipParams = [];
  VisuMZ.ItemsEquipsCore.RegExp.BorderRegExp = [];
  const _0x1eafc7 = ["MaxHP", 'MaxMP', "ATK", "DEF", 'MAT', "MDF", 'AGI', "LUK"];
  for (const _0x3caf9a of _0x1eafc7) {
    const _0x382c64 = "<%1:[ ]([\\+\\-]\\d+)>".format(_0x3caf9a);
    VisuMZ.ItemsEquipsCore.RegExp.EquipParams.push(new RegExp(_0x382c64, 'i'));
    const _0x172fb4 = "\\b%1\\b".format(_0x3caf9a);
    VisuMZ.ItemsEquipsCore.RegExp.BorderRegExp.push(new RegExp(_0x172fb4, 'g'));
  }
};
Scene_Boot.prototype.process_VisuMZ_ItemsEquipsCore_Notetags = function () {
  if (VisuMZ.ParseAllNotetags) {
    return;
  }
  this.process_VisuMZ_ItemsEquipsCore_EquipSlots();
  const _0x4055b9 = [$dataItems, $dataWeapons, $dataArmors];
  for (const _0x2b358b of _0x4055b9) {
    for (const _0x1aa956 of _0x2b358b) {
      if (!_0x1aa956) {
        continue;
      }
      VisuMZ.ItemsEquipsCore.Parse_Notetags_Category(_0x1aa956, _0x2b358b);
      VisuMZ.ItemsEquipsCore.Parse_Notetags_Prices(_0x1aa956, _0x2b358b);
      VisuMZ.ItemsEquipsCore.Parse_Notetags_ParamValues(_0x1aa956, _0x2b358b);
      VisuMZ.ItemsEquipsCore.Parse_Notetags_ParamJS(_0x1aa956, _0x2b358b);
      VisuMZ.ItemsEquipsCore.Parse_Notetags_EnableJS(_0x1aa956, _0x2b358b);
    }
  }
};
Scene_Boot.prototype.process_VisuMZ_ItemsEquipsCore_EquipSlots = function () {
  for (const _0x2bf832 of $dataClasses) {
    if (!_0x2bf832) {
      continue;
    }
    VisuMZ.ItemsEquipsCore.Parse_Notetags_EquipSlots(_0x2bf832);
  }
};
VisuMZ.ItemsEquipsCore.ParseClassNotetags = VisuMZ.ParseClassNotetags;
VisuMZ.ParseClassNotetags = function (_0x2d846e) {
  VisuMZ.ItemsEquipsCore.ParseClassNotetags.call(this, _0x2d846e);
  VisuMZ.ItemsEquipsCore.Parse_Notetags_EquipSlots(_0x2d846e);
};
VisuMZ.ItemsEquipsCore.ParseItemNotetags = VisuMZ.ParseItemNotetags;
VisuMZ.ParseItemNotetags = function (_0x7bd2d9) {
  VisuMZ.ItemsEquipsCore.ParseItemNotetags.call(this, _0x7bd2d9);
  VisuMZ.ItemsEquipsCore.Parse_Notetags_Batch(_0x7bd2d9, $dataItems);
};
VisuMZ.ItemsEquipsCore.ParseWeaponNotetags = VisuMZ.ParseWeaponNotetags;
VisuMZ.ParseWeaponNotetags = function (_0x61ddd3) {
  VisuMZ.ItemsEquipsCore.ParseWeaponNotetags.call(this, _0x61ddd3);
  VisuMZ.ItemsEquipsCore.Parse_Notetags_Batch(_0x61ddd3, $dataWeapons);
};
VisuMZ.ItemsEquipsCore.ParseArmorNotetags = VisuMZ.ParseArmorNotetags;
VisuMZ.ParseArmorNotetags = function (_0x21d150) {
  VisuMZ.ItemsEquipsCore.ParseArmorNotetags.call(this, _0x21d150);
  VisuMZ.ItemsEquipsCore.Parse_Notetags_Batch(_0x21d150, $dataArmors);
};
VisuMZ.ItemsEquipsCore.Parse_Notetags_EquipSlots = function (_0x5404be) {
  _0x5404be.equipSlots = [];
  const _0x1b1121 = $dataSystem.equipTypes.map(_0x5afdc0 => _0x5afdc0 ? _0x5afdc0.trim() : '');
  if (!BattleManager.isBattleTest() && _0x5404be.note.match(/<EQUIP SLOTS>\s*([\s\S]*)\s*<\/EQUIP SLOTS>/i)) {
    const _0x531b5a = String(RegExp.$1).split(/[\r\n]+/);
    for (const _0x455d5b of _0x531b5a) {
      const _0x4f02f1 = _0x1b1121.indexOf(_0x455d5b.trim());
      if (_0x4f02f1 > 0x0) {
        _0x5404be.equipSlots.push(_0x4f02f1);
      }
    }
  } else {
    for (const _0x39de25 of _0x1b1121) {
      const _0x48cd54 = _0x1b1121.indexOf(_0x39de25.trim());
      if (_0x48cd54 > 0x0) {
        _0x5404be.equipSlots.push(_0x48cd54);
      }
    }
  }
};
VisuMZ.ItemsEquipsCore.Parse_Notetags_Batch = function (_0x4d0943, _0x18a90e) {
  VisuMZ.ItemsEquipsCore.Parse_Notetags_Category(_0x4d0943, _0x18a90e);
  VisuMZ.ItemsEquipsCore.Parse_Notetags_Prices(_0x4d0943, _0x18a90e);
  VisuMZ.ItemsEquipsCore.Parse_Notetags_ParamValues(_0x4d0943, _0x18a90e);
  VisuMZ.ItemsEquipsCore.Parse_Notetags_ParamJS(_0x4d0943, _0x18a90e);
  VisuMZ.ItemsEquipsCore.Parse_Notetags_EnableJS(_0x4d0943, _0x18a90e);
};
VisuMZ.ItemsEquipsCore.Parse_Notetags_Category = function (_0x58add3, _0x4199aa) {
  _0x58add3.categories = [];
  const _0x202c60 = _0x58add3.note || '';
  const _0x259cf1 = _0x202c60.match(/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);
  if (_0x259cf1) {
    for (const _0x2c9fa7 of _0x259cf1) {
      _0x2c9fa7.match(/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);
      const _0x469931 = String(RegExp.$1).toUpperCase().trim().split(',');
      for (const _0xd20d1 of _0x469931) {
        _0x58add3.categories.push(_0xd20d1.trim());
      }
    }
  }
  if (_0x202c60.match(/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)) {
    const _0x4bacde = RegExp.$1.split(/[\r\n]+/);
    for (const _0x515582 of _0x4bacde) {
      _0x58add3.categories.push(_0x515582.toUpperCase().trim());
    }
  }
};
VisuMZ.ItemsEquipsCore.Parse_Notetags_Sorting = function (_0x29fb6c, _0x3f5ac1) {
  if (!_0x29fb6c) {
    return;
  }
  _0x29fb6c.sortPriority = 0x32;
  const _0x2c3ff2 = _0x29fb6c.note || '';
  if (_0x2c3ff2.match(/<(?:|ID )SORT(?:|ING)[ ]PRIORITY:[ ](\d+)>/i)) {
    _0x29fb6c.sortPriority = Number(RegExp.$1);
  }
};
VisuMZ.ItemsEquipsCore.Parse_Notetags_Prices = function (_0x55e63a, _0x278c51) {
  if (_0x55e63a.note.match(/<PRICE:[ ](\d+)>/i)) {
    _0x55e63a.price = Number(RegExp.$1);
  }
};
VisuMZ.ItemsEquipsCore.Parse_Notetags_ParamValues = function (_0x472571, _0x3beadb) {
  if (_0x3beadb === $dataItems) {
    return;
  }
  for (let _0x132603 = 0x0; _0x132603 < 0x8; _0x132603++) {
    const _0x43aba4 = VisuMZ.ItemsEquipsCore.RegExp.EquipParams[_0x132603];
    if (_0x472571.note.match(_0x43aba4)) {
      _0x472571.params[_0x132603] = parseInt(RegExp.$1);
    }
  }
};
VisuMZ.ItemsEquipsCore.paramJS = {};
VisuMZ.ItemsEquipsCore.Parse_Notetags_ParamJS = function (_0x474ede, _0x54dbef) {
  if (_0x54dbef === $dataItems) {
    return;
  }
  if (_0x474ede.note.match(/<JS PARAMETERS>\s*([\s\S]*)\s*<\/JS PARAMETERS>/i)) {
    const _0x2139b5 = String(RegExp.$1);
    const _0x378c60 = (_0x54dbef === $dataWeapons ? 'W%1' : "A%1").format(_0x474ede.id);
    const _0xf09fe2 = "\n            let MaxHP = 0; let MaxMP = 0; let ATK = 0; let DEF = 0;\n            let MAT = 0; let MDF = 0; let AGI = 0; let LUK = 0;\n            const user = this;\n            const target = this;\n            const a = this;\n            const b = this;\n            try {\n                %1\n            } catch (e) {\n                if ($gameTemp.isPlaytest()) console.log(e);\n            }\n            return [MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK][paramId];\n            ".format(_0x2139b5);
    for (let _0x36fbc4 = 0x0; _0x36fbc4 < 0x8; _0x36fbc4++) {
      if (_0x2139b5.match(VisuMZ.ItemsEquipsCore.RegExp.BorderRegExp[_0x36fbc4])) {
        const _0xcd016c = '%1-%2'.format(_0x378c60, _0x36fbc4);
        VisuMZ.ItemsEquipsCore.paramJS[_0xcd016c] = new Function("item", "paramId", _0xf09fe2);
      }
    }
  }
};
VisuMZ.ItemsEquipsCore.itemEnableJS = {};
VisuMZ.ItemsEquipsCore.Parse_Notetags_EnableJS = function (_0x3d9f39, _0x235307) {
  if (_0x235307 !== $dataItems) {
    return;
  }
  if (_0x3d9f39.note.match(/<JS ITEM ENABLE>\s*([\s\S]*)\s*<\/JS ITEM ENABLE>/i)) {
    const _0x3ca5c7 = String(RegExp.$1);
    const _0x1964e6 = "\n            let enabled = true;\n            const user = this;\n            const target = this;\n            const a = this;\n            const b = this;\n            try {\n                %1\n            } catch (e) {\n                if ($gameTemp.isPlaytest()) console.log(e);\n            }\n            return enabled;\n        ".format(_0x3ca5c7);
    VisuMZ.ItemsEquipsCore.itemEnableJS[_0x3d9f39.id] = new Function("item", _0x1964e6);
  }
};
DataManager.isKeyItem = function (_0x33b35e) {
  return this.isItem(_0x33b35e) && _0x33b35e.itypeId === 0x2;
};
DataManager.maxItemAmount = function (_0x24057c) {
  if (!_0x24057c) {
    return 0x63;
  } else {
    return _0x24057c.note.match(/<MAX:[ ](\d+)>/i) ? parseInt(RegExp.$1) : this.defaultItemMax(_0x24057c);
  }
};
DataManager.defaultItemMax = function (_0x2fd463) {
  if (this.isItem(_0x2fd463)) {
    return VisuMZ.ItemsEquipsCore.Settings.ItemScene.MaxItems;
  } else {
    if (this.isWeapon(_0x2fd463)) {
      return VisuMZ.ItemsEquipsCore.Settings.ItemScene.MaxWeapons;
    } else {
      if (this.isArmor(_0x2fd463)) {
        return VisuMZ.ItemsEquipsCore.Settings.ItemScene.MaxArmors;
      }
    }
  }
};
DataManager.getClassIdWithName = function (_0x55969d) {
  _0x55969d = _0x55969d.toUpperCase().trim();
  this._classIDs = this._classIDs || {};
  if (this._classIDs[_0x55969d]) {
    return this._classIDs[_0x55969d];
  }
  for (const _0x38b56e of $dataClasses) {
    if (!_0x38b56e) {
      continue;
    }
    let _0x57a867 = _0x38b56e.name;
    _0x57a867 = _0x57a867.replace(/\x1I\[(\d+)\]/gi, '');
    _0x57a867 = _0x57a867.replace(/\\I\[(\d+)\]/gi, '');
    this._classIDs[_0x57a867.toUpperCase().trim()] = _0x38b56e.id;
  }
  return this._classIDs[_0x55969d] || 0x0;
};
DataManager.getSkillIdWithName = function (_0x1b2170) {
  _0x1b2170 = _0x1b2170.toUpperCase().trim();
  this._skillIDs = this._skillIDs || {};
  if (this._skillIDs[_0x1b2170]) {
    return this._skillIDs[_0x1b2170];
  }
  for (const _0x2b18d7 of $dataSkills) {
    if (!_0x2b18d7) {
      continue;
    }
    this._skillIDs[_0x2b18d7.name.toUpperCase().trim()] = _0x2b18d7.id;
  }
  return this._skillIDs[_0x1b2170] || 0x0;
};
DataManager.getItemIdWithName = function (_0x2a9021) {
  _0x2a9021 = _0x2a9021.toUpperCase().trim();
  this._itemIDs = this._itemIDs || {};
  if (this._itemIDs[_0x2a9021]) {
    return this._itemIDs[_0x2a9021];
  }
  for (const _0x170459 of $dataItems) {
    if (!_0x170459) {
      continue;
    }
    this._itemIDs[_0x170459.name.toUpperCase().trim()] = _0x170459.id;
  }
  return this._itemIDs[_0x2a9021] || 0x0;
};
DataManager.getWeaponIdWithName = function (_0x3e6f4f) {
  _0x3e6f4f = _0x3e6f4f.toUpperCase().trim();
  this._weaponIDs = this._weaponIDs || {};
  if (this._weaponIDs[_0x3e6f4f]) {
    return this._weaponIDs[_0x3e6f4f];
  }
  for (const _0x11066c of $dataWeapons) {
    if (!_0x11066c) {
      continue;
    }
    this._weaponIDs[_0x11066c.name.toUpperCase().trim()] = _0x11066c.id;
  }
  return this._weaponIDs[_0x3e6f4f] || 0x0;
};
DataManager.getArmorIdWithName = function (_0x26bc90) {
  _0x26bc90 = _0x26bc90.toUpperCase().trim();
  this._armorIDs = this._armorIDs || {};
  if (this._armorIDs[_0x26bc90]) {
    return this._armorIDs[_0x26bc90];
  }
  for (const _0x5ebacf of $dataArmors) {
    if (!_0x5ebacf) {
      continue;
    }
    this._armorIDs[_0x5ebacf.name.toUpperCase().trim()] = _0x5ebacf.id;
  }
  return this._armorIDs[_0x26bc90] || 0x0;
};
DataManager.getEtypeIdWithName = function (_0x224514) {
  _0x224514 = _0x224514.toUpperCase().trim();
  this._etypeIDs = this._etypeIDs || {};
  if (this._etypeIDs[_0x224514]) {
    return this._etypeIDs[_0x224514];
  }
  for (const _0x77ef17 of $dataSystem.equipTypes) {
    this._etypeIDs[_0x77ef17.toUpperCase().trim()] = $dataSystem.equipTypes.indexOf(_0x77ef17);
  }
  return this._etypeIDs[_0x224514] || 0x0;
};
VisuMZ.ItemsEquipsCore.SetupProxyItemGroups = function () {
  VisuMZ.ItemsEquipsCore.SetupProxyItemGroup($dataItems);
  VisuMZ.ItemsEquipsCore.SetupProxyItemGroup($dataWeapons);
  VisuMZ.ItemsEquipsCore.SetupProxyItemGroup($dataArmors);
};
VisuMZ.ItemsEquipsCore.SetupProxyItemGroup = function (_0x1d39aa) {
  for (const _0x308be3 of _0x1d39aa) {
    if (!_0x308be3) {
      continue;
    }
    if (!DataManager.isProxyItem(_0x308be3)) {
      continue;
    }
    const _0xf28e4f = DataManager.getProxyItem(_0x308be3);
    const _0x49b33a = ["name", "iconIndex", "description"];
    for (const _0x1b8e1f of _0x49b33a) {
      _0x308be3[_0x1b8e1f] = _0xf28e4f[_0x1b8e1f];
    }
  }
};
DataManager.isProxyItem = function (_0x553066) {
  if (!_0x553066) {
    return false;
  }
  if (!_0x553066.note) {
    return false;
  }
  return _0x553066 && _0x553066.note.match(/<PROXY:[ ](.*)>/i);
};
DataManager.getProxyItem = function (_0x25a06f) {
  return this.isProxyItem(_0x25a06f) ? this.switchProxyItem(_0x25a06f) || _0x25a06f : _0x25a06f;
};
DataManager.switchProxyItem = function (_0x5c1aaa) {
  _0x5c1aaa.note.match(/<PROXY:[ ](.*)>/i);
  const _0x51c3b1 = RegExp.$1.trim();
  const _0x11718b = /^\d+$/.test(_0x51c3b1);
  if (this.isItem(_0x5c1aaa)) {
    const _0x4d9db2 = _0x11718b ? Number(_0x51c3b1) : DataManager.getItemIdWithName(_0x51c3b1);
    return $dataItems[_0x4d9db2] || _0x5c1aaa;
  } else {
    if (this.isWeapon(_0x5c1aaa)) {
      const _0x59648f = _0x11718b ? Number(_0x51c3b1) : DataManager.getWeaponIdWithName(_0x51c3b1);
      return $dataWeapons[_0x59648f] || _0x5c1aaa;
    } else {
      if (this.isArmor(_0x5c1aaa)) {
        const _0x20bb01 = _0x11718b ? Number(_0x51c3b1) : DataManager.getArmorIdWithName(_0x51c3b1);
        return $dataArmors[_0x20bb01] || _0x5c1aaa;
      }
    }
  }
  return _0x5c1aaa;
};
VisuMZ.ItemsEquipsCore.Window_ItemList_item = Window_ItemList.prototype.item;
Window_ItemList.prototype.item = function () {
  if ($gameTemp._bypassProxy) {
    return VisuMZ.ItemsEquipsCore.Window_ItemList_item.call(this);
  }
  return DataManager.getProxyItem(VisuMZ.ItemsEquipsCore.Window_ItemList_item.call(this));
};
Window_ItemList.prototype.proxyItem = function () {
  return VisuMZ.ItemsEquipsCore.Window_ItemList_item.call(this);
};
VisuMZ.ItemsEquipsCore.Window_ShopBuy_item = Window_ShopBuy.prototype.item;
Window_ShopBuy.prototype.item = function () {
  if ($gameTemp._bypassProxy) {
    return VisuMZ.ItemsEquipsCore.Window_ShopBuy_item.call(this);
  }
  return DataManager.getProxyItem(VisuMZ.ItemsEquipsCore.Window_ShopBuy_item.call(this));
};
Window_ShopBuy.prototype.proxyItem = function () {
  return VisuMZ.ItemsEquipsCore.Window_ShopBuy_item.call(this);
};
VisuMZ.ItemsEquipsCore.Game_Item_setObject = Game_Item.prototype.setObject;
Game_Item.prototype.setObject = function (_0x9395b7) {
  if (DataManager.isProxyItem(_0x9395b7)) {
    return;
  }
  VisuMZ.ItemsEquipsCore.Game_Item_setObject.call(this, _0x9395b7);
};
VisuMZ.ItemsEquipsCore.SetupArtifactItemIDs = function () {
  this.artifactIDs = {
    'partyArtifactIDs': [],
    'troopArtifactIDs': []
  };
  for (const _0x2ab70b of $dataArmors) {
    if (!_0x2ab70b) {
      continue;
    }
    if (!DataManager.isArtifact(_0x2ab70b)) {
      continue;
    }
    if (DataManager.isPartyArtifact(_0x2ab70b)) {
      this.artifactIDs.partyArtifactIDs.push(_0x2ab70b.id);
    }
    if (DataManager.isTroopArtifact(_0x2ab70b)) {
      this.artifactIDs.troopArtifactIDs.push(_0x2ab70b.id);
    }
  }
};
DataManager.isArtifact = function (_0x954d07) {
  if (!this.isArmor(_0x954d07)) {
    return false;
  }
  const _0x3542ff = _0x954d07.note;
  if (!_0x3542ff) {
    return false;
  }
  if (_0x3542ff.match(/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i)) {
    return true;
  }
  if (_0x3542ff.match(/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i)) {
    return true;
  }
  if (_0x3542ff.match(/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i)) {
    return true;
  }
  if (_0x3542ff.match(/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i)) {
    return true;
  }
  return false;
};
DataManager.isStackableArtifact = function (_0x5caca0) {
  if (!this.isArtifact(_0x5caca0)) {
    return false;
  }
  const _0x440246 = _0x5caca0.note;
  if (!_0x440246) {
    return false;
  }
  if (_0x440246.match(/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i)) {
    return true;
  }
  if (_0x440246.match(/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i)) {
    return true;
  }
  return false;
};
DataManager.isPartyArtifact = function (_0x5e3245) {
  if (!this.isArtifact(_0x5e3245)) {
    return false;
  }
  const _0x31f8ff = _0x5e3245.note;
  if (!_0x31f8ff) {
    return false;
  }
  if (_0x31f8ff.match(/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i)) {
    return true;
  }
  if (_0x31f8ff.match(/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i)) {
    return true;
  }
  return false;
};
DataManager.isTroopArtifact = function (_0x557d67) {
  if (!this.isArtifact(_0x557d67)) {
    return false;
  }
  const _0xb1c636 = _0x557d67.note;
  if (!_0xb1c636) {
    return false;
  }
  if (_0xb1c636.match(/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i)) {
    return true;
  }
  if (_0xb1c636.match(/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i)) {
    return true;
  }
  return false;
};
VisuMZ.ItemsEquipsCore.Game_BattlerBase_canEquip_artifact = Game_BattlerBase.prototype.canEquip;
Game_BattlerBase.prototype.canEquip = function (_0x377b66) {
  if (DataManager.isArtifact(_0x377b66)) {
    return false;
  }
  if (!DataManager.meetsClassRequirements(this, _0x377b66)) {
    return false;
  }
  if (!DataManager.meetsEquipRequirements(this, _0x377b66)) {
    return false;
  }
  return VisuMZ.ItemsEquipsCore.Game_BattlerBase_canEquip_artifact.call(this, _0x377b66);
};
VisuMZ.ItemsEquipsCore.Game_BattlerBase_param_artifact = Game_BattlerBase.prototype.param;
Game_BattlerBase.prototype.param = function (_0x5525ab) {
  this._allowArtifactParamBase = true;
  const _0x16d9c5 = VisuMZ.ItemsEquipsCore.Game_BattlerBase_param_artifact.call(this, _0x5525ab);
  this._allowArtifactParamBase = undefined;
  return _0x16d9c5;
};
VisuMZ.ItemsEquipsCore.Game_Actor_artifact = Game_Actor.prototype.traitObjects;
Game_Actor.prototype.traitObjects = function () {
  this._allowArtifactTraitObjects = true;
  const _0x299295 = VisuMZ.ItemsEquipsCore.Game_Actor_artifact.call(this);
  this._allowArtifactTraitObjects = undefined;
  return _0x299295;
};
VisuMZ.ItemsEquipsCore.Game_Actor_equips_artifacts = Game_Actor.prototype.equips;
Game_Actor.prototype.equips = function () {
  const _0x43d7ec = VisuMZ.ItemsEquipsCore.Game_Actor_equips_artifacts.call(this);
  if (this._allowArtifactTraitObjects || this._allowArtifactParamBase) {
    const _0x5c736d = _0x43d7ec.concat($gameParty.partyArtifacts());
    return _0x5c736d;
  } else {
    return _0x43d7ec;
  }
};
VisuMZ.ItemsEquipsCore.Game_BattlerBase_paramPlus_artifact = Game_BattlerBase.prototype.paramPlus;
Game_BattlerBase.prototype.paramPlus = function (_0x26843c) {
  let _0x5380c0 = VisuMZ.ItemsEquipsCore.Game_BattlerBase_paramPlus_artifact.call(this, _0x26843c);
  if (this.constructor === Game_Enemy) {
    for (const _0x1d2b61 of $gameParty.troopArtifacts()) {
      if (_0x1d2b61) {
        _0x5380c0 += _0x1d2b61.params[_0x26843c];
      }
    }
  }
  return _0x5380c0;
};
VisuMZ.ItemsEquipsCore.Game_Enemy_traitObjects_artifact = Game_Enemy.prototype.traitObjects;
Game_Enemy.prototype.traitObjects = function () {
  let _0x4829c4 = VisuMZ.ItemsEquipsCore.Game_Enemy_traitObjects_artifact.call(this);
  return _0x4829c4.concat($gameParty.troopArtifacts());
};
VisuMZ.ItemsEquipsCore.Game_Party_gainItem_artifact = Game_Party.prototype.gainItem;
Game_Party.prototype.gainItem = function (_0x420722, _0x28e1e3, _0x3ba89a) {
  VisuMZ.ItemsEquipsCore.Game_Party_gainItem_artifact.call(this, _0x420722, _0x28e1e3, _0x3ba89a);
  if (DataManager.isArtifact(_0x420722)) {
    let _0x4d6d5c = $gameParty.allMembers();
    if ($gameParty.inBattle()) {
      _0x4d6d5c = _0x4d6d5c.concat($gameTroop.members());
    }
    for (const _0x180bec of _0x4d6d5c) {
      if (!_0x180bec) {
        continue;
      }
      _0x180bec._cache = {};
    }
  }
};
Game_Party.prototype.partyArtifacts = function () {
  let _0x52c760 = [];
  const _0x560ea4 = VisuMZ.ItemsEquipsCore.artifactIDs.partyArtifactIDs;
  if (_0x560ea4) {
    for (const _0x26b5d6 of _0x560ea4) {
      const _0x33a532 = $dataArmors[_0x26b5d6];
      if (!_0x33a532) {
        continue;
      }
      if (!this.hasItem(_0x33a532)) {
        continue;
      }
      let _0x4d03c1 = 0x1;
      if (DataManager.isStackableArtifact(_0x33a532)) {
        _0x4d03c1 = this.numItems(_0x33a532);
      }
      while (_0x4d03c1--) {
        _0x52c760.push(_0x33a532);
      }
    }
  }
  return _0x52c760;
};
Game_Party.prototype.troopArtifacts = function () {
  let _0x1c8b30 = [];
  const _0x24b172 = VisuMZ.ItemsEquipsCore.artifactIDs.troopArtifactIDs;
  if (_0x24b172) {
    for (const _0x19d574 of _0x24b172) {
      const _0x1f5866 = $dataArmors[_0x19d574];
      if (!_0x1f5866) {
        continue;
      }
      if (!this.hasItem(_0x1f5866)) {
        continue;
      }
      let _0x4ca473 = 0x1;
      if (DataManager.isStackableArtifact(_0x1f5866)) {
        _0x4ca473 = this.numItems(_0x1f5866);
      }
      while (_0x4ca473--) {
        _0x1c8b30.push(_0x1f5866);
      }
    }
  }
  return _0x1c8b30;
};
Game_Party.prototype.artifacts = function () {
  return this.partyArtifacts().concat(this.troopArtifacts());
};
VisuMZ.ItemsEquipsCore.Game_Party_setupBattleTestItems_artifact = Game_Party.prototype.setupBattleTestItems;
Game_Party.prototype.setupBattleTestItems = function () {
  VisuMZ.ItemsEquipsCore.Game_Party_setupBattleTestItems_artifact.call(this);
  this.removeBattleTestArtifacts();
};
Game_Party.prototype.removeBattleTestArtifacts = function () {
  const _0x303e0b = $gameParty.armors().filter(_0x130400 => DataManager.isArtifact(_0x130400));
  for (const _0xd969e0 of _0x303e0b) {
    const _0xfcdcb8 = this.numItems(_0xd969e0);
    if (_0xfcdcb8) {
      this.loseItem(_0xd969e0, _0xfcdcb8);
    }
  }
};
DataManager.meetsClassRequirements = function (_0x119a22, _0x46fbfa) {
  if (this.isItem(_0x46fbfa)) {
    return false;
  }
  if (!_0x119a22) {
    return false;
  }
  if ($gameTemp._checkEquipRequirements) {
    return true;
  }
  if (BattleManager.isBattleTest()) {
    return true;
  }
  const _0x14b7fe = this.getClassRequirements(_0x46fbfa);
  if (_0x14b7fe.length <= 0x0) {
    return true;
  }
  return _0x14b7fe.includes(_0x119a22.currentClass().id);
};
DataManager.getClassRequirements = function (_0x568d8b) {
  if (!_0x568d8b) {
    return [];
  }
  this._getClassRequirements = this._getClassRequirements || {};
  const _0x2bab37 = '%1-%2'.format(this.isWeapon(_0x568d8b) ? "WEAPON" : 'ARMOR', _0x568d8b.id);
  if (this._getClassRequirements[_0x2bab37] !== undefined) {
    return this._getClassRequirements[_0x2bab37];
  }
  let _0xa4d000 = [];
  const _0x4767b2 = _0x568d8b.note || '';
  if (_0x4767b2.match(/<EQUIP FOR CLASS(?:|ES) ONLY:[ ](.*)>/i)) {
    const _0xaa7ce4 = String(RegExp.$1).split(',').map(_0x189a78 => _0x189a78.trim());
    for (const _0x5053f9 of _0xaa7ce4) {
      const _0x5425fa = /^\d+$/.test(_0x5053f9);
      if (_0x5425fa) {
        _0xa4d000.push(Number(_0x5053f9));
      } else {
        _0xa4d000.push(DataManager.getClassIdWithName(_0x5053f9));
      }
    }
  }
  this._getClassRequirements[_0x2bab37] = _0xa4d000;
  return this._getClassRequirements[_0x2bab37];
};
DataManager.meetsEquipRequirements = function (_0x40caa6, _0xee546f) {
  if (this.isItem(_0xee546f)) {
    return false;
  }
  if (!_0x40caa6) {
    return false;
  }
  if ($gameTemp._checkEquipRequirements) {
    return true;
  }
  if (BattleManager.isBattleTest()) {
    return true;
  }
  const _0x3cb3ca = this.getEquipRequirements(_0xee546f);
  for (const _0x4d80ba of _0x3cb3ca) {
    if (!this.meetsEquipRequirement(_0x40caa6, _0x4d80ba)) {
      return false;
    }
  }
  return true;
};
DataManager.getEquipRequirements = function (_0x3c8471) {
  if (!_0x3c8471) {
    return [];
  }
  this._getEquipRequirements = this._getEquipRequirements || {};
  const _0x2e2d47 = '%1-%2'.format(this.isWeapon(_0x3c8471) ? "WEAPON" : "ARMOR", _0x3c8471.id);
  if (this._getEquipRequirements[_0x2e2d47] !== undefined) {
    return this._getEquipRequirements[_0x2e2d47];
  }
  let _0x1d7797 = [];
  const _0x2043e4 = _0x3c8471.note || '';
  if (_0x2043e4.match(/<EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>\s*([\s\S]*)\s*<\/EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>/i)) {
    _0x1d7797 = String(RegExp.$1).split(/[\r\n]+/);
  }
  this._getEquipRequirements[_0x2e2d47] = _0x1d7797;
  return this._getEquipRequirements[_0x2e2d47];
};
DataManager.meetsEquipRequirement = function (_0x17ffb3, _0x34439a) {
  if (_0x34439a.match(/(?:LEVEL|LV|LVL)[ ](>|>=|===|<=|<)[ ](\d+)/i)) {
    const _0x5ea100 = String(RegExp.$1).trim();
    const _0x4faa52 = Number(RegExp.$2);
    switch (_0x5ea100) {
      case '>':
        return _0x17ffb3.level > _0x4faa52;
      case '>=':
        return _0x17ffb3.level >= _0x4faa52;
      case "===":
        return _0x17ffb3.level === _0x4faa52;
      case '<=':
        return _0x17ffb3.level <= _0x4faa52;
      case '<':
        return _0x17ffb3.level < _0x4faa52;
    }
    return false;
  }
  if (_0x34439a.match(/(MAXHP|MAXMP|MHP|MMP)[ ](>|>=|===|<=|<)[ ](\d+)/i)) {
    const _0xf4e835 = String(RegExp.$1).toLowerCase().trim();
    const _0x400496 = String(RegExp.$2).trim();
    const _0x5467d3 = Number(RegExp.$3);
    let _0x447e97 = 0x0;
    if (["maxmp", "mmp"].includes(_0xf4e835)) {
      _0x447e97 = 0x1;
    }
    const _0x149ccb = _0x17ffb3._paramPlus[_0x447e97] || 0x0;
    switch (_0x400496) {
      case '>':
        return _0x17ffb3.paramBase(_0x447e97) + _0x149ccb > _0x5467d3;
      case '>=':
        return _0x17ffb3.paramBase(_0x447e97) + _0x149ccb >= _0x5467d3;
      case "===":
        return _0x17ffb3.paramBase(_0x447e97) + _0x149ccb === _0x5467d3;
      case '<=':
        return _0x17ffb3.paramBase(_0x447e97) + _0x149ccb <= _0x5467d3;
      case '<':
        return _0x17ffb3.paramBase(_0x447e97) + _0x149ccb < _0x5467d3;
    }
    return false;
  }
  if (_0x34439a.match(/(ATK|DEF|MAT|MDF|AGI|LUK)[ ](>|>=|===|<=|<)[ ](\d+)/i)) {
    const _0x4764e8 = String(RegExp.$1).toLowerCase().trim();
    const _0x3defb0 = String(RegExp.$2).trim();
    const _0x3267b1 = Number(RegExp.$3);
    const _0x1f69ee = ["atk", "def", "mat", "mdf", 'agi', "luk"];
    let _0x15182a = _0x1f69ee.indexOf(_0x4764e8) + 0x2;
    if (_0x15182a < 0x2) {
      return false;
    }
    const _0x248d5d = _0x17ffb3._paramPlus[_0x15182a] || 0x0;
    switch (_0x3defb0) {
      case '>':
        return _0x17ffb3.paramBase(_0x15182a) + _0x248d5d > _0x3267b1;
      case '>=':
        return _0x17ffb3.paramBase(_0x15182a) + _0x248d5d >= _0x3267b1;
      case "===":
        return _0x17ffb3.paramBase(_0x15182a) + _0x248d5d === _0x3267b1;
      case '<=':
        return _0x17ffb3.paramBase(_0x15182a) + _0x248d5d <= _0x3267b1;
      case '<':
        return _0x17ffb3.paramBase(_0x15182a) + _0x248d5d < _0x3267b1;
    }
    return false;
  }
  if (_0x34439a.match(/LEARNED SKILL:[ ](\d+)/i)) {
    const _0x5d06b6 = Number(RegExp.$1);
    return _0x17ffb3.isLearnedSkill(_0x5d06b6);
  } else {
    if (_0x34439a.match(/LEARNED SKILL:[ ](.*)/i)) {
      const _0x2450bd = String(RegExp.$1);
      const _0x25c0c6 = this.getSkillIdWithName(_0x2450bd);
      return _0x17ffb3.isLearnedSkill(_0x25c0c6);
    }
  }
  if (_0x34439a.match(/SWITCH:[ ](\d+)/i)) {
    const _0x23d542 = Number(RegExp.$1);
    return $gameSwitches.value(_0x23d542);
  }
  return true;
};
DataManager.getEtypeIDs = function (_0x43eb1e) {
  return this.isArmor(_0x43eb1e) ? this.getEtypeIDsCache(_0x43eb1e) : [_0x43eb1e.etypeId || 0x0];
};
DataManager.getEtypeIDsCache = function (_0x48bc5a) {
  this._cache_etypeIDs = this._cache_etypeIDs || {};
  if (this._cache_etypeIDs[_0x48bc5a.id] !== undefined) {
    return this._cache_etypeIDs[_0x48bc5a.id];
  }
  this._cache_etypeIDs[_0x48bc5a.id] = [_0x48bc5a.etypeId || 0x0];
  const _0x4e78ef = _0x48bc5a.note || '';
  if (_0x4e78ef.match(/<ADDED ETYPE(?:|S):[ ](.*)>/i)) {
    const _0x2cd7b9 = String(RegExp.$1).split(',').map(_0x28d4a7 => _0x28d4a7.trim());
    for (const _0xdc0f5b of _0x2cd7b9) {
      const _0xec298a = /^\d+$/.test(_0xdc0f5b);
      let _0x3b929c = 0x0;
      if (_0xec298a) {
        _0x3b929c = Number(_0xdc0f5b);
      } else {
        _0x3b929c = this.getEtypeIdWithName(_0xdc0f5b);
      }
      if (_0x3b929c > 0x1) {
        this._cache_etypeIDs[_0x48bc5a.id].push(_0x3b929c);
      }
    }
  }
  return this._cache_etypeIDs[_0x48bc5a.id];
};
Game_BattlerBase.prototype.canEquipArmor = function (_0x360fd3) {
  return this.isEquipAtypeOk(_0x360fd3.atypeId) && !this.isEquipTypeSealed(_0x360fd3.etypeId) && DataManager.getEtypeIDs(_0x360fd3).every(_0x4d19dd => !this.isEquipTypeSealed(_0x4d19dd));
};
DataManager.isCursedItem = function (_0x4c7b22) {
  if (!this.isWeapon(_0x4c7b22) && !this.isArmor(_0x4c7b22)) {
    return false;
  }
  if (Imported.VisuMZ_2_WeaponSwapSystem && this.isWeapon(_0x4c7b22)) {
    return false;
  }
  if (!_0x4c7b22.note) {
    return false;
  }
  return _0x4c7b22.note.match(/<CURSED>/i);
};
DataManager.getPurifyTransformation = function (_0x5386e7) {
  if (!_0x5386e7) {
    return _0x5386e7;
  }
  if (!this.isWeapon(_0x5386e7) && !this.isArmor(_0x5386e7)) {
    return _0x5386e7;
  }
  if (_0x5386e7.note.match(/<PURIFY TRANSFORM:[ ](.*)>/i)) {
    const _0x170779 = String(RegExp.$1).trim();
    const _0x1034e4 = /^\d+$/.test(_0x170779);
    if (_0x1034e4) {
      if (this.isWeapon(_0x5386e7)) {
        return $dataWeapons[Number(_0x170779)];
      }
      if (this.isArmor(_0x5386e7)) {
        return $dataArmors[Number(_0x170779)];
      }
    } else {
      if (this.isWeapon(_0x5386e7)) {
        return $dataWeapons[this.getWeaponIdWithName(_0x170779)];
      }
      if (this.isArmor(_0x5386e7)) {
        return $dataArmors[this.getArmorIdWithName(_0x170779)];
      }
    }
  }
  return _0x5386e7;
};
Game_Party.prototype.purifyCursedEquips = function () {
  const _0x1b2916 = this.allMembers();
  for (const _0xee2b41 of _0x1b2916) {
    if (!_0xee2b41) {
      continue;
    }
    _0xee2b41.purifyCursedEquips();
  }
};
Game_Actor.prototype.purifyCursedEquips = function () {
  const _0x207b14 = this.equipSlots().length;
  for (let _0x38a654 = 0x0; _0x38a654 < _0x207b14; _0x38a654++) {
    const _0x4dfb7d = this._equips[_0x38a654];
    if (!_0x4dfb7d) {
      continue;
    }
    const _0x14cf89 = _0x4dfb7d.object();
    if (!DataManager.isCursedItem(_0x14cf89)) {
      continue;
    }
    let _0xf44b3e = DataManager.getPurifyTransformation(_0x14cf89);
    if (this.isPurifyItemSwapOk(_0x14cf89, _0xf44b3e)) {
      this._equips[_0x38a654].setObject(_0xf44b3e);
      this.refresh();
    } else {
      this.changeEquip(_0x38a654, null);
    }
  }
};
Game_Actor.prototype.isPurifyItemSwapOk = function (_0x23c815, _0x2aa34a) {
  if (_0x23c815 === _0x2aa34a) {
    return false;
  }
  const _0x526b16 = DataManager.getEtypeIDs(_0x2aa34a);
  if (!_0x526b16.includes(_0x23c815.etypeId)) {
    return false;
  }
  if (DataManager.isWeapon(_0x2aa34a)) {
    return this.isEquipWtypeOk(_0x2aa34a.wtypeId);
  } else {
    if (DataManager.isArmor(_0x2aa34a)) {
      return this.isEquipAtypeOk(_0x2aa34a.atypeId);
    }
  }
  return false;
};
TextManager.ITEMS_EQUIPS_CORE = {
  'helpDesc': {
    'equip': VisuMZ.ItemsEquipsCore.Settings.EquipScene.equipCmdDesc ?? "Pick and choose equipment to change.",
    'optimize': VisuMZ.ItemsEquipsCore.Settings.EquipScene.optimizeCmdDesc ?? "Equip the strongest available equipment.",
    'clear': VisuMZ.ItemsEquipsCore.Settings.EquipScene.clearCmdDesc ?? "Remove all available equipment."
  }
};
ColorManager.getItemColor = function (_0x198e84) {
  if (!_0x198e84) {
    return this.normalColor();
  } else {
    if (_0x198e84.note.match(/<COLOR:[ ](\d+)>/i)) {
      return this.textColor(Number(RegExp.$1).clamp(0x0, 0x1f));
    } else {
      return _0x198e84.note.match(/<COLOR:[ ]#(.*)>/i) ? '#' + String(RegExp.$1) : this.normalColor();
    }
  }
};
ColorManager.getColor = function (_0x4656d5) {
  _0x4656d5 = String(_0x4656d5);
  return _0x4656d5.match(/#(.*)/i) ? "#%1".format(String(RegExp.$1)) : this.textColor(Number(_0x4656d5));
};
SceneManager.isSceneShop = function () {
  return this._scene && this._scene.constructor === Scene_Shop;
};
Game_Temp.prototype.newLabelEnabled = function () {
  if (this._bypassNewLabel) {
    return false;
  }
  return VisuMZ.ItemsEquipsCore.Settings.New.Enable;
};
VisuMZ.ShopMenuStatusStandard = VisuMZ.ItemsEquipsCore.Settings.StatusWindow.MultiplierStandard;
VisuMZ.ItemsEquipsCore.Game_BattlerBase_param = Game_BattlerBase.prototype.param;
Game_BattlerBase.prototype.param = function (_0x786782) {
  return this._shopStatusMenuMode ? this._shopStatusMenuAlly ? VisuMZ.ShopMenuStatusStandard : 0x1 : VisuMZ.ItemsEquipsCore.Game_BattlerBase_param.call(this, _0x786782);
};
VisuMZ.ItemsEquipsCore.Game_BattlerBase_meetsItemConditions = Game_BattlerBase.prototype.meetsItemConditions;
Game_BattlerBase.prototype.meetsItemConditions = function (_0x12f940) {
  if (!_0x12f940) {
    return false;
  }
  if (!VisuMZ.ItemsEquipsCore.Game_BattlerBase_meetsItemConditions.call(this, _0x12f940)) {
    return false;
  }
  if (!this.meetsItemConditionsNotetags(_0x12f940)) {
    return false;
  }
  if (!this.meetsItemConditionsJS(_0x12f940)) {
    return false;
  }
  return true;
};
Game_BattlerBase.prototype.meetsItemConditionsNotetags = function (_0xb1f8ea) {
  if (!this.checkItemConditionsSwitchNotetags(_0xb1f8ea)) {
    return false;
  }
  return true;
};
Game_BattlerBase.prototype.checkItemConditionsSwitchNotetags = function (_0x37c29e) {
  const _0x15e696 = _0x37c29e.note;
  if (_0x15e696.match(/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x543044 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x1cd530 of _0x543044) {
      if (!$gameSwitches.value(_0x1cd530)) {
        return false;
      }
    }
    return true;
  }
  if (_0x15e696.match(/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x2da041 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0xfd691a of _0x2da041) {
      if (!$gameSwitches.value(_0xfd691a)) {
        return false;
      }
    }
    return true;
  }
  if (_0x15e696.match(/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x364cb8 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x3e0047 of _0x364cb8) {
      if ($gameSwitches.value(_0x3e0047)) {
        return true;
      }
    }
    return false;
  }
  if (_0x15e696.match(/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x2a6dd2 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0xdecd40 of _0x2a6dd2) {
      if (!$gameSwitches.value(_0xdecd40)) {
        return true;
      }
    }
    return false;
  }
  if (_0x15e696.match(/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x82ab4 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x175ad1 of _0x82ab4) {
      if (!$gameSwitches.value(_0x175ad1)) {
        return true;
      }
    }
    return false;
  }
  if (_0x15e696.match(/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0xb8be2d = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x3db6d5 of _0xb8be2d) {
      if ($gameSwitches.value(_0x3db6d5)) {
        return false;
      }
    }
    return true;
  }
  return true;
};
Game_BattlerBase.prototype.meetsItemConditionsJS = function (_0x4b9351) {
  const _0x24caf9 = VisuMZ.ItemsEquipsCore.itemEnableJS;
  return _0x24caf9[_0x4b9351.id] ? _0x24caf9[_0x4b9351.id].call(this, _0x4b9351) : true;
};
Game_Actor.prototype.initEquips = function (_0x2f75f8) {
  _0x2f75f8 = this.convertInitEquipsToItems(_0x2f75f8);
  const _0x110c88 = this.equipSlots();
  this._equips = [];
  for (let _0x4a7531 = 0x0; _0x4a7531 < _0x110c88.length; _0x4a7531++) {
    this._equips[_0x4a7531] = new Game_Item();
  }
  for (let _0x2f42a5 = 0x0; _0x2f42a5 < _0x110c88.length; _0x2f42a5++) {
    const _0x34a31e = _0x110c88[_0x2f42a5];
    const _0x3489c0 = this.getMatchingInitEquip(_0x2f75f8, _0x34a31e);
    if (this.canEquip(_0x3489c0)) {
      this._equips[_0x2f42a5].setObject(_0x3489c0);
    }
  }
  this.releaseUnequippableItems(true);
  this.refresh();
};
Game_Actor.prototype.convertInitEquipsToItems = function (_0x23956b) {
  const _0x1869a1 = [];
  for (let _0x568cd3 = 0x0; _0x568cd3 < _0x23956b.length; _0x568cd3++) {
    const _0x4afadf = _0x23956b[_0x568cd3];
    if (_0x4afadf <= 0x0) {
      continue;
    }
    const _0x2526d5 = $dataSystem.equipTypes[_0x568cd3 + 0x1];
    if (_0x2526d5 === $dataSystem.equipTypes[0x1] || _0x568cd3 === 0x1 && this.isDualWield()) {
      _0x1869a1.push($dataWeapons[_0x4afadf]);
    } else {
      if (BattleManager.isBattleTest()) {
        const _0x44261b = $dataArmors[_0x4afadf];
        if (_0x44261b && _0x44261b.etypeId === _0x568cd3 + 0x1) {
          _0x1869a1.push(_0x44261b);
        }
      } else {
        const _0x45c7cf = $dataArmors[_0x4afadf];
        if (_0x45c7cf && _0x45c7cf.etypeId === _0x568cd3 + 0x1) {
          _0x1869a1.push(_0x45c7cf);
        }
      }
    }
  }
  return _0x1869a1;
};
Game_Actor.prototype.getMatchingInitEquip = function (_0x3aee73, _0x1e325b) {
  for (const _0x4275f9 of _0x3aee73) {
    if (!_0x4275f9) {
      continue;
    }
    if (_0x4275f9.etypeId === _0x1e325b) {
      _0x3aee73.splice(_0x3aee73.indexOf(_0x4275f9), 0x1);
      return _0x4275f9;
    }
  }
  return null;
};
Game_Actor.prototype.equipSlots = function () {
  const _0x4297ed = VisuMZ.ItemsEquipsCore.deepCopy(this._forcedSlots || this.currentClass().equipSlots);
  if (_0x4297ed.length >= 0x2 && this.isDualWield()) {
    _0x4297ed[0x1] = 0x1;
  }
  return _0x4297ed;
};
Game_Actor.prototype.forceChangeEquipSlots = function (_0x4a353c) {
  _0x4a353c.remove(0x0);
  _0x4a353c.remove(-0x1);
  this._forcedSlots = _0x4a353c;
  this.refresh();
  this.updateChangedSlots();
};
Game_Actor.prototype.forceResetEquipSlots = function () {
  this._forcedSlots = undefined;
  this.refresh();
  this.updateChangedSlots();
};
Game_Actor.prototype.updateChangedSlots = function () {
  let _0xc69145 = this.equipSlots().length;
  while (this._equips.length > _0xc69145) {
    const _0x2578f1 = this._equips[this._equips.length - 0x1];
    if (_0x2578f1 && _0x2578f1.object()) {
      $gameParty.gainItem(_0x2578f1.object(), 0x1);
    }
    this._equips.pop();
  }
  while (_0xc69145 > this._equips.length) {
    this._equips.push(new Game_Item());
  }
};
Game_Actor.prototype.prepareNewEquipSlotsOnLoad = function () {
  const _0x5d9372 = this.equipSlots();
  for (let _0x19fc46 = 0x0; _0x19fc46 < _0x5d9372.length; _0x19fc46++) {
    if (!this._equips[_0x19fc46]) {
      this._equips[_0x19fc46] = new Game_Item();
    }
  }
  this.releaseUnequippableItems(false);
  this.refresh();
};
VisuMZ.ItemsEquipsCore.Game_Actor_changeEquip = Game_Actor.prototype.changeEquip;
Game_Actor.prototype.changeEquip = function (_0x4abe3b, _0x2da6fd) {
  if (!this._tempActor) {
    const _0x2dd023 = JsonEx.makeDeepCopy(this);
    _0x2dd023._tempActor = true;
    this.changeEquipBase(_0x4abe3b, _0x2da6fd);
    this.equipAdjustHpMp(_0x2dd023);
  } else {
    this.changeEquipBase(_0x4abe3b, _0x2da6fd);
  }
};
Game_Actor.prototype.changeEquipBase = function (_0x4a5019, _0x341876) {
  if (!this.tradeItemWithParty(_0x341876, this.equips()[_0x4a5019])) {
    return;
  }
  if (_0x341876) {
    const _0x1d99e3 = DataManager.getEtypeIDs(_0x341876);
    if (!_0x1d99e3.includes(this.equipSlots()[_0x4a5019])) {
      return;
    }
  }
  this._equips[_0x4a5019].setObject(_0x341876);
  if (VisuMZ.ItemsEquipsCore.CheckCursedItemMsg(_0x341876)) {
    const _0x1f307e = VisuMZ.ItemsEquipsCore.Settings.EquipScene.CursedTextPopup || '';
    const _0x4a1074 = this.name();
    const _0x152269 = "\\I[%1]".format(_0x341876.iconIndex);
    const _0x1c4bde = _0x341876.name || '';
    let _0x346bfc = _0x1f307e.format(_0x4a1074, _0x152269, _0x1c4bde);
    if (VisuMZ.CoreEngine.version >= 1.79 && _0x346bfc.length > 0x0) {
      $textPopup(_0x346bfc);
    }
  }
  this.refresh();
};
VisuMZ.ItemsEquipsCore.CheckCursedItemMsg = function (_0x4e83e2) {
  if (!_0x4e83e2) {
    return false;
  }
  if (!Imported.VisuMZ_0_CoreEngine) {
    return false;
  }
  if (VisuMZ.CoreEngine.version < 1.79) {
    return false;
  }
  return DataManager.isCursedItem(_0x4e83e2);
};
VisuMZ.ItemsEquipsCore.Game_Actor_forceChangeEquip = Game_Actor.prototype.forceChangeEquip;
Game_Actor.prototype.forceChangeEquip = function (_0x32125e, _0x3ccc39) {
  if (!this._tempActor) {
    const _0x3367c5 = JsonEx.makeDeepCopy(this);
    _0x3367c5._tempActor = true;
    VisuMZ.ItemsEquipsCore.Game_Actor_forceChangeEquip.call(this, _0x32125e, _0x3ccc39);
    this.equipAdjustHpMp(_0x3367c5);
  } else {
    VisuMZ.ItemsEquipsCore.Game_Actor_forceChangeEquip.call(this, _0x32125e, _0x3ccc39);
  }
};
VisuMZ.ItemsEquipsCore.Game_Actor_discardEquip = Game_Actor.prototype.discardEquip;
Game_Actor.prototype.discardEquip = function (_0x1aa514) {
  if (!this._tempActor) {
    const _0x5b912a = JsonEx.makeDeepCopy(this);
    _0x5b912a._tempActor = true;
    VisuMZ.ItemsEquipsCore.Game_Actor_discardEquip.call(this, _0x1aa514);
    this.equipAdjustHpMp(_0x5b912a);
  } else {
    VisuMZ.ItemsEquipsCore.Game_Actor_discardEquip.call(this, _0x1aa514);
  }
};
Game_Actor.prototype.releaseUnequippableItems = function (_0x219e1a) {
  if (this._bypassReleaseUnequippableItemsItemsEquipsCore) {
    return;
  }
  let _0x51c14b = 0x0;
  for (;;) {
    _0x51c14b++;
    if (_0x51c14b > 0x3) {
      break;
    }
    const _0x283b6a = this.equipSlots();
    const _0x208929 = this.equips();
    const _0x28e112 = _0x208929.length;
    let _0xc7f13 = false;
    for (let _0x36cf26 = 0x0; _0x36cf26 < _0x28e112; _0x36cf26++) {
      const _0x3c7884 = _0x208929[_0x36cf26];
      if (!_0x3c7884) {
        continue;
      }
      const _0x5063c8 = DataManager.getEtypeIDs(_0x3c7884);
      if (!this.canEquip(_0x3c7884) || !_0x5063c8.includes(_0x283b6a[_0x36cf26])) {
        if (!_0x219e1a) {
          this.tradeItemWithParty(null, _0x3c7884);
        }
        if (!this._tempActor) {
          const _0x4335fc = JsonEx.makeDeepCopy(this);
          _0x4335fc._tempActor = true;
          this._equips[_0x36cf26].setObject(null);
          this._bypassReleaseUnequippableItemsItemsEquipsCore = true;
          this.equipAdjustHpMp(_0x4335fc);
          this._bypassReleaseUnequippableItemsItemsEquipsCore = undefined;
        } else {
          if (this._equips[_0x36cf26]) {
            this._equips[_0x36cf26].setObject(null);
          } else {
            continue;
          }
        }
        _0xc7f13 = true;
      }
    }
    if (!_0xc7f13) {
      break;
    }
  }
};
Game_Actor.prototype.equipAdjustHpMp = function (_0x241009) {
  if (this._tempActor) {
    return;
  }
  if (!VisuMZ.ItemsEquipsCore.Settings.EquipScene.EquipAdjustHpMp) {
    return;
  }
  const _0x2ffa06 = Math.round(_0x241009.hpRate() * this.mhp);
  const _0x521364 = Math.round(_0x241009.mpRate() * this.mmp);
  if (this.hp > 0x0) {
    this.setHp(_0x2ffa06);
  }
  if (this.mp > 0x0) {
    this.setMp(_0x521364);
  }
};
Game_Actor.prototype.clearEquipments = function () {
  const _0x5162e9 = this.equipSlots().length;
  for (let _0x4fd8e2 = 0x0; _0x4fd8e2 < _0x5162e9; _0x4fd8e2++) {
    if (this.isClearEquipOk(_0x4fd8e2)) {
      this.changeEquip(_0x4fd8e2, null);
    }
  }
};
Game_Actor.prototype.isClearEquipOk = function (_0xcaa6a4) {
  return this.nonRemovableEtypes().includes(this.equipSlots()[_0xcaa6a4]) ? false : this.isEquipChangeOk(_0xcaa6a4);
};
Game_Actor.prototype.nonRemovableEtypes = function () {
  return VisuMZ.ItemsEquipsCore.Settings.EquipScene.NonRemoveETypes;
};
Game_Actor.prototype.optimizeEquipments = function () {
  const _0x463ba2 = this.equipSlots().length;
  for (let _0x5958f9 = 0x0; _0x5958f9 < _0x463ba2; _0x5958f9++) {
    if (this.isOptimizeEquipOk(_0x5958f9)) {
      this.changeEquip(_0x5958f9, null);
    }
  }
  for (let _0x575b2a = 0x0; _0x575b2a < _0x463ba2; _0x575b2a++) {
    if (this.isOptimizeEquipOk(_0x575b2a)) {
      this.changeEquip(_0x575b2a, this.bestEquipItem(_0x575b2a));
    }
  }
};
Game_Actor.prototype.bestEquipItem = function (_0x2c37a9) {
  const _0x3b7d8f = this.equipSlots()[_0x2c37a9];
  const _0x188a95 = $gameParty.equipItems().filter(_0x41844c => DataManager.getEtypeIDs(_0x41844c).includes(_0x3b7d8f) && this.canEquip(_0x41844c) && !DataManager.isCursedItem(_0x41844c));
  let _0x23b1d8 = null;
  let _0x11a17a = -0x3e8;
  for (let _0x14716c = 0x0; _0x14716c < _0x188a95.length; _0x14716c++) {
    const _0x431166 = this.calcEquipItemPerformance(_0x188a95[_0x14716c]);
    if (_0x431166 > _0x11a17a) {
      _0x11a17a = _0x431166;
      _0x23b1d8 = _0x188a95[_0x14716c];
    }
  }
  return _0x23b1d8;
};
Game_Actor.prototype.isOptimizeEquipOk = function (_0x16a553) {
  return this.nonOptimizeEtypes().includes(this.equipSlots()[_0x16a553]) ? false : this.isEquipChangeOk(_0x16a553);
};
VisuMZ.ItemsEquipsCore.Game_Actor_isEquipChangeOk = Game_Actor.prototype.isEquipChangeOk;
Game_Actor.prototype.isEquipChangeOk = function (_0x5297d4) {
  const _0x39d11b = this._equips[_0x5297d4];
  if (_0x39d11b) {
    const _0x14c44c = _0x39d11b.object();
    if (DataManager.isCursedItem(_0x14c44c)) {
      return false;
    }
  }
  return VisuMZ.ItemsEquipsCore.Game_Actor_isEquipChangeOk.call(this, _0x5297d4);
};
Game_Actor.prototype.nonOptimizeEtypes = function () {
  return VisuMZ.ItemsEquipsCore.Settings.EquipScene.NonOptimizeETypes;
};
VisuMZ.ItemsEquipsCore.Game_Actor_tradeItemWithParty = Game_Actor.prototype.tradeItemWithParty;
Game_Actor.prototype.tradeItemWithParty = function (_0x3530db, _0x3d3158) {
  if (this._tempActor) {
    return false;
  }
  $gameTemp._bypassNewLabel = true;
  const _0x593f44 = VisuMZ.ItemsEquipsCore.Game_Actor_tradeItemWithParty.call(this, _0x3530db, _0x3d3158);
  $gameTemp._bypassNewLabel = false;
  return _0x593f44;
};
Game_Actor.prototype.changeEquipById = function (_0x121d20, _0x246882) {
  const _0x53e762 = this.getNextAvailableEtypeId(_0x121d20);
  if (_0x53e762 < 0x0) {
    return;
  }
  const _0x5111b9 = _0x121d20 === 0x1 ? $dataWeapons[_0x246882] : $dataArmors[_0x246882];
  this.changeEquip(_0x53e762, _0x5111b9);
};
Game_Actor.prototype.getNextAvailableEtypeId = function (_0x34ae67) {
  let _0x21de21 = 0x0;
  const _0x2d9606 = this.equipSlots();
  const _0x27578c = this.equips();
  for (let _0xf7001f = 0x0; _0xf7001f < _0x2d9606.length; _0xf7001f++) {
    if (_0x2d9606[_0xf7001f] === _0x34ae67) {
      _0x21de21 = _0xf7001f;
      if (!_0x27578c[_0xf7001f]) {
        return _0x21de21;
      }
    }
  }
  return _0x21de21;
};
VisuMZ.ItemsEquipsCore.Game_Actor_paramPlus = Game_Actor.prototype.paramPlus;
Game_Actor.prototype.paramPlus = function (_0x2e97a2) {
  let _0x1599ee = VisuMZ.ItemsEquipsCore.Game_Actor_paramPlus.call(this, _0x2e97a2);
  for (const _0x530895 of this.equips()) {
    if (_0x530895) {
      _0x1599ee += this.paramPlusItemsEquipsCoreCustomJS(_0x530895, _0x2e97a2);
    }
  }
  return _0x1599ee;
};
Game_Actor.prototype.paramPlusItemsEquipsCoreCustomJS = function (_0x4b01bb, _0x531202) {
  if (this._calculatingJSParameters) {
    return 0x0;
  }
  const _0x3091e5 = (DataManager.isWeapon(_0x4b01bb) ? "W%1" : "A%1").format(_0x4b01bb.id);
  const _0x5afec1 = '%1-%2'.format(_0x3091e5, _0x531202);
  if (VisuMZ.ItemsEquipsCore.paramJS[_0x5afec1]) {
    this._calculatingJSParameters = true;
    const _0x363a48 = VisuMZ.ItemsEquipsCore.paramJS[_0x5afec1].call(this, _0x4b01bb, _0x531202);
    this._calculatingJSParameters = false;
    return _0x363a48;
  } else {
    return 0x0;
  }
};
Game_Actor.prototype.setShopStatusWindowMode = function (_0x1010a5) {
  this._shopStatusMenuMode = true;
  this._shopStatusMenuAlly = _0x1010a5;
};
VisuMZ.ItemsEquipsCore.Game_Party_initialize = Game_Party.prototype.initialize;
Game_Party.prototype.initialize = function () {
  VisuMZ.ItemsEquipsCore.Game_Party_initialize.call(this);
  this.initNewItemsList();
  this.initShopTrackingData();
};
Game_Party.prototype.initNewItemsList = function () {
  this._newItemsList = [];
};
Game_Party.prototype.isNewItem = function (_0x130823) {
  if (!$gameTemp.newLabelEnabled()) {
    return false;
  }
  if (this._newItemsList === undefined) {
    this.initNewItemsList();
  }
  let _0x496848 = '';
  if (DataManager.isItem(_0x130823)) {
    _0x496848 = "item-%1".format(_0x130823.id);
  } else {
    if (DataManager.isWeapon(_0x130823)) {
      _0x496848 = "weapon-%1".format(_0x130823.id);
    } else {
      if (DataManager.isArmor(_0x130823)) {
        _0x496848 = "armor-%1".format(_0x130823.id);
      } else {
        return;
      }
    }
  }
  return this._newItemsList.includes(_0x496848);
};
Game_Party.prototype.setNewItem = function (_0x1abd21) {
  if (!$gameTemp.newLabelEnabled()) {
    return;
  }
  if (this._newItemsList === undefined) {
    this.initNewItemsList();
  }
  let _0x2204a9 = '';
  if (DataManager.isItem(_0x1abd21)) {
    _0x2204a9 = "item-%1".format(_0x1abd21.id);
  } else {
    if (DataManager.isWeapon(_0x1abd21)) {
      _0x2204a9 = 'weapon-%1'.format(_0x1abd21.id);
    } else {
      if (DataManager.isArmor(_0x1abd21)) {
        _0x2204a9 = 'armor-%1'.format(_0x1abd21.id);
      } else {
        return;
      }
    }
  }
  if (!this._newItemsList.includes(_0x2204a9)) {
    this._newItemsList.push(_0x2204a9);
  }
};
Game_Party.prototype.clearNewItem = function (_0x3dd27e) {
  if (!$gameTemp.newLabelEnabled()) {
    return;
  }
  if (this._newItemsList === undefined) {
    this.initNewItemsList();
  }
  let _0x335ca1 = '';
  if (DataManager.isItem(_0x3dd27e)) {
    _0x335ca1 = "item-%1".format(_0x3dd27e.id);
  } else {
    if (DataManager.isWeapon(_0x3dd27e)) {
      _0x335ca1 = "weapon-%1".format(_0x3dd27e.id);
    } else {
      if (DataManager.isArmor(_0x3dd27e)) {
        _0x335ca1 = 'armor-%1'.format(_0x3dd27e.id);
      } else {
        return;
      }
    }
  }
  if (this._newItemsList.includes(_0x335ca1)) {
    this._newItemsList.splice(this._newItemsList.indexOf(_0x335ca1), 0x1);
  }
};
VisuMZ.ItemsEquipsCore.Game_Party_numItems = Game_Party.prototype.numItems;
Game_Party.prototype.numItems = function (_0x128df1) {
  if (DataManager.isProxyItem(_0x128df1)) {
    _0x128df1 = DataManager.getProxyItem(_0x128df1);
  }
  return VisuMZ.ItemsEquipsCore.Game_Party_numItems.call(this, _0x128df1);
};
VisuMZ.ItemsEquipsCore.Game_Party_gainItem = Game_Party.prototype.gainItem;
Game_Party.prototype.gainItem = function (_0x42d3e6, _0x544e2c, _0x4a2bbd) {
  if (DataManager.isProxyItem(_0x42d3e6)) {
    _0x42d3e6 = null;
  }
  const _0x35dbf4 = this.numItems(_0x42d3e6);
  VisuMZ.ItemsEquipsCore.Game_Party_gainItem.call(this, _0x42d3e6, _0x544e2c, _0x4a2bbd);
  if (this.numItems(_0x42d3e6) > _0x35dbf4) {
    this.setNewItem(_0x42d3e6);
  }
};
Game_Party.prototype.maxItems = function (_0x143ca2) {
  if (DataManager.isProxyItem(_0x143ca2)) {
    _0x143ca2 = DataManager.getProxyItem(_0x143ca2);
  }
  return DataManager.maxItemAmount(_0x143ca2);
};
VisuMZ.ItemsEquipsCore.Game_Party_consumeItem = Game_Party.prototype.consumeItem;
Game_Party.prototype.consumeItem = function (_0x3684c8) {
  if (_0x3684c8) {
    const _0x3b073f = _0x3684c8.note || '';
    if (_0x3b073f.match(/<(?:CONSERVE|PRESERVE):[ ](\d+)([%％])>/i)) {
      const _0x43748c = Number(RegExp.$1) * 0.01;
      if (Math.random() < _0x43748c) {
        return;
      }
    }
  }
  VisuMZ.ItemsEquipsCore.Game_Party_consumeItem.call(this, _0x3684c8);
};
Game_Party.prototype.initShopTrackingData = function () {
  this._shopTrackingData = {
    'buy': {
      'gold': 0x0,
      'items': {}
    },
    'sell': {
      'gold': 0x0,
      'items': {}
    }
  };
};
Game_Party.prototype.getShopTrackingData = function () {
  if (this._shopTrackingData === undefined) {
    this.initShopTrackingData();
  }
  return this._shopTrackingData;
};
Game_Party.prototype.getShopTrackingItem = function (_0x48d884, _0x5dc11d) {
  if (!_0x5dc11d) {
    return 0x0;
  }
  if (this._shopTrackingData === undefined) {
    this.initShopTrackingData();
  }
  const _0x332240 = this.getShopTrackingData();
  if (!_0x332240[_0x48d884]) {
    return 0x0;
  }
  if (_0x5dc11d === "gold") {
    _0x332240[_0x48d884].gold = _0x332240[_0x48d884].gold || 0x0;
    return _0x332240[_0x48d884].gold;
  } else {
    if (DataManager.isItem(_0x5dc11d)) {
      key = "item-%1".format(_0x5dc11d.id);
    } else {
      if (DataManager.isWeapon(_0x5dc11d)) {
        key = "weapon-%1".format(_0x5dc11d.id);
      } else {
        if (DataManager.isArmor(_0x5dc11d)) {
          key = "armor-%1".format(_0x5dc11d.id);
        } else {
          return 0x0;
        }
      }
    }
  }
  _0x332240[_0x48d884].items[key] = _0x332240[_0x48d884].items[key] || 0x0;
  return _0x332240[_0x48d884].items[key];
};
Game_Party.prototype.getShopTrackingItemBuy = function (_0x5653c1) {
  return this.getShopTrackingItem('buy', _0x5653c1);
};
Game_Party.prototype.getShopTrackingItemSell = function (_0x5e75e0) {
  return this.getShopTrackingItem("sell", _0x5e75e0);
};
Game_Party.prototype.getShopTrackingGoldBuy = function () {
  return this.getShopTrackingItem("buy", "gold");
};
Game_Party.prototype.getShopTrackingGoldSell = function () {
  return this.getShopTrackingItem("sell", "gold");
};
Game_Party.prototype.addShopTrackingItem = function (_0x33bdcb, _0xb36a02, _0x10740c) {
  if (!_0xb36a02) {
    return;
  }
  if (_0x10740c <= 0x0) {
    return;
  }
  if (this._shopTrackingData === undefined) {
    this.initShopTrackingData();
  }
  const _0x13dc57 = this.getShopTrackingData();
  if (!_0x13dc57[_0x33bdcb]) {
    return;
  }
  if (_0xb36a02 === "gold") {
    _0x13dc57[_0x33bdcb].gold = _0x13dc57[_0x33bdcb].gold || 0x0;
    _0x13dc57[_0x33bdcb].gold += _0x10740c;
    return;
  } else {
    if (DataManager.isItem(_0xb36a02)) {
      key = "item-%1".format(_0xb36a02.id);
    } else {
      if (DataManager.isWeapon(_0xb36a02)) {
        key = "weapon-%1".format(_0xb36a02.id);
      } else {
        if (DataManager.isArmor(_0xb36a02)) {
          key = "armor-%1".format(_0xb36a02.id);
        } else {
          return;
        }
      }
    }
  }
  _0x13dc57[_0x33bdcb].items[key] = _0x13dc57[_0x33bdcb].items[key] || 0x0;
  _0x13dc57[_0x33bdcb].items[key] += _0x10740c;
};
Game_Party.prototype.addShopTrackingItemBuy = function (_0x18892b, _0x59ba6d) {
  this.addShopTrackingItem('buy', _0x18892b, _0x59ba6d);
};
Game_Party.prototype.addShopTrackingItemSell = function (_0x2cd787, _0x7724b2) {
  this.addShopTrackingItem("sell", _0x2cd787, _0x7724b2);
};
Game_Party.prototype.addShopTrackingGoldBuy = function (_0x3dd0ab) {
  this.addShopTrackingItem("buy", "gold", _0x3dd0ab);
};
Game_Party.prototype.addShopTrackingGoldSell = function (_0x41dd32) {
  this.addShopTrackingItem("sell", "gold", _0x41dd32);
};
VisuMZ.ItemsEquipsCore.Scene_ItemBase_activateItemWindow = Scene_ItemBase.prototype.activateItemWindow;
Scene_ItemBase.prototype.activateItemWindow = function () {
  VisuMZ.ItemsEquipsCore.Scene_ItemBase_activateItemWindow.call(this);
  this._itemWindow.callUpdateHelp();
};
Scene_Item.prototype.isBottomHelpMode = function () {
  if (ConfigManager.uiMenuStyle && ConfigManager.uiHelpPosition !== undefined) {
    return ConfigManager.uiHelpPosition;
  } else {
    return this.isUseItemsEquipsCoreUpdatedLayout() ? this.updatedLayoutStyle().match(/LOWER/i) : Scene_ItemBase.prototype.isBottomHelpMode.call(this);
  }
};
Scene_Item.prototype.isRightInputMode = function () {
  if (ConfigManager.uiMenuStyle && ConfigManager.uiInputPosition !== undefined) {
    return ConfigManager.uiInputPosition;
  } else {
    return this.isUseItemsEquipsCoreUpdatedLayout() ? this.updatedLayoutStyle().match(/RIGHT/i) : Scene_ItemBase.prototype.isRightInputMode.call(this);
  }
};
Scene_Item.prototype.updatedLayoutStyle = function () {
  return VisuMZ.ItemsEquipsCore.Settings.ItemScene.LayoutStyle;
};
Scene_Item.prototype.isUseModernControls = function () {
  return this._categoryWindow && this._categoryWindow.isUseModernControls();
};
Scene_Item.prototype.isUseItemsEquipsCoreUpdatedLayout = function () {
  return VisuMZ.ItemsEquipsCore.Settings.ItemScene.EnableLayout;
};
VisuMZ.ItemsEquipsCore.Scene_Item_create = Scene_Item.prototype.create;
Scene_Item.prototype.create = function () {
  VisuMZ.ItemsEquipsCore.Scene_Item_create.call(this);
  if (this.isUseModernControls()) {
    this.onCategoryOk();
  }
};
VisuMZ.ItemsEquipsCore.Scene_Item_helpWindowRect = Scene_Item.prototype.helpWindowRect;
Scene_Item.prototype.helpWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.helpWindowRectItemsEquipsCore() : VisuMZ.ItemsEquipsCore.Scene_Item_helpWindowRect.call(this);
};
Scene_Item.prototype.helpWindowRectItemsEquipsCore = function () {
  const _0x590703 = this.helpAreaTop();
  const _0x14157e = Graphics.boxWidth;
  const _0x2c2bb2 = this.helpAreaHeight();
  return new Rectangle(0x0, _0x590703, _0x14157e, _0x2c2bb2);
};
VisuMZ.ItemsEquipsCore.Scene_Item_createCategoryWindow = Scene_Item.prototype.createCategoryWindow;
Scene_Item.prototype.createCategoryWindow = function () {
  VisuMZ.ItemsEquipsCore.Scene_Item_createCategoryWindow.call(this);
  if (this.isUseModernControls()) {
    this.postCreateCategoryWindowItemsEquipsCore();
  }
};
Scene_Item.prototype.postCreateCategoryWindowItemsEquipsCore = function () {
  delete this._categoryWindow._handlers.ok;
  delete this._categoryWindow._handlers.cancel;
};
VisuMZ.ItemsEquipsCore.Scene_Item_categoryWindowRect = Scene_Item.prototype.categoryWindowRect;
Scene_Item.prototype.categoryWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.categoryWindowRectItemsEquipsCore() : VisuMZ.ItemsEquipsCore.Scene_Item_categoryWindowRect.call(this);
};
Scene_Item.prototype.categoryWindowRectItemsEquipsCore = function () {
  const _0x309ac4 = this.mainAreaTop();
  const _0x3698fe = Graphics.boxWidth;
  const _0x2b10ff = this.calcWindowHeight(0x1, true);
  return new Rectangle(0x0, _0x309ac4, _0x3698fe, _0x2b10ff);
};
VisuMZ.ItemsEquipsCore.Scene_Item_createItemWindow = Scene_Item.prototype.createItemWindow;
Scene_Item.prototype.createItemWindow = function () {
  VisuMZ.ItemsEquipsCore.Scene_Item_createItemWindow.call(this);
  if (this.isUseModernControls()) {
    this.postCreateItemWindowModernControls();
  }
  if (this.allowCreateStatusWindow()) {
    this.createStatusWindow();
  }
};
VisuMZ.ItemsEquipsCore.Scene_Item_itemWindowRect = Scene_Item.prototype.itemWindowRect;
Scene_Item.prototype.itemWindowRect = function () {
  if (this.isUseItemsEquipsCoreUpdatedLayout()) {
    return this.itemWindowRectItemsEquipsCore();
  } else {
    const _0x3869fa = VisuMZ.ItemsEquipsCore.Scene_Item_itemWindowRect.call(this);
    if (this.allowCreateStatusWindow() && this.adjustItemWidthByStatus()) {
      _0x3869fa.width -= this.statusWidth();
    }
    return _0x3869fa;
  }
};
Scene_Item.prototype.itemWindowRectItemsEquipsCore = function () {
  const _0x1f685d = this.isRightInputMode() ? this.statusWidth() : 0x0;
  const _0x51b14d = this._categoryWindow.y + this._categoryWindow.height;
  const _0x1adab5 = Graphics.boxWidth - this.statusWidth();
  const _0x5a3e51 = this.mainAreaBottom() - _0x51b14d;
  return new Rectangle(_0x1f685d, _0x51b14d, _0x1adab5, _0x5a3e51);
};
Scene_Item.prototype.postCreateItemWindowModernControls = function () {
  this._itemWindow.setHandler('cancel', this.popScene.bind(this));
};
Scene_Item.prototype.allowCreateStatusWindow = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? true : VisuMZ.ItemsEquipsCore.Settings.ItemScene.ShowShopStatus;
};
Scene_Item.prototype.adjustItemWidthByStatus = function () {
  return VisuMZ.ItemsEquipsCore.Settings.ItemScene.ItemSceneAdjustItemList;
};
Scene_Item.prototype.createStatusWindow = function () {
  const _0x532eb8 = this.statusWindowRect();
  this._statusWindow = new Window_ShopStatus(_0x532eb8);
  this.addWindow(this._statusWindow);
  this._itemWindow.setStatusWindow(this._statusWindow);
  const _0x1ce458 = VisuMZ.ItemsEquipsCore.Settings.ItemScene.ItemMenuStatusBgType;
  this._statusWindow.setBackgroundType(_0x1ce458 || 0x0);
};
Scene_Item.prototype.statusWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.statusWindowRectItemsEquipsCore() : VisuMZ.ItemsEquipsCore.Settings.ItemScene.ItemMenuStatusRect.call(this);
};
Scene_Item.prototype.statusWindowRectItemsEquipsCore = function () {
  const _0x75124c = this.statusWidth();
  const _0x3051ba = this._itemWindow.height;
  const _0x38de1e = this.isRightInputMode() ? 0x0 : Graphics.boxWidth - this.statusWidth();
  const _0xf9c469 = this._itemWindow.y;
  return new Rectangle(_0x38de1e, _0xf9c469, _0x75124c, _0x3051ba);
};
Scene_Item.prototype.statusWidth = function () {
  return Scene_Shop.prototype.statusWidth();
};
Scene_Item.prototype.buttonAssistItemListRequirement = function () {
  if (!this.updatedLayoutStyle()) {
    return false;
  }
  if (!this.isUseModernControls()) {
    return false;
  }
  if (!this._itemWindow) {
    return false;
  }
  if (!this._itemWindow.active) {
    return false;
  }
  return this.updatedLayoutStyle() && this.isUseModernControls();
};
Scene_Item.prototype.buttonAssistKey1 = function () {
  if (this.buttonAssistItemListRequirement()) {
    return this._itemWindow.maxCols() === 0x1 ? TextManager.getInputMultiButtonStrings("left", "right") : TextManager.getInputMultiButtonStrings("pageup", "pagedown");
  }
  return Scene_ItemBase.prototype.buttonAssistKey1.call(this);
};
Scene_Item.prototype.buttonAssistText1 = function () {
  if (this.buttonAssistItemListRequirement()) {
    return VisuMZ.ItemsEquipsCore.Settings.ItemScene.buttonAssistCategory;
  }
  return Scene_ItemBase.prototype.buttonAssistText1.call(this);
};
Scene_Equip.prototype.start = function () {
  Scene_ItemBase.prototype.start.call(this);
  this.refreshActor();
};
Scene_Equip.prototype.isBottomHelpMode = function () {
  if (ConfigManager.uiMenuStyle && ConfigManager.uiHelpPosition !== undefined) {
    return ConfigManager.uiHelpPosition;
  } else {
    if (this.isUseItemsEquipsCoreUpdatedLayout()) {
      return this.updatedLayoutStyle().match(/LOWER/i);
    } else {
      Scene_MenuBase.prototype.isRightInputMode.call(this);
    }
  }
};
Scene_Equip.prototype.isRightInputMode = function () {
  if (ConfigManager.uiMenuStyle && ConfigManager.uiInputPosition !== undefined) {
    return ConfigManager.uiInputPosition;
  } else {
    if (this.isUseItemsEquipsCoreUpdatedLayout()) {
      return this.updatedLayoutStyle().match(/RIGHT/i);
    } else {
      Scene_MenuBase.prototype.isRightInputMode.call(this);
    }
  }
};
Scene_Equip.prototype.updatedLayoutStyle = function () {
  return VisuMZ.ItemsEquipsCore.Settings.EquipScene.LayoutStyle;
};
Scene_Equip.prototype.isUseModernControls = function () {
  return this._commandWindow && this._commandWindow.isUseModernControls();
};
Scene_Equip.prototype.isUseItemsEquipsCoreUpdatedLayout = function () {
  return VisuMZ.ItemsEquipsCore.Settings.EquipScene.EnableLayout;
};
VisuMZ.ItemsEquipsCore.Scene_Equip_create = Scene_Equip.prototype.create;
Scene_Equip.prototype.create = function () {
  VisuMZ.ItemsEquipsCore.Scene_Equip_create.call(this);
  if (this.isUseModernControls()) {
    this.commandEquip();
  }
};
VisuMZ.ItemsEquipsCore.Scene_Equip_helpWindowRect = Scene_Equip.prototype.helpWindowRect;
Scene_Equip.prototype.helpWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.helpWindowRectItemsEquipsCore() : VisuMZ.ItemsEquipsCore.Scene_Equip_helpWindowRect.call(this);
};
Scene_Equip.prototype.helpWindowRectItemsEquipsCore = function () {
  const _0x4715a9 = this.helpAreaTop();
  const _0xe8368a = Graphics.boxWidth;
  const _0x4b20a3 = this.helpAreaHeight();
  return new Rectangle(0x0, _0x4715a9, _0xe8368a, _0x4b20a3);
};
VisuMZ.ItemsEquipsCore.Scene_Equip_statusWindowRect = Scene_Equip.prototype.statusWindowRect;
Scene_Equip.prototype.statusWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.statusWindowRectItemsEquipsCore() : VisuMZ.ItemsEquipsCore.Scene_Equip_statusWindowRect.call(this);
};
Scene_Equip.prototype.statusWindowRectItemsEquipsCore = function () {
  const _0x52e20f = this.isRightInputMode() ? 0x0 : Graphics.boxWidth - this.statusWidth();
  const _0x540320 = this.mainAreaTop();
  const _0x3e07cb = this.statusWidth();
  const _0xa300fb = this.mainAreaHeight();
  return new Rectangle(_0x52e20f, _0x540320, _0x3e07cb, _0xa300fb);
};
VisuMZ.ItemsEquipsCore.Scene_Equip_createCommandWindow = Scene_Equip.prototype.createCommandWindow;
Scene_Equip.prototype.createCommandWindow = function () {
  VisuMZ.ItemsEquipsCore.Scene_Equip_createCommandWindow.call(this);
  if (this._helpWindow) {
    this._commandWindow.setHelpWindow(this._helpWindow);
  }
};
VisuMZ.ItemsEquipsCore.Scene_Equip_commandWindowRect = Scene_Equip.prototype.commandWindowRect;
Scene_Equip.prototype.commandWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.commandWindowRectItemsEquipsCore() : VisuMZ.ItemsEquipsCore.Scene_Equip_commandWindowRect.call(this);
};
Scene_Equip.prototype.shouldCommandWindowExist = function () {
  const _0x185f33 = VisuMZ.ItemsEquipsCore.Settings.EquipScene;
  return _0x185f33.CommandAddOptimize || _0x185f33.CommandAddClear;
};
Scene_Equip.prototype.commandWindowRectItemsEquipsCore = function () {
  const _0x4c5468 = this.shouldCommandWindowExist();
  const _0x59976b = this.isRightInputMode() ? this.statusWidth() : 0x0;
  const _0x11e8ac = this.mainAreaTop();
  const _0xe68d31 = Graphics.boxWidth - this.statusWidth();
  const _0xf1318b = _0x4c5468 ? this.calcWindowHeight(0x1, true) : 0x0;
  return new Rectangle(_0x59976b, _0x11e8ac, _0xe68d31, _0xf1318b);
};
VisuMZ.ItemsEquipsCore.Scene_Equip_createSlotWindow = Scene_Equip.prototype.createSlotWindow;
Scene_Equip.prototype.createSlotWindow = function () {
  VisuMZ.ItemsEquipsCore.Scene_Equip_createSlotWindow.call(this);
  if (this.isUseModernControls()) {
    this.postCreateSlotWindowItemsEquipsCore();
  }
};
VisuMZ.ItemsEquipsCore.Scene_Equip_slotWindowRect = Scene_Equip.prototype.slotWindowRect;
Scene_Equip.prototype.slotWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.slotWindowRectItemsEquipsCore() : VisuMZ.ItemsEquipsCore.Scene_Equip_slotWindowRect.call(this);
};
Scene_Equip.prototype.slotWindowRectItemsEquipsCore = function () {
  const _0x5bd229 = this.commandWindowRect();
  const _0x198d97 = this.isRightInputMode() ? this.statusWidth() : 0x0;
  const _0x458bfe = _0x5bd229.y + _0x5bd229.height;
  const _0x1b3773 = Graphics.boxWidth - this.statusWidth();
  const _0x4c8ad3 = this.mainAreaHeight() - _0x5bd229.height;
  return new Rectangle(_0x198d97, _0x458bfe, _0x1b3773, _0x4c8ad3);
};
VisuMZ.ItemsEquipsCore.Scene_Equip_itemWindowRect = Scene_Equip.prototype.itemWindowRect;
Scene_Equip.prototype.itemWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.slotWindowRect() : VisuMZ.ItemsEquipsCore.Scene_Equip_itemWindowRect.call(this);
};
Scene_Equip.prototype.statusWidth = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.geUpdatedLayoutStatusWidth() : VisuMZ.ItemsEquipsCore.Settings.EquipScene.StatusWindowWidth;
};
Scene_Equip.prototype.geUpdatedLayoutStatusWidth = function () {
  return Math.floor(Graphics.boxWidth / 0x2);
};
Scene_Equip.prototype.postCreateSlotWindowItemsEquipsCore = function () {
  this._slotWindow.setHandler("cancel", this.popScene.bind(this));
  this._slotWindow.setHandler('pagedown', this.nextActor.bind(this));
  this._slotWindow.setHandler("pageup", this.previousActor.bind(this));
};
VisuMZ.ItemsEquipsCore.Scene_Equip_commandEquip = Scene_Equip.prototype.commandEquip;
Scene_Equip.prototype.commandEquip = function () {
  if (this.isUseModernControls()) {
    this._commandWindow.deselect();
    this._commandWindow.deactivate();
  }
  VisuMZ.ItemsEquipsCore.Scene_Equip_commandEquip.call(this);
};
VisuMZ.ItemsEquipsCore.Scene_Equip_onSlotOk = Scene_Equip.prototype.onSlotOk;
Scene_Equip.prototype.onSlotOk = function () {
  if (this._slotWindow.index() >= 0x0) {
    VisuMZ.ItemsEquipsCore.Scene_Equip_onSlotOk.call(this);
    this.onSlotOkAutoSelect();
  } else {
    this._slotWindow.smoothSelect(0x0);
    this._slotWindow.activate();
  }
};
Scene_Equip.prototype.onSlotOkAutoSelect = function () {
  this._itemWindow.refresh();
  const _0x4dae1e = this._slotWindow.item();
  const _0x312660 = this._itemWindow._data.indexOf(_0x4dae1e);
  const _0x266d42 = Math.floor(this._itemWindow.maxVisibleItems() / 0x2) - 0x1;
  this._itemWindow.smoothSelect(_0x312660 >= 0x0 ? _0x312660 : 0x0);
  if (this._itemWindow._scrollDuration > 0x1) {
    this._itemWindow._scrollDuration = 0x1;
    this._itemWindow.updateSmoothScroll();
  }
  this._itemWindow.setTopRow(this._itemWindow.index() - _0x266d42);
};
VisuMZ.ItemsEquipsCore.Scene_Equip_onSlotCancel = Scene_Equip.prototype.onSlotCancel;
Scene_Equip.prototype.onSlotCancel = function () {
  VisuMZ.ItemsEquipsCore.Scene_Equip_onSlotCancel.call(this);
  if (this.isUseModernControls()) {
    this._commandWindow.smoothSelect(0x0);
    this._slotWindow.deactivate();
  }
};
VisuMZ.ItemsEquipsCore.Scene_Equip_onActorChange = Scene_Equip.prototype.onActorChange;
Scene_Equip.prototype.onActorChange = function () {
  VisuMZ.ItemsEquipsCore.Scene_Equip_onActorChange.call(this);
  if (this.isUseModernControls()) {
    this._commandWindow.deactivate();
    this._commandWindow.deselect();
    this._slotWindow.smoothSelect(0x0);
    this._slotWindow.activate();
  }
};
Scene_Equip.prototype.buttonAssistSlotWindowShift = function () {
  if (!this._slotWindow) {
    return false;
  }
  if (!this._slotWindow.active) {
    return false;
  }
  return this._slotWindow.isShiftRemoveShortcutEnabled();
};
Scene_Equip.prototype.buttonAssistKey3 = function () {
  if (this.buttonAssistSlotWindowShift()) {
    return TextManager.getInputButtonString("shift");
  }
  return Scene_MenuBase.prototype.buttonAssistKey3.call(this);
};
Scene_Equip.prototype.buttonAssistText3 = function () {
  if (this.buttonAssistSlotWindowShift()) {
    return VisuMZ.ItemsEquipsCore.Settings.EquipScene.buttonAssistRemove;
  }
  return Scene_MenuBase.prototype.buttonAssistText3.call(this);
};
Scene_Equip.prototype.buttonAssistOffset3 = function () {
  if (this.buttonAssistSlotWindowShift()) {
    return this._buttonAssistWindow.width / 0x5 / -0x3;
  }
  return Scene_MenuBase.prototype.buttonAssistOffset3.call(this);
};
Scene_Equip.prototype.popScene = function () {
  SceneManager.pop();
};
VisuMZ.ItemsEquipsCore.Scene_Load_reloadMapIfUpdated = Scene_Load.prototype.reloadMapIfUpdated;
Scene_Load.prototype.reloadMapIfUpdated = function () {
  VisuMZ.ItemsEquipsCore.Scene_Load_reloadMapIfUpdated.call(this);
  this.refreshActorEquipSlotsIfUpdated();
};
Scene_Load.prototype.refreshActorEquipSlotsIfUpdated = function () {
  if ($gameSystem.versionId() !== $dataSystem.versionId) {
    for (const _0x568f02 of $gameActors._data) {
      if (_0x568f02) {
        _0x568f02.prepareNewEquipSlotsOnLoad();
      }
    }
  }
};
Scene_Shop.prototype.isBottomHelpMode = function () {
  if (ConfigManager.uiMenuStyle && ConfigManager.uiHelpPosition !== undefined) {
    return ConfigManager.uiHelpPosition;
  } else {
    if (this.isUseItemsEquipsCoreUpdatedLayout()) {
      return this.updatedLayoutStyle().match(/LOWER/i);
    } else {
      Scene_MenuBase.prototype.isRightInputMode.call(this);
    }
  }
};
Scene_Shop.prototype.isRightInputMode = function () {
  if (ConfigManager.uiMenuStyle && ConfigManager.uiInputPosition !== undefined) {
    return ConfigManager.uiInputPosition;
  } else {
    if (this.isUseItemsEquipsCoreUpdatedLayout()) {
      return this.updatedLayoutStyle().match(/RIGHT/i);
    } else {
      Scene_MenuBase.prototype.isRightInputMode.call(this);
    }
  }
};
Scene_Shop.prototype.updatedLayoutStyle = function () {
  return VisuMZ.ItemsEquipsCore.Settings.ShopScene.LayoutStyle;
};
Scene_Shop.prototype.isUseModernControls = function () {
  return this._categoryWindow && this._categoryWindow.isUseModernControls();
};
Scene_Shop.prototype.isUseItemsEquipsCoreUpdatedLayout = function () {
  return VisuMZ.ItemsEquipsCore.Settings.ShopScene.EnableLayout;
};
VisuMZ.ItemsEquipsCore.Scene_Shop_prepare = Scene_Shop.prototype.prepare;
Scene_Shop.prototype.prepare = function (_0x5cf54e, _0x38f709) {
  _0x5cf54e = VisuMZ.ItemsEquipsCore.deepCopy(_0x5cf54e);
  VisuMZ.ItemsEquipsCore.Scene_Shop_prepare.call(this, _0x5cf54e, _0x38f709);
  this.adjustHiddenShownGoods();
};
Scene_Shop.prototype.adjustHiddenShownGoods = function () {
  this._goodsCount = 0x0;
  const _0x2ecbf5 = [];
  for (const _0x2c555f of this._goods) {
    if (this.isGoodShown(_0x2c555f)) {
      this._goodsCount++;
    } else {
      _0x2ecbf5.push(_0x2c555f);
    }
  }
  for (const _0x387ee5 of _0x2ecbf5) {
    this._goods.remove(_0x387ee5);
  }
};
Scene_Shop.prototype.isGoodShown = function (_0x440cb8) {
  if (_0x440cb8[0x0] > 0x2 || _0x440cb8[0x0] < 0x0) {
    return false;
  }
  const _0x1e37c0 = [$dataItems, $dataWeapons, $dataArmors][_0x440cb8[0x0]][_0x440cb8[0x1]];
  if (!_0x1e37c0) {
    return false;
  }
  return true;
};
VisuMZ.ItemsEquipsCore.Scene_Shop_create = Scene_Shop.prototype.create;
Scene_Shop.prototype.create = function () {
  VisuMZ.ItemsEquipsCore.Scene_Shop_create.call(this);
  if (this.isUseItemsEquipsCoreUpdatedLayout()) {
    this.postCreateItemsEquipsCore();
  }
  this.resetShopSwitches();
};
Scene_Shop.prototype.postCreateItemsEquipsCore = function () {
  this._dummyWindow.hide();
  this._buyWindow.show();
  this._buyWindow.deselect();
  this._statusWindow.show();
};
VisuMZ.ItemsEquipsCore.Scene_Shop_helpWindowRect = Scene_Shop.prototype.helpWindowRect;
Scene_Shop.prototype.helpWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.helpWindowRectItemsEquipsCore() : VisuMZ.ItemsEquipsCore.Scene_Shop_helpWindowRect.call(this);
};
Scene_Shop.prototype.helpWindowRectItemsEquipsCore = function () {
  const _0x111716 = this.helpAreaTop();
  const _0x4cd5d9 = Graphics.boxWidth;
  const _0xac7c1 = this.helpAreaHeight();
  return new Rectangle(0x0, _0x111716, _0x4cd5d9, _0xac7c1);
};
VisuMZ.ItemsEquipsCore.Scene_Shop_goldWindowRect = Scene_Shop.prototype.goldWindowRect;
Scene_Shop.prototype.goldWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.goldWindowRectItemsEquipsCore() : VisuMZ.ItemsEquipsCore.Scene_Shop_goldWindowRect.call(this);
};
Scene_Shop.prototype.goldWindowRectItemsEquipsCore = function () {
  const _0x5b42ae = this.mainCommandWidth();
  const _0x37638f = this.calcWindowHeight(0x1, true);
  const _0x747ee2 = this.isRightInputMode() ? 0x0 : Graphics.boxWidth - _0x5b42ae;
  const _0x555cb9 = this.mainAreaTop();
  return new Rectangle(_0x747ee2, _0x555cb9, _0x5b42ae, _0x37638f);
};
VisuMZ.ItemsEquipsCore.Scene_Shop_commandWindowRect = Scene_Shop.prototype.commandWindowRect;
Scene_Shop.prototype.commandWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.commandWindowRectItemsEquipsCore() : VisuMZ.ItemsEquipsCore.Scene_Shop_commandWindowRect.call(this);
};
Scene_Shop.prototype.commandWindowRectItemsEquipsCore = function () {
  const _0xad9a85 = this.isRightInputMode() ? this.mainCommandWidth() : 0x0;
  const _0x4f0d9c = this.mainAreaTop();
  const _0x3147ea = Graphics.boxWidth - this.mainCommandWidth();
  const _0x1e41b6 = this.calcWindowHeight(0x1, true);
  return new Rectangle(_0xad9a85, _0x4f0d9c, _0x3147ea, _0x1e41b6);
};
VisuMZ.ItemsEquipsCore.Scene_Shop_numberWindowRect = Scene_Shop.prototype.numberWindowRect;
Scene_Shop.prototype.numberWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.numberWindowRectItemsEquipsCore() : VisuMZ.ItemsEquipsCore.Scene_Shop_numberWindowRect.call(this);
};
Scene_Shop.prototype.numberWindowRectItemsEquipsCore = function () {
  const _0x16a7ae = this._commandWindow.y + this._commandWindow.height;
  const _0x135a89 = Graphics.boxWidth - this.statusWidth();
  const _0x1e0328 = this.isRightInputMode() ? Graphics.boxWidth - _0x135a89 : 0x0;
  const _0x93d24c = this.mainAreaHeight() - this._commandWindow.height;
  return new Rectangle(_0x1e0328, _0x16a7ae, _0x135a89, _0x93d24c);
};
VisuMZ.ItemsEquipsCore.Scene_Shop_statusWindowRect = Scene_Shop.prototype.statusWindowRect;
Scene_Shop.prototype.statusWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.statusWindowRectItemsEquipsCore() : VisuMZ.ItemsEquipsCore.Scene_Shop_statusWindowRect.call(this);
};
Scene_Shop.prototype.statusWindowRectItemsEquipsCore = function () {
  const _0x175c9d = this.statusWidth();
  const _0x4a6f4f = this.mainAreaHeight() - this._commandWindow.height;
  const _0x4c9a48 = this.isRightInputMode() ? 0x0 : Graphics.boxWidth - _0x175c9d;
  const _0x3a35d1 = this._commandWindow.y + this._commandWindow.height;
  return new Rectangle(_0x4c9a48, _0x3a35d1, _0x175c9d, _0x4a6f4f);
};
VisuMZ.ItemsEquipsCore.Scene_Shop_buyWindowRect = Scene_Shop.prototype.buyWindowRect;
Scene_Shop.prototype.buyWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.buyWindowRectItemsEquipsCore() : VisuMZ.ItemsEquipsCore.Scene_Shop_buyWindowRect.call(this);
};
Scene_Shop.prototype.buyWindowRectItemsEquipsCore = function () {
  const _0x118fad = this._commandWindow.y + this._commandWindow.height;
  const _0x51de68 = Graphics.boxWidth - this.statusWidth();
  const _0x4ffdff = this.mainAreaHeight() - this._commandWindow.height;
  const _0x280cd8 = this.isRightInputMode() ? Graphics.boxWidth - _0x51de68 : 0x0;
  return new Rectangle(_0x280cd8, _0x118fad, _0x51de68, _0x4ffdff);
};
VisuMZ.ItemsEquipsCore.Scene_Shop_createCategoryWindow = Scene_Shop.prototype.createCategoryWindow;
Scene_Shop.prototype.createCategoryWindow = function () {
  VisuMZ.ItemsEquipsCore.Scene_Shop_createCategoryWindow.call(this);
  if (this.isUseModernControls()) {
    this.postCreateCategoryWindowItemsEquipsCore();
  }
};
VisuMZ.ItemsEquipsCore.Scene_Shop_categoryWindowRect = Scene_Shop.prototype.categoryWindowRect;
Scene_Shop.prototype.categoryWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.categoryWindowRectItemsEquipsCore() : VisuMZ.ItemsEquipsCore.Scene_Shop_categoryWindowRect.call(this);
};
Scene_Shop.prototype.categoryWindowRectItemsEquipsCore = function () {
  const _0x2c2d04 = this._commandWindow.y;
  const _0x5a15cf = this._commandWindow.width;
  const _0x5295d6 = this.calcWindowHeight(0x1, true);
  const _0x580f86 = this.isRightInputMode() ? Graphics.boxWidth - _0x5a15cf : 0x0;
  return new Rectangle(_0x580f86, _0x2c2d04, _0x5a15cf, _0x5295d6);
};
Scene_Shop.prototype.postCreateCategoryWindowItemsEquipsCore = function () {
  delete this._categoryWindow._handlers.ok;
  delete this._categoryWindow._handlers.cancel;
};
VisuMZ.ItemsEquipsCore.Scene_Shop_createSellWindow = Scene_Shop.prototype.createSellWindow;
Scene_Shop.prototype.createSellWindow = function () {
  VisuMZ.ItemsEquipsCore.Scene_Shop_createSellWindow.call(this);
  if (this.isUseItemsEquipsCoreUpdatedLayout()) {
    this.postCreateSellWindowItemsEquipsCore();
  }
};
VisuMZ.ItemsEquipsCore.Scene_Shop_sellWindowRect = Scene_Shop.prototype.sellWindowRect;
Scene_Shop.prototype.sellWindowRect = function () {
  return this.isUseItemsEquipsCoreUpdatedLayout() ? this.sellWindowRectItemsEquipsCore() : VisuMZ.ItemsEquipsCore.Scene_Shop_sellWindowRect.call(this);
};
Scene_Shop.prototype.sellWindowRectItemsEquipsCore = function () {
  const _0x539c5f = this._categoryWindow.y + this._categoryWindow.height;
  const _0x43c001 = Graphics.boxWidth - this.statusWidth();
  const _0x2385fd = this.mainAreaHeight() - this._categoryWindow.height;
  const _0xfe9087 = this.isRightInputMode() ? Graphics.boxWidth - _0x43c001 : 0x0;
  return new Rectangle(_0xfe9087, _0x539c5f, _0x43c001, _0x2385fd);
};
Scene_Shop.prototype.postCreateSellWindowItemsEquipsCore = function () {
  this._sellWindow.setStatusWindow(this._statusWindow);
};
Scene_Shop.prototype.statusWidth = function () {
  return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.Width;
};
VisuMZ.ItemsEquipsCore.Scene_Shop_activateSellWindow = Scene_Shop.prototype.activateSellWindow;
Scene_Shop.prototype.activateSellWindow = function () {
  VisuMZ.ItemsEquipsCore.Scene_Shop_activateSellWindow.call(this);
  if (this.isUseItemsEquipsCoreUpdatedLayout()) {
    this._statusWindow.show();
  }
  this._sellWindow.updateHelp();
};
VisuMZ.ItemsEquipsCore.Scene_Shop_commandBuy = Scene_Shop.prototype.commandBuy;
Scene_Shop.prototype.commandBuy = function () {
  VisuMZ.ItemsEquipsCore.Scene_Shop_commandBuy.call(this);
  if (this.isUseItemsEquipsCoreUpdatedLayout()) {
    this.commandBuyItemsEquipsCore();
  }
};
Scene_Shop.prototype.commandBuyItemsEquipsCore = function () {
  this._buyWindowLastIndex = this._buyWindowLastIndex || 0x0;
  this._buyWindow.smoothSelect(this._buyWindowLastIndex);
};
VisuMZ.ItemsEquipsCore.Scene_Shop_commandSell = Scene_Shop.prototype.commandSell;
Scene_Shop.prototype.commandSell = function () {
  VisuMZ.ItemsEquipsCore.Scene_Shop_commandSell.call(this);
  if (this.isUseItemsEquipsCoreUpdatedLayout()) {
    this.commandSellItemsEquipsCore();
  }
  if (this.isUseModernControls()) {
    this._categoryWindow.smoothSelect(0x0);
    this.onCategoryOk();
  }
};
Scene_Shop.prototype.commandSellItemsEquipsCore = function () {
  this._buyWindow.hide();
  this._commandWindow.hide();
};
VisuMZ.ItemsEquipsCore.Scene_Shop_onBuyCancel = Scene_Shop.prototype.onBuyCancel;
Scene_Shop.prototype.onBuyCancel = function () {
  VisuMZ.ItemsEquipsCore.Scene_Shop_onBuyCancel.call(this);
  if (this.isUseItemsEquipsCoreUpdatedLayout()) {
    this.onBuyCancelItemsEquipsCore();
  }
};
Scene_Shop.prototype.onBuyCancelItemsEquipsCore = function () {
  this._buyWindowLastIndex = this._buyWindow.index();
  this._buyWindow.show();
  this._buyWindow.deselect();
  this._buyWindow.smoothScrollTo(0x0, 0x0);
  this._statusWindow.show();
  this._dummyWindow.hide();
};
VisuMZ.ItemsEquipsCore.Scene_Shop_onCategoryCancel = Scene_Shop.prototype.onCategoryCancel;
Scene_Shop.prototype.onCategoryCancel = function () {
  VisuMZ.ItemsEquipsCore.Scene_Shop_onCategoryCancel.call(this);
  if (this.isUseItemsEquipsCoreUpdatedLayout()) {
    this.onCategoryCancelItemsEquipsCore();
  }
};
Scene_Shop.prototype.onCategoryCancelItemsEquipsCore = function () {
  this._buyWindow.show();
  this._commandWindow.show();
};
VisuMZ.ItemsEquipsCore.Scene_Shop_onBuyOk = Scene_Shop.prototype.onBuyOk;
Scene_Shop.prototype.onBuyOk = function () {
  $gameTemp._bypassProxy = true;
  VisuMZ.ItemsEquipsCore.Scene_Shop_onBuyOk.call(this);
  $gameTemp._bypassProxy = false;
  this._item = this._buyWindow.item();
};
VisuMZ.ItemsEquipsCore.Scene_Shop_buyingPrice = Scene_Shop.prototype.buyingPrice;
Scene_Shop.prototype.buyingPrice = function () {
  $gameTemp._bypassProxy = true;
  this._item = this._buyWindow.item();
  const _0x5b596a = VisuMZ.ItemsEquipsCore.Scene_Shop_buyingPrice.call(this);
  $gameTemp._bypassProxy = false;
  this._item = this._buyWindow.item();
  return _0x5b596a;
};
VisuMZ.ItemsEquipsCore.Scene_Shop_onSellOk = Scene_Shop.prototype.onSellOk;
Scene_Shop.prototype.onSellOk = function () {
  VisuMZ.ItemsEquipsCore.Scene_Shop_onSellOk.call(this);
  if (this.isUseItemsEquipsCoreUpdatedLayout()) {
    this.onSellOkItemsEquipsCore();
  }
};
Scene_Shop.prototype.onSellOkItemsEquipsCore = function () {
  this._categoryWindow.show();
};
VisuMZ.ItemsEquipsCore.Scene_Shop_onSellCancel = Scene_Shop.prototype.onSellCancel;
Scene_Shop.prototype.onSellCancel = function () {
  VisuMZ.ItemsEquipsCore.Scene_Shop_onSellCancel.call(this);
  if (this.isUseModernControls()) {
    this.onCategoryCancel();
  }
  if (this.isUseItemsEquipsCoreUpdatedLayout()) {
    this._dummyWindow.hide();
  }
};
Scene_Shop.prototype.sellPriceOfItem = function (_0x748586) {
  const _0x474203 = this._item;
  this._item = _0x748586;
  const _0x5b842f = this.sellingPrice();
  this._item = _0x474203;
  return _0x5b842f;
};
VisuMZ.ItemsEquipsCore.Scene_Shop_sellingPrice = Scene_Shop.prototype.sellingPrice;
Scene_Shop.prototype.sellingPrice = function () {
  let _0x1ea798 = this.determineBaseSellingPrice();
  const _0x5aa4cf = this._item;
  _0x1ea798 = VisuMZ.ItemsEquipsCore.Settings.ShopScene.SellPriceJS.call(this, _0x5aa4cf, _0x1ea798);
  return _0x1ea798;
};
Scene_Shop.prototype.determineBaseSellingPrice = function () {
  let _0x4aa157 = this._item.price;
  if (!this._item) {
    return 0x0;
  } else {
    if (this._item.note.match(/<JS SELL PRICE>\s*([\s\S]*)\s*<\/JS SELL PRICE>/i)) {
      const _0x1b8b4d = String(RegExp.$1);
      window.item = this._item;
      window.price = _0x4aa157 * this.sellPriceRate();
      try {
        eval(_0x1b8b4d);
      } catch (_0x5b7a6c) {
        if ($gameTemp.isPlaytest()) {
          console.log(_0x5b7a6c);
        }
      }
      let _0x5d4a96 = window.price;
      window.item = undefined;
      window.price = undefined;
      if (isNaN(_0x5d4a96)) {
        _0x5d4a96 = 0x0;
      }
      return Math.floor(_0x5d4a96);
    } else {
      return this._item.note.match(/<SELL PRICE:[ ](\d+)>/i) ? parseInt(RegExp.$1) : Math.floor(this.baseSellingPrice());
    }
  }
};
Scene_Shop.prototype.baseSellingPrice = function () {
  return this._item.price * this.sellPriceRate();
};
Scene_Shop.prototype.sellPriceRate = function () {
  return VisuMZ.ItemsEquipsCore.Settings.ShopScene.SellPriceRate;
};
Scene_Shop.prototype.buttonAssistItemListRequirement = function () {
  if (!this.updatedLayoutStyle()) {
    return false;
  }
  if (!this.isUseModernControls()) {
    return false;
  }
  if (!this._sellWindow) {
    return false;
  }
  if (!this._sellWindow.active) {
    return false;
  }
  return this.updatedLayoutStyle() && this.isUseModernControls();
};
Scene_Shop.prototype.buttonAssistKey1 = function () {
  if (this.buttonAssistItemListRequirement()) {
    return this._sellWindow.maxCols() === 0x1 ? TextManager.getInputMultiButtonStrings("left", "right") : TextManager.getInputMultiButtonStrings("pageup", "pagedown");
  } else {
    if (this._numberWindow && this._numberWindow.active) {
      return TextManager.getInputMultiButtonStrings("left", "right");
    }
  }
  return Scene_MenuBase.prototype.buttonAssistKey1.call(this);
};
Scene_Shop.prototype.buttonAssistKey2 = function () {
  if (this._numberWindow && this._numberWindow.active) {
    return TextManager.getInputMultiButtonStrings('up', "down");
  }
  return Scene_MenuBase.prototype.buttonAssistKey2.call(this);
};
Scene_Shop.prototype.buttonAssistText1 = function () {
  if (this.buttonAssistItemListRequirement()) {
    return VisuMZ.ItemsEquipsCore.Settings.ItemScene.buttonAssistCategory;
  } else {
    if (this._numberWindow && this._numberWindow.active) {
      return VisuMZ.ItemsEquipsCore.Settings.ShopScene.buttonAssistSmallIncrement;
    }
  }
  return Scene_MenuBase.prototype.buttonAssistText1.call(this);
};
Scene_Shop.prototype.buttonAssistText2 = function () {
  if (this._numberWindow && this._numberWindow.active) {
    return VisuMZ.ItemsEquipsCore.Settings.ShopScene.buttonAssistLargeIncrement;
  }
  return Scene_MenuBase.prototype.buttonAssistText2.call(this);
};
Scene_Shop.prototype.resetShopSwitches = function () {
  if (!SceneManager.isSceneShop()) {
    return;
  }
  const _0x1599d8 = VisuMZ.ItemsEquipsCore.Settings.ShopScene;
  if (_0x1599d8.SwitchBuy) {
    $gameSwitches.setValue(_0x1599d8.SwitchBuy, false);
  }
  if (_0x1599d8.SwitchSell) {
    $gameSwitches.setValue(_0x1599d8.SwitchSell, false);
  }
};
VisuMZ.ItemsEquipsCore.Scene_Shop_doBuy = Scene_Shop.prototype.doBuy;
Scene_Shop.prototype.doBuy = function (_0x5b4895) {
  VisuMZ.ItemsEquipsCore.Scene_Shop_doBuy.call(this, _0x5b4895);
  this.onBuyItem(this._item, _0x5b4895);
  if (_0x5b4895 <= 0x0) {
    return;
  }
  const _0x264a44 = VisuMZ.ItemsEquipsCore.Settings.ShopScene;
  if (_0x264a44.SwitchBuy) {
    $gameSwitches.setValue(_0x264a44.SwitchBuy, true);
  }
  this._buyWindow.refresh();
  this._sellWindow.refresh();
};
Scene_Shop.prototype.onBuyItem = function (_0x5e53fd, _0x28039a) {
  this.processShopCondListingOnBuyItem(_0x5e53fd, _0x28039a);
  $gameParty.addShopTrackingItemBuy(_0x5e53fd, _0x28039a);
  $gameParty.addShopTrackingGoldBuy(_0x28039a * this.buyingPrice());
};
Scene_Shop.prototype.processShopCondListingOnBuyItem = function (_0xf3963c, _0x4e82b0) {
  if (!_0xf3963c) {
    return;
  }
  if (!_0x4e82b0) {
    return;
  }
  const _0xb902ee = VisuMZ.ItemsEquipsCore.ShopListingRegExp;
  const _0x303ea5 = _0xf3963c.note || '';
  if (_0x303ea5.match(_0xb902ee.BuyTurnSwitchOn)) {
    const _0x387e4a = String(RegExp.$1).split(',').map(_0x5160ff => Number(_0x5160ff));
    for (const _0x3816f1 of _0x387e4a) {
      $gameSwitches.setValue(_0x3816f1, true);
    }
  }
  if (_0x303ea5.match(_0xb902ee.BuyTurnSwitchOff)) {
    const _0x396381 = String(RegExp.$1).split(',').map(_0x22e821 => Number(_0x22e821));
    for (const _0x19cc5d of _0x396381) {
      $gameSwitches.setValue(_0x19cc5d, false);
    }
  }
};
VisuMZ.ItemsEquipsCore.Scene_Shop_doSell = Scene_Shop.prototype.doSell;
Scene_Shop.prototype.doSell = function (_0x28673b) {
  VisuMZ.ItemsEquipsCore.Scene_Shop_doSell.call(this, _0x28673b);
  this.onSellItem(this._item, _0x28673b);
  if (_0x28673b <= 0x0) {
    return;
  }
  const _0x480e29 = VisuMZ.ItemsEquipsCore.Settings.ShopScene;
  if (_0x480e29.SwitchBuy) {
    $gameSwitches.setValue(_0x480e29.SwitchSell, true);
  }
  this._buyWindow.refresh();
  this._sellWindow.refresh();
};
Scene_Shop.prototype.onSellItem = function (_0x3a6141, _0x1e8a23) {
  this.processShopCondListingOnSellItem(_0x3a6141, _0x1e8a23);
  $gameParty.addShopTrackingItemSell(_0x3a6141, _0x1e8a23);
  $gameParty.addShopTrackingGoldSell(_0x1e8a23 * this.sellingPrice());
};
Scene_Shop.prototype.processShopCondListingOnSellItem = function (_0x294874, _0x54c78b) {
  if (!_0x294874) {
    return;
  }
  if (!_0x54c78b) {
    return;
  }
  const _0x338799 = VisuMZ.ItemsEquipsCore.ShopListingRegExp;
  const _0xcf1178 = _0x294874.note || '';
  if (_0xcf1178.match(_0x338799.SellTurnSwitchOn)) {
    const _0xe4b3e1 = String(RegExp.$1).split(',').map(_0x31fbdd => Number(_0x31fbdd));
    for (const _0x137155 of _0xe4b3e1) {
      $gameSwitches.setValue(_0x137155, true);
    }
  }
  if (_0xcf1178.match(_0x338799.SellTurnSwitchOff)) {
    const _0x4d8479 = String(RegExp.$1).split(',').map(_0x18be8f => Number(_0x18be8f));
    for (const _0x2229a1 of _0x4d8479) {
      $gameSwitches.setValue(_0x2229a1, false);
    }
  }
};
function Sprite_NewLabel() {
  this.initialize(...arguments);
}
Sprite_NewLabel.prototype = Object.create(Sprite.prototype);
Sprite_NewLabel.prototype.constructor = Sprite_NewLabel;
Sprite_NewLabel.prototype.initialize = function () {
  Sprite.prototype.initialize.call(this);
  this.createBitmap();
};
Sprite_NewLabel.prototype.createBitmap = function () {
  const _0x11d40a = ImageManager.iconWidth;
  const _0x8512d4 = ImageManager.iconHeight;
  this.bitmap = new Bitmap(_0x11d40a, _0x8512d4);
  this.drawNewLabelIcon();
  this.drawNewLabelText();
};
Sprite_NewLabel.prototype.drawNewLabelIcon = function () {
  const _0x55e73e = VisuMZ.ItemsEquipsCore.Settings.New.Icon;
  if (_0x55e73e <= 0x0) {
    return;
  }
  const _0x5910a7 = ImageManager.loadSystem("IconSet");
  const _0x916fa6 = ImageManager.iconWidth;
  const _0x181a19 = ImageManager.iconHeight;
  const _0x10b797 = _0x55e73e % 0x10 * _0x916fa6;
  const _0x239848 = Math.floor(_0x55e73e / 0x10) * _0x181a19;
  this.bitmap.blt(_0x5910a7, _0x10b797, _0x239848, _0x916fa6, _0x181a19, 0x0, 0x0);
};
Sprite_NewLabel.prototype.drawNewLabelText = function () {
  const _0x30ccbe = VisuMZ.ItemsEquipsCore.Settings.New;
  const _0x546965 = _0x30ccbe.Text;
  if (_0x546965 === '') {
    return;
  }
  const _0x2b5e69 = ImageManager.iconWidth;
  const _0x4218cc = ImageManager.iconHeight;
  this.bitmap.fontFace = _0x30ccbe.FontFace || $gameSystem.mainFontFace();
  this.bitmap.textColor = this.getTextColor();
  this.bitmap.fontSize = _0x30ccbe.FontSize;
  this.bitmap.drawText(_0x546965, 0x0, _0x4218cc / 0x2, _0x2b5e69, _0x4218cc / 0x2, "center");
};
Sprite_NewLabel.prototype.getTextColor = function () {
  const _0x27223b = VisuMZ.ItemsEquipsCore.Settings.New.FontColor;
  return _0x27223b.match(/#(.*)/i) ? '#' + String(RegExp.$1) : ColorManager.textColor(_0x27223b);
};
Window_Base.prototype.drawItemName = function (_0x54177f, _0x24e39b, _0x20a05a, _0x3b8c2f) {
  if (_0x54177f) {
    const _0x3c93d3 = _0x20a05a + (this.lineHeight() - ImageManager.iconHeight) / 0x2;
    const _0x41f497 = ImageManager.iconWidth + 0x4;
    const _0x31d0ae = Math.max(0x0, _0x3b8c2f - _0x41f497);
    this.changeTextColor(ColorManager.getItemColor(_0x54177f));
    this.drawIcon(_0x54177f.iconIndex, _0x24e39b, _0x3c93d3);
    this.drawText(_0x54177f.name, _0x24e39b + _0x41f497, _0x20a05a, _0x31d0ae);
    this.resetTextColor();
  }
};
Window_Base.prototype.drawItemNumber = function (_0x379e2d, _0x144f14, _0x5d406b, _0x3a6202) {
  if (this.isDrawItemNumber(_0x379e2d)) {
    this.resetFontSettings();
    const _0xfa865f = VisuMZ.ItemsEquipsCore.Settings.ItemScene;
    const _0x4d2c96 = _0xfa865f.ItemQuantityFmt;
    const _0x466766 = _0x4d2c96.format($gameParty.numItems(_0x379e2d));
    this.contents.fontSize = _0xfa865f.ItemQuantityFontSize;
    this.drawText(_0x466766, _0x144f14, _0x5d406b, _0x3a6202, 'right');
    this.resetFontSettings();
  }
};
Window_Base.prototype.isDrawItemNumber = function (_0x1c2b5a) {
  if (DataManager.isKeyItem(_0x1c2b5a)) {
    return $dataSystem.optKeyItemsNumber;
  }
  return true;
};
Window_Base.prototype.drawItemDarkRect = function (_0x1cef57, _0x2a568b, _0x19bd16, _0x43bac1, _0x4f54a3) {
  _0x4f54a3 = Math.max(_0x4f54a3 || 0x1, 0x1);
  while (_0x4f54a3--) {
    _0x43bac1 = _0x43bac1 || this.lineHeight();
    this.contentsBack.paintOpacity = 0xa0;
    const _0x509509 = ColorManager.gaugeBackColor();
    this.contentsBack.fillRect(_0x1cef57 + 0x1, _0x2a568b + 0x1, _0x19bd16 - 0x2, _0x43bac1 - 0x2, _0x509509);
    this.contentsBack.paintOpacity = 0xff;
  }
};
VisuMZ.ItemsEquipsCore.Window_Selectable_initialize = Window_Selectable.prototype.initialize;
Window_Selectable.prototype.initialize = function (_0x5bb5af) {
  this.initNewLabelSprites();
  VisuMZ.ItemsEquipsCore.Window_Selectable_initialize.call(this, _0x5bb5af);
};
Window_Selectable.prototype.initNewLabelSprites = function () {
  this._newLabelSprites = {};
  this._newLabelOpacity = 0xff;
  this._newLabelOpacityChange = VisuMZ.ItemsEquipsCore.Settings.New.FadeSpeed;
  this._newLabelOpacityUpperLimit = VisuMZ.ItemsEquipsCore.Settings.New.FadeLimit;
};
Window_Selectable.prototype.isShowNew = function () {
  return false;
};
VisuMZ.ItemsEquipsCore.Window_Selectable_setHelpWindowItem = Window_Selectable.prototype.setHelpWindowItem;
Window_Selectable.prototype.setHelpWindowItem = function (_0x38ce5a) {
  VisuMZ.ItemsEquipsCore.Window_Selectable_setHelpWindowItem.call(this, _0x38ce5a);
  if (this.isShowNew()) {
    this.clearNewLabelFromItem(_0x38ce5a);
  }
};
Window_Selectable.prototype.clearNewLabelFromItem = function (_0x51fee9) {
  if (!_0x51fee9) {
    return;
  }
  $gameParty.clearNewItem(_0x51fee9);
  let _0x3255fd = '';
  if (DataManager.isItem(_0x51fee9)) {
    _0x3255fd = "item-%1".format(_0x51fee9.id);
  } else {
    if (DataManager.isWeapon(_0x51fee9)) {
      _0x3255fd = "weapon-%1".format(_0x51fee9.id);
    } else {
      if (DataManager.isArmor(_0x51fee9)) {
        _0x3255fd = "armor-%1".format(_0x51fee9.id);
      } else {
        return;
      }
    }
  }
  const _0x587139 = this._newLabelSprites[_0x3255fd];
  if (_0x587139) {
    _0x587139.hide();
  }
};
VisuMZ.ItemsEquipsCore.Window_Selectable_refresh = Window_Selectable.prototype.refresh;
Window_Selectable.prototype.refresh = function () {
  this.hideNewLabelSprites();
  VisuMZ.ItemsEquipsCore.Window_Selectable_refresh.call(this);
};
Window_Selectable.prototype.hideNewLabelSprites = function () {
  for (const _0x3bd013 of Object.values(this._newLabelSprites)) {
    _0x3bd013.hide();
  }
};
VisuMZ.ItemsEquipsCore.Window_Selectable_update = Window_Selectable.prototype.update;
Window_Selectable.prototype.update = function () {
  this.updateNewLabelOpacity();
  VisuMZ.ItemsEquipsCore.Window_Selectable_update.call(this);
};
Window_Selectable.prototype.updateNewLabelOpacity = function () {
  if (!this.isShowNew()) {
    return;
  }
  const _0x26f585 = this._newLabelOpacityUpperLimit;
  this._newLabelOpacity += this._newLabelOpacityChange;
  if (this._newLabelOpacity >= _0x26f585 || this._newLabelOpacity <= 0x0) {
    this._newLabelOpacityChange *= -0x1;
  }
  this._newLabelOpacity = this._newLabelOpacity.clamp(0x0, _0x26f585);
  for (const _0x3b7b2b of Object.values(this._newLabelSprites)) {
    _0x3b7b2b.opacity = this._newLabelOpacity;
  }
};
Window_Selectable.prototype.createNewLabelSprite = function (_0x2b2c00) {
  const _0x4967fc = this._newLabelSprites;
  if (_0x4967fc[_0x2b2c00]) {
    return _0x4967fc[_0x2b2c00];
  } else {
    const _0x4b4a84 = new Sprite_NewLabel();
    _0x4967fc[_0x2b2c00] = _0x4b4a84;
    this.addInnerChild(_0x4b4a84);
    return _0x4b4a84;
  }
};
Window_Selectable.prototype.placeNewLabel = function (_0x1926cc, _0x2c147b, _0x4e0f4e) {
  let _0x2c71b7 = '';
  if (DataManager.isItem(_0x1926cc)) {
    _0x2c71b7 = "item-%1".format(_0x1926cc.id);
  } else {
    if (DataManager.isWeapon(_0x1926cc)) {
      _0x2c71b7 = "weapon-%1".format(_0x1926cc.id);
    } else {
      if (DataManager.isArmor(_0x1926cc)) {
        _0x2c71b7 = "armor-%1".format(_0x1926cc.id);
      } else {
        return;
      }
    }
  }
  const _0x459757 = this.createNewLabelSprite(_0x2c71b7);
  _0x459757.move(_0x2c147b, _0x4e0f4e);
  _0x459757.show();
  _0x459757.opacity = this._newLabelOpacity;
};
Window_ItemCategory.categoryList = VisuMZ.ItemsEquipsCore.Settings.Categories.List;
Window_ItemCategory.categoryItemTypes = ['HiddenItemA', "HiddenItemB", "Nonconsumable", "Consumable", 'AlwaysUsable', 'BattleUsable', 'FieldUsable', "NeverUsable"];
VisuMZ.ItemsEquipsCore.Window_ItemCategory_initialize = Window_ItemCategory.prototype.initialize;
Window_ItemCategory.prototype.initialize = function (_0x4f8532) {
  VisuMZ.ItemsEquipsCore.Window_ItemCategory_initialize.call(this, _0x4f8532);
  this.createCategoryNameWindow(_0x4f8532);
};
Window_ItemCategory.prototype.createCategoryNameWindow = function (_0x2244c3) {
  const _0x24299d = new Rectangle(0x0, 0x0, _0x2244c3.width, _0x2244c3.height);
  this._categoryNameWindow = new Window_Base(_0x24299d);
  this._categoryNameWindow.opacity = 0x0;
  this.addChild(this._categoryNameWindow);
  this.updateCategoryNameWindow();
};
Window_ItemCategory.prototype.isUseModernControls = function () {
  return Imported.VisuMZ_0_CoreEngine && Window_HorzCommand.prototype.isUseModernControls.call(this);
};
Window_ItemCategory.prototype.processCursorHomeEndTrigger = function () {};
Window_ItemCategory.prototype.playOkSound = function () {
  if (!this.isUseModernControls()) {
    Window_HorzCommand.prototype.playOkSound.call(this);
  }
};
Window_ItemCategory.prototype.maxCols = function () {
  return this._list ? this.maxItems() : 0x4;
};
Window_ItemCategory.prototype.update = function () {
  Window_HorzCommand.prototype.update.call(this);
  if (this._itemWindow) {
    this._itemWindow.setCategory(this.currentExt());
  }
};
Window_ItemCategory.prototype.processCursorMoveModernControls = function () {
  if (this.isCursorMovable()) {
    const _0x9218fd = this.index();
    if (this._itemWindow && this._itemWindow.maxCols() <= 0x1) {
      if (Input.isRepeated("right")) {
        this.cursorRight(Input.isTriggered("right"));
      }
      if (Input.isRepeated("left")) {
        this.cursorLeft(Input.isTriggered("left"));
      }
    } else if (this._itemWindow && this._itemWindow.maxCols() > 0x1) {
      if (Input.isRepeated("pagedown") && !Input.isPressed("shift")) {
        this.cursorRight(Input.isTriggered('pagedown'));
      }
      if (Input.isRepeated("pageup") && !Input.isPressed('shift')) {
        this.cursorLeft(Input.isTriggered("pageup"));
      }
    }
    if (this.index() !== _0x9218fd) {
      this.playCursorSound();
    }
  }
};
Window_ItemCategory.prototype.processHandling = function () {
  if (this.isUseModernControls()) {
    return;
  }
  Window_HorzCommand.prototype.processHandling.call(this);
};
Window_ItemCategory.prototype.isHoverEnabled = function () {
  return this.isUseModernControls() ? false : Window_HorzCommand.prototype.isHoverEnabled.call(this);
};
Window_ItemCategory.prototype.processTouchModernControls = function () {
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
Window_ItemCategory.prototype.onTouchSelect = function (_0x6b0c4f) {
  if (this.isUseModernControls()) {
    this.onTouchSelectModern(true);
  } else {
    Window_HorzCommand.prototype.onTouchSelect.call(this, _0x6b0c4f);
  }
};
Window_ItemCategory.prototype.onTouchSelectModern = function (_0x5daea3) {
  this._doubleTouch = false;
  if (this.isCursorMovable()) {
    const _0x2ff6dc = this.index();
    const _0x2a3b75 = this.hitIndex();
    if (_0x2a3b75 >= 0x0 && _0x2a3b75 !== this.index()) {
      this.select(_0x2a3b75);
    }
    if (_0x5daea3 && this.index() !== _0x2ff6dc) {
      this.playCursorSound();
    }
  }
};
Window_ItemCategory.prototype.makeCommandList = function () {
  this.addItemCategories();
  this.select(this.index());
};
Window_ItemCategory.prototype.addItemCategories = function () {
  for (const _0x314d28 of Window_ItemCategory.categoryList) {
    this.addItemCategory(_0x314d28);
  }
};
Window_ItemCategory.prototype.addItemCategory = function (_0x535518) {
  const _0x2d3cd9 = _0x535518.Type;
  const _0x5bba71 = _0x535518.Icon;
  const _0x2e528e = _0x535518.SwitchID || 0x0;
  if (_0x2e528e > 0x0 && !$gameSwitches.value(_0x2e528e)) {
    return;
  }
  let _0x3aa5b4 = '';
  if (_0x2d3cd9.match(/Category:(.*)/i)) {
    _0x3aa5b4 = String(RegExp.$1).trim();
  } else {
    if (Window_ItemCategory.categoryItemTypes.includes(_0x2d3cd9)) {
      _0x3aa5b4 = VisuMZ.ItemsEquipsCore.Settings.Categories[_0x2d3cd9];
    } else {
      if (["AllItems", "RegularItems"].includes(_0x2d3cd9)) {
        _0x3aa5b4 = TextManager.item;
      } else {
        if (_0x2d3cd9 === 'KeyItems') {
          _0x3aa5b4 = TextManager.keyItem;
        } else {
          if (_0x2d3cd9 === 'AllWeapons') {
            _0x3aa5b4 = TextManager.weapon;
          } else {
            if (_0x2d3cd9 === "AllArmors") {
              _0x3aa5b4 = TextManager.armor;
            } else {
              if (_0x2d3cd9.match(/WTYPE:(\d+)/i)) {
                _0x3aa5b4 = $dataSystem.weaponTypes[Number(RegExp.$1)] || '';
              } else {
                if (_0x2d3cd9.match(/ATYPE:(\d+)/i)) {
                  _0x3aa5b4 = $dataSystem.armorTypes[Number(RegExp.$1)] || '';
                } else if (_0x2d3cd9.match(/ETYPE:(\d+)/i)) {
                  _0x3aa5b4 = $dataSystem.equipTypes[Number(RegExp.$1)] || '';
                }
              }
            }
          }
        }
      }
    }
  }
  if (_0x5bba71 > 0x0 && this.categoryStyle() !== 'text') {
    _0x3aa5b4 = "\\I[%1]%2".format(_0x5bba71, _0x3aa5b4);
  }
  this.addCommand(_0x3aa5b4, "category", true, _0x2d3cd9);
};
Window_ItemCategory.prototype.itemTextAlign = function () {
  return VisuMZ.ItemsEquipsCore.Settings.Categories.TextAlign;
};
Window_ItemCategory.prototype.drawItem = function (_0x12382e) {
  const _0x31778c = this.categoryStyleCheck(_0x12382e);
  if (_0x31778c === "iconText") {
    this.drawItemStyleIconText(_0x12382e);
  } else if (_0x31778c === "icon") {
    this.drawItemStyleIcon(_0x12382e);
  } else {
    Window_HorzCommand.prototype.drawItem.call(this, _0x12382e);
  }
};
Window_ItemCategory.prototype.categoryStyle = function () {
  return VisuMZ.ItemsEquipsCore.Settings.Categories.Style;
};
Window_ItemCategory.prototype.categoryStyleCheck = function (_0x51c124) {
  if (_0x51c124 < 0x0) {
    return "text";
  }
  const _0x444037 = this.categoryStyle();
  if (_0x444037 !== 'auto') {
    return _0x444037;
  } else {
    const _0x3fd6ef = this.commandName(_0x51c124);
    if (_0x3fd6ef.match(/\\I\[(\d+)\]/i)) {
      const _0xfb608d = this.itemLineRect(_0x51c124);
      const _0x558530 = this.textSizeEx(_0x3fd6ef).width;
      return _0x558530 <= _0xfb608d.width ? "iconText" : 'icon';
    } else {
      return "text";
    }
  }
};
Window_ItemCategory.prototype.drawItemStyleIconText = function (_0x438a80) {
  const _0x535b11 = this.itemLineRect(_0x438a80);
  const _0x37782e = this.commandName(_0x438a80);
  const _0x11b0f8 = this.textSizeEx(_0x37782e).width;
  this.changePaintOpacity(this.isCommandEnabled(_0x438a80));
  const _0x2beefe = this.itemTextAlign();
  if (_0x2beefe === "right") {
    this.drawTextEx(_0x37782e, _0x535b11.x + _0x535b11.width - _0x11b0f8, _0x535b11.y, _0x11b0f8);
  } else {
    if (_0x2beefe === 'center') {
      const _0x4bc03e = _0x535b11.x + Math.floor((_0x535b11.width - _0x11b0f8) / 0x2);
      this.drawTextEx(_0x37782e, _0x4bc03e, _0x535b11.y, _0x11b0f8);
    } else {
      this.drawTextEx(_0x37782e, _0x535b11.x, _0x535b11.y, _0x11b0f8);
    }
  }
};
Window_ItemCategory.prototype.drawItemStyleIcon = function (_0x7fe673) {
  const _0x1be415 = this.commandName(_0x7fe673);
  if (_0x1be415.match(/\\I\[(\d+)\]/i)) {
    const _0x5f3e9f = Number(RegExp.$1) || 0x0;
    const _0x3b0358 = this.itemLineRect(_0x7fe673);
    const _0x221b3b = _0x3b0358.x + Math.floor((_0x3b0358.width - ImageManager.iconWidth) / 0x2);
    const _0x7aab = _0x3b0358.y + (_0x3b0358.height - ImageManager.iconHeight) / 0x2;
    this.drawIcon(_0x5f3e9f, _0x221b3b, _0x7aab);
  }
};
VisuMZ.ItemsEquipsCore.Window_ItemCategory_setItemWindow = Window_ItemCategory.prototype.setItemWindow;
Window_ItemCategory.prototype.setItemWindow = function (_0x508eef) {
  VisuMZ.ItemsEquipsCore.Window_ItemCategory_setItemWindow.call(this, _0x508eef);
  _0x508eef._categoryWindow = this;
};
Window_ItemCategory.prototype.callUpdateHelp = function () {
  Window_HorzCommand.prototype.callUpdateHelp.call(this);
  if (this._categoryNameWindow) {
    this.updateCategoryNameWindow();
  }
};
Window_ItemCategory.prototype.updateCategoryNameWindow = function () {
  const _0x4d3fc9 = this._categoryNameWindow;
  _0x4d3fc9.contents.clear();
  const _0x4caba5 = this.categoryStyleCheck(this.index());
  if (_0x4caba5 === "icon") {
    const _0x2d1035 = this.itemLineRect(this.index());
    let _0x451e1c = this.commandName(this.index());
    _0x451e1c = _0x451e1c.replace(/\\I\[(\d+)\]/gi, '');
    _0x4d3fc9.resetFontSettings();
    this.categoryNameWindowDrawBackground(_0x451e1c, _0x2d1035);
    this.categoryNameWindowDrawText(_0x451e1c, _0x2d1035);
    this.categoryNameWindowCenter(_0x451e1c, _0x2d1035);
  }
};
Window_ItemCategory.prototype.categoryNameWindowDrawBackground = function (_0x7b3e54, _0xd78e29) {};
Window_ItemCategory.prototype.categoryNameWindowDrawText = function (_0x6534f5, _0x2731a7) {
  const _0x5b2902 = this._categoryNameWindow;
  _0x5b2902.drawText(_0x6534f5, 0x0, _0x2731a7.y, _0x5b2902.innerWidth, "center");
};
Window_ItemCategory.prototype.categoryNameWindowCenter = function (_0x309aab, _0x3e825e) {
  const _0x21d77e = this._categoryNameWindow;
  const _0x489b82 = $gameSystem.windowPadding();
  const _0x55f1fe = _0x3e825e.x + Math.floor(_0x3e825e.width / 0x2) + _0x489b82;
  _0x21d77e.x = _0x21d77e.width / -0x2 + _0x55f1fe;
  _0x21d77e.y = Math.floor(_0x3e825e.height / 0x2);
};
Window_ItemList.prototype.processCursorMoveModernControls = function () {
  if (this.isCursorMovable()) {
    const _0x29c3e7 = this.index();
    if (this.maxCols() <= 0x1) {
      if (!this.isHandled("pagedown") && Input.isTriggered("pagedown")) {
        this.cursorPagedown();
      }
      if (!this.isHandled('pageup') && Input.isTriggered("pageup")) {
        this.cursorPageup();
      }
    } else if (this.maxCols() > 0x1) {
      if (Input.isRepeated("right")) {
        this.cursorRight(Input.isTriggered('right'));
      }
      if (Input.isRepeated('left')) {
        this.cursorLeft(Input.isTriggered('left'));
      }
      if (this.limitedPageUpDownSceneCheck()) {
        if (Input.isTriggered("pagedown") && Input.isPressed("shift")) {
          this.cursorPagedown();
        }
        if (Input.isTriggered('pageup') && Input.isPressed("shift")) {
          this.cursorPageup();
        }
      } else {
        if (Input.isTriggered("pagedown")) {
          this.cursorPagedown();
        }
        if (Input.isTriggered('pageup')) {
          this.cursorPageup();
        }
      }
    }
    if (Input.isRepeated("down")) {
      if (Input.isPressed("shift") && this.allowShiftScrolling()) {
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
    if (Imported.VisuMZ_0_CoreEngine) {
      this.processCursorHomeEndTrigger();
    }
    if (this.index() !== _0x29c3e7) {
      this.playCursorSound();
    }
  }
};
Window_ItemList.prototype.limitedPageUpDownSceneCheck = function () {
  const _0x7befc4 = SceneManager._scene;
  const _0x2fda36 = [Scene_Item, Scene_Shop];
  return _0x2fda36.includes(_0x7befc4.constructor);
};
Window_ItemList.prototype.activate = function () {
  Window_Selectable.prototype.activate.call(this);
  if (this._categoryWindow && this._categoryWindow.isUseModernControls()) {
    this._categoryWindow.activate();
  }
};
Window_ItemList.prototype.deactivate = function () {
  Window_Selectable.prototype.deactivate.call(this);
  if (this._categoryWindow && this._categoryWindow.isUseModernControls()) {
    this._categoryWindow.deactivate();
  }
};
Window_ItemList.prototype.setCategory = function (_0x31ca7e) {
  if (this._category !== _0x31ca7e) {
    this._category = _0x31ca7e;
    this.refresh();
    if (this._categoryWindow && this._categoryWindow.isUseModernControls()) {
      this.smoothSelect(0x0);
    } else {
      this.scrollTo(0x0, 0x0);
    }
  }
};
VisuMZ.ItemsEquipsCore.Window_ItemList_maxCols = Window_ItemList.prototype.maxCols;
Window_ItemList.prototype.maxCols = function () {
  if (SceneManager._scene.constructor === Scene_Battle) {
    return VisuMZ.ItemsEquipsCore.Window_ItemList_maxCols.call(this);
  } else {
    return SceneManager._scene.constructor === Scene_Map ? VisuMZ.ItemsEquipsCore.Window_ItemList_maxCols.call(this) : VisuMZ.ItemsEquipsCore.Settings.ItemScene.ListWindowCols;
  }
};
VisuMZ.ItemsEquipsCore.Window_ItemList_colSpacing = Window_ItemList.prototype.colSpacing;
Window_ItemList.prototype.colSpacing = function () {
  return this.maxCols() <= 0x1 ? Window_Selectable.prototype.colSpacing.call(this) : VisuMZ.ItemsEquipsCore.Window_ItemList_colSpacing.call(this);
};
Window_ItemList.prototype.includes = function (_0x1eaf6d) {
  switch (this._category) {
    case 'AllItems':
      return DataManager.isItem(_0x1eaf6d);
    case "RegularItems":
      return DataManager.isItem(_0x1eaf6d) && _0x1eaf6d.itypeId === 0x1;
    case "KeyItems":
      return DataManager.isItem(_0x1eaf6d) && _0x1eaf6d.itypeId === 0x2;
    case "HiddenItemA":
      return DataManager.isItem(_0x1eaf6d) && _0x1eaf6d.itypeId === 0x3;
    case 'HiddenItemB':
      return DataManager.isItem(_0x1eaf6d) && _0x1eaf6d.itypeId === 0x4;
    case "Consumable":
      return DataManager.isItem(_0x1eaf6d) && _0x1eaf6d.consumable;
    case "Nonconsumable":
      return DataManager.isItem(_0x1eaf6d) && !_0x1eaf6d.consumable;
    case "AlwaysUsable":
      return DataManager.isItem(_0x1eaf6d) && [0x0].includes(_0x1eaf6d.occasion);
    case 'BattleUsable':
      return DataManager.isItem(_0x1eaf6d) && [0x0, 0x1].includes(_0x1eaf6d.occasion);
    case "FieldUsable":
      return DataManager.isItem(_0x1eaf6d) && [0x0, 0x2].includes(_0x1eaf6d.occasion);
    case "NeverUsable":
      return DataManager.isItem(_0x1eaf6d) && [0x3].includes(_0x1eaf6d.occasion);
    case "AllWeapons":
      return DataManager.isWeapon(_0x1eaf6d);
    case "AllArmors":
      return DataManager.isArmor(_0x1eaf6d);
    default:
      if (this._category.match(/WTYPE:(\d+)/i)) {
        return DataManager.isWeapon(_0x1eaf6d) && _0x1eaf6d.wtypeId === Number(RegExp.$1);
      } else {
        if (this._category.match(/WTYPE:(.*)/i)) {
          const _0x3a7b92 = $dataSystem.weaponTypes.indexOf(String(RegExp.$1).trim());
          return DataManager.isWeapon(_0x1eaf6d) && _0x1eaf6d.wtypeId === _0x3a7b92;
        } else {
          if (this._category.match(/ATYPE:(\d+)/i)) {
            return DataManager.isArmor(_0x1eaf6d) && _0x1eaf6d.atypeId === Number(RegExp.$1);
          } else {
            if (this._category.match(/ATYPE:(.*)/i)) {
              const _0x1b905f = $dataSystem.armorTypes.indexOf(String(RegExp.$1).trim());
              return DataManager.isArmor(_0x1eaf6d) && _0x1eaf6d.atypeId === _0x1b905f;
            } else {
              if (this._category.match(/ETYPE:(\d+)/i)) {
                return !!_0x1eaf6d && _0x1eaf6d.etypeId === Number(RegExp.$1);
              } else {
                if (this._category.match(/ETYPE:(.*)/i)) {
                  const _0x4abe19 = $dataSystem.equipTypes.indexOf(String(RegExp.$1).trim());
                  return DataManager.isArmor(_0x1eaf6d) && _0x1eaf6d.etypeId === _0x4abe19;
                } else {
                  if (this._category.match(/Category:(.*)/i)) {
                    return !!_0x1eaf6d && _0x1eaf6d.categories.includes(String(RegExp.$1).toUpperCase().trim());
                  }
                }
              }
            }
          }
        }
      }
  }
  return false;
};
VisuMZ.ItemsEquipsCore.Window_ItemList_makeItemList = Window_ItemList.prototype.makeItemList;
Window_ItemList.prototype.makeItemList = function () {
  VisuMZ.ItemsEquipsCore.Window_ItemList_makeItemList.call(this);
  if (this.canSortListItemScene()) {
    this.sortListItemScene();
  }
};
Window_ItemList.prototype.canSortListItemScene = function () {
  const _0x30b48a = ["Scene_Battle", "Scene_Item", 'Scene_Equip', "Scene_Shop"];
  const _0x39268c = SceneManager._scene;
  return _0x30b48a.includes(_0x39268c.constructor.name);
};
Window_ItemList.prototype.sortListItemScene = function () {
  const _0x4c50b3 = Window_ItemCategory.categoryList;
  const _0x28827f = _0x4c50b3.find(_0x27b6e5 => _0x27b6e5.Type === this._category);
  if (!_0x28827f) {
    VisuMZ.ItemsEquipsCore.SortByIDandPriority(this._data);
    return;
  }
  const _0x14cd55 = ((_0x28827f.SortBy ?? 'ID') || 'ID').toUpperCase().trim();
  if (_0x14cd55 === 'NAME') {
    this._data.sort((_0x5d4a9e, _0x20b4a5) => {
      if (!!_0x5d4a9e && !!_0x20b4a5) {
        return _0x5d4a9e.name.localeCompare(_0x20b4a5.name);
      }
      return 0x0;
    });
  } else {
    VisuMZ.ItemsEquipsCore.SortByIDandPriority(this._data);
  }
};
VisuMZ.ItemsEquipsCore.SortByIDandPriority = function (_0x5bac1e) {
  _0x5bac1e.sort((_0x4b2398, _0x598fb5) => {
    if (!!_0x4b2398 && !!_0x598fb5) {
      if (_0x4b2398.sortPriority === undefined) {
        VisuMZ.ItemsEquipsCore.Parse_Notetags_Sorting(_0x4b2398);
      }
      if (_0x598fb5.sortPriority === undefined) {
        VisuMZ.ItemsEquipsCore.Parse_Notetags_Sorting(_0x598fb5);
      }
      const _0x10470d = _0x4b2398.sortPriority;
      const _0x5cc16c = _0x598fb5.sortPriority;
      if (_0x10470d !== _0x5cc16c) {
        return _0x5cc16c - _0x10470d;
      }
      return _0x4b2398.id - _0x598fb5.id;
    }
    return 0x0;
  });
  return _0x5bac1e;
};
Window_ItemList.prototype.isShowNew = function () {
  return true;
};
VisuMZ.ItemsEquipsCore.Window_ItemList_drawItem = Window_ItemList.prototype.drawItem;
Window_ItemList.prototype.drawItem = function (_0x245953) {
  VisuMZ.ItemsEquipsCore.Window_ItemList_drawItem.call(this, _0x245953);
  this.placeItemNewLabel(_0x245953);
};
Window_ItemList.prototype.drawItemNumber = function (_0x176ac0, _0x5d3eba, _0x1db664, _0x3ba6f4) {
  Window_Selectable.prototype.drawItemNumber.call(this, _0x176ac0, _0x5d3eba, _0x1db664, _0x3ba6f4);
};
Window_ItemList.prototype.placeItemNewLabel = function (_0x86930f) {
  const _0x5e0914 = this.itemAt(_0x86930f);
  if (!_0x5e0914 || !this.isShowNew()) {
    return;
  }
  if (!$gameParty.isNewItem(_0x5e0914)) {
    return;
  }
  const _0x456a02 = this.itemLineRect(_0x86930f);
  const _0x4ec97e = _0x456a02.x;
  const _0x3d782a = _0x456a02.y + (this.lineHeight() - ImageManager.iconHeight) / 0x2;
  const _0x510336 = VisuMZ.ItemsEquipsCore.Settings.New.OffsetX;
  const _0x59ab78 = VisuMZ.ItemsEquipsCore.Settings.New.OffsetY;
  this.placeNewLabel(_0x5e0914, _0x4ec97e + _0x510336, _0x3d782a + _0x59ab78);
};
Window_ItemList.prototype.setStatusWindow = function (_0x42fc84) {
  this._statusWindow = _0x42fc84;
  this.callUpdateHelp();
};
VisuMZ.ItemsEquipsCore.Window_ItemList_updateHelp = Window_ItemList.prototype.updateHelp;
Window_ItemList.prototype.updateHelp = function () {
  VisuMZ.ItemsEquipsCore.Window_ItemList_updateHelp.call(this);
  if (this._statusWindow && this._statusWindow.constructor === Window_ShopStatus) {
    this._statusWindow.setItem(this.item());
  }
};
Window_BattleItem.prototype.isEnabled = function (_0x18d48d) {
  return BattleManager.actor() ? BattleManager.actor().canUse(_0x18d48d) : Window_ItemList.prototype.isEnabled.call(this, _0x18d48d);
};
Window_EventItem.prototype.isShowNew = function () {
  return false;
};
Window_EquipStatus.prototype.isUseItemsEquipsCoreUpdatedLayout = function () {
  return VisuMZ.ItemsEquipsCore.Settings.EquipScene.EnableLayout;
};
VisuMZ.ItemsEquipsCore.Window_EquipStatus_refresh = Window_EquipStatus.prototype.refresh;
Window_EquipStatus.prototype.refresh = function () {
  this.hideAdditionalSprites();
  this.resetFontSettings();
  if (this._actor) {
    this._actor.refresh();
  }
  if (this.isUseItemsEquipsCoreUpdatedLayout()) {
    this.prepareRefreshItemsEquipsCoreLayout();
  } else {
    VisuMZ.ItemsEquipsCore.Window_EquipStatus_refresh.call(this);
  }
};
Window_EquipStatus.prototype.prepareRefreshItemsEquipsCoreLayout = function () {
  this.contents.clear();
  if (!this._actor) {
    return;
  }
  if (this.isMainMenuCoreMenuImageOptionAvailable()) {
    const _0x353277 = ImageManager.loadPicture(this._actor.getMenuImage());
    _0x353277.addLoadListener(this.onMenuImageLoad.bind(this));
  } else {
    this.refreshItemsEquipsCoreNoMenuImage();
  }
};
Window_EquipStatus.prototype.isMainMenuCoreMenuImageOptionAvailable = function () {
  return Imported.VisuMZ_1_MainMenuCore && this._actor.getMenuImage() !== '' && VisuMZ.ItemsEquipsCore.Settings.EquipScene.MenuPortraits;
};
Window_EquipStatus.prototype.onMenuImageLoad = function () {
  VisuMZ.ItemsEquipsCore.Settings.EquipScene.DrawPortraitJS.call(this);
  this.drawParamsItemsEquipsCore();
};
Window_EquipStatus.prototype.refreshItemsEquipsCoreNoMenuImage = function () {
  VisuMZ.ItemsEquipsCore.Settings.EquipScene.DrawFaceJS.call(this);
  this.drawParamsItemsEquipsCore();
};
Window_EquipStatus.prototype.drawParamsItemsEquipsCore = function () {
  this.resetFontSettings();
  VisuMZ.ItemsEquipsCore.Settings.EquipScene.DrawParamJS.call(this);
};
Window_EquipStatus.prototype.drawItemActorMenuImage = function (_0x37854a, _0x4a8e99, _0x259f78, _0x519a0d, _0x4feb21) {
  const _0x4b16c7 = ImageManager.loadPicture(_0x37854a.getMenuImage());
  const _0x5d57b2 = this.innerWidth - _0x4b16c7.width;
  _0x4a8e99 += _0x5d57b2 / 0x2;
  if (_0x5d57b2 < 0x0) {
    _0x519a0d -= _0x5d57b2;
  }
  Window_StatusBase.prototype.drawItemActorMenuImage.call(this, _0x37854a, _0x4a8e99, _0x259f78, _0x519a0d, _0x4feb21);
};
Window_EquipStatus.prototype.actorParams = function () {
  return Imported.VisuMZ_0_CoreEngine ? VisuMZ.CoreEngine.Settings.Param.ExtDisplayedParams : [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7];
};
Window_EquipStatus.prototype.paramValueFontSize = function () {
  return VisuMZ.ItemsEquipsCore.Settings.EquipScene.ParamValueFontSize;
};
Window_EquipStatus.prototype.isUseParamNamesWithIcons = function () {
  return Imported.VisuMZ_0_CoreEngine && VisuMZ.CoreEngine.Settings.Param.DrawIcons;
};
Window_EquipStatus.prototype.drawUpdatedParamName = function (_0x148727, _0x5b42dc, _0x134735, _0x5cbf0d) {
  const _0x53ca54 = this.itemPadding();
  if (Imported.VisuMZ_0_CoreEngine) {
    this.drawParamText(_0x5b42dc + _0x53ca54, _0x134735, _0x5cbf0d, _0x148727, false);
  } else {
    this.drawText(TextManager.param(_0x148727), _0x5b42dc + _0x53ca54, _0x134735, _0x5cbf0d);
  }
};
Window_EquipStatus.prototype.drawUpdatedBeforeParamValue = function (_0x5d1976, _0x237674, _0x2efbae, _0x5daa0c) {
  const _0x17096c = this.itemPadding();
  let _0x5c7732 = 0x0;
  if (Imported.VisuMZ_0_CoreEngine) {
    _0x5c7732 = this._actor.paramValueByName(_0x5d1976, true);
  } else {
    _0x5c7732 = this._actor.param(_0x5d1976);
  }
  this.drawText(_0x5c7732, _0x237674, _0x2efbae, _0x5daa0c - _0x17096c, "right");
};
Window_EquipStatus.prototype.drawUpdatedAfterParamValue = function (_0x193bac, _0x450a94, _0x368a6a, _0x18acdc) {
  const _0x5bef2b = this.itemPadding();
  let _0x326afe = 0x0;
  let _0x5ebc32 = 0x0;
  let _0x5c465b = '';
  if (this._tempActor) {
    if (Imported.VisuMZ_0_CoreEngine) {
      _0x326afe = this._actor.paramValueByName(_0x193bac, false);
      _0x5ebc32 = this._tempActor.paramValueByName(_0x193bac, false);
      _0x5c465b = this._tempActor.paramValueByName(_0x193bac, true);
    } else {
      _0x326afe = this._actor.param(_0x193bac);
      _0x5ebc32 = this._tempActor.param(_0x193bac);
      _0x5c465b = this._tempActor.param(_0x193bac);
    }
    const _0x46692e = _0x326afe;
    const _0x152340 = _0x5ebc32;
    diffValue = _0x152340 - _0x46692e;
    this.changeTextColor(ColorManager.paramchangeTextColor(diffValue));
    this.drawText(_0x5c465b, _0x450a94, _0x368a6a, _0x18acdc - _0x5bef2b, "right");
  }
};
Window_EquipStatus.prototype.drawUpdatedParamValueDiff = function (_0x13caed, _0x1d7e70, _0x8eb11f, _0x37ee7b) {
  const _0x31455d = this.itemPadding();
  let _0x3b3925 = 0x0;
  let _0x1f870e = 0x0;
  let _0x28f796 = false;
  if (this._tempActor) {
    if (Imported.VisuMZ_0_CoreEngine) {
      _0x3b3925 = this._actor.paramValueByName(_0x13caed, false);
      _0x1f870e = this._tempActor.paramValueByName(_0x13caed, false);
      _0x28f796 = String(this._actor.paramValueByName(_0x13caed, true)).match(/([%％])/i);
    } else {
      _0x3b3925 = this._actor.param(_0x13caed);
      _0x1f870e = this._tempActor.param(_0x13caed);
      _0x28f796 = _0x3b3925 % 0x1 !== 0x0 || _0x1f870e % 0x1 !== 0x0;
    }
    const _0x2b23c8 = _0x3b3925;
    const _0x30259b = _0x1f870e;
    const _0x58e1c5 = _0x30259b - _0x2b23c8;
    let _0x4189c4 = _0x58e1c5;
    if (_0x28f796) {
      _0x4189c4 = Math.round(_0x58e1c5 * 0x64) + '%';
    }
    if (_0x58e1c5 !== 0x0) {
      this.changeTextColor(ColorManager.paramchangeTextColor(_0x58e1c5));
      _0x4189c4 = (_0x58e1c5 > 0x0 ? '(+%1)' : "(%1)").format(_0x4189c4);
      this.drawText(_0x4189c4, _0x1d7e70 + _0x31455d, _0x8eb11f, _0x37ee7b, "left");
    }
  }
};
Window_EquipStatus.prototype.drawItemDarkRect = function (_0x239dd0, _0x2d75b6, _0x4cf833, _0x2f87dd, _0x426094) {
  if (VisuMZ.ItemsEquipsCore.Settings.EquipScene.DrawBackRect === false) {
    return;
  }
  _0x426094 = Math.max(_0x426094 || 0x1, 0x1);
  while (_0x426094--) {
    _0x2f87dd = _0x2f87dd || this.lineHeight();
    this.contents.paintOpacity = 0xa0;
    const _0x30a985 = ColorManager.getItemsEquipsCoreBackColor2();
    this.contents.fillRect(_0x239dd0 + 0x1, _0x2d75b6 + 0x1, _0x4cf833 - 0x2, _0x2f87dd - 0x2, _0x30a985);
    this.contents.paintOpacity = 0xff;
  }
};
ColorManager.getItemsEquipsCoreBackColor2 = function () {
  const _0x3b2400 = VisuMZ.ItemsEquipsCore.Settings.EquipScene;
  let _0x173c04 = _0x3b2400.BackRectColor !== undefined ? _0x3b2400.BackRectColor : 0x13;
  return ColorManager.getColor(_0x173c04);
};
VisuMZ.ItemsEquipsCore.Window_EquipCommand_initialize = Window_EquipCommand.prototype.initialize;
Window_EquipCommand.prototype.initialize = function (_0x50c076) {
  VisuMZ.ItemsEquipsCore.Window_EquipCommand_initialize.call(this, _0x50c076);
  this.createCommandNameWindow(_0x50c076);
};
Window_EquipCommand.prototype.createCommandNameWindow = function (_0x59fb02) {
  const _0x111970 = new Rectangle(0x0, 0x0, _0x59fb02.width, _0x59fb02.height);
  this._commandNameWindow = new Window_Base(_0x111970);
  this._commandNameWindow.opacity = 0x0;
  this.addChild(this._commandNameWindow);
  this.updateCommandNameWindow();
};
Window_EquipCommand.prototype.callUpdateHelp = function () {
  Window_HorzCommand.prototype.callUpdateHelp.call(this);
  if (this._commandNameWindow) {
    this.updateCommandNameWindow();
  }
};
Window_EquipCommand.prototype.updateCommandNameWindow = function () {
  const _0x363f49 = this._commandNameWindow;
  _0x363f49.contents.clear();
  const _0x85c66a = this.commandStyleCheck(this.index());
  if (_0x85c66a === "icon") {
    const _0x29a28e = this.itemLineRect(this.index());
    let _0x5bd4c5 = this.commandName(this.index());
    _0x5bd4c5 = _0x5bd4c5.replace(/\\I\[(\d+)\]/gi, '');
    _0x363f49.resetFontSettings();
    this.commandNameWindowDrawBackground(_0x5bd4c5, _0x29a28e);
    this.commandNameWindowDrawText(_0x5bd4c5, _0x29a28e);
    this.commandNameWindowCenter(_0x5bd4c5, _0x29a28e);
  }
};
Window_EquipCommand.prototype.commandNameWindowDrawBackground = function (_0x5b3d7e, _0x1a8390) {};
Window_EquipCommand.prototype.commandNameWindowDrawText = function (_0x1645e3, _0x1952b0) {
  const _0x3caa54 = this._commandNameWindow;
  _0x3caa54.drawText(_0x1645e3, 0x0, _0x1952b0.y, _0x3caa54.innerWidth, "center");
};
Window_EquipCommand.prototype.commandNameWindowCenter = function (_0x1835e9, _0x26c775) {
  const _0x11d830 = this._commandNameWindow;
  const _0x58ff06 = $gameSystem.windowPadding();
  const _0x39d7bc = _0x26c775.x + Math.floor(_0x26c775.width / 0x2) + _0x58ff06;
  _0x11d830.x = _0x11d830.width / -0x2 + _0x39d7bc;
  _0x11d830.y = Math.floor(_0x26c775.height / 0x2);
};
Window_EquipCommand.prototype.isUseModernControls = function () {
  return Imported.VisuMZ_0_CoreEngine && Window_HorzCommand.prototype.isUseModernControls.call(this);
};
Window_EquipCommand.prototype.playOkSound = function () {
  if (this.currentSymbol() === "equip") {
    Window_HorzCommand.prototype.playOkSound.call(this);
  }
};
Window_EquipCommand.prototype.processCursorMoveModernControls = function () {
  if (!this.processCursorSpecialCheckModernControls()) {
    Window_HorzCommand.prototype.processCursorMoveModernControls.call(this);
  }
};
Window_EquipCommand.prototype.processCursorSpecialCheckModernControls = function () {
  if (!this.isCursorMovable()) {
    return false;
  }
  if (SceneManager._scene.constructor !== Scene_Equip) {
    return false;
  }
  if (Input.isTriggered("down")) {
    this.processDownCursorSpecialCheckModernControls();
  }
  return false;
};
Window_EquipCommand.prototype.processDownCursorSpecialCheckModernControls = function () {
  this.playCursorSound();
  SceneManager._scene.commandEquip();
  SceneManager._scene._slotWindow.smoothSelect(-0x1);
};
Window_EquipCommand.prototype.maxCols = function () {
  return this._list ? this._list.length : 0x3;
};
Window_EquipCommand.prototype.processTouchModernControls = function () {
  if (this.isOpen() && this.visible && SceneManager._scene.constructor === Scene_Equip) {
    if (this.isHoverEnabled() && TouchInput.isHovered()) {
      this.onTouchSelectModernControls(false);
    } else if (TouchInput.isTriggered()) {
      this.onTouchSelectModernControls(true);
    }
    if (TouchInput.isClicked()) {
      this.onTouchOk();
    }
  }
};
Window_EquipCommand.prototype.onTouchSelectModernControls = function (_0x252fda) {
  this._doubleTouch = false;
  const _0x200d99 = this.index();
  const _0x58f6d8 = this.hitIndex();
  const _0x1c5756 = SceneManager._scene._slotWindow;
  if (_0x1c5756.isOpen() && _0x1c5756.visible) {
    if (_0x58f6d8 >= 0x0) {
      if (_0x58f6d8 === this.index()) {
        this._doubleTouch = true;
      }
      this.activate();
      this.select(_0x58f6d8);
    } else if (_0x1c5756.hitIndex() >= 0x0) {
      this.deactivate();
      this.deselect();
    }
  }
  if (_0x252fda && this.index() !== _0x200d99) {
    this.playCursorSound();
  }
};
Window_EquipCommand.prototype.makeCommandList = function () {
  this.addEquipCommand();
  this.addOptimizeCommand();
  this.addClearCommand();
};
Window_EquipCommand.prototype.refresh = function () {
  Window_HorzCommand.prototype.refresh.call(this);
  this.refreshCursor();
};
Window_EquipCommand.prototype.addEquipCommand = function () {
  if (!this.isEquipCommandAdded()) {
    return;
  }
  const _0x220a66 = this.commandStyle();
  const _0x2cc7d2 = VisuMZ.ItemsEquipsCore.Settings.EquipScene.CmdIconEquip;
  const _0x48d5f0 = _0x220a66 === "text" ? TextManager.equip2 : "\\I[%1]%2".format(_0x2cc7d2, TextManager.equip2);
  const _0x28f22c = this.isEquipCommandEnabled();
  this.addCommand(_0x48d5f0, 'equip', _0x28f22c);
};
Window_EquipCommand.prototype.isEquipCommandAdded = function () {
  return !this.isUseModernControls();
};
Window_EquipCommand.prototype.isEquipCommandEnabled = function () {
  return true;
};
Window_EquipCommand.prototype.addOptimizeCommand = function () {
  if (!this.isOptimizeCommandAdded()) {
    return;
  }
  const _0x17d69c = this.commandStyle();
  const _0x2bce76 = VisuMZ.ItemsEquipsCore.Settings.EquipScene.CmdIconOptimize;
  const _0x171942 = _0x17d69c === "text" ? TextManager.optimize : "\\I[%1]%2".format(_0x2bce76, TextManager.optimize);
  const _0x425e56 = this.isOptimizeCommandEnabled();
  this.addCommand(_0x171942, "optimize", _0x425e56);
};
Window_EquipCommand.prototype.isOptimizeCommandAdded = function () {
  return VisuMZ.ItemsEquipsCore.Settings.EquipScene.CommandAddOptimize;
};
Window_EquipCommand.prototype.isOptimizeCommandEnabled = function () {
  return true;
};
Window_EquipCommand.prototype.addClearCommand = function () {
  if (!this.isClearCommandAdded()) {
    return;
  }
  const _0x258a9f = this.commandStyle();
  const _0x5ba265 = VisuMZ.ItemsEquipsCore.Settings.EquipScene.CmdIconClear;
  const _0x3e8946 = _0x258a9f === 'text' ? TextManager.clear : "\\I[%1]%2".format(_0x5ba265, TextManager.clear);
  const _0x5bcf04 = this.isClearCommandEnabled();
  this.addCommand(_0x3e8946, "clear", _0x5bcf04);
};
Window_EquipCommand.prototype.isClearCommandAdded = function () {
  return VisuMZ.ItemsEquipsCore.Settings.EquipScene.CommandAddClear;
};
Window_EquipCommand.prototype.isClearCommandEnabled = function () {
  return true;
};
Window_EquipCommand.prototype.itemTextAlign = function () {
  return VisuMZ.ItemsEquipsCore.Settings.EquipScene.CmdTextAlign;
};
Window_EquipCommand.prototype.drawItem = function (_0x159479) {
  const _0x5c4d8c = this.commandStyleCheck(_0x159479);
  if (_0x5c4d8c === "iconText") {
    this.drawItemStyleIconText(_0x159479);
  } else if (_0x5c4d8c === 'icon') {
    this.drawItemStyleIcon(_0x159479);
  } else {
    Window_HorzCommand.prototype.drawItem.call(this, _0x159479);
  }
};
Window_EquipCommand.prototype.commandStyle = function () {
  return VisuMZ.ItemsEquipsCore.Settings.EquipScene.CmdStyle;
};
Window_EquipCommand.prototype.commandStyleCheck = function (_0x1c0576) {
  if (_0x1c0576 < 0x0) {
    return "text";
  }
  const _0x3c6b8c = this.commandStyle();
  if (_0x3c6b8c !== "auto") {
    return _0x3c6b8c;
  } else {
    if (this.maxItems() > 0x0) {
      const _0x5142c0 = this.commandName(_0x1c0576);
      if (_0x5142c0.match(/\\I\[(\d+)\]/i)) {
        const _0x1286ad = this.itemLineRect(_0x1c0576);
        const _0x2a155a = this.textSizeEx(_0x5142c0).width;
        return _0x2a155a <= _0x1286ad.width ? 'iconText' : 'icon';
      }
    }
  }
  return "text";
};
Window_EquipCommand.prototype.drawItemStyleIconText = function (_0x56a4ce) {
  const _0x314787 = this.itemLineRect(_0x56a4ce);
  const _0x345ca5 = this.commandName(_0x56a4ce);
  const _0x21f855 = this.textSizeEx(_0x345ca5).width;
  this.changePaintOpacity(this.isCommandEnabled(_0x56a4ce));
  const _0x30f73b = this.itemTextAlign();
  if (_0x30f73b === "right") {
    this.drawTextEx(_0x345ca5, _0x314787.x + _0x314787.width - _0x21f855, _0x314787.y, _0x21f855);
  } else {
    if (_0x30f73b === "center") {
      const _0x2d199d = _0x314787.x + Math.floor((_0x314787.width - _0x21f855) / 0x2);
      this.drawTextEx(_0x345ca5, _0x2d199d, _0x314787.y, _0x21f855);
    } else {
      this.drawTextEx(_0x345ca5, _0x314787.x, _0x314787.y, _0x21f855);
    }
  }
};
Window_EquipCommand.prototype.drawItemStyleIcon = function (_0x2f7b7b) {
  this.commandName(_0x2f7b7b).match(/\\I\[(\d+)\]/i);
  const _0x11f4f4 = Number(RegExp.$1) || 0x0;
  const _0x36f2e3 = this.itemLineRect(_0x2f7b7b);
  const _0xc445ef = _0x36f2e3.x + Math.floor((_0x36f2e3.width - ImageManager.iconWidth) / 0x2);
  const _0x4a712e = _0x36f2e3.y + (_0x36f2e3.height - ImageManager.iconHeight) / 0x2;
  this.drawIcon(_0x11f4f4, _0xc445ef, _0x4a712e);
};
Window_EquipCommand.prototype.actor = function () {
  const _0xb36b24 = SceneManager._scene;
  if (_0xb36b24 && _0xb36b24.user) {
    return _0xb36b24.user();
  }
  return null;
};
Window_EquipCommand.prototype.updateHelp = function () {
  Window_Command.prototype.updateHelp.call(this);
  this._helpWindow.setText(this.helpDescriptionText());
};
Window_EquipCommand.prototype.helpDescriptionText = function () {
  const _0x4e82c3 = this.currentSymbol();
  switch (_0x4e82c3) {
    case "equip":
      return TextManager.ITEMS_EQUIPS_CORE.helpDesc.equip;
    case "optimize":
      return TextManager.ITEMS_EQUIPS_CORE.helpDesc.optimize;
    case "clear":
      return TextManager.ITEMS_EQUIPS_CORE.helpDesc.clear;
    default:
      return '';
  }
};
Window_EquipSlot.prototype.isUseModernControls = function () {
  return Imported.VisuMZ_0_CoreEngine && Window_HorzCommand.prototype.isUseModernControls.call(this);
};
Window_EquipSlot.prototype.activate = function () {
  Window_StatusBase.prototype.activate.call(this);
  this.callUpdateHelp();
};
Window_EquipSlot.prototype.processCursorMove = function () {
  Window_StatusBase.prototype.processCursorMove.call(this);
  this.checkShiftRemoveShortcut();
};
Window_EquipSlot.prototype.checkShiftRemoveShortcut = function () {
  if (!this.isShiftRemoveShortcutEnabled()) {
    return;
  }
  if (Input.isTriggered("shift") && this.item()) {
    const _0x2c6a5a = SceneManager._scene._actor;
    if (_0x2c6a5a) {
      if (this.canShiftRemoveEquipment(this.index())) {
        this.processShiftRemoveShortcut();
        this.updateHelp();
      } else {
        this.playBuzzerSound();
      }
    }
  }
};
Window_EquipSlot.prototype.canShiftRemoveEquipment = function (_0x4807c3) {
  const _0x66f112 = SceneManager._scene._actor;
  if (!_0x66f112) {
    return;
  }
  if (!_0x66f112.isEquipChangeOk(_0x4807c3)) {
    return false;
  }
  const _0x24b033 = _0x66f112.equipSlots()[_0x4807c3];
  if (_0x66f112.nonRemovableEtypes().includes(_0x24b033)) {
    return false;
  }
  return true;
  ;
};
Window_EquipSlot.prototype.processShiftRemoveShortcut = function () {
  SoundManager.playEquip();
  const _0x474c57 = SceneManager._scene._actor;
  _0x474c57.changeEquip(this.index(), null);
  this.refresh();
  this._itemWindow.refresh();
  this.callUpdateHelp();
  const _0x3243ea = SceneManager._scene._statusWindow;
  if (_0x3243ea) {
    _0x3243ea.refresh();
  }
};
Window_EquipSlot.prototype.isShiftRemoveShortcutEnabled = function () {
  if (!this.active) {
    return false;
  }
  if (!VisuMZ.ItemsEquipsCore.Settings.EquipScene.ShiftShortcutKey) {
    return false;
  }
  return true;
};
Window_EquipSlot.prototype.processCursorMoveModernControls = function () {
  if (!this.processCursorSpecialCheckModernControls()) {
    Window_StatusBase.prototype.processCursorMoveModernControls.call(this);
  }
};
Window_EquipSlot.prototype.processCursorSpecialCheckModernControls = function () {
  if (!this.isCursorMovable()) {
    return false;
  }
  if (SceneManager._scene.constructor !== Scene_Equip) {
    return false;
  }
  if (this.allowCommandWindowCursorUp()) {
    this.playCursorSound();
    Input.clear();
    SceneManager._scene.onSlotCancel();
    return false;
  } else {
    if (Input.isRepeated('down')) {
      const _0x57f29b = this.index();
      if (Input.isPressed("shift")) {
        this.cursorPagedown();
      } else {
        this.cursorDown(Input.isTriggered('down'));
      }
      if (this.index() !== _0x57f29b) {
        this.playCursorSound();
      }
      return true;
    } else {
      if (this.isShiftShortcutKeyForRemove() && Input.isTriggered("shift")) {
        return true;
      }
    }
  }
  return false;
};
Window_EquipSlot.prototype.allowCommandWindowCursorUp = function () {
  if (this.index() !== 0x0) {
    return false;
  }
  const _0x5696ae = VisuMZ.ItemsEquipsCore.Settings.EquipScene;
  if (!_0x5696ae.CommandAddOptimize && !_0x5696ae.CommandAddClear) {
    return false;
  }
  return Input.isTriggered('up');
};
Window_EquipSlot.prototype.isShiftShortcutKeyForRemove = function () {
  return VisuMZ.ItemsEquipsCore.Settings.EquipScene.ShiftShortcutKey;
};
Window_EquipSlot.prototype.processTouchModernControls = function () {
  if (this.isOpen() && this.visible && SceneManager._scene.constructor === Scene_Equip) {
    if (this.isHoverEnabled() && TouchInput.isHovered()) {
      this.onTouchSelectModernControls(false);
    } else if (TouchInput.isTriggered()) {
      this.onTouchSelectModernControls(true);
    }
    if (TouchInput.isClicked()) {
      this.onTouchOk();
    } else if (TouchInput.isCancelled()) {
      this.onTouchCancel();
    }
  }
};
Window_EquipSlot.prototype.onTouchSelectModernControls = function (_0x1ea999) {
  this._doubleTouch = false;
  const _0x427144 = this.index();
  const _0x43c2f8 = this.hitIndex();
  const _0x45515 = SceneManager._scene._commandWindow;
  if (_0x45515.isOpen() && _0x45515.visible) {
    if (_0x43c2f8 >= 0x0) {
      if (_0x43c2f8 === this.index()) {
        this._doubleTouch = true;
      }
      this.activate();
      this.select(_0x43c2f8);
      _0x45515.deactivate();
    } else if (_0x45515.hitIndex() >= 0x0) {
      this.deactivate();
      this.deselect();
      _0x45515.activate();
    }
  }
  if (_0x1ea999 && this.index() !== _0x427144) {
    this.playCursorSound();
  }
};
Window_EquipSlot.prototype.equipSlotIndex = function () {
  return this.index();
};
VisuMZ.ItemsEquipsCore.Window_EquipItem_includes = Window_EquipItem.prototype.includes;
Window_EquipItem.prototype.includes = function (_0x9f1270) {
  if (_0x9f1270 === null && this.nonRemovableEtypes().includes(this.etypeId())) {
    return false;
  } else {
    $gameTemp._checkEquipRequirements = true;
    let _0x4ea32d = VisuMZ.ItemsEquipsCore.Window_EquipItem_includes.call(this, _0x9f1270);
    if (!_0x4ea32d && _0x9f1270 && DataManager.isArmor(_0x9f1270)) {
      const _0x453954 = _0x9f1270.atypeId || 0x0;
      if (this._actor && this._actor.isEquipAtypeOk(_0x453954)) {
        const _0x3f7119 = DataManager.getEtypeIDs(_0x9f1270);
        if (_0x3f7119.includes(this.etypeId())) {
          _0x4ea32d = true;
        }
      }
    }
    $gameTemp._checkEquipRequirements = undefined;
    return _0x4ea32d;
  }
};
VisuMZ.ItemsEquipsCore.Window_EquipItem_isEnabled = Window_EquipItem.prototype.isEnabled;
Window_EquipItem.prototype.isEnabled = function (_0x4dc22a) {
  if (_0x4dc22a && this._actor) {
    if (this.itemHasEquipLimit(_0x4dc22a)) {
      return false;
    }
    if (this.isSoleWeaponType(_0x4dc22a)) {
      return false;
    }
    if (this.isSoleArmorType(_0x4dc22a)) {
      return false;
    }
    if (!this._actor.canEquip(_0x4dc22a)) {
      return false;
    }
  }
  if (!_0x4dc22a) {
    return !this.nonRemovableEtypes().includes(this.etypeId());
  }
  return VisuMZ.ItemsEquipsCore.Window_EquipItem_isEnabled.call(this, _0x4dc22a);
};
Window_EquipItem.prototype.itemHasEquipLimit = function (_0x535968) {
  const _0x2e3405 = _0x535968.note;
  if (_0x2e3405.match(/<EQUIP COPY LIMIT:[ ](\d+)>/i)) {
    const _0xd265dd = Number(RegExp.$1) || 0x1;
    let _0xf44042 = 0x0;
    const _0x5b9807 = this._actor.equips();
    const _0x451de7 = SceneManager._scene._slotWindow.equipSlotIndex();
    _0x5b9807[_0x451de7] = null;
    for (const _0x26f06f of _0x5b9807) {
      if (!_0x26f06f) {
        continue;
      }
      if (DataManager.isWeapon(_0x535968) === DataManager.isWeapon(_0x26f06f)) {
        if (_0x535968.id === _0x26f06f.id) {
          _0xf44042 += 0x1;
        }
      }
    }
    return _0xf44042 >= _0xd265dd;
  } else {
    return false;
  }
};
Window_EquipItem.prototype.isSoleWeaponType = function (_0x29186d) {
  if (!DataManager.isWeapon(_0x29186d)) {
    return false;
  }
  const _0x415921 = /<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i;
  let _0x26c165 = 0x0;
  const _0x4f9ccd = this._actor.equips();
  const _0x11562c = SceneManager._scene._slotWindow.equipSlotIndex();
  _0x4f9ccd[_0x11562c] = null;
  for (const _0x277303 of _0x4f9ccd) {
    if (!_0x277303) {
      continue;
    }
    if (!DataManager.isWeapon(_0x277303)) {
      continue;
    }
    if (_0x29186d.wtypeId === _0x277303.wtypeId) {
      _0x26c165 += 0x1;
      if (_0x29186d.note.match(_0x415921)) {
        const _0x248fda = Number(RegExp.$1) || 0x1;
        if (_0x26c165 >= _0x248fda) {
          return true;
        }
      }
      if (_0x277303.note.match(_0x415921)) {
        const _0x22bcc3 = Number(RegExp.$1) || 0x1;
        if (_0x26c165 >= _0x22bcc3) {
          return true;
        }
      }
    }
  }
  return false;
};
Window_EquipItem.prototype.isSoleArmorType = function (_0x20f919) {
  if (!DataManager.isArmor(_0x20f919)) {
    return false;
  }
  const _0x8428c5 = /<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i;
  let _0x8ef369 = 0x0;
  const _0x54c76f = this._actor.equips();
  const _0x575588 = SceneManager._scene._slotWindow.equipSlotIndex();
  _0x54c76f[_0x575588] = null;
  for (const _0xd0e651 of _0x54c76f) {
    if (!_0xd0e651) {
      continue;
    }
    if (!DataManager.isArmor(_0xd0e651)) {
      continue;
    }
    if (_0x20f919.atypeId === _0xd0e651.atypeId) {
      _0x8ef369 += 0x1;
      if (_0x20f919.note.match(_0x8428c5)) {
        const _0x3a9d28 = Number(RegExp.$1) || 0x1;
        if (_0x8ef369 >= _0x3a9d28) {
          return true;
        }
      }
      if (_0xd0e651.note.match(_0x8428c5)) {
        const _0x1aaafc = Number(RegExp.$1) || 0x1;
        if (_0x8ef369 >= _0x1aaafc) {
          return true;
        }
      }
    }
  }
  return false;
};
Window_EquipItem.prototype.nonRemovableEtypes = function () {
  return VisuMZ.ItemsEquipsCore.Settings.EquipScene.NonRemoveETypes;
};
Window_EquipItem.prototype.drawItem = function (_0x499df4) {
  const _0x696571 = this.itemAt(_0x499df4);
  if (_0x696571) {
    Window_ItemList.prototype.drawItem.call(this, _0x499df4);
  } else {
    this.drawRemoveItem(_0x499df4);
  }
};
Window_EquipItem.prototype.drawRemoveItem = function (_0x3632ad) {
  this.changePaintOpacity(this.isEnabled(null));
  const _0x30d19c = VisuMZ.ItemsEquipsCore.Settings.EquipScene;
  const _0x16fcdd = this.itemLineRect(_0x3632ad);
  const _0x3c838d = _0x16fcdd.y + (this.lineHeight() - ImageManager.iconHeight) / 0x2;
  const _0x2c9fba = ImageManager.iconWidth + 0x4;
  const _0x3bc241 = Math.max(0x0, _0x16fcdd.width - _0x2c9fba);
  this.resetTextColor();
  this.drawIcon(_0x30d19c.RemoveEquipIcon, _0x16fcdd.x, _0x3c838d);
  this.drawText(_0x30d19c.RemoveEquipText, _0x16fcdd.x + _0x2c9fba, _0x16fcdd.y, _0x3bc241);
  this.changePaintOpacity(true);
};
Window_EquipItem.prototype.updateHelp = function () {
  Window_ItemList.prototype.updateHelp.call(this);
  if (this._actor && this._statusWindow && this._slotId >= 0x0) {
    const _0x1686c9 = JsonEx.makeDeepCopy(this._actor);
    _0x1686c9._tempActor = true;
    _0x1686c9.forceChangeEquip(this._slotId, this.item());
    this._statusWindow.setTempActor(_0x1686c9);
  }
};
VisuMZ.ItemsEquipsCore.Window_ShopCommand_initialize = Window_ShopCommand.prototype.initialize;
Window_ShopCommand.prototype.initialize = function (_0x5a3635) {
  VisuMZ.ItemsEquipsCore.Window_ShopCommand_initialize.call(this, _0x5a3635);
  this.createCommandNameWindow(_0x5a3635);
};
Window_ShopCommand.prototype.createCommandNameWindow = function (_0x61a71d) {
  const _0x1a1512 = new Rectangle(0x0, 0x0, _0x61a71d.width, _0x61a71d.height);
  this._commandNameWindow = new Window_Base(_0x1a1512);
  this._commandNameWindow.opacity = 0x0;
  this.addChild(this._commandNameWindow);
  this.updateCommandNameWindow();
};
Window_ShopCommand.prototype.callUpdateHelp = function () {
  Window_HorzCommand.prototype.callUpdateHelp.call(this);
  if (this._commandNameWindow) {
    this.updateCommandNameWindow();
  }
};
Window_ShopCommand.prototype.updateCommandNameWindow = function () {
  const _0x4954cd = this._commandNameWindow;
  _0x4954cd.contents.clear();
  const _0x496e58 = this.commandStyleCheck(this.index());
  if (_0x496e58 === 'icon') {
    const _0x1d4716 = this.itemLineRect(this.index());
    let _0x448cf1 = this.commandName(this.index());
    _0x448cf1 = _0x448cf1.replace(/\\I\[(\d+)\]/gi, '');
    _0x4954cd.resetFontSettings();
    this.commandNameWindowDrawBackground(_0x448cf1, _0x1d4716);
    this.commandNameWindowDrawText(_0x448cf1, _0x1d4716);
    this.commandNameWindowCenter(_0x448cf1, _0x1d4716);
  }
};
Window_ShopCommand.prototype.commandNameWindowDrawBackground = function (_0x4dd68b, _0x320cf6) {};
Window_ShopCommand.prototype.commandNameWindowDrawText = function (_0xba461, _0x574559) {
  const _0x4bb79c = this._commandNameWindow;
  _0x4bb79c.drawText(_0xba461, 0x0, _0x574559.y, _0x4bb79c.innerWidth, "center");
};
Window_ShopCommand.prototype.commandNameWindowCenter = function (_0x469cd6, _0xe073f7) {
  const _0x239b84 = this._commandNameWindow;
  const _0x2fca19 = $gameSystem.windowPadding();
  const _0x4f8c0a = _0xe073f7.x + Math.floor(_0xe073f7.width / 0x2) + _0x2fca19;
  _0x239b84.x = _0x239b84.width / -0x2 + _0x4f8c0a;
  _0x239b84.y = Math.floor(_0xe073f7.height / 0x2);
};
Window_ShopCommand.prototype.maxCols = function () {
  return this._list ? this._list.length : 0x3;
};
Window_ShopCommand.prototype.hideDisabledCommands = function () {
  return VisuMZ.ItemsEquipsCore.Settings.ShopScene.CmdHideDisabled;
};
Window_ShopCommand.prototype.makeCommandList = function () {
  this.addBuyCommand();
  this.addSellCommand();
  this.addCancelCommand();
};
Window_ShopCommand.prototype.refresh = function () {
  Window_HorzCommand.prototype.refresh.call(this);
  this.refreshCursor();
};
Window_ShopCommand.prototype.addBuyCommand = function () {
  const _0x33a088 = this.commandStyle();
  const _0x1c0739 = VisuMZ.ItemsEquipsCore.Settings.ShopScene.CmdIconBuy;
  const _0x52e192 = _0x33a088 === 'text' ? TextManager.buy : "\\I[%1]%2".format(_0x1c0739, TextManager.buy);
  const _0x56baa6 = this.isBuyCommandEnabled();
  if (this.hideDisabledCommands() && !_0x56baa6) {
    return;
  }
  this.addCommand(_0x52e192, "buy", _0x56baa6);
};
Window_ShopCommand.prototype.isBuyCommandEnabled = function () {
  return SceneManager._scene.constructor === Scene_Shop ? SceneManager._scene._goodsCount > 0x0 : true;
};
Window_ShopCommand.prototype.addSellCommand = function () {
  const _0x61e498 = this.commandStyle();
  const _0x1b75a5 = VisuMZ.ItemsEquipsCore.Settings.ShopScene.CmdIconSell;
  const _0x2139ca = _0x61e498 === "text" ? TextManager.sell : "\\I[%1]%2".format(_0x1b75a5, TextManager.sell);
  const _0x35a539 = this.isSellCommandEnabled();
  if (this.hideDisabledCommands() && !_0x35a539) {
    return;
  }
  this.addCommand(_0x2139ca, "sell", _0x35a539);
};
Window_ShopCommand.prototype.isSellCommandEnabled = function () {
  return !this._purchaseOnly;
};
Window_ShopCommand.prototype.addCancelCommand = function () {
  const _0x5effba = this.commandStyle();
  const _0x655afe = VisuMZ.ItemsEquipsCore.Settings.ShopScene.CmdIconCancel;
  const _0x3bac12 = VisuMZ.ItemsEquipsCore.Settings.ShopScene.CmdCancelRename;
  const _0x8e2a1a = _0x5effba === "text" ? _0x3bac12 : "\\I[%1]%2".format(_0x655afe, _0x3bac12);
  this.addCommand(_0x8e2a1a, "cancel");
};
Window_ShopCommand.prototype.itemTextAlign = function () {
  return VisuMZ.ItemsEquipsCore.Settings.ShopScene.CmdTextAlign;
};
Window_ShopCommand.prototype.drawItem = function (_0x12faf2) {
  const _0x12107f = this.commandStyleCheck(_0x12faf2);
  if (_0x12107f === "iconText") {
    this.drawItemStyleIconText(_0x12faf2);
  } else if (_0x12107f === "icon") {
    this.drawItemStyleIcon(_0x12faf2);
  } else {
    Window_HorzCommand.prototype.drawItem.call(this, _0x12faf2);
  }
};
Window_ShopCommand.prototype.commandStyle = function () {
  return VisuMZ.ItemsEquipsCore.Settings.ShopScene.CmdStyle;
};
Window_ShopCommand.prototype.commandStyleCheck = function (_0x392a77) {
  if (_0x392a77 < 0x0) {
    return "text";
  }
  const _0x491939 = this.commandStyle();
  if (_0x491939 !== 'auto') {
    return _0x491939;
  } else {
    if (this.maxItems() > 0x0) {
      const _0x4bd3a1 = this.commandName(_0x392a77);
      if (_0x4bd3a1.match(/\\I\[(\d+)\]/i)) {
        const _0x46c554 = this.itemLineRect(_0x392a77);
        const _0x4083ed = this.textSizeEx(_0x4bd3a1).width;
        return _0x4083ed <= _0x46c554.width ? "iconText" : "icon";
      }
    }
  }
  return "text";
};
Window_ShopCommand.prototype.drawItemStyleIconText = function (_0x233f99) {
  const _0x1a8aa6 = this.itemLineRect(_0x233f99);
  const _0x508617 = this.commandName(_0x233f99);
  const _0x5bedf4 = this.textSizeEx(_0x508617).width;
  this.changePaintOpacity(this.isCommandEnabled(_0x233f99));
  const _0x135f81 = this.itemTextAlign();
  if (_0x135f81 === "right") {
    this.drawTextEx(_0x508617, _0x1a8aa6.x + _0x1a8aa6.width - _0x5bedf4, _0x1a8aa6.y, _0x5bedf4);
  } else {
    if (_0x135f81 === 'center') {
      const _0x5654ee = _0x1a8aa6.x + Math.floor((_0x1a8aa6.width - _0x5bedf4) / 0x2);
      this.drawTextEx(_0x508617, _0x5654ee, _0x1a8aa6.y, _0x5bedf4);
    } else {
      this.drawTextEx(_0x508617, _0x1a8aa6.x, _0x1a8aa6.y, _0x5bedf4);
    }
  }
};
Window_ShopCommand.prototype.drawItemStyleIcon = function (_0x10c5bc) {
  this.commandName(_0x10c5bc).match(/\\I\[(\d+)\]/i);
  const _0x2ca4bf = Number(RegExp.$1) || 0x0;
  const _0x13f98a = this.itemLineRect(_0x10c5bc);
  const _0x42741e = _0x13f98a.x + Math.floor((_0x13f98a.width - ImageManager.iconWidth) / 0x2);
  const _0x27d283 = _0x13f98a.y + (_0x13f98a.height - ImageManager.iconHeight) / 0x2;
  this.drawIcon(_0x2ca4bf, _0x42741e, _0x27d283);
};
VisuMZ.ItemsEquipsCore.Window_ShopBuy_refresh = Window_ShopBuy.prototype.refresh;
Window_ShopBuy.prototype.refresh = function () {
  this.updateMoneyAmount();
  VisuMZ.ItemsEquipsCore.Window_ShopBuy_refresh.call(this);
};
Window_ShopBuy.prototype.updateMoneyAmount = function () {
  if (SceneManager._scene.constructor === Scene_Shop) {
    this._money = SceneManager._scene.money();
  }
};
VisuMZ.ItemsEquipsCore.Window_ShopBuy_price = Window_ShopBuy.prototype.price;
Window_ShopBuy.prototype.price = function (_0x4f879d) {
  if (!_0x4f879d) {
    return 0x0;
  }
  let _0x52b363 = VisuMZ.ItemsEquipsCore.Window_ShopBuy_price.call(this, _0x4f879d);
  return Math.max(0x0, this.modifiedBuyPriceItemsEquipsCore(_0x4f879d, _0x52b363));
};
Window_ShopBuy.prototype.modifiedBuyPriceItemsEquipsCore = function (_0x3ade66, _0x5755cd) {
  const _0x358064 = _0x3ade66.note || '';
  if (_0x358064.match(/<JS BUY PRICE>\s*([\s\S]*)\s*<\/JS BUY PRICE>/i)) {
    const _0x4192ee = String(RegExp.$1);
    window.price = _0x5755cd;
    window.item = _0x3ade66;
    try {
      eval(_0x4192ee);
    } catch (_0x3d77fa) {
      if ($gameTemp.isPlaytest()) {
        console.log(_0x3d77fa);
      }
    }
    _0x5755cd = window.price;
    window.price = undefined;
    window.item = undefined;
  }
  _0x5755cd = VisuMZ.ItemsEquipsCore.Settings.ShopScene.BuyPriceJS.call(this, _0x3ade66, _0x5755cd);
  if (isNaN(_0x5755cd)) {
    _0x5755cd = 0x0;
  }
  return Math.floor(_0x5755cd);
};
VisuMZ.ItemsEquipsCore.Window_ShopBuy_goodsToItem = Window_ShopBuy.prototype.goodsToItem;
Window_ShopBuy.prototype.goodsToItem = function (_0x3bc132) {
  const _0x8af3ef = VisuMZ.ItemsEquipsCore.Window_ShopBuy_goodsToItem.call(this, _0x3bc132);
  return _0x8af3ef && !this.meetsShopListingConditions(_0x8af3ef) ? null : _0x8af3ef;
};
VisuMZ.ItemsEquipsCore.ShopListingRegExp = {
  'ShowAllSwitches': /<SHOW SHOP (?:ALL |)SWITCH(?:|ES):[ ](.*)>/i,
  'ShowAnySwitches': /<SHOW SHOP ANY SWITCH(?:|ES):[ ](.*)>/i,
  'HideAllSwitches': /<HIDE SHOP (?:ALL |)SWITCH(?:|ES):[ ](.*)>/i,
  'HideAnySwitches': /<HIDE SHOP ANY SWITCH(?:|ES):[ ](.*)>/i,
  'BuyTurnSwitchOn': /<BUY TURN ON SWITCH(?:|ES):[ ](.*)>/i,
  'BuyTurnSwitchOff': /<BUY TURN OFF SWITCH(?:|ES):[ ](.*)>/i,
  'SellTurnSwitchOn': /<SELL TURN ON SWITCH(?:|ES):[ ](.*)>/i,
  'SellTurnSwitchOff': /<SELL TURN OFF SWITCH(?:|ES):[ ](.*)>/i
};
Window_ShopBuy.prototype.meetsShopListingConditions = function (_0x3b529a) {
  if (!_0x3b529a) {
    return false;
  }
  const _0x1e7bae = VisuMZ.ItemsEquipsCore.ShopListingRegExp;
  const _0x46138b = _0x3b529a ? _0x3b529a.note || '' : '';
  if (_0x46138b.match(_0x1e7bae.ShowAllSwitches)) {
    const _0x2cd047 = String(RegExp.$1).split(',').map(_0x41cb9c => Number(_0x41cb9c));
    if (_0x2cd047.some(_0x1e039b => !$gameSwitches.value(_0x1e039b))) {
      return false;
    }
  }
  if (_0x46138b.match(_0x1e7bae.ShowAnySwitches)) {
    const _0x4c69ab = String(RegExp.$1).split(',').map(_0x3ab145 => Number(_0x3ab145));
    if (_0x4c69ab.every(_0x32ef10 => !$gameSwitches.value(_0x32ef10))) {
      return false;
    }
  }
  if (_0x46138b.match(_0x1e7bae.HideAllSwitches)) {
    const _0x1d8ac5 = String(RegExp.$1).split(',').map(_0x2a8f24 => Number(_0x2a8f24));
    if (_0x1d8ac5.every(_0x3df30d => $gameSwitches.value(_0x3df30d))) {
      return false;
    }
  }
  if (_0x46138b.match(_0x1e7bae.HideAnySwitches)) {
    const _0x3fd445 = String(RegExp.$1).split(',').map(_0x4e2ebf => Number(_0x4e2ebf));
    if (_0x3fd445.some(_0x41619e => $gameSwitches.value(_0x41619e))) {
      return false;
    }
  }
  return true;
};
Window_ShopBuy.prototype.drawItem = function (_0x58f0c7) {
  this.resetFontSettings();
  const _0x3537ac = this.itemAt(_0x58f0c7);
  const _0x4e9388 = this.itemLineRect(_0x58f0c7);
  const _0x1b7122 = _0x4e9388.width;
  this.changePaintOpacity(this.isEnabled(_0x3537ac));
  this.drawItemName(_0x3537ac, _0x4e9388.x, _0x4e9388.y, _0x1b7122);
  this.drawItemCost(_0x3537ac, _0x4e9388);
  this.changePaintOpacity(true);
};
Window_ShopBuy.prototype.drawItemCost = function (_0x496af5, _0x1d35bc) {
  const _0x5d2a60 = this.price(_0x496af5);
  this.drawCurrencyValue(_0x5d2a60, TextManager.currencyUnit, _0x1d35bc.x, _0x1d35bc.y, _0x1d35bc.width);
};
Window_ShopSell.prototype.maxCols = function () {
  return SceneManager._scene.isUseItemsEquipsCoreUpdatedLayout() ? 0x1 : 0x2;
};
VisuMZ.ItemsEquipsCore.Window_ShopSell_isEnabled = Window_ShopSell.prototype.isEnabled;
Window_ShopSell.prototype.isEnabled = function (_0x258a6e) {
  if (!_0x258a6e) {
    return false;
  }
  const _0x361544 = _0x258a6e.note;
  if (_0x361544.match(/<CANNOT SELL>/i)) {
    return false;
  }
  if (_0x361544.match(/<CAN SELL>/i)) {
    return true;
  }
  if (_0x361544.match(/<CANNOT SELL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x2478f6 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x484de5 of _0x2478f6) {
      if (!$gameSwitches.value(_0x484de5)) {
        return false;
      }
    }
  }
  if (_0x361544.match(/<CANNOT SELL ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0xa719f = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x572c30 of _0xa719f) {
      if (!$gameSwitches.value(_0x572c30)) {
        return false;
      }
    }
  }
  if (_0x361544.match(/<CANNOT SELL ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x2dfad1 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x143523 of _0x2dfad1) {
      if ($gameSwitches.value(_0x143523)) {
        return false;
      }
    }
  }
  return VisuMZ.ItemsEquipsCore.Window_ShopSell_isEnabled.call(this, _0x258a6e);
};
Window_ShopStatus.EQUIP_DELAY_MS = VisuMZ.ItemsEquipsCore.Settings.StatusWindow.EquipDelayMS ?? 0xf0;
VisuMZ.ItemsEquipsCore.Window_ShopStatus_setItem = Window_ShopStatus.prototype.setItem;
Window_ShopStatus.prototype.setItem = function (_0x463818) {
  _0x463818 = DataManager.getProxyItem(_0x463818);
  if (DataManager.isWeapon(_0x463818) || DataManager.isArmor(_0x463818)) {
    this.setItemDelay(_0x463818);
  } else {
    VisuMZ.ItemsEquipsCore.Window_ShopStatus_setItem.call(this, _0x463818);
  }
};
Window_ShopStatus.prototype.setItemDelay = function (_0x42d9e6) {
  this._item = _0x42d9e6;
  const _0x36383c = Window_ShopStatus.EQUIP_DELAY_MS;
  setTimeout(this.refreshDelay.bind(this, _0x42d9e6), _0x36383c);
};
Window_ShopStatus.prototype.refreshDelay = function (_0x2f7cd8) {
  if (this._item === _0x2f7cd8) {
    this.refresh();
  }
};
Window_ShopStatus.prototype.isPageChangeRequested = function () {
  return false;
};
Window_ShopStatus.prototype.loadFaceImages = function () {
  Window_StatusBase.prototype.loadFaceImages.call(this);
  for (const _0x540203 of $gameParty.members()) {
    ImageManager.loadCharacter(_0x540203.characterName());
  }
};
Window_ShopStatus.prototype.translucentOpacity = function () {
  return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.Translucent;
};
Window_ShopStatus.prototype.refresh = function () {
  this.contents.clear();
  this.contentsBack.clear();
  if (this._item) {
    this.resetFontSettings();
    this.changePaintOpacity(true);
    this.prepareItemCustomData();
    if (this.isEquipItem()) {
      this.drawEquipData();
    } else {
      this.drawItemData();
    }
    this.drawCustomShopGraphic();
  }
};
Window_ShopStatus.prototype.drawPossession = function (_0x43daeb, _0x48929c) {
  if (!this.isEquipItem() && !DataManager.isItem(this._item)) {
    return;
  }
  const _0x5e45d4 = this.innerWidth - this.itemPadding() - _0x43daeb;
  const _0x18114c = this.textWidth('0000');
  this.changeTextColor(ColorManager.systemColor());
  this.drawText(TextManager.possession, _0x43daeb + this.itemPadding(), _0x48929c, _0x5e45d4 - _0x18114c);
  this.resetTextColor();
  this.drawItemNumber(this._item, _0x43daeb, _0x48929c, _0x5e45d4);
};
Window_ShopStatus.prototype.drawItemDarkRect = function (_0x4b26ed, _0x30838a, _0x15e677, _0x58c301, _0x223bc0) {
  if (VisuMZ.ItemsEquipsCore.Settings.StatusWindow.DrawBackRect === false) {
    return;
  }
  _0x223bc0 = Math.max(_0x223bc0 || 0x1, 0x1);
  while (_0x223bc0--) {
    _0x58c301 = _0x58c301 || this.lineHeight();
    this.contentsBack.paintOpacity = 0xa0;
    const _0x25627d = ColorManager.getItemsEquipsCoreBackColor1();
    this.contentsBack.fillRect(_0x4b26ed + 0x1, _0x30838a + 0x1, _0x15e677 - 0x2, _0x58c301 - 0x2, _0x25627d);
    this.contentsBack.paintOpacity = 0xff;
  }
};
ColorManager.getItemsEquipsCoreBackColor1 = function () {
  const _0xc440ad = VisuMZ.ItemsEquipsCore.Settings.StatusWindow;
  let _0x429f38 = _0xc440ad.BackRectColor !== undefined ? _0xc440ad.BackRectColor : 0x13;
  return ColorManager.getColor(_0x429f38);
};
Window_ShopStatus.prototype.drawEquipData = function () {
  this._tempActor = null;
  if (VisuMZ.ItemsEquipsCore.Settings.StatusWindow.DrawEquipData) {
    VisuMZ.ItemsEquipsCore.Settings.StatusWindow.DrawEquipData.call(this);
    return;
  }
  const _0x33722e = this.lineHeight();
  const _0x3f3add = this.gaugeLineHeight() + 0x8;
  let _0x5d187d = 0x0;
  let _0x547369 = this.innerWidth;
  let _0x49750a = this.innerHeight;
  let _0x189a25 = Math.floor(_0x547369 / 0x2);
  let _0x182778 = 0x0 + _0x547369 - _0x189a25;
  this.drawItemName(this._item, 0x0 + this.itemPadding(), _0x5d187d, _0x547369 - this.itemPadding() * 0x2);
  this.drawItemDarkRect(0x0, _0x5d187d, _0x547369);
  _0x5d187d += _0x33722e;
  if (this.drawItemEquipType(0x0, _0x5d187d, _0x189a25)) {
    _0x5d187d += 0x0;
  }
  if (this.drawItemQuantity(_0x182778, _0x5d187d, _0x189a25)) {
    _0x5d187d += _0x33722e;
  }
  const _0x285f8e = this.actorParams();
  const _0xbe6bfa = _0x5d187d;
  _0x5d187d = _0x49750a - _0x285f8e.length * _0x3f3add - 0x4;
  let _0x1a44a5 = 0x0;
  let _0x8ed8e3 = _0x5d187d;
  for (const _0x254e46 of _0x285f8e) {
    _0x1a44a5 = Math.max(this.drawParamName(_0x254e46, 4, _0x5d187d + 0x4, _0x547369), _0x1a44a5);
    _0x5d187d += _0x3f3add;
  }
  const _0x8ab442 = $gameParty.maxBattleMembers();
  const _0x29fa0d = Math.floor((_0x547369 - _0x1a44a5) / _0x8ab442);
  _0x1a44a5 = _0x547369 - _0x29fa0d * _0x8ab442;
  for (const _0x397cfd of $gameParty.battleMembers()) {
    const _0x184f34 = $gameParty.battleMembers().indexOf(_0x397cfd);
    const _0x1d4257 = 0x0 + _0x1a44a5 + _0x184f34 * _0x29fa0d;
    this.changePaintOpacity(_0x397cfd.canEquip(this._item));
    this.drawActorCharacter(_0x397cfd, _0x1d4257 + _0x29fa0d / 0x2, _0x8ed8e3);
    let _0x45d572 = _0x8ed8e3;
    for (const _0x100963 of _0x285f8e) {
      const _0x3a3420 = _0x45d572 - (_0x33722e - _0x3f3add) / 0x2;
      this.drawActorParamDifference(_0x397cfd, _0x100963, _0x1d4257, _0x3a3420, _0x29fa0d);
      _0x45d572 += _0x3f3add;
    }
  }
  this.drawItemDarkRect(0x0, _0xbe6bfa, _0x1a44a5, _0x8ed8e3 - _0xbe6bfa);
  for (let _0x51ebba = 0x0; _0x51ebba < _0x8ab442; _0x51ebba++) {
    const _0x5af4ff = 0x0 + _0x1a44a5 + _0x51ebba * _0x29fa0d;
    this.drawItemDarkRect(_0x5af4ff, _0xbe6bfa, _0x29fa0d, _0x8ed8e3 - _0xbe6bfa);
  }
  for (const _0x477111 of _0x285f8e) {
    this.drawItemDarkRect(0x0, _0x8ed8e3, _0x1a44a5, _0x3f3add);
    for (let _0x4c2973 = 0x0; _0x4c2973 < _0x8ab442; _0x4c2973++) {
      const _0x4d9c89 = 0x0 + _0x1a44a5 + _0x4c2973 * _0x29fa0d;
      this.drawItemDarkRect(_0x4d9c89, _0x8ed8e3, _0x29fa0d, _0x3f3add);
    }
    _0x8ed8e3 += _0x3f3add;
  }
};
Window_ShopStatus.prototype.drawItemEquipType = function (_0x83aa68, _0x2eb429, _0x3a5adb) {
  if (!this.isEquipItem()) {
    return false;
  }
  const _0x3fe5b6 = $dataSystem.equipTypes[this._item.etypeId];
  this.drawItemKeyData(_0x3fe5b6, _0x83aa68, _0x2eb429, _0x3a5adb, true);
  this.drawItemDarkRect(_0x83aa68, _0x2eb429, _0x3a5adb);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemQuantityText = function () {
  const _0x2929fa = VisuMZ.ItemsEquipsCore.Settings.ItemScene.ItemQuantityFmt;
  return _0x2929fa.format($gameParty.numItems(this._item));
};
Window_ShopStatus.prototype.actorParams = function () {
  let _0xd2da29 = [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7];
  if (Imported.VisuMZ_0_CoreEngine) {
    _0xd2da29 = VisuMZ.CoreEngine.Settings.Param.ExtDisplayedParams;
  }
  _0xd2da29 = _0xd2da29.map(_0x365c83 => typeof _0x365c83 === "number" ? _0x365c83 : _0x365c83.toUpperCase().trim());
  return _0xd2da29;
};
Window_ShopStatus.prototype.smallParamFontSize = function () {
  return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.ParamChangeFontSize;
};
Window_ShopStatus.prototype.drawParamName = function (_0x58324b, _0x49c90e, _0x28105f, _0x951a0b) {
  this.resetFontSettings();
  this.contents.fontSize = this.smallParamFontSize();
  let _0xfc043d = this.textWidth(TextManager.param(_0x58324b)) + 0x4 + _0x49c90e;
  if (Imported.VisuMZ_0_CoreEngine) {
    this.drawParamText(_0x49c90e, _0x28105f, _0x951a0b, _0x58324b, true);
    if (VisuMZ.CoreEngine.Settings.Param.DrawIcons) {
      _0xfc043d += ImageManager.iconWidth + 0x4;
    }
  } else {
    this.changeTextColor(ColorManager.systemColor());
    this.drawText(TextManager.param(_0x58324b), _0x49c90e, _0x28105f, _0x951a0b);
  }
  this.resetFontSettings();
  return _0xfc043d;
};
Window_ShopStatus.prototype.drawActorParamDifference = function (_0x55f288, _0x501f63, _0x102b38, _0x2024e7, _0xda29bc) {
  _0x102b38 += this.itemPadding();
  _0xda29bc -= this.itemPadding() * 0x2;
  const _0x410909 = VisuMZ.ItemsEquipsCore.Settings.StatusWindow;
  this.contents.fontSize = _0x410909.ParamChangeFontSize;
  this.changePaintOpacity(_0x55f288.canEquip(this._item));
  if (_0x55f288.isEquipped(this._item) && !_0x55f288.anyEmptyEquipSlotsOfSameEtype(this._item)) {
    const _0x4360db = _0x410909.AlreadyEquipMarker;
    this.drawText(_0x4360db, _0x102b38, _0x2024e7, _0xda29bc, "center");
  } else {
    if (_0x55f288.canEquip(this._item)) {
      const _0x376341 = this.createTempActorEquips(_0x55f288);
      let _0x4a263a = 0x0;
      let _0x3c2dc2 = 0x0;
      let _0x55ffda = 0x0;
      if (Imported.VisuMZ_0_CoreEngine) {
        _0x4a263a = _0x376341.paramValueByName(_0x501f63);
        _0x3c2dc2 = _0x4a263a - _0x55f288.paramValueByName(_0x501f63);
        this.changeTextColor(ColorManager.paramchangeTextColor(_0x3c2dc2));
        _0x55ffda = (_0x3c2dc2 >= 0x0 ? '+' : '') + VisuMZ.ConvertNumberToString(_0x3c2dc2, 0x0, _0x501f63);
      } else {
        _0x4a263a = _0x376341.param(_0x501f63);
        _0x3c2dc2 = _0x4a263a - _0x55f288.param(_0x501f63);
        this.changeTextColor(ColorManager.paramchangeTextColor(_0x3c2dc2));
        _0x55ffda = (_0x3c2dc2 >= 0x0 ? '+' : '') + _0x3c2dc2;
      }
      if (_0x55ffda === '+0') {
        _0x55ffda = _0x410909.NoChangeMarker;
      }
      this.drawText(_0x55ffda, _0x102b38, _0x2024e7, _0xda29bc, "center");
    } else {
      const _0x371a88 = _0x410909.CannotEquipMarker;
      this.drawText(_0x371a88, _0x102b38, _0x2024e7, _0xda29bc, 'center');
    }
  }
  this.resetFontSettings();
  this.changePaintOpacity(true);
};
Window_ShopStatus.prototype.createTempActorEquips = function (_0x3ee7bb) {
  if (this.needsNewTempActor(_0x3ee7bb)) {
    const _0x4d810c = JsonEx.makeDeepCopy(_0x3ee7bb);
    _0x4d810c._tempActor = true;
    const _0x419120 = _0x4d810c.getEmptyEquipSlotOfSameEtype(this._item);
    if (_0x419120 >= 0x0) {
      _0x4d810c.forceChangeEquip(_0x419120, this._item);
    }
    this._tempActor = _0x4d810c;
  }
  return this._tempActor;
};
Window_ShopStatus.prototype.needsNewTempActor = function (_0x30cc69) {
  if (!this._tempActor) {
    return true;
  }
  return this._tempActor.actorId() !== _0x30cc69.actorId();
};
Game_Actor.prototype.anyEmptyEquipSlotsOfSameEtype = function (_0x52e9f7) {
  if (!_0x52e9f7) {
    return false;
  }
  const _0x2d4996 = _0x52e9f7.etypeId;
  const _0x328700 = this.equipSlots();
  for (let _0x5a7476 = 0x0; _0x5a7476 < _0x328700.length; _0x5a7476++) {
    const _0x4ba921 = _0x328700[_0x5a7476];
    if (_0x4ba921 !== _0x2d4996) {
      continue;
    }
    if (!this.equips()[_0x5a7476]) {
      return true;
    }
  }
  return false;
};
Game_Actor.prototype.getEmptyEquipSlotOfSameEtype = function (_0x516546) {
  if (!_0x516546) {
    return -0x1;
  }
  const _0x3f13bd = _0x516546.etypeId;
  const _0xd64bc3 = this.equipSlots();
  let _0x397a75 = -0x1;
  for (let _0x4883b0 = 0x0; _0x4883b0 < _0xd64bc3.length; _0x4883b0++) {
    const _0x2cd100 = _0xd64bc3[_0x4883b0];
    if (_0x2cd100 !== _0x3f13bd) {
      continue;
    }
    if (!this.equips()[_0x4883b0]) {
      return _0x4883b0;
    }
    if (_0x397a75 < 0x0) {
      _0x397a75 = _0x4883b0;
    }
  }
  return _0x397a75;
};
Window_ShopStatus.prototype.drawItemData = function () {
  VisuMZ.ItemsEquipsCore.Settings.StatusWindow.DrawItemData.call(this);
};
Window_ShopStatus.prototype.drawItemName = function (_0x1f2cd1, _0x5df0d3, _0x4cb289, _0x27a5eb) {
  const _0x495688 = DataManager.isSkill(_0x1f2cd1, _0x5df0d3, _0x4cb289, _0x27a5eb) && Imported.VisuMZ_1_SkillsStatesCore;
  const _0x25c188 = _0x1f2cd1 ? _0x1f2cd1.name : '';
  if (_0x495688) {
    Window_SkillList.prototype.alterSkillName.call(this, _0x1f2cd1);
  }
  Window_Base.prototype.drawItemName.call(this, _0x1f2cd1, _0x5df0d3, _0x4cb289, _0x27a5eb);
  if (_0x495688) {
    _0x1f2cd1.name = _0x25c188;
  }
};
Window_ShopStatus.prototype.prepareItemCustomData = function () {
  this._customItemInfo = {};
  if (!this._item) {
    return;
  }
  const _0x2c2571 = this._item.note;
  if (_0x2c2571.match(/<STATUS INFO>\s*([\s\S]*)\s*<\/STATUS INFO>/i)) {
    const _0x4aa1f2 = String(RegExp.$1).split(/[\r\n]+/);
    for (const _0x483535 of _0x4aa1f2) {
      if (_0x483535.match(/(.*):[ ](.*)/i)) {
        const _0x27c2f3 = String(RegExp.$1).toUpperCase().trim();
        const _0x5a2333 = String(RegExp.$2).trim();
        this._customItemInfo[_0x27c2f3] = _0x5a2333;
      }
    }
  }
};
Window_ShopStatus.prototype.itemDataFontSize = function () {
  return Math.max(0x1, $gameSystem.mainFontSize() - 0x4);
};
Window_ShopStatus.prototype.resetFontSettings = function () {
  Window_StatusBase.prototype.resetFontSettings.call(this);
  this.contents.fontSize = this._resetFontSize || this.contents.fontSize;
  this.contents.textColor = this._resetFontColor || this.contents.textColor;
};
Window_ShopStatus.prototype.fontSizeRatio = function () {
  return this.contents.fontSize / $gameSystem.mainFontSize();
};
Window_ShopStatus.prototype.drawIcon = function (_0x4e6e73, _0x58c6fa, _0x3349e1) {
  const _0x3487fb = ImageManager.loadSystem("IconSet");
  const _0x4ee887 = ImageManager.iconWidth;
  const _0x384bd7 = ImageManager.iconHeight;
  const _0x103da1 = _0x4e6e73 % 0x10 * _0x4ee887;
  const _0xc92df9 = Math.floor(_0x4e6e73 / 0x10) * _0x384bd7;
  const _0x6f31a9 = Math.ceil(_0x4ee887 * this.fontSizeRatio());
  const _0x3de7d0 = Math.ceil(_0x384bd7 * this.fontSizeRatio());
  this.contents.blt(_0x3487fb, _0x103da1, _0xc92df9, _0x4ee887, _0x384bd7, _0x58c6fa, _0x3349e1, _0x6f31a9, _0x3de7d0);
};
Window_ShopStatus.prototype.processDrawIcon = function (_0x213b17, _0xb9945f) {
  if (_0xb9945f.drawing) {
    this.drawIcon(_0x213b17, _0xb9945f.x, _0xb9945f.y + 0x2);
  }
  _0xb9945f.x += Math.ceil(ImageManager.iconWidth * this.fontSizeRatio());
  if (this.fontSizeRatio() === 0x1) {
    _0xb9945f.x += 0x4;
  }
};
Window_ShopStatus.prototype.drawItemKeyData = function (_0x5d5288, _0x378d07, _0x35895, _0x3c0378, _0xbcc94d, _0x215a55) {
  _0x5d5288 = _0x5d5288 || '';
  _0x215a55 = _0x215a55 || 'left';
  this._resetFontSize = this.itemDataFontSize();
  this._resetFontColor = _0xbcc94d ? ColorManager.systemColor() : this.contents.textColor;
  _0x378d07 += this.itemPadding();
  _0x3c0378 -= this.itemPadding() * 0x2;
  const _0x1fffbc = this.textSizeEx(_0x5d5288);
  if (_0x215a55 === 'center') {
    _0x378d07 = _0x378d07 + Math.floor((_0x3c0378 - _0x1fffbc.width) / 0x2);
  } else if (_0x215a55 === 'right') {
    _0x378d07 = _0x378d07 + _0x3c0378 - _0x1fffbc.width;
  }
  _0x35895 += (this.lineHeight() - _0x1fffbc.height) / 0x2;
  this.drawTextEx(_0x5d5288, _0x378d07, _0x35895, _0x3c0378);
  this._resetFontSize = undefined;
  this._resetFontColor = undefined;
  this.resetFontSettings();
};
Window_ShopStatus.prototype.drawItemConsumable = function (_0x42c976, _0x3c5780, _0x2ae32a) {
  if (!DataManager.isItem(this._item)) {
    return false;
  }
  const _0x1ad194 = this.getItemConsumableLabel();
  this.drawItemKeyData(_0x1ad194, _0x42c976, _0x3c5780, _0x2ae32a, true);
  const _0x386fb4 = this.getItemConsumableText();
  this.drawItemKeyData(_0x386fb4, _0x42c976, _0x3c5780, _0x2ae32a, false, "right");
  this.drawItemDarkRect(_0x42c976, _0x3c5780, _0x2ae32a);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemConsumableLabel = function () {
  return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.LabelConsume;
};
Window_ShopStatus.prototype.getItemConsumableText = function () {
  if (this._customItemInfo.CONSUMABLE) {
    return this._customItemInfo.CONSUMABLE;
  }
  return this.canConsumeItem() ? VisuMZ.ItemsEquipsCore.Settings.StatusWindow.Consumable : VisuMZ.ItemsEquipsCore.Settings.StatusWindow.NotConsumable;
};
Window_ShopStatus.prototype.canConsumeItem = function () {
  return VisuMZ.CoreEngine && VisuMZ.CoreEngine.Settings.QoL.KeyItemProtect && DataManager.isKeyItem(this._item) ? false : this._item.consumable;
};
Window_ShopStatus.prototype.drawItemQuantity = function (_0x13f727, _0x3bf033, _0x4720cb) {
  if (!this.isEquipItem() && !DataManager.isItem(this._item)) {
    return false;
  }
  if (DataManager.isKeyItem(this._item) && !$dataSystem.optKeyItemsNumber) {
    const _0x113e83 = TextManager.keyItem;
    this.drawItemKeyData(_0x113e83, _0x13f727, _0x3bf033, _0x4720cb, true, 'center');
  } else {
    const _0x11b0a8 = TextManager.possession;
    this.drawItemKeyData(_0x11b0a8, _0x13f727, _0x3bf033, _0x4720cb, true);
    const _0x50e332 = this.getItemQuantityText();
    this.drawItemKeyData(_0x50e332, _0x13f727, _0x3bf033, _0x4720cb, false, "right");
  }
  this.drawItemDarkRect(_0x13f727, _0x3bf033, _0x4720cb);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemQuantityText = function () {
  if (this._customItemInfo.QUANTITY) {
    return this._customItemInfo.QUANTITY;
  }
  const _0x414d45 = VisuMZ.ItemsEquipsCore.Settings.ItemScene.ItemQuantityFmt;
  return _0x414d45.format($gameParty.numItems(this._item));
};
Window_ShopStatus.prototype.drawItemOccasion = function (_0x4e4585, _0x10a6e0, _0xacb7eb) {
  const _0x5dfaef = this.getItemOccasionText();
  this.drawItemKeyData(_0x5dfaef, _0x4e4585, _0x10a6e0, _0xacb7eb, false, "center");
  this.drawItemDarkRect(_0x4e4585, _0x10a6e0, _0xacb7eb);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemOccasionText = function () {
  if (this._customItemInfo.OCCASION) {
    return this._customItemInfo.OCCASION;
  }
  const _0x1571c7 = VisuMZ.ItemsEquipsCore.Settings.StatusWindow;
  const _0x3dd6c6 = "Occasion%1".format(this._item.occasion);
  return _0x1571c7[_0x3dd6c6];
};
Window_ShopStatus.prototype.drawItemScope = function (_0x51dc6f, _0x16023c, _0x5900cf) {
  const _0x30bd5e = this.getItemScopeText();
  this.drawItemKeyData(_0x30bd5e, _0x51dc6f, _0x16023c, _0x5900cf, false, "center");
  this.drawItemDarkRect(_0x51dc6f, _0x16023c, _0x5900cf);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemScopeText = function () {
  if (this._customItemInfo.SCOPE) {
    return this._customItemInfo.SCOPE;
  }
  const _0x510649 = VisuMZ.ItemsEquipsCore.Settings.StatusWindow;
  if (Imported.VisuMZ_1_BattleCore) {
    const _0x281646 = this._item.note;
    if (_0x281646.match(/<TARGET:[ ](.*)>/i)) {
      const _0x5c4ce7 = String(RegExp.$1);
      if (_0x5c4ce7.match(/(\d+) RANDOM ANY/i)) {
        return _0x510649.ScopeRandomAny.format(Number(RegExp.$1));
      } else {
        if (_0x5c4ce7.match(/(\d+) RANDOM (?:ENEMY|ENEMIES|FOE|FOES)/i)) {
          return _0x510649.ScopeRandomEnemies.format(Number(RegExp.$1));
        } else {
          if (_0x5c4ce7.match(/(\d+) RANDOM (?:ALLY|ALLIES|FRIEND|FRIENDS)/i)) {
            return _0x510649.ScopeRandomAllies.format(Number(RegExp.$1));
          } else {
            if (_0x5c4ce7.match(/ALL (?:ALLY|ALLIES|FRIEND|FRIENDS) (?:BUT|EXCEPT) (?:USER|SELF)/i)) {
              return _0x510649.ScopeAlliesButUser;
            } else {
              if (_0x5c4ce7.match(/ALLY OR ENEMY/i)) {
                return _0x510649.ScopeAllyOrEnemy || _0x510649.Scope7;
              } else {
                if (_0x5c4ce7.match(/ENEMY OR ALLY/i)) {
                  return _0x510649.ScopeEnemyOrAlly || _0x510649.Scope1;
                }
              }
            }
          }
        }
      }
    }
  }
  const _0x59349a = "Scope%1".format(this._item.scope);
  return _0x510649[_0x59349a];
};
Window_ShopStatus.prototype.drawItemSpeed = function (_0x4a33ee, _0x2e35cf, _0x43fc61) {
  const _0x29089f = this.getItemSpeedLabel();
  this.drawItemKeyData(_0x29089f, _0x4a33ee, _0x2e35cf, _0x43fc61, true);
  const _0x21fe36 = this.getItemSpeedText();
  this.drawItemKeyData(_0x21fe36, _0x4a33ee, _0x2e35cf, _0x43fc61, false, "right");
  this.drawItemDarkRect(_0x4a33ee, _0x2e35cf, _0x43fc61);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemSpeedLabel = function () {
  return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.LabelSpeed;
};
Window_ShopStatus.prototype.getItemSpeedText = function () {
  if (this._customItemInfo.SPEED) {
    return this._customItemInfo.SPEED;
  }
  const _0x1fb2be = this._item.speed;
  if (_0x1fb2be >= 0x7d0) {
    return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.Speed2000;
  } else {
    if (_0x1fb2be >= 0x3e8) {
      return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.Speed1000;
    } else {
      if (_0x1fb2be > 0x0) {
        return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.Speed1;
      } else {
        if (_0x1fb2be === 0x0) {
          return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.Speed0;
        } else {
          if (_0x1fb2be > -0x3e8) {
            return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.SpeedNeg999;
          } else {
            if (_0x1fb2be > -0x7d0) {
              return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.SpeedNeg1999;
            } else {
              return _0x1fb2be <= -0x7d0 ? VisuMZ.ItemsEquipsCore.Settings.StatusWindow.SpeedNeg2000 : '?????';
            }
          }
        }
      }
    }
  }
};
Window_ShopStatus.prototype.drawItemSuccessRate = function (_0xed145e, _0x3b2bfb, _0x3a3335) {
  const _0x4b500c = this.getItemSuccessRateLabel();
  this.drawItemKeyData(_0x4b500c, _0xed145e, _0x3b2bfb, _0x3a3335, true);
  const _0x26d63c = this.getItemSuccessRateText();
  this.drawItemKeyData(_0x26d63c, _0xed145e, _0x3b2bfb, _0x3a3335, false, "right");
  this.drawItemDarkRect(_0xed145e, _0x3b2bfb, _0x3a3335);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemSuccessRateLabel = function () {
  return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.LabelSuccessRate;
};
Window_ShopStatus.prototype.getItemSuccessRateText = function () {
  if (this._customItemInfo["SUCCESS RATE"]) {
    return this._customItemInfo["SUCCESS RATE"];
  }
  if (Imported.VisuMZ_1_BattleCore) {
    const _0x13e81c = this._item.note;
    if (_0x13e81c.match(/<ALWAYS HIT>/i)) {
      return "100%";
    } else {
      if (_0x13e81c.match(/<ALWAYS HIT RATE: (\d+)([%％])>/i)) {
        return "%1%".format(Number(RegExp.$1));
      }
    }
  }
  return "%1%".format(this._item.successRate);
};
Window_ShopStatus.prototype.drawItemRepeats = function (_0x23f57f, _0x1095ad, _0x4b21cd) {
  const _0x2ba702 = this.getItemRepeatsLabel();
  this.drawItemKeyData(_0x2ba702, _0x23f57f, _0x1095ad, _0x4b21cd, true);
  const _0x5446d9 = this.getItemRepeatsText();
  this.drawItemKeyData(_0x5446d9, _0x23f57f, _0x1095ad, _0x4b21cd, false, "right");
  this.drawItemDarkRect(_0x23f57f, _0x1095ad, _0x4b21cd);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemRepeatsLabel = function () {
  return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.LabelRepeats;
};
Window_ShopStatus.prototype.getItemRepeatsText = function () {
  if (this._customItemInfo.REPEAT) {
    return this._customItemInfo.REPEAT;
  }
  return "×%1".format(this._item.repeats);
};
Window_ShopStatus.prototype.drawItemHitType = function (_0x2efa94, _0x3457b2, _0x39fc29) {
  const _0x18bf80 = this.getItemHitTypeLabel();
  this.drawItemKeyData(_0x18bf80, _0x2efa94, _0x3457b2, _0x39fc29, true);
  const _0x1ef5b5 = this.getItemHitTypeText();
  this.drawItemKeyData(_0x1ef5b5, _0x2efa94, _0x3457b2, _0x39fc29, false, "right");
  this.drawItemDarkRect(_0x2efa94, _0x3457b2, _0x39fc29);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemHitTypeLabel = function () {
  return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.LabelHitType;
};
Window_ShopStatus.prototype.getItemHitTypeText = function () {
  if (this._customItemInfo["HIT TYPE"]) {
    return this._customItemInfo["HIT TYPE"];
  }
  const _0x5c9189 = VisuMZ.ItemsEquipsCore.Settings.StatusWindow;
  const _0x99cfcd = 'HitType%1'.format(this._item.hitType);
  return _0x5c9189[_0x99cfcd];
};
Window_ShopStatus.prototype.drawItemDamage = function (_0x40e5c9, _0x36de9b, _0xf4d16c) {
  if (this._item.damage.type <= 0x0) {
    return _0x36de9b;
  }
  if (this.drawItemDamageElement(_0x40e5c9, _0x36de9b, _0xf4d16c)) {
    _0x36de9b += this.lineHeight();
  }
  if (this.drawItemDamageAmount(_0x40e5c9, _0x36de9b, _0xf4d16c)) {
    _0x36de9b += this.lineHeight();
  }
  this.resetFontSettings();
  return _0x36de9b;
};
Window_ShopStatus.prototype.drawItemDamageElement = function (_0x16d96e, _0x308ed8, _0x5d7438) {
  const _0x5d35d8 = this.getItemDamageElementLabel();
  this.drawItemKeyData(_0x5d35d8, _0x16d96e, _0x308ed8, _0x5d7438, true);
  const _0x3bfe1f = this.getItemDamageElementText();
  this.drawItemKeyData(_0x3bfe1f, _0x16d96e, _0x308ed8, _0x5d7438, false, "right");
  this.drawItemDarkRect(_0x16d96e, _0x308ed8, _0x5d7438);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemDamageElementLabel = function () {
  return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.LabelElement;
};
Window_ShopStatus.prototype.getItemDamageElementText = function () {
  if (this._customItemInfo.ELEMENT) {
    return this._customItemInfo.ELEMENT;
  }
  if (this._item.damage.elementId <= -0x1) {
    return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.ElementWeapon;
  } else {
    return this._item.damage.elementId === 0x0 ? VisuMZ.ItemsEquipsCore.Settings.StatusWindow.ElementNone : $dataSystem.elements[this._item.damage.elementId];
  }
};
Window_ShopStatus.prototype.drawItemDamageAmount = function (_0x4164a9, _0x3f7105, _0xd298e5) {
  const _0x23c70c = this.getItemDamageAmountLabel();
  this.drawItemKeyData(_0x23c70c, _0x4164a9, _0x3f7105, _0xd298e5, true);
  this.setupItemDamageTempActors();
  const _0x4f0792 = this.getItemDamageAmountText();
  const _0x202e63 = ColorManager.damageColor([0x0, 0x0, 0x2, 0x1, 0x3, 0x1, 0x3][this._item.damage.type]);
  this.changeTextColor(_0x202e63);
  this.drawItemKeyData(_0x4f0792, _0x4164a9, _0x3f7105, _0xd298e5, false, "right");
  this.drawItemDarkRect(_0x4164a9, _0x3f7105, _0xd298e5);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemDamageAmountLabel = function () {
  return Imported.VisuMZ_1_BattleCore && DataManager.getDamageStyle(this._item) !== "MANUAL" ? this.getItemDamageAmountLabelBattleCore() : this.getItemDamageAmountLabelOriginal();
};
Window_ShopStatus.prototype.getItemDamageAmountLabelOriginal = function () {
  const _0x4ca7ac = VisuMZ.ItemsEquipsCore.Settings.StatusWindow;
  const _0x36419f = "DamageType%1".format(this._item.damage.type);
  const _0x32b7fd = [null, TextManager.hp, TextManager.mp, TextManager.hp, TextManager.mp, TextManager.hp, TextManager.mp][this._item.damage.type];
  return _0x4ca7ac[_0x36419f].format(_0x32b7fd);
};
Window_ShopStatus.prototype.setupItemDamageTempActors = function () {
  const _0x1359da = $gameActors.actor(0x1);
  this._tempActorA = JsonEx.makeDeepCopy(_0x1359da);
  this._tempActorB = JsonEx.makeDeepCopy(_0x1359da);
};
Window_ShopStatus.prototype.getItemDamageAmountText = function () {
  if (this._customItemInfo["DAMAGE MULTIPLIER"]) {
    return this._customItemInfo["DAMAGE MULTIPLIER"];
  }
  return Imported.VisuMZ_1_BattleCore && DataManager.getDamageStyle(this._item) !== "MANUAL" ? this.getItemDamageAmountTextBattleCore() : this.getItemDamageAmountTextOriginal();
};
Window_ShopStatus.prototype.getItemDamageAmountTextOriginal = function () {
  window.a = this._tempActorA;
  window.b = this._tempActorB;
  this._tempActorA.setShopStatusWindowMode(true);
  this._tempActorB.setShopStatusWindowMode([0x3, 0x4].includes(this._item.damage.type));
  let _0x4e1a8c = this._item.damage.formula;
  try {
    const _0x2d0492 = Math.max(eval(_0x4e1a8c), 0x0) / window.a.atk;
    this.revertGlobalNamespaceVariables();
    return isNaN(_0x2d0492) ? "?????" : '%1%'.format(Math.round(_0x2d0492 * 0x64));
  } catch (_0x5e3f66) {
    if ($gameTemp.isPlaytest()) {
      console.log("Damage Formula Error for %1".format(this._item.name));
      console.log(_0x5e3f66);
    }
    this.revertGlobalNamespaceVariables();
    return "?????";
  }
};
Window_ShopStatus.prototype.revertGlobalNamespaceVariables = function () {
  window.a = undefined;
  window.b = undefined;
};
Window_ShopStatus.prototype.drawItemEffects = function (_0x4392bf, _0x16a53c, _0x1989c5) {
  if (!this.makeItemData()) {
    return _0x16a53c;
  }
  if (this.drawItemEffectsHpRecovery(_0x4392bf, _0x16a53c, _0x1989c5)) {
    _0x16a53c += this.lineHeight();
  }
  if (this.drawItemEffectsMpRecovery(_0x4392bf, _0x16a53c, _0x1989c5)) {
    _0x16a53c += this.lineHeight();
  }
  if (this.drawItemEffectsTpRecovery(_0x4392bf, _0x16a53c, _0x1989c5)) {
    _0x16a53c += this.lineHeight();
  }
  if (this.drawItemEffectsHpDamage(_0x4392bf, _0x16a53c, _0x1989c5)) {
    _0x16a53c += this.lineHeight();
  }
  if (this.drawItemEffectsMpDamage(_0x4392bf, _0x16a53c, _0x1989c5)) {
    _0x16a53c += this.lineHeight();
  }
  if (this.drawItemEffectsTpDamage(_0x4392bf, _0x16a53c, _0x1989c5)) {
    _0x16a53c += this.lineHeight();
  }
  if (this.drawItemEffectsSelfTpGain(_0x4392bf, _0x16a53c, _0x1989c5)) {
    _0x16a53c += this.lineHeight();
  }
  if (this.drawItemEffectsAddedStatesBuffs(_0x4392bf, _0x16a53c, _0x1989c5)) {
    _0x16a53c += this.lineHeight();
  }
  if (this.drawItemEffectsRemovedStatesBuffs(_0x4392bf, _0x16a53c, _0x1989c5)) {
    _0x16a53c += this.lineHeight();
  }
  this.resetFontSettings();
  return _0x16a53c;
};
Window_ShopStatus.prototype.getItemEffects = function () {
  return this._item.effects;
};
Window_ShopStatus.prototype.makeItemData = function () {
  let _0x5358b0 = false;
  this._itemData = {
    'rateHP': 0x0,
    'flatHP': 0x0,
    'rateMP': 0x0,
    'flatMP': 0x0,
    'gainTP': 0x0,
    'selfTP': 0x0,
    'addState': [],
    'removeState': [],
    'changeBuff': [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    'removeBuff': [],
    'removeDebuff': [],
    'addStateBuffChanges': false,
    'removeStateBuffChanges': false
  };
  const _0x52b4c9 = this.getItemEffects();
  for (const _0x36d412 of _0x52b4c9) {
    switch (_0x36d412.code) {
      case Game_Action.EFFECT_RECOVER_HP:
        this._itemData.rateHP += _0x36d412.value1;
        this._itemData.flatHP += _0x36d412.value2;
        _0x5358b0 = true;
        break;
      case Game_Action.EFFECT_RECOVER_MP:
        this._itemData.rateMP += _0x36d412.value1;
        this._itemData.flatMP += _0x36d412.value2;
        _0x5358b0 = true;
        break;
      case Game_Action.EFFECT_GAIN_TP:
        this._itemData.gainTP += _0x36d412.value1;
        _0x5358b0 = true;
        break;
      case Game_Action.EFFECT_ADD_STATE:
        this._itemData.addState.push(_0x36d412.dataId);
        _0x5358b0 = true;
        break;
      case Game_Action.EFFECT_REMOVE_STATE:
        this._itemData.removeState.push(_0x36d412.dataId);
        this._itemData.removeStateBuffChanges = true;
        _0x5358b0 = true;
        break;
      case Game_Action.EFFECT_ADD_BUFF:
        this._itemData.changeBuff[_0x36d412.dataId] += 0x1;
        _0x5358b0 = true;
        break;
      case Game_Action.EFFECT_ADD_DEBUFF:
        this._itemData.changeBuff[_0x36d412.dataId] -= 0x1;
        _0x5358b0 = true;
        break;
      case Game_Action.EFFECT_REMOVE_BUFF:
        this._itemData.removeBuff.push(_0x36d412.dataId);
        this._itemData.removeStateBuffChanges = true;
        _0x5358b0 = true;
        break;
      case Game_Action.EFFECT_REMOVE_DEBUFF:
        this._itemData.removeDebuff.push(_0x36d412.dataId);
        this._itemData.removeStateBuffChanges = true;
        _0x5358b0 = true;
        break;
    }
  }
  if (this._itemData.addState.length > 0x0) {
    this._itemData.addStateBuffChanges = true;
  }
  for (let _0x1d16b0 = 0x0; _0x1d16b0 < this._itemData.changeBuff.length; _0x1d16b0++) {
    if (this._itemData.changeBuff[_0x1d16b0] !== 0x0) {
      this._itemData.addStateBuffChanges = true;
    }
  }
  if (this._item.tpGain !== 0x0) {
    this._itemData.selfTP = this._item.tpGain;
    _0x5358b0 = true;
  }
  const _0x5e7031 = ["HP RECOVERY", "MP RECOVERY", "TP RECOVERY", "HP DAMAGE", "MP DAMAGE", "TP DAMAGE", "USER TP GAIN", "ADDED EFFECTS", "REMOVED EFFECTS"];
  for (const _0x20b10a of _0x5e7031) {
    if (this._customItemInfo[_0x20b10a]) {
      _0x5358b0 = true;
      break;
    }
  }
  return _0x5358b0;
};
Window_ShopStatus.prototype.drawItemEffectsHpRecovery = function (_0xe7300d, _0x4a6caf, _0x464832) {
  if (this._itemData.rateHP <= 0x0 && this._itemData.flatHP <= 0x0 && !this._customItemInfo["HP RECOVERY"]) {
    return false;
  }
  const _0x5867a2 = this.getItemEffectsHpRecoveryLabel();
  this.drawItemKeyData(_0x5867a2, _0xe7300d, _0x4a6caf, _0x464832, true);
  const _0x491bd8 = this.getItemEffectsHpRecoveryText();
  this.changeTextColor(ColorManager.damageColor(0x1));
  this.drawItemKeyData(_0x491bd8, _0xe7300d, _0x4a6caf, _0x464832, false, "right");
  this.drawItemDarkRect(_0xe7300d, _0x4a6caf, _0x464832);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemEffectsHpRecoveryLabel = function () {
  const _0x43b3da = VisuMZ.ItemsEquipsCore.Settings.StatusWindow.LabelRecoverHP;
  return _0x43b3da.format(TextManager.hp);
};
Window_ShopStatus.prototype.getItemEffectsHpRecoveryText = function () {
  if (this._customItemInfo["HP RECOVERY"]) {
    return this._customItemInfo["HP RECOVERY"];
  }
  let _0x103f99 = '';
  if (this._itemData.rateHP > 0x0) {
    _0x103f99 += "+%1%".format(Math.floor(this._itemData.rateHP * 0x64));
  }
  if (this._itemData.rateHP > 0x0 && this._itemData.flatHP > 0x0) {
    _0x103f99 += " ";
  }
  if (this._itemData.flatHP > 0x0) {
    _0x103f99 += "+%1".format(this._itemData.flatHP);
  }
  return _0x103f99;
};
Window_ShopStatus.prototype.drawItemEffectsMpRecovery = function (_0x1824f3, _0x4e1020, _0x3f680d) {
  if (this._itemData.rateMP <= 0x0 && this._itemData.flatMP <= 0x0 && !this._customItemInfo["MP RECOVERY"]) {
    return false;
  }
  const _0x49d5f0 = this.getItemEffectsMpRecoveryLabel();
  this.drawItemKeyData(_0x49d5f0, _0x1824f3, _0x4e1020, _0x3f680d, true);
  const _0x4a7e45 = this.getItemEffectsMpRecoveryText();
  this.changeTextColor(ColorManager.damageColor(0x3));
  this.drawItemKeyData(_0x4a7e45, _0x1824f3, _0x4e1020, _0x3f680d, false, "right");
  this.drawItemDarkRect(_0x1824f3, _0x4e1020, _0x3f680d);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemEffectsMpRecoveryLabel = function () {
  const _0x58589c = VisuMZ.ItemsEquipsCore.Settings.StatusWindow.LabelRecoverMP;
  return _0x58589c.format(TextManager.mp);
};
Window_ShopStatus.prototype.getItemEffectsMpRecoveryText = function () {
  if (this._customItemInfo["MP RECOVERY"]) {
    return this._customItemInfo["MP RECOVERY"];
  }
  let _0x3ec432 = '';
  if (this._itemData.rateMP > 0x0) {
    _0x3ec432 += "+%1%".format(Math.floor(this._itemData.rateMP * 0x64));
  }
  if (this._itemData.rateMP > 0x0 && this._itemData.flatMP > 0x0) {
    _0x3ec432 += " ";
  }
  if (this._itemData.flatMP > 0x0) {
    _0x3ec432 += "+%1".format(this._itemData.flatMP);
  }
  return _0x3ec432;
};
Window_ShopStatus.prototype.drawItemEffectsTpRecovery = function (_0x14dfe0, _0x4780f4, _0xf18a1e) {
  if (this._itemData.gainTP <= 0x0 && !this._customItemInfo["TP RECOVERY"]) {
    return false;
  }
  const _0x281ca2 = this.getItemEffectsTpRecoveryLabel();
  this.drawItemKeyData(_0x281ca2, _0x14dfe0, _0x4780f4, _0xf18a1e, true);
  const _0x163d1a = this.getItemEffectsTpRecoveryText();
  this.changeTextColor(ColorManager.powerUpColor());
  this.drawItemKeyData(_0x163d1a, _0x14dfe0, _0x4780f4, _0xf18a1e, false, "right");
  this.drawItemDarkRect(_0x14dfe0, _0x4780f4, _0xf18a1e);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemEffectsTpRecoveryLabel = function () {
  const _0x520cb1 = VisuMZ.ItemsEquipsCore.Settings.StatusWindow.LabelRecoverTP;
  return _0x520cb1.format(TextManager.tp);
};
Window_ShopStatus.prototype.getItemEffectsTpRecoveryText = function () {
  if (this._customItemInfo["TP RECOVERY"]) {
    return this._customItemInfo["TP RECOVERY"];
  }
  let _0x32a5b6 = '';
  _0x32a5b6 += "+%1".format(this._itemData.gainTP);
  return _0x32a5b6;
};
Window_ShopStatus.prototype.drawItemEffectsSelfTpGain = function (_0x33e44e, _0x2114b9, _0x2c3c96) {
  if (this._itemData.selfTP === 0x0 && !this._customItemInfo["USER TP GAIN"]) {
    return false;
  }
  const _0x439a44 = this.getItemEffectsSelfTpGainLabel();
  this.drawItemKeyData(_0x439a44, _0x33e44e, _0x2114b9, _0x2c3c96, true);
  const _0x2cb03c = this.getItemEffectsSelfTpGainText();
  if (this._itemData.selfTP > 0x0) {
    this.changeTextColor(ColorManager.powerUpColor());
  } else {
    this.changeTextColor(ColorManager.powerDownColor());
  }
  this.drawItemKeyData(_0x2cb03c, _0x33e44e, _0x2114b9, _0x2c3c96, false, "right");
  this.drawItemDarkRect(_0x33e44e, _0x2114b9, _0x2c3c96);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemEffectsSelfTpGainLabel = function () {
  const _0x423a65 = VisuMZ.ItemsEquipsCore.Settings.StatusWindow.LabelSelfGainTP;
  return _0x423a65.format(TextManager.tp);
};
Window_ShopStatus.prototype.getItemEffectsSelfTpGainText = function () {
  if (this._customItemInfo["USER TP GAIN"]) {
    return this._customItemInfo["USER TP GAIN"];
  }
  let _0x392692 = '';
  if (this._itemData.selfTP > 0x0) {
    _0x392692 += "+%1".format(this._itemData.selfTP);
  } else {
    _0x392692 += '%1'.format(this._itemData.selfTP);
  }
  return _0x392692;
};
Window_ShopStatus.prototype.drawItemEffectsHpDamage = function (_0x25fe68, _0x32cc59, _0xdf6e1c) {
  if (this._itemData.rateHP >= 0x0 && this._itemData.flatHP >= 0x0 && !this._customItemInfo["HP DAMAGE"]) {
    return false;
  }
  const _0x134593 = this.getItemEffectsHpDamageLabel();
  this.drawItemKeyData(_0x134593, _0x25fe68, _0x32cc59, _0xdf6e1c, true);
  const _0x372731 = this.getItemEffectsHpDamageText();
  this.changeTextColor(ColorManager.damageColor(0x0));
  this.drawItemKeyData(_0x372731, _0x25fe68, _0x32cc59, _0xdf6e1c, false, "right");
  this.drawItemDarkRect(_0x25fe68, _0x32cc59, _0xdf6e1c);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemEffectsHpDamageLabel = function () {
  const _0x2a293e = VisuMZ.ItemsEquipsCore.Settings.StatusWindow.LabelDamageHP;
  return _0x2a293e.format(TextManager.hp);
};
Window_ShopStatus.prototype.getItemEffectsHpDamageText = function () {
  if (this._customItemInfo["HP DAMAGE"]) {
    return this._customItemInfo["HP DAMAGE"];
  }
  let _0x5736d4 = '';
  if (this._itemData.rateHP < 0x0) {
    _0x5736d4 += "%1%".format(Math.floor(this._itemData.rateHP * 0x64));
  }
  if (this._itemData.rateHP < 0x0 && this._itemData.flatHP < 0x0) {
    _0x5736d4 += " ";
  }
  if (this._itemData.flatHP < 0x0) {
    _0x5736d4 += '%1'.format(this._itemData.flatHP);
  }
  return _0x5736d4;
};
Window_ShopStatus.prototype.drawItemEffectsMpDamage = function (_0x29ee49, _0x57b947, _0x4a7923) {
  if (this._itemData.rateMP >= 0x0 && this._itemData.flatMP >= 0x0 && !this._customItemInfo["MP DAMAGE"]) {
    return false;
  }
  const _0x3c185f = this.getItemEffectsMpDamageLabel();
  this.drawItemKeyData(_0x3c185f, _0x29ee49, _0x57b947, _0x4a7923, true);
  const _0x50b749 = this.getItemEffectsMpDamageText();
  this.changeTextColor(ColorManager.damageColor(0x2));
  this.drawItemKeyData(_0x50b749, _0x29ee49, _0x57b947, _0x4a7923, false, "right");
  this.drawItemDarkRect(_0x29ee49, _0x57b947, _0x4a7923);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemEffectsMpDamageLabel = function () {
  const _0x335c6b = VisuMZ.ItemsEquipsCore.Settings.StatusWindow.LabelDamageMP;
  return _0x335c6b.format(TextManager.mp);
};
Window_ShopStatus.prototype.getItemEffectsMpDamageText = function () {
  if (this._customItemInfo["MP DAMAGE"]) {
    return this._customItemInfo["MP DAMAGE"];
  }
  let _0x244789 = '';
  if (this._itemData.rateMP < 0x0) {
    _0x244789 += "%1%".format(Math.floor(this._itemData.rateMP * 0x64));
  }
  if (this._itemData.rateMP < 0x0 && this._itemData.flatMP < 0x0) {
    _0x244789 += " ";
  }
  if (this._itemData.flatMP < 0x0) {
    _0x244789 += '%1'.format(this._itemData.flatMP);
  }
  return _0x244789;
};
Window_ShopStatus.prototype.drawItemEffectsTpDamage = function (_0x134753, _0x40f37a, _0x46c998) {
  if (this._itemData.gainTP >= 0x0 && !this._customItemInfo["TP DAMAGE"]) {
    return false;
  }
  const _0x1cb085 = this.getItemEffectsTpDamageLabel();
  this.drawItemKeyData(_0x1cb085, _0x134753, _0x40f37a, _0x46c998, true);
  const _0x4cfd19 = this.getItemEffectsTpDamageText();
  this.changeTextColor(ColorManager.powerDownColor());
  this.drawItemKeyData(_0x4cfd19, _0x134753, _0x40f37a, _0x46c998, false, "right");
  this.drawItemDarkRect(_0x134753, _0x40f37a, _0x46c998);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemEffectsTpDamageLabel = function () {
  const _0x2e2234 = VisuMZ.ItemsEquipsCore.Settings.StatusWindow.LabelDamageTP;
  return _0x2e2234.format(TextManager.tp);
};
Window_ShopStatus.prototype.getItemEffectsTpDamageText = function () {
  if (this._customItemInfo["TP DAMAGE"]) {
    return this._customItemInfo["TP DAMAGE"];
  }
  let _0x4b3870 = '';
  _0x4b3870 += '%1'.format(this._itemData.gainTP);
  return _0x4b3870;
};
Window_ShopStatus.prototype.drawItemEffectsAddedStatesBuffs = function (_0x300750, _0x75a93, _0x4ed7b4) {
  if (!this._itemData.addStateBuffChanges && !this._customItemInfo["ADDED EFFECTS"]) {
    return false;
  }
  const _0x24ce4d = this.getItemEffectsAddedStatesBuffsText();
  if (_0x24ce4d.length <= 0x0) {
    return false;
  }
  const _0x900c34 = this.getItemEffectsAddedStatesBuffsLabel();
  this.drawItemKeyData(_0x900c34, _0x300750, _0x75a93, _0x4ed7b4, true);
  this.drawItemKeyData(_0x24ce4d, _0x300750, _0x75a93, _0x4ed7b4, false, "right");
  this.drawItemDarkRect(_0x300750, _0x75a93, _0x4ed7b4);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemEffectsAddedStatesBuffsLabel = function () {
  return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.LabelApply;
};
Window_ShopStatus.prototype.getItemEffectsAddedStatesBuffsText = function () {
  if (this._customItemInfo["ADDED EFFECTS"]) {
    return this._customItemInfo["ADDED EFFECTS"];
  }
  let _0x1c725f = '';
  let _0x14be70 = 0x0;
  for (const _0x32b0a4 of this._itemData.addState) {
    const _0x3cb906 = $dataStates[_0x32b0a4];
    if (_0x3cb906 && _0x3cb906.iconIndex > 0x0) {
      _0x1c725f += "\\I[%1]".format(_0x3cb906.iconIndex);
      _0x14be70++;
      if (_0x14be70 >= 0x8) {
        return _0x1c725f;
      }
    }
  }
  for (let _0x1a60a9 = 0x0; _0x1a60a9 < this._itemData.changeBuff.length; _0x1a60a9++) {
    const _0x4583f6 = this._itemData.changeBuff[_0x1a60a9];
    const _0x4713de = Game_BattlerBase.prototype.buffIconIndex(_0x4583f6, _0x1a60a9);
    if (_0x4713de > 0x0) {
      _0x1c725f += "\\I[%1]".format(_0x4713de);
      _0x14be70++;
      if (_0x14be70 >= 0x8) {
        return _0x1c725f;
      }
    }
  }
  return _0x1c725f;
};
Window_ShopStatus.prototype.drawItemEffectsRemovedStatesBuffs = function (_0x42b798, _0x164608, _0x46e30d) {
  if (!this._itemData.removeStateBuffChanges && !this._customItemInfo["REMOVED EFFECTS"]) {
    return false;
  }
  const _0x255e44 = this.getItemEffectsRemovedStatesBuffsLabel();
  this.drawItemKeyData(_0x255e44, _0x42b798, _0x164608, _0x46e30d, true);
  const _0x469df4 = this.getItemEffectsRemovedStatesBuffsText();
  this.drawItemKeyData(_0x469df4, _0x42b798, _0x164608, _0x46e30d, false, 'right');
  this.drawItemDarkRect(_0x42b798, _0x164608, _0x46e30d);
  this.resetFontSettings();
  return true;
};
Window_ShopStatus.prototype.getItemEffectsRemovedStatesBuffsLabel = function () {
  return VisuMZ.ItemsEquipsCore.Settings.StatusWindow.LabelRemove;
};
Window_ShopStatus.prototype.getItemEffectsRemovedStatesBuffsText = function () {
  if (this._customItemInfo["REMOVED EFFECTS"]) {
    return this._customItemInfo["REMOVED EFFECTS"];
  }
  let _0x62965f = '';
  let _0x2f139f = 0x0;
  const _0x531fad = VisuMZ.ItemsEquipsCore.Settings.StatusWindow.MaxIcons;
  for (const _0x1741c4 of this._itemData.removeState) {
    const _0x51559c = $dataStates[_0x1741c4];
    if (_0x51559c && _0x51559c.iconIndex > 0x0) {
      _0x62965f += "\\I[%1]".format(_0x51559c.iconIndex);
      _0x2f139f++;
      if (_0x2f139f >= _0x531fad) {
        return _0x62965f;
      }
    }
  }
  for (let _0x1ded09 = 0x0; _0x1ded09 < this._itemData.removeBuff.length; _0x1ded09++) {
    const _0xc16c21 = this._itemData.removeBuff[_0x1ded09];
    const _0x2d48c4 = Game_BattlerBase.prototype.buffIconIndex(0x1, _0xc16c21);
    if (_0x2d48c4 > 0x0) {
      _0x62965f += "\\I[%1]".format(_0x2d48c4);
      _0x2f139f++;
      if (_0x2f139f >= _0x531fad) {
        return _0x62965f;
      }
    }
  }
  for (let _0x378029 = 0x0; _0x378029 < this._itemData.removeDebuff.length; _0x378029++) {
    const _0x2bcc29 = this._itemData.removeDebuff[_0x378029];
    const _0x472422 = Game_BattlerBase.prototype.buffIconIndex(-0x1, _0x2bcc29);
    if (_0x472422 > 0x0) {
      _0x62965f += "\\I[%1]".format(_0x472422);
      _0x2f139f++;
      if (_0x2f139f >= _0x531fad) {
        return _0x62965f;
      }
    }
  }
  return _0x62965f;
};
Window_ShopStatus.prototype.drawItemCustomEntries = function (_0x3e4840, _0x162738, _0x20dc41) {
  if (this._item.note.match(/<CUSTOM STATUS INFO>\s*([\s\S]*)\s*<\/CUSTOM STATUS INFO>/i)) {
    const _0x1ec764 = String(RegExp.$1).split(/[\r\n]+/);
    for (const _0x34c2b7 of _0x1ec764) {
      if (_0x34c2b7.match(/(.*):[ ](.*)/i)) {
        const _0x62d096 = String(RegExp.$1).trim();
        const _0x24b90e = String(RegExp.$2).trim();
        this.drawItemCustomEntryLine(_0x62d096, _0x24b90e, _0x3e4840, _0x162738, _0x20dc41);
        _0x162738 += this.lineHeight();
      }
    }
  }
  this.resetFontSettings();
  return _0x162738;
};
Window_ShopStatus.prototype.drawItemCustomEntryLine = function (_0x3689bf, _0xf77f4, _0x10dda3, _0x177a9f, _0x51d8b2) {
  this.drawItemKeyData(_0x3689bf, _0x10dda3, _0x177a9f, _0x51d8b2, true);
  this.drawItemKeyData(_0xf77f4, _0x10dda3, _0x177a9f, _0x51d8b2, false, "right");
  this.drawItemDarkRect(_0x10dda3, _0x177a9f, _0x51d8b2);
  this.resetFontSettings();
};
Window_ShopStatus.prototype.drawCustomShopGraphic = function () {
  if (!this._item) {
    return;
  }
  const _0x2d6120 = this._item.note;
  const _0xa374d0 = /<SHOP (?:PICTURE|IMAGE|PICTURE NAME|PICTURE FILENAME|IMAGE NAME|IMAGE FILENAME):[ ](.*)>/gi;
  const _0x329a76 = _0x2d6120.match(_0xa374d0);
  if (_0x329a76) {
    for (const _0x200ba5 of _0x329a76) {
      _0x200ba5.match(_0xa374d0);
      const _0x417359 = String(RegExp.$1).trim() || '';
      if (_0x417359 === '') {
        continue;
      }
      const _0x66913d = ImageManager.loadPicture(_0x417359);
      _0x66913d.addLoadListener(this.drawCustomShopGraphicLoad.bind(this, _0x66913d, this._item));
    }
  }
};
Window_ShopStatus.prototype.drawCustomShopGraphicLoad = function (_0x5d4394, _0x190bde) {
  if (this._item !== _0x190bde) {
    return;
  }
  if (!_0x5d4394) {
    return;
  }
  if (_0x5d4394.width <= 0x0 || _0x5d4394.height <= 0x0) {
    return;
  }
  const _0x3ba6e4 = _0x190bde.note;
  let _0x227871 = 'background';
  if (_0x3ba6e4.match(/<SHOP (?:PICTURE|IMAGE) LAYER:[ ]FOREGROUND>/i)) {
    _0x227871 = "foreground";
  }
  const _0x3bd558 = _0x227871 === "background" ? this.contentsBack : this.contents;
  let _0x1b6926 = this.innerWidth;
  let _0x2387ee = this.innerHeight;
  if (_0x3ba6e4.match(/<SHOP (?:PICTURE|IMAGE) MAX WIDTH:[ ](\d+)>/i)) {
    _0x1b6926 = Number(RegExp.$1);
  }
  if (_0x3ba6e4.match(/<SHOP (?:PICTURE|IMAGE) MAX HEIGHT:[ ](\d+)>/i)) {
    _0x2387ee = Number(RegExp.$1);
  }
  if (_0x3ba6e4.match(/<SHOP (?:PICTURE|IMAGE) MAX DIMENSIONS:[ ](\d+),[ ]*(\d+)>/i)) {
    _0x1b6926 = Number(RegExp.$1);
    _0x2387ee = Number(RegExp.$2);
  }
  const _0x5c3c39 = Math.min(0x1, _0x1b6926 / _0x5d4394.width, _0x2387ee / _0x5d4394.height);
  let _0x408077 = 0x0;
  let _0x1f045b = 0x0;
  let _0x524e8c = Math.floor(_0x5d4394.width * _0x5c3c39);
  let _0x48078b = Math.floor(_0x5d4394.height * _0x5c3c39);
  let _0x3822d8 = 'center';
  if (_0x3ba6e4.match(/<SHOP (?:PICTURE|IMAGE) (?:ALIGN|ALIGNMENT):[ ](LEFT|CENTER|RIGHT)>/i)) {
    _0x3822d8 = String(RegExp.$1).toLowerCase().trim();
  }
  if (_0x3822d8 === "left") {
    _0x408077 = 0x0;
  } else if (_0x3822d8 === "center") {
    _0x408077 = Math.round((this.innerWidth - _0x524e8c) / 0x2);
  } else {
    _0x408077 = this.innerWidth - _0x524e8c;
  }
  let _0x2dc532 = 'middle';
  if (_0x3ba6e4.match(/<SHOP (?:PICTURE|IMAGE) POSITION:[ ](TOP|MIDDLE|BOTTOM)>/i)) {
    _0x2dc532 = String(RegExp.$1).toLowerCase().trim();
  }
  if (_0x2dc532 === "top") {
    _0x1f045b = 0x0;
  } else if (_0x2dc532 === "middle") {
    _0x1f045b = Math.round((this.innerHeight - _0x48078b) / 0x2);
  } else {
    _0x1f045b = this.innerHeight - _0x48078b;
  }
  if (_0x3ba6e4.match(/<SHOP (?:PICTURE|IMAGE) OFFSET X:[ ]([\+\-]\d+)>/i)) {
    _0x408077 += Number(RegExp.$1);
  }
  if (_0x3ba6e4.match(/<SHOP (?:PICTURE|IMAGE) OFFSET Y:[ ]([\+\-]\d+)>/i)) {
    _0x1f045b += Number(RegExp.$1);
  }
  if (_0x3ba6e4.match(/<SHOP (?:PICTURE|IMAGE) OFFSET:[ ]([\+\-]\d+),[ ]*([\+\-]\d+)>/i)) {
    _0x408077 += Number(RegExp.$1);
    _0x1f045b += Number(RegExp.$2);
  }
  let _0x59a19c = 0xff;
  if (_0x3ba6e4.match(/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)>/i)) {
    _0x59a19c = Number(RegExp.$1);
  } else if (_0x3ba6e4.match(/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)([%％])>/i)) {
    _0x59a19c = Math.round(Number(RegExp.$1) * 0.01 * 0xff).clamp(0x0, 0xff);
  }
  _0x3bd558.paintOpacity = _0x59a19c;
  _0x3bd558.blt(_0x5d4394, 0x0, 0x0, _0x5d4394.width, _0x5d4394.height, _0x408077, _0x1f045b, _0x524e8c, _0x48078b);
  _0x3bd558.paintOpacity = 0xff;
};
VisuMZ.ItemsEquipsCore.deepCopy = function (_0x4c1d02) {
  if (_0x4c1d02 === null || typeof _0x4c1d02 !== "object") {
    return _0x4c1d02;
  }
  const _0x490b62 = Array.isArray(_0x4c1d02) ? [] : Object.create(Object.getPrototypeOf(_0x4c1d02));
  for (const _0x4eb40e in _0x4c1d02) {
    if (Object.prototype.hasOwnProperty.call(_0x4c1d02, _0x4eb40e)) {
      _0x490b62[_0x4eb40e] = typeof _0x4c1d02[_0x4eb40e] === 'object' && _0x4c1d02[_0x4eb40e] !== null ? VisuMZ.ItemsEquipsCore.deepCopy(_0x4c1d02[_0x4eb40e]) : _0x4c1d02[_0x4eb40e];
    }
  }
  return _0x490b62;
};