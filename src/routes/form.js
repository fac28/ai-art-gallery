const express = require("express");
const router = express.Router();
const form = require("../templates/form");

router.get("/", (req, res) => {

  return res.send(form());
});

module.exports = router;
