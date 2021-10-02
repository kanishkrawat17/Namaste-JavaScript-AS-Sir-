// First class functions 
// var a = function cab(){
//     console.log("a is called");
//     console.log(cab);
//     console.log(a);
// }
// a()
// console.log(a);
// cab() // error

// ex-2
// var a  = function abc(param1){
//    return ( function(){
//         console.log(param1);
//     });
// }
// a(5)(); 

//-------------------------------------------

// ex-3
// var a  = function abc(param1){
//     return ( function(){
//          console.log(param1);
//      });
//  }
//  var  value  = a("first class function are known as first class citizens");
//  value();

// --------------------------------
// ex-4
//  function x(param1){
//     return param1;
//  }

//  var value  = x(function(){
//      console.log("first class functions");
//  });
//  value ()

// //  or can be invoked like this as well

// x(function(){
//     console.log("first class functions");
// })()


// console.log(value)