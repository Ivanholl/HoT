var Hero = require('mongoose').model('Hero');
var equipment = [
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

function getHeroStats(hero){
    switch(hero.race) {
        case "human":
            return {
                avatar: 'pictures/avatar/playerAvatar.png',
                name: hero.name,
                ap: 0,
                hp: 15,
                maxHp: 15,
                mp: 5,
                maxMp:5,
                dm: [3,4],
                df: 2,
                weight: 0,
                str: 10,
                gold: 0,
                ss: 0,
                location: 'hzone1',
                home: "htown",
                inventory: [],
                equipment: [],
                race: hero.race
            };
            break;
        case "elf":
            return {
                avatar: 'pictures/avatar/playerAvatar.png',
                name: hero.name,
                ap: 0,
                hp: 13,
                maxHp: 13,
                mp: 6,
                maxMp:6,
                dm: [2,3],
                df: 2,
                weight: 0,
                str: 10,
                gold: 0,
                ss: 0,
                location: 'ezone1',
                home: "etown",
                inventory: [],
                equipment: [],
                race: hero.race
            };
            break;
        case "orc":
            return {
                avatar: 'pictures/avatar/playerAvatar.png',
                name: hero.name,
                ap: 0,
                hp: 10,
                maxHp: 10,
                mp: 3,
                maxMp:3,
                dm: [4,5],
                df: 3,
                weight: 0,
                str: 10,
                gold: 0,
                ss: 0,
                location: 'ozone1',
                home: "otown",
                inventory: [],
                equipment: [],
                race: hero.race
            };
            break;
        case "dwarf":
            return {
                avatar: 'pictures/avatar/playerAvatar.png',
                name: hero.name,
                ap: 0,
                hp: 15,
                maxHp: 15,
                mp: 3,
                maxMp:3,
                weight: 0,
                dm: [2,3],
                df: 4,
                str: 10,
                gold: 0,
                ss: 0,
                location: 'dzone1',
                home: "dtown",
                inventory: [],
                equipment: [],
                race: hero.race
            };
            break;
        case "undead":
            return {
                avatar: 'pictures/avatar/playerAvatar.png',
                name: hero.name,
                ap: 0,
                hp: 16,
                maxHp: 16,
                mp: 4,
                maxMp:4,
                dm: [2,3],
                df: 2,
                str: 10,
                gold: 0,
                ss: 0,
                location: 'uzone1',
                home: "utown",
                inventory: [],
                equipment: [],
                race: hero.race
            };
            break;
        default:
            break;
    }
}

module.exports = {
    getHeroByName : function(req, res){
        Hero.findOne({name : req.params.name}).exec(function(err, hero) {
            if (err) console.log('Hero could not be loaded: ' + err);
            res.send(hero);
        })
    },
    createHero : function(req, res){
        var newHeroData = getHeroStats(req.body);

        Hero.create(newHeroData, function(err, hero) {
            if (err) console.log('Failed to create new hero: ' + err);
            res.send(hero);
        })
    },
    deleteHero: function(req, res){
        Hero.remove({name : req.params.name}).exec(function(err, hero) {
            if (err) console.log('Hero could not be loaded: ' + err);
            res.send(hero);
        })
    },
    updateHero: function(req,res){
        var updatedUserData = req.body;

        Hero.update({name: req.params.name}, updatedUserData).exec(function(err, hero) {
            console.log(hero)
            res.end();
        })
    }
};