var mongoose = require('mongoose'),
    user = require('../models/User'),
    hero = require('../models/Hero'),
    minion = require('../models/Minion'),
    item = require('../models/Item');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;

    db.once('open', function(err) {
        if (err) {
            console.log('Database could not be opened: ' + err);
            return;
        }

        console.log('Database up and running...')
    });

    db.on('error', function(err){
        console.log('Database error: ' + err);
    });

    user.seedInitialUsers();
    //hero.seedTestHero();
    minion.seedTestMinion();
    item.seedInitialItems();
};