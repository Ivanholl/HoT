var Minion = require('mongoose').model('Minion');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    getAllMinions: function(req, res, next) {
        Minion.find({}).exec(function(err, collection) {

            if (err) {
                console.log('Minions could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getMinionsByLocation: function(req, res, location, returnOne) {

        Minion.find({location : location}).exec(function(err, collection) {
            if (err) console.log('Minions could not be loaded: ' + err);

            if (returnOne){
                var rand = getRandomInt(0, collection.length)
                res.send(collection[rand])
            } else {
                res.send(collection);
            }

        })
    }
};