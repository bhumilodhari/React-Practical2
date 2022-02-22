const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$|jsx/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}