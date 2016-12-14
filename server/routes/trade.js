var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/CapFreeze';

router.get('/', function(req, res) {
  console.log('trade request initialized');
  var playerID = req.params.id;
  var player = req.params.name;
  console.log('players to trade: ', player);

  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

  client.query(

    'SELECT name, position, contract_terms, AAV_sixteen_seventeen, AAV_seventeen_eighteen, AAV_eighteen_nineteen FROM players WHERE id ==' + playerID + ';', function(err, result) {
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
