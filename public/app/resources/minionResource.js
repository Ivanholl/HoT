app.factory('MinionResource', function($resource) {
	var lastZoneRequest,
		minionsByZone,
		cashedAllMinions = [];

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
			// debugger;
			// if (cashedAllMinions.length === 0) {
			//
			// 	var temp = $resource('api/minions').query({isArray:true});
			// 	temp.$promise.then(function (result) {
			// 	    cashedAllMinions = result;
			// 		//console.log(result);
			// 		return result;
			// 	});
			// } else {
			// 	return cashedAllMinions
			// }

		},
		getMinionsByZone: getMinionsByZone
	}
});
