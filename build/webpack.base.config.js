// 通过模板生成html
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "app.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    // 定义规则
    rules: [
      {
        test: /\.tsx?$/i,
        // 使用ts-loader来处理文件
        use: [{ loader: "ts-loader" }],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/tpl/index.html" })],
}
