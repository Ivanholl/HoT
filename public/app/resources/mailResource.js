app.factory('MailResource', function($resource) {
    var MailResource = $resource('api/mail/:to', {to: '@to'}),
        SendMail = $resource('api/sendmail'),
        UpdateMail = $resource('api/updateMail');

    return {
        getMailsByOwner: function (resiever) {
            return MailResource.query({to: resiever});
        },
        sendMail: function (mail){
            console.log(mail);
            return SendMail.save(mail);
        },
        updateMail: function (mail) {
            return UpdateMail.save(mail);
        }
    };
});
