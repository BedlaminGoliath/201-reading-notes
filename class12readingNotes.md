# Class 12 reading notes

 ``<canvas`` allows the user to draw 2D graphics, this requires the both the `width` and `height` to specify the size of the canvas. (this can also be accessed via the DOM property).

 -"fallback content" is the content that goes betweem the brackets.

 -Inorder to draw, you must access "rendering context" and use THAT to draw.

``<canvas>`` feature the ``getContext()`` method. This returns a render context object, this method takes in one argument w/ the type of context `2D`... to get a 2D rendering context object this is a context of "Canvas rendering context 2D" interface.

there is a way to check if the browser supports this:

``lit canvas = document.querySelector
            if (canvas.getContext){
                let ctx = main.getContext(2D);
            }``

- you can draw 2D shapes (paths,rectangles, and arcs).

- coordinates begin at the upper-left of the ``<canvas> element`` (0,0) "X" increases to the right and "Y" to the bottom "width" and "height" determine the number of the pixels.

- "fill" fills in the shape with a specific style (color, gradient, image) while "stroke" add colors to the edge of the shape.

- We are also able to set properties  to "string". 

