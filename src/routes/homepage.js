const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // To do
  // Recreate template
  res.return("<h1>Hello Elena!</h1>");
});

router.post("/", (req, res) => {
  console.log(req);
  // To Do
  // Post data, possibly redirect
});
