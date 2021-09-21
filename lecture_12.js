// ex-1
// function x(){
//     var a = 10;
//     function y(){
//         a=100;
//         console.log(a);
//     }
//     return y;
// }

// var z = x();
// console.log(z);
// z();


// ---------------------------------------

// ex-2

// function x(){
//     var a = 80;
//     function y(){
//         var  b  = 20; 
//         function z(){
//             var c = 90;
//             console.log(a,b,c);
//         }
//         z();
//     }
//     y();
// }
// x();

function x  ( ){
for(let i = 0 ; i < 2; i++){

    setTimeout(function () {
        console.log("okahy");
    },5000)
    setTimeout(function () {
        console.log("Ok");
    },3000)
    console.log(i);
}
}
x();