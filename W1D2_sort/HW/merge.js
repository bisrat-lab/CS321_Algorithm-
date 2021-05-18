// function merge(left, right) {
//     let arr = []
//     // Break out of loop if any one of the array gets empty
//     while (left.length && right.length) {
//         // Pick the smaller among the smallest element of left and right sub arrays 
//         if (left[0] < right[0]) {
//             arr.push(left.shift())  
//         } else {
//             arr.push(right.shift()) 
//         }
//     }
    
//     // Concatenating the leftover elements
//     // (in case we didn't go through the entire left or right array)
//     return [ ...arr, ...left, ...right ]
// }
//console.log(merge([1, 4, 5, 8, 17], [2, 4, 8, 11, 13, 21, 23, 25]))

// function merge(arr1, arr2){
//     let result = []; // the array to hold results.
//     let i = 0; 
//     let j = 0;
  
//   // as the pseudo-code implies, we have to loop through the 
//   // arrays at the same time and it has to be done once.
//   // note that if one array completes its iteration, we will
//   // have to stop the while loop.
  
//     while(i < arr1.length && j < arr2.length){
//   // compare the elements one at a time.
//       if(arr1[i] > arr2[j]) {
//         result.push(arr2[j]);
//         j++;
//       } else {
//         result.push(arr1[i]);
//         i++;
//       }
//     }
  
//     // these other while loops checks if there's some item left
//    // in the arrays so that we can push their elements in the result array.
//     while(i < arr1.length){
//       result.push(arr1[i]);
//       i++;
//     }
  
//     while(j < arr2.length){
//       result.push(arr2[j]);
//       j++;
//     }
  
//     return result;
//   }



  function mergeArrays(arr1, arr2){
    let arr3 = [];
     
    for(el of arr1){
     arr3.push(el);
    }
    for(el of arr2){
     arr3.push(el);
    }
  
    return arr3;
  }

  console.log(mergeArrays([1, 4, 5, 8, 17], [2, 4, 8, 11, 13, 21, 23, 25]))


  //Runing time: 
  function merge(arr1,arr2){
      let arr =[];
      let n1 =arr1.length;
      let n2 = arr2.length;
      j=0;
      j=0;
      while(i< n1 && j<n2){
          if(arr1[i] <= arr2[j]){
              arr.push(arr1[i]);
              i++;
          }else{
              arr.push(arr2[j]);
              j++;
          }
      }
      while(i < n1){
          arr.push(arr1[i])
          i++
      }
      while(j < n1){
        arr.push(arr1[j])
        j++
    }
  }