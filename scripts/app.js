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

  var routeLoadingIndicator = function($rootScope) {
    return {
      restrict: 'E',
      template: "<div class='col-lg-12' ng-if='isRouteLoading'><h1>Loading <i class='fa fa-cog fa-spin'></i></h1></div>",
      link: function(scope, elem, attrs) {
        scope.isRouteLoading = false;

        $rootScope.$on('$routeChangeStart', function() {
          scope.isRouteLoading = true;
        });

        $rootScope.$on('$routeChangeSuccess', function() {
          scope.isRouteLoading = false;
        });
      }
    };
  };
  routeLoadingIndicator.$inject = ['$rootScope'];

  app.directive('routeLoadingIndicator', routeLoadingIndicator);