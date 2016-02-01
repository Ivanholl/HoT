var Zone = require('mongoose').model('Zone');

module.exports = {
    getZoneByIndex: function (req, res) {
        Zone.findOne({index: req.params.index}).exec(function (err, zone) {
            if (err) {
                console.log('Zone could not be found: ' + err);
            }
            res.send(zone);
        })
    }
};