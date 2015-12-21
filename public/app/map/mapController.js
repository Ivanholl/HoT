app.controller('mapController', function($scope, identity, movementOptions, MinionResource, updateLocation){
    $scope.user = identity.currentUser;

    var curZoneID = $scope.user.heroList[0].location,
        lastSelectedZone = curZoneID;

    $scope.selectedZone = curZoneID;
    $scope.minions = MinionResource.getMinionsByZone(curZoneID);

    $('#' + curZoneID).addClass('curZone');

    $scope.zone = function(event){
        var selectedZone = event.target.id;
        $scope.selectedZone = selectedZone;

        $scope.minions = MinionResource.getMinionsByZone(selectedZone);

        $("#" + selectedZone).addClass('selectedZone');

        if (lastSelectedZone != selectedZone) {
            $("#" + lastSelectedZone).removeClass('selectedZone');
            lastSelectedZone = selectedZone;
        }
        if (movementOptions.getMovementOptions().hasBattle) {
            $("#battle").removeClass('disabled');
        } else {
            $("#battle").addClass('disabled');
        }

        if(curZoneID == selectedZone){
            if (movementOptions.getMovementOptions().hasNextZone) {
                $("#next").removeClass('disabled');

            }
            if (movementOptions.getMovementOptions().hasPrevZone) {
                $("#prev").removeClass('disabled');
            }
            if (movementOptions.getMovementOptions().hasBranchZone) {
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
        updateLocation.updateLocation(movementOptions.getMovementOptions().prevZone);
        checkIfBattle()
    };

    $scope.next = function(){
        updateLocation.updateLocation(movementOptions.getMovementOptions().nextZone);
        checkIfBattle()
    };
    $scope.branch = function(){
        updateLocation.updateLocation(movementOptions.getMovementOptions().branchZone);
        checkIfBattle()
    };

    function checkIfBattle(){
        if(movementOptions.getMovementOptions().hasBattle){
            window.location.href = '#/battle';
        } else {
            window.location.href = '#/town';
        }
    }
});