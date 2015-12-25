app.factory("ItemResource", function($resource) {
    var cachedItems;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return {
        query: function () {
            if (!cachedItems) {
                cachedItems = $resource('api/items/:type').query();
            }

            return cachedItems;
        },
        getItemsByType: function (type, one) {
            var itemsByType = [],
                returnOne = one || false,
                rand = getRandomInt(0, 5);

            $resource('api/items/:type').query(function (response) {
                angular.forEach(response, function (item) {
                    if (item.type == type) {
                        itemsByType.push(item);
                    }
                });
                if (returnOne) {
                    itemsByType.unshift(itemsByType[rand]); //pushes element in index 0
                    itemsByType.length = 1;
                }
            });
            return itemsByType;
        }
    }
})