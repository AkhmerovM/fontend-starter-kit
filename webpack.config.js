const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const paths = {
    build: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
}

module.exports = {
    entry: path.join(paths.src, 'index.js'),
    output: {
        path: paths.build,
        filename: "[name].min.js"
    },
    watch: isDev,
    resolve: {
        modules: ['node_modules', paths.src]
    },
    devServer: {
        contentBase: paths.build,
        compress: true,
        port: 9000,
        writeToDisk: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({title: "Webpack App"})
    ]

}