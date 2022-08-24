# transform property

``transform`` property is for 2D and 3D settings. Each comes with their own settings comes in a value value pair.

``webkit-transform:scale(1.5)``

these include multi vendor prefixes. The value Specifies transform type followed by the amount unprefixed declorations come last to overwrite preixed vendors.

-2D works on X & Y axis (horiztonal & Vertical0).

-3D works in X,Y and Z (depth).

- ``transform``b supports ``rotate`` this allows the ability to rotate an element from 0 to 360 positive value rotates to the right.

- ``scale`` changes the appeared size of an element, default is  .99 & .01 makes the element appear smaller. while 1.01+ makes it look bigger.

-``scaleX`` and ``scaleY`` scales height and width. scale x (width) while scale Y (hieght & width).. its possible to declare both ``x,y``.

- ``translate`` is like "relative positioning" in the way that it pushes and pulls an element in different directions without ruining the normal flow.

- ``translate x`` changes the position horizontaly. while ``translateY`` changes it verticaly.

- positive value pushes elements **down** and **to the right** while negative does the opposite.

- 2D skew distorts elements on the horizontal axis/ or both. skew X (horizontal) and skew Y (vertical).

``Y axis``  is stated in percentages ``[-10px,25%]``. The distance of skew is measured in degrees.

Default transform is center of element (50%, 50%). To change the default use ``transform-origin``(this takes 1 or 2 values) If one is used then it works for both horiztonal and vertical. (if 2 then both are defines ``0,0``).

## perspective

- In order for 3D to work elements need "perspective" (vanishing point).

- use ``perspective`` with ``transform`` property. You can transform 1 element from a single perspective. This is good for when you want to transform a group of elements all with the same perspective to parent element, this is when we can use ``perspective`` property on the parent element.

- Perspective and Depth value can be set as a ``none`` or length measurement ``none`` turns off any perspective, ``length`` sets depth of perspective. higher value means further perspective, while lower value means the opposite this has a great perspective effect.

- ``perspective-origin`` allows you to set the origin of you perspective. This is usable with the ``transform-origin`` property.

- Transitions and Animations

- In order for a "transition" to take place an element must have another "change state". Ther common use of these are ``:hover, :focus, :active, :target``

- There are four Transition properties: ``transition-property``, ``transition-duration``, ``transition-timing-function`` and ``transition-delay``.

- ``transition property`` determines what will be altered. This goes alongside the other stages of the change. All properties inside the elements states will be changed, but only the properties inditified inside the ``transition-property`` value gets affected. 

## Things i want to know more of

I want to know more about this!

"Imagine yourself standing 10 feet away from a 10 foot cube as compared to standing 1,000 feet away from the same cube. At 10 feet, your distance to the cube is the same as the dimensions of the cube, therefore the perspective shift is much greater than it will be at 1,000 feet, where the dimensions of the cube are only one one-hundredth of your distance to the cube. The same thinking applies to perspective depth values."

