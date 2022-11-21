const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/webpack'),
        filename: 'ribbon-menu-react.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:{
                    presets:[ "@babel/preset-react"]    // используемые плагины
                }
            },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode: "production"
}