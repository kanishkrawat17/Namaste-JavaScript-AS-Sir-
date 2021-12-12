var user = {
    name: "Vishal",
    address: {
      primary: {
        house: "109",
        street: {             
          main: "21",
          cross: "32"
        }
      }
    }
  };

// //----------------------------------------------
// // Flatten an object : -
  let result  = {};
  let keyName = "user";

  const flattenObj = function(user, keyName){
    Object.keys(user).forEach((key)=>{
        var newKey = `${keyName}_${key}`;
        
        if(typeof(user[key]) === 'object'){
          flattenObj(user[key],newKey);
        } else{
          result[newKey] = user[key];
        }
      })
      return result;
  }
  
  let ans  = flattenObj(user,keyName);
  console.log(ans);

// // --------------------------------------------------------------------
// // Deflatten an object
//   let obj = {
//     user_name: 'Vishal',
//     user_address_primary_house: '109',
//     user_address_primary_street_main: '21',
//     user_address_primary_street_cross: '32'
//   }

//   let o = Object.keys(obj);
//   let ans = o[0].split('_');
// //   console.log(ans[0]);
//   let keyName = ans.slice(1);
//   console.log(keyName);



// const deflatten = function(obj){

//    for(let key in obj){

//    }
// }

// function test(){
//     setTimeout(()=>{
//         console.log(`I'm a callback function`)
//     },1000);
// }
// test()

// ********************* flat an array ************************
let arr = [1,2,3,[4,5,6],[3,4,5]];
let result = [];

function flatAnArr(arr){
  for(let i = 0 ; i < arr.length ; i++){
    if(typeof arr[i] == 'object'){
      flatAnArr(arr[i]);
    } else{
      result.push(arr[i]);
    }
  }
  return result;
}

let ans = flatAnArr(arr);
console.log(ans);
