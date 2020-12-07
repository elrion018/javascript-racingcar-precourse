import { Car } from '../../models';

export default class RacingCarGameModel {
  constructor() {
    this._carInstances = null;
    this._racingCount = null;
    this.subscriber = [];

    // return this.setProxy();
  }

  // setProxy() {
  //   return new Proxy(this, {
  //     get(target, property) {
  //       return target[property];
  //     },

  //     set(target, property, value) {
  //       if (property === '_carInstances') {
  //         return target.setInstances(target, property, value);
  //       }
  //       if (property === '_racingCount') {
  //         return target.setRacingCountAndGameContinue(target, property, value);
  //       }
  //     },
  //   });
  // }

  // setInstances(target, property, names) {
  //   const instances = names.map(name => {
  //     return new Car(name);
  //   });
  //   target._carInstances = instances;

  //   return true;
  // }

  setCarInstances(cars) {
    const instances = names.map(name => {
      return new Car(name);
    });

    this._carInstances = instances;
  }

  setRacingCountAndGameContinue(count) {
    console.log(count, typeof count);
    this._racingCount = count;

    while (this._racingCount) {
      this.gameContinue();
    }
  }

  // setRacingCountAndGameContinue(target, property, count) {
  //   target._racingCount = count;

  //   while (target._racingCount) {
  //     target.gameContinue();
  //   }

  //   return true;
  // }

  notifyChange() {
    this.subscriber.forEach(subscriber => {
      subscriber.updateChange(this);
    });
  }

  registerViewModels(target) {
    this.subscriber.push(target);
  }

  gameContinue() {
    this._carInstances.forEach(car => {
      car.moveForward();
    });
    this._racingCount--;

    this.notifyChange();
  }
}
