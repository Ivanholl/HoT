app.controller('tutorialController', function tutorialController($scope, $routeParams) {
		var count = 1,
			enemyMove = false,
			winLoseCheck = false, // Otherwise sometimes it checkes twice
			firstAttack = false,
			firstDefend = false,
			firstEscape = false;

	$scope.player = JSON.parse(localStorage.getItem('Player'));
	$scope.minion = Object.create(EnemyList[0][4]);

	if (!firstAttack) {
		alert('Now we learn how to play!')
		alert('When you attack your enemy you have Damage (dm) between you minimum and maximum poits ([min,max])')
		alert('If you have more Damage (dm) than the Defence (df) of your enemy you hit him the defference.')
		alert('Now press Attack!')
	};

	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function getAttack(attacker){
		return getRandomInt(attacker.dm[0],attacker.dm[1]);
	}

	function getDefense(defender){
		return Math.round(defender.df + (getRandomInt(0,10)/100));
	}

	function Atack(attacker, defender){
		var attackerAtack = getAttack(attacker),
			defenderDefense = getDefense(defender);

		if(attackerAtack > defenderDefense){
			defender.hp -= attackerAtack - defenderDefense;
			updateLogger(attacker, attackerAtack - defenderDefense, defender);
			CheckWinLose();
		}
		else if(attackerAtack < defenderDefense){
			defender.hp -= defenderDefense - attackerAtack;
			updateLogger(defender, defenderDefense - attackerAtack, attacker);						
			CheckWinLose();
		}
		else{
			updateLogger(attacker, 0, defender);		
		}
	}

	function Defend(attacker, defender){
		var attackerAtack = getAttack(attacker),
			defenderDefense = getDefense(defender);

		if(defenderDefense > attackerAtack){
			attacker.hp -= defenderDefense - attackerAtack;
			updateLogger(defender, defenderDefense - attackerAtack, attacker);
			CheckWinLose();
		}
		else if(defenderDefense < attackerAtack){
			defender.hp -= attackerAtack - defenderDefense;
			updateLogger(attacker, attackerAtack - defenderDefense, defender);			
			CheckWinLose();
		}
		else{
			updateLogger(attacker, 0, defender);
		}
	}

	function Escape(){
		var chance = getRandomInt(0,1);
		if (chance === 0) {
			alert("ESCAPED");		
			window.location.href  = '#/map';	
		}
		else{
			alert("You couldn't Escape!");
		}
	}

	function CheckWinLose(){
		if($scope.player.hp <= 0 && winLoseCheck == false){
			winLoseCheck = true;
			alert("YOU LOST");
			window.location.href  = '#/town/healer';
		}
		if($scope.minion.hp <= 0 && winLoseCheck == false){
			winLoseCheck = true;
			alert("YOU WIN\n"+"you got " + $scope.minion.gold + "gold and " + $scope.minion.ss+ "soul stones!");
			$scope.player.gold += $scope.minion.gold;
			$scope.player.ss += $scope.minion.ss;
			window.location.href  = '#/map';	
		}			

		localStorage.setItem('Player', JSON.stringify($scope.player));
	}

	function getEnemyMove(){
		var playerAtack = getAttack($scope.player),
			playerDefense = getDefense($scope.player),
			minionDefense = getDefense($scope.minion),
			minionAtack = getAttack($scope.minion);

			if(playerDefense < minionAtack){
				$('#logger').append('Enemy desided to attack!').append('<br/>')
				updateScroll()				
				Atack($scope.minion, $scope.player);
				enemyMove = false;		
			}
			else if(playerAtack < minionDefense){
				$('#logger').append('Enemy desided to defend!').append('<br/>')	
				updateScroll()			
				Defend($scope.player, $scope.minion);
				enemyMove = false;
			}
			else{
				$('#logger').append('Enemy desided to pass!').append('<br/>')
				updateScroll()
				//PASS
			}
	}

	$scope.attack = function(){
		$('#logger').append('===TURN ' + count +'===').append('<br/>')
		count++;
		$('#logger').append('You attack!').append('<br/>')		
		Atack($scope.player, $scope.minion);
		getEnemyMove();		
		firstAttack = true;
		if (!firstDefend) {
			alert('When you Defend you choose not to attack but wait for the enemy to attack.')
			alert('If you choose to defend you take random Defence (df) bonus between 0% and 30%...')
			alert('If you have more Defence (df) than the Damage (dm) or your enemy you hit him with the difference.')
			alert('Now press Defend!')
		};
	};
	$scope.defend = function(){
		$('#logger').append('===TURN ' + count+'===').append('<br/>')
		count++;
		$('#logger').append('You defend!').append('<br/>')
		Defend($scope.minion, $scope.player);
		getEnemyMove();
		firstDefend = true;		
		getEnemyMove();
		if (!firstEscape) {
			alert("You don't have to die. If you deside that you cannot win you can try to escape.")
			alert('If you choose to escape you have 50% chance to escape.')
			alert("If you fail to escape it's your opponent's turn and you can choose again.")
			alert("You DON'T have to escape. But you can try to :P")
		};
	};
	$scope.escape = function(){
		$('#logger').append('===TURN ' + count+'===').append('<br/>')
		count++;
		$('#logger').append('You try to escape!').append('<br/>')		
		Escape();
		firstEscape = true;
	};

	function updateScroll(){
    	$('#battleLog').scrollTop($('#battleLog')[0].scrollHeight);
	}

	function updateLogger(deler, dm, receiver){
		$('#logger').append(deler.name + ' dealt ' + dm + ' damage to ' + receiver.name).append('<br/>')
		updateScroll()
	}
})