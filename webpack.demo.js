var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './demo/app.js'
    },
    output: {
        path: path.resolve(__dirname, './demo/dist'),
        filename: 'index.js',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.(css|scss)$/,
            loader: 'style-loader!css-loader!postcss-loader!sass-loader',
        },{
          test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
          loader: 'file-loader'
        }, {
          test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
          loader: 'file-loader',
          query: {
            name: '[name].[ext]?[hash]'
          }
        }]
    },
    devServer: {
      historyApiFallback: true,
      noInfo: true
    },
    watch:true,
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new HtmlWebpackPlugin({template: './index.html'}),
    ]
}
