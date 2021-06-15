const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    
    mode: 'none',
  
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            },
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            options:{
              presets:["@babel/preset-env", "@babel/preset-react"]
            }
          }
        ]
      },
      

    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html"
        })
      ]
}