import Building from "./5-building";

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floorMeasure) {
    this._floors = floorMeasure;
  }

  evacuationWarningMessage() {
    super.evacuationWarningMessage();
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
