app.factory('HeroResource', function($resource, identity) {
    var updatedUser = identity.currentUser,
        SearchHeroResource = $resource('api/hero/:name', {name: '@name'}),
        CreateHeroResource = $resource('api/createhero', { update: {method: 'Post', isArray: false}}),
        DeleteHeroResource = $resource('api/delhero/:name', {name: '@name'}, { update: {method: 'Get', isArray: false}});

    function createHero(hero){
        var newHero = hero;

        CreateHeroResource.save(hero);
        updatedUser.heroList[0] = newHero.name;
        updatedUser.$update().then(function() {
            identity.currentUser.heroList[0] = newHero.name;
        });
    }
    function deleteHeroByName(name){
        DeleteHeroResource.get({name: name});
        updatedUser.heroList[0] = "";
        updatedUser.$update().then(function() {
            identity.currentUser.heroList[0] = "";
        });
    }

    return {
        createHero : createHero,
        getHeroByName : function(name){
            return SearchHeroResource.get({name: name});
        },
        deleteHeroByName: deleteHeroByName
    };
});
