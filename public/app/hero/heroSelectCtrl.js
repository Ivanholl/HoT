app.controller('heroSelectCtrl', function($scope,identity, heroCreate, notifier){
    $scope.user = identity.currentUser;
    $scope.show = true;
    $scope.createHero = function(){
        $scope.show = !$scope.show
    };
    $scope.createNewHero = function(hero){
        heroCreate.createNewHero(hero, identity.currentUser).then(function() {
            notifier.success('Hero Created!');
        })
    }
});