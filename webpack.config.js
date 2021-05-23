const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "index");

const OUTPUT_DIR = path.join(__dirname, "static");

module.exports = {
  entry: ENTRY_FILE,
  mode: "development",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(css)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  output: {
    filename: "index.js",
    path: OUTPUT_DIR,
  },
};
