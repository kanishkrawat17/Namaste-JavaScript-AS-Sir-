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


let keys  = Object.keys(user); // will give an array of keys
//  console.log(keys);

//------------------SHALLOW COPY----------------------------    

// this gives an object it basically creates shallow copy of it , means if we make any change to copiedobj it will not reflect in user
  let copiedObj = Object.assign({},user); 
  copiedObj.address = "xyz"; // copied object will change but user object will not
  // console.log("CopiedObj",copiedObj);
  // console.log("UserOBj", user)

//----------------------------------------------    

let person = user;
person["age"] = 23;
person.married = "no"
// console.log(person);
// console.log(user)
// console.log(Object.keys(person).length);

//-------------------DEEP COPY--------------------------- 
// its an example of deep copy since newUser and user they both are pointing to the same memory location so whatever change will occur on any of 
// them will reflect on both of these either deleteion of key , deletion.

let newUser = user;
user.name="Rahul"
user["name"]="Binod"
console.log(newUser);
console.log(user);

//----------------------------------------------

//Object.entries bascially gives an array of key,value
let keyValueArr = Object.entries(user);
// console.log(keyValueArr);

// Object.values is an array of values in a given object
let value = Object.values(user);
// console.log(value);

let arr= [1,2,3,4,5,6,7,8];

arr.forEach((val)=> console.log(val));

for(const val of arr){
    // console.log(val);
}