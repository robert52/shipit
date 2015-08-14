'use strict';

var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var serveStatic = require('serve-static');
var config = require('./index');

module.exports.init = function(app) {
  var env = app.get('env');
  var root = app.get('root');

  if (config.proxy.trust) {
    app.enable('trust proxy');
  }

  /**
   * Common express configs
   */
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.disable('x-powered-by');

  app.use(function(req, res, next) {
    res.locals.app = config.app;

    next();
  });

  if (config.serveStatic) {
    app.use(serveStatic(path.join(root, 'public')));
  }
};
