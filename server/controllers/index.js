var usersController = require('../controllers/usersController'),
    minionController = require('../controllers/minionController'),
    itemController = require('../controllers/itemsController'),
    heroController = require('../controllers/heroController'),
    auctionController = require('../controllers/auctionController'),
    zoneController = require('../controllers/zoneController'),
    mailController = require('../controllers/mailController');

module.exports = {
    hero: heroController,
    users: usersController,
    minions: minionController,
    items: itemController,
    zones: zoneController,
    auction: auctionController,
    mail: mailController
};