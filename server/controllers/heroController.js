var Hero = require('mongoose').model('Hero');

module.exports = {
    getHeroByName : function(req, res){
        Hero.findOne({name : req.params.name}).exec(function(err, hero) {
            if (err) {
                console.log('Items could not be loaded: ' + err);
                return;
            }
            res.send(hero);
        })
    },
    createHero : function(req, res){
        var newHeroData = req.body;

        Hero.create(newHeroData, function(err, hero) {
            if (err) {
                console.log('Failed to create new hero:    ' + err);
                return;
            }
            res.send(hero);
        })
    }
};