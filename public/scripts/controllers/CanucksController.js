myApp.controller('CanucksController', ['$http', function($http) {
  var self = this;
  self.canucksPlayers = [];

  //when page loads
  getCanucksPlayers();

  //get players from DB
  function getCanucksPlayers() {
    $http.get('/canucks')
      .then(function(response) {
        self.canucksPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
