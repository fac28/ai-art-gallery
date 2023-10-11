const express = require('express');
const router = express.Router();
const form = require('../templates/form');
const { insertImage, insertArtworkDetails } = require('../model/images');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', (req, res) => {
  // console.log(res.send(form()));
  return res.send(form());
});

router.post('/', upload.single('avatar'), (req, res) => {
  // req.file is the `avatar` file
  const fileImg = req.file;
  console.log(fileImg);
  // req.body will hold the text fields, if there were any
  const { name, description } = req.body;
  const image_id = insertImage(fileImg.path).id;
  insertArtworkDetails(description, image_id, name);
  console.log('Image uploaded');
  res.redirect('/');
});

module.exports = router;
