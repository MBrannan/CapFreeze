myApp.controller('LeafsController', ['$http', function($http) {
  var self = this;
  self.leafsPlayers = [];

  //when page loads
  getLeafsPlayers();

  //get players from DB
  function getLeafsPlayers() {
    $http.get('/leafs')
      .then(function(response) {
        self.leafsPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
