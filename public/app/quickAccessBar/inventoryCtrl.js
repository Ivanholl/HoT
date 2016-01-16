app.controller('inventoryCtrl', function($scope, identity, updateHero, equipment) {
    $scope.hero = identity.currentUser.heroList[0];
    $scope.inventory = $scope.hero.inventory;

    $scope.equip = function (item) {
        equipment.equip($scope.hero, item);
        updateHero.update($scope.hero, identity.currentUser)
        console.log($scope.hero)
    };
    $scope.unequip = function(item){
        equipment.unequip($scope.hero, item);
        updateHero.update($scope.hero, identity.currentUser)
    }
});