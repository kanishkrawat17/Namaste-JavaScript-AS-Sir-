// Hoisting - The phenomenon by which we can access function and variables before even initializing them

// Hoisting-1
var x = 5;
test();
console.log(x);
function test(){
    console.log("test is called");
}

//-----------------------------------------------

// Hoisting-2
// console.log(test1);
// console.log(x);
// function test1(){
//     console.log("test1 is called")
// }
// test1();
// var x = 5;

//-----------------------------------------------

//Hoisting in arrow function
getName();
    console.log(getName);
    console.log(getName2)
    getName2()
    function getName(){
        console.log("i am Normal function")
    }

    const getName2 = ()=>{
        console.log("i am arrow function")
    }
// // getName and  getName2 will behave same . They both are variable . just two different way of making functions.

// console.log(getName);
// getName();

// ----------------- Revision -----------------
// IIFFE Function
// (function () {
//     console.log("Hi.. I'm a IIFE function");
// })();

// (() => {
//     console.log("IFFE in Arrow Function");
// })();

// var a = 3;
// let b  =32;
// const c =23;

// console.log(a);
// console.log(b);
// console.log(c);

// hof
// var a = greeting(function () {
//     return "You are welcome ..!!";
// })
// function greeting(params){
//     var  b = params();
//     console.log(b);
// }

// Scope -> Scope chain -> Lexical Environment -> closure ->

// var x =  10;

// function a(x){
//     function b(x){
//         function c (ab){
//             console.log(ab);
//         }
//         c(x) ;
//     }
//     b(x);
// }
// a(x)

// const

// console.log("Line 94", b);
// var b =  greeting(function(){
//     return "function being returned"
// });

// console.log("Line 98", b);
// function greeting(param){
//    return param();
// }

// Recursion

// function fact(i){
//     if(i  <= 0){
//         return 1;
//     }

//    var factorial = fact(i-1);
//    return factorial * i;
// }

// var ans  = fact(5);
// console.log(ans);

// let person = {
//     name :"kanishk",
//     lastname : "rawat",
//     city : "Uttrakhand",

// }

// person.getIntro =  function(){
//     console.log(this.name +" "+ this.lastname+","+this.city);
// }

// person.getIntro()

// let a = sum(2)(3)(4)(5);

// function sum(a){
//     return function(b){
//         return function(c){
//             return function (d){
//                 return a+b+c+d
//             }
//         }
//     }
// }
// console.log(a);

// class User {  // class is a function (typeof(User))

//     constructor(name) {
//       this.firstname = name;
//       this.lastname = "rahul";
//     }

//     sayHi() {
//       console.log(this); // here this points to the constructor function members
//     }

//   }

// var obj = new User("John");
// obj.sayHi();

// since User is a function therefore, typeof(User.prototype) == type.of(Object.prototype) (object)
// so we added a function saysHi to User we can say like that
// function User(name){
//     this.name = name;
// }
// User.prototype.saysHi = function(){
//     return this.name
// }

// let user = new User("John");
// console.log(user.saysHi());

// let intro = {
//     name : "Kanisnhk",
//     city : "delhi",
// }

// intro.saysHi = function(){  // this adds saysHi to intro object
//     return this.name + " from " + this.city
// }

// alert(intro.saysHi());

// Function.prototype.saysHi = function(name, city){ // ? this should be available to everyone
//     console.log(name , city)
// }
// // function test(){
// //     console.log("oka")
// // }
// let a ;

// a.saysHi("kanihsk","delhi");

// Array.prototype.myMap = function(fun){

// }

// let arr  = [1,2,3,4];

// arr.myMap((elt)=>{
//     return elt*2; // [2,3,6,8]
// });

// saysHi("kanisk", "Delhi");

// try- catch

// let animal = {
//     eats: true
//   };
//   let rabbit = {
//     jumps: true
//   };
//   animal.__proto__ = rabbit;

// // animal = rabbit;
// console.log(animal);
// console.log(rabbit);

// ------------------------------

// let animal = {
//     eats: true,
//     walk() {
//       alert("Animal walk");
//     }
//   };

//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };

//   let longEar = {
//     earLength: 10,
//     __proto__: rabbit
//   };
//   console.log(animal);
//   console.log(rabbit);
//   console.log(longEar);

// let animal = {
//     eats: true
//   };
  
//   function Rabbit(name) {
//     this.name = name;
//   }
  
//   Rabbit.prototype= animal;
  
//   let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
//   alert( rabbit.eats ); // true


// let arr  =  ["23","2","as",4];
// // var sum = 0
// // for(let val of arr) console.log(val)
// // // console.log("Line 252",sum);

// function test(...args){
//     console.log(args) ; // [1,151,14]
//     let arr = args;
//     console.log([...arr])
// }
// test(1,151,14)


// // spread operator
// let array = [...arr,4,5,6,7]
// console.log(array);


function Bird(name , color, num) {
    this.name = name
    this.color = color;
    this.numLegs = num;
    console.log(this); // inside constructor this refers to bird object
  }

let bird = new Bird("dog","blue","4");

console.log(bird);
