myApp.controller('CoyotesController', ['$http', function($http) {
  var self = this;
  self.coyotesPlayers = [];

  //when page loads
  getCoyotesPlayers();

  //get players from DB
  function getCoyotesPlayers() {
    $http.get('/coyotes')
      .then(function(response) {
        self.coyotesPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
