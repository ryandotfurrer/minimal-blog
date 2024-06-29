export default [
  {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:astro/recommended",
      "plugin:prettier/recommended",
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["astro", "prettier"],
    rules: {
      "prettier/prettier": "error",
    },
    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
        rules: {
          "prettier/prettier": [
            "error",
            {
              parser: "astro",
            },
          ],
        },
      },
    ],
  },
];
