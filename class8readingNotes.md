# class 8 reading notes

for class 8 we took a small dive into the world of flex boxm it is versitile for styling and making accomplishing certint stylings pretty easy. To start with Flex box is "layout mechanism" that has been designed for laying out groupd of items in "one dimension"

Flexbox is perfect for taking several different items of different sized and outputing a good order (layout) for them. This is inpart why it is called "flexbox" because it (the container of the element) seems to flex and adjust/ adapt "naturally" and this can also be manipulated by was of several different attributes. Its worth noting that flex box has 2 different axis, "The main axis" (left to right) and the "cross axis" (take a guess what this means...) now we are able to state which axis we want to focus on by way of delcaring it within css we use the key ``display`` and we use it with ``flex`` so this looks like this ``display:flex;`` the natural flow of flex reverts us row by nature. however it can display "row" and "colomns". Flexbox "respects the flow of the writing within the content" (in our case its left to right  how ever other languages do use "top to bottom" While using flexbox we are able to "breakout" of the standard DOM input, this offers us a great sense pf flexibility. In order to do all this amazing stuff we must assign it to a parent element, This is known as the "flex container" and the children of this named container are known as "flex items" we are able tp take control of these bad boys and girls and manipulate the display of them with out handy use of ``display:flex;`` within flex box we have ``flex-direction`` to indicate the over all direction of the "main-axis".. this is where we referr back to the point of the left to write writing style. A big perc of using "flexbox" is the fact that we are able to wrap our content with the use of the keyword ``wrap`` this is all well and good however this can hug the content too tight, so indicating the size would be helpful for making sure we are not hugging out content too much.By default our items do not wrap so we must "declare" this within our css file.

-``row``: places items in a row.
-``row-reverse``: this reverses the layout to end to begining.
-``colomn``: puts items in colomns.
-``colomn-reverse``: you can guess what this does.

using reverse can be tricky because it only adjusts the items visually but not functionally so this is not reccamended because this can mess up "screen readers"

-``main start/main end`` is the start and end of the main axis.

we are also able to adjust the "proportion" that "space items" take up as compared "... other flex items..."  we would use ``flex:1`` equals the proportion that this (each) item takes up on the main axis. so each item within takes up a "value of one" (They all take up equal space). next we have ``2`` which mean each item uses twice the amount of space... we also have ``3`` that will do the same thing. 

## flex: short hand

-``flex`` this "shorthand can "specify up to three values.\
-``flex-shrink`` is used when flex item overflow from their container, this indicates how much each item will shrink to avoid spilling out of their container.

Flexbox has features that allows you to expand (along their main axis) This is awesome for "nav"/"tool bars". this means that each item will cleanly take up the same amount of space.

``align items`` declares where the items sit on the cross axis. This can go hand and hand with ``stretch`` to makes sure all the items can fit well within their parent property.

``justify-content`` "controls where the flex item sits on the main axis`` this is great for awesome visual feature like buttons being alittle mismatched and gives a pretty cool effect, maybe its not the most practicicle for everyjob however it is neat and CAN be a cool tool to utilize.

``space-around`` spaces all the items evenly (along the main access).This leaves alittle space at the beginnning and the end. ``space-between`` is another option.

-``order`` is a feature that allows us to reorder our items in flex box

## Nesting

needless to say flexbox gives us the chance to do some pretty neat thing.. we are able to nest items and create some amazing layouts.

## Things I would like to know

-I would like to dig further in the ``flex-shrink`` and ``flex-basis`` I didnt really understand too much of this part of the reading, im sure with time i will understand more of it.

- ``flex grow:1`` is one I would like to also know more about.

- [Info taken from](https://web.dev/learn/css/flexbox/)

- [Back to readme](README.md)
