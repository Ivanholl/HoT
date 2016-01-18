app.factory('heroCreate', function($http, $q, identity, UsersResource){
    var equipment = [
        helm = null,    //0
        chest = null,
        belt = null, /////2
        pants = null,
        boots = null,//////4
        weapon = null,
        gloves = null,///6
        mantle = null,
        shield = null,///8
        bracelet = null,
        symbol = null,////10
        ring = null,
        secRing = null,////12
        neckless = null
    ];

    function getHeroStats(hero){
        switch(hero.race) {
            case "Human":
                return {
                    avatar: 'pictures/avatar/playerAvatar.png',
                    name: hero.name,
                    ap: 0,
                    hp: 15,
                    maxHp: 15,
                    mp: 5,
                    maxMp:5,
                    dm: [3,4],
                    df: 2,
                    weight: 0,
                    str: 10,
                    gold: 0,
                    ss: 0,
                    location: 'hzone1',
                    inventory: [],
                    equipment: [],
                    race: hero.race
                };
                break;
            case "Elf":
                return {
                    avatar: 'pictures/avatar/playerAvatar.png',
                    name: hero.name,
                    ap: 0,
                    hp: 13,
                    maxHp: 13,
                    mp: 6,
                    maxMp:6,
                    dm: [2,3],
                    df: 2,
                    weight: 0,
                    str: 10,
                    gold: 0,
                    ss: 0,
                    location: 'ezone1',
                    inventory: [],
                    equipment: [],
                    race: hero.race
                };
                break;
            case "Orc":
                return {
                    avatar: 'pictures/avatar/playerAvatar.png',
                    name: hero.name,
                    ap: 0,
                    hp: 10,
                    maxHp: 10,
                    mp: 3,
                    maxMp:3,
                    dm: [4,5],
                    df: 3,
                    weight: 0,
                    str: 10,
                    gold: 0,
                    ss: 0,
                    location: 'ozone1',
                    inventory: [],
                    equipment: [],
                    race: hero.race
                };
                break;
            case "Dwarf":
                 return {
                     avatar: 'pictures/avatar/playerAvatar.png',
                     name: hero.name,
                     ap: 0,
                     hp: 15,
                     maxHp: 15,
                     mp: 5,
                     maxMp:5,
                     weight: 0,
                     st: 9,
                     dm: [2,3],
                     df: 5,
                     str: 10,
                     gold: 0,
                     ss: 0,
                     location: 'dzone1',
                     inventory: [],
                     equipment: [],
                     race: hero.race
             };
             break;
            case "Undead":
                return {
                    avatar: 'pictures/avatar/playerAvatar.png',
                    name: hero.name,
                    ap: 0,
                    hp: 16,
                    maxHp: 16,
                    mp: 5,
                    maxMp:5,
                    dm: [2,3],
                    df: 3,

                    str: 10,
                    gold: 0,
                    ss: 0,
                    location: 'uzone1',
                    inventory: [],
                    equipment: [],
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

            newHero.equipment = equipment;
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