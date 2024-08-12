export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqftNum) {
    this._sqft = sqftNum;
  }

  evacuationWarningMessage() {
    // const proto = Object.getPrototypeOf(this);
    const superProto = Building.prototype;
    const missing = Object.getOwnPropertyNames(superProto).find((name) => typeof superProto[name] === 'function' && !Object.prototype.hasOwnProperty.call(this, name));
    if (missing) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
