const path = require('path');
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client//public/index.js',
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
          use: ['style-loader', 'css-loader', 'sass-loader']
    }
    ],
  },
  devServer: {
      publicPath: '/build',
      proxy: {
          '/api' : 'http://localhost:3000'
      }
  }
};
