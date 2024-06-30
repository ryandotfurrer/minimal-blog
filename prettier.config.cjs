const config = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: false,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  printWidth: 80,
  proseWrap: 'preserve',
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  tailwindFunctions: ['clsx'],
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
};

module.exports = config;
