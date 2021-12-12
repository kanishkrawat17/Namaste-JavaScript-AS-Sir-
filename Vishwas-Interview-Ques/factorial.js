// 5! = 5 * 4 * 3 * 2 * 1 = 60  
// Recursive
function factorial(num){
    if( num == 1  || num == 0){
        return 1;
    }

   return num * factorial(num-1);
   
}

const result = factorial(5);
console.log(result);
 
// Iterative 
function factorialIterative (num ){
    let ans = 1 ;
    for(let i = 1 ; i <= num ; i++){
        ans = ans * i; 
    }
    return ans;
}

const response = factorialIterative(5)
console.log(response)



