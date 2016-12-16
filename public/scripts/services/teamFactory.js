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

  function getPlayerOne(teamId) {
    console.log('team ID: ', teamId);
    return $http.get('/players/' + teamId)
      .then(function(response) {
        players = response.data;
        return players
      });
  };

  function getPlayerTwo(teamId) {
    console.log('team ID: ', teamId);
    return $http.get('/players/' + teamId)
      .then(function(response) {
        players = response.data;
        return players
      });
  };
  return {
    getTeamInfo: function() {
      return getTeams();
    },
    getPlayerInfoOne: function(teamId) {
      return getPlayerOne(teamId);
    },
    getPlayerInfoTwo: function(teamId) {
      return getPlayerTwo(teamId);
    }
  };
}]);
