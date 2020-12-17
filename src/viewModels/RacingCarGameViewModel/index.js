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
}
