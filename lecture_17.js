// Asynchronous and Event looop

// ex-1
console.log("start");
setTimeout(function cb(){
    console.log("Timer of 5 sec is over");
},5000);

console.log("end");

//---------------------------------------------

// ex-2
console.log("start");
setTimeout(function cbT(){
    console.log("cbT is called");
},4000);

fetch("https://api.netlflix.com")
.then(function cbF(){
    console.log("data is fetched");
})
.catch(function(err){
    return err;
});

console.log("end");