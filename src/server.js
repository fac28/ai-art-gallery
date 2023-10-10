const express = require("express");
const server = express();
const Sentry = require('@sentry/node');

const sentryDSN = process.env.SENTRY_DSN
Sentry.init({ dsn: sentryDSN });

// The request handler must be the first middleware on the app
server.use(Sentry.Handlers.requestHandler());

const homePage = require("./routes/homepage.js");

const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/", homePage);
// TO DO
// - Create routes
// - Server.use (routes)



// The error handler must be before any other error middleware and after all controllers
server.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
server.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + "");
  });

module.exports = server;
