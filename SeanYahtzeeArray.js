var randomdice = new Array();
      var randomdice[1] = null
      var randomdice[2] = null  
      var randomdice[3] = null  
      var randomdice[4] = null  
      var randomdice[5] = null

$(document).ready(function(){
  $("button.roll").click(function(){
      randomdice[1] = (Math.round(Math.random()*5)+1);
      randomdice[2] = (Math.round(Math.random()*5)+1);
      randomdice[3] = (Math.round(Math.random()*5)+1);
      randomdice[4] = (Math.round(Math.random()*5)+1);
      randomdice[5] = (Math.round(Math.random()*5)+1);
    $("button.die1").html(randomdice[1]);
    $("button.die2").html(randomdice[2]);
    $("button.die3").html(randomdice[3]);
    $("button.die4").html(randomdice[4]);
    $("button.die5").html(randomdice[5]);
  });
});

