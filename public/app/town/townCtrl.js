app.controller('townCtrl', function($scope, Hero, ngAudio) {
    $scope.hero = Hero.currentHero;
    $scope.buildingList = {
        healer: false,
        library: false,
        armory: false,
        weaponsmith: false,
        tavern: false,
        merchant: false,
        market: false
    };

    $scope.townSound = ngAudio.load("sounds/townAmbient.mp3");
    $scope.inBuilding = false;

    function falcify(array){
        for (key in array){
            array[key] = false;
        }
    }
    function changeHeroLocation(location){
        $scope.hero.location = location;
        Hero.updateHero($scope.hero);
    }

    $scope.toMap = function() {
        window.location.href  = '#/map';
    };

    if ($scope.hero.hp <= 0) {
        $scope.hero.hp = 1;
        Hero.updateHero($scope.hero);
    }

    $scope.makeHome = function() {
        $scope.hero.home = $scope.hero.location
    };

    $scope.leaveBuilding = function() {
        $scope.inBuilding = false;

        falcify($scope.buildingList);
    };
    $scope.enterBuilding = function(building) {
        $scope.inBuilding = true;

        switch (building){
            case "library":
                falcify($scope.buildingList);
                $scope.buildingList.library = true;
                break;
            case "healer":
                falcify($scope.buildingList);
                $scope.buildingList.healer = true;
                break;
            case "armory":
                falcify($scope.buildingList);
                $scope.buildingList.armory = true;
                break;
            case "weaponsmith":
                falcify($scope.buildingList);
                $scope.buildingList.weaponsmith = true;
                break;
            case "tavern":
                falcify($scope.buildingList);
                $scope.buildingList.tavern = true;
                break;
            case "merchant":
                falcify($scope.buildingList);
                $scope.buildingList.merchant = true;
                break;
            case "market":
                falcify($scope.buildingList);
                $scope.buildingList.market = true;
                break;
            default: break;
        }
    }
});