function QuickSelect(S, k){
    if(S.length <=1){
        return S;
    }
    let n = S.length;    
let p = pickPivot(n)
console.log(p)
let {L,E,G} = partation(S, p);

    if(k <= L.length){
       return QuickSelect(L,k);
    }
    else if(k <= (L.length + E.length)){
        return p;
    }else{
        return QuickSelect(G,k-(L.length-E.length))
    }

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

let arr = [22,55,11,77,99,33]
console.log(QuickSelect(arr,2))
//QuickSelect(arr,2);