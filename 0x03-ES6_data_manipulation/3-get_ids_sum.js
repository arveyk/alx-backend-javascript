export default function(listStuds) {
  return listStuds.reduce((sumVal, listStuds) => sumVal + listStuds.id, 0);
}
