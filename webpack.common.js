const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname + "/dist")
  },
  devServer: {
    contentBase: path.resolve("./dist"),
    index: "index.html",
    port: 9000
  },
  module : {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: "/node_modules",
            use: ['babel-loader'],
        },
        {
            test: /\.(png|jpg|svg|ico)$/,
            use: ['file-loader'],
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader",
                    options: { minimize: true }
                }
            ]
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"]
        }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[contenthash].css'
    }),
    new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'assets', 'index.html'), // assets/index.html 파일을 읽는다.
        filename: 'index.html', // output으로 출력할 파일은 index.html 이다.
        favicon: path.resolve(__dirname, 'assets', 'favicon.ico')
    }),
    
    new CleanWebpackPlugin()
  ]
};