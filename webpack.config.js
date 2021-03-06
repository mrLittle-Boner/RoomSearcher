const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackplugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: "development",
  // devtool: "cheap-module-source-map",
  context: path.join(__dirname, 'src'),
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
    }
  },

  entry: "./index.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.pug$/,
        use: [
          'pug-loader'
        ]

      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()],
            },
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackplugin({
      patterns: [
        { from: './assets/images/', to: '../dist/images/' },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.pug',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'search-room.html',
      template: './pages/search-room.pug',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'room-dets.html',
      template: './pages/room-dets.pug',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'registration.html',
      template: './pages/registration.pug',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './pages/login.pug',
      minify: false,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
};