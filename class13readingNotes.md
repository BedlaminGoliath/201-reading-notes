# Local Storage

- HTTP gets reset everytime the application gets closed, this is also known as "stateless".

- Local storage is like saving a key on the users computer then recalling it whenever they sign back on. This is a good alt to having the user sign up for something.

- Cookie is a file that is stored on the users computer and is connected to the domain that actually runs the site. This is a great solution to the problem we seen earlier, However they "add to the load of every document on the domain. they allow minimal data and of course cookies has been used to spy, so alot of people turn them off.

- There is a newer solution that you can utilize within your javascript file.
``localStorage`` object can do this.

- the ``setItem()`` and ``getItem()`` method is probably a  cleaner approach. ``

- You can also remove an item with ``removeItem()`` method.

- ``sessionStorage`` allows you to keep the storage there until the browser window is closed.

- Local storage is stored in strings (only).

- data gets stored in the ``[object Object]`` form.

- There is a workout the "only strings" problem, that is by using ``JSON.stringify()`` and ``JSON.parse()`` methods.

- There is a way to access the data and that way is by using the right methods. However it is reccamended to do this in "Opera"



[README](README.md)