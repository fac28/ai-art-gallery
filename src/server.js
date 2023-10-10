const express = require("express");
const server = express();

const Sentry = require('@sentry/node');
const bodyParser = require("body-parser");

const sentryDSN = process.env.SENTRY_DSN
Sentry.init({ dsn: sentryDSN });

// The request handler must be the first middleware on the app
server.use(Sentry.Handlers.requestHandler());

const staticHandler = express.static('public');



const galleryRoute = require("./routes/gallery");

// Add all the routes below this line

server.use(bodyParser.urlencoded({ extended: false }));
server.use(staticHandler);
server.use('/', galleryRoute);


// No more routes after this line please!

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
