# Forms

Webforms are the points that connect the user to web application, this given info can be used to change the page,
based on any input the use... puts in.

-html forms are made of **form controls** (widgets). these - consist of: checknboxes, buttons, or radiobuttons (and much much more.) these are mostly created by using ``<input>``

- **form controls** can also be used to enforce formats and values.

- Its best practice to not go overboard with forms, keep them to one page if possible and NEVER nest a form inside another form.

- import tags : ``<form>``, ``<labe>``, ``<input>``, ``<textarea>``, and ``<button>``

- all forms start with the ``<form>`` element. These define the form, This is often a container element much like a ``<section>`` or a ``<footer>``. Attributes are optional however ``action``, and ``method`` are considered "stamdard practice".

- ``action`` defines URL (location) where the data is collected.

- ``method`` "defines which HTTP method to send the data with (usually get or post).``

- ``<textarea>`` is used for the input of the text area.

- ``<li>`` are super helpful when it comes to building the structure of the form so are ``<ul>``, ``<ol>``.

- Within the ``<label>`` elements we  use the ''for`` att. which takes in the vale of the ``id``. This is how you tie a form control with its label.

``<label type="text" id="name" name="user_name">``

Doing this allows mouse,trackpad users to click the label and "activate" the control.

- in the ``<input>`` the most important attr. to use is the ``type`` attr. because it "defines" the way the ``<input>`` behaves and appears. the ``<input>`` tag also does not have a closing tag.

- ``<button>`` This is the way we actually send or data This element also accepts 3 types of values : ``submit``, ``reset``, or ``button``

- ``name`` attr. is important on both client and server side, because it names each piece of data. The form data is sent as a key value pair. To actually name each piece of data in for you must use ``name``.

## Structure

- ``<form>`` defines the setup. this desides what the form will actually do. so nest all other elements inside the form element.

- Its possible to use **form control** outside of the form element itself, by default it has nothing to do with it, unless you decide to associate it to the w/ the ``<form>`` element.

- ``<fieldset>`` is an easy way to group elements & widgets together so that they share the same purpose for styling and semantic reasons.

-``<legends>`` (when delcared right under) ``<fieldset>`` formally "tell" the purpose of ``<fieldset>``

- Tech. uses  ``<legend>`` if its apart of the label of each control inside corresponding ``<fieldset>``elements.

- When using "radio button" it is best to use inside of ``fieldset`` element.

## Events

Events are actions and occurences that happen in the system, they take place after clicking something, this is when the system produces a signal. This usually hapens by way of an event ``even handler`` (which is usually a ``function``).

- When a block of code is defined to run in reponse to an event this said "event handler" aka "event listener"

- "Node.Js" event model leans on "listeners" that "list" for events to events.

``on() register event
  once () registerEventOnce``

- ``addEventListener()`` is a method.

- events can be fired with the button element.
example:
``focus`` & ``blur`` can change color when focused & unfocused. This often displays info filling in form fields  when focused.

- It is possible to "remove" event with ``removeEventListener()`` This can also "abort" by later calling ``abort()``. By removing an event listener you can bost effeincy and open up your current (past buttons) for reuse.

- Its possible to have multiple "handlers" when using a single event.

``addEventListener('click', function A);
  addEventListener('click', function B);``

  adding "event listener" to reg. event handlers can be a powerful thing to do and works well with complex methods.

- the propert ``onclick`` is also known as an event handler  ``btn.onclick = () => {}``

- Here were see that an event handler can be set to a named function

``btn.onclick = bgchange()``

- It is possible for Objects that  execute events to have properties such as ``on`` followed by the name of the event, much like ``onclick``.

- Sometimes inside of "handler functions" we can see ``event``, ``evt``, or ``e`` this is whats known as a **event objects**. This Automatically passed extra info to the **event handler**.

- **Event Objects** usually have a "standard" set of properties  & methods that is available to it.
``keydown`` "fires" when the user of the page presses down a key (  this is an a specialized event key in ``keyBoardEvent``).

- When an event is nested inside of another element (like the button element) we also click the parent element.

- "Bubbling" is when we nest a specific event inside not one but two parent elements, this means that we also speak for both the outter elements. This can be a pain, so be aware of this potential problem.

### Bubbling & Capturing

Newer Browsers run Three different phases : **Capturing** **Targeting**, and **Bubbling**

"..**targeting** The browser checks to see if the parent elements Most outter element hahs an event handler registered."

- "...Then it moves to the next element inside the doc..." so this starts from the outter limites of the event at hand. 

**Target** Here the browser checks to see if the "target property has an EH for the click registered on it, and runs it.." (if it has it).

If this "bubbles" is true it moved outward from current element all the way to the HTML doc. If "bubbles" is false then the "propgates" the to any ancestors.

**Bubbling** (opposite of capturing happens). The browser checks to see if the parent of the "clicked" element gas a ``click`` EH tied to it. It then moves outwards to the ancestor element and checks again, and then on the next one... until it reaches the ``<HTML>`` element.

In newer broweser (by default) EH are "registered" for the bubbling phase.

**Event Delegation**


## things i want to know more about

for one i got alittle lost within the "event delegation" realm...i will have to read more about it, because it didnt make alot of sense. I also didnt completely understand everything in thre realm of "event handlers" either.

-[Back-to-README](README.md)