app.controller('MainCtrl', function($scope, identity, ngAudio) {
    $scope.identity = identity;
    $scope.sound = ngAudio.load("sounds/mouseHover.mp3");

    $scope.play = function(){
        window.location = "#/hero";
    }
});