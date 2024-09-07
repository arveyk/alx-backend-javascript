const Utils = {
  calculateNumber: (ops, a, b) => {
    let ret = 0;
    switch (ops) {
      case 'SUM':
        ret = Math.round(a) + Math.round(b);
        break;
      case 'DIVIDE':
	ret = Math.round(a) / Math.round(b);
        break;
      case 'SUBTRACT':
	ret = Math.round(a) - Math.round(b);
        break;
      default:
        ret = 'Operation not found';
    }
    return ret
  }
}
module.exports = Utils;
