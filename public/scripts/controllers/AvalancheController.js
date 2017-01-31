myApp.controller('AvalancheController', ['$http', function($http) {
  var self = this;
  self.avalanchePlayers = [];

  //when page loads
  getAvalanchePlayers();

  //get players from DB
  function getAvalanchePlayers() {
    $http.get('/avalanche')
      .then(function(response) {
        self.avalanchePlayers = response.data;
        console.log(response.data);
      });
  };

}]);
