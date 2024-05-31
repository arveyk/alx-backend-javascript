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
    if (Number.isNaN(amount) {
      throw new TypeError('Amount must be a number');
    }
    else {
      this._amount = Number(amount);
    }
  }

  get currency() {
    return this._amount;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    }
    else {
      throw new TypeError('currency must be of type Currency');
    }
  }

  static convertPrice(amount, conversionRate) {
    return Number(amount * conversionRate);
  }
}
