myApp.controller('SharksController', ['$http', function($http) {
  var self = this;
  self.sharksPlayers = [];

  //when page loads
  getSharksPlayers();

  //get players from DB
  function getSharksPlayers() {
    $http.get('/sharks')
      .then(function(response) {
        self.sharksPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
