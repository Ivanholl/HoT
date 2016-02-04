app.controller('TestCtrl', function($scope,identity, ItemResource, updateHero) {
    $scope.hero = identity.currentUser.heroList[0];

    $scope.giveItem = function (sort) {
        SortItems(sort)
    };

    function SortItems(sort) {
        $scope.class = sort;
        $scope.items = ItemResource.getItemsByClass($scope.class);
    }

    $scope.buy = function (item) {
        console.log(item)
        if ($scope.hero.weight <= $scope.hero.str) {

            $scope.hero.inventory.push(item);
            updateHero.update($scope.hero, identity.currentUser);
        } else {
            $scope.weight -= item.weight;
            alert('Inventory too heavy increase your Strength!')
        }
    }
});