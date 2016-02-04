app.factory('ZoneResource', function($resource){
    var ZoneResource = $resource("/api/zone/:index", {index: '@zone'}, { get: {method: 'Get', isArray: false}})

    return {
        getZoneByIndex: function(index){
            return ZoneResource.get({index: index})
        }
    }
});