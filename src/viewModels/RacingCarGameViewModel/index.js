import { splitCarNames } from '../../utils';
import { Car } from '../../models';

export default class RacingCarGameViewModel {
  constructor() {
    this._roundCount = 0;
    this._cars = [];
    this.subscribers = [];
  }

  registerView(view) {
    this.subscribers.push(view);
  }

  getCarDistances() {
    return this._cars.map(car => {
      return [car._carName, car._distances];
    });
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

      this.subscribers.forEach(subscribe => {
        subscribe.updateChangedDistances();
      });

      this._roundCount--;
    }
  }

  letCarsGoForward() {
    this._cars.forEach(car => {
      car.goForWard();
    });
  }
}
