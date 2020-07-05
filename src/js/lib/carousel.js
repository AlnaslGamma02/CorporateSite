// カルーセル
export default class {
  constructor() {
    this.carouselSlide = document.querySelector('.c-carousel-slide');
    this.carouselImages = document.querySelectorAll('.c-carousel-image');
    // ボタン
    this.prevBtn = document.querySelector('#prevBtn');
    this.nextBtn = document.querySelector('#nextBtn');
  }

  init() {
    this.attachEvent();
  }

  attachEvent() {
    // カウンター
    let counter = 1;
    let size = this.carouselImages[0].clientWidth;

    this.carouselSlide.style.transform = `translateX(${-size * counter}px)`;

    // ウィンドウ リサイズ対応
    window.onresize = () => {
      size = this.carouselImages[0].clientWidth;
      this.carouselSlide.style.transition = 'none';
      this.carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    };

    // 次へボタンリスナー
    this.nextBtn.addEventListener(
      'click',
      () => {
        if (counter >= this.carouselImages.length - 1) return;
        this.carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter += 1;
        this.carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      },
      false
    );

    // 前へボタンリスナー
    this.prevBtn.addEventListener(
      'click',
      () => {
        if (counter <= 0) return;
        this.carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter -= 1;
        this.carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      },
      false
    );

    // CSS アニメーションの終了時に判定
    this.carouselSlide.addEventListener(
      'transitionend',
      () => {
        if (this.carouselImages[counter].id === 'lastClone') {
          this.carouselSlide.style.transition = 'none';
          counter = this.carouselImages.length - 2;
          this.carouselSlide.style.transform = `translateX(${-size *
            counter}px)`;
        }

        if (this.carouselImages[counter].id === 'firstClone') {
          this.carouselSlide.style.transition = 'none';
          counter = this.carouselImages.length - counter;
          this.carouselSlide.style.transform = `translateX(${-size *
            counter}px)`;
        }
      },
      false
    );
  }
}
