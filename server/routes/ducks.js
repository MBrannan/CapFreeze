var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/CapFreeze';

router.get('/', function(req, res) {
  console.log('get request');

  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query(
      'SELECT * FROM players WHERE team_id=1;', function(err, result) {
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
