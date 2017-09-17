let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let merge = require("webpack-merge");
let base = require("./webpack.base");

module.exports = merge(base, {
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            canPrint: true
        }),
        new webpack.optimize.UglifyJsPlugin({comments: false}),
        new CopyWebpackPlugin([{from: "./src", ignore: ["app/**", "**/scss/**"]}])
    ],
    output: {
        path: __dirname + '/.dist',
        filename: "bundle.js"
    }
});