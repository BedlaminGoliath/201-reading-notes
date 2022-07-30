# DOM Moedling

Dom modeling (Domain modeling) is a model that encapsulates the different entites, attributes and over all behaviour (this is also made up of restraints of said problem as well). This is a bridge made to help explain and acknowledge the quanitifable issues to both the tech and business side of any given current projects. This is made possible with a special kind of entity we will call....
**Object Oriented Modeling** This is Any entity that stores data in properties and "encapsulates" its behavior in *methods* To do this we will utilize a **constructor method** .

It is helpful to first (on a table) lay out your "foundation" which woud be your properties, their data, and a general "rating system" (you can also add the "data type"). next you would make use of a constructor methods.

`` var EpicFAilVideo = function(epicRating, hasAnimals){
    this.epicRating = epicRating;
    this.hasAnimals = hasAnimals;
}
    var parkour = new EpicFailVideo(7, false);
    var corgiFail = new EPicFailVideo(4, true);

``

You can see that the var (constructor function) EpicFAilVideo is being assigned to a function with the parameters of "epicRating" and `` hasAnimals `` This then stores that data within `` this.epicRating `` and `` hasAnimals `` ."... Storing data within properties ensures any newly created object can access the data later..."

"...After the constructor function definition, two objects are instantiated with the new keyword and their properties are initialized by calling the EpicFailVideo constructor function. After being instantiated and initialized, these objects are stored inside the parkourFail and corgiFail variables..." [https://github.com/codefellows/domain_modeling#domain-modeling] (Info from here).

## Tables

In HTML we have tables there are often (and should only be used to store data) however many moons ago they were once used for "page layouts". Even though this was once more common place (for page layouts) we have come far from that in recent years, in part due to "screen readers" (these help the visully impaired) the screen readers. Another reason is because this can create what is refered to as "tag soup" which is just as it sounds "a whole lot of unnecsary tags" this makes for messier code and likely has little syntax value. Another reason is due their sizing by default ``<header>`` , ``<section>``, ``<article>`` tags are relative to their parent elements, while tables are sized according to their content... this would likely mean aloty more uneccessary work in CSS.

Within ther ``<table>`` tag we have a few different elements that are often used we have the ``<tr>`` (this is known as the "table row" this creates the cells and content that lays the for first 'row'.... to start a new row you woulld create another open and close ``<tr>``) then we have what is known as ``<td>`` this would be the data that is being put within those cells. Next we have ``<th>`` this is the "table header" this is the "header" element of the table work, this creates easier readability for users.

## Object Prototypes

Object protoypes. This is a big one im still unpacking...okay so at the top we have "functional instantation..." So when we create multiple objects and functions geared towards those objects it is likely we will want to reuse the logic within each of those functions so inorder to keep it efficient (instead of rewriting the code block for each object) We start out by creating a function where we place our object AND the methods within it that way the parameters are open for whatever arguement may come our way, we would then use "dot notation" to pick which method we would like to use ``animal.eat`` (this is refering to the method with works out the amount of energy the animal has by what its eating....  the same can be done with any method within this function). The next step towards clean efficient code is doing somthing called " functional instation with shared methods" This another step forward wher we creart a method that incapsulates all the methods  along side of our ''Animal" function (this is left openm so we can reuse the general format of this object inside of this function.) This makes it easier to grab the return from the methods by using "dot notation" for example

``

const animalmethods = {
    eat(amount){
        console.log(`${this.name} is eating.`);
        this.energy += amount
    }, etc..... (enter two other functions here in the same formant){
    }
}
 function animal(name, energy){
    let animal = {}
    animal.name = name
    animal.energy= energy
    animal.eat = animalMethods.eat
}```

allows us to grab the info fromt he return and utilize it within a rotating door functions, this means we can reuse all of this code over and over. and assign the data from each method to a var by (once again) using dot notation. (see "animal.eat).

Another tool gather was called ``object.creat()`` this (to me) much like a funnel that caught info that wasnt available for one object and routed it to another object that Does have the key value pair available. Now this does not stop at the use of routing info from one object to another we can also use this by way of attatching this property to our functions object ``let animal = object.create(animal methods)`` if we look up a bit of info that is not readily available within our static object this will seek it out through our methods (since out methods are assigned to an object themselves)... This is a way we can clean up our code and not waste memory, This is called "Functional instation with shared methods and object create... (i think thats what its actually called but who knows). 

## Things I want to know more about

-