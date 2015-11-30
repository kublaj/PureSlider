var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/pureslider.js',
  output: {
    filename: 'pureslider.js',
    path: './lib',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('postcss')
      }
    ]
  },
  postcss: function(){
    return [require('postcss-nested'), require('autoprefixer')]
  },
  plugins: [
    new ExtractTextPlugin('./dist/pureslider.dist.css')
  ]
}