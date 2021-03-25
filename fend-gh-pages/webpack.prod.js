const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {

    mode:'production',
    devtool: 'source-map',   
    entry: './src/client/index.js',

    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                },
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
         }
        ]
},
plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/index.html",
        filename: "./index.html",
    }),
    new WorkboxPlugin.GenerateSW()]

}