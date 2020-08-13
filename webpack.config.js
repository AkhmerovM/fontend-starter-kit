const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const paths = {
    build: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
}
const styleLoader = {
    loader: isProd ? 'style-loader' : MiniCssExtractPlugin.loader
}
// const cssModuleLoader = {
//     loader: 'css-loader', options: {modules: false}
// }
// const miniCssExtractLoader = {
//     loader: 'css-loader', options: {modules: false}
// }
const cssLoader = {
    loader: 'css-loader', options: {modules: false}
}
module.exports = {
    context: paths.src,
    entry:  {
        main: './index.js',
    },
    output: {
        path: paths.build,
        filename: "[name].min.js"
    },
    module:  {
        rules: [
            // { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.css$/,
                use: [styleLoader, cssLoader]
            },
            // { test: /\.less$/, use: ['css-loader', 'less-loader'] },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    devtool: 'source-map',
    watch: isDev,
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [paths.src, 'node_modules']
    },
    devServer: {
        contentBase: paths.build,
        compress: true,
        port: 9000,
        writeToDisk: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({title: "Webpack App", template: path.join(paths.src, './index.html')}),
        new MiniCssExtractPlugin({filename: '[name].min.css'}),
        // new BundleAnalyzerPlugin()
    ],
    optimization: {
        minimize: isProd,
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            automaticNameDelimiter: '.',
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
   },

};
