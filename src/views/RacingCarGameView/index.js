import { RacingCarGameViewDelegator } from '../../eventDelegators';

export default class RacingCarGameView {
  constructor(viewModel) {
    this.viewModel = viewModel;

    const eventDelegator = new RacingCarGameViewDelegator(this.viewModel);

    eventDelegator.bindView(this);
    eventDelegator.bindEvent(document.querySelector('.car-game-container'));
  }

  subscribeViewModel() {
    this.viewModel.registerView(this);
  }

  updateChangedDistances() {
    this.viewModel.getCarDistances();
  }
}
