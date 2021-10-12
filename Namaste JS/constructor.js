function Animal (name){ // constructor Animal, from this we can make objects, this points to dog and cat object
    this.Name = name;
}
Animal.prototype = {
  constructor : Animal,
  legs : 2,
}

let dog  = new Animal("tuffy");
let cat = new Animal("Lucy");
let bruno = new dog.constructor("Bruno"); // its bcs dog.constructor == Animal
console.log(dog);
console.log(cat);
console.log(bruno);

console.log(dog.constructor == Animal); // false , to make constructor available again , we cann add constructor to Animal.prototype;
Animal.prototype = {
  constructor :Animal
}
console.log(dog.legs);

console.log(dog.legs);


// Constructor function Animal has special property which is Animal.protoype object which has contructor key and its value is Animal,
// So whenever we add any function or variable in it then default prperty gets erased so write that by yourself, 
// so that the (object.constructor === Animal) retruns true.

// and if we add any property to Animal.prototype like this : 
// Animal.prototype.legs = 4 ; // dog.constructor === Animal will give true because constructor property still persists 


// *********************************FCC********************************************


// It uses a technique called inheritance. This challenge covers the first step: make an instance of the supertype (or parent). You already know one way to create an instance of Animal using the new operator:
// let animal = new Animal();
// There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:
// let animal = Object.create(Animal.prototype);
// Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal to be the prototype of Animal, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

// animal.eat();
// animal instanceof Animal;
// The instanceof method here would return true.

// Use Object.create to make two instances of Animal named duck and beagle.





