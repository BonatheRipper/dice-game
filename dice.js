


const dicegame = {
	Diceone: 0,
	Dicetwo: 0,
	Player1score: 0,
	Computerscore: 0,
	GamePlay: function(){
		var human = prompt(' Human Roll Dice fist?? Yes/No')
		if(human === 'Yes'){
			
			console.log('Human Just Played')
			this.Player1score = + this.Diceone+this.Dicetwo;
		}
		 else if(human==='No'){
		 	console.log('Computer Played')
		 	this.Computerscore = this.Computerscore + this.Diceone+this.Dicetwo;
		 }
		 else if (human !=='Yes' || human !== 'No'){
		 	console.log('Both Human And computer Lost A Turn')
		 }
	}
	
}

const GamePlay = {
	GameLength: prompt('Enter The game GameLength.... 1 to infinity'),
	GameStart: function (){
		 for(var i=0; i<this.GameLength; i++){
 	 dicegame.Diceone =  Math.floor(Math.random()*6);
 	 dicegame.Dicetwo =  Math.floor(Math.random()*6);
 	 dicegame.GamePlay()
 
}
if(dicegame.Computerscore > dicegame.Player1score){
	console.log('Computer Won with: ' + dicegame.Computerscore + ' Points')
}
else if (dicegame.Computerscore === dicegame.Player1score){
	console.log('The Game is a Tie')
}
else { console.log('Human Won with: ' + dicegame.Player1score + " Points")}
}
}
GamePlay.GameStart()
