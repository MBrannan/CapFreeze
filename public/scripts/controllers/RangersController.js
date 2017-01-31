myApp.controller('RangersController', ['$http', function($http) {
  var self = this;
  self.rangersPlayers = [];

  //when page loads
  getRangersPlayers();

  //get players from DB
  function getRangersPlayers() {
    $http.get('/rangers')
      .then(function(response) {
        self.rangersPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
