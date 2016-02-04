var mongoose = require('mongoose');

var zoneSchema = mongoose.Schema({
    name: String,
    index: String,
    info: String,
    movementOptions: Object
});
var Zone = mongoose.model('Zone', zoneSchema);

module.exports.seedZones = function() {
    Zone.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find users: ' + err);
            return;
            console.log(collection)
        }
        /*Zone.remove({}, function(err) {
         console.log('collection removed')
         });*/
        if (collection.length === 0) {
/*HUMAN*/   Zone.create({name: "Kymeria", index: "htown", info: "The old capital of Humans",movementOptions: {
                nextZone: "hzone1",
                hasBranchZone: false,
                hasPrevZone: false,
                hasNextZone: true,
                hasBattle: false,
                isTown: true
            }});
            Zone.create({name: "gates", index: "dzone1", info: "front of the Drawrf Town Gates",movementOptions: {
                nextZone: "dzone2",
                prevZone: 'dtown',
                hasNextZone: true,
                hasPrevZone: true,
                hasBranchZone: false,
                hasBattle: true,
                isTown: false
            }});
            Zone.create({name: "gates", index: "dzone2", info: "front of the Drawrf Town Gates",movementOptions: {
                nextZone: "dzone2",
                prevZone: 'dtown',
                hasNextZone: true,
                hasPrevZone: true,
                hasBranchZone: false,
                hasBattle: true,
                isTown: false
            }});
            console.log('Zones added to databse...')
        }
    });
};