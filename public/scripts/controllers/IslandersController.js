myApp.controller('IslandersController', ['$http', function($http) {
  var self = this;
  self.islandersPlayers = [];

  //when page loads
  getIslandersPlayers();

  //get players from DB
  function getIslandersPlayers() {
    $http.get('/islanders')
      .then(function(response) {
        self.islandersPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
