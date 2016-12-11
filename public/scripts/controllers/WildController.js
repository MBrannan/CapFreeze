myApp.controller('wild', ['$http', function($http) {
  var self = this;
  self.wildPlayers = [];

  //when page loads
  getWildPlayers();

  //get players from DB
  function getWildPlayers() {
    $http.get('/players')
      .then(function(response) {
        self.wildPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
