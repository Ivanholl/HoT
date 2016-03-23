var Auction = require('mongoose').model('Auction');

function getCurDate(){
    var fullDate = new Date()
    return fullDate;
}

module.exports = {
    getAuctionsByType: function (req, res) {
        Auction.find({type: req.params.type}).exec(function (err, colection) {
            if (err) {
                console.log('Auctions could not be found: ' + err);
            }
            res.send(colection);
        });
    },
    getAuctionsByOwner: function (req, res) {
        Auction.find({owner: req.params.owner}).exec(function (err, colection) {
            if (err) {
                console.log('Auctions could not be found: ' + err);
            }
            res.send(colection);
        });
    },
    stopAuction: function (req, res) {
        Auction.remove({_id: req.params._id}).exec(function (err, auction) {
            if (err) console.log('Hero could not be loaded: ' + err);
            res.send(auction);
        });
    },
    createAuction: function (req, res) {
        var newAuction = req.body;
        newAuction.expDate = {
            day: getCurDate().getDate(),
            month: getCurDate().getMonth() + 1,
            year: getCurDate().getFullYear()
        };

        Auction.create(newAuction, function (err, auction) {
            if (err) console.log('Failed to create new auction: ' + err);
            res.send(auction);
        })
    }
};
