import webpack from "webpack";
import path from "path";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = mode === "development";

  return {
    mode: mode ?? "development",

    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),

    entry: paths.entry,
    output: {
      filename: "[name].[fullhash].js",
      path: paths.output,
      clean: true,
    },

    devtool: isDev && "inline-source-map",

    devServer: isDev ? buildDevServer(options) : undefined,

    plugins: buildPlugins(options),
  };
}
