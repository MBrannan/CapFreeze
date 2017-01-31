var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var players = require('./routes/players');
var trade = require('./routes/trade');
var factory = require('./routes/factory');
var ducks = require('./routes/ducks');
var coyotes = require('./routes/coyotes');
var bruins = require('./routes/bruins');
var sabres = require('./routes/sabres');
var flames = require('./routes/flames');
var hurricanes = require('./routes/hurricanes');
var blackhawks = require('./routes/blackhawks');
var avalanche = require('./routes/avalanche');
var jackets = require('./routes/jackets');
var stars = require('./routes/stars');
var redwings = require('./routes/redwings');
var oilers = require('./routes/oilers');
var panthers = require('./routes/panthers');
var kings = require('./routes/kings');
var wild = require('./routes/wild');
var canadiens = require('./routes/canadiens');
var predators = require('./routes/predators');
var devils = require('./routes/devils');
var islanders = require('./routes/islanders');
var rangers = require('./routes/rangers');
var senators = require('./routes/senators');
var flyers = require('./routes/flyers');
var penguins = require('./routes/penguins');
var sharks = require('./routes/sharks');
var blues = require('./routes/blues');
var lightning = require('./routes/lightning');
var leafs = require('./routes/leafs');
var canucks = require('./routes/canucks');
var capitals = require('./routes/capitals');
var jets = require('./routes/jets');




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/ducks', ducks);
app.use('/coyotes', coyotes);
app.use('/bruins', bruins);
app.use('/sabres', sabres);
app.use('/flames', flames);
app.use('/hurricanes', hurricanes);
app.use('/blackhawks', blackhawks);
app.use('/avalanche', avalanche);
app.use('/jackets', jackets);
app.use('/stars', stars);
app.use('/redwings', redwings);
app.use('/oilers', oilers);
app.use('/panthers', panthers);
app.use('/kings', kings);
app.use('/wild', wild);
app.use('/canadiens', canadiens);
app.use('/predators', predators);
app.use('/devils', devils);
app.use('/islanders', islanders);
app.use('/rangers', rangers);
app.use('/senators', senators);
app.use('/flyers', flyers);
app.use('/penguins', penguins);
app.use('/sharks', sharks);
app.use('/blues', blues)
app.use('/lightning', lightning);
app.use('/leafs', leafs);
app.use('/canucks', canucks);
app.use('/capitals', capitals);
app.use('/jets', jets);
app.use('/trade', trade);
app.use('/factory', factory);
app.use('/players', players);

app.get('/', function (req, res) {
  res.sendFile(path.resolve('./public/views/index.html'));
});

app.use(express.static('./public'));

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), function () {
  console.log('Listening on port ', app.get('port'));
});
