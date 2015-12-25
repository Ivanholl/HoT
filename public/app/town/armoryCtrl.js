app.controller('armoryCtrl', function($scope, identity, ItemResource, updateHero){
    $scope.hero = identity.currentUser.heroList[0];
    $scope.type = null;

    $scope.sortByType = function(type){
        $scope.type = type;
        $scope.items = ItemResource.getItemsByType($scope.type);

    };

    $scope.buy = function(item){
        if ($scope.hero.gold >= item.price) {
            $scope.hero.gold -= item.price;
            $scope.hero.inventory.push(item);
            updateHero.update($scope.hero, identity.currentUser);
        }else{
            alert('Not enough gold!!!')
        }
    }
});