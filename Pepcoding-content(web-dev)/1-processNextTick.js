console.log("start");


function add(a,b){
    console.log(a+b);
}

setTimeout(()=>{
 add(2,3) ;
 console.log("i'm setTimeout")  
});

setImmediate(()=>{
    add(2,3) ;
 console.log("i'm setImmediate")  
});

process.nextTick(()=>{
    add(2,3)
    console.log("i'm next tick")
})





console.log("end");