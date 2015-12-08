var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: __dirname +  "/src",

  output: {
    path: __dirname + "/dist",
    filename: "react-smart-app-banner-example-bundle.js"
  },

  module: {
    loaders: [
      {
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  resolve: {
    alias: {
      'react-smart-app-banner': path.resolve(__dirname, '../dist/react-smart-app-banner-bundle.js')
    }
  }
}
