myApp.controller('TradeController', ['$scope', 'teamFactory', function($scope, teamFactory) {

var salaryCap = 73000000;
var rosterLimit =

console.log('trade controller running');

$scope.teamFactory = teamFactory;
$scope.teams = $scope.teamFactory.teamArray;

$scope.teamFactory.getInfo();

// if (contract_terms == "NMC" || contract_terms == "NTC") {
//   alert("You cannot trade a player with a No Move Clause or a No Trade Clause.")
// } else if (totalSalary > salaryCap) {
//   alert("You cannot make a trade that puts a team over the salary cap.")
// } else if (totalPlayers < 20 || totalPlayers > 23) {
//   alert("You must have a minimum of 20 skaters and a maximum of 23 skaters on each team.")
// } else if ()


}]);
