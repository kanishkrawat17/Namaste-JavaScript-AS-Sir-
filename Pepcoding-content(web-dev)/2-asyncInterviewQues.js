//  ques-1
// async function inc( x){
//     x  =  x  + await 1;
//     return x;
// }

// async function increment (x){
//     x  =  x + 1;
//     return x;
// }


// inc(1).then(function(x){
//     console.log(x)
//     increment(x).then((ans)=>{
//         console.log(ans)
//     })
// })

// *********************************************

// ques-2

let p = new Promise((resolve, reject)=>{
    reject(new Error("Some error"))
    setTimeout(()=>{
        resolve("No error")
    }, 1000);
    reject(new Error("Some error"));
    resolve("No error");
})

p.then(null, (error)=>{
    console.log(1);
    console.log(error)
}).catch((err)=>{
    console.log(2);
    console.log(err)
})