app.factory('heroCreate', function($http, $q, identity, UsersResource){
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
                    str: 10,
                    gold: 0,
                    ss: 0,
                    equipment:{
                        helm: {} ,
                        chest: {},
                        belt: {},
                        pants: {},
                        boots: {},
                        symbol: {},
                        weapon: {},
                        gloves: {},
                        ring: {},
                        mantle: {},
                        shield: {},
                        bracelet: {},
                        secRing: {},
                        neckless: {}
                    },
                    location: 'hzone1',
                    inventory: [],
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
                    str: 10,
                    gold: 0,
                    ss: 0,
                    equipment:{
                        helm: {} ,
                        chest: {},
                        belt: {},
                        pants: {},
                        boots: {},
                        symbol: {},
                        weapon: {},
                        gloves: {},
                        ring: {},
                        mantle: {},
                        shield: {},
                        bracelet: {},
                        secRing: {},
                        neckless: {}
                    },
                    location: 'ezone1',
                    inventory: [],
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
                    str: 10,
                    gold: 0,
                    ss: 0,
                    equipment:{
                        helm: {} ,
                        chest: {},
                        belt: {},
                        pants: {},
                        boots: {},
                        symbol: {},
                        weapon: {},
                        gloves: {},
                        ring: {},
                        mantle: {},
                        shield: {},
                        bracelet: {},
                        secRing: {},
                        neckless: {}
                    },
                    location: 'ozone1',
                    inventory: [],
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
                     st: 9,
                     dm: [2,3],
                     df: 5,
                     str: 10,
                     gold: 0,
                     ss: 0,
                     equipment:{
                         helm: {} ,
                         chest: {},
                         belt: {},
                         pants: {},
                         boots: {},
                         symbol: {},
                         weapon: {},
                         gloves: {},
                         ring: {},
                         mantle: {},
                         shield: {},
                         bracelet: {},
                         secRing: {},
                         neckless: {}
                     },
                     location: 'dzone1',
                     inventory: [],
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
                    equipment:{
                        helm: {} ,
                        chest: {},
                        belt: {},
                        pants: {},
                        boots: {},
                        symbol: {},
                        weapon: {},
                        gloves: {},
                        ring: {},
                        mantle: {},
                        shield: {},
                        bracelet: {},
                        secRing: {},
                        neckless: {}
                    },
                    location: 'uzone1',
                    inventory: [],
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