myApp.controller('PredatorsController', ['$http', function($http) {
  var self = this;
  self.predatorsPlayers = [];

  //when page loads
  getPredatorsPlayers();

  //get players from DB
  function getPredatorsPlayers() {
    $http.get('/predators')
      .then(function(response) {
        self.predatorsPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
