app.controller('townCtrl', function($scope, identity) {
    $scope.hero = identity.currentUser.heroList[0];
    $scope.healer = false;
    $scope.library = false;
    $scope.armory = false;
    $scope.weaponsmith = false;
    $scope.bar = false;

    if($scope.hero.location == "etown"){
        console.log("asd")
    }

    $scope.toMap = function () {
        window.location.href  = '#/map';
    };

    $scope.enterBuilding = function(building) {
        switch (building){
            case "library":
                $scope.library = true;
                $scope.healer = false;
                $scope.armory = false;
                $scope.weaponsmith = false;
                $scope.bar = false;
                break;
            case "healer":
                $scope.library = false;
                $scope.healer = true;
                $scope.armory = false;
                $scope.weaponsmith = false;
                $scope.bar = false;
                break;
            case "armory":
                $scope.armory = true;
                $scope.library = false;
                $scope.healer = false;
                $scope.weaponsmith = false;
                $scope.bar = false;
                break;
            case "weaponsmith":
                $scope.armory = false;
                $scope.library = false;
                $scope.healer = false;
                $scope.weaponsmith = true;
                $scope.bar = false;
                break;
            case "bar":
                $scope.armory = false;
                $scope.library = false;
                $scope.healer = false;
                $scope.weaponsmith = false;
                $scope.bar = true;
            default: break;
        }
    }
});