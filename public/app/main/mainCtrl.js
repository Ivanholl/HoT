app.controller('MainCtrl', function($scope, cachedCourses, identity) {
    $scope.identity = identity;
    $scope.courses = cachedCourses.query();
});