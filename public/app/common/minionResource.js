app.factory('MinionResource', function($resource) {
	return $resource('api/minions/:location')
  	//{
  	//getAllMinions: function(){
  	//	$resource("api/minions");
  	//},
  	//getMinionsByLocation: function(zone){
  	//	$resource('api/minions/:location', {location:zone});
  	//}
  	//}
});
