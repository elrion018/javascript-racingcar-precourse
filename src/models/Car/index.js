import { getRandomNumber } from '../../utils';

export default class Car {
  constructor() {
    this._distances = 0;
    this.MAX_NUMBER = 10;
    this.MIN_NUMBER = 0;
  }

  getDistances() {
    return this._distances;
  }

  goForWard() {
    if (getRandomNumber(this.MAX_NUMBER, this.MIN_NUMBER) >= 4) {
      this._distances++;
    }
  }
}
