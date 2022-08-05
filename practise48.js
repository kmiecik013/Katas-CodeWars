// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.


function last(x){

  let arr = x.split(" ")

  reverseArr = arr.map((item) => item.split("").reverse().join(" "))

  let finalArr = reverseArr.sort()

  let extraArr = finalArr.map((str) => str.split("").reverse().join(""))
  
 return extraArr


}

console.log(last("hello my name is mike"))