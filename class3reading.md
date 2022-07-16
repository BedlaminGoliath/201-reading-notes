# Ordered un ordered lists

Ordered lists are better used when the “order” of the items Matter, for example : A recipe (where the order of the ingredients
Matter), or even instructions for working on a car, you cannot remove a piece of the car if you did not remove the bolts that hold it in place. The ``<ol>`` would make sure the list items are numbered while the ``<u>`` would mark the list items with a bullet point instead of a number.
There is also a way to adjust the starting point of each lists with the ``start = 4`` attribute, This changes the starting point from what would be “1” to (in this example “4”). There is another attribute titles “reversed” this attribute will reverse ordered list which would naturally be  “1,2,3,4” to “4,3,2,1”. Another attribute that we have in our tool belt is “type” attribute, This attribute allows us to adjust the “numbering type” to either “upper case ‘A’ “ or “lower case ‘a’ “… its noticeable that we are also able to use the letters to “number” our list items. However we are also able to use Roman numerals (either upper or lower case) as well to identify the order of our lists.

## Block elemenst

In horizontal writing:
Inline direction is left to right while block formatting is top top bottom of a box

In vertical writing:
Inline is top to bottom and block forming is top to bottom.

“Margin” is what creates separation between two block elements. Adding a margin will add spacing between the boxes while leaving margin at “0” will leave the boxes touching since there is no spacing in-between.

Width creates or removes the space on either side of the block element. regularly our text within the block element will take up all the space in the block however if we set our width to “50%” then our text will only take up half of the block (left to right)

The ultimate example was thinking like shipping a box : the content is the item being shipped, the padding is like the Bubble  wrap the border is… the box its placed in and the margin is the space the package has inside of the truck (next to other boxes).

## Inline elements

“Inline elements” are also stored in boxes much like Block elements

## Box Model

## JS

Arrays Operators and expressions and conditional loops.

An array can store a list of data items within a single variable.

You can use arrays to store any type of data type from a “string” to ‘integers’ to even other arrays, when storing an array inside another array we call this a “multi dimensional array’ . Besides storing different types we are able to get a count of the items inside of an array by of the ‘.length’ at the end of the name of the specified array inside the “console.log”.. another fun thing we are able to do is change the array all together. We understand that arrays index start with “0” ( that means computers start counting from ‘0’) so after were are able to “… give a single array item a new value…” ``..shopping[0] = ’tahini’`` the gives the string “tahini” the from seat in this example.

There is also a ``.indexof`` method that allows us to check the “index” of the array, if the item was not found in the array it would return ``-1``

We can also add items in an array by using the ``.push`` method following the name of item we would like to add in parentheses this would add the item at the end go the array. ``.unshift`` adds an item to the beginning of the array. From here we can even recheck the ``.length`` again.

We are able to remove items by using the ``.pop`` method, this would remove the last item in the array. We can ``console.log`` the declared variable and check that out.

To remove first item in an array we are able to use the ``shift()`` method this would allow us to make an adjust to the given array by (as I mentioned ) removing the first item. Now if we wanted to remove a specific item in any given part of the array we would use the ``splice ( )`` method while inputing the item we would like to be removed INSIDE the parenthesis.

We are able to access every item within an array by using the ``for… of`` statement.

``.map`` will allow you to leave with  the individual items in an array (much like ``for…of`` however with ``.map`` you are able to make a certain change to the array and be left with the items in their altered form .

``filter( )`` allows you to filter through the items and this would leave you with a list of items that have been filtered or “..matched” a certain test.
``split ( )`` takes a certain condition or parameter maybe its separate each everything that follows a “,” and “splits” it as such. This can be useful for my typos when I forget touseaspace. The flip side of using the “split()” method is using the “join()” method this does just as the name says.. it joins things.

``.tostring()`` is a method that is useful to take info that is broken up within an array and combine them to make a string.

### Operators

Within JS there are several different types of operators all those operators a fall within : Binary , Unary, and a Ternary operator ( conditional operator)

Although we do have 16 binary operators I would say the most common would be as follows

I don’t know if the people array is a valid array. I would say yes it is… however I am unsure do  to the semicolon and underscore. I know this is a multi dimensional array, however I haven’t seen them used like this before.

 ``let a = 2``

- assignment operator  ``a = x`` this assigns the left operand (2) to the value of ``x`` this is

  - addition operator :``a  += 4`` “This operator adds the value of the  operand to a variable and assigns the result to the variable” (a = 2+4).

  - subtraction operator :``a -=4`` This subtracts the value of the right operand from the left and assigns the results to the variable. (2 = 2-4).

- Multiplication operator: ``a*=4`` This multiples  (same as mentioned above.) ( a = a*4).

- division operator ``a/=4`` this divides….  … (a= a/4) .

### conditionals

Within JS we have conditionals, These are just as they sound. They are a set of conditions that need to be met in order for something to happen, usually if one ( or `` || `` ) both ``&&`` conditions are met them the code that follows within the brackets will get executed.

In Js we could use ``!`` to “negate” an expression all together.  This means that even within the `` || `` conditional even if it returns true the ``!`` will return it as false.

### Thing i wish i knew more of

What I wish I knew more of : better understanding of margin collapsing. (Css)

Better understanding of the use of the ``.splice``

How does F() = F! = 2
