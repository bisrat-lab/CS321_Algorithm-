function sumBinary(arr){
    return sumHelper(arr,0,arr.length-1);
}
function sumHelper(arr,lower,upper){
    if(lower > upper){
        return 0;
    }
    let mid = Math.floor((lower + upper)/2);
    if(arr[mid] == 0){
        return sumHelper(arr,mid +1,upper);
    }else{
        return (upper - mid +1) + sumHelper(arr,lower,mid-1)
    }
}
//The runing time is O(logn)
let arr2 = [0,0,0,0,0,0,1,1]
let arr3 = [0,0,1,1,1,1,1,1]

console.log(sumBinary(arr3))

