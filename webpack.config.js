const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const fs = require('fs');

const entry = {};
fs.readdirSync(__dirname + '/src').filter(file=> {
  if (!file.includes('.')) {
    entry[file] = `./src/${file}`;
  }
})
entry['/'] = `./src`;

module.exports = {
  entry,
  output: {
    path: __dirname + '/lib',
    filename: '[name]/index.js',
    library: 'index',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions:[".js",".vue"],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!postcss-loader!sass-loader"})
      }, {
        test: /\.(png|jpg)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
            name: '[name].[ext]?[hash]',
            publicPath:'../'
        }
      }
    ]
  },
  watch:true,
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({
      filename: getPath => getPath('[name]/style.css'),
      allChunks: false
    }),
    new webpack.DefinePlugin({MULTY: true}),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    }),
  ]
}
