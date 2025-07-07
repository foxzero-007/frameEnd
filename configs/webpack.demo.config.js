const path = require("path");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  target: "node",
  entry: "./src/demo.ts",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "demo.bundle.js",
    clean: true,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/demo.html",
      chunks: ["demo"],
    }),
  ],
  watch: true,
};
