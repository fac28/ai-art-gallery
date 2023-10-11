// const test = require("node:test");
// const assert = require("node:assert");
// const { request, assert_attr } = require("./helpers.js");


// test("/submit renders a <form>", async () => {
//   const { status, body } = await request("/submit");
//   assert.equal(status, 200);
//   assert.match(
//     body,
//     /<form/i,
//     `Expected HTML to contain a form element, but received:\n${body}`
//   );
//   assert_attr(
//     body,
//     "action",
//     ["/submit", ""],
//     `Action attribuite should be "/submit", but received:\n${body}\nNote: action can also be empty or missing as it defaults to the same page\n`
//   );
//   assert_attr(
//     body,
//     "method",
//     ["POST", "post"],
//     `Method attribuite should be "POST", but received:\n${body}`
//   );
//   assert.match(
//     body,
//     /<label/i,
//     `Expected HTML to include a label element, but received:\n${body}`
//   );
// });

// test("Description can't be longer then 200 characters", async () => {
//   const { status, body } = await request("/submit");

//   assert.equal(status, 200);

//   assert_attr(
//     body,
//     "maxlength",
//     ["200"],
//     `Range textare should use max attribute to limit rating to 200 charaters, but received:\n${body}`
//   );
// });
