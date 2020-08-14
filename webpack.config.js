const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const isAnalyze = process.env.ANALYZE === 'true';

const paths = {
    build: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
};
const styleLoader = {
    loader: isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
};
const cssModuleLoader = {
    loader: 'css-loader', options: { modules: true },
};
const cssLoader = {
    loader: 'css-loader', options: { modules: false },
};
const postCssLoader = {
    loader: 'postcss-loader',
};
const lessLoader = {
    loader: 'less-loader',
};
const SvgrWebpackLoader = {
    loader: '@svgr/webpack',
    options: {
        svgoConfig: {
            plugins: {
                removeViewBox: false,
            },
        },
    },
};
module.exports = {
    context: paths.src,
    entry: {
        main: './index.jsx',
    },
    output: {
        path: paths.build,
        filename: '[name].min.js',
    },
    module: {
        rules: [
            {
                exclude: /\.local\.css/u,
                test: /\.css$/u,
                use: [styleLoader, cssLoader, postCssLoader],
            },
            {
                test: /\.local\.css/u,
                use: [styleLoader, cssModuleLoader, postCssLoader],
            },
            {
                exclude: /\.local\.less$/u,
                test: /\.less$/u,
                use: [styleLoader, cssLoader, postCssLoader, lessLoader],
            },
            {
                test: /\.local\.less/u,
                use: [styleLoader, cssModuleLoader, postCssLoader, lessLoader],
            },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.svg$/,
                use: [SvgrWebpackLoader, 'url-loader'],
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: path.join('images', '[hash:10].[name].[ext]'),
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/u,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash:10].[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    devtool: 'source-map',
    watch: isDev,
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [paths.src, 'node_modules'],
    },
    devServer: {
        contentBase: paths.build,
        compress: true,
        port: 9000,
        writeToDisk: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ title: 'Webpack App', template: path.join(paths.src, './index.html') }),
        new MiniCssExtractPlugin({ filename: '[name].min.css' }),
    ].concat(isAnalyze ? new BundleAnalyzerPlugin() : []),
    optimization: {
        minimize: isProd,
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            automaticNameDelimiter: '.',
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },

};
