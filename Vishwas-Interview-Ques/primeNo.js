function isPrime (n ){
    if(n == 2){
        return  true;
    } else if( n == 1){
        return false;
    }
    
    for(let i = 2 ; i * i <= n ; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

const ans = isPrime(9);
console.log(ans)


