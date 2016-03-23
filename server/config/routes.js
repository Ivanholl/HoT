var auth = require('./auth'),
    controllers = require('../controllers'),
    passport = require('passport');

module.exports = function(app) {
    app.get('/partials/:partialArea/:partialName', function (req, res) {
        res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName);
    });
    app.get('/townPartials/:partialArea/:partialName', function (req, res) {
        res.render('../../public/app/town/' + req.params.partialArea + '/' + req.params.partialName);
    });

    app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

    app.get('/auth/facebook/token', function(req, res, next) {auth.facebook(req, res, next)});

    app.get('/auth/facebook/callback' ,
        passport.authenticate('facebook', {
           // failureRedirect: '/login'
        }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/');
        }
);

    app.get('/api/minions', controllers.minions.getAllMinions);
    app.get('/api/minions/:location', function (req, res) {controllers.minions.getMinionsByLocation(req, res)});
    app.get('/api/minion/:location', function (req, res) { controllers.minions.getMinionsByLocation(req, res, true)});

    app.get('/api/items', controllers.items.getAllItems);
    app.get('/api/items/:class', function (req, res) {controllers.items.getItemsByClass(req, res, req.params.class)});

    app.get('/api/hero/:name', function (req, res) {controllers.hero.getHeroByName(req, res)});
    app.post('/api/hero/:name', function (req, res) {controllers.hero.updateHero(req, res)});
    app.post('/api/createhero', function (req, res) {controllers.hero.createHero(req, res)});
    app.get('/api/delhero/:name', function (req, res) {controllers.hero.deleteHero(req, res)});
    app.get('/hero', controllers.hero.getHeroByName);

    app.get('/api/zone/:index', function (req, res) {controllers.zones.getZoneByIndex(req, res)});

    app.get('/api/auctions/:type', function(req, res){controllers.auction.getAuctionsByType(req,res)});
    app.get('/api/auctionsByOwner/:owner', function(req, res){controllers.auction.getAuctionsByOwner(req,res)});
    app.post('/api/createAuction', function(req,res){controllers.auction.createAuction(req,res)});
    app.post('/api/stopAuction/:_id', function(req,res){controllers.auction.stopAuction(req,res)});

    app.get('/api/mail/:to', function(req,res){controllers.mail.getMailByOwner(req,res)});
    app.post('/api/sendmail', function(req,res){controllers.mail.sendMail(req,res)});
    app.post('/api/updateMail', function(req,res){controllers.mail.updateMail(req,res)});

    app.post('/login', auth.login);
    app.post('/logout', auth.logout);
    app.get('/api/*', function (req, res) {res.status(404);res.end();});

    app.get('*', function (req, res) {
        res.render('index', {currentUser: req.user/*, currentHero: req.hero*/});
    });


};
