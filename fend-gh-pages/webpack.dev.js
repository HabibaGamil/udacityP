const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {

    mode:'development',
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
devServer : {
    port : 8080,
    proxy: {
        '/getAnalysis': 'http://localhost:3000/getAnalysis'
    },
    contentBase: path.join(__dirname,'dist')
},
plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/index.html",
        filename: "./index.html",
    })]


}