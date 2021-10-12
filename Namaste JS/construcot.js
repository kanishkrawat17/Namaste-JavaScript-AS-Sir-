function Animal (name){ // constructor Animal, from this we can make objects, this points to dog and cat object
    this.Name = name;
}

let dog  = new Animal("tuffy");
let cat = new Animal("Lucy");
console.log(dog);
console.log(cat);

console.log(dog.constructor == Animal);

Animal.prototype = {
    legs : 2,
    showDetails : function(){
        console.log(this.name)
    }
}
console.log(dog.legs);