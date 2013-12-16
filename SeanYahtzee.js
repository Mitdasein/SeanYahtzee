var randomdice1;
var randomdice2;
var randomdice3;
var randomdice4;
var randomdice5;

var sortedDice = [];

var currentDice = [];
var diceTotal = 0;

var tries = 0;

// var totalScore = 0;

/* ready function */
$(document).ready(function()
{
  $("button.roll").click(function()
  {
    if ( tries >= 3 ) 
    {
      alert("You have used all your rolls for this turn!")
    } 
    else 
    { 
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

      for(var i=0; i<currentDice.length; i++) 
        {
          diceTotal += currentDice[i];
        }
      tries=++tries; 
    }
  }
  ) 
}
);
/* end ready */


function sortCurrentDice()
  {
    if (currentDice.length===0)
      {
        alert("You haven't rolled yet!");
      }
    else
      {
        currentDice.sort(function(a,b){return a-b});
        var x=document.getElementById("sortDice");
        x.innerHTML=currentDice;

        for(var i=0; i<currentDice.length; i++)
          {
            sortedDice[i]=currentDice[i];
            $("button.sortedDie[i]").html(currentDice[i]);
            console.log(sortedDice[i]);
          }
            console.log(i);
      }
  };

/* start OnGUI 
function OnGUI()
  {
    for (var i=0; i <= sortedDice.length; i++)
      {
        $("button.sortedDie[i]").html(currentDice[i]);
      }
  }; 
  // close OnGui */

  /*  start seeTotal  */
function seeTotal()
  {
    if (currentDice.length===0)
      {
        alert("You haven't rolled yet!");
      }
    else
      {
        alert("Your total is " + diceTotal);
        var y=document.getElementById("writeTotal");
        y.innerHTML=diceTotal;
      }
  }; 
// close seeTotal 

/*
function totalScore() {
  alert("Not yet implemented!");
  // alert("Your total is " + diceTotal);
}
*/

/* start writeTotal */
function writeTotal()
  {
    document.write("Your total is " + diceTotal);
  };
/* close writeTotal */

/* function seeValue */
  /*
    function calculateCategoryValue()
      {

      }
      */

/* start seeValue */
function seeValue()
  {
    if (currentDice.length===0)
      {
        alert("You haven't rolled yet!");
      }
    else
      {
        alert("Not yet implemented!");
      }
  }; // end seeValue

/* start score */
function score()
  {  
    console.log(diceTotal);
 alert("Your total is " + diceTotal); 
  alert("Not yet implemented!");
  }; 

  /* end score */

/* function rollAgain */ 
function rollAgain()
  {
    if (currentDice.length===0)
      {
        alert("You haven't rolled yet!");
      }
    else
      {
        alert("Not yet implemented!");
      }
  }; 
  /* end rollAgain */

// start showValue 
/* function showValue()
  {
  };
  */
// end showValue 


