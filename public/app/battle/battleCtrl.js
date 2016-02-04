app.controller('batlleCtrl', function($scope ,Hero, battle, MinionResource) {
    $scope.hero = Hero.currentHero;
    $scope.zone = $scope.hero.location;
    $scope.minion = MinionResource.getMinionsByZone($scope.hero.location, true);

    battle.battle($scope.hero, $scope.minion);
});