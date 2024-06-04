export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    return array.map((array) => array.id);
  }
  return [];
}
