app.controller('townCtrl', function($scope, identity) {
    $scope.hero = identity.currentUser.heroList[0];

    $scope.toMap = function () {
        $scope.hero.location = 'hzone1';
        window.location.href  = '#/map';
    }
});