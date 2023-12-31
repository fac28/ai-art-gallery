const test = require("node:test");
const assert = require("node:assert");
// const db = require("../src/database/db");
// const seed = require("../src/database/seed");
const { insertImage } = require("../src/model/images.js");

test("User can only submit images with filenames ending in jpg, jpeg, or png", () => {
  // Regex for valid file extensions
  const validFileExtension = /\.(jpg|jpeg|png)$/i;

  // Test with valid file extensions
  const validFilenames = ["flowers.jpg", "sunset.jpeg", "beach.png"];
  validFilenames.forEach((filename) => {
    const isValidExtension = validFileExtension.test(filename);
    if (isValidExtension) {
      const work = insertImage(filename);
      assert.ok(work, `Expected ${filename} to have a valid extension`);
    } else {
      assert.fail(`${filename} has an invalid extension`);
    }
  });

  // Test with filenames having invalid extensions
  const invalidFilenames = ["mountain.gif", "document.txt", "family_photo.pdf"];
  invalidFilenames.forEach((filename) => {
    const isValidExtension = validFileExtension.test(filename);
    if (isValidExtension) {
      assert.fail(`${filename} has a valid extension`);
    } else {
      assert.ok(true, `Expected ${filename} to have an invalid extension`);
    }
  });
});
