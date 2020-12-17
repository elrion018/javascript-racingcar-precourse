import { splitCarNames, sortedByDistance } from '../../utils';
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

    console.log(this._cars);
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

  getWinners() {
    const sortedCars = sortedByDistance(this._cars);
    const winnerDistance = sortedCars[0]._distances;

    return sortedCars.filter(car => {
      return car._distances === winnerDistance;
    });
  }
}
