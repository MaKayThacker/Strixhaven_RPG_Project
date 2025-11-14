//=============================================================================
// VisuStella MZ - Aggro Control System
// VisuMZ_2_AggroControlSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_AggroControlSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.AggroControlSystem = VisuMZ.AggroControlSystem || {};
VisuMZ.AggroControlSystem.version = 1.19;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.19] [AggroControlSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Aggro_Control_System_VisuStella_MZ
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * A common mechanic found in many RPG's nowadays is the ability to steer the
 * way enemies target party members. This can be in the form of provocations, 
 * taunts, and aggro.
 *
 * Provocations come in the form of states, where when a unit applies a provoke
 * state on a target, the target must attack the provoker when using single
 * target skills. This plugin provides support for multiple provocations and
 * such provocations will be given focus based on the state's priority value.
 *
 * Taunts are a third way to steer an opponent to focus on a party member. The
 * taunt effects can be split up into global, physical, magical, or certain hit
 * only taunts and these can be applied to almost any trait object.
 *
 * Aggro is a numeric value that determines the likelihood and/or priority
 * level of how often a target party member is to be attacked by an enemy unit.
 * The higher the aggro value, the more likely the chances of being targeted.
 * A option can be turned on (or through notetags) to set enemies to always
 * target the party member with the highest aggro.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Three different ways to influencing which targets enemies should attack:
 *   Provoke, taunt, and aggro.
 * * Provoke and taunt effects work both ways for actors and enemies.
 * * Aggro effects accumulate through battle and can be manipulated through
 *   notetag values, Plugin Commands, and/or Plugin Parameters.
 * * Provoked battlers can have provoke lines displayed to indicate which
 *   unit has provoked them.
 * * Taunting units can have animations played on them repeatedly to quickly
 *   relay information to the player about their taunt properties.
 * * Gauges that can be displayed over the heads of actor sprites to display
 *   how much aggro that actor holds in comparison to the other actors.
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_0_CoreEngine
 * VisuMZ_1_BattleCore
 *
 * - Provoke Priority Lines and Taunt animations become available if these
 *   plugins are installed.
 *
 * ---
 *
 * ============================================================================
 * How Aggro, Provoke, and Taunts Work
 * ============================================================================
 *
 * This section will explain how aggro, provoke, and taunts work.
 *
 * ---
 *
 * Provoke
 *
 * - Provocations come in the form of states, where when a unit applies a
 * provoke state on a target, the target must attack the provoker when using
 * single target skills. This plugin provides support for multiple provocations
 * and such provocations will be given focus based on the state's database
 * priority value.
 *
 * - The provoke will last only as long as the duration of the state itself. If
 * the state's duration is refreshed by reapplying the Provoke state, then the
 * provoker of that state will then switch over to the one applying the newly
 * added state.
 *
 * - When an actor selects a target for an action and the actor is provoked by
 * an enemy on the other team, the player's choice selection becomes limited to
 * only the provoker.
 *
 * - Provoke can be bypassed through the <Bypass Provoke> notetag.
 *
 * ---
 *
 * Taunts
 *
 * - Taunts are a third way to steer an opponent to focus on a party member.
 * The taunt effects can be split up into global, physical, magical, or certain
 * hit only taunts and these can be applied to almost any trait object.
 *
 * - When an actor selects a target and the enemy team has a taunting unit,
 * the player's choice selection becomes limited to only the targets with the
 * associated taunt type.
 *
 * - Taunts can be bypassed through the <Bypass Taunt> notetag.
 *
 * ---
 *
 * Aggro
 *
 * - Aggro is a numeric value that determines the likelihood and/or priority
 * level of how often a target party member is to be attacked by an enemy unit.
 * The higher the aggro value, the more likely the chances of being targeted.
 * A option can be turned on (or through notetags) to set enemies to always
 * target the party member with the highest aggro.
 *
 * - Skills and items can raise its user's aggro value through notetags and/or
 * how much damage they've dealt or healed. Skills and items can also change a
 * target's aggro value through notetags, too.
 *
 * - Through the Plugin Parameters, you can set Aggro to automatically raised
 * based on how much damage or healing dealt by a user.
 *
 * - Some enemies can be bypass forced aggro target through the <Bypass Aggro>
 * notetag while other enemies can be forced to target the highest aggro target
 * through the <Target Highest Aggro> notetag;
 *
 * ---
 *
 * Priorities
 *
 * - Priority will be given in the order of provokes, taunts, and then aggro.
 * This means if an enemy is provoked, the opposing side has a taunt, and there
 * is a member with high aggro, then the enemy will always attack the provoker
 * first before targeting a taunting unit before targeting the unit with high
 * aggro values.
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
 * === Provoke-Related Notetags ===
 *
 * The following notetags enable you to utilize the Provoke effects added by
 * this plugin. Provoked targets can only attack the provoking unit for single
 * target actions.
 *
 * ---
 *
 * <Provoke>
 *
 * - Used for: State Notetags
 * - Causes the state affected unit to be able to only attack the caster of the
 *   provoke state for single target actions.
 * - If multiple provoke states are applied, then the provoker is the one who
 *   applied the highest priority provoke state.
 *
 * ---
 *
 * <Bypass Provoke>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Makes the affected unit to ignore any and all provoke effects applied by
 *   any provoke states, allowing them to target foes as if they are unaffected
 *   by provoke states altogether.
 *
 * ---
 * 
 * <Bypass Provoke>
 * - Used for: Skill and Item Notetags
 * - Makes the action bypass provoke effects applied by any provoke states,
 *   allowing this action to target foes as if the user is unaffected by any
 *   provoke effects altogether.
 * 
 * ---
 * 
 * <Provoke Height Origin: x%>
 * 
 * - Used for: Actor, Enemy Notetags
 * - Sets the provoke height origin point to x% of the sprite's height.
 * - This is the landing point for the provoke trails.
 * - Replace 'x' with a number presenting what rate of the sprite's height to
 *   set as the provoke height origin point.
 * 
 * ---
 *
 * === Taunt-Related Notetags ===
 *
 * ---
 *
 * <Taunt>
 * <All Taunt>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the taunting unit to become the target of the opposing team's
 *   single target actions for physical, magical, and certain hit actions.
 * - If multiple taunters exist, then the opposing team can select between any
 *   of the taunters for targets.
 *
 * ---
 *
 * <Physical Taunt>
 * <Magical Taunt>
 * <Certain Taunt>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the taunting unit to become the target of the opposing team's
 *   single target actions for physical, magical, and certain hit actions
 *   respectively.
 * - Add/remove any combination of the above to cause the affected unit to
 *   become the target of those types of actions.
 * - If multiple taunters exist, then the opposing team can select between any
 *   of the taunters for targets.
 *
 * ---
 *
 * <Bypass Taunt>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - The affected unit will ignore any and all taunt effects created by the
 *   opposing team, allowing them to use single target actions as if no
 *   taunters exist on the opposing team.
 *
 * ---
 * 
 * <Bypass Taunt>
 * - Used for: Skill and Item Notetags
 * - Makes the action bypass taunt effects created by the opposing team,
 *   allowing the user to use single target actions as if no taunters exist on
 *   the opposing team.
 * 
 * ---
 *
 * === Aggro-Related Notetags ===
 *
 * ---
 *
 * <User Aggro: +x>
 * <User Aggro: -x>
 *
 * - Used for: Skill, Item
 * - Upon using this action, raise the user's battle aggro value by 'x'.
 * - Replace 'x' with the amount of battle aggro to increase/decrease by.
 * - This effect will only apply once per usage regardless of the number of
 *   successful hits landed by the action.
 *
 * ---
 *
 * <Target Aggro: +x>
 * <Target Aggro: -x>
 *
 * - Used for: Skill, Item
 * - Upon using this action, raise the target's battle aggro value by 'x'.
 * - Replace 'x' with the amount of battle aggro to increase/decrease by.
 * - This effect will apply multiple times based on the number of successful
 *   hits landed by the action.
 *
 * ---
 *
 * <Aggro: +x>
 * <Aggro: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected unit to passively have increased/decreased aggro
 *   values independent of the amount of aggro it earns in battle.
 * - Replace 'x' with the amount of aggro this object increases/decreases by.
 *
 * ---
 *
 * <Aggro Multiplier: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Causes the affected unit to increase the amount of perceived aggro it has
 *   by the aggro multiplier.
 * - Replace 'x' with a number representing the percentage to increase/decrease
 *   the perceived aggro by.
 * - If multiple of these traits exist across different trait objects, the
 *   effects are increased multiplicatively.
 *
 * ---
 *
 * <Bypass Highest Aggro>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - If used on skills or items, the action will decide targets by aggro weight
 *   instead of always picking the highest aggro unit(s).
 * - If used on trait objects, the affected unit will decide targets by aggro
 *   weight instead of always picking the highest aggro unit(s).
 * - This is used for enemy A.I. or Actor auto battle A.I.
 *
 * ---
 * 
 * <Bypass Highest Aggro>
 * - Used for: Skill and Item Notetags
 * - Makes the action bypass highest aggro effects and instead focuses on
 *   targets by aggro weight instead.
 * - This is used for enemy A.I. or Actor auto battle A.I.
 * 
 * ---
 *
 * <Target Highest Aggro>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - If used on skills or items, the action will always decide its targets by
 *   the highest aggro value.
 * - If used on trait objects, the affected unit will always decide on targets
 *   by the highest aggro value.
 * - If the <Bypass Highest Aggro> notetag exists, this effect is ignored.
 * - This is used for enemy A.I. or Actor auto battle A.I.
 *
 * ---
 *
 * === JavaScript Notetags: Aggro-Related ===
 *
 * ---
 *
 * <JS User Aggro>
 *  code
 *  code
 *  value = code
 * </JS User Aggro>
 *
 * - Used for: Skill, Item
 * - Replace 'code' with JavaScript code to determine the final 'value' to
 *   change the user's battle aggro to upon using this skill.
 * - The 'user' variable represents the one using the skill/item.
 * - The 'target' variable represents the one receiving the skill/item hit.
 * - This effect will only apply once per usage regardless of the number of
 *   successful hits landed by the action.
 *
 * ---
 *
 * <JS Target Aggro>
 *  code
 *  code
 *  value = code
 * </JS Target Aggro>
 *
 * - Used for: Skill, Item
 * - Replace 'code' with JavaScript code to determine the final 'value' to
 *   change target's battle aggro to upon using this skill.
 * - The 'user' variable represents the one using the skill/item.
 * - The 'target' variable represents the one receiving the skill/item hit.
 * - This effect will apply multiple times based on the number of successful
 *   hits landed by the action.
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
 * Actor: Change Aggro
 * - Changes target actor's aggro value.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *   Change Aggro By:
 *   - Change aggro by this amount.
 *   - Use negative numbers to reduce aggro.
 *
 * ---
 *
 * Actor: Set Aggro
 * - Set target actor's aggro value.
 *
 *   Actor ID:
 *   - Select which Actor ID to affect.
 *
 *   Set Aggro To:
 *   - Sets target's aggro to this amount.
 *   - Aggro must be at least a value of 1.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change Aggro
 * - Changes target enemy's aggro value.
 *
 *   Enemy Index:
 *   - Select which Enemy Index to affect.
 *
 *   Change Aggro By:
 *   - Change aggro by this amount.
 *   - Use negative numbers to reduce aggro.
 *
 * ---
 *
 * Enemy: Set Aggro
 * - Set target enemy's aggro value.
 *
 *   Enemy Index:
 *   - Select which Enemy Index to affect.
 *
 *   Set Aggro To:
 *   - Sets target's aggro to this amount.
 *   - Aggro must be at least a value of 1.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Provoke Settings
 * ============================================================================
 *
 * The Provoke Settings Plugin Parameters adjust the visual aspects related to
 * the provoke effect. These settings will require VisuMZ_1_BattleCore to be
 * installed in order for them to work due to dependencies. 
 *
 * ---
 *
 * VisuMZ_1_BattleCore
 * 
 *   Show Priority Lines?:
 *   - Show priority target lines for this plugin?
 *   - Requires VisuMZ_1_BattleCore.
 *
 * ---
 *
 * Line Settings
 * 
 *   Arc Height:
 *   - How tall should the line arc in pixels?
 * 
 *   Blend Mode:
 *   - The blend mode used for the sprite.
 * 
 *   Height Origin:
 *   - The rate from the battler's sprite base to determine where the line
 *     starts from.
 * 
 *   Line Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Opacity:
 *   - The highest possible opacity for active provoke lines.
 * 
 *   Opacity Speed:
 *   - The speed at which opacity fluctuates for the line sprite.
 * 
 *   Parts:
 *   - The number of joint parts to split up the sprite as.
 * 
 *   Parts Size:
 *   - The number in pixels for the diameter of each part.
 *
 * ---
 * 
 * Options
 * 
 *   Add Provoke Option?
 *   - Add the 'Show Provoke Origin' option to the Options menu?
 * 
 *   Adjust Window Height
 *   - Automatically adjust the options window height?
 * 
 *   Option Name
 *   - Command name of the option.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Taunt Settings
 * ============================================================================
 *
 * Battlers with specific taunt types can have animations playing on them over
 * and over to relay information to the player. These settings require you to
 * have both VisuMZ_0_CoreEngine and VisuMZ_1_BattleCore installed in your
 * project's plugin list in order to use.
 *
 * ---
 *
 * VisuMZ_0_CoreEngine & VisuMZ_1_BattleCore
 * 
 *   Show Animations?:
 *   - Show animations for each of the taunt effects?
 *   - Requires VisuMZ_0_CoreEngine and VisuMZ_1_BattleCore.
 *
 * ---
 *
 * Animation ID's
 * 
 *   Physical Taunt:
 *   - The animation ID used for physical taunts.
 *   - Use 0 or 'None' to bypass this type.
 * 
 *   Magical Taunt:
 *   - The animation ID used for magical taunts.
 *   - Use 0 or 'None' to bypass this type.
 * 
 *   Certain Hit Taunt:
 *   - The animation ID used for certain hit taunts.
 *   - Use 0 or 'None' to bypass this type.
 *
 * ---
 *
 * Animation Settings
 * 
 *   Cycle Time:
 *   - The amount of frames to wait before each animation cycle.
 *   - WARNING: Lower numbers can jeopardize game performance.
 * 
 *   Mirror Actor Ani?:
 *   - Mirror animations played on actors?
 * 
 *   Mute Animation SFX?:
 *   - Mute sounds played by animations?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Aggro Settings
 * ============================================================================
 *
 * This lets you adjust the settings for this plugin's Aggro mechanics. Most of
 * these settings focus on the visual gauge display of the Aggro gauge, but you
 * can also change up the settings for how aggro is utilized.
 *
 * ---
 *
 * General
 * 
 *   Priority: Highest TGR:
 *   - When enemies target actors for an single target attack, always target
 *     the highest members or make it weighted?
 *
 *   Aggro Per Damage:
 *   - The amount of aggro generated per point of HP damage dealt to an enemy.
 *
 *   Aggro Per Heal:
 *   - The amount of aggro generated per point of HP recovered to an ally.
 *
 * ---
 *
 * Gauge
 * 
 *   Visible Battler Gauge:
 *   - Display an aggro gauge over an SV actor's head to show current aggro
 *     level compared to other party members.
 * 
 *   Visible Status Gauge:
 *   - Display an aggro gauge in the Battle Status Window to show the current
 *     aggro level compared to others.
 * 
 *   Gauge Color 1:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Gauge Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Gauge Width:
 *   - Width in pixels you want the gauge to be.
 * 
 *   Anchor X:
 *   Anchor Y:
 *   - Where do you want the Aggro Gauge sprite's anchor X/Y to be?
 *   - Use values between 0 and 1 to be safe.
 * 
 *   Scale:
 *   - How large/small do you want the Aggro Gauge to be scaled?
 * 
 *   Battler Gauge
 * 
 *     Offset X:
 *     Offset Y:
 *     - How many pixels to offset the Aggro Gauge's X/Y by?
 * 
 *   Battle Status Gauge
 * 
 *     Offset X:
 *     Offset Y:
 *     - How many pixels to offset the Aggro Gauge's X/Y by?
 *
 * ---
 * 
 * Options
 * 
 *   Add Provoke Option?
 *   - Add the 'Show Aggro Gauge' option to the Options menu?
 * 
 *   Adjust Window Height
 *   - Automatically adjust the options window height?
 * 
 *   Option Name
 *   - Command name of the option.
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
 * Version 1.19: April 18, 2024
 * * Feature Update!
 * ** Altered TGR and Aggro-related stats so that they cannot dip too deep into
 *    the negatives and prevent randomized targeting altogether. Update made
 *    by Olivia.
 * 
 * Version 1.18: March 14, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for other plugins.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.17: August 17, 2023
 * * Compatibility Update!
 * ** When enemies use skills with VisuStella MZ Battle A.I. installed, aggro
 *    settings will no longer automatically target "highest aggro targets" if
 *    there are <AI Targets: x> notetags.
 * 
 * Version 1.16: July 13, 2023
 * * Bug Fixes!
 * ** Fixed an issue with non-weighted aggro selected actions that will cause
 *    actors (instead of just enemies) to also target highest TGR enemies.
 *    Fix made by Irina.
 * 
 * Version 1.15: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused <All Taunt> to not work properly.
 *    Fix made by Irina.
 * 
 * Version 1.14: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause cached battlers from a previous save file to
 *    not load up properly when actions are used for highest aggro actors.
 *    Fix made by Irina.
 * 
 * Version 1.13: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a problem that would cause a crash when exiting the Options menu in
 *    battle when used with specific battle systems. Fix made by Irina.
 * 
 * Version 1.12: January 20, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for Battle Core updated version 1.73
 *    new features.
 * 
 * Version 1.11: November 17, 2022
 * * Bug Fixes!
 * ** <JS User Aggro> and <JS Target Aggro> should now work properly.
 *    Fix made by Arisu.
 * 
 * Version 1.10: August 25, 2022
 * * Documentation Update!
 * ** Added note to the <Provoke> notetag:
 * *** States with <Provoke> on them will automatically remove themselves if
 *     the provoker dies. Update made by Arisu.
 * * Feature Update!
 * ** States with <Provoke> on them will automatically remove themselves if the
 *    provoker dies. Update made by Arisu.
 * 
 * Version 1.09: June 2, 2022
 * * Bug Fixes!
 * ** Filename has been shortened from VisuMZ_2_AggroControlSystem.js to
 *    VisuMZ_2_AggroControlSys.js due to deployment reasons. For some mobile
 *    devices, keeping the name as long as VisuMZ_2_AggroControlSystem.js
 *    causes problems, but VisuMZ_2_AggroControlSys.js is fine. Take note of
 *    this while you are updating.
 * ** 'user' and 'target' now works properly with the JS notetags.
 *    Fix made by Irina.
 * 
 * Version 1.08: April 16, 2021
 * * Feature Update!
 * ** Highest and lowest TGR members are now cached on an action by action
 *    basis for reduce needed computations. Update made by Irina.
 * 
 * Version 1.07: April 9, 2021
 * * Bug Fixes!
 * ** Provoke effect now takes into consideration when Provoke is applied by
 *    a weapon effect that comes off a counter attack from an actor. Fix made
 *    by Olivia.
 * 
 * Version 1.06: March 12, 2021
 * * Bug Fixes!
 * ** Subsequent battles or changing scenes should no longer clear the custom
 *    rendered bitmap used for the provoke trail. Fix made by Irina.
 * * Documentation Update!
 * ** Added documentation for the Skill and Item versions of the following
 *    notetags into the help file and wiki:
 * *** <Bypass Provoke>
 * *** <Bypass Taunt>
 * *** <Bypass Highest Aggro>
 * 
 * Version 1.05: March 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > Aggro Settings > Battle Status Gauge
 * **** These settings allow you to offset the Aggro Gauge in the Battle Status
 *      Window from its original position.
 * 
 * Version 1.04: February 26, 2021
 * * Bug Fixes!
 * ** Fixed positioning of gauge for List Style battle layouts without faces.
 *    Fix made by Olivia.
 * 
 * Version 1.03: February 5, 2021
 * * Feature Update!
 * ** Aggro is now cleared at the end of each battle in addition to the start
 *    of each battle. Update made by Olivia.
 *
 * Version 1.02: November 1, 2020
 * * Compatibility Update!
 * ** Plugin is made more compatible with other plugins.
 * 
 * Version 1.01: October 4, 2020
 * * Bug Fixes!
 * ** Provoke lines should now be placed correctly if the UI area is smaller
 *    than the resolution area.
 * ** The Plugin Commands should no longer cause crashes. Fix made by Irina.
 *
 * Version 1.00: September 28, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeAggro
 * @text Actor: Change Aggro
 * @desc Changes target actor's aggro value.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Aggro:num
 * @text Change Aggro By
 * @desc Change aggro by this amount.
 * Use negative numbers to reduce aggro.
 * @default +1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorSetAggro
 * @text Actor: Set Aggro
 * @desc Set target actor's aggro value.
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select which Actor ID to affect.
 * @default 1
 *
 * @arg Aggro:num
 * @text Set Aggro To
 * @desc Sets target's aggro to this amount.
 * Aggro must be at least a value of 1.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyChangeAggro
 * @text Enemy: Change Aggro
 * @desc Changes target enemy's aggro value.
 *
 * @arg EnemyIndex:num
 * @text Enemy Index
 * @type actor
 * @desc Select which Enemy Index to affect.
 * @default 0
 *
 * @arg Aggro:num
 * @text Change Aggro By
 * @desc Change aggro by this amount.
 * Use negative numbers to reduce aggro.
 * @default +1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemySetAggro
 * @text Enemy: Set Aggro
 * @desc Set target enemy's aggro value.
 *
 * @arg EnemyIndex:num
 * @text Enemy Index
 * @type actor
 * @desc Select which Enemy Index to affect.
 * @default 0
 *
 * @arg Aggro:num
 * @text Set Aggro To
 * @desc Sets target's aggro to this amount.
 * Aggro must be at least a value of 1.
 * @default 1
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
 * @param AggroControl
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Provoke:struct
 * @text Provoke Settings
 * @type struct<Provoke>
 * @desc Settings related to the Provoke mechanic.
 * These settings require VisuMZ_1_BattleCore.
 * @default {"VisuMZ_1_BattleCore":"","ShowLines:eval":"true","LineSettings":"","ArcHeight:num":"125","BlendMode:num":"1","HeightOrigin:num":"0.8","LineColor:str":"#ff0000","Opacity:num":"255","OpacitySpeed:num":"4","Parts:num":"256","PartsSize:num":"5","Options":"","AddOption:eval":"true","AdjustOptionsRect:eval":"true","OptionName:str":"Show Provoke Origin"}
 *
 * @param Taunt:struct
 * @text Taunt Settings
 * @type struct<Taunt>
 * @desc Settings related to the Taunt mechanic.
 * @default {"Dependency":"VisuMZ_1_BattleCore","ShowAnimation:eval":"true","AnimationID":"","AniPhysical:num":"1","AniMagical:num":"2","AniCertain:num":"3","AnimationSettings":"","CycleTime:num":"60","MirrorActorAni:eval":"true","MuteAnimations:eval":"true"}
 *
 * @param Aggro:struct
 * @text Aggro Settings
 * @type struct<Aggro>
 * @desc Settings related to the Aggro mechanic.
 * @default {"General":"","PriorityHighest:eval":"true","AggroPerDmg:num":"0.1","AggroPerHeal:num":"0.5","Gauge":"","VisibleGauge:eval":"false","StatusGauge:eval":"true","GaugeColor1:str":"#959595","GaugeColor2:str":"#ffffff","AnchorX:num":"0.5","AnchorY:num":"1.0","Scale:num":"0.5","OffsetX:num":"+0","OffsetY:num":"+2","Options":"","AddOption:eval":"true","AdjustOptionsRect:eval":"true","OptionName:str":"Show Aggro Gauge"}
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
 * Provoke Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Provoke:
 *
 * @param VisuMZ_1_BattleCore
 *
 * @param ShowLines:eval
 * @text Show Priority Lines?
 * @parent VisuMZ_1_BattleCore
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show priority target lines for this plugin?
 * Requires VisuMZ_1_BattleCore.
 * @default true
 *
 * @param LineSettings
 * @text Line Settings
 *
 * @param ArcHeight:num
 * @text Arc Height
 * @parent LineSettings
 * @type number
 * @desc How tall should the line arc in pixels?
 * @default 125
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent LineSettings
 * @type select
 * @option Normal
 * @value 0
 * @option Additive
 * @value 1
 * @option Multiply
 * @value 2
 * @option Screen
 * @value 3
 * @desc The blend mode used for the sprite.
 * @default 1
 *
 * @param HeightOrigin:num
 * @text Height Origin
 * @parent LineSettings
 * @desc The rate from the battler's sprite base to determine where the line starts from.
 * @default 0.8
 *
 * @param LineColor:str
 * @text Line Color
 * @parent LineSettings
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ff0000
 *
 * @param Opacity:num
 * @text Opacity
 * @parent LineSettings
 * @type number
 * @min 1
 * @max 255
 * @desc The highest possible opacity for active provoke lines.
 * @default 255
 *
 * @param OpacitySpeed:num
 * @text Opacity Speed
 * @parent Opacity:num
 * @type number
 * @min 1
 * @desc The speed at which opacity fluctuates for the line sprite.
 * @default 4
 *
 * @param Parts:num
 * @text Parts
 * @parent LineSettings
 * @type number
 * @min 1
 * @desc The number of joint parts to split up the sprite as.
 * @default 256
 *
 * @param PartsSize:num
 * @text Parts Size
 * @parent Parts:num
 * @type number
 * @min 1
 * @desc The number in pixels for the diameter of each part.
 * @default 5
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Provoke Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Show Provoke Origin' option to the Options menu?
 * @default true
 *
 * @param AdjustOptionsRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param OptionName:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Show Provoke Origin
 *
 */
/* ----------------------------------------------------------------------------
 * Taunt Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Taunt:
 *
 * @param Dependency
 * @text VisuMZ_0_CoreEngine
 * @default VisuMZ_1_BattleCore
 *
 * @param ShowAnimation:eval
 * @text Show Animations?
 * @parent Dependency
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show animations for each of the taunt effects?
 * Requires VisuMZ_0_CoreEngine and VisuMZ_1_BattleCore.
 * @default true
 *
 * @param AnimationID
 * @text Animation ID's
 *
 * @param AniPhysical:num
 * @text Physical Taunt
 * @parent AnimationID
 * @type animation
 * @desc The animation ID used for physical taunts.
 * Use 0 or 'None' to bypass this type.
 * @default 13
 *
 * @param AniMagical:num
 * @text Magical Taunt
 * @parent AnimationID
 * @type animation
 * @desc The animation ID used for magical taunts.
 * Use 0 or 'None' to bypass this type.
 * @default 14
 *
 * @param AniCertain:num
 * @text Certain Hit Taunt
 * @parent AnimationID
 * @type animation
 * @desc The animation ID used for certain hit taunts.
 * Use 0 or 'None' to bypass this type.
 * @default 15
 *
 * @param AnimationSettings
 * @text Animation Settings
 *
 * @param CycleTime:num
 * @text Cycle Time
 * @parent AnimationSettings
 * @type number
 * @min 1
 * @desc The amount of frames to wait before each animation cycle.
 * WARNING: Lower numbers can jeopardize game performance.
 * @default 60
 *
 * @param MirrorActorAni:eval
 * @text Mirror Actor Ani?
 * @parent AnimationSettings
 * @type boolean
 * @on Mirror
 * @off Don't
 * @desc Mirror animations played on actors?
 * @default true
 *
 * @param MuteAnimations:eval
 * @text Mute Animation SFX?
 * @parent AnimationSettings
 * @type boolean
 * @on Mute
 * @off Don't
 * @desc Mute sounds played by animations?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Aggro Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Aggro:
 *
 * @param General
 *
 * @param PriorityHighest:eval
 * @text Priority: Highest TGR
 * @parent General
 * @type boolean
 * @on Always
 * @off Weighted
 * @desc When enemies target actors for an single target attack,
 * always target the highest members or make it weighted?
 * @default true
 *
 * @param AggroPerDmg:num
 * @text Aggro Per Damage
 * @parent General
 * @desc The amount of aggro generated per point of HP damage dealt to an enemy.
 * @default 0.1
 *
 * @param AggroPerHeal:num
 * @text Aggro Per Heal
 * @parent General
 * @desc The amount of aggro generated per point of HP recovered to an ally.
 * @default 0.5
 *
 * @param Gauge
 *
 * @param VisibleGauge:eval
 * @text Visible Battler Gauge
 * @parent Gauge
 * @type boolean
 * @on Visible
 * @off None
 * @desc Display an aggro gauge over an SV actor's head to show
 * current aggro level compared to other party members.
 * @default false
 *
 * @param StatusGauge:eval
 * @text Visible Status Gauge
 * @parent Gauge
 * @type boolean
 * @on Visible
 * @off None
 * @desc Display an aggro gauge in the Battle Status Window
 * to show the current aggro level compared to others.
 * @default true
 *
 * @param GaugeColor1:str
 * @text Gauge Color 1
 * @parent Gauge
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #959595
 *
 * @param GaugeColor2:str
 * @text Gauge Color 2
 * @parent Gauge
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @param AnchorX:num
 * @text Anchor X
 * @parent Gauge
 * @desc Where do you want the Aggro Gauge sprite's anchor X to be?
 * Use values between 0 and 1 to be safe.
 * @default 0.5
 *
 * @param AnchorY:num
 * @text Anchor Y
 * @parent Gauge
 * @desc Where do you want the Aggro Gauge sprite's anchor Y to be?
 * Use values between 0 and 1 to be safe.
 * @default 1.0
 *
 * @param Scale:num
 * @text Scale
 * @parent Gauge
 * @desc How large/small do you want the Aggro Gauge to be scaled?
 * @default 0.5
 * 
 * @param BattlerGauge
 * @text Battler Gauge
 * @parent Gauge
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent BattlerGauge
 * @desc How many pixels to offset the Aggro Gauge's X by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent BattlerGauge
 * @desc How many pixels to offset the Aggro Gauge's Y by?
 * Negative goes up. Positive goes down.
 * @default +2
 * 
 * @param BattleStatus
 * @text Battle Status Gauge
 * @parent Gauge
 *
 * @param BattleStatusOffsetX:num
 * @text Offset X
 * @parent BattleStatus
 * @desc How many pixels to offset the Aggro Gauge's X by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param BattleStatusOffsetY:num
 * @text Offset Y
 * @parent BattleStatus
 * @desc How many pixels to offset the Aggro Gauge's Y by?
 * Negative goes up. Positive goes down.
 * @default +0
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Show Aggro Gauge' option to the Options menu?
 * @default true
 *
 * @param AdjustOptionsRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param OptionName:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Show Aggro Gauge
 *
 */
//=============================================================================

var tier = tier || 0x0;
var dependencies = [];
var pluginData = $plugins.filter(function (_0x4e00c0) {
  return _0x4e00c0.status && _0x4e00c0.description.includes("[AggroControlSystem]");
})[0x0];
VisuMZ.AggroControlSystem.Settings = VisuMZ.AggroControlSystem.Settings || {};
VisuMZ.ConvertParams = function (_0x34f8ff, _0x55c952) {
  for (const _0x277378 in _0x55c952) {
    if (_0x277378.match(/(.*):(.*)/i)) {
      const _0x330546 = String(RegExp.$1);
      const _0x5925be = String(RegExp.$2).toUpperCase().trim();
      let _0x311a81;
      let _0x25e4e8;
      let _0x2291a6;
      switch (_0x5925be) {
        case "NUM":
          _0x311a81 = _0x55c952[_0x277378] !== '' ? Number(_0x55c952[_0x277378]) : 0x0;
          break;
        case "ARRAYNUM":
          _0x25e4e8 = _0x55c952[_0x277378] !== '' ? JSON.parse(_0x55c952[_0x277378]) : [];
          _0x311a81 = _0x25e4e8.map(_0x5f0346 => Number(_0x5f0346));
          break;
        case "EVAL":
          _0x311a81 = _0x55c952[_0x277378] !== '' ? eval(_0x55c952[_0x277378]) : null;
          break;
        case "ARRAYEVAL":
          _0x25e4e8 = _0x55c952[_0x277378] !== '' ? JSON.parse(_0x55c952[_0x277378]) : [];
          _0x311a81 = _0x25e4e8.map(_0x3c690c => eval(_0x3c690c));
          break;
        case 'JSON':
          _0x311a81 = _0x55c952[_0x277378] !== '' ? JSON.parse(_0x55c952[_0x277378]) : '';
          break;
        case "ARRAYJSON":
          _0x25e4e8 = _0x55c952[_0x277378] !== '' ? JSON.parse(_0x55c952[_0x277378]) : [];
          _0x311a81 = _0x25e4e8.map(_0x3a3fcc => JSON.parse(_0x3a3fcc));
          break;
        case "FUNC":
          _0x311a81 = _0x55c952[_0x277378] !== '' ? new Function(JSON.parse(_0x55c952[_0x277378])) : new Function("return 0");
          break;
        case "ARRAYFUNC":
          _0x25e4e8 = _0x55c952[_0x277378] !== '' ? JSON.parse(_0x55c952[_0x277378]) : [];
          _0x311a81 = _0x25e4e8.map(_0x4c42b8 => new Function(JSON.parse(_0x4c42b8)));
          break;
        case 'STR':
          _0x311a81 = _0x55c952[_0x277378] !== '' ? String(_0x55c952[_0x277378]) : '';
          break;
        case "ARRAYSTR":
          _0x25e4e8 = _0x55c952[_0x277378] !== '' ? JSON.parse(_0x55c952[_0x277378]) : [];
          _0x311a81 = _0x25e4e8.map(_0x3a7aa0 => String(_0x3a7aa0));
          break;
        case "STRUCT":
          _0x2291a6 = _0x55c952[_0x277378] !== '' ? JSON.parse(_0x55c952[_0x277378]) : {};
          _0x311a81 = VisuMZ.ConvertParams({}, _0x2291a6);
          break;
        case "ARRAYSTRUCT":
          _0x25e4e8 = _0x55c952[_0x277378] !== '' ? JSON.parse(_0x55c952[_0x277378]) : [];
          _0x311a81 = _0x25e4e8.map(_0x3876b9 => VisuMZ.ConvertParams({}, JSON.parse(_0x3876b9)));
          break;
        default:
          continue;
      }
      _0x34f8ff[_0x330546] = _0x311a81;
    }
  }
  return _0x34f8ff;
};
(_0x369ef0 => {
  const _0x1f7a1d = _0x369ef0.name;
  for (const _0xd41a55 of dependencies) {
    if (!Imported[_0xd41a55]) {
      alert("%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.".format(_0x1f7a1d, _0xd41a55));
      SceneManager.exit();
      break;
    }
  }
  const _0x4b419b = _0x369ef0.description;
  if (_0x4b419b.match(/\[Version[ ](.*?)\]/i)) {
    const _0x3ef248 = Number(RegExp.$1);
    if (_0x3ef248 !== VisuMZ.AggroControlSystem.version) {
      alert("%1's version does not match plugin's. Please update it in the Plugin Manager.".format(_0x1f7a1d, _0x3ef248));
      SceneManager.exit();
    }
  }
  if (_0x4b419b.match(/\[Tier[ ](\d+)\]/i)) {
    const _0x4087b8 = Number(RegExp.$1);
    if (_0x4087b8 < tier) {
      alert("%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.".format(_0x1f7a1d, _0x4087b8, tier));
      SceneManager.exit();
    } else {
      tier = Math.max(_0x4087b8, tier);
    }
  }
  VisuMZ.ConvertParams(VisuMZ.AggroControlSystem.Settings, _0x369ef0.parameters);
})(pluginData);
PluginManager.registerCommand(pluginData.name, "ActorChangeAggro", _0x28a66e => {
  if (!$gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x28a66e, _0x28a66e);
  const _0x3901ad = $gameActors.actor(_0x28a66e.ActorID);
  const _0xf4ba3d = _0x28a66e.Aggro;
  if (_0x3901ad) {
    _0x3901ad.gainAggro(_0xf4ba3d);
  }
});
PluginManager.registerCommand(pluginData.name, "ActorSetAggro", _0x523994 => {
  if (!$gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x523994, _0x523994);
  const _0x1cd926 = $gameActors.actor(_0x523994.ActorID);
  const _0x176601 = _0x523994.Aggro;
  if (_0x1cd926) {
    _0x1cd926.setAggro(_0x176601);
  }
});
PluginManager.registerCommand(pluginData.name, "EnemyChangeAggro", _0x58ee8d => {
  if (!$gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x58ee8d, _0x58ee8d);
  const _0x10b3c4 = $gameTroop.members()[_0x58ee8d.EnemyIndex];
  const _0x172b20 = _0x58ee8d.Aggro;
  if (_0x10b3c4) {
    _0x10b3c4.gainAggro(_0x172b20);
  }
});
PluginManager.registerCommand(pluginData.name, "EnemySetAggro", _0x3f269c => {
  if (!$gameParty.inBattle()) {
    return;
  }
  VisuMZ.ConvertParams(_0x3f269c, _0x3f269c);
  const _0x99484c = $gameTroop.members()[_0x3f269c.EnemyIndex];
  const _0x360ac8 = _0x3f269c.Aggro;
  if (_0x99484c) {
    _0x99484c.setAggro(_0x360ac8);
  }
});
DataManager.stateHasProvoke = function (_0x1ff62e) {
  if (!_0x1ff62e) {
    return false;
  }
  return _0x1ff62e.note.match(/<PROVOKE>/i);
};
DataManager.isBypassProvoke = function (_0x1c823d) {
  if (!_0x1c823d) {
    return false;
  }
  return _0x1c823d.note.match(/<BYPASS PROVOKE>/i);
};
DataManager.isBypassTaunt = function (_0x455400) {
  if (!_0x455400) {
    return false;
  }
  return _0x455400.note.match(/<BYPASS TAUNT>/i);
};
DataManager.isBypassHighestAggro = function (_0x392620) {
  if (!_0x392620) {
    return false;
  }
  return _0x392620.note.match(/<BYPASS HIGHEST (?:AGGRO|ENMITY|THREAT)>/i);
};
DataManager.alwaysTargetHighestAggro = function (_0x17135b) {
  if (!_0x17135b) {
    return false;
  }
  return _0x17135b.note.match(/<TARGET HIGHEST (?:AGGRO|ENMITY|THREAT)>/i);
};
ImageManager.provokeBitmap = function () {
  if (this._provokeBitmap) {
    return this._provokeBitmap;
  }
  this._provokeBitmap = new Bitmap(0x64, 0x64);
  this._provokeBitmap.drawCircle(0x32, 0x32, 0x32, ColorManager.provokeLineColor());
  this._provokeBitmap._customModified = false;
  return this._provokeBitmap;
};
ConfigManager.aggroGauge = true;
ConfigManager.provokeOrigin = true;
VisuMZ.AggroControlSystem.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function () {
  const _0x38f141 = VisuMZ.AggroControlSystem.ConfigManager_makeData.call(this);
  _0x38f141.aggroGauge = this.aggroGauge;
  _0x38f141.provokeOrigin = this.provokeOrigin;
  return _0x38f141;
};
VisuMZ.AggroControlSystem.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function (_0xdb41bd) {
  VisuMZ.AggroControlSystem.ConfigManager_applyData.call(this, _0xdb41bd);
  if ("aggroGauge" in _0xdb41bd) {
    this.aggroGauge = _0xdb41bd.aggroGauge;
  } else {
    this.aggroGauge = true;
  }
  if ("provokeOrigin" in _0xdb41bd) {
    this.provokeOrigin = _0xdb41bd.provokeOrigin;
  } else {
    this.provokeOrigin = true;
  }
};
TextManager.aggroGauge = VisuMZ.AggroControlSystem.Settings.Aggro.OptionName;
TextManager.provokeOrigin = VisuMZ.AggroControlSystem.Settings.Provoke.OptionName;
ColorManager.getColorDataFromPluginParameters = function (_0x29880a, _0x175096) {
  _0x175096 = String(_0x175096);
  this._colorCache = this._colorCache || {};
  if (_0x175096.match(/#(.*)/i)) {
    this._colorCache[_0x29880a] = '#%1'.format(String(RegExp.$1));
  } else {
    this._colorCache[_0x29880a] = this.textColor(Number(_0x175096));
  }
  return this._colorCache[_0x29880a];
};
ColorManager.getColor = function (_0x573346) {
  _0x573346 = String(_0x573346);
  if (_0x573346.match(/#(.*)/i)) {
    return '#%1'.format(String(RegExp.$1));
  } else {
    return this.textColor(Number(_0x573346));
  }
};
ColorManager.provokeLineColor = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache['provoke-line-color']) {
    return this._colorCache['provoke-line-color'];
  }
  const _0x88cda2 = VisuMZ.AggroControlSystem.Settings.Provoke.LineColor;
  return this.getColorDataFromPluginParameters('provoke-line-color', _0x88cda2);
};
ColorManager.aggroGaugeColor1 = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache["aggro-gauge-color-1"]) {
    return this._colorCache["aggro-gauge-color-1"];
  }
  const _0x120a5a = VisuMZ.AggroControlSystem.Settings.Aggro.GaugeColor1;
  return this.getColorDataFromPluginParameters("aggro-gauge-color-1", _0x120a5a);
};
ColorManager.aggroGaugeColor2 = function () {
  this._colorCache = this._colorCache || {};
  if (this._colorCache['aggro-gauge-color-2']) {
    return this._colorCache['aggro-gauge-color-2'];
  }
  const _0x19f8e5 = VisuMZ.AggroControlSystem.Settings.Aggro.GaugeColor2;
  return this.getColorDataFromPluginParameters('aggro-gauge-color-2', _0x19f8e5);
};
SceneManager.isSceneBattle = function () {
  return this._scene && this._scene.constructor === Scene_Battle;
};
BattleManager.convertBattleTargetToString = function (_0x55467e) {
  let _0x54c3f1 = this._subject;
  if (this._counterAttackingTarget) {
    _0x54c3f1 = this._counterAttackingTarget;
  }
  if (!_0x54c3f1) {
    return null;
  }
  if (_0x54c3f1.isActor() && _0x55467e.isEnemy()) {
    return "Battle Actor %1".format(_0x54c3f1.actorId());
  } else {
    if (_0x54c3f1.isEnemy() && _0x55467e.isActor()) {
      return "Battle Enemy %1".format(_0x54c3f1.index());
    }
  }
  return null;
};
BattleManager.convertStringToBattleTarget = function (_0x1b0463) {
  if (!_0x1b0463) {
    return null;
  }
  if (_0x1b0463.match(/BATTLE ACTOR (\d+)/i)) {
    return $gameActors.actor(Number(RegExp.$1));
  } else {
    if (_0x1b0463.match(/BATTLE ENEMY (\d+)/i)) {
      return $gameTroop.members()[Number(RegExp.$1)];
    }
  }
  return null;
};
BattleManager.isTargetHighestTGR = function () {
  return VisuMZ.AggroControlSystem.Settings.Aggro.PriorityHighest;
};
VisuMZ.AggroControlSystem.Game_Action_getSpecificBattlerKeyTarget = Game_Action.prototype.getSpecificBattlerKeyTarget;
Game_Action.prototype.getSpecificBattlerKeyTarget = function () {
  let _0x3e6596 = VisuMZ.AggroControlSystem.Game_Action_getSpecificBattlerKeyTarget.call(this);
  if (this._checkingAggroTarget) {
    return _0x3e6596;
  }
  this._checkingAggroTarget = true;
  if (_0x3e6596 && _0x3e6596.isActor() !== this.subject().isActor()) {
    this._targetIndex = -0x1;
    if (this.isProvokeAffected()) {
      _0x3e6596 = this.subject().provoker();
    } else {
      if (this.isTauntAffected()) {
        this._checkingAggroTarget = false;
        const _0x59e607 = this.item().hitType;
        const _0x11ccff = this.opponentsUnit().getTauntMembers(_0x59e607);
        if (!_0x11ccff.includes(_0x3e6596)) {
          _0x3e6596 = _0x11ccff[Math.randomInt(_0x11ccff.length)];
        }
      } else if (this.isAggroAffected()) {
        this._checkingAggroTarget = false;
        _0x3e6596 = this.opponentsUnit().highestTgrMember();
      }
    }
  }
  this._checkingAggroTarget = false;
  return _0x3e6596;
};
VisuMZ.AggroControlSystem.Game_Action_targetsForAlive = Game_Action.prototype.targetsForAlive;
Game_Action.prototype.targetsForAlive = function (_0x336057) {
  if (this.isProvokeAffected()) {
    return this.makeProvokeTarget();
  } else {
    if (this.isTauntAffected()) {
      return this.tauntTargetsForAlive(_0x336057);
    } else {
      if (this.isAggroAffected()) {
        _0x336057.clearTgrCache();
        return [_0x336057.highestTgrMember()];
      } else {
        return VisuMZ.AggroControlSystem.Game_Action_targetsForAlive.call(this, _0x336057);
      }
    }
  }
};
Game_Action.prototype.isNotEnemySelectAction = function () {
  if (this.isForAnyone && this.isForAnyone() && this.needsSelection()) {
    const _0x14450e = this.getBattlerKeyTargets();
    return _0x14450e.length >= 0x1 && _0x14450e[0x0] && _0x14450e[0x0].isActor() === this.subject().isActor();
  } else {
    if (this.item().scope !== 0x1) {
      return true;
    }
  }
  return false;
};
Game_Action.prototype.isProvokeAffected = function () {
  if (!$gameParty.inBattle()) {
    return false;
  }
  if (!this.item()) {
    return false;
  }
  if (this.isNotEnemySelectAction()) {
    return false;
  }
  if (!this.needsSelection()) {
    return false;
  }
  if (DataManager.isBypassProvoke(this.item())) {
    return false;
  }
  if (this.subject().bypassProvoke()) {
    return false;
  }
  if (!this.subject().isProvokeAffected()) {
    return false;
  }
  const _0x13e579 = this.subject().provoker();
  if (_0x13e579.isDead()) {
    return false;
  }
  return true;
};
Game_Action.prototype.makeProvokeTarget = function () {
  return [this.subject().provoker()];
};
Game_Action.prototype.isTauntAffected = function () {
  if (!$gameParty.inBattle()) {
    return false;
  }
  if (!this.item()) {
    return false;
  }
  if (this.isNotEnemySelectAction()) {
    return false;
  }
  if (!this.needsSelection()) {
    return false;
  }
  if (DataManager.isBypassTaunt(this.item())) {
    return false;
  }
  if (this.subject().bypassTaunt()) {
    return false;
  }
  const _0x19e3c0 = this.opponentsUnit();
  let _0x47e375 = false;
  if (this.isPhysical() && _0x19e3c0.physicalTauntMembers().length > 0x0) {
    _0x47e375 = true;
  }
  if (this.isMagical() && _0x19e3c0.magicalTauntMembers().length > 0x0) {
    _0x47e375 = true;
  }
  if (this.isCertainHit() && _0x19e3c0.certainHitTauntMembers().length > 0x0) {
    _0x47e375 = true;
  }
  return _0x47e375;
};
Game_Action.prototype.tauntTargetsForAlive = function (_0x40db1a) {
  if (this._targetIndex < 0x0) {
    return [_0x40db1a.randomTauntTarget(this.item().hitType)];
  } else {
    const _0xfb8a16 = _0x40db1a.smoothTarget(this._targetIndex);
    if (_0xfb8a16.matchTauntType(this.item().hitType)) {
      return [_0xfb8a16];
    } else {
      return [_0x40db1a.randomTauntTarget()];
    }
  }
};
Game_Action.prototype.isAggroAffected = function () {
  if (!$gameParty.inBattle()) {
    return false;
  }
  if (this.isNotEnemySelectAction()) {
    return false;
  }
  if (this._targetIndex >= 0x0) {
    return false;
  }
  if (Imported.VisuMZ_3_BattleAI && this.subject().isEnemy()) {
    const _0x4f64af = this.item().note || '';
    const _0x56ecd1 = AIManager._regexp;
    if (_0x4f64af.match(_0x56ecd1.aiTarget)) {
      return false;
    }
  }
  if (DataManager.isBypassHighestAggro(this.item())) {
    return false;
  }
  if (this.subject().bypassHighestAggro()) {
    return false;
  }
  if (DataManager.alwaysTargetHighestAggro(this.item())) {
    return true;
  }
  if (this.subject().alwaysTargetHighestAggro()) {
    return true;
  }
  if (this.subject().isActor()) {
    return false;
  }
  return BattleManager.isTargetHighestTGR();
};
VisuMZ.AggroControlSystem.Game_Action_applyGlobal = Game_Action.prototype.applyGlobal;
Game_Action.prototype.applyGlobal = function () {
  VisuMZ.AggroControlSystem.Game_Action_applyGlobal.call(this);
  this.applySubjectAggro();
};
Game_Action.prototype.applySubjectAggro = function () {
  const _0x461138 = this.item().note;
  if (_0x461138.match(/<(?:USER AGGRO|AGGRO|USER ENMITY|ENMITY|USER THREAT|THREAT): ([\+\-]\d+)>/i)) {
    const _0x1f0aa4 = Number(RegExp.$1);
    this.subject().gainAggro(_0x1f0aa4);
  }
  if (_0x461138.match(/<JS (?:USER AGGRO|AGGRO|USER ENMITY|ENMITY|USER THREAT|THREAT)>\s*([\s\S]*)\s*<\/JS (?:USER AGGRO|AGGRO|USER ENMITY|ENMITY|USER THREAT|THREAT)>/i)) {
    const _0x3f4d87 = String(RegExp.$1);
    window.user = this.subject();
    window.item = this.item();
    window.a = this.subject();
    window.b = a;
    window.value = user.battleAggro();
    try {
      eval(_0x3f4d87);
    } catch (_0x559225) {
      if ($gameTemp.isPlaytest()) {
        console.log(_0x559225);
      }
    }
    user.setAggro(window.value);
    window.user = undefined;
    window.target = undefined;
    window.item = undefined;
    window.a = undefined;
    window.b = undefined;
    window.value = undefined;
  }
};
VisuMZ.AggroControlSystem.Game_Action_applyItemUserEffect = Game_Action.prototype.applyItemUserEffect;
Game_Action.prototype.applyItemUserEffect = function (_0x3921b8) {
  VisuMZ.AggroControlSystem.Game_Action_applyItemUserEffect.call(this, _0x3921b8);
  this.applyItemUserEffectAggroControl(_0x3921b8);
};
Game_Action.prototype.applyItemUserEffectAggroControl = function (_0x1a8bfd) {
  if (!this.item()) {
    return;
  }
  if (!SceneManager.isSceneBattle()) {
    return;
  }
  const _0x1a3dad = this.item().note;
  if (_0x1a3dad.match(/<TARGET (?:AGGRO|ENMITY|THREAT): ([\+\-]\d+)>/i)) {
    const _0x4cecdb = Number(RegExp.$1);
    _0x1a8bfd.gainAggro(_0x4cecdb);
  }
  if (_0x1a3dad.match(/<JS TARGET (?:AGGRO|ENMITY|THREAT)>\s*([\s\S]*)\s*<\/JS TARGET (?:AGGRO|ENMITY|THREAT)>/i)) {
    const _0x44543f = String(RegExp.$1);
    window.user = this.subject();
    window.target = _0x1a8bfd;
    window.item = this.item();
    window.a = this.subject();
    window.b = _0x1a8bfd;
    window.value = _0x1a8bfd.battleAggro();
    try {
      eval(_0x44543f);
    } catch (_0x17b194) {
      if ($gameTemp.isPlaytest()) {
        console.log(_0x17b194);
      }
    }
    _0x1a8bfd.setAggro(window.value);
    window.user = undefined;
    window.target = undefined;
    window.item = undefined;
    window.a = undefined;
    window.b = undefined;
    window.value = undefined;
  }
};
VisuMZ.AggroControlSystem.Game_Action_executeHpDamage = Game_Action.prototype.executeHpDamage;
Game_Action.prototype.executeHpDamage = function (_0x316328, _0x1566f6) {
  VisuMZ.AggroControlSystem.Game_Action_executeHpDamage.call(this, _0x316328, _0x1566f6);
  this.executeHpDamageAggroControl(_0x316328, _0x1566f6);
};
Game_Action.prototype.executeHpDamageAggroControl = function (_0x55fc5f, _0x3fee18) {
  const _0x33b2f2 = VisuMZ.AggroControlSystem.Settings.Aggro;
  if (_0x3fee18 > 0x0 && _0x55fc5f.isActor() !== this.subject().isActor()) {
    const _0x32f616 = _0x33b2f2.AggroPerDmg;
    this.subject().gainAggro(_0x32f616 * _0x3fee18);
  }
  if (_0x3fee18 < 0x0 && _0x55fc5f.isActor() === this.subject().isActor()) {
    const _0x166e00 = _0x33b2f2.AggroPerHeal;
    this.subject().gainAggro(_0x166e00 * Math.abs(_0x3fee18));
  }
};
VisuMZ.AggroControlSystem.Game_BattlerBase_initMembers = Game_BattlerBase.prototype.initMembers;
Game_BattlerBase.prototype.initMembers = function () {
  this._cache = {};
  VisuMZ.AggroControlSystem.Game_BattlerBase_initMembers.call(this);
  this.initAggroControl();
};
Game_BattlerBase.prototype.initAggroControl = function () {
  this.clearProvokers();
  this.clearAggro();
};
Game_BattlerBase.prototype.clearProvokers = function () {
  this._provoker = {};
};
VisuMZ.AggroControlSystem.Game_BattlerBase_refresh = Game_BattlerBase.prototype.refresh;
Game_BattlerBase.prototype.refresh = function () {
  this._cache = {};
  VisuMZ.AggroControlSystem.Game_BattlerBase_refresh.call(this);
  this.removeDeadProvokerStates();
};
Game_BattlerBase.prototype.checkCacheKey = function (_0x64a14) {
  this._cache = this._cache || {};
  return this._cache[_0x64a14] !== undefined;
};
Game_BattlerBase.prototype.provoker = function () {
  for (const _0x13ab1a of this.states()) {
    if (DataManager.stateHasProvoke(_0x13ab1a)) {
      if (this._provoker === undefined) {
        this.clearProvokers();
      }
      const _0x1c209a = this._provoker[_0x13ab1a.id];
      const _0x24518b = BattleManager.convertStringToBattleTarget(_0x1c209a);
      if (_0x24518b && _0x24518b.isAlive()) {
        return _0x24518b;
      }
    }
  }
  return null;
};
Game_BattlerBase.prototype.isProvokeAffected = function () {
  return !!this.provoker();
};
Game_BattlerBase.prototype.bypassProvoke = function () {
  return this.traitObjects().some(_0x5239b7 => _0x5239b7 && _0x5239b7.note.match(/<BYPASS PROVOKE>/i));
};
Game_BattlerBase.prototype.provokeHeightOrigin = function () {
  if (this.checkCacheKey('provokeHeightOrigin')) {
    return this._cache.provokeHeightOrigin;
  }
  this._cache.provokeHeightOrigin = this.createProvokeHeightOrigin();
  return this._cache.provokeHeightOrigin;
};
Game_BattlerBase.prototype.createProvokeHeightOrigin = function () {
  const _0x1ab5c9 = this.isActor() ? this.actor().note : this.isEnemy() ? this.enemy().note : '';
  if (_0x1ab5c9.match(/<PROVOKE HEIGHT ORIGIN: (\d+)([%％])>/i)) {
    return Number(RegExp.$1) * 0.01;
  }
  return VisuMZ.AggroControlSystem.Settings.Provoke.HeightOrigin;
};
Game_BattlerBase.prototype.removeDeadProvokerStates = function () {
  for (const _0x44c46c of this.states()) {
    if (DataManager.stateHasProvoke(_0x44c46c)) {
      if (this._provoker === undefined) {
        this.clearProvokers();
      }
      const _0xafccd5 = this._provoker[_0x44c46c.id];
      const _0x528b34 = BattleManager.convertStringToBattleTarget(_0xafccd5);
      if (_0x528b34 && _0x528b34.isDead()) {
        this.removeState(_0x44c46c.id);
      }
    }
  }
};
Game_BattlerBase.prototype.matchTauntType = function (_0x5972db) {
  switch (_0x5972db) {
    case Game_Action.HITTYPE_PHYSICAL:
      return this.physicalTaunt();
      break;
    case Game_Action.HITTYPE_MAGICAL:
      return this.magicalTaunt();
      break;
    case Game_Action.HITTYPE_CERTAIN:
      return this.certainHitTaunt();
      break;
  }
};
Game_BattlerBase.prototype.taunting = function () {
  return this.physicalTaunt() || this.magicalTaunt() || this.certainHitTaunt();
};
Game_BattlerBase.prototype.physicalTaunt = function () {
  return this.traitObjects().some(_0x133df4 => _0x133df4 && _0x133df4.note.match(/<(?:TAUNT|PHYSICAL TAUNT|ALL TAUNT)>/i));
};
Game_BattlerBase.prototype.magicalTaunt = function () {
  return this.traitObjects().some(_0xab2729 => _0xab2729 && _0xab2729.note.match(/<(?:TAUNT|MAGICAL TAUNT|ALL TAUNT)>/i));
};
Game_BattlerBase.prototype.certainHitTaunt = function () {
  return this.traitObjects().some(_0x248e58 => _0x248e58 && _0x248e58.note.match(/<(?:TAUNT|CERTAIN TAUNT|CERTAIN HIT TAUNT|ALL TAUNT)>/i));
};
Game_BattlerBase.prototype.bypassTaunt = function () {
  return this.traitObjects().some(_0x480512 => _0x480512 && _0x480512.note.match(/<BYPASS TAUNT>/i));
};
Game_BattlerBase.prototype.clearAggro = function () {
  this._aggro = 0x1;
};
VisuMZ.AggroControlSystem.Game_BattlerBase_sparam = Game_BattlerBase.prototype.sparam;
Game_BattlerBase.prototype.sparam = function (_0x3505ec) {
  let _0x22ec64 = VisuMZ.AggroControlSystem.Game_BattlerBase_sparam.call(this, _0x3505ec);
  if (_0x3505ec === 0x0) {
    if (this._aggro === undefined) {
      this.clearAggro();
    }
    _0x22ec64 *= this.aggro();
    _0x22ec64 = Math.max(_0x22ec64, 0x0);
  }
  return _0x22ec64;
};
Game_BattlerBase.prototype.setAggro = function (_0x2eaec0) {
  if (this._aggro === undefined) {
    this.clearAggro();
  }
  this._aggro = Math.max(0x1, Math.round(this._aggro));
};
Game_BattlerBase.prototype.gainAggro = function (_0x4e111f) {
  if (this._aggro === undefined) {
    this.clearAggro();
  }
  this._aggro = Math.max(0x1, this._aggro + Math.round(_0x4e111f));
};
Game_BattlerBase.prototype.loseAggro = function (_0x57b499) {
  this.gainAggro(-_0x57b499);
};
Game_BattlerBase.prototype.aggro = function () {
  if (this.isDead()) {
    return 0x0;
  }
  return this.baseAggro() * this.aggroMultiplier();
};
Game_BattlerBase.prototype.battleAggro = function () {
  if (this._aggro === undefined) {
    this.clearAggro();
  }
  return this._aggro;
};
Game_BattlerBase.prototype.baseAggro = function () {
  return this.traitObjects().reduce((_0x3ce18a, _0x247d33) => {
    return _0x247d33 && _0x247d33.note.match(/<(?:AGGRO|ENMITY|THREAT): ([\+\-]\d+)>/i) ? _0x3ce18a + Number(RegExp.$1) / 0x64 : _0x3ce18a;
  }, this.battleAggro());
};
Game_BattlerBase.prototype.aggroMultiplier = function () {
  return this.traitObjects().reduce((_0x1a4725, _0x310b24) => {
    return _0x310b24 && _0x310b24.note.match(/<(?:AGGRO|ENMITY|THREAT) MULTIPLIER: (\d+)%>/i) ? _0x1a4725 + Number(RegExp.$1) / 0x64 : _0x1a4725;
  }, 0x1);
};
Game_BattlerBase.prototype.bypassHighestAggro = function () {
  return this.traitObjects().some(_0x5b0347 => _0x5b0347 && _0x5b0347.note.match(/<BYPASS HIGHEST (?:AGGRO|ENMITY|THREAT)>/i));
};
Game_BattlerBase.prototype.alwaysTargetHighestAggro = function () {
  return this.traitObjects().some(_0x22a402 => _0x22a402 && _0x22a402.note.match(/<TARGET HIGHEST (?:AGGRO|ENMITY|THREAT)>/i));
};
VisuMZ.AggroControlSystem.Game_Battler_onBattleStart = Game_Battler.prototype.onBattleStart;
Game_Battler.prototype.onBattleStart = function (_0x2879e6) {
  VisuMZ.AggroControlSystem.Game_Battler_onBattleStart.call(this, _0x2879e6);
  this.clearAggro();
};
VisuMZ.AggroControlSystem.Game_Battler_onBattleEnd = Game_Battler.prototype.onBattleEnd;
Game_Battler.prototype.onBattleEnd = function () {
  VisuMZ.AggroControlSystem.Game_Battler_onBattleEnd.call(this);
  this.clearAggro();
};
VisuMZ.AggroControlSystem.Game_Battler_addState = Game_Battler.prototype.addState;
Game_Battler.prototype.addState = function (_0x229ad9) {
  VisuMZ.AggroControlSystem.Game_Battler_addState.call(this, _0x229ad9);
  this.applyProvokeEffect(_0x229ad9);
};
Game_Battler.prototype.applyProvokeEffect = function (_0x2570a5) {
  if (this.isStateAffected(_0x2570a5)) {
    if (this._provoker === undefined) {
      this.clearProvokers();
    }
    const _0x3f309d = BattleManager.convertBattleTargetToString(this);
    this._provoker[_0x2570a5] = _0x3f309d;
    if (!this._provoker[_0x2570a5]) {
      delete this._provoker[_0x2570a5];
    }
  }
};
VisuMZ.AggroControlSystem.BattleManager_invokeCounterAttack = BattleManager.invokeCounterAttack;
BattleManager.invokeCounterAttack = function (_0x3b7b04, _0x1fc9a1) {
  this._counterAttackingTarget = _0x1fc9a1;
  VisuMZ.AggroControlSystem.BattleManager_invokeCounterAttack.call(this, _0x3b7b04, _0x1fc9a1);
  this._counterAttackingTarget = undefined;
};
VisuMZ.AggroControlSystem.BattleManager_invokeMagicReflection = BattleManager.invokeMagicReflection;
BattleManager.invokeMagicReflection = function (_0x416a73, _0x5355d3) {
  this._counterAttackingTarget = _0x5355d3;
  VisuMZ.AggroControlSystem.BattleManager_invokeMagicReflection.call(this, _0x416a73, _0x5355d3);
  this._counterAttackingTarget = undefined;
};
VisuMZ.AggroControlSystem.Game_Unit_onBattleStart = Game_Unit.prototype.onBattleStart;
Game_Unit.prototype.onBattleStart = function (_0xc41629) {
  this.clearTgrCache();
  VisuMZ.AggroControlSystem.Game_Unit_onBattleStart.call(this, _0xc41629);
};
Game_Unit.prototype.physicalTauntMembers = function () {
  return this.aliveMembers().filter(_0x4eb435 => _0x4eb435 && _0x4eb435.physicalTaunt());
};
Game_Unit.prototype.magicalTauntMembers = function () {
  return this.aliveMembers().filter(_0x4b1e2b => _0x4b1e2b && _0x4b1e2b.magicalTaunt());
};
Game_Unit.prototype.certainHitTauntMembers = function () {
  return this.aliveMembers().filter(_0x2f6ea3 => _0x2f6ea3 && _0x2f6ea3.certainHitTaunt());
};
Game_Unit.prototype.getTauntMembers = function (_0x28eb83) {
  switch (_0x28eb83) {
    case Game_Action.HITTYPE_PHYSICAL:
      return this.physicalTauntMembers();
      break;
    case Game_Action.HITTYPE_MAGICAL:
      return this.magicalTauntMembers();
      break;
    case Game_Action.HITTYPE_CERTAIN:
      return this.certainHitTauntMembers();
      break;
  }
  return [];
};
Game_Unit.prototype.randomTauntTarget = function (_0x41653d) {
  let _0x1315e8 = [];
  switch (_0x41653d) {
    case Game_Action.HITTYPE_PHYSICAL:
      _0x1315e8 = this.physicalTauntMembers();
      break;
    case Game_Action.HITTYPE_MAGICAL:
      _0x1315e8 = this.magicalTauntMembers();
      break;
    case Game_Action.HITTYPE_CERTAIN:
      _0x1315e8 = this.certainHitTauntMembers();
      break;
  }
  let _0x5a7f52 = Math.random() * this.tgrSumFromGroup(_0x1315e8);
  let _0x4f1230 = null;
  if (BattleManager.isTargetHighestTGR()) {
    return this.findTgrMember(_0x1315e8, true);
  } else {
    for (const _0x45670a of _0x1315e8) {
      _0x5a7f52 -= _0x45670a.tgr;
      if (_0x5a7f52 <= 0x0 && !_0x4f1230) {
        _0x4f1230 = _0x45670a;
      }
    }
    return _0x4f1230 || this.randomTarget();
  }
};
Game_Unit.prototype.tgrSumFromGroup = function (_0x1feb3c) {
  return _0x1feb3c.reduce((_0x547c12, _0x59e5aa) => _0x547c12 + _0x59e5aa.tgr, 0x0);
};
Game_Unit.prototype.tgrMax = function () {
  const _0x3a68e9 = this.aliveMembers().map(_0x7a2e11 => _0x7a2e11.tgr);
  return Math.max(..._0x3a68e9);
};
Game_Unit.prototype.tgrMin = function () {
  const _0x1e4278 = this.aliveMembers().map(_0x25c19d => _0x25c19d.tgr);
  return Math.min(..._0x1e4278);
};
Game_Unit.prototype.clearTgrCache = function () {
  this._highestTgrMember = undefined;
  this._lowestTgrMember = undefined;
};
Game_Unit.prototype.highestTgrMember = function () {
  if (!this._highestTgrMember) {
    const _0x3d88d9 = this.tgrMax();
    const _0x11ff44 = this.aliveMembers().filter(_0x4cb12a => _0x4cb12a.tgr === _0x3d88d9);
    this._highestTgrMember = _0x11ff44[Math.randomInt(_0x11ff44.length)] || this.randomTarget();
  }
  return this._highestTgrMember;
};
Game_Unit.prototype.lowestTgrMember = function () {
  if (!this._lowestTgrMember) {
    const _0x120d83 = this.tgrMin();
    const _0x3e8e4f = this.aliveMembers().filter(_0x1777e8 => _0x1777e8.tgr === _0x120d83);
    this._lowestTgrMember = _0x3e8e4f[Math.randomInt(_0x3e8e4f.length)] || this.randomTarget();
  }
  return this._lowestTgrMember;
};
VisuMZ.AggroControlSystem.BattleManager_endAction = BattleManager.endAction;
BattleManager.endAction = function () {
  VisuMZ.AggroControlSystem.BattleManager_endAction.call(this);
  $gameParty.clearTgrCache();
  $gameTroop.clearTgrCache();
};
VisuMZ.AggroControlSystem.BattleManager_endBattle = BattleManager.endBattle;
BattleManager.endBattle = function (_0x1f82a8) {
  VisuMZ.AggroControlSystem.BattleManager_endBattle.call(this, _0x1f82a8);
  $gameParty.clearTgrCache();
  $gameTroop.clearTgrCache();
};
Game_Unit.prototype.findTgrMember = function (_0x3b6843, _0x423b6e) {
  const _0x1b54a0 = _0x3b6843.map(_0x415603 => _0x415603.tgr);
  const _0x3228f1 = _0x423b6e ? Math.max(..._0x1b54a0) : Math.min(..._0x1b54a0);
  const _0x511cdb = _0x3b6843.filter(_0x29d6a5 => _0x29d6a5.tgr === _0x3228f1);
  return _0x511cdb[Math.randomInt(_0x511cdb.length)] || this.randomTarget();
};
VisuMZ.AggroControlSystem.Scene_Options_maxCommands = Scene_Options.prototype.maxCommands;
Scene_Options.prototype.maxCommands = function () {
  let _0x4d2609 = VisuMZ.AggroControlSystem.Scene_Options_maxCommands.call(this);
  const _0xa08e29 = VisuMZ.AggroControlSystem.Settings;
  if (_0xa08e29.Provoke.AddOption && _0xa08e29.Provoke.AdjustOptionsRect) {
    _0x4d2609++;
  }
  if (_0xa08e29.Aggro.AddOption && _0xa08e29.Aggro.AdjustOptionsRect) {
    _0x4d2609++;
  }
  return _0x4d2609;
};
Sprite_Battler._animationCycleTime = VisuMZ.AggroControlSystem.Settings.Taunt.CycleTime;
Sprite_Battler._physicalTauntAnimation = VisuMZ.AggroControlSystem.Settings.Taunt.AniPhysical;
Sprite_Battler._magicalTauntAnimation = VisuMZ.AggroControlSystem.Settings.Taunt.AniMagical;
Sprite_Battler._certainHitTauntAnimation = VisuMZ.AggroControlSystem.Settings.Taunt.AniCertain;
Sprite_Battler._mirrorActorTauntAnimations = VisuMZ.AggroControlSystem.Settings.Taunt.MirrorActorAni;
Sprite_Battler._muteTauntAnimations = VisuMZ.AggroControlSystem.Settings.Taunt.MuteAnimations;
VisuMZ.AggroControlSystem.Sprite_Battler_initialize = Sprite_Battler.prototype.initialize;
Sprite_Battler.prototype.initialize = function (_0x34d42f) {
  VisuMZ.AggroControlSystem.Sprite_Battler_initialize.call(this, _0x34d42f);
  if (this.isShowPriorityLines()) {
    setTimeout(this.createProvokeSprite.bind(this), 0x3e8);
  }
};
VisuMZ.AggroControlSystem.Sprite_Battler_initMembers = Sprite_Battler.prototype.initMembers;
Sprite_Battler.prototype.initMembers = function () {
  VisuMZ.AggroControlSystem.Sprite_Battler_initMembers.call(this);
  this.initTauntAnimations();
};
Sprite_Battler.prototype.initTauntAnimations = function () {
  this._tauntAnimationTimer = VisuMZ.AggroControlSystem.Settings.Taunt.CycleTime;
  this._tauntAnimationCycle = ["physical", "magical", "certainHit"];
};
Sprite_Battler.prototype.isShowPriorityLines = function () {
  if (!Imported.VisuMZ_1_BattleCore) {
    return false;
  }
  if (![Sprite_Actor, Sprite_Enemy].includes(this.constructor)) {
    return false;
  }
  return ConfigManager.provokeOrigin && VisuMZ.AggroControlSystem.Settings.Provoke.ShowLines;
};
Sprite_Battler.prototype.createProvokeSprite = function () {
  if (!SceneManager.isSceneBattle()) {
    return;
  }
  this._provokeSprite = new Sprite_ProvokeTrail(this);
  this._provokeSprite.parentContainer().addChild(this._provokeSprite);
};
VisuMZ.AggroControlSystem.Sprite_Battler_setBattler = Sprite_Battler.prototype.setBattler;
Sprite_Battler.prototype.setBattler = function (_0x5936d1) {
  VisuMZ.AggroControlSystem.Sprite_Battler_setBattler.call(this, _0x5936d1);
  if (this._aggroGaugeSprite) {
    this._aggroGaugeSprite._battler = _0x5936d1;
  }
};
VisuMZ.AggroControlSystem.Sprite_Battler_update = Sprite_Battler.prototype.update;
Sprite_Battler.prototype.update = function () {
  VisuMZ.AggroControlSystem.Sprite_Battler_update.call(this);
  this.updateTauntAnimations();
};
Sprite_Battler.prototype.updateTauntAnimations = function () {
  if (!Imported.VisuMZ_0_CoreEngine) {
    return;
  }
  if (!Imported.VisuMZ_1_BattleCore) {
    return;
  }
  if (!VisuMZ.AggroControlSystem.Settings.Taunt.ShowAnimation) {
    return;
  }
  if (!this._battler) {
    return;
  }
  this._tauntAnimationTimer--;
  if (this._tauntAnimationTimer <= 0x0) {
    this.startNewTauntAnimation();
  }
};
Sprite_Battler.prototype.startNewTauntAnimation = function () {
  this._tauntAnimationTimer = Sprite_Battler._animationCycleTime;
  if (!this._battler) {
    return;
  }
  if (!this._battler.taunting()) {
    return;
  }
  const _0x472390 = [this._battler];
  const _0x4ef2a7 = this.getNextTauntAnimation();
  const _0x3e6c2f = this._battler.isActor() && Sprite_Battler._mirrorActorTauntAnimations;
  const _0x487eb3 = Sprite_Battler._muteTauntAnimations;
  $gameTemp.requestFauxAnimation(_0x472390, _0x4ef2a7, _0x3e6c2f, _0x487eb3);
};
Sprite_Battler.prototype.getNextTauntAnimation = function () {
  let _0x3fd33f = this._tauntAnimationCycle.length;
  while (_0x3fd33f) {
    const _0x39e12f = this._tauntAnimationCycle.shift();
    this._tauntAnimationCycle.push(_0x39e12f);
    const _0x29b6c7 = "%1Taunt".format(_0x39e12f);
    if (this._battler[_0x29b6c7]()) {
      const _0x14eb90 = "_%1TauntAnimation".format(_0x39e12f);
      const _0x5aa8b3 = Sprite_Battler[_0x14eb90];
      if (_0x5aa8b3) {
        return _0x5aa8b3;
      }
    }
    _0x3fd33f--;
  }
  return Sprite_Battler._certainHitTauntAnimation;
};
VisuMZ.AggroControlSystem.Sprite_Actor_createStateSprite = Sprite_Actor.prototype.createStateSprite;
Sprite_Actor.prototype.createStateSprite = function () {
  VisuMZ.AggroControlSystem.Sprite_Actor_createStateSprite.call(this);
  this.createAggroGauge();
};
Sprite_Actor.prototype.createAggroGauge = function () {
  if (this.constructor !== Sprite_Actor) {
    return;
  }
  if (!this.isAggroGaugeVisible()) {
    return;
  }
  if (!SceneManager.isSceneBattle()) {
    return;
  }
  const _0x18219b = VisuMZ.AggroControlSystem.Settings.Aggro;
  const _0x58a980 = new Sprite_Gauge();
  _0x58a980.anchor.x = _0x18219b.AnchorX;
  _0x58a980.anchor.y = _0x18219b.AnchorY;
  _0x58a980.scale.x = _0x58a980.scale.y = _0x18219b.Scale;
  this._aggroGaugeSprite = _0x58a980;
  this.addChild(_0x58a980);
};
Sprite_Actor.prototype.isAggroGaugeVisible = function () {
  if (Imported.VisuMZ_1_BattleCore && this.constructor === Sprite_SvEnemy) {
    return false;
  }
  return ConfigManager.aggroGauge && VisuMZ.AggroControlSystem.Settings.Aggro.VisibleGauge;
};
VisuMZ.AggroControlSystem.Sprite_Actor_update = Sprite_Actor.prototype.update;
Sprite_Actor.prototype.update = function () {
  VisuMZ.AggroControlSystem.Sprite_Actor_update.call(this);
  this.updateAggroGaugeSprite();
};
Sprite_Actor.prototype.updateAggroGaugeSprite = function () {
  if (!this._battler) {
    return;
  }
  if (!this._aggroGaugeSprite) {
    return;
  }
  const _0x3af567 = VisuMZ.AggroControlSystem.Settings.Aggro;
  const _0xc0abe = this._aggroGaugeSprite;
  let _0x2dad01 = _0x3af567.OffsetX;
  if (this._battler.battleUIOffsetX) {
    _0x2dad01 += this._battler.battleUIOffsetX();
  }
  let _0x21da3f = _0x3af567.OffsetY;
  if (this._battler.battleUIOffsetY) {
    _0x21da3f += this._battler.battleUIOffsetY();
  }
  _0xc0abe.x = _0x2dad01;
  _0xc0abe.y = -this.height + _0x21da3f;
  if (this._battler && _0xc0abe._statusType !== "aggro") {
    _0xc0abe.visible = true;
    _0xc0abe.setup(this._battler, "aggro");
  }
  if (this.scale.x < 0x0) {
    _0xc0abe.scale.x = -Math.abs(_0xc0abe.scale.x);
  }
};
Sprite_Gauge.prototype.isAggroType = function () {
  return this._battler && this._statusType === "aggro";
};
VisuMZ.AggroControlSystem.Sprite_Gauge_gaugeX = Sprite_Gauge.prototype.gaugeX;
Sprite_Gauge.prototype.gaugeX = function () {
  if (this.isAggroType()) {
    return 0x0;
  } else {
    return VisuMZ.AggroControlSystem.Sprite_Gauge_gaugeX.call(this);
  }
};
VisuMZ.AggroControlSystem.Sprite_Gauge_gaugeRate = Sprite_Gauge.prototype.gaugeRate;
Sprite_Gauge.prototype.gaugeRate = function () {
  let _0x15c342 = VisuMZ.AggroControlSystem.Sprite_Gauge_gaugeRate.call(this);
  if (this.isAggroType() && this._battler) {
    if (this._battler.isDead()) {
      return 0x0;
    }
    if (this._battler.isAlive() && this._battler.friendsUnit().aliveMembers().length === 0x1) {
      return 0x1;
    }
  }
  return _0x15c342.clamp(0x0, 0x1);
};
VisuMZ.AggroControlSystem.Sprite_Gauge_currentValue = Sprite_Gauge.prototype.currentValue;
Sprite_Gauge.prototype.currentValue = function () {
  if (this.isAggroType()) {
    return this.currentValueAggroControl();
  } else {
    return VisuMZ.AggroControlSystem.Sprite_Gauge_currentValue.call(this);
  }
};
Sprite_Gauge.prototype.currentValueAggroControl = function () {
  const _0x29e1b1 = this._battler.friendsUnit();
  const _0x11d157 = this._battler.tgr - _0x29e1b1.tgrMin();
  const _0x725591 = _0x29e1b1.tgrMax() - _0x29e1b1.tgrMin();
  if (_0x11d157 >= _0x725591) {
    return 0x64;
  }
  return _0x11d157 / Math.max(_0x725591, 0x1) * 0x64;
};
VisuMZ.AggroControlSystem.Sprite_Gauge_currentMaxValue = Sprite_Gauge.prototype.currentMaxValue;
Sprite_Gauge.prototype.currentMaxValue = function () {
  return this.isAggroType() ? this.currentMaxValueAggroControl() : VisuMZ.AggroControlSystem.Sprite_Gauge_currentMaxValue.call(this);
};
Sprite_Gauge.prototype.currentMaxValueAggroControl = function () {
  return 0x64;
};
VisuMZ.AggroControlSystem.Sprite_Gauge_gaugeColor1 = Sprite_Gauge.prototype.gaugeColor1;
Sprite_Gauge.prototype.gaugeColor1 = function () {
  if (this.isAggroType()) {
    return ColorManager.aggroGaugeColor1();
  } else {
    return VisuMZ.AggroControlSystem.Sprite_Gauge_gaugeColor1.call(this);
  }
};
VisuMZ.AggroControlSystem.Sprite_Gauge_gaugeColor2 = Sprite_Gauge.prototype.gaugeColor2;
Sprite_Gauge.prototype.gaugeColor2 = function () {
  if (this.isAggroType()) {
    return ColorManager.aggroGaugeColor2();
  } else {
    return VisuMZ.AggroControlSystem.Sprite_Gauge_gaugeColor2.call(this);
  }
};
VisuMZ.AggroControlSystem.Sprite_Gauge_update = Sprite_Gauge.prototype.update;
Sprite_Gauge.prototype.update = function () {
  VisuMZ.AggroControlSystem.Sprite_Gauge_update.call(this);
  this.updateOpacityAggroControl();
};
Sprite_Gauge.prototype.updateOpacityAggroControl = function () {
  if (!this.isAggroType()) {
    return;
  }
  if (!Imported.VisuMZ_1_BattleCore) {
    return;
  }
  const _0x41aadd = this._battler.battler();
  if (this._menuAggroType) {
    this.opacity = 0xff;
  } else {
    if (_0x41aadd && _0x41aadd.opacity > 0x0) {
      this.opacity = 0xff;
    } else {
      this.opacity = 0x0;
    }
  }
};
VisuMZ.AggroControlSystem.Sprite_Gauge_drawValue = Sprite_Gauge.prototype.drawValue;
Sprite_Gauge.prototype.drawValue = function () {
  if (this.isAggroType()) {
    return;
  }
  VisuMZ.AggroControlSystem.Sprite_Gauge_drawValue.call(this);
};
function Sprite_ProvokeTrail() {
  this.initialize(...arguments);
}
Sprite_ProvokeTrail.prototype = Object.create(Sprite.prototype);
Sprite_ProvokeTrail.prototype.constructor = Sprite_ProvokeTrail;
Sprite_ProvokeTrail.prototype.initialize = function (_0x3c4f77) {
  this._mainSprite = _0x3c4f77;
  Sprite.prototype.initialize.call(this);
  this.initMembers();
  this.createChildSprites();
};
Sprite_ProvokeTrail.prototype.initMembers = function () {
  const _0x42a23b = VisuMZ.AggroControlSystem.Settings.Provoke;
  this.anchor.x = 0.5;
  this.anchor.y = 0.5;
  this._homeX = 0x0;
  this._homeY = 0x0;
  this._targetX = 0x0;
  this._targetY = 0x0;
  this.opacity = 0x0;
  this._opacitySpeed = _0x42a23b.OpacitySpeed;
  this.blendMode = _0x42a23b.BlendMode;
};
Sprite_ProvokeTrail.prototype.maxSprites = function () {
  return VisuMZ.AggroControlSystem.Settings.Provoke.Parts;
};
Sprite_ProvokeTrail.prototype.partsSize = function () {
  return VisuMZ.AggroControlSystem.Settings.Provoke.PartsSize / 0x64;
};
Sprite_ProvokeTrail.prototype.createChildSprites = function () {
  this._sprites = [];
  let _0x1abe10 = 0x0;
  for (let _0x39776c = 0x0; _0x39776c <= this.maxSprites(); _0x39776c++) {
    const _0x23508e = new Sprite();
    _0x23508e.bitmap = ImageManager.provokeBitmap();
    _0x23508e.anchor.x = 0.5;
    _0x23508e.anchor.y = 0.5;
    _0x23508e.scale.x = _0x23508e.scale.y = this.partsSize();
    _0x23508e.opacity = _0x1abe10;
    _0x23508e.blendMode = this.blendMode;
    this.addChild(_0x23508e);
    this._sprites.push(_0x23508e);
    _0x1abe10 += this._opacitySpeed;
    if (_0x1abe10 >= 0xff) {
      _0x1abe10 = 0x0;
    }
  }
};
Sprite_ProvokeTrail.prototype.leftwardAnimation = function () {
  return this._mainSprite.constructor === Sprite_Actor;
};
Sprite_ProvokeTrail.prototype.parentContainer = function () {
  return SceneManager._scene._spriteset._provokeContainer;
};
Sprite_ProvokeTrail.prototype.update = function () {
  Sprite.prototype.update.call(this);
  this.updateBattlerPositions();
  this.updateSubPositions();
  this.updateOpacity();
  this.updateChildrenOpacity();
};
Sprite_ProvokeTrail.prototype.heightOrigin = function () {
  return VisuMZ.AggroControlSystem.Settings.Provoke.HeightOrigin;
};
Sprite_ProvokeTrail.prototype.updateBattlerPositions = function () {
  if (!this._mainSprite._battler) {
    return;
  }
  if (!this._mainSprite._battler.provoker()) {
    return;
  }
  const _0x56eec4 = this._mainSprite._battler.provoker().battler();
  if (!_0x56eec4) {
    return;
  }
  const _0x92304e = this._mainSprite._battler.provokeHeightOrigin();
  const _0x42a7f3 = this._mainSprite._battler.provoker().provokeHeightOrigin();
  this._homeX = this._mainSprite.x;
  this._homeY = this._mainSprite.y - this._mainSprite.height * _0x92304e;
  this._targetX = _0x56eec4.x;
  this._targetY = _0x56eec4.y - _0x56eec4.height * _0x42a7f3;
  this._homeX += Math.round((Graphics.width - Graphics.boxWidth) / 0x2);
  this._homeY += Math.round((Graphics.height - Graphics.boxHeight) / 0x2);
  this._targetX += Math.round((Graphics.width - Graphics.boxWidth) / 0x2);
  this._targetY += Math.round((Graphics.height - Graphics.boxHeight) / 0x2);
  if (!$gameSystem.isSideView()) {
    if (_0x56eec4._battler.isActor()) {
      visible = true;
      this._targetX += SceneManager._scene._statusWindow.x;
      this._targetY += SceneManager._scene._statusWindow.y;
    } else if (_0x56eec4._battler.isEnemy()) {
      visible = true;
      this._homeX += SceneManager._scene._statusWindow.x;
      this._homeY += SceneManager._scene._statusWindow.y;
    }
  }
};
Sprite_ProvokeTrail.prototype.arcHeight = function () {
  return VisuMZ.AggroControlSystem.Settings.Provoke.ArcHeight;
};
Sprite_ProvokeTrail.prototype.updateSubPositions = function () {
  if (!this._mainSprite._battler) {
    return;
  }
  if (!this._mainSprite._battler.provoker()) {
    return;
  }
  if (!this._sprites) {
    return;
  }
  if (this._sprites.length <= 0x0) {
    return;
  }
  const _0x4c76ab = (this._targetX - this._homeX) / this.maxSprites();
  const _0x385be4 = (this._targetY - this._homeY) / this.maxSprites();
  for (let _0x461fb8 = 0x0; _0x461fb8 <= this.maxSprites(); _0x461fb8++) {
    const _0x5c12b3 = this._sprites[_0x461fb8];
    if (!_0x5c12b3) {
      continue;
    }
    _0x5c12b3.x = this._homeX + _0x4c76ab * _0x461fb8;
    const _0xb87684 = this.maxSprites() - _0x461fb8;
    const _0x4888ea = this.maxSprites() / 0x2;
    const _0x332f06 = this.arcHeight();
    const _0x5d7def = -_0x332f06 / Math.pow(_0x4888ea, 0x2);
    const _0x56c49f = _0x5d7def * Math.pow(_0xb87684 - _0x4888ea, 0x2) + _0x332f06;
    _0x5c12b3.y = this._homeY + _0x385be4 * _0x461fb8 - _0x56c49f;
  }
};
Sprite_ProvokeTrail.prototype.maxOpacity = function () {
  return VisuMZ.AggroControlSystem.Settings.Provoke.Opacity;
};
Sprite_ProvokeTrail.prototype.updateOpacity = function () {
  const _0x527153 = this._mainSprite._battler;
  if (!_0x527153) {
    this.opacity = 0x0;
  } else {
    if (_0x527153.isAlive() && _0x527153.provoker()) {
      this.opacity = 0xff;
    } else {
      this.opacity = 0x0;
    }
  }
};
Sprite_ProvokeTrail.prototype.updateChildrenOpacity = function () {
  if (!this._mainSprite._battler) {
    return;
  }
  if (!this._mainSprite._battler.provoker()) {
    return;
  }
  if (!this._sprites) {
    return;
  }
  if (this._sprites.length <= 0x0) {
    return;
  }
  for (let _0x1644ed = 0x0; _0x1644ed <= this.maxSprites(); _0x1644ed++) {
    const _0xb9165d = this._sprites[this.leftwardAnimation() ? this.maxSprites() - _0x1644ed : _0x1644ed];
    if (!_0xb9165d) {
      continue;
    }
    _0xb9165d.opacity -= this._opacitySpeed;
    if (_0xb9165d.opacity <= 0x0) {
      _0xb9165d.opacity = 0xff;
    }
  }
};
VisuMZ.AggroControlSystem.Spriteset_Battle_createBattleField = Spriteset_Battle.prototype.createBattleField;
Spriteset_Battle.prototype.createBattleField = function () {
  VisuMZ.AggroControlSystem.Spriteset_Battle_createBattleField.call(this);
  this.createBattleFieldAggroControl();
};
Spriteset_Battle.prototype.createBattleFieldAggroControl = function () {
  if (!Imported.VisuMZ_1_BattleCore) {
    return;
  }
  const _0x1db212 = this._battleField.x;
  const _0x1b2773 = this._battleField.y;
  const _0x58c533 = this._battleField.width;
  const _0x4f4b49 = this._battleField.height;
  this._provokeContainer = new Sprite();
  this._provokeContainer.setFrame(0x0, 0x0, _0x58c533, _0x4f4b49);
  this._provokeContainer.x = _0x1db212;
  this._provokeContainer.y = _0x1b2773;
  if (Imported.VisuMZ_1_BattleCore) {
    const _0x285db7 = this.children.indexOf(this._damageContainer);
    this.addChildAt(this._provokeContainer, _0x285db7);
  } else {
    this.addChild(this._provokeContainer);
  }
};
VisuMZ.AggroControlSystem.Spriteset_Battle_update = Spriteset_Battle.prototype.update;
Spriteset_Battle.prototype.update = function () {
  VisuMZ.AggroControlSystem.Spriteset_Battle_update.call(this);
  this.updateAggroControl();
};
Spriteset_Battle.prototype.updateAggroControl = function () {
  if (!this._provokeContainer) {
    return;
  }
  if (!this._damageContainer) {
    return;
  }
  this._provokeContainer.x = this._damageContainer.x;
  this._provokeContainer.y = this._damageContainer.y;
};
VisuMZ.AggroControlSystem.Window_BattleEnemy_refresh = Window_BattleEnemy.prototype.refresh;
Window_BattleEnemy.prototype.refresh = function () {
  if (this.applyProvokeFilters()) {
    if (Imported.VisuMZ_1_BattleCore) {
      this.sortEnemies();
    }
    Window_Selectable.prototype.refresh.call(this);
  } else if (this.applyTauntFilters()) {
    if (Imported.VisuMZ_1_BattleCore) {
      this.sortEnemies();
    }
    Window_Selectable.prototype.refresh.call(this);
  } else {
    VisuMZ.AggroControlSystem.Window_BattleEnemy_refresh.call(this);
  }
};
Window_BattleEnemy.prototype.applyProvokeFilters = function () {
  const _0xa93fc8 = BattleManager.inputtingAction();
  const _0x5ab4c8 = BattleManager.actor();
  if (!_0xa93fc8) {
    return false;
  }
  if (!_0x5ab4c8) {
    return false;
  }
  if (DataManager.isBypassProvoke(_0xa93fc8.item())) {
    return false;
  }
  if (_0x5ab4c8.bypassProvoke()) {
    return false;
  }
  if (!_0xa93fc8.isProvokeAffected()) {
    return false;
  }
  if (_0x5ab4c8.isProvokeAffected()) {
    this._enemies = [_0x5ab4c8.provoker()];
    if (_0xa93fc8.isForAnyone && _0xa93fc8.isForAnyone()) {
      const _0x43578a = $gameParty.aliveMembers();
      this._enemies = this._enemies.concat(_0x43578a);
      if (_0xa93fc8.canSingleOrMultipleSelect && _0xa93fc8.canSingleOrMultipleSelect() && _0x43578a.length > 0x1) {
        this.setHandler("pagedown", this.selectAllActors.bind(this));
      }
    }
    return true;
  } else {
    return false;
  }
};
Window_BattleEnemy.prototype.applyTauntFilters = function () {
  const _0x2d9a8b = BattleManager.inputtingAction();
  const _0x16ac13 = BattleManager.actor();
  if (!_0x2d9a8b) {
    return false;
  }
  if (!_0x16ac13) {
    return false;
  }
  if (!_0x2d9a8b.item()) {
    return false;
  }
  if (DataManager.isBypassTaunt(_0x2d9a8b.item())) {
    return false;
  }
  if (_0x16ac13.bypassTaunt()) {
    return false;
  }
  if (!_0x2d9a8b.isTauntAffected()) {
    return false;
  }
  if (_0x2d9a8b.isPhysical() && $gameTroop.physicalTauntMembers().length > 0x0) {
    this._enemies = $gameTroop.physicalTauntMembers();
  } else {
    if (_0x2d9a8b.isMagical() && $gameTroop.magicalTauntMembers().length > 0x0) {
      this._enemies = $gameTroop.magicalTauntMembers();
    } else {
      if (_0x2d9a8b.isCertainHit() && $gameTroop.certainHitTauntMembers().length > 0x0) {
        this._enemies = $gameTroop.certainHitTauntMembers();
      } else {
        return false;
      }
    }
  }
  if (_0x2d9a8b.isForAnyone && _0x2d9a8b.isForAnyone()) {
    const _0x1cb683 = $gameParty.aliveMembers();
    this._enemies = this._enemies.concat(_0x1cb683);
    if (_0x2d9a8b.canSingleOrMultipleSelect && _0x2d9a8b.canSingleOrMultipleSelect() && _0x1cb683.length > 0x1) {
      this.setHandler('pagedown', this.selectAllActors.bind(this));
    }
  }
  return true;
};
VisuMZ.AggroControlSystem.Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function () {
  VisuMZ.AggroControlSystem.Window_Options_addGeneralOptions.call(this);
  this.addAggroControlSystemCommands();
};
Window_Options.prototype.addAggroControlSystemCommands = function () {
  if (VisuMZ.AggroControlSystem.Settings.Provoke.AddOption) {
    this.addAggroControlSystemProvokeCommand();
  }
  if (VisuMZ.AggroControlSystem.Settings.Aggro.AddOption) {
    this.addAggroControlSystemAggroCommand();
  }
};
Window_Options.prototype.addAggroControlSystemProvokeCommand = function () {
  const _0x5508f5 = TextManager.provokeOrigin;
  this.addCommand(_0x5508f5, "provokeOrigin");
};
Window_Options.prototype.addAggroControlSystemAggroCommand = function () {
  const _0x27a30c = TextManager.aggroGauge;
  this.addCommand(_0x27a30c, "aggroGauge");
};
VisuMZ.AggroControlSystem.Window_StatusBase_placeActorName = Window_StatusBase.prototype.placeActorName;
Window_StatusBase.prototype.placeActorName = function (_0x1ad2cf, _0x1f0bb8, _0x5c713b) {
  if (this.isAggroGaugeShown()) {
    this.drawAggroGauge(_0x1ad2cf.index());
  }
  VisuMZ.AggroControlSystem.Window_StatusBase_placeActorName.call(this, _0x1ad2cf, _0x1f0bb8, _0x5c713b);
};
Window_StatusBase.prototype.isAggroGaugeShown = function () {
  if (![Window_BattleActor, Window_BattleStatus].includes(this.constructor)) {
    return false;
  }
  if (!SceneManager.isSceneBattle()) {
    return false;
  }
  return ConfigManager.aggroGauge && VisuMZ.AggroControlSystem.Settings.Aggro.StatusGauge;
};
Window_StatusBase.prototype.placeAggroGauge = function (_0x4c9c07, _0x7f91f4, _0x11a4d5) {
  this.placeGauge(_0x4c9c07, "aggro", _0x7f91f4, _0x11a4d5);
};
Window_BattleStatus.prototype.drawAggroGauge = function (_0x486d3c) {
  const _0x51d8de = this.actor(_0x486d3c);
  const _0x3c06ee = this.aggroGaugeX(_0x486d3c);
  const _0x1cefcc = this.aggroGaugeY(_0x486d3c);
  const _0x126d1a = "actor%1-gauge-aggro".format(_0x51d8de.actorId());
  const _0x4da210 = this.createInnerSprite(_0x126d1a, Sprite_Gauge);
  const _0x34dd27 = VisuMZ.AggroControlSystem.Settings.Aggro;
  _0x4da210.x = _0x3c06ee + (_0x34dd27.BattleStatusOffsetX || 0x0);
  _0x4da210.y = _0x1cefcc + (_0x34dd27.BattleStatusOffsetY || 0x0);
  _0x4da210._menuAggroType = true;
  _0x4da210.setup(_0x51d8de, "aggro");
  _0x4da210.visible = true;
};
Window_BattleStatus.prototype.aggroGaugeX = function (_0x1f8806) {
  let _0x202c12 = this.itemRectWithPadding(_0x1f8806);
  let _0x1c4b09 = this.nameX(_0x202c12);
  if (Imported.VisuMZ_1_BattleCore) {
    let _0x3e80b0 = this.itemRect(_0x1f8806);
    if (this.battleLayoutStyle() === "list") {
      const _0x20fc03 = $dataSystem.optDisplayTp ? 0x4 : 0x3;
      const _0x5770b6 = _0x20fc03 * 0x80 + (_0x20fc03 - 0x1) * 0x8 + 0x4;
      let _0x3a5c39 = _0x3e80b0.x + this.padding;
      if (VisuMZ.BattleCore.Settings.BattleLayout.ShowFacesListStyle) {
        _0x3a5c39 = _0x3e80b0.x + ImageManager.faceWidth + 0x8;
      } else {
        _0x3a5c39 += ImageManager.iconWidth;
      }
      _0x1c4b09 = Math.round(Math.min(_0x3e80b0.x + _0x3e80b0.width - _0x5770b6, _0x3a5c39));
      _0x1c4b09 -= 0x4;
    } else {
      _0x1c4b09 = Math.round(_0x3e80b0.x + (_0x3e80b0.width - 0x80) / 0x2);
    }
  }
  return _0x1c4b09;
};
Window_BattleStatus.prototype.aggroGaugeY = function (_0x32b498) {
  const _0x2ac39f = this.itemRect(_0x32b498);
  let _0x3768cb = this.nameY(_0x2ac39f);
  if (Imported.VisuMZ_1_BattleCore) {
    if (this.battleLayoutStyle() === "list") {
      let _0x3483f6 = this.itemRect(_0x32b498);
      _0x3768cb = Math.round(_0x3483f6.y + (_0x3483f6.height - Sprite_Name.prototype.bitmapHeight()) / 0x2);
    }
  }
  if (this.isAtbGaugeVisible()) {
    _0x3768cb -= Sprite_Gauge.prototype.gaugeHeight() - 0x1;
  }
  return _0x3768cb;
};
Window_BattleStatus.prototype.isAtbGaugeVisible = function () {
  if (!BattleManager.isTpb()) {
    return false;
  }
  if (Imported.VisuMZ_2_BattleSystemATB) {
    return this.showVisualAtbGauge('time');
  }
  return true;
};