// ハンバーガーメニュー コンストラクタ
const HamburgerMenu = function() {
  this.hamburgerBtn = document.getElementById('js-menu-icon');
  this.navMenu = document.getElementById('js-nav-menu');
  this.toggleClass = 'toggle';
};
// ハンバーガーメニュー コンストラクタにメソッドを定義
HamburgerMenu.prototype = {
  // 初期化処理
  init: function() {
    this.attachEvent();
  },
  // メニューを開く
  open: function() {
    this.navMenu.classList.add(this.toggleClass);
    this.hamburgerBtn.classList.add(this.toggleClass);
    this.hamburgerBtn.classList.remove('fa-bars');
    this.hamburgerBtn.classList.add('fa-times');
  },
  // メニューを閉じる
  close: function() {
    this.navMenu.classList.remove(this.toggleClass);
    this.hamburgerBtn.classList.remove(this.toggleClass);
    this.hamburgerBtn.classList.remove('fa-times');
    this.hamburgerBtn.classList.add('fa-bars');
  },
  // メニューボタンを押したときの処理（メニュー開閉の判定）
  openAndClose: function() {
    // ハンバーガーメニュー要素にtoggleClassが無い場合は開き、ある場合は閉じる
    if (!this.navMenu.classList.contains(this.toggleClass)) {
      this.open();
    } else {
      this.close();
    }
  },
  // メニューボタンをクリックした時のイベントリスナーを登録
  attachEvent: function() {
    this.hamburgerBtn.addEventListener(
      'click',
      this.openAndClose.bind(this),
      false
    );
  }
};
// HTML文書の読み込み終了後、ハンバーガーメニューの生成・初期化を行う
document.addEventListener(
  'DOMContentLoaded',
  function() {
    const hamburger = new HamburgerMenu();
    hamburger.init();
  },
  false
);
