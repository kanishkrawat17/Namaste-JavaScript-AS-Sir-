let fs = require("fs");

let obj = {
    name : "Kanishk",
    Salary : "8LPA/yr",
    Age : "25"
}

// fs.writeFileSync("./file.txt", "I'm  good");
// // let objString =  JSON.stringify(obj);
// fs.writeFileSync("obj.txt", JSON.stringify(obj));

// let data = fs.readFileSync("obj.txt", "UTF-8");
// console.log(JSON.parse(data));


// let cheerio = require("cheerio");

// let htmlData = fs.readFileSync("index.html","UTF-8");
// // console.log(htmlData);

// let myDoc = cheerio.load(htmlData);
// let h1Text = myDoc("h1").text();
// console.log(h1Text);
// console.log(h1Text);


let keysArr = Object.keys(obj);
console.log(keysArr);
// way-1
for(let  i = 0 ; i < keysArr.length ; i++){
  
    console.log(obj[keysArr[i]]);
}
// way-2
for(let key in obj){
    console.log(obj[key]);
}
