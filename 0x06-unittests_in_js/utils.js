const Utils = {
  calculateNumber: (ops, a, b) => {
    let ret = 0;
    /*switch (ops) {
      case 'SUM':
        ret = Math.round(a) + Math.round(b);
        break;
      case 'DIVIDE':
        if (b === 0) {
          return 'Error';
        }
	ret = Math.round(a) / Math.round(b);
        break;
      case 'SUBTRACT':
	ret = Math.round(a) - Math.round(b);
        break;
      default:
        ret = 'Operation not found';
    }
    */
    if (ops === 'SUM') {
      ret = Math.round(a) + Math.round(b);
    }
    if (ops === 'DIVIDE') {
      if (b === 0) {
        return 'Error';
      }
      ret = Math.round(a) / Math.round(b);
    }
    if (ops === 'SUBTRACT') {
	ret = Math.round(a) - Math.round(b);
    }
    return ret
  },
toLowerCase: (str) => {
    return String.toLowerCase(str)
  }
}
module.exports = Utils;
