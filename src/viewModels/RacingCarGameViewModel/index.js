import { splitCarNames, sortedByDistance } from '../../utils';
import { Car } from '../../models';

export default class RacingCarGameViewModel {
  constructor() {
    this._roundCount = 0;
    this._cars = [];
    this._intermediateResults = [];
  }

  getIntermediateResults() {
    console.log(this._intermediateResults);
    return [...this._intermediateResults];
  }

  setCarInstances(carNames) {
    this._cars = splitCarNames(carNames).map(carName => {
      return new Car(carName);
    });

    console.log(this._cars);
  }

  setRoundCount(roundCount) {
    this._roundCount = roundCount.value;
    while (this._roundCount) {
      this.letCarsGoForward();

      let intermediateResult = this._cars.map(car => {
        return [car._carName, car._distances];
      });

      this._intermediateResults.push(intermediateResult);
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
