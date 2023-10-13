const express = require("express");
const router = express.Router();
const { deleteWork } = require("../model/images");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  deleteWork(id);
  res.redirect("/");
});

module.exports = router;
