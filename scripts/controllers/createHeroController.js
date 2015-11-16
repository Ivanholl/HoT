app.controller('createHero', function($scope){
	$scope.create = function(){
		var playerName = $('#inputName').val(),
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
				ss: 0
			};

		alert('Hero Created!')
		localStorage.setItem('Player', JSON.stringify(Player));
	};
});