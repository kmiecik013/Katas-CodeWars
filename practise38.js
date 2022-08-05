// Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
// He can do ten kata in an hour, but when he makes a mistake, he must do pushups. These pushups really tire poor Alex out, so every time he does them they take twice as long. His first set of redemption pushups takes 5 minutes. Create a function, alexMistakes, that takes two arguments: the number of kata he needs to complete, and the time in minutes he has to complete them. Your function should return how many mistakes Alex can afford to make.

//TODO
function alexMistakes(numberOfKata, timeLimit){
    let timeHours = numberOfKata/10

    let freeTime = timeLimit - timeHours*60

    let mistakes = Math.log((2, freeTime/5)) 

    return Math.floor(mistakes +1)
  }

  console.log(alexMistakes(30, 500))