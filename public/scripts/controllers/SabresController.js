myApp.controller('SabresController', ['$http', function($http) {
  var self = this;
  self.sabresPlayers = [];

  //when page loads
  getSabresPlayers();

  //get players from DB
  function getSabresPlayers() {
    $http.get('/sabres')
      .then(function(response) {
        self.sabresPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
