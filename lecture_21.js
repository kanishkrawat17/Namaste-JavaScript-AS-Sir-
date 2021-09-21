// map -> used for tranforming 
const arr = [5,3,4,6,4,3];

let answerMap1 = arr.map(function(x) { // tranform to double
    return 2*x;
})
console.log(answerMap1); 

let answerMap2= arr.map((x)=> x.toString(2)); // tranform to binary
console.log(answerMap2); 

let answerFilter1 = arr.filter((x) => x % 2 != 0) //odd
console.log(answerFilter1);


// ---------------------------filter----------------------------------


// filter -> takes array as input and filter that array on some logic.
let answerFilter2 =arr.filter((x) => x > 5) // greater than 5
console.log(answerFilter2);

let answerFilter3 =arr.filter(isEven); // even
console.log(answerFilter3);

function isEven(x){
    return x%2 === 0;
}


// -------------------------------------------------------------------------


// reduce -> its has a function which takes accumulator and current, reduce takes one more parameter which
// is used to assign the value to accumulator.

// Accumulator -> it just accumulates all the values of givern array 
//  current -> represents the value of individual elt of array.


function findSum (arr){ // sum of all elts of array
    let sum = 0
    for(let i = 0 ; i < arr.length ; i++){
        sum = sum + arr[i];
    }
    console.log(sum);
}
findSum(arr);

let reduceAnswer = arr.reduce(function(accumulator, current){ // sum of all elts of array
    accumulator += current;
    return accumulator
},0) ;
console.log(reduceAnswer);


function maximum(arr){ // find maximum from array
    let max = 0;
    for(let i = 0 ;i < arr.length ; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(maximum(arr));


let reduceAnswer1 = arr.reduce(function(acc, curr){ // find maximum from array
    if(acc < curr){
        acc = curr;
    }
    return acc;
}, 0);

console.log(reduceAnswer1);



// --------------------------------------
// tricky-filter

const users =[
    {firstname :"kanishk" , lastName:"rawat" , age :23},
    {firstname :"mia" , lastName:"bella" , age :40},
    {firstname :"raj" , lastName:"kumar" , age :26},
    {firstname :"amitabh" , lastName:"kumar" , age :30}
];
// Ques : print a list of firstname where age is less than 30. ["kanishk","raj"]

// we can do chaining of map, reduce, filter


let trickySolution1 = users.filter( x => x.age < 30).map((x)=>{// solution using chaining of map and filter
    return x.firstname;
})
console.log(trickySolution1);

let trickySolution2  = users.reduce(function(acc, curr) {  // solution using reduce 
    if(curr.age < 30){
        acc.push(curr.firstname);
    }
    return acc;
}, []);
console.log(trickySolution2);



 

