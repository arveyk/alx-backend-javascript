import Car from './10-car';

export default class EVcar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(evRange) {
    this._range = evRange;
  }

  static cloneCar() {
    return new Car();
  }
}
