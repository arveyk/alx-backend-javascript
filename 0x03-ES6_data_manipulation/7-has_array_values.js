export default function hasValueFromArray(set, array) {
  for (const member in array) {
    if (!set.has(member) {
      return false;
    }
  return true;
}
