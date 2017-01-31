myApp.controller('JacketsController', ['$http', function($http) {
  var self = this;
  self.jacketsPlayers = [];

  //when page loads
  getJacketsPlayers();

  //get players from DB
  function getJacketsPlayers() {
    $http.get('/jackets')
      .then(function(response) {
        self.jacketsPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
