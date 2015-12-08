var Minion = require('mongoose').model('Minion');

module.exports = {
    getAllMinions: function(req, res, next) {
        Minion.find({}).exec(function(err, collection) {

            if (err) {
                console.log('Minions could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getMinionsByLocation: function(req, res, next) {
        Minion.find({location: req.params}).exec(function(err, collection) {
            if (err) {
                console.log('Minions could not be loaded: ' + err);
            }

            res.send(collection);
        })
    }
};