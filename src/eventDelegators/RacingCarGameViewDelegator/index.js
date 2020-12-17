export default class RacingCarGameViewDelegator {
  constructor(viewModel) {
    this.viewModel = viewModel;
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

  addCarNames() {
    this.viewModel.setCarInstances(this.element.querySelector('#car-names-input').value);
  }

  addRoundCount() {
    const judge = this.viewModel.setRoundCount(this.element.querySelector('#racing-count-input'));
    if (judge) {
      this.view.renderResult();
    }
  }
}
