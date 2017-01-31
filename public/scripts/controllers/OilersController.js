myApp.controller('OilersController', ['$http', function($http) {
  var self = this;
  self.oilersPlayers = [];

  //when page loads
  getOilersPlayers();

  //get players from DB
  function getOilersPlayers() {
    $http.get('/oilers')
      .then(function(response) {
        self.oilersPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
