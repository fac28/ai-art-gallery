const express = require("express");
const router = express.Router();
const layout = require("../templates/gallery");
const { selectWork, displayWorks} = require('../model/images');

// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

router.get("/", async (req, res) => {
  try {
    const artworkDetails = await selectWork();

    const ids = artworkDetails.map(image => image.id);

    // Using Promise.all to wait for all displayWorks calls to finish
    const artworkWithImages = await Promise.all(ids.map(async id => {
      const imageDetails = await displayWorks(id);
      return { ...artworkDetails.find(artwork => artwork.id === id),
        image_file: imageDetails.image_file };
    }));

    console.log(artworkWithImages);
    return res.send(layout(artworkWithImages));
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
