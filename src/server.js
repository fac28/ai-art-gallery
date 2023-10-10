const express = require("express");
const server = express();

const Sentry = require("@sentry/node");
const bodyParser = require("body-parser");

const sentryDSN = process.env.SENTRY_DSN;
Sentry.init({
  dsn: sentryDSN,
  release: "ai-art-gallery@" + process.env.npm_package_version,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({
      // to trace all requests to the default router
      server,
      // alternatively, you can specify the routes you want to trace:
      // router: someRouter,
    }),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

// The request handler must be the first middleware on the app
server.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
server.use(Sentry.Handlers.tracingHandler());


const staticHandler = express.static("public");

const galleryRoute = require("./routes/gallery");
const formRoute = require("./routes/form");

// Add all the routes below this line

server.use(bodyParser.urlencoded({ extended: false }));
server.use(staticHandler);
server.use("/", galleryRoute);
server.use("/submit", formRoute);

// Testing will remove it in a bit
server.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });

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
