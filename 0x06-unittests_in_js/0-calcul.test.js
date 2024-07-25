const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should return 3', function () {
    assert.equal(calculateNumber(1.2, 1.5), 3);
  });
});
describe('calculateNumber', function () {
  it('should return 10', function () {
    assert.equal(calculateNumber(7.8, 1.5), 10);
  });
});
describe('calculateNumber', function () {
  it('should return 4', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
});
describe('calculateNumber', function () {
  it('should return 3', function () {
    assert.equal(calculateNumber(1, 1.5), 3);
  });
});
describe('calculateNumber', function () {
  it('should return 7', function () {
    assert.equal(calculateNumber(4.8, 1.9), 7);
  });
});
describe('calculateNumber', function () {
  it('should return 62', function () {
    assert.equal(calculateNumber(12, 50), 62);
  });
});
describe('calculateNumber', function () {
  it('should return 48', function () {
    assert.equal(calculateNumber(31.465, 17.0046), 48);
  });
});
describe('calculateNumber', function () {
  it('should return 39', function () {
    assert.equal(calculateNumber(14.2, 24.5), 39);
  });
});
describe('calculateNumber', function () {
  it('should return 4', function () {
    assert.equal(calculateNumber(1.7638, 1.5), 4);
  });
});
describe('calculateNumber', function () {
  it('should return 90', function () {
    assert.equal(calculateNumber(44.24986, 45.7455), 90);
  });
});
describe('calculateNumber', function () {
  it('should return 101', function () {
    assert.equal(calculateNumber(90, 10.9985), 101);
  });
});
