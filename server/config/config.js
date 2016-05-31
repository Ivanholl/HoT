var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

var pg = require('pg');
pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/hot',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: process.env.OPENSHIFT_MONGODB_DB_URL + 'hot',
        port: process.env.OPENSHIFT_NODEJS_PORT || 3030
    }
};