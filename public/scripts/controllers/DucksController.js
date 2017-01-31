myApp.controller('DucksController', ['$http', function($http) {
  var self = this;
  self.ducksPlayers = [];

  //when page loads
  getDucksPlayers();

  //get players from DB
  function getDucksPlayers() {
    $http.get('/ducks')
      .then(function(response) {
        self.ducksPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
