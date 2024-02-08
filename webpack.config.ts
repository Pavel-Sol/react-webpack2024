import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

type Mode = "development" | "production";

interface EnvVariables {
  mode: Mode;
  port: number;
}

export default (env: EnvVariables) => {
  const isDev = env.mode === "development";
  const isProd = env.mode === "production";

  const config = {
    mode: env.mode ?? "development",

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },

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

    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      filename: "[name].[fullhash].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },

    devtool: isDev && "inline-source-map",

    devServer: isDev
      ? {
          port: env.port ?? 5000,
          open: true,
        }
      : undefined,
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
      isProd &&
        new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash:8].css",
          chunkFilename: "css/[name].[contenthash:8].css",
        }),
    ].filter(Boolean),
  };

  return config;
};
