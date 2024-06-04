const weakMap = new WeakMap();
const queryAPI = function(endPoint) {
  this.count = 0;
  endPoint.forEach(function(endPoint) {
    endPoint.count += 1;
    if (endPoint.count >= 5) {
      throw new Error("Endpoint load is high");
    }
  });
};

export { weakMap, queryAPI };
