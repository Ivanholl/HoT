app.controller('inventoryCtrl', function($scope, identity, updateHero, equipment, Hero) {
    $scope.hero = Hero.currentHero;
    $scope.inventory = $scope.hero.inventory;

    $scope.equip = function (item) {
        equipment.equip($scope.hero, item);
        updateHero.update($scope.hero, Hero.currentHero)
    };

    $scope.unequip = function(item){
        equipment.unequip($scope.hero, item);
        updateHero.update($scope.hero, Hero.currentHero)
    }
});