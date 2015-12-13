app.controller('heroSelectCtrl', function($scope,identity, heroCreate, notifier, updateHero){
    $scope.user = identity.currentUser;
    $scope.create = true;
    $scope.chooseDelete = false;
    $scope.show = true;
    $scope.heroOne = identity.currentUser.heroList[0];

    $scope.createHero = function(){
        $scope.show = !$scope.show
    };
    $scope.createNewHero = function(hero){
        heroCreate.createNewHero(hero, identity.currentUser).then(function() {
            notifier.success('Hero Created!');
        });
        window.location.href = '#/map';
    };

    $scope.delete = function(){
        updateHero.update({}, $scope.user);
        $scope.show = !$scope.show;
    };

    if (!$scope.heroOne) {
        $scope.create = !$scope.create;
        $scope.chooseDelete = !$scope.chooseDelete;
    }
});