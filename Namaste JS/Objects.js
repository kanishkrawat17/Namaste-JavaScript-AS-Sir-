let person1 = {
    name : "kanishk",
    age :23
}

let arr = [1,2,3,4,5];

let person2 = {
    name : "rahul",
    age :26,
    hobby : "eating",
    showDetails : function (){
        console.log(this.name)
    }
}
 
person1.__proto__ = person2; // putting properties of person2 in person1's prototype.
person1.showDetails();   // Kanishk
// console.log(Object.keys(person1)); // ['name' ,'age']

arr.__proto__.__proto__ = person1;
console.log(arr.name, "Line-22");
arr.showDetails(); // array also has access to person2's function shwoDetails since its present in person1's ans we are putting person1's proprties ans proto in arr


// ************ ERROR ****************
// let s = [2,3];
// s.__proto__.__proto__ = arr;
// console.log(s.name);  // Cyclic __proto__ value error




// ************ NOTES ****************

// Every array, function, object has a prototype which has some methods which can be accessed .
//  person1.__proto__ = Object.prototype; // person1 is object._
// everthing in the protoype chaining will be an object be it a array , function etc . , for ex-> arr.__proto__.__proto__ = Object.prototype

//  if we want to use give properties  of person2  to person2 ,  we can do by putting person2 peoperties in person1 __proto__ 
// -> person1.__proto__ = person2; this way we can access person2 properties in case if a property is present in both then person1's property will work ,
//  if a property isnt present in peron1 then it will check in person2.

// if we want to put properties of person2 in arr=[1,2,3] proto , -> arr.__proto__.__proto__ = perons2; arr can access person2's porperties.





