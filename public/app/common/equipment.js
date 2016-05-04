app.factory('equipment', function() {
    return {
        equip: function (hero, item) {
            var slot = GetSlotNumb(item);

            if (!hero.equipment[slot]) {
                hero.equipment[slot] = item;
                getBonus(hero, item);
            }
        },
        unequip: function (hero, item) {
            var slot = GetSlotNumb(item);

            if (hero.equipment[slot]) {
                removeBonus(hero, item);
                hero.equipment[slot] = null;
            }
        },
        use: function (hero, item) {
            getBonus(hero, item);
            if (item.quantity > 1) {
                item.quantity--;
                hero.weight -= item.weight;
            } else {
                var btlIndex = hero.battleItems.indexOf(item);
                hero.battleItems.splice(btlIndex, 1);
                hero.weight -= item.weight;
            }
        },
        useBattleItem: function (hero, item) {
            getBonus(hero, item);
            if (item.quantity > 1) {
                item.quantity--;
                hero.weight -= item.weight;
            } else {
                var btlIndex = hero.battleItems.indexOf(item);
                hero.battleItems.splice(btlIndex, 1);
                hero.weight -= item.weight;
            }
        },
        getBonus: function (hero, bonus) {
            for (var i = 0; i < bonus.length; i += 2) {
                hero[bonus[i]] += (+bonus[i+1]);
            }
        }
    };
    function getBonus(hero, item) {
        for (var i = 0; i < item.bonus.length; i += 2) {
            hero[item.bonus[i]] += (+item.bonus[i+1]);
            //eval("hero." + eval("item.bonus[i]") + "+=" + eval("item.bonus[i+1]"))
        }
    }

    function removeBonus(hero, item) {
        for (var i = 0; i < item.bonus.length; i += 2) {
            hero[item.bonus[i]] -= +item.bonus[i+1];
            //eval("hero." + eval("item.bonus[i]") + "-=" + eval("item.bonus[i+1]"))
        }
    }

    function GetSlotNumb(item) {
        console.log(swtichArmor(item));
        switch (item.type) {
            case "armor" : return swtichArmor(item);
            case "weapon" : return 5;
            case "shield"  : return 8;
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
