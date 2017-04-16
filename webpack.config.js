let merge = require("webpack-merge");
let base = require("./webpack.base");

module.exports = merge(base, {
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        port: 3000,
        contentBase: './src',
        stats: {children: false}
    }
});