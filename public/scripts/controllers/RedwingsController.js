myApp.controller('RedwingsController', ['$http', function($http) {
  var self = this;
  self.redwingsPlayers = [];

  //when page loads
  getRedwingsPlayers();

  //get players from DB
  function getRedwingsPlayers() {
    $http.get('/redwings')
      .then(function(response) {
        self.redwingsPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
