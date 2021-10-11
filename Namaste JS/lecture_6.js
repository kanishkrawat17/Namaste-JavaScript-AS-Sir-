//Shortest JS program:
// Whenever a js program is  run global exectuiom is made up in the call stack

var a = 5;

function b (){
    var x = 100;
    console.log(this.a);
}

console.log(this.a);
console.log(a);
b()
// console.log(x);
