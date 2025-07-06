const path = require('path');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const TS_CONFIG = path.resolve(__dirname, 'tsconfig.json');
const OUTPUT_PATH = path.resolve(__dirname, 'build');

const BABEL_LOADER = {
  test: /\.(ts|tsx|js|jsx)?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react',
        ['@babel/preset-typescript', { onlyRemoveTypeImports: true }],
      ],
    },
  },
};

const SVG_LOADER = {
  test: /\.svg$/,
  use: ['@svgr/webpack', 'url-loader'],
};

const SCSS_LOADER = {
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', 'sass-loader'],
};

const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
  plugins: [
    new TsconfigPathsPlugin({
      configFile: TS_CONFIG,
    }),
  ],
};

const entry = {
  index: './index.ts',
};

const CONFIG = {
  mode: 'production',
  entry,
  output: {
    path: OUTPUT_PATH,
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [BABEL_LOADER, SVG_LOADER, SCSS_LOADER],
  },
  resolve,
  stats: 'minimal',
  externals: ['react', 'date-fns', 'react-dom', 'react-router', 'react-router-dom'],
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        mode: 'write-references',
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
  ],
};

module.exports = CONFIG;
