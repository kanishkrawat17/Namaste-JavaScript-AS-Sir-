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

//---------------------------------------------- 8i810
// Flatten an object : -
//   let result  = {};
//   let keyName = "user";

//   const flattenObj = function(user, keyName){
//     Object.keys(user).forEach((key)=>{
//         var newKey = `${keyName}_${key}`;
        
//         if(typeof(user[key]) === 'object'){
//           flattenObj(user[key],newKey);
//         } else{
//           result[newKey] = user[key];
//         }
//       })
//       return result;
//   }
  
//   let ans  = flattenObj(user,keyName);
//   console.log(ans);


  let obj = {
    user_name: 'Vishal',
    user_address_primary_house: '109',
    user_address_primary_street_main: '21',
    user_address_primary_street_cross: '32'
  }

  let o = Object.keys(obj);
  let ans = o[0].split('_');
//   console.log(ans[0]);
  let keyName = ans.slice(1);
  console.log(keyName);



const deflatten = function(obj){

   for(let key in obj){
       
   }
}

