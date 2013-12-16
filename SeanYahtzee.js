var randomdice1;
var randomdice2;
var randomdice3;
var randomdice4;
var randomdice5;

var currentDice=[];
var sortedDice=[];
var diceTotal=0;

var tries=0;

var aces=0;
var twos=0;
var threes=0;
var fours=0;
var fives=0;
var sixes=0;
var totalScore=0;
var bonus=0;
var upperSectionTotal=0;

var threeOfAKind=0;
var fourOfAKind=0;
var fullHouse=0;
var smallStraight=0;
var largeStraight=0;
var yahtzee=0;
var chance=0;
var yahtzeeBonus=0;
var yahtzeeBonusScore=0;
var lowerSectionTotal=0;
var grandTotal=0;

totalScore=aces + twos + threes + fours + fives + sixes
upperSectionTotal=totalScore + bonus 

grandTotal=lowerSectionTotal + upperSectionTotal;

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
      randomdice1=(Math.round(Math.random()*5)+1);
      randomdice2=(Math.round(Math.random()*5)+1);
      randomdice3=(Math.round(Math.random()*5)+1);
      randomdice4=(Math.round(Math.random()*5)+1);
      randomdice5=(Math.round(Math.random()*5)+1);
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
      };
      tries=++tries; 

      /*
      for (var i=0; i<categories.length; i++)
      { 
        document.getElementById('categories' + i).write('<categories + i>');
      };
      */
    }
  }
  )
}); 
/* end ready */

/* start sortCurrentDice */
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
        for(var i=0; i<=4; i++) $('button.sortedDie' + i).html(currentDice[i]);
        for(var i=0; i<=4; i++)
          {
            sortedDice[i]=currentDice[i];
          }
          console.log(sortedDice)
          //x.innerHTML=currentDice;
      }
  };
/* close sortCurrentDice */

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
        y.innerHTML=("Your total is " +diceTotal);
      }
  }; 
// close seeTotal 

/* start writeTotal */
function writeTotal()
{
  document.write("Your total is " + diceTotal);
};
/* close writeTotal */

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
    //alert("Your total is " + diceTotal); 
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

//start showValue 
/*
function showValue()
{
};
*?
// end showValue 

//start calculateUpperSection
/*
function calculateUpperSection()
{
  for(var i=0; i<=4; i++)
  {
    sortedDice[i]=currentDice[i];
  }
}
//close calculateUpperSection
*/

//start calculateCategoryValue
function calculateCategoryValue()
  {
    if ((sortedDice === [1,2,3,4,5]) || (sortedDice === [2,3,4,5,6]))
      {
        var setYahtzee = document.getElementById(yahtzee);
        setYahtzee.value=50;
        alert:("YAHTZEE!")
        var y=document.getElementById("writeValue");
        y.innerHTML=("YAHTZEE!");
      }
      else 
      {
        for(var i=0; i<=2; i++)
          {
            if ((sortedDice[i] === sortedDice[i+1]) && (sortedDice[i+1] === sortedDice[i+2]) && (sortedDice[i+2])
              === (sortedDice[i+3]))
            {
              fourOfAKind = diceTotal;
              var setFourOfAKind = document.getElementById(fourOfAKind);
              setFourOfAKind.value = "diceTotal";
            }
        else
        {
          for(var i=0; i<=2; i++)
            {
              if ((sortedDice[i] === sortedDice[i+1]) && (sortedDice[i+1] === sortedDice[i+2] ))
              {
                threeOfAKind = diceTotal;
                var setThreeOfAKind = document.getElementById(threeOfAKind);
                setThreeOfAKind.value = "diceTotal";
              }
            }
        }   
        else
        {
          alert:("This category has not yet been implemented.")
          var y=document.getElementById("writeValue");
          y.innerHTML=("This category has not yet been implemented."); 
        }
      }
    }
  };

// close calculateCategoryValue

/* function seeValue */


