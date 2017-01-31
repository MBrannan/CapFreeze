myApp.controller('JetsController', ['$http', function($http) {
  var self = this;
  self.jetsPlayers = [];

  //when page loads
  getJetsPlayers();

  //get players from DB
  function getJetsPlayers() {
    $http.get('/jets')
      .then(function(response) {
        self.jetsPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
