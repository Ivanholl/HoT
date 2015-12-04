app.factory('MinionResource', function($resource) {
  return $resource("api/minions");
});
