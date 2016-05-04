app.factory("Quests", function (Hero, equipment) {
    var hero = Hero.currentHero;
    var quest = {
        name: "Slay 5 minions",
        type: "kill",
        progress: 0,
        needed: 5,
        questGiver: "Barman",
        story: "In order to work together you need to prove yourself!",
        rewards: ['gold','30','ss','10']
    };

    function updateKillQuest(questNo){
        hero.quests[questNo].progress++;
        checkFinished(questNo);
        Hero.updateHero(hero);
    }

    function checkFinished(questNo) {
        var quest = hero.quests[questNo];

        if(quest.progress >= quest.needed){
            equipment.getBonus(hero, hero.quests[questNo].rewards);
            hero.quests.splice(questNo, 1);
            console.log("FINISHED QUEST")
        }
    }

    return {
        checkHeroQuests: function (){
            for(var i = 0; i < hero.quests.length; i++){
                if(hero.quests[i].type == "kill") {
                    updateKillQuest(i);
                }
            }
        }
    }
});