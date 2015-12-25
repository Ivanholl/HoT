var usersController = require('../controllers/usersController'),
    minionController = require('../controllers/minionController'),
    itemController = require('../controllers/itemsController');

module.exports = {
    users: usersController,
    minions: minionController,
    items: itemController
}