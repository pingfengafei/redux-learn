var webpack = require('webpack')

var path = require('path')


// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

module.exports = {
    node: {
        tap: 'empty',
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        fs: 'empty',
        dgram: 'empty',
        child_process :'empty'
    },
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    eslint: {
        configFile: '.eslintrc'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            }
        ],
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ]
    }
}
