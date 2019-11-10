const path = require("path");
const { version } = require("./package.json");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: `compare-data-v${version}.js`,
    path: path.join(__dirname, "dist"),
  }
}