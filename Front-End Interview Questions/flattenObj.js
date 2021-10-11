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
  
  let result  = {};
  let keyName = "user";

  var flattenObj = function(user, keyName){
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