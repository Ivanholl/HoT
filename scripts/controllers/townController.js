app.controller('townController', function townController($scope) {
	$scope.player = JSON.parse(localStorage.getItem('Player'));
	$scope.toMap = function () {
		$scope.player.zone = 'hzone1';
		localStorage.setItem('Player', JSON.stringify($scope.player));
		window.location.href  = '#/map';
	}
})