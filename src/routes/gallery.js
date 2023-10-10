const express = require("express");
const router = express.Router();
const layout = require("../templates/gallery");

// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

router.get("/", (req, res) => {

  // TODO: replace this with a call to the database
  const images = [
    {url: "ice.png",
    username: 'username',
    description: "This is a description"},
    {url: "ice.png",
    username: 'username',
    description: "This is a description"}
  ]
  return res.send(layout(images));
});

module.exports = router;
