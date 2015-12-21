app.controller('inventoryCtrl', function($scope, identity, updateHero){
    $scope.hero = identity.currentUser.heroList[0];
    $scope.inventory = $scope.hero.inventory;

    //console.log($scope.hero);

    if($scope.hero.inventory.length <= 0) {
        $scope.hero.inventory.push({
                title:"Stick",
                pic: "pictures/items/item - Copy.jpg",
                type:'Weapon',
                weight:'1',
                getBonus: function getBonus(){
                    if(!$scope.hero.equipment.weapon.title) {
                        $scope.hero.dm[0] += 1;
                        $scope.hero.equipment.weapon = this;
                    } else {
                        $scope.hero.dm[0] -= 1;
                        $scope.hero.equipment.weapon= {};
                    }
                },
                 bonus:['DMmin+1']
        });
        updateHero.update($scope.hero, identity.currentUser)
    }

    $scope.equip = function(item){
        console.log(item)
        item.getBonus()
        updateHero.update($scope.hero, identity.currentUser)
        console.log($scope.hero.inventory)
        console.log(identity.currentUser)
    };
});