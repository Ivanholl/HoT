app.controller('mapController', function mapController($scope) {
	$scope.player = JSON.parse(localStorage.getItem('Player'));

	var curZoneID = $scope.player.zone,
		cuzZoneNumb = ($scope.player.zone.slice(-1) -1),
		selectedZone = $scope.player.zone,
		lastSelectedZone = $scope.player.zone,
		nextZone = '',
		prevZone = '',
		branchZone = '',
		hasNextZone = true,
		hasPrevZone = true,
		hasBranchZone = true,
		initLocation = $("#" + curZoneID);

	initLocation.addClass('curZone');

	$scope.enemyList = EnemyList[cuzZoneNumb];

	function GetMovementOptions() {
		switch($scope.player.zone) {
		    case "hzone1":
		        branchZone = "hzone2";
		        prevZone = "htown";
		        //nextZone = "hzone4";
		        hasBranchZone = true;
		        hasPrevZone = true;
		        hasNextZone = false;
		        break;
		    case "hzone2":
		        prevZone = "hzone1";
		        nextZone = "hzone3";		        
		        hasBranchZone = false;
		        hasPrevZone = true;
		        hasNextZone = true;
		        break;
		    case "hzone3":
		        prevZone = "hzone2";		        
		        hasBranchZone = false;
		        hasPrevZone = true;
		        hasNextZone = false;
		        break;
		    default:
		        break;
		}
	}

	GetMovementOptions()

	$scope.zone = function(zoneNumb, event){		
		$scope.enemyList = EnemyList[zoneNumb];
		selectedZone = event.target.id;
		$("#" + selectedZone).addClass('selectedZone');

		if (lastSelectedZone != selectedZone) {
			$("#" + lastSelectedZone).removeClass('selectedZone');
			lastSelectedZone = selectedZone;
		};

		if(cuzZoneNumb == zoneNumb){
			$("#battle").removeClass('disabled');	
			if (hasNextZone) {
				$("#next").removeClass('disabled');			

			};
			if (hasPrevZone) {
				$("#prev").removeClass('disabled');
			};		
			if (hasBranchZone) {
				$("#branch").removeClass('disabled');			
			};	
		} else {
			$("#battle").addClass('disabled');
			$("#prev").addClass('disabled');			
			$("#branch").addClass('disabled');			
			$("#next").addClass('disabled');	
		}
	}

	$scope.next = function() {
		$scope.player.zone = nextZone;
		localStorage.setItem('Player', JSON.stringify($scope.player));
		if (!isNaN(parseInt(nextZone.slice(-1)))) {
			window.location.href = '#/battle';
		} else {
			window.location.href = '#/town';
		}
	}
	$scope.prev = function() {
		$scope.player.zone = prevZone;	
		localStorage.setItem('Player', JSON.stringify($scope.player));
		if (!isNaN(parseInt(prevZone.slice(-1)))) {
			window.location.href = '#/battle';
		} else {
			window.location.href = '#/town';
		}
	}
	$scope.branch = function() {
		$scope.player.zone = branchZone;
		localStorage.setItem('Player', JSON.stringify($scope.player));
		if (!isNaN(parseInt(branchZone.slice(-1)))) {
			window.location.href = '#/battle';
		} else {
			window.location.href = '#/town';
		}	
	}
})