const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // To do
  // Recreate template
  return res.send("<h1>Hello Elena, you' re the best!</h1>");
});

// router.post("/", (req, res) => {
//   console.log(req);
//   // To Do
//   // Post data, possibly redirect
// });

module.exports = router;
