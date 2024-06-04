export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter((listStudents) =>
    listStudents.location === city);
}
