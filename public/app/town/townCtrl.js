app.controller('townCtrl', function($scope, Hero, ngAudio) {
    $scope.hero = Hero.currentHero;
    $scope.buildingList = {
        healer: false,
        library: false,
        armory: false,
        weaponsmith: false,
        bar: false,
        merchant: false,
        market: false
    };
    $scope.townSound = ngAudio.load("sounds/townAmbient.mp3");

    function falcify(array){
        for (key in array){
            array[key] = false;
        }
    }

    $scope.toMap = function () {
        window.location.href  = '#/map';
    };

    if ($scope.hero.hp <= 0) {
        $scope.hero.hp = 1;
        Hero.updateHero($scope.hero);
    }

    $scope.makeHome = function() {
        $scope.hero.home = $scope.hero.location
    };

    $scope.enterBuilding = function(building) {
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
            case "bar":
                falcify($scope.buildingList);
                $scope.buildingList.bar = true;
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