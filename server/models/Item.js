var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    title: String,
    type: String,
    weight: Number,
    bonus: [String],
    price: Number,
    pic: String,
    rarity: String
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
        }*/
        
        if (collection.length === 0) {
    //helms
            Item.create({title:"Simple Helm", type: 'helm', weight:'1', bonus:['df','1'],price:130, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Horn Helm", type: 'helm', weight:'3', bonus:['df','3'],price:390, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Nomad Helm", type: 'helm', weight:'5', bonus:['df','5'],price:650, pic: "/pictures/items/item.jpg"});
    //chest
            Item.create({title:"Leather Armor", type: 'chest', weight:'1', bonus:['df','1'],price:80, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Chain Mail", type: 'chest', weight:'3', bonus:['df','3'],price:240, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Plate Mail", type: 'chest', weight:'5', bonus:['df','5'],price:400, pic: "/pictures/items/item.jpg"});
    //pants
            Item.create({title:"Leather Pants", type: 'pants', weight:'1', bonus:['df','1'],price:80, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Chain Mail Pants", type: 'pants', weight:'3', bonus:['df','3'],price:240, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Plate Mail Pants", type: 'pants', weight:'5', bonus:['df','5'],price:400, pic: "/pictures/items/item.jpg"});
    //boots
            Item.create({title:"Simple Sandals", type: 'boots', weight:'1', bonus:['df','1'],price:120, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Leather Boots", type: 'boots', weight:'3', bonus:['df','3'],price:360, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Plate Boots", type: 'boots', weight:'5', bonus:['df','5'],price:600, pic: "/pictures/items/item.jpg"});
    //gloves
            Item.create({title:"Working Gloves", type: 'gloves', weight:'1', bonus:['df','1'],price:200, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Simple Gloves", type: 'gloves', weight:'3', bonus:['df','3'],price:600, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Leather Gloves", type: 'gloves', weight:'5', bonus:['df','5'],price:1000, pic: "/pictures/items/item.jpg"});
    //swords
            Item.create({title:"Wooden Sword", type: 'weapon', weight:'1', bonus:['dm[1]','1'],price:70, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Basic Sword", type: 'weapon', weight:'2', bonus:['dm[1]','2'],price:140, pic: "/pictures/items/item.jpg"});
    //axes
            Item.create({title:"Woodsman Axe", type: 'weapon', weight:'1', bonus:['dm[1]','1'],price:71, pic: "/pictures/items/item.jpg"});
            Item.create({title:"War Axe", type: 'weapon', weight:'2', bonus:['dm[1]','2'],price:135, pic: "/pictures/items/item.jpg"});
    //wands
            Item.create({title:"Simple Cane", type: 'weapon', weight:'1', bonus:['dm[1]','1'],price:70, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Priesst Rod", type: 'weapon', weight:'2', bonus:['dm[1]','2'],price:144, pic: "/pictures/items/item.jpg"});
    //shields
            Item.create({title:"Piece of Wood", type: 'shield', weight:'2', bonus:['df','1'],price:70, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Wooden Shield", type: 'shield', weight:'5', bonus:['df','1','maxHp','5'],price:180, pic: "/pictures/items/item.jpg"});

            console.log('Seed Items Added...');
        }
    });
};
