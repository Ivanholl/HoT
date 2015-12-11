app.controller('townCtrl', function($scope, identity) {
    $scope.hero = identity.currentUser.heroList[0];

    $scope.toMap = function () {
        window.location.href  = '#/map';
    }
});