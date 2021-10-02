let person = {
    firstName : "Kanishk",
    lastName : "Rawat"
}

let person2 = {
    firstName : "Rahul",
    lastName : "Dravid"
}

function fullName(city,age){
    console.log(this.firstName+" "+this.lastName+ city+ " "+age);
}

//-------------- call ------------------
// Function Borrowing -> Borrwing functions from other objects using call , if that function is initalized in other object
 
// fullName.call(person," Delhi",21);
// fullName.call(person2, " Bangalore",40);

//-------------- apply ------------------
// console.log("In Apply method");
// fullName.apply(person,[" Delhi",21]);
// fullName.apply(person2,[" Bangalore"]);

//-------------- bind ------------------

// bind returns a function that can be invoked later , we can keep the copy and whenever we need to invoke that we can
// console.log("In bind method")
// let bindCall = fullName.bind(person," Delhi",21); 
// console.log("29",bindCall);
// bindCall();









