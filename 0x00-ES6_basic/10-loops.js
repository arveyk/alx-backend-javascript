export default function appendToEachArrayValue(array, appendString) {
  const arr = []
  let count = 0
  for (const idx of array) {
    arr.push(`${appendString}${idx}`);
  }
  array = arr;
  return array;
}
