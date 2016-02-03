app.controller('QuickAccessCtrl', function($scope, identity, Hero){
    $scope.hero = Hero.currentHero;
    $scope.inventoryShow = false;
    $scope.inventory = function(){
        $scope.inventoryShow = !$scope.inventoryShow;
    }

});