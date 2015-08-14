'use strict';

var express = require('express');
var config = require('../config');
//var ctrl = require('./controller');
var router = express.Router();

function debug(app, data) {
  console.log(app, '::', data);
}

router.post(config.hook.route, function(req, res, next) {
  if (err) {
    debug('webhook::error', err);

    return next(err);
  }

  debug('webhook::'+config.hook.route, req.body);

  res.json({
    message: config.hook.message
  });
});
