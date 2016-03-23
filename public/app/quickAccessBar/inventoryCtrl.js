app.controller('inventoryCtrl', function($scope, equipment, Hero) {
    $scope.hero = Hero.currentHero;
    $scope.inventory = $scope.hero.inventory;

    $scope.equip = function (item) {
        equipment.equip($scope.hero, item);
        Hero.updateHero($scope.hero);
    };

    $scope.unequip = function(item){
        equipment.unequip($scope.hero, item);
        Hero.updateHero($scope.hero);
    };
});
