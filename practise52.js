function maskify(cc) {
  let splitStr = cc.split('') 
  let reversed = splitStr.reverse()
  let chopReverse = reversed.splice(0, reversed.length-5)
  let number = cc.length-4
  let chopNew = chopReverse.reverse()
  
console.log(reversed)

  let arr = ''
  
  for (let i = 0; i < number ; i++) {
    arr += "#"
  }


return arr + chopNew.join('')


}

console.log(maskify('4556364607935616'));