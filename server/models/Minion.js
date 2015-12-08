var mongoose = require('mongoose');

var minionSchema = mongoose.Schema({
    avatar: String,
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
    location: String
});

var Minion = mongoose.model('Minion', minionSchema);

module.exports.seedTestMinion = function() {
    Minion.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find users: ' + err);
            return;
        }
        if (collection.length === 0) {
            Minion.create({hp:15,maxHp:15,mp:0,maxMp:0,dm:[3,4],df:2,gold:10,ss:10,location:'hzone1', name: "Kymerian Wolf",avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:13,maxHp:13,mp:0,maxMp:0,dm:[2,3],df:2,gold:10,ss:5,location:'hzone1',name: "Kymerian Tiger",avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:10,maxHp:10,mp:0,maxMp:0,dm:[2,3],df:1,gold:15,ss:10,location:'hzone1',name: "Naga Scout",avatar:"pictures/avatar/minion/nagaScout.jpg"});
            Minion.create({hp:15,maxHp:15,mp:0,maxMp:0,dm:[2,3],df:3,gold:10,ss:5,location:'hzone1',name: "Common Thief",avatar:"pictures/avatar/minion/nagaScout.jpg"});
            Minion.create({hp:13,maxHp:13,mp:0,maxMp:0,dm:[1,2],df:1,gold:10,ss:5,location:'hzone1',name: "Orange Kymerian Tiger",avatar:"pictures/avatar/minion/nagaScout.jpg"});

            Minion.create({hp:10,maxHp:10,mp:0,maxMp:0,dm:[2,3],df:2,gold:15,ss:10,location:'hzone2',name: "Naga Scout",avatar:"pictures/avatar/minion/nagaScout.jpg"});
            Minion.create({hp:23,maxHp:23,mp:0,maxMp:0,dm:[4,5],df:2,gold:20,ss:15,location:'hzone2',name: "Naga Spearman",avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:20,maxHp:20,mp:0,maxMp:0,dm:[4,6],df:1,gold:20,ss:20,location:'hzone2',name: "Kymerian Bear",avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:25,maxHp:25,mp:0,maxMp:0,dm:[2,3],df:3,gold:15,ss:15,location:'hzone2',name: "Naga Guard",avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:20,maxHp:20,mp:0,maxMp:0,dm:[2,3],df:5,gold:20,ss:15,location:'hzone2',name: "Naga Guard",avatar:"pictures/avatar/minion/tba.jpg"});

            Minion.create({hp:30,maxHp:30,mp:0,maxMp:0,dm:[4,7],df:6,gold:30,ss:30,location:'hzone3',name: "Naga Officer",avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:23,maxHp:23,mp:0,maxMp:0,dm:[4,5],df:4,gold:20,ss:15,location:'hzone3',name: "Naga Spearman",avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:25,maxHp:25,mp:0,maxMp:0,dm:[3,5],df:3,gold:15,ss:20,location:'hzone3',name: "Naga Swordman",avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:25,maxHp:25,mp:0,maxMp:0,dm:[3,7],df:4,gold:25,ss:20,location:'hzone3',name: "Naga Archer",avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:20,maxHp:20,mp:0,maxMp:0,dm:[2,3],df:5,gold:20,ss:15,location:'hzone3',name: "Naga Guard",avatar:"pictures/avatar/minion/tba.jpg"});
            console.log('Seed Minions added to databse...')
        }
    });
};