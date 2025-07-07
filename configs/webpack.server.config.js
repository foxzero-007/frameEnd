const path = require("path");
const nodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("../plugins/StartServerPlugin");

module.exports = {
  mode: "production",
  target: "node",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "server.bundle.js",
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
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
    new StartServerPlugin({
      command: 'nodemon',
      args: ['--watch','dist','dist/server.bundle.js']
    })
  ],
  watch: true,
};
