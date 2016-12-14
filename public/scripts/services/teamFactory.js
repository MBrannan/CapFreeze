myApp.factory('teamFactory', ['$http', function($http) {
  console.log('team factory running');
  var teams = [];

  //declare function
  function getTeams() {
    return $http.get('/factory')
      .then(function(response) {
        teams = response.data;
        return teams;
      });
  };

  function getPlayers() {
    var teamId = 15;
    return $http.get('/players/' + teamId)
      .then(function(response) {
        players = response.data;
        return players
      });
  };
  return {
    getInfo: function() {
      return getTeams();
    },
    getPlayerInfo: function() {
      return getPlayers();
    }
  };
}]);
