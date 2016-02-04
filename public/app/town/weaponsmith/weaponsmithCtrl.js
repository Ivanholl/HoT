app.controller('weaponsmithCtrl', function($scope, Hero, ItemResource) {
    $scope.hero = Hero.currentHero;
    $scope.class = null;

    $scope.sortByClass = function (type) {
        $scope.class = type;
        $scope.items = ItemResource.getItemsByClass($scope.class);
    };

    $scope.buy = function (item) {
        if ($scope.hero.gold >= item.price) {
            $scope.hero.weight += item.weight;

            if ($scope.hero.weight <= $scope.hero.str) {
                $scope.hero.gold -= item.price;
                $scope.hero.inventory.push(item);
                Hero.updateHero($scope.hero)
            } else {
                $scope.weight -= item.weight;
                alert('Inventory too heavy increase your Strength!')
            }
        } else {
            alert('Not enough gold!!!')
        }
    }
});
