const path = require('path');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインのJS。エントリーポイント
  entry: path.resolve(__dirname, 'src/js/index.js'),

  output: {
    // 出力先のディレクトリ
    path: path.resolve(__dirname, 'dest/js'),
    // 出力ファイル名
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        // 除外するディレクトリ
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
};
