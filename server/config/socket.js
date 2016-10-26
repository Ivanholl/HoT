var lastMassages = [];

var playersInQueue = [];
module.exports = function (io) {
    io.on('connection', function (socket) {

        socket.on('message', function (from, msg) {
            console.log(from + " " + msg);
            io.sockets.emit('broadcast', {
                payload: msg,
                source: from
            });
        });

        socket.on('joinQueue', function (player) {
            var newPlayer = new Object();
            newPlayer.name = player;
            newPlayer.id = socket.id;
            //check if allready in queue and remove if so
            for (var i = 0; i < playersInQueue.length; i++) {
                if (playersInQueue[i].name === player) {
                    playersInQueue.splice(i, 1)
                }
            }
            playersInQueue.push(newPlayer);

            io.sockets.emit('joinQueue', {
                playersWaiting: playersInQueue,
            });
        });

        socket.on('leaveQueue', function (player) {
            for (var i = 0; i < playersInQueue.length; i++) {
                if (playersInQueue[i].name === player) {
                    playersInQueue.splice(i, 1)
                }
            }
            io.sockets.emit('leaveQueue', {
                playersInQueue: playersInQueue,
            });
        });

        setInterval(function(){
            
        }, 3000);
    });
};
