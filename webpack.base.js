const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
    entry: "./src/app/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "/dist"
    },

    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /(node_modules)/,
                loaders: ['ng-annotate-loader', {loader: 'babel-loader', options: {presets: ['es2015']}}]
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader',
                options: {limit: 10000, name: '/assets/img/[name].[ext]'}
            },
            {
                test: /\.scss$/, loader: ExtractTextPlugin.extract({
                use: [{loader: "css-loader"}, {loader: "sass-loader"}], fallback: "style-loader"
            })
            }
        ]
    }
};