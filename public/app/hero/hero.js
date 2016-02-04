app.factory('Hero', function($q, $http, $window, identity, HeroResource) {
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
        },
        updateHero: function(newHero){
            var deferred = $q.defer();

            hero.$save().then(function() {
                hero = newHero;
                deferred.resolve();
            }, function(response) {
                deferred.reject(response);
            });

            return deferred.promise;
        }
    }
});