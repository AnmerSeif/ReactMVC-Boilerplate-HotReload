var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');

var config = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        APP_DIR + '/index.jsx',
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/dist/'
    },
    module: {
        loaders: [
          {
              test: /\.jsx?/,
              include: APP_DIR,
              loaders: ['react-hot', 'babel'],
              xclude: /node_modules/
          },
          {
              test: /\.css$/,
              loader: "style-loader!css-loader"
          },
          {
              test: /\.scss$/,
              loaders: ['style', 'css', 'sass']
          },
          {
              test: /\.png$/,
              loader: "url-loader?limit=100000"
          },
          {
              test: /\.jpg$/,
              loader: "file-loader"
          },
          {
              test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url?limit=10000&mimetype=application/font-woff'
          },
          {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url?limit=10000&mimetype=application/octet-stream'
          },
          {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file'
          },
          {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url?limit=10000&mimetype=image/svg+xml'
          }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        headers: { "Access-Control-Allow-Origin": "*" }
    }
};

module.exports = config;
