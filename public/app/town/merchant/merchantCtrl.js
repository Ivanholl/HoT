app.controller("merchantCtrl", function($scope, identity){
    $scope.hero = identity.currentUser.heroList[0];
    $scope.inventory = $scope.hero.inventory;

    $scope.sell = function(item){
        console.log($scope.inventory)
        var index = $scope.inventory.indexOf(item);
        if (index > -1) {
            $scope.inventory.splice(index, 1);
            $scope.hero.weight -= item.weight
            $scope.hero.gold += item.price / 2
        }
        console.log($scope.inventory)
    }

});