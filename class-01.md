# Class 1 Reading assignment

## A Small poem on HTTP and its travels.

The beginning of the end sends info down a road often traveled,we are client.... the beinning. We attempt to get to the server... our destination. the web: less gravel more bits, Its not a bucket of bolts but a TCP to develiver either you or me to send standards or hazards or cats and dogs playing piano on vlogs.
The little black book (aka DNS) holds names and domains not visually pleasing an IP appears scary but is necessary to locate the site we seek. The IP is found but we dont speak the lingo although we can see though we must comminicate the HTTP will guide us through the sea of binary.
The mother land, a full stage came from pages... component files holds our methods (HTML,CSS,JS) Assets hold our trinkets, Media... videos, and images... more cats and dogs playing piano for masses. I arrived to youtube. Now let me surf in piece.

## The Parseing of HTML and CSS etc

HTML, CSS, and JS are "parsed" much like how we read/write.. with little variance. The Broswer reads from top to bottom, So that is how is will read our HTML, CSS, and JS. Often we construct a page by using the skeleton, so we start with HTML, Them we would like to add some life to the page, so we use CSS to add some meat to the skeleton, From there we tell the new "being" what to do and how to interacte with the user, here we insert some JS (with the ```<script>``` tag)

The way we construct the page is the same way the browswer parses it. From Top to Bottom and from skeleton to function.

## Image hunting

There are many different ways to find images.. however if you are not a UX designer or you are not utilizing one for you site you are able to search for images via "google images" here you can search the general concept, and them save them to a safe place (maybe an images folder) however you can run into problems when it comes to copywrite images, to "avoid" this you can use the liceinece filter settings by way of the tools button then, "usage rights", then "creative common licence" selection to find images that are free to use.

## Strings and Numbers

In Javascript we have several different "datatypes" the most common (especially early in the coding career) are called "Strings" and "numbers". A "String" is a fancy way of saying a series of words (sentences...) the way this is identified is by using ``""`` (the quotes) when we use quotes, we tell our input that our datatype is going to be a "string". We can ever add strings together (but thats a story for another time).

beyond strings we have "numbers" in JS we identify numbers to JS by just using the numbers themselves with no quotes. Another way numbers are identified are by the names "integers".

## Variabls

In JS "variables" are very important because they are were our information is "stored"... think of "variables" like containers, these containers can be referenced and refvisited time and time again... well we have different "types" of containers, some are easy to open and place new items in and some arew taped so well that evem that amazing kitchen knife cant cut through the tape. These are important for holding the information we gather from the user input. Think like in Pokemon red when you are asked your name, you arer essentially filling in a ``(const)`` variable (this variable can not be changed).

## HTML (Attributes)

HTML consists of many useful tools, however one of the most useful tool is called an "element" elements constist of an opening tag and closing tag, with info in the middle ``<p>text</p>``, we see a "paragraph" element with some example text in the middle, this would tell the page that we are trying to render a paragraph on the page (in this example "text"is what would be rendered on the page). Now the use of "elements" do not stop there, we are able to add an "attribute" to the element this addition to the already awesome element discloses more information to this element. Some "attributes" offer info that will make styling a specific element easier, or they can even state a source of where a certain image is coming from.

## Nav vs Article

the ``<article>``tage is content makes sense on their own, and although apart of the same page they are able to stand on their own. While ``<nav>`` Is a compilation of smaller parts that make up a larger piece. Within a "nav" you can evem have "articles".

## Standard tags

So far we have seen a few different tags that most websites will use, however there are only a "few" that most websites need to stand on their own two legs (?).

- ``<!DOCTYPE html>``
- ``<html>/<html>``
- ``<title></title>``
- ``<head></head>``
- ``<body></body>``
- ``<p></p>``
- ``<footer></footer>``

## Meta

The "meta" tage ``<meta>`` tag can be very helpful.. altough not necessary, this info can help describe the "character encoding" (UTF-8 this pretty much uses every code most humans use). Of course you can even adjust the types of characters. You are also able to describe the conent within the page, like key words, the author of the info, which is very helpful to help the search engines do their job with keywords that are used within your meta tag. Now we understand what the meta tag is and some general uses... but where do we put it? The Meta tag is placed within the head of the html file, here is where you can place the tag itself, where it will not be rendered on the page, but he used to store and hold important information. That is very helpful to the browser and the internet as a whole... it is the unsung hero.

## Designing your website

The journy to design your website is not all fancy text put into a browser, it does not begin with HTML or anything you may think, first and foremost you must come up with the "idea" and have a better understanding of your visitors. To begin with you need to have an understanding of what you are trying to accomplish. Like any good question this tends to lead to more questions, so you need to have a roadmap.. many start with "wire framing" (drawing your site on paper) but even before that, you need to understand what even needs to applied to the site itself and what is something you need to do by food.

## Header vs Div

Within HTML and coding over all there several different ways to get to the end result you want, even though you can get to the same destination, one has more value than the other, one of the most important is the "screen reader" and just having messy code. Of course you can get a ``<h1></h1>`` effect by way of a ``<span></span>`` tag... however you will need to "style" it, which is more code that is more work and that tends to be harder on the eyes and just alot of work that never needed to happen... well this mess has to get "read" by the "screen reader" and that is not easy to work with for either the visitor of the page or the person having to proof read the code.

## JavaScript

JavaScript is a language that allows the developer to build dynamic, interactive features on your wedsite, this takes what would be a static site (with just HTML and CSS) and makes it more interactive, that can collect data and use that data to interact with the user. The Data is stored within "variables" these Varaiables are containers that takes the users info, some variables can be constant and some can be changable from time to time. These examples are seen when there is an input section that asks for the users name and eventually gets displayed on the page at one time or another, another popular function is having a function available IF a user clicks a certain button, after clicking this button a certain action happens.
There are a few different ways to add JS to your page, they all hold their own function. 

- Inline (JS that is with a currently used tag in HTML).

- External (This is when you create another folder and "link" the JS file to your HTML file).

- Internal (Uses the ``<script>`` tag).
