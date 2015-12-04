var Minion = require('mongoose').model('Minion');

module.exports = {
    getAllMinions: function(req, res, next) {
        Minion.find({}).exec(function(err, collection) {

            if (err) {
                console.log('Courses could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getMinionsByLocation: function(req, res, next) {
        Minion.find({location: req.params.location}).exec(function(err, collection) {
            if (err) {
                console.log('Course could not be loaded: ' + err);
            }

            res.send(collection);
        })
    }
};

