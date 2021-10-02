// Scope chain and Lexical Environment
// Scope - is the place or area wherea a particular variable or function can be accessed.
// Lexical Environment - is created whenever an execution context is created , and lexical environment is 
// the local memory +  the lexcial environment of that execution context

//Ex-1
// function a(){
//     function b (){
//         console.log(x)
//     } 
//     b();
// }

// var x = 9;
// a();

//---------------------------------

// Ex-2
function a(){
    var x=10;
    function b(){
        console.log(x);
    }
    b();
}
a();
// console.log(x);