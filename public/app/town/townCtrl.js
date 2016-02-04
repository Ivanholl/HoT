app.controller('townCtrl', function($scope, Hero) {
    $scope.hero = Hero.currentHero;
    $scope.healer = false;
    $scope.library = false;
    $scope.armory = false;
    $scope.weaponsmith = false;
    $scope.bar = false;
    $scope.merchant = false;
    
    $scope.toMap = function () {
        window.location.href  = '#/map';
    };

    if ($scope.hero.hp <= 0) {
        $scope.hero.hp = 1;
        updateHero.update($scope.hero, identity.currentUser);
    }

    $scope.makeHome = function() {
        $scope.hero.home = $scope.hero.location
    };

    $scope.enterBuilding = function(building) {
        switch (building){
            case "library":
                $scope.library = true;
                $scope.healer = false;
                $scope.armory = false;
                $scope.weaponsmith = false;
                $scope.bar = false;
                $scope.merchant = false;
                break;
            case "healer":
                $scope.library = false;
                $scope.healer = true;
                $scope.armory = false;
                $scope.weaponsmith = false;
                $scope.bar = false;
                $scope.merchant = false;
                break;
            case "armory":
                $scope.armory = true;
                $scope.library = false;
                $scope.healer = false;
                $scope.weaponsmith = false;
                $scope.bar = false;
                $scope.merchant = false;
                break;
            case "weaponsmith":
                $scope.armory = false;
                $scope.library = false;
                $scope.healer = false;
                $scope.weaponsmith = true;
                $scope.bar = false;
                $scope.merchant = false;
                break;
            case "bar":
                $scope.armory = false;
                $scope.library = false;
                $scope.healer = false;
                $scope.weaponsmith = false;
                $scope.bar = true;
                $scope.merchant = false;
                break;
            case "merchant":
                $scope.armory = false;
                $scope.library = false;
                $scope.healer = false;
                $scope.weaponsmith = false;
                $scope.bar = false;
                $scope.merchant = true;
                break;
            default: break;
        }
    }
});