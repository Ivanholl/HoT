app.controller('batlleCtrl', function($scope, identity, battle, MinionResource) {
    $scope.hero = identity.currentUser.heroList[0];
    $scope.zone = $scope.hero.location;
    $scope.minions = MinionResource.getMinionsByZone($scope.hero.location, true);

    battle.battle($scope.hero, $scope.minions);

    //$scope.hp = ($scope.hero.hp / $scope.hero.maxHp) * 100;    //in currentZone.css

});