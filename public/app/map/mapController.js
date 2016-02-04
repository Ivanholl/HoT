app.controller('mapController', function($scope, identity, Hero, MinionResource, ZoneResource){
    var hero = Hero.currentHero,
        curZoneID = hero.location,
        lastSelectedZone = curZoneID;

    $scope.user = identity.currentUser;
    $scope.minions = MinionResource.getMinionsByZone(curZoneID);
    $scope.zone = ZoneResource.getZoneByIndex(curZoneID);


    $('#' + curZoneID).addClass('curZone');

    $scope.zoneSelect = function(event){
        var selectedZone = event.target.id;

        $scope.minions = MinionResource.getMinionsByZone(selectedZone);
        $scope.zone = ZoneResource.getZoneByIndex(selectedZone);

        $("#" + selectedZone).addClass('selectedZone');

        if (lastSelectedZone != selectedZone) {
            $("#" + lastSelectedZone).removeClass('selectedZone');
            lastSelectedZone = selectedZone;
        }

        if(curZoneID == selectedZone){
            $scope.class = "";
        } else {
            $scope.class = "disabled";
        }
    };

    $scope.prev = function(event){
        setNewLocation(event)
        window.location.href = '#/battle';
    };

    $scope.next = function(event){
        setNewLocation(event)
        window.location.href = '#/battle';
    };
    $scope.branch = function(event){
        setNewLocation(event)
        window.location.href = '#/battle';
    };

    $scope.battle = function(){
        window.location.href = '#/battle';
    };
    $scope.enter = function(event){
        setNewLocation(event)
        window.location.href = '#/town';
    }

    function setNewLocation(event){
        var newLocation = event.target.text.slice(6)
        hero.location = newLocation;
        Hero.updateHero(hero)
    }
});