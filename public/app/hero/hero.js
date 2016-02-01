app.factory('Hero', function($window, identity, HeroResource) {
    var hero,
        chosenHero = identity.currentUser.heroList[0];

    console.log($window.bootstrappedHeroObject)

    if ($window.bootstrappedHeroObject) {
        hero = HeroResource.heroResource;
        angular.extend(hero, $window.bootstrappedHeroObject);
    }

    console.log(hero)

    return {
        currentHero: hero,
        isHeroChosen: function() {
            return !!this.currentUser;
        }
    }
});