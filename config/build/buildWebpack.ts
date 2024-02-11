import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = mode === 'development';

  return {
    mode: mode ?? 'development',

    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),

    entry: paths.entry,
    output: {
      filename: '[name].[fullhash].js',
      chunkFilename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },

    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',

    devServer: isDev ? buildDevServer(options) : undefined,

    plugins: buildPlugins(options),
  };
}
