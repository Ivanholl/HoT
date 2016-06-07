app.factory('QuestResource', function($resource){
    var QuestResource = $resource("/api/quest/:name", {name: '@name'}, { get: {method: 'Get', isArray: false}})

    return {
        getQuestByName: function(name){
            return QuestResource.get({name: name})
        }
    }
});