myApp.factory('teamFactory', ['$http', function($http) {
  console.log('team factory running');
  var teams = [];

  //declare function
  function getTeams() {
    $http.get('/factory')
      .then(function(response) {
        teams = response.data;
        console.log(teams);
        return teams;
      });
  };

  return {
    teamArray: teams,
    getInfo: function() {
      return getTeams();
    }
  };
}]);
