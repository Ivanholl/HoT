var Quest = require('mongoose').model('Quest');

module.exports = {
    getQuestByName: function (req, res) {
        Quest.findOne({name: req.params.name}).exec(function (err, quest) {
            if (err) {
                console.log('Zone could not be found: ' + err);
            }
            res.send(quest);
        })
    }
};