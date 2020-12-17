import { RacingCarGameViewDelegator } from '../../eventDelegators';

import { addTemplateIntoDOMInnerHTML } from '../../utils';

export default class RacingCarGameView {
  constructor(viewModel) {
    this.viewModel = viewModel;
    this.gameContainer = document.querySelector('#car-game-container');
    this.eventDelegator = new RacingCarGameViewDelegator(this.viewModel);

    this.eventDelegator.bindView(this);
    this.eventDelegator.bindEvent(this.gameContainer);
  }

  renderResult() {
    this.renderIntermediateResultContainer();
    this.renderIntermediateResults(this.viewModel.getIntermediateResults());
  }

  renderIntermediateResultContainer() {
    addTemplateIntoDOMInnerHTML(
      this.gameContainer.querySelector('#racing-result-container'),
      `<div id="racing-intermediate-result-container"></div>`,
    );
  }

  renderIntermediateResults(intermediateResults) {
    intermediateResults.forEach(intermediateResult => {
      this.renderIntermediateResult(intermediateResult);
    });
  }

  renderIntermediateResult(intermediateResult) {
    addTemplateIntoDOMInnerHTML(
      this.gameContainer.querySelector('#racing-intermediate-result-container'),
      `
      <div>
        ${intermediateResult
          .map(car => {
            let [carName, distance] = car;
            return `
            <p>${carName}: ${'-'.repeat(distance)}</p>
          `;
          })
          .join('')}
      </div>
      `,
    );
  }

  renderWinners() {}
}
