const path = require('path');

module.exports = {
  mode: 'production',
  watch: true,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'personalWebsite.bundle.js',
  },
  module: {rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]},


};
