// call back functions 


// way-1, to calll the y () function and simply calling x () once bcs y() is callng itself and not returning 
// function x(y){
//     console.log("x")
//     console.log(y);
//     y()
// }

//  x(function a(){
//     console.log("Call back")
// });

//-----------------------------------------------------------------------------------------


// way-2 , to recieve function inner function when it is being returned and then call value varuiable to get value
// function x(y){
//     console.log("x")
//     console.log(y);
//     return y
// }

// var value  = x(function a(){
//     console.log("Call back")
// });
// value ()


// ------------------------------------------------------------------------------------

// setTimeout(function (){
//  console.log("Timer of 2 sec");
// }, 2000);

// function x (y){
//     y()
// }

// x(function (){
//     console.log("Call back function")
// })



// -----------------------------------------------------

let  i = 1;

if(i < 5){
    setTimeout(function () {
      
        i++;
        console.log(i);
      

    }, i*1000);

}
  



