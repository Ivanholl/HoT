var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    title: String,
    type: String,
    weight: Number,
    bonus: [String],
    price: Number,
    class: String,
    pic: String,
    rarity: String,
    stackable: String //"yes" / "no"
});

var Item = mongoose.model('Item', itemSchema);

module.exports.seedInitialItems = function() {
    //Item.remove({})
    Item.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find items: ' + err);
            return;
        }
        
        if(collection.length !== 0){
            Item.remove({}, function(){console.log("itemes removed")})
        }
        
        if (collection.length === 0) {
    //helms
            Item.create({title:"Simple Helm", type: 'armor', weight:'1',class:'helm', bonus:['df','1'],price:130, pic: "/pictures/items/Simple Helm.jpg"});
            Item.create({title:"Horn Helm", type: 'armor', weight:'3',class:'helm',  bonus:['df','3'],price:390, pic: "/pictures/items/Horn Helm.png"});
            Item.create({title:"Nomad Helm", type: 'armor', weight:'5',class:'helm',  bonus:['df','5'],price:650, pic: "/pictures/items/Nomad Helm.png"});
    //chest
            Item.create({title:"Leather Armor", type: 'armor', weight:'1',class:'chest',  bonus:['df','1'],price:80, pic: "/pictures/items/Leather Armor.png"});
            Item.create({title:"Chain Mail", type: 'armor', weight:'3',class:'chest',  bonus:['df','3'],price:240, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Plate Mail", type: 'armor', weight:'5',class:'chest',  bonus:['df','5'],price:400, pic: "/pictures/items/Plate Mail.png"});
    //pants
            Item.create({title:"Leather Pants", type: 'armor', weight:'1',class:'pants',  bonus:['df','1'],price:80, pic: "/pictures/items/Leather Pants.png"});
            Item.create({title:"Chain Mail Pants", type: 'armor', weight:'3',class:'pants',  bonus:['df','3'],price:240, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Plate Mail Pants", type: 'armor', weight:'5',class:'pants',  bonus:['df','5'],price:400, pic: "/pictures/items/Plate Mail Pants.png"});
    //boots
            Item.create({title:"Simple Sandals", type: 'armor', weight:'1',class:'boots',  bonus:['df','1'],price:120, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Leather Boots", type: 'armor', weight:'3',class:'boots',  bonus:['df','3'],price:360, pic: "/pictures/items/Leather Boots.png"});
            Item.create({title:"Plate Boots", type: 'armor', weight:'5',class:'boots',  bonus:['df','5'],price:600, pic: "/pictures/items/item.jpg"});
    //gloves
            Item.create({title:"Working Gloves", type: 'armor', weight:'1',class:'gloves',  bonus:['df','1'],price:200, pic: "/pictures/items/Working Gloves.png"});
            Item.create({title:"Archer Gloves", type: 'armor', weight:'3',class:'gloves',  bonus:['df','3'],price:600, pic: "/pictures/items/Archer Gloves.png"});
            Item.create({title:"Leather Gloves", type: 'armor', weight:'5',class:'gloves',  bonus:['df','5'],price:1000, pic: "/pictures/items/item.jpg"});
    //swords
            Item.create({title:"Wooden Sword", type: 'weapon', weight:'1',class:'sword',  bonus:['dm[1]','1'],price:70, pic: "/pictures/items/Wooden Sword.png"});
            Item.create({title:"Basic Sword", type: 'weapon', weight:'2',class:'sword',  bonus:['dm[1]','2'],price:140, pic: "/pictures/items/Basic Sword.png"});
    //axes
            Item.create({title:"Woodsman Axe", type: 'weapon', weight:'1',class:'axe',  bonus:['dm[1]','1'],price:71, pic: "/pictures/items/Woodsman Axe.png"});
            Item.create({title:"War Axe", type: 'weapon', weight:'2',class:'axe',  bonus:['dm[1]','2'],price:135, pic: "/pictures/items/War Axe.png"});
    //wands
            Item.create({title:"Simple Cane", type: 'weapon', weight:'1',class:'wand',  bonus:['dm[1]','1'],price:70, pic: "/pictures/items/Simple Cane.png"});
            Item.create({title:"Priest Rod", type: 'weapon', weight:'2',class:'wand',  bonus:['dm[1]','2'],price:144, pic: "/pictures/items/Priest Rod.png"});
    //shields
            Item.create({title:"Piece of Wood", type: 'shield', weight:'2', class:'shield',  bonus:['df','1'],price:70, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Wooden Shield", type: 'shield', weight:'5', class:'shield',  bonus:['df','1','maxHp','5'],price:180, pic: "/pictures/items/Wooden Shield.png"});
    //potions
            Item.create({title:"Small Health Potion", type: "consumable", stackable:"yes", weight:"1", class:"health potion", bonus:['5 HP','restores'], price:25, pic:"/pictures/items/Small Hp Potion.jpg"});
            //Item.create({title:"Small Health Potion", type: 'potion', weight:'2', class:'shield',  bonus:['df','1'],price:70, pic: "/pictures/items/item.jpg"});

            console.log('Seed Items Added...');
        }
    });
};
