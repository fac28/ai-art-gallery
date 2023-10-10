/* eslint-disable no-unused-vars */
const test = require("node:test")
const assert = require("node:assert")
const db = require("../src/database/db")
const seed = require("../src/database/seed")
const { selectWork } = require("../src/model/images.js")

// function reset() {
//   db.exec(`PRAGMA foreign_keys = OFF;`);

//   // Drop and recreate tables
//   db.exec(`DROP TABLE IF EXISTS images;`);
//   db.exec(`DROP TABLE IF EXISTS image_details;`);

//   // Create tables with the desired schema
//   db.exec(`CREATE TABLE IF NOT EXISTS images (...)`);
//   db.exec(`CREATE TABLE IF NOT EXISTS image_details (...)`);

//   db.exec(`PRAGMA foreign_keys = ON;`);

//   // re-seed the database if needed
//     db.exec(seed);

// }

// test('Can get all the artworks from the db', () => {
//   reset();
//   const artworks = selectWork();
//   assert.equal(artworks.length > 0, true);
//   assert.equal(artworks[0].id, 1);
//   assert.equal(
//     artworks[0].image_id,
//     'Gweneth Paltro at night being spooky in the road'
//   );
//   assert.equal(artworks[0].uploaded_by, 'GwenXXX');
// });

// test('Can add a new artwork to the db', () => {
//   reset();
//   const testArtwork = {
//     description: 'Lovely happy ponies bathing in meadow sunlight',
//     uploaded_by: 'MyLittlePony',
//   };
//   submitWork(testArtwork);
//   const artworks = selectWork();
//   const newArtwork = artworks.push();
//   assert.equal(newArtwork.id, 6);
//   assert.equal(
//     newArtwork.description,
//     'Lovely happy ponies bathing in meadow sunlight'
//   );
//   assert.equal(newArtwork.uploaded_by, 'MyLittlePony');
// });
