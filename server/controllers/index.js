var usersController = require('../controllers/usersController'),
    minionController = require('../controllers/minionController'),
    itemController = require('../controllers/itemsController'),
    heroController = require('../controllers/heroController'),
    zoneController = require('../controllers/zoneController');

module.exports = {
    hero: heroController,
    users: usersController,
    minions: minionController,
    items: itemController,
    zones: zoneController
};