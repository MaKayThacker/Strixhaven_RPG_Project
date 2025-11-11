//=============================================================================
// VisuStella MZ - Visual Gauge Styles
// VisuMZ_3_VisualGaugeStyles.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_VisualGaugeStyles = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualGaugeStyles = VisuMZ.VisualGaugeStyles || {};
VisuMZ.VisualGaugeStyles.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.02] [VisualGaugeStyles]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_Gauge_Styles_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Visual Gauge Styles plugin allows you to swap out the various gauges
 * found and used in the game to don a different appearance and aesthetic. The
 * aesthetics can be mixed and matched to your liking, going from more visual
 * polygon structure-like styles to enhance a feeling to more mechanical-like
 * styles to relay information better. As these styles are all pre-rendered,
 * there are no custom files used with this plugin.
 *
 * Features include all (but not limited to) the following:
 * 
 * * No custom image files are needed for this plugin to utilize the various
 *   pre-rendered visual gauge styles.
 * * Mix and match from over 20+ choices to pick from for different types of
 *   gauges found in the game and from other VisuStella MZ plugins.
 * * Styles can have varying gauge heights, label offsets, and value offsets to
 *   add to the aesthetic differences.
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
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_BattleCore
 * * VisuMZ_1_SkillsStatesCore
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Sprite_Gauge Overwrite
 * 
 * Naturally, since the visual gauge styles are altered, certain aspects have
 * to be overwritten as a whole. For the Sprite_Gauge class, this means the
 * functions related to drawing the gauges themselves are overwritten.
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
 * VisuMZ_2_AggroControlSys
 * 
 * VisuMZ_2_BattleSystemATB
 * 
 * VisuMZ_3_VictoryAftermath
 *
 * These plugins from the VisuStella MZ library contain sprite gauges used that
 * can be altered and have a different style from the rest. Mix and match them
 * to your liking.
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
 * VisuMZ_4_VariableGauges
 * 
 * The updated version of VisuStella MZ's Variable Gauges can now utilize the
 * styles from this plugin. However, keep in mind that style settings like
 * adjusting gauge thickness will not be handled by the Visual Gauge Styles
 * plugin, but instead, handled by the Variable Gauges plugin.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Style Adjustment Settings
 * ============================================================================
 *
 * Adjust settings like label and value offsets for each style type.
 *
 * ---
 *
 * Structure-Styles
 * 
 *   Normal:
 *   Arrow:
 *   Dipper:
 *   Flag:
 *   Growth:
 *   Lean:
 *   Quad:
 *   Stagger:
 *   Trapezoid:
 *   - Adjustment settings like gauge thickness, labels, values offsets values
 *     when this specific style is used.
 *
 * ---
 *
 * Step-Styles
 * 
 *   Half Step:
 *   Third Step:
 *   Fourth Step:
 *   Fifth Step:
 *   Sixth Step:
 *   Eighth Step:
 *   Tenth Step:
 *   - Adjustment settings like gauge thickness, labels, values offsets values
 *     when this specific style is used.
 *
 * ---
 *
 * Section-Styles
 * 
 *   Half Section:
 *   Third Section:
 *   Fourth Section:
 *   Fifth Section:
 *   Sixth Section:
 *   Eighth Section:
 *   Tenth Section:
 *   - Adjustment settings like gauge thickness, labels, values offsets values
 *     when this specific style is used.
 *   - These gauges will be separated in even sections based on their numeric
 *     value used for their style name.
 *
 * ---
 *
 * Segment-Styles
 * 
 *   Segment By 10:
 *   Segment By 20:
 *   Segment By 25:
 *   Segment By 50:
 *   Segment By 100:
 *   Segment By 200:
 *   Segment By 250:
 *   Segment By 500:
 *   Segment By 1000:
 *   - Adjustment settings like gauge thickness, labels, values offsets values
 *     when this specific style is used.
 *   - These gauges will be separated in divided chunks based on the maximum
 *     value used to calculate the gauge. Their divison count is based on the
 *     numeric value used for their style name.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * Here, you can adjust the default settings for the various gauges used in the
 * game. If there are any future plugins that will utilize custom gauges, they
 * will be added here at a later date.
 *
 * ---
 *
 * Default
 * 
 *   Default Horizontal Style:
 *   Default Vertical Style:
 *   - Select the gauge style to use for default horizontal/vertical gauges.
 *   - When 'Default' style is selected in the "Status Window" or "Battlers"
 *     Plugin Parameters, the style will then refer to the "Horizontal" or
 *     "Vertical" gauge styles set here.
 *
 * ---
 *
 * Status Window
 * 
 *   Status: HP Style:
 *   Status: MP Style:
 *   Status: TP Style:
 *   Status: Time Style:
 *   Status: Aggro Style:
 *   - Select the gauge style to use for the status-related gauge.
 * 
 * ---
 * 
 * Battlers
 * 
 *   Battler: HP Style:
 *   Battler: Aggro Style:
 *   Battler: ATB Style:
 *   Battler: EXP Style:
 *   - Select the gauge style to use for the battler-related gauges.
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
 * * Irina
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.02: November 16, 2023
 * * Compatibility Update!
 * ** Plugin is more compatible with Enhanced TP's custom gauge colors.
 * 
 * Version 1.01: March 16, 2023
 * * Feature Update!
 * ** Plugin now prompts you to make sure your other plugins are up to date
 *    before usage. This plugin does not work with cores that are out of date.
 *    Update made by Olivia.
 * 
 * Version 1.00 Official Release Date: April 5, 2023
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
 * @param VisualGaugeStyles
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Styles:struct
 * @text Style Adjustment Settings
 * @type struct<Styles>
 * @desc Adjust settings like label and value offsets for each style type.
 * @default {"Structure":"","normal:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+0\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"+0\",\"valueOffsetY:num\":\"+0\"}","arrow:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-8\",\"valueOffsetY:num\":\"+0\"}","dipper:struct":"{\"gaugeThickness:num\":\"20\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","flag:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+0\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-8\",\"valueOffsetY:num\":\"+0\"}","growth:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","lean:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-8\",\"valueOffsetY:num\":\"+0\"}","quad:struct":"{\"gaugeThickness:num\":\"20\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","stagger:struct":"{\"gaugeThickness:num\":\"14\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-8\",\"valueOffsetY:num\":\"+0\"}","trapezoid:struct":"{\"gaugeThickness:num\":\"16\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","Steps":"","halfstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","thirdstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","fourthstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","fifthstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","sixthstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","eighthstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","tenthstep:struct":"{\"gaugeThickness:num\":\"24\",\"Label\":\"\",\"labelOffsetX:num\":\"+8\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-12\",\"valueOffsetY:num\":\"+0\"}","Section":"","halfsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","thirdsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","fourthsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","fifthsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","sixthsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","eighthsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","tenthsection:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","Segment":"","segmentby10:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby20:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby25:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby50:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby100:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby200:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby250:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby500:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}","segmentby1000:struct":"{\"gaugeThickness:num\":\"12\",\"Label\":\"\",\"labelOffsetX:num\":\"+4\",\"labelOffsetY:num\":\"+0\",\"Value\":\"\",\"valueOffsetX:num\":\"-4\",\"valueOffsetY:num\":\"+0\"}"}
 * 
 * @param DefaultStyles
 * @text Default
 * @parent Styles:struct
 * 
 * @param horzStyle:str
 * @text Default Horizontal Style
 * @parent DefaultStyles
 * @type select
 * @option -
 * @option Normal
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for default horizontal gauges.
 * @default Lean
 * 
 * @param vertStyle:str
 * @text Default Vertical Style
 * @parent DefaultStyles
 * @type select
 * @option Normal
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for default vertical gauges.
 * @default Arrow
 * 
 * @param StatusStyles
 * @text Status Window
 * @parent Styles:struct
 * 
 * @param statusHpStyle:str
 * @text Status: HP Style
 * @parent StatusStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the status window HP.
 * @default Stagger
 * 
 * @param statusMpStyle:str
 * @text Status: MP Style
 * @parent StatusStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the status window MP.
 * @default Stagger
 * 
 * @param statusTpStyle:str
 * @text Status: TP Style
 * @parent StatusStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the status window TP.
 * @default Stagger
 * 
 * @param statusTimeStyle:str
 * @text Status: Time Style
 * @parent StatusStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the status window time
 * gauge. Used for TPB and VisuMZ_2_BattleSystemATB.
 * @default Lean
 * 
 * @param statusAggroStyle:str
 * @text Status: Aggro Style
 * @parent StatusStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the status aggro gauge.
 * Requires VisuMZ_2_AggroControlSys!
 * @default Lean
 * 
 * @param BattlerStyles
 * @text Battlers
 * @parent Styles:struct
 * 
 * @param battlerHpStyle:str
 * @text Battler: HP Style
 * @parent BattlerStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the battler HP gauges.
 * @default Lean
 * 
 * @param battlerAggroStyle:str
 * @text Battler: Aggro Style
 * @parent BattlerStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the battler aggro gauge.
 * Requires VisuMZ_2_AggroControlSys!
 * @default Lean
 * 
 * @param battlerAtbStyle:str
 * @text Battler: ATB Style
 * @parent BattlerStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the battler ATB gauges.
 * Requires VisuMZ_2_BattleSystemATB!
 * @default Lean
 * 
 * @param battlerEXPStyle:str
 * @text Battler: EXP Style
 * @parent BattlerStyles
 * @type select
 * @option Normal
 * @option Default
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for the battler EXP gauges.
 * Requires VisuMZ_3_VictoryAftermath!
 * @default Arrow
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
 * Specific Style Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Styles:
 * 
 * @param Structure
 * @text Structure-Styles
 *
 * @param normal:struct
 * @text Normal
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+0","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"+0","valueOffsetY:num":"+0"}
 *
 * @param arrow:struct
 * @text Arrow
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-8","valueOffsetY:num":"+0"}
 *
 * @param dipper:struct
 * @text Dipper
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"20","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param flag:struct
 * @text Flag
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+0","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-8","valueOffsetY:num":"+0"}
 *
 * @param growth:struct
 * @text Growth
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param lean:struct
 * @text Lean
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-8","valueOffsetY:num":"+0"}
 *
 * @param quad:struct
 * @text Quad
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"20","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param stagger:struct
 * @text Stagger
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"14","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-8","valueOffsetY:num":"+0"}
 *
 * @param trapezoid:struct
 * @text Trapezoid
 * @parent Structure
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"16","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 * 
 * @param Steps
 * @text Step-Styles
 *
 * @param halfstep:struct
 * @text Half Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param thirdstep:struct
 * @text Third Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param fourthstep:struct
 * @text Fourth Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param fifthstep:struct
 * @text Fifth Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param sixthstep:struct
 * @text Sixth Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param eighthstep:struct
 * @text Eighth Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 *
 * @param tenthstep:struct
 * @text Tenth Step
 * @parent Steps
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"24","Label":"","labelOffsetX:num":"+8","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-12","valueOffsetY:num":"+0"}
 * 
 * @param Section
 * @text Section-Styles
 *
 * @param halfsection:struct
 * @text Half Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param thirdsection:struct
 * @text Third Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param fourthsection:struct
 * @text Fourth Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param fifthsection:struct
 * @text Fifth Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param sixthsection:struct
 * @text Sixth Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param eighthsection:struct
 * @text Eighth Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param tenthsection:struct
 * @text Tenth Section
 * @parent Section
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 * 
 * @param Segment
 * @text Segment-Styles
 *
 * @param segmentby10:struct
 * @text Segment By 10
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby20:struct
 * @text Segment By 20
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby25:struct
 * @text Segment By 25
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby50:struct
 * @text Segment By 50
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby100:struct
 * @text Segment By 100
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby200:struct
 * @text Segment By 200
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby250:struct
 * @text Segment By 250
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby500:struct
 * @text Segment By 500
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 * @param segmentby1000:struct
 * @text Segment By 1000
 * @parent Segment
 * @type struct<OffsetData>
 * @desc Adjustment settings like gauge thickness, labels, values
 * offsets values when this specific style is used.
 * @default {"gaugeThickness:num":"12","Label":"","labelOffsetX:num":"+4","labelOffsetY:num":"+0","Value":"","valueOffsetX:num":"-4","valueOffsetY:num":"+0"}
 *
 */
/* ----------------------------------------------------------------------------
 * Offset Data Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OffsetData:
 *
 * @param gaugeThickness:num
 * @text Gauge Thickness
 * @type number
 * @min 1
 * @desc What is the gauge height/width when this style is used?
 * Horz Style: Adjusts height. Vert Style: Adjusts width.
 * @default 12
 * 
 * @param Label
 * @text Label Offsets
 *
 * @param labelOffsetX:num
 * @text Offset X
 * @parent Label
 * @desc How many pixels to offset the label text?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param labelOffsetY:num
 * @text Offset Y
 * @parent Label
 * @desc How many pixels to offset the label text?
 * Negative: up. Positive: down.
 * @default +0
 * 
 * @param Value
 * @text Value Offsets
 *
 * @param valueOffsetX:num
 * @text Offset X
 * @parent Value
 * @desc How many pixels to offset the value text?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param valueOffsetY:num
 * @text Offset Y
 * @parent Value
 * @desc How many pixels to offset the value text?
 * Negative: up. Positive: down.
 * @default +0
 *
 */
//=============================================================================

var tier = tier || 0x0;
var dependencies = ["VisuMZ_0_CoreEngine", 'VisuMZ_1_BattleCore', "VisuMZ_1_SkillsStatesCore"];
var pluginData = $plugins.filter(function (_0xe9afad) {
  return _0xe9afad.status && _0xe9afad.description.includes("[VisualGaugeStyles]");
})[0x0];
VisuMZ.VisualGaugeStyles.Settings = VisuMZ.VisualGaugeStyles.Settings || {};
VisuMZ.ConvertParams = function (_0x5e46e5, _0x15e25d) {
  for (const _0x216647 in _0x15e25d) {
    if (_0x216647.match(/(.*):(.*)/i)) {
      const _0x3dadb1 = String(RegExp.$1);
      const _0x2e6b89 = String(RegExp.$2).toUpperCase().trim();
      let _0x8fa959;
      let _0x1d26f9;
      let _0x45b7f1;
      switch (_0x2e6b89) {
        case "NUM":
          _0x8fa959 = _0x15e25d[_0x216647] !== '' ? Number(_0x15e25d[_0x216647]) : 0x0;
          break;
        case "ARRAYNUM":
          _0x1d26f9 = _0x15e25d[_0x216647] !== '' ? JSON.parse(_0x15e25d[_0x216647]) : [];
          _0x8fa959 = _0x1d26f9.map(_0x5e9676 => Number(_0x5e9676));
          break;
        case "EVAL":
          _0x8fa959 = _0x15e25d[_0x216647] !== '' ? eval(_0x15e25d[_0x216647]) : null;
          break;
        case "ARRAYEVAL":
          _0x1d26f9 = _0x15e25d[_0x216647] !== '' ? JSON.parse(_0x15e25d[_0x216647]) : [];
          _0x8fa959 = _0x1d26f9.map(_0x2c71e1 => eval(_0x2c71e1));
          break;
        case "JSON":
          _0x8fa959 = _0x15e25d[_0x216647] !== '' ? JSON.parse(_0x15e25d[_0x216647]) : '';
          break;
        case "ARRAYJSON":
          _0x1d26f9 = _0x15e25d[_0x216647] !== '' ? JSON.parse(_0x15e25d[_0x216647]) : [];
          _0x8fa959 = _0x1d26f9.map(_0xaf2f0f => JSON.parse(_0xaf2f0f));
          break;
        case 'FUNC':
          _0x8fa959 = _0x15e25d[_0x216647] !== '' ? new Function(JSON.parse(_0x15e25d[_0x216647])) : new Function("return 0");
          break;
        case "ARRAYFUNC":
          _0x1d26f9 = _0x15e25d[_0x216647] !== '' ? JSON.parse(_0x15e25d[_0x216647]) : [];
          _0x8fa959 = _0x1d26f9.map(_0x50dd2e => new Function(JSON.parse(_0x50dd2e)));
          break;
        case "STR":
          _0x8fa959 = _0x15e25d[_0x216647] !== '' ? String(_0x15e25d[_0x216647]) : '';
          break;
        case "ARRAYSTR":
          _0x1d26f9 = _0x15e25d[_0x216647] !== '' ? JSON.parse(_0x15e25d[_0x216647]) : [];
          _0x8fa959 = _0x1d26f9.map(_0x3d2374 => String(_0x3d2374));
          break;
        case "STRUCT":
          _0x45b7f1 = _0x15e25d[_0x216647] !== '' ? JSON.parse(_0x15e25d[_0x216647]) : {};
          _0x8fa959 = VisuMZ.ConvertParams({}, _0x45b7f1);
          break;
        case "ARRAYSTRUCT":
          _0x1d26f9 = _0x15e25d[_0x216647] !== '' ? JSON.parse(_0x15e25d[_0x216647]) : [];
          _0x8fa959 = _0x1d26f9.map(_0x58345e => VisuMZ.ConvertParams({}, JSON.parse(_0x58345e)));
          break;
        default:
          continue;
      }
      _0x5e46e5[_0x3dadb1] = _0x8fa959;
    }
  }
  return _0x5e46e5;
};
(_0x1f303a => {
  const _0x197087 = _0x1f303a.name;
  for (const _0x237fb6 of dependencies) {
    if (!Imported[_0x237fb6]) {
      alert("%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.".format(_0x197087, _0x237fb6));
      SceneManager.exit();
      break;
    }
  }
  const _0x1cdd3c = _0x1f303a.description;
  if (_0x1cdd3c.match(/\[Version[ ](.*?)\]/i)) {
    const _0x4965bb = Number(RegExp.$1);
    if (_0x4965bb !== VisuMZ.VisualGaugeStyles.version) {
      alert("%1's version does not match plugin's. Please update it in the Plugin Manager.".format(_0x197087, _0x4965bb));
      SceneManager.exit();
    }
  }
  if (_0x1cdd3c.match(/\[Tier[ ](\d+)\]/i)) {
    const _0x43ea5b = Number(RegExp.$1);
    if (_0x43ea5b < tier) {
      alert("%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.".format(_0x197087, _0x43ea5b, tier));
      SceneManager.exit();
    } else {
      tier = Math.max(_0x43ea5b, tier);
    }
  }
  VisuMZ.ConvertParams(VisuMZ.VisualGaugeStyles.Settings, _0x1f303a.parameters);
})(pluginData);
if (VisuMZ.CoreEngine.version < 1.7) {
  let text = '';
  text += "VisuMZ_0_CoreEngine needs to be updated ";
  text += "in order for VisuMZ_3_VisualGaugeStyles to work.";
  alert(text);
  SceneManager.exit();
}
if (VisuMZ.BattleCore.version < 1.7) {
  let text = '';
  text += "VisuMZ_1_BattleCore needs to be updated ";
  text += "in order for VisuMZ_3_VisualGaugeStyles to work.";
  alert(text);
  SceneManager.exit();
}
if (VisuMZ.SkillsStatesCore.version < 1.36) {
  let text = '';
  text += "VisuMZ_1_SkillsStatesCore needs to be updated ";
  text += "in order for VisuMZ_3_VisualGaugeStyles to work.";
  alert(text);
  SceneManager.exit();
}
VisuMZ.VisualGaugeStyles.HorzStyle = function () {
  return (VisuMZ.VisualGaugeStyles.Settings.horzStyle ?? 'normal').toLowerCase().trim();
};
VisuMZ.VisualGaugeStyles.VertStyle = function () {
  return (VisuMZ.VisualGaugeStyles.Settings.vertStyle ?? "normal").toLowerCase().trim();
};
VisuMZ.VisualGaugeStyles.GetStyleData = function (_0x5b541d) {
  _0x5b541d = _0x5b541d.toLowerCase().trim();
  return VisuMZ.VisualGaugeStyles.Settings.Styles[_0x5b541d] ?? {};
};
VisuMZ.VisualGaugeStyles.GetGaugeHeight = function (_0x33d602, _0x5bc945) {
  const _0x27a8a8 = this.GetStyleData(_0x33d602);
  return _0x27a8a8.gaugeThickness ?? 0xc;
};
VisuMZ.VisualGaugeStyles.SetLabelOffset = function (_0xf8bc6c, _0x38f89f) {
  const _0x5ea0ea = this.GetStyleData(_0xf8bc6c);
  $gameTemp._visualGaugeStyleOffset = {
    'x': _0x5ea0ea.labelOffsetX ?? 0x0,
    'y': _0x5ea0ea.labelOffsetY ?? 0x0
  };
};
VisuMZ.VisualGaugeStyles.SetValueOffset = function (_0x3b442b, _0x4004de) {
  const _0x26f231 = this.GetStyleData(_0x3b442b);
  $gameTemp._visualGaugeStyleOffset = {
    'x': _0x26f231.valueOffsetX ?? 0x0,
    'y': _0x26f231.valueOffsetY ?? 0x0
  };
};
VisuMZ.VisualGaugeStyles.ClearTextOffset = function () {
  $gameTemp._visualGaugeStyleOffset = undefined;
};
Bitmap.prototype.drawVisualStyleGauge = function (_0x49adb7, _0x5583f6, _0x1f0205, _0x3ff0fc, _0x4a7113, _0x22a54e, _0x24fb46, _0x49ca26, _0x278f15) {
  _0x49adb7 = String(_0x49adb7).toLowerCase().trim();
  let _0x3a16e6 = VisuMZ.VisualGaugeStyles.GetPolygonStyle(_0x49adb7, _0x5583f6, _0x1f0205, _0x3ff0fc, _0x4a7113, 0x1, true);
  let _0x4b59ab = VisuMZ.VisualGaugeStyles.GetPolygonStyle(_0x49adb7, _0x5583f6, _0x1f0205, _0x3ff0fc, _0x4a7113, _0x22a54e, false);
  this.drawVisualStyleGaugeBack(_0x3a16e6, _0x24fb46);
  const _0xb61fd0 = _0x5583f6 + _0x3ff0fc;
  const _0xb956e8 = this._context.createLinearGradient(_0x5583f6, _0x1f0205, _0xb61fd0, _0x1f0205);
  this.drawVisualStyleGaugeFront(_0x4b59ab, _0x49ca26, _0x278f15, _0xb956e8);
};
Bitmap.prototype.drawVisualStyleGaugeBack = function (_0x55ca7f, _0x444343) {
  const _0x7bc9f9 = this._context;
  _0x7bc9f9.save();
  _0x7bc9f9.beginPath();
  _0x7bc9f9.moveTo(_0x55ca7f[0x0], _0x55ca7f[0x1]);
  for (var _0x2baac7 = 0x2; _0x2baac7 < _0x55ca7f.length; _0x2baac7 += 0x2) {
    _0x7bc9f9.lineTo(_0x55ca7f[_0x2baac7], _0x55ca7f[_0x2baac7 + 0x1]);
  }
  _0x7bc9f9.lineTo(_0x55ca7f[0x0], _0x55ca7f[0x1]);
  _0x7bc9f9.strokeStyle = _0x444343;
  _0x7bc9f9.lineWidth = 0x2;
  _0x7bc9f9.stroke();
  _0x7bc9f9.globalAlpha = 0xff;
  _0x7bc9f9.fillStyle = _0x444343;
  _0x7bc9f9.fill();
  _0x7bc9f9.globalAlpha = 0x1;
  _0x7bc9f9.restore();
  this._baseTexture.update();
};
Bitmap.prototype.drawVisualStyleGaugeFront = function (_0x3d7dce, _0x4ee058, _0x1c799a, _0x5294a7, _0x5b7bd9) {
  const _0x4e0918 = this._context;
  _0x5294a7.addColorStop(0x0, _0x4ee058);
  _0x5294a7.addColorStop(0x1, _0x1c799a);
  _0x4e0918.save();
  _0x4e0918.beginPath();
  _0x4e0918.moveTo(_0x3d7dce[0x0], _0x3d7dce[0x1]);
  for (var _0x5d31b2 = 0x2; _0x5d31b2 < _0x3d7dce.length; _0x5d31b2 += 0x2) {
    _0x4e0918.lineTo(_0x3d7dce[_0x5d31b2], _0x3d7dce[_0x5d31b2 + 0x1]);
  }
  _0x4e0918.lineTo(_0x3d7dce[0x0], _0x3d7dce[0x1]);
  if (_0x5b7bd9) {
    _0x4e0918.strokeStyle = _0x5b7bd9;
    _0x4e0918.lineWidth = 0x2;
    _0x4e0918.stroke();
  }
  _0x4e0918.fillStyle = _0x5294a7;
  _0x4e0918.fill();
  _0x4e0918.globalAlpha = 0x1;
  _0x4e0918.restore();
  this._baseTexture.update();
};
VisuMZ.VisualGaugeStyles.GetPolygonStyle = function (_0x183353, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8) {
  _0x183353 = _0x183353.toLowerCase().trim();
  _0x119716 = _0x119716.clamp(0x0, 0x1);
  _0x356723 += 0x1;
  _0x298430 += 0x1;
  _0x2c2c6e -= 0x2;
  _0x38a8c6 -= 0x2;
  switch (_0x183353) {
    case 'lean':
      return this.GetLeanPolygon(_0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
    case "arrow":
      return this.GetArrowPolygon(_0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
    case "growth":
      return this.GetGrowthPolygon(_0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
    case "stagger":
      return this.GetStaggerPolygon(_0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
    case 'dipper':
      return this.GetDipperPolygon(_0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
    case "quad":
      return this.GetQuadPolygon(_0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
    case "trapezoid":
      return this.GetTrapezoidPolygon(_0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
    case "flag":
      return this.GetFlagPolygon(_0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
    case 'halfstep':
      return this.GetMultiStepPolygon(0x2, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
    case "thirdstep":
      return this.GetMultiStepPolygon(0x3, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
    case 'fourthstep':
      return this.GetMultiStepPolygon(0x4, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
    case "fifthstep":
      return this.GetMultiStepPolygon(0x5, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
    case "sixthstep":
      return this.GetMultiStepPolygon(0x6, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
    case "eighthstep":
      return this.GetMultiStepPolygon(0x8, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
    case "tenthstep":
      return this.GetMultiStepPolygon(0xa, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
    case "halfsection":
      return this.GetMultiSectionPolygon(0x2, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    case 'thirdsection':
      return this.GetMultiSectionPolygon(0x3, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    case "fourthsection":
      return this.GetMultiSectionPolygon(0x4, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    case "fifthsection":
      return this.GetMultiSectionPolygon(0x5, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    case "sixthsection":
      return this.GetMultiSectionPolygon(0x6, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    case "eighthsection":
      return this.GetMultiSectionPolygon(0x8, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    case "tenthsection":
      return this.GetMultiSectionPolygon(0xa, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    case "segmentby10":
      return this.GetMultiSegmentPolygon(0xa, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    case "segmentby20":
      return this.GetMultiSegmentPolygon(0x14, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    case "segmentby25":
      return this.GetMultiSegmentPolygon(0x19, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    case "segmentby50":
      return this.GetMultiSegmentPolygon(0x32, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    case 'segmentby100':
      return this.GetMultiSegmentPolygon(0x64, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    case "segmentby200":
      return this.GetMultiSegmentPolygon(0xc8, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    case "segmentby250":
      return this.GetMultiSegmentPolygon(0xfa, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    case "segmentby500":
      return this.GetMultiSegmentPolygon(0x1f4, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    case "segmentby1000":
      return this.GetMultiSegmentPolygon(0x3e8, _0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716, _0x24ebb8);
    default:
      return this.GetDefaultPolygon(_0x356723, _0x298430, _0x2c2c6e, _0x38a8c6, _0x119716);
  }
  ;
};
VisuMZ.VisualGaugeStyles.GetDefaultPolygon = function (_0x1ef5b5, _0x2a497d, _0x560679, _0x3d511a, _0xc19068) {
  _0x560679 = Math.floor(_0x560679 * _0xc19068);
  return [_0x1ef5b5, _0x2a497d, _0x1ef5b5 + _0x560679, _0x2a497d, _0x1ef5b5 + _0x560679, _0x2a497d + _0x3d511a, _0x1ef5b5, _0x2a497d + _0x3d511a];
};
VisuMZ.VisualGaugeStyles.GetLeanPolygon = function (_0x3c2e34, _0xc0d29f, _0x922431, _0x6db131, _0x627d43) {
  const _0x35d7af = [];
  const _0x4678c7 = Math.ceil(_0x6db131 / 0x3);
  if (_0x922431 < _0x4678c7 * 0x2) {
    return this.GetDefaultPolygon(_0x3c2e34, _0xc0d29f, _0x922431, _0x6db131, _0x627d43);
  }
  _0x922431 = Math.floor((_0x922431 - _0x4678c7) * _0x627d43);
  _0x35d7af.push(_0x3c2e34 + _0x4678c7, _0xc0d29f);
  _0x35d7af.push(_0x3c2e34 + _0x4678c7 + _0x922431, _0xc0d29f);
  _0x35d7af.push(_0x3c2e34 + _0x922431, _0xc0d29f + _0x6db131);
  _0x35d7af.push(_0x3c2e34, _0xc0d29f + _0x6db131);
  return _0x35d7af;
};
VisuMZ.VisualGaugeStyles.GetArrowPolygon = function (_0x48fc77, _0x2e1e41, _0x55e442, _0x3d3e14, _0x33a0f6) {
  const _0x54ec8e = [];
  const _0x1552fe = Math.ceil(_0x3d3e14 / 0x3);
  if (_0x55e442 < _0x1552fe * 0x2) {
    return this.GetDefaultPolygon(_0x48fc77, _0x2e1e41, _0x55e442, _0x3d3e14, _0x33a0f6);
  }
  _0x55e442 = Math.floor((_0x55e442 - _0x1552fe) * _0x33a0f6);
  _0x54ec8e.push(_0x48fc77, _0x2e1e41);
  _0x54ec8e.push(_0x48fc77 + _0x55e442, _0x2e1e41);
  _0x54ec8e.push(_0x48fc77 + _0x55e442 + _0x1552fe, _0x2e1e41 + _0x3d3e14 / 0x2);
  _0x54ec8e.push(_0x48fc77 + _0x55e442, _0x2e1e41 + _0x3d3e14);
  _0x54ec8e.push(_0x48fc77, _0x2e1e41 + _0x3d3e14);
  _0x54ec8e.push(_0x48fc77 + _0x1552fe, _0x2e1e41 + _0x3d3e14 / 0x2);
  return _0x54ec8e;
};
VisuMZ.VisualGaugeStyles.GetGrowthPolygon = function (_0x41f9e3, _0x50ae88, _0x1a041e, _0x2a00a6, _0x3165ce) {
  const _0x58420a = [];
  const _0x194e58 = Math.ceil(_0x2a00a6 / 0x2);
  if (_0x1a041e < _0x194e58 * 0x2) {
    return this.GetDefaultPolygon(_0x41f9e3, _0x50ae88, _0x1a041e, _0x2a00a6, _0x3165ce);
  }
  _0x1a041e = Math.floor(_0x1a041e * _0x3165ce);
  hr = Math.floor(_0x2a00a6 * _0x3165ce);
  _0x58420a.push(_0x41f9e3, _0x50ae88 + _0x2a00a6);
  _0x58420a.push(_0x41f9e3 + _0x1a041e, _0x50ae88 + _0x2a00a6 - hr);
  _0x58420a.push(_0x41f9e3 + Math.max(_0x1a041e - _0x194e58 * _0x3165ce, 0x0), _0x50ae88 + _0x2a00a6);
  return _0x58420a;
};
VisuMZ.VisualGaugeStyles.GetStaggerPolygon = function (_0x3b78f4, _0x3f445a, _0x4f627d, _0x3ef275, _0xb40394) {
  const _0x57e21e = [];
  const _0x2d0fea = Math.ceil(_0x3ef275 / 0x2);
  const _0x392f62 = _0x2d0fea / 0x2;
  if (_0x4f627d < _0x2d0fea * 0x2) {
    return this.GetDefaultPolygon(_0x3b78f4, _0x3f445a, _0x4f627d, _0x3ef275, _0xb40394);
  }
  _0x4f627d -= _0x2d0fea;
  const _0x302108 = _0x4f627d / 0x3;
  _0x4f627d = Math.floor(_0x4f627d * _0xb40394);
  _0x57e21e.push(_0x3b78f4 + _0x392f62, _0x3f445a + _0x3ef275 / 0x2);
  if (_0xb40394 < 0.3333333333333333) {
    _0x57e21e.push(_0x3b78f4 + _0x392f62 + _0x4f627d, _0x3f445a + _0x3ef275 / 0x2);
  } else {
    _0x57e21e.push(_0x3b78f4 + _0x302108 + _0x392f62, _0x3f445a + _0x3ef275 / 0x2);
    _0x57e21e.push(_0x3b78f4 + _0x302108 + _0x2d0fea, _0x3f445a);
    _0x57e21e.push(_0x3b78f4 + _0x4f627d + _0x2d0fea, _0x3f445a);
  }
  _0x57e21e.push(_0x3b78f4 + _0x4f627d, _0x3f445a + _0x3ef275);
  _0x57e21e.push(_0x3b78f4, _0x3f445a + _0x3ef275);
  return _0x57e21e;
};
VisuMZ.VisualGaugeStyles.GetDipperPolygon = function (_0x1b81ea, _0x180d17, _0x2962f2, _0x30e921, _0x5a4fda) {
  const _0x35c82a = [];
  if (_0x2962f2 < 60) {
    return;
  }
  _0x2962f2 -= 0x1e;
  _0x2962f2 = Math.floor(_0x2962f2 * _0x5a4fda);
  const _0x1f361e = _0x30e921 / 0x2;
  _0x35c82a.push(_0x1b81ea, _0x180d17 + _0x1f361e);
  _0x35c82a.push(_0x1b81ea + _0x2962f2 + 0x1e * _0x5a4fda, _0x180d17 + (_0x1f361e - _0x1f361e * _0x5a4fda));
  _0x35c82a.push(_0x1b81ea + _0x2962f2, _0x180d17 + (_0x1f361e + _0x1f361e * _0x5a4fda));
  return _0x35c82a;
};
VisuMZ.VisualGaugeStyles.GetQuadPolygon = function (_0x2d1ec9, _0xc72814, _0x5dea91, _0x1a78c5, _0x4bf4e9) {
  const _0x57ad1f = [];
  _0x5dea91 -= _0x1a78c5;
  _0x5dea91 = Math.floor(_0x5dea91 * _0x4bf4e9);
  const _0x437d82 = _0x1a78c5 / 0x2;
  _0x57ad1f.push(_0x2d1ec9, _0xc72814 + _0x437d82);
  _0x57ad1f.push(_0x2d1ec9 + _0x1a78c5 * _0x4bf4e9 + _0x5dea91, _0xc72814 + (_0x437d82 - _0x437d82 * _0x4bf4e9));
  _0x57ad1f.push(_0x2d1ec9 + _0x1a78c5 / 0x2 + _0x5dea91, _0xc72814 + _0x1a78c5);
  _0x57ad1f.push(_0x2d1ec9 + _0x1a78c5 / 0x2, _0xc72814 + _0x1a78c5);
  return _0x57ad1f;
};
VisuMZ.VisualGaugeStyles.GetTrapezoidPolygon = function (_0x941a6c, _0x287aca, _0x36132e, _0x29a61b, _0x55d859) {
  const _0x213d86 = [];
  const _0x99d144 = Math.ceil(_0x29a61b / 0x2);
  const _0xcaee0e = Math.floor(_0x36132e * _0x55d859);
  _0x36132e -= _0x99d144 * 0x2;
  _0x36132e = Math.floor(_0x36132e * _0x55d859);
  _0x213d86.push(_0x941a6c + _0x99d144, _0x287aca);
  _0x213d86.push(_0x941a6c + _0x99d144 + _0x36132e, _0x287aca);
  _0x213d86.push(_0x941a6c + _0xcaee0e, _0x287aca + _0x29a61b);
  _0x213d86.push(_0x941a6c, _0x287aca + _0x29a61b);
  return _0x213d86;
};
VisuMZ.VisualGaugeStyles.GetFlagPolygon = function (_0x5af776, _0x1697f4, _0x23aaef, _0x411683, _0xa1ec55) {
  const _0x500a80 = [];
  const _0x453a60 = Math.ceil(_0x411683 / 0x3);
  _0x23aaef = Math.floor(_0x23aaef * _0xa1ec55);
  const _0x16638e = Math.max(_0x23aaef - _0x453a60, 0x0);
  _0x500a80.push(_0x5af776, _0x1697f4);
  _0x500a80.push(_0x5af776 + _0x16638e, _0x1697f4);
  _0x500a80.push(_0x5af776 + _0x23aaef, _0x1697f4 + _0x411683 / 0x2);
  _0x500a80.push(_0x5af776 + _0x16638e, _0x1697f4 + _0x411683);
  _0x500a80.push(_0x5af776, _0x1697f4 + _0x411683);
  return _0x500a80;
};
VisuMZ.VisualGaugeStyles.GetMultiStepPolygon = function (_0x191cd3, _0x21806e, _0x4360e4, _0x8f234d, _0x3ea063, _0x5c17f6) {
  const _0x29d20b = [];
  const _0x26d64e = Math.ceil(_0x3ea063 / 0x2);
  if (_0x8f234d < _0x26d64e * 0x2) {
    return this.GetDefaultPolygon(_0x21806e, _0x4360e4, _0x8f234d, _0x3ea063, _0x5c17f6);
  }
  _0x8f234d -= _0x26d64e;
  const _0x3ac006 = _0x8f234d;
  _0x8f234d = Math.floor(_0x8f234d * _0x5c17f6);
  let _0x26aae6 = 0x1;
  _0x29d20b.push(_0x21806e + _0x26d64e * _0x26aae6 / _0x191cd3, _0x4360e4 + _0x3ea063 * (_0x191cd3 - _0x26aae6) / _0x191cd3);
  while (_0x26aae6 <= _0x191cd3) {
    if (_0x5c17f6 <= _0x26aae6 / _0x191cd3) {
      _0x29d20b.push(_0x21806e + _0x26d64e * _0x26aae6 / _0x191cd3 + _0x8f234d, _0x4360e4 + _0x3ea063 * (_0x191cd3 - _0x26aae6) / _0x191cd3);
      break;
    }
    _0x29d20b.push(_0x21806e + _0x26d64e * _0x26aae6 / _0x191cd3 + _0x3ac006 * (_0x26aae6 / _0x191cd3), _0x4360e4 + _0x3ea063 * (_0x191cd3 - _0x26aae6) / _0x191cd3);
    _0x26aae6 += 0x1;
    _0x29d20b.push(_0x21806e + _0x26d64e * _0x26aae6 / _0x191cd3 + _0x3ac006 * ((_0x26aae6 - 0x1) / _0x191cd3), _0x4360e4 + _0x3ea063 * (_0x191cd3 - _0x26aae6) / _0x191cd3);
  }
  _0x29d20b.push(_0x21806e + _0x8f234d, _0x4360e4 + _0x3ea063);
  _0x29d20b.push(_0x21806e, _0x4360e4 + _0x3ea063);
  return _0x29d20b;
};
VisuMZ.VisualGaugeStyles.GetMultiSectionPolygon = function (_0x3f67f4, _0xa2176c, _0x58a4e2, _0x1ed4d7, _0x2010e1, _0x2cf790, _0x3402f2) {
  const _0x2f89d2 = [];
  const _0x33485a = _0x1ed4d7;
  const _0x16da6e = _0x2010e1 * 0.99;
  _0x1ed4d7 = Math.floor(_0x1ed4d7 * _0x2cf790);
  _0x2f89d2.push(_0xa2176c, _0x58a4e2);
  const _0x189af6 = _0x33485a / _0x3f67f4;
  const _0x1a52ff = 0x1 / _0x3f67f4;
  let _0x2b79e5 = 0x1;
  while (_0x2b79e5 <= _0x3f67f4) {
    if (_0x2cf790 <= _0x1a52ff * _0x2b79e5 || _0x3402f2) {
      _0x2f89d2.push(_0xa2176c + _0x1ed4d7, _0x58a4e2);
      break;
    }
    _0x2f89d2.push(_0xa2176c + _0x189af6 * _0x2b79e5, _0x58a4e2);
    _0x2f89d2.push(_0xa2176c + _0x189af6 * _0x2b79e5, _0x58a4e2 + _0x16da6e);
    if (_0x1ed4d7 <= _0xa2176c + _0x189af6 * _0x2b79e5 + 0.5) {
      _0x2f89d2.push(_0xa2176c + _0x1ed4d7, _0x58a4e2 + _0x16da6e);
      break;
    }
    _0x2f89d2.push(_0xa2176c + _0x189af6 * _0x2b79e5 + 0.5, _0x58a4e2 + _0x16da6e);
    _0x2f89d2.push(_0xa2176c + _0x189af6 * _0x2b79e5 + 0.5, _0x58a4e2);
    _0x2b79e5 += 0x1;
  }
  _0x2f89d2.push(_0xa2176c + _0x1ed4d7, _0x58a4e2 + _0x2010e1);
  _0x2f89d2.push(_0xa2176c, _0x58a4e2 + _0x2010e1);
  return _0x2f89d2;
};
VisuMZ.VisualGaugeStyles.GetMultiSegmentPolygon = function (_0x5da40, _0x232078, _0x4d920d, _0x4597fa, _0x265510, _0x2d4514, _0x1fe66f) {
  const _0x475b86 = [];
  const _0x13ad13 = _0x4597fa;
  const _0x236880 = _0x265510 * 0.99;
  _0x4597fa = Math.floor(_0x4597fa * _0x2d4514);
  _0x475b86.push(_0x232078, _0x4d920d);
  const _0x5f2244 = Math.max((this._maxValueSegment || 0x64) / _0x5da40, 0x1);
  const _0x303e5f = _0x13ad13 / _0x5f2244;
  const _0x587261 = 0x1 / _0x5f2244;
  let _0x2fb923 = 0x1;
  while (_0x2fb923 <= _0x5f2244) {
    if (_0x2d4514 <= _0x587261 * _0x2fb923 || _0x1fe66f) {
      _0x475b86.push(_0x232078 + _0x4597fa, _0x4d920d);
      break;
    }
    _0x475b86.push(_0x232078 + _0x303e5f * _0x2fb923, _0x4d920d);
    _0x475b86.push(_0x232078 + _0x303e5f * _0x2fb923, _0x4d920d + _0x236880);
    if (_0x4597fa <= _0x232078 + _0x303e5f * _0x2fb923 + 0.5) {
      _0x475b86.push(_0x232078 + _0x4597fa, _0x4d920d + _0x236880);
      break;
    }
    _0x475b86.push(_0x232078 + _0x303e5f * _0x2fb923 + 0.5, _0x4d920d + _0x236880);
    _0x475b86.push(_0x232078 + _0x303e5f * _0x2fb923 + 0.5, _0x4d920d);
    _0x2fb923 += 0x1;
    if (_0x2fb923 > _0x5f2244) {
      _0x475b86.push(_0x232078 + _0x4597fa, _0x4d920d);
      break;
    }
  }
  _0x475b86.push(_0x232078 + _0x4597fa, _0x4d920d + _0x265510);
  _0x475b86.push(_0x232078, _0x4d920d + _0x265510);
  return _0x475b86;
};
Sprite_Gauge.prototype.styleName = function () {
  if (!this._battler) {
    return VisuMZ.VisualGaugeStyles.HorzStyle();
  }
  const _0x4a35d3 = this.getStyleName().toLowerCase().trim();
  if (_0x4a35d3 === "default") {
    return VisuMZ.VisualGaugeStyles.HorzStyle();
  }
  return _0x4a35d3;
};
Sprite_Gauge.prototype.getStyleName = function () {
  const _0x50127b = VisuMZ.VisualGaugeStyles.Settings;
  switch (this._statusType) {
    case 'hp':
      return _0x50127b.statusHpStyle ?? "stagger";
    case 'mp':
      return _0x50127b.statusMpStyle ?? 'stagger';
    case 'tp':
      return _0x50127b.statusTpStyle ?? "stagger";
    case "time":
      return this.isBattlerAtbGauge() ? _0x50127b.battlerAtbStyle ?? 'slant' : _0x50127b.statusTimeStyle ?? 'slant';
    case "aggro":
      if (this.isBattlerAggroGauge()) {
        return _0x50127b.battlerAggroStyle ?? "slant";
      } else {
        return _0x50127b.statusAggroStyle ?? 'slant';
      }
  }
  return VisuMZ.VisualGaugeStyles.HorzStyle();
};
Sprite_Gauge.prototype.drawGaugeRect = function (_0x163fca, _0x2dbfd9, _0x131300, _0x4de327) {
  if (Imported.VisuMZ_2_EnhancedTpSystem && this._statusType === 'tp' && this._tpGaugeSprite) {
    this.drawGaugeRectEnhancedTp(_0x163fca, _0x2dbfd9, _0x131300, _0x4de327);
  } else {
    const _0x4e0689 = this.gaugeColor1();
    const _0x1c437e = this.gaugeColor2();
    this.drawVisualStyleGaugeRect(_0x4e0689, _0x1c437e, _0x163fca, _0x2dbfd9, _0x131300, _0x4de327);
  }
};
Sprite_Gauge.prototype.drawFullGauge = function (_0x44125f, _0x3035b8, _0x109f51, _0x735c41, _0x122598, _0x43d54e) {
  if (Imported.VisuMZ_2_EnhancedTpSystem && this._statusType === 'tp' && this._tpGaugeSprite) {
    this.drawFullGaugeEnhancedTp(_0x44125f, _0x3035b8, _0x109f51, _0x735c41, _0x122598, _0x43d54e);
  } else {
    this.drawVisualStyleGaugeRect(_0x44125f, _0x3035b8, _0x109f51, _0x735c41, _0x122598, _0x43d54e);
  }
};
Sprite_Gauge.prototype.drawVisualStyleGaugeRect = function (_0x502733, _0x4ae1b8, _0x36c39b, _0x357f0b, _0x437401, _0x27980d) {
  const _0x211029 = this.styleName();
  const _0x271050 = this.gaugeRate();
  const _0x5e84b2 = this.gaugeBackColor();
  VisuMZ.VisualGaugeStyles._maxValueSegment = this.currentMaxValue() || 0x64;
  this.bitmap.drawVisualStyleGauge(_0x211029, _0x36c39b, _0x357f0b, _0x437401, _0x27980d, _0x271050, _0x5e84b2, _0x502733, _0x4ae1b8);
};
VisuMZ.VisualGaugeStyles.Sprite_Gauge_gaugeHeight = Sprite_Gauge.prototype.gaugeHeight;
Sprite_Gauge.prototype.gaugeHeight = function () {
  const _0x365d1e = this.styleName();
  return (VisuMZ.VisualGaugeStyles.GetGaugeHeight(_0x365d1e) ?? 0xc).clamp(0x1, this.bitmapHeight());
};
VisuMZ.VisualGaugeStyles.Sprite_Gauge_setupLabelFont = Sprite_Gauge.prototype.setupLabelFont;
Sprite_Gauge.prototype.setupLabelFont = function () {
  VisuMZ.VisualGaugeStyles.Sprite_Gauge_setupLabelFont.call(this);
  VisuMZ.VisualGaugeStyles.SetLabelOffset(this.styleName());
};
VisuMZ.VisualGaugeStyles.Sprite_Gauge_drawLabel = Sprite_Gauge.prototype.drawLabel;
Sprite_Gauge.prototype.drawLabel = function () {
  VisuMZ.VisualGaugeStyles.Sprite_Gauge_drawLabel.call(this);
  VisuMZ.VisualGaugeStyles.ClearTextOffset();
};
VisuMZ.VisualGaugeStyles.Sprite_Gauge_setupValueFont = Sprite_Gauge.prototype.setupValueFont;
Sprite_Gauge.prototype.setupValueFont = function () {
  VisuMZ.VisualGaugeStyles.Sprite_Gauge_setupValueFont.call(this);
  VisuMZ.VisualGaugeStyles.SetValueOffset(this.styleName());
};
VisuMZ.VisualGaugeStyles.Sprite_Gauge_drawValue = Sprite_Gauge.prototype.drawValue;
Sprite_Gauge.prototype.drawValue = function () {
  VisuMZ.VisualGaugeStyles.Sprite_Gauge_drawValue.call(this);
  VisuMZ.VisualGaugeStyles.ClearTextOffset();
};
VisuMZ.VisualGaugeStyles.Sprite_Gauge_redraw = Sprite_Gauge.prototype.redraw;
Sprite_Gauge.prototype.redraw = function () {
  VisuMZ.VisualGaugeStyles.Sprite_Gauge_redraw.call(this);
  VisuMZ.VisualGaugeStyles.ClearTextOffset();
};
VisuMZ.VisualGaugeStyles.Bitmap_drawText = Bitmap.prototype.drawText;
Bitmap.prototype.drawText = function (_0x4b6ab, _0x5a3b82, _0x107ca0, _0x218648, _0x32db44, _0x269dc9) {
  if ($gameTemp && $gameTemp._visualGaugeStyleOffset) {
    _0x5a3b82 += $gameTemp._visualGaugeStyleOffset.x;
    _0x107ca0 += $gameTemp._visualGaugeStyleOffset.y;
  }
  VisuMZ.VisualGaugeStyles.Bitmap_drawText.call(this, _0x4b6ab, _0x5a3b82, _0x107ca0, _0x218648, _0x32db44, _0x269dc9);
};
Sprite_HpGauge.prototype.gaugeHeight = function () {
  return VisuMZ.VisualGaugeStyles.Sprite_Gauge_gaugeHeight.call(this);
};
Sprite_HpGauge.prototype.getStyleName = function () {
  const _0x308687 = VisuMZ.VisualGaugeStyles.Settings;
  return _0x308687.battlerHpStyle ?? "normal";
};
Sprite_Gauge.prototype.isBattlerAtbGauge = function () {
  if (!Imported.VisuMZ_2_BattleSystemATB) {
    return false;
  }
  if (!this._battler) {
    return false;
  }
  if (!this._battler.battler()) {
    return false;
  }
  return this === this._battler.battler()._atbGaugeSprite;
};
Sprite_Gauge.prototype.isBattlerAggroGauge = function () {
  if (!Imported.VisuMZ_2_AggroControlSystem) {
    return false;
  }
  if (!this._battler) {
    return false;
  }
  if (!this._battler.battler()) {
    return false;
  }
  return this === this._battler.battler()._aggroGaugeSprite;
};
Sprite_Gauge.prototype.drawGaugeRectEnhancedTp = function (_0xd3fe6f, _0x335f38, _0x5247d6, _0x1ab0b0) {
  const _0x2e90fe = this.changeTpCustomColor(this.gaugeColor1(), 0x1);
  const _0x1c78f2 = this.changeTpCustomColor(this.gaugeColor2(), 0x2);
  this.drawFullGaugeEnhancedTp(_0x2e90fe, _0x1c78f2, _0xd3fe6f, _0x335f38, _0x5247d6, _0x1ab0b0);
};
Sprite_Gauge.prototype.drawFullGaugeEnhancedTp = function (_0x5580a9, _0x12498c, _0x4f9f40, _0xf1559f, _0xa2241b, _0xd983d6) {
  this.createTpGaugeBitmaps(true);
  _0x5580a9 = this.changeTpCustomColor(this.gaugeColor1(), 0x1);
  _0x12498c = this.changeTpCustomColor(this.gaugeColor2(), 0x2);
  const _0x1afa6e = this.styleName();
  const _0x36b78c = this.gaugeRate();
  const _0x31aff7 = this.gaugeBackColor();
  const _0x226c0e = VisuMZ.VisualGaugeStyles.GetPolygonStyle(_0x1afa6e, _0x4f9f40, _0xf1559f, _0xa2241b, _0xd983d6, 0x1, true);
  VisuMZ.VisualGaugeStyles._maxValueSegment = this.currentMaxValue() || 0x64;
  this._tpGaugeBack.bitmap.drawVisualStyleGaugeBack(_0x226c0e, _0x31aff7);
  const _0x2da2c1 = VisuMZ.VisualGaugeStyles.GetPolygonStyle(_0x1afa6e, _0x4f9f40, _0xf1559f, _0xa2241b, _0xd983d6, _0x36b78c, false);
  const _0x46518c = this._tpGaugeSprite.bitmap._context.createLinearGradient(_0x4f9f40, _0xf1559f, _0x4f9f40 + _0xa2241b, _0xf1559f);
  VisuMZ.VisualGaugeStyles._maxValueSegment = this.currentMaxValue() || 0x64;
  this._tpGaugeSprite.bitmap.drawVisualStyleGaugeFront(_0x2da2c1, _0x5580a9, _0x12498c, _0x46518c);
};
Window_Base.prototype.drawGauge = function (_0x5db993, _0x5c8118, _0x5e023e, _0x2b38d6, _0x26bf5c, _0x4b3764) {
  const _0x276d43 = VisuMZ.VisualGaugeStyles.HorzStyle();
  const _0x5a97d9 = (VisuMZ.VisualGaugeStyles.GetGaugeHeight(_0x276d43) ?? 0xc).clamp(0x1, 0x20);
  const _0x52ab05 = _0x5c8118 + this.lineHeight() - _0x5a97d9 - 0x2;
  const _0x16c3b6 = ColorManager.gaugeBackColor();
  VisuMZ.VisualGaugeStyles._maxValueSegment = 0x64;
  this.contents.drawVisualStyleGauge(_0x276d43, _0x5db993, _0x52ab05, _0x5e023e, _0x5a97d9, _0x2b38d6, _0x16c3b6, _0x26bf5c, _0x4b3764);
};
Window_StatusBase.prototype.drawActorLevel = function (_0x232fd6, _0x5ab42f, _0x22b59b) {
  if (VisuMZ.CoreEngine.Settings.Param.ShowActorLevel === false) {
    return;
  }
  if (this.isExpGaugeDrawn()) {
    this.drawActorExpGauge(_0x232fd6, _0x5ab42f, _0x22b59b);
  }
  this.resetFontSettings();
  const _0x2e2936 = VisuMZ.VisualGaugeStyles.HorzStyle();
  const _0x263ffb = VisuMZ.SkillsStatesCore.Settings.Gauge;
  const _0x3f6e8f = _0x263ffb.MatchLabelColor ? ColorManager.expGaugeColor2() : ColorManager.systemColor();
  this.changeTextColor(_0x3f6e8f);
  if (_0x263ffb.LabelFontMainType === "number") {
    this.contents.fontFace = $gameSystem.numberFontFace();
    this.contents.fontSize = $gameSystem.mainFontSize();
  }
  VisuMZ.VisualGaugeStyles.SetLabelOffset(_0x2e2936);
  this.drawText(TextManager.levelA, _0x5ab42f, _0x22b59b, 0x30);
  this.resetFontSettings();
  VisuMZ.VisualGaugeStyles.SetValueOffset(_0x2e2936);
  this.drawText(_0x232fd6.level, _0x5ab42f + 0x54, _0x22b59b, 0x24, 'right');
  this.resetFontSettings();
  VisuMZ.VisualGaugeStyles.ClearTextOffset();
};