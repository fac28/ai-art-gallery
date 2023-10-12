/* eslint-disable camelcase */
const db = require("../database/db.js");

module.exports = {
  // submitWork,
  selectWork,
  displayWorks,
  insertImage,
  insertArtworkDetails,
  deleteWork,
};

const insert_image = db.prepare(/* sql */ `
  INSERT INTO images (image_file)
  VALUES ($image_file)
  RETURNING id
`);

function insertImage (image_file) {
  return insert_image.get({ image_file });
}

const insert_artwork_details = db.prepare(/* sql */ `
  INSERT INTO image_details (description, image_id, uploaded_by, created_at, tags)
  VALUES (
    $description,
    $image_id,
    $uploaded_by,
    strftime('%Y-%m-%d %H:%M', 'now'),
    $tags)
`);

function insertArtworkDetails (description, image_id, uploaded_by, tags) {
  return insert_artwork_details.run({
    description,
    image_id,
    uploaded_by,
    tags,
  });
}

const select_artwork_details = db.prepare(/* sql */ `
    SELECT id, description, uploaded_by, created_at, tags
    FROM image_details
`);

function selectWork () {
  return select_artwork_details.all();
}

const select_artwork = db.prepare(/* sql */ `
    SELECT image_file
    FROM images
    WHERE id = $id
`);

function displayWorks (id) {
  return select_artwork.get({ id });
}

const delete_artwork_details = db.prepare(/* sql */ `
    DELETE FROM image_details
    WHERE image_id = $id
`);

const delete_artwork = db.prepare(/* sql */ `
    DELETE FROM images
    WHERE id = $id
`);

function deleteWork (id) {
  delete_artwork_details.run({ id });
  return delete_artwork.run({ id });
}
