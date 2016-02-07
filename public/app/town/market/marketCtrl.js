app.controller('marketCtrl', function($scope, Hero, AuctionResource){
    $scope.hero = Hero.currentHero;
    $scope.class = false;
    $scope.auction = true;
    $scope.create = false;
    $scope.auctionItem = {};
    $scope.inventory = $scope.hero.inventory;

    $scope.getAuctionsByType = function(type){
        $scope.class = !$scope.class;
        $scope.auctions = AuctionResource.getAuctionByType(type)
    };

    $scope.getAuctionsByOwner = function(){
        $scope.class = !$scope.class;
        $scope.auctions = AuctionResource.getAuctionsByName($scope.hero.name)
    };

    $scope.chooseItem = function(item){
        $scope.auctionItem = item
    };

    $scope.createAuction = function(price, days){
        var newAuction = {};
        newAuction.type = $scope.auctionItem.type;
        newAuction.owner = $scope.hero.name;
        newAuction.price = price;
        newAuction.item = $scope.auctionItem;

        AuctionResource.createAuction(newAuction)
    }
});