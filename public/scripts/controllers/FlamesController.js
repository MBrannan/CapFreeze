myApp.controller('FlamesController', ['$http', function($http) {
  var self = this;
  self.flamesPlayers = [];

  //when page loads
  getFlamesPlayers();

  //get players from DB
  function getFlamesPlayers() {
    $http.get('/flames')
      .then(function(response) {
        self.flamesPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
