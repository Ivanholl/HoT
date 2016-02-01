app.factory('ZoneResource', function($resource){
    var ZoneResource = $resource("/api/zone/:index", {index: '@zone'}, { get: {method: 'Get', isArray: false}})

    return {
        getZoneByIndex: function(name){
            return ZoneResource.get({index: name})
        }
    }
});