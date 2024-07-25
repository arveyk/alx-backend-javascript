const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  it('should return 3', function () {
    assert.equal(calculateNumber('SUM', 1.2, 1.5), 3);
  });
});
describe('calculateNumber', function () {
  it('should return 4', function () {
    assert.equal(calculateNumber('DIVIDE', 7.8, 1.5), 4);
  });
});
describe('calculateNumber', function () {
  it('should return 0.25', function () {
    assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
  });
});
describe('calculateNumber', function () {
  it('should return 0.5', function () {
    assert.equal(calculateNumber('DIVIDE', 1, 1.5), 0.5);
  });
});
describe('calculateNumber', function () {
  it('should return 3', function () {
    assert.equal(calculateNumber('SUBTRACT', 4.8, 1.9), 3);
  });
});
describe('calculateNumber', function () {
  it('should return 62', function () {
    assert.equal(calculateNumber('SUM', 12, 50), 62);
  });
});
describe('calculateNumber', function () {
  it('should return 14', function () {
    assert.equal(calculateNumber('SUBTRACT', 31.465, 17.0046), 14);
  });
});
describe('calculateNumber', function () {
  it('should return 6.25', function () {
    assert.equal(calculateNumber('DIVIDE', 24.5, 4.25), 6.25);
  });
});
describe('calculateNumber', function () {
  it('should return 4', function () {
    assert.equal(calculateNumber('SUM', 1.7638, 1.5), 4);
  });
});
describe('calculateNumber', function () {
  it('should return -2', function () {
    assert.equal(calculateNumber('SUBTRACT', 44.24986, 45.7455), -2);
  });
});
describe('calculateNumber', function () {
  it('should return 8.181818181818182', function () {
    assert.equal(calculateNumber('DIVIDE', 90, 10.75985), 8.181818181818182);
  });
});
describe('calculateNumber', function () {
  it('should return Error', function () {
    assert.throws(() => {
	    calculateNumber('DIVIDE', 90, 0.0)
    }, Error, 'Infinity');
  });
});
