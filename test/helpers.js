const DIR = "src";

const server = require(`../${DIR}/server.js`);
const db = require(`../${DIR}/database/db.js`);

<<<<<<< HEAD
// function reset() {
// db.exec(/*sql*/ `
//       DELETE FROM images;
//       DELETE FROM image_details;
//       DELETE FROM sqlite_sequence WHERE name IN ('images', 'image_details');
//   `);
// }
=======
function reset() {
  db.exec(/*sql*/ `
        DELETE FROM images;
        DELETE FROM image_details;
        DELETE FROM sqlite_sequence WHERE name IN ('images', 'image_details');
    `);
}
>>>>>>> 8edd963393d5aa109d386a7693e93eaf016777d0

async function request(pathname, options = {}) {
  const app = server.listen(0);
  const { port } = app.address();
  const url = new URL(pathname, `http://localhost:${port}`);
  options.headers = { ...options.headers, connection: "close" };
  const response = await fetch(url, options);
  app.close();
  const body = await response.text();
  const headers = Object.fromEntries(response.headers);
  return { status: response.status, body, headers };
}

function assert_attr(body, name, expected, msg) {
  const get_attr = new RegExp(`${name}="([^"]*)"`, "i");
  const match = body.match(get_attr);
  if (!match && !expected.includes("")) {
    console.log({ name, expected, match });
    throw new Error(msg);
  }
  if (match) {
    // [0] is the full match, [1] is the bit between the quotes
    const attr = match[1];
    if (!expected.includes(attr)) {
      throw new Error(msg);
    }
  }
}

module.exports = {
  reset,
  db,
  request,
  assert_attr,
};
