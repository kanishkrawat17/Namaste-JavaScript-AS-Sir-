Object.prototype.person1 = {
    firstname : "Kanishk",
    city : "Delhi",
    getIntro : function(){
        console.log(this.firstname+" from "+ this.city);
    }
}

let person2 = {
    firstname : "Rahul"
}



// this line tells that person1 properties can be inherited by person1
person2.person1.getIntro(); 


// person2.__proto__ = person1;


let arr1 = ["Kanishk","Rawat"];


function fun (){
    console.log("f");
}



Function.prototype.myFun= function(){
        console.log("Insdie function prototype")
}
fun.myFun()



