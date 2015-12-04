app.factory('heroCreate', function($http, $q, identity, UsersResource){
    function getHeroStats(hero){
        switch(hero.race) {
            case "Human":
                return {
                    name: hero.name,
                    hp: 15,
                    maxHp: 15,
                    mp: 5,
                    maxMp:5,
                    dm: [3,4],
                    df: 2,
                    gold: 0,
                    ss: 0,
                    location: 'hzone1',
                    race: hero.race
                };
                break;
            case "Elf":
                return {
                    name: hero.name,
                    hp: 13,
                    maxHp: 13,
                    mp: 6,
                    maxMp:6,
                    dm: [2,3],
                    df: 2,
                    gold: 0,
                    ss: 0,
                    location: 'ezone1',
                    race: hero.race
                };
                break;
            case "Orc":
                return {
                    name: hero.name,
                    hp: 10,
                    maxHp: 10,
                    mp: 3,
                    maxMp:3,
                    dm: [4,5],
                    df: 3,
                    gold: 0,
                    ss: 0,
                    location: 'ozone1',
                    race: hero.race
                };
                break;
            /*case "Dwarf":
                 return {
                     name: hero.name,
                     hp: 15,
                     maxHp: 15,
                     mp: 5,
                     maxMp:5,
                     st: 9,
                     dm: [2,3],
                     df: 5,
                     gold: 0,
                     ss: 0,
                     location: 'dzone1',
                     race: hero.race
             };
             break;*/
            case "Undead":
                return {
                    name: hero.name,
                    hp: 16,
                    maxHp: 16,
                    mp: 5,
                    maxMp:5,
                    dm: [2,3],
                    df: 3,
                    gold: 0,
                    ss: 0,
                    location: 'ozone1',
                    race: hero.race
                };
                break;
            default:
                break;
        }
    }
    return {
        createNewHero: function(hero, user){
            var deferred = $q.defer();
            var newHero = getHeroStats(hero);

            var updatedUser = new UsersResource(user);
            updatedUser._id = identity.currentUser._id;
            updatedUser.heroList[0] = newHero;

            updatedUser.$update().then(function() {
                identity.currentUser.heroList[0] = newHero;
                deferred.resolve();
            }, function(response) {
                deferred.reject(response);
            });
            return deferred.promise;
        }
    }
});