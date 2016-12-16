var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/CapFreeze';

router.get('/:teamId', function(req, res) {
  var teamId = req.params.teamId;
  console.log("team ID: ", teamId);
  console.log('factory request initialized');

  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

  client.query(
    'SELECT players.name, players.contract_terms, players.position, players.aav_sixteen_seventeen, players.aav_seventeen_eighteen, players.aav_eighteen_nineteen FROM players WHERE team_id = $1;', [teamId], function(err, result) {
      done();

      if(err) {
        console.log('error in query selection: ', err);
        res.sendStatus(500);
      }
      res.send(result.rows);
      console.log(result.rows);
    }
  );
})
});
module.exports = router;
