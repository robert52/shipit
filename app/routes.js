'use strict';

var express = require('express');
var config = require('../config');
var ctrl = require('./controller');
var router = express.Router();

router.post(config.hook.route, ctrl.execHook);

module.exports = router;
