const path = require('path');
module.exports = {
  mode: process.env.NODE_ENV,
  entry: '/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/preset-react'],
          },
        },
      },
      {
          test: /\.s?css/,
          use: ['style-loader', 'css-loader', ]
    }
    ],
  },
  devServer: {
      publicPath: '/build',
      proxy: {
          '/' : 'http://localhost:3000',
          port: 8080
        },
  }
};