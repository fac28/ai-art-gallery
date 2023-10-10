const db = require('../database/db.js');

module.exports = { submitWork, selectWork, displayWorks };


function submitWork() {
  console.log('Artwork submitted');
}

const select_artwork = db.prepare(/*sql*/ `
    SELECT id, description FROM image_details
`);

function selectWork() {
  return select_artwork.all();
  console.log('Artwork selected');
}

function displayWorks() {
  console.log('Beautiful!');
}
