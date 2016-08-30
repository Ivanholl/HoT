app.controller("questBookCtrl", function ($scope, Hero) {
    $scope.hero = Hero.currentHero;
    $scope.questBook = $scope.hero.quests;

    $(".dragable").draggable();        
});
