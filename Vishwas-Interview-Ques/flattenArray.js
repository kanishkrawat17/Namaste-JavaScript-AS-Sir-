let arr= [1,2,3, [3,4,5], [100, "efg", 45]];

let result = [];

function flattenArr (arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(typeof arr[i] == 'object'){
            flattenArr(arr[i]);
        } else{
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(flattenArr(arr))