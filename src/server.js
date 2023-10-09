const express = require("express");
const server = express();
const staticHandler = express.static('public');
const bodyParser = require("body-parser");

const galleryRoute = require("./routes/gallery");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(staticHandler);

// TO DO
// - Create routes
// - Server.use (routes)

server.use('/', galleryRoute);
module.exports = server;
