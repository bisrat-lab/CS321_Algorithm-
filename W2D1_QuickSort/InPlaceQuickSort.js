let arr = [4,2,5,6,78,1,2,3];
inPlaceQuickSort(arr, 0, 7);
console.log(arr);
//sorts the array from arr[l]...arr[r]
function inPlaceQuickSort(arr, l, r){
    if(l >= r) //at most one element in the array section
        return ;
    let k = randomInt(l, r); //k is the position of the pivot
    swapElements(arr, k, r); //move the pivot at the end
    let p = arr[r]; //p is the pivot
    
    //i is the new position of the pivot, all elements before i are <= p, all elements after i are >=p
    let i = inPlacePartition(arr, l, r, p); 

    inPlaceQuickSort(arr, l, i - 1);
    inPlaceQuickSort(arr, i + 1, r);    
}
function inPlacePartition(arr, l, r, p){
    let i = l;
    let j = r-1;
    while(true) {
        while(arr[i] < p && i <= j){
            i++;
        }
        while(arr[j] > p && i <= j){
            j--;
        }
        if(i <=j) {
            swapElements(arr, i, j);
            i++;
            j--;
        } else
            break;
    }
    swapElements(arr, r, i);
    return i;
}
function swapElements(arr, j, k) {
    let temp = arr[j];
    arr[j] = arr[k];
    arr[k] = temp;
}
function randomInt(l, r){
    return Math.floor(Math.random()*(r-l+1)) + l; 
}
