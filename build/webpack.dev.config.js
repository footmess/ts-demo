const webpack = require("webpack")
module.exports = {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        devtool: "cheap-module-eval-source-map",
      },
    }),
  ],
}
