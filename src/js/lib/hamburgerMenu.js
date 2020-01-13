// ハンバーガーメニュー
export class HamburgerMenu {
  // ハンバーガーメニュー コンストラクタ
  constructor() {
    this.hamburgerBtn = document.getElementById('js-menu-icon');
    this.navMenu = document.getElementById('js-nav-menu');
    this.toggleClass = 'toggle';
  }

  // 初期化処理
  init() {
    this.attachEvent();
  }

  // メニューを開く
  open() {
    this.navMenu.classList.add(this.toggleClass);
    this.hamburgerBtn.classList.add(this.toggleClass);
    this.hamburgerBtn.classList.remove('fa-bars');
    this.hamburgerBtn.classList.add('fa-times');
  }

  // メニューを閉じる
  close() {
    this.navMenu.classList.remove(this.toggleClass);
    this.hamburgerBtn.classList.remove(this.toggleClass);
    this.hamburgerBtn.classList.remove('fa-times');
    this.hamburgerBtn.classList.add('fa-bars');
  }

  // メニューボタンを押したときの処理（メニュー開閉の判定）
  openAndClose() {
    // ハンバーガーメニュー要素にtoggleClassが無い場合は開き、ある場合は閉じる
    if (!this.navMenu.classList.contains(this.toggleClass)) {
      this.open();
    } else {
      this.close();
    }
  }

  // メニューボタンをクリックした時のイベントリスナーを登録
  attachEvent() {
    this.hamburgerBtn.addEventListener(
      'click',
      this.openAndClose.bind(this),
      false
    );
  }
}
