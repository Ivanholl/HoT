app.controller('inventoryCtrl', function($scope, equipment, Hero) {
    $scope.hero = Hero.currentHero;
    $scope.inventory = $scope.hero.inventory;

    $scope.equip = function (item) {
        equipment.equip($scope.hero, item);
        Hero.updateHero($scope.hero);
    };
    $scope.unequip = function(item) {
        equipment.unequip($scope.hero, item);
        Hero.updateHero($scope.hero);
    };
    $scope.use = function (item) {
        equipment.use($scope.hero, item);
        if (Hero.currentHero.hp > Hero.currentHero.maxHp) {
            Hero.currentHero.hp = Hero.currentHero.maxHp
        }
        Hero.updateHero($scope.hero);
    };
    $scope.pickForBattle = function (item) {
        var newItem = item;

        var indexInBattleItems = $scope.hero.battleItems.indexOf(newItem);
        if (indexInBattleItems >= 0) {
            var index = $scope.hero.inventory.indexOf(newItem);
            $scope.hero.inventory.splice(index, 1);
            $scope.hero.battleItems[indexInBattleItems].quantity++;
        } else if($scope.hero.battleItems.length >= $scope.hero.battleItemsLenght){
            alert("not enough space update battleItemsLenght")
        } else {
            var index = $scope.hero.inventory.indexOf(newItem);
            $scope.hero.inventory.splice(index, 1);
            $scope.hero.battleItems.push(newItem);
        }
        Hero.updateHero($scope.hero);
    };
    /*(function stackStackable(){
        $scope.inventory.forEach(function (element){
            if (element.stackable == "yes") {
                var count = 0;
                for(var i = 0; i < $scope.inventory.length; ++i){
                    if($scope.inventory[i].title == element.title)
                        count++;
                }
                element.quantity = count;
            }
            console.log(element);
        });
        $scope.inventory = Array.from(new Set($scope.inventory));
        Hero.updateHero($scope.hero)
    })();*/
});
