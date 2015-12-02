app.controller('createHero', function($scope){
	$scope.create = function(){
		var playerName = $('#inputName').val(),
			playerRace = $('#race').val(),
			Player;
		
		switch(playerRace) {
		    case "Human":
		        Player = {
			        name: playerName,
					hp: 15,
					maxHp: 15,
					mp: 5,
					maxMp:5,
					st: 10,
					dm: [3,4],
					df: 2,
					gold: 0,
					ss: 0,
					zone: 'hzone1',
					race: playerRace
				};
		        break;
		    case "Elf":
		        Player = {
			        name: playerName,
					hp: 13,
					maxHp: 13,
					mp: 6,
					maxMp:6,
					st: 12,
					dm: [2,3],
					df: 2,
					gold: 0,
					ss: 0,
					zone: 'ezone1',
					race: playerRace
				};
		        break;
		    case "Orc":
		        Player = {
			        name: playerName,
					hp: 10,
					maxHp: 10,
					mp: 3,
					maxMp:3,
					st: 10,
					dm: [4,5],
					df: 3,
					gold: 0,
					ss: 0,
					zone: 'ozone1',
					race: playerRace
				};
		        break;
		    /*case "Dwarf":
		        Player = {
			        name: playerName,
					hp: 15,
					maxHp: 15,
					mp: 5,
					maxMp:5,
					st: 9,
					dm: [2,3],
					df: 5,
					gold: 0,
					ss: 0,
					zone: 'dzone1',
					race: playerRace
				};
		        break;*/
		    case "Undead":
		        Player = {
			        name: playerName,
					hp: 16,
					maxHp: 16,
					mp: 5,
					maxMp:5,
					st: 9,
					dm: [2,3],
					df: 3,
					gold: 0,
					ss: 0,
					zone: 'ozone1',
					race: playerRace
				};
		        break;
		    default:
		        break;
		}


		alert('Hero Created!')
		localStorage.setItem('Player', JSON.stringify(Player));
	};
});


