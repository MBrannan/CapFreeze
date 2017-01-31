myApp.controller('BlackhawksController', ['$http', function($http) {
  var self = this;
  self.blackhawksPlayers = [];

  //when page loads
  getBlackhawksPlayers();

  //get players from DB
  function getBlackhawksPlayers() {
    $http.get('/blackhawks')
      .then(function(response) {
        self.blackhawksPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
