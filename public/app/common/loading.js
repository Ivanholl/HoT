var routeLoadingIndicator = function($rootScope) {

    return {
        restrict: 'E',
        template: "<div class='col-lg-12' ng-if='isRouteLoading'><div class='loader'>Loading...</div></div>",
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
