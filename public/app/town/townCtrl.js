app.controller('townCtrl', function($scope, identity) {
    $scope.hero = identity.currentUser.heroList[0];
    $scope.healer = false;
    $scope.library = false;
    $scope.armory = false;

    $scope.toMap = function () {
        window.location.href  = '#/map';
    };

    $scope.enterBuilding = function(building) {
        switch (building){
            case "library":
                $scope.library = true;
                $scope.healer = false;
                $scope.armory = false;
                break;
            case "healer":
                $scope.library = false;
                $scope.healer = true;
                $scope.armory = false;
                break;
            case "armory":
                $scope.armory = true;
                $scope.library = false;
                $scope.healer = false;
                break;
            default: break;
        }
    }
});