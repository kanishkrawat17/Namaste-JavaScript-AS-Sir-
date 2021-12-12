let str1 = "hello";
let str2= "lleho";

function checkAnagram (s1, s2){
    let str1 = s1.split('').sort().join('');
    let str2 = s2.split('').sort().join('');
    return str1 ==  str2
}

console.log(checkAnagram(str1, str2))