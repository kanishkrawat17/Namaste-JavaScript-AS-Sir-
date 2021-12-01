const fs = require("fs").promises;

console.log("start");

// Serial => but it makes callBack Hell .  Random calls
// let f1 = fs.readFile("f1.txt", (error, data)=>{
//     console.log(data+ " ");
//     let f2 = fs.readFile("f2.txt", (error, data)=>{
//         console.log(data+ " ");
//         let f3 = fs.readFile("f3.txt", (error, data)=>{
//             console.log(data+ " ");
//         })
//     })
// })

// Serial => but it makes callBack Hell .  Random calls

// let f1 = fs.readFile("f1.txt")
//         .then(data=>console.log(data+" "))
// let f2 = fs.readFile("f2.txt")
//         .then(data=>console.log(data+" "))
// let f = fs.readFile("f3.txt")
//         .then(data=>console.log(data+" "))

console.log('start');

async function awaitTest() {
  let f1 = fs.readFile("f1.txt")
  let data1 = await f1
  console.log(data1+ " ")
    console.log("start, 31")
  let f2 = fs.readFile("f2.txt")
  let data2 = await f2
  console.log(data2+ " ")
  console.log("start, 35")
  let f3 = fs.readFile("f3.txt");
  let data3 = await f3
  console.log(data3+ " ")
  console.log("start, 39")
  
}
awaitTest();

console.log('end')
