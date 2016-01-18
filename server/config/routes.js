var auth = require('./auth'),
    controllers = require('../controllers');

module.exports = function(app) {
    app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

    app.get('/api/minions', controllers.minions.getAllMinions);
    /*app.param('location', function(req, res, next, location){
        req.location = location;
        next();
    })*/
    app.get('/api/minions/:location', function(req, res){
        controllers.minions.getMinionsByLocation(req, res, req.params.location)
    });

    app.get('/api/items', controllers.items.getAllItems);
    app.get('/api/items/:type', controllers.items.getItemsByType);

    app.get('/partials/:partialArea/:partialName', function(req, res) {
        res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName)
    });
    app.get('/townPartials/:partialArea/:partialName', function (req, res) {
        res.render('../../public/app/town/' + req.params.partialArea + '/' + req.params.partialName)
    });
    app.get('api/hero/:heroName', controllers.heroes.getHeroByName)

    app.post('/login', auth.login);
    app.post('/logout', auth.logout);

    app.get('/api/*', function(req, res) {
        res.status(404);
        res.end();
    });

    app.get('*', function(req, res) {
        res.render('index', {currentUser: req.user});
    });
};