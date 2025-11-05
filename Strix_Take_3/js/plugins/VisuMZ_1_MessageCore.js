//=============================================================================
// VisuStella MZ - Message Core
// VisuMZ_1_MessageCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MessageCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageCore = VisuMZ.MessageCore || {};
VisuMZ.MessageCore.version = 1.50;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.50] [MessageCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Message_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Message Core plugin extends and builds upon the message functionality of
 * RPG Maker MZ and allows you, the game dev, to customize the workflow for
 * your game's message system.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general message settings.
 * * Auto-Color key words and/or database entries.
 * * Increases the text codes available to perform newer functions/effects.
 * * Ability for you to implement custom Text Code actions.
 * * Ability for you to implement custom Text code string replacements.
 * * Invoke a macro system to speed up the dev process.
 * * Add a Text Speed option to the Options menu.
 * * Add the ever so useful Word Wrap to your message system.
 * * Extend the choice selection process to your liking.
 * * The ability to enable/disable as well as show/hide certain choices.
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
 * Dim Background Extension
 * 
 * Before, when using the Dim Background as a part of a Show Text event, its
 * size is only the same as the message window's width itself. This looked
 * really ugly because it had hard edges cutting off while gradients are seen
 * elsewhere. To make it look better, we extended the dimmed background to span
 * the width of the screen instead.
 * 
 * ---
 * 
 * Extended Messages
 * 
 * If you decide to expand the size of the message window to allow for more
 * rows to be displayed, you can type in the data for them by chaining together
 * Show Message events. They will take data from each other and display them in
 * the same message window as long as there are enough rows.
 * 
 * ---
 *
 * Extended Choice Lists
 * 
 * Choice lists can be extended by just chaining one Choice List event after
 * the other in succession along the same indentation. They do not extend if
 * there is any event other than a Choice List option between them on the same
 * indentation level.
 *
 * ---
 *
 * ============================================================================
 * Text Language Information
 * ============================================================================
 *
 * As of Message Core version 1.46, Text Language has been added. 
 * 
 * The "Text Language" feature allows your players to switch between different
 * languages for your game to allow people from around the globe to enjoy what
 * story you have to tell.
 * 
 * Disclaimers: This is not an automatic translation tool. Translations made
 * through the "Text Language" feature of the VisuStella MZ Message Core
 * will require manual input by the game developer.
 *
 * ---
 * 
 * === How to Enable Switching ===
 * 
 * Text Language is NOT enabled by default. Here's what you have to do:
 * 
 * #1. Open up the Message Core's Plugin Parameters
 * #2. Plugin Parameters > Text Language Settings > Enable Switching?
 * #3. Change the "Enable Switching?" parameter setting to "true".
 * #4. Adjust any other settings as needed.
 * #5. Save the Plugin Parameter changes.
 * #6. Save your game.
 * 
 * Now, it's time to get the CSV file that will contain all of the text used to
 * translate your game's script.
 * 
 * #1. Play test your game. Make sure Play test mode is NOT disabled.
 * #2. A popup will appear asking to create a language CSV file.
 * #3. Click "OK" and let the plugin do its thing.
 * #4. The project's /data/ folder will appear with Language.csv made.
 * #5. The plugin will then ask you to restart your game.
 * 
 * ---
 * 
 * === How to Edit the Language CSV ===
 * 
 * The Language CSV is structured as a normal CSV file would be, which also
 * means it can be modified in programs like Microsoft Excel or Google Sheets.
 * We recommend using either of those programs to modify the text.
 * 
 * We do not recommend modifying the CSV file in programs like notepad directly
 * due to the way certain things like commas (,) are handled and how easy it is
 * to be error-prone.
 * 
 * The table will appear something like this at first:
 * 
 *     Key        English    Chinese    Japanese     Korean
 *     Greeting   Hello      你好       こんにちは    안녕하세요
 *     Farewell   Good-bye   再见       さようなら    안녕히
 *     Wow        Wow        哇         ワオ          와우
 * 
 * The "Key" column refers to the reference key used to determine which lines
 * will be inserted into the text. The columns with the languages will utilize
 * the respective phrases for that language.
 * 
 * You can remove columns containing languages that you aren't planning to
 * translate for your game.
 * 
 * ---
 * 
 * === Things to Keep in Mind ===
 * 
 * When adding text to the CSV file via the spreadsheet editor (Excel or Google
 * Sheets), there's a few things to keep in mind.
 * 
 * ---
 * 
 * ==== Line Breaks ====
 * 
 * When you want to insert line breaks into the translated phrases, use the
 * <br> text code. This is best used for text that is to be transferred into
 * the message window or help window.
 * 
 * ==== Text Codes ====
 * 
 * Text codes like \C[2] can be inserted normally. However, they only work in
 * windows that support text codes, such as the message window or help window.
 * Otherwise, the text codes will not transfer over properly.
 * 
 * ==== Semicolons ====
 * 
 * Due to the nature of the CSV file, we used the semicolon (;) as the
 * separator. As such, semicolons should not be used in the text entries.
 * Though some sentences will work with the semicolon, not all of them will. If
 * you do want to use a semicolon, use the text code <semicolon> instead.
 * 
 *   Example:
 * 
 *   "The pancakes were delicious<semicolon> they were fluffy and sweet."
 * 
 * Other variations of the semicolon text code are <semi> and <semi-colon>.
 * The <semicolon> text code and variants only work with the Language CSV and
 * are ignored otherwise when typed in a regular message box entry.
 * 
 * ---
 * 
 * ==== Macros and Language Switches ====
 * 
 * For those using both text macros and text language switches, macros will be
 * converted to text before language switches as it allows for better text
 * transitions that way.
 * 
 * ---
 * 
 * === How to Use the Reference Keys ===
 * 
 * Remember the "Key" column and the reference keys? Those are used to
 * determine which lines will be inserted into the text for the message window
 * and just about any other window. However, there's a specific way these keys
 * must be used in order for them to work.
 * 
 * The "text code" format works like this. Use any of the following:
 * 
 *   \tl{keyName}
 *   \translate{keyName}
 *   \loc{keyName}
 *   \locale{keyName}
 *   \localize{keyName}
 * 
 * or for those coming from different translation plugins but want to switch
 * over to the VisuStella MZ Message Core's translation system:
 * 
 *   ${keyName}
 * 
 * For example, to use one of the default keys made with the Language CSV:
 * 
 *   \tl{Greeting}
 * 
 * This will yield "Hello" in English, "你好" in Chinese, "こんにちは" in
 * Japanese, and "안녕하세요" in Korean.
 * 
 * Key names are not case sensitive and any trailing spaces will be removed
 * from them in order to make sure the CSV table is stable to reference any
 * translated text from.
 * 
 * You can insert these language "text codes" into item names, skill names,
 * etc. as well as system entries like for Attack, Defense, etc.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. Some of
 * these are original text codes provided by RPG Maker MZ, while others are
 * new text codes added through this plugin. You may even add your own text
 * codes through the plugin parameters.
 *
 * === RPG Maker MZ Text Codes ===
 *
 * The following are text codes that come with RPG Maker MZ. These text codes
 * cannot be edited through the Plugin Parameters.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \V[x]                Replaced by the value of variable 'x'.
 * \N[x]                Replaced by the name of actor 'x'.
 * \P[x]                Replaced by the name of party member 'x'.
 * \C[x]                Draw the subsequent text with window skin color 'x'.
 * \I[x]                Draw icon 'x'.
 *
 * \PX[x]               Moves text x position to 'x'.
 * \PY[x]               Moves text y position to 'y'.
 *
 * \G                   Replaced by the currency unit.
 *
 * \{                   Increase the text font size by one step.
 * \}                   Decrease the text font size by one step.
 * \FS[x]               Changes the text font size to 'x'.
 *
 * \\                   Replaced by the backslash character.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \$                   Opens the gold window.
 * \.                   Waits a 1/4 second.
 * \|                   Waits a full second.
 * \!                   Waits for button input.
 * \>                   Display remaining text on same line all at once.
 * \<                   Cancel the effect that displays text all at once.
 * \^                   Do not wait for input after displaying text to move on.
 *
 * ---
 *
 * === Message Core Hard-Coded Text Codes ===
 *
 * The following text codes are hard-coded into VisuStella MZ Message Core's
 * code. These text codes cannot be edited through the Plugin Parameters.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <b>                  Makes subsequent text bold.
 * </b>                 Removes bold from subsequent text.
 * <i>                  Makes subsequent text italic.
 * </i>                 Removes italic from subsequent text.
 * 
 * <left>               Makes subsequent text left-aligned. *Note1*
 * </left>              Removes left-alignment for subsequent text.
 * <center>             Makes subsequent text center-aligned. *Note1*
 * </center>            Removes center-alignment for subsequent text.
 * <right>              Makes subsequent text right-aligned. *Note1*
 * </right>             Removes right-alignment for subsequent text.
 *
 * Note1: Use at line-start. Does not work with Word Wrap.
 *
 * <ColorLock>          Text codes can't change text color for subsequent text.
 * </ColorLock>         Removes Color Lock property.
 *
 * <WordWrap>           Enables Word Wrap for this window. *Note2*
 * </WordWrap>          Disables Word Wrap for this window. *Note2*
 * <br>                 Adds a line break. Requires Word Wrap enabled.
 * <line break>         Adds a line break. Requires Word Wrap enabled.
 *
 * Note2: Some windows cannot use Word Wrap such as the Choice Window.
 * Word Wrap also cannot be used together with <left>, <center>, or <right> and
 * will disable itself if text alignment text codes are detected.
 *
 * \picture<x>          Draws picture x (filename) at current text position.
 * \CenterPicture<x>    Draws picture x (filename) centered at the window.
 *
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <Caps>               Makes all text after this capitalized.
 *                      Turns off other auto-text case modes.
 *                      ie: "hello world" becomes "HELLO WORLD"
 * </Caps>              Turns off auto text-casing effects.
 * 
 * <Upper>              Makes the first letter of any word after a space to be
 *                      capitalized. Other letters are left alone.
 *                      Turns off other auto-text case modes.
 *                      ie. "old mcDonald" becomes "Old McDonald"
 * </Upper>             Turns off auto text-casing effects.
 * 
 * <Lower>              Makes all text after this lowercase.
 *                      Turns off other auto-text case modes.
 *                      ie: "THE QUICK BROWN FOX" becomes "the quick brown fox"
 * </Lower>             Turns off auto text-casing effects.
 * 
 * <Alt>                Makes all text after this alternate between uppercase
 *                      and lowercase. Turns off other auto-text case modes.
 *                      ie: "Hello" becomes "HeLlO"
 * </Alt>               Turns off auto text-casing effects.
 * 
 * <Chaos>              Makes all text after this randomize between uppercase
 *                      and lowercase. Turns off other auto-text case modes.
 *                      ie: "Wassup" becomes "waSsUP" or "WasSuP"
 * </Chaos>             Turns off auto text-casing effects.
 * 
 * **Clarity:** In case you're wondering, the text codes </Caps>, </Upper>,
 * </Lower>, </Alt>, and </Chaos> all do the same thing and can be used
 * interchangeably with each other. For example, you can do this:
 * <Caps>hello world</Lower> and it would still accomplish the same effect, but
 * you won't do that because you're not a monster of a developer.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \CommonEvent[x]      Runs common event x when text code is reached.
 * \Wait[x]             Makes the message wait x frames before continuing.
 * 
 * <Next Page>          Ends the current message page at this line. This is
 *                      used for messages when rows are at 5 or above and the
 *                      message lines don't match the amount. This is used to
 *                      prevent grabbing message windows from following message
 *                      events. Any lines following <Next Page> in the same
 *                      message event will be ignored.
 * 
 * <Auto>               Resizes message window dimensions to fit text. *Note3*
 * <Auto Width>         Resizes message window width to fit text. *Note3*
 * <Auto Height>        Resizes message window height to fit text. *Note3*
 * 
 * <Auto Actor: x>      Resizes message window and positions it over actor x
 *                      sprite's head. *Note3*
 * <Auto Party: x>      Resizes message window and positions it over party
 *                      member x sprite's head. *Note3*
 * <Auto Player>        Map-Only. Resizes message window and positions it over
 *                      the player sprite's head. *Note3*
 * <Auto Event: x>      Map-Only. Resizes message window and positions it over
 *                      event x sprite's head. *Note3*
 * <Auto Enemy: x>      Battle-Only. Resizes message window and positions it
 *                      over enemy x sprite's head. *Note3*
 *
 * Note3: Upon using these text codes, the message window's settings will be
 * reset for the upcoming message. These effects do not work with Word Wrap.
 *
 * ---
 *
 * ----------------------------   ---------------------------------------------
 * Text Code                      Effect (Battle Only)
 * ----------------------------   ---------------------------------------------
 * <Current Battle Target>        Replaces text code with the current target of
 *                                an action in battle.
 * <Current Battle User>          Replaces text code with the currently active
 *                                user in battle.
 * <Current Battle Action>        Replaces text code with the current battle
 *                                action's name with an icon in front.
 * <Current Battle Action Name>   Replaces text code with the current battle
 *                                action's name without an icon.
 * 
 * If there is no battle, no target, no user, or no action, then the text code
 * will just be replaced with no text.
 * 
 * These text codes are NOT recommended to be used inside of Help Descriptions.
 * They are best used with "Show Text" event commands.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Effect (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * <Show>                         Choice is always shown.
 * <Show Switch: x>               Choice shown if switch x is ON.
 * <Show Switches: x,x,x>         Choice shown if the x switches are all ON.
 * <Show All Switches: x,x,x>     Choice shown if the x switches are all ON.
 * <Show Any Switches: x,x,x>     Choice shown if any of x switches are ON.
 *
 * <Hide>                         Choice is always hidden.
 * <Hide Switch: x>               Choice hidden if switch x is ON.
 * <Hide Switches: x,x,x>         Choice hidden if the x switches are all ON.
 * <Hide All Switches: x,x,x>     Choice hidden if the x switches are all ON.
 * <Hide Any Switches: x,x,x>     Choice hidden if any of x switches are ON.
 *
 * <Enable>                       Choice is always enabled.
 * <Enable Switch: x>             Choice enabled if switch x is ON.
 * <Enable Switches: x,x,x>       Choice enabled if the x switches are all ON.
 * <Enable All Switches: x,x,x>   Choice enabled if the x switches are all ON.
 * <Enable Any Switches: x,x,x>   Choice enabled if any of x switches are ON.
 *
 * <Disable>                      Choice is always disabled.
 * <Disable Switch: x>            Choice disabled if switch x is ON.
 * <Disable Switches: x,x,x>      Choice disabled if the x switches are all ON.
 * <Disable All Switches: x,x,x>  Choice disabled if the x switches are all ON.
 * <Disable Any Switches: x,x,x>  Choice disabled if any of x switches are ON.
 * 
 * <Choice Width: x>              Sets the minimum text area width to x.
 *                                Applies to whole choice window.
 * <Choice Indent: x>             Sets the indent to x value. Applies to
 *                                current choice selection only.
 * 
 * <BgColor: x>                   Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' text color. This
 *                                will be combined with a fading
 * <BgColor: x,y>                 Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' to 'y' gradient
 *                                text color.
 * <BgColor: #rrggbb>             Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' color using
 *                                hex color values.
 * <BgColor: #rrggbb, #rrggbb>    Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' gradient
 *                                using hex color values.
 * 
 * <Help> text </Help>            Makes a help window appear and have it show
 *                                'text' in its contents. The help window will
 *                                disappear if no text is displayed.
 * 
 * <Shuffle>                      Shuffles the order of all choices. Any cancel
 *                                shortcuts other than "Branch" will be undone.
 * <Shuffle: x>                   Shuffles the order of all choices and only
 *                                x number of them will appear. Any cancel
 *                                shortcuts other than "Branch" will be undone.
 *                                Hidden choices do not count towards x number.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Background Effects (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * 
 * <BgImg: filename>              Creates a background image from img/pictures/
 *                                stretched across the choice rectangle.
 * <BgImg LowerLeft: filename>    Creates a background image from img/pictures/
 *                                scaled to the lower left of choice rect.
 * <BgImg LowerCenter: filename>  Creates a background image from img/pictures/
 *                                scaled to the lower center of choice rect.
 * <BgImg LowerRight: filename>   Creates a background image from img/pictures/
 *                                scaled to the lower right of choice rect.
 * <BgImg MidLeft: filename>      Creates a background image from img/pictures/
 *                                scaled to the middle left of choice rect.
 * <BgImg Center: filename>       Creates a background image from img/pictures/
 *                                scaled to the center of choice rect.
 * <BgImg MidRight: filename>     Creates a background image from img/pictures/
 *                                scaled to the middle right of choice rect.
 * <BgImg UpperLeft: filename>    Creates a background image from img/pictures/
 *                                scaled to the upper left of choice rect.
 * <BgImg UpperCenter: filename>  Creates a background image from img/pictures/
 *                                scaled to the upper center of choice rect.
 * <BgImg UpperRight: filename>   Creates a background image from img/pictures/
 *                                scaled to the upper right of choice rect.
 * 
 * *Note:* For the <BgImg: filename> text code variants, even if the background
 * image is smaller than the choice contents, it will overscale to match its
 * choice rectangle dimensions.
 * 
 * *Note:* Using a background image will clear the dimmed background rectangle
 * that is normally behind each selectable choice.
 * 
 * *Note:* Each choice can only have one background image but can use a
 * combination of one background and one foreground image.
 * 
 * *Note:* Images in the background will appear behind the select cursor.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Foreground Effects (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * 
 * <FgImg: filename>              Creates a foreground image from img/pictures/
 *                                stretched across the choice rectangle.
 * <FgImg LowerLeft: filename>    Creates a foreground image from img/pictures/
 *                                scaled to the lower left of choice rect.
 * <FgImg LowerCenter: filename>  Creates a foreground image from img/pictures/
 *                                scaled to the lower center of choice rect.
 * <FgImg LowerRight: filename>   Creates a foreground image from img/pictures/
 *                                scaled to the lower right of choice rect.
 * <FgImg MidLeft: filename>      Creates a foreground image from img/pictures/
 *                                scaled to the middle left of choice rect.
 * <FgImg Center: filename>       Creates a foreground image from img/pictures/
 *                                scaled to the center of choice rect.
 * <FgImg MidRight: filename>     Creates a foreground image from img/pictures/
 *                                scaled to the middle right of choice rect.
 * <FgImg UpperLeft: filename>    Creates a foreground image from img/pictures/
 *                                scaled to the upper left of choice rect.
 * <FgImg UpperCenter: filename>  Creates a foreground image from img/pictures/
 *                                scaled to the upper center of choice rect.
 * <FgImg UpperRight: filename>   Creates a foreground image from img/pictures/
 *                                scaled to the upper right of choice rect.
 * 
 * *Note:* For the <FgImg: filename> text code variants, unlike the background
 * variant, the foreground image will not overscale past its original size.
 * Instead, it will maintain its original size or be smaller, so long as it can
 * be scaled to exist within the choice rectangle unless it is intended to be
 * stretched by using the <FgImg: filename> variant.
 * 
 * *Note:* Text is then written on top of the foreground image.
 * 
 * *Note:* Each choice can only have one foreground image but can use a
 * combination of one background and one foreground image.
 * 
 * *Note:* Images in the foreground will appear behind the select cursor.
 *
 * ---
 *
 * -----------------  ---------------------------------------------------------
 * Text Code          Effect (Name Window Only)
 * -----------------  ---------------------------------------------------------
 * <Left>             Positions the name box window to the left.
 * <Center>           Positions the name box window to the center.
 * <Right>            Positions the name box window to the right.
 * <Position: x>      Replace 'x' with a number from 0 to 10. This positions
 *                    the name box window on the screen relative to the
 *                    position of the value 'x' represents.
 * \NormalBG          Changes background type of window to normal type.
 * \DimBG             Changes background type of window to dim type.
 * \TransparentBG     Changes background type of window to transparent type.
 *
 * ---
 * 
 * -------------------------------   ------------------------------------------
 * Text Code                         Effect (Message Window Only)
 * -------------------------------   ------------------------------------------
 * 
 * <Position: x, y, width, height>   Forces the message window to exact listed
 *                                   coordinates and dimensions. Replace each
 *                                   of the arguments with numbers. *Note*
 * 
 * <Coordinates: x, y>               Forces the message window to the exact
 *                                   listed coordinates. Replace each of the
 *                                   arguments with numbers. *Note*
 * 
 * <Dimensions: width, height>       Forces the message window size to the
 *                                   exact listed dimensions. Replace each of
 *                                   the arguments with numbers. *Note*
 * 
 * <Offset: +x, +y>                  Quickly adjust the message window offset
 * <Offset: -x, -y>                  values to the x and y amounts. The values
 * <Offset: +x, -y>                  will replace the previous offset settings
 * <Offset: -x, +y>                  if there were any.
 * 
 * *NOTE* These text codes do not work with Word Wrap.
 * 
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Requires VisuMZ_0_CoreEngine)
 * ------------------   -------------------------------------------------------
 * <Up Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Left Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Right Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Down Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * <Ok Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Cancel Button>      Display's VisuMZ_0_CoreEngine's button assist text.
 * <Shift Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Menu Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Up Button>     Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Down Button>   Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * ---
 * 
 * === Random Text Pool ===
 * 
 * <RNG> text1 | text2 | text3 </RNG>
 * 
 * Using the above text code format in a Show Message entry, you can get a
 * random result out of the various inserted texts. Use "|" (without quotes) as
 * a separator between text entries. You can have unlimited entries. The result
 * will have any excess white space trimmed.
 * 
 * This text code cannot be inserted into a macro and parsed properly.
 * 
 * ---
 *
 * === Message Core Customizable Text Codes ===
 *
 * The following text codes can be altered through the Message Core's various
 * Plugin Parameters to adjust replacements and actions.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \Class[x]            Draws class x's icon (if have) and name.
 * \ClassName[x]        Draws class x's name only.
 *
 * \Skill[x]            Draws skill x's icon (if have) and name.
 * \SkillName[x]        Draws skill x's name only.
 *
 * \Item[x]             Draws item x's icon (if have) and name.
 * \ItemName[x]         Draws item x's name only.
 * \ItemQuantity[x]     Inserts the number of item x's owned by the party.
 *
 * \Weapon[x]           Draws weapon x's icon (if have) and name.
 * \WeaponName[x]       Draws weapon x's name only.
 * \WeaponQuantity[x]   Inserts the number of weapon x's owned by the party.
 *
 * \Armor[x]            Draws armor x's icon (if have) and name.
 * \ArmorName[x]        Draws armor x's name only.
 * \ArmorQuantity[x]    Inserts the number of armor x's owned by the party.
 *
 * \LastGainObj         Draws the icon + name of the last party-gained object.
 * \LastGainObjName     Draws the name of the last party-gained object.
 * \LastGainObjQuantity Inserts the quantity of the last party-gained object.
 *
 * \State[x]            Draws state x's icon (if have) and name.
 * \StateName[x]        Draws state x's name only.
 *
 * \Enemy[x]            Draws enemy x's icon (if have) and name.
 * \EnemyName[x]        Draws enemy x's name only.
 *
 * \Troop[x]            Draws troop x's icon (if have) and name.
 * \TroopName[x]        Draws troop x's name only.
 *
 * \TroopMember[x]      Draws troop member x's icon (if have) and name. *Note1*
 * \TroopNameMember[x]  Draws troop member x's name only. *Note1*
 * 
 * Note1: Only works in battle.
 *
 * \NormalBG            Changes background type of window to normal type.
 * \DimBG               Changes background type of window to dim type.
 * \TransparentBG       Changes background type of window to transparent type.
 *
 * \FontChange<x>       Changes font face to x font name.
 * \ResetFont           Resets font settings.
 *
 * \ResetColor          Resets color settings.
 * \HexColor<x>         Changes text color to x hex color (ie. #123abc).
 * \OutlineColor[x]     Changes outline color to text color x.
 * \OutlineHexColor<x>  Changes outline color to x hex color (ie. #123abc).
 * \OutlineWidth[x]     Changes outline width to x thickness.
 * 
 * \WindowMoveTo<?>     Moves window to exact coordinates. *Note2*
 * \WindowMoveBy<?>     Moves window by relative values. *Note2*
 * \WindowReset         Resets window position to original position.
 *
 * Note2: Replace '?' with the following format:
 *   targetX, targetY, targetWidth, targetHeight, duration, easingType
 *   Only targetX and targetY are required arguments. These will only alter the
 *   window dimensions when the text has arrived at that point. They will not
 *   alter the window preemptively. This is not used as a window positioner.
 *   Use the <Position: x, y, width, height> text code for that.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \ActorFace[x]        Inserts actor x's face into the Message Window.
 * \PartyFace[x]        Inserts party member x's face into the Message Window.
 * \ChangeFace<x,y>     Changes message face to x filename, y index.
 * \FaceIndex[x]        Changes message face index to x.
 *
 * \TextDelay[x]        Sets delay in frames between characters to x frames.
 * 
 * Note: These text codes only work with the Message Window. Keep in mind that
 *   even if some windows might look like the Message Window, it may not
 *   necessarily be one.
 * 
 * ---
 * 
 * As these text codes can be added, removed, and/or altered, their functions
 * may or may not be the same depending on how you've altered them. VisuStella
 * is not responsible for any errors caused by changes made to pre-made text
 * codes nor any new text codes they did not make.
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
 * === Message Plugin Commands ===
 * 
 * ---
 *
 * Message: Properties
 *   Change the various properties of the Message Window.
 *
 *   Rows:
 *   - Change the number of Message Window rows.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Width: 
 *   - Change the Message Window width in pixels.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Word Wrap:
 *   - Enable or disable Word Wrap for the Message Window?
 *
 * ---
 * 
 * Message: X/Y Offsets
 * - Change the X and Y Offsets of the Message Window.
 * - The offset value(s) will be saved and stored.
 * 
 *   Offset X:
 *   - Offset Message Window horizontally.
 *   - Negative: Left; Positive: Right
 *   - Message Window coordinates are still restricted via clamping.
 * 
 *   Offset Y:
 *   - Offset Message Window vertically.
 *   - Negative: Up; Positive: Down
 *   - Message Window coordinates are still restricted via clamping.
 * 
 * ---
 * 
 * === Choice Plugin Commands ===
 * 
 * ---
 * 
 * Choices: Distance
 * - Change the distance from choice window to the message window.
 * 
 *   Distance:
 *   - Change distance between the choice and message windows.
 *   - Default distance is 0.
 *   - Use negative to center align with remaining space.
 * 
 * ---
 *
 * Choices: Properties
 * - Change the properties found in the Show Choices event command.
 *
 *   Line Height:
 *   - Change the line height for the show choices.
 *   - Leave at 0 to keep this unchanged.
 * 
 *   Minimum Choice Width:
 *   - What is the minimum width size for each choice?
 *   - 96 is the default width.
 *
 *   Max Rows:
 *   - Maximum number of choice rows to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Max Columns:
 *   - Maximum number of choice columns to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Text Alignment:
 *   - Text alignment for Show Choice window.
 *
 * ---
 * 
 * === Select Plugin Commands ===
 * 
 * ---
 * 
 * Select: Weapon
 * - Opens the Event Select Item Window to let the player pick a weapon to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected weapon.
 *   - It will result in 0 otherwise.
 * 
 *   Weapon Type ID:
 *   - Reduce all the weapons to a specific weapon type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Armor
 * - Opens the Event Select Item Window to let the player pick an armor to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected armor.
 *   - It will result in 0 otherwise.
 * 
 *   Armor Type ID:
 *   - Reduce all the armors to a specific armor type.
 *   - Leave at 0 to not use filters.
 * 
 *   Equip Type ID:
 *   - Reduce all the armors to a specific equip type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Skill
 * - Opens the Event Select Item Window to let the player pick a skill to
 *   choose from.
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - Can be opened while the Message Window is open.
 * - Skills will not be listed if they are hidden by the actor.
 * - Skills will not be listed if the actor lacks access to their Skill Type.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected skill.
 *   - It will result in 0 otherwise.
 * 
 *   Actor ID:
 *   - Select an actor to get the skill list from.
 *   - Use 0 to select from the party leader.
 * 
 *   Skill Type ID:
 *   - Reduce all the skills to a specific skill type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Change Text
 * - Change text for target picture(s) to show.
 * - You may use text codes.
 * - Text will adapt to picture's properties.
 * - Settings will be erased if picture is erased.
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to set text to.
 * 
 *   Padding:
 *   - How much padding from the sides should there be?
 * 
 *   Text:
 * 
 *     Upper Left:
 *     Upper Center:
 *     Upper Right:
 *     Middle Left:
 *     Middle Center:
 *     Middle Right:
 *     Lower Left:
 *     Lower Center:
 *     Lower Right:
 *     - The text that's aligned to this picture's side.
 *     - You may use text codes.
 * 
 * ---
 * 
 * Picture: Erase Text
 * - Erase all text for target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to erase text for.
 * 
 * ---
 * 
 * Picture: Refresh Text
 * - Refreshes the text used for all on-screen pictures.
 * - To be used if any dynamic text codes are updated like \n[x].
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings involving the message system. These settings range from
 * adjust how the Message Window looks to more intricate settings like how
 * some of the default text codes work.
 *
 * ---
 *
 * Message Window
 *
 *   Default Rows:
 *   - Default number of rows to display for the Message Window.
 *
 *   Default Width:
 *   - Default Message Window width in pixels.
 *
 *   Fast Forward Key:
 *   - This is the key used for fast forwarding messages.
 *   - WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 *
 *   Text Delay:
 *   - How many frames to wait between characters drawn?
 *   - Use 0 for instant.
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset Message Window horizontally or vertically.
 *   - Horizontal: Left; Positive: Right
 *   - Veritcal: Negative: Up; Positive: Down
 * 
 *   Stretch Dimmed BG:
 *   - Stretch dimmed window background to fit the whole screen.
 * 
 *   Default Outline Width:
 *   - Changes the default outline width to this many pixels thick.
 * 
 *   Each Message Start:
 *   Each Message End:
 *   - This is text that is added at the start/end of each message.
 *   - You may use text codes.
 *   - Keep in mind that if a message extends to a different page (due to word
 *     wrap, excess lines, etc), that does not mean the starting text will
 *     be added to where the next page begins or the ending text will be added
 *     where the previous page ends.
 *   - Can be used for things like adding "<center>" to the start of each 
 *     message without having to type it every time.
 *
 * ---
 *
 * Name Box Window
 *
 *   Default Color:
 *   - Default color for the Name Box Window's text.
 *
 *   Offset X:
 *   - How much to offset the name box window X by
 *     (as long as it doesn't go offscreen).
 *
 *   Offset Y:
 *   - How much to offset the name box window Y by
 *     (as long as it doesn't go offscreen).
 *
 * ---
 *
 * Choice List Window
 *
 *   Line Height:
 *   - What is the default line height for Show Choices?
 * 
 *   Minimum Choice Width:
 *   - What is the minimum choice width for each choice?
 *   - 96 is the default width.
 *
 *   Max Rows:
 *   - Maximum number of rows to visibly display?
 *
 *   Max Columns:
 *   - Maximum number of columns to visibly display?
 *
 *   Text Alignment:
 *   - Default alignment for Show Choice window.
 *
 * ---
 *
 * Default Text Codes
 *
 *   Relative \PX \PY:
 *   - Make \PX[x] and \PY[x] adjust relative starting position than
 *     exact coordinates.
 *
 *   \{ Maximum:
 *   - Determine the maximum size that \{ can reach.
 *
 *   \} Minimum:
 *   - Determine the minimum size that \} can reach.
 *
 *   \{ Change \}
 *   - How much does \{ and \} change font size by?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto-Color Settings
 * ============================================================================
 *
 * For certain windows such as the Message Window, Help Window, and Choice
 * Window, Auto-Color is enabled to automatically highlight and color certain
 * database entries, keywords, and just about anything you, the game dev, wants
 * to be automatically colored. This is done to avoid typing out \C[6]Jack\C[0]
 * every time Jack's name is written out as it will be automatically colored in
 * those specific windows.
 *
 * The Plugin Parameters will give you full reign over which database entries
 * and keywords you want to be automatically colored as long as they follow a
 * few rules:
 * 
 * -----------------
 * Auto-Color Rules:
 * -----------------
 *
 * 1. Database names and keywords are case sensitive.
 *    This means if "Potion" is a marked keyword, typing out "potion" will not
 *    prompt the auto-color to highlight "potion". You must add the lowercase
 *    version of the word into the keyword list if you want it to count.
 *
 * 2. Database names and keywords are exact size (for Roman languages)
 *    This means if "Potion" is a marked keyword, typing out "potions" will not
 *    prompt the auto-color to highlight "potions". You must type out all of
 *    the variations of the words you want affected into the keyword list to
 *    prompt the auto-color highlight.
 * 
 *    This does not apply to Japanese, Korean, or Chinese languages.
 *
 * 3. Possessive cases and other language symbols aren't counted.
 *    Symbols such as periods, commas, quotes, parentheses, and similar symbols
 *    do no count towards Rule 2. This means if "Potion" is a marked keyword,
 *    the typing out "(Potion)" will still highlight the "Potion" part of the
 *    word according to the auto-color.
 * 
 * 4. Names with special characters like !, ?, [, ], etc. will be ignored.
 *    These cause conflicts with how auto-colors are detected.
 *
 * ---
 *
 * Database Highlighting
 *
 *   Actors:
 *   Classes:
 *   Skills:
 *   Items:
 *   Weapons:
 *   Armors:
 *   Enemies:
 *   States:
 *   - Any usage of a the selected database entry's name is auto-colored with
 *     the text code number.
 *   - Use 0 to not auto-color.
 *
 * ---
 *
 * Word Highlighting
 *
 *   \C[x]: Color
 *   - These are lists of all the words that will be automatically colored with
 *     the x text color.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Font Manager
 * ============================================================================
 *
 * Custom fonts that aren't the message or number fonts cannot be used without
 * registration. If you try to use custom fonts in RPG Maker MZ without
 * registering their font family first, you will find out that they will not
 * work. These plugin parameters allow you to register your game's custom fonts
 * here.
 * 
 * ---
 * 
 * Settings:
 * 
 *   Font Family:
 *   - This will be what's used by RPG Maker MZ and plugins to reference this
 *     specific font.
 *   - NO filename extensions!
 * 
 *   Filename:
 *   - What is the filename of the custom font you would like to use?
 *   - Located inside the project's "fonts" folder.
 * 
 * ---
 * 
 * Examples:
 * 
 *   Font Family: WildWords
 *   Filename: WildWords-Regular.ttf
 * 
 * How you would use this in other plugins as a preface to the font face or
 * font family would be to use "WildWords" as the font face/family name. Then
 * RPG Maker MZ will use its own innate FontManager to refer that to the
 * "WildWords-Regular.ttf" file found in the game's "fonts" folder.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Actions
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * performing actions. These actions can be done through each JavaScript or by
 * a common event (if it is used in the Message Window). Adequate knowledge of
 * both is recommended before attempting to modify and/or add new Text Code
 * Actions to the Plugin Parameters.
 *
 * Each of the Text Code Actions are formatted in such a way:
 *
 * ---
 *
 * Text Code Action
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   Common Event:
 *   - Select a common event to run when this text code is used in a message.
 *
 *   JS: Action:
 *   - JavaScript code used to perform an action when this text code appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Replacements
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * replacing the text codes with text data. Text data can be replaced with
 * an exact exchange of text or dynamically through JavaScript. Adding a new
 * Text Code Replacement is done through the Plugin Parameters.
 *
 * Each of the Text Code Replacements are formatted in such a way:
 *
 * ---
 *
 * Text Code Replacement
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   STR: Text:
 *   - The text that will appear if this match appears.
 *     If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     match appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Macros
 * ============================================================================
 *
 * Text macros are used in similar fashion to text codes replacements to
 * replace themselves with text data. The primary difference is that macros are
 * made in a different format with no conditional argument modifiers (ie the
 * [x] that follows a text code).
 *
 * To use a text macro, type in the matching keyword between two [brackets] and
 * it will be replaced by the string data or run the JavaScript code found in
 * the Plugin Parameter settings.
 *
 * For example, if you have the text macro "Leader", made to return the party
 * leader's name, you can type in [Leader] in the Message Window and it will be
 * replaced with the party leader's name. The output can also output text codes
 * into the resulting text.
 * 
 * This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 * Use the method stated before with the brackets to [MacroName] instead.
 *
 * Each of the Text Macros are formatted in such a way:
 *
 * ---
 *
 * Text Macro
 *
 *   Match:
 *   - This is what needs to be matched in order for this macro to work.
 *   - In [Leader], this would be the 'Leader' text.
 *
 *   STR: Text:
 *   - The replacement text that will appear from the macro.
 *   - If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     macro appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Language Settings
 * ============================================================================
 *
 * The "Text Language" feature allows your players to switch between different
 * languages for your game to allow people from around the globe to enjoy what
 * story you have to tell.
 * 
 * Disclaimers: This is not an automatic translation tool. Translations made
 * through the "Text Language" feature of the VisuStella MZ Message Core
 * will require manual input by the game developer.
 * 
 * See the "Text Language Information" for more information.
 *
 * ---
 * 
 * Main Settings:
 * 
 *   Enable Switching?:
 *   - Enable language switching settings for this plugin?
 * 
 *   CSV Filename:
 *   - What is the filename of the CSV file to read from?
 *   - Located within the project's /data/ folder.
 * 
 * ---
 * 
 * Options:
 * 
 *   Add Option?:
 *   - Add the 'Text Language' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
 * 
 * ---
 * 
 * Languages:
 * 
 *   Default Language:
 *   - What is the default language used for this game?
 * 
 *   Supported Languages:
 *   - What are all the supported languages supported by this game's
 *     script?
 *   - Remove any that aren't translated.
 * 
 * ---
 * 
 * Language Names:
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - How does this language appear in the in-game options?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Speed Option Settings
 * ============================================================================
 *
 * Modern RPG's on the market have the option to adjust the message speed rate
 * for players. These Plugin Parameters allow you to add that option to the
 * Options Menu as well.
 *
 * ---
 *
 * Text Speed Option Settings
 *
 *   Add Option?:
 *   - Add the 'Text Speed' option to the Options menu?
 *
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 *
 *   Option Name:
 *   - Command name of the option.
 *
 *   Default Value:
 *   - 1 - 10, slowest to fastest.
 *   - 11 is instant value.
 *
 *   Instant Speed:
 *   - Text to show "instant" text.
 *
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Word Wrap Settings
 * ============================================================================
 *
 * Word wrap is a property that will cause any overflowing text to wrap around
 * and move into the next line. This property can only be enabled inside text
 * that accept text codes, such as the Message Window and Help Window. However,
 * word wrap is disabled for the Choice Window due to the nature of the Choice
 * Window's base properties.
 *
 * Word wrap can be enabled or disabled in three ways. One is by using the text
 * code <WordWrap> to enable it or </WordWrap> to disable it. The second method
 * is by enabling it with the Plugin Command: 'Message: Properties'. The third
 * method is by enabling it by default with the Plugin Parameters.
 * 
 * Word wrap only supports left-to-right alphabetical languages that utilize
 * spaces.
 * 
 * Word Wrap also cannot be used together with <left>, <center>, or <right> and
 * will disable itself if text alignment text codes are detected.
 * 
 * As of the v1.44 update, some Asian languages such as Chinese and Japanese
 * are now supported for word wrap. Korean language is only supported if spaces
 * are used.
 * 
 * ---
 *
 * Enable Word Wrap
 *
 *   Message Window:
 *   - Automatically enable Word Wrap for this window?
 *
 *   Help Window:
 *   - Automatically enable Word Wrap for this window?
 *
 * ---
 *
 * Rules
 *
 *   Link Break -> Space:
 *   - Convert manually placed (non tagged) line breaks with spaces?
 *   - Line breaks must be inserted using the <br> text code.
 *
 *   Tight Wrap:
 *   - If a face graphic is present in a message, word wrap will be tighter.
 * 
 *   End Padding:
 *   - Add extra padding to your window to make text wrap further away from the
 *     end of the window.
 *   - This will default to 0.
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
 * Version 1.50: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text codes added by Irina:
 * *** <Caps> </Caps>
 * *** <Upper> </Upper>
 * *** <Lower> </Lower>
 * **** Auto-text case textcodes will automatically adjust text inserted
 *      between them to respectively be completely capitalized, first-letter
 *      capitalized, or completely lowercase.
 * **** More information in the help file.
 * *** <Alt> </Alt>
 * **** Alternates between uppercase and lowercase for letters.
 * *** <Chaos> </Chaos>
 * **** Randomly uses uppercase and lowercase for letters.
 * 
 * 
 * Version 1.49: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a problem where using text codes to get database object names did
 *    not apply translated text.
 * * Documentation Update!
 * ** Added note for Message Window Only text code effects:
 * *** These text codes only work with the Message Window. Keep in mind that
 *     even if some windows might look like the Message Window, it may not
 *     necessarily be one.
 * * Feature Update!
 * ** Added a failsafe for when Choice List Window doesn't have any viable
 *    options (due to being hidden or disabled). Update made by Irina.
 * ** Added a failsafe for Language CSV when empty rows are added.
 * ** Updated some default Text Code actions in order to make sure they're only
 *    used by the Message Window and not anything else. Update made by Irina.
 * 
 * Version 1.48: April 18, 2024
 * * Bug Fixes!
 * ** Added fail safe for help description checks parsing from objects without
 *    help descriptions normally. Fix made by Irina.
 * 
 * Version 1.47: February 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > Custom Font Manager
 * **** Register custom fonts here.
 * **** Custom fonts that aren't the message or number fonts cannot be used
 *      without registration.
 * **** See help file for more information.
 * 
 * Version 1.46: January 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where script calls used to create message choices would not
 *    work properly. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Text Language Switching added by Irina:
 * *** Plugin Parameters > Text Language Settings
 * **** The "Text Language" feature allows your players to switch between
 *      different languages for your game to allow people from around the globe
 *      to enjoy what story you have to tell.
 * **** Disclaimers: This is not an automatic translation tool. Translations
 *      made through the "Text Language" feature of the VisuStella MZ Message
 *      Core will require manual input by the game developer.
 * **** Read more about it in detail within the "Text Language Information"
 *      section in the help file.
 * ** New Plugin Parameter added by Irina:
 * *** Choices: Distance
 * **** Change the distance from choice window to the message window.
 * ** New parameter added to Plugin Command "Choices: Properties" by Irina:
 * *** Minimum Choice Width
 * **** What is the minimum width size for each choice?
 * ** New Plugin Parameter for "Message Window" added by Irina:
 * *** Parameters > Message Window: Choice List Window> Minimum Choice Width
 * **** What is the minimum width size for each choice?
 * ** New Text Codes for Choice Window added by Irina:
 * *** <BgImg: filename> and variants
 * *** <FgImg: filename> and variants
 * **** These text codes allow adding a background or foreground image to a
 *      choice rectangle in stretched/scaled size.
 * 
 * Version 1.45: December 14, 2023
 * * Bug Fixes!
 * ** Punctuation was, for some reason, excluded when using Wordwrap with
 *    Japanese and Chinese languages. This should be fixed now. Fixed by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added clarity to the <left>, <center>, and <right> being unable to be
 *    used together with word wrap.
 * *** Word Wrap also cannot be used together with <left>, <center>, or <right>
 *     and will disable itself if text alignment text codes are detected.
 * * Feature Update!
 * ** Wordwrap <br> now works properly with Japanese and Chinese languages.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > General Settings > Each Message Start
 * *** Plugin Parameters > General Settings > Each Message End
 * **** This is text that is added at the start/end of each message.
 * **** Keep in mind that if a message extends to a different page (due to word
 *      wrap, excess lines, etc), that does not mean the starting text will
 *      be added to where the next page begins or the ending text will be added
 *      where the previous page ends.
 * **** Can be used for things like adding "<center>" to the start of each 
 *      message without having to type it every time.
 * 
 * Version 1.44: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated "Plugin Parameters: Word Wrap Settings" section:
 * *** As of the v1.44 update, some Asian languages such as Chinese and
 *     Japanese are now supported for word wrap. Korean language is only
 *     supported if spaces are used.
 * * Feature Update!
 * ** Word Wrap is now supported for Japanese and Chinese languages.
 * ** Feature updated by Irina and sponsored by AndyL.
 * * New Features!
 * ** New text codes added by Irina for "Show Choices" event command.
 * *** <Shuffle>
 * **** Shuffles the order of all choices. Any cancel shortcuts other than
 *      "Branch" will be undone.
 * *** <Shuffle: x>
 * **** Shuffles the order of all choices and only x number of them appear. Any
 *      cancel shortcuts other than "Branch" will be undone. Hidden choices do
 *      not count towards x number.
 * 
 * Version 1.43: April 13, 2023
 * * Compatibility Update!
 * ** Fixed incompatibilities with auto message positioning with the Map Zoom
 *    plugin. Update made by Irina.
 * 
 * Version 1.42: March 16, 2023
 * * Bug Fixes!
 * ** Fixed some text codes that would capture way too much data than intended.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text code added by Irina for Show Choice Window only:
 * *** <Help> text </Help>
 * **** Makes a help window appear and have it show 'text' in its contents.
 * **** The help window will disappear if no text is displayed.
 * ** New Plugin Commands added by Arisu:
 * *** Select: Weapon
 * *** Select: Armor
 * *** Select: Skill
 * **** Opens the Event Select Item Window to let the player pick a weapon,
 *      armor, or skill to choose from. The selected object will have its ID
 *      recorded in a variable. These can be opened while the Message Window is
 *      opened just like the event "Select Item".
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text codes added by Irina!
 * *** For the Choice Window Only text codes:
 * **** <BgColor: x>
 * **** <BgColor: x, y>
 * **** <BgColor: #rrggbb>
 * **** <BgColor: #rrggbb, #rrggbb>
 * ***** Requires VisuMZ_0_CoreEngine! Sets the background color of this choice
 *       to 'x' text color, 'x' to 'y' gradient text color, or using '#rrggbb'
 *       hex color values.
 * 
 * Version 1.40: November 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New text code added by Irina:
 * *** <RNG> text1 | text2 | text3 </RNG>
 * **** Using the above text code format in a Show Message entry, you can get a
 *      random result out of the various inserted texts. Use "|" (without
 *      quotes) as a separator between text entries. You can have unlimited
 *      entries. The result will have any excess white space trimmed.
 * **** This text code cannot be inserted into a macro and parsed properly.
 * 
 * Version 1.39: September 22, 2022
 * * Bug Fixes!
 * ** Macros now support quotes (' and ") in the STR: Text. Fix made by Irina.
 * 
 * Version 1.38: July 21, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.37: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Picture texts with \v[x] text codes are now updated automatically.
 * ** This is the only dynamic text code that updates this way for optimization
 *    purposes and to prevent overabundant CPU usage.
 * ** Everything else will require the new Plugin Command.
 * * New Features!
 * ** New Plugin Command added by Irina:
 * *** Picture: Refresh Text
 * **** Refreshes the text used for all on-screen pictures.
 * **** To be used if any dynamic text codes are updated like \n[x].
 * * New Features!
 * ** New text codes added by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** <Up Button>, <Left Button>, <Right Button>, <Down Button>
 * *** <Ok Button>, <Cancel Button>, <Shift Button>, <Menu Button>
 * *** <Page Up Button>, <Page Down Button>
 * **** Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * Version 1.36: April 7, 2022
 * * Feature Update!
 * ** Auto size related text codes should now automatically disable word wrap
 *    effects as they should have before. Update made by Irina.
 * 
 * Version 1.35: March 31, 2022
 * * Bug Fixes!
 * ** Bug fixed where if autosizing is used and it goes from a message that is
 *    shorter to longer, an extra key press is needed. This should no longer be
 *    the case. Fix made by Irina.
 * 
 * Version 1.34: February 24, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Choice Window Text Codes made by Irina and sponsored by AndyL:
 * *** <Choice Width: x>
 * **** Sets the minimum text area width to x. Applies to whole choice window.
 * *** <Choice Indent: x>
 * **** Sets the indent to x value. Applies to current choice selection only.
 * 
 * Version 1.33: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Picture: Change Text
 * **** This new plugin command allows you to place text on top of pictures
 *      (usually in the form of empty pages or cards) to function as stationary
 *      or other uses. Text codes are allowed.
 * **** Text codes are supported.
 * *** Picture: Erase Text
 * **** Removes text from target picture(s).
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Extra Show Choice notetags will now be properly hidden. Fix by Irina.
 * * Compatibility Update!
 * ** Self Switches are now made compatible with work with Show Choices. Update
 *    made by Irina.
 * 
 * Version 1.31: December 9, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New hard-coded message-only text code added by Irina:
 * *** <Next Page>
 * **** Ends the current message page at this line. This is used for messages
 *      when rows are at 5 or above and the message lines don't match the
 *      amount. This is used to prevent grabbing message windows from following
 *      message events. Any lines following <Next Page> in the same message
 *      event will be ignored.
 * 
 * Version 1.30: November 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for removed "Center Window X" bit.
 * * Feature Update!
 * ** Message: Properties now has "Center Window X?" removed
 * *** Changes will now be automatically centered.
 * *** This change is made for the new Plugin Command added for offsets which
 *     more or less replaces them.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Puddor:
 * *** Message: X/Y Offsets
 * **** Change the X and Y Offsets of the Message Window.
 * **** The offset value(s) will be saved and stored.
 * ** New Plugin Parameters added by Irina and sponsored by Puddor:
 * *** Plugin Parameters > General Settings > Message Window > Offset X
 * *** Plugin Parameters > General Settings > Message Window > Offset Y
 * **** Allows you to offset the horizontal and/or vertical positions of the
 *      message window accordingly.
 * ** New Text Codes added by Irina and sponsored by Puddor:
 * *** <Offset: +x, +y>
 * *** <Offset: -x, -y>
 * *** <Offset: +x, -y>
 * *** <Offset: -x, +y>
 * **** Quickly adjust the message window offset values to the x and y amounts.
 *      The values will replace the previous offset settings if there were any.
 * 
 * Version 1.29: October 21, 2021
 * * Feature Update
 * ** Word Wrap flags are now properly adjusted when converting macros and
 *    adding bypasses towards regular messages. Update by Irina.
 * 
 * Version 1.28: October 14, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.27: October 7, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** Macros should now work properly with any \x<n> based text codes.
 *    Fix made by Irina.
 * 
 * Version 1.25: August 27, 2021
 * * Feature Update!
 * ** Macros should now work with the <WordWrap> text code. Update by Irina.
 * 
 * Version 1.24: August 20, 2021
 * * Feature Update!
 * ** Macros should now work with window placement and resize options.
 *    Update made by Irina.
 * ** Macros should now work with choice-related enable and visibility options.
 *    Update made by Irina.
 * 
 * Version 1.23: July 16, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Word Wrap Settings > End Padding
 * **** Add extra padding to your window to make text wrap further away from
 *      the end of the window. This will default to 0.
 * 
 * Version 1.22: July 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Text Codes added by Irina and sponsored by AndyL:
 * *** <Current Battle Target>
 * *** <Current Battle User>
 * **** Replaces the text code with the current target or current user's name
 *      in-battle. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * *** <Current Battle Action>
 * *** <Current Battle Action Name>
 * **** Replaces the text code with the current battle action's name with the
 *      icon or without it respectively. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * 
 * Version 1.21: June 4, 2021
 * * Documentation Update!
 * ** Added extra note to the new <Position: x, y, width, height> text codes
 *    that they do not work with Word Wrap.
 * * Feature Update!
 * ** Added fail safe for preventing Common Events that don't exist from being
 *    ran at all by the Message Window. Added by Arisu.
 * 
 * Version 1.20: May 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added additional clarity for \WindowMoveTo<?> and \WindowMoveBy<?> and
 *    \WindowReset text codes with "Note 2".
 * *** Replace '?' with the following format: targetX, targetY, targetWidth,
 *     targetHeight, duration, easingType. Only targetX and targetY are
 *     required arguments. These will only alter the window dimensions when the
 *     text has arrived at that point. They will not alter the window
 *     preemptively. This is not used as a window positioner. Use the
 *     <Position: x, y, width, height> text code for that.
 * * New Features!
 * ** New hard-coded text codes added for Message Window Only. Added by Irina.
 * *** <Position: x, y, width, height>
 * *** <Coordinates: x, y>
 * *** <Dimensions: width, height>
 * 
 * Version 1.19: May 14, 2021
 * * Feature Updates!
 * ** <br> line breaks can now be used by Show Choices. Make sure that there is
 *    enough room to contain the text through Plugin Commands. Update by Irina.
 * 
 * Version 1.18: April 30, 2021
 * * Bug Fixes!
 * ** Moving windows with 0 duration via text code should now instantly move
 *    the windows to the desired location with no delay. Fix made by Olivia.
 * 
 * Version 1.17: April 9, 2021
 * * Feature Update!
 * ** <Auto> text codes for message windows will round up calculations for the
 *    message width to the nearest even number for better calculations.
 * 
 * Version 1.16: April 2, 2021
 * * Bug Fixes!
 * ** \CommonEvent[x] text code will no longer run upon message window size
 *    calculation. Fix made by Arisu.
 * * Documentation Update!
 * ** Added further clarification for "Text Macros" section.
 * *** This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 *     Use the method stated before with the brackets to [MacroName] instead.
 * 
 * Version 1.15: March 5, 2021
 * * Bug Fixes!
 * ** Hidden choices by switches will no longer count towards the maximum line
 *    count for Show Choice options. Fix made by Irina.
 * 
 * Version 1.14: February 12, 2021
 * * Bug Fixes!
 * ** Auto positioned messages in battle will no longer cover the battler in
 *    question. Fix made by Irina.
 * 
 * Version 1.13: February 5, 2021
 * * Bug Fixes!
 * ** Choice List Window with a dimmed background should now have a more
 *    consistent sized dim sprite. Fix made by Irina.
 * 
 * Version 1.12: January 22, 2021
 * * Feature Update!
 * ** Name Box Window Default Color is now disabled by default to 0 because
 *    users do not understand why their names are showing up yellow and did not
 *    bother reading the documentation. If users want this feature turned on,
 *    they will have to do it manually from now on. Update made by Irina.
 * 
 * Version 1.11: January 15, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.10: January 8, 2021
 * * Bug Fixes!
 * ** <Auto Actor: x> and <Auto Party: x> text codes should now work properly.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Auto Color Plugin Parameters now have their default settings set to 0.
 *    This is due to an influx of "bug reports" from users who do not
 *    understand how this feature works, and the VisuStella team has decided it
 *    is better for the feature to default to an inactive state until users
 *    decide to search and utilize it themselves. Update made by Irina.
 * 
 * Version 1.09: January 1, 2021
 * * Feature Update!
 * ** Auto-color no longer applies to database names that are only numbers.
 *    Auto-color entries that are only numbers will also be ignored. This is to
 *    prevent breaking the text code parsing. Update made by Yanfly.
 * 
 * Version 1.08: November 15, 2020
 * * Documentation Update!
 * ** Some text codes left for the Name Box Window have been accidentally left
 *    out. These text codes allow for the positioning of the Name Box Window.
 *    Also, added to this section are the \NormalBG, \DimBG, and \TransparentBG
 *    text codes since people have been asking for how to change the name box
 *    window's background, but have skimmed over those text codes in different
 *    sections of the help file.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: November 8, 2020
 * * Bug Fixes!
 * ** When using auto size functions, the message pause symbol will no longer
 *    appear semi-transparent the whole time. Fix made by Irina.
 * 
 * Version 1.06: October 25, 2020
 * * Documentation Update!
 * ** Added a warning message to the Fast Forward Key plugin parameter:
 * *** WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 * ** Updated help file for new features.
 * * Feature Update!
 * ** The default Fast Forward Key setting has now been changed from "Shift" to
 *    "Page Down". Change made by Yanfly
 * * New Feature!
 * ** New Plugin Parameter added by Irina.
 * *** Plugin Parameters > General > Default Outline Width
 * **** Changes the default outline width to this many pixels thick.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Setting an actor's autocolor will now disable it from \N[x] and \P[x]
 *    text codes. Fix made by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** Auto Position text codes not place positions properly if the screen width
 *    and height differ from the box width and box height. Fix made by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Word wrap no longer affects specific battle messages. Fix made by Irina.
 * ** Word wrap now updates properly after using the 'Message: Properties'
 *    Plugin Command. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Autoplacement of the name box window now takes its offset Y setting into
 *    account before sending it to the bottom of the message window. Fix made
 *    by Yanfly.
 * ** Added automatic feature setting to turn off word wrap when using the
 *    auto-size and auto-position text codes. This is because the auto-size and
 *    auto-position effects don't work properly with Word Wrap based on how
 *    they both clash when adjusting the window settings. Fix made by Irina.
 * ** New message pages after auto-sizing no longer put out empty messages.
 *    Fix made by Irina and Shiro.
 * * Documentation Update!
 * ** Extended the note for auto-size and auto-position text codes to include
 *    that they do not work with Word Wrap. Added by Irina.
 * 
 * Version 1.02: August 30, 2020
 * * New Features!
 * ** Added new hard-coded text codes for auto-sizing and auto-positioning:
 * *** <Auto>, <Auto Width>, <Auto Height>
 * *** <Auto Actor: x>, <Auto Party: x>, <Auto Enemy: x>
 * *** <Auto Player>, <Auto Actor: x>, <Auto Party: x>, <Auto Event: x>
 * **** New features added by Irina.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** </Wordwrap> now works.
 * ** \ActorFace[x] text code now fixed.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Text Code Replacements > ActorFace >
 *     JS: Text > and changing "$gameActors.actor(1)" to
 *     "$gameActors.actor(actorId)"
 * ** Actors with empty names would cause auto hightlight problems. Fixed!
 * ** Auto-colors now ignore names with special characters like !, ?, [, ], and
 *    so on.
 * ** Line break spacing fixed.
 * * New Features!
 * ** Wordwrap now works with <left>, <center> and <right> alignment tags.
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
 * @command MessageWindowProperties
 * @text Message: Properties
 * @desc Change the various properties of the Message Window.
 *
 * @arg Rows:num
 * @text Rows
 * @type number
 * @min 0
 * @desc Change the number of Message Window rows.
 * Leave at 0 to keep it unchanged.
 * @default 4
 *
 * @arg Width:num
 * @text Width
 * @type number
 * @min 0
 * @desc Change the Message Window width in pixels.
 * Leave at 0 to keep it unchanged.
 * @default 816
 *
 * @arg WordWrap:str
 * @text Word Wrap
 * @type select
 * @option No Change
 * @value No Change
 * @option Enable
 * @value true
 * @option Disable
 * @value false
 * @desc Enable or disable Word Wrap for the Message Window?
 * @default No Change
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageWindowXyOffsets
 * @text Message: X/Y Offsets
 * @desc Change the X and Y Offsets of the Message Window.
 * The offset value(s) will be saved and stored.
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Choice
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowDistance
 * @text Choices: Distance
 * @desc Change the distance from choice window to the message window.
 *
 * @arg Distance:eval
 * @text Distance
 * @desc Change distance between the choice and message windows.
 * Default distance is 0. Use negative to center align.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowProperties
 * @text Choices: Properties
 * @desc Change the properties found in the Show Choices event command.
 *
 * @arg LineHeight:num
 * @text Choice Line Height
 * @type number
 * @min 0
 * @desc Change the line height for the show choices.
 * Leave at 0 to keep this unchanged.
 * @default 36
 *
 * @arg MinWidth:num
 * @text Minimum Choice Width
 * @type number
 * @min 0
 * @desc What is the minimum width size for each choice?
 * 96 is the default width.
 * @default 96
 *
 * @arg MaxRows:num
 * @text Max Rows
 * @type number
 * @min 0
 * @desc Maximum number of choice rows to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 8
 *
 * @arg MaxCols:num
 * @text Max Columns
 * @type number
 * @min 0
 * @desc Maximum number of choice columns to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 1
 *
 * @arg TextAlign:str
 * @text Text Alignment
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Text alignment for Show Choice window.
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Select
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectWeapon
 * @text Select: Weapon
 * @desc Opens the Event Select Item Window to let the player
 * pick a weapon to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected weapon. It will result in 0 otherwise.
 * @default 1
 *
 * @arg WeaponTypeID:num
 * @text Weapon Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the weapons to a specific weapon type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectArmor
 * @text Select: Armor
 * @desc Opens the Event Select Item Window to let the player
 * pick an armor to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected armor. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ArmorTypeID:num
 * @text Armor Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific armor type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @arg EquipTypeID:num
 * @text Equip Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific equip type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectSkill
 * @text Select: Skill
 * @desc Opens the Event Select Item Window to let the player
 * pick a skill to choose from. Requires VisuMZ_1_SkillsStatesCore!
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected skill. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select an actor to get the skill list from.
 * Use 0 to select from the party leader.
 * @default 0
 *
 * @arg SkillTypeID:num
 * @text Skill Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the skills to a specific skill type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextChange
 * @text Picture: Change Text
 * @desc Change text for target picture(s) to show.
 * You may use text codes.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID(s) of the picture(s) to set text to.
 * @default ["1"]
 *
 * @arg Padding:eval
 * @text Padding
 * @parent PictureIDs:arraynum
 * @desc How much padding from the sides should there be?
 * @default $gameSystem.windowPadding()
 * 
 * @arg Text
 *
 * @arg upperleft:json
 * @text Upper Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg up:json
 * @text Upper Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg upperright:json
 * @text Upper Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg left:json
 * @text Middle Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg center:json
 * @text Middle Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg right:json
 * @text Middle Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerleft:json
 * @text Lower Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg down:json
 * @text Lower Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerright:json
 * @text Lower Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextErase
 * @text Picture: Erase Text
 * @desc Erase all text for target picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID(s) of the picture(s) to erase text for.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextRefresh
 * @text Picture: Refresh Text
 * @desc Refreshes the text used for all on-screen pictures.
 * To be used if any dynamic text codes are updated like \n[x].
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
 * @param MessageCore
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
 * @desc General settings involving the message system.
 * @default {"MessageWindow":"","MessageRows:num":"4","MessageWidth:num":"816","FastForwardKey:str":"pagedown","MessageTextDelay:num":"1","StretchDimmedBg:eval":"true","DefaultOutlineWidth:num":"3","NameBoxWindow":"","NameBoxWindowDefaultColor:num":"0","NameBoxWindowOffsetX:num":"0","NameBoxWindowOffsetY:num":"0","ChoiceListWindow":"","ChoiceWindowLineHeight:num":"36","ChoiceWindowMaxRows:num":"8","ChoiceWindowMaxCols:num":"1","ChoiceWindowTextAlign:str":"default","DefaultTextCodes":"","RelativePXPY:eval":"true","FontBiggerCap:eval":"108","FontSmallerCap:eval":"12","FontChangeValue:eval":"12"}
 *
 * @param AutoColor:struct
 * @text Auto-Color Settings
 * @type struct<AutoColor>
 * @desc Automatically color certain keywords a specific way.
 * @default {"DatabaseHighlighting":"","Actors:str":"0","Classes:str":"0","Skills:str":"0","Items:str":"0","Weapons:str":"0","Armors:str":"0","Enemies:str":"0","States:str":"0","WordHighlighting":"","TextColor1:arraystr":"[]","TextColor2:arraystr":"[]","TextColor3:arraystr":"[]","TextColor4:arraystr":"[]","TextColor5:arraystr":"[]","TextColor6:arraystr":"[]","TextColor7:arraystr":"[]","TextColor8:arraystr":"[]","TextColor9:arraystr":"[]","TextColor10:arraystr":"[]","TextColor11:arraystr":"[]","TextColor12:arraystr":"[]","TextColor13:arraystr":"[]","TextColor14:arraystr":"[]","TextColor15:arraystr":"[]","TextColor16:arraystr":"[]","TextColor17:arraystr":"[]","TextColor18:arraystr":"[]","TextColor19:arraystr":"[]","TextColor20:arraystr":"[]","TextColor21:arraystr":"[]","TextColor22:arraystr":"[]","TextColor23:arraystr":"[]","TextColor24:arraystr":"[]","TextColor25:arraystr":"[]","TextColor26:arraystr":"[]","TextColor27:arraystr":"[]","TextColor28:arraystr":"[]","TextColor29:arraystr":"[]","TextColor30:arraystr":"[]","TextColor31:arraystr":"[]"}
 *
 * @param CustomFonts:arraystruct
 * @text Custom Font Manager
 * @type struct<CustomFont>[]
 * @desc Register custom fonts here. Custom fonts that aren't the
 * message or number fonts cannot be used without this.
 * @default []
 *
 * @param TextCodeActions:arraystruct
 * @text Text Code Actions
 * @type struct<TextCodeAction>[]
 * @desc Text codes that perform actions.
 * @default ["{\"Match:str\":\"ChangeFace\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing) {\\\\n        const filename = data[0].trim();\\\\n        const index = parseInt(data[1] || '0');\\\\n        $gameMessage.setFaceImage(filename, index);\\\\n        this.loadMessageFace();\\\\n        const rtl = $gameMessage.isRTL();\\\\n        const width = ImageManager.faceWidth;\\\\n        const height = this.innerHeight;\\\\n        const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n        this.contents.clearRect(x, 0, width, height);\\\\n        this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"FaceIndex\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing) {\\\\n        const filename = $gameMessage.faceName();\\\\n        $gameMessage.setFaceImage(filename, index);\\\\n        this.loadMessageFace();\\\\n        const rtl = $gameMessage.isRTL();\\\\n        const width = ImageManager.faceWidth;\\\\n        const height = this.innerHeight;\\\\n        const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n        this.contents.clearRect(x, 0, width, height);\\\\n        this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"TextDelay\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst delay = this.obtainEscapeParam(textState);\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing && this.constructor === Window_Message) {\\\\n        this.setTextDelay(delay);\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"NormalBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(0);\\\\n}\\\"\"}","{\"Match:str\":\"DimBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(1);\\\\n}\\\"\"}","{\"Match:str\":\"TransparentBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(2);\\\\n}\\\"\"}","{\"Match:str\":\"FontChange\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst fontName = this.obtainEscapeString(textState);\\\\nthis.contents.fontFace = fontName;\\\"\"}","{\"Match:str\":\"ResetFont\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetFontSettings();\\\"\"}","{\"Match:str\":\"ResetColor\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetTextColor();\\\"\"}","{\"Match:str\":\"HexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeTextColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineColor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst colorIndex = this.obtainEscapeParam(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(ColorManager.textColor(colorIndex));\\\\n}\\\"\"}","{\"Match:str\":\"OutlineHexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineWidth\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst width = this.obtainEscapeParam(textState);\\\\nif (textState.drawing) {\\\\n    this.contents.outlineWidth = width;\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveTo\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : this.x;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : this.y;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : this.width;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : this.height;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveTo(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveBy\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : 0;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : 0;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : 0;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : 0;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveBy(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowReset\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    const frames = 20;\\\\n    const easingType = 0;\\\\n    this.resetRect(frames, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"heart\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"3\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\"\"}"]
 *
 * @param TextCodeReplace:arraystruct
 * @text Text Code Replacements
 * @type struct<TextCodeReplace>[]
 * @desc Text codes that replace themselves with text.
 * @default ["{\"Match:str\":\"ActorFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const actorId = parseInt(arguments[1]);\\\\nconst actor = $gameActors.actor(actorId);\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"PartyFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const index = parseInt(arguments[1]) - 1;\\\\nconst actor = $gameParty.members()[index];\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"Class\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ClassIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ClassName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Skill\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"SkillIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"SkillName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Item\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ItemName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Weapon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"WeaponName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Armor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ArmorName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"State\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"StateIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"StateName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"LastGainObj\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = true;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjIcon\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectIcon();\\\"\"}","{\"Match:str\":\"LastGainObjName\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = false;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjQuantity\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectQuantity();\\\"\"}","{\"Match:str\":\"Enemy\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"EnemyName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Troop\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMember\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMemberName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}"]
 *
 * @param TextMacros:arraystruct
 * @text Text Code Macros
 * @type struct<TextMacro>[]
 * @desc Macros that are used to quickly write batches of text.
 * Format style: [MacroName]
 * @default ["{\"Match:str\":\"Example Macro\",\"TextStr:str\":\"This is the text that will be displayed when you type [Example Macro].\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}","{\"Match:str\":\"Leader\",\"TextStr:str\":\"\\\\P[1]\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}"]
 *
 * @param Localization:struct
 * @text Text Language Settings
 * @type struct<Localization>
 * @desc Text Language settings for this plugin.
 * @default {"Main":"","Enable:eval":"false","CsvFilename:str":"Languages.csv","Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Language","Localized":"","DefaultLocale:str":"English","Languages:arraystr":"[\"Bengali\",\"Chinese(Simplified)\",\"Chinese(Traditional)\",\"Czech\",\"Danish\",\"Dutch\",\"English\",\"Finnish\",\"French\",\"German\",\"Greek\",\"Hindi\",\"Hungarian\",\"Indonesian\",\"Italian\",\"Japanese\",\"Korean\",\"Norwegian\",\"Polish\",\"Portuguese\",\"Romanian\",\"Russian\",\"Slovak\",\"Spanish\",\"Swedish\",\"Tamil\",\"Thai\",\"Turkish\"]","LangNames":"","Bengali:str":"বাংলা","Chinese(Simplified):str":"简体中文","Chinese(Traditional):str":"繁體中文","Czech:str":"Čeština","Danish:str":"Dansk","Dutch:str":"Nederlands","English:str":"English","Finnish:str":"Suomi","French:str":"Français","German:str":"Deutsch","Greek:str":"Ελληνικά","Hindi:str":"हिन्दी","Hungarian:str":"Magyar","Indonesian:str":"Bahasa Indo","Italian:str":"Italiano","Japanese:str":"日本語","Korean:str":"한국어","Norwegian:str":"Norsk","Polish:str":"Polski","Portuguese:str":"Português","Romanian:str":"Română","Russian:str":"Русский","Slovak:str":"Slovenčina","Spanish:str":"Español","Swedish:str":"Svenska","Tamil:str":"தமிழ்","Thai:str":"ไทย","Turkish:str":"Türkçe"}
 *
 * @param TextSpeed:struct
 * @text Text Speed Option Settings
 * @type struct<TextSpeed>
 * @desc Text Speed Options Menu settings.
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Speed","Default:num":"10","Instant:str":"Instant"}
 *
 * @param WordWrap:struct
 * @text Word Wrap Settings
 * @type struct<WordWrap>
 * @desc Settings involving Word Wrap.
 * @default {"EnableWordWrap":"","MessageWindow:eval":"false","HelpWindow:eval":"false","Rules":"","LineBreakSpace:eval":"true","TightWrap:eval":"false","EndPadding:num":"0"}
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
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param MessageWindow
 * @text Message Window
 *
 * @param MessageRows:num
 * @text Default Rows
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default number of rows to display for the Message Window.
 * @default 4
 *
 * @param MessageWidth:num
 * @text Default Width
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default Message Window width in pixels.
 * @default 816
 *
 * @param FastForwardKey:str
 * @text Fast Forward Key
 * @parent MessageWindow
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for fast forwarding messages.
 * @default pagedown
 *
 * @param MessageTextDelay:num
 * @text Text Delay
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc How many frames to wait between characters drawn?
 * Use 0 for instant.
 * @default 1
 *
 * @param MsgWindowOffsetX:num
 * @text Offset X
 * @parent MessageWindow
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @param MsgWindowOffsetY:num
 * @text Offset Y
 * @parent MessageWindow
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @param StretchDimmedBg:eval
 * @text Stretch Dimmed BG
 * @parent MessageWindow
 * @type boolean
 * @on Stretch
 * @off Don't
 * @desc Stretch dimmed window background to fit the whole screen.
 * @default true
 *
 * @param DefaultOutlineWidth:num
 * @text Default Outline Width
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc Changes the default outline width to this many pixels thick.
 * @default 3
 *
 * @param EachMessageStart:json
 * @text Each Message Start
 * @parent MessageWindow
 * @type note
 * @desc This is text that is added at the start of each message.
 * You may use text codes.
 * @default ""
 *
 * @param EachMessageEnd:json
 * @text Each Message End
 * @parent MessageWindow
 * @type note
 * @desc This is text that is added at the end of each message.
 * You may use text codes.
 * @default ""
 *
 * @param NameBoxWindow
 * @text Name Box Window
 *
 * @param NameBoxWindowDefaultColor:num
 * @text Default Color
 * @parent NameBoxWindow
 * @min 0
 * @max 31
 * @desc Default color for the Name Box Window's text.
 * @default 0
 *
 * @param NameBoxWindowOffsetX:num
 * @text Offset X
 * @parent NameBoxWindow
 * @desc How much to offset the name box window X by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param NameBoxWindowOffsetY:num
 * @text Offset Y
 * @parent NameBoxWindow
 * @desc How much to offset the name box window Y by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param ChoiceListWindow
 * @text Choice List Window
 *
 * @param ChoiceWindowLineHeight:num
 * @text Line Height
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc What is the default line height for Show Choices?
 * @default 36
 *
 * @param ChoiceWindowMinWidth:num
 * @text Minimum Choice Width
 * @parent ChoiceListWindow
 * @type number
 * @min 0
 * @desc What is the minimum choice width for each choice?
 * 96 is the default width.
 * @default 96
 *
 * @param ChoiceWindowMaxRows:num
 * @text Max Rows
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of rows to visibly display?
 * @default 8
 *
 * @param ChoiceWindowMaxCols:num
 * @text Max Columns
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of columns to visibly display?
 * @default 1
 *
 * @param ChoiceWindowTextAlign:str
 * @text Text Alignment
 * @parent ChoiceListWindow
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Default alignment for Show Choice window.
 * @default default
 *
 * @param DefaultTextCodes
 * @text Default Text Codes
 *
 * @param RelativePXPY:eval
 * @text Relative \PX \PY
 * @parent DefaultTextCodes
 * @type boolean
 * @on Better
 * @off Normal
 * @desc Make \PX[x] and \PY[x] adjust relative starting position than exact coordinates.
 * @default true
 *
 * @param FontBiggerCap:eval
 * @text \{ Maximum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the maximum size that \{ can reach.
 * @default 108
 *
 * @param FontSmallerCap:eval
 * @text \} Minimum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the minimum size that \} can reach.
 * @default 12
 *
 * @param FontChangeValue:eval
 * @text \{ Change \}
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc How much does \{ and \} change font size by?
 * @default 12
 *
 */
/* ----------------------------------------------------------------------------
 * Auto Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutoColor:
 *
 * @param DatabaseHighlighting
 * @text Database Highlighting
 *
 * @param Actors:str
 * @text Actors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Actor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Classes:str
 * @text Classes
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Class's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Skills:str
 * @text Skills
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Skill's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Items:str
 * @text Items
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Item's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Weapons:str
 * @text Weapons
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Weapon's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Armors:str
 * @text Armors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Armor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Enemies:str
 * @text Enemies
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Enemy's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param States:str
 * @text States
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a State's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param WordHighlighting
 * @text Word Highlighting
 *
 * @param TextColor1:arraystr
 * @text \C[1]: Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor2:arraystr
 * @text \C[2]: Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor3:arraystr
 * @text \C[3]: Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor4:arraystr
 * @text \C[4]: Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor5:arraystr
 * @text \C[5]: Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor6:arraystr
 * @text \C[6]: Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor7:arraystr
 * @text \C[7]: Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor8:arraystr
 * @text \C[8]: Light Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor9:arraystr
 * @text \C[9]: Dark Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor10:arraystr
 * @text \C[10]: Dark Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor11:arraystr
 * @text \C[11]: Dark Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor12:arraystr
 * @text \C[12]: Dark Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor13:arraystr
 * @text \C[13]: Dark Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor14:arraystr
 * @text \C[14]: Solid Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor15:arraystr
 * @text \C[15]: Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor16:arraystr
 * @text \C[16]: System Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor17:arraystr
 * @text \C[17]: Crisis Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor18:arraystr
 * @text \C[18]: Dead Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor19:arraystr
 * @text \C[19]: Outline Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor20:arraystr
 * @text \C[20]: HP Orange 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor21:arraystr
 * @text \C[21]: HP Orange 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor22:arraystr
 * @text \C[22]: MP Blue 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor23:arraystr
 * @text \C[23]: MP Blue 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor24:arraystr
 * @text \C[24]: Param Up Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor25:arraystr
 * @text \C[25]: Param Down Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor26:arraystr
 * @text \C[26]: System Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor27:arraystr
 * @text \C[27]: System Pink
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor28:arraystr
 * @text \C[28]: TP Green 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor29:arraystr
 * @text \C[29]: TP Green 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor30:arraystr
 * @text \C[30]: EXP Purple 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor31:arraystr
 * @text \C[31]: EXP Purple 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Font Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomFont:
 *
 * @param FontFamily:str
 * @text Font Family
 * @desc This will be what's used by RPG Maker MZ and plugins to
 * reference this specific font. NO filename extensions!
 * @default Unnamed
 *
 * @param Filename:str
 * @text Filename
 * @desc What is the filename of the custom font you would like to use?
 * Located inside the project's "fonts" folder.
 * @default Unnamed.ttf
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Actions
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeAction:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param CommonEvent:num
 * @text Common Event
 * @type common_event
 * @desc Select a common event to run when this text code is used in a message.
 * @default 0
 *
 * @param ActionJS:func
 * @text JS: Action
 * @type note
 * @desc JavaScript code used to perform an action when this text code appears.
 * @default "const textState = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Replacements
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeReplace:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The text that will appear if this match appears.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this match appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Macro
 * ----------------------------------------------------------------------------
 */
/*~struct~TextMacro:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this macro to work.
 * @default Key
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The replacement text that will appear from the macro.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this macro appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Localization Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Localization:
 *
 * @param Main
 * @text Main Settings
 *
 * @param Enable:eval
 * @text Enable Switching?
 * @parent Main
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Enable language switching settings for this plugin?
 * @default false
 *
 * @param CsvFilename:str
 * @text CSV Filename
 * @parent Main
 * @desc What is the filename of the CSV file to read from?
 * Located within the project's /data/ folder.
 * @default Languages.csv
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
 * @desc Add the 'Language' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Text Language
 *
 * @param Localized
 * @text Languages
 *
 * @param DefaultLocale:str
 * @text Default Language
 * @parent Localized
 * @type select
 * @option Bengali
 * @option Chinese(Simplified)
 * @option Chinese(Traditional)
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What is the default language used for this game?
 * @default English
 *
 * @param Languages:arraystr
 * @text Supported Languages
 * @parent Localized
 * @type select[]
 * @option Bengali
 * @option Chinese(Simplified)
 * @option Chinese(Traditional)
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What are all the supported languages supported by this
 * game's script? Remove any that aren't translated.
 * @default ["Bengali","Chinese(Simplified)","Chinese(Traditional)","Czech","Danish","Dutch","English","Finnish","French","German","Greek","Hindi","Hungarian","Indonesian","Italian","Japanese","Korean","Norwegian","Polish","Portuguese","Romanian","Russian","Slovak","Spanish","Swedish","Tamil","Thai","Turkish"]
 *
 * @param LangNames
 * @text Language Names
 *
 * @param Bengali:str
 * @text Bengali
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default বাংলা
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 简体中文
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 繁體中文
 * 
 * @param Czech:str
 * @text Czech
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Čeština
 * 
 * @param Danish:str
 * @text Danish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Dansk
 * 
 * @param Dutch:str
 * @text Dutch
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Nederlands
 * 
 * @param English:str
 * @text English
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default English
 * 
 * @param Finnish:str
 * @text Finnish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Suomi
 * 
 * @param French:str
 * @text French
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Français
 * 
 * @param German:str
 * @text German
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Deutsch
 * 
 * @param Greek:str
 * @text Greek
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Ελληνικά
 * 
 * @param Hindi:str
 * @text Hindi
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default हिन्दी
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Magyar
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Bahasa Indo
 * 
 * @param Italian:str
 * @text Italian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Italiano
 * 
 * @param Japanese:str
 * @text Japanese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 日本語
 * 
 * @param Korean:str
 * @text Korean
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 한국어
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Norsk
 * 
 * @param Polish:str
 * @text Polish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Polski
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Português
 * 
 * @param Romanian:str
 * @text Romanian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Română
 * 
 * @param Russian:str
 * @text Russian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Русский
 * 
 * @param Slovak:str
 * @text Slovak
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Slovenčina
 * 
 * @param Spanish:str
 * @text Spanish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Español
 * 
 * @param Swedish:str
 * @text Swedish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Svenska
 * 
 * @param Tamil:str
 * @text Tamil
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default தமிழ்
 * 
 * @param Thai:str
 * @text Thai
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default ไทย
 * 
 * @param Turkish:str
 * @text Turkish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Türkçe
 *
 */
/* ----------------------------------------------------------------------------
 * Text Speed Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TextSpeed:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Text Speed' option to the Options menu?
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
 * @default Text Speed
 *
 * @param Default:num
 * @text Default Value
 * @type number
 * @min 1
 * @max 11
 * @desc 1 - 10, slowest to fastest.
 * 11 is instant value.
 * @default 10
 *
 * @param Instant:str
 * @text Instant Speed
 * @desc Text to show "instant" text.
 * @default Instant
 *
 */
/* ----------------------------------------------------------------------------
 * Word Wrap Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WordWrap:
 *
 * @param EnableWordWrap
 * @text Enable Word Wrap
 *
 * @param MessageWindow:eval
 * @text Message Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param HelpWindow:eval
 * @text Help Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param Rules
 * @text Rules
 *
 * @param LineBreakSpace:eval
 * @text Link Break -> Space
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Convert manually placed (non tagged) line breaks with spaces?
 * @default true
 *
 * @param TightWrap:eval
 * @text Tight Wrap
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc If a face graphic is present in a message, word wrap will be tighter.
 * @default false
 *
 * @param EndPadding:num
 * @text End Padding
 * @parent Rules
 * @type number
 * @desc Add extra padding to your window to make text wrap further away from the end of the window.
 * @default 0
 *
 */
//=============================================================================

var tier = tier || 0x0;
var dependencies = [];
var pluginData = $plugins.filter(function (_0x15b479) {
  return _0x15b479.status && _0x15b479.description.includes("[MessageCore]");
})[0x0];
VisuMZ.MessageCore.Settings = VisuMZ.MessageCore.Settings || {};
VisuMZ.ConvertParams = function (_0x2a31b7, _0x436cb3) {
  for (const _0x31ee4d in _0x436cb3) {
    if (_0x31ee4d.match(/(.*):(.*)/i)) {
      const _0x4af08b = String(RegExp.$1);
      const _0x5ea1c5 = String(RegExp.$2).toUpperCase().trim();
      let _0x3c817b;
      let _0x2f3b90;
      let _0x34dd73;
      switch (_0x5ea1c5) {
        case "NUM":
          _0x3c817b = _0x436cb3[_0x31ee4d] !== '' ? Number(_0x436cb3[_0x31ee4d]) : 0x0;
          break;
        case 'ARRAYNUM':
          _0x2f3b90 = _0x436cb3[_0x31ee4d] !== '' ? JSON.parse(_0x436cb3[_0x31ee4d]) : [];
          _0x3c817b = _0x2f3b90.map(_0x311be7 => Number(_0x311be7));
          break;
        case "EVAL":
          _0x3c817b = _0x436cb3[_0x31ee4d] !== '' ? eval(_0x436cb3[_0x31ee4d]) : null;
          break;
        case "ARRAYEVAL":
          _0x2f3b90 = _0x436cb3[_0x31ee4d] !== '' ? JSON.parse(_0x436cb3[_0x31ee4d]) : [];
          _0x3c817b = _0x2f3b90.map(_0x479e6f => eval(_0x479e6f));
          break;
        case "JSON":
          _0x3c817b = _0x436cb3[_0x31ee4d] !== '' ? JSON.parse(_0x436cb3[_0x31ee4d]) : '';
          break;
        case "ARRAYJSON":
          _0x2f3b90 = _0x436cb3[_0x31ee4d] !== '' ? JSON.parse(_0x436cb3[_0x31ee4d]) : [];
          _0x3c817b = _0x2f3b90.map(_0x3a2cf0 => JSON.parse(_0x3a2cf0));
          break;
        case "FUNC":
          _0x3c817b = _0x436cb3[_0x31ee4d] !== '' ? new Function(JSON.parse(_0x436cb3[_0x31ee4d])) : new Function("return 0");
          break;
        case "ARRAYFUNC":
          _0x2f3b90 = _0x436cb3[_0x31ee4d] !== '' ? JSON.parse(_0x436cb3[_0x31ee4d]) : [];
          _0x3c817b = _0x2f3b90.map(_0x33619b => new Function(JSON.parse(_0x33619b)));
          break;
        case "STR":
          _0x3c817b = _0x436cb3[_0x31ee4d] !== '' ? String(_0x436cb3[_0x31ee4d]) : '';
          break;
        case "ARRAYSTR":
          _0x2f3b90 = _0x436cb3[_0x31ee4d] !== '' ? JSON.parse(_0x436cb3[_0x31ee4d]) : [];
          _0x3c817b = _0x2f3b90.map(_0x4ec290 => String(_0x4ec290));
          break;
        case 'STRUCT':
          _0x34dd73 = _0x436cb3[_0x31ee4d] !== '' ? JSON.parse(_0x436cb3[_0x31ee4d]) : {};
          _0x2a31b7[_0x4af08b] = {};
          VisuMZ.ConvertParams(_0x2a31b7[_0x4af08b], _0x34dd73);
          continue;
        case "ARRAYSTRUCT":
          _0x2f3b90 = _0x436cb3[_0x31ee4d] !== '' ? JSON.parse(_0x436cb3[_0x31ee4d]) : [];
          _0x3c817b = _0x2f3b90.map(_0x367dcb => VisuMZ.ConvertParams({}, JSON.parse(_0x367dcb)));
          break;
        default:
          continue;
      }
      _0x2a31b7[_0x4af08b] = _0x3c817b;
    }
  }
  return _0x2a31b7;
};
(_0x409cbb => {
  const _0x1e79b5 = _0x409cbb.name;
  for (const _0x26145e of dependencies) {
    if (!Imported[_0x26145e]) {
      alert("%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.".format(_0x1e79b5, _0x26145e));
      SceneManager.exit();
      break;
    }
  }
  const _0x51e625 = _0x409cbb.description;
  if (_0x51e625.match(/\[Version[ ](.*?)\]/i)) {
    const _0x41ec1b = Number(RegExp.$1);
    if (_0x41ec1b !== VisuMZ.MessageCore.version) {
      alert("%1's version does not match plugin's. Please update it in the Plugin Manager.".format(_0x1e79b5, _0x41ec1b));
      SceneManager.exit();
    }
  }
  if (_0x51e625.match(/\[Tier[ ](\d+)\]/i)) {
    const _0x29ee4d = Number(RegExp.$1);
    if (_0x29ee4d < tier) {
      alert("%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.".format(_0x1e79b5, _0x29ee4d, tier));
      SceneManager.exit();
    } else {
      tier = Math.max(_0x29ee4d, tier);
    }
  }
  VisuMZ.ConvertParams(VisuMZ.MessageCore.Settings, _0x409cbb.parameters);
})(pluginData);
PluginManager.registerCommand(pluginData.name, "ChoiceWindowDistance", _0x113059 => {
  VisuMZ.ConvertParams(_0x113059, _0x113059);
  const _0x185fe7 = Number(_0x113059.Distance) || 0x0;
  $gameSystem.setChoiceMessageDistance(_0x185fe7);
});
PluginManager.registerCommand(pluginData.name, "ChoiceWindowProperties", _0x40622c => {
  VisuMZ.ConvertParams(_0x40622c, _0x40622c);
  const _0x1024f4 = _0x40622c.LineHeight || $gameSystem.getChoiceListLineHeight() || 0x1;
  const _0x572a32 = _0x40622c.MinWidth ?? 0x60;
  const _0x124a91 = _0x40622c.MaxRows || $gameSystem.getChoiceListMaxRows() || 0x1;
  const _0x102074 = _0x40622c.MaxCols || $gameSystem.getChoiceListMaxColumns() || 0x1;
  const _0x4686be = _0x40622c.TextAlign.toLowerCase() || "default";
  $gameSystem.setChoiceListLineHeight(_0x1024f4);
  $gameSystem.setChoiceListMinChoiceWidth(_0x572a32);
  $gameSystem.setChoiceListMaxRows(_0x124a91);
  $gameSystem.setChoiceListMaxColumns(_0x102074);
  $gameSystem.setChoiceListTextAlign(_0x4686be);
});
PluginManager.registerCommand(pluginData.name, 'MessageWindowProperties', _0x22a8f9 => {
  VisuMZ.ConvertParams(_0x22a8f9, _0x22a8f9);
  const _0x6f70b0 = _0x22a8f9.Rows || $gameSystem.getMessageWindowRows() || 0x1;
  const _0x1f5796 = _0x22a8f9.Width || $gameSystem.getMessageWindowWidth() || 0x1;
  $gameTemp._centerMessageWindow = true;
  const _0x25005f = _0x22a8f9.WordWrap.toLowerCase();
  $gameSystem.setMessageWindowRows(_0x6f70b0);
  $gameSystem.setMessageWindowWidth(_0x1f5796);
  if (["true", "false"].includes(_0x25005f)) {
    $gameSystem.setMessageWindowWordWrap(eval(_0x25005f));
  }
  const _0x4db7d1 = SceneManager._scene._messageWindow;
  if (_0x4db7d1) {
    _0x4db7d1.resetWordWrap();
    _0x4db7d1.updateDimensions();
    _0x4db7d1.createContents();
  }
});
PluginManager.registerCommand(pluginData.name, "MessageWindowXyOffsets", _0x544d34 => {
  VisuMZ.ConvertParams(_0x544d34, _0x544d34);
  $gameSystem.setMessageWindowXyOffsets(_0x544d34.OffsetX, _0x544d34.OffsetY);
  const _0x48c00f = SceneManager._scene._messageWindow;
  if (_0x48c00f) {
    _0x48c00f.resetWordWrap();
    _0x48c00f.updateDimensions();
    _0x48c00f.createContents();
  }
});
PluginManager.registerCommand(pluginData.name, "SelectWeapon", _0x2110a0 => {
  VisuMZ.ConvertParams(_0x2110a0, _0x2110a0);
  $gameMessage.setWeaponChoice(_0x2110a0.VariableID || 0x0, _0x2110a0.WeaponTypeID || 0x0);
  const _0x505a40 = $gameTemp.getLastPluginCommandInterpreter();
  if (_0x505a40) {
    _0x505a40.setWaitMode("message");
  }
});
PluginManager.registerCommand(pluginData.name, "SelectArmor", _0x3fc194 => {
  VisuMZ.ConvertParams(_0x3fc194, _0x3fc194);
  $gameMessage.setArmorChoice(_0x3fc194.VariableID || 0x0, _0x3fc194.ArmorTypeID || 0x0, _0x3fc194.EquipTypeID || 0x0);
  const _0x173e23 = $gameTemp.getLastPluginCommandInterpreter();
  if (_0x173e23) {
    _0x173e23.setWaitMode("message");
  }
});
PluginManager.registerCommand(pluginData.name, "SelectSkill", _0x3b2303 => {
  VisuMZ.ConvertParams(_0x3b2303, _0x3b2303);
  $gameMessage.setSkillChoice(_0x3b2303.VariableID || 0x0, _0x3b2303.ActorID || 0x0, _0x3b2303.SkillTypeID || 0x0);
  const _0x4e1b66 = $gameTemp.getLastPluginCommandInterpreter();
  if (_0x4e1b66) {
    _0x4e1b66.setWaitMode("message");
  }
});
PluginManager.registerCommand(pluginData.name, "PictureTextChange", _0x35cdd1 => {
  VisuMZ.ConvertParams(_0x35cdd1, _0x35cdd1);
  const _0x42fced = _0x35cdd1.PictureIDs || [];
  const _0x508d1c = _0x35cdd1.Padding || 0x0;
  const _0x1a4bd6 = ['upperleft', 'up', "upperright", "left", "center", "right", "lowerleft", "down", "lowerright"];
  for (const _0x44635d of _0x42fced) {
    $gameScreen.setPictureTextBuffer(_0x44635d, _0x508d1c);
    for (const _0x3ed434 of _0x1a4bd6) {
      if (_0x35cdd1[_0x3ed434] === undefined) {
        continue;
      }
      $gameScreen.setPictureText(_0x44635d, _0x35cdd1[_0x3ed434], _0x3ed434);
    }
  }
});
PluginManager.registerCommand(pluginData.name, 'PictureTextErase', _0x5845dd => {
  VisuMZ.ConvertParams(_0x5845dd, _0x5845dd);
  const _0x463c60 = _0x5845dd.PictureIDs || [];
  for (const _0x5bf43e of _0x463c60) {
    $gameScreen.eraseAllPictureTexts(_0x5bf43e);
    $gameScreen.erasePictureTextBuffer(_0x5bf43e);
  }
});
PluginManager.registerCommand(pluginData.name, "PictureTextRefresh", _0x1e7cf4 => {
  $gameScreen.requestPictureTextRefreshAll();
});
VisuMZ.MessageCore.Scene_Boot_onDatabaseLoaded = Scene_Boot.prototype.onDatabaseLoaded;
Scene_Boot.prototype.onDatabaseLoaded = function () {
  VisuMZ.MessageCore.Scene_Boot_onDatabaseLoaded.call(this);
  VisuMZ.MessageCore.CheckCompatibility();
  this.process_VisuMZ_MessageCore_TextCodes_Action();
  this.process_VisuMZ_MessageCore_TextCodes_Replace();
  this.process_VisuMZ_MessageCore_TextMacros();
  this.process_VisuMZ_MessageCore_AutoColor();
};
VisuMZ.MessageCore.CheckCompatibility = function () {
  if (Imported.VisuMZ_4_ExtraEnemyDrops && VisuMZ.ExtraEnemyDrops.version < 1.09) {
    let _0x1a54db = '';
    _0x1a54db += "VisuMZ_4_ExtraEnemyDrops needs to be updated ";
    _0x1a54db += "in order for VisuMZ_1_MessageCore to work.";
    alert(_0x1a54db);
    SceneManager.exit();
  }
};
VisuMZ.MessageCore.SortObjectByKeyLength = function (_0x1915d7) {
  const _0x1bcbb2 = VisuMZ.MessageCore.Settings[_0x1915d7];
  _0x1bcbb2.sort((_0x54986f, _0x2054bd) => {
    if (!_0x54986f || !_0x2054bd) {
      return -0x1;
    }
    return _0x2054bd.Match.length - _0x54986f.Match.length;
  });
};
Scene_Boot.prototype.process_VisuMZ_MessageCore_TextCodes_Action = function () {
  VisuMZ.MessageCore.SortObjectByKeyLength("TextCodeActions");
  for (const _0x4c8604 of VisuMZ.MessageCore.Settings.TextCodeActions) {
    _0x4c8604.Match = _0x4c8604.Match.toUpperCase();
    _0x4c8604.textCodeCheck = new RegExp("" + _0x4c8604.Match, 'gi');
    _0x4c8604.textCodeResult = "" + _0x4c8604.Match;
    if (_0x4c8604.Type === '') {
      _0x4c8604.textCodeResult += '[0]';
    }
  }
};
Scene_Boot.prototype.process_VisuMZ_MessageCore_TextCodes_Replace = function () {
  VisuMZ.MessageCore.SortObjectByKeyLength("TextCodeReplace");
  for (const _0x3b35f5 of VisuMZ.MessageCore.Settings.TextCodeReplace) {
    _0x3b35f5.textCodeCheck = new RegExp("" + _0x3b35f5.Match + _0x3b35f5.Type, 'gi');
    if (_0x3b35f5.TextStr !== '' && _0x3b35f5.TextStr !== 'Undefined') {
      _0x3b35f5.textCodeResult = new Function("return '" + _0x3b35f5.TextStr.replace(/\\/g, "") + "'");
    } else {
      _0x3b35f5.textCodeResult = _0x3b35f5.TextJS;
    }
  }
};
Scene_Boot.prototype.process_VisuMZ_MessageCore_TextMacros = function () {
  for (const _0x461d38 of VisuMZ.MessageCore.Settings.TextMacros) {
    _0x461d38.textCodeCheck = new RegExp("\\[" + _0x461d38.Match + "\\]", 'gi');
    if (_0x461d38.TextStr !== '' && _0x461d38.TextStr !== 'Undefined') {
      let _0x36db74 = _0x461d38.TextStr;
      _0x36db74 = _0x36db74.replace(/\\/g, "");
      _0x36db74 = _0x36db74.replace("'", "\\'");
      _0x36db74 = _0x36db74.replace("\"", "\\\"");
      _0x461d38.textCodeResult = new Function("return '" + _0x36db74 + "'");
    } else {
      _0x461d38.textCodeResult = _0x461d38.TextJS;
    }
  }
};
Scene_Boot.prototype.process_VisuMZ_MessageCore_AutoColor = function () {
  const _0x2a9dcd = VisuMZ.MessageCore.Settings.AutoColor;
  if (!VisuMZ.ParseAllNotetags) {
    VisuMZ.MessageCore.AddAutoColor($dataClasses, _0x2a9dcd.Classes);
    VisuMZ.MessageCore.AddAutoColor($dataSkills, _0x2a9dcd.Skills);
    VisuMZ.MessageCore.AddAutoColor($dataItems, _0x2a9dcd.Items);
    VisuMZ.MessageCore.AddAutoColor($dataWeapons, _0x2a9dcd.Weapons);
    VisuMZ.MessageCore.AddAutoColor($dataArmors, _0x2a9dcd.Armors);
    VisuMZ.MessageCore.AddAutoColor($dataEnemies, _0x2a9dcd.Enemies);
    VisuMZ.MessageCore.AddAutoColor($dataStates, _0x2a9dcd.States);
  }
  VisuMZ.MessageCore.CreateAutoColorRegExpLists();
};
VisuMZ.MessageCore.AutoColorBypassList = ['V', 'N', 'P', 'C', 'I', 'PX', 'PY', 'G', '{', '}', '<', '>', 'FS', "\\", '$', '.', '|', '!', '<', '>', '^', '<B>', "</B>", "<I>", "</I>", '<LEFT>', "</LEFT>", "<CENTER>", "</CENTER>", '<RIGHT>', "</RIGHT>", "<COLORLOCK>", "</COLORLOCK>", "(((", ')))', "<WORDWRAP>", "</WORDWRAP>", "<BR>", "<LINE BREAK>", "PICTURE", "CENTERPICTURE", "COMMONEVENT", "WAIT", "SHOW", 'HIDE', 'ENABLE', "DISABLE", 'SWITCH', "SWITCHES", "ALL", 'ANY'];
VisuMZ.MessageCore.AddAutoColor = function (_0x348194, _0x1a2e42) {
  if (_0x1a2e42 <= 0x0) {
    return;
  }
  for (const _0x31c4ac of _0x348194) {
    if (!_0x31c4ac) {
      continue;
    }
    VisuMZ.MessageCore.CreateAutoColorFor(_0x31c4ac, _0x1a2e42);
  }
};
VisuMZ.MessageCore.CreateAutoColorRegExpLists = function () {
  VisuMZ.MessageCore.AutoColorRegExp = [];
  for (let _0x43ae94 = 0x1; _0x43ae94 <= 0x1f; _0x43ae94++) {
    const _0x3def2b = "TextColor%1".format(_0x43ae94);
    const _0x83deff = VisuMZ.MessageCore.Settings.AutoColor[_0x3def2b];
    _0x83deff.sort((_0xf95fa0, _0x228c47) => {
      if (!_0xf95fa0 || !_0x228c47) {
        return -0x1;
      }
      return _0x228c47.length - _0xf95fa0.length;
    });
    this.CreateAutoColorRegExpListEntries(_0x83deff, _0x43ae94);
  }
};
VisuMZ.MessageCore.CreateAutoColorRegExpListEntries = function (_0x4d0e27, _0x461e8a) {
  for (const _0x4d59f1 of _0x4d0e27) {
    if (_0x4d59f1.length <= 0x0) {
      continue;
    }
    if (/^\d+$/.test(_0x4d59f1)) {
      continue;
    }
    let _0x375ccb = VisuMZ.MessageCore.ConvertTextAutoColorRegExpFriendly(_0x4d59f1);
    if (_0x4d59f1.match(/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g)) {
      var _0x39ab66 = new RegExp(_0x375ccb, 'i');
    } else {
      var _0x39ab66 = new RegExp("\\b" + _0x375ccb + "\\b", 'g');
    }
    VisuMZ.MessageCore.AutoColorRegExp.push([_0x39ab66, "C[%1]%2PREVCOLOR[0]".format(_0x461e8a, _0x4d59f1)]);
  }
};
VisuMZ.MessageCore.ConvertTextAutoColorRegExpFriendly = function (_0x1f87f6) {
  _0x1f87f6 = _0x1f87f6.replace(/(\W)/gi, (_0x4800eb, _0x292342) => "\\%1".format(_0x292342));
  return _0x1f87f6;
};
VisuMZ.MessageCore.ParseClassNotetags = VisuMZ.ParseClassNotetags;
VisuMZ.ParseClassNotetags = function (_0x58d949) {
  VisuMZ.MessageCore.ParseClassNotetags.call(this, _0x58d949);
  const _0x14f670 = VisuMZ.MessageCore.Settings.AutoColor;
  VisuMZ.MessageCore.CreateAutoColorFor(_0x58d949, _0x14f670.Classes);
};
VisuMZ.MessageCore.ParseSkillNotetags = VisuMZ.ParseSkillNotetags;
VisuMZ.ParseSkillNotetags = function (_0x4e432a) {
  VisuMZ.MessageCore.ParseSkillNotetags.call(this, _0x4e432a);
  const _0x1a38a1 = VisuMZ.MessageCore.Settings.AutoColor;
  VisuMZ.MessageCore.CreateAutoColorFor(_0x4e432a, _0x1a38a1.Skills);
};
0x7;
VisuMZ.MessageCore.ParseItemNotetags = VisuMZ.ParseItemNotetags;
VisuMZ.ParseItemNotetags = function (_0x9ae10b) {
  VisuMZ.MessageCore.ParseItemNotetags.call(this, _0x9ae10b);
  const _0xc3d895 = VisuMZ.MessageCore.Settings.AutoColor;
  VisuMZ.MessageCore.CreateAutoColorFor(_0x9ae10b, _0xc3d895.Items);
};
VisuMZ.MessageCore.ParseWeaponNotetags = VisuMZ.ParseWeaponNotetags;
VisuMZ.ParseWeaponNotetags = function (_0x24787c) {
  VisuMZ.MessageCore.ParseWeaponNotetags.call(this, _0x24787c);
  const _0x1a08ce = VisuMZ.MessageCore.Settings.AutoColor;
  VisuMZ.MessageCore.CreateAutoColorFor(_0x24787c, _0x1a08ce.Weapons);
};
VisuMZ.MessageCore.ParseArmorNotetags = VisuMZ.ParseArmorNotetags;
VisuMZ.ParseArmorNotetags = function (_0x7c6ae8) {
  VisuMZ.MessageCore.ParseArmorNotetags.call(this, _0x7c6ae8);
  const _0x38a824 = VisuMZ.MessageCore.Settings.AutoColor;
  VisuMZ.MessageCore.CreateAutoColorFor(_0x7c6ae8, _0x38a824.Armors);
};
VisuMZ.MessageCore.ParseEnemyNotetags = VisuMZ.ParseEnemyNotetags;
VisuMZ.ParseEnemyNotetags = function (_0x4d6301) {
  VisuMZ.MessageCore.ParseEnemyNotetags.call(this, _0x4d6301);
  const _0x3409e2 = VisuMZ.MessageCore.Settings.AutoColor;
  VisuMZ.MessageCore.CreateAutoColorFor(_0x4d6301, _0x3409e2.Enemies);
};
VisuMZ.MessageCore.ParseStateNotetags = VisuMZ.ParseStateNotetags;
VisuMZ.ParseStateNotetags = function (_0x3e2a0e) {
  VisuMZ.MessageCore.ParseStateNotetags.call(this, _0x3e2a0e);
  const _0x2c4dbc = VisuMZ.MessageCore.Settings.AutoColor;
  VisuMZ.MessageCore.CreateAutoColorFor(_0x3e2a0e, _0x2c4dbc.States);
};
VisuMZ.MessageCore.CreateAutoColorFor = function (_0x3c7a60, _0x163d1e) {
  if (_0x163d1e <= 0x0) {
    return;
  }
  const _0x2df68d = VisuMZ.MessageCore.Settings.AutoColor["TextColor" + _0x163d1e];
  let _0x4284dc = _0x3c7a60.name.trim();
  if (/^\d+$/.test(_0x4284dc)) {
    return;
  }
  if (VisuMZ.MessageCore.AutoColorBypassList.includes(_0x4284dc.toUpperCase())) {
    return;
  }
  _0x4284dc = _0x4284dc.replace(/\\I\[(\d+)\]/gi, '');
  _0x4284dc = _0x4284dc.replace(/\x1bI\[(\d+)\]/gi, '');
  if (_0x4284dc.length <= 0x0) {
    return;
  }
  if (_0x4284dc.match(/-----/i)) {
    return;
  }
  _0x2df68d.push(_0x4284dc);
};
VisuMZ.MessageCore.Scene_Boot_loadGameFonts = Scene_Boot.prototype.loadGameFonts;
Scene_Boot.prototype.loadGameFonts = function () {
  VisuMZ.MessageCore.Scene_Boot_loadGameFonts.call(this);
  this.loadCustomFontsMessageCore();
};
Scene_Boot.prototype.loadCustomFontsMessageCore = function () {
  const _0x1f7030 = VisuMZ.MessageCore.Settings.CustomFonts || [];
  for (const _0x3951b8 of _0x1f7030) {
    if (!_0x3951b8) {
      continue;
    }
    const _0x5a1d62 = _0x3951b8.FontFamily;
    if (_0x5a1d62.trim() === '') {
      continue;
    }
    if (_0x5a1d62.toLowerCase().trim() === "unnamed") {
      continue;
    }
    const _0x4d9fb2 = _0x3951b8.Filename;
    if (_0x4d9fb2 === "Unnamed.ttf") {
      continue;
    }
    FontManager.load(_0x5a1d62, _0x4d9fb2);
  }
};
VisuMZ.MessageCore.DataManager_loadDatabase = DataManager.loadDatabase;
DataManager.loadDatabase = function () {
  VisuMZ.MessageCore.DataManager_loadDatabase.call(this);
  this.loadLocalization();
};
DataManager.loadLocalization = function () {
  if (!TextManager.isVisuMzLocalizationEnabled()) {
    return;
  }
  const _0x41168e = VisuMZ.MessageCore.Settings.Localization;
  const _0x56eb28 = _0x41168e.CsvFilename || '';
  if (!_0x56eb28) {
    return;
  }
  const _0x368533 = new XMLHttpRequest();
  const _0x415c78 = "data/" + _0x56eb28;
  window.$dataLocalization = null;
  _0x368533.open("GET", _0x415c78);
  _0x368533.overrideMimeType('application/csv');
  _0x368533.onload = () => this.onLocalizationXhrLoad(_0x368533, '$dataLocalization');
  _0x368533.onerror = () => this.onLocalizationXhrError();
  _0x368533.send();
};
DataManager.onLocalizationXhrLoad = function (_0x4c3fe2, _0x1700e6) {
  if (_0x4c3fe2.status >= 0x190) {
    return;
  }
  const _0x553b9e = _0x4c3fe2.responseText;
  window[_0x1700e6] = VisuMZ.MessageCore.ParseLocalizationCsv(_0x553b9e);
};
VisuMZ.MessageCore.ParseLocalizationCsv = function (_0x11565c) {
  const _0x2a3ec5 = _0x11565c.split("\n");
  const _0x5e3096 = _0x2a3ec5[0x0].split(';');
  const _0x2c4255 = {};
  _0x2a3ec5.slice(0x1).forEach(_0x3dece5 => {
    let _0x4b2510 = [];
    let _0x506efb = '';
    let _0x5cd7ec = false;
    for (let _0x365f4b = 0x0; _0x365f4b < _0x3dece5.length; _0x365f4b++) {
      let _0x384cd1 = _0x3dece5[_0x365f4b];
      if (_0x384cd1 === "\"") {
        if (_0x5cd7ec && _0x3dece5[_0x365f4b + 0x1] === "\"") {
          _0x506efb += _0x384cd1;
          _0x365f4b++;
        } else {
          _0x5cd7ec = !_0x5cd7ec;
        }
      } else if (_0x384cd1 === ';' && !_0x5cd7ec) {
        _0x4b2510.push(_0x506efb);
        _0x506efb = '';
      } else {
        _0x506efb += _0x384cd1;
      }
    }
    if (_0x506efb) {
      _0x4b2510.push(_0x506efb);
    }
    if (!_0x4b2510[0x0]) {
      _0x4b2510[0x0] = '';
    }
    const _0x94c301 = _0x4b2510[0x0].replace(/^"|"$/g, '').toLowerCase().trim();
    _0x2c4255[_0x94c301] = _0x5e3096.slice(0x1).reduce((_0x25edef, _0x3624ad, _0x50c3df) => {
      _0x25edef[_0x3624ad] = (_0x4b2510[_0x50c3df + 0x1] || '').replace(/^"|"$/g, '');
      return _0x25edef;
    }, {});
  });
  return _0x2c4255;
};
DataManager.onLocalizationXhrError = function () {
  let _0x5cd6bb = '';
  _0x5cd6bb += "You do not have a language CSV set up.\n";
  _0x5cd6bb += "Would you like the plugin to create the base CSV file?\n\n";
  if (confirm(_0x5cd6bb)) {
    if (Utils.isOptionValid('test')) {
      _0x5cd6bb = "CSV file is now created and stored in data folder.\n";
      alert(_0x5cd6bb);
      this.createLocalizationCsvFile();
      this.openLocalizationFolder();
      _0x5cd6bb = '';
    } else {
      _0x5cd6bb = "CSV file cannot be created.\nPlease enter Playtest mode.\n";
    }
  } else {
    _0x5cd6bb = "CSV file has not been made.\n";
  }
  _0x5cd6bb += "Please restart the game.";
  alert(_0x5cd6bb);
  SceneManager.exit();
};
DataManager.createLocalizationCsvFile = function () {
  const _0x281085 = ['Key', "English", "Bengali", "Chinese(Simplified)", 'Chinese(Traditional)', "Czech", 'Danish', "Dutch", 'Finnish', 'French', "German", 'Greek', "Hindi", "Hungarian", "Indonesian", "Italian", "Japanese", "Korean", "Norwegian", "Polish", "Portuguese", "Romanian", "Russian", "Slovak", 'Spanish', "Swedish", "Tamil", "Thai", "Turkish"];
  const _0x3187f1 = ["Greeting", "Hello", "হ্যালো", '你好', '你好', "Ahoj", "Hej", "Hallo", "Hei", "Bonjour", "Hallo", "Γειά σου", "नमस्ते", 'Szia', "Halo", "Ciao", "こんにちは", "안녕하세요", "Hei", "Cześć", "Olá", "Salut", "Привет", 'Ahoj', "Hola", 'Hej', "வணக்கம்", "สวัสดี", "Merhaba"];
  const _0x3d673e = ["Farewell", 'Good-bye', "বিদায়", '再见', '再見', "Sbohem", "Farvel", "Tot ziens", "Näkemiin", "Au revoir", "Auf Wiedersehen", "Αντίο", "अलविदा", "Viszontlátásra", "Selamat tinggal", "Arrivederci", "さようなら", "안녕히 가세요", "Ha det", "Do widzenia", "Adeus", "La revedere", "До свидания", "Zbohom", "Adiós", "Hejdå", 'பிரியாவிடை', "ลาก่อน", "Hoşça kal"];
  const _0x482776 = ["Wow", "Wow", 'ওহে', '哇', '哇', 'Ó', "Wow", "Wauw", "Vau", "Waouh", "Wow", "Ουάου", 'वाह', "Hűha", "Wah", "Wow", 'ワオ', '와우', 'Oi', 'O', "Uau", "Uau", "Вау", 'Ó', 'Guau', 'Oj', 'ஆஹா', "ว้าว", "Vay"];
  const _0x2dcfcf = [_0x281085, _0x3187f1, _0x3d673e, _0x482776];
  const _0x504e14 = _0x2dcfcf.map(_0x515a58 => _0x515a58.join(';')).join("\n");
  const _0x20b5b0 = VisuMZ.MessageCore.Settings.Localization;
  const _0x48ffec = _0x20b5b0.CsvFilename || 'Languages.csv';
  const _0x1d3084 = require("path");
  const _0x3609b3 = _0x1d3084.dirname(process.mainModule.filename);
  const _0x42a77c = _0x1d3084.join(_0x3609b3, 'data/');
  const _0x756847 = _0x42a77c + _0x48ffec;
  const _0x13c4cd = require('fs');
  _0x13c4cd.writeFileSync(_0x756847, _0x504e14);
  return _0x756847;
};
DataManager.openLocalizationFolder = function () {
  const {
    exec: _0x37f373
  } = require("child_process");
  _0x37f373("start .\\data");
  _0x37f373("open .\\data");
};
SceneManager.isSceneBattle = function () {
  return this._scene && this._scene.constructor === Scene_Battle;
};
SceneManager.isSceneMap = function () {
  return this._scene && this._scene.constructor === Scene_Map;
};
ConfigManager.textLocale = VisuMZ.MessageCore.Settings.Localization.DefaultLocale || "English";
ConfigManager.textSpeed = VisuMZ.MessageCore.Settings.TextSpeed.Default;
VisuMZ.MessageCore.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function () {
  const _0x2edd3e = VisuMZ.MessageCore.ConfigManager_makeData.call(this);
  if (TextManager.isVisuMzLocalizationEnabled()) {
    _0x2edd3e.textLocale = this.textLocale;
  }
  _0x2edd3e.textSpeed = this.textSpeed;
  return _0x2edd3e;
};
VisuMZ.MessageCore.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function (_0x5f191a) {
  VisuMZ.MessageCore.ConfigManager_applyData.call(this, _0x5f191a);
  if (TextManager.isVisuMzLocalizationEnabled()) {
    if ('textLocale' in _0x5f191a) {
      this.textLocale = String(_0x5f191a.textLocale);
    } else {
      this.textLocale = VisuMZ.MessageCore.Settings.Localization.DefaultLocale || "English";
    }
  }
  if ("textSpeed" in _0x5f191a) {
    this.textSpeed = Number(_0x5f191a.textSpeed).clamp(0x1, 0xb);
  } else {
    this.textSpeed = VisuMZ.MessageCore.Settings.TextSpeed.Default;
  }
};
TextManager.messageCoreLocalization = VisuMZ.MessageCore.Settings.Localization.Name;
TextManager.messageCoreTextSpeed = VisuMZ.MessageCore.Settings.TextSpeed.Name;
TextManager.instantTextSpeed = VisuMZ.MessageCore.Settings.TextSpeed.Instant;
VisuMZ.MessageCore.TextManager_message = TextManager.message;
TextManager.message = function (_0x490eab) {
  const _0x11d106 = ["levelUp", "emerge", 'preemptive', "surprise", "victory", "defeat", "escapeStart", "obtainExp", "obtainGold", 'obtainItem'];
  let _0x52d99c = VisuMZ.MessageCore.TextManager_message.call(this, _0x490eab);
  if (_0x11d106.includes(_0x490eab)) {
    _0x52d99c = "</WORDWRAP>" + _0x52d99c;
  }
  return _0x52d99c;
};
TextManager.isVisuMzLocalizationEnabled = function () {
  return VisuMZ.MessageCore.Settings.Localization.Enable;
};
TextManager.parseLocalizedText = function (_0x207ec5) {
  if (!this.isVisuMzLocalizationEnabled()) {
    return _0x207ec5;
  }
  _0x207ec5 = String(_0x207ec5).replace(/\$(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi, (_0x4c60d7, _0xb7ed1f) => this.getLocalizedText(String(_0xb7ed1f)));
  _0x207ec5 = String(_0x207ec5).replace(/\\(?:KEY|TL|TRANSLATE|LOC|LOCALIZE|LOCALE)(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi, (_0x43a067, _0x521d79) => this.getLocalizedText(String(_0x521d79)));
  _0x207ec5 = String(_0x207ec5).replace(/\x1b(?:KEY|TL|TRANSLATE|LOC|LOCALIZE|LOCALE)(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi, (_0x230795, _0x2ead8d) => this.getLocalizedText(String(_0x2ead8d)));
  return _0x207ec5;
};
TextManager.getLocalizedText = function (_0x2bb6d9) {
  if (!$dataLocalization) {
    return '';
  }
  const _0x368a20 = $dataLocalization[_0x2bb6d9.toLowerCase().trim()];
  if (!_0x368a20) {
    return;
  }
  const _0x16af17 = ConfigManager.textLocale || "English";
  let _0x3cb8fd = _0x368a20[_0x16af17] || "UNDEFINED!";
  _0x3cb8fd = _0x3cb8fd.replace(/\\/g, "");
  _0x3cb8fd = _0x3cb8fd.replace(/<SEMI(?:|-COLON|COLON)>/gi, ';');
  return _0x3cb8fd;
};
TextManager.getLanguageName = function (_0x2aa6db) {
  return VisuMZ.MessageCore.Settings.Localization[_0x2aa6db] || '';
};
TextManager.getCurrentLanguage = function () {
  const _0xcefd93 = ConfigManager.textLocale || 'English';
  return this.getLanguageName(_0xcefd93);
};
TextManager.getLanguageAt = function (_0x4da017) {
  const _0x2deef3 = VisuMZ.MessageCore.Settings.Localization.Languages || [];
  let _0x5d6dc6 = _0x2deef3.indexOf(ConfigManager.textLocale || 'English');
  _0x5d6dc6 += _0x4da017;
  const _0x132958 = _0x2deef3[_0x5d6dc6] || '';
  return this.getLanguageName(_0x132958);
};
Game_Temp.prototype.setLastPluginCommandInterpreter = function (_0x3d80b2) {
  this._lastPluginCommandInterpreter = _0x3d80b2;
};
Game_Temp.prototype.getLastPluginCommandInterpreter = function () {
  return this._lastPluginCommandInterpreter;
};
VisuMZ.MessageCore.Game_Interpreter_PluginCommand = Game_Interpreter.prototype.command357;
Game_Interpreter.prototype.command357 = function (_0x56dd4b) {
  $gameTemp.setLastPluginCommandInterpreter(this);
  return VisuMZ.MessageCore.Game_Interpreter_PluginCommand.call(this, _0x56dd4b);
};
VisuMZ.MessageCore.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
  VisuMZ.MessageCore.Game_System_initialize.call(this);
  this.initMessageCore();
};
Game_System.prototype.initMessageCore = function () {
  const _0x2102aa = VisuMZ.MessageCore.Settings.General;
  const _0x42128d = VisuMZ.MessageCore.Settings.WordWrap;
  this._MessageCoreSettings = {
    'messageRows': _0x2102aa.MessageRows,
    'messageWidth': _0x2102aa.MessageWidth,
    'messageWordWrap': _0x42128d.MessageWindow,
    'helpWordWrap': _0x42128d.HelpWindow,
    'choiceLineHeight': _0x2102aa.ChoiceWindowLineHeight,
    'choiceMinWidth': _0x2102aa.ChoiceWindowMinWidth ?? 0x60,
    'choiceRows': _0x2102aa.ChoiceWindowMaxRows,
    'choiceCols': _0x2102aa.ChoiceWindowMaxCols,
    'choiceTextAlign': _0x2102aa.ChoiceWindowTextAlign,
    'choiceDistance': 0x0
  };
  if (this._messageOffsetX === undefined) {
    this._messageOffsetX = _0x2102aa.MsgWindowOffsetX;
    this._messageOffsetY = _0x2102aa.MsgWindowOffsetY;
  }
};
Game_System.prototype.getMessageWindowRows = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.messageRows === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.messageRows;
};
Game_System.prototype.setMessageWindowRows = function (_0x1204cb) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.messageRows === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.messageRows = _0x1204cb || 0x1;
};
Game_System.prototype.getMessageWindowWidth = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.messageWidth === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.messageWidth;
};
Game_System.prototype.setMessageWindowWidth = function (_0x561ed0) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.messageWidth === undefined) {
    this.initMessageCore();
  }
  _0x561ed0 = Math.ceil(_0x561ed0);
  if (_0x561ed0 % 0x2 !== 0x0) {
    _0x561ed0 += 0x1;
  }
  this._MessageCoreSettings.messageWidth = _0x561ed0 || 0x2;
};
Game_System.prototype.isMessageWindowWordWrap = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.messageWordWrap === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.messageWordWrap;
};
Game_System.prototype.setMessageWindowWordWrap = function (_0x149352) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.messageWordWrap === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.messageWordWrap = _0x149352;
};
Game_System.prototype.getMessageWindowXyOffsets = function () {
  if (this._messageOffsetX === undefined) {
    const _0x5d0689 = VisuMZ.MessageCore.Settings.General;
    this._messageOffsetX = _0x5d0689.MsgWindowOffsetX;
    this._messageOffsetY = _0x5d0689.MsgWindowOffsetY;
  }
  return {
    'x': this._messageOffsetX || 0x0,
    'y': this._messageOffsetY || 0x0
  };
};
Game_System.prototype.setMessageWindowXyOffsets = function (_0x55b047, _0x439c5) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  this._messageOffsetX = _0x55b047;
  this._messageOffsetY = _0x439c5;
};
Game_System.prototype.isHelpWindowWordWrap = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.helpWordWrap === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.helpWordWrap;
};
Game_System.prototype.setHelpWindowWordWrap = function (_0x5c0ea1) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.helpWordWrap === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.helpWordWrap = _0x5c0ea1;
};
Game_System.prototype.getChoiceListLineHeight = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceLineHeight === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.choiceLineHeight;
};
Game_System.prototype.setChoiceListLineHeight = function (_0x34de50) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceLineHeight === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.choiceLineHeight = _0x34de50 || 0x1;
};
Game_System.prototype.getChoiceListMinChoiceWidth = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.choiceMinWidth ?? 0x60;
};
Game_System.prototype.setChoiceListMinChoiceWidth = function (_0x47830c) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.choiceMinWidth = _0x47830c || 0x0;
};
Game_System.prototype.getChoiceListMaxRows = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceRows === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.choiceRows;
};
Game_System.prototype.setChoiceListMaxRows = function (_0x3dd959) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceRows === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.choiceRows = _0x3dd959 || 0x1;
};
Game_System.prototype.getChoiceListMaxColumns = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceCols === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.choiceCols;
};
Game_System.prototype.setChoiceListMaxColumns = function (_0x5b5a2f) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceCols === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.choiceCols = _0x5b5a2f || 0x1;
};
Game_System.prototype.getChoiceListTextAlign = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceTextAlign === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.choiceTextAlign;
};
Game_System.prototype.setChoiceListTextAlign = function (_0x3a586a) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  if (this._MessageCoreSettings.choiceTextAlign === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.choiceTextAlign = _0x3a586a.toLowerCase();
};
Game_System.prototype.getChoiceMessageDistance = function () {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  return this._MessageCoreSettings.choiceDistance || 0x0;
};
Game_System.prototype.setChoiceMessageDistance = function (_0x45c5d4) {
  if (this._MessageCoreSettings === undefined) {
    this.initMessageCore();
  }
  this._MessageCoreSettings.choiceDistance = _0x45c5d4 || 0x0;
};
Game_Message.prototype.setWeaponChoice = function (_0x248885, _0x2c16c2) {
  this._itemChoiceVariableId = _0x248885;
  this._itemChoiceItypeId = "weapon";
  this._itemChoiceWtypeId = _0x2c16c2;
  this._itemChoiceEtypeId = 0x0;
};
Game_Message.prototype.itemChoiceWtypeId = function () {
  return this._itemChoiceWtypeId || 0x0;
};
Game_Message.prototype.setArmorChoice = function (_0x36f2fd, _0x1ba935, _0x233393) {
  this._itemChoiceVariableId = _0x36f2fd;
  this._itemChoiceItypeId = "armor";
  this._itemChoiceAtypeId = _0x1ba935;
  this._itemChoiceEtypeId = _0x233393;
};
Game_Message.prototype.itemChoiceAtypeId = function () {
  return this._itemChoiceAtypeId || 0x0;
};
Game_Message.prototype.itemChoiceEtypeId = function () {
  return this._itemChoiceEtypeId || 0x0;
};
Game_Message.prototype.setSkillChoice = function (_0x10e718, _0x66d666, _0x3bc4b2) {
  this._itemChoiceVariableId = _0x10e718;
  this._itemChoiceItypeId = "skill";
  this._itemChoiceActorId = _0x66d666;
  this._itemChoiceStypeId = _0x3bc4b2;
};
Game_Message.prototype.itemChoiceActorId = function () {
  return this._itemChoiceActorId || 0x0;
};
Game_Message.prototype.itemChoiceActor = function () {
  return $gameActors.actor(this.itemChoiceActorId()) || $gameParty.leader() || null;
};
Game_Message.prototype.itemChoiceStypeId = function () {
  return this._itemChoiceStypeId || 0x0;
};
VisuMZ.MessageCore.Game_Message_setChoices = Game_Message.prototype.setChoices;
Game_Message.prototype.setChoices = function (_0x571c3f, _0x33a143, _0x96f92d) {
  this._scriptCall = true;
  VisuMZ.MessageCore.Game_Message_setChoices.call(this, _0x571c3f, _0x33a143, _0x96f92d);
};
Game_Message.prototype.setupShuffleChoices = function () {
  this._scriptCall = false;
  this._choiceIndexArray = [];
  const _0x1c6abb = this._choices.length;
  this._maxShuffleChoices = _0x1c6abb;
  let _0x5791be = false;
  for (let _0x3a7a2d = 0x0; _0x3a7a2d < _0x1c6abb; _0x3a7a2d++) {
    let _0x385905 = this._choices[_0x3a7a2d];
    if (_0x385905.match(/<SHUFFLE>/gi)) {
      _0x5791be = true;
      _0x385905 = _0x385905.replace(/<SHUFFLE>/gi, '');
    }
    if (_0x385905.match(/<SHUFFLE:[ ](\d+)>/gi)) {
      _0x5791be = true;
      this._maxShuffleChoices = Math.min(Number(RegExp.$1), this._maxShuffleChoices);
      _0x385905 = _0x385905.replace(/<SHUFFLE:[ ](\d+)>/gi, '');
    }
    if (_0x385905.match(/<SHUFFLE: VAR[ ](\d+)>/gi)) {
      _0x5791be = true;
      this._maxShuffleChoices = Math.min($gameVariables.value(Number(RegExp.$1)) || 0x1, this._maxShuffleChoices);
      _0x385905 = _0x385905.replace(/<SHUFFLE:[ ]VAR (\d+)>/gi, '');
    }
    this._choiceIndexArray.push(_0x3a7a2d);
    this._choices[_0x3a7a2d] = _0x385905;
  }
  if (_0x5791be) {
    this._choiceIndexArray = VisuMZ.MessageCore.ShuffleArray(this._choiceIndexArray);
    if (this.choiceCancelType() !== -0x2) {
      this._choiceCancelType = -0x1;
    }
  }
};
VisuMZ.MessageCore.ShuffleArray = function (_0xdb21b4) {
  var _0x3424af;
  var _0x2dedf2;
  var _0x1482a7;
  for (_0x1482a7 = _0xdb21b4.length - 0x1; _0x1482a7 > 0x0; _0x1482a7--) {
    _0x3424af = Math.floor(Math.random() * (_0x1482a7 + 0x1));
    _0x2dedf2 = _0xdb21b4[_0x1482a7];
    _0xdb21b4[_0x1482a7] = _0xdb21b4[_0x3424af];
    _0xdb21b4[_0x3424af] = _0x2dedf2;
  }
  return _0xdb21b4;
};
Game_Message.prototype.choiceIndexArray = function () {
  if (!this._choiceIndexArray) {
    this.setupShuffleChoices();
  }
  return this._choiceIndexArray;
};
Game_Message.prototype.maxShuffleChoices = function () {
  if (this._maxShuffleChoices === undefined) {
    this.setupShuffleChoices();
  }
  return this._maxShuffleChoices;
};
VisuMZ.MessageCore.Game_Screen_clearPictures = Game_Screen.prototype.clearPictures;
Game_Screen.prototype.clearPictures = function () {
  VisuMZ.MessageCore.Game_Screen_clearPictures.call(this);
  this.clearAllPictureTexts();
};
Game_Screen.prototype.clearAllPictureTexts = function () {
  this._pictureText = [];
  this._pictureTextBuffer = [];
  this._pictureTextRefresh = [];
};
Game_Screen.prototype.getPictureTextData = function (_0x914713) {
  if (this._pictureText === undefined) {
    this.clearAllPictureTexts();
  }
  const _0x206c09 = this.realPictureId(_0x914713);
  this._pictureText[_0x206c09] = this._pictureText[_0x206c09] || {};
  return this._pictureText[_0x206c09];
};
Game_Screen.prototype.getPictureText = function (_0x46b5f6, _0x15f3a2) {
  _0x15f3a2 = _0x15f3a2.toLowerCase().trim();
  return this.getPictureTextData(_0x46b5f6)[_0x15f3a2] || '';
};
Game_Screen.prototype.setPictureText = function (_0x48579c, _0x9097e5, _0x15298c) {
  _0x15298c = _0x15298c.toLowerCase().trim();
  this.getPictureTextData(_0x48579c)[_0x15298c] = _0x9097e5 || '';
  this.requestPictureTextRefresh(_0x48579c, true);
};
Game_Screen.prototype.eraseAllPictureTexts = function (_0xf3b93d) {
  if (this._pictureText === undefined) {
    this.clearAllPictureTexts();
  }
  const _0x17af9a = this.realPictureId(_0xf3b93d);
  this._pictureText[_0x17af9a] = null;
  this.requestPictureTextRefresh(_0xf3b93d, true);
};
Game_Screen.prototype.getPictureTextBuffer = function (_0x1018c5) {
  if (this._pictureText === undefined) {
    this.clearAllPictureTexts();
  }
  const _0x3d77e6 = this.realPictureId(_0x1018c5);
  return this._pictureTextBuffer[_0x3d77e6] || 0x0;
};
Game_Screen.prototype.setPictureTextBuffer = function (_0x36213a, _0x33a50a) {
  if (this._pictureText === undefined) {
    this.clearAllPictureTexts();
  }
  const _0x21a9fc = this.realPictureId(_0x36213a);
  this._pictureTextBuffer[_0x21a9fc] = Math.max(0x0, _0x33a50a);
};
Game_Screen.prototype.erasePictureTextBuffer = function (_0x177d07) {
  if (this._pictureText === undefined) {
    this.clearAllPictureTexts();
  }
  const _0x554a37 = this.realPictureId(_0x177d07);
  this._pictureTextBuffer[_0x554a37] = undefined;
};
VisuMZ.MessageCore.Game_Screen_erasePicture = Game_Screen.prototype.erasePicture;
Game_Screen.prototype.erasePicture = function (_0x369886) {
  VisuMZ.MessageCore.Game_Screen_erasePicture.call(this, _0x369886);
  this.eraseAllPictureTexts(_0x369886);
  this.erasePictureTextBuffer(_0x369886);
  this.requestPictureTextRefresh(_0x369886, true);
};
Game_Screen.prototype.requestPictureTextRefreshAll = function () {
  for (const _0xed7dc7 of this._pictures) {
    if (_0xed7dc7) {
      let _0x2aa930 = this._pictures.indexOf(_0xed7dc7);
      this.requestPictureTextRefresh(_0x2aa930);
    }
  }
};
Game_Screen.prototype.requestPictureTextRefresh = function (_0x5d6e0e, _0x1e7110) {
  this._pictureTextRefresh = this._pictureTextRefresh || [];
  if (this.hasPictureText(_0x5d6e0e) || _0x1e7110) {
    this._pictureTextRefresh.push(_0x5d6e0e);
  }
};
Game_Screen.prototype.needsPictureTextRefresh = function (_0x5bd42a) {
  this._pictureTextRefresh = this._pictureTextRefresh || [];
  return this._pictureTextRefresh.includes(_0x5bd42a);
};
Game_Screen.prototype.clearPictureTextRefresh = function (_0x859626) {
  this._pictureTextRefresh = this._pictureTextRefresh || [];
  this._pictureTextRefresh.remove(_0x859626);
};
Game_Screen.prototype.hasPictureText = function (_0x4c3be1) {
  const _0x492795 = ["upperleft", 'up', "upperright", "left", "center", 'right', "lowerleft", "down", "lowerright"];
  return _0x492795.some(_0x3e85a5 => this.getPictureText(_0x4c3be1, _0x3e85a5) !== '');
};
VisuMZ.MessageCore.Game_Party_initialize = Game_Party.prototype.initialize;
Game_Party.prototype.initialize = function () {
  VisuMZ.MessageCore.Game_Party_initialize.call(this);
  this.initMessageCore();
};
Game_Party.prototype.initMessageCore = function () {
  this._lastGainedItemData = {
    'type': 0x0,
    'id': 0x0,
    'quantity': 0x0
  };
};
Game_Party.prototype.getLastGainedItemData = function () {
  if (this._lastGainedItemData === undefined) {
    this.initMessageCore();
  }
  return this._lastGainedItemData;
};
Game_Party.prototype.setLastGainedItemData = function (_0x1d81a5, _0x62b0e4) {
  if (this._lastGainedItemData === undefined) {
    this.initMessageCore();
  }
  if (!_0x1d81a5) {
    return;
  }
  if (DataManager.isItem(_0x1d81a5)) {
    this._lastGainedItemData.type = 0x0;
  } else {
    if (DataManager.isWeapon(_0x1d81a5)) {
      this._lastGainedItemData.type = 0x1;
    } else if (DataManager.isArmor(_0x1d81a5)) {
      this._lastGainedItemData.type = 0x2;
    }
  }
  this._lastGainedItemData.id = _0x1d81a5.id;
  this._lastGainedItemData.quantity = _0x62b0e4;
};
VisuMZ.MessageCore.Game_Party_gainItem = Game_Party.prototype.gainItem;
Game_Party.prototype.gainItem = function (_0x453ab5, _0x534e17, _0x55a257) {
  VisuMZ.MessageCore.Game_Party_gainItem.call(this, _0x453ab5, _0x534e17, _0x55a257);
  if (_0x534e17 > 0x0) {
    this.setLastGainedItemData(_0x453ab5, _0x534e17);
  }
};
VisuMZ.MessageCore.Game_Map_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function () {
  VisuMZ.MessageCore.Game_Map_initialize.call(this);
  this._messageCommonEvents = [];
};
VisuMZ.MessageCore.Game_Map_setupEvents = Game_Map.prototype.setupEvents;
Game_Map.prototype.setupEvents = function () {
  VisuMZ.MessageCore.Game_Map_setupEvents.call(this);
  this._messageCommonEvents = [];
};
VisuMZ.MessageCore.Game_Map_updateEvents = Game_Map.prototype.updateEvents;
Game_Map.prototype.updateEvents = function () {
  VisuMZ.MessageCore.Game_Map_updateEvents.call(this);
  this.updateMessageCommonEvents();
};
Game_Map.prototype.addMessageCommonEvent = function (_0x11b7e2) {
  if (!$dataCommonEvents[_0x11b7e2]) {
    return;
  }
  this._messageCommonEvents = this._messageCommonEvents || [];
  const _0x4d0f71 = this._interpreter._eventId;
  const _0x27042b = new Game_MessageCommonEvent(_0x11b7e2, _0x4d0f71);
  this._messageCommonEvents.push(_0x27042b);
};
Game_Map.prototype.updateMessageCommonEvents = function () {
  this._messageCommonEvents = this._messageCommonEvents || [];
  for (const _0x50ce4b of this._messageCommonEvents) {
    if (!_0x50ce4b._interpreter) {
      this._messageCommonEvents.remove(_0x50ce4b);
    } else {
      _0x50ce4b.update();
    }
  }
};
VisuMZ.MessageCore.Game_Map_refresh = Game_Map.prototype.refresh;
Game_Map.prototype.refresh = function () {
  VisuMZ.MessageCore.Game_Map_refresh.call(this);
  $gameScreen.requestPictureTextRefreshAll();
};
Game_Interpreter.MESSAGE_CORE_PLUGIN_NAME = pluginData.name;
Game_Interpreter.prototype.command101 = function (_0x16adf8) {
  if ($gameMessage.isBusy()) {
    return false;
  }
  this.prepareShowTextCommand(_0x16adf8);
  this.addContinuousShowTextCommands(_0x16adf8);
  this.prepareShowTextFollowups(_0x16adf8);
  this.setWaitMode('message');
  return true;
};
Game_Interpreter.prototype.prepareShowTextCommand = function (_0x3cdbc7) {
  $gameMessage.setFaceImage(_0x3cdbc7[0x0], _0x3cdbc7[0x1]);
  $gameMessage.setBackground(_0x3cdbc7[0x2]);
  $gameMessage.setPositionType(_0x3cdbc7[0x3]);
  $gameMessage.setSpeakerName(_0x3cdbc7[0x4]);
};
Game_Interpreter.prototype.addContinuousShowTextCommands = function (_0x41e93c) {
  while (this.isContinuePrepareShowTextCommands()) {
    this._index++;
    if (this.currentCommand().code === 0x191) {
      let _0x1d14ce = this.currentCommand().parameters[0x0];
      _0x1d14ce = VisuMZ.MessageCore.ParseAddedText(_0x1d14ce);
      $gameMessage.add(_0x1d14ce);
    }
    if (this.isBreakShowTextCommands()) {
      break;
    }
  }
};
Game_Interpreter.prototype.isContinuePrepareShowTextCommands = function () {
  return this.nextEventCode() === 0x65 && $gameSystem.getMessageWindowRows() > 0x4 ? true : this.nextEventCode() === 0x191;
};
VisuMZ.MessageCore.ParseAddedText = function (_0x1ab486) {
  const _0x499a2f = VisuMZ.MessageCore.Settings.General;
  _0x1ab486 = (_0x499a2f.EachMessageStart || '') + _0x1ab486 + (_0x499a2f.EachMessageEnd || '');
  _0x1ab486 = _0x1ab486.replace(/<(?:NEXT PAGE|NEXTPAGE)>/gi, '');
  _0x1ab486 = _0x1ab486.replace(/<(?:RNG|RAND|RANDOM)>(.*?)<\/(?:RNG|RAND|RANDOM)>/gi, (_0x4c34cf, _0x12ce65) => this.getRandomTextFromPool(_0x12ce65));
  return _0x1ab486;
};
VisuMZ.MessageCore.getRandomTextFromPool = function (_0x3f5d50) {
  const _0x2de37c = _0x3f5d50.split('|').map(_0x339739 => _0x339739.trim()).remove('').remove(null);
  return _0x2de37c[Math.randomInt(_0x2de37c.length)];
};
Game_Interpreter.prototype.isBreakShowTextCommands = function () {
  if (this.currentCommand() && this.currentCommand().parameters[0x0].match(/<(?:NEXT PAGE|NEXTPAGE)>/gi)) {
    return true;
  }
  return $gameMessage._texts.length >= $gameSystem.getMessageWindowRows() && this.nextEventCode() !== 0x191;
};
Game_Interpreter.prototype.prepareShowTextFollowups = function (_0x532b87) {
  switch (this.nextEventCode()) {
    case 0x66:
      this._index++;
      this.setupChoices(this.currentCommand().parameters);
      break;
    case 0x67:
      this._index++;
      this.setupNumInput(this.currentCommand().parameters);
      break;
    case 0x68:
      this._index++;
      this.setupItemChoice(this.currentCommand().parameters);
      break;
    case 0x165:
      const _0x25eae0 = this._list[this._index + 0x1];
      const _0x34e25f = _0x25eae0.parameters;
      if (_0x34e25f[0x0] === Game_Interpreter.MESSAGE_CORE_PLUGIN_NAME) {
        this.prepareShowTextPluginCommandFollowups(_0x34e25f);
      }
      break;
  }
};
VisuMZ.MessageCore.Game_Interpreter_setupChoices = Game_Interpreter.prototype.setupChoices;
Game_Interpreter.prototype.setupChoices = function (_0x59ac93) {
  _0x59ac93 = this.addContinuousShowChoices();
  VisuMZ.MessageCore.Game_Interpreter_setupChoices.call(this, _0x59ac93);
  $gameMessage.setupShuffleChoices();
};
Game_Interpreter.prototype.addContinuousShowChoices = function () {
  const _0x4a7ace = this._index;
  let _0x5a2f4e = 0x0;
  this._index++;
  while (this._index < this._list.length) {
    if (this.currentCommand().indent === this._indent) {
      if (this.currentCommand().code === 0x194 && this.nextEventCode() !== 0x66) {
        break;
      } else {
        if (this.currentCommand().code === 0x66) {
          this.adjustShowChoiceExtension(_0x5a2f4e, this.currentCommand(), _0x4a7ace);
          this._index -= 0x2;
        } else if (this.currentCommand().code === 0x192) {
          this.currentCommand().parameters[0x0] = _0x5a2f4e;
          _0x5a2f4e++;
        }
      }
    }
    this._index++;
  }
  this._index = _0x4a7ace;
  return this.currentCommand().parameters;
};
Game_Interpreter.prototype.adjustShowChoiceExtension = function (_0x2c38e0, _0x21b617, _0x27e2fb) {
  this.adjustShowChoiceDefault(_0x2c38e0, _0x21b617, _0x27e2fb);
  this.adjustShowChoiceCancel(_0x2c38e0, _0x21b617, _0x27e2fb);
  this.addExtraShowChoices(_0x21b617, _0x27e2fb);
};
Game_Interpreter.prototype.adjustShowChoiceDefault = function (_0x27a3d5, _0xbc9e8c, _0x477b43) {
  if (_0xbc9e8c.parameters[0x2] < 0x0) {
    return;
  }
  const _0x4df162 = _0xbc9e8c.parameters[0x2] + _0x27a3d5;
  this._list[_0x477b43].parameters[0x2] = _0x4df162;
};
Game_Interpreter.prototype.adjustShowChoiceCancel = function (_0x75d8b, _0x4bde51, _0x2c29cd) {
  if (_0x4bde51.parameters[0x1] >= 0x0) {
    var _0x1723f0 = _0x4bde51.parameters[0x1] + _0x75d8b;
    this._list[_0x2c29cd].parameters[0x1] = _0x1723f0;
  } else if (_0x4bde51.parameters[0x1] === -0x2) {
    this._list[_0x2c29cd].parameters[0x1] = _0x4bde51.parameters[0x1];
  }
};
Game_Interpreter.prototype.addExtraShowChoices = function (_0x1c059d, _0x354579) {
  for (const _0x22b787 of _0x1c059d.parameters[0x0]) {
    this._list[_0x354579].parameters[0x0].push(_0x22b787);
  }
  this._list.splice(this._index - 0x1, 0x2);
};
Game_Interpreter.prototype.prepareShowTextPluginCommandFollowups = function (_0x358447) {
  const _0x391f41 = _0x358447[0x1];
  if (_0x391f41 === "SelectWeapon") {
    this._index++;
    this.setWeaponChoice(_0x358447);
  } else {
    if (_0x391f41 === 'SelectArmor') {
      this._index++;
      this.setArmorChoice(_0x358447);
    } else if (_0x391f41 === "SelectSkill" && Imported.VisuMZ_1_SkillsStatesCore) {
      this._index++;
      this.setSkillChoice(_0x358447);
    }
  }
};
Game_Interpreter.prototype.setWeaponChoice = function (_0x2c8532) {
  const _0x1aadd5 = JSON.parse(JSON.stringify(_0x2c8532[0x3]));
  VisuMZ.ConvertParams(_0x1aadd5, _0x1aadd5);
  $gameMessage.setWeaponChoice(_0x1aadd5.VariableID || 0x0, _0x1aadd5.WeaponTypeID || 0x0);
};
Game_Interpreter.prototype.setArmorChoice = function (_0x49bcc0) {
  const _0x42469d = JSON.parse(JSON.stringify(_0x49bcc0[0x3]));
  VisuMZ.ConvertParams(_0x42469d, _0x42469d);
  $gameMessage.setArmorChoice(_0x42469d.VariableID || 0x0, _0x42469d.ArmorTypeID || 0x0, _0x42469d.EquipTypeID || 0x0);
};
Game_Interpreter.prototype.setSkillChoice = function (_0x419104) {
  const _0x1e74a6 = JSON.parse(JSON.stringify(_0x419104[0x3]));
  VisuMZ.ConvertParams(_0x1e74a6, _0x1e74a6);
  $gameMessage.setSkillChoice(_0x1e74a6.VariableID || 0x0, _0x1e74a6.ActorID || 0x0, _0x1e74a6.SkillTypeID || 0x0);
};
function Game_MessageCommonEvent() {
  this.initialize(...arguments);
}
Game_MessageCommonEvent.prototype.initialize = function (_0x4048aa, _0x45ccbe) {
  this._commonEventId = _0x4048aa;
  this._eventId = _0x45ccbe || 0x0;
  this.refresh();
};
Game_MessageCommonEvent.prototype.event = function () {
  return $dataCommonEvents[this._commonEventId];
};
Game_MessageCommonEvent.prototype.list = function () {
  return this.event().list;
};
Game_MessageCommonEvent.prototype.refresh = function () {
  this._interpreter = new Game_Interpreter();
  this._interpreter.setup(this.list(), this._eventId);
};
Game_MessageCommonEvent.prototype.update = function () {
  if (this._interpreter) {
    if (this._interpreter.isRunning()) {
      this._interpreter.update();
    } else {
      this.clear();
    }
  }
};
Game_MessageCommonEvent.prototype.clear = function () {
  this._interpreter = null;
};
Scene_Message.prototype.messageWindowRect = function () {
  const _0x405cdf = Math.min(Graphics.width, $gameSystem.getMessageWindowWidth());
  const _0x190879 = $gameSystem.getMessageWindowRows();
  const _0x4cd020 = this.calcWindowHeight(_0x190879, false);
  const _0x446850 = (Graphics.boxWidth - _0x405cdf) / 0x2;
  return new Rectangle(_0x446850, 0x0, _0x405cdf, _0x4cd020);
};
VisuMZ.MessageCore.Scene_Message_createChoiceListWindow = Scene_Message.prototype.createChoiceListWindow;
Scene_Message.prototype.createChoiceListWindow = function () {
  VisuMZ.MessageCore.Scene_Message_createChoiceListWindow.call(this);
  this.createChoiceListHelpWindow();
};
Scene_Message.prototype.createChoiceListHelpWindow = function () {
  const _0x2d5829 = this.choiceListHelpWindowRect();
  const _0x48a8d8 = new Window_Help(_0x2d5829);
  _0x48a8d8.hide();
  this._choiceListWindow.setHelpWindow(_0x48a8d8);
  this._messageWindow.setChoiceListHelpWindow(_0x48a8d8);
  this.addWindow(_0x48a8d8);
  this._choiceListHelpWindow = _0x48a8d8;
};
Scene_Message.prototype.choiceListHelpWindowRect = function () {
  const _0x4feb00 = Graphics.boxWidth;
  const _0x4e1aa5 = this.calcWindowHeight(0x2, false);
  return new Rectangle(0x0, 0x0, _0x4feb00, _0x4e1aa5);
};
Window_Message.prototype.setChoiceListHelpWindow = function (_0x296581) {
  this._choiceListHelpWindow = _0x296581;
};
Window_Message.prototype.updateChoiceListHelpWindowPlacement = function () {
  if (!this._choiceListHelpWindow) {
    return;
  }
  const _0x2c9c8b = this._choiceListHelpWindow;
  if (_0x2c9c8b) {
    _0x2c9c8b.y = this.y > 0x0 ? 0x0 : Graphics.boxHeight - _0x2c9c8b.height;
  }
};
VisuMZ.MessageCore.Scene_Options_maxCommands = Scene_Options.prototype.maxCommands;
Scene_Options.prototype.maxCommands = function () {
  let _0x6e136 = VisuMZ.MessageCore.Scene_Options_maxCommands.call(this);
  const _0x341b60 = VisuMZ.MessageCore.Settings;
  if (_0x341b60.TextSpeed.AdjustRect) {
    if (_0x341b60.Localization.AddOption && TextManager.isVisuMzLocalizationEnabled()) {
      _0x6e136++;
    }
    if (_0x341b60.TextSpeed.AddOption) {
      _0x6e136++;
    }
  }
  return _0x6e136;
};
VisuMZ.MessageCore.Sprite_Picture_updateBitmap = Sprite_Picture.prototype.updateBitmap;
Sprite_Picture.prototype.updateBitmap = function () {
  VisuMZ.MessageCore.Sprite_Picture_updateBitmap.call(this);
  this.createPictureText();
};
VisuMZ.MessageCore.Sprite_Picture_update = Sprite_Picture.prototype.update;
Sprite_Picture.prototype.update = function () {
  VisuMZ.MessageCore.Sprite_Picture_update.call(this);
  this.updatePictureText();
};
Sprite_Picture.prototype.updatePictureText = function () {
  if (!this.visible) {
    return;
  }
  this.resizePictureText();
  this.anchorPictureText();
  this.drawPictureText();
  this.attachPictureText();
};
Sprite_Picture.prototype.createPictureText = function () {
  if (this._pictureTextWindow) {
    return;
  }
  if (this._pictureTextSprite) {
    return;
  }
  const _0x1b158a = new Rectangle(0x0, 0x0, 0x0, 0x0);
  this._pictureTextWindow = new Window_Base(_0x1b158a);
  this._pictureTextWindow.padding = 0x0;
  this._pictureTextSprite = new Sprite();
  this.addChildAt(this._pictureTextSprite, 0x0);
  this._pictureTextWidth = 0x0;
  this._pictureTextHeight = 0x0;
  this._pictureTextCache = {};
};
Sprite_Picture.prototype.resizePictureText = function () {
  if (!this._pictureTextWindow) {
    return;
  }
  if (this._pictureTextWidth === this.width && this._pictureTextHeight === this.height) {
    return;
  }
  this._pictureTextWidth = this.width;
  this._pictureTextHeight = this.height;
  this._pictureTextCache = {};
  this._pictureTextWindow.move(0x0, 0x0, this.width, this.height);
};
Sprite_Picture.prototype.anchorPictureText = function () {
  if (!this._pictureTextSprite) {
    return;
  }
  this._pictureTextSprite.anchor.x = this.anchor.x;
  this._pictureTextSprite.anchor.y = this.anchor.y;
};
Sprite_Picture.prototype.drawPictureText = function () {
  if (!this._pictureTextWindow) {
    return;
  }
  if (!this.anyPictureTextChanges()) {
    return;
  }
  const _0x81863a = ['upperleft', 'up', "upperright", "left", "center", "right", "lowerleft", "down", "lowerright"];
  this._pictureTextWindow.createContents();
  for (const _0xe809de of _0x81863a) {
    this.drawPictureTextZone(_0xe809de);
  }
};
Sprite_Picture.prototype.anyPictureTextChanges = function () {
  if ($gameScreen.needsPictureTextRefresh(this._pictureId)) {
    return true;
  }
  const _0x74e84f = ["upperleft", 'up', "upperright", "left", "center", 'right', "lowerleft", "down", "lowerright"];
  for (const _0x4ebc90 of _0x74e84f) {
    const _0x14a073 = $gameScreen.getPictureText(this._pictureId, _0x4ebc90);
    if (this._pictureTextCache[_0x4ebc90] === _0x14a073) {
      continue;
    }
    return true;
  }
  return false;
};
Sprite_Picture.prototype.drawPictureTextZone = function (_0x690b27) {
  $gameScreen.clearPictureTextRefresh(this._pictureId);
  const _0x358135 = $gameScreen.getPictureText(this._pictureId, _0x690b27);
  this._pictureTextCache[_0x690b27] = _0x358135;
  const _0x43e3c9 = this._pictureTextWindow.textSizeEx(_0x358135);
  let _0xee3dbc = $gameScreen.getPictureTextBuffer(this._pictureId);
  let _0x4b6624 = _0xee3dbc;
  let _0x512d78 = _0xee3dbc;
  if (['up', "center", "down"].includes(_0x690b27)) {
    _0x4b6624 = Math.floor((this.width - _0x43e3c9.width) / 0x2);
  } else if (['upperright', "right", "lowerright"].includes(_0x690b27)) {
    _0x4b6624 = Math.floor(this.width - _0x43e3c9.width - _0xee3dbc);
  }
  if (["left", "center", "right"].includes(_0x690b27)) {
    _0x512d78 = Math.floor((this.height - _0x43e3c9.height) / 0x2);
  } else if (["lowerleft", "down", "lowerright"].includes(_0x690b27)) {
    _0x512d78 = Math.floor(this.height - _0x43e3c9.height - _0xee3dbc);
  }
  this._pictureTextWindow.drawTextEx(_0x358135, _0x4b6624, _0x512d78);
};
Sprite_Picture.prototype.attachPictureText = function () {
  if (!this._pictureTextWindow) {
    return;
  }
  if (!this._pictureTextSprite) {
    return;
  }
  this._pictureTextSprite.bitmap = this._pictureTextWindow.contents;
};
VisuMZ.MessageCore.Window_Base_initialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function (_0x107036) {
  this.initMessageCore(_0x107036);
  VisuMZ.MessageCore.Window_Base_initialize.call(this, _0x107036);
};
Window_Base.prototype.initMessageCore = function (_0x54fd50) {
  this.initTextAlignement();
  this.resetWordWrap();
  this.registerResetRect(_0x54fd50);
};
Window_Base.prototype.initTextAlignement = function () {
  this.setTextAlignment("default");
};
Window_Base.prototype.setTextAlignment = function (_0x5dde7d) {
  this._textAlignment = _0x5dde7d;
};
Window_Base.prototype.getTextAlignment = function () {
  return this._textAlignment;
};
VisuMZ.MessageCore.Window_Base_textSizeEx = Window_Base.prototype.textSizeEx;
Window_Base.prototype.textSizeEx = function (_0xd617b6) {
  this.resetWordWrap();
  return VisuMZ.MessageCore.Window_Base_textSizeEx.call(this, _0xd617b6);
};
Window_Base.prototype.textSizeExRaw = function (_0x1aef5c) {
  return VisuMZ.MessageCore.Window_Base_textSizeEx.call(this, _0x1aef5c);
};
VisuMZ.MessageCore.Window_Base_processAllText = Window_Base.prototype.processAllText;
Window_Base.prototype.processAllText = function (_0x5589fa) {
  VisuMZ.MessageCore.Window_Base_processAllText.call(this, _0x5589fa);
  if (_0x5589fa.drawing) {
    this.setTextAlignment("default");
  }
};
Window_Base.prototype.resetWordWrap = function () {
  this.setWordWrap(false);
};
Window_Base.prototype.isWordWrapEnabled = function () {
  return this._wordWrap;
};
Window_Base.prototype.setWordWrap = function (_0x288b4b) {
  this._wordWrap = _0x288b4b;
  return '';
};
Window_Base.prototype.registerResetRect = function (_0x591587) {
  this._resetRect = JsonEx.makeDeepCopy(_0x591587);
};
Window_Base.prototype.resetFontSettings = function () {
  this.contents.fontFace = $gameSystem.mainFontFace();
  this.contents.fontSize = $gameSystem.mainFontSize();
  this.contents.fontBold = false;
  this.contents.fontItalic = false;
  this._textCasing = 0x0;
  this._textCasingUpperState = true;
  this.resetTextColor();
};
Window_Base.prototype.resetTextColor = function () {
  this.changeTextColor(ColorManager.normalColor());
  this.changeOutlineColor(ColorManager.outlineColor());
  const _0x74a39e = VisuMZ.MessageCore.Settings.General;
  if (_0x74a39e.DefaultOutlineWidth === undefined) {
    _0x74a39e.DefaultOutlineWidth = 0x3;
  }
  this.contents.outlineWidth = _0x74a39e.DefaultOutlineWidth;
  this.setColorLock(false);
};
Window_Base.prototype.setColorLock = function (_0x45e8d6) {
  this._colorLock = _0x45e8d6;
};
Window_Base.prototype.isColorLocked = function () {
  return this._colorLock;
};
Window_Base.prototype.isAutoColorAffected = function () {
  return false;
};
Window_Base.prototype.getPreservedFontSettings = function () {
  const _0x3b74c9 = ['fontFace', 'fontSize', "fontBold", "fontItalic", "textColor", "outLineColor", "outlineWidth", "paintOpacity"];
  let _0x4efb25 = {};
  for (const _0x36085d of _0x3b74c9) {
    _0x4efb25[_0x36085d] = this.contents[_0x36085d];
  }
  return _0x4efb25;
};
Window_Base.prototype.returnPreservedFontSettings = function (_0x5b61bf) {
  for (const _0x37c55f in _0x5b61bf) {
    this.contents[_0x37c55f] = _0x5b61bf[_0x37c55f];
  }
};
VisuMZ.MessageCore.Window_Base_update = Window_Base.prototype.update;
Window_Base.prototype.update = function () {
  VisuMZ.MessageCore.Window_Base_update.call(this);
  this.updateMove();
};
Window_Base.prototype.canMove = function () {
  return false;
};
Window_Base.prototype.updateMove = function () {
  if (this._moveDuration > 0x0) {
    if (this.canMove()) {
      this.x = this.applyMoveEasing(this.x, this._moveTargetX);
      this.y = this.applyMoveEasing(this.y, this._moveTargetY);
      this.width = this.applyMoveEasing(this.width, this._moveTargetWidth);
      this.height = this.applyMoveEasing(this.height, this._moveTargetHeight);
      this.clampPlacementPosition();
    }
    this._moveDuration--;
  }
};
Window_Base.prototype.clampPlacementPosition = function (_0x160f53, _0x5f06b2) {
  if (!_0x160f53) {
    this.width = Math.min(this.width, Graphics.width);
    this.height = Math.min(this.height, Graphics.height);
  }
  if (!_0x5f06b2) {
    const _0x218794 = -(Math.floor(Graphics.width - Graphics.boxWidth) / 0x2);
    const _0x2c24e3 = _0x218794 + Graphics.width - this.width;
    const _0x58bcca = -(Math.floor(Graphics.height - Graphics.boxHeight) / 0x2);
    const _0x50f4b4 = _0x58bcca + Graphics.height - this.height;
    this.x = this.x.clamp(_0x218794, _0x2c24e3);
    this.y = this.y.clamp(_0x58bcca, _0x50f4b4);
  }
};
Window_Base.prototype.applyMoveEasing = function (_0x26b6ee, _0x331c0b) {
  const _0x1fe40d = this._moveDuration;
  const _0x232154 = this._wholeMoveDuration;
  const _0x44309c = this.calcMoveEasing((_0x232154 - _0x1fe40d) / _0x232154);
  const _0x5dec8a = this.calcMoveEasing((_0x232154 - _0x1fe40d + 0x1) / _0x232154);
  const _0x2a5c21 = (_0x26b6ee - _0x331c0b * _0x44309c) / (0x1 - _0x44309c);
  return _0x2a5c21 + (_0x331c0b - _0x2a5c21) * _0x5dec8a;
};
Window_Base.prototype.calcMoveEasing = function (_0xc4fe7b) {
  switch (this._moveEasingType) {
    case 0x0:
      return _0xc4fe7b;
    case 0x1:
      return this.easeIn(_0xc4fe7b, 0x2);
    case 0x2:
      return this.easeOut(_0xc4fe7b, 0x2);
    case 0x3:
      return this.easeInOut(_0xc4fe7b, 0x2);
    default:
      return Imported.VisuMZ_0_CoreEngine ? VisuMZ.applyMoveEasing(_0xc4fe7b, this._moveEasingType) : _0xc4fe7b;
  }
};
Window_Base.prototype.moveTo = function (_0x4c4826, _0x4d837c, _0x1d80fb, _0x1d1aab, _0x164f2d, _0x1539bd) {
  this._moveTargetX = _0x4c4826;
  this._moveTargetY = _0x4d837c;
  this._moveTargetWidth = _0x1d80fb || this.width;
  this._moveTargetHeight = _0x1d1aab || this.height;
  this._moveDuration = _0x164f2d || 0x1;
  if (this._moveDuration <= 0x0) {
    this._moveDuration = 0x1;
  }
  this._wholeMoveDuration = this._moveDuration;
  this._moveEasingType = _0x1539bd || 0x0;
  if (_0x164f2d <= 0x0) {
    this.updateMove();
  }
};
Window_Base.prototype.moveBy = function (_0x38a200, _0x3dd08e, _0x22d7f9, _0x41683f, _0x1444cf, _0x4eb641) {
  this._moveTargetX = this.x + _0x38a200;
  this._moveTargetY = this.y + _0x3dd08e;
  this._moveTargetWidth = this.width + (_0x22d7f9 || 0x0);
  this._moveTargetHeight = this.height + (_0x41683f || 0x0);
  this._moveDuration = _0x1444cf || 0x1;
  if (this._moveDuration <= 0x0) {
    this._moveDuration = 0x1;
  }
  this._wholeMoveDuration = this._moveDuration;
  this._moveEasingType = _0x4eb641 || 0x0;
  if (_0x1444cf <= 0x0) {
    this.updateMove();
  }
};
Window_Base.prototype.resetRect = function (_0xb2a6d6, _0xd4c567) {
  this.moveTo(this._resetRect.x, this._resetRect.y, this._resetRect.width, this._resetRect.height, _0xb2a6d6, _0xd4c567);
};
VisuMZ.MessageCore.Window_Base_changeTextColor = Window_Base.prototype.changeTextColor;
Window_Base.prototype.changeTextColor = function (_0x409462) {
  if (this.isColorLocked()) {
    return;
  }
  _0x409462 = _0x409462.replace(/\,/g, '');
  this._textColorStack = this._textColorStack || [];
  this._textColorStack.unshift(this.contents.textColor);
  VisuMZ.MessageCore.Window_Base_changeTextColor.call(this, _0x409462);
};
Window_Base.prototype.processPreviousColor = function (_0x31bbd4) {
  this.obtainEscapeParam(_0x31bbd4);
  if (this.isColorLocked()) {
    return;
  }
  if (_0x31bbd4.drawing) {
    this._textColorStack = this._textColorStack || [];
    this.contents.textColor = this._textColorStack.shift() || ColorManager.normalColor();
  }
};
Window_Base.prototype.convertEscapeCharacters = function (_0x5232ec) {
  _0x5232ec = this.convertTextMacros(_0x5232ec);
  _0x5232ec = this.convertBackslashCharacters(_0x5232ec);
  _0x5232ec = this.convertVariableEscapeCharacters(_0x5232ec);
  _0x5232ec = this.convertButtonAssistEscapeCharacters(_0x5232ec);
  _0x5232ec = this.preConvertEscapeCharacters(_0x5232ec);
  _0x5232ec = this.convertShowChoiceEscapeCodes(_0x5232ec);
  _0x5232ec = this.convertFontSettingsEscapeCharacters(_0x5232ec);
  _0x5232ec = this.convertTextAlignmentEscapeCharacters(_0x5232ec);
  _0x5232ec = this.convertLockColorsEscapeCharacters(_0x5232ec);
  _0x5232ec = this.convertCasingEscapeCharacters(_0x5232ec);
  _0x5232ec = this.convertBaseEscapeCharacters(_0x5232ec);
  _0x5232ec = this.convertHardcodedEscapeReplacements(_0x5232ec);
  _0x5232ec = this.convertMessageCoreEscapeActions(_0x5232ec);
  _0x5232ec = this.convertMessageCoreEscapeReplacements(_0x5232ec);
  _0x5232ec = this.postConvertEscapeCharacters(_0x5232ec);
  _0x5232ec = this.convertVariableEscapeCharacters(_0x5232ec);
  _0x5232ec = this.processAutoColorWords(_0x5232ec);
  _0x5232ec = this.prepareWordWrapEscapeCharacters(_0x5232ec);
  return _0x5232ec;
};
Window_Base.prototype.convertTextMacros = function (_0x13cb54) {
  this._textMacroFound = false;
  for (const _0x18dbe5 of VisuMZ.MessageCore.Settings.TextMacros) {
    if (_0x13cb54 && _0x13cb54.match(_0x18dbe5.textCodeCheck)) {
      this._textMacroFound = true;
      _0x13cb54 = _0x13cb54.replace(_0x18dbe5.textCodeCheck, _0x18dbe5.textCodeResult.bind(this));
    }
  }
  return _0x13cb54 || '';
};
Window_Base.prototype.convertBackslashCharacters = function (_0x2d97bb) {
  _0x2d97bb = _0x2d97bb.replace(/\\/g, "");
  _0x2d97bb = _0x2d97bb.replace(/\x1b\x1b/g, "\\");
  return _0x2d97bb;
};
Window_Base.prototype.convertVariableEscapeCharacters = function (_0x22659c) {
  for (;;) {
    if (_0x22659c.match(/\\V\[(\d+)\]/gi)) {
      _0x22659c = _0x22659c.replace(/\\V\[(\d+)\]/gi, (_0x2203a9, _0x29994e) => this.convertBackslashCharacters(String($gameVariables.value(parseInt(_0x29994e)))));
    } else {
      if (_0x22659c.match(/\x1bV\[(\d+)\]/gi)) {
        _0x22659c = _0x22659c.replace(/\x1bV\[(\d+)\]/gi, (_0x171fa1, _0x389097) => this.convertBackslashCharacters(String($gameVariables.value(parseInt(_0x389097)))));
      } else {
        break;
      }
    }
  }
  return _0x22659c;
};
Window_Base.prototype.convertButtonAssistEscapeCharacters = function (_0x4bd231) {
  if (Imported.VisuMZ_0_CoreEngine) {
    _0x4bd231 = _0x4bd231.replace(/<Up (?:KEY|BUTTON)>/gi, this.convertButtonAssistText('up'));
    _0x4bd231 = _0x4bd231.replace(/<Left (?:KEY|BUTTON)>/gi, this.convertButtonAssistText("left"));
    _0x4bd231 = _0x4bd231.replace(/<Right (?:KEY|BUTTON)>/gi, this.convertButtonAssistText("right"));
    _0x4bd231 = _0x4bd231.replace(/<Down (?:KEY|BUTTON)>/gi, this.convertButtonAssistText("down"));
    _0x4bd231 = _0x4bd231.replace(/<Ok (?:KEY|BUTTON)>/gi, this.convertButtonAssistText('ok'));
    _0x4bd231 = _0x4bd231.replace(/<Cancel (?:KEY|BUTTON)>/gi, this.convertButtonAssistText("cancel"));
    _0x4bd231 = _0x4bd231.replace(/<Menu (?:KEY|BUTTON)>/gi, this.convertButtonAssistText("menu"));
    _0x4bd231 = _0x4bd231.replace(/<Shift (?:KEY|BUTTON)>/gi, this.convertButtonAssistText("shift"));
    _0x4bd231 = _0x4bd231.replace(/<(?:PAGEUP|PAGE UP) (?:KEY|BUTTON)>/gi, this.convertButtonAssistText("pageup"));
    _0x4bd231 = _0x4bd231.replace(/<(?:PAGEDOWN|PAGEDN|PAGE DOWN) (?:KEY|BUTTON)>/gi, this.convertButtonAssistText("pagedown"));
  }
  return _0x4bd231;
};
Window_Base.prototype.convertButtonAssistText = function (_0x34168c) {
  let _0x1bd556 = TextManager.getInputButtonString(_0x34168c) || '';
  _0x1bd556 = this.convertBackslashCharacters(_0x1bd556);
  _0x1bd556 = this.convertVariableEscapeCharacters(_0x1bd556);
  return _0x1bd556.trim();
};
Window_Base.prototype.preConvertEscapeCharacters = function (_0x574bfd) {
  _0x574bfd = this.switchOutTextForLocalization(_0x574bfd);
  this.registerActorNameAutoColorChanges();
  return _0x574bfd;
};
Window_Base.prototype.switchOutTextForLocalization = function (_0x45c104) {
  _0x45c104 = TextManager.parseLocalizedText(_0x45c104);
  return _0x45c104;
};
VisuMZ.MessageCore.String_format = String.prototype.format;
String.prototype.format = function () {
  let _0x5c4f1f = this;
  _0x5c4f1f = TextManager.parseLocalizedText(_0x5c4f1f);
  return VisuMZ.MessageCore.String_format.apply(_0x5c4f1f, arguments);
};
VisuMZ.MessageCore.Bitmap_drawText = Bitmap.prototype.drawText;
Bitmap.prototype.drawText = function (_0x395fde, _0x53024c, _0x3bed35, _0x32b505, _0x4ad713, _0x21e917) {
  _0x395fde = TextManager.parseLocalizedText(_0x395fde);
  VisuMZ.MessageCore.Bitmap_drawText.call(this, _0x395fde, _0x53024c, _0x3bed35, _0x32b505, _0x4ad713, _0x21e917);
};
VisuMZ.MessageCore.Bitmap_drawTextTopAligned = Bitmap.prototype.drawTextTopAligned;
Bitmap.prototype.drawTextTopAligned = function (_0x1223e5, _0x223b05, _0x20edee, _0x28cb8a, _0x5a8447, _0xb1df5a) {
  _0x1223e5 = TextManager.parseLocalizedText(_0x1223e5);
  VisuMZ.MessageCore.Bitmap_drawTextTopAligned.call(this, _0x1223e5, _0x223b05, _0x20edee, _0x28cb8a, _0x5a8447, _0xb1df5a);
};
Window_Base.prototype.postConvertEscapeCharacters = function (_0x93dfc7) {
  return _0x93dfc7;
};
Window_Base.prototype.convertShowChoiceEscapeCodes = function (_0x4f9ba2) {
  if (this.isChoiceWindow()) {
    _0x4f9ba2 = _0x4f9ba2.replace(/<(?:SHOW|HIDE|DISABLE|ENABLE)>/gi, '');
    _0x4f9ba2 = _0x4f9ba2.replace(/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi, '');
    _0x4f9ba2 = _0x4f9ba2.replace(/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:ALL|ANY)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi, '');
    _0x4f9ba2 = _0x4f9ba2.replace(/<CHOICE WIDTH:[ ](\d+)>/gi, '');
    _0x4f9ba2 = _0x4f9ba2.replace(/<CHOICE INDENT:[ ](\d+)>/gi, '');
    _0x4f9ba2 = _0x4f9ba2.replace(/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi, '');
    _0x4f9ba2 = _0x4f9ba2.replace(/<(?:FG|BG)(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/gi, '');
    _0x4f9ba2 = _0x4f9ba2.replace(/<(?:FG|BG)(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/gi, '');
  }
  return _0x4f9ba2;
};
Window_Base.prototype.isChoiceWindow = function () {
  const _0x1e0a70 = ["Window_ChoiceList", "Window_MessageLog"];
  return _0x1e0a70.includes(this.constructor.name);
};
Window_Base.prototype.convertFontSettingsEscapeCharacters = function (_0x394074) {
  _0x394074 = _0x394074.replace(/<B>/gi, "BOLD[1]");
  _0x394074 = _0x394074.replace(/<\/B>/gi, "BOLD[0]");
  _0x394074 = _0x394074.replace(/<I>/gi, "ITALIC[1]");
  _0x394074 = _0x394074.replace(/<\/I>/gi, "ITALIC[0]");
  return _0x394074;
};
Window_Base.prototype.convertTextAlignmentEscapeCharacters = function (_0x1ef644) {
  _0x1ef644 = _0x1ef644.replace(/<LEFT>/gi, "TEXTALIGNMENT[1]");
  _0x1ef644 = _0x1ef644.replace(/<\/LEFT>/gi, "TEXTALIGNMENT[0]");
  _0x1ef644 = _0x1ef644.replace(/<CENTER>/gi, "TEXTALIGNMENT[2]");
  _0x1ef644 = _0x1ef644.replace(/<\/CENTER>/gi, "TEXTALIGNMENT[0]");
  _0x1ef644 = _0x1ef644.replace(/<RIGHT>/gi, "TEXTALIGNMENT[3]");
  _0x1ef644 = _0x1ef644.replace(/<\/RIGHT>/gi, "TEXTALIGNMENT[0]");
  return _0x1ef644;
};
Window_Base.prototype.convertLockColorsEscapeCharacters = function (_0x58ab7f) {
  _0x58ab7f = _0x58ab7f.replace(/<COLORLOCK>/gi, "COLORLOCK[1]");
  _0x58ab7f = _0x58ab7f.replace(/<\/COLORLOCK>/gi, "COLORLOCK[0]");
  _0x58ab7f = _0x58ab7f.replace(/\(\(\(/gi, "COLORLOCK[1]");
  _0x58ab7f = _0x58ab7f.replace(/\)\)\)/gi, "COLORLOCK[0]");
  return _0x58ab7f;
};
Window_Base.prototype.convertCasingEscapeCharacters = function (_0x2e5faa) {
  _0x2e5faa = _0x2e5faa.replace(/<(?:LC|LOWERCASE|LOWER CASE|LOWER)>/gi, "CASING[1]");
  _0x2e5faa = _0x2e5faa.replace(/<\/(?:LC|LOWERCASE|LOWER CASE|LOWER)>/gi, "CASING[0]");
  _0x2e5faa = _0x2e5faa.replace(/<(?:UC|UPPERCASE|UPPER CASE|UPPER)>/gi, "CASING[2]");
  _0x2e5faa = _0x2e5faa.replace(/<\/(?:UC|UPPERCASE|UPPER CASE|UPPER)>/gi, "CASING[0]");
  _0x2e5faa = _0x2e5faa.replace(/<(?:CAPS|CAPSLOCK|CAPS LOCK|CAP)>/gi, "CASING[3]");
  _0x2e5faa = _0x2e5faa.replace(/<\/(?:CAPS|CAPSLOCK|CAPS LOCK|CAP)>/gi, "CASING[0]");
  _0x2e5faa = _0x2e5faa.replace(/<(?:ALT|ALTERNATE|ALT CASE)>/gi, "CASING[4]");
  _0x2e5faa = _0x2e5faa.replace(/<\/(?:ALT|ALTERNATE|ALT CASE)>/gi, "CASING[0]");
  _0x2e5faa = _0x2e5faa.replace(/<(?:CHAOS|CHAOSCASE|CHAOS CASE)>/gi, "CASING[5]");
  _0x2e5faa = _0x2e5faa.replace(/<\/(?:CHAOS|CHAOSCASE|CHAOS CASE)>/gi, "CASING[0]");
  return _0x2e5faa;
};
Window_Base.prototype.convertBaseEscapeCharacters = function (_0x130e8a) {
  _0x130e8a = _0x130e8a.replace(/\x1bN\[(\d+)\]/gi, (_0xce3c69, _0x174b00) => this.actorName(parseInt(_0x174b00)));
  _0x130e8a = _0x130e8a.replace(/\x1bP\[(\d+)\]/gi, (_0x445b9b, _0x228cc0) => this.partyMemberName(parseInt(_0x228cc0)));
  _0x130e8a = _0x130e8a.replace(/\x1bG/gi, TextManager.currencyUnit);
  return _0x130e8a;
};
Window_Base.prototype.convertHardcodedEscapeReplacements = function (_0x20ec84) {
  _0x20ec84 = _0x20ec84.replace(/\<(?:BATTLE|CURRENT BATTLE) TARGET\>/gi, this.battleTargetName());
  _0x20ec84 = _0x20ec84.replace(/\<(?:BATTLE|CURRENT BATTLE) (?:USER|SUBJECT)\>/gi, this.battleUserName());
  _0x20ec84 = _0x20ec84.replace(/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION)\>/gi, this.battleActionName(true));
  _0x20ec84 = _0x20ec84.replace(/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION) NAME\>/gi, this.battleActionName(false));
  return _0x20ec84;
};
Window_Base.prototype.battleTargetName = function () {
  if (!SceneManager.isSceneBattle()) {
    return '';
  }
  if (BattleManager._target) {
    return BattleManager._target.name();
  }
  if (BattleManager._targets[0x0]) {
    return BattleManager._targets[0x0].name();
  }
  return '';
};
Window_Base.prototype.battleUserName = function () {
  if (!SceneManager.isSceneBattle()) {
    return '';
  }
  let _0x33743a = null;
  _0x33743a = BattleManager._subject;
  if (!_0x33743a && BattleManager.isInputting()) {
    _0x33743a = BattleManager.actor();
  }
  return _0x33743a ? _0x33743a.name() : '';
};
Window_Base.prototype.battleActionName = function (_0x50c5be) {
  if (!SceneManager.isSceneBattle()) {
    return '';
  }
  let _0x190cf5 = BattleManager._action || null;
  if (!_0x190cf5 && BattleManager.isInputting()) {
    _0x190cf5 = BattleManager.inputtingAction();
  }
  if (_0x190cf5 && _0x190cf5.item()) {
    let _0x5b6be4 = '';
    if (_0x50c5be) {
      _0x5b6be4 += "I[%1]".format(_0x190cf5.item().iconIndex);
    }
    _0x5b6be4 += _0x190cf5.item().name;
    return _0x5b6be4;
  }
  return '';
};
Window_Base.prototype.convertMessageCoreEscapeActions = function (_0x39932a) {
  for (const _0x589b14 of VisuMZ.MessageCore.Settings.TextCodeActions) {
    if (_0x39932a.match(_0x589b14.textCodeCheck)) {
      _0x39932a = _0x39932a.replace(_0x589b14.textCodeCheck, _0x589b14.textCodeResult);
      _0x39932a = this.convertVariableEscapeCharacters(_0x39932a);
    }
  }
  return _0x39932a;
};
Window_Base.prototype.convertMessageCoreEscapeReplacements = function (_0x441f7b) {
  for (const _0x5bb34a of VisuMZ.MessageCore.Settings.TextCodeReplace) {
    if (_0x441f7b.match(_0x5bb34a.textCodeCheck)) {
      _0x441f7b = _0x441f7b.replace(_0x5bb34a.textCodeCheck, _0x5bb34a.textCodeResult.bind(this));
      _0x441f7b = this.convertVariableEscapeCharacters(_0x441f7b);
    }
  }
  return _0x441f7b;
};
Window_Base.prototype.actorName = function (_0x5aa5cf) {
  const _0xad5f2a = _0x5aa5cf >= 0x1 ? $gameActors.actor(_0x5aa5cf) : null;
  const _0x446156 = _0xad5f2a ? _0xad5f2a.name() : '';
  const _0x583b30 = Number(VisuMZ.MessageCore.Settings.AutoColor.Actors);
  return this.isAutoColorAffected() && _0x583b30 !== 0x0 ? "C[%1]%2PREVCOLOR[0]".format(_0x583b30, _0x446156) : _0x446156;
};
Window_Base.prototype.partyMemberName = function (_0x533787) {
  const _0x3aed74 = _0x533787 >= 0x1 ? $gameParty.members()[_0x533787 - 0x1] : null;
  const _0x25060d = _0x3aed74 ? _0x3aed74.name() : '';
  const _0x11271e = Number(VisuMZ.MessageCore.Settings.AutoColor.Actors);
  return this.isAutoColorAffected() && _0x11271e !== 0x0 ? "C[%1]%2PREVCOLOR[0]".format(_0x11271e, _0x25060d) : _0x25060d;
};
Window_Base.prototype.processAutoColorWords = function (_0x2ac9a1) {
  if (this.isAutoColorAffected()) {
    _0x2ac9a1 = this.processStoredAutoColorChanges(_0x2ac9a1);
    _0x2ac9a1 = this.processActorNameAutoColorChanges(_0x2ac9a1);
  }
  return _0x2ac9a1;
};
Window_Base.prototype.processStoredAutoColorChanges = function (_0x5ee8da) {
  for (autoColor of VisuMZ.MessageCore.AutoColorRegExp) {
    _0x5ee8da = _0x5ee8da.replace(autoColor[0x0], autoColor[0x1]);
  }
  return _0x5ee8da;
};
Window_Base.prototype.clearActorNameAutoColor = function () {
  this._autoColorActorNames = [];
};
Window_Base.prototype.registerActorNameAutoColorChanges = function () {
  this.clearActorNameAutoColor();
  const _0x1c0a0e = VisuMZ.MessageCore.Settings.AutoColor;
  const _0x3e23f0 = _0x1c0a0e.Actors;
  if (_0x3e23f0 <= 0x0) {
    return;
  }
  for (const _0x3cadce of $gameActors._data) {
    if (!_0x3cadce) {
      continue;
    }
    const _0x3f813b = _0x3cadce.name();
    if (_0x3f813b.trim().length <= 0x0) {
      continue;
    }
    if (/^\d+$/.test(_0x3f813b)) {
      continue;
    }
    if (_0x3f813b.match(/-----/i)) {
      continue;
    }
    let _0x59ee09 = VisuMZ.MessageCore.ConvertTextAutoColorRegExpFriendly(_0x3f813b);
    const _0x113029 = new RegExp("\\b" + _0x59ee09 + "\\b", 'g');
    const _0x8fed7a = "C[%1]%2PREVCOLOR[0]".format(_0x3e23f0, _0x3f813b);
    this._autoColorActorNames.push([_0x113029, _0x8fed7a]);
  }
};
Window_Base.prototype.processActorNameAutoColorChanges = function (_0x91de21) {
  if (this._autoColorActorNames === undefined) {
    this.registerActorNameAutoColorChanges();
  }
  for (autoColor of this._autoColorActorNames) {
    _0x91de21 = _0x91de21.replace(autoColor[0x0], autoColor[0x1]);
  }
  return _0x91de21;
};
Window_Base.prototype.databaseObjectName = function (_0x2c2082, _0x50e3d7, _0x413c94) {
  if (!_0x2c2082) {
    return '';
  }
  const _0x58dc9b = _0x2c2082[_0x50e3d7];
  let _0x5df1d5 = '';
  if (_0x58dc9b && _0x413c94 && _0x58dc9b.iconIndex) {
    _0x5df1d5 = "i[%1]%2".format(_0x58dc9b.iconIndex, _0x58dc9b.name);
  } else if (_0x58dc9b) {
    _0x5df1d5 = _0x58dc9b.name;
  } else {
    _0x5df1d5 = '';
  }
  _0x5df1d5 = TextManager.parseLocalizedText(_0x5df1d5);
  if (this.isAutoColorAffected()) {
    _0x5df1d5 = this.applyDatabaseAutoColor(_0x5df1d5, _0x2c2082);
  }
  return _0x5df1d5;
};
Window_Base.prototype.lastGainedObjectIcon = function () {
  const _0x32e626 = $gameParty.getLastGainedItemData();
  if (_0x32e626.id < 0x0) {
    return '';
  }
  let _0x3813fb = null;
  if (_0x32e626.type === 0x0) {
    _0x3813fb = $dataItems[_0x32e626.id];
  }
  if (_0x32e626.type === 0x1) {
    _0x3813fb = $dataWeapons[_0x32e626.id];
  }
  if (_0x32e626.type === 0x2) {
    _0x3813fb = $dataArmors[_0x32e626.id];
  }
  if (!_0x3813fb) {
    return '';
  }
  return "i[%1]".format(_0x3813fb.iconIndex);
};
Window_Base.prototype.lastGainedObjectName = function (_0x112292) {
  const _0x2daf70 = $gameParty.getLastGainedItemData();
  if (_0x2daf70.id < 0x0) {
    return '';
  }
  let _0x77007d = null;
  if (_0x2daf70.type === 0x0) {
    _0x77007d = $dataItems[_0x2daf70.id];
  }
  if (_0x2daf70.type === 0x1) {
    _0x77007d = $dataWeapons[_0x2daf70.id];
  }
  if (_0x2daf70.type === 0x2) {
    _0x77007d = $dataArmors[_0x2daf70.id];
  }
  if (!_0x77007d) {
    return '';
  }
  return _0x112292 ? "i[%1]%2".format(_0x77007d.iconIndex, _0x77007d.name) : _0x77007d.name;
};
Window_Base.prototype.lastGainedObjectQuantity = function () {
  const _0x279fdf = $gameParty.getLastGainedItemData();
  if (_0x279fdf.id <= 0x0) {
    return '';
  }
  return _0x279fdf.quantity;
};
Window_Base.prototype.applyDatabaseAutoColor = function (_0x394123, _0x20b80b) {
  const _0x16074b = VisuMZ.MessageCore.Settings.AutoColor;
  let _0x4c018c = 0x0;
  if (_0x20b80b === $dataActors) {
    _0x4c018c = _0x16074b.Actors;
  }
  if (_0x20b80b === $dataClasses) {
    _0x4c018c = _0x16074b.Classes;
  }
  if (_0x20b80b === $dataSkills) {
    _0x4c018c = _0x16074b.Skills;
  }
  if (_0x20b80b === $dataItems) {
    _0x4c018c = _0x16074b.Items;
  }
  if (_0x20b80b === $dataWeapons) {
    _0x4c018c = _0x16074b.Weapons;
  }
  if (_0x20b80b === $dataArmors) {
    _0x4c018c = _0x16074b.Armors;
  }
  if (_0x20b80b === $dataEnemies) {
    _0x4c018c = _0x16074b.Enemies;
  }
  if (_0x20b80b === $dataStates) {
    _0x4c018c = _0x16074b.States;
  }
  if (_0x4c018c > 0x0) {
    _0x394123 = "C[%1]%2PREVCOLOR[0]".format(_0x4c018c, _0x394123);
  }
  return _0x394123;
};
Window_Base.prototype.prepareWordWrapEscapeCharacters = function (_0x56a25f) {
  if (_0x56a25f.includes("TEXTALIGNMENT")) {
    this.setWordWrap(false);
    _0x56a25f = _0x56a25f.replace(/<(?:BR|LINEBREAK)>/gi, " \n");
    return _0x56a25f;
  }
  _0x56a25f = _0x56a25f.replace(/<(?:WORDWRAP|WORD WRAP)>/gi, (_0x13b4c3, _0x113fa5) => this.setWordWrap(true));
  _0x56a25f = _0x56a25f.replace(/<(?:NOWORDWRAP|NO WORD WRAP)>/gi, (_0x1084d4, _0x10498b) => this.setWordWrap(false));
  _0x56a25f = _0x56a25f.replace(/<\/(?:WORDWRAP|WORD WRAP)>/gi, (_0x394931, _0x1094cc) => this.setWordWrap(false));
  if (_0x56a25f.match(Window_Message._autoSizeRegexp)) {
    this.setWordWrap(false);
  } else if (_0x56a25f.match(Window_Message._autoPosRegExp)) {
    this.setWordWrap(false);
  }
  if (!this.isWordWrapEnabled()) {
    _0x56a25f = _0x56a25f.replace(/<(?:BR|LINEBREAK)>/gi, " \n");
    return _0x56a25f;
  }
  if (_0x56a25f.length <= 0x0) {
    return _0x56a25f;
  }
  if (_0x56a25f.match(/[\u3040-\u30FF\u4E00-\u9FFF]/g)) {
    _0x56a25f = VisuMZ.MessageCore.SplitJpCnCharacters(_0x56a25f).join('');
  }
  if (VisuMZ.MessageCore.Settings.WordWrap.LineBreakSpace) {
    _0x56a25f = _0x56a25f.replace(/[\n\r]+/g, " ");
    _0x56a25f = _0x56a25f.replace(/<(?:BR|LINEBREAK)>/gi, " \n");
  } else {
    _0x56a25f = _0x56a25f.replace(/[\n\r]+/g, '');
    _0x56a25f = _0x56a25f.replace(/<(?:BR|LINEBREAK)>/gi, "\n");
  }
  _0x56a25f = this.addWrapBreakAfterPunctuation(_0x56a25f);
  _0x56a25f = _0x56a25f.split(" ").join("WrapBreak[0]");
  _0x56a25f = _0x56a25f.replace(/<(?:BR|LINEBREAK)>/gi, "\n");
  _0x56a25f = _0x56a25f.replace(/<LINE\x1bWrapBreak[0]BREAK>/gi, "\n");
  return _0x56a25f;
};
VisuMZ.MessageCore.SplitJpCnCharacters = function (_0x4f2f8e) {
  let _0x5e7b0e = [];
  let _0x401b9e = '';
  while (_0x4f2f8e.length > 0x0) {
    const _0x52278d = _0x4f2f8e.charAt(0x0);
    _0x4f2f8e = _0x4f2f8e.slice(0x1);
    if (_0x52278d.match(/[\u3040-\u30FF\u4E00-\u9FFF]/g)) {
      if (_0x401b9e.length > 0x0) {
        _0x5e7b0e.push(_0x401b9e);
        _0x401b9e = '';
      }
      _0x5e7b0e.push(_0x52278d + "WrapJpBreak[0]");
    } else {
      _0x401b9e += _0x52278d;
    }
  }
  if (_0x401b9e.length > 0x0) {
    _0x5e7b0e.push(_0x401b9e);
    _0x401b9e = '';
  }
  return _0x5e7b0e;
};
Window_Base.prototype.addWrapBreakAfterPunctuation = function (_0x524aae) {
  return _0x524aae;
};
VisuMZ.MessageCore.Window_Base_processNewLine = Window_Base.prototype.processNewLine;
Window_Base.prototype.processNewLine = function (_0x4aa936) {
  VisuMZ.MessageCore.Window_Base_processNewLine.call(this, _0x4aa936);
  this.processTextAlignmentX(_0x4aa936);
};
Window_Base.prototype.processCharacter = function (_0x95eaf) {
  let _0xdfd990 = _0x95eaf.text[_0x95eaf.index++];
  if (_0xdfd990.charCodeAt(0x0) < 0x20) {
    this.flushTextState(_0x95eaf);
    this.processControlCharacter(_0x95eaf, _0xdfd990);
  } else {
    if (this._textCasing === 0x1) {
      _0xdfd990 = _0xdfd990.toLowerCase();
    }
    if (this._textCasing === 0x2) {
      if (this._textCasingUpperState) {
        _0xdfd990 = _0xdfd990.toUpperCase();
      }
      this._textCasingUpperState = /\s/.test(_0xdfd990);
    }
    if (this._textCasing === 0x3) {
      _0xdfd990 = _0xdfd990.toUpperCase();
    }
    if (this._textCasing === 0x4) {
      _0xdfd990 = this._lastAltCase ? _0xdfd990.toUpperCase() : _0xdfd990.toLowerCase();
      this._lastAltCase = !this._lastAltCase;
    }
    if (this._textCasing === 0x5) {
      _0xdfd990 = Math.random() < 0.5 ? _0xdfd990.toUpperCase() : _0xdfd990.toLowerCase();
    }
    _0x95eaf.buffer += _0xdfd990;
  }
};
VisuMZ.MessageCore.Window_Base_processControlCharacter = Window_Base.prototype.processControlCharacter;
Window_Base.prototype.processControlCharacter = function (_0x5e5657, _0x520901) {
  VisuMZ.MessageCore.Window_Base_processControlCharacter.call(this, _0x5e5657, _0x520901);
  if (_0x520901 === "WrapBreak[0]") {
    this.processWrapBreak(_0x5e5657);
  } else if (_0x520901 === "WrapJpBreak[0]") {
    this.processWrapBreak(_0x5e5657, true);
  }
};
Window_Base.prototype.obtainEscapeString = function (_0x536f16) {
  var _0x1882cc = /^\<(.*?)\>/.exec(_0x536f16.text.slice(_0x536f16.index));
  return _0x1882cc ? (_0x536f16.index += _0x1882cc[0x0].length, String(_0x1882cc[0x0].slice(0x1, _0x1882cc[0x0].length - 0x1))) : '';
};
VisuMZ.MessageCore.Window_Base_processEscapeCharacter = Window_Base.prototype.processEscapeCharacter;
Window_Base.prototype.processEscapeCharacter = function (_0x559ab6, _0x17c458) {
  switch (_0x559ab6) {
    case 'C':
      if (_0x17c458.drawing) {
        VisuMZ.MessageCore.Window_Base_processEscapeCharacter.call(this, _0x559ab6, _0x17c458);
      } else {
        this.obtainEscapeParam(_0x17c458);
      }
      break;
    case 'I':
    case '{':
    case '}':
      VisuMZ.MessageCore.Window_Base_processEscapeCharacter.call(this, _0x559ab6, _0x17c458);
      break;
    case 'FS':
      this.processFsTextCode(_0x17c458);
      break;
    case 'PX':
      this.processPxTextCode(_0x17c458);
      break;
    case 'PY':
      this.processPyTextCode(_0x17c458);
      break;
    case "BOLD":
      this.processFontChangeBold(this.obtainEscapeParam(_0x17c458));
      break;
    case "CASING":
      this.processTextCasing(_0x17c458);
      break;
    case "CENTERPICTURE":
      this.processDrawCenteredPicture(_0x17c458);
      break;
    case 'COLORLOCK':
      this.processColorLock(_0x17c458);
      break;
    case "COMMONEVENT":
      this.processCommonEvent(_0x17c458);
      break;
    case "ITALIC":
      this.processFontChangeItalic(this.obtainEscapeParam(_0x17c458));
      break;
    case "PICTURE":
      this.processDrawPicture(_0x17c458);
      break;
    case 'PREVCOLOR':
      this.processPreviousColor(_0x17c458);
      break;
    case "TEXTALIGNMENT":
      this.processTextAlignmentChange(_0x17c458);
      break;
    case "WAIT":
      this.processCustomWait(_0x17c458);
      break;
    case "WRAPBREAK":
      this.processWrapBreak(_0x17c458);
      break;
    case "WRAPJPBREAK":
      this.processWrapBreak(_0x17c458, true);
      break;
    default:
      this.processMessageCoreEscapeActions(_0x559ab6, _0x17c458);
  }
};
Window_Base.prototype.processMessageCoreEscapeActions = function (_0x358faa, _0x8ac205) {
  for (const _0x2d4c06 of VisuMZ.MessageCore.Settings.TextCodeActions) {
    if (_0x2d4c06.Match === _0x358faa) {
      if (_0x2d4c06.Type === '') {
        this.obtainEscapeParam(_0x8ac205);
      }
      _0x2d4c06.ActionJS.call(this, _0x8ac205);
      if (this.constructor === Window_Message) {
        const _0x44224d = _0x2d4c06.CommonEvent || 0x0;
        if (_0x44224d > 0x0) {
          this.launchMessageCommonEvent(_0x44224d);
        }
      }
    }
  }
};
Window_Base.prototype.makeFontBigger = function () {
  this.contents.fontSize += VisuMZ.MessageCore.Settings.General.FontChangeValue;
  this.contents.fontSize = Math.min(this.contents.fontSize, VisuMZ.MessageCore.Settings.General.FontBiggerCap);
};
Window_Base.prototype.makeFontSmaller = function () {
  this.contents.fontSize -= VisuMZ.MessageCore.Settings.General.FontChangeValue;
  this.contents.fontSize = Math.max(this.contents.fontSize, VisuMZ.MessageCore.Settings.General.FontSmallerCap);
};
Window_Base.prototype.processFsTextCode = function (_0x4abcd4) {
  const _0x5e26bf = this.obtainEscapeParam(_0x4abcd4);
  this.contents.fontSize = _0x5e26bf.clamp(VisuMZ.MessageCore.Settings.General.FontSmallerCap, VisuMZ.MessageCore.Settings.General.FontBiggerCap);
};
Window_Base.prototype.maxFontSizeInLine = function (_0x3eb2dd) {
  let _0x2c2efd = this.contents.fontSize;
  const _0x486496 = /\x1b({|}|FS)(\[(\d+)])?/gi;
  for (;;) {
    const _0xee2ec5 = _0x486496.exec(_0x3eb2dd);
    if (!_0xee2ec5) {
      break;
    }
    const _0x6a45c2 = String(_0xee2ec5[0x1]).toUpperCase();
    if (_0x6a45c2 === '{') {
      this.makeFontBigger();
    } else {
      if (_0x6a45c2 === '}') {
        this.makeFontSmaller();
      } else if (_0x6a45c2 === 'FS') {
        this.contents.fontSize = parseInt(_0xee2ec5[0x3]).clamp(VisuMZ.MessageCore.Settings.General.FontSmallerCap, VisuMZ.MessageCore.Settings.General.FontBiggerCap);
      }
    }
    if (this.contents.fontSize > _0x2c2efd) {
      _0x2c2efd = this.contents.fontSize;
    }
  }
  return _0x2c2efd;
};
Window_Base.prototype.processPxTextCode = function (_0x3b8b4f) {
  _0x3b8b4f.x = this.obtainEscapeParam(_0x3b8b4f);
  if (VisuMZ.MessageCore.Settings.General.RelativePXPY) {
    _0x3b8b4f.x += _0x3b8b4f.startX;
  }
};
Window_Base.prototype.processPyTextCode = function (_0x30f88d) {
  _0x30f88d.y = this.obtainEscapeParam(_0x30f88d);
  if (VisuMZ.MessageCore.Settings.General.RelativePXPY) {
    _0x30f88d.y += _0x30f88d.startY;
  }
};
Window_Base.prototype.processFontChangeBold = function (_0x42e934) {
  this.contents.fontBold = !!_0x42e934;
};
Window_Base.prototype.processFontChangeItalic = function (_0x2e46b4) {
  this.contents.fontItalic = !!_0x2e46b4;
};
Window_Base.prototype.processTextAlignmentChange = function (_0x5a3dcc) {
  const _0x1c3886 = this.obtainEscapeParam(_0x5a3dcc);
  if (!_0x5a3dcc.drawing) {
    return;
  }
  switch (_0x1c3886) {
    case 0x0:
      this.setTextAlignment("default");
      return;
    case 0x1:
      this.setTextAlignment("left");
      break;
    case 0x2:
      this.setTextAlignment("center");
      break;
    case 0x3:
      this.setTextAlignment('right');
      break;
  }
  this.processTextAlignmentX(_0x5a3dcc);
};
Window_Base.prototype.processTextAlignmentX = function (_0x283189) {
  if (!_0x283189.drawing) {
    return;
  }
  if (_0x283189.rtl) {
    return;
  }
  if (this.getTextAlignment() === "default") {
    return;
  }
  let _0x164fb3 = _0x283189.text.indexOf("TEXTALIGNMENT", _0x283189.index + 0x1);
  let _0x534bc4 = _0x283189.text.indexOf("\n", _0x283189.index + 0x1);
  if (_0x164fb3 < 0x0) {
    _0x164fb3 = _0x283189.text.length + 0x1;
  }
  if (_0x534bc4 > 0x0) {
    _0x164fb3 = Math.min(_0x164fb3, _0x534bc4);
  }
  const _0x127084 = _0x283189.text.substring(_0x283189.index, _0x164fb3);
  const _0x263499 = this.textSizeExTextAlignment(_0x127084).width;
  const _0x529229 = _0x283189.width || this.innerWidth - 0x8;
  const _0x48d9d6 = this.constructor === Window_Message && $gameMessage.faceName() !== '';
  switch (this.getTextAlignment()) {
    case "left":
      _0x283189.x = _0x283189.startX;
      break;
    case "center":
      _0x283189.x = _0x283189.startX;
      _0x283189.x += Math.floor((_0x529229 - _0x263499) / 0x2);
      if (_0x48d9d6) {
        _0x283189.x -= _0x283189.startX / 0x2;
      }
      break;
    case 'right':
      _0x283189.x = _0x529229 - _0x263499 + _0x283189.startX;
      if (_0x48d9d6) {
        _0x283189.x -= _0x283189.startX;
      }
      break;
  }
};
Window_Base.prototype.textSizeExTextAlignment = function (_0x598d10) {
  _0x598d10 = _0x598d10.replace(/\x1b!/g, '');
  _0x598d10 = _0x598d10.replace(/\x1b\|/g, '');
  _0x598d10 = _0x598d10.replace(/\x1b\./g, '');
  const _0x1a4673 = this.createTextState(_0x598d10, 0x0, 0x0, 0x0);
  const _0x4c846d = this.getPreservedFontSettings();
  _0x1a4673.drawing = false;
  this.processAllText(_0x1a4673);
  this.returnPreservedFontSettings(_0x4c846d);
  return {
    'width': _0x1a4673.outputWidth,
    'height': _0x1a4673.outputHeight
  };
};
Window_Base.WORD_WRAP_PADDING = VisuMZ.MessageCore.Settings.WordWrap.EndPadding || 0x0;
Window_Base.prototype.processWrapBreak = function (_0x37544b, _0x2fb10c) {
  const _0x19cfd6 = (_0x37544b.rtl ? -0x1 : 0x1) * this.textWidth(" ");
  if (!_0x2fb10c) {
    _0x37544b.x += _0x19cfd6;
  }
  if (this.obtainEscapeParam(_0x37544b) > 0x0 && !_0x2fb10c) {
    _0x37544b.x += _0x19cfd6;
  }
  if (_0x37544b.rtl) {
    return;
  }
  let _0x39b55e;
  if (_0x2fb10c) {
    _0x39b55e = _0x37544b.text.indexOf("WrapJpBreak[0]", _0x37544b.index + 0x1);
  } else {
    _0x39b55e = _0x37544b.text.indexOf("WrapBreak[0]", _0x37544b.index + 0x1);
  }
  let _0x173d8f = _0x37544b.text.indexOf("\n", _0x37544b.index + 0x1);
  if (_0x39b55e < 0x0) {
    _0x39b55e = _0x37544b.text.length + 0x1;
  }
  if (_0x173d8f > 0x0) {
    _0x39b55e = Math.min(_0x39b55e, _0x173d8f);
  }
  const _0x5f33d9 = _0x37544b.text.substring(_0x37544b.index, _0x39b55e);
  const _0xff9a03 = this.textSizeExWordWrap(_0x5f33d9).width;
  let _0xab0df2 = _0x37544b.width || this.innerWidth;
  _0xab0df2 -= Window_Base.WORD_WRAP_PADDING;
  if (this.constructor === Window_Message) {
    const _0x580a83 = $gameMessage.faceName() === '' ? 0x0 : ImageManager.faceWidth + 0x14;
    _0xab0df2 -= _0x580a83;
    if (VisuMZ.MessageCore.Settings.WordWrap.TightWrap) {
      _0xab0df2 -= _0x580a83;
    }
  }
  let _0x4faf66 = false;
  if (_0x37544b.x + _0xff9a03 > _0x37544b.startX + _0xab0df2) {
    _0x4faf66 = true;
  }
  if (_0xff9a03 === 0x0) {
    _0x4faf66 = false;
  }
  if (_0x4faf66) {
    _0x37544b.text = _0x37544b.text.slice(0x0, _0x37544b.index) + "\n" + _0x37544b.text.substr(_0x37544b.index);
  }
};
Window_Base.prototype.textSizeExWordWrap = function (_0x1a1fb9) {
  const _0x3711bb = this.createTextState(_0x1a1fb9, 0x0, 0x0, 0x0);
  const _0x438f6b = this.getPreservedFontSettings();
  _0x3711bb.drawing = false;
  this.setWordWrap(false);
  this.processAllText(_0x3711bb);
  this.setWordWrap(true);
  this.returnPreservedFontSettings(_0x438f6b);
  return {
    'width': _0x3711bb.outputWidth,
    'height': _0x3711bb.outputHeight
  };
};
Window_Base.prototype.processCommonEvent = function (_0x1cdee0) {
  return this.obtainEscapeParam(_0x1cdee0);
};
Window_Base.prototype.processDrawPicture = function (_0x348729) {
  const _0x1a5b3d = this.obtainEscapeString(_0x348729).split(',');
  if (!_0x348729.drawing) {
    return;
  }
  const _0x4e7ec4 = _0x1a5b3d[0x0].trim();
  const _0x380b9c = _0x1a5b3d[0x1] || 0x0;
  const _0x5dbae9 = _0x1a5b3d[0x2] || 0x0;
  const _0x6768e9 = ImageManager.loadPicture(_0x4e7ec4);
  const _0x5cd01e = this.contents.paintOpacity;
  _0x6768e9.addLoadListener(this.drawBackPicture.bind(this, _0x6768e9, _0x348729.x, _0x348729.y, _0x380b9c, _0x5dbae9, _0x5cd01e));
};
Window_Base.prototype.drawBackPicture = function (_0x11901, _0x419f47, _0x497966, _0x5e28a3, _0x425a4f, _0x18adcb) {
  _0x5e28a3 = _0x5e28a3 || _0x11901.width;
  _0x425a4f = _0x425a4f || _0x11901.height;
  this.contentsBack.paintOpacity = _0x18adcb;
  this.contentsBack.blt(_0x11901, 0x0, 0x0, _0x11901.width, _0x11901.height, _0x419f47, _0x497966, _0x5e28a3, _0x425a4f);
  this.contentsBack.paintOpacity = 0xff;
};
Window_Base.prototype.processDrawCenteredPicture = function (_0x50d3b1) {
  const _0x3a7d9b = this.obtainEscapeString(_0x50d3b1).split(',');
  if (!_0x50d3b1.drawing) {
    return;
  }
  const _0x24ecb4 = _0x3a7d9b[0x0].trim();
  const _0x5bf88c = ImageManager.loadPicture(_0x24ecb4);
  const _0x3579a6 = JsonEx.makeDeepCopy(_0x50d3b1);
  const _0x57cc9d = this.contents.paintOpacity;
  _0x5bf88c.addLoadListener(this.drawBackCenteredPicture.bind(this, _0x5bf88c, _0x3579a6, _0x57cc9d));
};
Window_Base.prototype.drawBackCenteredPicture = function (_0x111fba, _0x29bf4b, _0x46d663) {
  const _0x9388b3 = _0x29bf4b.width || this.innerWidth;
  const _0x8d6976 = this._index !== undefined ? this.itemHeight() : this.innerHeight;
  const _0x3fc7fe = _0x9388b3 / _0x111fba.width;
  const _0x3ad4b3 = _0x8d6976 / _0x111fba.height;
  const _0xb08016 = Math.min(_0x3fc7fe, _0x3ad4b3, 0x1);
  const _0x227af8 = this._index !== undefined ? (this.itemRectWithPadding(0x0).height - this.lineHeight()) / 0x2 : 0x0;
  const _0x3f94aa = _0x111fba.width * _0xb08016;
  const _0xcd578e = _0x111fba.height * _0xb08016;
  const _0x39e020 = Math.floor((_0x9388b3 - _0x3f94aa) / 0x2) + _0x29bf4b.startX;
  const _0x785032 = Math.floor((_0x8d6976 - _0xcd578e) / 0x2) + _0x29bf4b.startY - _0x227af8 * 0x2;
  this.contentsBack.paintOpacity = _0x46d663;
  this.contentsBack.blt(_0x111fba, 0x0, 0x0, _0x111fba.width, _0x111fba.height, _0x39e020, _0x785032, _0x3f94aa, _0xcd578e);
  this.contentsBack.paintOpacity = 0xff;
};
Window_Base.prototype.processColorLock = function (_0x236f3a) {
  const _0x255c1e = this.obtainEscapeParam(_0x236f3a);
  if (_0x236f3a.drawing) {
    this.setColorLock(_0x255c1e > 0x0);
  }
};
Window_Base.prototype.processCustomWait = function (_0x539a0f) {
  const _0x34ebcc = this.obtainEscapeParam(_0x539a0f);
  if (this.constructor === Window_Message && _0x539a0f.drawing) {
    this.startWait(_0x34ebcc);
  }
};
Window_Base.prototype.processTextCasing = function (_0x39d33d) {
  this._textCasing = this.obtainEscapeParam(_0x39d33d);
  this._textCasingUpperState = true;
  this._lastAltCase = true;
};
VisuMZ.MessageCore.NonSupportedTextCodes = function (_0x1a4610) {
  if ($gameTemp.isPlaytest()) {
    let _0x1dc3ad = "%1, does not support attempted text code usage.".format(_0x1a4610.constructor.name);
    alert(_0x1dc3ad);
    SceneManager.exit();
  }
};
Window_Base.prototype.loadMessageFace = function () {
  VisuMZ.MessageCore.NonSupportedTextCodes(this);
};
Window_Base.prototype.drawMessageFace = function () {
  VisuMZ.MessageCore.NonSupportedTextCodes(this);
};
Window_Base.prototype.setTextDelay = function () {
  VisuMZ.MessageCore.NonSupportedTextCodes(this);
};
Window_Help.prototype.resetWordWrap = function () {
  this.setWordWrap($gameSystem.isHelpWindowWordWrap());
};
Window_Help.prototype.isAutoColorAffected = function () {
  return true;
};
VisuMZ.MessageCore.Window_Help_refresh = Window_Help.prototype.refresh;
Window_Help.prototype.refresh = function () {
  this.clearActorNameAutoColor();
  VisuMZ.MessageCore.Window_Help_refresh.call(this);
  this.resetWordWrap();
};
VisuMZ.MessageCore.Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function () {
  VisuMZ.MessageCore.Window_Options_addGeneralOptions.call(this);
  this.addMessageCoreCommands();
};
Window_Options.prototype.addMessageCoreCommands = function () {
  if (VisuMZ.MessageCore.Settings.Localization.AddOption && TextManager.isVisuMzLocalizationEnabled()) {
    this.addMessageCoreLocalizationCommand();
  }
  if (VisuMZ.MessageCore.Settings.TextSpeed.AddOption) {
    this.addMessageCoreTextSpeedCommand();
  }
};
Window_Options.prototype.addMessageCoreLocalizationCommand = function () {
  const _0x406d4a = TextManager.messageCoreLocalization;
  this.addCommand(_0x406d4a, "textLocale");
};
Window_Options.prototype.addMessageCoreTextSpeedCommand = function () {
  const _0x5228f8 = TextManager.messageCoreTextSpeed;
  this.addCommand(_0x5228f8, "textSpeed");
};
VisuMZ.MessageCore.Window_Options_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function (_0x45fa28) {
  const _0x3df602 = this.commandSymbol(_0x45fa28);
  if (_0x3df602 === 'textLocale') {
    return this.visuMzTextLocaleStatusText();
  }
  if (_0x3df602 === "textSpeed") {
    return this.textSpeedStatusText();
  }
  return VisuMZ.MessageCore.Window_Options_statusText.call(this, _0x45fa28);
};
Window_Options.prototype.visuMzTextLocaleStatusText = function () {
  const _0x472c31 = ConfigManager.textLocale;
  return TextManager.getLanguageName(_0x472c31);
};
Window_Options.prototype.textSpeedStatusText = function () {
  const _0x28aa19 = this.getConfigValue("textSpeed");
  return _0x28aa19 > 0xa ? TextManager.instantTextSpeed : _0x28aa19;
};
VisuMZ.MessageCore.Window_Options_isVolumeSymbol = Window_Options.prototype.isVolumeSymbol;
Window_Options.prototype.isVolumeSymbol = function (_0x21def1) {
  if (_0x21def1 === 'textLocale') {
    return true;
  }
  if (_0x21def1 === "textSpeed") {
    return true;
  }
  return VisuMZ.MessageCore.Window_Options_isVolumeSymbol.call(this, _0x21def1);
};
VisuMZ.MessageCore.Window_Options_changeVolume = Window_Options.prototype.changeVolume;
Window_Options.prototype.changeVolume = function (_0x2d630d, _0x94edcb, _0x238fa6) {
  if (_0x2d630d === 'textLocale') {
    return this.changeVisuMzTextLocale(_0x94edcb, _0x238fa6);
  }
  if (_0x2d630d === 'textSpeed') {
    return this.changeTextSpeed(_0x2d630d, _0x94edcb, _0x238fa6);
  }
  VisuMZ.MessageCore.Window_Options_changeVolume.call(this, _0x2d630d, _0x94edcb, _0x238fa6);
};
Window_Options.prototype.changeVisuMzTextLocale = function (_0x577c3b, _0x465245) {
  const _0x47356b = VisuMZ.MessageCore.Settings.Localization.Languages || [];
  const _0x2aa06c = ConfigManager.textLocale;
  let _0x41641d = _0x47356b.indexOf(_0x2aa06c);
  _0x41641d += _0x577c3b ? 0x1 : -0x1;
  if (_0x41641d >= _0x47356b.length) {
    _0x41641d = _0x465245 ? 0x0 : _0x47356b.length - 0x1;
  }
  if (_0x41641d < 0x0) {
    _0x41641d = _0x465245 ? _0x47356b.length - 0x1 : 0x0;
  }
  this.changeValue("textLocale", _0x47356b[_0x41641d]);
};
Window_Options.prototype.changeTextSpeed = function (_0x19ed92, _0x48142b, _0x2d8e7d) {
  const _0x1b1359 = this.getConfigValue(_0x19ed92);
  const _0x196522 = _0x1b1359 + (_0x48142b ? 0x1 : -0x1);
  if (_0x196522 > 0xb && _0x2d8e7d) {
    this.changeValue(_0x19ed92, 0x1);
  } else {
    this.changeValue(_0x19ed92, _0x196522.clamp(0x1, 0xb));
  }
};
Window_Message.prototype.contentsHeight = function () {
  let _0xe26944 = Window_Base.prototype.contentsHeight.call(this);
  _0xe26944 -= this.addedHeight();
  return _0xe26944;
};
Window_Message.prototype.refreshDimmerBitmap = function () {
  Window_Base.prototype.refreshDimmerBitmap.call(this);
  if (VisuMZ.MessageCore.Settings.General.StretchDimmedBg) {
    this.stretchDimmerSprite();
  }
};
Window_Message.prototype.stretchDimmerSprite = function () {
  this._dimmerSprite.x = Math.round(this.width / 0x2);
  this._dimmerSprite.anchor.x = 0.5;
  this._dimmerSprite.scale.x = Graphics.width;
};
VisuMZ.MessageCore.Window_Message_clearFlags = Window_Message.prototype.clearFlags;
Window_Message.prototype.clearFlags = function () {
  VisuMZ.MessageCore.Window_Message_clearFlags.call(this);
  this.clearActorNameAutoColor();
  this.resetWordWrap();
  this.setColorLock(false);
  this.setTextAlignment("default");
  this.setTextDelay(VisuMZ.MessageCore.Settings.General.MessageTextDelay);
};
Window_Message.prototype.resetWordWrap = function () {
  this.setWordWrap($gameSystem.isMessageWindowWordWrap());
};
Window_Message.prototype.isAutoColorAffected = function () {
  return true;
};
Window_Message.prototype.setTextDelay = function (_0x2517b7) {
  const _0xa2b1c = 0xb - ConfigManager.textSpeed;
  _0x2517b7 = Math.round(_0x2517b7 * _0xa2b1c);
  this._textDelayCount = _0x2517b7;
  this._textDelay = _0x2517b7;
};
VisuMZ.MessageCore.Window_Message_isTriggered = Window_Message.prototype.isTriggered;
Window_Message.prototype.isTriggered = function () {
  return VisuMZ.MessageCore.Window_Message_isTriggered.call(this) || Input.isPressed(VisuMZ.MessageCore.Settings.General.FastForwardKey);
};
VisuMZ.MessageCore.Window_Message_updatePlacement = Window_Message.prototype.updatePlacement;
Window_Message.prototype.updatePlacement = function () {
  let _0x3ccde9 = this.y;
  this.x = Math.round((Graphics.boxWidth - this.width) / 0x2);
  VisuMZ.MessageCore.Window_Message_updatePlacement.call(this);
  if (this._autoPositionTarget) {
    this.y = _0x3ccde9;
  }
  this.updateXyOffsets();
  this.updateForcedPlacement();
  this.clampPlacementPosition();
  this.updateChoiceListHelpWindowPlacement();
};
VisuMZ.MessageCore.Window_Message_newPage = Window_Message.prototype.newPage;
Window_Message.prototype.newPage = function (_0x13af40) {
  this.convertNewPageTextStateMacros(_0x13af40);
  this.onNewPageMessageCore(_0x13af40);
  VisuMZ.MessageCore.Window_Message_newPage.call(this, _0x13af40);
  this.createContents();
};
Window_Message.prototype.convertNewPageTextStateMacros = function (_0x5b75ee) {
  if (!_0x5b75ee) {
    return;
  }
  this._macroBypassWordWrap = false;
  _0x5b75ee.text = this.convertTextMacros(_0x5b75ee.text);
  if (this._textMacroFound) {
    _0x5b75ee.text = this.prepareWordWrapEscapeCharacters(_0x5b75ee.text);
    this._macroBypassWordWrap = true;
  }
};
Window_Message.prototype.prepareWordWrapEscapeCharacters = function (_0x13da20) {
  if (this._macroBypassWordWrap) {
    return _0x13da20;
  }
  return Window_Base.prototype.prepareWordWrapEscapeCharacters.call(this, _0x13da20);
};
Window_Message.prototype.onNewPageMessageCore = function (_0x115a75) {
  this.prepareForcedPositionEscapeCharacters(_0x115a75);
  this.prepareAutoSizeEscapeCharacters(_0x115a75);
  this.updateDimensions();
};
VisuMZ.MessageCore.Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
Window_Message.prototype.terminateMessage = function () {
  VisuMZ.MessageCore.Window_Message_terminateMessage.call(this);
  this.clearFlags();
  if (this._messagePositionReset) {
    this.messagePositionReset();
  }
};
Window_Message.prototype.updateDimensions = function () {
  this.width = $gameSystem.getMessageWindowWidth() + this.addedWidth();
  ;
  this.width = Math.min(Graphics.width, this.width);
  const _0x32af73 = $gameSystem.getMessageWindowRows();
  this.height = SceneManager._scene.calcWindowHeight(_0x32af73, false) + this.addedHeight();
  this.height = Math.min(Graphics.height, this.height);
  if ($gameTemp._centerMessageWindow) {
    this.resetPositionX();
  }
};
Window_Message.prototype.addedWidth = function () {
  return 0x0;
};
Window_Message.prototype.addedHeight = function () {
  return 0x0;
};
Window_Message.prototype.resetPositionX = function () {
  this.x = (Graphics.boxWidth - this.width) / 0x2;
  $gameTemp._centerMessageWindow = undefined;
  this.clampPlacementPosition();
};
Window_Message.prototype.updateMove = function () {
  const _0x23f473 = {
    'x': this.x,
    'y': this.y
  };
  Window_Base.prototype.updateMove.call(this);
  this.updateNameBoxMove(_0x23f473);
};
Window_Message.prototype.canMove = function () {
  return true;
};
Window_Message.prototype.updateNameBoxMove = function (_0x580661) {
  if (this._nameBoxWindow) {
    this._nameBoxWindow.x += this.x - _0x580661.x;
    this._nameBoxWindow.y += this.y - _0x580661.y;
  }
};
Window_Message.prototype.resetRect = function (_0x392b9b, _0xf25fcc) {
  this.moveTo(this._resetRect.x, this._positionType * (Graphics.boxHeight - this.height) / 0x2, this._resetRect.width, this._resetRect.height, _0x392b9b, _0xf25fcc);
};
Window_Message.prototype.processCommonEvent = function (_0x4c85dd) {
  const _0x3ab024 = Window_Base.prototype.processCommonEvent.call(this, _0x4c85dd);
  if (_0x4c85dd.drawing) {
    this.launchMessageCommonEvent(_0x3ab024);
  }
};
Window_Message.prototype.launchMessageCommonEvent = function (_0x4d0174) {
  if ($gameParty.inBattle()) {} else {
    $gameMap.addMessageCommonEvent(_0x4d0174);
  }
};
Window_Message.prototype.processCharacter = function (_0xf4a19b) {
  this._textDelayCount--;
  if (this._textDelayCount <= 0x0) {
    this.onProcessCharacter(_0xf4a19b);
    Window_Base.prototype.processCharacter.call(this, _0xf4a19b);
  }
};
Window_Message.prototype.onProcessCharacter = function (_0x56a653) {
  this._textDelayCount = this._textDelay;
  if (this._textDelay <= 0x0) {
    this._showFast = true;
  }
};
VisuMZ.MessageCore.Window_Message_processEscapeCharacter = Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function (_0x4aa940, _0x41e7bb) {
  if (!_0x41e7bb.drawing) {
    Window_Base.prototype.processEscapeCharacter.call(this, _0x4aa940, _0x41e7bb);
  } else {
    VisuMZ.MessageCore.Window_Message_processEscapeCharacter.call(this, _0x4aa940, _0x41e7bb);
  }
};
VisuMZ.MessageCore.Window_Message_needsNewPage = Window_Message.prototype.needsNewPage;
Window_Message.prototype.needsNewPage = function (_0x279c47) {
  if (this._currentAutoSize) {
    return false;
  }
  return VisuMZ.MessageCore.Window_Message_needsNewPage.call(this, _0x279c47);
};
Window_Message.prototype.prepareForcedPositionEscapeCharacters = function (_0x302e7c) {
  let _0x495f5b = _0x302e7c.text;
  this._forcedPosition = {};
  if (this.isWordWrapEnabled()) {
    return _0x495f5b;
  }
  _0x495f5b = _0x495f5b.replace(/<POSITION:[ ]*(.*?)>/gi, (_0x52139b, _0x5de96d) => {
    const _0x46d081 = _0x5de96d.split(',').map(_0x2571d2 => Number(_0x2571d2) || 0x0);
    if (_0x46d081[0x0] !== undefined) {
      this._forcedPosition.x = Number(_0x46d081[0x0]);
    }
    if (_0x46d081[0x1] !== undefined) {
      this._forcedPosition.y = Number(_0x46d081[0x1]);
    }
    if (_0x46d081[0x2] !== undefined) {
      this._forcedPosition.width = Number(_0x46d081[0x2]);
    }
    if (_0x46d081[0x3] !== undefined) {
      this._forcedPosition.height = Number(_0x46d081[0x3]);
    }
    return '';
  });
  _0x495f5b = _0x495f5b.replace(/<COORDINATES:[ ]*(.*?)>/gi, (_0x1b7413, _0x52137e) => {
    const _0xa37eaf = _0x52137e.split(',').map(_0x477b85 => Number(_0x477b85) || 0x0);
    if (_0xa37eaf[0x0] !== undefined) {
      this._forcedPosition.x = Number(_0xa37eaf[0x0]);
    }
    if (_0xa37eaf[0x1] !== undefined) {
      this._forcedPosition.y = Number(_0xa37eaf[0x1]);
    }
    return '';
  });
  _0x495f5b = _0x495f5b.replace(/<DIMENSIONS:[ ]*(.*?)>/gi, (_0x3d6678, _0x207dbd) => {
    const _0x291c45 = _0x207dbd.split(',').map(_0x3e2238 => Number(_0x3e2238) || 0x0);
    if (_0x291c45[0x0] !== undefined) {
      this._forcedPosition.width = Number(_0x291c45[0x2]);
    }
    if (_0x291c45[0x1] !== undefined) {
      this._forcedPosition.height = Number(_0x291c45[0x3]);
    }
    return '';
  });
  _0x495f5b = _0x495f5b.replace(/<OFFSET:[ ]*(.*?)>/gi, (_0x83acf3, _0x359538) => {
    const _0x73fb16 = _0x359538.split(',').map(_0x49c746 => Number(_0x49c746) || 0x0);
    let _0xeb6c0 = _0x73fb16[0x0] || 0x0;
    let _0x161845 = _0x73fb16[0x1] || 0x0;
    $gameSystem.setMessageWindowXyOffsets(_0xeb6c0, _0x161845);
    return '';
  });
  _0x302e7c.text = _0x495f5b;
};
Window_Message.prototype.updateXyOffsets = function () {
  const _0x319033 = $gameSystem.getMessageWindowXyOffsets();
  this.x += _0x319033.x;
  this.y += _0x319033.y;
};
Window_Message.prototype.updateForcedPlacement = function () {
  this._forcedPosition = this._forcedPosition || {};
  const _0x268067 = ['x', 'y', "width", 'height'];
  for (const _0x2bc8a9 of _0x268067) {
    if (this._forcedPosition[_0x2bc8a9] !== undefined) {
      this[_0x2bc8a9] = Number(this._forcedPosition[_0x2bc8a9]);
    }
  }
};
Window_Message.prototype.prepareAutoSizeEscapeCharacters = function (_0x1dc63a) {
  this._currentAutoSize = false;
  let _0x5f1fc9 = _0x1dc63a.text;
  _0x5f1fc9 = _0x5f1fc9.replace(/<(?:AUTO|AUTOSIZE|AUTO SIZE)>/gi, () => {
    this.processAutoSize(_0x5f1fc9, true, true);
    this.processAutoPosition("none");
    return '';
  });
  _0x5f1fc9 = _0x5f1fc9.replace(/<(?:AUTOWIDTH|AUTO WIDTH)>/gi, () => {
    this.processAutoSize(_0x5f1fc9, true, false);
    this.processAutoPosition('none');
    return '';
  });
  _0x5f1fc9 = _0x5f1fc9.replace(/<(?:AUTOHEIGHT|AUTO HEIGHT)>/gi, () => {
    this.processAutoSize(_0x5f1fc9, false, true);
    this.processAutoPosition("none");
    return '';
  });
  if (SceneManager.isSceneBattle()) {
    _0x5f1fc9 = _0x5f1fc9.replace(/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi, (_0x2bb41a, _0x1de7ea) => {
      this.processAutoSize(_0x5f1fc9, true, true);
      this.processAutoPosition("battle actor", Number(_0x1de7ea) || 0x1);
      return '';
    });
    _0x5f1fc9 = _0x5f1fc9.replace(/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi, (_0x19120f, _0x514689) => {
      this.processAutoSize(_0x5f1fc9, true, true);
      this.processAutoPosition("battle party", Number(_0x514689) || 0x0);
      return '';
    });
    _0x5f1fc9 = _0x5f1fc9.replace(/<(?:AUTOENEMY|AUTO ENEMY):[ ](.*?)>/gi, (_0x1b5bd6, _0x4fac8c) => {
      this.processAutoSize(_0x5f1fc9, true, true);
      this.processAutoPosition("battle enemy", Number(_0x4fac8c) || 0x0);
      return '';
    });
  } else if (SceneManager.isSceneMap()) {
    _0x5f1fc9 = _0x5f1fc9.replace(/<(?:AUTOPLAYER|AUTO PLAYER)>/gi, (_0x51441d, _0x20f66b) => {
      this.processAutoSize(_0x5f1fc9, true, true);
      this.processAutoPosition("map player", 0x0);
      return '';
    });
    _0x5f1fc9 = _0x5f1fc9.replace(/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi, (_0x15fcaf, _0x328ab2) => {
      this.processAutoSize(_0x5f1fc9, true, true);
      this.processAutoPosition("map actor", Number(_0x328ab2) || 0x1);
      return '';
    });
    _0x5f1fc9 = _0x5f1fc9.replace(/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi, (_0x28fbd5, _0x2ddee3) => {
      this.processAutoSize(_0x5f1fc9, true, true);
      this.processAutoPosition("map party", Number(_0x2ddee3) || 0x0);
      return '';
    });
    _0x5f1fc9 = _0x5f1fc9.replace(/<(?:AUTOEVENT|AUTO EVENT):[ ](.*?)>/gi, (_0x20df68, _0x1c52b2) => {
      this.processAutoSize(_0x5f1fc9, true, true);
      this.processAutoPosition("map event", Number(_0x1c52b2) || 0x0);
      return '';
    });
  }
  _0x1dc63a.text = _0x5f1fc9;
};
Window_Message._autoSizeRegexp = /<(?:AUTO|AUTOSIZE|AUTO SIZE|AUTOWIDTH|AUTO WIDTH|AUTOHEIGHT|AUTO HEIGHT|AUTOPLAYER|AUTO PLAYER)>/gi;
Window_Message._autoPosRegExp = /<(?:AUTOPARTY|AUTO PARTY|AUTOPLAYER|AUTO PLAYER|AUTOEVENT|AUTO EVENT|AUTOENEMY|AUTO ENEMY|AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi;
Window_Message.prototype.processAutoSize = function (_0x24178e, _0x1247bc, _0x2478fe) {
  _0x24178e = _0x24178e.replace(Window_Message._autoSizeRegexp, '');
  _0x24178e = _0x24178e.replace(Window_Message._autoPosRegExp, '');
  this._autoSizeCheck = true;
  this._currentAutoSize = true;
  this.setWordWrap(false);
  const _0x59692c = this.textSizeExRaw(_0x24178e);
  if (_0x1247bc) {
    let _0x473fb9 = _0x59692c.width + $gameSystem.windowPadding() * 0x2 + 0x6;
    const _0x15368d = $gameMessage.faceName() !== '';
    const _0xfbfccb = ImageManager.faceWidth;
    _0x473fb9 += _0x15368d ? _0xfbfccb + 0x14 : 0x4;
    if (_0x473fb9 % 0x2 !== 0x0) {
      _0x473fb9 += 0x1;
    }
    $gameSystem.setMessageWindowWidth(_0x473fb9);
  }
  if (_0x2478fe) {
    let _0x27eedd = Math.ceil(_0x59692c.height / this.lineHeight());
    $gameSystem.setMessageWindowRows(_0x27eedd);
  }
  this.updateAutoSizePosition();
  this._refreshPauseSign();
  this._autoSizeCheck = false;
  this._messagePositionReset = true;
};
Window_Message.prototype.updateAutoSizePosition = function () {
  this.updateDimensions();
  this.updatePlacement();
  this.resetPositionX();
  this.updateTransform();
  this.contents.clear();
  this.createContents();
};
Window_Message.prototype.processAutoPosition = function (_0x3ac124, _0x4f25d1) {
  switch (_0x3ac124.toLowerCase().trim()) {
    case "battle actor":
      this._autoPositionTarget = $gameActors.actor(_0x4f25d1);
      break;
    case "battle party":
      this._autoPositionTarget = $gameParty.members()[_0x4f25d1 - 0x1];
      break;
    case "battle enemy":
      this._autoPositionTarget = $gameTroop.members()[_0x4f25d1 - 0x1];
      break;
    case "map player":
      this._autoPositionTarget = $gamePlayer;
      break;
    case "map actor":
      const _0x8cf255 = $gameActors.actor(_0x4f25d1).index();
      if (_0x8cf255 === 0x0) {
        this._autoPositionTarget = $gamePlayer;
      } else {
        this._autoPositionTarget = $gamePlayer.followers().follower(_0x8cf255 - 0x1);
      }
      break;
    case "map party":
      if (_0x4f25d1 === 0x1) {
        this._autoPositionTarget = $gamePlayer;
      } else {
        this._autoPositionTarget = $gamePlayer.followers().follower(_0x4f25d1 - 0x2);
      }
      break;
    case "map event":
      this._autoPositionTarget = $gameMap.event(_0x4f25d1);
      break;
  }
  if (this._autoPositionTarget) {
    this.updateAutoPosition();
  }
};
VisuMZ.MessageCore.Window_Message_synchronizeNameBox = Window_Message.prototype.synchronizeNameBox;
Window_Message.prototype.synchronizeNameBox = function () {
  this.updateAutoPosition();
  VisuMZ.MessageCore.Window_Message_synchronizeNameBox.call(this);
};
Window_Message.prototype.updateAutoPosition = function () {
  if (!this._autoPositionTarget) {
    return;
  }
  const _0x56b317 = SceneManager._scene;
  if (!_0x56b317) {
    return;
  }
  const _0x4a7d5b = _0x56b317._spriteset;
  if (!_0x4a7d5b) {
    return;
  }
  const _0x369135 = _0x4a7d5b.findTargetSprite(this._autoPositionTarget);
  if (!_0x369135) {
    return;
  }
  let _0x4e7c11 = _0x369135.x;
  if (SceneManager.isSceneMap()) {
    _0x4e7c11 *= $gameScreen.zoomScale();
  } else {
    if (SceneManager.isSceneBattle() && Imported.VisuMZ_3_ActSeqCamera) {
      let _0x47c755 = _0x369135.x - Graphics.boxWidth * _0x4a7d5b.anchor.x;
      _0x4e7c11 += _0x47c755 * (_0x4a7d5b.scale.x - 0x1);
    }
  }
  _0x4e7c11 -= this.width / 0x2;
  _0x4e7c11 -= (Graphics.width - Graphics.boxWidth) / 0x2;
  _0x4e7c11 += this.autoPositionOffsetX();
  let _0x5f4113 = _0x369135.y;
  if (SceneManager.isSceneMap()) {
    _0x5f4113 -= _0x369135.height + 0x8;
    _0x5f4113 *= $gameScreen.zoomScale();
    _0x5f4113 -= this.height * $gameScreen.zoomScale();
  } else {
    if (SceneManager.isSceneBattle() && Imported.VisuMZ_3_ActSeqCamera) {
      let _0x2793b0 = _0x369135.height * _0x4a7d5b.scale.y;
      _0x5f4113 -= this.height * _0x4a7d5b.scale.y + _0x2793b0 + 0x8;
      let _0x5d8c15 = _0x369135.y - Graphics.boxHeight * _0x4a7d5b.anchor.y;
      _0x5f4113 += _0x5d8c15 * (_0x4a7d5b.scale.y - 0x1);
    } else {
      _0x5f4113 -= _0x369135.height + 0x8;
      _0x5f4113 -= this.height;
    }
  }
  _0x5f4113 -= (Graphics.height - Graphics.boxHeight) / 0x2;
  _0x5f4113 += this.autoPositionOffsetY();
  const _0x4f506b = $gameSystem.getMessageWindowXyOffsets();
  _0x4e7c11 += _0x4f506b.x;
  _0x5f4113 += _0x4f506b.y;
  this.x = Math.round(_0x4e7c11);
  this.y = Math.round(_0x5f4113);
  this.clampPlacementPosition(true, false);
  this._forcedPosition = this._forcedPosition || {};
  this._forcedPosition.x = this.x;
  this._forcedPosition.y = this.y;
  this._forcedPosition.width = this.width;
  this._forcedPosition.height = this.height;
  this._nameBoxWindow.updatePlacement();
};
Window_Message.prototype.autoPositionOffsetX = function () {
  return 0x0;
};
Window_Message.prototype.autoPositionOffsetY = function () {
  return 0x0;
};
Window_Message.prototype.messagePositionReset = function () {
  this._messagePositionReset = false;
  this._autoPositionTarget = undefined;
  $gameSystem.initMessageCore();
  this.updateAutoSizePosition();
  this.openness = 0x0;
};
Window_Message.prototype.preConvertEscapeCharacters = function (_0x15a7dd) {
  return Window_Base.prototype.preConvertEscapeCharacters.call(this, _0x15a7dd);
};
Window_Message.prototype.postConvertEscapeCharacters = function (_0x3e559e) {
  return Window_Base.prototype.postConvertEscapeCharacters.call(this, _0x3e559e);
};
Window_Message.prototype.flushTextState = function (_0x5740f2) {
  this.preFlushTextState(_0x5740f2);
  Window_Base.prototype.flushTextState.call(this, _0x5740f2);
  this.postFlushTextState(_0x5740f2);
};
Window_Message.prototype.preFlushTextState = function (_0x407031) {};
Window_Message.prototype.postFlushTextState = function (_0x805332) {};
Window_NameBox.prototype.isAutoColorAffected = function () {
  return false;
};
Window_NameBox.prototype.resetTextColor = function () {
  Window_Base.prototype.resetTextColor.call(this);
  this.changeTextColor(this.defaultColor());
};
Window_NameBox.prototype.defaultColor = function () {
  const _0x338584 = VisuMZ.MessageCore.Settings.General.NameBoxWindowDefaultColor;
  return ColorManager.textColor(_0x338584);
};
VisuMZ.MessageCore.Window_NameBox_updatePlacement = Window_NameBox.prototype.updatePlacement;
Window_NameBox.prototype.updatePlacement = function () {
  VisuMZ.MessageCore.Window_NameBox_updatePlacement.call(this);
  this.updateRelativePosition();
  this.updateOffsetPosition();
  this.clampPlacementPosition();
  this.updateOverlappingY();
};
Window_NameBox.prototype.preConvertEscapeCharacters = function (_0x5b4629) {
  _0x5b4629 = _0x5b4629.replace(/<LEFT>/gi, this.setRelativePosition.bind(this, 0x0));
  _0x5b4629 = _0x5b4629.replace(/<CENTER>/gi, this.setRelativePosition.bind(this, 0x5));
  _0x5b4629 = _0x5b4629.replace(/<RIGHT>/gi, this.setRelativePosition.bind(this, 0xa));
  _0x5b4629 = _0x5b4629.replace(/<POSITION:[ ](\d+)>/gi, (_0x3e6a23, _0x2366bb) => this.setRelativePosition(parseInt(_0x2366bb)));
  _0x5b4629 = _0x5b4629.replace(/<\/LEFT>/gi, '');
  _0x5b4629 = _0x5b4629.replace(/<\/CENTER>/gi, '');
  _0x5b4629 = _0x5b4629.replace(/<\/RIGHT>/gi, '');
  _0x5b4629 = _0x5b4629.trim();
  return Window_Base.prototype.preConvertEscapeCharacters.call(this, _0x5b4629);
};
Window_NameBox.prototype.setRelativePosition = function (_0xc253dd) {
  this._relativePosition = _0xc253dd;
  return '';
};
Window_NameBox.prototype.updateRelativePosition = function () {
  if ($gameMessage.isRTL()) {
    return;
  }
  this._relativePosition = this._relativePosition || 0x0;
  const _0x23a583 = this._messageWindow;
  const _0x42346e = Math.floor(_0x23a583.width * this._relativePosition / 0xa);
  this.x = _0x23a583.x + _0x42346e - Math.floor(this.width / 0x2);
  this.x = this.x.clamp(_0x23a583.x, _0x23a583.x + _0x23a583.width - this.width);
};
Window_NameBox.prototype.updateOffsetPosition = function () {
  if ($gameMessage.isRTL()) {
    return;
  }
  this._relativePosition = this._relativePosition || 0x0;
  const _0x31ec43 = VisuMZ.MessageCore.Settings.General.NameBoxWindowOffsetX;
  const _0x52f235 = VisuMZ.MessageCore.Settings.General.NameBoxWindowOffsetY;
  const _0x32ee88 = (0x5 - this._relativePosition) / 0x5;
  this.x += Math.floor(_0x31ec43 * _0x32ee88);
  this.y += _0x52f235;
};
Window_NameBox.prototype.updateOverlappingY = function () {
  const _0x10b57b = this._messageWindow;
  const _0x2a3cec = _0x10b57b.y;
  const _0x3449cd = VisuMZ.MessageCore.Settings.General.NameBoxWindowOffsetY;
  if (_0x2a3cec > this.y && _0x2a3cec < this.y + this.height - _0x3449cd) {
    this.y = _0x10b57b.y + _0x10b57b.height;
  }
};
VisuMZ.MessageCore.Window_NameBox_refresh = Window_NameBox.prototype.refresh;
Window_NameBox.prototype.refresh = function () {
  this._relativePosition = 0x0;
  VisuMZ.MessageCore.Window_NameBox_refresh.call(this);
};
Window_ChoiceList.prototype.isWordWrapEnabled = function () {
  return false;
};
Window_ChoiceList.prototype.isAutoColorAffected = function () {
  return true;
};
Window_ChoiceList.prototype.itemHeight = function () {
  return $gameSystem.getChoiceListLineHeight() + 0x8;
};
Window_ChoiceList.prototype.maxCols = function () {
  return $gameSystem.getChoiceListMaxColumns();
};
Window_ChoiceList.prototype.start = function () {
  this.refresh();
  this.selectDefault();
  this.open();
  this.activate();
  this.processFailsafeChoice();
};
Window_ChoiceList.prototype.callOkHandler = function () {
  $gameMessage.onChoice(this.currentExt());
  this._messageWindow.terminateMessage();
  this.close();
  if (this._helpWindow) {
    this._helpWindow.clear();
    this._helpWindow.hide();
  }
};
VisuMZ.MessageCore.Window_ChoiceList_callCancelHandler = Window_ChoiceList.prototype.callCancelHandler;
Window_ChoiceList.prototype.callCancelHandler = function () {
  VisuMZ.MessageCore.Window_ChoiceList_callCancelHandler.call(this);
  if (this._helpWindow) {
    this._helpWindow.clear();
    this._helpWindow.hide();
  }
};
Window_ChoiceList.prototype.refresh = function () {
  this.clearCommandList();
  this.makeCommandList();
  if (this._messageWindow) {
    this.updatePlacement();
    this.placeCancelButton();
  }
  this.createContents();
  this.updateBackground();
  this.refreshDimmerBitmap();
  Window_Selectable.prototype.refresh.call(this);
};
Window_ChoiceList.prototype.makeCommandList = function () {
  if ($gameMessage._scriptCall) {
    this.makeCommandListScriptCall();
  } else {
    this.makeCommandListShuffle();
  }
  this.clearChoiceHelpDescriptions();
  this.applyChoiceHelpDescriptions();
};
Window_ChoiceList.prototype.makeCommandListScriptCall = function () {
  const _0x2070cb = $gameMessage.choices();
  let _0x56e80c = 0x0;
  for (let _0x561adf of _0x2070cb) {
    _0x561adf = this.convertChoiceMacros(_0x561adf);
    if (this.isChoiceVisible(_0x561adf)) {
      const _0x356c0b = this.parseChoiceText(_0x561adf);
      const _0x15043f = this.isChoiceEnabled(_0x561adf);
      this.addCommand(_0x356c0b, "choice", _0x15043f, _0x56e80c);
    }
    _0x56e80c++;
  }
};
Window_ChoiceList.prototype.makeCommandListShuffle = function () {
  const _0x3536b4 = $gameMessage.choices();
  const _0x4cd03a = $gameMessage.choiceIndexArray();
  const _0x34edd0 = $gameMessage.maxShuffleChoices();
  const _0x4c94cd = _0x3536b4.length;
  let _0x284556 = 0x0;
  for (let _0x1b8aa9 = 0x0; _0x1b8aa9 < _0x4c94cd; _0x1b8aa9++) {
    if (this._list.length >= _0x34edd0) {
      break;
    }
    const _0x358211 = _0x4cd03a[_0x1b8aa9];
    let _0x1f25be = _0x3536b4[_0x358211];
    if (_0x1f25be === undefined) {
      continue;
    }
    _0x1f25be = this.convertChoiceMacros(_0x1f25be);
    if (this.isChoiceVisible(_0x1f25be)) {
      const _0x3c3a65 = this.parseChoiceText(_0x1f25be);
      const _0x2da170 = this.isChoiceEnabled(_0x1f25be);
      this.addCommand(_0x3c3a65, "choice", _0x2da170, _0x358211);
    }
    _0x284556++;
  }
};
Window_ChoiceList.prototype.convertChoiceMacros = function (_0x387065) {
  return Window_Base.prototype.convertTextMacros.call(this, _0x387065);
};
Window_ChoiceList.prototype.isChoiceVisible = function (_0x288cee) {
  if (Imported.VisuMZ_1_EventsMoveCore) {
    $gameMessage.registerSelfEvent();
  }
  if (_0x288cee.match(/<HIDE>/i)) {
    return false;
  }
  if (_0x288cee.match(/<SHOW>/i)) {
    return true;
  }
  if (_0x288cee.match(/<SHOW[ ](?:|ALL )(?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x5d5767 = RegExp.$1.split(',').map(_0x49d2e7 => Number(_0x49d2e7) || 0x0);
    if (_0x5d5767.some(_0xf11897 => !$gameSwitches.value(_0xf11897))) {
      return false;
    }
  }
  if (_0x288cee.match(/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x427ae = RegExp.$1.split(',').map(_0x4835a3 => Number(_0x4835a3) || 0x0);
    if (_0x427ae.every(_0x71e94e => !$gameSwitches.value(_0x71e94e))) {
      return false;
    }
  }
  if (_0x288cee.match(/<HIDE[ ](?:|ALL )(?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x13d151 = RegExp.$1.split(',').map(_0x34ffa7 => Number(_0x34ffa7) || 0x0);
    if (_0x13d151.every(_0x289154 => $gameSwitches.value(_0x289154))) {
      return false;
    }
  }
  if (_0x288cee.match(/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x35553b = RegExp.$1.split(',').map(_0x2cfc6f => Number(_0x2cfc6f) || 0x0);
    if (_0x35553b.some(_0xa7a713 => $gameSwitches.value(_0xa7a713))) {
      return false;
    }
  }
  return true;
};
Window_ChoiceList.prototype.parseChoiceText = function (_0x3ba6cf) {
  let _0x5a7c10 = _0x3ba6cf;
  _0x5a7c10 = _0x5a7c10.replace(/<(?:BR|LINEBREAK)>/gi, "\n");
  _0x5a7c10 = _0x5a7c10.replace(/<LINE\x1bWrapBreak[0]BREAK>/gi, "\n");
  return _0x5a7c10;
};
Window_ChoiceList.prototype.isChoiceEnabled = function (_0x5d3166) {
  if (Imported.VisuMZ_1_EventsMoveCore) {
    $gameMessage.registerSelfEvent();
  }
  if (_0x5d3166.match(/<DISABLE>/i)) {
    return false;
  }
  if (_0x5d3166.match(/<ENABLE>/i)) {
    return true;
  }
  if (_0x5d3166.match(/<ENABLE[ ](?:|ALL )(?:SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x2581d6 = RegExp.$1.split(',').map(_0x4d6baa => Number(_0x4d6baa) || 0x0);
    if (_0x2581d6.some(_0x53b1cb => !$gameSwitches.value(_0x53b1cb))) {
      return false;
    }
  }
  if (_0x5d3166.match(/<ENABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x87efd4 = RegExp.$1.split(',').map(_0x4b3ceb => Number(_0x4b3ceb) || 0x0);
    if (_0x87efd4.every(_0x542356 => !$gameSwitches.value(_0x542356))) {
      return false;
    }
  }
  if (_0x5d3166.match(/<DISABLE[ ](?:|ALL )(?:SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x37dbe6 = RegExp.$1.split(',').map(_0x1d2a00 => Number(_0x1d2a00) || 0x0);
    if (_0x37dbe6.every(_0x3656d5 => $gameSwitches.value(_0x3656d5))) {
      return false;
    }
  }
  if (_0x5d3166.match(/<DISABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)) {
    const _0x201bb3 = RegExp.$1.split(',').map(_0x11253d => Number(_0x11253d) || 0x0);
    if (_0x201bb3.some(_0x2d399e => $gameSwitches.value(_0x2d399e))) {
      return false;
    }
  }
  return true;
};
Window_ChoiceList.prototype.clearChoiceHelpDescriptions = function () {
  this._choiceHelpDescriptions = {};
  if (this._helpWindow) {
    this._helpWindow.clear();
    this._helpWindow.hide();
  }
};
Window_ChoiceList.prototype.applyChoiceHelpDescriptions = function () {
  const _0x118a43 = /<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i;
  for (const _0x590b46 of this._list) {
    if (!_0x590b46) {
      continue;
    }
    const _0x4eaf0d = this._list.indexOf(_0x590b46);
    if (_0x590b46.name.match(_0x118a43)) {
      const _0x51098c = String(RegExp.$1);
      this._choiceHelpDescriptions[_0x4eaf0d] = _0x51098c.trim();
      _0x590b46.name = _0x590b46.name.replace(_0x118a43, '').trim();
    } else {
      this._choiceHelpDescriptions[_0x4eaf0d] = '';
    }
  }
};
Window_ChoiceList.prototype.processFailsafeChoice = function () {
  if (this._list.some(_0x3319f8 => _0x3319f8.enabled)) {
    return;
  }
  this.deactivate();
  this.close();
  $gameMessage._choices = [];
  if (this._messageWindow.isOpen()) {
    this._messageWindow.startPause();
  }
};
VisuMZ.MessageCore.Window_ChoiceList_updatePlacement = Window_ChoiceList.prototype.updatePlacement;
Window_ChoiceList.prototype.updatePlacement = function () {
  VisuMZ.MessageCore.Window_ChoiceList_updatePlacement.call(this);
  this.addChoiceDistance();
  this.clampPlacementPosition();
};
Window_ChoiceList.prototype.placeCancelButton = function () {
  if (!this._cancelButton) {
    return;
  }
  const _0x1d7e8f = this._cancelButton;
  const _0x5d8183 = this.x + this.width;
  const _0x98f3c9 = Math.floor((Graphics.width - Graphics.boxWidth) / 0x2);
  if (_0x5d8183 >= Graphics.boxWidth + _0x98f3c9 - _0x1d7e8f.width + 0x8) {
    _0x1d7e8f.x = -_0x1d7e8f.width - 0x8;
  } else {
    _0x1d7e8f.x = this.width + 0x8;
  }
  _0x1d7e8f.y = this.height / 0x2 - _0x1d7e8f.height / 0x2;
};
VisuMZ.MessageCore.Window_ChoiceList_windowX = Window_ChoiceList.prototype.windowX;
Window_ChoiceList.prototype.windowX = function () {
  return this._messageWindow ? this.messageCoreWindowX() : VisuMZ.MessageCore.Window_ChoiceList_windowX.call(this);
};
Window_ChoiceList.prototype.messageCoreWindowX = function () {
  const _0x5ec586 = $gameMessage.choicePositionType();
  if (_0x5ec586 === 0x1) {
    return (Graphics.boxWidth - this.windowWidth()) / 0x2;
  } else {
    return _0x5ec586 === 0x2 ? this._messageWindow.x + this._messageWindow.width - this.windowWidth() : this._messageWindow.x;
  }
};
Window_ChoiceList.prototype.windowWidth = function () {
  const _0x1f8683 = (this.maxChoiceWidth() + this.colSpacing()) * this.maxCols() + this.padding * 0x2;
  return Math.min(_0x1f8683, Graphics.width);
};
Window_ChoiceList.prototype.numVisibleRows = function () {
  const _0xc8aae8 = $gameMessage.choices().map(_0x5254b1 => this.convertChoiceMacros(_0x5254b1)).filter(_0x12b32f => this.isChoiceVisible(_0x12b32f));
  let _0x1e1418 = Math.ceil(_0xc8aae8.length / this.maxCols());
  if (!$gameMessage._scriptCall) {
    const _0x2eb133 = $gameMessage.maxShuffleChoices();
    _0x1e1418 = Math.ceil(Math.min(_0x2eb133, _0xc8aae8.length) / this.maxCols());
  }
  return Math.max(0x1, Math.min(_0x1e1418, this.maxLines()));
};
Window_ChoiceList.prototype.maxLines = function () {
  const _0x5349c3 = this._messageWindow;
  const _0x5d0b38 = _0x5349c3 ? _0x5349c3.y : 0x0;
  const _0x61f496 = _0x5349c3 ? _0x5349c3.height : 0x0;
  const _0x2a6954 = Graphics.boxHeight / 0x2;
  return _0x5d0b38 < _0x2a6954 && _0x5d0b38 + _0x61f496 > _0x2a6954 ? 0x4 : $gameSystem.getChoiceListMaxRows();
};
Window_ChoiceList.prototype.maxChoiceWidth = function () {
  let _0x31c739 = this.getStartingChoiceWidth();
  for (const _0x1d8975 of this._list) {
    const _0x5a26b9 = _0x1d8975.name;
    const _0x4796c9 = this.getChoiceIndent(_0x5a26b9);
    const _0x510c7d = this.textSizeEx(_0x5a26b9).width + _0x4796c9;
    const _0x12b7bd = Math.ceil(_0x510c7d) + this.itemPadding() * 0x2;
    _0x31c739 = Math.max(_0x31c739, _0x12b7bd);
  }
  return _0x31c739;
};
Window_ChoiceList.prototype.getStartingChoiceWidth = function () {
  let _0x21cdcd = $gameSystem.getChoiceListMinChoiceWidth();
  const _0x4b4004 = $gameMessage.choices();
  for (const _0xace941 of _0x4b4004) {
    if (_0xace941.match(/<CHOICE WIDTH:[ ](\d+)>/gi)) {
      _0x21cdcd = Math.max(_0x21cdcd, Number(RegExp.$1));
    }
  }
  return Math.max(_0x21cdcd, 0x1);
};
Window_ChoiceList.prototype.addChoiceDistance = function () {
  const _0x5769bb = $gameSystem.getChoiceMessageDistance() || 0x0;
  const _0x4f61dd = this._messageWindow.y;
  const _0x32a943 = this._messageWindow.height;
  const _0x514679 = this._messageWindow._nameBoxWindow;
  const _0x35c36d = _0x514679.openness > 0x0 && _0x514679.width > 0x0;
  const _0x3114ff = _0x35c36d ? _0x514679.height : 0x0;
  if (_0x5769bb < 0x0 && (this._messageWindow.isClosed() || this._messageWindow.isClosing())) {
    this.y = Math.round((Graphics.boxHeight - this.height) / 0x2);
  } else {
    if (_0x4f61dd >= Graphics.boxHeight / 0x2) {
      if (_0x5769bb >= 0x0) {
        this.y -= _0x5769bb;
      } else {
        this.y = Math.floor((_0x4f61dd - this.height - _0x3114ff) / 0x2);
      }
    } else {
      if (_0x5769bb >= 0x0) {
        this.y += _0x5769bb;
      } else {
        const _0x206dda = Graphics.boxHeight - (_0x4f61dd + _0x32a943 + _0x3114ff);
        this.y += Math.floor((_0x206dda - this.height) / 0x2) + _0x3114ff;
      }
    }
  }
};
Window_ChoiceList.prototype.drawItem = function (_0x13fe52) {
  const _0x44a7b7 = this.requestChoiceForegroundImage(_0x13fe52);
  if (_0x44a7b7) {
    const _0x2440ae = ImageManager.loadPicture(_0x44a7b7);
    const _0x59ce21 = this.choiceAlignText();
    const _0x193acf = _0x59ce21 + this.commandName(_0x13fe52);
    const _0x429b66 = this.itemRectWithPadding(_0x13fe52);
    _0x2440ae.addLoadListener(this.drawChoiceLocationImage.bind(this, _0x13fe52, true, _0x193acf, _0x429b66, _0x2440ae));
    return;
  }
  this.drawItemContents(_0x13fe52);
};
Window_ChoiceList.prototype.drawItemContents = function (_0x575d2d) {
  const _0x15f2be = this.itemRectWithPadding(_0x575d2d);
  const _0x39e1f1 = this.choiceAlignText();
  const _0x39df7a = _0x39e1f1 + this.commandName(_0x575d2d);
  this.changePaintOpacity(this.isCommandEnabled(_0x575d2d));
  const _0x104be6 = this.textSizeEx(_0x39df7a).height;
  const _0x40ae39 = _0x15f2be.x + this.getChoiceIndent(_0x39df7a);
  const _0x171e3b = Math.max(_0x15f2be.y, _0x15f2be.y + Math.round((_0x15f2be.height - _0x104be6) / 0x2));
  this.drawTextEx(_0x39df7a, _0x40ae39, _0x171e3b, _0x15f2be.width);
  this.changeChoiceBackgroundColor(_0x575d2d);
  this.requestChoiceBackgroundImage(_0x575d2d, _0x39df7a, _0x15f2be);
};
Window_ChoiceList.prototype.choiceAlignText = function () {
  return $gameSystem.getChoiceListTextAlign() !== 'default' ? "<%1>".format($gameSystem.getChoiceListTextAlign()) : '';
};
Window_ChoiceList.prototype.getChoiceIndent = function (_0x172216) {
  let _0x40a988 = 0x0;
  if (_0x172216.match(/<(?:CHOICE|CHOICE |)INDENT:[ ](\d+)>/gi)) {
    _0x40a988 = Number(RegExp.$1);
  }
  return _0x40a988;
};
Window_ChoiceList.prototype.changeChoiceBackgroundColor = function (_0x2194f8) {
  if (!Imported.VisuMZ_0_CoreEngine) {
    return;
  }
  const _0x23b8e8 = this.commandName(_0x2194f8);
  let _0x25bae5 = false;
  let _0x304e63 = false;
  let _0x5b1359 = ColorManager.itemBackColor1();
  let _0xd29145 = ColorManager.itemBackColor2();
  if (_0x23b8e8.match(/<(?:BGCOLOR|BG COLOR):[ ](.*?),(.*?)>/gi)) {
    _0x5b1359 = ColorManager.getColor(RegExp.$1).trim();
    _0xd29145 = ColorManager.getColor(RegExp.$2).trim();
    _0x25bae5 = true;
  } else {
    if (_0x23b8e8.match(/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi)) {
      let _0x43749d = String(RegExp.$1).toLowerCase().trim();
      switch (_0x43749d) {
        case "red":
          _0x5b1359 = _0xd29145 = "#f26c4f";
          _0x304e63 = true;
          break;
        case 'orange':
          _0x5b1359 = _0xd29145 = "#fbaf5d";
          _0x304e63 = true;
          break;
        case "yellow":
          _0x5b1359 = _0xd29145 = "#fff799";
          _0x304e63 = true;
          break;
        case "green":
          _0x5b1359 = _0xd29145 = '#7cc576';
          _0x304e63 = true;
          break;
        case "blue":
          _0x5b1359 = _0xd29145 = '#6dcff6';
          _0x304e63 = true;
          break;
        case "purple":
        case "violet":
          _0x5b1359 = _0xd29145 = "#a186be";
          _0x304e63 = true;
          break;
        case "brown":
          _0x5b1359 = _0xd29145 = '#c69c6d';
          _0x304e63 = true;
          break;
        case "pink":
          _0x5b1359 = _0xd29145 = "#ffc8e0";
          _0x304e63 = true;
          break;
        case "white":
          _0x5b1359 = _0xd29145 = "#ffffff";
          _0x304e63 = true;
          break;
        case 'gray':
        case "grey":
          _0x5b1359 = _0xd29145 = "#acacac";
          _0x304e63 = true;
          break;
        case "black":
          _0x5b1359 = _0xd29145 = '#707070';
          _0x304e63 = true;
          break;
        case 'yes':
          _0x5b1359 = _0xd29145 = ColorManager.powerUpColor();
          _0x304e63 = true;
          break;
        case 'no':
          _0x5b1359 = _0xd29145 = ColorManager.powerDownColor();
          _0x304e63 = true;
          break;
        case "system":
          _0x5b1359 = _0xd29145 = ColorManager.systemColor();
          _0x304e63 = true;
          break;
        case "crisis":
          _0x5b1359 = _0xd29145 = ColorManager.crisisColor();
          _0x304e63 = true;
          break;
        default:
          _0x5b1359 = _0xd29145 = ColorManager.getColor(_0x43749d);
          _0x304e63 = true;
          break;
      }
      _0x25bae5 = true;
    }
  }
  if (!_0x25bae5) {
    return;
  }
  const _0x1f60aa = this.itemRect(_0x2194f8);
  this.contentsBack.clearRect(_0x1f60aa.x, _0x1f60aa.y, _0x1f60aa.width, _0x1f60aa.height);
  this.drawCustomBackgroundColor(_0x1f60aa, _0x5b1359, _0xd29145, _0x304e63);
};
Window_ChoiceList.prototype.drawCustomBackgroundColor = function (_0x1050e0, _0x931a51, _0x3f6a04, _0x49a6b7) {
  const _0x3eaceb = ColorManager.itemBackColor1();
  const _0x3503a0 = _0x931a51 ?? ColorManager.itemBackColor1();
  const _0x3da3ff = _0x3f6a04 ?? _0x931a51;
  const _0xa22cf1 = _0x1050e0.x;
  const _0x5df2ca = _0x1050e0.y;
  const _0x590111 = _0x1050e0.width;
  const _0x4cf2e4 = _0x1050e0.height;
  this.contentsBack.gradientFillRect(_0xa22cf1, _0x5df2ca, _0x590111, _0x4cf2e4, _0x3503a0, _0x3da3ff, true);
  if (_0x49a6b7) {
    this.contentsBack.gradientFillRect(_0xa22cf1, _0x5df2ca, _0x590111, _0x4cf2e4, _0x3eaceb, _0x3da3ff, true);
  }
  this.contentsBack.strokeRect(_0xa22cf1, _0x5df2ca, _0x590111, _0x4cf2e4, _0x3eaceb);
};
Window_ChoiceList.prototype.requestChoiceForegroundImage = function (_0x3ebc9a) {
  const _0x558f64 = this.choiceAlignText();
  const _0x5affb6 = _0x558f64 + this.commandName(_0x3ebc9a);
  let _0x4f4700 = '';
  if (_0x5affb6.match(/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i)) {
    _0x4f4700 = String(RegExp.$1).trim();
  } else if (_0x5affb6.match(/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)) {
    _0x4f4700 = String(RegExp.$2).trim();
  }
  return _0x4f4700;
};
Window_ChoiceList.prototype.requestChoiceBackgroundImage = function (_0x494b6e, _0x181526, _0x5a50c0) {
  let _0x4cc3b0 = '';
  if (_0x181526.match(/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i)) {
    _0x4cc3b0 = String(RegExp.$1).trim();
  } else if (_0x181526.match(/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)) {
    _0x4cc3b0 = String(RegExp.$2).trim();
  }
  if (_0x4cc3b0) {
    const _0x2bcb7f = ImageManager.loadPicture(_0x4cc3b0);
    _0x2bcb7f.addLoadListener(this.drawChoiceLocationImage.bind(this, _0x494b6e, false, _0x181526, _0x5a50c0, _0x2bcb7f));
  }
};
Window_ChoiceList.prototype.drawChoiceLocationImage = function (_0x58dc0, _0xc94d4f, _0x3bf4d1, _0x37a023, _0x490551) {
  const _0x57b3f4 = this.choiceAlignText();
  const _0x37e253 = _0x57b3f4 + this.commandName(_0x58dc0);
  if (_0x3bf4d1 !== _0x37e253) {
    return;
  }
  const _0x5be87a = this.itemRectWithPadding(_0x58dc0);
  if (['x', 'y', "width", "height"].some(_0x20b855 => _0x5be87a[_0x20b855] !== _0x37a023[_0x20b855])) {
    return;
  }
  let _0x40212a = 0x0;
  let _0x28955f = '';
  if (_0xc94d4f && _0x37e253.match(/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i)) {} else {
    if (_0xc94d4f && _0x37e253.match(/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)) {
      _0x28955f = String(RegExp.$1).toLowerCase().trim();
    } else if (!_0xc94d4f && _0x37e253.match(/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)) {
      _0x28955f = String(RegExp.$1).toLowerCase().trim();
    }
  }
  switch (_0x28955f) {
    case "lowerleft":
    case "lower-left":
    case "lower left":
    case "downleft":
    case "down-left":
    case "down left":
    case '1':
      _0x40212a = 0x1;
      break;
    case "lowercenter":
    case "lower-center":
    case "lower center":
    case "downcenter":
    case "down-center":
    case "down center":
    case "down":
    case '2':
      _0x40212a = 0x2;
      break;
    case "lowerright":
    case "lower-right":
    case "lower right":
    case "downright":
    case 'down-right':
    case "down right":
    case '3':
      _0x40212a = 0x3;
      break;
    case 'midleft':
    case "middleleft":
    case "left":
    case '4':
      _0x40212a = 0x4;
      break;
    case 'midcenter':
    case "middlecenter":
    case "center":
    case "centered":
    case '5':
      _0x40212a = 0x5;
      break;
    case "midright":
    case "middleright":
    case 'right':
    case '6':
      _0x40212a = 0x6;
      break;
    case "upperleft":
    case 'upper-left':
    case "upper left":
    case 'upleft':
    case "up-left":
    case "up left":
    case '7':
      _0x40212a = 0x7;
      break;
    case 'uppercenter':
    case "upper-center":
    case "upper center":
    case "upcenter":
    case "up-center":
    case "up center":
    case 'up':
    case '8':
      _0x40212a = 0x8;
      break;
    case 'upperright':
    case "upper-right":
    case "upper right":
    case "upright":
    case "up-right":
    case "up right":
    case '9':
      _0x40212a = 0x9;
      break;
  }
  const _0x34c400 = _0xc94d4f ? this.contents : this.contentsBack;
  const _0xd4ad8b = this.itemRect(_0x58dc0);
  if (!_0xc94d4f) {
    _0x34c400.clearRect(_0xd4ad8b.x - 0x1, _0xd4ad8b.y - 0x1, _0xd4ad8b.width + 0x2, _0xd4ad8b.height + 0x2);
  }
  const _0x3c3466 = _0xd4ad8b.x + 0x2;
  const _0x42a79f = _0xd4ad8b.y + 0x2;
  const _0x591c49 = _0xd4ad8b.width - 0x4;
  const _0x35dcbc = _0xd4ad8b.height - 0x4;
  const _0x4b190d = _0x490551.width;
  const _0x51e1b1 = _0x490551.height;
  let _0x44779d = _0x3c3466;
  let _0x17a688 = _0x42a79f;
  let _0x26469d = _0x591c49;
  let _0x492052 = _0x35dcbc;
  const _0x132fb5 = _0x591c49 / _0x4b190d;
  const _0x37099f = _0x35dcbc / _0x51e1b1;
  let _0x113192 = Math.min(_0x132fb5, _0x37099f);
  if (_0xc94d4f) {
    _0x113192 = Math.min(_0x113192, 0x1);
  }
  if (_0x40212a !== 0x0) {
    _0x26469d = Math.round(_0x4b190d * _0x113192);
    _0x492052 = Math.round(_0x51e1b1 * _0x113192);
  }
  switch (_0x40212a) {
    case 0x1:
    case 0x4:
    case 0x7:
      _0x44779d = _0x3c3466;
      break;
    case 0x2:
    case 0x5:
    case 0x8:
      _0x44779d += Math.round((_0x591c49 - _0x26469d) / 0x2);
      break;
    case 0x3:
    case 0x6:
    case 0x9:
      _0x44779d += _0x591c49 - _0x26469d;
      break;
  }
  switch (_0x40212a) {
    case 0x7:
    case 0x8:
    case 0x9:
      _0x17a688 = _0x42a79f;
      break;
    case 0x4:
    case 0x5:
    case 0x6:
      _0x17a688 += Math.round((_0x35dcbc - _0x492052) / 0x2);
      break;
    case 0x1:
    case 0x2:
    case 0x3:
      _0x17a688 += _0x35dcbc - _0x492052;
      break;
  }
  _0x34c400.blt(_0x490551, 0x0, 0x0, _0x4b190d, _0x51e1b1, _0x44779d, _0x17a688, _0x26469d, _0x492052);
  if (_0xc94d4f) {
    this.drawItemContents(_0x58dc0);
  }
};
Window_ChoiceList.prototype.updateHelp = function () {
  this._helpWindow.clear();
  if (!this._choiceHelpDescriptions) {
    return;
  }
  const _0x1bb1c3 = this.index();
  if (this._choiceHelpDescriptions[_0x1bb1c3]) {
    this._helpWindow.setText(this._choiceHelpDescriptions[_0x1bb1c3]);
    this._helpWindow.show();
  } else {
    this._helpWindow.clear();
    this._helpWindow.hide();
  }
};
Window_EventItem.prototype.makeItemList = function () {
  const _0x1dd782 = $gameMessage.itemChoiceItypeId();
  if (_0x1dd782 === "skill" && Imported.VisuMZ_1_SkillsStatesCore) {
    this.makeSkillList();
  } else {
    Window_ItemList.prototype.makeItemList.call(this);
  }
};
Window_EventItem.prototype.makeSkillList = function () {
  const _0x447fb3 = $gameMessage.itemChoiceActor();
  this._data = _0x447fb3 ? _0x447fb3.skills().filter(_0x1d77ea => this.includes(_0x1d77ea)) : [];
  if (this.includes(null)) {
    this._data.push(null);
  }
};
VisuMZ.MessageCore.Window_EventItem_includes = Window_EventItem.prototype.includes;
Window_EventItem.prototype.includes = function (_0x110b58) {
  const _0x410689 = $gameMessage.itemChoiceItypeId();
  if (_0x410689 === "weapon") {
    if (!DataManager.isWeapon(_0x110b58)) {
      return false;
    }
    const _0x50f837 = $gameMessage.itemChoiceWtypeId();
    if (_0x50f837 > 0x0) {
      if (_0x110b58.wtypeId !== _0x50f837) {
        return false;
      }
    }
    return true;
  } else {
    if (_0x410689 === "armor") {
      if (!DataManager.isArmor(_0x110b58)) {
        return false;
      }
      const _0x316c8e = $gameMessage.itemChoiceAtypeId();
      if (_0x316c8e > 0x0) {
        if (_0x110b58.atypeId !== _0x316c8e) {
          return false;
        }
      }
      const _0x3583e7 = $gameMessage.itemChoiceEtypeId();
      if (_0x3583e7 > 0x0) {
        if (_0x110b58.etypeId !== _0x3583e7) {
          return false;
        }
      }
      return true;
    } else {
      if (_0x410689 === "skill") {
        if (!DataManager.isSkill(_0x110b58)) {
          return false;
        }
        const _0xf0b7cb = $gameMessage.itemChoiceActor();
        if (_0xf0b7cb.isSkillHidden(_0x110b58)) {
          return false;
        }
        if (!_0xf0b7cb.isSkillTypeMatchForUse(_0x110b58)) {
          return false;
        }
        const _0xa3a856 = $gameMessage.itemChoiceStypeId();
        if (_0xa3a856 > 0x0) {
          const _0x2164ff = DataManager.getSkillTypes(_0x110b58);
          if (!_0x2164ff.includes(_0xa3a856)) {
            return false;
          }
        }
        return true;
      } else {
        return VisuMZ.MessageCore.Window_EventItem_includes.call(this, _0x110b58);
      }
    }
  }
};
VisuMZ.MessageCore.Window_ItemList_drawItemNumber = Window_ItemList.prototype.drawItemNumber;
Window_ItemList.prototype.drawItemNumber = function (_0x69e03d, _0x282c0b, _0x2650a2, _0x457b62) {
  const _0x4075f4 = $gameMessage.itemChoiceItypeId();
  if (_0x4075f4 === "skill") {
    const _0x45da5f = $gameMessage.itemChoiceActor();
    this.drawSkillCost(_0x45da5f, _0x69e03d, _0x282c0b, _0x2650a2, _0x457b62);
  } else {
    VisuMZ.MessageCore.Window_ItemList_drawItemNumber.call(this, _0x69e03d, _0x282c0b, _0x2650a2, _0x457b62);
  }
};