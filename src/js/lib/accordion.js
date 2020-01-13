// アコーディオン
export class Accordion {
  constructor() {
    this.acc = document.getElementsByClassName('p-accordion-button');
  }

  init() {
    this.attachEvent();
  }

  attachEvent() {
    for (let i = 0; i < this.acc.length; i++) {
      this.acc[i].addEventListener(
        'click',
        function() {
          const panel = this.nextElementSibling;

          if (panel.style.display === 'block') {
            panel.style.display = 'none';
          } else {
            panel.style.display = 'block';
          }
        },
        false
      );
    }
  }
}
