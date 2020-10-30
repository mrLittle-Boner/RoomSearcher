const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "cheap-module-source-map",
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname , "dist"),
    filename: `[name].bundle.js`
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
        use: [
          'pug-loader'
        ],
      },
    ],
  },
  plugins: [
    // new SomeWebpackplugin({
    //   options:{

    //   }
    // }),
    new HtmlWebpackPlugin({
      name: '[name].html',
      template: './src/index.pug'
    })
  ],
};