export default function cleanSet(set, startString) {
  const strArray = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      strArray.push(item[startString.length - 1]);
    }
  }
  return strArray.join('-');
}
