var auth = require('./auth'),
    controllers = require('../controllers');

module.exports = function(app) {
    app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

    app.get('/api/minions', controllers.minions.getAllMinions);
    app.get('/api/minions/:location', function (req, res) {
        controllers.minions.getMinionsByLocation(req, res, req.params.location)
    });
    app.get('/api/minion/:location', function (req, res) {
        controllers.minions.getMinionsByLocation(req, res, req.params.location, true)
    });

    app.get('/api/items', controllers.items.getAllItems);
    app.get('/api/items/:class', function (req, res) {
        controllers.items.getItemsByClass(req, res, req.params.class)
    });

    app.get('/partials/:partialArea/:partialName', function (req, res) {
        res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName)
    });
    app.get('/townPartials/:partialArea/:partialName', function (req, res) {
        res.render('../../public/app/town/' + req.params.partialArea + '/' + req.params.partialName)
    });

    app.get('/api/hero/:name', function (req, res) {
        controllers.hero.getHeroByName(req, res)
    });
    app.post('/api/createhero', function (req, res) {
        controllers.hero.createHero(req, res)
    });
    app.get('/api/delhero/:name', function (req, res) {
        controllers.hero.deleteHero(req, res)
    });
    app.get('/hero', controllers.hero.getHeroByName)

    app.get('/api/zone/:index', function (req, res) {
        controllers.zones.getZoneByIndex(req, res)
    });

    app.post('/login', auth.login);
    app.post('/logout', auth.logout);

    app.get('/api/*', function (req, res) {
        res.status(404);
        res.end();
    });

    app.get('*', function (req, res) {
        res.render('index', {currentUser: req.user, currentHero: req.hero});
    });

};