// class SelectionSort{
//     constructor() {
//         this._compCount = 0;
//         this._swapCount = 0;
//         this._shiftCount = 0;
//     }
//     keyComparisons() {
//         return `Number of Comparisions s: ${this._compCount}`;
//     }
//     numSwaps() {
//         return `Number of Swaps: ${this._swapCount}`;
//     }
//     numShifts() {
//         return this._shiftCount;
//     }
//     seleSort(arr){
//         let n = arr.length; 
//         for(let i=0;i<n; i++){
//            let min =i;
//            for(let j = i+1; j < n; j++){
//                if(arr[j] < arr[min]){
//                    min = j;
//                    this._compCount++;
//                }
//            }
//            if(min != i){
//                let temp = arr[i];
//                arr[i] = arr[min];
//                arr[min] = temp;
//                this._swapCount++;
//            }
//         }
//         return arr;
//     }
// }

// let z = new SelectionSort();
// let arrr = [5, 2, 4, 6, 1, 3];
// console.log(z.seleSort(arrr))
// console.log(z.numSwaps())
// console.log(z.keyComparisons())


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

    selectionSort(arr) {
        this._compCount = 0;
        this._shiftCount = 0;
        this._swapCount = 0;
        this._selectionSort(arr, 0, arr.length-1);
    }

    _selectionSort(arr, lo, hi) {
        let size = hi - lo + 1;
        for (let i=0; i < size; i++) {
            let minPos = this._minPos(arr,i,n-1);
            this.swapElements(arr,i,minPos)
              
        }
    }
    _minPos(arr,lo,hi){
        let m = arr[lo];
        let index =lo;
        for(let i= lo + 1;i<=hi;i++){
            this._compCount++;
            if(arr[i] < m){
                m = arr[i];
                index = i;
            }
        }
        return index; 
    }
}