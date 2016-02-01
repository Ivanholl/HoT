var mongoose = require('mongoose');

var zoneSchema = mongoose.Schema({
    name: String,
    index: String,
    info: String,
    movementOptions: Object
});
var Zone = mongoose.model('Zone', zoneSchema);

module.exports.seedZones = function() {
    Zone.find({index:"dzone1"}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find users: ' + err);
            return;
            console.log(collection)
        }
        /*Zone.remove({}, function(err) {
         console.log('collection removed')
         });*/
        if (collection.length === 0) {
            Zone.create({name: "gates", index: "dzone1", info: "front of the Drawrf Town Gates",movementOptions: {
                nextZone: "dzone2",
                prevZone: 'dtown',
                hasNextZone: true,
                hasPrevZone: true,
                hasBranchZone: false,
                hasBattle: true
            }});
            Zone.create({name: "gates", index: "dzone2", info: "front of the Drawrf Town Gates",movementOptions: {
                nextZone: "dzone2",
                prevZone: 'dtown',
                hasNextZone: true,
                hasPrevZone: true,
                hasBranchZone: false,
                hasBattle: true
            }});
            console.log('Zones added to databse...')
        }
    });
};