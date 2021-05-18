function mergeSort(arr){

    if(arr.length < 2){
       return arr;
    }
     
    let mid = Math.floor(arr.length /2 )
    let arr1 = arr.slice(0,mid)
    let arr2 = arr.slice(mid,arr.length)
    let s1 = mergeSort(arr1);
    let s2 = mergeSort(arr2);
    return merge(s1,s2);
   
}
function merge(arr1,arr2){
    let arr = [];
    let n1 = arr1.length;
    let n2 = arr2.length;
    let i=0;
    let j=0;
    while(i < n1 && j<n2){
        if(arr1[i] > arr2[j]){
            arr.push(arr2[j]);
            j++;
        }else{
            arr.push(arr1[i]);
            i++;
        }
    }
    while(i < n1){
        arr.push(arr1[i])
        i++;
    }
    while(j < n2){
      arr.push(arr2[j])
      j++;
  }
  return arr
}

console.log(mergeSort([20,35,-15,7,55,1,-22]))