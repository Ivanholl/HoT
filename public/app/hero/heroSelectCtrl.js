app.controller('heroSelectCtrl', function($scope, identity){
    $scope.user = {
        userName: identity.currentUser.username
    }
});