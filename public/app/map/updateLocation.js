app.factory('updateLocation', function($http, $q, identity, UsersResource){
    return {
        updateLocation: function (newLocation) {
            var deferred = $q.defer();

            var updatedUser = new UsersResource(identity.currentUser);
            updatedUser._id = identity.currentUser._id;
            updatedUser.heroList[0].location = newLocation;

            updatedUser.$update().then(function () {
                identity.currentUser.heroList[0].location = newLocation;
                deferred.resolve();

            },function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        }
    }
});