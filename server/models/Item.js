var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    title: String,
    type: String,
    weight: Number,
    bonus: [String],
    price: Number,
    class: String,
    pic: String,
    rarity: String,  //common<rare<epic<legendary,setItem,unique,quest
    stackable: String, //"yes" / "no"
    quantity: Number
});

var Item = mongoose.model('Item', itemSchema);

module.exports.seedInitialItems = function() {
    //Item.remove({})
    Item.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find items: ' + err);
            return;
        }
       /* if(collection.length !== 0){
            Item.remove({}, function(){console.log("itemes removed")})
        } */

        if (collection.length === 0) {
    //helms
            Item.create({title:"Simple Helm",rarity:'common', type: 'armor', weight:'1',class:'helm', bonus:['df','1'],price:130, pic: "/pictures/items/SimpleHelm.jpg"});
            Item.create({title:"Horn Helm",rarity:'common', type: 'armor', weight:'3',class:'helm',  bonus:['df','3'],price:390, pic: "/pictures/items/HornHelm.png"});
            Item.create({title:"Nomad Helm",rarity:'common', type: 'armor', weight:'5',class:'helm',  bonus:['df','5'],price:650, pic: "/pictures/items/NomadHelm.png"});
    //chest
            Item.create({title:"Leather Armor", rarity:'common',type: 'armor', weight:'1',class:'chest', bonus:['df','1'],price:80, pic: "/pictures/items/LeatherArmor.png"});
            Item.create({title:"Chain Mail",rarity:'common', type: 'armor', weight:'3',class:'chest', bonus:['df','3'],price:240, pic: "/pictures/items/itemDark.jpg"});
            Item.create({title:"Plate Mail", rarity:'common',type: 'armor', weight:'5',class:'chest', bonus:['df','5'],price:400, pic: "/pictures/items/PlateMail.png"});
    //pants
            Item.create({title:"Leather Pants",rarity:'common', type: 'armor', weight:'1',class:'pants',  bonus:['df','1'],price:80, pic: "/pictures/items/LeatherPants.png"});
            Item.create({title:"Chain Mail Pants",rarity:'common', type: 'armor', weight:'3',class:'pants',  bonus:['df','3'],price:240, pic: "/pictures/items/itemDark.jpg"});
            Item.create({title:"Plate Mail Pants",rarity:'common' ,type: 'armor', weight:'5',class:'pants',  bonus:['df','5'],price:400, pic: "/pictures/items/PlateMailPants.png"});
    //boots
            Item.create({title:"Simple Sandals",rarity: 'common', type: 'armor', weight:'1',class:'boots',  bonus:['df','1'],price:120, pic: "/pictures/items/itemDark.jpg"});
            Item.create({title:"Leather Boots",rarity: 'common', type: 'armor', weight:'3',class:'boots',  bonus:['df','3'],price:360, pic: "/pictures/items/LeatherBoots.png"});
            Item.create({title:"Plate Boots",rarity: 'common', type: 'armor', weight:'5',class:'boots',  bonus:['df','5'],price:600, pic: "/pictures/items/itemDark.jpg"});
    //gloves
            Item.create({title:"Working Gloves",rarity: 'common', type: 'armor', weight:'1',class:'gloves',  bonus:['df','1'],price:200, pic: "/pictures/items/WorkingGloves.png"});
            Item.create({title:"Archer Gloves",rarity: 'common', type: 'armor', weight:'3', class:'gloves',  bonus:['df','3'],price:600, pic: "/pictures/items/ArcherGloves.png"});
            Item.create({title:"Leather Gloves",rarity: 'common', type: 'armor', weight:'5', class:'gloves',  bonus:['df','5'],price:1000, pic: "/pictures/items/itemDark.jpg"});
    //swords
            Item.create({title:"Wooden Sword", rarity: 'common',type: 'weapon', weight:'1', class:'sword',  bonus:['dm[1]','1'],price:70, pic: "/pictures/items/WoodenSword.png"});
            Item.create({title:"Basic Sword",rarity: 'common', type: 'weapon', weight:'2', class:'sword',  bonus:['dm[1]','2'],price:140, pic: "/pictures/items/BasicSword.png"});
    //axes
            Item.create({title:"Woodsman Axe",rarity: 'common', type: 'weapon', weight:'1', class:'axe',  bonus:['dm[1]','1'],price:71, pic: "/pictures/items/WoodsmanAxe.png"});
            Item.create({title:"War Axe",rarity: 'common', type: 'weapon', weight:'2',class:'axe',  bonus:['dm[1]','2'],price:135, pic: "/pictures/items/WarAxe.png"});
    //wands
            Item.create({title:"Simple Cane", rarity: 'common',type: 'weapon', weight:'1', class:'wand',  bonus:['dm[1]','1'],price:70, pic: "/pictures/items/SimpleCane.png"});
            Item.create({title:"Priest Rod", rarity: 'common', type: 'weapon', weight:'2', class:'wand',  bonus:['dm[1]','2'],price:144, pic: "/pictures/items/PriestRod.png"});
    //shields
            Item.create({title:"Piece of Wood", rarity: 'common' ,type: 'shield', weight:'2', class:'shield',  bonus:['df','1'],price:70, pic: "/pictures/items/itemDark.jpg"});
            Item.create({title:"Wooden Shield", rarity: 'common',type: 'shield', weight:'5', class:'shield',  bonus:['df','1','maxHp','5'],price:180, pic: "/pictures/items/WoodenShield.png"});
    //potions
            Item.create({title:"Small Health Potion",rarity: 'common', type: "consumable", quantity: 1, stackable:"yes", weight:0.5, class:"health potion", bonus:['hp','5'], price:25, pic:"/pictures/items/SmallHpPotion.jpg"});
            //Item.create({title:"Small Health Potion", type: 'potion', weight:'2', class:'shield',  bonus:['df','1'],price:70, pic: "/pictures/items/item.jpg"});

            console.log('Seed Items Added...');
        }
    });
};
