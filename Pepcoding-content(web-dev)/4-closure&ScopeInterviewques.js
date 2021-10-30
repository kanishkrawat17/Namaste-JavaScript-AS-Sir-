// ques-1
// (function immediateA(a){
//     return (function immediateB(b){
//         console.log(a);
//     })(1)
// })(0)

// ********************************

// ques-2

let count = 0 ;

(function(){
    if(count === 0){
        let count = 1;
        console.log(count);
    }
    console.log(count);
})()