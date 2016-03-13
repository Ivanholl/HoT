var mongoose = require('mongoose');

var zoneSchema = mongoose.Schema({
    name: String,
    index: String,
    info: String,
    movementOptions: Object
});
var Zone = mongoose.model('Zone', zoneSchema);

module.exports.seedZones = function() {
    Zone.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Cannot find users: ' + err);
            return;
            console.log(collection)
        }
        /*Zone.remove({}, function(err) {
         console.log('Zone collection removed')
         });*/

        if (collection.length === 0) {
 /*HUMAN*/
            Zone.create({
                name: "Kymeria", index: "htown", info: "The old capital of Humans", movementOptions: {
                    nextZone: "hzone1",
                    hasNextZone: true,
                    isTown: true
                }
            });
            Zone.create({
                name: "Gates of Kymeria", index: "hzone1", info: "The well guarded Kymerian Gates", movementOptions: {
                    branchZone: "hzone2",
                    prevZone: "htown",
                    //nextZone: "hzone4",
                    hasBranchZone: true,
                    hasPrevZone: true,
                    hasBattle: true
                }
            });
            Zone.create({
                name: "Kymerian fields",
                index: "hzone2",
                info: "The Kymerian citizens have been using this land to grow potatoes ever since Kymeria was founded",
                movementOptions: {
                    prevZone: "hzone1",
                    nextZone: "hzone3",
                    hasPrevZone: true,
                    hasNextZone: true,
                    hasBattle: true
                }
            });
            Zone.create({
                name: "Naga Camp",
                index: "hzone3",
                info: "Long ago a peacefull forest the Kymerian forest is now a Naga Camp",
                movementOptions: {
                    prevZone: "hzone2",
                    hasPrevZone: true,
                    hasBattle: true
                }
            });
/*DWARF*/
            Zone.create({
                name: "Dum Todir", index: "dtown", info: "The dwarven city of gold", movementOptions: {
                    nextZone: "dzone1",
                    hasNextZone: true,
                    isTown: true
                }
            });
            Zone.create({
                name: "Outer hall of Dum Todir",
                index: "dzone1",
                info: "One the most magnificent views in the world is the entrance to Dum Todir",
                movementOptions: {
                    nextZone: "dzone2",
                    prevZone: 'dtown',
                    hasNextZone: true,
                    hasPrevZone: true,
                    hasBattle: true
                }
            });
            Zone.create({
                name: "Mine shaft 1", index: "dzone2", info: "Part of the dwarven mine system", movementOptions: {
                    nextZone: "dzone2",
                    prevZone: 'dtown',
                    hasNextZone: true,
                    hasPrevZone: true,
                    hasBattle: true
                }
            });
            Zone.create({
                name: "Mine shaft 2", index: "dzone3", info: "Part of the dwarven mine system", movementOptions: {
                    //nextZone: "dzone5",
                    prevZone: 'dzone2',
                    branchZone: 'dzone4',
                    hasPrevZone: true,
                    hasBattle: true
                }
            });
    /*ORC*/
            Zone.create({
                name: "Gol Ugur", index: "otown", info: "The orcish Battle main post", movementOptions: {
                    nextZone: "ozone1",
                    hasNextZone: true,
                    isTown: true
                }
            });
            Zone.create({
                name: "Camp entrance", index: "ozone1", info: "You must be very brave to be here.", movementOptions: {
                    //nextZone: "ozone7",
                    branchZone: "ozone2",
                    prevZone: "otown",
                    hasPrevZone: true,
                    hasBranchZone: true,
                    hasBattle: true
                }
            });
            Zone.create({
                name: "Round to orc settlement 1", index: "ozone2", info: "TBA", movementOptions: {
                    //nextZone: "ozone4",
                    branchZone: "ozone3",
                    prevZone: "ozone1",
                    hasPrevZone: true,
                    hasBranchZone: true,
                    hasBattle: true
                }
            });
            Zone.create({
                name: "Gol Ugur oasis",
                index: "ozone3",
                info: "Oasis is kinda is not the best description more like floating sands",
                movementOptions: {
                    prevZone: "ozone2",
                    hasPrevZone: true,
                    hasBattle: true
                }
            });
    /*ELF*/
            Zone.create({
                name: "Elasia", index: "etown", info: "The magestic home of the elves", movementOptions: {
                    nextZone: "ezone1",
                    //prevZone: 'ezone6',
                    hasNextZone: true,
                    isTown: true
                }
            });
            Zone.create({
                name: "Elasia gardens",
                index: "ezone1",
                info: "The elven beloved gardens full of rare species",
                movementOptions: {
                    prevZone: "ozone2",
                    hasPrevZone: true,
                    hasBattle: true
                }
            });
            Zone.create({
                name: "Road to Elasia Harbor",
                index: "ezone2",
                info: "A tiny forest trail which make you fell the magic on your skin",
                movementOptions: {
                    nextZone: "ezone3",
                    prevZone: "ezone1",
                    hasNextZone: true,
                    hasPrevZone: true
                }
            });
            Zone.create({
                name: "Elasia Harbor",
                index: "ezone3",
                info: "Not really a Harbor, but the only way to get to Moon Island",
                movementOptions: {
                    //nextZone: "ezone4",
                    prevZone: "ezone2",
                    hasPrevZone: true,
                    hasBattle: true
                }
            });
/*Undead*/  Zone.create({
                name: "Napsonein",
                index: "utown",
                info: "Once a prosperous Human now home of the Undead, Napsonein stand right next to the Lava Crack",
                movementOptions: {
                    nextZone: "uzone1",
                    //prevZone: 'uzone6',
                    hasNextZone: true,
                    isTown: true
            }});
            Zone.create({
                name: "East of Napsonein",
                index: "uzone1",
                info: "Once a dark forest now it's just dead land and those strange horns coming out of the ground",
                movementOptions: {
                    nextZone: "uzone2",
                    prevZone: "utown",
                    hasNextZone: true,
                    hasPrevZone: true,
                    hasBattle: true
            }});
            Zone.create({
                name: "Northern Napsonein coast",
                index: "uzone2",
                info: "If you are an old fisherman you should know how much fish you could get from here",
                movementOptions: {
                    nextZone: "uzone3",
                    prevZone: "uzone1",
                    hasNextZone: true,
                    hasPrevZone: true,
                    hasBattle: true
            }});
            Zone.create({
                name: "Road to Undead village 1",
                index: "uzone3",
                info: "Another great place to fish",
                movementOptions: {
                    //nextZone: "uzone4",
                    prevZone: "uzone2",
                    hasPrevZone: true,
                    hasBattle: true
            }});
            console.log('Zones added to databse...')
        }
    });
};