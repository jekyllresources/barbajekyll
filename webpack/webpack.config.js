const path = require("path");

module.exports = {
  mode: "production",
  watch: true,
  entry: path.join(__dirname, "webpack", "main"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "barbajekyll/js"),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [
          path.resolve(__dirname, "barbajekyll/node_modules"),
          path.resolve(__dirname, "barbajekyll/bower_components"),
        ],
        loader: "babel-loader",
        query: {
          presets: ["env"],
        },
      },
    ],
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
};
