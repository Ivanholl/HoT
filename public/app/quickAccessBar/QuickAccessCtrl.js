app.controller('QuickAccessCtrl', function($scope){
    $scope.inventoryShow = false;
    $scope.inventory = function(){
        $scope.inventoryShow = !$scope.inventoryShow;
        console.log($scope.inventoryShow)
    }
});