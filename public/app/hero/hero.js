app.factory('Hero', function( $window, identity, HeroResource) {
    var hero,
        chosenHero = identity.currentUser.heroList[0];


    //if ($window.bootstrappedHeroObject) {
    hero = HeroResource.getHeroByName(chosenHero);
    angular.extend(hero, $window.bootstrappedHeroObject);
    //}

    return {
        currentHero: hero,
        isHeroChosen: function() {
            return !!this.currentHero;
        }
    }
});