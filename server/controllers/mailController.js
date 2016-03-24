var Mail = require('mongoose').model('Mail'),
    Hero = require('mongoose').model('Hero');

module.exports = {
    getMailByOwner: function (req, res) {
        Mail.find({to: req.params.to}).exec(function (err, colection) {
            if (err) {
                console.log('Mails could not be found: ' + err);
            }
            res.send(colection);
        });
    },
    sendMail: function (req, res) {
        var newMail = req.body,
            reciever;

        Hero.findOne({name: newMail.to}).exec(function (err, hero) {
            if (err) {
                console.log('Hero could not be found to send him mail: ' + err);
            }
            if (hero) {
                hero.newMail = true;
                Hero.update({name: hero.name}, hero).exec(function(err, hero){});
                Mail.create(newMail, function (err, mail) {
                    if (err) console.log('Failed to create new auction: ' + err);
                    res.send(mail);
                });
            }
        });
    },
    updateMail: function (req, res) {
        Mail.update({id: req.body.id}, req.body).exec(function(err, mail) {
            res.end();
        });
    }
};
