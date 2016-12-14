var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var wild = require('./routes/wild');
var lightning = require('./routes/lightning');
var trade = require('./routes/trade');
var factory = require('./routes/factory');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/wild', wild);
app.use('/lightning', lightning);
app.use('/trade', trade);
app.use('/factory', factory);

app.get('/', function (req, res) {
  res.sendFile(path.resolve('./public/views/index.html'));
});

app.use(express.static('./public'));

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), function () {
  console.log('Listening on port ', app.get('port'));
});
