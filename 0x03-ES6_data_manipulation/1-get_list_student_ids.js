export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    const ret = [];
    array.map((value) => ret.push(value));
    return ret;
  }
  return [];
}
