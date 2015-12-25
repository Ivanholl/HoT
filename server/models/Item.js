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
    Item.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find items: ' + err);
            return;
        }

        if (collection.length === 0) {
            Item.create({title:"Simple Helm", type: 'helm', weight:'1', bonus:['df','1'],price:130, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Horn Helm", type: 'helm', weight:'3', bonus:['df','3'],price:390, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Nomad Helm", type: 'helm', weight:'5', bonus:['df','5'],price:650, pic: "/pictures/items/item.jpg"});

            Item.create({title:"Leather Armor", type: 'chest', weight:'1', bonus:['df','1'],price:80, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Chain Mail", type: 'chest', weight:'3', bonus:['df','3'],price:240, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Plate Mail", type: 'chest', weight:'5', bonus:['df','5'],price:400, pic: "/pictures/items/item.jpg"});

            Item.create({title:"Leather Pants", type: 'pants', weight:'1', bonus:['df','1'],price:80, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Chain Mail Pants", type: 'pants', weight:'3', bonus:['df','3'],price:240, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Plate Mail Pants", type: 'pants', weight:'5', bonus:['df','5'],price:400, pic: "/pictures/items/item.jpg"});

            Item.create({title:"Simple Sandals", type: 'boots', weight:'1', bonus:['df','1'],price:120, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Leather Boots", type: 'boots', weight:'3', bonus:['df','3'],price:360, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Plate Boots", type: 'boots', weight:'5', bonus:['df','5'],price:600, pic: "/pictures/items/item.jpg"});

            Item.create({title:"Simple Sandals", type: 'gloves', weight:'1', bonus:['df','1'],price:200, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Leather Boots", type: 'gloves', weight:'3', bonus:['df','3'],price:600, pic: "/pictures/items/item.jpg"});
            Item.create({title:"Plate Boots", type: 'gloves', weight:'5', bonus:['df','5'],price:1000, pic: "/pictures/items/item.jpg"});
            console.log('Seed Items Added...');
        }
    });
};
