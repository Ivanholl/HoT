app.controller('mapController', function($scope, identity, movementOptions, MinionResource, updateLocation){
    $scope.user = identity.currentUser;

    var curZoneID = $scope.user.heroList[0].location,
        lastSelectedZone = curZoneID,
        selectedZone = lastSelectedZone;

    $scope.dsa = MinionResource;
    $scope.$watch('dsa.length', function(length) {
        if(length) { // <= first time length is changed from undefined to 0
            console.log('(watch) read more ' + $scope.dsa.length); // <= will log correct length
        }
    });

    $('#' + curZoneID).addClass('curZone');

    $scope.zone = function(event){
        selectedZone = event.target.id;
        $scope.selectedZone = selectedZone;

        $("#" + selectedZone).addClass('selectedZone');

        if (lastSelectedZone != selectedZone) {
            $("#" + lastSelectedZone).removeClass('selectedZone');
            lastSelectedZone = selectedZone;
        }

        if(curZoneID == selectedZone){
            $("#battle").removeClass('disabled');
            if (movementOptions.hasNextZone) {
                $("#next").removeClass('disabled');

            }
            if (movementOptions.hasPrevZone) {
                $("#prev").removeClass('disabled');
            }
            if (movementOptions.hasBranchZone) {
                $("#branch").removeClass('disabled');
            }
        } else {
            $("#battle").addClass('disabled');
            $("#prev").addClass('disabled');
            $("#branch").addClass('disabled');
            $("#next").addClass('disabled');
        }
    };

    $scope.prev = function(){
        updateLocation.updateLocation(movementOptions.prevZone);
    };

    $scope.next = function(){
        updateLocation.updateLocation(movementOptions.nextZone);
    };
    $scope.branch = function(){
        updateLocation.updateLocation(movementOptions.branchZone);
    };
});