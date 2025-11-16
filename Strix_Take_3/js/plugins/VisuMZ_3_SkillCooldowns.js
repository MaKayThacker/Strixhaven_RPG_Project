//=============================================================================
// VisuStella MZ - Skill Cooldowns
// VisuMZ_3_SkillCooldowns.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_SkillCooldowns = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SkillCooldowns = VisuMZ.SkillCooldowns || {};
VisuMZ.SkillCooldowns.version = 1.06;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.06] [SkillCooldowns]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Skill_Cooldowns_VisuStella_MZ
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Skill Cooldowns are a mechanic added by the game to prevent repeated skill
 * usage (or as some gamers call it, skill spamming). Upon usage in battle, a
 * skill with a cooldown will become unselectable for a duration of time set by
 * either notetags and/or Plugin Commands. This duration would have to pass in
 * order for the skill to become usable once again.
 *
 * Skill Warmups are another addition by this plugin. Skills with warmups will
 * start the battle unusable until a certain duration has passed. This can help
 * prevent strong skills from being used from the very start of battle.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Add cooldowns and warmups to skills.
 * * Control the way they're displayed in game through the Plugin Parameters.
 * * Create trait object effects that alter the finalized values of cooldowns
 *   and warmups applied to skills.
 * * Create action effects that alter the existing durations of cooldowns and
 *   warmups applied to skills.
 * * Create cooldowns for skills that are linked to other skills, skill types,
 *   and/or affect all skills globally.
 * * Plugin Commands that let you alter cooldowns and warmups as you like.
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
 * - VisuMZ_1_SkillsStatesCore
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
 * New Mechanics: Cooldowns and Warmups
 * ============================================================================
 *
 * This section will explain the key points behind cooldowns and warmups.
 *
 * ---
 *
 * Cooldowns:
 *
 * - At the start and end of battle, any and all cooldowns are cleared.
 * - Cooldowns are applied upon usage only during battle.
 * - Upon usage, skills can affect the cooldowns of an entire skill type or all
 *   of a unit's skills at once.
 *
 * ---
 *
 * Warmups:
 *
 * - Upon the start of battle, Warmups will be applied to affected skills.
 * - Upon the end of battle, any and all warmups are cleared.
 * - If the unit in battle has an advantageous start (ie. preemptive strike),
 *   then the warmup duration can be reduced. This value can be changed in the
 *   plugin parameters.
 *
 * ---
 * 
 * Both Cooldowns and Warmups:
 *
 * - While a skill is on CD/WU, it cannot be used.
 * - CD/WU are updated once per turn for each unit.
 * - CD/WU cannot be applied to Attack and Guard skills.
 * - CD/WU cannot be applied to skills with the <Bypass CD/WU> notetag.
 * - CD/WU can be affected by notetag traits found in various database objects.
 * - CD/WU can be altered by skills and items with notetag effects.
 * - CD/WU have a maximum duration that can be set in the Plugin Parameters.
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
 * === Skill-Only Notetags ===
 *
 * The following notetags are used for skills and are related to setting the
 * primary uses of Cooldowns and Warmups.
 *
 * ---
 *
 * <Bypass Cooldowns>
 * <Bypass Warmups>
 *
 * - Used for: Skill Notetags
 * - Lets the skill bypass cooldowns and/or warmups.
 *
 * ---
 *
 * <Cooldown: x>
 *
 * - Used for: Skill Notetags
 * - The skill will gain a cooldown upon usage.
 * - Replace 'x' with the number of turns to set the cooldown to.
 *
 * ---
 *
 * <Skill id Cooldown: x>
 * <Skill name Cooldown: x>
 *
 * - Used for: Skill Notetags
 * - The skill will cause listed skills to gain a cooldown upon usage.
 * - Replace 'x' with the number of turns to set the cooldown to.
 * - Replace 'id' with the ID of the skill found in Database => Skills.
 * - Replace 'name' with the name of the skill found in Database => Skills.
 *
 * ---
 *
 * <Stype id Cooldown: x>
 * <Stype name Cooldown: x>
 *
 * - Used for: Skill Notetags
 * - The skill will cause all skills with the skill type to gain a cooldown
 *   upon usage.
 * - Replace 'x' with the number of turns to set the cooldown to.
 * - Replace 'id' with the ID of the skill type found in Database => Types.
 * - Replace 'name' with the name of the skill type found in Database => Types.
 *
 * ---
 *
 * <Global Cooldown: x>
 *
 * - Used for: Skill Notetags
 * - The skill will cause all skills to gain a cooldown upon usage.
 * - Replace 'x' with the number of turns to set the cooldown to.
 *
 * ---
 *
 * <Warmup: x>
 *
 * - Used for: Skill Notetags
 * - The skill will gain a warmup upon the start of battle.
 * - Replace 'x' with the number of turns to set the warmup to.
 *
 * ---
 *
 * === JavaScript Notetags: Skill-Only ===
 *
 * The following are notetags made for users with JavaScript knowledge to give
 * skills dynamic cooldown or warmup durations.
 *
 * ---
 *
 * <JS Cooldown>
 *  code
 *  code
 *  turns = code
 * </JS Cooldown>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code used to determine the base cooldown
 *   for this skill.
 * - The 'user' variable refers to the user about to perform the skill.
 * - The 'skill' variable refers to the skill being used.
 * - The 'turns' variable refers to the finalized cooldown value.
 *
 * ---
 * 
 * <JS On Cooldown Update>
 *  code
 *  code
 *  code
 * </JS On Cooldown Update>
 * 
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to perform various actions whenever
 *   the skill's cooldown updates.
 * - The 'user' variable refers to the user about to perform the skill.
 * - The 'skill' variable refers to the skill being used.
 * - The 'turns' variable refers to the finalized cooldown value.
 * 
 * ---
 * 
 * <JS On Cooldown Ready>
 *  code
 *  code
 *  code
 * </JS On Cooldown Ready>
 * 
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to perform various actions whenever
 *   the skill's cooldown hits 0 and becomes ready.
 * - The 'user' variable refers to the user about to perform the skill.
 * - The 'skill' variable refers to the skill being used.
 * 
 * ---
 *
 * <JS Warmup>
 *  code
 *  code
 *  turns = code
 * </JS Warmup>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code used to determine the base warmup
 *   for this skill.
 * - The 'user' variable refers to the user about to perform the skill.
 * - The 'skill' variable refers to the skill being used.
 * - The 'turns' variable refers to the finalized warmup value.
 *
 * ---
 * 
 * <JS On Warmup Update>
 *  code
 *  code
 *  code
 * </JS On Warmup Update>
 * 
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to perform various actions whenever
 *   the skill's warmup updates.
 * - The 'user' variable refers to the user about to perform the skill.
 * - The 'skill' variable refers to the skill being used.
 * - The 'turns' variable refers to the finalized warmup value.
 * 
 * ---
 * 
 * <JS On Warmup Ready>
 *  code
 *  code
 *  code
 * </JS On Warmup Ready>
 * 
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to perform various actions whenever
 *   the skill's warmup hits 0 and becomes ready.
 * - The 'user' variable refers to the user about to perform the skill.
 * - The 'skill' variable refers to the skill being used.
 * 
 * ---
 *
 * === Cooldown/Warmup Notetag Traits ===
 *
 * These Notetag Traits help modify the finalized value of a cooldown/warmup.
 * The final cooldown/warmup duration is calculated by the following formula:
 * 
 * (base + plus) * rate + flat
 *
 * The base value is the amount calculated through the <Cooldown: x> and
 * <Warmup: x> notetags found in the section above.
 *
 * ---
 *
 * <Skill id Cooldown Plus: +x>
 * <Skill id Cooldown Plus: -x>
 *
 * <Skill name Cooldown Plus: +x>
 * <Skill name Cooldown Plus: -x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific cooldown changes towards this specific skill.
 * - Replace 'x' with the numeric value to change duration by.
 * - Replace 'id' with the ID of the skill found in Database => Skills.
 * - Replace 'name' with the name of the skill found in Database => Skills.
 *
 * ---
 *
 * <Skill id Cooldown Rate: x%>
 * <Skill id Cooldown Rate: x.x>
 *
 * <Skill name Cooldown Rate: x%>
 * <Skill name Cooldown Rate: x.x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific cooldown changes towards this specific skill.
 * - Replace 'x' with the percentile value to change duration by.
 * - Replace 'x.x' with the float value to change duration by.
 * - Replace 'id' with the ID of the skill found in Database => Skills.
 * - Replace 'name' with the name of the skill found in Database => Skills.
 *
 * ---
 *
 * <Skill id Cooldown Flat: +x>
 * <Skill id Cooldown Flat: -x>
 *
 * <Skill name Cooldown Flat: +x>
 * <Skill name Cooldown Flat: -x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific cooldown changes towards this specific skill.
 * - Replace 'x' with the numeric value to change duration by.
 * - Replace 'id' with the ID of the skill found in Database => Skills.
 * - Replace 'name' with the name of the skill found in Database => Skills.
 *
 * ---
 *
 * <Stype id Cooldown Plus: +x>
 * <Stype id Cooldown Plus: -x>
 *
 * <Stype name Cooldown Plus: +x>
 * <Stype name Cooldown Plus: -x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific cooldown changes towards skills with this skill type.
 * - Replace 'x' with the numeric value to change duration by.
 * - Replace 'id' with the ID of the skill type found in Database => Types.
 * - Replace 'name' with the name of the skill type found in Database => Types.
 *
 * ---
 *
 * <Stype id Cooldown Rate: x%>
 * <Stype id Cooldown Rate: x.x>
 *
 * <Stype name Cooldown Rate: x%>
 * <Stype name Cooldown Rate: x.x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific cooldown changes towards skills with this skill type.
 * - Replace 'x' with the percentile value to change duration by.
 * - Replace 'x.x' with the float value to change duration by.
 * - Replace 'id' with the ID of the skill type found in Database => Types.
 * - Replace 'name' with the name of the skill type found in Database => Types.
 *
 * ---
 *
 * <Stype id Cooldown Flat: +x>
 * <Stype id Cooldown Flat: -x>
 *
 * <Stype name Cooldown Flat: +x>
 * <Stype name Cooldown Flat: -x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific cooldown changes towards skills with this skill type.
 * - Replace 'x' with the numeric value to change duration by.
 * - Replace 'id' with the ID of the skill type found in Database => Types.
 * - Replace 'name' with the name of the skill type found in Database => Types.
 *
 * ---
 *
 * <Global Cooldown Plus: +x>
 * <Global Cooldown Plus: -x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific cooldown changes towards all skills.
 * - Replace 'x' with the numeric value to change duration by.
 *
 * ---
 *
 * <Global Cooldown Rate: x%>
 * <Global Cooldown Rate: x.x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific cooldown changes towards all skills.
 * - Replace 'x' with the percentile value to change duration by.
 * - Replace 'x.x' with the float value to change duration by.
 *
 * ---
 *
 * <Global Cooldown Flat: +x>
 * <Global Cooldown Flat: -x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific cooldown changes towards all skills.
 * - Replace 'x' with the numeric value to change duration by.
 *
 * ---
 *
 * <Skill id Warmup Plus: +x>
 * <Skill id Warmup Plus: -x>
 *
 * <Skill name Warmup Plus: +x>
 * <Skill name Warmup Plus: -x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific warmup changes towards this specific skill.
 * - Replace 'x' with the numeric value to change duration by.
 * - Replace 'id' with the ID of the skill found in Database => Skills.
 * - Replace 'name' with the name of the skill found in Database => Skills.
 *
 * ---
 *
 * <Skill id Warmup Rate: x%>
 * <Skill id Warmup Rate: x.x>
 *
 * <Skill name Warmup Rate: x%>
 * <Skill name Warmup Rate: x.x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific warmup changes towards this specific skill.
 * - Replace 'x' with the percentile value to change duration by.
 * - Replace 'x.x' with the float value to change duration by.
 * - Replace 'id' with the ID of the skill found in Database => Skills.
 * - Replace 'name' with the name of the skill found in Database => Skills.
 *
 * ---
 *
 * <Skill id Warmup Flat: +x>
 * <Skill id Warmup Flat: -x>
 *
 * <Skill name Warmup Flat: +x>
 * <Skill name Warmup Flat: -x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific warmup changes towards this specific skill.
 * - Replace 'x' with the numeric value to change duration by.
 * - Replace 'id' with the ID of the skill found in Database => Skills.
 * - Replace 'name' with the name of the skill found in Database => Skills.
 *
 * ---
 *
 * <Stype id Warmup Plus: +x>
 * <Stype id Warmup Plus: -x>
 *
 * <Stype name Warmup Plus: +x>
 * <Stype name Warmup Plus: -x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific warmup changes towards skills with this skill type.
 * - Replace 'x' with the numeric value to change duration by.
 * - Replace 'id' with the ID of the skill type found in Database => Types.
 * - Replace 'name' with the name of the skill type found in Database => Types.
 *
 * ---
 *
 * <Stype id Warmup Rate: x%>
 * <Stype id Warmup Rate: x.x>
 *
 * <Stype name Warmup Rate: x%>
 * <Stype name Warmup Rate: x.x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific warmup changes towards skills with this skill type.
 * - Replace 'x' with the percentile value to change duration by.
 * - Replace 'x.x' with the float value to change duration by.
 * - Replace 'id' with the ID of the skill type found in Database => Types.
 * - Replace 'name' with the name of the skill type found in Database => Types.
 *
 * ---
 *
 * <Stype id Warmup Flat: +x>
 * <Stype id Warmup Flat: -x>
 *
 * <Stype name Warmup Flat: +x>
 * <Stype name Warmup Flat: -x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific warmup changes towards skills with this skill type.
 * - Replace 'x' with the numeric value to change duration by.
 * - Replace 'id' with the ID of the skill type found in Database => Types.
 * - Replace 'name' with the name of the skill type found in Database => Types.
 *
 * ---
 *
 * <Global Warmup Plus: +x>
 * <Global Warmup Plus: -x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific warmup changes towards all skills.
 * - Replace 'x' with the numeric value to change duration by.
 *
 * ---
 *
 * <Global Warmup Rate: x%>
 * <Global Warmup Rate: x.x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific warmup changes towards all skills.
 * - Replace 'x' with the percentile value to change duration by.
 * - Replace 'x.x' with the float value to change duration by.
 *
 * ---
 *
 * <Global Warmup Flat: +x>
 * <Global Warmup Flat: -x>
 *
 * - Used for: Actor, Class, Item, Weapon, Armor, Enemy, State Notetags
 * - Affects specific warmup changes towards all skills.
 * - Replace 'x' with the numeric value to change duration by.
 *
 * ---
 *
 * === Cooldown/Warmup Notetag Actions ===
 *
 * The following notetags are actively altering effects that target cooldowns
 * and/or warmups. Cooldown effects may be applied at any moment through these
 * while warmup effects will only affect skills on warmup currently.
 *
 * ---
 *
 * <Clear User Cooldowns>
 * <Clear Target Cooldowns>
 *
 * - Used for: Skill, Item Notetags
 * - Clears all cooldowns for the user/target.
 *
 * ---
 *
 * <Clear User Warmups>
 * <Clear Target Warmups>
 *
 * - Used for: Skill, Item Notetags
 * - Clears all warmups for the user/target.
 *
 * ---
 *
 * <User Skill id Cooldown: +x>
 * <User Skill id Cooldown: -x>
 *
 * <User Skill name Cooldown: +x>
 * <User Skill name Cooldown: -x>
 *
 * <Target Skill id Cooldown: +x>
 * <Target Skill id Cooldown: -x>
 *
 * <Target Skill name Cooldown: +x>
 * <Target Skill name Cooldown: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Alters the user/target's cooldown duration for this specific skill.
 * - Replace 'x' with the amount to change the duration by.
 * - Replace 'id' with the ID of the skill found in Database => Skills.
 * - Replace 'name' with the name of the skill found in Database => Skills.
 *
 * ---
 *
 * <User Stype id Cooldown: +x>
 * <User Stype id Cooldown: -x>
 *
 * <User Stype name Cooldown: +x>
 * <User Stype name Cooldown: -x>
 *
 * <Target Stype id Cooldown: +x>
 * <Target Stype id Cooldown: -x>
 *
 * <Target Stype name Cooldown: +x>
 * <Target Stype name Cooldown: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Alters the user/target's cooldown duration for all skills with this type.
 * - Replace 'x' with the amount to change the duration by.
 * - Replace 'id' with the ID of the skill type found in Database => Types.
 * - Replace 'name' with the name of the skill type found in Database => Types.
 *
 * ---
 *
 * <User Global Cooldown: +x>
 * <User Global Cooldown: -x>
 *
 * <Target Global Cooldown: +x>
 * <Target Global Cooldown: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Alters the user/target's cooldown duration for all skills.
 * - Replace 'x' with the amount to change the duration by.
 *
 * ---
 *
 * <User Skill id Warmup: +x>
 * <User Skill id Warmup: -x>
 *
 * <User Skill name Warmup: +x>
 * <User Skill name Warmup: -x>
 *
 * <Target Skill id Warmup: +x>
 * <Target Skill id Warmup: -x>
 *
 * <Target Skill name Warmup: +x>
 * <Target Skill name Warmup: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Alters the user/target's warmup duration for this specific skill.
 * - Replace 'x' with the amount to change the duration by.
 * - Replace 'id' with the ID of the skill found in Database => Skills.
 * - Replace 'name' with the name of the skill found in Database => Skills.
 * - NOTE: Warmup changes only apply to skills that are still in warmup.
 *
 * ---
 *
 * <User Stype id Warmup: +x>
 * <User Stype id Warmup: -x>
 *
 * <User Stype name Warmup: +x>
 * <User Stype name Warmup: -x>
 *
 * <Target Stype id Warmup: +x>
 * <Target Stype id Warmup: -x>
 *
 * <Target Stype name Warmup: +x>
 * <Target Stype name Warmup: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Alters the user/target's warmup duration for all skills with this type.
 * - Replace 'x' with the amount to change the duration by.
 * - Replace 'id' with the ID of the skill type found in Database => Types.
 * - Replace 'name' with the name of the skill type found in Database => Types.
 * - NOTE: Warmup changes only apply to skills that are still in warmup.
 *
 * ---
 *
 * <User Global Warmup: +x>
 * <User Global Warmup: -x>
 *
 * <Target Global Warmup: +x>
 * <Target Global Warmup: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Alters the user/target's warmup duration for all skills.
 * - Replace 'x' with the amount to change the duration by.
 * - NOTE: Warmup changes only apply to skills that are still in warmup.
 *
 * ---
 *
 * ============================================================================
 * Script Calls
 * ============================================================================
 *
 * The following are Script Calls that can be used with this plugin. These are
 * made for JavaScript proficient users. We are not responsible if you use them
 * incorrectly or for unintended usage.
 *
 * ---
 * 
 * === Actor-Related Script Calls ===
 * 
 * ---
 *
 * $actorGetSkillCooldown(actorID, skillID)
 * 
 * - Gets the target actor's cooldown turns for a specific skill.
 * - Replace 'actorID' with a number representing the ID of the target actor.
 * - Replace 'skillID' with a number representing the ID of the target skill.
 * - This will return a number value.
 * 
 *   Example: 
 * 
 *   $actorGetSkillCooldown(1, 172)
 *   $actorGetSkillCooldown(7, 52)
 *
 * ---
 *
 * $actorSetSkillCooldown(actorID, skillID, turns)
 * 
 * - Sets the target actor's cooldown turns for a specific skill to a value.
 * - Replace 'actorID' with a number representing the ID of the target actor.
 * - Replace 'skillID' with a number representing the ID of the target skill.
 * - Replace 'turns' with a number representing the number of turns to set the
 *   target skill's cooldown to.
 * 
 *   Example:
 * 
 *   $actorSetSkillCooldown(1, 172, 5)
 *   $actorSetSkillCooldown(7, 52, 10)
 *
 * ---
 *
 * $actorGetSkillWarmup(actorID, skillID)
 * 
 * - Gets the target actor's warmup turns for a specific skill.
 * - Replace 'actorID' with a number representing the ID of the target actor.
 * - Replace 'skillID' with a number representing the ID of the target skill.
 * - This will return a number value.
 * 
 *   Example: 
 * 
 *   $actorGetSkillWarmup(1, 172)
 *   $actorGetSkillWarmup(7, 52)
 *
 * ---
 *
 * $actorSetSkillWarmup(actorID, skillID, turns)
 * 
 * - Sets the target actor's warmup turns for a specific skill to a value.
 * - Replace 'actorID' with a number representing the ID of the target actor.
 * - Replace 'skillID' with a number representing the ID of the target skill.
 * - Replace 'turns' warmup a number representing the number of turns to set
 *   the target skill's warmup to.
 * 
 *   Example:
 * 
 *   $actorSetSkillWarmup(1, 172, 5)
 *   $actorSetSkillWarmup(7, 52, 10)
 *
 * ---
 * 
 * === Enemy-Related Script Calls ===
 * 
 * ---
 *
 * $enemyGetSkillCooldown(enemyIndex, skillID)
 * 
 * - Gets the target enemy's cooldown turns for a specific skill.
 * - Replace 'enemyIndex' with a number representing the index position of the
 *   target enemy within its troop. Index values start at 0 and go up to 7.
 * - Replace 'skillID' with a number representing the ID of the target skill.
 * - This will return a number value.
 * 
 *   Example: 
 * 
 *   $enemyGetSkillCooldown(0, 172)
 *   $enemyGetSkillCooldown(7, 52)
 *
 * ---
 *
 * $enemySetSkillCooldown(enemyIndex, skillID, turns)
 * 
 * - Sets the target enemy's cooldown turns for a specific skill to a value.
 * - Replace 'enemyIndex' with a number representing the index position of the
 *   target enemy within its troop. Index values start at 0 and go up to 7.
 * - Replace 'skillID' with a number representing the ID of the target skill.
 * - Replace 'turns' with a number representing the number of turns to set the
 *   target skill's cooldown to.
 * 
 *   Example:
 * 
 *   $enemySetSkillCooldown(0, 172, 5)
 *   $enemySetSkillCooldown(7, 52, 10)
 *
 * ---
 *
 * $enemyGetSkillWarmup(enemyIndex, skillID)
 * 
 * - Gets the target enemy's warmup turns for a specific skill.
 * - Replace 'enemyIndex' with a number representing the index position of the
 *   target enemy within its troop. Index values start at 0 and go up to 7.
 * - Replace 'skillID' with a number representing the ID of the target skill.
 * - This will return a number value.
 * 
 *   Example: 
 * 
 *   $enemyGetSkillWarmup(0, 172)
 *   $enemyGetSkillWarmup(7, 52)
 *
 * ---
 *
 * $enemySetSkillWarmup(enemyIndex, skillID, turns)
 * 
 * - Sets the target enemy's warmup turns for a specific skill to a value.
 * - Replace 'enemyIndex' with a number representing the index position of the
 *   target enemy within its troop. Index values start at 0 and go up to 7.
 * - Replace 'skillID' with a number representing the ID of the target skill.
 * - Replace 'turns' warmup a number representing the number of turns to set
 *   the target skill's warmup to.
 * 
 *   Example:
 * 
 *   $enemySetSkillWarmup(0, 172, 5)
 *   $enemySetSkillWarmup(7, 52, 10)
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
 * Actor: Skill Cooldown
 * - Change cooldowns for a specific skill(s).
 *
 *   Step 1: Actor ID(s):
 *   - Select which Actor Target ID(s) to affect.
 *
 *   Step 2: Skill ID(s):
 *   - Select which Skill ID(s) to affect.
 *
 *   Step 3: Operation:
 *   - Set the operation used. =, +, -, *, /, %
 *
 *   Step 4: Value
 *   - Select the modifying value.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Actor: SType Cooldown
 * - Change cooldowns for all skills of a skill type(s).
 *
 *   Step 1: Actor ID(s):
 *   - Select which Actor Target ID(s) to affect.
 *
 *   Step 2: Skill Type ID(s):
 *   - Select which Skill Type ID(s) to affect.
 *
 *   Step 3: Operation:
 *   - Set the operation used. =, +, -, *, /, %
 *
 *   Step 4: Value
 *   - Select the modifying value.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Actor: Global Cooldown
 * - Change cooldowns for all skills for target(s).
 *
 *   Step 1: Actor ID(s):
 *   - Select which Actor Target ID(s) to affect.
 *
 *   Step 2: Operation:
 *   - Set the operation used. =, +, -, *, /, %
 *
 *   Step 3: Value
 *   - Select the modifying value.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Skill Cooldown
 * - Change cooldowns for a specific skill(s).
 *
 *   Step 1: Enemy Index(es):
 *   - Select which Enemy Index(es) to affect.
 *
 *   Step 2: Skill ID(s):
 *   - Select which Skill ID(s) to affect.
 *
 *   Step 3: Operation:
 *   - Set the operation used. =, +, -, *, /, %
 *
 *   Step 4: Value
 *   - Select the modifying value.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Enemy: SType Cooldown
 * - Change cooldowns for all skills of a skill type(s).
 *
 *   Step 1: Enemy Index(es):
 *   - Select which Enemy Index(es) to affect.
 *
 *   Step 2: Skill Type ID(s):
 *   - Select which Skill Type ID(s) to affect.
 *
 *   Step 3: Operation:
 *   - Set the operation used. =, +, -, *, /, %
 *
 *   Step 4: Value
 *   - Select the modifying value.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Enemy: Global Cooldown
 * - Change cooldowns for all skills for target(s).
 *
 *   Step 1: Enemy Index(es):
 *   - Select which Enemy Index(es) to affect.
 *
 *   Step 2: Operation:
 *   - Set the operation used. =, +, -, *, /, %
 *
 *   Step 3: Value
 *   - Select the modifying value.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Cooldown Settings
 * ============================================================================
 *
 * These are the general settings pertaining to cooldowns in-game.
 *
 * ---
 *
 * Settings
 * 
 *   Icon:
 *   - Icon used for Skill Cooldowns.
 *   - Use 0 for no icon.
 * 
 *   Font Color:
 *   - Text Color used to display Skill Cooldowns.
 *   - For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * 
 *   Font Size:
 *   - Font size used to display Skill Cooldowns.
 *
 * ---
 *
 * Window Display
 * 
 *   Show Cooldowns?:
 *   - Display Skill Cooldowns?
 * 
 *   Text Format:
 *   - Text format for displaying Skill Cooldowns.
 *   - %1 - Turns, %2 - Icon
 *
 * ---
 *
 * Mechanics
 * 
 *   Max Cooldown:
 *   - Maximum turns that cooldowns can be.
 * 
 *   JS: On Cooldown Update:
 *   - Code ran when a skill's cooldown updates.
 * 
 *   JS: On Cooldown Ready:
 *   - Code ran when a skill's cooldown reaches 0.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Warmup Settings
 * ============================================================================
 *
 * These are the general settings pertaining to warmups in-game.
 *
 * ---
 *
 * Settings
 * 
 *   Icon:
 *   - Icon used for Skill Warmups.
 *   - Use 0 for no icon.
 * 
 *   Font Color:
 *   - Text Color used to display Skill Warmups.
 *   - For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * 
 *   Font Size:
 *   - Font size used to display Skill Warmups.
 *
 * ---
 *
 * Window Display
 * 
 *   Show Warmups?:
 *   - Display Skill Warmups?
 * 
 *   Text Format:
 *   - Text format for displaying Skill Warmups.
 *   - %1 - Turns, %2 - Icon
 *
 * ---
 *
 * Mechanics
 * 
 *   Preemptive Bonus:
 *   - How many turns should be dropped off Warmups on a Preemptive attack?
 * 
 *   Max Warmup:
 *   - Maximum turns that warmups can be.
 * 
 *   JS: On Warmup Update:
 *   - Code ran when a skill's warmup updates.
 * 
 *   JS: On Warmup Ready:
 *   - Code ran when a skill's warmup reaches 0.
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
 * - Yanfly
 * - Arisu
 * - Olivia
 * - Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.06: February 15, 2024
 * * Bug Fixes!
 * ** Fixed a bug where Battle System - OTB causes consistency issues with
 *    warmup turns. Fixed by Olivia.
 * 
 * Version 1.05: December 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where the warmup turns do not properly reflect for certain
 *    types of battle systems. Fixed by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New script calls added by Arisu:
 * *** $actorGetSkillCooldown
 * *** $actorSetSkillCooldown
 * *** $actorGetSkillWarmup
 * *** $actorSetSkillWarmup
 * *** $enemyGetSkillCooldown
 * *** $enemySetSkillCooldown
 * *** $enemyGetSkillWarmup
 * *** $enemySetSkillWarmup
 * **** Please refer to the help file on how to use these script calls.
 * 
 * Version 1.04: February 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * ** Added compatibility for Chain Battles. Cooldowns will be carried across
 *    chained battles.
 * 
 * Version 1.03: June 4, 2021
 * * Bug Fixes!
 * ** <JS Cooldowns> should now be working properly.
 * 
 * Version 1.02: November 8, 2020
 * * Feature Update!
 * ** Cooldown updating has been changed from the start of an action to the
 *    start of a new turn processing for battlers to ensure accuracy.
 *    Update by Arisu.
 * 
 * Version 1.01: October 18, 2020
 * * Bug Fixes!
 * ** Global and SType Cooldown modifiers should not cause crashes with
 *    specific numbers. Fix made by Yanfly.
 *
 * Version 1.00: September 9, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorSkillCooldown
 * @text Actor: Skill Cooldown
 * @desc Change cooldowns for a specific skill(s).
 *
 * @arg Step1:arraynum
 * @text Step 1: Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Step2:arraynum
 * @text Step 2: Skill ID(s)
 * @type skill[]
 * @desc Select which Skill ID(s) to affect.
 * @default ["1"]
 *
 * @arg Step3:str
 * @text Step 3: Operation
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
 * @arg Step4:eval
 * @text Step 4: Value
 * @desc Select the modifying value.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorStypeCooldown
 * @text Actor: SType Cooldown
 * @desc Change cooldowns for all skills of a skill type(s).
 *
 * @arg Step1:arraynum
 * @text Step 1: Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Step2:arraynum
 * @text Step 2: Skill Type ID(s)
 * @type number[]
 * @min 1
 * @max 99
 * @desc Select which Skill Type ID(s) to affect.
 * @default ["1"]
 *
 * @arg Step3:str
 * @text Step 3: Operation
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
 * @arg Step4:eval
 * @text Step 4: Value
 * @desc Select the modifying value.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorGlobalCooldown
 * @text Actor: Global Cooldown
 * @desc Change cooldowns for all skills for target(s).
 *
 * @arg Step1:arraynum
 * @text Step 1: Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Step2:str
 * @text Step 2: Operation
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
 * @arg Step3:eval
 * @text Step 3: Value
 * @desc Select the modifying value.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemySkillCooldown
 * @text Enemy: Skill Cooldown
 * @desc Change cooldowns for a specific skill(s).
 *
 * @arg Step1:arraynum
 * @text Step 1: Enemy Index(es)
 * @type actor[]
 * @desc Select which Enemy Index(es) to affect.
 * @default ["1"]
 *
 * @arg Step2:arraynum
 * @text Step 2: Skill ID(s)
 * @type skill[]
 * @desc Select which Skill ID(s) to affect.
 * @default ["1"]
 *
 * @arg Step3:str
 * @text Step 3: Operation
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
 * @arg Step4:eval
 * @text Step 4: Value
 * @desc Select the modifying value.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyStypeCooldown
 * @text Enemy: SType Cooldown
 * @desc Change cooldowns for all skills of a skill type(s).
 *
 * @arg Step1:arraynum
 * @text Step 1: Enemy Index(es)
 * @type actor[]
 * @desc Select which Enemy Index(es) to affect.
 * @default ["1"]
 *
 * @arg Step2:arraynum
 * @text Step 2: Skill Type ID(s)
 * @type number[]
 * @min 1
 * @max 99
 * @desc Select which Skill Type ID(s) to affect.
 * @default ["1"]
 *
 * @arg Step3:str
 * @text Step 3: Operation
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
 * @arg Step4:eval
 * @text Step 4: Value
 * @desc Select the modifying value.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyGlobalCooldown
 * @text Enemy: Global Cooldown
 * @desc Change cooldowns for all skills for target(s).
 *
 * @arg Step1:arraynum
 * @text Step 1: Enemy Index(es)
 * @type actor[]
 * @desc Select which Enemy Index(es) to affect.
 * @default ["1"]
 *
 * @arg Step2:str
 * @text Step 2: Operation
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
 * @arg Step3:eval
 * @text Step 3: Value
 * @desc Select the modifying value.
 * You may use JavaScript code.
 * @default 0
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
 * @param SkillCooldowns
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Cooldown:struct
 * @text Skill Cooldowns
 * @type struct<Cooldown>
 * @desc Adjust cooldown settings here.
 * @default {"Settings":"","Icon:num":"0","FontColor:str":"5","FontSize:num":"22","Windows":"","Show:eval":"true","TextFmt:str":"Ready in %1T%2","Mechanics":"","MaxTurns:num":"50","OnUpdateJS:func":"\"// Declare Constants\\nconst id = arguments[0];\\nconst skill = $dataSkills[id];\\nconst user = this;\\n\\n// Perform Actions\\n\"","OnReadyJS:func":"\"// Declare Constants\\nconst id = arguments[0];\\nconst skill = $dataSkills[id];\\nconst user = this;\\n\\n// Perform Actions\\n\""}
 *
 * @param Warmup:struct
 * @text Skill Warmups
 * @type struct<Warmup>
 * @desc Adjust warmup settings here.
 * @default {"Settings":"","Icon:num":"0","FontColor:str":"5","FontSize:num":"22","Windows":"","Show:eval":"true","TextFmt:str":"Prepared in %1T%2","Mechanics":"","Preemptive:num":"10","MaxTurns:num":"50","OnUpdateJS:func":"\"// Declare Constants\\nconst id = arguments[0];\\nconst skill = $dataSkills[id];\\nconst user = this;\\n\\n// Perform Actions\\n\"","OnReadyJS:func":"\"// Declare Constants\\nconst id = arguments[0];\\nconst skill = $dataSkills[id];\\nconst user = this;\\n\\n// Perform Actions\\n\""}
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
 * Cooldown Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Cooldown:
 *
 * @param Settings
 *
 * @param Icon:num
 * @text Icon
 * @parent Settings
 * @desc Icon used for Skill Cooldowns.
 * Use 0 for no icon.
 * @default 0
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Settings
 * @desc Text Color used to display Skill Cooldowns.
 * For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * @default 5
 *
 * @param FontSize:num
 * @text Font Size
 * @parent Settings
 * @type number
 * @min 1
 * @desc Font size used to display Skill Cooldowns.
 * @default 22
 *
 * @param Windows
 * @text Window Display
 *
 * @param Show:eval
 * @text Show Cooldowns?
 * @parent Windows
 * @type boolean
 * @on YES
 * @off NO
 * @desc Display Skill Cooldowns?
 * @default true
 *
 * @param TextFmt:str
 * @text Text Format
 * @parent  Windows
 * @desc Text format for displaying Skill Cooldowns.
 * %1 - Turns, %2 - Icon
 * @default Ready in %1T%2
 *
 * @param Mechanics
 *
 * @param MaxTurns:num
 * @text Max Cooldown
 * @parent Mechanics
 * @type number
 * @min 1
 * @desc Maximum turns that cooldowns can be.
 * @default 50
 *
 * @param OnUpdateJS:func
 * @text JS: On Cooldown Update
 * @parent Mechanics
 * @type note
 * @desc Code ran when a skill's cooldown updates.
 * @default "// Declare Constants\nconst id = arguments[0];\nconst skill = $dataSkills[id];\nconst user = this;\n\n// Perform Actions\n"
 *
 * @param OnReadyJS:func
 * @text JS: On Cooldown Ready
 * @parent Mechanics
 * @type note
 * @desc Code ran when a skill's cooldown reaches 0.
 * @default "// Declare Constants\nconst id = arguments[0];\nconst skill = $dataSkills[id];\nconst user = this;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Warmup Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Warmup:
 *
 * @param Settings
 *
 * @param Icon:num
 * @text Icon
 * @parent Settings
 * @desc Icon used for Skill Warmups.
 * Use 0 for no icon.
 * @default 0
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Settings
 * @desc Text Color used to display Skill Warmups.
 * For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * @default 5
 *
 * @param FontSize:num
 * @text Font Size
 * @parent Settings
 * @type number
 * @min 1
 * @desc Font size used to display Skill Warmups.
 * @default 22
 *
 * @param Windows
 * @text Window Display
 *
 * @param Show:eval
 * @text Show Warmups?
 * @parent Windows
 * @type boolean
 * @on YES
 * @off NO
 * @desc Display Skill Warmups?
 * @default true
 *
 * @param TextFmt:str
 * @text Text Format
 * @parent  Windows
 * @desc Text format for displaying Skill Warmups.
 * %1 - Turns, %2 - Icon
 * @default Prepared in %1T%2
 *
 * @param Mechanics
 *
 * @param Preemptive:num
 * @text Preemptive Bonus
 * @parent Mechanics
 * @type number
 * @min 0
 * @desc How many turns should be dropped off Warmups on a Preemptive attack?
 * @default 10
 *
 * @param MaxTurns:num
 * @text Max Warmup
 * @parent Mechanics
 * @type number
 * @min 1
 * @desc Maximum turns that warmups can be.
 * @default 50
 *
 * @param OnUpdateJS:func
 * @text JS: On Warmup Update
 * @parent Mechanics
 * @type note
 * @desc Code ran when a skill's warmup updates.
 * @default "// Declare Constants\nconst id = arguments[0];\nconst skill = $dataSkills[id];\nconst user = this;\n\n// Perform Actions\n"
 *
 * @param OnReadyJS:func
 * @text JS: On Warmup Ready
 * @parent Mechanics
 * @type note
 * @desc Code ran when a skill's warmup reaches 0.
 * @default "// Declare Constants\nconst id = arguments[0];\nconst skill = $dataSkills[id];\nconst user = this;\n\n// Perform Actions\n"
 *
 */
//=============================================================================

var tier = tier || 0x0;
var dependencies = ['VisuMZ_1_SkillsStatesCore'];
var pluginData = $plugins.filter(function (_0x30d72b) {
  return _0x30d72b.status && _0x30d72b.description.includes("[SkillCooldowns]");
})[0x0];
VisuMZ.SkillCooldowns.Settings = VisuMZ.SkillCooldowns.Settings || {};
VisuMZ.ConvertParams = function (_0x27cc4e, _0x19555f) {
  for (const _0x25793c in _0x19555f) {
    if (_0x25793c.match(/(.*):(.*)/i)) {
      const _0x15234a = String(RegExp.$1);
      const _0x4c479c = String(RegExp.$2).toUpperCase().trim();
      let _0x261f78;
      let _0x25af12;
      let _0x52c640;
      switch (_0x4c479c) {
        case 'NUM':
          _0x261f78 = _0x19555f[_0x25793c] !== '' ? Number(_0x19555f[_0x25793c]) : 0x0;
          break;
        case "ARRAYNUM":
          _0x25af12 = _0x19555f[_0x25793c] !== '' ? JSON.parse(_0x19555f[_0x25793c]) : [];
          _0x261f78 = _0x25af12.map(_0x3bef7c => Number(_0x3bef7c));
          break;
        case "EVAL":
          _0x261f78 = _0x19555f[_0x25793c] !== '' ? eval(_0x19555f[_0x25793c]) : null;
          break;
        case "ARRAYEVAL":
          _0x25af12 = _0x19555f[_0x25793c] !== '' ? JSON.parse(_0x19555f[_0x25793c]) : [];
          _0x261f78 = _0x25af12.map(_0x6c8e78 => eval(_0x6c8e78));
          break;
        case "JSON":
          _0x261f78 = _0x19555f[_0x25793c] !== '' ? JSON.parse(_0x19555f[_0x25793c]) : '';
          break;
        case "ARRAYJSON":
          _0x25af12 = _0x19555f[_0x25793c] !== '' ? JSON.parse(_0x19555f[_0x25793c]) : [];
          _0x261f78 = _0x25af12.map(_0x422bfa => JSON.parse(_0x422bfa));
          break;
        case "FUNC":
          _0x261f78 = _0x19555f[_0x25793c] !== '' ? new Function(JSON.parse(_0x19555f[_0x25793c])) : new Function("return 0");
          break;
        case "ARRAYFUNC":
          _0x25af12 = _0x19555f[_0x25793c] !== '' ? JSON.parse(_0x19555f[_0x25793c]) : [];
          _0x261f78 = _0x25af12.map(_0x57ca30 => new Function(JSON.parse(_0x57ca30)));
          break;
        case "STR":
          _0x261f78 = _0x19555f[_0x25793c] !== '' ? String(_0x19555f[_0x25793c]) : '';
          break;
        case 'ARRAYSTR':
          _0x25af12 = _0x19555f[_0x25793c] !== '' ? JSON.parse(_0x19555f[_0x25793c]) : [];
          _0x261f78 = _0x25af12.map(_0x40d50e => String(_0x40d50e));
          break;
        case "STRUCT":
          _0x52c640 = _0x19555f[_0x25793c] !== '' ? JSON.parse(_0x19555f[_0x25793c]) : {};
          _0x261f78 = VisuMZ.ConvertParams({}, _0x52c640);
          break;
        case 'ARRAYSTRUCT':
          _0x25af12 = _0x19555f[_0x25793c] !== '' ? JSON.parse(_0x19555f[_0x25793c]) : [];
          _0x261f78 = _0x25af12.map(_0x28269e => VisuMZ.ConvertParams({}, JSON.parse(_0x28269e)));
          break;
        default:
          continue;
      }
      _0x27cc4e[_0x15234a] = _0x261f78;
    }
  }
  return _0x27cc4e;
};
(_0x518bdd => {
  const _0x1961ba = _0x518bdd.name;
  for (const _0x2957b3 of dependencies) {
    if (!Imported[_0x2957b3]) {
      alert("%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.".format(_0x1961ba, _0x2957b3));
      SceneManager.exit();
      break;
    }
  }
  const _0x5a4fcf = _0x518bdd.description;
  if (_0x5a4fcf.match(/\[Version[ ](.*?)\]/i)) {
    const _0x243b93 = Number(RegExp.$1);
    if (_0x243b93 !== VisuMZ.SkillCooldowns.version) {
      alert("%1's version does not match plugin's. Please update it in the Plugin Manager.".format(_0x1961ba, _0x243b93));
      SceneManager.exit();
    }
  }
  if (_0x5a4fcf.match(/\[Tier[ ](\d+)\]/i)) {
    const _0x4d365f = Number(RegExp.$1);
    if (_0x4d365f < tier) {
      alert("%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.".format(_0x1961ba, _0x4d365f, tier));
      SceneManager.exit();
    } else {
      tier = Math.max(_0x4d365f, tier);
    }
  }
  VisuMZ.ConvertParams(VisuMZ.SkillCooldowns.Settings, _0x518bdd.parameters);
})(pluginData);
VisuMZ.OperateValues = function (_0x2a6bcb, _0x31c1f6, _0x42ccf4) {
  switch (_0x42ccf4) {
    case '=':
      return _0x31c1f6;
      break;
    case '+':
      return _0x2a6bcb + _0x31c1f6;
      break;
    case '-':
      return _0x2a6bcb - _0x31c1f6;
      break;
    case '*':
      return _0x2a6bcb * _0x31c1f6;
      break;
    case '/':
      return _0x2a6bcb / _0x31c1f6;
      break;
    case '%':
      return _0x2a6bcb % _0x31c1f6;
      break;
  }
  return _0x2a6bcb;
};
PluginManager.registerCommand(pluginData.name, "ActorSkillCooldown", _0x20e0a5 => {
  if (!$gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x20e0a5, _0x20e0a5);
  const _0x556017 = _0x20e0a5.Step1;
  const _0x435842 = _0x20e0a5.Step2;
  const _0x2bc3a4 = _0x20e0a5.Step3;
  const _0x37cd16 = _0x20e0a5.Step4;
  for (const _0x17507b of _0x556017) {
    const _0x58e945 = $gameActors.actor(_0x17507b);
    if (!_0x58e945) {
      continue;
    }
    for (const _0x5a8801 of _0x435842) {
      let _0x2b6cf6 = _0x58e945.cooldown(_0x5a8801);
      _0x2b6cf6 = VisuMZ.OperateValues(_0x2b6cf6, _0x37cd16, _0x2bc3a4);
      _0x58e945.setCooldown(_0x5a8801, _0x2b6cf6);
    }
  }
});
PluginManager.registerCommand(pluginData.name, "ActorStypeCooldown", _0x256fd4 => {
  if (!$gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x256fd4, _0x256fd4);
  const _0x413231 = _0x256fd4.Step1;
  const _0x406cd3 = _0x256fd4.Step2;
  const _0x4c5b01 = _0x256fd4.Step3;
  const _0x203b5 = _0x256fd4.Step4;
  for (const _0x3056ef of _0x413231) {
    const _0xa00908 = $gameActors.actor(_0x3056ef);
    if (!_0xa00908) {
      continue;
    }
    for (const _0x4dafc6 of _0x406cd3) {
      for (const _0xac31b0 of _0xa00908.skills()) {
        if (!_0xac31b0) {
          continue;
        }
        if (!DataManager.getSkillTypes(_0xac31b0).includes(_0x4dafc6)) {
          continue;
        }
        const _0x10afc3 = _0xac31b0.id;
        let _0x5a9cb2 = _0xa00908.cooldown(_0x10afc3);
        _0x5a9cb2 = VisuMZ.OperateValues(_0x5a9cb2, _0x203b5, _0x4c5b01);
        _0xa00908.setCooldown(_0x10afc3, _0x5a9cb2);
      }
    }
  }
});
PluginManager.registerCommand(pluginData.name, "ActorGlobalCooldown", _0x30226b => {
  if (!$gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x30226b, _0x30226b);
  const _0x315815 = _0x30226b.Step1;
  const _0x52c031 = _0x30226b.Step2;
  const _0x5e4705 = _0x30226b.Step3;
  for (const _0x50cf47 of _0x315815) {
    const _0x7f2c4 = $gameActors.actor(_0x50cf47);
    if (!_0x7f2c4) {
      continue;
    }
    for (const _0x3a82d4 of _0x7f2c4.skills()) {
      if (!_0x3a82d4) {
        continue;
      }
      const _0x195e87 = _0x3a82d4.id;
      let _0x325155 = _0x7f2c4.cooldown(_0x195e87);
      _0x325155 = VisuMZ.OperateValues(_0x325155, _0x5e4705, _0x52c031);
      _0x7f2c4.setCooldown(_0x195e87, _0x325155);
    }
  }
});
PluginManager.registerCommand(pluginData.name, "EnemySkillCooldown", _0x3b6e05 => {
  if (!$gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x3b6e05, _0x3b6e05);
  const _0x40c3b3 = _0x3b6e05.Step1;
  const _0x5141ba = _0x3b6e05.Step2;
  const _0x4d7a7c = _0x3b6e05.Step3;
  const _0x1b9fa7 = _0x3b6e05.Step4;
  for (const _0x5c840c of _0x40c3b3) {
    const _0x4b4f67 = $gameTroop.members()[_0x5c840c];
    if (!_0x4b4f67) {
      continue;
    }
    for (const _0x4c6114 of _0x5141ba) {
      let _0x3d67cb = _0x4b4f67.cooldown(_0x4c6114);
      _0x3d67cb = VisuMZ.OperateValues(_0x3d67cb, _0x1b9fa7, _0x4d7a7c);
      _0x4b4f67.setCooldown(_0x4c6114, _0x3d67cb);
    }
  }
});
PluginManager.registerCommand(pluginData.name, "EnemyStypeCooldown", _0x2dd003 => {
  if (!$gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x2dd003, _0x2dd003);
  const _0x178824 = _0x2dd003.Step1;
  const _0x3c1478 = _0x2dd003.Step2;
  const _0x409a28 = _0x2dd003.Step3;
  const _0x3faed5 = _0x2dd003.Step4;
  for (const _0x5d486c of _0x178824) {
    const _0x175dd9 = $gameTroop.members()[_0x5d486c];
    if (!_0x175dd9) {
      continue;
    }
    for (const _0x5f0e3c of _0x3c1478) {
      for (const _0x3f49f9 of _0x175dd9.skills()) {
        if (!_0x3f49f9) {
          continue;
        }
        if (!DataManager.getSkillTypes(_0x3f49f9).includes(_0x5f0e3c)) {
          continue;
        }
        const _0x548f1c = _0x3f49f9.id;
        let _0x51c37e = _0x175dd9.cooldown(_0x548f1c);
        _0x51c37e = VisuMZ.OperateValues(_0x51c37e, _0x3faed5, _0x409a28);
        _0x175dd9.setCooldown(_0x548f1c, _0x51c37e);
      }
    }
  }
});
PluginManager.registerCommand(pluginData.name, 'EnemyGlobalCooldown', _0x301454 => {
  if (!$gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x301454, _0x301454);
  const _0x111e20 = _0x301454.Step1;
  const _0x13279f = _0x301454.Step2;
  const _0x2b2eac = _0x301454.Step3;
  for (const _0x35fe1f of _0x111e20) {
    const _0xf45822 = $gameTroop.members()[_0x35fe1f];
    if (!_0xf45822) {
      continue;
    }
    for (const _0x1fd03b of _0xf45822.skills()) {
      if (!_0x1fd03b) {
        continue;
      }
      const _0x9b7bb0 = _0x1fd03b.id;
      let _0x280d6c = _0xf45822.cooldown(_0x9b7bb0);
      _0x280d6c = VisuMZ.OperateValues(_0x280d6c, _0x2b2eac, _0x13279f);
      _0xf45822.setCooldown(_0x9b7bb0, _0x280d6c);
    }
  }
});
VisuMZ.SkillCooldowns.cooldownJS = {};
VisuMZ.SkillCooldowns.warmupJS = {};
VisuMZ.SkillCooldowns.onCooldownUpdateJS = {};
VisuMZ.SkillCooldowns.onWarmupUpdateJS = {};
VisuMZ.SkillCooldowns.onCooldownReadyJS = {};
VisuMZ.SkillCooldowns.onWarmupReadyJS = {};
VisuMZ.SkillCooldowns.VisuMZ_SkillsStatesCore_Parse_Notetags_Skill_JS = VisuMZ.SkillsStatesCore.Parse_Notetags_Skill_JS;
VisuMZ.SkillsStatesCore.Parse_Notetags_Skill_JS = function (_0x3e5e35) {
  VisuMZ.SkillCooldowns.VisuMZ_SkillsStatesCore_Parse_Notetags_Skill_JS.call(this, _0x3e5e35);
  const _0x4958bb = _0x3e5e35.note;
  if (_0x4958bb.match(/<JS (?:COOLDOWN|COOLDOWNS)>\s*([\s\S]*)\s*<\/JS (?:COOLDOWN|COOLDOWNS)>/i)) {
    const _0x22e191 = String(RegExp.$1);
    const _0xdd6e6d = "\n            const skill = arguments[0];\n            const user = this;\n            const target = this;\n            const a = this;\n            const b = this;\n            let turns = this.cooldown(skill.id);\n            try {\n                %1\n                this.applyCooldown(skill.id, turns);\n            } catch (e) {\n                if ($gameTemp.isPlaytest()) console.log(e);\n            }\n        ".format(_0x22e191);
    VisuMZ.SkillCooldowns.cooldownJS[_0x3e5e35.id] = new Function(_0xdd6e6d);
  }
  if (_0x4958bb.match(/<JS (?:WARMUP|WARMUPS)>\s*([\s\S]*)\s*<\/JS (?:WARMUP|WARMUPS)>/i)) {
    const _0x59ef63 = String(RegExp.$1);
    const _0x1eb71c = "\n            const skill = arguments[0];\n            const user = this;\n            const target = this;\n            const a = this;\n            const b = this;\n            let turns = this.rawWarmup(skill.id);\n            try {\n                %1\n                this.applyWarmup(skill.id, turns);\n            } catch (e) {\n                if ($gameTemp.isPlaytest()) console.log(e);\n            }\n        ".format(_0x59ef63);
    VisuMZ.SkillCooldowns.warmupJS[_0x3e5e35.id] = new Function(_0x1eb71c);
  }
  if (_0x4958bb.match(/<JS ON COOLDOWN UPDATE>\s*([\s\S]*)\s*<\/JS ON COOLDOWN UPDATE>/i)) {
    const _0x359600 = String(RegExp.$1);
    const _0x325f6f = "\n        const id = arguments[0];\n        const skill = $dataSkills[id];\n        const user = this;\n        const target = this;\n        const a = this;\n        const b = this;\n        let turns = this.cooldown(skill.id);\n        try {\n            %1\n        } catch (e) {\n            if ($gameTemp.isPlaytest()) console.log(e);\n        }\n    ".format(_0x359600);
    VisuMZ.SkillCooldowns.onCooldownUpdateJS[_0x3e5e35.id] = new Function(_0x325f6f);
  }
  if (_0x4958bb.match(/<JS ON WARMUP UPDATE>\s*([\s\S]*)\s*<\/JS ON WARMUP UPDATE>/i)) {
    const _0x40d036 = String(RegExp.$1);
    const _0x4a76d6 = "\n        const id = arguments[0];\n        const skill = $dataSkills[id];\n        const user = this;\n        const target = this;\n        const a = this;\n        const b = this;\n        let turns = this.rawWarmup(skill.id);\n        try {\n            %1\n        } catch (e) {\n            if ($gameTemp.isPlaytest()) console.log(e);\n        }\n    ".format(_0x40d036);
    VisuMZ.SkillCooldowns.onWarmupUpdateJS[_0x3e5e35.id] = new Function(_0x4a76d6);
  }
  if (_0x4958bb.match(/<JS ON COOLDOWN READY>\s*([\s\S]*)\s*<\/JS ON COOLDOWN READY>/i)) {
    const _0x4e6b97 = String(RegExp.$1);
    const _0x144ae0 = "\n        const id = arguments[0];\n        const skill = $dataSkills[id];\n        const user = this;\n        const target = this;\n        const a = this;\n        const b = this;\n        let turns = this.cooldown(skill.id);\n        try {\n            %1\n        } catch (e) {\n            if ($gameTemp.isPlaytest()) console.log(e);\n        }\n    ".format(_0x4e6b97);
    VisuMZ.SkillCooldowns.onCooldownReadyJS[_0x3e5e35.id] = new Function(_0x144ae0);
  }
  if (_0x4958bb.match(/<JS ON WARMUP READY>\s*([\s\S]*)\s*<\/JS ON WARMUP READY>/i)) {
    const _0x5ca433 = String(RegExp.$1);
    const _0x32ad16 = "\n        const id = arguments[0];\n        const skill = $dataSkills[id];\n        const user = this;\n        const target = this;\n        const a = this;\n        const b = this;\n        let turns = this.rawWarmup(skill.id);\n        try {\n            %1\n        } catch (e) {\n            if ($gameTemp.isPlaytest()) console.log(e);\n        }\n    ".format(_0x5ca433);
    VisuMZ.SkillCooldowns.onWarmupReadyJS[_0x3e5e35.id] = new Function(_0x32ad16);
  }
};
VisuMZ.SkillCooldowns.BattleManager_processTurn = BattleManager.processTurn;
BattleManager.processTurn = function () {
  if (this._subject) {
    this._subject.prepareUpdateSkillCooldowns();
  }
  VisuMZ.SkillCooldowns.BattleManager_processTurn.call(this);
};
VisuMZ.SkillCooldowns.Game_Action_applyItemUserEffect = Game_Action.prototype.applyItemUserEffect;
Game_Action.prototype.applyItemUserEffect = function (_0x273904) {
  VisuMZ.SkillCooldowns.Game_Action_applyItemUserEffect.call(this, _0x273904);
  this.applySkillCooldownEffects(_0x273904);
};
Game_Action.prototype.applySkillCooldownEffects = function (_0x3f4ab8) {
  this.applyClearCooldownEffects(_0x3f4ab8);
  this.applyChangeCooldownEffects(_0x3f4ab8);
  this.applyChangeStypeCooldownEffects(_0x3f4ab8);
  this.applyChangeGlobalCooldownEffects(_0x3f4ab8);
  this.applyChangeWarmupEffects(_0x3f4ab8);
  this.applyChangeStypeWarmupEffects(_0x3f4ab8);
  this.applyChangeGlobalWarmupEffects(_0x3f4ab8);
};
Game_Action.prototype.applyClearCooldownEffects = function (_0x3af8ce) {
  const _0x23d97f = this.item().note;
  if (_0x23d97f.match(/<CLEAR USER COOLDOWNS>/i)) {
    this.subject().clearCooldowns();
  }
  if (_0x23d97f.match(/<CLEAR TARGET COOLDOWNS>/i)) {
    _0x3af8ce.clearCooldowns();
  }
  if (_0x23d97f.match(/<CLEAR USER WARMUPS>/i)) {
    this.subject().clearWarmups();
  }
  if (_0x23d97f.match(/<CLEAR TARGET WARMUPS>/i)) {
    _0x3af8ce.clearWarmups();
  }
};
Game_Action.prototype.applyChangeCooldownEffects = function (_0x21b596) {
  const _0x379244 = this.item().note;
  const _0x52af41 = _0x379244.match(/<USER SKILL[ ](.*)[ ]COOLDOWN:[ ]([\+\-]\d+)>/gi);
  if (_0x52af41) {
    for (const _0x3b66da of _0x52af41) {
      let _0x547fd8 = 0x0;
      let _0xe0024c = 0x0;
      if (_0x3b66da.match(/<USER SKILL[ ](\d+)[ ]COOLDOWN:[ ]([\+\-]\d+)>/i)) {
        _0x547fd8 = Number(RegExp.$1);
        _0xe0024c = Number(RegExp.$2);
      } else {
        if (_0x3b66da.match(/<USER SKILL[ ](.*)[ ]COOLDOWN:[ ]([\+\-]\d+)>/i)) {
          _0x547fd8 = DataManager.getSkillIdWithName(RegExp.$1);
          _0xe0024c = Number(RegExp.$2);
        }
      }
      this.subject().addCooldown(_0x547fd8, _0xe0024c);
    }
  }
  const _0x99b9b4 = _0x379244.match(/<TARGET SKILL[ ](.*)[ ]COOLDOWN:[ ]([\+\-]\d+)>/gi);
  if (_0x99b9b4) {
    for (const _0x5312c5 of _0x99b9b4) {
      let _0x4cbc83 = 0x0;
      let _0x21da43 = 0x0;
      if (_0x5312c5.match(/<TARGET SKILL[ ](\d+)[ ]COOLDOWN:[ ]([\+\-]\d+)>/i)) {
        _0x4cbc83 = Number(RegExp.$1);
        _0x21da43 = Number(RegExp.$2);
      } else {
        if (_0x5312c5.match(/<TARGET SKILL[ ](.*)[ ]COOLDOWN:[ ]([\+\-]\d+)>/i)) {
          _0x4cbc83 = DataManager.getSkillIdWithName(RegExp.$1);
          _0x21da43 = Number(RegExp.$2);
        }
      }
      _0x21b596.addCooldown(_0x4cbc83, _0x21da43);
    }
  }
};
Game_Action.prototype.applyChangeStypeCooldownEffects = function (_0xe3fe9d) {
  const _0x4d4b5d = this.item().note;
  const _0x4981e1 = _0x4d4b5d.match(/<USER STYPE[ ](.*)[ ]COOLDOWN:[ ]([\+\-]\d+)>/gi);
  if (_0x4981e1) {
    for (const _0x2a91a6 of _0x4981e1) {
      let _0x596abd = 0x0;
      let _0x1d7aed = 0x0;
      if (_0x2a91a6.match(/<USER STYPE[ ](\d+)[ ]COOLDOWN:[ ]([\+\-]\d+)>/i)) {
        _0x596abd = Number(RegExp.$1);
        _0x1d7aed = Number(RegExp.$2);
      } else {
        if (_0x2a91a6.match(/<USER STYPE[ ](.*)[ ]COOLDOWN:[ ]([\+\-]\d+)>/i)) {
          _0x596abd = DataManager.getSkillIdWithName(RegExp.$1);
          _0x1d7aed = Number(RegExp.$2);
        }
      }
      for (const _0x2ce7a9 of this.subject().skills()) {
        if (_0x2ce7a9) {
          const _0x3c4e55 = DataManager.getSkillTypes(_0x2ce7a9);
          if (_0x3c4e55.includes(_0x596abd)) {
            this.subject().addCooldown(_0x2ce7a9.id, _0x1d7aed);
          }
        }
      }
    }
  }
  const _0x25bf3c = _0x4d4b5d.match(/<TARGET STYPE[ ](.*)[ ]COOLDOWN:[ ]([\+\-]\d+)>/gi);
  if (_0x25bf3c) {
    for (const _0x220408 of _0x25bf3c) {
      let _0x482b62 = 0x0;
      let _0x2bbddc = 0x0;
      if (_0x220408.match(/<TARGET STYPE[ ](\d+)[ ]COOLDOWN:[ ]([\+\-]\d+)>/i)) {
        _0x482b62 = Number(RegExp.$1);
        _0x2bbddc = Number(RegExp.$2);
      } else if (_0x220408.match(/<TARGET STYPE[ ](.*)[ ]COOLDOWN:[ ]([\+\-]\d+)>/i)) {
        _0x482b62 = DataManager.getSkillIdWithName(RegExp.$1);
        _0x2bbddc = Number(RegExp.$2);
      }
      for (const _0x491b70 of _0xe3fe9d.skills()) {
        if (_0x491b70) {
          const _0x5733d2 = DataManager.getSkillTypes(_0x491b70);
          if (_0x5733d2.includes(_0x482b62)) {
            _0xe3fe9d.addCooldown(_0x491b70.id, _0x2bbddc);
          }
        }
      }
    }
  }
};
Game_Action.prototype.applyChangeGlobalCooldownEffects = function (_0xeeedbe) {
  const _0xa26487 = this.item().note;
  if (_0xa26487.match(/<USER GLOBAL COOLDOWN:[ ]([\+\-]\d+)>/i)) {
    const _0x5d2489 = Number(RegExp.$1);
    for (const _0x194b36 of this.subject().skills()) {
      if (_0x194b36) {
        this.subject().addCooldown(_0x194b36.id, _0x5d2489);
      }
    }
  }
  if (_0xa26487.match(/<TARGET GLOBAL COOLDOWN:[ ]([\+\-]\d+)>/i)) {
    const _0x1538ca = Number(RegExp.$1);
    for (const _0x2a7c32 of _0xeeedbe.skills()) {
      if (_0x2a7c32) {
        _0xeeedbe.addCooldown(_0x2a7c32.id, _0x1538ca);
      }
    }
  }
};
Game_Action.prototype.applyChangeWarmupEffects = function (_0x443394) {
  const _0x466737 = this.item().note;
  const _0x414800 = _0x466737.match(/<USER SKILL[ ](.*)[ ]WARMUP:[ ]([\+\-]\d+)>/gi);
  if (_0x414800) {
    for (const _0x49938a of _0x414800) {
      let _0x3a38df = 0x0;
      let _0x59bf06 = 0x0;
      if (_0x49938a.match(/<USER SKILL[ ](\d+)[ ]WARMUP:[ ]([\+\-]\d+)>/i)) {
        _0x3a38df = Number(RegExp.$1);
        _0x59bf06 = Number(RegExp.$2);
      } else if (_0x49938a.match(/<USER SKILL[ ](.*)[ ]WARMUP:[ ]([\+\-]\d+)>/i)) {
        _0x3a38df = DataManager.getSkillIdWithName(RegExp.$1);
        _0x59bf06 = Number(RegExp.$2);
      }
      this.subject().addWarmup(_0x3a38df, _0x59bf06);
    }
  }
  const _0x59a940 = _0x466737.match(/<TARGET SKILL[ ](.*)[ ]WARMUP:[ ]([\+\-]\d+)>/gi);
  if (_0x59a940) {
    for (const _0x100fbe of _0x59a940) {
      let _0x4187eb = 0x0;
      let _0x56f3ba = 0x0;
      if (_0x100fbe.match(/<TARGET SKILL[ ](\d+)[ ]WARMUP:[ ]([\+\-]\d+)>/i)) {
        _0x4187eb = Number(RegExp.$1);
        _0x56f3ba = Number(RegExp.$2);
      } else {
        if (_0x100fbe.match(/<TARGET SKILL[ ](.*)[ ]WARMUP:[ ]([\+\-]\d+)>/i)) {
          _0x4187eb = DataManager.getSkillIdWithName(RegExp.$1);
          _0x56f3ba = Number(RegExp.$2);
        }
      }
      _0x443394.addWarmup(_0x4187eb, _0x56f3ba);
    }
  }
};
Game_Action.prototype.applyChangeStypeWarmupEffects = function (_0x1b928d) {
  const _0x2f63e1 = this.item().note;
  const _0x1a7d94 = _0x2f63e1.match(/<USER STYPE[ ](.*)[ ]WARMUP:[ ]([\+\-]\d+)>/gi);
  if (_0x1a7d94) {
    for (const _0x1aa500 of _0x1a7d94) {
      let _0x232859 = 0x0;
      let _0x12e125 = 0x0;
      if (_0x1aa500.match(/<USER STYPE[ ](\d+)[ ]WARMUP:[ ]([\+\-]\d+)>/i)) {
        _0x232859 = Number(RegExp.$1);
        _0x12e125 = Number(RegExp.$2);
      } else if (_0x1aa500.match(/<USER STYPE[ ](.*)[ ]WARMUP:[ ]([\+\-]\d+)>/i)) {
        _0x232859 = DataManager.getSkillIdWithName(RegExp.$1);
        _0x12e125 = Number(RegExp.$2);
      }
      for (const _0x280614 of this.subject().skills()) {
        if (_0x280614) {
          const _0x20baf2 = DataManager.getSkillTypes(_0x280614);
          if (_0x20baf2.includes(_0x232859)) {
            this.subject().addWarmup(_0x280614.id, _0x12e125);
          }
        }
      }
    }
  }
  const _0x46e57c = _0x2f63e1.match(/<TARGET STYPE[ ](.*)[ ]WARMUP:[ ]([\+\-]\d+)>/gi);
  if (_0x46e57c) {
    for (const _0x18c07c of _0x46e57c) {
      let _0xdbfd94 = 0x0;
      let _0x1a2da7 = 0x0;
      if (_0x18c07c.match(/<TARGET STYPE[ ](\d+)[ ]WARMUP:[ ]([\+\-]\d+)>/i)) {
        _0xdbfd94 = Number(RegExp.$1);
        _0x1a2da7 = Number(RegExp.$2);
      } else {
        if (_0x18c07c.match(/<TARGET STYPE[ ](.*)[ ]WARMUP:[ ]([\+\-]\d+)>/i)) {
          _0xdbfd94 = DataManager.getSkillIdWithName(RegExp.$1);
          _0x1a2da7 = Number(RegExp.$2);
        }
      }
      for (const _0x3f1312 of _0x1b928d.skills()) {
        if (_0x3f1312) {
          const _0x2e4c7c = DataManager.getSkillTypes(_0x3f1312);
          if (_0x2e4c7c.includes(_0xdbfd94)) {
            _0x1b928d.addWarmup(_0x3f1312.id, _0x1a2da7);
          }
        }
      }
    }
  }
};
Game_Action.prototype.applyChangeGlobalWarmupEffects = function (_0x498f76) {
  const _0x44d8b1 = this.item().note;
  if (_0x44d8b1.match(/<USER GLOBAL WARMUP:[ ]([\+\-]\d+)>/i)) {
    const _0x862ee9 = Number(RegExp.$1);
    for (const _0x1fd46c of this.subject().skills()) {
      if (_0x1fd46c) {
        this.subject().addWarmup(_0x1fd46c.id, _0x862ee9);
      }
    }
  }
  if (_0x44d8b1.match(/<TARGET GLOBAL WARMUP:[ ]([\+\-]\d+)>/i)) {
    const _0x34b68d = Number(RegExp.$1);
    for (const _0x117766 of _0x498f76.skills()) {
      if (_0x117766) {
        _0x498f76.addWarmup(_0x117766.id, _0x34b68d);
      }
    }
  }
};
VisuMZ.SkillCooldowns.Game_BattlerBase_initMembers = Game_BattlerBase.prototype.initMembers;
Game_BattlerBase.prototype.initMembers = function () {
  VisuMZ.SkillCooldowns.Game_BattlerBase_initMembers.call(this);
  this.initSkillCooldowns();
};
Game_BattlerBase.prototype.initSkillCooldowns = function () {
  this.clearCooldowns();
  this.clearWarmups();
};
Game_BattlerBase.prototype.clearCooldowns = function () {
  this._skillCooldowns = {};
};
Game_BattlerBase.prototype.cooldown = function (_0x1428a9) {
  if (this._skillCooldowns === undefined) {
    this.initSkillCooldowns();
  }
  if (this.isBypassCooldowns()) {
    return 0x0;
  }
  return this._skillCooldowns[_0x1428a9] || 0x0;
};
Game_BattlerBase.prototype.isBypassCooldowns = function (_0x1d06e3) {
  if (!$gameParty.inBattle()) {
    return true;
  }
  if (this.attackSkillId() === _0x1d06e3) {
    return true;
  }
  if (this.guardSkillId() === _0x1d06e3) {
    return true;
  }
  const _0x56bc80 = $dataSkills[_0x1d06e3];
  if (_0x56bc80 && _0x56bc80.note.match(/<BYPASS COOLDOWNS>/i)) {
    return true;
  }
  if (_0x56bc80 && _0x56bc80.name.toUpperCase() === "WAIT") {
    return true;
  }
  return false;
};
Game_BattlerBase.prototype.onCooldownUpdate = function (_0xcf604b) {
  if (!$gameParty.inBattle()) {
    return;
  }
  const _0x1bbd69 = VisuMZ.SkillCooldowns.Settings.Cooldown;
  if (_0x1bbd69.OnUpdateJS) {
    _0x1bbd69.OnUpdateJS.call(this, _0xcf604b);
  }
  if (VisuMZ.SkillCooldowns.onCooldownUpdateJS[_0xcf604b]) {
    VisuMZ.SkillCooldowns.onCooldownUpdateJS[_0xcf604b].call(this, _0xcf604b);
  }
};
Game_BattlerBase.prototype.onCooldownReady = function (_0x56a4ea) {
  if (!$gameParty.inBattle()) {
    return;
  }
  const _0xdaa44d = VisuMZ.SkillCooldowns.Settings.Cooldown;
  if (_0xdaa44d.OnReadyJS) {
    _0xdaa44d.OnReadyJS.call(this, _0x56a4ea);
  }
  if (VisuMZ.SkillCooldowns.onCooldownReadyJS[_0x56a4ea]) {
    VisuMZ.SkillCooldowns.onCooldownReadyJS[_0x56a4ea].call(this, _0x56a4ea);
  }
};
Game_BattlerBase.prototype.setCooldown = function (_0x4bd8ac, _0x49f7ab) {
  if (this._skillCooldowns === undefined) {
    this.initSkillCooldowns();
  }
  if (this.isBypassCooldowns(_0x4bd8ac)) {
    return;
  }
  _0x49f7ab = Math.ceil(_0x49f7ab);
  _0x49f7ab = _0x49f7ab.clamp(0x0, VisuMZ.SkillCooldowns.Settings.Cooldown.MaxTurns);
  const _0x343a4b = this.cooldown(_0x4bd8ac);
  ;
  this._skillCooldowns[_0x4bd8ac] = _0x49f7ab;
  if (this._skillCooldowns[_0x4bd8ac] <= 0x0) {
    if (_0x343a4b > 0x0) {
      this.onCooldownReady(_0x4bd8ac);
    }
    delete this._skillCooldowns[_0x4bd8ac];
  }
};
Game_BattlerBase.prototype.addCooldown = function (_0x5b4360, _0x154a5c) {
  if (this._skillCooldowns === undefined) {
    this.initSkillCooldowns();
  }
  this._skillCooldowns[_0x5b4360] = this._skillCooldowns[_0x5b4360] || 0x0;
  this.setCooldown(_0x5b4360, this._skillCooldowns[_0x5b4360] + _0x154a5c);
};
Game_BattlerBase.prototype.applyCooldown = function (_0x273fbe, _0x4e41b8) {
  _0x4e41b8 = this.applyCDWUmodifiers(_0x273fbe, _0x4e41b8, "COOLDOWN");
  this.setCooldown(_0x273fbe, Math.max(_0x4e41b8, this.cooldown(_0x273fbe)));
};
Game_BattlerBase.prototype.applyStypeCooldowns = function (_0xfa0467, _0x1d0416) {
  for (const _0xd0ee3d of this.skills()) {
    if (_0xd0ee3d) {
      const _0x52d550 = DataManager.getSkillTypes(_0xd0ee3d);
      if (_0x52d550.includes(_0xfa0467)) {
        this.applyCooldown(_0xd0ee3d.id, _0x1d0416);
      }
    }
  }
};
Game_BattlerBase.prototype.applyGlobalCooldowns = function (_0x5d6050) {
  for (const _0x5bbae5 of this.skills()) {
    if (_0x5bbae5) {
      this.applyCooldown(_0x5bbae5.id, _0x5d6050);
    }
  }
};
Game_BattlerBase.prototype.updateCooldowns = function (_0x1070e8) {
  _0x1070e8 = _0x1070e8 || 0x1;
  for (const _0x3b97e7 in this._skillCooldowns) {
    const _0x13371f = this._skillCooldowns[_0x3b97e7] || 0x0;
    this._skillCooldowns[_0x3b97e7] -= _0x1070e8;
    this.onCooldownUpdate(_0x3b97e7);
    if (this._skillCooldowns[_0x3b97e7] <= 0x0) {
      if (_0x13371f > 0x0) {
        this.onCooldownReady(_0x3b97e7);
      }
      delete this._skillCooldowns[_0x3b97e7];
    }
  }
};
Game_BattlerBase.prototype.clearWarmups = function () {
  this._skillWarmups = {};
};
Game_BattlerBase.prototype.warmup = function (_0x564294) {
  return this.rawWarmup(_0x564294) + this.cooldown(_0x564294);
};
Game_BattlerBase.prototype.rawWarmup = function (_0x22b98e) {
  if (this._skillWarmups === undefined) {
    this.initSkillCooldowns();
  }
  if (this.isBypassWarmups()) {
    return 0x0;
  }
  return this._skillWarmups[_0x22b98e] || 0x0;
};
Game_BattlerBase.prototype.isBypassWarmups = function (_0x4521cd) {
  if (this.attackSkillId() === _0x4521cd) {
    return true;
  }
  if (this.guardSkillId() === _0x4521cd) {
    return true;
  }
  const _0x116800 = $dataSkills[_0x4521cd];
  if (_0x116800 && _0x116800.note.match(/<BYPASS WARMUPS>/i)) {
    return true;
  }
  if (_0x116800 && _0x116800.name.toUpperCase() === 'WAIT') {
    return true;
  }
  return false;
};
Game_BattlerBase.prototype.onWarmupUpdate = function (_0x380772) {
  if (!$gameParty.inBattle()) {
    return;
  }
  const _0x1355b6 = VisuMZ.SkillCooldowns.Settings.Warmup;
  if (_0x1355b6.OnUpdateJS) {
    _0x1355b6.OnUpdateJS.call(this, _0x380772);
  }
  if (VisuMZ.SkillCooldowns.onWarmupUpdateJS[_0x380772]) {
    VisuMZ.SkillCooldowns.onWarmupUpdateJS[_0x380772].call(this, _0x380772);
  }
};
Game_BattlerBase.prototype.onWarmupReady = function (_0x4a3ca2) {
  if (!$gameParty.inBattle()) {
    return;
  }
  const _0x1c5483 = VisuMZ.SkillCooldowns.Settings.Warmup;
  if (_0x1c5483.OnReadyJS) {
    _0x1c5483.OnReadyJS.call(this, _0x4a3ca2);
  }
};
Game_BattlerBase.prototype.setWarmup = function (_0x3e1559, _0x2c2ab9) {
  if (this._skillWarmups === undefined) {
    this.initSkillCooldowns();
  }
  if (this.isBypassWarmups(_0x3e1559)) {
    return;
  }
  _0x2c2ab9 = Math.ceil(_0x2c2ab9);
  _0x2c2ab9 = _0x2c2ab9.clamp(0x0, VisuMZ.SkillCooldowns.Settings.Warmup.MaxTurns);
  const _0xd47069 = this.rawWarmup(_0x3e1559);
  ;
  this._skillWarmups[_0x3e1559] = _0x2c2ab9;
  if (this._skillWarmups[_0x3e1559] <= 0x0) {
    if (_0xd47069 > 0x0) {
      this.onWarmupReady(_0x3e1559);
    }
    delete this._skillWarmups[_0x3e1559];
  }
};
Game_BattlerBase.prototype.addWarmup = function (_0x1f1f55, _0x3aab9b) {
  if (this._skillWarmups === undefined) {
    this.initSkillCooldowns();
  }
  this._skillWarmups[_0x1f1f55] = this._skillWarmups[_0x1f1f55] || 0x0;
  if (this.warmup(_0x1f1f55) <= 0x0) {
    return;
  }
  this.setWarmup(_0x1f1f55, this._skillWarmups[_0x1f1f55] + _0x3aab9b);
};
Game_BattlerBase.prototype.applyWarmup = function (_0x4dbd84, _0x55452a) {
  _0x55452a = this.applyCDWUmodifiers(_0x4dbd84, _0x55452a, 'WARMUP');
  this.setWarmup(_0x4dbd84, Math.max(_0x55452a, this.warmup(_0x4dbd84)));
};
Game_BattlerBase.prototype.updateWarmups = function (_0xb66fc) {
  if (this.turnCount() <= 0x1) {
    return;
  }
  _0xb66fc = _0xb66fc || 0x1;
  for (const _0x16e85d in this._skillWarmups) {
    const _0x355205 = this._skillWarmups[_0x16e85d] || 0x0;
    this._skillWarmups[_0x16e85d] -= _0xb66fc;
    if (this._skillWarmups[_0x16e85d] <= 0x0) {
      if (_0x355205 > 0x0) {
        this.onWarmupReady(_0x16e85d);
      }
      delete this._skillWarmups[_0x16e85d];
    }
  }
};
VisuMZ.SkillCooldowns.Game_BattlerBase_meetsSkillConditions = Game_BattlerBase.prototype.meetsSkillConditions;
Game_BattlerBase.prototype.meetsSkillConditions = function (_0x1b632a) {
  if (!VisuMZ.SkillCooldowns.Game_BattlerBase_meetsSkillConditions.call(this, _0x1b632a)) {
    return false;
  }
  if (!this.areSkillWarmupsReady(_0x1b632a)) {
    return false;
  }
  if (!this.areSkillCooldownsReady(_0x1b632a)) {
    return false;
  }
  return true;
};
Game_BattlerBase.prototype.areSkillWarmupsReady = function (_0x538362) {
  return this.rawWarmup(_0x538362.id) <= 0x0;
};
Game_BattlerBase.prototype.areSkillCooldownsReady = function (_0x69f716) {
  return this.cooldown(_0x69f716.id) <= 0x0;
};
VisuMZ.SkillCooldowns.Game_BattlerBase_paySkillCost = Game_BattlerBase.prototype.paySkillCost;
Game_BattlerBase.prototype.paySkillCost = function (_0x3ed65d) {
  VisuMZ.SkillCooldowns.Game_BattlerBase_paySkillCost.call(this, _0x3ed65d);
  this.paySkillCooldown(_0x3ed65d);
};
Game_BattlerBase.prototype.alterPaySkillCooldownModifier = function (_0x4a4532, _0x11814f) {
  if (Imported.VisuMZ_3_SkillMastery) {
    _0x11814f = this.applyMasteryEffectCooldownTurns(_0x4a4532, _0x11814f);
  }
  return _0x11814f;
};
Game_BattlerBase.prototype.paySkillCooldown = function (_0x37ff46) {
  if (!$gameParty.inBattle()) {
    return;
  }
  const _0x4a35c8 = _0x37ff46.note;
  if (_0x4a35c8.match(/<COOLDOWN:[ ](\d+)>/i)) {
    let _0xfff1c3 = Number(RegExp.$1);
    _0xfff1c3 = this.alterPaySkillCooldownModifier(_0x37ff46, _0xfff1c3);
    this.applyCooldown(_0x37ff46.id, _0xfff1c3);
  }
  if (VisuMZ.SkillCooldowns.cooldownJS[_0x37ff46.id]) {
    VisuMZ.SkillCooldowns.cooldownJS[_0x37ff46.id].call(this, _0x37ff46);
  }
  const _0x291cfe = _0x4a35c8.match(/<SKILL[ ](.*)[ ]COOLDOWN:[ ](\d+)>/gi);
  if (_0x291cfe) {
    for (const _0x21b2fd of _0x291cfe) {
      let _0x37528a = 0x0;
      let _0x161536 = 0x0;
      if (_0x21b2fd.match(/<SKILL[ ](\d+)[ ]COOLDOWN:[ ](\d+)>/gi)) {
        _0x37528a = Number(RegExp.$1);
        _0x161536 = Number(RegExp.$2);
      } else if (_0x21b2fd.match(/<SKILL[ ](.*)[ ]COOLDOWN:[ ](\d+)>/gi)) {
        _0x37528a = DataManager.getSkillIdWithName(RegExp.$1);
        _0x161536 = Number(RegExp.$2);
      }
      const _0x2f15e6 = $dataSkills[_0x37528a];
      if (_0x2f15e6) {
        _0x161536 = this.alterPaySkillCooldownModifier(_0x37ff46, _0x161536);
        this.applyCooldown(_0x2f15e6.id, _0x161536);
      }
    }
  }
  const _0x3b8e42 = _0x4a35c8.match(/<STYPE[ ](.*)[ ]COOLDOWN:[ ](\d+)>/gi);
  if (_0x3b8e42) {
    for (const _0x25aaa2 of _0x3b8e42) {
      let _0x288715 = 0x0;
      let _0x981a7f = 0x0;
      if (_0x25aaa2.match(/<STYPE[ ](\d+)[ ]COOLDOWN:[ ](\d+)>/i)) {
        _0x288715 = Number(RegExp.$1);
        _0x981a7f = Number(RegExp.$2);
      } else {
        if (_0x25aaa2.match(/<STYPE[ ](.*)[ ]COOLDOWN:[ ](\d+)>/i)) {
          _0x288715 = DataManager.getStypeIdWithName(RegExp.$1);
          _0x981a7f = Number(RegExp.$2);
        }
      }
      _0x981a7f = this.alterPaySkillCooldownModifier(_0x37ff46, _0x981a7f);
      this.applyStypeCooldowns(_0x288715, _0x981a7f);
    }
  }
  if (_0x4a35c8.match(/<GLOBAL COOLDOWN:[ ](\d+)>/i)) {
    let _0x177ae4 = Number(RegExp.$1);
    _0x177ae4 = this.alterPaySkillCooldownModifier(_0x37ff46, _0x177ae4);
    this.applyGlobalCooldowns(_0x177ae4);
  }
};
Game_BattlerBase.prototype.applyCDWUmodifiers = function (_0x2f9cbf, _0x55650f, _0x458b71) {
  const _0x1de22d = $dataSkills[_0x2f9cbf];
  if (!_0x1de22d) {
    return _0x55650f;
  }
  const _0x3979d6 = this.applyCDWUnotetagsFlat(_0x1de22d, _0x458b71, 'PLUS');
  const _0x57ad59 = this.applyCDWUnotetagsRate(_0x1de22d, _0x458b71, 'RATE');
  const _0x4dec4f = this.applyCDWUnotetagsFlat(_0x1de22d, _0x458b71, 'FLAT');
  return Math.ceil((_0x55650f + _0x3979d6) * _0x57ad59 + _0x4dec4f);
};
VisuMZ.SkillCooldowns.RegExp = {};
Game_BattlerBase.prototype.applyCDWUnotetagsFlat = function (_0x2351f4, _0x1d7c99, _0x4a52bd) {
  const _0x1f550d = _0x2351f4.id;
  const _0x2088c2 = _0x2351f4.name.trim();
  const _0xeddbbc = VisuMZ.SkillCooldowns.RegExp;
  const _0x4ef822 = 'Skill_%1_%2_%3'.format(_0x1f550d, _0x1d7c99, _0x4a52bd);
  _0xeddbbc[_0x4ef822] = _0xeddbbc[_0x4ef822] || {};
  _0xeddbbc[_0x4ef822].notetag1 = _0xeddbbc[_0x4ef822].notetag1 || new RegExp("<SKILL %1 %2 %3:[ ]([\\+\\-]\\d+)>".format(_0x1f550d, _0x1d7c99, _0x4a52bd), 'i');
  _0xeddbbc[_0x4ef822].notetag2 = _0xeddbbc[_0x4ef822].notetag2 || new RegExp("<SKILL %1 %2 %3:[ ]([\\+\\-]\\d+)>".format(_0x2088c2, _0x1d7c99, _0x4a52bd), 'i');
  const _0x1e320e = DataManager.getSkillTypes(_0x2351f4);
  for (const _0x5851a1 of _0x1e320e) {
    const _0x455dc9 = 'Stype_%1_%2_%3'.format(_0x5851a1, _0x1d7c99, _0x4a52bd);
    let _0x11e4ca = $dataSystem.skillTypes[Number(_0x5851a1)].toUpperCase().trim();
    _0x11e4ca = _0x11e4ca.replace(/\x1I\[(\d+)\]/gi, '');
    _0x11e4ca = _0x11e4ca.replace(/\\I\[(\d+)\]/gi, '');
    _0xeddbbc[_0x455dc9] = _0xeddbbc[_0x455dc9] || {};
    _0xeddbbc[_0x455dc9].notetag1 = _0xeddbbc[_0x455dc9].notetag1 || new RegExp("<STYPE %1 %2 %3:[ ]([\\+\\-]\\d+)>".format(_0x5851a1, _0x1d7c99, _0x4a52bd), 'i');
    _0xeddbbc[_0x455dc9].notetag2 = _0xeddbbc[_0x455dc9].notetag2 || new RegExp("<STYPE %1 %2 %3:[ ]([\\+\\-]\\d+)>".format(_0x11e4ca, _0x1d7c99, _0x4a52bd), 'i');
  }
  const _0x243eb6 = 'Global_%1_%2'.format(_0x1d7c99, _0x4a52bd);
  _0xeddbbc[_0x243eb6] = _0xeddbbc[_0x243eb6] || new RegExp("<GLOBAL %1 %2:[ ]([\\+\\-]\\d+)>".format(_0x1d7c99, _0x4a52bd), 'i');
  const _0x148884 = (_0x3bfe23, _0x4a5e72) => {
    if (!_0x4a5e72) {
      return _0x3bfe23;
    }
    const _0x4152c8 = _0x4a5e72.note;
    if (_0x4152c8.match(_0xeddbbc[_0x4ef822].notetag1)) {
      var _0xb0f797 = Number(RegExp.$1);
      _0x3bfe23 += _0xb0f797;
    }
    if (_0x4152c8.match(_0xeddbbc[_0x4ef822].notetag2)) {
      var _0xb0f797 = Number(RegExp.$1);
      _0x3bfe23 += _0xb0f797;
    }
    for (const _0x390dce of _0x1e320e) {
      const _0x461182 = 'Stype_%1_%2_%3'.format(_0x390dce, _0x1d7c99, _0x4a52bd);
      if (_0x4152c8.match(_0xeddbbc[_0x461182].notetag1)) {
        var _0xb0f797 = Number(RegExp.$1);
        _0x3bfe23 += _0xb0f797;
      }
      if (_0x4152c8.match(_0xeddbbc[_0x461182].notetag2)) {
        var _0xb0f797 = Number(RegExp.$1);
        _0x3bfe23 += _0xb0f797;
      }
    }
    if (_0x4152c8.match(_0xeddbbc[_0x243eb6])) {
      var _0xb0f797 = Number(RegExp.$1);
      _0x3bfe23 += _0xb0f797;
    }
    return _0x3bfe23;
  };
  return this.traitObjects().reduce(_0x148884, 0x0);
};
Game_BattlerBase.prototype.applyCDWUnotetagsRate = function (_0x58212b, _0x44a1b2, _0x2d60c5) {
  const _0x3aff66 = _0x58212b.id;
  const _0x7c6276 = _0x58212b.name.trim();
  const _0x37d9a3 = VisuMZ.SkillCooldowns.RegExp;
  const _0x5a3198 = 'Skill_%1_%2_%3'.format(_0x3aff66, _0x44a1b2, _0x2d60c5);
  _0x37d9a3[_0x5a3198] = _0x37d9a3[_0x5a3198] || {};
  _0x37d9a3[_0x5a3198].notetag1 = _0x37d9a3[_0x5a3198].notetag1 || new RegExp("<SKILL %1 %2 %3:[ ]%4>".format(_0x3aff66, _0x44a1b2, _0x2d60c5, "(\\d+)([%％])"), 'i');
  _0x37d9a3[_0x5a3198].notetag2 = _0x37d9a3[_0x5a3198].notetag2 || new RegExp("<SKILL %1 %2 %3:[ ]%4>".format(_0x7c6276, _0x44a1b2, _0x2d60c5, "(\\d+)([%％])"), 'i');
  _0x37d9a3[_0x5a3198].notetag3 = _0x37d9a3[_0x5a3198].notetag3 || new RegExp("<SKILL %1 %2 %3:[ ]%4>".format(_0x3aff66, _0x44a1b2, _0x2d60c5, "(\\d+\\.?\\d+)"), 'i');
  _0x37d9a3[_0x5a3198].notetag4 = _0x37d9a3[_0x5a3198].notetag4 || new RegExp("<SKILL %1 %2 %3:[ ]%4>".format(_0x7c6276, _0x44a1b2, _0x2d60c5, "(\\d+\\.?\\d+)"), 'i');
  const _0x4c9957 = DataManager.getSkillTypes(_0x58212b);
  for (const _0x42f37a of _0x4c9957) {
    const _0x5accd6 = 'Stype_%1_%2_%3'.format(_0x42f37a, _0x44a1b2, _0x2d60c5);
    let _0x6b60bd = $dataSystem.skillTypes[Number(_0x42f37a)].toUpperCase().trim();
    _0x6b60bd = _0x6b60bd.replace(/\x1I\[(\d+)\]/gi, '');
    _0x6b60bd = _0x6b60bd.replace(/\\I\[(\d+)\]/gi, '');
    _0x37d9a3[_0x5accd6] = _0x37d9a3[_0x5accd6] || {};
    _0x37d9a3[_0x5accd6].notetag1 = _0x37d9a3[_0x5accd6].notetag1 || new RegExp("<STYPE %1 %2 %3:[ ]%4>".format(_0x42f37a, _0x44a1b2, _0x2d60c5, "(\\d+)([%％])"), 'i');
    _0x37d9a3[_0x5accd6].notetag2 = _0x37d9a3[_0x5accd6].notetag2 || new RegExp("<STYPE %1 %2 %3:[ ]%4>".format(_0x6b60bd, _0x44a1b2, _0x2d60c5, "(\\d+)([%％])"), 'i');
    _0x37d9a3[_0x5accd6].notetag3 = _0x37d9a3[_0x5accd6].notetag3 || new RegExp("<STYPE %1 %2 %3:[ ]%4>".format(_0x42f37a, _0x44a1b2, _0x2d60c5, "(\\d+\\.?\\d+)"), 'i');
    _0x37d9a3[_0x5accd6].notetag4 = _0x37d9a3[_0x5accd6].notetag4 || new RegExp("<STYPE %1 %2 %3:[ ]%4>".format(_0x6b60bd, _0x44a1b2, _0x2d60c5, "(\\d+\\.?\\d+)"), 'i');
  }
  const _0x5618aa = 'Global_%1_%2'.format(_0x44a1b2, _0x2d60c5);
  _0x37d9a3[_0x5618aa] = _0x37d9a3[_0x5618aa] || {};
  _0x37d9a3[_0x5618aa].notetag1 = _0x37d9a3[_0x5618aa].notetag1 || new RegExp("<GLOBAL %1 %2:[ ]%3>".format(_0x44a1b2, _0x2d60c5, "(\\d+)([%％])"), 'i');
  _0x37d9a3[_0x5618aa].notetag2 = _0x37d9a3[_0x5618aa].notetag2 || new RegExp("<GLOBAL %1 %2:[ ]%3>".format(_0x44a1b2, _0x2d60c5, "(\\d+\\.?\\d+)"), 'i');
  const _0x1cd431 = (_0x5ecfb9, _0x1bfd60) => {
    if (!_0x1bfd60) {
      return _0x5ecfb9;
    }
    const _0x4af2a6 = _0x1bfd60.note;
    if (_0x4af2a6.match(_0x37d9a3[_0x5a3198].notetag1)) {
      var _0xae9806 = Number(RegExp.$1) / 0x64;
      _0x5ecfb9 *= _0xae9806;
    }
    if (_0x4af2a6.match(_0x37d9a3[_0x5a3198].notetag2)) {
      var _0xae9806 = Number(RegExp.$1) / 0x64;
      _0x5ecfb9 *= _0xae9806;
    }
    if (_0x4af2a6.match(_0x37d9a3[_0x5a3198].notetag3)) {
      var _0xae9806 = Number(RegExp.$1);
      _0x5ecfb9 *= _0xae9806;
    }
    if (_0x4af2a6.match(_0x37d9a3[_0x5a3198].notetag4)) {
      var _0xae9806 = Number(RegExp.$1);
      _0x5ecfb9 *= _0xae9806;
    }
    for (const _0x47928d of _0x4c9957) {
      const _0x241e72 = "Stype_%1_%2_%3".format(_0x47928d, _0x44a1b2, _0x2d60c5);
      if (_0x4af2a6.match(_0x37d9a3[_0x241e72].notetag1)) {
        var _0xae9806 = Number(RegExp.$1) / 0x64;
        _0x5ecfb9 *= _0xae9806;
      }
      if (_0x4af2a6.match(_0x37d9a3[_0x241e72].notetag2)) {
        var _0xae9806 = Number(RegExp.$1) / 0x64;
        _0x5ecfb9 *= _0xae9806;
      }
      if (_0x4af2a6.match(_0x37d9a3[_0x241e72].notetag3)) {
        var _0xae9806 = Number(RegExp.$1);
        _0x5ecfb9 *= _0xae9806;
      }
      if (_0x4af2a6.match(_0x37d9a3[_0x241e72].notetag4)) {
        var _0xae9806 = Number(RegExp.$1);
        _0x5ecfb9 *= _0xae9806;
      }
    }
    if (_0x4af2a6.match(_0x37d9a3[_0x5618aa].notetag1)) {
      var _0xae9806 = Number(RegExp.$1) / 0x64;
      _0x5ecfb9 *= _0xae9806;
    }
    if (_0x4af2a6.match(_0x37d9a3[_0x5618aa].notetag2)) {
      var _0xae9806 = Number(RegExp.$1);
      _0x5ecfb9 *= _0xae9806;
    }
    return _0x5ecfb9;
  };
  return this.traitObjects().reduce(_0x1cd431, 0x1);
};
VisuMZ.SkillCooldowns.Game_Battler_onBattleStart = Game_Battler.prototype.onBattleStart;
Game_Battler.prototype.onBattleStart = function (_0x1f5c48) {
  VisuMZ.SkillCooldowns.Game_Battler_onBattleStart.call(this, _0x1f5c48);
  if (this._previousBattleChain) {
    this._previousBattleChain = undefined;
    return;
  }
  this.clearCooldowns();
  this.clearWarmups();
  this.prepareSkillWarmups(_0x1f5c48);
};
Game_Battler.prototype.prepareSkillWarmups = function (_0x385735) {
  for (const _0x24c556 of this.skills()) {
    if (!_0x24c556) {
      continue;
    }
    const _0x145402 = _0x24c556.id;
    const _0x3c91fb = _0x24c556.note;
    if (_0x3c91fb.match(/<WARMUP:[ ](\d+)>/i)) {
      this.applyWarmup(_0x145402, Number(RegExp.$1));
    }
    if (VisuMZ.SkillCooldowns.warmupJS[_0x24c556.id]) {
      VisuMZ.SkillCooldowns.warmupJS[_0x24c556.id].call(this, _0x24c556);
    }
  }
  if (_0x385735) {
    const _0x3c24fc = VisuMZ.SkillCooldowns.Settings.Warmup.Preemptive || 0x0;
    this.updateWarmups(_0x3c24fc);
  }
};
Game_Battler.prototype.prepareUpdateSkillCooldowns = function () {
  if (this._updatedSkillCooldowns) {
    return;
  }
  if (this._instantCast) {
    return;
  }
  this._updatedSkillCooldowns = true;
  this.updateCooldowns();
  if (Imported.VisuMZ_2_BattleSystemOTB && BattleManager.isOTB()) {
    return;
  }
  this.updateWarmups();
};
VisuMZ.SkillCooldowns.Game_Battler_onTurnEnd = Game_Battler.prototype.onTurnEnd;
Game_Battler.prototype.onTurnEnd = function () {
  this._updatedSkillCooldowns = false;
  VisuMZ.SkillCooldowns.Game_Battler_onTurnEnd.call(this);
  if (Imported.VisuMZ_2_BattleSystemOTB && BattleManager.isOTB()) {
    this.updateWarmups();
  }
};
VisuMZ.SkillCooldowns.Game_Battler_onBattleEnd = Game_Battler.prototype.onBattleEnd;
Game_Battler.prototype.onBattleEnd = function () {
  VisuMZ.SkillCooldowns.Game_Battler_onBattleEnd.call(this);
  if (Imported.VisuMZ_3_ChainBattles && $gameTemp.getChainBattleSettings()) {
    this._previousBattleChain = true;
    return;
  }
  this.clearCooldowns();
  this.clearWarmups();
};
var $actorGetSkillCooldown = function (_0x1cd494, _0x5c53de) {
  const _0xc83fea = $gameActors.actor(_0x1cd494);
  if (!_0xc83fea) {
    return 0x0;
  }
  return _0xc83fea.cooldown(_0x5c53de) || 0x0;
};
var $actorSetSkillCooldown = function (_0x200b3e, _0x1fd491, _0x42217c) {
  const _0x1e13bb = $gameActors.actor(_0x200b3e);
  if (!_0x1e13bb) {
    return;
  }
  _0x1e13bb.setCooldown(_0x1fd491, _0x42217c);
};
var $actorGetSkillWarmup = function (_0x2116df, _0x4098c3) {
  const _0x39af27 = $gameActors.actor(_0x2116df);
  if (!_0x39af27) {
    return 0x0;
  }
  return _0x39af27.warmup(_0x4098c3) || 0x0;
};
var $actorSetSkillWarmup = function (_0x1f1774, _0x20c776, _0x498f30) {
  const _0x28c3d5 = $gameActors.actor(_0x1f1774);
  if (!_0x28c3d5) {
    return;
  }
  _0x28c3d5.setWarmup(_0x20c776, _0x498f30);
};
var $enemyGetSkillCooldown = function (_0x339f7f, _0x53947b) {
  const _0x499b61 = $gameTroop.members()[_0x339f7f];
  if (!_0x499b61) {
    return 0x0;
  }
  return _0x499b61.cooldown(_0x53947b) || 0x0;
};
var $enemySetSkillCooldown = function (_0x31e95f, _0x4cd690, _0x315957) {
  const _0x476abe = $gameTroop.members()[_0x31e95f];
  if (!_0x476abe) {
    return;
  }
  _0x476abe.setCooldown(_0x4cd690, _0x315957);
};
var $enemyGetSkillWarmup = function (_0x284a89, _0x9659c8) {
  const _0x5b1310 = $gameTroop.members()[_0x284a89];
  if (!_0x5b1310) {
    return 0x0;
  }
  return _0x5b1310.warmup(_0x9659c8) || 0x0;
};
var $enemySetSkillWarmup = function (_0x3341d9, _0x231fbb, _0x29b67b) {
  const _0xf08c9f = $gameTroop.members()[_0x3341d9];
  if (!_0xf08c9f) {
    return;
  }
  _0xf08c9f.setWarmup(_0x231fbb, _0x29b67b);
};
VisuMZ.SkillCooldowns.Window_Base_drawSkillCost = Window_Base.prototype.drawSkillCost;
Window_Base.prototype.drawSkillCost = function (_0x417dfd, _0x4cb358, _0x1b4af2, _0x51cb51, _0x5d7cdc) {
  const _0x2f2eef = VisuMZ.SkillCooldowns.Settings;
  if (_0x2f2eef.Warmup.Show && _0x417dfd.rawWarmup(_0x4cb358.id) > 0x0) {
    this.drawSkillWarmup(_0x417dfd, _0x4cb358, _0x1b4af2, _0x51cb51, _0x5d7cdc);
  } else if (_0x2f2eef.Cooldown.Show && _0x417dfd.cooldown(_0x4cb358.id) > 0x0) {
    this.drawSkillCooldown(_0x417dfd, _0x4cb358, _0x1b4af2, _0x51cb51, _0x5d7cdc);
  } else {
    VisuMZ.SkillCooldowns.Window_Base_drawSkillCost.call(this, _0x417dfd, _0x4cb358, _0x1b4af2, _0x51cb51, _0x5d7cdc);
  }
};
Window_Base.prototype.drawSkillWarmup = function (_0x39eb01, _0x3b798a, _0x350757, _0x3879f9, _0x5bcfb6) {
  const _0x4efe49 = VisuMZ.SkillCooldowns.Settings.Warmup;
  let _0x4e7d2f = '';
  _0x4e7d2f += "\\FS[%1]".format(_0x4efe49.FontSize);
  const _0x54686c = _0x4efe49.FontColor;
  if (_0x54686c.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {
    _0x4e7d2f += "\\HexColor<%1>".format(String(RegExp.$1));
  } else {
    _0x4e7d2f += "\\C[%1]".format(_0x54686c);
  }
  const _0x2ad73e = _0x39eb01.warmup(_0x3b798a.id);
  const _0x5e7902 = _0x4efe49.Icon > 0x0 ? "\\I[%1]".format(_0x4efe49.Icon) : '';
  _0x4e7d2f += _0x4efe49.TextFmt.format(_0x2ad73e, _0x5e7902);
  const _0x2f77a8 = this.textSizeEx(_0x4e7d2f, _0x350757, _0x3879f9, _0x5bcfb6);
  const _0x34905e = _0x350757 + _0x5bcfb6 - _0x2f77a8.width;
  this.drawTextEx(_0x4e7d2f, _0x34905e, _0x3879f9, _0x5bcfb6);
  this.resetFontSettings();
};
Window_Base.prototype.drawSkillCooldown = function (_0x20b21c, _0x4e9941, _0x1edd4e, _0x6bebb8, _0x6f2fda) {
  const _0x486454 = VisuMZ.SkillCooldowns.Settings.Cooldown;
  let _0x26999c = '';
  _0x26999c += "\\FS[%1]".format(_0x486454.FontSize);
  const _0x2ac2c1 = _0x486454.FontColor;
  if (_0x2ac2c1.match(/#(.*)/i) && Imported.VisuMZ_1_MessageCore) {
    _0x26999c += "\\HexColor<%1>".format(String(RegExp.$1));
  } else {
    _0x26999c += "\\C[%1]".format(_0x2ac2c1);
  }
  const _0x24aa37 = _0x20b21c.cooldown(_0x4e9941.id);
  const _0x202da9 = _0x486454.Icon > 0x0 ? "\\I[%1]".format(_0x486454.Icon) : '';
  _0x26999c += _0x486454.TextFmt.format(_0x24aa37, _0x202da9);
  const _0x343db9 = this.textSizeEx(_0x26999c, _0x1edd4e, _0x6bebb8, _0x6f2fda);
  const _0x8c9fd7 = _0x1edd4e + _0x6f2fda - _0x343db9.width;
  this.drawTextEx(_0x26999c, _0x8c9fd7, _0x6bebb8, _0x6f2fda);
  this.resetFontSettings();
};