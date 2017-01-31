myApp.controller('StarsController', ['$http', function($http) {
  var self = this;
  self.starsPlayers = [];

  //when page loads
  getStarsPlayers();

  //get players from DB
  function getStarsPlayers() {
    $http.get('/stars')
      .then(function(response) {
        self.starsPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
