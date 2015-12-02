/*var containerId = '#container',
    target = $("#container"),
    Player = JSON.parse(localStorage.getItem('Player')),
    zoneNumber;

var sammyApp = Sammy(containerId, function() {
  
  this.get('#/', function() {
    this.redirect('#/home');
  });

  this.get('#/home', function(){
    RenderHandlebars(routingTemplates.home, routingTemplates.home, target)
  })

  this.get('#/battle', function(){
        RenderHandlebars(routingTemplates.battle, routingTemplates.battle, target)
        Battle(zoneNumber);
  })

  this.get('#/map', function(){
    RenderHandlebars(routingTemplates.map, routingTemplates.map, target)
  })

  this.get('#/CreateNewHero', function(){
    RenderHandlebars(routingTemplates.CreateHero, routingTemplates.CreateHero, target)
    CreateHero();
  })

  this.get("#/town", function(){
    RenderHandlebars(routingTemplates.town, routingTemplates.town, target)  
  })

  this.get("#/town/healer", function(){
    RenderHandlebars(routingTemplates.healer, routingTemplates.healer, target)
    Healer();
  })

  this.bind('back-to-map', function(){
    this.redirect('#/map');    
  });

  this.bind('town-healer', function(){
    this.redirect('#/town/healer');
  });

});

sammyApp.run('#/');

$('body').on("click", "#zone1", function(){zoneNumber = 0})
$('body').on("click", "#zone2", function(){zoneNumber = 1})
*/
