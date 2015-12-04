app.controller('CoursesListCtrl', function($scope, cachedCourses) {
    $scope.courses = cachedCourses.query();
    console.log($scope.courses)
});