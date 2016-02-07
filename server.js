var express = require('express'),
    io = require('socket.io'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    io = io.listen(server);

var env = process.env.NODE_ENV || 'development';

var config = require('./server/config/config')[env];
require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(app);
require('./server/config/socket')(io);


server.listen(config.port);
console.log("Server running on port: " + config.port);