app.directive('charrInfo', ['equipment', 'Hero', 'Quests', function(equipment, Hero, Quests) {
    return {
        restrict: 'E',
        templateUrl: 'quickAccessBar/charInfo/charrInfo',
        link: function(scope) {
            scope.hero = Hero.currentHero;
            scope.inventory = scope.hero.inventory;

            scope.unequip = function(item) {
                equipment.unequip(scope.hero, item);
                Hero.updateHero(scope.hero);
            };

            $(".dragable").draggable();
        }
    };
}])
