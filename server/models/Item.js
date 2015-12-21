var mongoose = require('mongoose');

var itemScheman = mongoose.Schema({
    title: String,
    pic: String,
    type: String,
    weight: Number,
    bonus: [String],
    getBonus: Object
});

var Item = mongoose.model('Item', itemScheman);

module.exports.seedInitialCourses = function() {
    Item.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find courses: ' + err);
            return;
        }

        if (collection.length === 0) {
            Item.create({title:"Stick", type: 'Weapon',weight:'1',  bonus:['DMmin+1'], pic: "/pictures/items/item.jpg"});

            console.log('Seed Items Added...');
        }
    });
};
