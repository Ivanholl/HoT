app.controller('heroCreateCtrl', function($scope, $q, Hero, HeroResource){
    var hero = {};

    $scope.select = function(event){
        var selected = event.target
        $('.raceOption').removeClass('selectedRace');
        $('.raceOption').find('.raceInfo').addClass('hidden');
        $(selected).find('.raceInfo').removeClass('hidden');
        $(selected).addClass('selectedRace')

    };
    $scope.choose = function(race){
        hero.race = race;

        $('.raceOption').addClass('hidden');
        $('.chooseName').removeClass('hidden');
        $('.chooseName').addClass(race)
    };

    $scope.create = function(name){
        hero.name = name;
        HeroResource.createHero(hero);
        window.location.href = '#/hero';
    }

    $scope.humanInfo = "The most adaptive race of all and maybe the youngest of all races makes them best for beginners.";
    $scope.orcInfo = "As young race as the humans, they are forged in battle with one another and other races, relying on their brutal strength in battles.";
    $scope.elfInfo =  "The oldest of all races, they have no interest in wars if no one bothers their forests. They rely on magic in battle.";
    $scope.dwarfInfo = "One introvert race, they don't have any interest in battle only in gold mines. Their adventurous spirit and human likeness makes them defessive.";
    $scope.undeadInfo = "As the youngest race of them all they struggle to find their place in the world. After a massive earthquake that killed thousands, a great magic emerged and brought dead bodies to life"

});