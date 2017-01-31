myApp.controller('SenatorsController', ['$http', function($http) {
  var self = this;
  self.senatorsPlayers = [];

  //when page loads
  getSenatorsPlayers();

  //get players from DB
  function getSenatorsPlayers() {
    $http.get('/senators')
      .then(function(response) {
        self.senatorsPlayers = response.data;
        console.log(response.data);
      });
  };

}]);
