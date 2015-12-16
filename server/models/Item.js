var mongoose = require('mongoose');

var itemScheman = mongoose.Schema({
    title: String,
    pic: String,
    type: String,
    weight: Number,
    bonus: [String]
});

var Item = mongoose.model('Item', itemScheman);

module.exports.seedInitialCourses = function() {
    Course.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find courses: ' + err);
            return;
        }

        if (collection.length === 0) {
            Item.create({title:"Stick", type: 'Weapon',weight:'1', bonus:['DMmin+1']});

            console.log('Seed Items Added...');
        }
    });
};
