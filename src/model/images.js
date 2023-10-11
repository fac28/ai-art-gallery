const db = require("../database/db.js");

module.exports = {
  // submitWork,
  selectWork,
  displayWorks,
  insertImage,
  insertArtworkDetails,
};

const insert_image = db.prepare(/*sql*/ `
  INSERT INTO images (image_file)
  VALUES ($image_file)
  RETURNING id
`);

function insertImage(image_file) {
  return insert_image.get({ image_file: image_file });
}

const insert_artwork_details = db.prepare(/*sql*/ `
  INSERT INTO image_details (description, image_id, uploaded_by, created_at)
  VALUES ($description, $image_id, $uploaded_by, strftime('%Y-%m-%d %H:%M', 'now'))
`);

function insertArtworkDetails(description, image_id, uploaded_by, created_at) {
  return insert_artwork_details.run({
    description,
    image_id,
    uploaded_by,
    created_at,
  });
}

const select_artwork_details = db.prepare(/*sql*/ `
    SELECT id, description, uploaded_by, created_at
    FROM image_details
`);

function selectWork() {
  return select_artwork_details.all();
}

const select_artwork = db.prepare(/*sql*/ `
    SELECT image_file
    FROM images
    WHERE id = $id
`);

function displayWorks(id) {
  return select_artwork.get({ id });
}
