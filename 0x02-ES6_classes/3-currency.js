export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(codejs) {
    if (typeof(codejs) === String) {
      this._code = codejs;
    }
  }

  get name() {
    return this._name;
  }

  set name(namejs) {
    if (typeof(namejs) === String) {
      this._name = namejs;
    }
  }

  displayFullCurrency() {
    return `${this._name}(${this._code})`;
  }
}
