export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (!this.evaluationWarningMessage) {
      throw new Error("Class extending Building must override evaluationWarningMessage");
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqftNum) {
    this._sqft = sqftNum;
  }
  evaluationWarningMessage() {
  }
}
