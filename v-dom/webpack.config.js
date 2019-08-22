const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html", // 模板名字
  filename: "index.html" // 输出文件名字
});

module.exports = {
  entry: {
    // pageA: './src/pag-a.js',
    pageB: './src/index.js',
    // Other: './src/Other.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true,
    port: 3003
  },
  plugins: [
    htmlPlugin
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
	 occurrenceOrder: true // To keep filename consistent between different modes (for example building only)
	}
};