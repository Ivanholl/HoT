app.factory('HeroResource', function($resource) {

    var HeroResource = $resource('api/hero', { update: {method: 'Post', isArray: false}});

    return HeroResource;
});