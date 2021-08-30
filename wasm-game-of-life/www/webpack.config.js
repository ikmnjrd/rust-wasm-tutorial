const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['index.html'])
  ],
  
  devServer:{
    /* Docker経由でメインPCのWebブラウザと繋ぐため */
    host: '0.0.0.0',
    /* SOCKS通信？のためにWebブラウザが使用するポートを指定 */
    sockPort: 3000,
  },
  /* webブラウザで開いた時に出るwarning文の対策 */
  devtool: "eval-cheap-source-map",
};
