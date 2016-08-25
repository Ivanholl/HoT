app.factory("ItemResource", function($resource) {
    var itemsByClass,
        lastClassRequest,
        cachedItems;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function getItemsByClass(itemClass, one) {
        var returnOne = one,
            rand = getRandomInt(0, 5);

        if (lastClassRequest != itemClass || !itemsByClass) {
            var Item = $resource('api/items/:class', {class: '@class'}, {
                update: {
                    method: 'GET',
                    isArray: true
                }
            });
            lastClassRequest = itemClass;
            itemsByClass = Item.query({class: itemClass})
        }
        if (returnOne) {
            return itemsByClass[rand];
        } else {
            return itemsByClass;
        }
    }

    return {
        query: function () {
            if (!cachedItems) {
                cachedItems = $resource('api/items/:type').query();
            }
            return cachedItems;
        },
        getItemsByClass: getItemsByClass
    }
})
