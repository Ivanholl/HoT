app.controller('libraryCtrl', function($scope, Hero){
    var ap = $scope.hero.ap;
    $scope.oneHpPrice = Math.floor(50 + 50*(ap / 100));
    $scope.oneDmMinPrice = Math.floor(75 + 75*(ap / 100));
    $scope.oneDmMaxPrice = Math.floor(75 + 75*(ap / 100));
    $scope.oneDfPrice = Math.floor(110 + 110*(ap / 100));
    $scope.oneStrPrice = Math.floor(120 + 120*(ap / 100));

    function getPrices(){
        ap = $scope.hero.ap;
        $scope.oneHpPrice = Math.floor(50 + 50*(ap / 100));
        $scope.oneDmMinPrice = Math.floor(75 + 75*(ap / 100));
        $scope.oneDmMaxPrice = Math.floor(75 + 75*(ap / 100));
        $scope.oneDfPrice = Math.floor(110 + 110*(ap / 100));
        $scope.oneStrPrice = Math.floor(120 + 120*(ap / 100));
    }
    $scope.hero = Hero.currentHero;
    
    $scope.buyOneHp = function(){
        if ($scope.hero.ss >= $scope.oneHpPrice) {
            $scope.hero.maxHp++;
            $scope.hero.hp++;
            $scope.hero.ap++;
            $scope.hero.ss -= $scope.oneHpPrice;
            Hero.updateHero($scope.hero)
            getPrices()

        } else {
            alert('Not Enough Soul Stones!')
        }
    };

    $scope.buyOneDmMin = function(){
        if ($scope.hero.ss >= $scope.oneDmMinPrice) {
            if ($scope.hero.minDm < $scope.hero.maxDm) {
                $scope.hero.minDm++;
                $scope.hero.ap++;
                $scope.hero.ss -= $scope.oneDmMinPrice;
                Hero.updateHero($scope.hero)
                getPrices()
            } else {
                alert('You cannot have more minimal Dm than maximal DM')
            }

        } else {
            alert('Not Enough Soul Stones!')
        }
    };

    $scope.buyOneDmMax = function(){
        if ($scope.hero.ss >= $scope.oneDmMaxPrice) {
            $scope.hero.maxDm++;
            $scope.hero.ap++;
            $scope.hero.ss -= $scope.oneDmMaxPrice;
            Hero.updateHero($scope.hero);
            getPrices()
        } else {
            alert('Not Enough Soul Stones!')
        }
    };

    $scope.buyOneDf = function(){
        if ($scope.hero.ss >= $scope.oneDfPrice) {
            $scope.hero.df++;
            $scope.hero.ap++;
            $scope.hero.ss -= $scope.oneDfPrice;
            Hero.updateHero($scope.hero);
            getPrices()
        } else {
            alert('Not Enough Soul Stones!')
        }
    };

    $scope.buyOneStr = function(){
        if ($scope.hero.ss >= $scope.oneStrPrice) {
            $scope.hero.str++;
            $scope.hero.ap++;
            $scope.hero.ss -= $scope.oneDfPrice;
            Hero.updateHero($scope.hero);
            getPrices()
        } else {
            alert('Not Enough Soul Stones!')
        }
    }
});