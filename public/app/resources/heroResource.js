app.factory('HeroResource', function($resource, identity) {
    var SearchHeroResource = $resource('api/hero/:name', {name: '@name'}, { get: {method: 'Get', isArray: false}}),
        CreateHeroResource = $resource('api/createhero', { update: {method: 'Post', isArray: false}});

    return {
        createHero : function(hero){
            var newHero = hero,
                updatedUser = identity.currentUser;

            CreateHeroResource.save(hero);
            updatedUser.heroList[0] = newHero.name;
            updatedUser.$update().then(function() {
                identity.currentUser.heroList[0] = newHero.name;
            }, function(err){
                console.log(err)
            })
        },
        getHeroByName : function(name){
            SearchHeroResource.get({name: name}).$promise.then(
                function(data){console.log(data)},
                function(err){console.log(err)})
        }
    }
});