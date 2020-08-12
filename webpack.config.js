const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const paths = {
    build: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
}

module.exports = {
    context: paths.src,
    entry:  './index.js',
    output: {
        path: paths.build,
        filename: "[name].min.js"
    },
    module:  {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.less$/, use: 'less-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    devtool: 'source-map',
    watch: isDev,
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
        modules: [paths.src, 'node_modules']
    },
    devServer: {
        contentBase: paths.build,
        compress: true,
        port: 9001,
        writeToDisk: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({title: "Webpack App"})
    ]

};
console.log(path.resolve(__dirname, 'node_modules'));