'use strict';

module.exports = {
  port: 3456,
  host: "127.0.0.1",
  baseUrl: 'http://localhost:3456',
  hook: {
    route: '/hookme',
    secret: '<secret_here>',
    message: '<message_here>'
  },
  app: {
    name: "--> shipit -->"
  },
  proxy: {
    trust: true
  },
  serveStatic: true
};
