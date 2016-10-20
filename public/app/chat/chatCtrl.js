app.controller('chatCtrl',function ($scope, Hero, chatSocket, messageFormatter) {
    $scope.messageLog = '';
    $scope.show = false;

    var nickName = Hero.currentHero.name;

    $scope.sendMessage = function (msg) {
        if (nickName != null) {
            chatSocket.emit('message', nickName, msg);
            $(".chatInput").val("")
        }
    };

    $scope.$on('socket:broadcast', function (event, data) {
        $scope.$apply(function () {
            $scope.messageLog = messageFormatter(
                new Date(),
                data.source,
                data.payload
            ) + $scope.messageLog;
        });
    });

    $(".chatInput").keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            $scope.sendMessage()
        }
    });
});
