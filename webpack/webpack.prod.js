const path = require('path');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const ROOT_DIR = path.join(__dirname, '..');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'ts-loader',
                options: {
                   configFile: path.resolve(ROOT_DIR, 'tsconfig.prod.json')
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ],
      },
    optimization: {
        splitChunks: { 
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                },
            },
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true
            }),
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css'
        })
    ]
});