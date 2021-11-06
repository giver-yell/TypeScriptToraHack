const path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  // import, export時の拡張子の省略
  resolve: {
    extensions: ['.ts, .js']
  },
  // ローカルサーバーの設定
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // 自動立ち上げ
    open: true
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/
      }
    ]
  }
}
