app.factory('HeroResource', function($resource) {
    
    return {
        createHero : function(hero){
                var HeroResource = $resource('api/hero', { update: {method: 'Post', isArray: false}});

                HeroResource.save(hero);
        }
    }

});