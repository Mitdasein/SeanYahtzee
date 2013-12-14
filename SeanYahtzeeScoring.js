 
/*
  $("button.score").click(function() {
    for(var i=0; i<currentDice.length; i++) {
   diceTotal += currentDice[i];
   console.log(diceTotal);
   alert("Your total is " + diceTotal);
  }
 }
})
 */

 function score()
 {
  for(var i=0; i<currentDice.length; i++) {
   diceTotal += currentDice[i];
   console.log(diceTotal);
   // alert("Your total is " + diceTotal); 
   alert("score!");
 }
} 






function rollAgain()
{
  alert("Roll again!");
}


