var mongoose = require('mongoose'),
    user = require('../models/User'),
    hero = require('../models/Hero'),
    minion = require('../models/Minion'),
    zone = require("../models/Zone"),
    item = require('../models/Item'),
    auction = require("../models/Auction"),
    mail = require('../models/Mail');

module.exports = function(config) {

   /* var db_name = 'heroes';
//provide a sensible default for local development
    mongodb_connection_string = 'mongodb://127.0.0.1:27017/' + db_name;
//take advantage of openshift env vars when available:
    if(process.env.OPENSHIFT_MONGODB_DB_URL){
        mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + db_name;
    } */

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
    hero.seedTestHero();
    minion.seedTestMinion();
    item.seedInitialItems();
    zone.seedZones();
    auction.seedAuctions();
    mail.seedMail();
};