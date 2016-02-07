var Auction = require('mongoose').model('Auction');

module.exports = {
    getAuctionsByType: function (req, res) {
        Auction.find({type: req.params.type}).exec(function (err, colection) {
            if (err) {
                console.log('Auctions could not be found: ' + err);
            }
            res.send(colection);
        })
    },
    getAuctionsByOwner: function (req, res) {
        Auction.find({owner: req.params.owner}).exec(function (err, colection) {
            if (err) {
                console.log('Auctions could not be found: ' + err);
            }
            res.send(colection);
        })
    },
    createAuction: function(req,res){
        var newAuction = req.body;
        newAuction.expDate = new Date().toJSON().slice(2,10);

        Auction.create(newAuction, function(err, auction) {
            if (err) console.log('Failed to create new hero: ' + err);
            res.send(auction);
        })
    }
};