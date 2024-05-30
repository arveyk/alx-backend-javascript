import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get currency() {
    return this._amount;
  }

  set currency (currency) {
    this._currency = currency;
  }
  
  static convertPrice(amount, conversionRate) {
    return Number(amount * conversionRate);
  }
}
