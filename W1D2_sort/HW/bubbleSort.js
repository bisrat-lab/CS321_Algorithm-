// class BubbleSort{
//     constructor() {
//         this._compCount = 0;
//         this._swapCount = 0;
//         this._shiftCount = 0;
//     }
//     keyComparisons() {
//         return `Number of Comparisions: ${this._compCount}`;
//     }
//     numSwaps() {
//         return `Number of Swaps: ${this._swapCount}`;
//     }
    
//     bubble(arr){
//         let n = arr.length;
//         for(let i=0; i<n; i++){
//             for(let j=0; j<n -i-1; j++){
//                 if(arr[j] > arr[j + 1]){
                   
//                     this.swap(arr,j,j+1)
                    
//                     // let temp = arr[j];
//                     // arr[j] =arr[j+1];
//                     //  arr[j+1] = temp;
//                 }
//                 this._compCount++;
//             }
//         }
//         return arr;
//     }
//     swap(arr,i,j){
//         let temp = arr[i];
//         arr[i] =arr[j];
//         arr[j] = temp;
//         this._swapCount++;
//     }
// }

// let bb = new BubbleSort();
// let arrr3 = [5, 2, 4, 6, 1, 3];
// console.log(bb.bubble(arrr3)); 
// console.log(bb.numSwaps());
// console.log(bb.keyComparisons())

class ArraySorter {
    constructor() {
        this._compCount = 0;
        this._swapCount = 0;
        this._shiftCount = 0;
    }
    keyComparisons() {
        return this._compCount;
    }
    numSwaps() {
        return this._swapCount;
    }
    numShifts() {
        return this._shiftCount;
    }
    print(arr) {
        let last = arr.length - 1;
        let res = "[";
        for (let i=0; i<=last; i++) {
            res = res + arr[i];
            if (i<last) {
                res = res + ", ";
            }
        }
        console.log(res + "]");
    }
    _swapElements(arr, j, k) {
        let temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
        this._swapCount++;
    }

    bubbleSort(arr) {
        this._compCount = 0;
        this._shiftCount = 0;
        this._swapCount = 0;
        this._insertionSort(arr, 0, arr.length-1);
    }

    _bubbleSort(arr, lo, hi) {
        let size = hi - lo + 1;
        for (let i=1; i < size; i++) {
            for(let j = 0; j < size - 1; j++){
                this._compCount++;
                if(arr[j] > arr[j+1]){
                    this._swapElements(arr,j,j+1);
                }
            }
        }
    }
}