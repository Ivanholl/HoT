app.factory('equipment', function(){
   return {
       equip: function(hero, item){
           var slot = GetSlotNumb(item);

           if(!hero.equipment[slot]){
               hero.equipment[slot] = item;
           }
       },
       unequip: function(hero, item){
           var slot = GetSlotNumb(item);

           if(slot){
               hero.equipment[slot] = null;
           }
       }
   };
    function getBonus(hero, item){
        //hero.
    };

    function GetSlotNumb(item){
        switch (item.type){
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
        }
    }
});