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
        /*Minion.remove({}, function(err) { 
            console.log('collection removed') 
        });*/

        if (collection.length === 0) {
            //Human
            Minion.create({hp:15,maxHp:15,mp:0,maxMp:0,dm:[3,4],df:2,gold:10,ss:10,location:'hzone1', name: "Kymerian Wolf",avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:13,maxHp:13,mp:0,maxMp:0,dm:[2,3],df:2,gold:10,ss:5,location:'hzone1',name: "Kymerian Tiger",avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:10,maxHp:10,mp:0,maxMp:0,dm:[2,3],df:1,gold:15,ss:10,location:'hzone1',name: "Naga Scout",avatar:"pictures/avatar/minion/nagaScout.jpg"});
            Minion.create({hp:15,maxHp:15,mp:0,maxMp:0,dm:[2,3],df:3,gold:10,ss:5,location:'hzone1',name: "Common Thief",avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:13,maxHp:13,mp:0,maxMp:0,dm:[1,2],df:1,gold:10,ss:5,location:'hzone1',name: "Orange Kymerian Tiger",avatar:"pictures/avatar/minion/tba.jpg"});

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

            //ORC
            Minion.create({hp:10,maxHp:10,mp:0,maxMp:0,dm:[3,4],df:4,gold:15,ss:10,location:'ozone1',name:'Desert Scorpion',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:15,maxHp:15,mp:0,maxMp:0,dm:[4,5],df:3,gold:15,ss:10,location:'ozone1',name:'Sand Worm',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:13,maxHp:13,mp:0,maxMp:0,dm:[1,2],df:3,gold:10,ss:5,location:'ozone1',name:'Thief',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:11,maxHp:11,mp:0,maxMp:0,dm:[2,3],df:2,gold:10,ss:5,location:'ozone1',name:'Sand Zombie',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:15,maxHp:15,mp:0,maxMp:0,dm:[3,5],df:2,gold:5,ss:15,location:'ozone1',name:'Sand Mole',avatar:"pictures/avatar/minion/tba.jpg"});

            Minion.create({hp:10,maxHp:10,mp:0,maxMp:0,dm:[2,3],df:3,gold:10,ss:5,location:'ozone2',name:'Sand Zombie',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:20,maxHp:20,mp:1,maxMp:1,dm:[4,6],df:4,gold:15,ss:15,location:'ozone2',name:'Sand Scorpion',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:17,maxHp:17,mp:0,maxMp:0,dm:[3,4],df:3,gold:10,ss:10,location:'ozone2',name:'Sand Zombie',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:20,maxHp:20,mp:0,maxMp:0,dm:[4,6],df:4,gold:15,ss:15,location:'ozone2',name:'Nomad',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:25,maxHp:25,mp:0,maxMp:0,dm:[4,5],df:3,gold:15,ss:15,location:'ozone2',name:'Sand Giant',avatar:"pictures/avatar/minion/tba.jpg"});

            Minion.create({hp:40,maxHp:40,mp:0,maxMp:0,dm:[4,6],df:4,gold:20,ss:25,location:'ozone3',name:'Stone Spider',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:20,maxHp:20,mp:0,maxMp:0,dm:[5,7],df:5,gold:25,ss:25,location:'ozone3',name:'Sand Monster',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:25,maxHp:25,mp:0,maxMp:0,dm:[4,6],df:5,gold:20,ss:20,location:'ozone3',name:'Armored Sand Zombie',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:25,maxHp:25,mp:0,maxMp:0,dm:[4,5],df:3,gold:15,ss:15,location:'ozone3',name:'Sand Giant',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:25,maxHp:25,mp:0,maxMp:0,dm:[4,6],df:4,gold:15,ss:15,location:'ozone3',name:'Baby Stone Spider',avatar:"pictures/avatar/minion/tba.jpg"});

            //dwarf
            Minion.create({hp:20,maxHp:20,mp:0,maxMp:0,dm:[1,2],df:1,gold:5,ss:5,location:'dzone1',name:'Evolved Slug',avatar:"pictures/avatar/minion/evolved slug.png"});
            Minion.create({hp:15,maxHp:15,mp:0,maxMp:0,dm:[2,3],df:5,gold:10,ss:5,location:'dzone1',name:'Stone Golem',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:13,maxHp:13,mp:0,maxMp:0,dm:[4,5],df:2,gold:5,ss:10,location:'dzone1',name:'Giant Worm',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:10,maxHp:10,mp:0,maxMp:0,dm:[6,7],df:1,gold:10,ss:10,location:'dzone1',name:'Bloodsucking Bat',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:20,maxHp:20,mp:0,maxMp:0,dm:[6,7],df:3,gold:0,ss:15,location:'dzone1',name:'Evolved Slug',avatar:"pictures/avatar/minion/evolved slug.png"});

            Minion.create({hp:17,maxHp:17,mp:0,maxMp:0,dm:[3,4],df:5,gold:15,ss:10,location:'dzone2',name:'Stone Bat',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:13,maxHp:13,mp:0,maxMp:0,dm:[4,6],df:2,gold:15,ss:15,location:'dzone2',name:'Mystic Spider',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:20,maxHp:20,mp:0,maxMp:0,dm:[3,6],df:6,gold:20,ss:15,location:'dzone2',name:'Mud Golem',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:16,maxHp:16,mp:0,maxMp:0,dm:[3,4],df:4,gold:15,ss:15,location:'dzone2',name:'Triplestring Scorpion',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:15,maxHp:15,mp:0,maxMp:0,dm:[2,3],df:5,gold:10,ss:5,location:'dzone2',name:'Stone Golem',avatar:"pictures/avatar/minion/tba.jpg"});

            Minion.create({hp:10,maxHp:10,mp:0,maxMp:0,dm:[7,10],df:3,gold:20,ss:15,location:'dzone3',name:'Rock Golem',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:20,maxHp:20,mp:0,maxMp:0,dm:[4,6],df:5,gold:20,ss:15,location:'dzone3',name:'Adamantium Spider',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:20,maxHp:20,mp:0,maxMp:0,dm:[2,5],df:6,gold:20,ss:10,location:'dzone3',name:'Stone Golem',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:25,maxHp:25,mp:0,maxMp:0,dm:[5,7],df:6,gold:20,ss:20,location:'dzone3',name:'Ancient Spider',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:30,maxHp:30,mp:0,maxMp:0,dm:[1,2],df:10,gold:25,ss:25,location:'dzone3',name:'Deadly Spider',avatar:"pictures/avatar/minion/tba.jpg"});

            //elf
            Minion.create({hp:10,maxHp:10,mp:0,maxMp:0,dm:[1,2],df:1,gold:5,ss:5,location:'ezone1',name:'Cheetah',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:15,maxHp:15,mp:0,maxMp:0,dm:[3,4],df:3,gold:15,ss:15,location:'ezone1',name:'Panter',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:13,maxHp:13,mp:0,maxMp:0,dm:[2,3],df:2,gold:10,ss:10,location:'ezone1',name:'Large Beetle',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:12,maxHp:12,mp:0,maxMp:0,dm:[3,4],df:1,gold:10,ss:5,location:'ezone1',name:'Troll Scout',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:10,maxHp:10,mp:0,maxMp:0,dm:[2,3],df:2,gold:10,ss:5,location:'ezone1',name:'Cheetah',avatar:"pictures/avatar/minion/tba.jpg"});

            Minion.create({hp:23,maxHp:23,mp:0,maxMp:0,dm:[2,3],df:2,gold:10,ss:10,location:'ezone2',name:'Large Beetle',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:17,maxHp:17,mp:0,maxMp:0,dm:[4,5],df:3,gold:20,ss:10,location:'ezone2',name:'Raging Panter',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:12,maxHp:12,mp:0,maxMp:0,dm:[3,4],df:1,gold:10,ss:5,location:'ezone2',name:'Troll Scout',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:15,maxHp:15,mp:0,maxMp:0,dm:[4,5],df:4,gold:15,ss:15,location:'ezone2',name:'Corrosive Ooze',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:20,maxHp:20,mp:0,maxMp:0,dm:[3,4],df:2,gold:10,ss:15,location:'ezone2',name:'Bloodthirsty Cheetah',avatar:"pictures/avatar/minion/tba.jpg"});

            Minion.create({hp:30,maxHp:30,mp:0,maxMp:0,dm:[2,4],df:5,gold:20,ss:15,location:'ezone3',name:'Walking Clam',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:25,maxHp:25,mp:0,maxMp:0,dm:[3,6],df:4,gold:20,ss:20,location:'ezone3',name:'Troll Hunter',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:20,maxHp:20,mp:0,maxMp:0,dm:[1,4],df:6,gold:15,ss:20,location:'ezone3',name:'Torn Tortoise',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:25,maxHp:25,mp:0,maxMp:0,dm:[5,10],df:0,gold:25,ss:25,location:'ezone3',name:'Ancient Spirit',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:25,maxHp:25,mp:0,maxMp:0,dm:[3,6],df:4,gold:20,ss:20,location:'ezone3',name:'Troll Hunter',avatar:"pictures/avatar/minion/tba.jpg"});

            //undead
            Minion.create({hp:16,maxHp:16,mp:0,maxMp:0,dm:[2,3],df:3,gold:10,ss:10,location:'uzone1',name:'Skeleton',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:13,maxHp:13,mp:0,maxMp:0,dm:[4,5],df:1,gold:5,ss:10,location:'uzone1',name:'Zombie',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:14,maxHp:14,mp:0,maxMp:0,dm:[2,3],df:2,gold:10,ss:5,location:'uzone1',name:'Imp',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:11,maxHp:11,mp:0,maxMp:0,dm:[4,5],df:0,gold:15,ss:5,location:'uzone1',name:'Demon Spawn',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:14,maxHp:15,mp:0,maxMp:0,dm:[2,3],df:2,gold:5,ss:15,location:'uzone1',name:'Imp',avatar:"pictures/avatar/minion/tba.jpg"});

            Minion.create({hp:13,maxHp:13,mp:0,maxMp:0,dm:[3,5],df:3,gold:15,ss:15,location:'uzone2',name:'Sabertooth',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:11,maxHp:11,mp:0,maxMp:0,dm:[4,5],df:0,gold:15,ss:5,location:'uzone2',name:'Demon Spawn',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:20,maxHp:20,mp:0,maxMp:0,dm:[3,4],df:3,gold:5,ss:15,location:'uzone2',name:'Harpy Scout',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:20,maxHp:20,mp:0,maxMp:0,dm:[2,4],df:3,gold:20,ss:10,location:'uzone2',name:'Demonic Imp',avatar:"pictures/avatar/minion/tba.jpg"});
            Minion.create({hp:20,maxHp:20,mp:0,maxMp:0,dm:[3,4],df:3,gold:5,ss:15,location:'uzone2',name:'Harpy Scout',avatar:"pictures/avatar/minion/tba.jpg"});

            //Minion.create({hp:,maxHp:,mp:0,maxMp:0,dm:[,],df:,gold:,ss:,location:'',name:'',avatar:"pictures/avatar/minion/tba.jpg"})
            console.log('Seed Minions added to databse...')
        }
    });
};