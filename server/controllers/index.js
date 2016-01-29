var usersController = require('../controllers/usersController'),
    minionController = require('../controllers/minionController'),
    itemController = require('../controllers/itemsController'),
    heroController = require('../controllers/heroController');

module.exports = {
    hero: heroController,
    users: usersController,
    minions: minionController,
    items: itemController
};