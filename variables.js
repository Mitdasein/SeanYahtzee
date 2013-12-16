var categories = new Array();
categories[0]="aces";
categories[1]="twos";
categories[2]="threes";
categories[3]="fours";
categories[4]="fives";
categories[5]="sixes";
categories[6]="totalScore";
categories[7]="bonus";
categories[8]="upperSectionTotal";
categories[9]="threeOfAKind";
categories[10]="fourOfAKind";
categories[11]="fullHouse";
categories[12]="smallStraight";
categories[13]="largeStraight";
categories[14]="yahtzee";
categories[15]="chance";
categories[16]="yahtzeeBonus";
categories[17]="yahtzeeBonusScore";
categories[18]="lowerSectionTotal";
categories[19]="grandTotal";

function fillCategories()
	{
		for (var i=0; i<categories.length; i++)
			{ 
				document.getElementById('categories' + i).write('<categories + i>');
			}
	}




