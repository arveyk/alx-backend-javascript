export default function appendToEachArrayValue(array, appendString) {
  for (const idx.aaa of array) {
    const value = array[idx];
    array[idx] = appendString + value;
  }
  return array;
}
