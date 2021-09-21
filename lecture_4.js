// Hoisting - The phenomenon by which we can access function and variables before even initializing them


// Hoisting-1
// var x = 5;
// test();
// console.log(x);
// function test(){
//     console.log("test is called");
// }

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
// getName();  //In this caee it will ay getName is not a function , code will not run
var x = 1;
console.log(getName);

var getName = ()=>{
    console.log("Welcome");
}
var getName2 = function (){
    
}  
// getName and  getName2 will behave same . They both are variable . just two different way of making functions. 

console.log(getName);
getName();
