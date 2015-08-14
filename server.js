'use strict';

// Get process environment or set default environment to development
var ENV = process.env.NODE_ENV || 'development';

var http = require('http');
var express = require('express');
var config = require('./config');
var app = express();
var server;

/**
 * Set express (app) variables
 */
app.set('config', config);
app.set('root', __dirname);
app.set('env', ENV);

require('./config/express').init(app);

app.use('/', require('./app/routes'));

/**
 * Start the app if not loaded by another module
 */
if (!module.parent) {
  server = http.createServer(app);
  server.listen(config.port || 3000, function() {
    var addr = server.address();
    console.log(
      '%s is running, listening on %s:%s, environment: %s',
      config.app.name,
      addr.address,
      addr.port,
      ENV.toLowerCase()
    );
  });
}

module.exports = app;
