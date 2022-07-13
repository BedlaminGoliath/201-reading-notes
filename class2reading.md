
# Class 2 reading

## Importance of semantics

Much like most things in life there are several different ways to accomplish a goal, HTML is no different. Sure within HTML we can achieve the  ``<h1>Head Title</h1>``  (Large Bold font), However we can also accomplish the same effect by using the ``<span></span>`` element, The "span" element is often used to "wrap" conent with a specific style of CSS. Now sure we CAN use "span" however there is no "semantic value" with that specific tag, meaning we are dressing it up, and really making "more work" than necessary. The "Header" tag HAS semantic value, we know exactly what it does by way of its name. Now the importance of all of this? As i memntioned before, we CAN use "span" but it will require more attributes and code, this will make the code alot messier and its not necessary, this also can hinder those who have a seeing disability... sense the use of "screen readers" is oftens used for "blind" or those I just mentioned.

## Headings

There are many diffferent levels of importance within an article, this is where we Place "headings" that describe specific sections and their content, which gives context to the info/ text that follower the header. The header is also a smart tool which can be used to "hold" keywords that will help a search engine (which helps use find specific sites or articles).
 There are 6 different "heading" sizes in HTML. They range from H1 - H6, H1 being the largest and H6 being the smallest size of the headings (you can adust heading size via CSS).

## Sup & Sub

Being able to properly and accuratly express our intenions in HTML is extremely important, Sometimes we are writing science paper, or even simply writing a specific date. The "sub" and "sup" elements help us accomplish this.
In HTML we have both a ``<sub></sub>`` and a ``<sup></sup>`` element. The ``<sub></sub>`` (Subscript) is great for properly writing  "C02" and the ``<sup></sup>`` is ideal for writing things like "E = MC2" (Mc Hammer?)

## Abbreviations

Within HTML or any document where are writing about maybe.. professors, or even Abbreviations like "NASA" it is helpful to have a tool, that will help us display the abbreviated word and the whole word un-abbreviated. In HTML we are able to accomplish this with a ``<abbr></abbr>`` element. Now this is pretty easy however there is a little bit more work to it.
example : ``<p><abbr title="professor">Prof.</abbr></p>`` Here was can see we did use the "prof." example. Now beyond using the "Abbreviation" tag we have to add a "title" attribute and assign  "value" to the attribute. This will allow you to hover over the word "prof" and it was display the word "professor".

## CSS and your HTML

Now that we have a general unerstanding of HTML and how it is the "skeleton" of your page/site we know we would like to add some meat(or color) to the page (maybe some awesome backround color or images). There are 3 different ways to apply this to your HTML page.

- External: This method is done by linking a ".css" file to your current HTML file. This is done by way of a ``<link>`` tag, within the tag you place a "href" attribute (a common attribute within HTML that is a "hyper reference" essentially a link.) the name of the name of your css file (with ".css") attached at the end. This looks like this ``<link href="myStyle.css">`` This tag would be placed inside the the "head" of the HTML file.

- Internal: This method allows you to style your HTML with CSS within the same file. This is a streamline method that Keeps everything pretty simple and compact. You would do this with a ``<style></style>`` tag  (in the header). Within the style tag you would add your css styling ``p{ color:blue;}`` (this would edit the color of the content within the "paragraph" element).

- Inline : The inline method is a way to make small adjustments to which ever tag you are currently working on. ``<p style ="color: blue;">Text</p>`` This is helpful for making micro adjustments without effecting the "big picture". Now as simple and enticing as "inline" may seem, it is very ineffeciant (since you are effecting the smalling piece of content). Besides this being in effectiant this also makes for sloppy code.. which is not your friend.

## Calling out the example

within the example The selector is being represented by the "h2" tag. The declaration or both "color" and "padding" and the "propperties" are the "black" and "5px" components.

## javascript

 Within JS there are different datatypes. some are "integers" and "strings" We identify strings by way of the use of commas (single or double... well stickw with single right now). If you enclose any data inside a comma then it will be considered a "string" even if it is a number. A string is just a fancy term for "words" and "integer" is a fancy word for number.

## operators

 In JS we have differwent types of operators, operators produce a result by using to variables or values. To name a few we have

- addition (``+``)

- subtraction (``-``)

- stricly equal (``==``)

- assignment(``=``)

 We can use functions to solve real world problems. One of the easiest "realworld problems" woule be if we needed to do basic addition for our shopping trip, infact the registers do that for us all day, businesses require this to make sure the proper amounts are being charged and no inconsistant amounts.

## Conditions

Conditionals Are just as they sound, they are a set of conditions that are set to "follow" a decision. for example: I am trying to decide if I want to buy another guitar pedal or not... Well if i decide to (or not to) there is a bit more to it then that, I need to set up a set of conditions that will grant my purchase, I could say "If I get an 'A' on this test then I can buy that pedal ive been wanting.

A statement checks a **condition** and if it evaluates as **true** then the code block will execute.

An "else if statement is used as another condition or "other possibility" within any given condition. Going off of the previous example about guitar pedals, I said "If I 'A' this test, Then I can buy another guitar pedal"... that is the basket "if" statement, not I can add another possibility (you can add as many possibilites as youd like). So under that "if" statement I can add "else if I get a 'B' on the test I will buy a new guitar strap". I can even add ontop of THAT with another "else if" statement, like "else if I get a 'C' I will set aside 'X' amount of dollars to buy a pedal a little later". This is helpful in many instances, to take care of different possibilities... we even see it in many RPG video games.

## Comparison Operators

Within JS we have Variables, Those are much like conatiners (as before mentioned), These containers just dont exist with whatever data we have inside of them we must "assign" them to the data, this is where assignment operators come in handy (there is other uses as well). First we will continue with the assigning of data to a certain container (variable)... inorder to assign the info to the variable we would use ... **ding ding ding** the "assignment operator" which is the `` = `` although this is considered the "equal" sign in math this is simply a way we assign info to a variable. Now that one is out of the way we can touch on a few different operators, besides the " = " operator we also have the " === " (triple equals) symbol to show that the values being compared are identical (or not ``!==1``), Another Comparison Operater we have is the classic "<" ">" (less than and *or equal* than symbol.... these do just as we know them to do in math. Another one is ``<=`` ``=>`` These test if the value of one operand is less than or equal to /greater than or equal to the other operand.

## Logical Operators

In JS we have different kinds of operators and we have several different ways to get to an end result. I mentioned above how we can use "else...if" statement to test other conditions possibilites, Well in some instances we may not need to write out every other "else.. if" statement, perhaps we can test if two conditions are what you want them to be. One "Logical operator" is the ``&&`` symbol, this is called the "and" operator, these can be used to ensure that Two conditions are being met before the code is being executed. Inversally we have the ``||`` symbol, This is reffered to as the "or symbol", this ensures that atleast one of the conditions are met inorder for the code to execute.

- [back to ReadMe](README.md)

info from [Mozilla](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
