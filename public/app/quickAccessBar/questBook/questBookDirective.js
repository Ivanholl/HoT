app.directive('questBook', ['Hero', function(Hero){
    return {
        restrict: 'E',
        templateUrl: "quickAccessBar/questBook/questBook",
        link: function(scope){
            scope.hero = Hero.currentHero;
            scope.questBook = scope.hero.quests;

            $(".dragable").draggable();
        }
    }
}])
