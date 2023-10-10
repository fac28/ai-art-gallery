const express = require("express");
const server = express();
const staticHandler = express.static('public');
const bodyParser = require("body-parser");

const galleryRoute = require("./routes/gallery");
const formRoute = require("./routes/form")

server.use(bodyParser.urlencoded({ extended: false }));
server.use(staticHandler);

// TO DO
// - Create routes
// - Server.use (routes)

server.use('/', galleryRoute);
server.use('/submit', formRoute);
module.exports = server;
