app.controller('healerCtrl', function($scope, identity, updateHero, ItemResource){
    $scope.hero = identity.currentUser.heroList[0];
    $scope.fullHealCost = getHealCost($scope.hero.maxHp - $scope.hero.hp);
    $scope.healAmount = 0;
    //var healAmount = angular.element('input').scope();
    $scope.healingCost = getHealCost($scope.healAmount);
    $scope.class = null;

    if ($scope.hero.hp <= 0) {
        $scope.hero.hp = 1;
        updateHero.update($scope.hero, identity.currentUser);
    }

    $scope.fullHeal = function(){
        if ($scope.hero.gold >= $scope.fullHealCost) {

            $scope.hero.gold -= $scope.fullHealCost;
            $scope.hero.hp = $scope.hero.maxHp;

            updateHero.update($scope.hero, identity.currentUser);
        }
        else{
            alert('Not enough gold!!!')
        }
    };

    $scope.heal = function(healAmount){
        var healCost = getHealCost(healAmount);

        if ($scope.hero.gold >= healCost) {

            $scope.hero.hp += healAmount * 1;
            $scope.hero.gold -= healCost;

            updateHero.update($scope.hero, identity.currentUser);
        }
        else{
            alert('Not enough gold!!!')
        }
    };
    
    function getHealCost(amount){
        return amount * 3;
    }

    $scope.buy = function (item) {
        if ($scope.hero.gold >= item.price) {
            $scope.hero.weight += item.weight;

            if ($scope.hero.weight <= $scope.hero.str) {
                $scope.hero.gold -= item.price;
                $scope.hero.inventory.push(item);
                updateHero.update($scope.hero, identity.currentUser);
            } else {
                $scope.weight -= item.weight;
                alert('Inventory too heavy increase your Strength!')
            }
        } else {
            alert('Not enough gold!!!')
        }
    };

    $scope.sortByClass = function (type) {
        $scope.class = type;
        $scope.items = ItemResource.getItemsByClass($scope.class);
    };
});