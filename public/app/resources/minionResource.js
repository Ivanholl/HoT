app.factory('MinionResource', function($resource) {
	var lastZoneRequest,
		minionsByZone,
		cashedAllMinions;

	function getMinionsByZone(zone, one) {
		if (lastZoneRequest != zone || !minionsByZone) {
			var Minion = $resource('api/minions/:location', {location: '@location'}, {
				update: {
					method: 'GET',
					isArray: true
				}
			});

			lastZoneRequest = zone;
			minionsByZone = Minion.query({location: zone, isArray:false})
		}
		if (one) {
			var Minion = $resource('api/minion/:location', {location: '@location'}, {
				update: {
					method: 'GET'
				}
			});
			return Minion.get({location: zone})
		} else {
			return minionsByZone;
		}
	}
	return {
		getAllMinions: function () {
			if (!cashedAllMinions) {
				cashedAllMinions = $resource('api/minions/:location').query();
			}
			return cashedAllMinions;
		},
		getMinionsByZone: getMinionsByZone
	}
});
