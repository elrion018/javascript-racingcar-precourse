export default class RacingCarGameViewDelegator {
  constructor() {
    this.view = null;
    this.element = null;
  }

  bindView(view) {
    this.view = view;
  }

  bindEvent(element) {
    this.element = element;

    this.element.addEventListener('click', this.onClick.bind(this));
  }

  onClick(event) {
    const { dataset } = event.target;

    if (dataset.purpose) {
      this[dataset.purpose]();
    }
  }
}
