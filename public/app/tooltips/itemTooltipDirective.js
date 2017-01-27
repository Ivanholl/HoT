app.directive('itemTooltip', ['identity', function(identity) {
    return {
        restrict: 'E',
        templateUrl: 'partials/tooltips/itemTooltip',
        link: function(scope) {
            scope.hero = identity.currentUser.heroList[0];
            scope.tooltipItem;
            scope.displayBonus = [];
            scope.displaySecBonus = [];

            for(i=1; i <= scope.tooltipItem.bonus.length; i+=2){
                var displayString = "+" + scope.tooltipItem.bonus[i] + " " + scope.tooltipItem.bonus[i-1];
                scope.displayBonus.push(displayString);
            }

            for(y=1; y <= scope.tooltipItem.secBonus.length; y+=2){
                var bonus = "+" + scope.tooltipItem.secBonus[y] + " " + scope.tooltipItem.secBonus[y-1];
                scope.displaySecBonus.push(bonus);
            }
        }
    };
}])
