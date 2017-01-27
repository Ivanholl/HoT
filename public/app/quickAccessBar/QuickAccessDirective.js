app.directive('quickAccessBar', ['identity', 'Hero', function(identity, Hero) {
    return {
        restrict: 'E',
        templateUrl: 'partials/quickAccessBar/quickAccessBar',
        link: function(scope) {
            scope.hero = Hero.currentHero;
            scope.inventoryShow = false;
            scope.charInfo = false;
            scope.quests = false;
            scope.mail = false;

            scope.fullInfo = true;

            scope.inventoryOpen = function(){
                scope.inventoryShow = !scope.inventoryShow;
            }
            scope.charInfoOpen = function (){
                scope.charInfo = !scope.charInfo;
            }
            scope.questsOpen = function (){
                scope.quests = !scope.quests;
            }
            scope.mailOpen = function (){
                scope.mail = !scope.mail;
            }
            $('.quickAccessBar-tab').tooltip();
        }
    };
}])
