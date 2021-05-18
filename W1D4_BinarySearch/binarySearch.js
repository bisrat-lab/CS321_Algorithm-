function search(arr, value){
    return binSearch(arr,value,0,arr.length-1);
}
function binSearch(arr,value,start,end){
    if(start > end){
        return false;
    }
    let mid = (start + end)/2;
    //console.log("mid" + midPoint)
    if(value == arr[mid]) return true;
       
        //return mid;
    
    else if(value < arr[mid]){
        return binSearch(arr,value,start, mid-1)
    }else {
        return binSearch(arr,value,mid+1,end)
    }
}
let arrr = [-22,-15,1,7,20,35,55] 
console.log(search(arrr,20))


function search(arr, x){
    return binSearch(arr,x,0,arr.length-1);
}
function binSearch(arr,x,lower,upper){
    if(lower > upper){
        return false;
    }
    let mid = (upper + lower)/2;
    if(x === arr[mid])return true;
        
        //return minpoint
    
    if(x < arr[mid]){
        return binSearch(arr,x,lower, mid-1)
    }else {
        return binSearch(arr,x,mid+1,upper)
    }
}
let arrr9 = [-22,-15,1,7,20,35,55] 
console.log(search(arrr9,91))