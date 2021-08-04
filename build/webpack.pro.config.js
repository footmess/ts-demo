// 每次打包后清除dist目录
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  plugins: [new CleanWebpackPlugin()],
}
