// DESCRIPTION:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


function stray(numbers) {
 let singleArray = numbers.sort((a,b) => a - b);

  if (singleArray[0] !== singleArray[1]) {
    return singleArray[0]
  } else {
    return singleArray[singleArray.length-1]
  }
}

///// COol other Solution ///////

function stray(nums){
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return nums.filter(x => x == max).length == 1 ? max : min
}


console.log((stray([17, 17, 3, 17, 17, 17, 17])))