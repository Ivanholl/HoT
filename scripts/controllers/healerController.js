app.controller('healerController', function($scope){
	$scope.player = JSON.parse(localStorage.getItem('Player'));
	$scope.fullHealCost = getHealCost($scope.player.maxHp - $scope.player.hp);
	//$scope.healCost = getHealCost(amountForHeal);

	if ($scope.player.hp <= 0) {
		$scope.player.hp = 1;
		localStorage.setItem('Player', JSON.stringify($scope.player));	
	};
	
	$scope.fullHeal = function(){
		if ($scope.player.gold >= $scope.fullHealCost) {

			$scope.player.gold -= $scope.fullHealCost;
			$scope.player.hp = $scope.player.maxHp;

			localStorage.setItem('Player', JSON.stringify($scope.player));	
		}
		else{
			alert('Not enough gold!!!')
		};		
	}

	$scope.heal = function(){
		var amountForHeal = $('#goldForGiving').val(),
			healCost = getHealCost(amountForHeal);

		if ($scope.player.gold >= healCost) {

			$scope.player.hp += amountForHeal * 1;
			$scope.player.gold -= healCost;

			localStorage.setItem('Player', JSON.stringify($scope.player));
		}
		else{
			alert('Not enough gold!!!')
		}
	}

	function getHealCost(amount){
		return amount * 4;
	}
})