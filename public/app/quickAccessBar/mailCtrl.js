app.controller('mailCtrl', function($scope, MailResource, Hero){
    $scope.mailList = MailResource.getMailsByOwner(Hero.currentHero.name);
    $scope.mailToDisplay = {};
    $scope.newMail = {};
    $scope.read = false;
    $scope.write = false;

    $scope.displayMail = function(mail){
        $scope.mailToDisplay = mail;
        $scope.read = true;
    };
    $scope.close = function (){
        $scope.read = false;
        $scope.write = false;
    };
    $scope.send = function (){
        $scope.newMail.from = Hero.currentHero.name;
        $scope.newMail.read = false;
        $scope.newMail.date = new Date().toJSON().slice(0,10);

        MailResource.sendMail($scope.newMail);
    };
    $scope.pickItem = function (){
        alert("to be implemented");
    };
    $scope.takeItem = function (item, mail){
        if($scope.hero.weight <= $scope.hero.str) {
            $scope.hero.inventory.push(item);
            Hero.updateHero($scope.hero);

            var index = mail.items.indexOf(item);
            mail.items.splice(index, 1);

            MailResource.updateMail(mail);
        } else {
            $scope.weight -= item.weight;
            alert('Inventory too heavy increase your Strength!');
        }
    };
});
