// // // function clickMe(){
// // //     var count = 0;
// // //     document.getElementById("click").addEventListener("click", function(){
// // //         count++;
// // //         console.log("button clicked", count);
// // //     });
// // // }
// // // clickMe();

// // // let s = 10;
// // // var  a = 200;
// // // console.log(a)
// // // console.log(b)

// // // Hoisting
// // // console.log(b)
// // // console.log(a);
// // // let b = 20;
// // // var a = 10;
// // // console.log(20);
// // // console.log(a);




// // // console.log(a);
// // // let a = 310;
// // // x();
// // // function x(){
// // //     console.log(a);
// // //     console.log(this.a);
// // // }
// // // console.log(a);
// // // console.log(this.a);

// // // Block scope

// // // console.log(a);
// // // // console.log(b);
// // // var a = 1000;
// // // console.log(a);
// // // {
// // //     console.log(a);
// // //     var a  =  10;
// // //     console.log(a);
// // //     let b = 40;
// // //     console.log(b);
// // //     const c = 3;
// // // }
// // // console.log(a)
// // // // console.log(b)


// // // var a = 20;
// // // b();
// // // function b(){
// // //    a = 10;
// // //     console.log(a);
// // // }
// // // console.log(a);


// // // const a = 10;
// // // {
// // //     const a =20;
// // //     {
// // //         const a =30;
// // //         console.log(a);
// // //     }
// // //     console.log(a);
// // // }
// // // console.log(a);

// // // let a =10;   // its fine shadowing
// // // {
// // //     let a =20;
// // // }


// // // var a =20;   // its fine shadowing
// // // {
// // //     let a = 20;
// // // }

// // // let a = 20;    // error in shadowing.
// // // {
// // //     var a=30;
// // // }


// // // var a = 20;
// // // function b(){
// // //      a = 40;
// // //     console.log(a); //#40
// // // }
// // // b();
// // // console.log(a); //#40

// // // var a = 20;
// // // function b(){
// // //     var a = 40;
// // //     console.log(a);  //#40
// // // }
// // // b();
// // // console.log(a); //#20


// // // console.log(a);
// // // a = 20;
// // // console.log(a); // #20
// // // console.log(window.a);// #20
// // // console.log(this.a);// #20.



// // let arr = [1, 2, 3, 4];

// // // function f(arr) {
// // //     for (x in arr) {
// // //         console.log("idx :"+ x);
// // //         arr[x] = 0
// // //     }
// // //     return arr;
// // // }

// // // console.log(arr);

// // // console.log(f(arr));

// // // console.log(arr);

// // // let changedArr  = arr.map(function(x){
// // //     return x * 0;
// // // })
// // // console.log(changedArr);
// // // console.log(arr);

// // function f(arr) {
// //         let nArr = arr.map(function(e){return 0})
// //         return nArr;
// // }


// // console.log(arr);

// // console.log(f(arr));

// // console.log(arr);
// // let person = {
// //     "firstName": "John",
// //     lastName: "Doe",
// //     age: 50,
// //     eyeColor: "blue"
// //   };

// //   for(let key in person){
// //       console.log((person[key]));
// //   }
// //   let keys  = Object.keys(person);
// //   console.log(keys);//[ 'firstName', 'lastName', 'age', 'eyeColor' ]


// let obj = {
//     1: 0,
//     2: 1,
//     3: 2,
//     4: 3,
//     5: 4,
//     length: 5,
//   };
// //   console.log(Object.keys(obj).length)
//   console.log(obj.length);

//   function f() {
//     for (let i = 1; i < obj.length; i++) {
//       obj[i] = obj[i] + 1;
//     }
//     delete obj["length"];
//     for (let x in obj) {
//       console.log(`at index ${x} we have value ${obj[x]}`);
//     }
//   }
  
//   f();

  

// f(2,3) = 6;
// f(2) (3) = 6;


// function f(x,y){
//     console.log(x*y);
//     return function(y){
//         console.log(x*y);
//     }
// }
// function f(x,y){
//     if(arguments.length == 1){
//         return function(z){
//             console.log(x*z)
//         }
//     } else {
//         console.log(x*y);
//     }
// }

// f(2,3);
// f(2)(3)


// let x = ['a', 'b', 'c','d', ['a', 'b', 'c']]
// let y = ['b', 'c'];
// console.log(y[0]);
// y[0] = x;
// console.log(y);
// // x = y;
// y = x;
// console.log(x);
// console.log(y);


// function reduce(array, yourLogic){
//     let ans = array[0];
//     for(let i = 1 ; i < array.length ; i++){
//         ans =yourLogic(ans, array[i]);
//     }
//     return ans;
// }

// let count = 0;
// let interval = setInterval(function () {
//   console.log(count);  // 1-0, 2-1, 3-2, 4-3, 5-4 
//   count++;
// }, 100);

// setTimeout(function () {
//   clearInterval(interval);
//   interval = setInterval(function () {
//       console.log(count);
//       count--;
//       if (count < 0) clearInterval(interval);
//   });
// }, 500);

var x = ['a', 'b', 'c','d'];
for( let val in x){
    console.log(x[val]);
}
x.map (function(elt){
    return 2*elt;
})
console.log(x);
var x = new Array();
console.log(x);

// let a = 2 + 'b';
// console.log(a);  // 2b

// let a = 2 - 'b';
// console.log(a);  // NaN