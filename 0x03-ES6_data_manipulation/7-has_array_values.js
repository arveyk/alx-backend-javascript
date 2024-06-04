export default function hasValueFromArray(set, array) {
  return array.every((value) => set.has(value));
}
