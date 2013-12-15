  var randomdice1;
  var randomdice2;
  var randomdice3;
  var randomdice4;
  var randomdice5;

  var currentDice = [];
  var diceTotal = 0;

  var tries = 0;

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

  function seeTotal()
  {
    if (currentDice.length===0)
    {
      alert("You haven't rolled yet!");
    }
    else
    {
     // for(var i=0; i<currentDice.length; i++) 
     // {
     //   diceTotal += currentDice[i];
     // }
     alert("Your total is " + diceTotal);
           // document.write("Your total is " + diceTotal);
         }
       };


       function score()
       {  
        console.log(diceTotal);
        alert("Your total is " + diceTotal); 
      };

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
      }
      ;





/*
var isClicked = false;
function highlight(score) {
    isClicked = !isClicked;
    var element = document.getElementById(score);
    element.style.background = (isClicked  == true) ? "rgba(255,0,0,0.6)" : "rgba(255,0,0,0.8)";
}
*/