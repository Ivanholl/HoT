app.factory('MailResource', function($resource) {
    var MailResource = $resource('api/mail/:to', {to: '@to'});

    return {
        getMailsByOwner: function (resiever) {
            return MailResource.query({to: resiever})
        }
    }
});