# Class 5 readingNotes

## HTML Images

- ``<img>`` is an considered an empty element. it just contains a ``src`` attribute which links to relative or absolute file. ``<img src="img.pg">``

- best practice to keep image in same server as HTML file external file locations can change.

- ``<img>`` and ``<video>`` are "replaced" elements. sizes are dictated by outside factors (file size).

- ``alt`` attribute is helpful when img wont load, we still see what img SHOULD be and its good for screen readers. Also key words seeked for search engines.

- "width" and "height" can be applied leaving space for img while loading, this helps with load time and effiency.

- ``<title>`` good for "tool tip"

## Image types

bits per component: bits used to rep. each color component.
bit depth: total bits used to rep. each pixel in memory.

- APNG :

- Supports animations, with a greater variety of color depth.

- Also great for animations synced with music or external actions, also great for animated stickers.

- AVIF :

- HDR

- Less compression than JPEG/PNG.

- Large Range of colors.

- Files must be fully downloaded.

- GIF:

- First graphic format supported by HTML

- uses low lossly compression - 8bit indexed color

- Each px rep. by single 8bit value.

- Px opaque unless otherwise noted.

ICO

- Can store icons in multiple directories.

JPEG:

- Widely used for stills

- still very popular

PNG:

- Higher depth than GIF and More effecient.

SVG:

- Scalable Vector Graph

- Can draw on HTML

- Good for Diagrams and icons.

- Can use ``<img>`` ``<picture>`` ``<background-images`` om CSS.

TIFF:

- HEAVY!

- Usually uncompressed / uses compressed algos.

- Every value stored in **tag**

- Uses "array" to store all Properties.

- Can use multiple images

- uses CYMK, YCbCr color spaces.

XBM:

- No longer supported

- Not as cool as everyone else.

- JPEG / Webp are good for photos

- PNG are good for icons

- Diagrams, Drawings & Charts SVG (over PNG).

## CSS Color

- ``color``: Colors foreground of HTML element.(colors text and "text decoration").

- ``color-backgroung`` : Colors background of text.

- ``text-shadow`` : shadow text.

- ``text-decoration``: is how you color things like "strike throughs" in your text. These are all usually color which ever color is picked in the ``color`` property.

- ``text emphasis``: color emphasis symbols in your text.

### Boxes

- Borders: specifies coloring the borders of your element (see box model.)

- ``background-color``: choose backgrund color where no foreground content is present.

- ``colomn-rule-color``: The color used when drawing lines that seperate "colomns" of text.

- ``outline-color`` : Often used as a "focus indicator". No Space is set aside for it, it may overlap.

- You can color borders with the ``outline-color`` propperty. Its possible to color all for sides of the border with the ``top``, ``bottom``, ``left``, ``right`` properties.

-``border-block-start-color`` or ``border-block-end-color``: used to color edged of the border, the "end" or "start" is relative to which way your language is read.

Within HTML you are also able to draw using the ``<canvas>`` element, this allows you to draw 2D bitmapped graphics. Besides the previously mentioned element we also have SVG Which is often used to draw diagrams, specific shapes, and pattern. This can be placed either on page itself or embedded in the ``<img>`` element. There is also WebGL API Which is used for "high performance" 2D/3D graphics.

## Colors in CSS

### RGB value

**RGB** values use Hexidecimal digits to represent: red, green, and blue. There is also aplha which is the opacity of the item being colored. These values always start with ``#``

- ``#rrggbb`` is a fully opaque (``0xrr`` is red, ``0xgg`` is green, ``0xbb`` is blue, ``0xaa`` is the "alpha").

- ``#rgb`` : (``0xrr`` is red, ``0xgg`` is green, ``0xbb`` is blue).

- ``#rgba``: is the same as above however its worth mentioning that "...the lower the value of 'alpha' the more translucent the color becomes" (pulled from MDN webdocs).

### RGB functional notion

RGB function uses CSS function ``rgb()`` with input parameters values : red, green, and blue.. sometimes "alpha". These must be an ``<integer>`` value (0-255) or a percentage (0-100%) alpha (0.0 - 1.00 for fully opaque).

- HSC (Hue/Saturation/Luminocity)

- uses ``hsl()`` function.

- The "hue" "declares" which color. can use ``<angle>``, ``<deg>``, ``<rad>``, ``<grad>``, ``<turn>``.

- The "saturation" is the amount of max color (chosen) or a having a shade of grey to it.

- The Luminocity can increase the amount of lightness the color will have.From Lightest to Darkest "version" of the color.

### HWB function

This ``hwb()`` function is used like the ``rgb()`` function however instead of light and saturation it specifies "whitness and blackness" there are no commas and the alpha is sperated by a ``/`` before the alpha.

## To be noted within the HTML realm

- ``<div>`` is handy to wrap content blocks this makes it easier to color these blocks.

- ``<outlines>`` doesnt effect the layout, it draws "over" what is "outside" the elements box.

## Color Theory

- Building a solid base color is important, this could hold an emotion or hold a naturally occuring color for the product your site is being buily for.

- Picking the right color is important for functionality and readibility of the site.

- Use "contrast" colors sparraingly, just enough contrast to not wash out your contrast and not too much to make it too gnarly to look at.

- ``<print-color-adjust>`` tells browser to make no adjustments to your site, if left out browser can make changes to help with legibility... if your colors are important to you then try this out.

### Things I want to know more about

- I would like to have a clearer read on the img types, I know its a whole study in to this type of thing but its interesting.

- I would LOVE to take one of those "color theory" classes, I love that kind of stuff, like the physicology of certain colors.

- I really want grasp more about css and its possibilites when it comes to ``back-ground-image`` this reminds me of the myspace days

- This is on par with the "color theory" comment, however understanding how color works with the "hue" "saturation" and "luminence" is a really cool thing to me.

info taken from [Mozilla MDN DOC](https://developer.mozilla.org/en-US/)

[back to readme](README.)
