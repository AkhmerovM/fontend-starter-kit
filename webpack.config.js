const path = require('path');
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
}