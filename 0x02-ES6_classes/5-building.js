export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this.evaluationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqftNum) {
    this._sqft = sqftNum;
  }

  evaluationWarningMessage() {
    const proto = Object.getPrototypeOf(this);
    const superProto = Building.prototype;
    const missing = Object.getOwnPropertyNames(superProto)
      .find(name => typeof superProto[name] === 'function' && !proto.hasOwnProperty(name)
      );
    if (missing) {
      throw new Error('class Extending building must override evaluationWarningMessage');
    }
  }
}
