app.service("Quests", function (Hero, QuestResource, notifier) {
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

        if(quest.progress >= quest.needed) {
            if(quest.type == "gather"){
                var index = hero.inventory.map(function(e) { return e.title; }).indexOf(quest.neededItem);
                if(index > 0) {
                    hero.inventory.splice(index, 1);
                }
            }
            if(quest.autoReward){
                getQuestRewards(questNo)
            } else {
                hero.quests[questNo].finished = true;
                Hero.updateHero(hero);
                notifier.success("FINISHED QUEST");
            }
        }
    }
    function getQuestRewards(questNo){
        var rewards = hero.quests[questNo].rewards;
        for (var i = 0; i < rewards.length; i += 2) {
            hero[rewards[i]] += (+rewards[i+1]);
        }
        hero.quests.splice(questNo, 1);
        Hero.updateHero(hero);
    }
    function checkHeroKillQuests(){
        for(var i = 0; i < hero.quests.length; i++){
            if(hero.quests[i].type == "kill") {
                updateKillQuest(i);
            }
        }
    }
    function checkHeroGatherQuests(item) {
        for(var i = 0; i < hero.quests.length; i++){
            if(hero.quests[i].type == "gather") {
                if(item.title == hero.quests[i].neededItem && hero.quests[i].progress < hero.quests[i].needed){
                    updategatherQuest(i);
                }
            }
        }
    }
    function addQuestToHero(name) {
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
    return {
        checkHeroKillQuests: checkHeroKillQuests,
        checkHeroGatherQuests: checkHeroGatherQuests,
        addQuestToHero: addQuestToHero,
        getQuestRewards: getQuestRewards
    }
});
