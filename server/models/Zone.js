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
         console.log('Zone collection removed')
         });*/

        if (collection.length === 0) {
/*HUMAN*/   Zone.create({name: "Kymeria", index: "htown", info: "The old capital of Humans",movementOptions: {
                nextZone: "hzone1",
                hasNextZone: true,
                isTown: true
            }});
            Zone.create({name:"Gates of Kymeria", index:"hzone1", info:"The well guarded Kymerian Gates", movementOptions:{
                branchZone: "hzone2",
                prevZone: "htown",
                //nextZone: "hzone4",
                hasBranchZone: true,
                hasPrevZone: true,
                hasBattle: true
            }});
            Zone.create({name:"Kymerian fields", index:"hzone2", info:"The Kymerian citizens have been using this land to grow potatoes ever since Kymeria was founded", movementOptions:{
                prevZone: "hzone1",
                nextZone: "hzone3",
                hasPrevZone: true,
                hasNextZone: true,
                hasBattle: true
            }});
            Zone.create({name:"Naga Camp", index:"hzone3", info:"Long ago a peacefull forest the Kymerian forest is now a Naga Camp", movementOptions:{
                prevZone: "hzone2",
                hasPrevZone: true,
                hasBattle: true
            }});
/*DWARF*/   Zone.create({name: "Dum Todir", index: "dtown", info: "The dwarven city of gold",movementOptions: {
                nextZone: "dzone1",
                hasNextZone: true,
                isTown: true
            }});
            Zone.create({name: "Outer hall of Dum Todir", index: "dzone1", info: "One the most magnificent views in the world is the entrance to Dum Todir",movementOptions: {
                nextZone: "dzone2",
                prevZone: 'dtown',
                hasNextZone: true,
                hasPrevZone: true,
                hasBattle: true
            }});
            Zone.create({name: "Mine shaft 1", index: "dzone2", info: "Part of the dwarven mine system",movementOptions: {
                nextZone: "dzone2",
                prevZone: 'dtown',
                hasNextZone: true,
                hasPrevZone: true,
                hasBattle: true
            }});
            Zone.create({name: "Mine shaft 2", index: "dzone3", info: "Part of the dwarven mine system",movementOptions: {
                //nextZone: "dzone5",
                prevZone: 'dzone2',
                branchZone: 'dzone4',
                hasPrevZone: true,
                hasBattle: true
            }});
            console.log('Zones added to databse...')
        }
    });
};