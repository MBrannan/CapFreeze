myApp.controller('BluesController', ['$http', function($http) {
  var self = this;
  self.bluesPlayers = [];

  //when page loads
  getBluesPlayers();

  //get players from DB
  function getBluesPlayers() {
    $http.get('/blues')
      .then(function(response) {
        self.bluesPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
