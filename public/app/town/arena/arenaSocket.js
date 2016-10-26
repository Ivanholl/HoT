app.service('arenaSocket', function (socketFactory) {
    var socket = socketFactory();

    socket.forward('joinQueue');
    
    return socket;
});
