export default class RacingCarGameView {
  constructor(viewModel) {
    this.viewModel = viewModel;
  }

  subscribeViewModel() {
    this.viewModel.registerView(this);
  }
}
