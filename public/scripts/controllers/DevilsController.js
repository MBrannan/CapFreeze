myApp.controller('DevilsController', ['$http', function($http) {
  var self = this;
  self.devilsPlayers = [];

  //when page loads
  getDevilsPlayers();

  //get players from DB
  function getDevilsPlayers() {
    $http.get('/devils')
      .then(function(response) {
        self.devilsPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
