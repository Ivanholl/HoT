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
        db: process.env.OPENSHIFT_MONGODB_DB_URL + db_name,
        port: process.env.OPENSHIFT_NODEJS_PORT || 3030
    }
};