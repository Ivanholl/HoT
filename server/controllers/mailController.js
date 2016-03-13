var Mail = require('mongoose').model('Mail');

module.exports = {
    getMailByOwner: function (req, res) {
        Mail.find({to: req.params.to}).exec(function (err, colection) {
            if (err) {
                console.log('Mails could not be found: ' + err);
            }
            res.send(colection);
        })
    }
};