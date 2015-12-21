var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/hot',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: "mongodb://admin:1q2w3e4r5t@ds061474.mongolab.com:61474/heroesoftrebichenburg",
        port: process.env.PORT || 3030
    }
};