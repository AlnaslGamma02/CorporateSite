// パッケージ読み込み
// gulp 本体
const { watch, src, dest, series } = require('gulp');
// Sass コンパイラ
const gulpSass = require('gulp-sass');
// フォルダ内のファイルをまとめて読み込み
const sassGlob = require('gulp-sass-glob');
// エラー発生した時に停止しない
const plumber = require('gulp-plumber');
// エラーをデスクトップ表示
const notify = require('gulp-notify');
// PostCSS 読み込み
const postcss = require('gulp-postcss');
// ベンダープレフィックス自動付与
const autoprefixer = require('autoprefixer');
// CSS プロパティ記述順を自動ソート
const cssdeclsort = require('css-declaration-sorter');
// メディアクエリをまとめる
const mqpacker = require('css-mqpacker');
// 画像圧縮プラグイン
const imagemin = require('gulp-imagemin');
// jpeg 画像圧縮用プラグイン
const mozjpeg = require('imagemin-mozjpeg');
// png 画像圧縮用プラグイン
const pngquant = require('imagemin-pngquant');
// 画像フォルダ内の差分チェックに利用
const changed = require('gulp-changed');
// webpack本体
const webpack = require('webpack');
// gulpでwebpack使用するのに必要
const webpackStream = require('webpack-stream');

// ディレクトリ定義
const paths = {
  sassSrc: './src/sass/**/*.scss',
  imgSrc: './src/img/*.+(jpg|jpeg|png|gif|svg)',
  jsSrc: './src/js/**/*.js',
  outCss: './dest/css',
  outImg: './dest/img',
  outJs: './dest/js'
};

// Sass コンパイル設定
// node-sass でコンパイルする事を明示
gulpSass.compiler = require('node-sass');

function sass() {
  return src(paths.sassSrc, { sourcemaps: true })
    .pipe(
      plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
    )
    .pipe(sassGlob())
    .pipe(gulpSass({ outputStyle: 'expanded' }))
    .pipe(postcss([mqpacker()]))
    .pipe(postcss([cssdeclsort({ order: 'alphabetically' })]))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest(paths.outCss, { sourcemaps: '.' }));
}

// 画像圧縮設定
function imgComp() {
  const srcGlob = paths.imgSrc;
  const dstGlob = paths.outImg;

  return src(srcGlob)
    .pipe(changed(dstGlob))
    .pipe(
      imagemin([
        pngquant({
          quality: [0.7, 0.8],
          speed: 1
        }),
        mozjpeg({
          quality: 80
        }),
        imagemin.svgo(),
        imagemin.gifsicle()
      ])
    )
    .pipe(dest(dstGlob));
}

// webpack & Babel 設定
// webpackの設定ファイルの読み込み
const webpackConfig = require('./webpack.config.js');

function build() {
  // webpackStreamの第2引数にwebpackを渡す
  return webpackStream(webpackConfig, webpack).pipe(dest(paths.outJs));
}

// Watcher 設定
function watcher() {
  watch(paths.sassSrc, series(sass));
  watch(paths.imgSrc, imgComp);
  watch(paths.jsSrc, build);
}

// gulp コマンド設定
exports.sass = sass;
exports.img = imgComp;
exports.build = build;
exports.watch = watcher;
exports.default = watcher;
