myApp.controller('CapitalsController', ['$http', function($http) {
  var self = this;
  self.capitalsPlayers = [];

  //when page loads
  getCapitalsPlayers();

  //get players from DB
  function getCapitalsPlayers() {
    $http.get('/capitals')
      .then(function(response) {
        self.capitalsPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
