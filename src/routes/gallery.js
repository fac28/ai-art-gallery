const express = require("express");
const router = express.Router();
const layout = require("../templates/gallery");

router.get("/", (req, res) => {
  // To do
  const image = "ice.png"
  const username = 'username'
  const description = "This is a description"
  return res.send(layout(image, username, description));
});

module.exports = router;
