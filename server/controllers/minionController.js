var Minion = require('mongoose').model('Minion');

module.exports = {
    getAllMinions: function(req, res, next) {
        console.log("all minion search")

        Minion.find({}).exec(function(err, collection) {

            if (err) {
                console.log('Minions could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getMinionsByLocation: function(req, res, location) {
        Minion.find({location : location}).exec(function(err, collection) {
            if (err) console.log('Minions could not be loaded: ' + err);
            res.send(collection);
        })
    }
};