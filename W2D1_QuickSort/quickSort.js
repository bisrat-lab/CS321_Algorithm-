function quickSort(arr){

    if(arr.length <=1){
        return arr;
    }
    //step1
    let n = arr.length;
    let p = pickPivot(n);
     //step2
     let {L,E,G} = partation(arr, p);
     //step3
     L = quickSort(L);
     G = quickSort(G)
     //step 4
     return merge(merge(L,E),G)

}

function pickPivot(n){
    return Math.floor(Math.random() * n) 
}
function partation(arr, p ){
    let L = [];
    let E = [];
    let G = [];
    let x = arr[p];
    for(let i =0; i<arr.length; i++){
        if(arr[i] < x){
            L.push(arr[i]);
        }else if(arr[i] == x){
            E.push(arr[i])
        }else{
            G.push(arr[i])
        }
    }
    return {L,E,G}
}
