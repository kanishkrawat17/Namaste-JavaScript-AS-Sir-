let person = {
    firstName : "Kanishk",
    lastName : "Rawat"
}

let fullName = function(city,c){
    console.log(this.firstName+" "+this.lastName+ ", "+ city+c);
}


// // let printMyName = fullName.bind(person);
// // printMyName();

// // -------------------------------------implementation of bind ------------------------------------------------
// // Function.prototype -> Function protoype that we are making as function prototype , will be accessible by 
// // every function.

Function.prototype.myBind = function(...args){  // args is an array
    console.log(this);
    let fun  = this; // this-> points to fullName Function inside here
    let object = args[0];
    params = args.slice(1); // this is an array
    return function(...args){
        let p = args;
        fun.call(object,...params,...p);
    }
}

let returedFunByBind = fullName.myBind(person,"Delhi");
// console.log(returedFunByBind);
returedFunByBind("Delhiiii")






//Practice :-

// Polyfill for call
let dog = {
    name : "tuffy",
    age : 2,

}

function intro(eat,bark){
    console.log(this);
    console.log(this.name + "  "+ this.age+" "+eat+" "+bark); 
}
intro.call(dog);
// Why this in intro fun points to dog object?  This is because of using call function an object(dog) is passed in call(dog)
// in case if we call intro simply like this -> intro() , now console.log(this); inside intro will give a global object
// in case if we call like this ->   intro.call(dog);  now console.log(this); inside intro will give a dog object.

Function.prototype.myBind = function(obj,...args){
   console.log(args);
   let object = Object.create(obj); // dog { name :"tuffy" , age :2 }
   object.fn = this; // this points to intro function;
   object.fn(...args)

}
intro.myBind(dog,"no", "yes");


// Polyfill for Apply
Function.prototype.myApply = function(obj,args){
    console.log(args,"Line71");
    let object = Object.create(obj); // dog { name :"tuffy" , age :2 }
    object.fn = this; // this points to intro function;
    object.fn(...args)
 
 }
 
 intro.myApply(dog,["no", "yes"]);























let o = {
    a : "sfd",
    b : 3
}
let m = {
    c : "ed",
    x : 1
}

let a1 = [1,2,5,3,4]
let a2 = [5,6,7,8]
let obj ={...o,...m}
console.log(obj);

let arr = [...a1,...a2]
console.log(arr);

function test(...args){
    console.log("107",args); // 107 [ [ 1, 2, 5, 3, 4 ] ]
}
test(a1)