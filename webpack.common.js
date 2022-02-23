const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$|jsx/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
                "@babel/preset-env", 
                "@babel/preset-react"
              ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
              'style-loader', 
              'css-loader'
             ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        
        type: "asset/resource",
      },
    ],
  },
}