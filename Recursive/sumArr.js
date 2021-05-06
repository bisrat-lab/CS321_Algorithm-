// function sum(arr){
//     if(arr.length == 0){
//         return 0
//     }else{
//         return arr[0] + sum(arr.sclice(1));
//     }
// }

// function summ(arr, idx){
//     if(idx == arr.length)
//     return 0;
//     let result = summ(arr, idx + 1)
//     return result + arr[idx];
// }

function sum(arr){
    return sumHelper(arr,0);
}

function sumHelper(arr,i){
    if(i == arr.length)
        return 0;
        let result = sumHelper(arr,i+1)
        return result + arr[i];
}
//the runing time is O(n);
//console.log(sum([2,5,6,1]))


function max(arr){
    return maxHelper(arr,0);
}
//return the max element in the arr form arr[i] to end 
function maxHelper(arr, i){
    if(i == arr.length -1)
        return arr[i];
    
        let result = maxHelper(arr, i+1);
        return result > arr[i] ? result : arr[i];
  
}
console.log(max([12,5,6,1,10]))
//the runing time is O(n);
// arr = [8,5,1,2]

// maxHelper(arr,3) => return  2
// maxHelper(arr,2) => ? > 1
// maxHelper(arr,1) => ? > 5
// maxHelper(arr,0) => ? > 8


