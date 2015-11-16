app.controller('libraryController', function($scope){
	var oneHpPrice = 50,
		oneDmMinPrice = 75,
		oneDmMaxPrice = 75,
		oneDfPrice = 110;

	$scope.player = JSON.parse(localStorage.getItem('Player'));
	$scope.buyOneHp = function(){
		if ($scope.player.ss >= oneHpPrice) {

			$scope.player.maxHp++;
			$scope.player.ss -= oneHpPrice;
			localStorage.setItem('Player', JSON.stringify($scope.player));	

		} else {
			alert('Not Enough Soul Stones!')
		}
	}

	$scope.buyOneDmMin = function(){
		if ($scope.player.ss >= oneDmMinPrice) {
			if ($scope.player.dm[0] < $scope.player.dm[1]) {
				$scope.player.dm[0]++;
				$scope.player.ss -= oneDmMinPrice;
				localStorage.setItem('Player', JSON.stringify($scope.player));
			} else {
				alert('You cannot have more minimal Dm than maximal DM')
			}	

		} else {
			alert('Not Enough Soul Stones!')
		}
	}

	$scope.buyOneDmMax = function(){
		if ($scope.player.ss >= oneDmMaxPrice) {

			$scope.player.dm[1]++;
			$scope.player.ss -= oneDmMaxPrice;
			localStorage.setItem('Player', JSON.stringify($scope.player));	

		} else {
			alert('Not Enough Soul Stones!')
		}
	}
	$scope.buyOneDf = function(){
		if ($scope.player.ss >= oneDfPrice) {

			$scope.player.df++;
			$scope.player.ss -= oneDfPrice;
			localStorage.setItem('Player', JSON.stringify($scope.player));	

		} else {
			alert('Not Enough Soul Stones!')
		}
	}
})