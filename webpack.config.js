const path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  // import, export時の拡張子の省略
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // ローカルサーバーの設定
  devServer: {
    // webpack-dev-serverのv4からcontentBaseが利用できない
    // contentBase: path.join(__dirname, 'dist'),
    static: {
      directory : path.join(__dirname, 'dist')
    },
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
  },
    stats: {
    errorDetails: true
  }
}
