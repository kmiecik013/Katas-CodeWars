


  function getSumOfDigits(integer) {
  let newInteger = integer.toString().split("")

  let sum = 0

    newInteger.forEach(element => {
      sum += Number(element)
    
  });
  return sum
  
  
  }

console.log(getSumOfDigits(12348))