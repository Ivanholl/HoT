var app = (function(){
    var Player = JSON.parse(localStorage.getItem('Player')),
        //zoneNumber = 0,
        app = angular.module("myApp", ['ngRoute']);

    app.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            redirectTo: '/home'
        })
        .when('/home', {
            templateUrl: 'views/home.html'
        })        
        .when('/map', {
            templateUrl: 'views/map.html',
            controller: 'mapController'
        })
        .when('/battle', {
            templateUrl: 'views/battle.html',
            controller: 'battleController'
        })
        .when('/CreateNewHero', {
            templateUrl: 'views/createHero.html',
            controller: 'createHero'
        })
        .when('/town', {
            templateUrl: 'views/town.html',
            controller: 'townController'
        })
        .when('/town/healer', {
            templateUrl: 'views/healer.html',
            controller: 'healerController'
        })
        .when('/tutorial', {
            templateUrl: 'views/battle.html',
            controller: 'tutorialController'
        })
        .when('/town/library', {
            templateUrl: 'views/library.html',
            controller: 'libraryController'            
        })
        .otherwise({
          redirectTo: '/'
        });
    });

    return app;
})()