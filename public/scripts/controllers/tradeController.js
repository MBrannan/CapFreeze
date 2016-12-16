myApp.controller('TradeController', ['$scope', 'teamFactory', function($scope, teamFactory) {

  var self = this;
  self.tradeBlock = [];
  self.salaryCap = 73000000;
  self.teams = null;
  self.playersOne = [];
  self.playersTwo = [];
  self.teamOne = null;
  self.teamTwo = null;
  self.teamSalary16One = 0;
  self.teamSalary16Two = 0;
  self.teamRosterOne = 0;
  self.teamRosterTwo = 0;
  // var rosterLimit =

  console.log('trade controller running');

  teamFactory.getTeamInfo()
  .then(function(teams) {
    console.log(teams);
    self.teams = teams;
  });

  self.getPlayerOne = function() {
    teamFactory.getPlayerInfoOne(self.teamOne.team_id)
    .then(function(players) {
      self.playersOne = players;
      self.getSalaryOne();
      self.getRosterOne();
      console.log(self.playersOne);
    });
    // self.players =
  }

  self.getPlayerTwo = function() {
    teamFactory.getPlayerInfoTwo(self.teamTwo.team_id)
    .then(function(players) {
      self.playersTwo = players;
      self.getSalaryTwo();
      self.getRosterTwo();
      console.log(self.playersTwo);
    });
  }

  self.getSalaryOne = function(){
    self.teamSalaryOne = 0;
    for (var i = 0; i < self.playersOne.length; i++) {
      var calc = parseInt(self.playersOne[i].aav_sixteen_seventeen);
      self.teamSalaryOne += calc;
    }
  }

  self.getSalaryTwo = function(){
    self.teamSalaryTwo = 0;
    for (var i = 0; i < self.playersTwo.length; i++) {
      var calc = parseInt(self.playersTwo[i].aav_sixteen_seventeen);
      self.teamSalaryTwo += calc;
    }
  }

  self.getRosterOne = function() {
    self.teamRosterOne = 0;
    for (var i = 0; i < self.playersOne.length; i++) {
      self.teamRosterOne++;
    }
  }

  self.getRosterTwo = function() {
    self.teamRosterTwo = 0;
    for (var i = 0; i < self.playersTwo.length; i++) {
      self.teamRosterTwo++;
    }
  }

  self.pushToTrade = function() {
    self.tradeBlock = [];
    for (var i = 0; i < self.playersOne.length; i++) {
      if(self.playersOne[i].onBlock == true) {
        self.tradeBlock.push(self.playersOne[i]);
        console.log(self.tradeBlock);
      }
    }
    for (var i = 0; i < self.playersTwo.length; i++) {
      if(self.playersTwo[i].onBlock == true) {
        self.tradeBlock.push(self.playersTwo[i]);
        console.log(self.tradeBlock);
      }
    }
  }

  self.makeTrade = function() {
    console.log("click");
    //   for (var i = 0; i < self.tradeBlock.length; i++) {
    //   if (self.tradeBlock[i].contract_terms == "NMC" || self.tradeBlock[i].contract_terms == "NTC") {
    //     alert("You cannot trade a player with a No Move Clause or a No Trade Clause.")
    //   } else if (self.teamSalaryTwo > salaryCap || self.teamSalaryOne > salaryCap) {
    //     alert("You cannot make a trade that puts a team over the salary cap.")
    //   } else if (self.teamRosterTwo < 20 || self.teamRosterOne < 20) {
    //     alert("You must have a minimum of 20 skaters on each team.")
    //   }
    // }
  }

  self.clickTest = function() {
    console.log('potato');
  }

}]);
