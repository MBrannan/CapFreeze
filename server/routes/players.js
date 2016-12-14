var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/CapFreeze';

router.get('/:teamId', function(req, res) {
  var teamId = req.params.teamId;
  console.log('factory request initialized');

  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

  client.query(
    'Select name, contract_terms, position, player.AAV_sixteen_seventeen, player.AAV_seventeen_eighteen,player.AAV_eighteen_nineteen FROM players WHERE team_id = $1;', [teamId], function(err, result) {
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
