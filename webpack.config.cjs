const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './html/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    devtool: 'source-map',
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:{
                    presets:[
                        "@babel/preset-env",
                        ["@babel/preset-react", {"runtime": "automatic"}]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "html/index.html"
        })
    ],
    mode: "development",
    performance: {
        hints: false,
    }
}