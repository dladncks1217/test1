const path = require("path");
const nodeExternals = require("webpack-node-externals");

const configs = [
  {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "browser.js",
    },
    resolve: {
      extensions: [".ts", ".tsx"],
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
        },
      ],
    },
    externals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
  },
  {
    entry: "./src/server.ts",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "server.js",
    },
    resolve: {
      extensions: [".ts", ".tsx"],
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
        },
        {
          test: /\.html?$/,
          loader: "raw-loader",
        },
      ],
    },
    target: "node",
    externals: nodeExternals(),
  },
];

module.exports = configs;
