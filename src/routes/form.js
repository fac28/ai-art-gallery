const express = require('express');
const router = express.Router();
const form = require('../templates/form');
const { insertImage, insertArtworkDetails } = require('../model/images');

router.get('/', (req, res) => {
  return res.send(form());
});

router.post('/', (req, res) => {
  const { username, description, avatar } = req.body;

  // redirect
});

module.exports = router;
