// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

type Mode = "development" | "production";

interface EnvVariables {
  mode: Mode;
}

export default (env: EnvVariables) => {
  const config = {
    mode: env.mode ?? "development",

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },

    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
      filename: "[name].[fullhash].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },

    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") })],
  };

  return config;
};
