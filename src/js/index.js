// ハンバーガーメニュー モジュールの読み込み
import { HamburgerMenu } from './lib/hamburgerMenu';
// アコーディオン モジュールの読み込み
import { Accordion } from './lib/accordion';

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
  },
  false
);
