var lastMassages = [];

module.exports = function (io) {
    io.on('connection', function (socket) {

        socket.on('message', function (from, msg) {
            console.log(from + " " + msg);
            io.sockets.emit('broadcast', {
                payload: msg,
                source: from
            });
        });

        var playersInQueue = [];
        socket.on('joinQueue', function (player) {
            playersInQueue.push(player);
            console.log(playersInQueue);
            io.sockets.emit('joinQueue', {
                playersInQueue: playersInQueue,
            });
        });
        socket.on('leaveQueue', function (player) {
            var index = playersInQueue.indexOf(player);
            if (index > -1) {
                playersInQueue.splice(index, 1);
            }
            io.sockets.emit('leaveQueue', {
                playersInQueue: playersInQueue,
            });
        });
    });
};
