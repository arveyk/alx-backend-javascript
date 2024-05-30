import Building from "./5-building.js";

export default class SkyHighBuilding extends Building {
  constructor(sqft, floor) {
    super(sqft);
    this._floor = floor;
  }

  get floor() {
    return this._floor;
  }

  set floor(floorMeasure) {
    this._floor = floorMeasure;
  }

  valuationWarningMessage() {
    super.valuationWarningMessage();
    return `Evacuate slowly the ${this._floor} floors.`;
  }
}
