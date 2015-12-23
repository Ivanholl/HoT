app.controller('inventoryCtrl', function($scope, identity, updateHero, equipment) {
    $scope.hero = identity.currentUser.heroList[0];
    $scope.inventory = $scope.hero.inventory;

    //console.log($scope.hero);

    if ($scope.hero.inventory.length <= 0) {
        $scope.hero.inventory.push({
            title: "Stick",
            pic: "pictures/items/stick.png",
            type: 'weapon',
            weight: '1',
            bonus: ['DMmin+1']
        });
        $scope.hero.inventory.push({
            title: "Helm",
            pic: "pictures/items/pot.png",
            type: 'helm',
            weight: '1',
            bonus: ['DF+1']
        });
        $scope.hero.inventory.push({
            title: "neckless",
            pic: "pictures/items/item.jpg",
            type: 'neckless',
            weight: '1',
            bonus: ['DF+1']
        });
        $scope.hero.inventory.push({
            title: "wep 2",
            pic: "pictures/items/item.jpg",
            type: 'weapon',
            weight: '1',
            bonus: ['df','1']
        });

        updateHero.update($scope.hero, identity.currentUser)
    }

    $scope.equip = function (item) {
        equipment.equip($scope.hero, item);
        updateHero.update($scope.hero, identity.currentUser)
    };
    $scope.unequip = function(item){
        equipment.unequip($scope.hero, item);
        updateHero.update($scope.hero, identity.currentUser)
    }
});