app.controller('tavernCtrl', function ($scope, Hero, notifier, Quests) {
    $scope.hero = Hero.currentHero;

    $scope.talking = {
        quest: false,
        booze: false,
        sad: false
    };
    $scope.finishedQuest = false;
    $scope.questToReturn;

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
    $scope.returnQuest = function(){
        Quests.getQuestRewards($scope.questToReturn);
        checkToReturn();
    };

    function newQuest(questName){
        Quests.addQuestToHero(questName);
    }
    function falcify(array){
        for (key in array){
            array[key] = false;
        }
    }
    function checkToReturn(){
        var hasFinished = false;
        for(var i = 0; i < $scope.hero.quests.length; i++){
            if($scope.hero.quests[i].finished === true && $scope.hero.quests[i].rewardGiver === "Barman"){
                hasFinished = true;
                $scope.finishedQuest = true;
                $scope.questToReturn = i;
                break;
            }
        }
        if(!hasFinished){
            $scope.finishedQuest = false;
        }
    };

    checkToReturn();
   /*for (item in $scope.hero.inventory){
        if(item.title == "Bag of Gold"){
            $scope.bagQuest = true;
        }
    }*/
});
