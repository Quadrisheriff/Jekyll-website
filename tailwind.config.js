module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
