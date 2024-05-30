export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
  toString() {
    return `Airport [${this._code}] { _name: ${this._name}, code: ${this._code} }`;
  }
