app.factory('CachedMinions', function(MinionResource){
	var cachedMinions;

    return {
        query: function() {
            if (!cachedMinions) {
                cachedMinions = MinionResource.query();
            }

            return cachedMinions;
        },
        getMinionsByZone: function(zone){
        	var minionsByZone = [];
            var temp = MinionResource.query(function (response){
            	angular.forEach(response, function (item) {
			        if (item.location == zone) {
			            minionsByZone.push(item);
			        }
			    });
			});
			
            return minionsByZone;
        }
    }
});