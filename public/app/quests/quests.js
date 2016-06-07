app.factory("Quests", function (Hero, equipment, QuestResource, notifier) {
    var hero = Hero.currentHero;

    function updateKillQuest(questNo){
        hero.quests[questNo].progress++;
        checkFinished(questNo);
        Hero.updateHero(hero);
    }

    function updategatherQuest(questNo){
        hero.quests[questNo].progress++;
        checkFinished(questNo);
        Hero.updateHero(hero);
    }

    function checkFinished(questNo) {
        var quest = hero.quests[questNo];

        if(quest.progress >= quest.needed){
            equipment.getBonus(hero, hero.quests[questNo].rewards);
            hero.quests.splice(questNo, 1);

            if(quest.type == "gather"){
                var index = hero.inventory.map(function(e) { return e.title; }).indexOf(quest.neededItem);
                console.log(index);
                console.log(hero.inventory[index]);
                if(index > 0) {
                    hero.inventory.splice(index, 1);
                }
            }
            Hero.updateHero(hero);
            notifier.success("FINISHED QUEST");
        }
    }

    return {
        checkHeroKillQuests: function (){
            for(var i = 0; i < hero.quests.length; i++){
                if(hero.quests[i].type == "kill") {
                    updateKillQuest(i);
                }
            }
        },
        checkHeroGatherQuests: function (item) {
            for(var i = 0; i < hero.quests.length; i++){
                if(hero.quests[i].type == "gather") {
                    if(item.title == hero.quests[i].neededItem){
                        updategatherQuest(i)
                    }
                }
            }
        },
        addQuestToHero: function (name) {
            var hasThisQuest = false;
            for(var i = 0; i < hero.quests.length; i++){
                if(hero.quests[i].name == name) {
                    hasThisQuest = true;
                }
            }

            if(!hasThisQuest) {
                var questToAdd = QuestResource.getQuestByName(name);

                questToAdd.$promise.then(function (result) {
                    hero.quests.push(result)
                    Hero.updateHero(hero);
                    notifier.success("You have new Quest");
                })
            }
        }
    }
});