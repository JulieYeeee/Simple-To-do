const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "main.bundle.js",
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "public"),
        },
        port: 5000,
        historyApiFallback: true,
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./base.html",      
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        })
    ],
    module:{
		rules:[
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader,"css-loader"]
			},
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        } 
      }, 
		],
	},
  };
  
