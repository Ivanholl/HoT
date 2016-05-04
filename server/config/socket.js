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
    });
};

