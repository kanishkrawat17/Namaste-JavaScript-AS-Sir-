class Person {
    constructor (name){
        this.name = name
    }
    describe = function(){ //  this points to object od class person which is p1
        console.log(this.name + " "+ 'is a good person');
    }
}
let p1= new Person("Rahul");
// console.log(p1);
// console.log(Object.keys(p1)); // ['describe', 'name']
// p1.describe();

class Raj extends Person{
    constructor (name){
        super(name);
        this.name= name
    }
}
let raj = new Raj('Rajkumar');
console.log(raj) 
raj.describe(); // describe is being inherited frm Person class