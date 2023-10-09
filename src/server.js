const express = require("express");
const server = express();

const homePage = require("./routes/homepage.js");

const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/", homePage);
// TO DO
// - Create routes
// - Server.use (routes)

module.exports = server;
