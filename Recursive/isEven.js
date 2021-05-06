function isEven(n){
    if(n == 1){
        return true;
    }
    
    let result = isEven(n-1);
    return !result;
}

console.log(isEven(5))//true