'use strict';

function debug(app, data) {
  console.log(app, '::', data);
}

module.exports.execHook = function(req, res, next) {
  /*
  if (err) {
    debug('webhook::error', err);

    return next(err);
  }
  */

  debug('webhook::'+config.hook.route, req.body);

  res.json({
    message: config.hook.message
  });
};
