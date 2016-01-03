app.factory('MinionResource', function($resource) {
	var cachedMinions;

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	return {
		query: function() {
			if (!cachedMinions) {
				cachedMinions = $resource('api/minions/:location').query();
			}

			return cachedMinions;
		},
		getMinionsByZone: function(zone, one){
			var minionsByZone = [],
				returnOne = one || false,
				rand = getRandomInt(0, 5);

			$resource('api/minions/:location').query(function (response) {
				angular.forEach(response, function (item) {
					if (item.location == zone) {
						minionsByZone.push(item);
					}
				});
				if(returnOne){
					minionsByZone.unshift(minionsByZone[rand]); //pushes element in index 0
					minionsByZone.length = 1;
				}
			});
			return minionsByZone;
		}
	}
});
