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
    getItemsByClass: function(req, res, itemClass) {
        Item.find({class : itemClass}).exec(function(err, collection) {
            if (err) console.log('Items could not be loaded: ' + err);
            res.send(collection);
        })
    }
};