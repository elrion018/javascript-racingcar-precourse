import { splitCarNames, sortedByDistance } from '../../utils';
import { Car } from '../../models';
import { message } from '../../constants';

export default class RacingCarGameViewModel {
  constructor() {
    this._roundCount = 0;
    this._cars = [];
    this._intermediateResults = [];

    this.MAX_LENGTH = 5;
  }

  getIntermediateResults() {
    return [...this._intermediateResults];
  }

  setCarInstances(carNames) {
    const splitedCarNames = splitCarNames(carNames);

    const errorMessage = this.validCarNames(splitedCarNames);

    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    this._cars = splitedCarNames.map(carName => {
      return new Car(carName);
    });
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

  validCarNames(carNames) {
    if (this.nameIsBlank(carNames)) {
      return message.nameIsBlank;
    }

    if (this.nameIsLongerThan(carNames, this.MAX_LENGTH)) {
      return message.isfiveLength;
    }

    if (this.nameIsOverLaped(carNames)) {
      return message.isOverLaped;
    }
  }

  nameIsBlank(carNames) {
    if (carNames[0] === '') {
      return true;
    }

    for (let i = 0; i < carNames.length; i++) {
      if (carNames[i].trim() === '') {
        return true;
      }
    }
  }

  nameIsLongerThan(carNames, maxLength) {
    for (let i = 0; i < carNames.length; i++) {
      if (carNames[i].length > maxLength) {
        return true;
      }
    }
  }

  nameIsOverLaped(carNames) {
    console.log(carNames);
    const names = {};

    for (let i = 0; i < carNames.length; i++) {
      if (carNames[i] in names) {
        return true;
      }
      names[carNames[i]] = true;
    }
  }
}
