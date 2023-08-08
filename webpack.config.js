const path = require('path');

module.exports = {
  output: {
    filename: '[name].pack.js',
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  entry: {
    index: './index.js' // Change this to your entry file
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Specifies the content base directory
    },
    port: 8080, // Change to your desired port
    open: true // Automatically open in browser
  }
};
