const express = require("express");
const server = express();

const Sentry = require('@sentry/node');
const bodyParser = require("body-parser");

const sentryDSN = process.env.SENTRY_DSN
Sentry.init({ 
    dsn: sentryDSN,
    release: "ai-art-gallery@" + process.env.npm_package_version
});

// The request handler must be the first middleware on the app
server.use(Sentry.Handlers.requestHandler());

const transaction = Sentry.startTransaction({
    op: "test",
    name: "My First Test Transaction",
  });
  
  setTimeout(() => {
    try {
      foo();
    } catch (e) {
      Sentry.captureException(e);
    } finally {
      transaction.finish();
    }
  }, 99);

const staticHandler = express.static('public');

const galleryRoute = require("./routes/gallery");
const formRoute = require("./routes/form")

// Add all the routes below this line

server.use(bodyParser.urlencoded({ extended: false }));
server.use(staticHandler);
server.use('/', galleryRoute);
server.use('/submit', formRoute)


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
