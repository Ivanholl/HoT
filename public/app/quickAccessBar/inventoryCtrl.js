app.controller('inventoryCtrl', function($scope, identity){
    $scope.hero = identity.currentUser.heroList[0];
    $scope.inventory = $scope.hero.inventory;

    if($scope.hero.inventory.length <= 0) {
    $scope.hero.inventory.push({
            title:"Stick",
            type:'Weapon',
            weight:'1',
            bonus:['DMmi+1']
        })
    }
});