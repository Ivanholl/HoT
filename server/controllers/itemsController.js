var Item = require('mongoose').model('Item');

module.exports = {
    getAllItems: function(req, res, next) {
        Item.find({}).exec(function(err, collection) {

            if (err) {
                console.log('Items could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getItemsByType: function(req, res, next) {
        Item.find({location: req.params}).exec(function(err, collection) {
            if (err) {
                console.log('Items could not be loaded: ' + err);
            }

            res.send(collection);
        })
    }
};