app.controller('townCtrl', function($scope, identity) {
    $scope.hero = identity.currentUser.heroList[0];
    $scope.healer = false;
    $scope.library = false;

    $scope.toMap = function () {
        $scope.hero.location = 'hzone1';
        window.location.href  = '#/map';
    };

    $scope.enterBuilding = function(building) {
        switch (building){
            case "library":
                $scope.library = true;
                $scope.healer = false;
                break;
            case "healer":
                $scope.library = false;
                $scope.healer = true;
                break;
            default: break;
        }
    }
});