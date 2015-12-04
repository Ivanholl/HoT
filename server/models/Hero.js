var mongoose = require('mongoose');

var heroSchema = mongoose.Schema({
    name: String,
    ap: Number,
    hp: Number,
    maxHp: Number,
    mp: Number,
    maxMp: Number,
    dm: [Number],
    df: Number,
    gold: Number,
    ss: Number,
    location: String,
    race: String
});

var Hero = mongoose.model('Hero', heroSchema);

/*module.exports.seedTestHero = function() {
    Hero.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find users: ' + err);
            return;
        }
        if (collection.length === 0) {
            Hero.create({
                name: "test",
                ap: 9001,
                hp:1,maxHp:1,
                mp:1,maxMp:1,
                dm:null,df:1,
                gold:0,ss:0,
                location:'secret',
                race:'admin'
            });
            console.log('Test Hero added to databse...')
        }
    });
};*/