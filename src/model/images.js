const db = require('../database/db.js');

module.exports = {
  // submitWork,
  // selectWork,
  // displayWorks,
  insertImage,
  insertArtworkDetails,
};

const insert_image = db.prepare(/*sql*/ `
  INSERT INTO images (image_file)
  VALUES ($image_file)
  RETURNING id
`);

function insertImage() {
  return insert_image.get();
}

const insert_artwork_details = db.prepare(/*sql*/ `
  INSERT INTO image_details (description, image_id, uploaded_by)
  VALUES ($description, $image_id, $uploaded_by)
`);

function insertArtworkDetails(image_id) {
  return insert_artwork_details.run(image_id);
}

const select_artwork = db.prepare(/*sql*/ `
    SELECT id, description, uploaded_by FROM image_details
`);

// function selectWork() {
//   return select_artwork.all();
//   console.log('Artwork selected');
// }

// function displayWorks() {
//   console.log('Beautiful!');
// }
