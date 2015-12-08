app.factory('updateHero', function($http, $q, identity, UsersResource) {
    return {
        update: function (hero, user) {
            var deferred = $q.defer();

            var updatedUser = new UsersResource(user);
            updatedUser._id = identity.currentUser._id;
            updatedUser.heroList[0] = hero;

            updatedUser.$update().then(function() {
                identity.currentUser.heroList[0] = hero;
                deferred.resolve();
            }, function(response) {
                deferred.reject(response);
            });

            return deferred.promise;
        }
    }
});