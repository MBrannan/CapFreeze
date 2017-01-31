myApp.controller('CanadiensController', ['$http', function($http) {
  var self = this;
  self.canadiensPlayers = [];

  //when page loads
  getCanadiensPlayers();

  //get players from DB
  function getCanadiensPlayers() {
    $http.get('/canadiens')
      .then(function(response) {
        self.canadiensPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
