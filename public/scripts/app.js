var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/faq', {
      templateUrl: '/views/templates/faq.html',
      controller: 'FaqController',
      controllerAs: 'faq'
    })
    .when('/ducks', {
      templateUrl: '/views/templates/ducks.html',
      controller: 'DucksController',
      controllerAs: 'ducks'
    })
    .when('/coyotes', {
      templateUrl: '/views/templates/coyotes.html',
      controller: 'CoyotesController',
      controllerAs: 'coyotes'
    })
    .when('/bruins', {
      templateUrl: '/views/templates/bruins.html',
      controller: 'BruinsController',
      controllerAs: 'bruins'
    })
    .when('/sabres', {
      templateUrl: '/views/templates/sabres.html',
      controller: 'SabresController',
      controllerAs: 'sabres'
    })
    .when('/flames', {
      templateUrl: '/views/templates/flames.html',
      controller: 'FlamesController',
      controllerAs: 'flames'
    })
    .when('/hurricanes', {
      templateUrl: '/views/templates/hurricanes.html',
      controller: 'HurricanesController',
      controllerAs: 'hurricanes'
    })
    .when('/blackhawks', {
      templateUrl: '/views/templates/blackhawks.html',
      controller: 'BlackhawksController',
      controllerAs: 'blackhawks'
    })
    .when('/avalanche', {
      templateUrl: '/views/templates/avalanche.html',
      controller: 'AvalancheController',
      controllerAs: 'avalanche'
    })
    .when('/jackets', {
      templateUrl: '/views/templates/jackets.html',
      controller: 'JacketsController',
      controllerAs: 'jackets'
    })
    .when('/stars', {
      templateUrl: '/views/templates/stars.html',
      controller: 'StarsController',
      controllerAs: 'stars'
    })
    .when('/redwings', {
      templateUrl: '/views/templates/redwings.html',
      controller: 'RedwingsController',
      controllerAs: 'redwings'
    })
    .when('/oilers', {
      templateUrl: '/views/templates/oilers.html',
      controller: 'OilersController',
      controllerAs: 'oilers'
    })
    .when('/panthers', {
      templateUrl: '/views/templates/panthers.html',
      controller: 'PanthersController',
      controllerAs: 'panthers'
    })
    .when('/kings', {
      templateUrl: '/views/templates/kings.html',
      controller: 'KingsController',
      controllerAs: 'kings'
    })
    .when('/wild', {
      templateUrl: '/views/templates/wild.html',
      controller: 'WildController',
      controllerAs: 'wild'
    })
    .when('/canadiens', {
      templateUrl: '/views/templates/canadiens.html',
      controller: 'CanadiensController',
      controllerAs: 'canadiens'
    })
    .when('/predators', {
      templateUrl: '/views/templates/predators.html',
      controller: 'PredatorsController',
      controllerAs: 'predators'
    })
    .when('/devils', {
      templateUrl: '/views/templates/devils.html',
      controller: 'DevilsController',
      controllerAs: 'devils'
    })
    .when('/islanders', {
      templateUrl: '/views/templates/islanders.html',
      controller: 'IslandersController',
      controllerAs: 'islanders'
    })
    .when('/rangers', {
      templateUrl: '/views/templates/rangers.html',
      controller: 'RangersController',
      controllerAs: 'rangers'
    })
    .when('/senators', {
      templateUrl: '/views/templates/senators.html',
      controller: 'SenatorsController',
      controllerAs: 'senators'
    })
    .when('/flyers', {
      templateUrl: '/views/templates/flyers.html',
      controller: 'FlyersController',
      controllerAs: 'flyers'
    })
    .when('/penguins', {
      templateUrl: '/views/templates/penguins.html',
      controller: 'PenguinsController',
      controllerAs: 'penguins'
    })
    .when('/sharks', {
      templateUrl: '/views/templates/sharks.html',
      controller: 'SharksController',
      controllerAs: 'sharks'
    })
    .when('/blues', {
      templateUrl: '/views/templates/blues.html',
      controller: 'BluesController',
      controllerAs: 'blues'
    })
    .when('/lightning', {
      templateUrl: '/views/templates/lightning.html',
      controller: 'LightningController',
      controllerAs: 'lightning'
    })
    .when('/leafs', {
      templateUrl: '/views/templates/leafs.html',
      controller: 'LeafsController',
      controllerAs: 'leafs'
    })
    .when('/canucks', {
      templateUrl: '/views/templates/canucks.html',
      controller: 'CanucksController',
      controllerAs: 'canucks'
    })
    .when('/capitals', {
      templateUrl: '/views/templates/capitals.html',
      controller: 'CapitalsController',
      controllerAs: 'capitals'
    })
    .when('/jets', {
      templateUrl: '/views/templates/jets.html',
      controller: 'JetsController',
      controllerAs: 'jets'
    })
    .when('/trade', {
      templateUrl: '/views/templates/trade.html',
      controller: 'TradeController',
      controllerAs: 'trade'
    })
    .otherwise({
      redirectTo: '/home'
    });

}]);

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
