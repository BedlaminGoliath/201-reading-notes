# Class 4 Reading Notes

## links

 -Links in HTML are made by using the ``<A>`` tag

 -``< a href=“www.example.com”> Text that defines the link</a>``

- Href is an attribute where you place the actual location of the site or page you are linking to

- You can add an “IMG” as a ”clickable” thing instead of text that usually sends you to the link its self.

- URL - Uniformed Resource Locator Is where something is located on the web. They are paths to the specified files

- ``contacts.html`` would be a way to link to a specific file (in this context its the contacts page. This is if you would like to link within the same directory.  The ``filename.`` is the name of the file within the ``.html``

  - ``/`` are ways of moving down specified directories. You would write the directories name then follow it with a forward slash then the home file name being ``.html``

  - ``..`` would be a way to mover back up directories.  You are able move up several directories by doing this ``../../../`` this would move you up three directories.

- Absolute URL is a specific location the file would be located via the actual address as well as the located of the file within the folders ``https://www.example.com/projects/index.html`` is a way to get to the “HTML” file within the projects folder AT the “example.com” site
- We can also link to a file relative to a file im already looking. With this you do not need to write the domain name however you do need to write the location within your file its located in.

- You are able to like to specific part of the page with the ``#`` .

- Use “titles” to help screen readers disclose the purpose or meaning of the link.

## CSS

- Webflow describes the way the elements lays itself out.
-
- BoxModel

  - A block levels element content will take any available space of the parent element its in.

  - Inline elements size is just the size of their content, you are not able to adjust width or height on these bad boys.

  - You can adjust this to happen by way the ``display``.  You can ``inline-block;`` mixes these characteristics.

  - Block-level elements are laid out in block flow direction. Block level elements are laid out vertically.

  - Inline elements lay out side by side along aside each other as long as there is space within the parent block element.  

  - If 2 adjacent elements both have margins set and they touch the larger one takes the cake.

- HTML has block and inline elements by default.

- Positions makes it possible to take certain elements out of its default context and makes them able to be used however you would like. To do so we would use the ``position`` property.

- “Static Positioning” is a the default setting for every element. It does what its natural doc flow is.

- relative postion 
-can be used to modify final position(can overlap). must use "top,bottom,left,right" prop.

- top = down, bottom = up, right = left, left = right.

## Absolute postion. ``absolute: position;``

- no longer exists in normal doc flow.

- great for pop-up window features.

- has its own layer it wont effect normal doc flow.

- based on normal position of containing element side unlike relative doc flow.

- margin still effects position elements.

- positioning context; if no ancestor is defined them be default it is in a static position.

- it remains position in containing block.

## Z-index

- referencing "z-axis"

- can change stacking order with imaginary line from screen to users eyes.

- only uses unitless values (200, 4000)

- higher values go higher and visa versa.

## functions

- quick (dry) friendly. This can define code blocks, which will allow for cleaner code.

- defined by way of `` function example ()`` (example is name of function)

- envoked with "();"

- functions are apart of objects are "methods".

## function parameters

-Some functions need parameters to do their thing. ``.replace()`` "needs a substringto find main string and the substring to replace string with".

- some parameters are optional ``.join()`` will use a "comma" as default.

- "=" specificy default values.

## anonymous functions

usually recieve another function as a parameter.

## scope 

- variables inside funct. are inside the scope of the block of code that is the funct.

- level outside of funct. is "global scope".

- if 2 funct. are named the same then second funct is ignored, so its a good idea to choose funct. names well.