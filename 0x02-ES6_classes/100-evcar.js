import Car from "./10-car.js";

export default class EVcar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }
  get range() {
  }
  set range(evRange) {
  }
  cloneCar {
    super.cloneCar() {
      return new Car;
  }
}
