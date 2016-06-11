var mongoose = require('mongoose');

var QuestSchema = mongoose.Schema({
    name: String,
    type: String, //"kill", "gather"
    repeatable: Boolean,
    progress: Number,
    needed: Number,
    neededItem: String,
    questGiver: String,
    story: String,
    finished: Boolean,
    autoReward: Boolean,
    rewardLocation: String,
    rewards: [] //'gold','value','ss','value'
});

var Quest = mongoose.model('Quest', QuestSchema);

module.exports.seedQuests = function() {
    Quest.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Cannot find quests: ' + err);
            return;
        }

        if (collection.length === 0) {
            Quest.create({
                name: "Slay 5 minions",
                type: "kill",
                repeatable: true,
                progress: 0,
                needed: 5,
                neededItem: "",
                questGiver: "Barman",
                story: "In order to work together you need to prove yourself!",
                finished: false,
                autoReward: false,
                rewardGiver: "Barman",
                rewards: ['gold','30','ss','10']
            });
            Quest.create({
                name: "The lost Bag",
                type: "gather",
                repeatable: true,
                progress: 0,
                needed: 1,
                neededItem: "Bag of Gold",
                questGiver: "Barman",
                story: "The Barman lost his bag. He didn't mention what was inside the bag, but he promised a good reward for returning it. Yet it's a bag of gold and I can't get a decision...",
                finished: false,
                autoReward: false,
                rewardGiver: "Barman",
                rewards: ['gold','0','ss','60']
            });
            console.log('Quests added to database...')
        }
    });
};