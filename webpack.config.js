var webpack = require('webpack');
var minify = process.env.minify === "true";

module.exports = {
    entry: "./required-modules.js",
    output: {
        path: "./app/generated",
        filename: "merged-modules.js"
    },
    plugins: minify ? [new webpack.optimize.UglifyJsPlugin()] : []
};