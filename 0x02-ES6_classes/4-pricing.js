import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (Number.isNaN(amount)) {
      throw new TypeError('Amount must be a number');
    }
    this._amount = Number(amount);
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    }
    throw new TypeError('currency must be of type Currency');
  }

  displayFullPrice() {
    return `${this.amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return Number(amount * conversionRate);
  }
}
