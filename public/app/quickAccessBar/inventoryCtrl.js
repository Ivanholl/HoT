app.controller('inventoryCtrl', function($scope, identity){
    $scope.hero = identity.currentUser.heroList[0];
    $scope.inventory = $scope.hero.inventory;
    console.log('zdr')
});