app.controller('healerCtrl', function($scope, Hero, ItemResource){
    $scope.hero = Hero.currentHero;
    $scope.fullHealCost = getHealCost($scope.hero.maxHp - $scope.hero.hp);
    $scope.healAmount = 0;
    //var healAmount = angular.element('input').scope();
    $scope.healingCost = getHealCost($scope.healAmount);
    $scope.class = null;

    $scope.fullHeal = function(){
        if ($scope.hero.gold >= $scope.fullHealCost) {

            $scope.hero.gold -= $scope.fullHealCost;
            $scope.hero.hp = $scope.hero.maxHp;

            Hero.updateHero($scope.hero)
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
            Hero.updateHero($scope.hero)
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
                Hero.updateHero($scope.hero)
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