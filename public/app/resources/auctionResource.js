app.factory('AuctionResource', function($resource){
    var AuctionResource = $resource("/api/auctions/:type", {type: '@type'}),
        AuctionResourceCreate = $resource('api/createAuction', { create: {method: 'Post', isArray: false}}),
        AuctionResourceByOwner = $resource('/api/auctionsByOwner/:owner', {owner: '@owner'});

    return {
        getAuctionByType: function(type){
            return AuctionResource.query({type: type})
        },
        getAuctionsByName: function(name){
            return AuctionResourceByOwner.query({owner: name})
        },
        createAuction: function(auction){
            return AuctionResourceCreate.save(auction)
        }
    }
});