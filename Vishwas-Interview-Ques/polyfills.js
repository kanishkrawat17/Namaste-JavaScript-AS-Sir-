// bind :- 

var person = {
    name :"kanishk"
}

function printName (hobby){
    console.log(this.name + " and Hobby is " + hobby)
}

Function.prototype.mybind = function (...args){
    let obj = args[0];
    let params = args.slice(1);
    let fn = this;
    return function (){
        fn.call(obj)
     }
}

let bindFn = printName.mybind(person);
 bindFn()


 Function.prototype.myCall = function (...args){
    let params = args[1];
    let obj = args[0];
    let fn = this;
    fn.call(obj, ...params)
 }
 printName.myCall(person, ["Singing"]);


 // Function Currying :
 function result (a,b){
   console.log(a * b);
 }
const multiplyByTwo = result.bind(this,2);
multiplyByTwo(4);


