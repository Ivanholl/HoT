app.controller('QuickAccessCtrl', function($scope, identity, Hero){
    $scope.hero = Hero.currentHero;
    $scope.inventoryShow = false;
    $scope.charInfo = false;
    $scope.quests = false;
    $scope.mail = false;

    $scope.fullInfo = true;

    $scope.inventoryOpen = function(){
        $scope.inventoryShow = !$scope.inventoryShow;
    }
    $scope.charInfoOpen = function (){
        $scope.charInfo = !$scope.charInfo;
    }
    $scope.questsOpen = function (){
        $scope.quests = !$scope.quests;
    }
    $scope.mailOpen = function (){
        $scope.mail = !$scope.mail;
    }
    $('.quickAccessBar-tab').tooltip();
});
