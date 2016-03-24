app.controller("merchantCtrl", function($scope, Hero){
    $scope.hero = Hero.currentHero;
    $scope.class = true;
    $scope.items = $scope.hero.inventory;
    $scope.sell = true;

    $scope.sell = function(item){
        var index = $scope.hero.inventory.indexOf(item);
        if (index > -1) {
            $scope.hero.inventory.splice(index, 1);
            $scope.hero.weight -= item.weight;
            if (item.stackable) {
                $scope.hero.gold += Math.floor(item.price / 2) * item.quantity;
            } else {
                $scope.hero.gold += Math.floor(item.price / 2);
            }        
            Hero.updateHero($scope.hero);
        }
        console.log($scope.inventory);
    };

});
