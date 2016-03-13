var mongoose = require('mongoose'),
    equipment = [
    helm = null,    //0
    chest = null,
    belt = null, /////2
    pants = null,
    boots = null,//////4
    weapon = null,
    gloves = null,///6
    mantle = null,
    shield = null,///8
    bracelet = null,
    symbol = null,////10
    ring = null,
    secRing = null,////12
    neckless = null
];

var heroSchema = mongoose.Schema({
    avatar: String,
    name: { type: String, require: '{PATH} is required', unique: true },
    ap: Number,
    hp: Number,
    maxHp: Number,
    mp: Number,
    maxMp:Number,
    dm: [Number,Number],
    df: Number,
    weight: Number,
    str: Number,
    gold: Number,
    ss: Number,
    location: String,
    inventory: [],
    equipment: [],
    race: String,
    home: String,
    newMail: Boolean
});

var Hero = mongoose.model('Hero', heroSchema);

module.exports.seedTestHero = function() {
    Hero.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Cannot find users: ' + err);
            return;
        }

       /*for (var i = 0; i < collection.length; i++) {
            if(!collection[i].newMail){
                collection[i].newMail = false;
                console.log('hero Update')
                collection[i].save()
            }
        }*/

        if (collection.length === 0) {
            Hero.create({
                name: "test",
                ap: 9001,
                hp: 1, maxHp: 1,
                mp: 1, maxMp: 1,
                dm: null, df: 1,
                gold: 0, ss: 0,
                location: 'secret',
                race: 'admin'
            });
            console.log('Test Hero added to databse...')
        }
    });
};