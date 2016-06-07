app.controller('tavernCtrl', function ($scope, Hero, notifier, Quests) {
    $scope.hero = Hero.currentHero;

    $scope.talking = {
        quest: false,
        booze: false,
        sad: false
    };

    $scope.speak = function (about) {
        switch (about) {
            case "booze":
                falcify($scope.talking);
                $scope.talking.booze = true;
                break;
            case "quest":
                falcify($scope.talking);
                $scope.talking.quest = true;
                newQuest("Slay 5 minions");
                break;
            case "sad":
                falcify($scope.talking);
                $scope.talking.sad = true;
                newQuest("The lost Bag");
                Quests.checkHeroGatherQuests("Bag of Gold");
                break;
            default: break;
        }
    };
    function newQuest(questName){
        Quests.addQuestToHero(questName);
    }
    function falcify(array){
        for (key in array){
            array[key] = false;
        }
    }

   /*for (item in $scope.hero.inventory){
        if(item.title == "Bag of Gold"){
            $scope.bagQuest = true;
        }
    }*/
});