const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber function', function () {
  describe('#calculateNumber()', function () {
    it('should return 3', function () {
      assert.equal(calculateNumber(1.2, 1.5), 3);
    });
  });
});
