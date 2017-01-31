myApp.controller('KingsController', ['$http', function($http) {
  var self = this;
  self.kingsPlayers = [];

  //when page loads
  getKingsPlayers();

  //get players from DB
  function getKingsPlayers() {
    $http.get('/kings')
      .then(function(response) {
        self.kingsPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
