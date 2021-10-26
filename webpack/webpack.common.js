const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

module.exports = {
  entry: {
    main: path.resolve(SRC_DIR, 'index.tsx'),
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: DIST_DIR,
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules|fonts/,
        use: ['ts-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|png|svg|jpg|gif|pdf|ico)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(PUBLIC_DIR, 'index.html'),
      favicon: path.resolve(PUBLIC_DIR, 'favicon.ico'),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@public': path.resolve(PUBLIC_DIR, 'icons'),
      '@sush': SRC_DIR,
    },
  },
};
