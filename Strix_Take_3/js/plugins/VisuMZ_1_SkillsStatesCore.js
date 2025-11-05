//=============================================================================
// VisuStella MZ - Skills & States Core
// VisuMZ_1_SkillsStatesCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_SkillsStatesCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SkillsStatesCore = VisuMZ.SkillsStatesCore || {};
VisuMZ.SkillsStatesCore.version = 1.47;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.47] [SkillsStatesCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Skills_and_States_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Skills & States Core plugin extends and builds upon the functionality of
 * RPG Maker MZ's inherent skill, state, and buff functionalities and allows
 * game devs to customize its various aspects.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Assigning multiple Skill Types to Skills.
 * * Making custom Skill Cost Types (such as HP, Gold, and Items).
 * * Allowing Skill Costs to become percentile-based or dynamic either directly
 *   through the Skills themselves or through trait-like notetags.
 * * Replacing gauges for different classes to display different types of
 *   Skill Cost Type resources.
 * * Hiding/Showing and enabling/disabling skills based on switches, learned
 *   skills, and code.
 * * Setting rulings for states, including if they're cleared upon death, how
 *   reapplying the state affects their turn count, and more.
 * * Allowing states to be categorized and affected by categories, too.
 * * Displaying turn counts on states drawn in the window or on sprites.
 * * Manipulation of state, buff, and debuff turns through skill and item
 *   effect notetags.
 * * Create custom damage over time state calculations through notetags.
 * * Allow database objects to apply passive states to its user.
 * * Passive states can have conditions before they become active as well.
 * * Updated Skill Menu Scene layout to fit more modern appearances.
 * * Added bonus if Items & Equips Core is installed to utilize the Shop Status
 *   Window to display skill data inside the Skill Menu.
 * * Control over various aspects of the Skill Menu Scene.
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
 * Action End Removal for States
 * 
 * - If your Plugin Parameter settings for "Action End Update" are enabled,
 * then "Action End" has been updated so that it actually applies per action
 * used instead of just being at the start of a battler's action set.
 * 
 * - However, there are side effects to this: if a state has the "Cannot Move"
 * restriction along with the "Action End" removal timing, then unsurprisingly,
 * the state will never wear off because it's now based on actual actions
 * ending. To offset this and remove confusion, "Action End" auto-removal
 * timings for states with "Cannot Move" restrictions will be turned into
 * "Turn End" auto-removal timings while the "Action End Update" is enabled.
 * 
 * - This automatic change won't make it behave like an "Action End" removal
 * timing would, but it's better than completely softlocking a battler.
 * 
 * ---
 *
 * Buff & Debuff Level Management
 *
 * - In RPG Maker MZ, buffs and debuffs when applied to one another will shift
 * the buff modifier level up or down. This plugin will add an extra change to
 * the mechanic by making it so that once the buff modifier level reaches a
 * neutral point, the buff or debuff is removed altogether and resets the buff
 * and debuff turn counter for better accuracy.
 *
 * ---
 *
 * Skill Costs
 *
 * - In RPG Maker MZ, skill costs used to be hard-coded. Now, all Skill Cost
 * Types are now moved to the Plugin Parameters, including MP and TP. This
 * means that from payment to checking for them, it's all done through the
 * options available.
 *
 * - By default in RPG Maker MZ, displayed skill costs would only display only
 * one type: TP if available, then MP. If a skill costs both TP and MP, then
 * only TP was displayed. This plugin changes that aspect by displaying all the
 * cost types available in order of the Plugin Parameter Skill Cost Types.
 *
 * - By default in RPG Maker MZ, displayed skill costs were only color-coded.
 * This plugin changes that aspect by displaying the Skill Cost Type's name
 * alongside the cost. This is to help color-blind players distinguish what
 * costs a skill has.
 *
 * ---
 *
 * Sprite Gauges
 *
 * - Sprite Gauges in RPG Maker MZ by default are hard-coded and only work for
 * HP, MP, TP, and Time (used for ATB). This plugin makes it possible for them
 * to be customized through the use of Plugin Parameters under the Skill Cost
 * Types and their related-JavaScript entries.
 *
 * ---
 * 
 * State Displays
 * 
 * - To put values onto states and display them separately from the state turns
 * you can use the following script calls.
 * 
 *   battler.getStateDisplay(stateId)
 *   - This returns whatever value is stored for the specified battler under
 *     that specific state value.
 *   - If there is no value to be returned it will return an empty string.
 * 
 *   battler.setStateDisplay(stateId, value)
 *   - This sets the display for the battler's specific state to whatever you
 *     declared as the value.
 *   - The value is best used as a number or a string.
 * 
 *   battler.clearStateDisplay(stateId)
 *   - This clears the display for the battler's specific state.
 *   - In short, this sets the stored display value to an empty string.
 * 
 * ---
 *
 * Window Functions Moved
 *
 * - Some functions found in RPG Maker MZ's default code for Window_StatusBase
 * and Window_SkillList are now moved to Window_Base to make the functions
 * available throughout all windows for usage.
 *
 * ---
 *
 * ============================================================================
 * Slip Damage Popup Clarification
 * ============================================================================
 * 
 * Slip Damage popups only show one popup for HP, MP, and TP each and it is the
 * grand total of all the states and effects combined regardless of the number
 * of states and effects on a battler. This is how it is in vanilla RPG Maker
 * MZ and this is how we intend for it to be with the VisuStella MZ library.
 * 
 * This is NOT a bug!
 * 
 * The reason we are not changing this is because it does not properly relay
 * information to the player accurately. When multiple popups appear, players
 * only have roughly a second and a half to calculate it all for any form of
 * information takeaway. We feel it is better suited for the player's overall
 * convenience to show a cummulative change and steer the experience towards a
 * more positive one.
 *
 * ============================================================================
 * Passive State Clarification
 * ============================================================================
 * 
 * This section will explain various misconceptions regarding passive states.
 * No, passive states do not work the same way as states code-wise. Yes, they
 * use the same effects as states mechanically, but there are differences.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
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
 * === General Skill Notetags ===
 *
 * The following are general notetags that are skill-related.
 *
 * ---
 *
 * <Skill Type: x>
 * <Skill Types: x,x,x>
 *
 * <Skill Type: name>
 * <Skill Types: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Marks the skill to have multiple Skill Types, meaning they would appear
 *   under different skill types without needing to create duplicate skills.
 * - Replace 'x' with a number value representing the Skill Type's ID.
 * - If using 'name' notetag variant, replace 'name' with the Skill Type(s)
 *   name desired to be added.
 *
 * ---
 * 
 * <List Name: name>
 * 
 * - Used for: Skill Notetags
 * - Makes the name of the skill appear different when show in the skill list.
 * - Using \V[x] as a part of the name will display that variable.
 * 
 * ---
 * 
 * <ID Sort Priority: x>
 * 
 * - Used for: Skill Notetags
 * - Used for Scene_Skill.
 * - Changes sorting priority by ID for skills to 'x'. 
 *   - Default priority level is '50'.
 * - Skills with higher priority values will be sorted higher up on the list
 *   while lower values will be lower on the list.
 * 
 * ---
 *
 * === Skill Cost Notetags ===
 *
 * The following are notetags that can be used to adjust skill costs. Some of
 * these notetags are added through the Plugin Parameter: Skill Cost Types and
 * can be altered there. This also means that some of these notetags can have
 * their functionality altered and/or removed.
 *
 * ---
 *
 * <type Cost: x>
 * <type Cost: x%>
 *
 * - Used for: Skill Notetags
 * - These notetags are used to designate costs of custom or already existing
 *   types that cannot be made by the Database Editor.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'x' with a number value to determine the exact type cost value.
 *   This lets you bypass the Database Editor's limit of 9,999 MP and 100 TP.
 * - The 'x%' version is replaced with a percentile value to determine a cost
 *   equal to a % of the type's maximum quantity limit.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost: 500>
 *   <MP Cost: 25%>
 *   <Gold Cost: 3000>
 *   <Potion Cost: 5>
 *
 * ---
 *
 * <type Cost Max: x>
 * <type Cost Min: x>
 *
 * - Used for: Skill Notetags
 * - These notetags are used to ensure conditional and % costs don't become too
 *   large or too small.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'x' with a number value to determine the maximum or minimum values
 *   that the cost can be.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost Max: 1500>
 *   <MP Cost Min: 5>
 *   <Gold Cost Max: 10000>
 *   <Potion Cost Min: 3>
 *
 * ---
 *
 * <type Cost: +x>
 * <type Cost: -x>
 *
 * <type Cost: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - The related actor will raise/lower the cost of any skill that uses the
 *   'type' cost by a specified amount.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - For % notetag variant: Replace 'x' with a number value to determine the
 *   rate to adjust the Skill Cost Type by as a rate value. This is applied
 *   before <type Cost: +x> and <type Cost: -x> notetags.
 * - For + and - notetag variants: Replace 'x' with a number value to determine
 *   how much to adjust the Skill Cost Type by as a flat value. This is applied
 *   after <type Cost: x%> notetags.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 *
 * Examples:
 *   <HP Cost: +20>
 *   <MP Cost: -10>
 *   <Gold Cost: 50%>
 *   <Potion Cost: 200%>
 *
 * ---
 *
 * <Custom Cost Text>
 *  text
 * </Custom Cost Text>
 *
 * - Used for: Skill Notetags
 * - Allows you to insert custom text into the skill's cost area towards the
 *   end of the costs.
 * - Replace 'text' with the text you wish to display.
 * - Text codes may be used.
 *
 * ---
 *
 * === JavaScript Notetags: Skill Costs ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine any dynamic Skill Cost Types used for particular skills.
 *
 * ---
 *
 * <JS type Cost>
 *  code
 *  code
 *  cost = code;
 * </JS type Cost>
 *
 * - Used for: Skill Notetags
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 * - Replace 'code' to determine the type 'cost' of the skill.
 * - Insert the final type cost into the 'cost' variable.
 * - The 'user' variable refers to the user about to perform the skill.
 * - The 'skill' variable refers to the skill being used.
 * - Functionality for the notetag can be altered in the Plugin Parameters.
 *
 * ---
 *
 * === Gauge Replacement Notetags ===
 *
 * Certain classes can have their gauges swapped out for other Skill Cost
 * Types. This is especially helpful for the classes that don't utilize those
 * Skill Cost Types. You can mix and match them however you want.
 *
 * ---
 *
 * <Replace HP Gauge: type>
 * <Replace MP Gauge: type>
 * <Replace TP Gauge: type>
 *
 * - Used for: Class Notetags
 * - Replaces the HP (1st), MP (2nd), or TP (3rd) gauge with a different Skill
 *   Cost Type.
 * - Replace 'type' with a resource type. Existing ones found in the Plugin
 *   Parameters are 'HP', 'MP', 'TP', 'Gold', and 'Potion'. More can be added.
 *   - Does not work with 'Item Cost', 'Weapon Cost', or 'Armor Cost'.
 * - Replace 'type' with 'none' to not display any gauges there.
 * - The <Replace TP Gauge: type> will require 'Display TP in Window' setting
 *   to be on in the Database > System 1 tab.
 * - Functionality for the notetags can be altered by changes made to the
 *   Skill & States Core Plugin Parameters.
 *
 * ---
 * 
 * === Item Cost-Related Notetags ===
 * 
 * ---
 * 
 * <Item Cost: x name>
 * <Weapon Cost: x name>
 * <Armor Cost: x name>
 * 
 * - Used for: Skill Notetags
 * - The skill will consume items, weapons, and/or armors in order to be used.
 *   - Even non-consumable items will be consumed.
 * - Replace 'x' with a number representing the respective item cost.
 * - Replace 'name' with text representing the respective item, weapon, or
 *   armor to be consumed.
 * - Insert multiples of this notetag to consume multiple items, weapons,
 *   and/or armors.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 * 
 * Examples:
 * 
 *   <Item Cost: 5 Magic Water>
 *   <Item Cost: 2 Antidote>
 *   <Weapon Cost: 1 Short Sword>
 *   <Armor Cost: 3 Cloth Armor>
 * 
 * ---
 *
 * <Item Cost Max: x name>
 * <Item Cost Min: x name>
 *
 * <Weapon Cost Max: x name>
 * <Weapon Cost Min: x name>
 *
 * <Armor Cost Max: x name>
 * <Armor Cost Min: x name>
 * 
 * - Used for: Skill Notetags
 * - Sets up a maximum/minimum cost for the item, weapon, armor type costs.
 * - Replace 'x' with a number representing the maximum or minimum cost.
 * - Replace 'name' with text representing the respective item, weapon, or
 *   armor to be consumed.
 * 
 * Examples:
 * 
 *   <Item Cost Max: 10 Magic Water>
 *   <Item Cost Min: 2 Antidote>
 *   <Weapon Cost Max: 3 Short Sword>
 *   <Armor Cost Min: 1 Cloth Armor>
 * 
 * ---
 *
 * <Item Cost: +x name>
 * <Item Cost: -x name>
 *
 * <Weapon Cost: +x name>
 * <Weapon Cost: -x name>
 *
 * <Armor Cost: +x name>
 * <Armor Cost: -x name>
 * 
 * <Item Cost: x% name>
 * <Weapon Cost: x% name>
 * <Armor Cost: x% name>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - The related actor will raise/lower the item, weapon, and/or armor costs of
 *   any skill that costs those items, weapons, and/or armors by x%.
 * - For % notetag variant: Replace 'x' with a number value to determine the
 *   rate to adjust the Skill Cost Type by as a rate value. This is applied
 *   before <type Cost: +x> and <type Cost: -x> notetags.
 * - For + and - notetag variants: Replace 'x' with a number value to determine
 *   how much to adjust the Skill Cost Type by as a flat value. This is applied
 *   after <type Cost: x%> notetags.
 * - Replace 'name' with text representing the respective item, weapon, or
 *   armor to be consumed.
 * - Insert multiples of this notetag to consume multiple items, weapons,
 *   and/or armors.
 * - Functionality for these notetags can be altered in the Plugin Parameters.
 * 
 * Examples:
 * 
 *   <Item Cost: +1 Magic Water>
 *   <Item Cost: -2 Antidote>
 *   <Weapon Cost: 50% Short Sword>
 *   <Armor Cost: 200% Cloth Armor>
 * 
 * ---
 * 
 * <Replace Item name1 Cost: name2>
 * <Replace Weapon name1 Cost: name2>
 * <Replace Armor name1 Cost: name2>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - The related actor will not consume 'name1' items, weapons, or armors.
 *   Instead, the cost will be redirected to 'name2' items, weapons, or armors.
 *   - Even non-consumable items will be consumed.
 * - Replace 'name1' with text representing the respective item, weapon, or
 *   armor that is the original cost type.
 * - Replace 'name2' with text representing the respective item, weapon, or
 *   armor that will be consumed instead.
 * 
 * Examples:
 * 
 *   <Replace Item Magic Water Cost: Potion>
 *   <Replace Item Antidote Cost: Dispel Herb>
 *   <Replace Weapon Short Sword Cost: Falchion>
 *   <Replace Armor Cloth Armor Cost: Leather Armor>
 * 
 * ---
 *
 * === Skill Accessibility Notetags ===
 *
 * Sometimes, you don't want all skills to be visible whether it be to hide
 * menu-only skills during battle, until certain switches are turned ON/OFF, or
 * until certain skills have been learned.
 *
 * ---
 *
 * <Hide in Battle>
 * <Hide outside Battle>
 *
 * - Used for: Skill Notetags
 * - Makes the specific skill visible or hidden depending on whether or not the
 *   player is currently in battle.
 *
 * ---
 *
 * <Show Switch: x>
 *
 * <Show All Switches: x,x,x>
 * <Show Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's visibility.
 * - If 'All' notetag variant is used, skill will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Switch: x>
 *
 * <Hide All Switches: x,x,x>
 * <Hide Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's visibility.
 * - If 'All' notetag variant is used, skill will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Show if learned Skill: x>
 *
 * <Show if learned All Skills: x,x,x>
 * <Show if learned Any Skills: x,x,x>
 *
 * <Show if learned Skill: name>
 *
 * <Show if learned All Skills: name, name, name>
 * <Show if learned Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills learned.
 * - This does not apply to skills added by traits on actors, classes, any
 *   equipment, or states. These are not considered learned skills. They are
 *   considered temporary skills.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be hidden until all skills
 *   are learned. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the skills
 *   are learned. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide if learned Skill: x>
 *
 * <Hide if learned All Skills: x,x,x>
 * <Hide if learned Any Skills: x,x,x>
 *
 * <Hide if learned Skill: name>
 *
 * <Hide if learned All Skills: name, name, name>
 * <Hide if learned Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills learned.
 * - This does not apply to skills added by traits on actors, classes, any
 *   equipment, or states. These are not considered learned skills. They are
 *   considered temporary skills.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be shown until all skills
 *   are learned. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   skills are learned. Otherwise, it would be shown.
 *
 * ---
 *
 * <Show if has Skill: x>
 *
 * <Show if have All Skills: x,x,x>
 * <Show if have Any Skills: x,x,x>
 *
 * <Show if has Skill: name>
 *
 * <Show if have All Skills: name, name, name>
 * <Show if have Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills available.
 * - This applies to both skills that have been learned and/or temporarily
 *   added through traits on actors, classes, equipment, or states.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be hidden until all skills
 *   are learned. Then, it would be shown.
 * - If 'Any' notetag variant is used, skill will be shown if any of the skills
 *   are learned. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide if has Skill: x>
 *
 * <Hide if have All Skills: x,x,x>
 * <Hide if have Any Skills: x,x,x>
 *
 * <Hide if has Skill: name>
 *
 * <Hide if have All Skills: name, name, name>
 * <Hide if have Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on skills available.
 * - This applies to both skills that have been learned and/or temporarily
 *   added through traits on actors, classes, equipment, or states.
 * - Replace 'x' with the skill ID to determine the skill's visibility.
 * - If 'name' notetag viarant is used, replace 'name' with the skill's name to
 *   be checked for the notetag.
 * - If 'All' notetag variant is used, skill will be shown until all skills
 *   are learned. Then, it would be hidden.
 * - If 'Any' notetag variant is used, skill will be hidden if any of the
 *   skills are learned. Otherwise, it would be shown.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's enabled status.
 * - If 'All' notetag variant is used, skill will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, skill will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on switches.
 * - Replace 'x' with the switch ID to determine the skill's enabled status.
 * - If 'All' notetag variant is used, skill will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, skill will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Skill Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if a skill can be accessible visibly or through usage.
 *
 * ---
 *
 * <JS Skill Visible>
 *  code
 *  code
 *  visible = code;
 * </JS Skill Visible>
 *
 * - Used for: Skill Notetags
 * - Determines the visibility of the skill based on JavaScript code.
 * - Replace 'code' to determine the type visibility of the skill.
 * - The 'visible' variable returns a boolean (true/false) to determine if the
 *   skill will be visible or not.
 * - The 'user' variable refers to the user with the skill.
 * - The 'skill' variable refers to the skill being checked.
 * - All other visibility conditions must be met for this code to count.
 *
 * ---
 *
 * <JS Skill Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Skill Enable>
 *
 * - Used for: Skill Notetags
 * - Determines the enabled status of the skill based on JavaScript code.
 * - Replace 'code' to determine the type enabled status of the skill.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   skill will be enabled or not.
 * - The 'user' variable refers to the user with the skill.
 * - The 'skill' variable refers to the skill being checked.
 * - All other skill conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === General State-Related Notetags ===
 *
 * The following notetags are centered around states, such as how their turn
 * counts are displayed, items and skills that affect state turns, if the state
 * can avoid removal by death state, etc.
 *
 * ---
 *
 * <No Death Clear>
 *
 * - Used for: State Notetags
 * - Prevents this state from being cleared upon death.
 * - This allows this state to be added to an already dead battler, too.
 *
 * ---
 *
 * <No Recover All Clear>
 *
 * - Used for: State Notetags
 * - Prevents this state from being cleared upon using the Recover All command.
 *
 * ---
 *
 * <Group Defeat>
 *
 * - Used for: State Notetags
 * - If an entire party is affected by states with the <Group Defeat> notetag,
 *   they are considered defeated.
 * - Usage for this includes party-wide petrification, frozen, etc.
 *
 * ---
 *
 * <Reapply Rules: Ignore>
 * <Reapply Rules: Reset>
 * <Reapply Rules: Greater>
 * <Reapply Rules: Add>
 *
 * - Used for: State Notetags
 * - Choose what kind of rules this state follows if the state is being applied
 *   to a target that already has the state. This affects turns specifically.
 * - 'Ignore' will bypass any turn changes.
 * - 'Reset' will recalculate the state's turns.
 * - 'Greater' will choose to either keep the current turn count if it's higher
 *   than the reset amount or reset it if the current turn count is lower.
 * - 'Add' will add the state's turn count to the applied amount.
 * - If this notetag isn't used, it will use the rules set in the States >
 *   Plugin Parameters.
 *
 * ---
 *
 * <Positive State>
 * <Negative State>
 *
 * - Used for: State Notetags
 * - Marks the state as a positive state or negative state, also altering the
 *   state's turn count color to match the Plugin Parameter settings.
 * - This also puts the state into either the 'Positive' category or
 *   'Negative' category.
 *
 * ---
 *
 * <Category: name>
 * <Category: name, name, name>
 *
 * - Used for: State Notetags
 * - Arranges states into certain/multiple categories.
 * - Replace 'name' with a category name to mark this state as.
 * - Insert multiples of this to mark the state with  multiple categories.
 *
 * ---
 *
 * <Categories>
 *  name
 *  name
 * </Categories>
 *
 * - Used for: State Notetags
 * - Arranges states into certain/multiple categories.
 * - Replace each 'name' with a category name to mark this state as.
 *
 * ---
 * 
 * <Bypass State Damage Removal: id>
 * <Bypass State Damage Removal: id, id, id>
 * 
 * <Bypass State Damage Removal: name>
 * <Bypass State Damage Removal: name, name, name>
 * 
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used to attack an enemy with the listed state that
 *   would normally have on damage removal (ie Sleep).
 * - For 'id' variant, replace each 'id' with a number representing the state's
 *   ID to bypass the damage removal for.
 * - For 'name' variant, replace each 'name' with the state's name to bypass
 *   the damage removal for.
 * - This can be used for attacks like "Dream Eater" that would prevent waking
 *   up a sleeping opponent.
 * 
 * ---
 * 
 * <Bypass State Damage Removal as Attacker: id>
 * <Bypass State Damage Removal as Attacker: id, id, id>
 * 
 * <Bypass State Damage Removal as Attacker: name>
 * <Bypass State Damage Removal as Attacker: name, name, name>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - When an attacker with an associated trait object that has this notetag
 *   would attack an enemy with the listed state, bypass on damage removal.
 * - For 'id' variant, replace each 'id' with a number representing the state's
 *   ID to bypass the damage removal for.
 * - For 'name' variant, replace each 'name' with the state's name to bypass
 *   the damage removal for.
 * - This can be used for effects like "Sleep Striker" that would prevent the
 *   attacker from waking up a sleeping opponent.
 * 
 * ---
 * 
 * <Bypass State Damage Removal as Target: id>
 * <Bypass State Damage Removal as Target: id, id, id>
 * 
 * <Bypass State Damage Removal as Target: name>
 * <Bypass State Damage Removal as Target: name, name, name>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - When a target with an associated trait object that has this notetag is
 *   attacked as the target with the listed state, bypass on damage removal.
 * - For 'id' variant, replace each 'id' with a number representing the state's
 *   ID to bypass the damage removal for.
 * - For 'name' variant, replace each 'name' with the state's name to bypass
 *   the damage removal for.
 * - This can be used for effects like "Deep Sleep" that would prevent the
 *   attacked target from waking up.
 * 
 * ---
 * 
 * <Resist State Category: name>
 * <Resist State Categories: name, name, name>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected battler resist the listed categories.
 * - Replace each 'name' with a category name to resist.
 *   - Insert multiple 'name' entries to add more categories.
 * - This works exactly like how state resistances work in-game. If a battler
 *   who was originally NOT resistant to "Poison" before gaining a
 *   poison-resistant trait, the "Poison" state will remain because it was
 *   applied before poison-resistance as enabled.
 * 
 * ---
 * 
 * <Resist State Categories>
 *  name
 *  name
 *  name
 * </Resist State Categories>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected battler resist the listed categories.
 * - Replace each 'name' with a category name to resist.
 *   - Insert multiple 'name' entries to add more categories.
 * - This works exactly like how state resistances work in-game. If a battler
 *   who was originally NOT resistant to "Poison" before gaining a
 *   poison-resistant trait, the "Poison" state will remain because it was
 *   applied before poison-resistance as enabled.
 * 
 * ---
 *
 * <State x Category Remove: y>
 * 
 * <State x Category Remove: All>
 *
 * - Used for: Skill, Item Notetags
 * - Allows the skill/item to remove 'y' states from specific category 'x'.
 * - Replace 'x' with a category name to remove from.
 * - Replace 'y' with the number of times to remove from that category.
 * - Use the 'All' variant to remove all of the states of that category.
 * - Insert multiples of this to remove different types of categories.
 *
 * ---
 * 
 * <Remove Other x States>
 * 
 * - Used for: State Notetags
 * - When the state with this notetag is added, remove other 'x' category
 *   states from the battler (except for the state being added).
 * - Replace 'x' with a category name to remove from.
 * - Insert multiples of this to remove different types of categories.
 * - Useful for thing state types like stances and forms that there is usually
 *   only one active at a time.
 * 
 * ---
 *
 * <Hide State Turns>
 *
 * - Used for: State Notetags
 * - Hides the state turns from being shown at all.
 * - This will by pass any Plugin Parameter settings.
 *
 * ---
 *
 * <Turn Color: x>
 * <Turn Color: #rrggbb>
 *
 * - Used for: State Notetags
 * - Hides the state turns from being shown at all.
 * - Determines the color of the state's turn count.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 * 
 * <Max Turns: x>
 * 
 * - Used for: State Notetags
 * - Determines the upper limit on the maximum number of turns for this state.
 * - Replace 'x' with a number representing the maximum number of turns used
 *   for this state.
 * - If no notetag is used, refer to the default setting found in the Plugin
 *   Parameters under "State Settings".
 * 
 * ---
 *
 * <State id Turns: +x>
 * <State id Turns: -x>
 *
 * <Set State id Turns: x>
 *
 * <State name Turns: +x>
 * <State name Turns: -x>
 *
 * <Set State name Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by state 'id' or state 'name', change the state
 *   turn duration for target.
 * - For 'id' variant, replace 'id' with the ID of the state to modify.
 * - For 'name' variant, replace 'name' with the name of the state to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple states at once.
 *
 * ---
 *
 * <param Buff Turns: +x>
 * <param Buff Turns: -x>
 *
 * <Set param Buff Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by a 'param' buff, change that buff's turn
 *   duration for target.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter buff to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple parameters at once.
 *
 * ---
 *
 * <param Debuff Turns: +x>
 * <param Debuff Turns: -x>
 *
 * <Set param Debuff Turns: x>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is affected by a 'param' debuff, change that debuff's turn
 *   duration for target.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter debuff to modify.
 * - Replace 'x' with the value you wish to increase, decrease, or set to.
 * - Insert multiples of this notetag to affect multiple parameters at once.
 *
 * ---
 *
 * === JavaScript Notetags: On Add/Erase/Expire ===
 *
 * Using JavaScript code, you can use create custom effects that occur when a
 * state has bee added, erased, or expired.
 * 
 * ---
 *
 * <JS On Add State>
 *  code
 *  code
 * </JS On Add State>
 *
 * - Used for: State Notetags
 * - When a state is added, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * <JS On Erase State>
 *  code
 *  code
 * </JS On Erase State>
 *
 * - Used for: State Notetags
 * - When a state is erased, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * <JS On Expire State>
 *  code
 *  code
 * </JS On Expire State>
 *
 * - Used for: State Notetags
 * - When a state has expired, run the code added by this notetag.
 * - The 'user' variable refers to the current active battler.
 * - The 'target' variable refers to the battler affected by this state.
 * - The 'origin' variable refers to the one who applied this state.
 * - The 'state' variable refers to the current state being affected.
 *
 * ---
 *
 * === JavaScript Notetags: Slip Damage/Healing ===
 *
 * Slip Damage, in RPG Maker vocabulary, refers to damage over time. The
 * following notetags allow you to perform custom slip damage/healing.
 *
 * ---
 *
 * <JS type Slip Damage>
 *  code
 *  code
 *  damage = code;
 * </JS type Slip Damage>
 *
 * - Used for: State Notetags
 * - Code used to determine how much slip damage is dealt to the affected unit
 *   during each regeneration phase.
 * - Replace 'type' with 'HP', 'MP', or 'TP'.
 * - Replace 'code' with the calculations on what to determine slip damage.
 * - The 'user' variable refers to the origin of the state.
 * - The 'target' variable refers to the affected unit receiving the damage.
 * - The 'state' variable refers to the current state being affected.
 * - The 'damage' variable is the finalized slip damage to be dealt.
 * - When these states are applied via action effects, the slip calculations
 *   are one time calculations made upon applying and the damage is cached to
 *   be used for future on regeneration calculations.
 * - For that reason, do not include game mechanics here such as adding states,
 *   buffs, debuffs, etc. as this notetag is meant for calculations only. Use
 *   the VisuStella Battle Core's <JS Pre-Regenerate> and <JS Post-Regenerate>
 *   notetags for game mechanics instead.
 * - Passive states and states with the <JS Slip Refresh> notetag are exempt
 *   from the one time calculation and recalculated each regeneration phase.
 *
 * ---
 *
 * <JS type Slip Heal>
 *  code
 *  code
 *  heal = code;
 * </JS type Slip Heal>
 *
 * - Used for: State Notetags
 * - Code used to determine how much slip healing is dealt to the affected unit
 *   during each regeneration phase.
 * - Replace 'type' with 'HP', 'MP', or 'TP'.
 * - Replace 'code' with the calculations on what to determine slip healing.
 * - The 'user' variable refers to the origin of the state.
 * - The 'target' variable refers to the affected unit receiving the healing.
 * - The 'state' variable refers to the current state being affected.
 * - The 'heal' variable is the finalized slip healing to be recovered.
 * - When these states are applied via action effects, the slip calculations
 *   are one time calculations made upon applying and the damage is cached to
 *   be used for future on regeneration calculations.
 * - For that reason, do not include game mechanics here such as adding states,
 *   buffs, debuffs, etc. as this notetag is meant for calculations only. Use
 *   the VisuStella Battle Core's <JS Pre-Regenerate> and <JS Post-Regenerate>
 *   notetags for game mechanics instead.
 * - Passive states and states with the <JS Slip Refresh> notetag are exempt
 *   from the one time calculation and recalculated each regeneration phase.
 *
 * ---
 * 
 * <JS Slip Refresh>
 * 
 * - Used for: State Notetags
 * - Refreshes the calculations made for the JS Slip Damage/Heal amounts at the
 *   start of each regeneration phase to allow for dynamic damage ranges.
 * 
 * ---
 *
 * === Passive State Notetags ===
 *
 * Passive States are states that are always applied to actors and enemies
 * provided that their conditions have been met. These can be granted through
 * database objects or through the Passive States Plugin Parameters.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
 * 
 * ---
 *
 * <Passive State: x>
 * <Passive States: x,x,x>
 *
 * <Passive State: name>
 * <Passive States: name, name, name>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy Notetags
 * - Adds passive state(s) x to trait object, applying it to related actor or
 *   enemy unit(s).
 * - Replace 'x' with a number to determine which state to add as a passive.
 * - If using 'name' notetag variant, replace 'name' with the name of the
 *   state(s) to add as a passive.
 * - Note: If you plan on applying a passive state through a skill, it must be
 *   through a skill that has been learned by the target and not a skill that
 *   is given through a trait.
 *
 * ---
 *
 * <Passive Stackable>
 *
 * - Used for: State Notetags
 * - Makes it possible for this passive state to be added multiple times.
 * - Otherwise, only one instance of the passive state can be available.
 *
 * ---
 *
 * <Passive Condition Class: id>
 * <Passive Condition Classes: id, id, id>
 *
 * <Passive Condition Class: name>
 * <Passive Condition Classes: name, name, name>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on the actor's
 *   current class. As long as the actor's current class matches one of the
 *   data entries, the passive condition is considered passed.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 *
 * ---
 *
 * <Passive Condition Multiclass: id>
 * <Passive Condition Multiclass: id, id, id>
 *
 * <Passive Condition Multiclass: name>
 * <Passive Condition Multiclass: name, name, name>
 *
 * - Used for: State Notetags
 * - Requires VisuMZ_2_ClassChangeSystem!
 * - Determines the passive condition of the passive state based on the actor's
 *   multiclasses. As long as the actor has any of the matching classes
 *   assigned as a multiclass, the passive condition is considered passed.
 * - For 'id' variant, replace 'id' with a number representing class's ID.
 * - For 'name' variant, replace 'name' with the class's name.
 *
 * ---
 *
 * <Passive Condition Switch ON: x>
 *
 * <Passive Condition All Switches ON: x,x,x>
 * <Passive Condition Any Switch ON: x,x,x>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on switches.
 * - Replace 'x' with the switch ID to determine the state's passive condition.
 * - If 'All' notetag variant is used, conditions will not be met until all
 *   switches are ON. Then, it would be met.
 * - If 'Any' notetag variant is used, conditions will be met if any of the
 *   switches are ON. Otherwise, it would not be met.
 *
 * ---
 *
 * <Passive Condition Switch OFF: x>
 *
 * <Passive Condition All Switches OFF: x,x,x>
 * <Passive Condition Any Switch OFF: x,x,x>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the passive state based on switches.
 * - Replace 'x' with the switch ID to determine the state's passive condition.
 * - If 'All' notetag variant is used, conditions will not be met until all
 *   switches are OFF. Then, it would be met.
 * - If 'Any' notetag variant is used, conditions will be met if any of the
 *   switches are OFF. Otherwise, it would not be met.
 *
 * ---
 *
 * === JavaScript Notetags: Passive State ===
 *
 * The following is a notetag made for users with JavaScript knowledge to
 * determine if a passive state's condition can be met.
 *
 * ---
 *
 * <JS Passive Condition>
 *  code
 *  code
 *  condition = code;
 * </JS Passive Condition>
 *
 * - Used for: State Notetags
 * - Determines the passive condition of the state based on JavaScript code.
 * - Replace 'code' to determine if a passive state's condition has been met.
 * - The 'condition' variable returns a boolean (true/false) to determine if
 *   the passive state's condition is met or not.
 * - The 'user' variable refers to the user affected by the passive state.
 * - The 'state' variable refers to the passive state being checked.
 * - All other passive conditions must be met for this code to count.
 * 
 * **NOTE** Not everything can be used as a custom JS Passive Condition due to
 * limitations of the code. There are failsafe checks to prevent infinite loops
 * and some passive conditions will not register for this reason and the
 * conditional checks will behave as if the passive states have NOT been
 * applied for this reason. Such examples include the following:
 * 
 * - A passive state that requires another passive state
 * - A passive state that requires a trait effect from another state
 * - A passive state that requires a parameter value altered by another state
 * - A passive state that requires equipment to be worn but its equipment type
 *   access is provided by another state.
 * - Anything else that is similar in style.
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
 * === Skill Cost Plugin Commands ===
 * 
 * ---
 * 
 * Skill Cost: Emulate Actor Pay
 * - Target actor(s) emulates paying for skill cost.
 * - 
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) will pay skill cost.
 * 
 *   Skill ID:
 *   - What is the ID of the skill to emulate paying the skill cost for?
 * 
 * ---
 * 
 * Skill Cost: Emulate Enemy Pay
 * - Target enemy(s) emulates paying for skill cost.
 * - 
 * 
 *   Enemy Index(es):
 *   - Select which enemy index(es) will pay skill cost.
 * 
 *   Skill ID:
 *   - What is the ID of the skill to emulate paying the skill cost for?
 * 
 * ---
 * 
 * === State Turns Plugin Commands ===
 * 
 * ---
 * 
 * State Turns: Actor State Turns Change By
 * - Changes actor(s) state turns by an amount.
 * - Only works on states that can have turns.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   State ID:
 *   - What is the ID of the state you wish to change turns for?
 *   - Only works on states that can have turns.
 * 
 *   Change Turns By:
 *   - How many turns should the state be changed to?
 *   - You may use JavaScript code.
 * 
 *   Auto-Add State?:
 *   - Automatically adds state if actor(s) does not have it applied?
 * 
 * ---
 * 
 * State Turns: Actor State Turns Change To
 * - Changes actor(s) state turns to a specific value.
 * - Only works on states that can have turns.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   State ID:
 *   - What is the ID of the state you wish to change turns for?
 *   - Only works on states that can have turns.
 * 
 *   Change Turns To:
 *   - How many turns should the state be changed to?
 *   - You may use JavaScript code.
 * 
 *   Auto-Add State?:
 *   - Automatically adds state if actor(s) does not have it applied?
 * 
 * ---
 * 
 * State Turns: Enemy State Turns Change By
 * - Changes enemy(s) state turns by an amount.
 * - Only works on states that can have turns.
 * 
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 * 
 *   State ID:
 *   - What is the ID of the state you wish to change turns for?
 *   - Only works on states that can have turns.
 * 
 *   Change Turns By:
 *   - How many turns should the state be changed to?
 *   - You may use JavaScript code.
 * 
 *   Auto-Add State?:
 *   - Automatically adds state if actor(s) does not have it applied?
 * 
 * ---
 * 
 * State Turns: Enemy State Turns Change To
 * - Changes enemy(s) state turns to a specific value.
 * - Only works on states that can have turns.
 * 
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 * 
 *   State ID:
 *   - What is the ID of the state you wish to change turns for?
 *   - Only works on states that can have turns.
 * 
 *   Change Turns To:
 *   - How many turns should the state be changed to?
 *   - You may use JavaScript code.
 * 
 *   Auto-Add State?:
 *   - Automatically adds state if actor(s) does not have it applied?
 * 
 * ---
 * 
 *
 * ============================================================================
 * Plugin Parameters: General Skill Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust various aspects of the game regarding skills
 * from the custom Skill Menu Layout to global custom effects made in code.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Skill Menu Layout provided by this plugin?
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
 * Skill Type Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Skill Type Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Skill Type Window.
 * 
 *   Window Width:
 *   - What is the desired pixel width of this window?
 *   - Default: 240
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Skill Menu?:
 *   - Show the Shop Status Window in the Skill Menu?
 *   - This is enabled if the Updated Layout is on.
 * 
 *   Adjust List Window?:
 *   - Automatically adjust the Skill List Window in the Skill Menu if using
 *     the Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Shop Status Window in the
 *     Skill Menu.
 *
 * ---
 *
 * Skill Types
 * 
 *   Hidden Skill Types:
 *   - Insert the ID's of the Skill Types you want hidden from view ingame.
 * 
 *   Hidden During Battle:
 *   - Insert the ID's of the Skill Types you want hidden during battle only.
 * 
 *   Icon: Normal Type:
 *   - Icon used for normal skill types that aren't assigned any icons.
 *   - To assign icons to skill types, simply insert \I[x] into the
 *     skill type's name in the Database > Types tab.
 * 
 *   Icon: Magic Type:
 *   - Icon used for magic skill types that aren't assigned any icons.
 *   - To assign icons to skill types, simply insert \I[x] into the
 *     skill type's name in the Database > Types tab.
 * 
 *   Sort: Alphabetical:
 *   - Insert the ID's of Skill Types you want sorted alphabetically.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: Skill Conditions:
 *   - JavaScript code for a global-wide skill condition check.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Skill Cost Types
 * ============================================================================
 *
 * Skill Cost Types are the resources that are used for your skills. These can
 * range from the default MP and TP resources to the newly added HP, Gold, and
 * Potion resources.
 *
 * ---
 *
 * Settings
 * 
 *   Name:
 *   - A name for this Skill Cost Type.
 * 
 *   Icon:
 *   - Icon used for this Skill Cost Type.
 *   - Use 0 for no icon.
 * 
 *   Font Color:
 *   - Text Color used to display this cost.
 *   - For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * 
 *   Font Size:
 *   - Font size used to display this cost.
 *
 * ---
 *
 * Cost Processing
 * 
 *   JS: Cost Calculation:
 *   - Code on how to calculate this resource cost for the skill.
 * 
 *   JS: Can Pay Cost?:
 *   - Code on calculating whether or not the user is able to pay the cost.
 * 
 *   JS: Paying Cost:
 *   - Code for if met, this is the actual process of paying of the cost.
 *
 * ---
 *
 * Window Display
 * 
 *   JS: Show Cost?:
 *   - Code for determining if the cost is shown or not.
 * 
 *   JS: Cost Text:
 *   - Code to determine the text (with Text Code support) used for the
 *     displayed cost.
 *
 * ---
 *
 * Gauge Display
 * 
 *   JS: Maximum Value:
 *   - Code to determine the maximum value used for this Skill Cost resource
 *     for gauges.
 * 
 *   JS: Current Value:
 *   - Code to determine the current value used for this Skill Cost resource
 *     for gauges.
 * 
 *   JS: Draw Gauge:
 *   - Code to determine how to draw the Skill Cost resource for this 
 *     gauge type.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gauge Settings
 * ============================================================================
 *
 * Settings in regards to how skill cost gauges function and appear.
 *
 * ---
 *
 * Labels
 * 
 *   Font Type:
 *   - Which font type should be used for labels?
 * 
 *   Match Label Color:
 *   - Match the label color to the Gauge Color being used?
 * 
 *     Match: Gauge # ?:
 *     - Which Gauge Color should be matched?
 * 
 *     Preset: Gauge Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *   Solid Outline:
 *   - Make the label outline a solid black color?
 * 
 *   Outline Width:
 *   - What width do you wish to use for your outline?
 *   - Use 0 to not use an outline.
 *
 * ---
 *
 * Values
 * 
 *   Font Type:
 *   - Which font type should be used for values?
 * 
 *   Solid Outline:
 *   - Make the value outline a solid black color?
 * 
 *   Outline Width:
 *   - What width do you wish to use for your outline?
 *   - Use 0 to not use an outline.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General State Settings
 * ============================================================================
 *
 * These are general settings regarding RPG Maker MZ's state-related aspects
 * from how turns are reapplied to custom code that's ran whenever states are
 * added, erased, or expired.
 *
 * ---
 *
 * General
 * 
 *   Reapply Rules:
 *   - These are the rules when reapplying states.
 *   - Ignore: State doesn't get added.
 *   - Reset: Turns get reset.
 *   - Greater: Turns take greater value (current vs reset).
 *   - Add: Turns add upon existing turns.
 * 
 *   Maximum Turns:
 *   - Maximum number of turns to let states go up to.
 *   - This can be changed with the <Max Turns: x> notetag.
 * 
 *   Action End Update:
 *   - States with "Action End" auto-removal will also update turns at the end
 *     of each action instead of all actions.
 * 
 *   Turn End on Map:
 *   - Update any state and buff turns on the map after this many steps.
 *   - Use 0 to disable.
 *
 * ---
 *
 * Turn Display
 * 
 *   Show Turns?:
 *   - Display state turns on top of window icons and sprites?
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Offset X:
 *   - Offset the X position of the turn display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the turn display.
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Turn Color: Neutral:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Positive:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Negative:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * Data Display
 * 
 *   Show Data?:
 *   - Display state data on top of window icons and sprites?
 * 
 *   Data Font Size:
 *   - Font size used for displaying state data.
 * 
 *   Offset X:
 *   - Offset the X position of the state data display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the state data display.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: On Add State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     is added.
 * 
 *   JS: On Erase State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     is erased.
 * 
 *   JS: On Expire State:
 *   - JavaScript code for a global-wide custom effect whenever a state
 *     has expired.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Buff/Debuff Settings
 * ============================================================================
 *
 * Buffs and debuffs don't count as states by RPG Maker MZ's mechanics, but
 * they do function close enough for them to be added to this plugin for
 * adjusting. Change these settings to make buffs and debuffs work to your
 * game's needs.
 *
 * ---
 *
 * General
 * 
 *   Reapply Rules:
 *   - These are the rules when reapplying buffs/debuffs.
 *   - Ignore: Buff/Debuff doesn't get added.
 *   - Reset: Turns get reset.
 *   - Greater: Turns take greater value (current vs reset).
 *   - Add: Turns add upon existing turns.
 * 
 *   Maximum Turns:
 *   - Maximum number of turns to let buffs and debuffs go up to.
 *
 * ---
 *
 * Stacking
 * 
 *   Max Stacks: Buff:
 *   - Maximum number of stacks for buffs.
 * 
 *   Max Stacks: Debuff:
 *   - Maximum number of stacks for debuffs.
 * 
 *   JS: Buff/Debuff Rate:
 *   - Code to determine how much buffs and debuffs affect parameters.
 *
 * ---
 *
 * Turn Display
 * 
 *   Show Turns?:
 *   - Display buff and debuff turns on top of window icons and sprites?
 * 
 *   Turn Font Size:
 *   - Font size used for displaying turns.
 * 
 *   Offset X:
 *   - Offset the X position of the turn display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the turn display.
 * 
 *   Turn Color: Buffs:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Turn Color: Debuffs:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * Rate Display
 * 
 *   Show Rate?:
 *   - Display buff and debuff rate on top of window icons and sprites?
 * 
 *   Rate Font Size:
 *   - Font size used for displaying rate.
 * 
 *   Offset X:
 *   - Offset the X position of the rate display.
 * 
 *   Offset Y:
 *   - Offset the Y position of the rate display.
 *
 * ---
 *
 * Global JS Effects
 * 
 *   JS: On Add Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Add Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 * 
 *   JS: On Erase Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Erase Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 * 
 *   JS: On Expire Buff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     buff is added.
 * 
 *   JS: On Expire Debuff:
 *   - JavaScript code for a global-wide custom effect whenever a
 *     debuff is added.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Passive State Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust passive states that can affect all actors and
 * enemies as well as have global conditions.
 * 
 * ---
 * 
 * For those using the code "a.isStateAffected(10)" to check if a target is
 * affected by a state or not, this does NOT check passive states. This only
 * checks for states that were directly applied to the target.
 * 
 * This is NOT a bug.
 * 
 * Instead, use "a.states().includes($dataStates[10])" to check for them. This
 * code will search for both directly applied states and passive states alike.
 *
 * ---
 * 
 * As passive states are NOT considered directly applied to, they do NOT match
 * a Conditional Branch's state check as well. The Conditional Branch effect
 * checks for an affected state.
 * 
 * ---
 * 
 * Because passive states are NOT directly applied to a battler, the functions
 * of "addNewState", "addState", "eraseState", "removeState" do NOT apply to
 * passive states either. This means that any of the related JS notetags tied
 * to those functions will not occur either.
 * 
 * ---
 * 
 * Why are passive states not considered affected by? Let's look at it
 * differently. There are two ways to grant skills to actors. They can acquire
 * skills by levels/items/events or they can equip gear that temporarily grants
 * the skill in question.
 * 
 * Learning the skill is direct. Temporarily granting the skill is indirect.
 * These two factors have mechanical importance and require differentiation.
 * 
 * Regular states and passive states are the same way. Regular states are
 * directly applied, therefore, need to be distinguished in order for things
 * like state turns and steps, removal conditionals, and similar to matter at
 * all. Passive states are indirect and are therefore, unaffected by state
 * turns, steps, and removal conditions. These mechanical differences are
 * important for how RPG Maker works.
 * 
 * ---
 * 
 * Once again, it is NOT a bug that when using "a.isStateAffected(10)" to
 * check if a target has a passive state will return false.
 * 
 * ---
 *
 * List
 * 
 *   Global Passives:
 *   - A list of passive states to affect actors and enemies.
 * 
 *   Actor-Only Passives:
 *   - A list of passive states to affect actors only.
 * 
 *   Enemy Passives:
 *   - A list of passive states to affect enemies only.
 *
 * ---
 * 
 * Cache
 * 
 *   Switch Refresh?:
 *   - Refresh all battle members when switches are changed in battle?
 *   - This is primarily used for passive state conditions involve parameters
 *     that do not update due to cached data until a refresh occurs.
 *   - If this is on, do not spam Switch changes during battle in order to
 *     prevent lag spikes.
 * 
 *   Variable Refresh?:
 *   - Refresh all battle members when variables are changed in battle?
 *   - This is primarily used for passive state conditions involve parameters
 *     that do not update due to cached data until a refresh occurs.
 *   - If this is on, do not spam Variable changes during battle in order to
 *     prevent lag spikes.
 * 
 * ---
 *
 * Global JS Effects
 * 
 *   JS: Condition Check:
 *   - JavaScript code for a global-wide passive condition check.
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
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.47: August 29, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Arisu:
 * *** <Bypass State Damage Removal: id/name>
 * **** When this skill/item is used to attack an enemy with the listed state
 *      that would normally have on damage removal (ie Sleep).
 * **** This can be used for attacks like "Dream Eater" that would prevent
 *      waking up a sleeping opponent.
 * *** <Bypass State Damage Removal as Attacker: id/name>
 * **** When an attacker with an associated trait object that has this notetag
 *      would attack an enemy with the listed state, bypass on damage removal.
 * **** This can be used for effects like "Sleep Striker" that would prevent
 *      the attacker from waking up a sleeping opponent.
 * *** <Bypass State Damage Removal as Target: id/name>
 * **** When a target with an associated trait object that has this notetag is
 *      attacked as the target with the listed state, bypass on damage removal.
 * **** This can be used for effects like "Deep Sleep" that would prevent the
 *      attacked target from waking up.
 * 
 * Version 1.46: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Skill Settings > Skill Types > Sort: Alphabetical
 * **** Insert the ID's of Skill Types you want sorted alphabetically.
 * ** New notetags added by Irina:
 * *** <ID Sort Priority: x>
 * **** Used for Scene_Skill.
 * **** Changes sorting priority by ID for skill to 'x'. 
 * **** Default priority level is '50'.
 * **** Skills with higher priority values will be sorted higher up on the list
 *      while lower values will be lower on the list.
 * 
 * Version 1.45: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a problem with passive state conditional notetags not working
 *    properly. Fix made by Irina.
 * 
 * Version 1.44: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where passive states would not appear. Fix made by Olivia.
 * ** Fixed a bug where a crash would occur if certain plugins cleared the
 *    passive state cache midway through trying to register it. Fix by Olivia.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * ** States with lots and lots of text data within their notes will no longer
 *    cause FPS drops.
 * 
 * Version 1.43: January 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Skill Cost: Emulate Actor Pay
 * *** Skill Cost: Emulate Enemy Pay
 * **** Target actor(s)/enemy(s) emulates paying for skill cost.
 * *** State Turns: Actor State Turns Change By
 * *** State Turns: Actor State Turns Change To
 * *** State Turns: Enemy State Turns Change By
 * *** State Turns: Enemy State Turns Change To
 * **** Changes actor(s)/enemy(s) state turns to a specific value/by an amount.
 * **** Only works on states that can have turns.
 * 
 * Version 1.42: November 16, 2023
 * * Bug Fixes!
 * ** 'origin' variable was not working properly for <JS On Expire State>
 *    JavaScript notetag. Should now be working properly. Fix made by Irina.
 * 
 * Version 1.41: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevented <Max Turns: x> for states from working due to
 *    one of the recent updates. Fix made by Arisu.
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Apparently, we never put <Max Turns: x> in the help notetag section.
 *    Woops... It's there now.
 * 
 * Version 1.40: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug involving the "Item Cost" skill cost type found in the Plugin
 *    Parameters when involving consumable items.
 * *** If you want to acquire these settings for an already-existing project,
 *     do either of the following:
 * **** Delete the existing VisuMZ_1_SkillsStatesCore.js in the Plugin Manager
 *      list and install the newest version.
 * **** Or create a new project, install VisuMZ_1_SkillsStatesCore.js there,
 *      then copy over the "Item Cost" plugin parameters found in the "Skill
 *      Cost Types" plugin parameter settings to your current project.
 * 
 * Version 1.39: July 13, 2023
 * * Feature Update!
 * ** Updated the "Item Cost" skill cost type found in the Plugin Parameters to
 *    no longer consume items that are key items or nonconsumable.
 * *** If you want to acquire these settings for an already-existing project,
 *     do either of the following:
 * **** Delete the existing VisuMZ_1_SkillsStatesCore.js in the Plugin Manager
 *      list and install the newest version.
 * **** Or create a new project, install VisuMZ_1_SkillsStatesCore.js there,
 *      then copy over the "Item Cost" plugin parameters found in the "Skill
 *      Cost Types" plugin parameter settings to your current project.
 * 
 * Version 1.38: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added segment to <Replace x Gauge: type> in documentation:
 * *** Does not work with 'Item Cost', 'Weapon Cost', or 'Armor Cost'.
 * * New Features!
 * ** New "Skill Cost Type" and notetags added by Arisu and sponsored by FAQ.
 * *** <Item Cost: x name>
 * *** <Weapon Cost: x name>
 * *** <Armor Cost: x name>
 * **** The skill will consume items, weapons, and/or armors in order to be
 *      used. Even non-consumable items will be consumed.
 * *** <Item Cost Max/Min: x name>
 * *** <Weapon Cost Max/Min: x name>
 * *** <Armor Cost Max/Min: x name>
 * **** Sets up a maximum/minimum cost for the item, weapon, armor type costs.
 * *** <Item Cost: x% name>
 * *** <Weapon Cost: x% name>
 * *** <Armor Cost: x% name>
 * **** Alters cost rate of skills that would consume item, weapon, or armor.
 * *** <Item Cost: +/-x name>
 * *** <Weapon Cost: +/-x name>
 * *** <Armor Cost: +/-x name>
 * **** Alters flat costs of skills that would consume item, weapon, or armor.
 * *** <Replace Item name1 Cost: name2>
 * *** <Replace Weapon name1 Cost: name2>
 * *** <Replace Armor name1 Cost: name2>
 * **** Replaces item, weapon, or armor to be consumed for another type.
 * *** Projects with the Skills and States Core already installed will not have
 *     this update, but you can copy over the settings from a new project with
 *     the following steps:
 * **** Create a new project. Install Skills and States Core. Open up the new
 *      project's 'Skill Cost Types'.
 * **** Right click the 'Item Cost' option(s) and click copy.
 * **** Go to the target project's Skills and States Core's 'Skill Cost Types'
 *      plugin parameter. Paste the command where you want it to go.
 * **** Only 'Item Cost' is needed as it encompasses all three types for item,
 *      weapon, and armor costs.
 * 
 * Version 1.38: February 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.37: January 20, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused equipment to unequip if the needed equipment
 *    traits came from passive states upon learning new skills. Fix by Irina.
 * 
 * Version 1.36: December 15, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** When enemies are defeated with their entire party having a state with the
 *    <Group Defeat> notetag, then the party will gain EXP, Gold, and Drops
 *    before when they wouldn't. Update made by Irina.
 * * New Features!
 * ** New Plugin Parameter added by Irina!
 * *** Plugin Parameters > Skill Settings > Skill Type Window > Window Width
 * **** What is the desired pixel width of this window? Default: 240
 * 
 * Verison 1.35: October 13, 2022
 * * Feature Update!
 * ** Default values for Passive States > Cache > Switch Refresh? and Variable
 *    Refresh? are now set to "false" in order to prevent sudden lag spikes for
 *    those who are unfamiliar with how this setting works.
 * ** Update made by Irina.
 * 
 * Version 1.34: September 29, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Gauge Settings
 * **** These settings allow you to make minor tweaks to how the gauges look
 *      ranging from the color used for the labels to the outline types used
 *      for the values.
 * 
 * Version 1.33: August 11, 2022
 * * Bug Fixes!
 * ** Fixed a crash that occurs when performing a custom action sequence
 *    without a skill attached to it. Fix made by Olivia.
 * 
 * Version 1.32: June 16, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Passive State Settings > Cache > Switch Refresh?
 * *** Plugin Parameters > Passive State Settings > Cache > Variable Refresh?
 * **** Refresh all battle members when switches/variables are changed in
 *      battle?
 * **** This is primarily used for passive state conditions involve parameters
 *      that do not update due to cached data until a refresh occurs.
 * **** If this is on, do not spam Switch/Variable changes during battle in
 *      order to prevent lag spikes.
 * 
 * Version 1.31: April 28, 2022
 * * Bug Fixes!
 * ** Custom Slip Damage JS is now totalled correctly into regular slip damage
 *    totals for damage popups. Fix made by Olivia.
 * 
 * Version 1.30: April 14, 2022
 * * Feature Update!
 * ** Changed the state data removal timing to be after JS notetag effects
 *    take place in order for data such as origin data to remain intact. Update
 *    made by Irina.
 * 
 * Version 1.29: March 31, 2022
 * * Bug Fixes!
 * ** Fixed an error with <State x Category Remove: y> not countaing correctly
 *    unless the state count matched the exact amount. The notetag effect
 *    should work properly now. Fix made by Olivia.
 * 
 * Version 1.28: March 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** <State x Category Remove: All> updated to allow multiple cases in a
 *    single notebox. Updated by Arisu.
 * * New Features!
 * ** New Notetag added by Arisu and sponsored by Archeia!
 * *** <Remove Other x States>
 * **** When the state with this notetag is added, remove other 'x' category
 *      states from the battler (except for the state being added).
 * **** Useful for thing state types like stances and forms that there is
 *      usually only one active at a time.
 * 
 * Version 1.27: January 27, 2022
 * * Bug Fixes!
 * ** Custom JS Slip Damage/Healing values should now be recalculated on
 *    demand. Fix made by Olivia.
 * 
 * Version 1.26: January 20, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Conditional Passive Bypass check is now stronger to prevent even more
 *    infinite loops from happening. Update made by Olivia.
 * * New Features!
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > State Settings > General > Turn End on Map
 * **** Update any state and buff turns on the map after this many steps.
 * **** Use 0 to disable.
 * 
 * Version 1.25: November 11, 2021
 * * Bug Fixes!
 * ** Hidden skill notetags should no longer crash upon not detecting actors
 *    for learned skills. Fix made by Olivia.
 * 
 * Version 1.24: November 4, 2021
 * * Documentation Update!
 * ** Added section: "Slip Damage Popup Clarification"
 * *** Slip Damage popups only show one popup for HP, MP, and TP each and it is
 *     the grand total of all the states and effects combined regardless of the
 *     number of states and effects on a battler. This is how it is in vanilla
 *     RPG Maker MZ and this is how we intend for it to be with the VisuStella
 *     MZ library.
 * *** This is NOT a bug!
 * *** The reason we are not changing this is because it does not properly
 *     relay information to the player accurately. When multiple popups appear,
 *     players only have roughly a second and a half to calculate it all for
 *     any form of information takeaway. We feel it is better suited for the
 *     player's overall convenience to show a cummulative change and steer the
 *     experience towards a more positive one.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.23: September 17, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.3.3 compatibility.
 * *** Updated how gauges are drawn.
 * *** Skill Cost Types Plugin Parameters need to be updated for those who want
 *     the updated gauges. This can be done easily with the following steps:
 * **** Step 1: Create a new project.
 * **** Step 2: Install Skills and States Core version 1.23 into it.
 * **** Step 3: Copy the Plugin Parameter Settings for "Skill Cost Types".
 * **** Step 4: Return back to your original project.
 * **** Step 5: Paste Plugin Parameter Settings on top of "Skill Cost Types".
 * 
 * Version 1.22: August 6, 2021
 * * Documentation Update!
 * ** "Action End Removal for States" under Major Updates is changed to:
 * *** If your Plugin Parameter settings for "Action End Update" are enabled,
 *     then "Action End" has been updated so that it actually applies per
 *     action used instead of just being at the start of a battler's action
 *     set.
 * *** However, there are side effects to this: if a state has the "Cannot
 *     Move" restriction along with the "Action End" removal timing, then
 *     unsurprisingly, the state will never wear off because it's now based on
 *     actual actions ending. To offset this and remove confusion, "Action End"
 *     auto-removal timings for states with "Cannot Move" restrictions will be
 *     turned into "Turn End" auto-removal timings while the "Action End
 *     Update" is enabled.
 * *** This automatic change won't make it behave like an "Action End" removal
 *     timing would, but it's better than completely softlocking a battler.
 * * Feature Update!
 * ** Those using "Cannot Move" states with "Action End" auto-removal will now
 *    have be automatically converted into "Turn End" auto-removal if the
 *    plugin parameter "Action End Update" is set to true. Update by Irina.
 * 
 * Version 1.21: July 30, 2021
 * * Documentation Update!
 * ** Expanded "Action End Removal for States" section in Major Changes.
 * *** These changes have been in effect since Version 1.07 but have not been
 *     explained in excess detail in the documentation since.
 * **** Action End has been updated so that it actually applies per action used
 *      instead of just being at the start of a battler's action set. However,
 *      there are side effects to this: if a state has the "Cannot Move"
 *      restriction along with the "Action End" removal timing, then
 *      unsurprisingly, the state will never wear off because it's now based on
 *      actual actions ending. There are two solutions to this:
 * **** Don't make "Cannot Move" restriction states with "Action End". This is
 *      not a workaround. This is how the state removal is intended to work
 *      under the new change.
 * **** Go to the Skills & States Core Plugin Parameters, go to State
 *      Setttings, look for "Action End Update", and set it to false. You now
 *      reverted the removal timing system back to how it originally was in RPG
 *      Maker MZ's default battle system where it only updates based on an
 *      action set rather than per actual action ending.
 * 
 * Version 1.20: June 18, 2021
 * * Feature Update!
 * ** Updated automatic caching for conditional passive states to update more
 *    efficiently. Update made by Arisu.
 * 
 * Version 1.19: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.18: May 21, 2021
 * * Documentation Update
 * ** Added "Passive State Clarification" section.
 * *** As there is a lot of confusion regarding how passive states work and how
 *     people still miss the explanations found in the "Passive State Notetags"
 *     section AND the "Plugin Parameters: Passive State Settings", we are
 *     adding a third section to explain how they work.
 * *** All three sections will contain the full detailed explanation of how
 *     passive states work to clear common misconceptions about them.
 * 
 * Version 1.17: May 7, 2021
 * * Bug Fixes
 * ** State category removal is now usable outside of battle. Fix by Irina.
 * 
 * Version 1.16: April 30, 2021
 * * Bug Fixes!
 * ** When states with step removal have the <No Recover All Clear> or
 *    <No Death Clear> notetags, their step counter is no longer reset either.
 *    Fix made by Irina.
 * * New Features!
 * ** New notetag added by Arisu!
 * *** <List Name: name>
 * **** Makes the name of the skill appear different when show in the skill
 *      list. Using \V[x] as a part of the name will display that variable.
 * 
 * Version 1.15: March 19, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.14: March 12, 2021
 * * Bug Fixes!
 * ** Max HP Buff/Debuff should now display its turn counter. Fix by Yanfly.
 * * Documentation Update!
 * ** For the <JS Passive Condition>, we've added documentation on the
 *    limitations of passive conditions since they have been reported as bug
 *    reports, when in reality, they are failsafes to prevent infinite loops.
 *    Such limitations include the following:
 * *** A passive state that requires another passive state
 * *** A passive state that requires a trait effect from another state
 * *** A passive state that requires a parameter value altered by another state
 * *** A passive state that requires equipment to be worn but its equipment
 *     type access is provided by another state.
 * *** Anything else that is similar in style.
 * 
 * Version 1.13: February 26, 2021
 * * Documentation Update!
 * ** For <JS type Slip Damage> and <JS type Slip Heal> notetags, added the
 *    following notes:
 * *** When these states are applied via action effects, the slip calculations
 *     are one time calculations made upon applying and the damage is cached to
 *     be used for future on regeneration calculations.
 * *** For that reason, do not include game mechanics here such as adding
 *     states, buffs, debuffs, etc. as this notetag is meant for calculations
 *     only. Use the VisuStella Battle Core's <JS Pre-Regenerate> and
 *     <JS Post-Regenerate> notetags for game mechanics instead.
 * *** Passive states and states with the <JS Slip Refresh> notetag are exempt
 *     from the one time calculation and recalculated each regeneration phase.
 * * Feature Update!
 * ** Changed slip refresh requirements to entail <JS Slip Refresh> notetag for
 *    extra clarity. Update made by Olivia.
 * 
 * Version 1.12: February 19, 2021
 * * Feature Update
 * ** Changed the way passive state infinite stacking as a blanket coverage.
 *    Update made by Olivia.
 * 
 * Version 1.11: February 12, 2021
 * * Bug Fixes!
 * ** Added a check to prevent passive states from infinitely stacking. Fix
 *    made by Olivia.
 * 
 * Version 1.10: January 15, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Skill Settings > Background Type
 * 
 * Version 1.09: January 1, 2021
 * * Bug Fixes!
 * ** Custom JS TP slip damage and healing should now work properly.
 *    Fix made by Yanfly.
 * 
 * Version 1.08: December 25, 2020
 * * Bug Fixes!
 * ** <JS On Add State> should no longer trigger multiple times for the death
 *    state. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for updated feature(s)!
 * * Feature Update!
 * ** <No Death Clear> can now allow the affected state to be added to an
 *    already dead battler. Update made by Yanfly.
 * 
 * Version 1.07: December 18, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New notetags added by Yanfly:
 * *** <Passive Condition Multiclass: id>
 * *** <Passive Condition Multiclass: id, id, id>
 * *** <Passive Condition Multiclass: name>
 * *** <Passive Condition Multiclass: name, name, name>
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > States > General > Action End Update
 * **** States with "Action End" auto-removal will also update turns at the end
 *      of each action instead of all actions.
 * ***** Turn this off if you wish for state turn updates to function like they
 *       do by default for "Action End".
 * 
 * Version 1.06: December 4, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.05: November 15, 2020
 * * Bug Fixes!
 * ** The alignment of the Skill Type Window is now fixed and will reflect upon
 *    the default settings. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** <State x Category Remove: All> notetag added by Yanfly.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.04: September 27, 2020
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.03: September 13, 2020
 * * Bug Fixes!
 * ** <JS type Slip Damage> custom notetags now work for passive states. Fix
 *    made by Olivia.
 * ** Setting the Command Window style to "Text Only" will no longer add in
 *    the icon text codes. Bug fixed by Yanfly.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** The JS Notetags for Add, Erase, and Expire states are now fixed. Fix made
 *    by Yanfly.
 * * Documentation Update!
 * ** <Show if learned Skill: x> and <Hide if learned Skill: x> notetags have
 *    the following added to their descriptions:
 * *** This does not apply to skills added by traits on actors, classes, any
 *     equipment, or states. These are not considered learned skills. They are
 *     considered temporary skills.
 * * New Features!
 * ** Notetags added by Yanfly:
 * *** <Show if has Skill: x>
 * *** <Show if have All Skills: x,x,x>
 * *** <Show if have Any Skills: x,x,x>
 * *** <Show if has Skill: name>
 * *** <Show if have All Skills: name, name, name>
 * *** <Show if have Any Skills: name, name, name>
 * *** <Hide if has Skill: x>
 * *** <Hide if have All Skills: x,x,x>
 * *** <Hide if have Any Skills: x,x,x>
 * *** <Hide if has Skill: name>
 * *** <Hide if have All Skills: name, name, name>
 * *** <Hide if have Any Skills: name, name, name>
 * *** These have been added to remove the confusion regarding learned skills
 *     as skills added through trait effects are not considered learned skills
 *     by RPG Maker MZ.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Passive states from Elements & Status Menu Core are now functional.
 *    Fix made by Olivia.
 * * Compatibility Update
 * ** Extended functions to allow for better compatibility.
 * * Updated documentation
 * ** Explains that passive states are not directly applied and are therefore
 *    not affected by code such as "a.isStateAffected(10)".
 * ** Instead, use "a.states().includes($dataStates[10])"
 * ** "Use #rrggbb for a hex color." lines now replaced with
 *    "For a hex color, use #rrggbb with VisuMZ_1_MessageCore"
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
 * @command SkillActorPaySkillCost
 * @text Skill Cost: Emulate Actor Pay
 * @desc Target actor(s) emulates paying for skill cost.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) will pay skill cost.
 * @default ["1"]
 *
 * @arg SkillID:num
 * @text Skill ID
 * @type skill
 * @desc What is the ID of the skill to emulate paying the skill cost for?
 * @default 99
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillEnemyPaySkillCost
 * @text Skill Cost: Emulate Enemy Pay
 * @desc Target enemy(s) emulates paying for skill cost.
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy Index(es)
 * @type actr[]
 * @desc Select which enemy index(es) will pay skill cost.
 * @default ["1"]
 *
 * @arg SkillID:num
 * @text Skill ID
 * @type skill
 * @desc What is the ID of the skill to emulate paying the skill cost for?
 * @default 99
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_StateTurns
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StateTurnsActorChangeBy
 * @text State Turns: Actor State Turns Change By
 * @desc Changes actor(s) state turns by an amount.
 * Only works on states that can have turns.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg StateID:num
 * @text State ID
 * @type state
 * @desc What is the ID of the state you wish to change turns for?
 * Only works on states that can have turns.
 * @default 5
 *
 * @arg Turns:eval
 * @text Change Turns By
 * @desc How many turns should the state be changed to?
 * You may use JavaScript code.
 * @default +1
 *
 * @arg AutoAddState:eval
 * @text Auto-Add State?
 * @type boolean
 * @on Auto-Add
 * @off Don't Add
 * @desc Automatically adds state if actor(s) does not have it applied?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StateTurnsActorChangeTo
 * @text State Turns: Actor State Turns Change To
 * @desc Changes actor(s) state turns to a specific value.
 * Only works on states that can have turns.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg StateID:num
 * @text State ID
 * @type state
 * @desc What is the ID of the state you wish to change turns for?
 * Only works on states that can have turns.
 * @default 5
 *
 * @arg Turns:eval
 * @text Change Turns To
 * @desc How many turns should the state be changed to?
 * You may use JavaScript code.
 * @default 10
 *
 * @arg AutoAddState:eval
 * @text Auto-Add State?
 * @type boolean
 * @on Auto-Add
 * @off Don't Add
 * @desc Automatically adds state if actor(s) does not have it applied?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StateTurnsEnemyChangeBy
 * @text State Turns: Enemy State Turns Change By
 * @desc Changes enemy(s) state turns by an amount.
 * Only works on states that can have turns.
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy Index(es)
 * @type actr[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg StateID:num
 * @text State ID
 * @type state
 * @desc What is the ID of the state you wish to change turns for?
 * Only works on states that can have turns.
 * @default 5
 *
 * @arg Turns:eval
 * @text Change Turns By
 * @desc How many turns should the state be changed to?
 * You may use JavaScript code.
 * @default +1
 *
 * @arg AutoAddState:eval
 * @text Auto-Add State?
 * @type boolean
 * @on Auto-Add
 * @off Don't Add
 * @desc Automatically adds state if enemy(s) does not have it applied?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command StateTurnsEnemyChangeTo
 * @text State Turns: Enemy State Turns Change To
 * @desc Changes enemy(s) state turns to a specific value.
 * Only works on states that can have turns.
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy Index(es)
 * @type actr[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg StateID:num
 * @text State ID
 * @type state
 * @desc What is the ID of the state you wish to change turns for?
 * Only works on states that can have turns.
 * @default 5
 *
 * @arg Turns:eval
 * @text Change Turns To
 * @desc How many turns should the state be changed to?
 * You may use JavaScript code.
 * @default 10
 *
 * @arg AutoAddState:eval
 * @text Auto-Add State?
 * @type boolean
 * @on Auto-Add
 * @off Don't Add
 * @desc Automatically adds state if enemy(s) does not have it applied?
 * @default true
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
 * @param SkillsStatesCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Skills:struct
 * @text Skill Settings
 * @type struct<Skills>
 * @desc Adjust general skill settings here.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","SkillTypeWindow":"","CmdStyle:str":"auto","CmdTextAlign:str":"left","ListWindow":"","ListWindowCols:num":"1","ShopStatusWindow":"","ShowShopStatus:eval":"true","SkillSceneAdjustSkillList:eval":"true","SkillMenuStatusRect:func":"\"const ww = this.shopStatusWidth();\\nconst wh = this._itemWindow.height;\\nconst wx = Graphics.boxWidth - this.shopStatusWidth();\\nconst wy = this._itemWindow.y;\\nreturn new Rectangle(wx, wy, ww, wh);\"","SkillTypes":"","HiddenSkillTypes:arraynum":"[]","BattleHiddenSkillTypes:arraynum":"[]","IconStypeNorm:num":"78","IconStypeMagic:num":"79","CustomJS":"","SkillConditionJS:func":"\"// Declare Variables\\nconst skill = arguments[0];\\nconst user = this;\\nconst target = this;\\nconst a = this;\\nconst b = this;\\nlet enabled = true;\\n\\n// Perform Checks\\n\\n\\n// Return boolean\\nreturn enabled;\""}
 *
 * @param Costs:arraystruct
 * @text Skill Cost Types
 * @parent Skills:struct
 * @type struct<Cost>[]
 * @desc A list of all the skill cost types added by this plugin
 * and the code that controls them in-game.
 * @default ["{\"Name:str\":\"HP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"20\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<HP COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<HP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.mhp / 100);\\\\n}\\\\nif (note.match(/<JS HP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS HP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<HP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<HP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<HP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<HP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nif (cost <= 0) {\\\\n    return true;\\\\n} else {\\\\n    return user._hp > cost;\\\\n}\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._hp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.hp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mhp;\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.hp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.hpGaugeColor1();\\\\nconst color2 = ColorManager.hpGaugeColor2();\\\\nconst label = TextManager.hpA;\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = bitmapWidth;\\\\nconst lh = bitmapHeight;\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.hpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"MP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"23\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\ncost = Math.floor(skill.mpCost * user.mcr);\\\\nif (note.match(/<MP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.mmp / 100);\\\\n}\\\\nif (note.match(/<JS MP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS MP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<MP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<MP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<MP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<MP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn user._mp >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._mp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.mp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mmp;\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.mp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.mpGaugeColor1();\\\\nconst color2 = ColorManager.mpGaugeColor2();\\\\nconst label = TextManager.mpA;\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = bitmapWidth;\\\\nconst lh = bitmapHeight;\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.mpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"TP\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"29\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\ncost = skill.tpCost;\\\\nif (note.match(/<TP COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * user.maxTp() / 100);\\\\n}\\\\nif (note.match(/<JS TP COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS TP COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<TP COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<TP COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<TP COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<TP COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn user._tp >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\nuser._tp -= cost;\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.tp;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.maxTp();\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn user.tp;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.tpGaugeColor1();\\\\nconst color2 = ColorManager.tpGaugeColor2();\\\\nconst label = TextManager.tpA;\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Label\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = bitmapWidth;\\\\nconst lh = bitmapHeight;\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.tpColor(user);\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"Gold\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"17\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<GOLD COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<GOLD COST:[ ](\\\\\\\\d+)([%％])>/i)) {\\\\n    cost += Math.ceil(Number(RegExp.$1) * $gameParty.gold() / 100);\\\\n}\\\\nif (note.match(/<JS GOLD COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS GOLD COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<GOLD COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<GOLD COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<GOLD COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<GOLD COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn $gameParty.gold() >= cost;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\n$gameParty.loseGold(cost);\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = TextManager.currencyUnit;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '%1 %2'.format(cost, name);\\\\n\\\\n// Text: Add Icon\\\\nif (icon  > 0) {\\\\n    text += '\\\\\\\\\\\\\\\\I[%1]'.format(icon);\\\\n}\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn $gameParty.maxGold();\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn $gameParty.gold();\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\n\\\\n// Draw Label\\\\nconst label = TextManager.currencyUnit;\\\\nconst lx = 4;\\\\nconst ly = 0;\\\\nconst lw = sprite.bitmapWidth();\\\\nconst lh = sprite.bitmapHeight();\\\\nsprite.setupLabelFont();\\\\nbitmap.paintOpacity = 255;\\\\nbitmap.drawText(label, lx, ly, lw, lh, \\\\\\\"left\\\\\\\");\\\\n\\\\n// Draw Value\\\\nconst vw = sprite.bitmapWidth() - 2;\\\\nconst vh = sprite.bitmapHeight();\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.normalColor();\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"Potion\",\"Settings\":\"\",\"Icon:num\":\"176\",\"FontColor:str\":\"0\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\nif (note.match(/<POTION COST:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost += Number(RegExp.$1);\\\\n}\\\\nif (note.match(/<JS POTION COST>\\\\\\\\s*([\\\\\\\\s\\\\\\\\S]*)\\\\\\\\s*<\\\\\\\\/JS POTION COST>/i)) {\\\\n    const code = String(RegExp.$1);\\\\n    eval(code);\\\\n}\\\\n\\\\n// Apply Trait Cost Alterations\\\\nif (cost > 0) {\\\\n    const rateNote = /<POTION COST:[ ](\\\\\\\\d+\\\\\\\\.?\\\\\\\\d*)([%％])>/i;\\\\n    const rates = user.traitObjects().map((obj) => (obj && obj.note.match(rateNote) ? Number(RegExp.$1) / 100 : 1));\\\\n    const flatNote = /<POTION COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)>/i;\\\\n    const flats = user.traitObjects().map((obj) => (obj && obj.note.match(flatNote) ? Number(RegExp.$1) : 0));\\\\n    cost = rates.reduce((r, rate) => r * rate, cost);\\\\n    cost = flats.reduce((r, flat) => r + flat, cost);\\\\n    cost = Math.max(1, cost);\\\\n}\\\\n\\\\n// Set Cost Limits\\\\nif (note.match(/<POTION COST MAX:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.min(cost, Number(RegExp.$1));\\\\n}\\\\nif (note.match(/<POTION COST MIN:[ ](\\\\\\\\d+)>/i)) {\\\\n    cost = Math.max(cost, Number(RegExp.$1));\\\\n}\\\\n\\\\n// Return cost value\\\\nreturn Math.round(Math.max(0, cost));\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return Boolean\\\\nif (user.isActor() && cost > 0) {\\\\n    return $gameParty.numItems(item) >= cost;\\\\n} else {\\\\n    return true;\\\\n}\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst item = $dataItems[7];\\\\n\\\\n// Process Payment\\\\nif (user.isActor()) {\\\\n    $gameParty.loseItem(item, cost);\\\\n}\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Return Boolean\\\\nreturn cost > 0;\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = settings.Name;\\\\nconst icon = settings.Icon;\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\ntext += '×%1'.format(cost);\\\\n\\\\n// Text: Add Icon\\\\ntext += '\\\\\\\\\\\\\\\\I[%1]'.format(item.iconIndex);\\\\n\\\\n// Return text\\\\nreturn text;\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return value\\\\nreturn $gameParty.maxItems(item);\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst item = $dataItems[7];\\\\n\\\\n// Return value\\\\nreturn $gameParty.numItems(item);\\\"\",\"GaugeDrawJS:func\":\"\\\"// Declare Settings\\\\nconst color1 = ColorManager.textColor(30);\\\\nconst color2 = ColorManager.textColor(31);\\\\n\\\\n// Declare Variables\\\\nconst sprite = this;\\\\nconst settings = sprite._costSettings;\\\\nconst bitmap = sprite.bitmap;\\\\nconst user = sprite._battler;\\\\nconst item = $dataItems[7];\\\\nconst currentValue = sprite.currentDisplayedValue();\\\\nconst bitmapWidth = sprite.bitmapWidth();\\\\nconst bitmapHeight = sprite.textHeight ? sprite.textHeight() : sprite.bitmapHeight();\\\\nconst gaugeHeight = sprite.gaugeHeight();\\\\n\\\\n// Draw Gauge\\\\nconst gx = 0;\\\\nconst gy = bitmapHeight - gaugeHeight;\\\\nconst gw = bitmapWidth - gx;\\\\nconst gh = gaugeHeight;\\\\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\\\\n\\\\n// Draw Icon\\\\nconst iconIndex = item.iconIndex;\\\\nconst iconBitmap = ImageManager.loadSystem(\\\\\\\"IconSet\\\\\\\");\\\\nconst pw = ImageManager.iconWidth;\\\\nconst ph = ImageManager.iconHeight;\\\\nconst sx = (iconIndex % 16) * pw;\\\\nconst sy = Math.floor(iconIndex / 16) * ph;\\\\nbitmap.blt(iconBitmap, sx, sy, pw, ph, 0, 0, 24, 24);\\\\n\\\\n// Draw Value\\\\nconst vw = bitmapWidth - 2;\\\\nconst vh = bitmapHeight;\\\\nsprite.setupValueFont();\\\\nbitmap.textColor = ColorManager.normalColor();\\\\nbitmap.drawText(currentValue, 0, 0, vw, vh, \\\\\\\"right\\\\\\\");\\\"\"}","{\"Name:str\":\"Item Cost\",\"Settings\":\"\",\"Icon:num\":\"0\",\"FontColor:str\":\"0\",\"FontSize:num\":\"22\",\"Cost\":\"\",\"CalcJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nlet cost = 0;\\\\n\\\\n// Calculations\\\\nconst note = skill.note;\\\\ncost = {\\\\n    items: {},\\\\n    weapons: {},\\\\n    armors: {},\\\\n};\\\\n\\\\n// Gather Cost Notetags\\\\n{ // Item Costs\\\\n    const notetag = /<ITEM COST:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n    const matches = note.match(notetag);\\\\n    if (matches) {\\\\n        for (const currentMatch of matches) {\\\\n            currentMatch.match(notetag);\\\\n            const amount = Number(RegExp.$1);\\\\n            const name = String(RegExp.$2).toUpperCase().trim();\\\\n            const entry = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n            if (entry) {\\\\n                cost.items[entry.id] = amount;\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n{ // Weapon Costs\\\\n    const notetag = /<WEAPON COST:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n    const matches = note.match(notetag);\\\\n    if (matches) {\\\\n        for (const currentMatch of matches) {\\\\n            currentMatch.match(notetag);\\\\n            const amount = Number(RegExp.$1);\\\\n            const name = String(RegExp.$2).toUpperCase().trim();\\\\n            const entry = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n            if (entry) {\\\\n                cost.weapons[entry.id] = amount;\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n{ // Armor Costs\\\\n    const notetag = /<ARMOR COST:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n    const matches = note.match(notetag);\\\\n    if (matches) {\\\\n        for (const currentMatch of matches) {\\\\n            currentMatch.match(notetag);\\\\n            const amount = Number(RegExp.$1);\\\\n            const name = String(RegExp.$2).toUpperCase().trim();\\\\n            const entry = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n            if (entry) {\\\\n                cost.armors[entry.id] = amount;\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Declare Trait Objects\\\\nconst traitObjects = user.traitObjects();\\\\n\\\\n// Apply Cost Rate Modifiers\\\\nfor (const traitObject of traitObjects) {\\\\n    if (!traitObject) continue;\\\\n    const objNote = traitObject.note || '';\\\\n    { // Item Cost Rate Modifiers\\\\n        const notetag = /<ITEM COST:[ ](\\\\\\\\d+)([%％])[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const rate = Number(RegExp.$1) * 0.01;\\\\n                const name = String(RegExp.$3).toUpperCase().trim();\\\\n                const entry = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.items[entry.id]) {\\\\n                    cost.items[entry.id] = Math.ceil(cost.items[entry.id] * rate);\\\\n                    if (cost.items[entry.id] <= 0) cost.items[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Weapon Cost Rate Modifiers\\\\n        const notetag = /<WEAPON COST:[ ](\\\\\\\\d+)([%％])[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const rate = Number(RegExp.$1) * 0.01;\\\\n                const name = String(RegExp.$3).toUpperCase().trim();\\\\n                const entry = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.weapons[entry.id]) {\\\\n                    cost.weapons[entry.id] = Math.ceil(cost.weapons[entry.id] * rate);\\\\n                    if (cost.weapons[entry.id] <= 0) cost.weapons[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Armor Cost Rate Modifiers\\\\n        const notetag = /<ARMOR COST:[ ](\\\\\\\\d+)([%％])[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const rate = Number(RegExp.$1) * 0.01;\\\\n                const name = String(RegExp.$3).toUpperCase().trim();\\\\n                const entry = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.armors[entry.id]) {\\\\n                    cost.armors[entry.id] = Math.ceil(cost.armors[entry.id] * rate);\\\\n                    if (cost.armors[entry.id] <= 0) cost.armors[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Apply Flat Cost Modifiers\\\\nfor (const traitObject of traitObjects) {\\\\n    if (!traitObject) continue;\\\\n    const objNote = traitObject.note || '';\\\\n    { // Item Flat Cost Modifiers\\\\n        const notetag = /<ITEM COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const flat = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.items[entry.id]) {\\\\n                    cost.items[entry.id] += flat;\\\\n                    if (cost.items[entry.id] <= 0) cost.items[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Weapon Flat Cost Modifiers\\\\n        const notetag = /<WEAPON COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const flat = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.weapons[entry.id]) {\\\\n                    cost.weapons[entry.id] += flat;\\\\n                    if (cost.weapons[entry.id] <= 0) cost.weapons[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Armor Flat Cost Modifiers\\\\n        const notetag = /<ARMOR COST:[ ]([\\\\\\\\+\\\\\\\\-]\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const flat = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.armors[entry.id]) {\\\\n                    cost.armors[entry.id] += flat;\\\\n                    if (cost.armors[entry.id] <= 0) cost.armors[entry.id] = 0;\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Set Cost Limits\\\\n{ // Item Cost Limits\\\\n    { // Maximum Cost\\\\n        const notetag = /<ITEM COST MAX:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const max = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.items[entry.id] !== undefined) {\\\\n                    cost.items[entry.id] = Math.min(max, cost.items[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Minimum Cost\\\\n        const notetag = /<ITEM COST MIN:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const min = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.items[entry.id] !== undefined) {\\\\n                    cost.items[entry.id] = Math.max(min, cost.items[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n{ // Weapon Cost Limits\\\\n    { // Maximum Cost\\\\n        const notetag = /<WEAPON COST MAX:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const max = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.weapons[entry.id] !== undefined) {\\\\n                    cost.weapons[entry.id] = Math.min(max, cost.weapons[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Minimum Cost\\\\n        const notetag = /<WEAPON COST MIN:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const min = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.weapons[entry.id] !== undefined) {\\\\n                    cost.weapons[entry.id] = Math.max(min, cost.weapons[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n{ // Armor Cost Limits\\\\n    { // Maximum Cost\\\\n        const notetag = /<ARMOR COST MAX:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const max = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.armors[entry.id] !== undefined) {\\\\n                    cost.armors[entry.id] = Math.min(max, cost.armors[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Minimum Cost\\\\n        const notetag = /<ARMOR COST MIN:[ ](\\\\\\\\d+)[ ](.*)>/gi;\\\\n        const matches = note.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const min = Number(RegExp.$1);\\\\n                const name = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name);\\\\n                if (entry && cost.armors[entry.id] !== undefined) {\\\\n                    cost.armors[entry.id] = Math.max(min, cost.armors[entry.id]);\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Apply Replacement Costs\\\\nfor (const traitObject of traitObjects) {\\\\n    if (!traitObject) continue;\\\\n    const objNote = traitObject.note || '';\\\\n    { // Item Replacement Costs\\\\n        const notetag = /<REPLACE ITEM (.*) COST:[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const name1 = String(RegExp.$1).toUpperCase().trim();\\\\n                const name2 = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry1 = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name1);\\\\n                const entry2 = $dataItems.find(obj => obj && obj.name.toUpperCase().trim() === name2);\\\\n                if (entry1 && entry2 && cost.items[entry1.id]) {\\\\n                    cost.items[entry2.id] = cost.items[entry1.id];\\\\n                    delete cost.items[entry1.id];\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Weapon Replacement Costs\\\\n        const notetag = /<REPLACE WEAPON (.*) COST:[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const name1 = String(RegExp.$1).toUpperCase().trim();\\\\n                const name2 = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry1 = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name1);\\\\n                const entry2 = $dataWeapons.find(obj => obj && obj.name.toUpperCase().trim() === name2);\\\\n                if (entry1 && entry2 && cost.weapons[entry1.id]) {\\\\n                    cost.weapons[entry2.id] = cost.weapons[entry1.id];\\\\n                    delete cost.items[entry1.id];\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n    { // Armor Replacement Costs\\\\n        const notetag = /<REPLACE ARMOR (.*) COST:[ ](.*)>/gi;\\\\n        const matches = objNote.match(notetag);\\\\n        if (matches) {\\\\n            for (const currentMatch of matches) {\\\\n                currentMatch.match(notetag);\\\\n                const name1 = String(RegExp.$1).toUpperCase().trim();\\\\n                const name2 = String(RegExp.$2).toUpperCase().trim();\\\\n                const entry1 = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name1);\\\\n                const entry2 = $dataArmors.find(obj => obj && obj.name.toUpperCase().trim() === name2);\\\\n                if (entry1 && entry2 && cost.armors[entry1.id]) {\\\\n                    cost.armors[entry2.id] = cost.armors[entry1.id];\\\\n                    delete cost.items[entry1.id];\\\\n                }\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Return cost data\\\\nreturn cost;\\\"\",\"CanPayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Check Individual Costs\\\\n{ // Check Item Costs\\\\n    for (let id in cost.items) {\\\\n        const obj = $dataItems[id];\\\\n        if (obj) {\\\\n            const costAmount = cost.items[id];\\\\n            const ownedAmount = $gameParty.numItems(obj);\\\\n            if (costAmount > ownedAmount) return false;\\\\n        }\\\\n    }\\\\n}\\\\n{ // Check Weapon Costs\\\\n    for (let id in cost.weapons) {\\\\n        const obj = $dataWeapons[id];\\\\n        if (obj) {\\\\n            const costAmount = cost.weapons[id];\\\\n            const ownedAmount = $gameParty.numItems(obj);\\\\n            if (costAmount > ownedAmount) return false;\\\\n        }\\\\n    }\\\\n}\\\\n{ // Check Armor Costs\\\\n    for (let id in cost.armors) {\\\\n        const obj = $dataArmors[id];\\\\n        if (obj) {\\\\n            const costAmount = cost.armors[id];\\\\n            const ownedAmount = $gameParty.numItems(obj);\\\\n            if (costAmount > ownedAmount) return false;\\\\n        }\\\\n    }\\\\n}\\\\n\\\\n// Return True\\\\nreturn true;\\\"\",\"PayJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Process Payment\\\\n{ // Check Item Costs\\\\n    for (let id in cost.items) {\\\\n        const obj = $dataItems[id];\\\\n        if (obj && obj.consumable) {\\\\n            if (obj.itypeId !== 2) {\\\\n                const costAmount = cost.items[id];\\\\n                $gameParty.loseItem(obj, costAmount);\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n{ // Check Weapon Costs\\\\n    for (let id in cost.weapons) {\\\\n        const obj = $dataWeapons[id];\\\\n        if (obj) {\\\\n            const costAmount = cost.weapons[id];\\\\n            $gameParty.loseItem(obj, costAmount);\\\\n        }\\\\n    }\\\\n}\\\\n{ // Check Armor Costs\\\\n    for (let id in cost.armors) {\\\\n        const obj = $dataArmors[id];\\\\n        if (obj) {\\\\n            const costAmount = cost.armors[id];\\\\n            $gameParty.loseItem(obj, costAmount);\\\\n        }\\\\n    }\\\\n}\\\"\",\"Windows\":\"\",\"ShowJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\n\\\\n// Check Keys\\\\nconst keys = ['items', 'weapons', 'armors'];\\\\n\\\\n// Return False\\\\nreturn keys.some(key => Object.keys(cost[key]).length > 0);\\\"\",\"TextJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\nconst skill = arguments[0];\\\\nconst cost = arguments[1];\\\\nconst settings = arguments[2];\\\\nconst fontSize = settings.FontSize;\\\\nconst color = settings.FontColor;\\\\nconst name = settings.Name;\\\\nconst icon = settings.Icon;\\\\nconst keys = ['items', 'weapons', 'armors'];\\\\nlet text = '';\\\\n\\\\n// Text: Change Font Size\\\\ntext += '\\\\\\\\\\\\\\\\FS[%1]'.format(fontSize);\\\\n\\\\n// Text: Add Color\\\\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\\\\n    text += '\\\\\\\\\\\\\\\\HexColor<#%1>'.format(String(RegExp.$1));\\\\n} else {\\\\n    text += '\\\\\\\\\\\\\\\\C[%1]'.format(color);\\\\n}\\\\n\\\\n// Text: Add Cost\\\\nfor (const key of keys) {\\\\n    const database = [$dataItems, $dataWeapons, $dataArmors][keys.indexOf(key)];\\\\n    const costData = cost[key];\\\\n    const idList = Object.keys(costData).sort((a, b) => a - b);\\\\n    for (const id of idList) {\\\\n        const obj = database[id];\\\\n        const iconIndex = obj.iconIndex;\\\\n        const costAmount = costData[id];\\\\n        text += '\\\\\\\\\\\\\\\\I[%1]×%2 '.format(iconIndex, costAmount);\\\\n    }\\\\n}\\\\n\\\\n// Return text\\\\nreturn text.trim();\\\"\",\"Gauges\":\"\",\"GaugeMaxJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn 0;\\\"\",\"GaugeCurrentJS:func\":\"\\\"// Declare Variables\\\\nconst user = this;\\\\n\\\\n// Return value\\\\nreturn 0;\\\"\",\"GaugeDrawJS:func\":\"\\\"// Don't Draw Anything\\\\n// This does not work as a gauge.\\\"\"}"]
 *
 * @param Gauge:struct
 * @text Gauge Settings
 * @parent Skills:struct
 * @type struct<Gauge>
 * @desc Settings in regards to how skill cost gauges function and appear.
 * @default {"Labels":"","LabelFontMainType:str":"main","MatchLabelColor:eval":"true","MatchLabelGaugeColor:num":"2","PresetLabelGaugeColor:num":"16","LabelOutlineSolid:eval":"true","LabelOutlineWidth:num":"3","Values":"","ValueFontMainType:str":"number","ValueOutlineSolid:eval":"true","ValueOutlineWidth:num":"3"}
 *
 * @param BreakSkills
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param States:struct
 * @text State Settings
 * @type struct<States>
 * @desc Adjust general state settings here.
 * @default {"General":"","ReapplyRules:str":"greater","MaxTurns:num":"99","ActionEndUpdate:eval":"true","Turns":"","ShowTurns:eval":"true","TurnFontSize:num":"16","TurnOffsetX:num":"-4","TurnOffsetY:num":"-6","ColorNeutral:str":"0","ColorPositive:str":"24","ColorNegative:str":"27","Data":"","ShowData:eval":"true","DataFontSize:num":"12","DataOffsetX:num":"0","DataOffsetY:num":"8","CustomJS":"","onAddStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\"","onEraseStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireStateJS:func":"\"// Declare Variables\\nconst stateId = arguments[0];\\nconst origin = this.getStateOrigin(stateId);\\nconst state = $dataStates[stateId];\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\""}
 *
 * @param Buffs:struct
 * @text Buff/Debuff Settings
 * @parent States:struct
 * @type struct<Buffs>
 * @desc Adjust general buff/debuff settings here.
 * @default {"General":"","ReapplyRules:str":"greater","MaxTurns:num":"99","Stacking":"","StackBuffMax:num":"2","StackDebuffMax:num":"2","MultiplierJS:func":"\"// Declare Variables\\nconst user = this;\\nconst paramId = arguments[0];\\nconst buffLevel = arguments[1];\\nlet rate = 1;\\n\\n// Perform Calculations\\nrate += buffLevel * 0.25;\\n\\n// Return Rate\\nreturn Math.max(0, rate);\"","Turns":"","ShowTurns:eval":"true","TurnFontSize:num":"16","TurnOffsetX:num":"-4","TurnOffsetY:num":"-6","ColorBuff:str":"24","ColorDebuff:str":"27","Data":"","ShowData:eval":"false","DataFontSize:num":"12","DataOffsetX:num":"0","DataOffsetY:num":"8","CustomJS":"","onAddBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onAddDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onEraseBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onEraseDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireBuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\"","onExpireDebuffJS:func":"\"// Declare Variables\\nconst paramId = arguments[0];\\nconst modifier = this._buffs[paramId];\\nconst origin = this.getCurrentStateActiveUser();\\nconst user = this.getCurrentStateActiveUser();\\nconst target = this;\\nconst a = origin;\\nconst b = this;\\n\\n// Perform Actions\\n\""}
 *
 * @param PassiveStates:struct
 * @text Passive States
 * @parent States:struct
 * @type struct<PassiveStates>
 * @desc Adjust passive state settings here.
 * @default {"List":"","Global:arraynum":"[]","Actor:arraynum":"[]","Enemy:arraynum":"[]","CustomJS":"","PassiveConditionJS:func":"\"// Declare Variables\\nconst state = arguments[0];\\nconst stateId = state.id;\\nconst user = this;\\nconst target = this;\\nconst a = this;\\nconst b = this;\\nlet condition = true;\\n\\n// Perform Checks\\n\\n\\n// Return boolean\\nreturn condition;\""}
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
 * General Skill Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Skills:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Skill Menu Layout provided by this plugin?
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
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent SkillTypeWindow
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Skill Type Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent SkillTypeWindow
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Skill Type Window.
 * @default left
 * 
 * @param CmdWidth:num
 * @text Window Width
 * @parent SkillTypeWindow
 * @type number
 * @min 1
 * @desc What is the desired pixel width of this window?
 * Default: 240
 * @default 240
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
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Skill Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Skill Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param SkillSceneAdjustSkillList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Skill List Window in the Skill Menu if using the Shop Status Window?
 * @default true
 *
 * @param SkillSceneStatusBgType:num
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
 * @param SkillMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Shop Status Window in the Skill Menu.
 * @default "const ww = this.shopStatusWidth();\nconst wh = this._itemWindow.height;\nconst wx = Graphics.boxWidth - this.shopStatusWidth();\nconst wy = this._itemWindow.y;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param SkillTypes
 * @text Skill Types
 *
 * @param HiddenSkillTypes:arraynum
 * @text Hidden Skill Types
 * @parent SkillTypes
 * @type number[]
 * @min 1
 * @max 99
 * @desc Insert the ID's of the Skill Types you want hidden from view ingame.
 * @default []
 *
 * @param BattleHiddenSkillTypes:arraynum
 * @text Hidden During Battle
 * @parent SkillTypes
 * @type number[]
 * @min 1
 * @max 99
 * @desc Insert the ID's of the Skill Types you want hidden during battle only.
 * @default []
 *
 * @param IconStypeNorm:num
 * @text Icon: Normal Type
 * @parent SkillTypes
 * @desc Icon used for normal skill types that aren't assigned any icons.
 * @default 78
 *
 * @param IconStypeMagic:num
 * @text Icon: Magic Type
 * @parent SkillTypes
 * @desc Icon used for magic skill types that aren't assigned any icons.
 * @default 79
 *
 * @param SortSkillTypesAbc:arraynum
 * @text Sort: Alphabetical
 * @parent SkillTypes
 * @type number[]
 * @min 1
 * @max 99
 * @desc Insert the ID's of Skill Types you want sorted alphabetically.
 * @default []
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param SkillConditionJS:func
 * @text JS: Skill Conditions
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide skill condition check.
 * @default "// Declare Variables\nconst skill = arguments[0];\nconst user = this;\nconst target = this;\nconst a = this;\nconst b = this;\nlet enabled = true;\n\n// Perform Checks\n\n\n// Return boolean\nreturn enabled;"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Cost Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Cost:
 *
 * @param Name:str
 * @text Name
 * @desc A name for this Skill Cost Type.
 * @default Untitled
 *
 * @param Settings
 *
 * @param Icon:num
 * @text Icon
 * @parent Settings
 * @desc Icon used for this Skill Cost Type.
 * Use 0 for no icon.
 * @default 0
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Settings
 * @desc Text Color used to display this cost.
 * For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * @default 0
 *
 * @param FontSize:num
 * @text Font Size
 * @parent Settings
 * @type number
 * @min 1
 * @desc Font size used to display this cost.
 * @default 22
 *
 * @param Cost
 * @text Cost Processing
 *
 * @param CalcJS:func
 * @text JS: Cost Calculation
 * @parent Cost
 * @type note
 * @desc Code on how to calculate this resource cost for the skill.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nlet cost = 0;\n\n// Return cost value\nreturn Math.round(Math.max(0, cost));"
 *
 * @param CanPayJS:func
 * @text JS: Can Pay Cost?
 * @parent Cost
 * @type note
 * @desc Code on calculating whether or not the user is able to pay the cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Return Boolean\nreturn true;"
 *
 * @param PayJS:func
 * @text JS: Paying Cost
 * @parent Cost
 * @type note
 * @desc Code for if met, this is the actual process of paying of the cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Process Payment\n"
 *
 * @param Windows
 * @text Window Display
 *
 * @param ShowJS:func
 * @text JS: Show Cost?
 * @parent  Windows
 * @type note
 * @desc Code for determining if the cost is shown or not.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\n\n// Return Boolean\nreturn cost > 0;"
 *
 * @param TextJS:func
 * @text JS: Cost Text
 * @parent  Windows
 * @type note
 * @desc Code to determine the text (with Text Code support) used for the displayed cost.
 * @default "// Declare Variables\nconst user = this;\nconst skill = arguments[0];\nconst cost = arguments[1];\nconst settings = arguments[2];\nconst fontSize = settings.FontSize;\nconst color = settings.FontColor;\nconst name = settings.Name;\nconst icon = settings.Icon;\nlet text = '';\n\n// Text: Change Font Size\ntext += '\\\\FS[%1]'.format(fontSize);\n\n// Text: Add Color\nif (color.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {\n    text += '\\\\HexColor<#%1>'.format(String(RegExp.$1));\n} else {\n    text += '\\\\C[%1]'.format(color);\n}\n\n// Text: Add Cost\ntext += '%1 %2'.format(cost, name);\n\n// Text: Add Icon\nif (icon  > 0) {\n    text += '\\\\I[%1]'.format(icon);\n}\n\n// Return text\nreturn text;"
 *
 * @param Gauges
 * @text Gauge Display
 *
 * @param GaugeMaxJS:func
 * @text JS: Maximum Value
 * @parent  Gauges
 * @type note
 * @desc Code to determine the maximum value used for this Skill Cost resource for gauges.
 * @default "// Declare Variables\nconst user = this;\n\n// Return value\nreturn 0;"
 *
 * @param GaugeCurrentJS:func
 * @text JS: Current Value
 * @parent  Gauges
 * @type note
 * @desc Code to determine the current value used for this Skill Cost resource for gauges.
 * @default "// Declare Variables\nconst user = this;\n\n// Return value\nreturn 0;"
 *
 * @param GaugeDrawJS:func
 * @text JS: Draw Gauge
 * @parent  Gauges
 * @type note
 * @desc Code to determine how to draw the Skill Cost resource for this gauge type.
 * @default "// Declare Variables\nconst sprite = this;\nconst settings = sprite._costSettings;\nconst bitmap = sprite.bitmap;\nconst user = sprite._battler;\nconst currentValue = sprite.currentDisplayedValue();\n\n// Draw Gauge\nconst color1 = ColorManager.textColor(30);\nconst color2 = ColorManager.textColor(31);\nconst gx = 0;\nconst gy = sprite.bitmapHeight() - sprite.gaugeHeight();\nconst gw = sprite.bitmapWidth() - gx;\nconst gh = sprite.gaugeHeight();\nthis.drawFullGauge(color1, color2, gx, gy, gw, gh);\n\n// Draw Label\nconst label = settings.Name;\nconst lx = 4;\nconst ly = 0;\nconst lw = sprite.bitmapWidth();\nconst lh = sprite.bitmapHeight();\nsprite.setupLabelFont();\nbitmap.paintOpacity = 255;\nbitmap.drawText(label, lx, ly, lw, lh, \"left\");\n\n// Draw Value\nconst vw = sprite.bitmapWidth() - 2;\nconst vh = sprite.bitmapHeight();\nsprite.setupValueFont();\nbitmap.textColor = ColorManager.normalColor();\nbitmap.drawText(currentValue, 0, 0, vw, vh, \"right\");"
 *
 */
/* ----------------------------------------------------------------------------
 * Gauge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gauge:
 *
 * @param Labels
 *
 * @param LabelFontMainType:str
 * @text Font Type
 * @parent Labels
 * @type select
 * @option main
 * @option number
 * @desc Which font type should be used for labels?
 * @default main
 *
 * @param MatchLabelColor:eval
 * @text Match Label Color
 * @parent Labels
 * @type boolean
 * @on Match
 * @off Preset
 * @desc Match the label color to the Gauge Color being used?
 * @default true
 *
 * @param MatchLabelGaugeColor:num
 * @text Match: Gauge # ?
 * @parent MatchLabelColor:eval
 * @type number
 * @min 1
 * @max 2
 * @desc Which Gauge Color should be matched?
 * @default 2
 *
 * @param PresetLabelGaugeColor:num
 * @text Preset: Gauge Color
 * @parent MatchLabelColor:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 16
 *
 * @param LabelOutlineSolid:eval
 * @text Solid Outline
 * @parent Labels
 * @type boolean
 * @on Solid
 * @off Semi-Transparent
 * @desc Make the label outline a solid black color?
 * @default true
 *
 * @param LabelOutlineWidth:num
 * @text Outline Width
 * @parent Labels
 * @type number
 * @min 0
 * @desc What width do you wish to use for your outline?
 * Use 0 to not use an outline.
 * @default 3
 *
 * @param Values
 *
 * @param ValueFontMainType:str
 * @text Font Type
 * @parent Values
 * @type select
 * @option main
 * @option number
 * @desc Which font type should be used for values?
 * @default number
 *
 * @param ValueOutlineSolid:eval
 * @text Solid Outline
 * @parent Values
 * @type boolean
 * @on Solid
 * @off Semi-Transparent
 * @desc Make the value outline a solid black color?
 * @default true
 *
 * @param ValueOutlineWidth:num
 * @text Outline Width
 * @parent Values
 * @type number
 * @min 0
 * @desc What width do you wish to use for your outline?
 * Use 0 to not use an outline.
 * @default 3
 *
 */
/* ----------------------------------------------------------------------------
 * General State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~States:
 *
 * @param General
 *
 * @param ReapplyRules:str
 * @text Reapply Rules
 * @parent General
 * @type select
 * @option Ignore: State doesn't get added.
 * @value ignore
 * @option Reset: Turns get reset.
 * @value reset
 * @option Greater: Turns take greater value (current vs reset).
 * @value greater
 * @option Add: Turns add upon existing turns.
 * @value add
 * @desc These are the rules when reapplying states.
 * @default greater
 *
 * @param MaxTurns:num
 * @text Maximum Turns
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of turns to let states go up to.
 * This can be changed with the <Max Turns: x> notetag.
 * @default 9999
 *
 * @param ActionEndUpdate:eval
 * @text Action End Update
 * @parent General
 * @type boolean
 * @on Update Each Action
 * @off Don't Change
 * @desc States with "Action End" auto-removal will also update
 * turns at the end of each action instead of all actions.
 * @default true
 *
 * @param TurnEndOnMap:num
 * @text Turn End on Map
 * @parent General
 * @type number
 * @desc Update any state and buff turns on the map after
 * this many steps. Use 0 to disable.
 * @default 20
 *
 * @param Turns
 * @text Turn Display
 *
 * @param ShowTurns:eval
 * @text Show Turns?
 * @parent Turns
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display state turns on top of window icons and sprites?
 * @default true
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @type number
 * @min 1
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param TurnOffsetX:num
 * @text Offset X
 * @parent Turns
 * @desc Offset the X position of the turn display.
 * @default -4
 *
 * @param TurnOffsetY:num
 * @text Offset Y
 * @parent Turns
 * @desc Offset the Y position of the turn display.
 * @default -6
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param ColorNeutral:str
 * @text Turn Color: Neutral
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorPositive:str
 * @text Turn Color: Positive
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorNegative:str
 * @text Turn Color: Negative
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param Data
 * @text Data Display
 *
 * @param ShowData:eval
 * @text Show Data?
 * @parent Data
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display state data on top of window icons and sprites?
 * @default true
 *
 * @param DataFontSize:num
 * @text Data Font Size
 * @parent Data
 * @type number
 * @min 1
 * @desc Font size used for displaying state data.
 * @default 12
 *
 * @param DataOffsetX:num
 * @text Offset X
 * @parent Data
 * @desc Offset the X position of the state data display.
 * @default 0
 *
 * @param DataOffsetY:num
 * @text Offset Y
 * @parent Data
 * @desc Offset the Y position of the state data display.
 * @default 8
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param onAddStateJS:func
 * @text JS: On Add State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state is added.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseStateJS:func
 * @text JS: On Erase State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state is erased.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireStateJS:func
 * @text JS: On Expire State
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * state has expired.
 * @default "// Declare Variables\nconst stateId = arguments[0];\nconst origin = this.getStateOrigin(stateId);\nconst state = $dataStates[stateId];\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * General Buff/Debuff Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Buffs:
 *
 * @param General
 *
 * @param ReapplyRules:str
 * @text Reapply Rules
 * @parent General
 * @type select
 * @option Ignore: Buff/Debuff doesn't get added.
 * @value ignore
 * @option Reset: Turns get reset.
 * @value reset
 * @option Greater: Turns take greater value (current vs reset).
 * @value greater
 * @option Add: Turns add upon existing turns.
 * @value add
 * @desc These are the rules when reapplying buffs/debuffs.
 * @default greater
 *
 * @param MaxTurns:num
 * @text Maximum Turns
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of turns to let buffs and debuffs go up to.
 * @default 9999
 *
 * @param Stacking
 *
 * @param StackBuffMax:num
 * @text Max Stacks: Buff
 * @parent Stacking
 * @type number
 * @min 1
 * @desc Maximum number of stacks for buffs.
 * @default 2
 *
 * @param StackDebuffMax:num
 * @text Max Stacks: Debuff
 * @parent Stacking
 * @type number
 * @min 1
 * @desc Maximum number of stacks for debuffs.
 * @default 2
 *
 * @param MultiplierJS:func
 * @text JS: Buff/Debuff Rate
 * @parent Stacking
 * @type note
 * @desc Code to determine how much buffs and debuffs affect parameters.
 * @default "// Declare Variables\nconst user = this;\nconst paramId = arguments[0];\nconst buffLevel = arguments[1];\nlet rate = 1;\n\n// Perform Calculations\nrate += buffLevel * 0.25;\n\n// Return Rate\nreturn Math.max(0, rate);"
 *
 * @param Turns
 * @text Turns Display
 *
 * @param ShowTurns:eval
 * @text Show Turns?
 * @parent Turns
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display buff and debuff turns on top of window icons and sprites?
 * @default true
 *
 * @param TurnFontSize:num
 * @text Turn Font Size
 * @parent Turns
 * @type number
 * @min 1
 * @desc Font size used for displaying turns.
 * @default 16
 *
 * @param TurnOffsetX:num
 * @text Offset X
 * @parent Turns
 * @desc Offset the X position of the turn display.
 * @default -4
 *
 * @param TurnOffsetY:num
 * @text Offset Y
 * @parent Turns
 * @desc Offset the Y position of the turn display.
 * @default -6
 *
 * @param ColorBuff:str
 * @text Turn Color: Buffs
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorDebuff:str
 * @text Turn Color: Debuffs
 * @parent Turns
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param Data
 * @text Rate Display
 *
 * @param ShowData:eval
 * @text Show Rate?
 * @parent Data
 * @type boolean
 * @on Display
 * @off Hide
 * @desc Display buff and debuff rate on top of window icons and sprites?
 * @default false
 *
 * @param DataFontSize:num
 * @text Rate Font Size
 * @parent Data
 * @type number
 * @min 1
 * @desc Font size used for displaying rate.
 * @default 12
 *
 * @param DataOffsetX:num
 * @text Offset X
 * @parent Data
 * @desc Offset the X position of the rate display.
 * @default 0
 *
 * @param DataOffsetY:num
 * @text Offset Y
 * @parent Data
 * @desc Offset the Y position of the rate display.
 * @default 8
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param onAddBuffJS:func
 * @text JS: On Add Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff is added.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onAddDebuffJS:func
 * @text JS: On Add Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff is added.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseBuffJS:func
 * @text JS: On Erase Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff is erased.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onEraseDebuffJS:func
 * @text JS: On Erase Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff is erased.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireBuffJS:func
 * @text JS: On Expire Buff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * buff has expired.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 * @param onExpireDebuffJS:func
 * @text JS: On Expire Debuff
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide custom effect whenever a
 * debuff has expired.
 * @default "// Declare Variables\nconst paramId = arguments[0];\nconst modifier = this._buffs[paramId];\nconst origin = this.getCurrentStateActiveUser();\nconst user = this.getCurrentStateActiveUser();\nconst target = this;\nconst a = origin;\nconst b = this;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Passive State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PassiveStates:
 *
 * @param List
 *
 * @param Global:arraynum
 * @text Global Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect actors and enemies.
 * @default []
 *
 * @param Actor:arraynum
 * @text Actor-Only Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect actors only.
 * @default []
 *
 * @param Enemy:arraynum
 * @text Enemy Passives
 * @parent List
 * @type state[]
 * @desc A list of passive states to affect enemies only.
 * @default []
 *
 * @param Cache
 *
 * @param RefreshCacheSwitch:eval
 * @text Switch Refresh?
 * @parent Cache
 * @type boolean
 * @on Refresh
 * @off No Changes
 * @desc Refresh all battle members when switches are changed in battle?
 * @default false
 *
 * @param RefreshCacheVar:eval
 * @text Variable Refresh?
 * @parent Cache
 * @type boolean
 * @on Refresh
 * @off No Changes
 * @desc Refresh all battle members when variables are changed in battle?
 * @default false
 *
 * @param CustomJS
 * @text Global JS Effects
 *
 * @param PassiveConditionJS:func
 * @text JS: Condition Check
 * @parent CustomJS
 * @type note
 * @desc JavaScript code for a global-wide passive condition check.
 * @default "// Declare Variables\nconst state = arguments[0];\nconst stateId = state.id;\nconst user = this;\nconst target = this;\nconst a = this;\nconst b = this;\nlet condition = true;\n\n// Perform Checks\n\n\n// Return boolean\nreturn condition;"
 *
 */
//=============================================================================

var tier = tier || 0x0;
var dependencies = [];
var pluginData = $plugins.filter(function (_0x45b165) {
  return _0x45b165.status && _0x45b165.description.includes("[SkillsStatesCore]");
})[0x0];
VisuMZ.SkillsStatesCore.Settings = VisuMZ.SkillsStatesCore.Settings || {};
VisuMZ.ConvertParams = function (_0x136d25, _0x6ea40e) {
  for (const _0x4b874c in _0x6ea40e) {
    if (_0x4b874c.match(/(.*):(.*)/i)) {
      const _0x3d57f6 = String(RegExp.$1);
      const _0x2f0a2c = String(RegExp.$2).toUpperCase().trim();
      let _0x3e343b;
      let _0x4f0a0f;
      let _0x521a9a;
      switch (_0x2f0a2c) {
        case 'NUM':
          _0x3e343b = _0x6ea40e[_0x4b874c] !== '' ? Number(_0x6ea40e[_0x4b874c]) : 0x0;
          break;
        case "ARRAYNUM":
          _0x4f0a0f = _0x6ea40e[_0x4b874c] !== '' ? JSON.parse(_0x6ea40e[_0x4b874c]) : [];
          _0x3e343b = _0x4f0a0f.map(_0x410ec2 => Number(_0x410ec2));
          break;
        case 'EVAL':
          _0x3e343b = _0x6ea40e[_0x4b874c] !== '' ? eval(_0x6ea40e[_0x4b874c]) : null;
          break;
        case "ARRAYEVAL":
          _0x4f0a0f = _0x6ea40e[_0x4b874c] !== '' ? JSON.parse(_0x6ea40e[_0x4b874c]) : [];
          _0x3e343b = _0x4f0a0f.map(_0x47dd95 => eval(_0x47dd95));
          break;
        case 'JSON':
          _0x3e343b = _0x6ea40e[_0x4b874c] !== '' ? JSON.parse(_0x6ea40e[_0x4b874c]) : '';
          break;
        case 'ARRAYJSON':
          _0x4f0a0f = _0x6ea40e[_0x4b874c] !== '' ? JSON.parse(_0x6ea40e[_0x4b874c]) : [];
          _0x3e343b = _0x4f0a0f.map(_0x41c632 => JSON.parse(_0x41c632));
          break;
        case "FUNC":
          _0x3e343b = _0x6ea40e[_0x4b874c] !== '' ? new Function(JSON.parse(_0x6ea40e[_0x4b874c])) : new Function("return 0");
          break;
        case 'ARRAYFUNC':
          _0x4f0a0f = _0x6ea40e[_0x4b874c] !== '' ? JSON.parse(_0x6ea40e[_0x4b874c]) : [];
          _0x3e343b = _0x4f0a0f.map(_0x2d4bee => new Function(JSON.parse(_0x2d4bee)));
          break;
        case "STR":
          _0x3e343b = _0x6ea40e[_0x4b874c] !== '' ? String(_0x6ea40e[_0x4b874c]) : '';
          break;
        case "ARRAYSTR":
          _0x4f0a0f = _0x6ea40e[_0x4b874c] !== '' ? JSON.parse(_0x6ea40e[_0x4b874c]) : [];
          _0x3e343b = _0x4f0a0f.map(_0x216f19 => String(_0x216f19));
          break;
        case "STRUCT":
          _0x521a9a = _0x6ea40e[_0x4b874c] !== '' ? JSON.parse(_0x6ea40e[_0x4b874c]) : {};
          _0x136d25[_0x3d57f6] = {};
          VisuMZ.ConvertParams(_0x136d25[_0x3d57f6], _0x521a9a);
          continue;
        case "ARRAYSTRUCT":
          _0x4f0a0f = _0x6ea40e[_0x4b874c] !== '' ? JSON.parse(_0x6ea40e[_0x4b874c]) : [];
          _0x3e343b = _0x4f0a0f.map(_0x5de625 => VisuMZ.ConvertParams({}, JSON.parse(_0x5de625)));
          break;
        default:
          continue;
      }
      _0x136d25[_0x3d57f6] = _0x3e343b;
    }
  }
  return _0x136d25;
};
(_0x351da2 => {
  const _0x1fcadb = _0x351da2.name;
  for (const _0x233c88 of dependencies) {
    if (!Imported[_0x233c88]) {
      alert("%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.".format(_0x1fcadb, _0x233c88));
      SceneManager.exit();
      break;
    }
  }
  const _0x1184a6 = _0x351da2.description;
  if (_0x1184a6.match(/\[Version[ ](.*?)\]/i)) {
    const _0x33fc29 = Number(RegExp.$1);
    if (_0x33fc29 !== VisuMZ.SkillsStatesCore.version) {
      alert("%1's version does not match plugin's. Please update it in the Plugin Manager.".format(_0x1fcadb, _0x33fc29));
      SceneManager.exit();
    }
  }
  if (_0x1184a6.match(/\[Tier[ ](\d+)\]/i)) {
    const _0x451f45 = Number(RegExp.$1);
    if (_0x451f45 < tier) {
      alert("%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.".format(_0x1fcadb, _0x451f45, tier));
      SceneManager.exit();
    } else {
      tier = Math.max(_0x451f45, tier);
    }
  }
  VisuMZ.ConvertParams(VisuMZ.SkillsStatesCore.Settings, _0x351da2.parameters);
})(pluginData);
PluginManager.registerCommand(pluginData.name, "SkillActorPaySkillCost", _0x2fc8d7 => {
  VisuMZ.ConvertParams(_0x2fc8d7, _0x2fc8d7);
  const _0x33cfc0 = _0x2fc8d7.ActorIDs || [];
  const _0x39f7b1 = Number(_0x2fc8d7.SkillID);
  const _0x5cec4d = $dataSkills[_0x39f7b1];
  if (!_0x5cec4d) {
    return;
  }
  for (const _0x1b6c6c of _0x33cfc0) {
    const _0x4250aa = $gameActors.actor(_0x1b6c6c);
    if (!_0x4250aa) {
      continue;
    }
    _0x4250aa.paySkillCost(_0x5cec4d);
  }
});
PluginManager.registerCommand(pluginData.name, 'SkillEnemyPaySkillCost', _0x5bf1c8 => {
  VisuMZ.ConvertParams(_0x5bf1c8, _0x5bf1c8);
  const _0x1ba971 = _0x5bf1c8.EnemyIndex || [];
  const _0xcffeec = Number(_0x5bf1c8.SkillID);
  const _0x5e7bfc = $dataSkills[_0xcffeec];
  if (!_0x5e7bfc) {
    return;
  }
  for (const _0x3a395c of _0x1ba971) {
    const _0x4057da = $gameTroop.members()[_0x3a395c];
    if (!_0x4057da) {
      continue;
    }
    _0x4057da.paySkillCost(_0x5e7bfc);
  }
});
PluginManager.registerCommand(pluginData.name, "StateTurnsActorChangeBy", _0x41b2d9 => {
  VisuMZ.ConvertParams(_0x41b2d9, _0x41b2d9);
  const _0x58a760 = _0x41b2d9.ActorIDs || [];
  const _0x4574b0 = Number(_0x41b2d9.StateID);
  const _0x217683 = Number(_0x41b2d9.Turns);
  const _0x4bbbca = _0x41b2d9.AutoAddState;
  for (const _0x580955 of _0x58a760) {
    const _0x4427dd = $gameActors.actor(_0x580955);
    if (!_0x4427dd) {
      continue;
    }
    if (_0x4bbbca && !_0x4427dd.isStateAffected(_0x4574b0)) {
      _0x4427dd.addState(_0x4574b0);
      _0x4427dd.setStateTurns(_0x4574b0, _0x217683);
    } else {
      _0x4427dd.addStateTurns(_0x4574b0, _0x217683);
    }
  }
});
PluginManager.registerCommand(pluginData.name, "StateTurnsActorChangeTo", _0x4a2c18 => {
  VisuMZ.ConvertParams(_0x4a2c18, _0x4a2c18);
  const _0xad7520 = _0x4a2c18.ActorIDs || [];
  const _0x5048cd = Number(_0x4a2c18.StateID);
  const _0x4c7ace = Math.max(Number(_0x4a2c18.Turns), 0x0);
  const _0x3a17c4 = _0x4a2c18.AutoAddState;
  for (const _0x503d93 of _0xad7520) {
    const _0xca1e59 = $gameActors.actor(_0x503d93);
    if (!_0xca1e59) {
      continue;
    }
    if (_0x3a17c4 && !_0xca1e59.isStateAffected(_0x5048cd)) {
      _0xca1e59.addState(_0x5048cd);
    }
    _0xca1e59.setStateTurns(_0x5048cd, _0x4c7ace);
  }
});
PluginManager.registerCommand(pluginData.name, 'StateTurnsEnemyChangeBy', _0x1bc6c9 => {
  if (!$gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x1bc6c9, _0x1bc6c9);
  const _0x4cdbef = _0x1bc6c9.EnemyIndex || [];
  const _0x2b9c98 = Number(_0x1bc6c9.StateID);
  const _0x3264ff = Number(_0x1bc6c9.Turns);
  const _0x517430 = _0x1bc6c9.AutoAddState;
  for (const _0x2adc4e of _0x4cdbef) {
    const _0x5ec89f = $gameTroop.members()[_0x2adc4e];
    if (!_0x5ec89f) {
      continue;
    }
    if (_0x517430 && !_0x5ec89f.isStateAffected(_0x2b9c98)) {
      _0x5ec89f.addState(_0x2b9c98);
      _0x5ec89f.setStateTurns(_0x2b9c98, _0x3264ff);
    } else {
      _0x5ec89f.addStateTurns(_0x2b9c98, _0x3264ff);
    }
  }
});
PluginManager.registerCommand(pluginData.name, 'StateTurnsEnemyChangeTo', _0x407cc8 => {
  if (!$gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x407cc8, _0x407cc8);
  const _0x767008 = _0x407cc8.EnemyIndex || [];
  const _0x316802 = Number(_0x407cc8.StateID);
  const _0x1a7b69 = Math.max(Number(_0x407cc8.Turns), 0x0);
  const _0x378086 = _0x407cc8.AutoAddState;
  for (const _0x10f55c of _0x767008) {
    const _0x31e5a6 = $gameTroop.members()[_0x10f55c];
    if (!_0x31e5a6) {
      continue;
    }
    if (_0x378086 && !_0x31e5a6.isStateAffected(_0x316802)) {
      _0x31e5a6.addState(_0x316802);
    }
    _0x31e5a6.setStateTurns(_0x316802, _0x1a7b69);
  }
});
VisuMZ.SkillsStatesCore.Scene_Boot_onDatabaseLoaded = Scene_Boot.prototype.onDatabaseLoaded;
Scene_Boot.prototype.onDatabaseLoaded = function () {
  VisuMZ.SkillsStatesCore.Scene_Boot_onDatabaseLoaded.call(this);
  this.process_VisuMZ_SkillsStatesCore_Notetags();
  VisuMZ.SkillsStatesCore.CheckIncompatibleStates();
};
Scene_Boot.prototype.process_VisuMZ_SkillsStatesCore_Notetags = function () {
  if (VisuMZ.ParseAllNotetags) {
    return;
  }
  this.process_VisuMZ_SkillsStatesCore_Skill_Notetags();
  this.process_VisuMZ_SkillsStatesCore_State_Notetags();
};
Scene_Boot.prototype.process_VisuMZ_SkillsStatesCore_Skill_Notetags = function () {
  for (const _0x4a1bcd of $dataSkills) {
    if (!_0x4a1bcd) {
      continue;
    }
    VisuMZ.SkillsStatesCore.Parse_Notetags_Skill_Cost(_0x4a1bcd);
    VisuMZ.SkillsStatesCore.Parse_Notetags_Skill_Sorting(_0x4a1bcd);
    VisuMZ.SkillsStatesCore.Parse_Notetags_Skill_JS(_0x4a1bcd);
  }
};
Scene_Boot.prototype.process_VisuMZ_SkillsStatesCore_State_Notetags = function () {
  for (const _0x31a937 of $dataStates) {
    if (!_0x31a937) {
      continue;
    }
    VisuMZ.SkillsStatesCore.Parse_Notetags_State_Category(_0x31a937);
    VisuMZ.SkillsStatesCore.Parse_Notetags_State_PassiveJS(_0x31a937);
    VisuMZ.SkillsStatesCore.Parse_Notetags_State_SlipEffectJS(_0x31a937);
    VisuMZ.SkillsStatesCore.Parse_Notetags_State_ApplyRemoveLeaveJS(_0x31a937);
  }
};
VisuMZ.SkillsStatesCore.ParseSkillNotetags = VisuMZ.ParseSkillNotetags;
VisuMZ.ParseSkillNotetags = function (_0xc8669c) {
  VisuMZ.SkillsStatesCore.ParseSkillNotetags.call(this, _0xc8669c);
  VisuMZ.SkillsStatesCore.Parse_Notetags_Skill_Cost(_0xc8669c);
  VisuMZ.SkillsStatesCore.Parse_Notetags_Skill_Sorting(_0xc8669c);
  VisuMZ.SkillsStatesCore.Parse_Notetags_Skill_JS(_0xc8669c);
};
VisuMZ.SkillsStatesCore.ParseStateNotetags = VisuMZ.ParseStateNotetags;
VisuMZ.ParseStateNotetags = function (_0xa6fca2) {
  VisuMZ.SkillsStatesCore.ParseStateNotetags.call(this, _0xa6fca2);
  VisuMZ.SkillsStatesCore.Parse_Notetags_State_Category(_0xa6fca2);
  VisuMZ.SkillsStatesCore.Parse_Notetags_State_PassiveJS(_0xa6fca2);
  VisuMZ.SkillsStatesCore.Parse_Notetags_State_SlipEffectJS(_0xa6fca2);
  VisuMZ.SkillsStatesCore.Parse_Notetags_State_ApplyRemoveLeaveJS(_0xa6fca2);
};
VisuMZ.SkillsStatesCore.Parse_Notetags_Skill_Cost = function (_0x3db88b) {
  const _0x43e7c8 = _0x3db88b.note;
  if (_0x43e7c8.match(/<MP COST:[ ](\d+)>/i)) {
    _0x3db88b.mpCost = Number(RegExp.$1);
  }
  if (_0x43e7c8.match(/<TP COST:[ ](\d+)>/i)) {
    _0x3db88b.tpCost = Number(RegExp.$1);
  }
};
VisuMZ.SkillsStatesCore.Parse_Notetags_Skill_Sorting = function (_0x27ab42) {
  if (!_0x27ab42) {
    return;
  }
  _0x27ab42.sortPriority = 0x32;
  const _0x1b1436 = _0x27ab42.note || '';
  if (_0x1b1436.match(/<(?:|ID )SORT(?:|ING)[ ]PRIORITY:[ ](\d+)>/i)) {
    _0x27ab42.sortPriority = Number(RegExp.$1);
  }
};
VisuMZ.SkillsStatesCore.skillEnableJS = {};
VisuMZ.SkillsStatesCore.skillVisibleJS = {};
VisuMZ.SkillsStatesCore.Parse_Notetags_Skill_JS = function (_0x5a7d13) {
  const _0x62f28c = _0x5a7d13.note;
  if (_0x62f28c.match(/<JS SKILL ENABLE>\s*([\s\S]*)\s*<\/JS SKILL ENABLE>/i)) {
    const _0x384cbe = String(RegExp.$1);
    const _0x4ca672 = "\n            let enabled = true;\n            const user = this;\n            const target = this;\n            const a = this;\n            const b = this;\n            try {\n                %1\n            } catch (e) {\n                if ($gameTemp.isPlaytest()) console.log(e);\n            }\n            return enabled;\n        ".format(_0x384cbe);
    VisuMZ.SkillsStatesCore.skillEnableJS[_0x5a7d13.id] = new Function("skill", _0x4ca672);
  }
  if (_0x62f28c.match(/<JS SKILL VISIBLE>\s*([\s\S]*)\s*<\/JS SKILL VISIBLE>/i)) {
    const _0x2cd590 = String(RegExp.$1);
    const _0x100014 = "\n            let visible = true;\n            const user = this._actor;\n            const target = this._actor;\n            const a = this._actor;\n            const b = this._actor;\n            try {\n                %1\n            } catch (e) {\n                if ($gameTemp.isPlaytest()) console.log(e);\n            }\n            return visible;\n        ".format(_0x2cd590);
    VisuMZ.SkillsStatesCore.skillVisibleJS[_0x5a7d13.id] = new Function("skill", _0x100014);
  }
};
VisuMZ.SkillsStatesCore.Parse_Notetags_State_Category = function (_0x2c5744) {
  _0x2c5744.categories = ['ALL', "ANY"];
  const _0x4cb526 = _0x2c5744.note;
  const _0x579672 = _0x4cb526.match(/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);
  if (_0x579672) {
    for (const _0x1c7be9 of _0x579672) {
      _0x1c7be9.match(/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);
      const _0x4895c7 = String(RegExp.$1).toUpperCase().trim().split(',');
      for (const _0x152ebe of _0x4895c7) {
        _0x2c5744.categories.push(_0x152ebe.trim());
      }
    }
  }
  if (_0x4cb526.match(/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)) {
    const _0x1d7b78 = RegExp.$1.split(/[\r\n]+/);
    for (const _0x15cc11 of _0x1d7b78) {
      _0x2c5744.categories.push(_0x15cc11.toUpperCase().trim());
    }
  }
  if (_0x4cb526.match(/<POSITIVE STATE>/i)) {
    _0x2c5744.categories.push("POSITIVE");
  }
  if (_0x4cb526.match(/<NEGATIVE STATE>/i)) {
    _0x2c5744.categories.push('NEGATIVE');
  }
};
VisuMZ.SkillsStatesCore.statePassiveConditionJS = {};
VisuMZ.SkillsStatesCore.Parse_Notetags_State_PassiveJS = function (_0x274e46) {
  const _0x56afdf = _0x274e46.note;
  if (_0x56afdf.match(/<JS PASSIVE CONDITION>\s*([\s\S]*)\s*<\/JS PASSIVE CONDITION>/i)) {
    const _0x12318e = String(RegExp.$1);
    const _0x31206b = "\n            let condition = true;\n            const user = this;\n            const target = this;\n            const a = this;\n            const b = this;\n            try {\n                %1\n            } catch (e) {\n                if ($gameTemp.isPlaytest()) console.log(e);\n            }\n            return condition;\n        ".format(_0x12318e);
    VisuMZ.SkillsStatesCore.statePassiveConditionJS[_0x274e46.id] = new Function("state", _0x31206b);
  }
};
VisuMZ.SkillsStatesCore.stateHpSlipDamageJS = {};
VisuMZ.SkillsStatesCore.stateHpSlipHealJS = {};
VisuMZ.SkillsStatesCore.stateMpSlipDamageJS = {};
VisuMZ.SkillsStatesCore.stateMpSlipHealJS = {};
VisuMZ.SkillsStatesCore.stateTpSlipDamageJS = {};
VisuMZ.SkillsStatesCore.stateTpSlipHealJS = {};
VisuMZ.SkillsStatesCore.Parse_Notetags_State_SlipEffectJS = function (_0x137e60) {
  const _0x50e1b2 = _0x137e60.note;
  if (_0x50e1b2.match(/<JS HP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS HP SLIP DAMAGE>/i)) {
    const _0x34c702 = String(RegExp.$1);
    const _0x3cac5d = "\n        let %2 = 0;\n        const origin = this.getStateOrigin(stateId);\n        const state = $dataStates[stateId];\n        const user = origin;\n        const target = this;\n        const a = origin;\n        const b = this;\n        try {\n            %1\n        } catch (e) {\n            if ($gameTemp.isPlaytest()) console.log(e);\n        }\n        %2 = Math.round(Math.max(0, %2) * %3);\n        this.setStateData(stateId, '%4', %2);\n    ".format(_0x34c702, 'damage', -0x1, "slipHp");
    VisuMZ.SkillsStatesCore.stateHpSlipDamageJS[_0x137e60.id] = new Function("stateId", _0x3cac5d);
  } else {
    if (_0x50e1b2.match(/<JS HP SLIP HEAL>\s*([\s\S]*)\s*<\/JS HP SLIP HEAL>/i)) {
      const _0x3aad3f = String(RegExp.$1);
      const _0x44b679 = "\n        let %2 = 0;\n        const origin = this.getStateOrigin(stateId);\n        const state = $dataStates[stateId];\n        const user = origin;\n        const target = this;\n        const a = origin;\n        const b = this;\n        try {\n            %1\n        } catch (e) {\n            if ($gameTemp.isPlaytest()) console.log(e);\n        }\n        %2 = Math.round(Math.max(0, %2) * %3);\n        this.setStateData(stateId, '%4', %2);\n    ".format(_0x3aad3f, "heal", 0x1, 'slipHp');
      VisuMZ.SkillsStatesCore.stateHpSlipHealJS[_0x137e60.id] = new Function("stateId", _0x44b679);
    }
  }
  if (_0x50e1b2.match(/<JS MP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS MP SLIP DAMAGE>/i)) {
    const _0x3ab507 = String(RegExp.$1);
    const _0x1b09a1 = "\n        let %2 = 0;\n        const origin = this.getStateOrigin(stateId);\n        const state = $dataStates[stateId];\n        const user = origin;\n        const target = this;\n        const a = origin;\n        const b = this;\n        try {\n            %1\n        } catch (e) {\n            if ($gameTemp.isPlaytest()) console.log(e);\n        }\n        %2 = Math.round(Math.max(0, %2) * %3);\n        this.setStateData(stateId, '%4', %2);\n    ".format(_0x3ab507, "damage", -0x1, 'slipMp');
    VisuMZ.SkillsStatesCore.stateMpSlipDamageJS[_0x137e60.id] = new Function("stateId", _0x1b09a1);
  } else {
    if (_0x50e1b2.match(/<JS MP SLIP HEAL>\s*([\s\S]*)\s*<\/JS MP SLIP HEAL>/i)) {
      const _0x5e0061 = String(RegExp.$1);
      const _0x5003e1 = "\n        let %2 = 0;\n        const origin = this.getStateOrigin(stateId);\n        const state = $dataStates[stateId];\n        const user = origin;\n        const target = this;\n        const a = origin;\n        const b = this;\n        try {\n            %1\n        } catch (e) {\n            if ($gameTemp.isPlaytest()) console.log(e);\n        }\n        %2 = Math.round(Math.max(0, %2) * %3);\n        this.setStateData(stateId, '%4', %2);\n    ".format(_0x5e0061, 'heal', 0x1, "slipMp");
      VisuMZ.SkillsStatesCore.stateMpSlipHealJS[_0x137e60.id] = new Function("stateId", _0x5003e1);
    }
  }
  if (_0x50e1b2.match(/<JS TP SLIP DAMAGE>\s*([\s\S]*)\s*<\/JS TP SLIP DAMAGE>/i)) {
    const _0x354192 = String(RegExp.$1);
    const _0x1d995e = "\n        let %2 = 0;\n        const origin = this.getStateOrigin(stateId);\n        const state = $dataStates[stateId];\n        const user = origin;\n        const target = this;\n        const a = origin;\n        const b = this;\n        try {\n            %1\n        } catch (e) {\n            if ($gameTemp.isPlaytest()) console.log(e);\n        }\n        %2 = Math.round(Math.max(0, %2) * %3);\n        this.setStateData(stateId, '%4', %2);\n    ".format(_0x354192, 'damage', -0x1, 'slipTp');
    VisuMZ.SkillsStatesCore.stateTpSlipDamageJS[_0x137e60.id] = new Function("stateId", _0x1d995e);
  } else {
    if (_0x50e1b2.match(/<JS TP SLIP HEAL>\s*([\s\S]*)\s*<\/JS TP SLIP HEAL>/i)) {
      const _0x4ee76a = String(RegExp.$1);
      const _0x31b97c = "\n        let %2 = 0;\n        const origin = this.getStateOrigin(stateId);\n        const state = $dataStates[stateId];\n        const user = origin;\n        const target = this;\n        const a = origin;\n        const b = this;\n        try {\n            %1\n        } catch (e) {\n            if ($gameTemp.isPlaytest()) console.log(e);\n        }\n        %2 = Math.round(Math.max(0, %2) * %3);\n        this.setStateData(stateId, '%4', %2);\n    ".format(_0x4ee76a, 'heal', 0x1, 'slipTp');
      VisuMZ.SkillsStatesCore.stateTpSlipHealJS[_0x137e60.id] = new Function("stateId", _0x31b97c);
    }
  }
};
VisuMZ.SkillsStatesCore.stateAddJS = {};
VisuMZ.SkillsStatesCore.stateEraseJS = {};
VisuMZ.SkillsStatesCore.stateExpireJS = {};
VisuMZ.SkillsStatesCore.Parse_Notetags_State_ApplyRemoveLeaveJS = function (_0x1ed996) {
  const _0x2c43eb = _0x1ed996.note;
  if (_0x2c43eb.match(/<JS ON ADD STATE>\s*([\s\S]*)\s*<\/JS ON ADD STATE>/i)) {
    const _0x377b07 = String(RegExp.$1);
    const _0x51ca84 = "\n        const origin = this.getStateOrigin(stateId);\n        const state = $dataStates[stateId];\n        const user = this.getCurrentStateActiveUser();\n        const target = this;\n        const a = origin;\n        const b = this;\n        try {\n            %1\n        } catch (e) {\n            if ($gameTemp.isPlaytest()) console.log(e);\n        }\n    ".format(_0x377b07);
    VisuMZ.SkillsStatesCore.stateAddJS[_0x1ed996.id] = new Function("stateId", _0x51ca84);
  }
  if (_0x2c43eb.match(/<JS ON ERASE STATE>\s*([\s\S]*)\s*<\/JS ON ERASE STATE>/i)) {
    const _0x42ba6d = String(RegExp.$1);
    const _0x44a68c = "\n        const origin = this.getStateOrigin(stateId);\n        const state = $dataStates[stateId];\n        const user = this.getCurrentStateActiveUser();\n        const target = this;\n        const a = origin;\n        const b = this;\n        try {\n            %1\n        } catch (e) {\n            if ($gameTemp.isPlaytest()) console.log(e);\n        }\n    ".format(_0x42ba6d);
    VisuMZ.SkillsStatesCore.stateEraseJS[_0x1ed996.id] = new Function("stateId", _0x44a68c);
  }
  if (_0x2c43eb.match(/<JS ON EXPIRE STATE>\s*([\s\S]*)\s*<\/JS ON EXPIRE STATE>/i)) {
    const _0x43dd42 = String(RegExp.$1);
    const _0x26957c = "\n        const origin = this.getStateOrigin(stateId);\n        const state = $dataStates[stateId];\n        const user = this.getCurrentStateActiveUser();\n        const target = this;\n        const a = origin;\n        const b = this;\n        try {\n            %1\n        } catch (e) {\n            if ($gameTemp.isPlaytest()) console.log(e);\n        }\n    ".format(_0x43dd42);
    VisuMZ.SkillsStatesCore.stateExpireJS[_0x1ed996.id] = new Function("stateId", _0x26957c);
  }
};
VisuMZ.SkillsStatesCore.CheckIncompatibleStates = function () {
  if (!VisuMZ.SkillsStatesCore.Settings.States.ActionEndUpdate) {
    return;
  }
  for (const _0x5a3008 of $dataStates) {
    if (!_0x5a3008) {
      continue;
    }
    if (_0x5a3008.restriction === 0x4 && _0x5a3008.autoRemovalTiming === 0x1) {
      _0x5a3008.autoRemovalTiming = 0x2;
    }
  }
};
VisuMZ.SkillsStatesCore.createKeyJS = function (_0x318413, _0x3addd3) {
  if (VisuMZ.createKeyJS) {
    return VisuMZ.createKeyJS(_0x318413, _0x3addd3);
  }
  let _0x517058 = '';
  if ($dataActors.includes(_0x318413)) {
    _0x517058 = "Actor-%1-%2".format(_0x318413.id, _0x3addd3);
  }
  if ($dataClasses.includes(_0x318413)) {
    _0x517058 = "Class-%1-%2".format(_0x318413.id, _0x3addd3);
  }
  if ($dataSkills.includes(_0x318413)) {
    _0x517058 = "Skill-%1-%2".format(_0x318413.id, _0x3addd3);
  }
  if ($dataItems.includes(_0x318413)) {
    _0x517058 = 'Item-%1-%2'.format(_0x318413.id, _0x3addd3);
  }
  if ($dataWeapons.includes(_0x318413)) {
    _0x517058 = "Weapon-%1-%2".format(_0x318413.id, _0x3addd3);
  }
  if ($dataArmors.includes(_0x318413)) {
    _0x517058 = "Armor-%1-%2".format(_0x318413.id, _0x3addd3);
  }
  if ($dataEnemies.includes(_0x318413)) {
    _0x517058 = "Enemy-%1-%2".format(_0x318413.id, _0x3addd3);
  }
  if ($dataStates.includes(_0x318413)) {
    _0x517058 = "State-%1-%2".format(_0x318413.id, _0x3addd3);
  }
  return _0x517058;
};
DataManager.getClassIdWithName = function (_0x2c0738) {
  _0x2c0738 = _0x2c0738.toUpperCase().trim();
  this._classIDs = this._classIDs || {};
  if (this._classIDs[_0x2c0738]) {
    return this._classIDs[_0x2c0738];
  }
  for (const _0x240c02 of $dataClasses) {
    if (!_0x240c02) {
      continue;
    }
    let _0x4998d9 = _0x240c02.name;
    _0x4998d9 = _0x4998d9.replace(/\x1I\[(\d+)\]/gi, '');
    _0x4998d9 = _0x4998d9.replace(/\\I\[(\d+)\]/gi, '');
    this._classIDs[_0x4998d9.toUpperCase().trim()] = _0x240c02.id;
  }
  return this._classIDs[_0x2c0738] || 0x0;
};
DataManager.getSkillTypes = function (_0x49358c) {
  this._stypeIDs = this._stypeIDs || {};
  if (this._stypeIDs[_0x49358c.id]) {
    return this._stypeIDs[_0x49358c.id];
  }
  this._stypeIDs[_0x49358c.id] = [_0x49358c.stypeId];
  if (_0x49358c.note.match(/<SKILL[ ](?:TYPE|TYPES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x28af79 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    this._stypeIDs[_0x49358c.id] = this._stypeIDs[_0x49358c.id].concat(_0x28af79);
  } else {
    if (_0x49358c.note.match(/<SKILL[ ](?:TYPE|TYPES):[ ](.*)>/i)) {
      const _0x5342e8 = RegExp.$1.split(',');
      for (const _0x2746ed of _0x5342e8) {
        const _0x47521e = DataManager.getStypeIdWithName(_0x2746ed);
        if (_0x47521e) {
          this._stypeIDs[_0x49358c.id].push(_0x47521e);
        }
      }
    }
  }
  return this._stypeIDs[_0x49358c.id];
};
DataManager.getStypeIdWithName = function (_0x3a8b86) {
  _0x3a8b86 = _0x3a8b86.toUpperCase().trim();
  this._stypeIDs = this._stypeIDs || {};
  if (this._stypeIDs[_0x3a8b86]) {
    return this._stypeIDs[_0x3a8b86];
  }
  for (let _0x485eb2 = 0x1; _0x485eb2 < 0x64; _0x485eb2++) {
    if (!$dataSystem.skillTypes[_0x485eb2]) {
      continue;
    }
    let _0x1e86f1 = $dataSystem.skillTypes[_0x485eb2].toUpperCase().trim();
    _0x1e86f1 = _0x1e86f1.replace(/\x1I\[(\d+)\]/gi, '');
    _0x1e86f1 = _0x1e86f1.replace(/\\I\[(\d+)\]/gi, '');
    this._stypeIDs[_0x1e86f1] = _0x485eb2;
  }
  return this._stypeIDs[_0x3a8b86] || 0x0;
};
DataManager.getSkillIdWithName = function (_0x5fcdc1) {
  _0x5fcdc1 = _0x5fcdc1.toUpperCase().trim();
  this._skillIDs = this._skillIDs || {};
  if (this._skillIDs[_0x5fcdc1]) {
    return this._skillIDs[_0x5fcdc1];
  }
  for (const _0x51bb0f of $dataSkills) {
    if (!_0x51bb0f) {
      continue;
    }
    this._skillIDs[_0x51bb0f.name.toUpperCase().trim()] = _0x51bb0f.id;
  }
  return this._skillIDs[_0x5fcdc1] || 0x0;
};
DataManager.getStateIdWithName = function (_0x1f9033) {
  _0x1f9033 = _0x1f9033.toUpperCase().trim();
  this._stateIDs = this._stateIDs || {};
  if (this._stateIDs[_0x1f9033]) {
    return this._stateIDs[_0x1f9033];
  }
  for (const _0x5e0e90 of $dataStates) {
    if (!_0x5e0e90) {
      continue;
    }
    this._stateIDs[_0x5e0e90.name.toUpperCase().trim()] = _0x5e0e90.id;
  }
  return this._stateIDs[_0x1f9033] || 0x0;
};
DataManager.stateMaximumTurns = function (_0x16477d) {
  this._stateMaxTurns = this._stateMaxTurns || {};
  if (this._stateMaxTurns[_0x16477d]) {
    return this._stateMaxTurns[_0x16477d];
  }
  if ($dataStates[_0x16477d].note.match(/<MAX TURNS:[ ](\d+)>/i)) {
    this._stateMaxTurns[_0x16477d] = Number(RegExp.$1);
  } else {
    this._stateMaxTurns[_0x16477d] = VisuMZ.SkillsStatesCore.Settings.States.MaxTurns;
  }
  return this._stateMaxTurns[_0x16477d];
};
DataManager.getSkillChangesFromState = function (_0x415fa9) {
  if (!_0x415fa9) {
    return {};
  }
  this._skillChangesFromState = this._skillChangesFromState || {};
  if (this._skillChangesFromState[_0x415fa9.id] !== undefined) {
    return this._skillChangesFromState[_0x415fa9.id];
  }
  const _0x4eb64d = _0x415fa9.note || '';
  const _0x49e4dc = {};
  {
    const _0xb4220b = _0x4eb64d.match(/<SKILL CHANGE(?:|S):[ ](.*)[ ]>>>[ ](.*)>/gi);
    if (_0xb4220b) {
      for (const _0x20adb2 of _0xb4220b) {
        _0x20adb2.match(/<SKILL CHANGE(?:|S):[ ](.*)[ ]>>>[ ](.*)>/gi);
        let _0x3eb83c = String(RegExp.$1);
        let _0x15503e = String(RegExp.$2);
        VisuMZ.SkillsStatesCore.ParseSkillChangessIntoData(_0x49e4dc, _0x3eb83c, _0x15503e);
      }
    }
  }
  if (_0x4eb64d.match(/<SKILL CHANGE(?:|S)>\s*([\s\S]*)\s*<\/SKILL CHANGE(?:|S)>/i)) {
    const _0x29af06 = String(RegExp.$1).split(/[\r\n]+/).remove('');
    for (const _0x3ebfe2 of _0x29af06) {
      if (_0x3ebfe2.match(/(.*)[ ]>>>[ ](.*)/i)) {
        let _0xdaa728 = String(RegExp.$1);
        let _0x35fb81 = String(RegExp.$2);
        VisuMZ.SkillsStatesCore.ParseSkillChangessIntoData(_0x49e4dc, _0xdaa728, _0x35fb81);
      }
    }
  }
  this._skillChangesFromState[_0x415fa9.id] = _0x49e4dc;
  return this._skillChangesFromState[_0x415fa9.id];
};
VisuMZ.SkillsStatesCore.ParseSkillChangessIntoData = function (_0x4b9134, _0x3cd241, _0x1fa719) {
  if (/^\d+$/.test(_0x3cd241)) {
    _0x3cd241 = Number(_0x3cd241);
  } else {
    _0x3cd241 = DataManager.getSkillIdWithName(_0x3cd241);
  }
  if (/^\d+$/.test(_0x1fa719)) {
    _0x1fa719 = Number(_0x1fa719);
  } else {
    _0x1fa719 = DataManager.getSkillIdWithName(_0x1fa719);
  }
  _0x4b9134[_0x3cd241] = _0x1fa719;
};
ColorManager.getColorDataFromPluginParameters = function (_0x3af019, _0x58872b) {
  _0x58872b = String(_0x58872b);
  this._colorCache = this._colorCache || {};
  if (_0x58872b.match(/#(.*)/i)) {
    this._colorCache[_0x3af019] = '#%1'.format(String(RegExp.$1));
  } else {
    this._colorCache[_0x3af019] = this.textColor(Number(_0x58872b));
  }
  return this._colorCache[_0x3af019];
};
ColorManager.getColor = function (_0x2ad617) {
  _0x2ad617 = String(_0x2ad617);
  return _0x2ad617.match(/#(.*)/i) ? '#%1'.format(String(RegExp.$1)) : this.textColor(Number(_0x2ad617));
};
ColorManager.stateColor = function (_0x224ec5) {
  if (typeof _0x224ec5 === "number") {
    _0x224ec5 = $dataStates[_0x224ec5];
  }
  const _0x438b9f = '_stored_state-%1-color'.format(_0x224ec5.id);
  this._colorCache = this._colorCache || {};
  if (this._colorCache[_0x438b9f]) {
    return this._colorCache[_0x438b9f];
  }
  const _0x39bed1 = this.retrieveStateColor(_0x224ec5);
  return this.getColorDataFromPluginParameters(_0x438b9f, _0x39bed1);
};
ColorManager.retrieveStateColor = function (_0x3b592e) {
  const _0x1c796a = _0x3b592e.note;
  if (_0x1c796a.match(/<TURN COLOR:[ ](.*)>/i)) {
    return String(RegExp.$1);
  } else {
    if (_0x1c796a.match(/<POSITIVE STATE>/i)) {
      return VisuMZ.SkillsStatesCore.Settings.States.ColorPositive;
    } else {
      return _0x1c796a.match(/<NEGATIVE STATE>/i) ? VisuMZ.SkillsStatesCore.Settings.States.ColorNegative : VisuMZ.SkillsStatesCore.Settings.States.ColorNeutral;
    }
  }
};
ColorManager.buffColor = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_buffColor) {
    return this._colorCache._stored_buffColor;
  }
  const _0x582084 = VisuMZ.SkillsStatesCore.Settings.Buffs.ColorBuff;
  return this.getColorDataFromPluginParameters("_stored_buffColor", _0x582084);
};
ColorManager.debuffColor = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache._stored_debuffColor) {
    return this._colorCache._stored_debuffColor;
  }
  const _0x488dd3 = VisuMZ.SkillsStatesCore.Settings.Buffs.ColorDebuff;
  return this.getColorDataFromPluginParameters('_stored_debuffColor', _0x488dd3);
};
SceneManager.isSceneBattle = function () {
  return this._scene && this._scene.constructor === Scene_Battle;
};
VisuMZ.SkillsStatesCore.BattleManager_endAction = BattleManager.endAction;
BattleManager.endAction = function () {
  this.updateStatesActionEnd();
  VisuMZ.SkillsStatesCore.BattleManager_endAction.call(this);
};
BattleManager.updateStatesActionEnd = function () {
  const _0x1b3059 = VisuMZ.SkillsStatesCore.Settings.States;
  if (!_0x1b3059) {
    return;
  }
  if (_0x1b3059.ActionEndUpdate === false) {
    return;
  }
  if (!this._subject) {
    return;
  }
  this._subject.updateStatesActionEnd();
};
Game_Battler.prototype.updateStatesActionEnd = function () {
  if (BattleManager._phase !== "action") {
    return;
  }
  if (this._lastStatesActionEndFrameCount === Graphics.frameCount) {
    return;
  }
  this._lastStatesActionEndFrameCount = Graphics.frameCount;
  for (const _0x5be37b of this._states) {
    const _0x341ae1 = $dataStates[_0x5be37b];
    if (!_0x341ae1) {
      continue;
    }
    if (_0x341ae1.autoRemovalTiming !== 0x1) {
      continue;
    }
    if (this._stateTurns[_0x5be37b] > 0x0) {
      this._stateTurns[_0x5be37b]--;
    }
  }
  this.removeStatesAuto(0x1);
};
Game_BattlerBase.prototype.updateStateTurns = function () {
  const _0x5caafa = VisuMZ.SkillsStatesCore.Settings.States;
  for (const _0x434fc9 of this._states) {
    const _0x2318fb = $dataStates[_0x434fc9];
    if (_0x5caafa && _0x5caafa.ActionEndUpdate !== false) {
      if (_0x2318fb && _0x2318fb.autoRemovalTiming === 0x1) {
        continue;
      }
    }
    if (this._stateTurns[_0x434fc9] > 0x0) {
      this._stateTurns[_0x434fc9]--;
    }
  }
};
VisuMZ.SkillsStatesCore.Game_Switches_onChange = Game_Switches.prototype.onChange;
Game_Switches.prototype.onChange = function () {
  VisuMZ.SkillsStatesCore.Game_Switches_onChange.call(this);
  const _0x116929 = VisuMZ.SkillsStatesCore.Settings.PassiveStates.RefreshCacheSwitch ?? true;
  if (!_0x116929) {
    return;
  }
  if (SceneManager.isSceneBattle()) {
    for (const _0x48bf9b of BattleManager.allBattleMembers()) {
      if (_0x48bf9b) {
        _0x48bf9b.refresh();
      }
    }
  }
};
VisuMZ.SkillsStatesCore.Game_Variables_onChange = Game_Variables.prototype.onChange;
Game_Variables.prototype.onChange = function () {
  VisuMZ.SkillsStatesCore.Game_Variables_onChange.call(this);
  const _0x53b7e8 = VisuMZ.SkillsStatesCore.Settings.PassiveStates.RefreshCacheVar ?? true;
  if (!_0x53b7e8) {
    return;
  }
  if (SceneManager.isSceneBattle()) {
    for (const _0x4a34bb of BattleManager.allBattleMembers()) {
      if (_0x4a34bb) {
        _0x4a34bb.refresh();
      }
    }
  }
};
VisuMZ.SkillsStatesCore.Game_Action_applyItemUserEffect = Game_Action.prototype.applyItemUserEffect;
Game_Action.prototype.applyItemUserEffect = function (_0x241021) {
  VisuMZ.SkillsStatesCore.Game_Action_applyItemUserEffect.call(this, _0x241021);
  this.applySkillsStatesCoreEffects(_0x241021);
};
Game_Action.prototype.applySkillsStatesCoreEffects = function (_0x23e96f) {
  this.applyStateCategoryRemovalEffects(_0x23e96f);
  this.applyStateTurnManipulationEffects(_0x23e96f);
  this.applyBuffTurnManipulationEffects(_0x23e96f);
  this.applyDebuffTurnManipulationEffects(_0x23e96f);
};
VisuMZ.SkillsStatesCore.Game_Action_testApply = Game_Action.prototype.testApply;
Game_Action.prototype.testApply = function (_0x3bd903) {
  if (this.testSkillStatesCoreNotetags(_0x3bd903)) {
    return true;
  }
  return VisuMZ.SkillsStatesCore.Game_Action_testApply.call(this, _0x3bd903);
};
Game_Action.prototype.testSkillStatesCoreNotetags = function (_0xf95fd7) {
  if (!this.item()) {
    return;
  }
  const _0x3fb32e = this.item().note;
  if (_0x3fb32e.match(/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](.*)>/i)) {
    const _0x3dafed = String(RegExp.$1);
    if (_0xf95fd7.isStateCategoryAffected(_0x3dafed)) {
      return true;
    }
  }
  if (_0x3fb32e.match(/<SET STATE[ ](\d+)[ ]TURNS:[ ](.*)>/i)) {
    const _0x53bde3 = Number(RegExp.$1);
    if (_0xf95fd7.isStateAffected(_0x53bde3)) {
      return true;
    }
  } else {
    if (_0x3fb32e.match(/<SET STATE[ ](.*)[ ]TURNS:[ ](.*)>/i)) {
      const _0x5f3d79 = DataManager.getStateIdWithName(RegExp.$1);
      if (_0xf95fd7.isStateAffected(_0x5f3d79)) {
        return true;
      }
    }
  }
  return false;
};
Game_Action.prototype.applyStateCategoryRemovalEffects = function (_0x24c3d2) {
  if (_0x24c3d2.states().length <= 0x0) {
    return;
  }
  const _0x370bf3 = this.item().note;
  {
    const _0x30652c = _0x370bf3.match(/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ]ALL>/gi);
    if (_0x30652c) {
      for (const _0xfb2502 of _0x30652c) {
        _0xfb2502.match(/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ]ALL>/i);
        const _0x58cb3e = String(RegExp.$1);
        _0x24c3d2.removeStatesByCategoryAll(_0x58cb3e);
      }
    }
  }
  {
    const _0x1ae262 = _0x370bf3.match(/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](\d+)>/gi);
    if (_0x1ae262) {
      for (const _0x830f07 of _0x1ae262) {
        _0x830f07.match(/<STATE[ ](.*)[ ]CATEGORY REMOVE:[ ](\d+)>/i);
        const _0xd35d45 = String(RegExp.$1);
        const _0x2f3685 = Number(RegExp.$2);
        _0x24c3d2.removeStatesByCategory(_0xd35d45, _0x2f3685);
      }
    }
  }
};
Game_Action.prototype.applyStateTurnManipulationEffects = function (_0x2700f5) {
  const _0x175892 = this.item().note;
  const _0x396016 = _0x175892.match(/<SET STATE[ ](.*)[ ]TURNS:[ ](\d+)>/gi);
  if (_0x396016) {
    for (const _0x107fea of _0x396016) {
      let _0x1abc66 = 0x0;
      let _0x5825f5 = 0x0;
      if (_0x107fea.match(/<SET STATE[ ](\d+)[ ]TURNS:[ ](\d+)>/i)) {
        _0x1abc66 = Number(RegExp.$1);
        _0x5825f5 = Number(RegExp.$2);
      } else if (_0x107fea.match(/<SET STATE[ ](.*)[ ]TURNS:[ ](\d+)>/i)) {
        _0x1abc66 = DataManager.getStateIdWithName(RegExp.$1);
        _0x5825f5 = Number(RegExp.$2);
      }
      _0x2700f5.setStateTurns(_0x1abc66, _0x5825f5);
      this.makeSuccess(_0x2700f5);
    }
  }
  const _0x130412 = _0x175892.match(/<STATE[ ](.*)[ ]TURNS:[ ]([\+\-]\d+)>/gi);
  if (_0x130412) {
    for (const _0x52333c of _0x130412) {
      let _0x322b6b = 0x0;
      let _0x2f0759 = 0x0;
      if (_0x52333c.match(/<STATE[ ](\d+)[ ]TURNS:[ ]([\+\-]\d+)>/i)) {
        _0x322b6b = Number(RegExp.$1);
        _0x2f0759 = Number(RegExp.$2);
      } else if (_0x52333c.match(/<STATE[ ](.*)[ ]TURNS:[ ]([\+\-]\d+)>/i)) {
        _0x322b6b = DataManager.getStateIdWithName(RegExp.$1);
        _0x2f0759 = Number(RegExp.$2);
      }
      _0x2700f5.addStateTurns(_0x322b6b, _0x2f0759);
      this.makeSuccess(_0x2700f5);
    }
  }
};
Game_Action.prototype.applyBuffTurnManipulationEffects = function (_0x3499fa) {
  const _0x524569 = ['MAXHP', "MAXMP", "ATK", "DEF", "MAT", 'MDF', 'AGI', 'LUK'];
  const _0xb29231 = this.item().note;
  const _0x2cbede = _0xb29231.match(/<SET[ ](.*)[ ]BUFF TURNS:[ ](\d+)>/gi);
  if (_0x2cbede) {
    for (const _0x866a37 of _0x2cbede) {
      _0x866a37.match(/<SET[ ](.*)[ ]BUFF TURNS:[ ](\d+)>/i);
      const _0x24a398 = _0x524569.indexOf(String(RegExp.$1).toUpperCase());
      const _0x5bb3d7 = Number(RegExp.$2);
      if (_0x24a398 >= 0x0) {
        _0x3499fa.setBuffTurns(_0x24a398, _0x5bb3d7);
        this.makeSuccess(_0x3499fa);
      }
    }
  }
  const _0x1f5197 = _0xb29231.match(/<(.*)[ ]BUFF TURNS:[ ]([\+\-]\d+)>/gi);
  if (_0x1f5197) {
    for (const _0x3272a9 of _0x2cbede) {
      _0x3272a9.match(/<(.*)[ ]BUFF TURNS:[ ]([\+\-]\d+)>/i);
      const _0xb964c0 = _0x524569.indexOf(String(RegExp.$1).toUpperCase());
      const _0x5117eb = Number(RegExp.$2);
      if (_0xb964c0 >= 0x0) {
        _0x3499fa.addBuffTurns(_0xb964c0, _0x5117eb);
        this.makeSuccess(_0x3499fa);
      }
    }
  }
};
Game_Action.prototype.applyDebuffTurnManipulationEffects = function (_0x98d33) {
  const _0x32b58e = ["MAXHP", "MAXMP", "ATK", "DEF", "MAT", "MDF", "AGI", 'LUK'];
  const _0x3b067c = this.item().note;
  const _0x29d09e = _0x3b067c.match(/<SET[ ](.*)[ ]DEBUFF TURNS:[ ](\d+)>/gi);
  if (_0x29d09e) {
    for (const _0x4bf7ce of _0x29d09e) {
      _0x4bf7ce.match(/<SET[ ](.*)[ ]DEBUFF TURNS:[ ](\d+)>/i);
      const _0xa11066 = _0x32b58e.indexOf(String(RegExp.$1).toUpperCase());
      const _0x565c15 = Number(RegExp.$2);
      if (_0xa11066 >= 0x0) {
        _0x98d33.setDebuffTurns(_0xa11066, _0x565c15);
        this.makeSuccess(_0x98d33);
      }
    }
  }
  const _0x2f2f18 = _0x3b067c.match(/<(.*)[ ]DEBUFF TURNS:[ ]([\+\-]\d+)>/gi);
  if (_0x2f2f18) {
    for (const _0x13480a of _0x29d09e) {
      _0x13480a.match(/<(.*)[ ]DEBUFF TURNS:[ ]([\+\-]\d+)>/i);
      const _0x3ba31a = _0x32b58e.indexOf(String(RegExp.$1).toUpperCase());
      const _0x5bf1ae = Number(RegExp.$2);
      if (_0x3ba31a >= 0x0) {
        _0x98d33.addDebuffTurns(_0x3ba31a, _0x5bf1ae);
        this.makeSuccess(_0x98d33);
      }
    }
  }
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_initMembers = Game_BattlerBase.prototype.initMembers;
Game_BattlerBase.prototype.initMembers = function () {
  this._cache = {};
  this.initMembersSkillsStatesCore();
  VisuMZ.SkillsStatesCore.Game_BattlerBase_initMembers.call(this);
};
Game_BattlerBase.prototype.initMembersSkillsStatesCore = function () {
  this._stateRetainType = '';
  this._stateData = {};
  this._stateDisplay = {};
  this._stateOrigin = {};
};
Game_BattlerBase.prototype.checkCacheKey = function (_0x1f60a1) {
  this._cache = this._cache || {};
  return this._cache[_0x1f60a1] !== undefined;
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_refresh = Game_BattlerBase.prototype.refresh;
Game_BattlerBase.prototype.refresh = function () {
  this._cache = {};
  VisuMZ.SkillsStatesCore.Game_BattlerBase_refresh.call(this);
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_eraseState = Game_BattlerBase.prototype.eraseState;
Game_BattlerBase.prototype.eraseState = function (_0x2bcfb4) {
  let _0x1a2f60 = this.isStateAffected(_0x2bcfb4);
  VisuMZ.SkillsStatesCore.Game_BattlerBase_eraseState.call(this, _0x2bcfb4);
  if (_0x1a2f60 && !this.isStateAffected(_0x2bcfb4)) {
    this.onRemoveState(_0x2bcfb4);
  }
};
Game_BattlerBase.prototype.onRemoveState = function (_0x1207dd) {
  this.clearStateData(_0x1207dd);
  this.clearStateDisplay(_0x1207dd);
};
VisuMZ.SkillsStatesCore.Game_Battler_onBattleEnd = Game_Battler.prototype.onBattleEnd;
Game_Battler.prototype.onBattleEnd = function () {
  VisuMZ.SkillsStatesCore.Game_Battler_onBattleEnd.call(this);
  this.clearAllStateOrigins();
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_resetStateCounts = Game_BattlerBase.prototype.resetStateCounts;
Game_BattlerBase.prototype.resetStateCounts = function (_0x28ace6) {
  const _0x143835 = $dataStates[_0x28ace6];
  const _0x42cb4e = this.stateTurns(_0x28ace6);
  const _0x3830ef = this.getStateReapplyRulings(_0x143835).toLowerCase().trim();
  switch (_0x3830ef) {
    case "ignore":
      if (_0x42cb4e <= 0x0) {
        this.prepareResetStateCounts(_0x28ace6);
      }
      break;
    case "reset":
      this.prepareResetStateCounts(_0x28ace6);
      break;
    case "greater":
      this.prepareResetStateCounts(_0x28ace6);
      this._stateTurns[_0x28ace6] = Math.max(this._stateTurns[_0x28ace6], _0x42cb4e);
      break;
    case 'add':
      this.prepareResetStateCounts(_0x28ace6);
      this._stateTurns[_0x28ace6] += _0x42cb4e;
      break;
    default:
      this.prepareResetStateCounts(_0x28ace6);
      break;
  }
  if (this.isStateAffected(_0x28ace6)) {
    const _0x24026d = DataManager.stateMaximumTurns(_0x28ace6);
    this._stateTurns[_0x28ace6] = this._stateTurns[_0x28ace6].clamp(0x0, _0x24026d);
  }
};
Game_BattlerBase.prototype.prepareResetStateCounts = function (_0x39b330) {
  VisuMZ.SkillsStatesCore.Game_BattlerBase_resetStateCounts.call(this, _0x39b330);
};
Game_BattlerBase.prototype.getStateReapplyRulings = function (_0x14c121) {
  const _0x460c69 = _0x14c121.note;
  return _0x460c69.match(/<REAPPLY RULES:[ ](.*)>/i) ? String(RegExp.$1) : VisuMZ.SkillsStatesCore.Settings.States.ReapplyRules;
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_overwriteBuffTurns = Game_BattlerBase.prototype.overwriteBuffTurns;
Game_BattlerBase.prototype.overwriteBuffTurns = function (_0x32416d, _0x51a5dd) {
  const _0x1ac85b = VisuMZ.SkillsStatesCore.Settings.Buffs.ReapplyRules;
  const _0x4b1006 = this.buffTurns(_0x32416d);
  switch (_0x1ac85b) {
    case "ignore":
      if (_0x4b1006 <= 0x0) {
        this._buffTurns[_0x32416d] = _0x51a5dd;
      }
      break;
    case 'reset':
      this._buffTurns[_0x32416d] = _0x51a5dd;
      break;
    case "greater":
      this._buffTurns[_0x32416d] = Math.max(_0x4b1006, _0x51a5dd);
      break;
    case 'add':
      this._buffTurns[_0x32416d] += _0x51a5dd;
      break;
    default:
      VisuMZ.SkillsStatesCore.Game_BattlerBase_overwriteBuffTurns.call(this, _0x32416d, _0x51a5dd);
      break;
  }
  const _0x4ef0da = VisuMZ.SkillsStatesCore.Settings.Buffs.MaxTurns;
  this._buffTurns[_0x32416d] = this._buffTurns[_0x32416d].clamp(0x0, _0x4ef0da);
};
Game_BattlerBase.prototype.isGroupDefeatStateAffected = function () {
  if (this._cache.groupDefeat !== undefined) {
    return this._cache.groupDefeat;
  }
  this._cache.groupDefeat = false;
  const _0x465923 = this.states();
  for (const _0x6498d2 of _0x465923) {
    if (!_0x6498d2) {
      continue;
    }
    if (_0x6498d2.note.match(/<GROUP DEFEAT>/i)) {
      this._cache.groupDefeat = true;
      break;
    }
  }
  return this._cache.groupDefeat;
};
VisuMZ.SkillsStatesCore.Game_Unit_deadMembers = Game_Unit.prototype.deadMembers;
Game_Unit.prototype.deadMembers = function () {
  let _0x1d743e = VisuMZ.SkillsStatesCore.Game_Unit_deadMembers.call(this);
  if (BattleManager._endingBattle) {
    _0x1d743e = _0x1d743e.concat(this.members().filter(_0x424228 => _0x424228.isGroupDefeatStateAffected()));
  }
  return _0x1d743e;
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_clearStates = Game_BattlerBase.prototype.clearStates;
Game_BattlerBase.prototype.clearStates = function () {
  if (this.getStateRetainType() !== '') {
    this.clearStatesWithStateRetain();
  } else {
    VisuMZ.SkillsStatesCore.Game_BattlerBase_clearStates.call(this);
    this.initMembersSkillsStatesCore();
  }
};
Game_Actor.prototype.clearStates = function () {
  this._stateSteps = this._stateSteps || {};
  Game_Battler.prototype.clearStates.call(this);
};
Game_BattlerBase.prototype.clearStatesWithStateRetain = function () {
  const _0x2074e0 = this.states();
  for (const _0x50078a of _0x2074e0) {
    if (_0x50078a && this.canClearState(_0x50078a)) {
      this.eraseState(_0x50078a.id);
    }
  }
  this._cache = {};
};
Game_BattlerBase.prototype.canClearState = function (_0x1c5ae1) {
  const _0x489f69 = this.getStateRetainType();
  if (_0x489f69 !== '') {
    const _0x4285c1 = _0x1c5ae1.note;
    if (_0x489f69 === "death" && _0x4285c1.match(/<NO DEATH CLEAR>/i)) {
      return false;
    }
    if (_0x489f69 === "recover all" && _0x4285c1.match(/<NO RECOVER ALL CLEAR>/i)) {
      return false;
    }
  }
  return this.isStateAffected(_0x1c5ae1.id);
};
Game_BattlerBase.prototype.getStateRetainType = function () {
  return this._stateRetainType;
};
Game_BattlerBase.prototype.setStateRetainType = function (_0x2f62d4) {
  this._stateRetainType = _0x2f62d4;
};
Game_BattlerBase.prototype.clearStateRetainType = function () {
  this._stateRetainType = '';
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_die = Game_BattlerBase.prototype.die;
Game_BattlerBase.prototype.die = function () {
  this.setStateRetainType('death');
  VisuMZ.SkillsStatesCore.Game_BattlerBase_die.call(this);
  this.clearStateRetainType();
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_recoverAll = Game_BattlerBase.prototype.recoverAll;
Game_BattlerBase.prototype.recoverAll = function () {
  this.setStateRetainType("recover all");
  VisuMZ.SkillsStatesCore.Game_BattlerBase_recoverAll.call(this);
  this.clearStateRetainType();
};
Game_BattlerBase.prototype.adjustSkillCost = function (_0x58edd7, _0x151abe, _0x2c34cb) {
  return _0x151abe;
};
Game_BattlerBase.prototype.canPaySkillCost = function (_0x610854) {
  for (settings of VisuMZ.SkillsStatesCore.Settings.Costs) {
    let _0x378717 = settings.CalcJS.call(this, _0x610854);
    _0x378717 = this.adjustSkillCost(_0x610854, _0x378717, settings);
    if (!settings.CanPayJS.call(this, _0x610854, _0x378717)) {
      return false;
    }
  }
  return true;
};
Game_BattlerBase.prototype.paySkillCost = function (_0x49f886) {
  for (settings of VisuMZ.SkillsStatesCore.Settings.Costs) {
    let _0x3d5dbf = settings.CalcJS.call(this, _0x49f886);
    _0x3d5dbf = this.adjustSkillCost(_0x49f886, _0x3d5dbf, settings);
    settings.PayJS.call(this, _0x49f886, _0x3d5dbf);
  }
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_meetsSkillConditions = Game_BattlerBase.prototype.meetsSkillConditions;
Game_BattlerBase.prototype.meetsSkillConditions = function (_0x491a0e) {
  if (!_0x491a0e) {
    return false;
  }
  if (!VisuMZ.SkillsStatesCore.Game_BattlerBase_meetsSkillConditions.call(this, _0x491a0e)) {
    return false;
  }
  if (!this.checkSkillConditionsNotetags(_0x491a0e)) {
    return false;
  }
  if (!this.meetsSkillConditionsEnableJS(_0x491a0e)) {
    return false;
  }
  if (!this.meetsSkillConditionsGlobalJS(_0x491a0e)) {
    return false;
  }
  return true;
};
Game_BattlerBase.prototype.checkSkillConditionsNotetags = function (_0x55b963) {
  if (!this.checkSkillConditionsSwitchNotetags(_0x55b963)) {
    return false;
  }
  return true;
};
Game_BattlerBase.prototype.checkSkillConditionsSwitchNotetags = function (_0x4a4c48) {
  const _0x2b368d = _0x4a4c48.note;
  if (_0x2b368d.match(/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x418722 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x3174ab of _0x418722) {
      if (!$gameSwitches.value(_0x3174ab)) {
        return false;
      }
    }
    return true;
  }
  if (_0x2b368d.match(/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x3a7c19 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x5bf500 of _0x3a7c19) {
      if (!$gameSwitches.value(_0x5bf500)) {
        return false;
      }
    }
    return true;
  }
  if (_0x2b368d.match(/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x495a8c = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x5cb3be of _0x495a8c) {
      if ($gameSwitches.value(_0x5cb3be)) {
        return true;
      }
    }
    return false;
  }
  if (_0x2b368d.match(/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x3ef059 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x4820bf of _0x3ef059) {
      if (!$gameSwitches.value(_0x4820bf)) {
        return true;
      }
    }
    return false;
  }
  if (_0x2b368d.match(/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x4981b7 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x5ea367 of _0x4981b7) {
      if (!$gameSwitches.value(_0x5ea367)) {
        return true;
      }
    }
    return false;
  }
  if (_0x2b368d.match(/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x45be82 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x38d282 of _0x45be82) {
      if ($gameSwitches.value(_0x38d282)) {
        return false;
      }
    }
    return true;
  }
  return true;
};
Game_BattlerBase.prototype.meetsSkillConditionsEnableJS = function (_0xc149fc) {
  const _0x46ea64 = VisuMZ.SkillsStatesCore.skillEnableJS;
  return _0x46ea64[_0xc149fc.id] ? _0x46ea64[_0xc149fc.id].call(this, _0xc149fc) : true;
};
Game_BattlerBase.prototype.meetsSkillConditionsGlobalJS = function (_0x2508b2) {
  return VisuMZ.SkillsStatesCore.Settings.Skills.SkillConditionJS.call(this, _0x2508b2);
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_skillMpCost = Game_BattlerBase.prototype.skillMpCost;
Game_BattlerBase.prototype.skillMpCost = function (_0x56dfb0) {
  for (settings of VisuMZ.SkillsStatesCore.Settings.Costs) {
    if (settings.Name.toUpperCase() === 'MP') {
      let _0x3ee387 = settings.CalcJS.call(this, _0x56dfb0);
      _0x3ee387 = this.adjustSkillCost(_0x56dfb0, _0x3ee387, settings);
      return _0x3ee387;
    }
  }
  return VisuMZ.SkillsStatesCore.Game_BattlerBase_skillMpCost.call(this, _0x56dfb0);
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_skillTpCost = Game_BattlerBase.prototype.skillTpCost;
Game_BattlerBase.prototype.skillTpCost = function (_0x46ae29) {
  for (settings of VisuMZ.SkillsStatesCore.Settings.Costs) {
    if (settings.Name.toUpperCase() === 'TP') {
      let _0x4a4b6f = settings.CalcJS.call(this, _0x46ae29);
      _0x4a4b6f = this.adjustSkillCost(_0x46ae29, _0x4a4b6f, settings);
      return _0x4a4b6f;
    }
  }
  return VisuMZ.SkillsStatesCore.Game_BattlerBase_skillTpCost.call(this, _0x46ae29);
};
Game_BattlerBase.prototype.hasState = function (_0x3fb0d6) {
  if (typeof _0x3fb0d6 === "number") {
    _0x3fb0d6 = $dataStates[_0x3fb0d6];
  }
  return this.states().includes(_0x3fb0d6);
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_states = Game_BattlerBase.prototype.states;
Game_BattlerBase.prototype.states = function () {
  let _0x2a859e = VisuMZ.SkillsStatesCore.Game_BattlerBase_states.call(this);
  if ($gameTemp._checkingPassiveStates) {
    return _0x2a859e;
  }
  $gameTemp._checkingPassiveStates = true;
  this.addPassiveStates(_0x2a859e);
  $gameTemp._checkingPassiveStates = undefined;
  return _0x2a859e;
};
Game_BattlerBase.prototype.addPassiveStates = function (_0x2399f9) {
  const _0x49cd97 = this.passiveStates();
  for (state of _0x49cd97) {
    if (!state) {
      continue;
    }
    if (!this.isPassiveStateStackable(state) && _0x2399f9.includes(state)) {
      continue;
    }
    _0x2399f9.push(state);
  }
  if (_0x49cd97.length > 0x0) {
    _0x2399f9.sort((_0x57b57f, _0x441615) => {
      const _0x3915a3 = _0x57b57f.priority;
      const _0x4e5f63 = _0x441615.priority;
      if (_0x3915a3 !== _0x4e5f63) {
        return _0x4e5f63 - _0x3915a3;
      }
      return _0x57b57f - _0x441615;
    });
  }
};
Game_BattlerBase.prototype.isPassiveStateStackable = function (_0x30f7bd) {
  return _0x30f7bd.note.match(/<PASSIVE STACKABLE>/i);
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_traitsSet = Game_BattlerBase.prototype.traitsSet;
Game_BattlerBase.prototype.traitsSet = function (_0x206fb7) {
  this._checkingTraitsSetSkillsStatesCore = true;
  let _0x2e2e6b = VisuMZ.SkillsStatesCore.Game_BattlerBase_traitsSet.call(this, _0x206fb7);
  this._checkingTraitsSetSkillsStatesCore = undefined;
  return _0x2e2e6b;
};
Game_BattlerBase.prototype.convertPassiveStates = function () {
  let _0x287947 = [];
  this._passiveStateResults = this._passiveStateResults || {};
  for (;;) {
    _0x287947 = [];
    let _0x317707 = true;
    for (const _0x4c5639 of this._cache.passiveStates) {
      const _0x23106e = $dataStates[_0x4c5639];
      if (!_0x23106e) {
        continue;
      }
      let _0x96a6ab = this.meetsPassiveStateConditions(_0x23106e);
      if (this._passiveStateResults[_0x4c5639] !== _0x96a6ab) {
        _0x317707 = false;
        this._passiveStateResults[_0x4c5639] = _0x96a6ab;
      }
      if (!_0x96a6ab) {
        continue;
      }
      _0x287947.push(_0x23106e);
    }
    if (_0x317707) {
      break;
    } else {
      if (!this._checkingTraitsSetSkillsStatesCore) {
        this.refresh();
      }
      this.createPassiveStatesCache();
    }
  }
  return _0x287947;
};
Game_BattlerBase.prototype.meetsPassiveStateConditions = function (_0x3f1ffb) {
  if (!this.meetsPassiveStateConditionClasses(_0x3f1ffb)) {
    return false;
  }
  if (!this.meetsPassiveStateConditionSwitches(_0x3f1ffb)) {
    return false;
  }
  if (!this.meetsPassiveStateConditionJS(_0x3f1ffb)) {
    return false;
  }
  if (!this.meetsPassiveStateGlobalConditionJS(_0x3f1ffb)) {
    return false;
  }
  return true;
};
Game_BattlerBase.prototype.meetsPassiveStateConditionClasses = function (_0x5a16df) {
  return true;
};
Game_Actor.prototype.meetsPassiveStateConditionClasses = function (_0x1917b7) {
  const _0x740c43 = DataManager.getPassiveStateConditionClassesData(_0x1917b7);
  if (_0x740c43.currentClass.length > 0x0) {
    const _0x1bc737 = _0x740c43.currentClass;
    if (!_0x1bc737.includes(this.currentClass())) {
      return false;
    }
  }
  if (_0x740c43.multiClass.length > 0x0) {
    const _0x318ae7 = _0x740c43.multiClass;
    let _0x5c6079 = [this.currentClass()];
    if (Imported.VisuMZ_2_ClassChangeSystem && this.multiclasses) {
      _0x5c6079 = this.multiclasses();
    }
    if (_0x318ae7.filter(_0x2a03c2 => _0x5c6079.includes(_0x2a03c2)).length <= 0x0) {
      return false;
    }
  }
  return Game_BattlerBase.prototype.meetsPassiveStateConditionClasses.call(this, _0x1917b7);
};
DataManager.getPassiveStateConditionClassesData = function (_0x20c6c1) {
  const _0x50e348 = {
    'currentClass': [],
    'multiClass': []
  };
  if (!_0x20c6c1) {
    return _0x50e348;
  }
  this._cache_getPassiveStateConditionClassesData = this._cache_getPassiveStateConditionClassesData || {};
  if (this._cache_getPassiveStateConditionClassesData[_0x20c6c1.id] !== undefined) {
    return this._cache_getPassiveStateConditionClassesData[_0x20c6c1.id];
  }
  const _0x2ebeec = _0x20c6c1.note || '';
  if (_0x2ebeec.match(/<PASSIVE CONDITION[ ](?:CLASS|CLASSES):[ ](.*)>/i)) {
    const _0x502acd = String(RegExp.$1).split(',').map(_0x20ad05 => _0x20ad05.trim());
    _0x50e348.currentClass = VisuMZ.SkillsStatesCore.ParseClassIDs(_0x502acd);
  }
  if (_0x2ebeec.match(/<PASSIVE CONDITION[ ](?:MULTICLASS|MULTICLASSES):[ ](.*)>/i)) {
    const _0x525f41 = String(RegExp.$1).split(',').map(_0x210753 => _0x210753.trim());
    _0x50e348.multiClass = VisuMZ.SkillsStatesCore.ParseClassIDs(_0x525f41);
  }
  this._cache_getPassiveStateConditionClassesData[_0x20c6c1.id] = _0x50e348;
  return this._cache_getPassiveStateConditionClassesData[_0x20c6c1.id];
};
VisuMZ.SkillsStatesCore.ParseClassIDs = function (_0x22be5a) {
  const _0xbd560b = [];
  for (let _0x262554 of _0x22be5a) {
    _0x262554 = (String(_0x262554) || '').trim();
    const _0x24e7de = /^\d+$/.test(_0x262554);
    if (_0x24e7de) {
      _0xbd560b.push(Number(_0x262554));
    } else {
      _0xbd560b.push(DataManager.getClassIdWithName(_0x262554));
    }
  }
  return _0xbd560b.map(_0x49b447 => $dataClasses[Number(_0x49b447)]).remove(null);
};
Game_BattlerBase.prototype.meetsPassiveStateConditionSwitches = function (_0x621c21) {
  const _0x36d72f = DataManager.getPassiveStateConditionSwitchData(_0x621c21);
  if (_0x36d72f.allSwitchOn && _0x36d72f.allSwitchOn.length > 0x0) {
    const _0x3abd1b = _0x36d72f.allSwitchOn;
    for (const _0x2706fc of _0x3abd1b) {
      if (!$gameSwitches.value(_0x2706fc)) {
        return false;
      }
    }
  }
  if (_0x36d72f.anySwitchOn && _0x36d72f.anySwitchOn.length > 0x0) {
    const _0x107b5c = _0x36d72f.anySwitchOn;
    let _0x4b02a7 = true;
    for (const _0x4a7bce of _0x107b5c) {
      if ($gameSwitches.value(_0x4a7bce)) {
        _0x4b02a7 = false;
        break;
      }
    }
    if (_0x4b02a7) {
      return false;
    }
  }
  if (_0x36d72f.allSwitchOff && _0x36d72f.allSwitchOff.length > 0x0) {
    const _0x2ac3b2 = _0x36d72f.allSwitchOff;
    for (const _0x59ad0d of _0x2ac3b2) {
      if ($gameSwitches.value(_0x59ad0d)) {
        return false;
      }
    }
  }
  if (_0x36d72f.anySwitchOff && _0x36d72f.anySwitchOff.length > 0x0) {
    const _0x335cd5 = _0x36d72f.anySwitchOff;
    let _0x569a3c = true;
    for (const _0x170bf4 of _0x335cd5) {
      if (!$gameSwitches.value(_0x170bf4)) {
        _0x569a3c = false;
        break;
      }
    }
    if (_0x569a3c) {
      return false;
    }
  }
  return true;
};
DataManager.getPassiveStateConditionSwitchData = function (_0x565f94) {
  let _0x31530a = {
    'allSwitchOn': [],
    'anySwitchOn': [],
    'allSwitchOff': [],
    'anySwitchOff': []
  };
  if (!_0x565f94) {
    return _0x31530a;
  }
  const _0x3f5433 = _0x565f94.id;
  this._cache_getPassiveStateConditionSwitchData = this._cache_getPassiveStateConditionSwitchData || {};
  if (this._cache_getPassiveStateConditionSwitchData[_0x3f5433] !== undefined) {
    return this._cache_getPassiveStateConditionSwitchData[_0x3f5433];
  }
  const _0x15502c = _0x565f94.note || '';
  if (_0x15502c.match(/PASSIVE CONDITION(?:| ALL)[ ](?:SWITCH|SWITCHES)[ ]ON:[ ](.*)>/i)) {
    _0x31530a.allSwitchOn = String(RegExp.$1).split(',').map(_0x3d4666 => Number(_0x3d4666));
  }
  if (_0x15502c.match(/PASSIVE CONDITION ANY[ ](?:SWITCH|SWITCHES)[ ]ON:[ ](.*)>/i)) {
    _0x31530a.anySwitchOn = String(RegExp.$1).split(',').map(_0x43ff94 => Number(_0x43ff94));
  }
  if (_0x15502c.match(/PASSIVE CONDITION(?:| ALL)[ ](?:SWITCH|SWITCHES)[ ]OFF:[ ](.*)>/i)) {
    _0x31530a.allSwitchOff = String(RegExp.$1).split(',').map(_0x409bcc => Number(_0x409bcc));
  }
  if (_0x15502c.match(/PASSIVE CONDITION ANY[ ](?:SWITCH|SWITCHES)[ ]OFF:[ ](.*)>/i)) {
    _0x31530a.anySwitchOff = String(RegExp.$1).split(',').map(_0x51dabe => Number(_0x51dabe));
  }
  this._cache_getPassiveStateConditionSwitchData[_0x3f5433] = _0x31530a;
  return this._cache_getPassiveStateConditionSwitchData[_0x3f5433];
};
Game_BattlerBase.prototype.meetsPassiveStateConditionJS = function (_0x13cc6b) {
  const _0x199a8f = VisuMZ.SkillsStatesCore.statePassiveConditionJS;
  if (_0x199a8f[_0x13cc6b.id] && !_0x199a8f[_0x13cc6b.id].call(this, _0x13cc6b)) {
    return false;
  }
  return true;
};
Game_BattlerBase.prototype.meetsPassiveStateGlobalConditionJS = function (_0x3d4b10) {
  return VisuMZ.SkillsStatesCore.Settings.PassiveStates.PassiveConditionJS.call(this, _0x3d4b10);
};
Game_BattlerBase.prototype.passiveStates = function () {
  if (this.checkCacheKey("passiveStates")) {
    return this.convertPassiveStates();
  }
  if (this._checkingVisuMzPassiveStateObjects) {
    return [];
  }
  this._checkingVisuMzPassiveStateObjects = true;
  this.createPassiveStatesCache();
  this._checkingVisuMzPassiveStateObjects = undefined;
  return this.convertPassiveStates();
};
Game_BattlerBase.prototype.createPassiveStatesCache = function () {
  this._checkingVisuMzPassiveStateObjects = true;
  this._cache.passiveStates = [];
  this.addPassiveStatesFromOtherPlugins();
  this.addPassiveStatesByNotetag();
  this.addPassiveStatesByPluginParameters();
  this._cache.passiveStates = this._cache.passiveStates.sort((_0x41a4ed, _0x5c1a4a) => _0x41a4ed - _0x5c1a4a);
  this._checkingVisuMzPassiveStateObjects = undefined;
};
Game_BattlerBase.prototype.addPassiveStatesFromOtherPlugins = function () {
  if (Imported.VisuMZ_1_ElementStatusCore) {
    this.addPassiveStatesTraitSets();
  }
};
Game_BattlerBase.prototype.passiveStateObjects = function () {
  return [];
};
Game_BattlerBase.prototype.addPassiveStatesByNotetag = function () {
  const _0x2c2722 = this._cache.passiveStates || [];
  const _0x3dc801 = this.passiveStateObjects();
  this._cache.passiveStates = _0x2c2722 || [];
  for (const _0x32de33 of _0x3dc801) {
    if (!_0x32de33) {
      continue;
    }
    const _0x7578c3 = DataManager.getPassiveStatesFromObj(_0x32de33);
    for (const _0x1dff63 of _0x7578c3) {
      this._cache.passiveStates.push(_0x1dff63);
    }
  }
};
DataManager.getPassiveStatesFromObj = function (_0x38b4f7) {
  if (!_0x38b4f7) {
    return [];
  }
  const _0x139177 = VisuMZ.SkillsStatesCore.createKeyJS(_0x38b4f7, "passiveStateIDs");
  this._cache_getPassiveStatesFromObj = this._cache_getPassiveStatesFromObj || {};
  if (this._cache_getPassiveStatesFromObj[_0x139177] !== undefined) {
    return this._cache_getPassiveStatesFromObj[_0x139177];
  }
  const _0xc00df = [];
  const _0x2d960b = _0x38b4f7.note || '';
  const _0x4df78 = /<PASSIVE (?:STATE|STATES):[ ](.*)>/gi;
  const _0x125e9e = _0x2d960b.match(_0x4df78);
  if (_0x125e9e) {
    for (const _0x2f91c2 of _0x125e9e) {
      _0x2f91c2.match(_0x4df78);
      const _0x17e148 = String(RegExp.$1).split(',').map(_0x2a4a90 => _0x2a4a90.trim());
      for (const _0xae0fd4 of _0x17e148) {
        const _0x27981f = /^\d+$/.test(_0xae0fd4);
        let _0x32c66b = 0x0;
        if (_0x27981f) {
          _0x32c66b = Number(_0xae0fd4);
        } else {
          _0x32c66b = DataManager.getStateIdWithName(_0xae0fd4);
        }
        if (_0x32c66b) {
          _0xc00df.push(_0x32c66b);
        }
      }
    }
  }
  this._cache_getPassiveStatesFromObj[_0x139177] = _0xc00df;
  return this._cache_getPassiveStatesFromObj[_0x139177];
};
Game_BattlerBase.prototype.addPassiveStatesByPluginParameters = function () {
  const _0x10201f = VisuMZ.SkillsStatesCore.Settings.PassiveStates.Global;
  this._cache.passiveStates = this._cache.passiveStates.concat(_0x10201f);
};
Game_BattlerBase.prototype.stateTurns = function (_0x35c91b) {
  if (typeof _0x35c91b !== "number") {
    _0x35c91b = _0x35c91b.id;
  }
  return this._stateTurns[_0x35c91b] || 0x0;
};
Game_BattlerBase.prototype.setStateTurns = function (_0x1c051b, _0x5c29ae) {
  if (typeof _0x1c051b !== "number") {
    _0x1c051b = _0x1c051b.id;
  }
  if (this.isStateAffected(_0x1c051b)) {
    const _0xe2497 = DataManager.stateMaximumTurns(_0x1c051b);
    this._stateTurns[_0x1c051b] = _0x5c29ae.clamp(0x0, _0xe2497);
    if (this._stateTurns[_0x1c051b] <= 0x0) {
      this.removeState(_0x1c051b);
    }
  }
};
Game_BattlerBase.prototype.addStateTurns = function (_0x1938e2, _0x2d0ed5) {
  if (typeof _0x1938e2 !== "number") {
    _0x1938e2 = _0x1938e2.id;
  }
  if (this.isStateAffected(_0x1938e2)) {
    _0x2d0ed5 += this.stateTurns(_0x1938e2);
    this.setStateTurns(_0x1938e2, _0x2d0ed5);
  }
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_eraseBuff = Game_BattlerBase.prototype.eraseBuff;
Game_BattlerBase.prototype.eraseBuff = function (_0x1d072c) {
  const _0x5e2e9d = this._buffs[_0x1d072c];
  VisuMZ.SkillsStatesCore.Game_BattlerBase_eraseBuff.call(this, _0x1d072c);
  if (_0x5e2e9d > 0x0) {
    this.onEraseBuff(_0x1d072c);
  }
  if (_0x5e2e9d < 0x0) {
    this.onEraseDebuff(_0x1d072c);
  }
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_increaseBuff = Game_BattlerBase.prototype.increaseBuff;
Game_BattlerBase.prototype.increaseBuff = function (_0x36e1f7) {
  VisuMZ.SkillsStatesCore.Game_BattlerBase_increaseBuff.call(this, _0x36e1f7);
  if (!this.isBuffOrDebuffAffected(_0x36e1f7)) {
    this.eraseBuff(_0x36e1f7);
  }
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_decreaseBuff = Game_BattlerBase.prototype.decreaseBuff;
Game_BattlerBase.prototype.decreaseBuff = function (_0x4321c0) {
  VisuMZ.SkillsStatesCore.Game_BattlerBase_decreaseBuff.call(this, _0x4321c0);
  if (!this.isBuffOrDebuffAffected(_0x4321c0)) {
    this.eraseBuff(_0x4321c0);
  }
};
Game_BattlerBase.prototype.onEraseBuff = function (_0xb7ccb6) {};
Game_BattlerBase.prototype.onEraseDebuff = function (_0x435a57) {};
Game_BattlerBase.prototype.isMaxBuffAffected = function (_0xd333ce) {
  return this._buffs[_0xd333ce] === VisuMZ.SkillsStatesCore.Settings.Buffs.StackBuffMax;
};
Game_BattlerBase.prototype.isMaxDebuffAffected = function (_0x267377) {
  return this._buffs[_0x267377] === -VisuMZ.SkillsStatesCore.Settings.Buffs.StackDebuffMax;
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_buffIconIndex = Game_BattlerBase.prototype.buffIconIndex;
Game_BattlerBase.prototype.buffIconIndex = function (_0x14b71a, _0x48445d) {
  _0x14b71a = _0x14b71a.clamp(-0x2, 0x2);
  return VisuMZ.SkillsStatesCore.Game_BattlerBase_buffIconIndex.call(this, _0x14b71a, _0x48445d);
};
Game_BattlerBase.prototype.paramBuffRate = function (_0x46927d) {
  const _0x4f6415 = this._buffs[_0x46927d];
  return VisuMZ.SkillsStatesCore.Settings.Buffs.MultiplierJS.call(this, _0x46927d, _0x4f6415);
};
Game_BattlerBase.prototype.buffTurns = function (_0x49ef37) {
  return this._buffTurns[_0x49ef37] || 0x0;
};
Game_BattlerBase.prototype.debuffTurns = function (_0x48a9de) {
  return this.buffTurns(_0x48a9de);
};
Game_BattlerBase.prototype.setBuffTurns = function (_0x2f5eae, _0x2f4dfa) {
  if (this.isBuffAffected(_0x2f5eae)) {
    const _0x5a3013 = VisuMZ.SkillsStatesCore.Settings.Buffs.MaxTurns;
    this._buffTurns[_0x2f5eae] = _0x2f4dfa.clamp(0x0, _0x5a3013);
  }
};
Game_BattlerBase.prototype.addBuffTurns = function (_0x24823e, _0x35675e) {
  if (this.isBuffAffected(_0x24823e)) {
    _0x35675e += this.buffTurns(stateId);
    this.setBuffTurns(_0x24823e, _0x35675e);
  }
};
Game_BattlerBase.prototype.setDebuffTurns = function (_0x25b84a, _0x1498a8) {
  if (this.isDebuffAffected(_0x25b84a)) {
    const _0xbe3976 = VisuMZ.SkillsStatesCore.Settings.Buffs.MaxTurns;
    this._buffTurns[_0x25b84a] = _0x1498a8.clamp(0x0, _0xbe3976);
  }
};
Game_BattlerBase.prototype.addDebuffTurns = function (_0x32a6b0, _0x4d8270) {
  if (this.isDebuffAffected(_0x32a6b0)) {
    _0x4d8270 += this.buffTurns(stateId);
    this.setDebuffTurns(_0x32a6b0, _0x4d8270);
  }
};
Game_BattlerBase.prototype.stateData = function (_0x5db703) {
  if (typeof _0x5db703 !== 'number') {
    _0x5db703 = _0x5db703.id;
  }
  this._stateData = this._stateData || {};
  this._stateData[_0x5db703] = this._stateData[_0x5db703] || {};
  return this._stateData[_0x5db703];
};
Game_BattlerBase.prototype.getStateData = function (_0x3350e1, _0x2bb65a) {
  if (typeof _0x3350e1 !== "number") {
    _0x3350e1 = _0x3350e1.id;
  }
  const _0x5c445d = this.stateData(_0x3350e1);
  return _0x5c445d[_0x2bb65a];
};
Game_BattlerBase.prototype.setStateData = function (_0x3870a6, _0x1f69af, _0x20bec3) {
  if (typeof _0x3870a6 !== "number") {
    _0x3870a6 = _0x3870a6.id;
  }
  const _0x3a65e0 = this.stateData(_0x3870a6);
  _0x3a65e0[_0x1f69af] = _0x20bec3;
};
Game_BattlerBase.prototype.clearStateData = function (_0x56edd1) {
  if (typeof _0x56edd1 !== 'number') {
    _0x56edd1 = _0x56edd1.id;
  }
  this._stateData = this._stateData || {};
  this._stateData[_0x56edd1] = {};
};
Game_BattlerBase.prototype.getStateDisplay = function (_0x294483) {
  if (typeof _0x294483 !== "number") {
    _0x294483 = _0x294483.id;
  }
  this._stateDisplay = this._stateDisplay || {};
  if (this._stateDisplay[_0x294483] === undefined) {
    this._stateDisplay[_0x294483] = '';
  }
  return this._stateDisplay[_0x294483];
};
Game_BattlerBase.prototype.setStateDisplay = function (_0x5d635f, _0x11932a) {
  if (typeof _0x5d635f !== "number") {
    _0x5d635f = _0x5d635f.id;
  }
  this._stateDisplay = this._stateDisplay || {};
  this._stateDisplay[_0x5d635f] = _0x11932a;
};
Game_BattlerBase.prototype.clearStateDisplay = function (_0x51ad7e) {
  if (typeof _0x51ad7e !== "number") {
    _0x51ad7e = _0x51ad7e.id;
  }
  this._stateDisplay = this._stateDisplay || {};
  this._stateDisplay[_0x51ad7e] = '';
};
Game_BattlerBase.prototype.getStateOrigin = function (_0x50d06a) {
  if (typeof _0x50d06a !== "number") {
    _0x50d06a = _0x50d06a.id;
  }
  this._stateOrigin = this._stateOrigin || {};
  this._stateOrigin[_0x50d06a] = this._stateOrigin[_0x50d06a] || "user";
  const _0x4eefc4 = this._stateOrigin[_0x50d06a];
  return this.getStateOriginByKey(_0x4eefc4);
};
Game_BattlerBase.prototype.setStateOrigin = function (_0x24afcd, _0x268c37) {
  this._stateOrigin = this._stateOrigin || {};
  const _0x2d6f97 = _0x268c37 ? this.convertTargetToStateOriginKey(_0x268c37) : this.getCurrentStateOriginKey();
  this._stateOrigin[_0x24afcd] = _0x2d6f97;
};
Game_BattlerBase.prototype.clearStateOrigin = function (_0x52187a) {
  this._stateOrigin = this._stateOrigin || {};
  delete this._stateOrigin[_0x52187a];
};
Game_BattlerBase.prototype.clearAllStateOrigins = function () {
  this._stateOrigin = {};
};
Game_BattlerBase.prototype.getCurrentStateOriginKey = function () {
  const _0x26e406 = this.getCurrentStateActiveUser();
  return this.convertTargetToStateOriginKey(_0x26e406);
};
Game_BattlerBase.prototype.getCurrentStateActiveUser = function () {
  if ($gameParty.inBattle()) {
    if (BattleManager._subject) {
      return BattleManager._subject;
    } else {
      if (BattleManager._currentActor) {
        return BattleManager._currentActor;
      }
    }
  } else {
    const _0x5f27c8 = SceneManager._scene;
    if (![Scene_Map, Scene_Item].includes(_0x5f27c8.constructor)) {
      return $gameParty.menuActor();
    }
  }
  return this;
};
Game_BattlerBase.prototype.convertTargetToStateOriginKey = function (_0x26a339) {
  if (!_0x26a339) {
    return "user";
  }
  if (_0x26a339.isActor()) {
    return "<actor-%1>".format(_0x26a339.actorId());
  } else {
    const _0x3c636b = "<enemy-%1>".format(_0x26a339.enemyId());
    const _0x51d3c6 = '<member-%1>'.format(_0x26a339.index());
    const _0x3b4dd4 = "<troop-%1>".format($gameTroop.getCurrentTroopUniqueID());
    return "%1 %2 %3".format(_0x3c636b, _0x51d3c6, _0x3b4dd4);
  }
  return "user";
};
Game_BattlerBase.prototype.getStateOriginByKey = function (_0x4e5d69) {
  if (_0x4e5d69 === "user") {
    return this;
  } else {
    if (_0x4e5d69.match(/<actor-(\d+)>/i)) {
      return $gameActors.actor(Number(RegExp.$1));
    } else {
      if ($gameParty.inBattle() && _0x4e5d69.match(/<troop-(\d+)>/i)) {
        const _0x81fa97 = Number(RegExp.$1);
        if (_0x81fa97 === $gameTroop.getCurrentTroopUniqueID()) {
          if (_0x4e5d69.match(/<member-(\d+)>/i)) {
            return $gameTroop.members()[Number(RegExp.$1)];
          }
        }
      }
      if (_0x4e5d69.match(/<enemy-(\d+)>/i)) {
        return new Game_Enemy(Number(RegExp.$1), -0x1f4, -0x1f4);
      }
    }
  }
  return this;
};
VisuMZ.SkillsStatesCore.Game_Battler_addState = Game_Battler.prototype.addState;
Game_Battler.prototype.addState = function (_0x167da3) {
  const _0x3bb0af = this.isStateAddable(_0x167da3);
  VisuMZ.SkillsStatesCore.Game_Battler_addState.call(this, _0x167da3);
  if (_0x3bb0af && this.hasState($dataStates[_0x167da3])) {
    this.onAddState(_0x167da3);
    ;
  }
};
VisuMZ.SkillsStatesCore.Game_Battler_isStateAddable = Game_Battler.prototype.isStateAddable;
Game_Battler.prototype.isStateAddable = function (_0x14b283) {
  const _0x36efb8 = $dataStates[_0x14b283];
  if (_0x36efb8 && _0x36efb8.note.match(/<NO DEATH CLEAR>/i)) {
    return !this.isStateResist(_0x14b283) && !this.isStateRestrict(_0x14b283) && !this._result.isStateRemoved(_0x14b283);
  }
  return VisuMZ.SkillsStatesCore.Game_Battler_isStateAddable.call(this, _0x14b283);
};
Game_Battler.prototype.onAddState = function (_0x11b2e0) {
  this.setStateOrigin(_0x11b2e0);
  this.removeOtherStatesOfSameCategory(_0x11b2e0);
  this.onAddStateMakeCustomSlipValues(_0x11b2e0);
  this.onAddStateCustomJS(_0x11b2e0);
  this.onAddStateGlobalJS(_0x11b2e0);
};
Game_Battler.prototype.onRemoveState = function (_0xbcb0d6) {
  this.onEraseStateCustomJS(_0xbcb0d6);
  this.onEraseStateGlobalJS(_0xbcb0d6);
  Game_BattlerBase.prototype.onRemoveState.call(this, _0xbcb0d6);
};
Game_Battler.prototype.removeStatesAuto = function (_0x2bde4a) {
  for (const _0x493118 of this.states()) {
    if (this.isStateExpired(_0x493118.id) && _0x493118.autoRemovalTiming === _0x2bde4a) {
      this.removeState(_0x493118.id);
      this.onExpireState(_0x493118.id);
      this.onExpireStateGlobalJS(_0x493118.id);
    }
  }
};
Game_Battler.prototype.onExpireState = function (_0x18b57c) {
  this.onExpireStateCustomJS(_0x18b57c);
};
Game_Battler.prototype.onAddStateCustomJS = function (_0x474551) {
  if (this._tempActor || this._tempBattler) {
    return;
  }
  const _0x228660 = VisuMZ.SkillsStatesCore.stateAddJS;
  if (_0x228660[_0x474551]) {
    _0x228660[_0x474551].call(this, _0x474551);
  }
};
Game_Battler.prototype.onEraseStateCustomJS = function (_0x290a0f) {
  if (this._tempActor || this._tempBattler) {
    return;
  }
  const _0x4e4355 = VisuMZ.SkillsStatesCore.stateEraseJS;
  if (_0x4e4355[_0x290a0f]) {
    _0x4e4355[_0x290a0f].call(this, _0x290a0f);
  }
};
Game_Battler.prototype.onExpireStateCustomJS = function (_0xf0e7dd) {
  if (this._tempActor || this._tempBattler) {
    return;
  }
  const _0x18c80b = VisuMZ.SkillsStatesCore.stateExpireJS;
  if (_0x18c80b[_0xf0e7dd]) {
    _0x18c80b[_0xf0e7dd].call(this, _0xf0e7dd);
  }
};
Game_Battler.prototype.onAddStateGlobalJS = function (_0xb6bc6a) {
  if (this._tempActor || this._tempBattler) {
    return;
  }
  try {
    VisuMZ.SkillsStatesCore.Settings.States.onAddStateJS.call(this, _0xb6bc6a);
  } catch (_0x368af2) {
    if ($gameTemp.isPlaytest()) {
      console.log(_0x368af2);
    }
  }
};
Game_Battler.prototype.onEraseStateGlobalJS = function (_0x2f4104) {
  if (this._tempActor || this._tempBattler) {
    return;
  }
  try {
    VisuMZ.SkillsStatesCore.Settings.States.onEraseStateJS.call(this, _0x2f4104);
  } catch (_0x1d325c) {
    if ($gameTemp.isPlaytest()) {
      console.log(_0x1d325c);
    }
  }
};
Game_Battler.prototype.onExpireStateGlobalJS = function (_0x1660ee) {
  if (this._tempActor || this._tempBattler) {
    return;
  }
  try {
    VisuMZ.SkillsStatesCore.Settings.States.onExpireStateJS.call(this, _0x1660ee);
  } catch (_0x3a304f) {
    if ($gameTemp.isPlaytest()) {
      console.log(_0x3a304f);
    }
  }
};
Game_Battler.prototype.statesByCategory = function (_0x15e0a4) {
  _0x15e0a4 = _0x15e0a4.toUpperCase().trim();
  return this.states().filter(_0x39e0e3 => _0x39e0e3.categories.includes(_0x15e0a4));
};
Game_Battler.prototype.removeStatesByCategory = function (_0x172803, _0x1afeb0) {
  _0x172803 = _0x172803.toUpperCase().trim();
  _0x1afeb0 = _0x1afeb0 || 0x0;
  const _0x5ee2aa = this.statesByCategory(_0x172803);
  const _0x540ca1 = [];
  for (const _0x670456 of _0x5ee2aa) {
    if (!_0x670456) {
      continue;
    }
    if (_0x1afeb0 <= 0x0) {
      break;
    }
    _0x540ca1.push(_0x670456.id);
    this._result.success = true;
    _0x1afeb0--;
  }
  while (_0x540ca1.length > 0x0) {
    this.removeState(_0x540ca1.shift());
  }
};
Game_Battler.prototype.removeStatesByCategoryAll = function (_0x24f186, _0x2c990f) {
  _0x24f186 = _0x24f186.toUpperCase().trim();
  _0x2c990f = _0x2c990f || [];
  const _0x24670d = this.statesByCategory(_0x24f186);
  const _0x47a89c = [];
  for (const _0x34894c of _0x24670d) {
    if (!_0x34894c) {
      continue;
    }
    if (_0x2c990f.includes(_0x34894c)) {
      continue;
    }
    _0x47a89c.push(_0x34894c.id);
    this._result.success = true;
  }
  while (_0x47a89c.length > 0x0) {
    this.removeState(_0x47a89c.shift());
  }
};
Game_Battler.prototype.isStateCategoryAffected = function (_0x501ebd) {
  return this.totalStateCategoryAffected(_0x501ebd) > 0x0;
};
Game_Battler.prototype.hasStateCategory = function (_0x1f18b6) {
  return this.totalStateCategory(_0x1f18b6) > 0x0;
};
Game_Battler.prototype.totalStateCategoryAffected = function (_0x199cec) {
  const _0x5cf6a0 = this.statesByCategory(_0x199cec).filter(_0x4cf255 => this.isStateAffected(_0x4cf255.id));
  return _0x5cf6a0.length;
};
Game_Battler.prototype.totalStateCategory = function (_0x228cce) {
  const _0x3dc8b0 = this.statesByCategory(_0x228cce);
  return _0x3dc8b0.length;
};
VisuMZ.SkillsStatesCore.Game_BattlerBase_isStateResist = Game_BattlerBase.prototype.isStateResist;
Game_BattlerBase.prototype.isStateResist = function (_0xbee83c) {
  const _0x209de8 = $dataStates[_0xbee83c];
  if (_0x209de8 && _0x209de8.categories.length > 0x0) {
    for (const _0x53e356 of _0x209de8.categories) {
      if (this.isStateCategoryResisted(_0x53e356)) {
        return true;
      }
    }
  }
  return VisuMZ.SkillsStatesCore.Game_BattlerBase_isStateResist.call(this, _0xbee83c);
};
Game_BattlerBase.prototype.isStateCategoryResisted = function (_0x5d7d1d) {
  if (this.checkCacheKey("stateCategoriesResisted")) {
    return this._cache.stateCategoriesResisted.includes(_0x5d7d1d);
  }
  this._cache.stateCategoriesResisted = this.makeResistedStateCategories();
  return this._cache.stateCategoriesResisted.includes(_0x5d7d1d);
};
Game_BattlerBase.prototype.makeResistedStateCategories = function () {
  const _0x8e33dc = /<RESIST STATE (?:CATEGORY|CATEGORIES):[ ](.*)>/gi;
  const _0x1c97d5 = /<RESIST STATE (?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/RESIST STATE (?:CATEGORY|CATEGORIES)>/i;
  let _0x19ead0 = [];
  for (const _0x2326f1 of this.traitObjects()) {
    if (!_0x2326f1) {
      continue;
    }
    const _0x1c2deb = _0x2326f1.note;
    const _0x59b057 = _0x1c2deb.match(_0x8e33dc);
    if (_0x59b057) {
      for (const _0x4935b6 of _0x59b057) {
        _0x4935b6.match(_0x8e33dc);
        const _0x1675a0 = String(RegExp.$1).split(',').map(_0x927c68 => String(_0x927c68).toUpperCase().trim());
        _0x19ead0 = _0x19ead0.concat(_0x1675a0);
      }
    }
    if (_0x1c2deb.match(_0x1c97d5)) {
      const _0x198c15 = String(RegExp.$1).split(/[\r\n]+/).map(_0x358799 => String(_0x358799).toUpperCase().trim());
      _0x19ead0 = _0x19ead0.concat(_0x198c15);
    }
  }
  return _0x19ead0;
};
Game_BattlerBase.prototype.removeOtherStatesOfSameCategory = function (_0x574b7d) {
  const _0x214118 = $dataStates[_0x574b7d];
  if (!_0x214118) {
    return;
  }
  const _0x1bb83f = _0x214118.note || '';
  const _0x215bb4 = _0x1bb83f.match(/<REMOVE OTHER (.*) STATES>/gi);
  if (_0x215bb4) {
    const _0x39a7e0 = [_0x214118];
    for (const _0x45fd65 of _0x215bb4) {
      _0x45fd65.match(/<REMOVE OTHER (.*) STATES>/i);
      const _0x2505a4 = String(RegExp.$1);
      this.removeStatesByCategoryAll(_0x2505a4, _0x39a7e0);
    }
  }
};
Game_Battler.prototype.removeStatesByDamage = function () {
  for (const _0x2bd35a of this.states()) {
    if (!_0x2bd35a) {
      continue;
    }
    if (!this.isStateAffected(_0x2bd35a.id)) {
      continue;
    }
    if (!_0x2bd35a.removeByDamage) {
      continue;
    }
    if (this.bypassRemoveStatesByDamage(_0x2bd35a)) {
      continue;
    }
    if (Math.randomInt(0x64) < _0x2bd35a.chanceByDamage) {
      this.removeState(_0x2bd35a.id);
    }
  }
};
VisuMZ.SkillsStatesCore.Game_Action_executeHpDamage_bypassStateDmgRemoval = Game_Action.prototype.executeHpDamage;
Game_Action.prototype.executeHpDamage = function (_0x535c3c, _0x402e0d) {
  $gameTemp._bypassRemoveStateDamage_action = this.item();
  $gameTemp._bypassRemoveStateDamage_user = this.subject();
  $gameTemp._bypassRemoveStateDamage_value = _0x402e0d;
  VisuMZ.SkillsStatesCore.Game_Action_executeHpDamage_bypassStateDmgRemoval.call(this, _0x535c3c, _0x402e0d);
  $gameTemp._bypassRemoveStateDamage_action = undefined;
  $gameTemp._bypassRemoveStateDamage_user = undefined;
  $gameTemp._bypassRemoveStateDamage_value = undefined;
};
Game_Battler.prototype.bypassRemoveStatesByDamage = function (_0x1b1785) {
  if ($gameTemp._bypassRemoveStateDamage_action) {
    const _0x43e3fd = $gameTemp._bypassRemoveStateDamage_action;
    const _0x5bbb73 = /<BYPASS STATE DAMAGE REMOVAL:[ ](.*)>/gi;
    if (DataManager.CheckBypassRemoveStatesByDamage(_0x1b1785, _0x43e3fd, _0x5bbb73, "action")) {
      return true;
    }
  }
  if ($gameTemp._bypassRemoveStateDamage_user) {
    const _0x4834a9 = $gameTemp._bypassRemoveStateDamage_user;
    if (_0x4834a9.isUserBypassRemoveStatesByDamage(_0x1b1785)) {
      return true;
    }
  }
  if (this.isTargetBypassRemoveStatesByDamage(_0x1b1785)) {
    return true;
  }
  return false;
};
Game_Battler.prototype.isUserBypassRemoveStatesByDamage = function (_0x267550) {
  const _0x5725c7 = /<BYPASS STATE DAMAGE REMOVAL AS (?:ATTACKER|USER):[ ](.*)>/gi;
  for (const _0xd90b4f of this.traitObjects()) {
    if (!_0xd90b4f) {
      continue;
    }
    if (DataManager.CheckBypassRemoveStatesByDamage(_0x267550, _0xd90b4f, _0x5725c7, "attacker")) {
      return true;
    }
  }
  return false;
};
Game_Battler.prototype.isTargetBypassRemoveStatesByDamage = function (_0x55046c) {
  const _0x5a0e1e = /<BYPASS STATE DAMAGE REMOVAL AS (?:TARGET|VICTIM):[ ](.*)>/gi;
  for (const _0x1c3bf4 of this.traitObjects()) {
    if (!_0x1c3bf4) {
      continue;
    }
    if (DataManager.CheckBypassRemoveStatesByDamage(_0x55046c, _0x1c3bf4, _0x5a0e1e, "target")) {
      return true;
    }
  }
  return false;
};
DataManager.CheckBypassRemoveStatesByDamage = function (_0x310ec4, _0x5bf207, _0x2d6780, _0x2acd84) {
  const _0x28a69e = '%1-%2-%3'.format(_0x5bf207.name, _0x5bf207.id, _0x2acd84);
  this._cache_CheckBypassRemoveStatesByDamage = this._cache_CheckBypassRemoveStatesByDamage || {};
  if (this._cache_CheckBypassRemoveStatesByDamage[_0x28a69e] !== undefined) {
    return this._cache_CheckBypassRemoveStatesByDamage[_0x28a69e].includes(_0x310ec4.id);
  }
  const _0x34f934 = [];
  const _0x5ef97c = _0x5bf207.note.match(_0x2d6780);
  if (_0x5ef97c) {
    for (const _0x36ddd6 of _0x5ef97c) {
      _0x36ddd6.match(_0x2d6780);
      const _0x3f3176 = String(RegExp.$1).split(',').map(_0x681223 => _0x681223.trim());
      for (let _0xe12df8 of _0x3f3176) {
        _0xe12df8 = (String(_0xe12df8) || '').trim();
        if (_0xe12df8.match(/(\d+)[ ](?:THROUGH|to)[ ](\d+)/i)) {
          const _0x1ec496 = Math.min(Number(RegExp.$1), Number(RegExp.$2));
          const _0x49d399 = Math.max(Number(RegExp.$1), Number(RegExp.$2));
          for (let _0x22a9e0 = _0x1ec496; _0x22a9e0 <= _0x49d399; _0x22a9e0++) {
            elements.push(_0x22a9e0);
          }
          continue;
        }
        const _0x108d23 = /^\d+$/.test(_0xe12df8);
        if (_0x108d23) {
          entryID = Number(_0xe12df8);
        } else {
          entryID = DataManager.getStateIdWithName(_0xe12df8);
        }
        if (entryID) {
          _0x34f934.push(entryID);
        }
      }
    }
  }
  this._cache_CheckBypassRemoveStatesByDamage[_0x28a69e] = _0x34f934;
  return this._cache_CheckBypassRemoveStatesByDamage[_0x28a69e].includes(_0x310ec4.id);
};
VisuMZ.SkillsStatesCore.Game_Battler_addBuff = Game_Battler.prototype.addBuff;
Game_Battler.prototype.addBuff = function (_0x3fa449, _0x252d5d) {
  VisuMZ.SkillsStatesCore.Game_Battler_addBuff.call(this, _0x3fa449, _0x252d5d);
  if (this.isBuffAffected(_0x3fa449)) {
    this.onAddBuff(_0x3fa449, _0x252d5d);
  }
};
Game_Battler.prototype.isBuffPrevented = function (_0x12d119) {};
VisuMZ.SkillsStatesCore.Game_Battler_addDebuff = Game_Battler.prototype.addDebuff;
Game_Battler.prototype.addDebuff = function (_0x5673bf, _0x2daddb) {
  VisuMZ.SkillsStatesCore.Game_Battler_addDebuff.call(this, _0x5673bf, _0x2daddb);
  if (this.isDebuffAffected(_0x5673bf)) {
    this.onAddDebuff(_0x5673bf, _0x2daddb);
  }
};
Game_Battler.prototype.removeBuffsAuto = function () {
  for (let _0x175176 = 0x0; _0x175176 < this.buffLength(); _0x175176++) {
    if (this.isBuffExpired(_0x175176)) {
      const _0xb69e78 = this._buffs[_0x175176];
      this.removeBuff(_0x175176);
      if (_0xb69e78 > 0x0) {
        this.onExpireBuff(_0x175176);
      }
      if (_0xb69e78 < 0x0) {
        this.onExpireDebuff(_0x175176);
      }
    }
  }
};
Game_Battler.prototype.onAddBuff = function (_0x15f0a1, _0x6ff10f) {
  this.onAddBuffGlobalJS(_0x15f0a1, _0x6ff10f);
};
Game_Battler.prototype.onAddDebuff = function (_0x3b5da8, _0x3f9e0a) {
  this.onAddDebuffGlobalJS(_0x3b5da8, _0x3f9e0a);
};
Game_Battler.prototype.onEraseBuff = function (_0x22889c) {
  Game_BattlerBase.prototype.onEraseBuff.call(this, _0x22889c);
  this.onEraseBuffGlobalJS(_0x22889c);
};
Game_Battler.prototype.onEraseDebuff = function (_0x330e6e) {
  Game_BattlerBase.prototype.onEraseDebuff.call(this, _0x330e6e);
  this.onEraseDebuffGlobalJS(_0x330e6e);
};
Game_Battler.prototype.onExpireBuff = function (_0x1002b8) {
  this.onExpireBuffGlobalJS(_0x1002b8);
};
Game_Battler.prototype.onExpireDebuff = function (_0xdfed4b) {
  this.onExpireDebuffGlobalJS(_0xdfed4b);
};
Game_Battler.prototype.onAddBuffGlobalJS = function (_0x33f776, _0x2012e2) {
  VisuMZ.SkillsStatesCore.Settings.Buffs.onAddBuffJS.call(this, _0x33f776, _0x2012e2);
};
Game_Battler.prototype.onAddDebuffGlobalJS = function (_0xf524e5, _0x516402) {
  VisuMZ.SkillsStatesCore.Settings.Buffs.onAddDebuffJS.call(this, _0xf524e5, _0x516402);
};
Game_BattlerBase.prototype.onEraseBuffGlobalJS = function (_0x3e25f4) {
  VisuMZ.SkillsStatesCore.Settings.Buffs.onEraseBuffJS.call(this, _0x3e25f4);
};
Game_BattlerBase.prototype.onEraseDebuffGlobalJS = function (_0x255387) {
  VisuMZ.SkillsStatesCore.Settings.Buffs.onEraseDebuffJS.call(this, _0x255387);
};
Game_Battler.prototype.onExpireBuffGlobalJS = function (_0x274f47) {
  VisuMZ.SkillsStatesCore.Settings.Buffs.onExpireBuffJS.call(this, _0x274f47);
};
Game_Battler.prototype.onExpireDebuffGlobalJS = function (_0x20bc09) {
  VisuMZ.SkillsStatesCore.Settings.Buffs.onExpireDebuffJS.call(this, _0x20bc09);
};
Game_Battler.prototype.onAddStateMakeCustomSlipValues = function (_0x219255) {
  const _0x2a869f = VisuMZ.SkillsStatesCore;
  const _0x58e584 = ["stateHpSlipDamageJS", "stateHpSlipHealJS", "stateMpSlipDamageJS", "stateMpSlipHealJS", "stateTpSlipDamageJS", 'stateTpSlipHealJS'];
  for (const _0x1d8fc9 of _0x58e584) {
    if (_0x2a869f[_0x1d8fc9][_0x219255]) {
      _0x2a869f[_0x1d8fc9][_0x219255].call(this, _0x219255);
    }
  }
};
VisuMZ.SkillsStatesCore.Game_Battler_regenerateAll = Game_Battler.prototype.regenerateAll;
Game_Battler.prototype.regenerateAll = function () {
  this.recalculateSlipDamageJS();
  VisuMZ.SkillsStatesCore.Game_Battler_regenerateAll.call(this);
  this.setPassiveStateSlipDamageJS();
  this.regenerateAllSkillsStatesCore();
};
Game_Battler.prototype.setPassiveStateSlipDamageJS = function () {
  for (const _0x244bdc of this.passiveStates()) {
    if (!_0x244bdc) {
      continue;
    }
    this.onAddStateMakeCustomSlipValues(_0x244bdc.id);
  }
};
Game_Battler.prototype.recalculateSlipDamageJS = function () {
  for (const _0xb09245 of this.states()) {
    if (!_0xb09245) {
      continue;
    }
    if (_0xb09245.note.match(/<JS SLIP REFRESH>/i)) {
      this.onAddStateMakeCustomSlipValues(_0xb09245.id);
    }
  }
};
Game_Battler.prototype.regenerateAllSkillsStatesCore = function () {
  if (!this.isAlive()) {
    return;
  }
  const _0x1732d0 = this.states();
  for (const _0x5d7d4c of _0x1732d0) {
    if (!_0x5d7d4c) {
      continue;
    }
    this.onRegenerateCustomStateDamageOverTime(_0x5d7d4c);
  }
};
Game_Battler.prototype.onRegenerateCustomStateDamageOverTime = function (_0x2702da) {
  const _0x3806c3 = this.getStateData(_0x2702da.id, "slipHp") || 0x0;
  const _0x28150a = -this.maxSlipDamage();
  const _0x43713e = Math.max(_0x3806c3, _0x28150a);
  if (_0x43713e !== 0x0) {
    const _0x227d9b = this._result.hpDamage || 0x0;
    this.gainHp(_0x43713e);
    this._result.hpDamage += _0x227d9b;
  }
  const _0x2ed056 = this.getStateData(_0x2702da.id, 'slipMp') || 0x0;
  if (_0x2ed056 !== 0x0) {
    const _0x3d73ee = this._result.mpDamage || 0x0;
    this.gainMp(_0x2ed056);
    this._result.mpDamage += _0x3d73ee;
  }
  const _0x837d6a = this.getStateData(_0x2702da.id, "slipTp") || 0x0;
  if (_0x837d6a !== 0x0) {
    this.gainSilentTp(_0x837d6a);
  }
};
VisuMZ.SkillsStatesCore.Game_Actor_skillTypes = Game_Actor.prototype.skillTypes;
Game_Actor.prototype.skillTypes = function () {
  const _0x3e59c6 = VisuMZ.SkillsStatesCore.Game_Actor_skillTypes.call(this);
  const _0x3732b4 = VisuMZ.SkillsStatesCore.Settings.Skills;
  let _0x469ab9 = _0x3732b4.HiddenSkillTypes;
  if ($gameParty.inBattle()) {
    _0x469ab9 = _0x469ab9.concat(_0x3732b4.BattleHiddenSkillTypes);
  }
  return _0x3e59c6.filter(_0x53b1a3 => !_0x469ab9.includes(_0x53b1a3));
};
Game_Actor.prototype.usableSkills = function () {
  return this.skills().filter(_0x3e188a => this.isSkillUsableForAutoBattle(_0x3e188a));
};
Game_Actor.prototype.isSkillUsableForAutoBattle = function (_0x4f2a81) {
  if (!this.canUse(_0x4f2a81)) {
    return false;
  }
  if (!_0x4f2a81) {
    return false;
  }
  if (!this.isSkillTypeMatchForUse(_0x4f2a81)) {
    return false;
  }
  if (this.isSkillHidden(_0x4f2a81)) {
    return false;
  }
  return true;
};
Game_Actor.prototype.isSkillTypeMatchForUse = function (_0x5ef3f3) {
  const _0x530397 = this.skillTypes();
  const _0x4368c7 = DataManager.getSkillTypes(_0x5ef3f3);
  const _0x142a81 = _0x530397.filter(_0x563fab => _0x4368c7.includes(_0x563fab));
  return _0x142a81.length > 0x0;
};
Game_Actor.prototype.isSkillHidden = function (_0xa822b5) {
  if (!VisuMZ.SkillsStatesCore.CheckVisibleBattleNotetags(this, _0xa822b5)) {
    return true;
  }
  if (!VisuMZ.SkillsStatesCore.CheckVisibleSwitchNotetags(this, _0xa822b5)) {
    return true;
  }
  if (!VisuMZ.SkillsStatesCore.CheckVisibleSkillNotetags(this, _0xa822b5)) {
    return true;
  }
  return false;
};
Game_Actor.prototype.passiveStateObjects = function () {
  let _0x15de44 = [this.actor(), this.currentClass()];
  _0x15de44 = _0x15de44.concat(this.equips().filter(_0x1a65a0 => _0x1a65a0));
  for (const _0x7bb79d of this._skills) {
    const _0x34c7b4 = $dataSkills[_0x7bb79d];
    if (_0x34c7b4) {
      _0x15de44.push(_0x34c7b4);
    }
  }
  return _0x15de44;
};
Game_Actor.prototype.addPassiveStatesByPluginParameters = function () {
  Game_Battler.prototype.addPassiveStatesByPluginParameters.call(this);
  const _0x25dd15 = VisuMZ.SkillsStatesCore.Settings.PassiveStates.Actor;
  this._cache.passiveStates = this._cache.passiveStates.concat(_0x25dd15);
};
VisuMZ.SkillsStatesCore.Game_Actor_learnSkill = Game_Actor.prototype.learnSkill;
Game_Actor.prototype.learnSkill = function (_0x110fac) {
  VisuMZ.SkillsStatesCore.Game_Actor_learnSkill.call(this, _0x110fac);
  this._cache = {};
  this.passiveStates();
};
VisuMZ.SkillsStatesCore.Game_Actor_forgetSkill = Game_Actor.prototype.forgetSkill;
Game_Actor.prototype.forgetSkill = function (_0x26a078) {
  VisuMZ.SkillsStatesCore.Game_Actor_forgetSkill.call(this, _0x26a078);
  this._cache = {};
  this.passiveStates();
};
Game_Actor.prototype.stepsForTurn = function () {
  return VisuMZ.SkillsStatesCore.Settings.States.TurnEndOnMap ?? 0x14;
};
Game_Enemy.prototype.passiveStateObjects = function () {
  let _0x1b7e7b = [this.enemy()];
  return _0x1b7e7b.concat(this.skills());
};
Game_Enemy.prototype.addPassiveStatesByPluginParameters = function () {
  Game_Battler.prototype.addPassiveStatesByPluginParameters.call(this);
  const _0x1b217f = VisuMZ.SkillsStatesCore.Settings.PassiveStates.Enemy;
  this._cache.passiveStates = this._cache.passiveStates.concat(_0x1b217f);
};
Game_Enemy.prototype.skills = function () {
  const _0x3ce22f = [];
  for (const _0x28ad90 of this.enemy().actions) {
    const _0x48a7cb = $dataSkills[_0x28ad90.skillId];
    if (_0x48a7cb && !_0x3ce22f.includes(_0x48a7cb)) {
      _0x3ce22f.push(_0x48a7cb);
    }
  }
  return _0x3ce22f;
};
Game_Enemy.prototype.meetsStateCondition = function (_0x458777) {
  return this.hasState($dataStates[_0x458777]);
};
VisuMZ.SkillsStatesCore.Game_Unit_isAllDead = Game_Unit.prototype.isAllDead;
Game_Unit.prototype.isAllDead = function () {
  if (this.isPartyAllAffectedByGroupDefeatStates()) {
    return true;
  }
  return VisuMZ.SkillsStatesCore.Game_Unit_isAllDead.call(this);
};
Game_Unit.prototype.isPartyAllAffectedByGroupDefeatStates = function () {
  const _0x242d69 = this.aliveMembers();
  for (const _0x51c4f5 of _0x242d69) {
    if (!_0x51c4f5.isGroupDefeatStateAffected()) {
      return false;
    }
  }
  return true;
};
VisuMZ.SkillsStatesCore.Game_Troop_setup = Game_Troop.prototype.setup;
Game_Troop.prototype.setup = function (_0x9dcbfb) {
  VisuMZ.SkillsStatesCore.Game_Troop_setup.call(this, _0x9dcbfb);
  this.makeCurrentTroopUniqueID();
};
Game_Troop.prototype.makeCurrentTroopUniqueID = function () {
  this._currentTroopUniqueID = Graphics.frameCount;
};
Game_Troop.prototype.getCurrentTroopUniqueID = function () {
  this._currentTroopUniqueID = this._currentTroopUniqueID || Graphics.frameCount;
  return this._currentTroopUniqueID;
};
Scene_Skill.prototype.isBottomHelpMode = function () {
  if (ConfigManager.uiMenuStyle && ConfigManager.uiHelpPosition !== undefined) {
    return ConfigManager.uiHelpPosition;
  } else {
    if (this.isUseSkillsStatesCoreUpdatedLayout()) {
      return this.updatedLayoutStyle().match(/LOWER/i);
    } else {
      Scene_ItemBase.prototype.isRightInputMode.call(this);
    }
  }
};
Scene_Skill.prototype.isRightInputMode = function () {
  if (ConfigManager.uiMenuStyle && ConfigManager.uiInputPosition !== undefined) {
    return ConfigManager.uiInputPosition;
  } else {
    return this.isUseSkillsStatesCoreUpdatedLayout() ? this.updatedLayoutStyle().match(/RIGHT/i) : Scene_ItemBase.prototype.isRightInputMode.call(this);
  }
};
Scene_Skill.prototype.updatedLayoutStyle = function () {
  return VisuMZ.SkillsStatesCore.Settings.Skills.LayoutStyle;
};
Scene_Skill.prototype.isUseModernControls = function () {
  return this._categoryWindow && this._categoryWindow.isUseModernControls();
};
Scene_Skill.prototype.isUseSkillsStatesCoreUpdatedLayout = function () {
  return VisuMZ.SkillsStatesCore.Settings.Skills.EnableLayout;
};
VisuMZ.SkillsStatesCore.Scene_Skill_helpWindowRect = Scene_Skill.prototype.helpWindowRect;
Scene_Skill.prototype.helpWindowRect = function () {
  return this.isUseSkillsStatesCoreUpdatedLayout() ? this.helpWindowRectSkillsStatesCore() : VisuMZ.SkillsStatesCore.Scene_Skill_helpWindowRect.call(this);
};
Scene_Skill.prototype.helpWindowRectSkillsStatesCore = function () {
  const _0x4a1579 = this.helpAreaTop();
  const _0x40f62b = Graphics.boxWidth;
  const _0x3f57cc = this.helpAreaHeight();
  return new Rectangle(0x0, _0x4a1579, _0x40f62b, _0x3f57cc);
};
VisuMZ.SkillsStatesCore.Scene_Skill_skillTypeWindowRect = Scene_Skill.prototype.skillTypeWindowRect;
Scene_Skill.prototype.skillTypeWindowRect = function () {
  return this.isUseSkillsStatesCoreUpdatedLayout() ? this.skillTypeWindowRectSkillsStatesCore() : VisuMZ.SkillsStatesCore.Scene_Skill_skillTypeWindowRect.call(this);
};
Scene_Skill.prototype.mainCommandWidth = function () {
  return VisuMZ.SkillsStatesCore.Settings.Skills.CmdWidth ?? Scene_MenuBase.prototype.mainCommandWidth.call(this);
};
Scene_Skill.prototype.skillTypeWindowRectSkillsStatesCore = function () {
  const _0x442f18 = this.mainCommandWidth();
  const _0x5aa698 = this.calcWindowHeight(0x3, true);
  const _0x3e84c9 = this.isRightInputMode() ? Graphics.boxWidth - _0x442f18 : 0x0;
  const _0x215ff5 = this.mainAreaTop();
  return new Rectangle(_0x3e84c9, _0x215ff5, _0x442f18, _0x5aa698);
};
VisuMZ.SkillsStatesCore.Scene_Skill_statusWindowRect = Scene_Skill.prototype.statusWindowRect;
Scene_Skill.prototype.statusWindowRect = function () {
  return this.isUseSkillsStatesCoreUpdatedLayout() ? this.statusWindowRectSkillsStatesCore() : VisuMZ.SkillsStatesCore.Scene_Skill_statusWindowRect.call(this);
};
Scene_Skill.prototype.statusWindowRectSkillsStatesCore = function () {
  const _0x1a0e79 = Graphics.boxWidth - this.mainCommandWidth();
  const _0x3d5ca2 = this._skillTypeWindow.height;
  const _0x59f31f = this.isRightInputMode() ? 0x0 : Graphics.boxWidth - _0x1a0e79;
  const _0x1c16a9 = this.mainAreaTop();
  return new Rectangle(_0x59f31f, _0x1c16a9, _0x1a0e79, _0x3d5ca2);
};
VisuMZ.SkillsStatesCore.Scene_Skill_createItemWindow = Scene_Skill.prototype.createItemWindow;
Scene_Skill.prototype.createItemWindow = function () {
  VisuMZ.SkillsStatesCore.Scene_Skill_createItemWindow.call(this);
  if (this.allowCreateShopStatusWindow()) {
    this.createShopStatusWindow();
  }
};
VisuMZ.SkillsStatesCore.Scene_Skill_itemWindowRect = Scene_Skill.prototype.itemWindowRect;
Scene_Skill.prototype.itemWindowRect = function () {
  if (this.isUseSkillsStatesCoreUpdatedLayout()) {
    return this.itemWindowRectSkillsStatesCore();
  } else {
    const _0x2e4891 = VisuMZ.SkillsStatesCore.Scene_Skill_itemWindowRect.call(this);
    if (this.allowCreateShopStatusWindow() && this.adjustItemWidthByShopStatus()) {
      _0x2e4891.width -= this.shopStatusWidth();
    }
    return _0x2e4891;
  }
};
Scene_Skill.prototype.itemWindowRectSkillsStatesCore = function () {
  const _0x4c8d35 = Graphics.boxWidth - this.shopStatusWidth();
  const _0x2c78b3 = this.mainAreaHeight() - this._statusWindow.height;
  const _0x475be9 = this.isRightInputMode() ? Graphics.boxWidth - _0x4c8d35 : 0x0;
  const _0x5e2193 = this._statusWindow.y + this._statusWindow.height;
  return new Rectangle(_0x475be9, _0x5e2193, _0x4c8d35, _0x2c78b3);
};
Scene_Skill.prototype.allowCreateShopStatusWindow = function () {
  if (!Imported.VisuMZ_1_ItemsEquipsCore) {
    return false;
  } else {
    return this.isUseSkillsStatesCoreUpdatedLayout() ? true : VisuMZ.SkillsStatesCore.Settings.Skills.ShowShopStatus;
  }
};
Scene_Skill.prototype.adjustItemWidthByShopStatus = function () {
  return VisuMZ.SkillsStatesCore.Settings.Skills.SkillSceneAdjustSkillList;
};
Scene_Skill.prototype.createShopStatusWindow = function () {
  const _0x2c8663 = this.shopStatusWindowRect();
  this._shopStatusWindow = new Window_ShopStatus(_0x2c8663);
  this.addWindow(this._shopStatusWindow);
  this._itemWindow.setStatusWindow(this._shopStatusWindow);
  const _0x1be85a = VisuMZ.SkillsStatesCore.Settings.Skills.SkillSceneStatusBgType;
  this._shopStatusWindow.setBackgroundType(_0x1be85a || 0x0);
};
Scene_Skill.prototype.shopStatusWindowRect = function () {
  return this.isUseSkillsStatesCoreUpdatedLayout() ? this.shopStatusWindowRectSkillsStatesCore() : VisuMZ.SkillsStatesCore.Settings.Skills.SkillMenuStatusRect.call(this);
};
Scene_Skill.prototype.shopStatusWindowRectSkillsStatesCore = function () {
  const _0x30e0c7 = this.shopStatusWidth();
  const _0x1686c1 = this._itemWindow.height;
  const _0x3a59c8 = this.isRightInputMode() ? 0x0 : Graphics.boxWidth - this.shopStatusWidth();
  const _0x52fff9 = this._itemWindow.y;
  return new Rectangle(_0x3a59c8, _0x52fff9, _0x30e0c7, _0x1686c1);
};
Scene_Skill.prototype.shopStatusWidth = function () {
  return Imported.VisuMZ_1_ItemsEquipsCore ? Scene_Shop.prototype.statusWidth() : 0x0;
};
Scene_Skill.prototype.buttonAssistText1 = function () {
  return this._skillTypeWindow && this._skillTypeWindow.active ? TextManager.buttonAssistSwitch : '';
};
VisuMZ.SkillsStatesCore.Sprite_Gauge_initMembers = Sprite_Gauge.prototype.initMembers;
Sprite_Gauge.prototype.initMembers = function () {
  VisuMZ.SkillsStatesCore.Sprite_Gauge_initMembers.call(this);
  this._costSettings = null;
};
VisuMZ.SkillsStatesCore.Sprite_Gauge_setup = Sprite_Gauge.prototype.setup;
Sprite_Gauge.prototype.setup = function (_0x27506b, _0x42b4e9) {
  this.setupSkillsStatesCore(_0x27506b, _0x42b4e9);
  _0x42b4e9 = _0x42b4e9.toLowerCase();
  VisuMZ.SkillsStatesCore.Sprite_Gauge_setup.call(this, _0x27506b, _0x42b4e9);
};
Sprite_Gauge.prototype.setupSkillsStatesCore = function (_0x21065e, _0x17e902) {
  const _0x37263f = VisuMZ.SkillsStatesCore.Settings.Costs.filter(_0x50cefb => _0x50cefb.Name.toUpperCase() === _0x17e902.toUpperCase());
  if (_0x37263f.length >= 0x1) {
    this._costSettings = _0x37263f[0x0];
  } else {
    this._costSettings = null;
  }
};
VisuMZ.SkillsStatesCore.Sprite_Gauge_currentValue = Sprite_Gauge.prototype.currentValue;
Sprite_Gauge.prototype.currentValue = function () {
  return this._battler && this._costSettings ? this.currentValueSkillsStatesCore() : VisuMZ.SkillsStatesCore.Sprite_Gauge_currentValue.call(this);
};
Sprite_Gauge.prototype.currentValueSkillsStatesCore = function () {
  return this._costSettings.GaugeCurrentJS.call(this._battler);
};
VisuMZ.SkillsStatesCore.Sprite_Gauge_currentMaxValue = Sprite_Gauge.prototype.currentMaxValue;
Sprite_Gauge.prototype.currentMaxValue = function () {
  return this._battler && this._costSettings ? this.currentMaxValueSkillsStatesCore() : VisuMZ.SkillsStatesCore.Sprite_Gauge_currentMaxValue.call(this);
};
Sprite_Gauge.prototype.currentMaxValueSkillsStatesCore = function () {
  return this._costSettings.GaugeMaxJS.call(this._battler);
};
VisuMZ.SkillsStatesCore.Sprite_Gauge_gaugeRate = Sprite_Gauge.prototype.gaugeRate;
Sprite_Gauge.prototype.gaugeRate = function () {
  const _0x4f8443 = VisuMZ.SkillsStatesCore.Sprite_Gauge_gaugeRate.call(this);
  return _0x4f8443.clamp(0x0, 0x1);
};
VisuMZ.SkillsStatesCore.Sprite_Gauge_redraw = Sprite_Gauge.prototype.redraw;
Sprite_Gauge.prototype.redraw = function () {
  if (this._battler && this._costSettings) {
    this.bitmap.clear();
    this.redrawSkillsStatesCore();
  } else {
    VisuMZ.SkillsStatesCore.Sprite_Gauge_redraw.call(this);
  }
};
Sprite_Gauge.prototype.currentDisplayedValue = function () {
  let _0x1eeebd = this.currentValue();
  if (Imported.VisuMZ_0_CoreEngine && this.useDigitGrouping()) {
    _0x1eeebd = VisuMZ.GroupDigits(_0x1eeebd);
  }
  return _0x1eeebd;
};
Sprite_Gauge.prototype.redrawSkillsStatesCore = function () {
  this.bitmap.clear();
  this._costSettings.GaugeDrawJS.call(this);
};
Sprite_Gauge.prototype.drawFullGauge = function (_0xb259cd, _0x424312, _0x32ef3c, _0x256a85, _0x15962d, _0x58cf77) {
  const _0x42db2d = this.gaugeRate();
  const _0x21d4fd = Math.floor((_0x15962d - 0x2) * _0x42db2d);
  const _0x71ec6c = _0x58cf77 - 0x2;
  const _0xbf9a57 = this.gaugeBackColor();
  this.bitmap.fillRect(_0x32ef3c, _0x256a85, _0x15962d, _0x58cf77, _0xbf9a57);
  this.bitmap.gradientFillRect(_0x32ef3c + 0x1, _0x256a85 + 0x1, _0x21d4fd, _0x71ec6c, _0xb259cd, _0x424312);
};
Sprite_Gauge.prototype.labelFontFace = function () {
  const _0xb22f21 = VisuMZ.SkillsStatesCore.Settings.Gauge;
  return _0xb22f21.LabelFontMainType === "number" ? $gameSystem.numberFontFace() : $gameSystem.mainFontFace();
};
Sprite_Gauge.prototype.labelFontSize = function () {
  const _0x42b418 = VisuMZ.SkillsStatesCore.Settings.Gauge;
  return _0x42b418.LabelFontMainType === "number" ? $gameSystem.mainFontSize() - 0x6 : $gameSystem.mainFontSize() - 0x2;
};
Sprite_Gauge.prototype.valueFontFace = function () {
  const _0x30d744 = VisuMZ.SkillsStatesCore.Settings.Gauge;
  return _0x30d744.ValueFontMainType === "number" ? $gameSystem.numberFontFace() : $gameSystem.mainFontFace();
};
Sprite_Gauge.prototype.valueFontSize = function () {
  const _0xb9c141 = VisuMZ.SkillsStatesCore.Settings.Gauge;
  return _0xb9c141.ValueFontMainType === "number" ? $gameSystem.mainFontSize() - 0x6 : $gameSystem.mainFontSize() - 0x2;
};
Sprite_Gauge.prototype.labelColor = function () {
  const _0x17afc2 = VisuMZ.SkillsStatesCore.Settings.Gauge;
  if (_0x17afc2.MatchLabelColor) {
    if (_0x17afc2.MatchLabelGaugeColor === 0x1) {
      return this.gaugeColor1();
    } else {
      if (_0x17afc2.MatchLabelGaugeColor === 0x2) {
        return this.gaugeColor2();
      }
    }
  }
  const _0xb21acd = _0x17afc2.PresetLabelGaugeColor;
  return ColorManager.getColor(_0xb21acd);
};
Sprite_Gauge.prototype.labelOutlineColor = function () {
  const _0x579c3e = VisuMZ.SkillsStatesCore.Settings.Gauge;
  if (this.labelOutlineWidth() <= 0x0) {
    return "rgba(0, 0, 0, 0)";
  } else {
    return _0x579c3e.LabelOutlineSolid ? "rgba(0, 0, 0, 1)" : ColorManager.outlineColor();
  }
};
Sprite_Gauge.prototype.labelOutlineWidth = function () {
  return VisuMZ.SkillsStatesCore.Settings.Gauge.LabelOutlineWidth || 0x0;
};
Sprite_Gauge.prototype.valueOutlineColor = function () {
  const _0xd4b88b = VisuMZ.SkillsStatesCore.Settings.Gauge;
  if (this.valueOutlineWidth() <= 0x0) {
    return "rgba(0, 0, 0, 0)";
  } else {
    return _0xd4b88b.ValueOutlineSolid ? "rgba(0, 0, 0, 1)" : ColorManager.outlineColor();
  }
};
Sprite_Gauge.prototype.valueOutlineWidth = function () {
  return VisuMZ.SkillsStatesCore.Settings.Gauge.ValueOutlineWidth || 0x0;
};
VisuMZ.SkillsStatesCore.Sprite_StateIcon_loadBitmap = Sprite_StateIcon.prototype.loadBitmap;
Sprite_StateIcon.prototype.loadBitmap = function () {
  VisuMZ.SkillsStatesCore.Sprite_StateIcon_loadBitmap.call(this);
  this.createTurnDisplaySprite();
};
Sprite_StateIcon.prototype.createTurnDisplaySprite = function () {
  const _0x1a8203 = Window_Base.prototype.lineHeight();
  this._turnDisplaySprite = new Sprite();
  this._turnDisplaySprite.bitmap = new Bitmap(ImageManager.iconWidth, _0x1a8203);
  this._turnDisplaySprite.anchor.x = this.anchor.x;
  this._turnDisplaySprite.anchor.y = this.anchor.y;
  this.addChild(this._turnDisplaySprite);
  this.contents = this._turnDisplaySprite.bitmap;
};
VisuMZ.SkillsStatesCore.Sprite_StateIcon_updateFrame = Sprite_StateIcon.prototype.updateFrame;
Sprite_StateIcon.prototype.updateFrame = function () {
  VisuMZ.SkillsStatesCore.Sprite_StateIcon_updateFrame.call(this);
  this.updateTurnDisplaySprite();
};
Sprite_StateIcon.prototype.drawText = function (_0x405c16, _0x584176, _0x4c9eaa, _0x12157d, _0x5e7d96) {
  this.contents.drawText(_0x405c16, _0x584176, _0x4c9eaa, _0x12157d, this.contents.height, _0x5e7d96);
};
Sprite_StateIcon.prototype.updateTurnDisplaySprite = function () {
  this.resetFontSettings();
  this.contents.clear();
  const _0x428879 = this._battler;
  if (!_0x428879) {
    return;
  }
  const _0x4e1e71 = _0x428879.states().filter(_0x53aa06 => _0x53aa06.iconIndex > 0x0);
  const _0x5bc42c = [...Array(0x8).keys()].filter(_0x2f1db5 => _0x428879.buff(_0x2f1db5) !== 0x0);
  const _0x903f14 = this._animationIndex;
  const _0x26aab4 = _0x4e1e71[_0x903f14];
  if (_0x26aab4) {
    Window_Base.prototype.drawActorStateTurns.call(this, _0x428879, _0x26aab4, 0x0, 0x0);
    Window_Base.prototype.drawActorStateData.call(this, _0x428879, _0x26aab4, 0x0, 0x0);
  } else {
    const _0x355ebf = _0x5bc42c[_0x903f14 - _0x4e1e71.length];
    if (_0x355ebf === undefined) {
      return;
    }
    Window_Base.prototype.drawActorBuffTurns.call(this, _0x428879, _0x355ebf, 0x0, 0x0);
    Window_Base.prototype.drawActorBuffRates.call(this, _0x428879, _0x355ebf, 0x0, 0x0);
  }
};
Sprite_StateIcon.prototype.resetFontSettings = function () {
  this.contents.fontFace = $gameSystem.mainFontFace();
  this.contents.fontSize = $gameSystem.mainFontSize();
  this.resetTextColor();
};
Sprite_StateIcon.prototype.resetTextColor = function () {
  this.changeTextColor(ColorManager.normalColor());
  this.changeOutlineColor(ColorManager.outlineColor());
};
Sprite_StateIcon.prototype.changeTextColor = function (_0x492de8) {
  this.contents.textColor = _0x492de8;
};
Sprite_StateIcon.prototype.changeOutlineColor = function (_0x29297f) {
  this.contents.outlineColor = _0x29297f;
};
Sprite_StateIcon.prototype.hide = function () {
  this._hidden = true;
  this.updateVisibility();
};
Window_Base.prototype.drawSkillCost = function (_0x3c0927, _0x4887b1, _0x5b23f7, _0x244bd6, _0x3212ec) {
  const _0x2b49f3 = this.createAllSkillCostText(_0x3c0927, _0x4887b1);
  const _0x2d0bf3 = this.textSizeEx(_0x2b49f3, _0x5b23f7, _0x244bd6, _0x3212ec);
  const _0x11f846 = _0x5b23f7 + _0x3212ec - _0x2d0bf3.width;
  this.drawTextEx(_0x2b49f3, _0x11f846, _0x244bd6, _0x3212ec);
  this.resetFontSettings();
};
Window_Base.prototype.createAllSkillCostText = function (_0x28fc24, _0x17680b) {
  let _0x2e5b38 = '';
  for (settings of VisuMZ.SkillsStatesCore.Settings.Costs) {
    if (!this.isSkillCostShown(_0x28fc24, _0x17680b, settings)) {
      continue;
    }
    if (_0x2e5b38.length > 0x0) {
      _0x2e5b38 += this.skillCostSeparator();
    }
    _0x2e5b38 += this.createSkillCostText(_0x28fc24, _0x17680b, settings);
  }
  _0x2e5b38 = this.makeAdditionalSkillCostText(_0x28fc24, _0x17680b, _0x2e5b38);
  if (_0x17680b.note.match(/<CUSTOM COST TEXT>\s*([\s\S]*)\s*<\/CUSTOM COST TEXT>/i)) {
    if (_0x2e5b38.length > 0x0) {
      _0x2e5b38 += this.skillCostSeparator();
    }
    _0x2e5b38 += String(RegExp.$1);
  }
  return _0x2e5b38;
};
Window_Base.prototype.makeAdditionalSkillCostText = function (_0x502982, _0x39136b, _0x3ecac4) {
  return _0x3ecac4;
};
Window_Base.prototype.isSkillCostShown = function (_0x4a15f4, _0x56ded6, _0x124a1f) {
  let _0x5cf767 = _0x124a1f.CalcJS.call(_0x4a15f4, _0x56ded6);
  _0x5cf767 = _0x4a15f4.adjustSkillCost(_0x56ded6, _0x5cf767, _0x124a1f);
  return _0x124a1f.ShowJS.call(_0x4a15f4, _0x56ded6, _0x5cf767, _0x124a1f);
};
Window_Base.prototype.createSkillCostText = function (_0x33848d, _0x3eea40, _0x2e07aa) {
  let _0x2bd658 = _0x2e07aa.CalcJS.call(_0x33848d, _0x3eea40);
  _0x2bd658 = _0x33848d.adjustSkillCost(_0x3eea40, _0x2bd658, _0x2e07aa);
  return _0x2e07aa.TextJS.call(_0x33848d, _0x3eea40, _0x2bd658, _0x2e07aa);
};
Window_Base.prototype.skillCostSeparator = function () {
  return " ";
};
Window_Base.prototype.drawActorIcons = function (_0x549e74, _0x403d29, _0x34e997, _0x1666b4) {
  if (!_0x549e74) {
    return;
  }
  VisuMZ.SkillsStatesCore.Window_StatusBase_drawActorIcons.call(this, _0x549e74, _0x403d29, _0x34e997, _0x1666b4);
  this.drawActorIconsAllTurnCounters(_0x549e74, _0x403d29, _0x34e997, _0x1666b4);
};
Window_Base.prototype.drawActorIconsAllTurnCounters = function (_0x4d8a38, _0x2e63b0, _0x44d390, _0x3736b4) {
  _0x3736b4 = _0x3736b4 || 0x90;
  const _0xc749da = ImageManager.iconWidth;
  const _0x44199a = _0x4d8a38.allIcons().slice(0x0, Math.floor(_0x3736b4 / _0xc749da));
  const _0x2f3b3d = _0x4d8a38.states().filter(_0xe38b65 => _0xe38b65.iconIndex > 0x0);
  const _0x500f40 = [...Array(0x8).keys()].filter(_0x2720f6 => _0x4d8a38.buff(_0x2720f6) !== 0x0);
  const _0x272cfb = [];
  let _0xea4ac4 = _0x2e63b0;
  for (let _0x355398 = 0x0; _0x355398 < _0x44199a.length; _0x355398++) {
    this.resetFontSettings();
    const _0x1b48b0 = _0x2f3b3d[_0x355398];
    if (_0x1b48b0) {
      if (!_0x272cfb.includes(_0x1b48b0)) {
        this.drawActorStateTurns(_0x4d8a38, _0x1b48b0, _0xea4ac4, _0x44d390);
      }
      this.drawActorStateData(_0x4d8a38, _0x1b48b0, _0xea4ac4, _0x44d390);
      _0x272cfb.push(_0x1b48b0);
    } else {
      const _0x436623 = _0x500f40[_0x355398 - _0x2f3b3d.length];
      this.drawActorBuffTurns(_0x4d8a38, _0x436623, _0xea4ac4, _0x44d390);
      this.drawActorBuffRates(_0x4d8a38, _0x436623, _0xea4ac4, _0x44d390);
    }
    _0xea4ac4 += _0xc749da;
  }
};
Window_Base.prototype.drawActorStateTurns = function (_0x4b4a21, _0x4145a2, _0x4749d7, _0x173c6d) {
  if (!VisuMZ.SkillsStatesCore.Settings.States.ShowTurns) {
    return;
  }
  if (!_0x4b4a21.isStateAffected(_0x4145a2.id)) {
    return;
  }
  if (_0x4145a2.autoRemovalTiming === 0x0) {
    return;
  }
  if (_0x4145a2.note.match(/<HIDE STATE TURNS>/i)) {
    return;
  }
  const _0x16c3d2 = _0x4b4a21.stateTurns(_0x4145a2.id);
  const _0x57e4b2 = ImageManager.iconWidth;
  const _0xd3c5f4 = ColorManager.stateColor(_0x4145a2);
  this.changeTextColor(_0xd3c5f4);
  this.changeOutlineColor("rgba(0, 0, 0, 1)");
  this.contents.fontBold = true;
  this.contents.fontSize = VisuMZ.SkillsStatesCore.Settings.States.TurnFontSize;
  _0x4749d7 += VisuMZ.SkillsStatesCore.Settings.States.TurnOffsetX;
  _0x173c6d += VisuMZ.SkillsStatesCore.Settings.States.TurnOffsetY;
  this.drawText(_0x16c3d2, _0x4749d7, _0x173c6d, _0x57e4b2, "right");
  this.contents.fontBold = false;
  this.resetFontSettings();
};
Window_Base.prototype.drawActorStateData = function (_0x529211, _0xbab15e, _0x2adb2d, _0x2e5a03) {
  if (!VisuMZ.SkillsStatesCore.Settings.States.ShowData) {
    return;
  }
  const _0xee0a38 = ImageManager.iconWidth;
  const _0x471133 = ColorManager.normalColor();
  this.changeTextColor(_0x471133);
  this.changeOutlineColor("rgba(0, 0, 0, 1)");
  this.contents.fontBold = true;
  this.contents.fontSize = VisuMZ.SkillsStatesCore.Settings.States.DataFontSize;
  _0x2adb2d += VisuMZ.SkillsStatesCore.Settings.States.DataOffsetX;
  _0x2e5a03 += VisuMZ.SkillsStatesCore.Settings.States.DataOffsetY;
  const _0x5e7a46 = String(_0x529211.getStateDisplay(_0xbab15e.id));
  this.drawText(_0x5e7a46, _0x2adb2d, _0x2e5a03, _0xee0a38, "center");
  this.contents.fontBold = false;
  this.resetFontSettings();
};
Window_Base.prototype.drawActorBuffTurns = function (_0x2f419f, _0x5bdbe3, _0x52e51d, _0x56148a) {
  if (!VisuMZ.SkillsStatesCore.Settings.Buffs.ShowTurns) {
    return;
  }
  const _0x54b438 = _0x2f419f.buff(_0x5bdbe3);
  if (_0x54b438 === 0x0) {
    return;
  }
  const _0x4ee410 = _0x2f419f.buffTurns(_0x5bdbe3);
  const _0x3b7b64 = ImageManager.iconWidth;
  const _0x2fdc96 = _0x54b438 > 0x0 ? ColorManager.buffColor() : ColorManager.debuffColor();
  this.changeTextColor(_0x2fdc96);
  this.changeOutlineColor("rgba(0, 0, 0, 1)");
  this.contents.fontBold = true;
  this.contents.fontSize = VisuMZ.SkillsStatesCore.Settings.Buffs.TurnFontSize;
  _0x52e51d += VisuMZ.SkillsStatesCore.Settings.Buffs.TurnOffsetX;
  _0x56148a += VisuMZ.SkillsStatesCore.Settings.Buffs.TurnOffsetY;
  this.drawText(_0x4ee410, _0x52e51d, _0x56148a, _0x3b7b64, "right");
  this.contents.fontBold = false;
  this.resetFontSettings();
};
Window_Base.prototype.drawActorBuffRates = function (_0x4c3574, _0x5673fc, _0x520bbb, _0x3e3ade) {
  if (!VisuMZ.SkillsStatesCore.Settings.Buffs.ShowData) {
    return;
  }
  const _0x2b76b3 = _0x4c3574.paramBuffRate(_0x5673fc);
  const _0x2829e0 = _0x4c3574.buff(_0x5673fc);
  const _0x4a6ffd = ImageManager.iconWidth;
  const _0x16c16a = _0x2829e0 > 0x0 ? ColorManager.buffColor() : ColorManager.debuffColor();
  this.changeTextColor(_0x16c16a);
  this.changeOutlineColor("rgba(0, 0, 0, 1)");
  this.contents.fontBold = true;
  this.contents.fontSize = VisuMZ.SkillsStatesCore.Settings.Buffs.DataFontSize;
  _0x520bbb += VisuMZ.SkillsStatesCore.Settings.Buffs.DataOffsetX;
  _0x3e3ade += VisuMZ.SkillsStatesCore.Settings.Buffs.DataOffsetY;
  const _0x1b2d36 = "%1%".format(Math.round(_0x2b76b3 * 0x64));
  this.drawText(_0x1b2d36, _0x520bbb, _0x3e3ade, _0x4a6ffd, "center");
  this.contents.fontBold = false;
  this.resetFontSettings();
};
VisuMZ.SkillsStatesCore.Window_StatusBase_placeGauge = Window_StatusBase.prototype.placeGauge;
Window_StatusBase.prototype.placeGauge = function (_0x3865f7, _0x3ce5aa, _0x440bf3, _0x117a2d) {
  if (_0x3865f7.isActor()) {
    _0x3ce5aa = this.convertGaugeTypeSkillsStatesCore(_0x3865f7, _0x3ce5aa);
  }
  this.placeExactGauge(_0x3865f7, _0x3ce5aa, _0x440bf3, _0x117a2d);
};
Window_StatusBase.prototype.placeExactGauge = function (_0x284566, _0x277df5, _0x3ace8c, _0x2f434a) {
  if (["none", 'untitled'].includes(_0x277df5.toLowerCase())) {
    return;
  }
  VisuMZ.SkillsStatesCore.Window_StatusBase_placeGauge.call(this, _0x284566, _0x277df5, _0x3ace8c, _0x2f434a);
};
Window_StatusBase.prototype.convertGaugeTypeSkillsStatesCore = function (_0x11c32c, _0x3817c2) {
  const _0x3a2ae7 = _0x11c32c.currentClass().note;
  if (_0x3817c2 === 'hp' && _0x3a2ae7.match(/<REPLACE HP GAUGE:[ ](.*)>/i)) {
    return String(RegExp.$1);
  } else {
    if (_0x3817c2 === 'mp' && _0x3a2ae7.match(/<REPLACE MP GAUGE:[ ](.*)>/i)) {
      return String(RegExp.$1);
    } else {
      return _0x3817c2 === 'tp' && _0x3a2ae7.match(/<REPLACE TP GAUGE:[ ](.*)>/i) ? String(RegExp.$1) : _0x3817c2;
    }
  }
};
VisuMZ.SkillsStatesCore.Window_StatusBase_drawActorIcons = Window_StatusBase.prototype.drawActorIcons;
Window_StatusBase.prototype.drawActorIcons = function (_0x4a141a, _0x55b3e0, _0x47b82b, _0x5fdfdb) {
  if (!_0x4a141a) {
    return;
  }
  Window_Base.prototype.drawActorIcons.call(this, _0x4a141a, _0x55b3e0, _0x47b82b, _0x5fdfdb);
};
VisuMZ.SkillsStatesCore.Window_SkillType_initialize = Window_SkillType.prototype.initialize;
Window_SkillType.prototype.initialize = function (_0x5490a7) {
  VisuMZ.SkillsStatesCore.Window_SkillType_initialize.call(this, _0x5490a7);
  this.createCommandNameWindow(_0x5490a7);
};
Window_SkillType.prototype.createCommandNameWindow = function (_0x42cca4) {
  const _0x113020 = new Rectangle(0x0, 0x0, _0x42cca4.width, _0x42cca4.height);
  this._commandNameWindow = new Window_Base(_0x113020);
  this._commandNameWindow.opacity = 0x0;
  this.addChild(this._commandNameWindow);
  this.updateCommandNameWindow();
};
Window_SkillType.prototype.callUpdateHelp = function () {
  Window_Command.prototype.callUpdateHelp.call(this);
  if (this._commandNameWindow) {
    this.updateCommandNameWindow();
  }
};
Window_SkillType.prototype.updateCommandNameWindow = function () {
  const _0x3bd9fd = this._commandNameWindow;
  _0x3bd9fd.contents.clear();
  const _0x428558 = this.commandStyleCheck(this.index());
  if (_0x428558 === "icon" && this.maxItems() > 0x0) {
    const _0x50efbe = this.itemLineRect(this.index());
    let _0x26b541 = this.commandName(this.index());
    _0x26b541 = _0x26b541.replace(/\\I\[(\d+)\]/gi, '');
    _0x3bd9fd.resetFontSettings();
    this.commandNameWindowDrawBackground(_0x26b541, _0x50efbe);
    this.commandNameWindowDrawText(_0x26b541, _0x50efbe);
    this.commandNameWindowCenter(_0x26b541, _0x50efbe);
  }
};
Window_SkillType.prototype.commandNameWindowDrawBackground = function (_0x5196b2, _0x2df71d) {};
Window_SkillType.prototype.commandNameWindowDrawText = function (_0x587f05, _0x156435) {
  const _0x54fe55 = this._commandNameWindow;
  _0x54fe55.drawText(_0x587f05, 0x0, _0x156435.y, _0x54fe55.innerWidth, "center");
};
Window_SkillType.prototype.commandNameWindowCenter = function (_0x4f6564, _0x2274f6) {
  const _0x424d9d = this._commandNameWindow;
  const _0x3bdb85 = $gameSystem.windowPadding();
  const _0x2260b1 = _0x2274f6.x + Math.floor(_0x2274f6.width / 0x2) + _0x3bdb85;
  _0x424d9d.x = _0x424d9d.width / -0x2 + _0x2260b1;
  _0x424d9d.y = Math.floor(_0x2274f6.height / 0x2);
};
Window_SkillType.prototype.isUseModernControls = function () {
  return Imported.VisuMZ_0_CoreEngine && Window_Command.prototype.isUseModernControls.call(this);
};
Window_SkillType.prototype.makeCommandList = function () {
  if (!this._actor) {
    return;
  }
  const _0x232497 = this._actor.skillTypes();
  for (const _0x27bf44 of _0x232497) {
    const _0x46161c = this.makeCommandName(_0x27bf44);
    this.addCommand(_0x46161c, "skill", true, _0x27bf44);
  }
};
Window_SkillType.prototype.makeCommandName = function (_0x387450) {
  let _0x3f4087 = $dataSystem.skillTypes[_0x387450];
  if (_0x3f4087.match(/\\I\[(\d+)\]/i)) {
    return _0x3f4087;
  }
  if (this.commandStyle() === "text") {
    return _0x3f4087;
  }
  const _0x23a244 = VisuMZ.SkillsStatesCore.Settings.Skills;
  const _0x8ee2c3 = $dataSystem.magicSkills.includes(_0x387450);
  const _0xee132a = _0x8ee2c3 ? _0x23a244.IconStypeMagic : _0x23a244.IconStypeNorm;
  return "\\I[%1]%2".format(_0xee132a, _0x3f4087);
};
Window_SkillType.prototype.itemTextAlign = function () {
  return VisuMZ.SkillsStatesCore.Settings.Skills.CmdTextAlign;
};
Window_SkillType.prototype.drawItem = function (_0x3e0d2a) {
  const _0x30020b = this.commandStyleCheck(_0x3e0d2a);
  if (_0x30020b === "iconText") {
    this.drawItemStyleIconText(_0x3e0d2a);
  } else if (_0x30020b === "icon") {
    this.drawItemStyleIcon(_0x3e0d2a);
  } else {
    Window_Command.prototype.drawItem.call(this, _0x3e0d2a);
  }
};
Window_SkillType.prototype.commandStyle = function () {
  return VisuMZ.SkillsStatesCore.Settings.Skills.CmdStyle;
};
Window_SkillType.prototype.commandStyleCheck = function (_0x2ca6d1) {
  if (_0x2ca6d1 < 0x0) {
    return 'text';
  }
  const _0x44a118 = this.commandStyle();
  if (_0x44a118 !== "auto") {
    return _0x44a118;
  } else {
    if (this.maxItems() > 0x0) {
      const _0x1ccc2f = this.commandName(_0x2ca6d1);
      if (_0x1ccc2f.match(/\\I\[(\d+)\]/i)) {
        const _0x24632d = this.itemLineRect(_0x2ca6d1);
        const _0x554ef3 = this.textSizeEx(_0x1ccc2f).width;
        return _0x554ef3 <= _0x24632d.width ? "iconText" : "icon";
      }
    }
  }
  return "text";
};
Window_SkillType.prototype.drawItemStyleIconText = function (_0x453bb2) {
  const _0x299571 = this.itemLineRect(_0x453bb2);
  const _0x249491 = this.commandName(_0x453bb2);
  const _0x3197a0 = this.textSizeEx(_0x249491).width;
  this.changePaintOpacity(this.isCommandEnabled(_0x453bb2));
  const _0x1ebf44 = this.itemTextAlign();
  if (_0x1ebf44 === 'right') {
    this.drawTextEx(_0x249491, _0x299571.x + _0x299571.width - _0x3197a0, _0x299571.y, _0x3197a0);
  } else {
    if (_0x1ebf44 === "center") {
      const _0x56a246 = _0x299571.x + Math.floor((_0x299571.width - _0x3197a0) / 0x2);
      this.drawTextEx(_0x249491, _0x56a246, _0x299571.y, _0x3197a0);
    } else {
      this.drawTextEx(_0x249491, _0x299571.x, _0x299571.y, _0x3197a0);
    }
  }
};
Window_SkillType.prototype.drawItemStyleIcon = function (_0x5d7d5b) {
  this.commandName(_0x5d7d5b).match(/\\I\[(\d+)\]/i);
  const _0x1b7d12 = Number(RegExp.$1) || 0x0;
  const _0x5647f4 = this.itemLineRect(_0x5d7d5b);
  const _0x3ea16a = _0x5647f4.x + Math.floor((_0x5647f4.width - ImageManager.iconWidth) / 0x2);
  const _0xcb7bd2 = _0x5647f4.y + (_0x5647f4.height - ImageManager.iconHeight) / 0x2;
  this.drawIcon(_0x1b7d12, _0x3ea16a, _0xcb7bd2);
};
VisuMZ.SkillsStatesCore.Window_SkillStatus_refresh = Window_SkillStatus.prototype.refresh;
Window_SkillStatus.prototype.refresh = function () {
  VisuMZ.SkillsStatesCore.Window_SkillStatus_refresh.call(this);
  if (this._actor) {
    this.drawExtendedSkillsStatesCoreStatus();
  }
};
Window_SkillStatus.prototype.drawExtendedSkillsStatesCoreStatus = function () {
  if (!Imported.VisuMZ_0_CoreEngine) {
    return;
  }
  if (!Imported.VisuMZ_1_MainMenuCore) {
    return;
  }
  const _0x2529d7 = this.gaugeLineHeight();
  let _0x222f14 = this.colSpacing() / 0x2 + 0xb4 + 0xb4 + 0xb4;
  let _0xa7adb8 = this.innerWidth - _0x222f14 - 0x2;
  if (_0xa7adb8 >= 0x12c) {
    const _0x1fe5e0 = VisuMZ.CoreEngine.Settings.Param.DisplayedParams;
    const _0x1386db = Math.floor(_0xa7adb8 / 0x2) - 0x18;
    let _0x36292d = _0x222f14;
    let _0x35a8c0 = Math.floor((this.innerHeight - Math.ceil(_0x1fe5e0.length / 0x2) * _0x2529d7) / 0x2);
    let _0x4b6870 = 0x0;
    for (const _0x22a2b8 of _0x1fe5e0) {
      this.drawExtendedParameter(_0x36292d, _0x35a8c0, _0x1386db, _0x22a2b8);
      _0x4b6870++;
      if (_0x4b6870 % 0x2 === 0x0) {
        _0x36292d = _0x222f14;
        _0x35a8c0 += _0x2529d7;
      } else {
        _0x36292d += _0x1386db + 0x18;
      }
    }
  }
  this.resetFontSettings();
};
Window_SkillStatus.prototype.drawExtendedParameter = function (_0x1eb1b6, _0x54aa31, _0x51413d, _0x1b2537) {
  const _0x364ab9 = this.gaugeLineHeight();
  this.resetFontSettings();
  this.drawParamText(_0x1eb1b6, _0x54aa31, _0x51413d, _0x1b2537, true);
  this.resetTextColor();
  this.contents.fontSize -= 0x8;
  const _0x2fe471 = this._actor.paramValueByName(_0x1b2537, true);
  this.contents.drawText(_0x2fe471, _0x1eb1b6, _0x54aa31, _0x51413d, _0x364ab9, "right");
};
VisuMZ.SkillsStatesCore.Window_SkillList_includes = Window_SkillList.prototype.includes;
Window_SkillList.prototype.includes = function (_0x680262) {
  return this.includesSkillsStatesCore(_0x680262);
};
VisuMZ.SkillsStatesCore.Window_SkillList_maxCols = Window_SkillList.prototype.maxCols;
Window_SkillList.prototype.maxCols = function () {
  return SceneManager._scene.constructor === Scene_Battle ? VisuMZ.SkillsStatesCore.Window_SkillList_maxCols.call(this) : VisuMZ.SkillsStatesCore.Settings.Skills.ListWindowCols;
};
VisuMZ.SkillsStatesCore.Window_SkillList_setActor = Window_SkillList.prototype.setActor;
Window_SkillList.prototype.setActor = function (_0x9024aa) {
  const _0x13baad = this._actor !== _0x9024aa;
  VisuMZ.SkillsStatesCore.Window_SkillList_setActor.call(this, _0x9024aa);
  if (_0x13baad) {
    if (this._statusWindow && this._statusWindow.constructor === Window_ShopStatus) {
      this._statusWindow.setItem(this.itemAt(0x0));
    }
  }
};
Window_SkillList.prototype.setStypeId = function (_0x4331f5) {
  if (this._stypeId === _0x4331f5) {
    return;
  }
  this._stypeId = _0x4331f5;
  this.refresh();
  this.scrollTo(0x0, 0x0);
  if (this._statusWindow && this._statusWindow.constructor === Window_ShopStatus) {
    this._statusWindow.setItem(this.itemAt(0x0));
  }
};
Window_SkillList.prototype.includesSkillsStatesCore = function (_0xa95eb5) {
  if (!_0xa95eb5) {
    return VisuMZ.SkillsStatesCore.Window_SkillList_includes.call(this, _0xa95eb5);
  }
  if (!this.checkSkillTypeMatch(_0xa95eb5)) {
    return false;
  }
  if (!this.checkShowHideNotetags(_0xa95eb5)) {
    return false;
  }
  if (!this.checkShowHideJS(_0xa95eb5)) {
    return false;
  }
  return true;
};
Window_SkillList.prototype.checkSkillTypeMatch = function (_0x259a72) {
  return DataManager.getSkillTypes(_0x259a72).includes(this._stypeId);
};
Window_SkillList.prototype.checkShowHideNotetags = function (_0xf741c) {
  if (!VisuMZ.SkillsStatesCore.CheckVisibleBattleNotetags(this._actor, _0xf741c)) {
    return false;
  }
  if (!VisuMZ.SkillsStatesCore.CheckVisibleSwitchNotetags(this._actor, _0xf741c)) {
    return false;
  }
  if (!VisuMZ.SkillsStatesCore.CheckVisibleSkillNotetags(this._actor, _0xf741c)) {
    return false;
  }
  return true;
};
VisuMZ.SkillsStatesCore.CheckVisibleBattleNotetags = function (_0x5072af, _0x1778e3) {
  const _0x5dc385 = _0x1778e3.note;
  if (_0x5dc385.match(/<HIDE IN BATTLE>/i) && $gameParty.inBattle()) {
    return false;
  } else {
    return !(_0x5dc385.match(/<HIDE OUTSIDE BATTLE>/i) && !$gameParty.inBattle());
  }
};
VisuMZ.SkillsStatesCore.CheckVisibleSwitchNotetags = function (_0x9a25a0, _0x5a7642) {
  const _0x348de4 = _0x5a7642.note;
  if (_0x348de4.match(/<SHOW[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x5dac14 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x171d51 of _0x5dac14) {
      if (!$gameSwitches.value(_0x171d51)) {
        return false;
      }
    }
    return true;
  }
  if (_0x348de4.match(/<SHOW ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x1a8cdd = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x56f3ce of _0x1a8cdd) {
      if (!$gameSwitches.value(_0x56f3ce)) {
        return false;
      }
    }
    return true;
  }
  if (_0x348de4.match(/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x42ceac = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x40cbbe of _0x42ceac) {
      if ($gameSwitches.value(_0x40cbbe)) {
        return true;
      }
    }
    return false;
  }
  if (_0x348de4.match(/<HIDE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x43a703 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x315a31 of _0x43a703) {
      if (!$gameSwitches.value(_0x315a31)) {
        return true;
      }
    }
    return false;
  }
  if (_0x348de4.match(/<HIDE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x3b8e27 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x31fa61 of _0x3b8e27) {
      if (!$gameSwitches.value(_0x31fa61)) {
        return true;
      }
    }
    return false;
  }
  if (_0x348de4.match(/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x4194e0 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x989d50 of _0x4194e0) {
      if ($gameSwitches.value(_0x989d50)) {
        return false;
      }
    }
    return true;
  }
  return true;
};
VisuMZ.SkillsStatesCore.CheckVisibleSkillNotetags = function (_0x1bbe48, _0x99f138) {
  const _0x511e81 = _0x99f138.note;
  if (_0x511e81.match(/<SHOW IF LEARNED[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x1fbfb1 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x5bf66f of _0x1fbfb1) {
      if (!_0x1bbe48.isLearnedSkill(_0x5bf66f)) {
        return false;
      }
    }
    return true;
  } else {
    if (_0x511e81.match(/<SHOW IF LEARNED[ ](?:SKILL|SKILLS):[ ](.*)>/i)) {
      const _0x25be10 = RegExp.$1.split(',');
      for (const _0x203c43 of _0x25be10) {
        const _0x26791c = DataManager.getSkillIdWithName(_0x203c43);
        if (!_0x26791c) {
          continue;
        }
        if (!_0x1bbe48.isLearnedSkill(_0x26791c)) {
          return false;
        }
      }
      return true;
    }
  }
  if (_0x511e81.match(/<SHOW IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x1ce467 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x458e63 of _0x1ce467) {
      if (!_0x1bbe48.isLearnedSkill(_0x458e63)) {
        return false;
      }
    }
    return true;
  } else {
    if (_0x511e81.match(/<SHOW IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)) {
      const _0x1396a8 = RegExp.$1.split(',');
      for (const _0x3fefe9 of _0x1396a8) {
        const _0x40ce13 = DataManager.getSkillIdWithName(_0x3fefe9);
        if (!_0x40ce13) {
          continue;
        }
        if (!_0x1bbe48.isLearnedSkill(_0x40ce13)) {
          return false;
        }
      }
      return true;
    }
  }
  if (_0x511e81.match(/<SHOW IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x4054bb = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x1fac9c of _0x4054bb) {
      if (_0x1bbe48.isLearnedSkill(_0x1fac9c)) {
        return true;
      }
    }
    return false;
  } else {
    if (_0x511e81.match(/<SHOW IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)) {
      const _0x777ed8 = RegExp.$1.split(',');
      for (const _0x27a09c of _0x777ed8) {
        const _0x47ce61 = DataManager.getSkillIdWithName(_0x27a09c);
        if (!_0x47ce61) {
          continue;
        }
        if (_0x1bbe48.isLearnedSkill(_0x47ce61)) {
          return true;
        }
      }
      return false;
    }
  }
  if (_0x511e81.match(/<HIDE IF LEARNED[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x49f522 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x595286 of _0x49f522) {
      if (!_0x1bbe48.isLearnedSkill(_0x595286)) {
        return true;
      }
    }
    return false;
  } else {
    if (_0x511e81.match(/<HIDE IF LEARNED[ ](?:SKILL|SKILLS):[ ](.*)>/i)) {
      const _0x57dc16 = RegExp.$1.split(',');
      for (const _0x185b6a of _0x57dc16) {
        const _0x5bf057 = DataManager.getSkillIdWithName(_0x185b6a);
        if (!_0x5bf057) {
          continue;
        }
        if (!_0x1bbe48.isLearnedSkill(_0x5bf057)) {
          return true;
        }
      }
      return false;
    }
  }
  if (_0x511e81.match(/<HIDE IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x575d7c = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x5aa07c of _0x575d7c) {
      if (!_0x1bbe48.isLearnedSkill(_0x5aa07c)) {
        return true;
      }
    }
    return false;
  } else {
    if (_0x511e81.match(/<HIDE IF LEARNED ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)) {
      const _0x390090 = RegExp.$1.split(',');
      for (const _0x33c6ff of _0x390090) {
        const _0x25a244 = DataManager.getSkillIdWithName(_0x33c6ff);
        if (!_0x25a244) {
          continue;
        }
        if (!_0x1bbe48.isLearnedSkill(_0x25a244)) {
          return true;
        }
      }
      return false;
    }
  }
  if (_0x511e81.match(/<HIDE IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0xfd9dec = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x215644 of _0xfd9dec) {
      if (_0x1bbe48.isLearnedSkill(_0x215644)) {
        return false;
      }
    }
    return true;
  } else {
    if (_0x511e81.match(/<HIDE IF LEARNED ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)) {
      const _0x5bbdca = RegExp.$1.split(',');
      for (const _0x5a76fe of _0x5bbdca) {
        const _0x4391a6 = DataManager.getSkillIdWithName(_0x5a76fe);
        if (!_0x4391a6) {
          continue;
        }
        if (_0x1bbe48.isLearnedSkill(_0x4391a6)) {
          return false;
        }
      }
      return true;
    }
  }
  if (_0x511e81.match(/<SHOW IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x413273 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0xf6ec32 of _0x413273) {
      if (!_0x1bbe48.hasSkill(_0xf6ec32)) {
        return false;
      }
    }
    return true;
  } else {
    if (_0x511e81.match(/<SHOW IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ](.*)>/i)) {
      const _0x39e97d = RegExp.$1.split(',');
      for (const _0x3319ae of _0x39e97d) {
        const _0x3ab7d1 = DataManager.getSkillIdWithName(_0x3319ae);
        if (!_0x3ab7d1) {
          continue;
        }
        if (!_0x1bbe48.hasSkill(_0x3ab7d1)) {
          return false;
        }
      }
      return true;
    }
  }
  if (_0x511e81.match(/<SHOW IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x5a10d6 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x432f94 of _0x5a10d6) {
      if (!_0x1bbe48.hasSkill(_0x432f94)) {
        return false;
      }
    }
    return true;
  } else {
    if (_0x511e81.match(/<SHOW IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)) {
      const _0x1afcd0 = RegExp.$1.split(',');
      for (const _0x434555 of _0x1afcd0) {
        const _0x8843a5 = DataManager.getSkillIdWithName(_0x434555);
        if (!_0x8843a5) {
          continue;
        }
        if (!_0x1bbe48.hasSkill(_0x8843a5)) {
          return false;
        }
      }
      return true;
    }
  }
  if (_0x511e81.match(/<SHOW IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0xbcbe85 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x1e02d2 of _0xbcbe85) {
      if (_0x1bbe48.hasSkill(_0x1e02d2)) {
        return true;
      }
    }
    return false;
  } else {
    if (_0x511e81.match(/<SHOW IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)) {
      const _0x238d41 = RegExp.$1.split(',');
      for (const _0x640fe1 of _0x238d41) {
        const _0xa8d03f = DataManager.getSkillIdWithName(_0x640fe1);
        if (!_0xa8d03f) {
          continue;
        }
        if (_0x1bbe48.hasSkill(_0xa8d03f)) {
          return true;
        }
      }
      return false;
    }
  }
  if (_0x511e81.match(/<HIDE IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x7117df = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x554ba9 of _0x7117df) {
      if (!_0x1bbe48.hasSkill(_0x554ba9)) {
        return true;
      }
    }
    return false;
  } else {
    if (_0x511e81.match(/<HIDE IF (?:HAS|HAVE)[ ](?:SKILL|SKILLS):[ ](.*)>/i)) {
      const _0xc2eaa1 = RegExp.$1.split(',');
      for (const _0x2c767a of _0xc2eaa1) {
        const _0x135494 = DataManager.getSkillIdWithName(_0x2c767a);
        if (!_0x135494) {
          continue;
        }
        if (!_0x1bbe48.hasSkill(_0x135494)) {
          return true;
        }
      }
      return false;
    }
  }
  if (_0x511e81.match(/<HIDE IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x424130 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x84fd3a of _0x424130) {
      if (!_0x1bbe48.hasSkill(_0x84fd3a)) {
        return true;
      }
    }
    return false;
  } else {
    if (_0x511e81.match(/<HIDE IF (?:HAS|HAVE) ALL[ ](?:SKILL|SKILLS):[ ](.*)>/i)) {
      const _0x51b996 = RegExp.$1.split(',');
      for (const _0x5934ed of _0x51b996) {
        const _0x1d9f99 = DataManager.getSkillIdWithName(_0x5934ed);
        if (!_0x1d9f99) {
          continue;
        }
        if (!_0x1bbe48.hasSkill(_0x1d9f99)) {
          return true;
        }
      }
      return false;
    }
  }
  if (_0x511e81.match(/<HIDE IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)) {
    const _0x179043 = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
    for (const _0x204ee4 of _0x179043) {
      if (_0x1bbe48.hasSkill(_0x204ee4)) {
        return false;
      }
    }
    return true;
  } else {
    if (_0x511e81.match(/<HIDE IF (?:HAS|HAVE) ANY[ ](?:SKILL|SKILLS):[ ](.*)>/i)) {
      const _0x421db9 = RegExp.$1.split(',');
      for (const _0x105227 of _0x421db9) {
        const _0xac5251 = DataManager.getSkillIdWithName(_0x105227);
        if (!_0xac5251) {
          continue;
        }
        if (_0x1bbe48.hasSkill(_0xac5251)) {
          return false;
        }
      }
      return true;
    }
  }
  return true;
};
Window_SkillList.prototype.checkShowHideJS = function (_0x2701f1) {
  const _0x543a74 = VisuMZ.SkillsStatesCore.skillVisibleJS;
  return _0x543a74[_0x2701f1.id] ? _0x543a74[_0x2701f1.id].call(this, _0x2701f1) : true;
};
VisuMZ.SkillsStatesCore.Window_SkillList_makeItemList = Window_SkillList.prototype.makeItemList;
Window_SkillList.prototype.makeItemList = function () {
  VisuMZ.SkillsStatesCore.Window_SkillList_makeItemList.call(this);
  if (this.canSortSkillTypeList()) {
    this.sortSkillList();
  }
  if (this.canChangeSkillsThroughStateEffects()) {
    this.changeSkillsThroughStateEffects();
  }
};
Window_SkillList.prototype.canSortSkillTypeList = function () {
  return true;
};
Window_SkillList.prototype.sortSkillList = function () {
  const _0x532dcf = VisuMZ.SkillsStatesCore.Settings.Skills.SortSkillTypesAbc || [];
  if (_0x532dcf && _0x532dcf.includes(this._stypeId)) {
    this._data.sort((_0x23866c, _0x116a04) => {
      if (!!_0x23866c && !!_0x116a04) {
        return _0x23866c.name.localeCompare(_0x116a04.name);
      }
      return 0x0;
    });
  } else {
    VisuMZ.SkillsStatesCore.SortByIDandPriority(this._data);
  }
  return this._data;
};
VisuMZ.SkillsStatesCore.SortByIDandPriority = function (_0x1799b2) {
  _0x1799b2.sort((_0x1044c6, _0x349ab9) => {
    if (!!_0x1044c6 && !!_0x349ab9) {
      if (_0x1044c6.sortPriority === undefined) {
        VisuMZ.SkillsStatesCore.Parse_Notetags_Skill_Sorting(_0x1044c6);
      }
      if (_0x349ab9.sortPriority === undefined) {
        VisuMZ.SkillsStatesCore.Parse_Notetags_Skill_Sorting(_0x349ab9);
      }
      const _0x3511fb = _0x1044c6.sortPriority;
      const _0x920a58 = _0x349ab9.sortPriority;
      if (_0x3511fb !== _0x920a58) {
        return _0x920a58 - _0x3511fb;
      }
      return _0x1044c6.id - _0x349ab9.id;
    }
    return 0x0;
  });
  return _0x1799b2;
};
VisuMZ.SkillsStatesCore.SortByIDandPriorityUsingIDs = function (_0x3d0ba7) {
  _0x3d0ba7.sort((_0x43ad6d, _0x3ef09b) => {
    const _0x3ab48b = $dataSkills[_0x43ad6d];
    const _0x211529 = $dataSkills[_0x3ef09b];
    if (!!_0x3ab48b && !!_0x211529) {
      if (_0x3ab48b.sortPriority === undefined) {
        VisuMZ.SkillsStatesCore.Parse_Notetags_Skill_Sorting(_0x3ab48b);
      }
      if (_0x211529.sortPriority === undefined) {
        VisuMZ.SkillsStatesCore.Parse_Notetags_Skill_Sorting(_0x211529);
      }
      const _0x5dd3c6 = _0x3ab48b.sortPriority;
      const _0x12204a = _0x211529.sortPriority;
      if (_0x5dd3c6 !== _0x12204a) {
        return _0x12204a - _0x5dd3c6;
      }
      return _0x43ad6d - _0x3ef09b;
    }
    return 0x0;
  });
  return _0x3d0ba7;
};
Window_SkillList.prototype.canChangeSkillsThroughStateEffects = function () {
  if (!this._actor) {
    return false;
  }
  if (['skillLearn', 'equipBattleSkills', "equipPassives"].includes(this._stypeId)) {
    return false;
  }
  return true;
};
Window_SkillList.prototype.changeSkillsThroughStateEffects = function () {
  const _0x29c79b = this._actor.states();
  for (const _0x197cc2 of _0x29c79b) {
    const _0x533829 = DataManager.getSkillChangesFromState(_0x197cc2);
    for (const _0x1a9221 in _0x533829) {
      const _0xc1fd14 = $dataSkills[Number(_0x1a9221)] || null;
      const _0x397162 = $dataSkills[Number(_0x533829[_0x1a9221])] || null;
      while (this._data.includes(_0xc1fd14)) {
        const _0x36c830 = this._data.indexOf(_0xc1fd14);
        this._data[_0x36c830] = _0x397162;
      }
    }
  }
};
VisuMZ.SkillsStatesCore.Window_SkillList_drawItem = Window_SkillList.prototype.drawItem;
Window_SkillList.prototype.drawItem = function (_0x520e7a) {
  const _0x7a4243 = this.itemAt(_0x520e7a);
  const _0x3322d7 = _0x7a4243 ? _0x7a4243.name : '';
  if (_0x7a4243) {
    this.alterSkillName(_0x7a4243);
  }
  VisuMZ.SkillsStatesCore.Window_SkillList_drawItem.call(this, _0x520e7a);
  if (_0x7a4243) {
    _0x7a4243.name = _0x3322d7;
  }
};
Window_SkillList.prototype.alterSkillName = function (_0x4ebe23) {
  if (_0x4ebe23 && _0x4ebe23.note.match(/<LIST NAME:[ ](.*)>/i)) {
    _0x4ebe23.name = String(RegExp.$1).trim();
    for (;;) {
      if (_0x4ebe23.name.match(/\\V\[(\d+)\]/gi)) {
        _0x4ebe23.name = _0x4ebe23.name.replace(/\\V\[(\d+)\]/gi, (_0xa1989a, _0x465a83) => $gameVariables.value(parseInt(_0x465a83)));
      } else {
        break;
      }
    }
  }
};
Window_SkillList.prototype.drawSkillCost = function (_0x29e246, _0x34784a, _0x410a4f, _0x244510) {
  Window_Base.prototype.drawSkillCost.call(this, this._actor, _0x29e246, _0x34784a, _0x410a4f, _0x244510);
};
Window_SkillList.prototype.setStatusWindow = function (_0x4005b1) {
  this._statusWindow = _0x4005b1;
  this.callUpdateHelp();
};
VisuMZ.SkillsStatesCore.Window_SkillList_updateHelp = Window_SkillList.prototype.updateHelp;
Window_SkillList.prototype.updateHelp = function () {
  VisuMZ.SkillsStatesCore.Window_SkillList_updateHelp.call(this);
  if (this._statusWindow && this._statusWindow.constructor === Window_ShopStatus) {
    this._statusWindow.setItem(this.item());
  }
};