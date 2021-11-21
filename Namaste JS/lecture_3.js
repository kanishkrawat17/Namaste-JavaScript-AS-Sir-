// How js code is executed and call stack ?
// Js code is executed in two phase  1) Memory Creation Phase 2) Code Execution Phase
// var a = 5;

// function square (num){
//     var ans = num * num;
//     return ans;
// }

// var square1 =  square(24);
// var square2 = square(4);

// console.log(`Value of sqaure1 = `+square1);
// console.log(`Value of sqaure1 = `+square2);

// My map implementation : 
let arr = [1,2,3,4,5];
// Array.prototype.myMap = function (logic){
//     let ans = []
//     for(let elt of this){
//         ans.push(logic(elt));
//     }
//     return ans;
// }
// function double(el){
//     return el * 2;
// }
// let reponse = arr.myMap(double);
// console.log(reponse);

// My Filter  implementation : 

// Array.prototype.myFilter  = function (logic){
//     let ans = [];
//     for(let elt of this){
//       if(logic(elt)){
//         ans.push(elt)
//       }
//     }
//     return ans;
//   }
//   function logic (el){
//     return el != 2
//   }
  
//   let reponse  =arr.myFilter( logic );
//   console.log(reponse);

// call , bind , apply 
let person1 = {
    firstName : "Kanishk",
    lastName : "Rawat"
}
let person2 = {
    firstName : "Rahul",
    lastName : "Dravid"
}
let person3 = {
    firstName : "Sachin",
    lastName : "Tendulkar"
}

function showName (a,b){
    if(a != undefined && b != undefined){
        console.log( this.firstName + " "+ this.lastName + " from  " + b +" and " + "Age is "+a )
    } else{
        console.log( this.firstName + " "+ this.lastName )
    }
}

// showName.call(person1);
// let bindObj  = showName.bind(person2, 40, "Bangalore");
// bindObj();
// showName.apply(person3, [50, "Mumbai"]);


Function.prototype.myBind = function (...args){
        // this ->  points to function ....
        // args -> object 
        let fn = this
        let obj  = args[0];
        let params = args[1]; // [ 40 , karnataka]
        return function (){
            fn.call(obj,...params)
        }
}

let res = showName.myBind(person2, [40,"Karnataka"])
res();

Function.prototype.myApply=  function(...arguments) {    
    let fn = this;
    let obj = arguments[0];
    let params  = arguments.slice(1); // [23 , Delhi]
    fn.call(obj, ...params)


}
showName.myApply(person1, 23, "Delhi")
// showName.apply(person1 , 23, "Delhi");
// Whenevr there are multiple args passed then recieve them as ...args in parameters ans then args willmbe an array.
// and whenever a variable has an array that needs to passed as an argument then pass that array as ...args
