var usersController = require('../controllers/usersController'),
    coursesController = require('../controllers/coursesController'),
    minionController = require('../controllers/minionController');

module.exports = {
    users: usersController,
    courses: coursesController,
    minions: minionController
}