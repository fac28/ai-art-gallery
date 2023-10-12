const express = require("express");
const router = express.Router();
const form = require("../templates/form");
const { insertImage, insertArtworkDetails } = require("../model/images");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const MAX_SIZE = 1000 * 1000 * 5; // 5 megabytes
const ALLOWED_TYPES = ["image/jpeg", "image/png"];

router.get("/", (req, res) => {
  return res.send(form());
});

router.post("/", upload.single("avatar"), (req, res) => {
  // req.file is the `avatar` file
  const fileImg = req.file;

  if (!ALLOWED_TYPES.includes(fileImg.mimetype)) {
    res
      .status(400)
      .send("<h1>File upload error</h1><p>Please upload an image file</p>");
  }

  if (fileImg.size > MAX_SIZE) {
    res
      .status(400)
      .send("<h1>File upload error</h1><p>Profile picture must be < 5MB</p>");
  } else {
    // req.body will hold the text fields, if there were any
    const { name, description } = req.body;
    let tags = req.body.action;

    if (!tags) {
      tags = [];
    }

    const tagsString = tags.join(", ");

    const imageBuffer = fileImg.buffer.toString("base64");
    const imageId = insertImage(imageBuffer).id;
    insertArtworkDetails(description, imageId, name, tagsString);

    res.redirect("/");
  }
});

module.exports = router;
