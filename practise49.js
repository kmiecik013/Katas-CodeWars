// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .

function maxProduct(numbers, size){
  
   let newArr = numbers.sort(function(b, a){return a - b})
  

   let product = 1


   for (let i=0; i< size; i++) {
      product *= newArr[i]
   }
    
   
    return product
}

console.log(maxProduct([4,7,2,8,10,3], 2))