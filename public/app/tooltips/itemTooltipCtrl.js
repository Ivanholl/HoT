app.controller("ItemTooltipCtrl", function($scope, identity){
    $scope.hero = identity.currentUser.heroList[0];
    $scope.tooltipItem;
    $scope.displayBonus = [];

    for(i=1; i <= $scope.tooltipItem.bonus.length; i+=2){
        var displayString = "+" + $scope.tooltipItem.bonus[i] + " " + $scope.tooltipItem.bonus[i-1];
        $scope.displayBonus.push(displayString);
    }
});