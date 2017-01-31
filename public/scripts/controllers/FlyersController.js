myApp.controller('FlyersController', ['$http', function($http) {
  var self = this;
  self.flyersPlayers = [];

  //when page loads
  getFlyersPlayers();

  //get players from DB
  function getFlyersPlayers() {
    $http.get('/flyers')
      .then(function(response) {
        self.flyersPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
