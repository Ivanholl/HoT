app.controller('heroCreateCtrl', function($scope, $q, HeroResource){
    $scope.select = function(event){
        var selected = event.target
        $('.raceOption').removeClass('selectedRace')
        $(selected).addClass('selectedRace')
    }
    $scope.create = function(){
        var hero = { "name":'asd'}
        console.log("create new")
        createHero(hero)
    }

    function createHero(hero) {
        var deferred = $q.defer();

        var hero = new HeroResource(hero);
        hero.$save().then(function() {
            deferred.resolve();
        }, function(response) {
            deferred.reject(response);
        });

        return deferred.promise;
     }
})