var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/wild', {
      templateUrl: '/views/templates/wild.html',
      controller: 'WildController',
      controllerAs: 'wild'
    })
    .when('/lightning', {
      templateUrl: '/views/templates/lightning.html',
      controller: 'LightningController',
      controllerAs: 'lightning'
    })
    .otherwise({
      redirectTo: '/home'
    });

}]);

myApp.controller('HomeController', function() {

console.log('home controller running');

var self = this;
self.message = "Welcome to CapFreeze!"
});

myApp.controller('WildController', ['$http', function($http) {
  console.log('wild controller running');
  var self = this;
  self.wildPlayers = [];

  //when page loads
  getWildPlayers();

  //get players from DB
  function getWildPlayers() {
    $http.get('/wild')
      .then(function(response) {
        self.wildPlayers = response.data;
        console.log(self.wildPlayers);
      });
  };
}]);

myApp.controller('LightningController', ['$http', function($http) {
    console.log('lightning controller running');
    var self = this;
    self.lightningPlayers = [];

    //when page loads
    getLightningPlayers();

    //get players from DB
    function getLightningPlayers() {
      $http.get('/lightning')
        .then(function(response) {
          self.lightningPlayers = response.data;
          console.log(self.lightningPlayers);
        });
    };

}]);
