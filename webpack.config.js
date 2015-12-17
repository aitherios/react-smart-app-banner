var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: __dirname +  "/src",

  output: {
    path: __dirname + "/dist",
    filename: "react-smart-app-banner-bundle.js",
    library: ['ReactSmartAppBanner'],
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ]
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    root: 'src'
  },

  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  }
}
