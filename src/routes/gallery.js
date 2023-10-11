const express = require("express");
const router = express.Router();
const layout = require("../templates/gallery");
const { selectWork, displayWorks } = require("../model/images");

router.get("/", async (req, res) => {
  try {
    const artworkDetails = await selectWork();

    const ids = artworkDetails.map(image => image.id);

    const artworkWithImages = await Promise.all(ids.map(async id => {
      const imageDetails = await displayWorks(id);
      return {
        ...artworkDetails.find(artwork => artwork.id === id),
        image_file: imageDetails.image_file,
      };
    }));

    return res.send(layout(artworkWithImages));
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
