myApp.controller('PanthersController', ['$http', function($http) {
  var self = this;
  self.panthersPlayers = [];

  //when page loads
  getPanthersPlayers();

  //get players from DB
  function getPanthersPlayers() {
    $http.get('/panthers')
      .then(function(response) {
        self.panthersPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
