const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackplugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  // devtool: "cheap-module-source-map",
  context: path.join(__dirname, 'src'),
  entry: "./index.js",
  output: {
    path: path.join(__dirname , "dist"),
    // publicPath: path.resolve(__dirname , "dist"),
    publicPath: "",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      // {
      //   test: /\\.jsx?$/,
      //   loader: "loader",
      //   options: {
      //     option1: "option1"
      //   },
      //   use: [
      //     "htmllint-loader",
      //     {
      //       loader: "html-loader",
      //       options: {
      //         // ...
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.pug$/,
        use: ['pug-loader']

      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      name: 'index.html',
      template: './index.pug'
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackplugin({
      patterns: [
        { from: './assets/images/', to: '../dist/images/' },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};