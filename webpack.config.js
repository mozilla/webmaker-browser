var path = require('path');

module.exports = {
  entry: __dirname + '/src/main.jsx',
  output: {
    path: __dirname + '/build/js',
    filename: '[name].bundle.js'
  },
  externals: {
    'react': 'React',
    'react/addons': 'React'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.jsx$/,
        loaders: ['babel-loader', 'jsx-loader'],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loaders: ['json-loader'],
        include: [path.resolve(__dirname, 'www_src'),  path.resolve(__dirname, 'node_modules')]
      }
    ]
  }
};
