// let add = function(x,y){
//     console.log(x+y);
// }

// let addThem = add.bind(this,3);
// addThem(20)


// // let add = (x,y)=>{
// //     console.log(x+y);
// // }

// // add.bind(this,4,4)();


// let multiply = function(x,y){
//     return function (z) {
//         return x*y*z;
//     }
// }

// let ans = multiply(4,2)(4)
// console.log(ans);




// let a = new Array(4);
// a[0] =4;
// a[2]=3

// console.log(a);



// var a = func("Hello World");

// function func(params){
//     console.log(params); 
// }

// -----------------Multiply Function Currying ------------------------------------
// function multiply(x,y){
//     console.log(x*y);
// }

// let multiplybythree =  multiply.bind(this, 3,4);
// multiplybythree(10)

// let multiplybyfour = multiply.bind(this,4 );
// multiplybyfour(20);
// ------------------------------------------------------
// This is another way of doing function currying using closures.
 
let multiply = function (x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByThree = multiply(3);
multiplyByThree(10);