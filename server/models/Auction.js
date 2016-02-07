var mongoose = require('mongoose');

var AuctionSchema = mongoose.Schema({
    type: String,
    owner: String,
    price: Number,
    item: Object,
    expDate: String
});

var Auction = mongoose.model('Auction', AuctionSchema);

module.exports.seedAuctions = function() {
    Auction.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find items: ' + err);
            return;
        }
        if(collection.length === 0) {
            Auction.create({type:"Armor",owner:"test", price: 10, expDate:"12/3", item: {title: 'Working Gloves', type: 'armor', weight:'1',class:'gloves', bonus:['df','1'],price:200, pic: '/pictures/items/Working Gloves.png'}});
            Auction.create({type:"Armor",owner:"Arelam", price: 990, expDate:"12/3", item: {title: 'Working Gloves', type: 'armor', weight:'1',class:'gloves', bonus:['df','1'],price:200, pic: '/pictures/items/Working Gloves.png'}});
            console.log("test Auction added")
        }
    })
}
