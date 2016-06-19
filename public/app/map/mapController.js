app.controller('mapController', function($scope, identity, Hero, MinionResource, ZoneResource){
    var hero = Hero.currentHero,
        curZoneID = hero.location,
        lastSelectedZone = curZoneID;

    $scope.user = identity.currentUser;
    $scope.minions = MinionResource.getMinionsByZone(curZoneID);
    $scope.zone = ZoneResource.getZoneByIndex(curZoneID);
    $scope.erHeroInfoLost = false;
    $scope.class = "";
    /*if (hero.name = "") {
        $scope.erHeroInfoLost = true;
    }*/

    $('#' + curZoneID).addClass('curZone').append("<div class='arrowCurZone'></div>");

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
        //var newLocation = event.target.text.slice(6);
        var newLocation = angular.element(event.target).text().slice(6);
        setNewLocation(newLocation);
        changeLocation(newLocation);
        //window.location.href = '#/battle';
    };

    $scope.next = function(event){
        var newLocation = angular.element(event.target).text().slice(6);
        setNewLocation(newLocation);
        changeLocation(newLocation);
        //window.location.href = '#/battle';
    };
    $scope.branch = function(event){
        var newLocation = angular.element(event.target).text().slice(6);
        setNewLocation(newLocation);
        changeLocation(newLocation);
        //window.location.href = '#/battle';
    };
    $scope.battle = function(){
        window.location.href = '#/battle';
    };
    $scope.enter = function(event){
        window.location.href = '#/town';
    };
    function setNewLocation(newLocation){
        hero.location = newLocation;
        Hero.updateHero(hero)

    }
    function changeLocation(newLocation){
        if (newLocation.substr(newLocation.length - 4) == "town"){
            window.location.href = '#/town';
        } else {
            window.location.href = '#/battle';
        }
    }

    $('.town').tooltip();
    $('.round-button').tooltip();
});
