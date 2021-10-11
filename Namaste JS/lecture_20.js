// Higher order functions - those functions which recieve a function in its parameter 
// ex: 

var func1 = function (){
    console.log("its a call back function");
}

function hihghOrderFunc(cb){
    // cb();
    return cb;
}
hihghOrderFunc(func1)();


// -------------------------------js-info-----------------------------------------
//  ex:
//hof -> are those functions which accepts function as an parameter, they can also return  function 

// hof
function getDetails(email, city, cb){   // cb is callback -> thats goes as argument
    let details ={};
    details.email = email;
    details.city = city;

    cb(details)
    return function(){
        console.log(details);
    }

}

getDetails( "abc@gmail.com", "Delhi", function (details){
console.log(details);
})()



//   ----------------------------------

// const radius = [1,2,3,4,5];

// let calcArea = function (radius){
//     return Math.PI * radius * radius;
// }

// let calcDiameter = function (radius){
//     return 2 * radius;
// }

// let calcCircumference = function (radius){
//     return Math.PI * 2 * radius;
// }

// let findArea = function (radius){
//     const area = [];
//     const diameter = [];
//     const circumference = [];

//     for (let i = 0 ; i < radius.length ; i++){
//         area.push(calcArea(radius[i]));
//         diameter.push(calcDiameter(radius[i]));
//         circumference.push(calcCircumference(radius[i]));
//     }
    
//     console.log(`Area => ${area} `);
//     console.log(`Diameter => ${diameter} `) 
//     console.log(`Circumferenec => ${circumference}`); 
    
// }

// findArea(radius);


// -------------------------------------------


// const radius = [1,2,3,4,5];

// let calcArea = function (radius){
//     return Math.PI * radius * radius;
// }

// let calcDiameter = function (radius){
//     return 2 * radius;
// }

// let calcCircumference = function (radius){
//     return Math.PI * 2 * radius;
// }

// let calculate = function (radius, logic){
//    const output = [];

//     for (let i = 0 ; i < radius.length ; i++){
//         output.push(logic(radius[i]));
//     }
    
//     return output;    
// }

// console.log(calculate(radius, calcArea));
// console.log(calculate(radius, calcDiameter));
// console.log(calculate(radius, calcCircumference));