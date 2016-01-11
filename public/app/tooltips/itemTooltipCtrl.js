app.controller("ItemTooltipCtrl", function($scope, identity){
    $scope.hero = identity.currentUser.heroList[0];
    $scope.tooltipItem;
});