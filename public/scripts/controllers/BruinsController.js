myApp.controller('BruinsController', ['$http', function($http) {
  var self = this;
  self.bruinsPlayers = [];

  //when page loads
  getBruinsPlayers();

  //get players from DB
  function getBruinsPlayers() {
    $http.get('/bruins')
      .then(function(response) {
        self.bruinsPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
