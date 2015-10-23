var path = require('path');

var WEBMAKER_CORE_DIR = require('./npm_tasks/build-core').WEBMAKER_CORE_DIR;

module.exports = {
  entry: __dirname + '/src/main.jsx',
  output: {
    path: __dirname + '/build/js',
    filename: '[name].bundle.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  devtool: 'source-map',
  fallback: path.join(__dirname, "node_modules"),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [
          WEBMAKER_CORE_DIR,
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.jsx$/,
        loaders: ['babel-loader', 'jsx-loader'],
        include: [
          WEBMAKER_CORE_DIR,
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.json$/,
        loaders: ['json-loader'],
        include: [
          WEBMAKER_CORE_DIR,
          path.resolve(__dirname, 'www_src'),
          path.resolve(__dirname, 'src/locales'),
          path.resolve(__dirname, 'node_modules')
        ]
      }
    ]
  }
};
