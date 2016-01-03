app.controller('libraryCtrl', function($scope, identity, updateHero){
    var oneHpPrice = 50,
        oneDmMinPrice = 75,
        oneDmMaxPrice = 75,
        oneDfPrice = 110,
        oneStrPrice = 120;

    $scope.hero = identity.currentUser.heroList[0];
    
    $scope.buyOneHp = function(){
        if ($scope.hero.ss >= oneHpPrice) {

            $scope.hero.maxHp++;
            $scope.hero.hp++;
            $scope.hero.ss -= oneHpPrice;

            updateHero.update($scope.hero, identity.currentUser);
        } else {
            alert('Not Enough Soul Stones!')
        }
    };

    $scope.buyOneDmMin = function(){
        if ($scope.hero.ss >= oneDmMinPrice) {
            if ($scope.hero.dm[0] < $scope.hero.dm[1]) {
                $scope.hero.dm[0]++;
                $scope.hero.ss -= oneDmMinPrice;

                updateHero.update($scope.hero, identity.currentUser);
            } else {
                alert('You cannot have more minimal Dm than maximal DM')
            }

        } else {
            alert('Not Enough Soul Stones!')
        }
    };

    $scope.buyOneDmMax = function(){
        if ($scope.hero.ss >= oneDmMaxPrice) {

            $scope.hero.dm[1]++;
            $scope.hero.ss -= oneDmMaxPrice;

            updateHero.update($scope.hero, identity.currentUser);
        } else {
            alert('Not Enough Soul Stones!')
        }
    };

    $scope.buyOneDf = function(){
        if ($scope.hero.ss >= oneDfPrice) {

            $scope.hero.df++;
            $scope.hero.ss -= oneDfPrice;

            updateHero.update($scope.hero, identity.currentUser);
        } else {
            alert('Not Enough Soul Stones!')
        }
    };

    $scope.buyOneStr = function(){
        if ($scope.hero.ss >= oneStrPrice) {

            $scope.hero.str++;
            $scope.hero.ss -= oneDfPrice;

            updateHero.update($scope.hero, identity.currentUser);
        } else {
            alert('Not Enough Soul Stones!')
        }
    }
});