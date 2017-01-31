myApp.controller('HurricanesController', ['$http', function($http) {
  var self = this;
  self.hurricanesPlayers = [];

  //when page loads
  getHurricanesPlayers();

  //get players from DB
  function getHurricanesPlayers() {
    $http.get('/hurricanes')
      .then(function(response) {
        self.hurricanesPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
