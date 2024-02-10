import path from 'path';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPlatform } from './config/build/types/types';

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  };

  const config = buildWebpack({
    port: env.port ?? 5000,
    paths,
    mode: env.mode ?? 'development',
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop',
  });

  return config;
};
