app.controller('arenaCtrl', function($scope, Hero, arenaSocket){
    $scope.hero = Hero.currentHero;
    $scope.heroesInQueue = [];
    $scope.inQueue = false;

    var HeroName = $scope.hero.name;

    $scope.joinQueue = function(){
        arenaSocket.emit('joinQueue', HeroName);
        $scope.inQueue = true;
    };
    $scope.leaveQueue = function(){
        arenaSocket.emit('leaveQueue', HeroName);
        $scope.inQueue = false;
    };

    $scope.$on('socket:joinQueue', function (event, data) {
        $scope.$apply(function () {
            $scope.heroesInQueue = data.playersInQueue;
            console.log($scope.heroesInQueue);
        });
    });

    $scope.$on('socket:leaveQueue', function (event, data) {
        $scope.$apply(function () {
            $scope.heroesInQueue = data.playersInQueue;
            console.log($scope.heroesInQueue);
        });
    });
});
