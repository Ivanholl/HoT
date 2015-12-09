var app = angular.module('app', ['ngResource', 'ngRoute']).value('toastr', toastr);

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
        .when('/courses', {
            templateUrl: '/partials/courses/courses-list',
            controller: 'CoursesListCtrl'
        })
        .when('/courses/:id', {
            templateUrl: '/partials/courses/course-details',
            controller: 'CourseDetailsCtrl'
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
});

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
});