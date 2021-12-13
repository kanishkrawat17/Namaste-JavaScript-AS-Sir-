let str = "hello";

function removeVowels(str){
    let ans = ""
    let s = str.toLowerCase();
    for(let word of s){
        if(word == 'a' || word == 'e' || word  == 'i' || word == 'o' || word == 'u'){
        } else{
            ans += word;
        }
    }
    return ans;
}

console.log(removeVowels(str));