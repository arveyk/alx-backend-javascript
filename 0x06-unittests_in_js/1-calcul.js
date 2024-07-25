function calculateNumber(type, a, b) {
  const num1 = Math.round(a);
  const num2 = Math.round(b);
  if (type === 'SUM') {
    return num1 + num2;
  } else if (type === 'SUBTRACT') {
    return num1 - num2;
  } else if (type === 'DIVIDE') {
    return num1 / num2;
  }
}
module.exports = calculateNumber;
