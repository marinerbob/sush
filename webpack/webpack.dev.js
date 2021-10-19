const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 4200,
    hot: true,
    open: false,
    historyApiFallback: true,
  },
});
