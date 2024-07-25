const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestApi = require('./3-payment.js');
const assert = require('assert');

describe('sendPaymentRequestToApi', function() {
  it('should return total shipping const', function() {
    const spy = sinon.spy(Utils.calculateNumber);
    assert.equals(sendPaymentRequestApi(1.2, 1.5), spy('SUM', 1.2, 1.5));
    spy0.restore();
  });
});
describe('sendPaymentRequestToApi', function () {
  it('should return 3', function () {
    //assert.equals(sendPaymentRequestApi(1.2, 1.5), Utils.calculateNumber('SUM', 1.2, 1.5));
    const spy = sinon.spy(Utils.calculateNumber);
    const spy0 = sinon.spy(sendPaymentRequestApi);
    assert.equals(spy0(1.2, 1.5), spy('SUM', 1.2, 1.5));
    spy.restore();
    spy0.restore();
  });
});
describe('sendPaymentRequestToApi', function () {
  it('should return 4', function () {
    const spy = sinon.spy(Utils.calculateNumber);
    const spy0 = sinon.spy(sendPaymentRequestApi);
    assert.equals(spy0(7.8, 4), spy('SUM', 7.8, 4));
    spy.restore();
    spy0.restore();
  });
});
describe('sendPaymentRequestToApi', function () {
  it('should return 0.25', function () {
    const spy = sinon.spy(Utils.calculateNumber);
    const spy0 = sinon.spy(sendPaymentRequestApi);
    assert.equals(spy0(1, 3.7), spy('SUM', 1, 3.7));
    spy.restore();
    spy0.restore();
  });
});
describe('sendPaymentRequestToApi', function () {
  it('should return 0.5', function () {
    const spy = sinon.spy(Utils.calculateNumber);
    const spy0 = sinon.spy(sendPaymentRequestApi);
    assert.equals(spy0(1, 1.5), spy('SUM', 1, 1.5));
    spy.restore();
    spy0.restore();
  });
});
