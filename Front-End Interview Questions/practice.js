let pokemon_2  = {
    name : "pikachu",
    age : 2,
}

// let pokemon_1= {
//     name : "charmender",
//     age :3,
// }

function getName(StrongPoint, Weakness, place){
    // console.log(a)
    // let StrongPoint = a[0];
    // let Weakness = a[1];
    console.log(`${this.name} , i choose you... StrongPoint-> ${StrongPoint}, Weakness-> ${Weakness} FROM ${place}`);
}


// let bindObj = getName.bind(pokemon_2, "Electricity", "Water");
// bindObj()

// polyfill for bind

Function.prototype.myBind = function (...args){
   let fun = this;
   let obj =  args[0]; // pokemon_2 = {}
   let arr = args.slice(1); // arr=["electricty ", "water"]

    // console.log(obj, arr);
    return function(){
        fun.call(obj, ...arr);
    }
}

let ans = getName.myBind(pokemon_2,"Electricity", "Water" );
ans("Japan");




