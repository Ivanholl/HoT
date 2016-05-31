var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

var dburl =  "mongodb://Arelam:1q2w3e4r5t@ds047591.mlab.com:47591/hot"

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/hot',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: dburl,
        port: process.env.PORT || 8080
    }
};
