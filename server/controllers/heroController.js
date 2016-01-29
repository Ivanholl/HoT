var Hero = require('mongoose').model('Hero');

module.exports = {
    getHeroByName : function(req, res, next){
        console.log(req.params.heroName)
    },
    createHero : function(req, res, next){
        var newHeroData = req.body;

        Hero.create(newHeroData, function(err, hero) {
            if (err) {
                console.log('Failed to register new user: ' + err);
                return;
            }
            console.log(hero)
            res.send(hero);

        });
    }
};