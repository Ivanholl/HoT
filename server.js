var express = require('express');

var env = process.env.NODE_ENV || 'development';

//var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3030;
//var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var app = express();
var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(app);

app.listen(config.port);
console.log("Server running on port: " + config.port);

//app.listen(server_port, server_ip_address, function () {
  //  console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
//});