// ハンバーガーメニュー モジュールの読み込み
import HamburgerMenu from './lib/hamburgerMenu';
// アコーディオン モジュールの読み込み
import Accordion from './lib/accordion';
// カルーセル モジュールの読み込み
import Carousel from './lib/carousel';

// HTML文書の読み込み終了後に動作する
document.addEventListener(
  'DOMContentLoaded',
  function() {
    // ハンバーガーメニューの生成・初期化を行う
    const hamburger = new HamburgerMenu();
    hamburger.init();

    // アコーディオンの生成・初期化を行う
    const accordion = new Accordion();
    accordion.init();

    // カルーセルの生成・初期化を行う
    const carousel = new Carousel();
    carousel.init();
  },
  false
);
