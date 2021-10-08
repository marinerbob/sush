const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

module.exports = {
    entry: {
        main: path.resolve(SRC_DIR, 'index.js')
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: DIST_DIR
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                exclude: /node_modules|fonts/,
                loader: 'ts-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot|png|svg|jpg|gif|pdf|ico)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(PUBLIC_DIR, 'index.html'),
            favicon: path.resolve(PUBLIC_DIR, 'favicon.ico')
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"],
        alias: { 
            src: SRC_DIR,
            pages: path.resolve(SRC_DIR, 'pages'),
            common: path.resolve(SRC_DIR, 'common'),
            components: path.resolve(SRC_DIR, 'components'),
            reduxConfig: path.resolve(SRC_DIR, 'reduxConfig'),
            shells: path.resolve(SRC_DIR, 'shells'),
            utils: path.resolve(SRC_DIR, 'utils'),
            api: path.resolve(SRC_DIR, 'api')
        },
    }
};k