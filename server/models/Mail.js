var mongoose = require('mongoose');

var MailSchema = mongoose.Schema({
    title: String,
    from: String,
    to: String,
    items: [],
    message: String,
    read: Boolean,
    date: String
});

var Mail = mongoose.model('Mail', MailSchema);

module.exports.seedMail = function() {
    Mail.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Cannot find mails: ' + err);
            return;
        }

        if (collection.length === 0) {
            Mail.create({title: "Welcome", from: "HoT Team", to:"Arelam", items:[], message:"Welcome to Heroes Of Trebichnenburg", read:false, date: '16-02-2016'});
            console.log('Test Mail added to databse...')
        }
    });
};