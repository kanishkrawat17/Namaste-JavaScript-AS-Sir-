let person = {
    firstName : "Kanishk",
    lastName : "Rawat"
}

let fullName = function(city,c){
    console.log(this.firstName+" "+this.lastName+ ", "+ city+c);
}


// let printMyName = fullName.bind(person);
// printMyName();

// -------------------------------------implementation of bind ------------------------------------------------
// Function.prototype -> Function protoype that we are making as function prototype , will be accessible by 
// every function.

Function.prototype.myBind = function(...args){
    console.log(this); // args is an array

    let fun  = this; // this-> points to printName Function inside here
    let object = args[0];
    params = args.slice(1); //this is an array
    return function(...args){
        let p = args;
        fun.call(object,...params,...p);
    }

}

let returedFunByBind = fullName.myBind(person,"Delhi");
// console.log(returedFunByBind);
returedFunByBind("Delhiiii")




// let obj=  {
//     name :"abc",
//     age : "23"
// }

// function myFun (...args){
   
//   console.log(args); // gives us an array
  
// }

// myFun(1,2,33);