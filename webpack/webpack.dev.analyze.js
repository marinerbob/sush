const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const dev = require('./webpack.dev.js');

module.exports = merge(dev, {
  plugins: [new BundleAnalyzerPlugin()],
});
