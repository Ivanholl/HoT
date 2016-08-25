app.service('equipment', function() {
    function equip(hero, item) {
        var slot = GetSlotNumb(hero, item, true);

        if (!hero.equipment[slot]) {
            if (item.twoHands){
                hero.equipment[slot] = item;
                /*TODO refactor hardcoded*/
                hero.equipment[8] = item;

            } else {
                hero.equipment[slot] = item;
            }
            getBonus(hero, item);
            //bonus for 2 daggers
            if (hero.equipment[5].title === item.title && slot !== 5) {
                getSecBonus(hero, item)
            }
        }
    }
    function unequip(hero, item) {
        //debugger;
        var slot = GetSlotNumb(hero, item);

        if (hero.equipment[slot]) {
            if (item.twoHands){
                hero.equipment[slot] = null;
                /*TODO refactor hardcoded*/
                hero.equipment[8] = null;

            } else {
                hero.equipment[slot] = null;
            }
            removeBonus(hero, item);

            //bonus for 2 daggers
            if (hero.equipment[5].title === item.title && slot !== 5) {
                removeSecBonus(hero, item)
            }
        }
    }
    function use(hero, item) {
        getBonus(hero, item);
        if (item.quantity > 1) {
            item.quantity--;
            hero.weight -= item.weight;
        } else {
            var btlIndex = hero.battleItems.indexOf(item);
            hero.battleItems.splice(btlIndex, 1);
            hero.weight -= item.weight;
        }
    }
    function useBattleItem(hero, item) {
        getBonus(hero, item);
        if (item.quantity > 1) {
            item.quantity--;
            hero.weight -= item.weight;
        } else {
            var btlIndex = hero.battleItems.indexOf(item);
            hero.battleItems.splice(btlIndex, 1);
            hero.weight -= item.weight;
        }
    }

    function getBonus(hero, item) {
        for (var i = 0; i < item.bonus.length; i += 2) {
            hero[item.bonus[i]] += (+item.bonus[i+1]);
        }
    }

    function getSecBonus(hero, item) {
        for (var i = 0; i < item.secBonus.length; i += 2) {
            hero[item.secBonus[i]] += (+item.secBonus[i+1]);
        }
    }
    function removeBonus(hero, item) {
        for (var i = 0; i < item.bonus.length; i += 2) {
            hero[item.bonus[i]] -= +item.bonus[i+1];
        }
    }
    function removeSecBonus(hero, item) {
        for (var i = 0; i < item.secBonus.length; i += 2) {
            hero[item.secBonus[i]] -= +item.secBonus[i+1];
        }
    }

    function GetSlotNumb(hero, item, on) {
        //debugger;
        //console.log(swtichArmor(item));
        switch (item.type) {
            case "armor" : return swtichArmor(item);
            case "weapon" : return 5;
            case "shield"  : return 8;
            case "double-weapon" :
                if (!on && hero.equipment[8] && hero.equipment[8].title === hero.equipment[5].title) {
                    return 8;
                } else if (on && hero.equipment[5] && hero.equipment[5].title === item.title) {
                    return 8;
                } else {
                    return 5;
                }
                break;
        }
    }

    function swtichArmor(item) {
        switch (item.class) {
            case "helm" : return 0;
            case "chest" : return 1;
            case "pants" : return 3;
            case "boots" : return 4;
            case "gloves" : return 6;
        }
    }

    return {
        equip: equip,
        unequip: unequip,
        use: use,
        useBattleItem: useBattleItem
    }
});

/*switch (item.class) {
    case "helm" : return 0;
    case "chest" : return 1;
    case "belt" : return 2;
    case "pants" : return 3;
    case "boots" : return 4;
    case "weapon" : return 5;
    case "gloves" : return 6;
    case "mantle" : return 7;
    case "shield" : return 8;
    case "bracelet" : return 9;
    case "symbol" : return 10;
    case "ring" : return 11;
    case "secRing" : return 12;
    case "neckless" : return 13;
}*/
