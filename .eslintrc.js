module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "standard",
  overrides: [
    {
      env: {
        node: true,
        browser: true,
      },
      files: [".eslintrc.js", ".eslintrc.cjs"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": ["error", "always-multiline"],
  },
}
