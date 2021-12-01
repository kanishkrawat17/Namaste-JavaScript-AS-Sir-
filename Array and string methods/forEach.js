const fruits = ["Banana", "Orange", "Apple", "Mango","Lemon"];


fruits.forEach((val)=> console.log(val+" ok"));
// fruits[0] = "kiwi";
// console.log(fruits);

fruits[6] = "khajoor"; // this create holes in array
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', <2 empty items>, 'khajoor' ]
typeof(fruits); // Object
delete fruits[0]; // it also creates holes in array, and if we try to acces thast idx it says undefined
console.log(fruits); // [<1 empty item>, 'Orange',   'Apple',   'Mango',   <2 empty items>,   'khajoor' ]
console.log(fruits.length); // 7
console.log(fruits[0]); //undefined


// ----------------------concat arrays---------------------------
// The concat() method can take any number of array arguments

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const concatArr = myGirls.concat(myBoys);
console.log(concatArr);//[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]

// ----------------------slice () --------------------------------
// The slice() method creates a new array. It does not remove any elements from the source array.

const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

let slicedArr = fruitss.slice(1);
console.log(slicedArr);

