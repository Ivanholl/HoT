app.controller('QuickAccessCtrl', function($scope, identity){
    $scope.hero = identity.currentUser.heroList[0];
    $scope.inventoryShow = false;
    $scope.inventory = function(){
        $scope.inventoryShow = !$scope.inventoryShow;
    }

});