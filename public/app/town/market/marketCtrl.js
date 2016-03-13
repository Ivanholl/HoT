app.controller('marketCtrl', function($scope, Hero, AuctionResource) {
    $scope.hero = Hero.currentHero;
    $scope.class = false;
    $scope.auction = true;
    $scope.create = false;
    $scope.auctionItem = {};
    $scope.stop = false;
    $scope.inventory = $scope.hero.inventory;
    $scope.auctions = [];

    $scope.getAuctionsByType = function (type) {
        $scope.class = !$scope.class;
        $scope.stop = false;
        $scope.auctions = AuctionResource.getAuctionByType(type)
    };

    $scope.getAuctionsByOwner = function () {
        $scope.class = !$scope.class;
        $scope.stop = true;
        $scope.auctions = AuctionResource.getAuctionsByName($scope.hero.name)
    };

    $scope.chooseItem = function (item) {
        $scope.auctionItem = item
    };

    $scope.stopAuction = function (auction) {
        var index = $scope.auctions.indexOf(auction);
        var auctionToStop = $scope.auctions[index];
        $scope.auctions.splice(index, 1);
        $scope.hero.weight += (auctionToStop.item.weight * 1);

        if ($scope.hero.weight <= $scope.hero.str){
            $scope.hero.inventory.push(auctionToStop.item);
            Hero.updateHero($scope.hero)
            AuctionResource.stopAuction(auctionToStop._id)
        } else {
            $scope.weight -= auctionToStop.item.weight;
            alert('Inventory too heavy increase your Strength!')
        }
    };

    $scope.buyAuction = function(auction){
        if ($scope.hero.gold >= auction.price) {
            $scope.hero.weight += auction.item.weight * 1;

            if ($scope.hero.weight <= $scope.hero.str) {
                $scope.hero.gold -= auction.item.price;
                $scope.hero.inventory.push(auction.item);
                Hero.updateHero($scope.hero)
            } else {
                $scope.weight -= auction.item.weight;
                alert('Inventory too heavy increase your Strength!')
            }
        } else {
            alert('Not enough gold!!!')
        }
    };

    $scope.createAuction = function (price, days) {
        $scope.stop = true;
        var newAuction = {},
            item = $scope.auctionItem,
            index = $scope.inventory.indexOf(item),
            cost = (price * (1 / 100)) * days;

        newAuction.type = $scope.auctionItem.type;
        newAuction.owner = $scope.hero.name;
        newAuction.price = price;
        newAuction.days = days;
        newAuction.item = $scope.auctionItem;

        if ($scope.hero.gold >= cost) {
            $scope.hero.gold -= cost;

            if (index > -1) {
                $scope.inventory.splice(index, 1);
                $scope.hero.weight -= item.weight;
            }

            Hero.updateHero($scope.hero)
            AuctionResource.createAuction(newAuction)
        } else {
            alert('Not enough gold!!!')
        }
    }
});