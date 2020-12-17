import { splitCarNames } from '../../utils';
import { Car } from '../../models';

export default class RacingCarGameViewModel {
  constructor() {
    this._roundCount = 0;
    this._cars = [];
  }

  setCarInstances(carNames) {
    this._cars = splitCarNames(carNames).map(carName => {
      return new Car(carName);
    });
  }

  setRoundCount(roundCount) {
    this._roundCount = roundCount;

    while (this._roundCount) {
      this.letCarsGoForward();
      this._roundCount--;
    }
  }

  letCarsGoForward() {
    this._cars.forEach(car => {
      car.goForWard();
    });
  }
}
