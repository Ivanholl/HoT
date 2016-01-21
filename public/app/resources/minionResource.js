app.factory('MinionResource', function($resource) {
	var lastZoneRequest,
		minionsByZone,
		cashedAllMinions;

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	return {
		getAllMinions: function () {
			if (!cashedAllMinions) {
				cashedAllMinions = $resource('api/minions/:location').query();
			}

			return cashedAllMinions;
		},
		getMinionsByZone: function (zone, one) {
			var returnOne = one,
				rand = getRandomInt(0, 5);

			if (lastZoneRequest != zone || !minionsByZone) {
				var Minion = $resource('api/minions/:location', {location: '@location'}, {
					update: {
						method: 'GET',
						isArray: true
					}
				});
				lastZoneRequest = zone;
				minionsByZone = Minion.query({location: zone, isArray: true})
			}
			if (returnOne) {
				var minionToReturn = minionsByZone[rand];
				return minionsByZone[rand]
			} else {
				return minionsByZone;
			}
		}
	}
});
