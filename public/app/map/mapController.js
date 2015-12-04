app.controller('mapController', function($scope, identity, movementOptions, CachedMinions, updateLocation){
    $scope.user = identity.currentUser;

    var curZoneID = $scope.user.heroList[0].location,
        lastSelectedZone = curZoneID,
        selectedZone = lastSelectedZone;

    $scope.minions = [];

    $('#' + curZoneID).addClass('curZone');

    $scope.zone = function(event){
        selectedZone = event.target.id;
        $scope.selectedZone = selectedZone;

        $scope.minions = CachedMinions.getMinionsByZone(selectedZone);
        
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