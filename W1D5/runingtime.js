//Exercise1: compute the running time for isEven (we assume n is non-negative
function isEven(n){
    if(n == 0)
      return true;
    let result = isEven(n-1);
    return !result;
  }
/*
T(n) = O(# of self calls)
Self clalles = n-1,n-2,n-3,n-4 ..., 2,1,0 = n
then T(n) = O(c*n) = O(n);
 c (constant) is the amount of work on each self call 
*/



//   //Exercise2: compute the running time for reverse
//   function reverse(s){
//     if(s.length == 0){
//       return "";
//     }
//     else
//       return reverse(s.substring(1)) + s.charAt(0);
//   }
//   /*

//   */
//  function subString(s,i){
//     let  rs = [];
//      for(let j=i; i< s.length; j++){
//          rs.push(s[j])
//      }
//      return re
//  }
function reverse(s){
    return reverseHelper(s,0)
}
 function reverseHelper(s,i){
    if(s.length == i){
      return "";
    }
    else
      return reverseHelper(s , i+1) + s.charAt(i);
  }
console.log(reverse("abc"))
//reverseHelper(s ,1),reverseHelper(s ,2),reverseHelper(s ,1).....reverseHelper(s ,n)
//Then T(n) = O(n); 
