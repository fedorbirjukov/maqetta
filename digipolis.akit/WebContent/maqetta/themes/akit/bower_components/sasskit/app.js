/* global __dirname */
/* global global */
'use strict';

// Base dir
global.__base = __dirname + '/';
var config = require('astad-config');
// Dependencies


// Create Express app
var express = require('express');
var app = express();
app.disable('x-powered-by');


// All environments Express middleware
app.set('port', process.env.PORT || config.port);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/pages');

app.use(express.static('documentation'));

// Status handler
require('astad-status')(app);

app.get('/', function onPage(req, res) {
  res.render('index');
});

app.get('/:page', function onPage(req, res) {
  res.render(req.params.page);
});

// Listen
app.listen(app.get('port'), function onListen() {
  var chalk = require('chalk');
  console.log('\n' + chalk.white.bgRed.bold(' A ') +
    ' ' + chalk.grey.bgBlack(' Express server listening on port ' + app.get('port') + ' '));
});
