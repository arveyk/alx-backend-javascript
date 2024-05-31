export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(codejs) {
    this._code = codejs;
  }

  get name() {
    return this._name;
  }

  set name(namejs) {
    this._name = namejs;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
