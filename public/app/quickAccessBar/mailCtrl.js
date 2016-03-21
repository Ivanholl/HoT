app.controller('mailCtrl', function($scope, MailResource, Hero){
    $scope.mailList = MailResource.getMailsByOwner(Hero.currentHero.name);
    $scope.mailToDisplay = {};

    $scope.displayMail = function(mail){
        $scope.mailToDisplay = mail;
        $scope.read = true;
    }
});
