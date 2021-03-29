const { tailwindConfig } = require("@monodramon/postcss");

module.exports = {
  presets: [tailwindConfig],
  purge: ["./src/**/*.tsx"],
};
