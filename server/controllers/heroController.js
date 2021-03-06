var Hero = require('mongoose').model('Hero'),
    Mail = require('mongoose').model('Mail'),
    Auction = require('mongoose').model('Auction');

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
                minDm: 3,
                maxDm: 4,
                df: 2,
                weight: 0,
                str: 10,
                gold: 0,
                ss: 0,
                location: 'hzone1',
                home: "htown",
                battleItemsLenght: 1,
                inventory: [],
                equipment: [],
                race: hero.race,
                quests: []
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
                minDm: 2,
                maxDm: 3,
                df: 2,
                weight: 0,
                str: 10,
                gold: 0,
                ss: 0,
                location: 'ezone1',
                home: "etown",
                battleItemsLenght: 1,
                inventory: [],
                equipment: [],
                race: hero.race,
                quests: []
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
                minDm: 4,
                maxDm: 5,
                df: 3,
                weight: 0,
                str: 10,
                gold: 0,
                ss: 0,
                location: 'ozone1',
                home: "otown",
                battleItemsLenght: 1,
                inventory: [],
                equipment: [],
                race: hero.race,
                quests: []
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
                minDm: 2,
                maxDm: 3,
                df: 4,
                str: 10,
                gold: 0,
                ss: 0,
                location: 'dzone1',
                home: "dtown",
                battleItemsLenght: 1,
                inventory: [],
                equipment: [],
                race: hero.race,
                quests: []
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
                weight: 0,
                minDm: 2,
                maxDm: 3,
                df: 2,
                str: 10,
                gold: 0,
                ss: 0,
                location: 'uzone1',
                home: "utown",
                battleItemsLenght: 1,
                inventory: [],
                equipment: [],
                race: hero.race,
                quests: []
            };
            break;
        default:
            break;
    }
}
var item = {title:"Bag of Gold", rarity:'quest', type: 'test', weight:'1',class:'helm', bonus:['df','0'],price:130, pic: "/pictures/items/moneyBag.jpg"};
var newHeroMail = {title: "Welcome", from: "HoT Team", to:"", items:[item], message:"Welcome to Heroes Of Trebichnenburg", read:false, date: new Date().toJSON().slice(0,10)};

module.exports = {
    getHeroByName : function(req, res){
        Hero.findOne({name : req.params.name}).exec(function(err, hero) {
            if (err) console.log('Hero could not be loaded: ' + err);
            res.send(hero);
        });
    },
    createHero : function(req, res){
        var newHeroData = getHeroStats(req.body);

        Hero.create(newHeroData, function(err, hero) {
            if (err) console.log('Failed to create new hero: ' + err);
            res.send(hero);
        });

        newHeroMail.to = req.body.name;
        Mail.create(newHeroMail, function(err, mail){
            if(err) console.log('Failed to send welcome Mail: ' + err);
        });
    },
    deleteHero: function(req, res){
        Hero.remove({name : req.params.name}).exec(function(err, hero) {
            if (err) console.log('Hero could not be loaded: ' + err);
            res.send(hero);
        });
        Mail.remove({to: req.params.name}, function(err, mail){
            console.log(typeof(req.params.name));
            if (err) console.log("Failed to delete Hero Mail: " + err);
        });
        Auction.remove({owner: req.params.name}).exec(function (err, colection) {
            if (err) {
                console.log('Failed to delete Hero Auctions: ' + err);
            }
        });
    },
    updateHero: function(req, res){
        var updatedUserData = req.body;

        Hero.update({name: req.params.name}, updatedUserData).exec(function(err, hero) {
            res.end();
        });
    }
};
