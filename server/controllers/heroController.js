var Item = require('mongoose').model('Hero');

module.exports = {
    getHeroByName : function(req, res, next){
        console.log(req.params.heroName)
    }
};