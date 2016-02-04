app.factory('HeroResource', function($resource, identity) {
    var updatedUser = identity.currentUser,
        SearchHeroResource = $resource('api/hero/:name', {name: '@name'}),
        CreateHeroResource = $resource('api/createhero', { update: {method: 'Post', isArray: false}}),
        DeleteHeroResource = $resource('api/delhero/:name', {name: '@name'}, { update: {method: 'Get', isArray: false}});

    return {
        createHero : function(hero){
            var newHero = hero;

            CreateHeroResource.save(hero);
            updatedUser.heroList[0] = newHero.name;
            updatedUser.$update().then(function() {
                identity.currentUser.heroList[0] = newHero.name;
            })
        },
        getHeroByName : function(name){
            return SearchHeroResource.get({name: name})
        },
        deleteHeroByName: function(name){
            DeleteHeroResource.get({name: name});
            updatedUser.heroList[0] = "";
            updatedUser.$update().then(function() {
                identity.currentUser.heroList[0] = "";
            })
        }
    }
});