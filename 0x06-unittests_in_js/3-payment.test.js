const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment.js');
const assert = require('assert');

describe('sendPaymentRequestToApi', function() {
  it('should return total shipping cost', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(1.2, 1.5);
    expect(spy.called).to.be.true;
    /*
     * const result = sendPaymentRequestToApi.Utils.calculateNumber(1.2, 1.5);
     * expect(result).to.equal(Utils.calculateNumber('SUM', 1.2, 1.5));
     * assert.equal(res, Utils.calculateNumber('SUM', 1.2, 1.5));
     * spy.called
     */
    spy.restore();
  });
});
