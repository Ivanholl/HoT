app.controller('heroSelectCtrl', function($scope, $route, identity, Hero, notifier, HeroResource){
    var slotOne = identity.currentUser.heroList[0]
    $scope.user = identity.currentUser;
    $scope.create = true;
    $scope.chooseDelete = false;
    $scope.show = true;
    $scope.heroOne = HeroResource.getHeroByName(slotOne);
    /*(function(){
        var slotOne = identity.currentUser.heroList[0];
        $scope.heroOne = HeroResource.getHeroByName(slotOne);

    })();*/

    $scope.createHero = function(){
        $scope.show = !$scope.show
        window.location.href = '#/heroCreate';
    };

    $scope.createNewHero = function(hero){
        heroCreate.createNewHero(hero, identity.currentUser).then(function() {
            notifier.success('Hero Created!');
        });
        window.location.href = '#/map';
    };

    $scope.del = function(name){
        var r = confirm("Are you sure you want to delete your hero?");
        if (r == true) {
            HeroResource.deleteHeroByName(name)
            $route.reload();
            //location.reload()
            var slotOne = identity.currentUser.heroList[0];
            $scope.heroOne = HeroResource.getHeroByName(slotOne);
        }
    };

    $scope.chooseHero = function(hero){

        window.location.href = '#/map'
    };

    if (!slotOne || slotOne === "") {
        $scope.create = !$scope.create;
        $scope.chooseDelete = !$scope.chooseDelete;
    }
});