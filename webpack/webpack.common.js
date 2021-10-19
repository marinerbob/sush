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
      src: SRC_DIR,
      pages: path.resolve(SRC_DIR, 'pages'),
      common: path.resolve(SRC_DIR, 'common'),
      components: path.resolve(SRC_DIR, 'components'),
      store: path.resolve(SRC_DIR, 'store'),
      layouts: path.resolve(SRC_DIR, 'layouts'),
      utils: path.resolve(SRC_DIR, 'utils'),
      api: path.resolve(SRC_DIR, 'api'),
    },
  },
};
