$(document).ready(function(){

  var randomdice1 
  var randomdice2
  var randomdice3
  var randomdice4
  var randomdice5 

  var currentDice = [];
  var diceTotal = 0;

  $("button.roll").click(function(){
   randomdice1 = (Math.round(Math.random()*5)+1);
   randomdice2 = (Math.round(Math.random()*5)+1);
   randomdice3 = (Math.round(Math.random()*5)+1);
   randomdice4 = (Math.round(Math.random()*5)+1);
   randomdice5 = (Math.round(Math.random()*5)+1);
   $("button.die1").html(randomdice1);
   $("button.die2").html(randomdice2);
   $("button.die3").html(randomdice3);
   $("button.die4").html(randomdice4);
   $("button.die5").html(randomdice5);

  /* put rolled dice into array */
  currentDice[0]=randomdice1;
  currentDice[1]=randomdice2;
  currentDice[2]=randomdice3;
  currentDice[3]=randomdice4;
  currentDice[4]=randomdice5;
 })


/*
  $("button.score").click(function() {
   for(var i=0; i<currentDice.length; i++) {
   diceTotal += currentDice[i];
   console.log(diceTotal);
  }
 }
})
  */



 $("button.rollAgain").click(function() {
    
  })

});
