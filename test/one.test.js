const test = require("node:test");
const assert = require("node:assert");
const db = require("../src/database/db");
const seed = require("../src/database/seed");
const {
  selectWork,
  insertArtworkDetails,
  insertImage,
} = require("../src/model/images.js");

function reset() {
  db.exec(`PRAGMA foreign_keys = OFF;`);

  // Drop and recreate tables
  db.exec(`DROP TABLE IF EXISTS images;`);
  db.exec(`DROP TABLE IF EXISTS image_details;`);

  // Create tables with the desired schema
  db.exec(`
    CREATE TABLE IF NOT EXISTS images (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image_file BLOB NOT NULL
    );
  `);

  db.exec(`
    CREATE TABLE IF NOT EXISTS image_details (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      description VARCHAR(255),
      created_at TIMESTAMP,
      image_id INTEGER,
      uploaded_by VARCHAR(255),
      FOREIGN KEY (image_id) REFERENCES images (id)
    );
  `);

  db.exec(`PRAGMA foreign_keys = ON;`);

  // Re-seed the database if needed
  db.exec(seed);
}

function reset() {
  db.exec(`PRAGMA foreign_keys = OFF;`);

  // Drop and recreate tables
  db.exec(`DROP TABLE IF EXISTS images;`);
  db.exec(`DROP TABLE IF EXISTS image_details;`);

  // Create tables with the desired schema
  db.exec(`CREATE TABLE IF NOT EXISTS images (...)`);
  db.exec(`CREATE TABLE IF NOT EXISTS image_details (...)`);

  db.exec(`PRAGMA foreign_keys = ON;`);

  // re-seed the database if needed
  db.exec(seed);
}

test("Can get all the artworks from the db", () => {
  //   reset();
  const artworks = selectWork();
  console.log(artworks);
  assert.equal(artworks.length > 0, true);
  assert.equal(artworks[0].id, 1);
  assert.equal(
    artworks[1].description,
    "Gweneth Paltro at night being spooky in the road"
  );
  assert.equal(artworks[1].uploaded_by, "GwenXXX");
});

test("Can add a new artwork to the db", () => {
  //   reset();

  const imageId = insertImage("fake_image_path").id;

  const testArtwork = {
    description: "Lovely happy ponies bathing in meadow sunlight",
    image_id: imageId,
    uploaded_by: "MyLittlePony",
  };
  console.log(testArtwork.description);
  insertArtworkDetails(
    testArtwork.description,
    testArtwork.image_id,
    testArtwork.uploaded_by
  );
  const artworks = selectWork();
  const newArtwork = artworks.pop();
  assert.equal(
    newArtwork.description,
    "Lovely happy ponies bathing in meadow sunlight"
  );
  assert.equal(newArtwork.uploaded_by, "MyLittlePony");
});
