const expect = require('chai').expect
  , calculateNumber = require('./2-calcul.js');

describe('calculateNumber', function () {
  it('should return 3', function () {
    expect(calculateNumber('SUM', 1.2, 1.5)).to.equal(3);
  });
});
describe('calculateNumber', function () {
  it('should return 4', function () {
    expect(calculateNumber('DIVIDE', 7.8, 1.5)).to.equal(4);
  });
});
describe('calculateNumber', function () {
  it('should return 0.25', function () {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
  });
});
describe('calculateNumber', function () {
  it('should return 0.5', function () {
    expect(calculateNumber('DIVIDE', 1, 1.5)).to.equal(0.5);
  });
});
describe('calculateNumber', function () {
  it('should return 3', function () {
    expect(calculateNumber('SUBTRACT', 4.8, 1.9)).to.equal(3);
  });
});
describe('calculateNumber', function () {
  it('should return 62', function () {
    expect(calculateNumber('SUM', 12, 50)).to.equal(62);
  });
});
describe('calculateNumber', function () {
  it('should return 14', function () {
    expect(calculateNumber('SUBTRACT', 31.465, 17.0046)).to.equal(14);
  });
});
describe('calculateNumber', function () {
  it('should return 6.25', function () {
    expect(calculateNumber('DIVIDE', 24.5, 4.25)).to.equal(6.25);
  });
});
describe('calculateNumber', function () {
  it('should return 4', function () {
    expect(calculateNumber('SUM', 1.7638, 1.5)).to.equal(4);
  });
});
describe('calculateNumber', function () {
  it('should return -2', function () {
    expect(calculateNumber('SUBTRACT', 44.24986, 45.7455)).to.equal(-2);
  });
});
describe('calculateNumber', function () {
  it('should return 8.181818181818182', function () {
    expect(calculateNumber('DIVIDE', 90, 10.75985)).to.equal(8.181818181818182);
  });
});
describe('calculateNumber', function () {
  it('should return Error', function () {
    try {
      expect(calculateNumber('DIVIDE', 90, 0.0)).to.throw(new Error('Error'));
    } catch (err) {
      expect(err).to.be.a('Error');
    }
  });
});
