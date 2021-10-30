// for(var i = 0 ; i <= 5 ; i++){
//     (function closure(i){
//         setTimeout(()=>{
//             console.log(i);
//         },i*1000)
//     })
//     closure(i);
// }


// **************************

let i = 0;

for( ; i <= 5 ; i++){
    (function(){
        let j = i;
        setTimeout(() => {
            console.log(i)
        }, 1000);
    })()
}
