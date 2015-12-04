app.factory('MinionResource', function($resource) {
    var getMinions = $resource('/api/minions/:id');

    var asd =[];
    var minions = getMinions.query()).success()

    return asd;
});
