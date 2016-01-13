app.controller('healerCtrl', function($scope, identity, updateHero){
    $scope.hero = identity.currentUser.heroList[0];
    $scope.fullHealCost = getHealCost($scope.hero.maxHp - $scope.hero.hp);
    var healAmount = angular.element('input').scope();
    $scope.healingCost = getHealCost(healAmount);

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
        return amount * 4;
    }
});