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

    insertionSort(arr) {
        this._compCount = 0;
        this._shiftCount = 0;
        this._swapCount = 0;
        this._insertionSort(arr, 0, arr.length-1);
    }

    _insertionSort(arr, lo, hi) {
        let size = hi - lo + 1;
        for (let i=1; i < size; i++) {
            let k = lo + i;
            let temp = arr[k];
            this._compCount++;
            while (0<k && temp < arr[k-1]) {
                    arr[k] = arr[k-1];  // shift right
                    k--;
                    this._compCount++;
                    this._shiftCount++;
            }
            arr[k] = temp;  // place in sorted position    
        }
    }
}

//exports.ArraySorter = ArraySorter;
let nsort = new ArraySorter([8,1,4,7,9,2])
let arrw = [8,1,4,7,9,2];
nsort.insertionSort(arrw);
console.log(nsort.numShifts()) ;
console.log(nsort.numSwaps()) ;
console.log(nsort.keyComparisons())
nsort.print(arrw);

//nsort.print([8,1,4,7,9,2])


