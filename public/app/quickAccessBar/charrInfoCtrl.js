app.controller("charrInfoCtrl", function($scope, equipment, Hero, Quests){
    $scope.hero = Hero.currentHero;
    $scope.inventory = $scope.hero.inventory;

    $scope.unequip = function(item) {
        equipment.unequip($scope.hero, item);
        Hero.updateHero($scope.hero);
    };

    $(".dragable").draggable();    
});
