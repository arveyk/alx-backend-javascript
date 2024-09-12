import Car from './10-car';

export default class EVcar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
    this._newInst = 'newStuff';
  }

  get range() {
    return this._range;
  }

  set range(evRange) {
    this._range = evRange;
  }

  cloneCar() {
    this._newInst = new Car();
    return this._newInst;
  }
}
