var app = angular.module('app', ['ngResource', 'ngRoute',
    /*'ngCookies',
    'ngResource',
    'ngSanitize',*/
    'btford.socket-io',
    'ngAudio']).value('toastr', toastr);

app.config(function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);

    var routeUserChecks = {
        adminRole: {
            authenticate: function(auth) {
                return auth.isAuthorizedForRole('admin');
            }
        },
        authenticated: {
            authenticate: function(auth) {
                return auth.isAuthenticated();
            }
        }
    };

    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/home',
            controller: 'MainCtrl'
        })
        .when('/hero', {
            templateUrl: '/partials/hero/hero-select',
            controller: 'heroSelectCtrl',
            resolve: routeUserChecks.authenticated

        })
        .when('/heroCreate', {
            templateUrl: '/partials/hero/heroCreate',
            controller: 'heroCreateCtrl',
            resolve: routeUserChecks.authenticated
        })
        .when('/map', {
            templateUrl: '/partials/map/map',
            controller: 'mapController',
            resolve: routeUserChecks.authenticated
        })
        .when('/battle', {
            templateUrl: '/partials/battle/battleMap',
            controller: 'batlleCtrl',
            resolve: routeUserChecks.authenticated
        })
        .when('/town',{
            templateUrl: '/partials/town/town',
            controller: 'townCtrl',
            resolve: routeUserChecks.authenticated
        })
        .when('/test', {
            templateUrl: '/partials/test/test',
            controller: 'testCtrl'
        })
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'SignUpCtrl'
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'ProfileCtrl',
            resolve: routeUserChecks.authenticated
        })
        .when('/admin/users', {
            templateUrl: '/partials/admin/users-list',
            controller: 'UserListCtrl',
            resolve: routeUserChecks.adminRole
        })
        .when('/admin', {
            templateUrl: '/partials/admin/test',
            controller: 'TestCtrl',
            resolve: routeUserChecks.adminRole
        })
});

app.value('messageFormatter', function(date, nick, message) {
    return date.toLocaleTimeString() + ' - ' +
        nick + ' - ' +
        message + '\n';
});

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
});