myApp.controller('PenguinsController', ['$http', function($http) {
  var self = this;
  self.penguinsPlayers = [];

  //when page loads
  getPenguinsPlayers();

  //get players from DB
  function getPenguinsPlayers() {
    $http.get('/penguins')
      .then(function(response) {
        self.penguinsPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
