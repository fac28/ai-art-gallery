const express = require("express");
const router = express.Router();
const form = require("../templates/form");
const { insertImage, insertArtworkDetails } = require("../model/images");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/", (req, res) => {
  return res.send(form());
});

router.post("/", upload.single("avatar"), (req, res) => {
  // req.file is the `avatar` file
  const fileImg = req.file;

  // req.body will hold the text fields, if there were any
  const { name, description } = req.body;
  let tags = req.body.action

  if (!tags) {
    tags = []
  }

  const tagsString = tags.join(", ")
  const imageId = insertImage(fileImg.path).id
  insertArtworkDetails(description, imageId, name, tagsString)

  res.redirect("/");
});

module.exports = router;
