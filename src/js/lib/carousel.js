// カルーセル
export class Carousel {
  constructor() {
    this.carouselSlide = document.querySelector('.p-carousel-slide');
    this.carouselImages = document.querySelectorAll('.c-media__carousel');
    // ボタン
    this.prevBtn = document.querySelector('#prevBtn');
    this.nextBtn = document.querySelector('#nextBtn');
  }

  init() {
    this.attachEvent();
  }

  attachEvent() {
    let counter = 1;
    const size = this.carouselImages[0].clientWidth;

    this.carouselSlide.style.transform =
      'translateX(' + -size * counter + 'px)';

    this.nextBtn.addEventListener(
      'click',
      () => {
        if (counter >= this.carouselImages.length - 1) return;
        this.carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        this.carouselSlide.style.transform =
          'translateX(' + -size * counter + 'px)';
      },
      false
    );

    this.prevBtn.addEventListener(
      'click',
      () => {
        if (counter <= 0) return;
        this.carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        this.carouselSlide.style.transform =
          'translateX(' + -size * counter + 'px)';
      },
      false
    );

    this.carouselSlide.addEventListener(
      'transitionend',
      () => {
        if (this.carouselImages[counter].id === 'lastClone') {
          this.carouselSlide.style.transition = 'none';
          counter = this.carouselImages.length - 2;
          this.carouselSlide.style.transform =
            'translateX(' + -size * counter + 'px)';
        }

        if (this.carouselImages[counter].id === 'firstClone') {
          this.carouselSlide.style.transition = 'none';
          counter = this.carouselImages.length - counter;
          this.carouselSlide.style.transform =
            'translateX(' + -size * counter + 'px)';
        }
      },
      false
    );
  }
}
