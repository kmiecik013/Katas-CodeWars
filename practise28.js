// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6



function calc(x){


//   let array = x.split("")
 let arr = []
// console.log(array)
   for (let i=0; i < x.length; i++) {
   let converted  = x.charCodeAt(i)
    arr.push(converted)
   }
   total3 = arr.map(item=> item.toString().split(""))

  

   total4 = [].concat(...total3)

   total5 = total4.map(item => Number(item))
   
   console.log("here",total5)
 
 total1 = total5.reduce((a,b) => a + b,0)

 console.log("again",total1)

   let convertArray = total4.map(item => item.toString().replace("7","1")
   )
   let finalArray = convertArray.map(item => Number(item))

   console.log("ici", finalArray)

  total2 = finalArray.reduce((a,b) => a + b,0)
   

   
    return total1 - total2

   }
  
//   console.log(betaArray)
   
 

console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'))