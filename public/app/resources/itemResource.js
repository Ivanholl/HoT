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
        getItemsByClass: function (type, one) {
            var itemsByClass = [],
                returnOne = one || false,
                rand = getRandomInt(0, 5);

            $resource('api/items/:type').query(function (response) {
                angular.forEach(response, function (item) {
                    if (item.class == type) {
                        itemsByClass.push(item);
                    }
                });
                if (returnOne) {
                    itemsByClass.unshift(itemsByClass[rand]); //pushes element in index 0
                    itemsByClass.length = 1;
                }
            });
            return itemsByClass;
        }
    }
})