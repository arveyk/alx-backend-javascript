export default function updateStudentGradeByCity(listStudents, city, newGrade) {
  return listStudents.filter((listStudents) => listStudents.location === city)
    .map((listStudents) => {
      if (newGrade.studentId === listStudents.id) {
        listStudents.grade = newGrade.grade;
      }
      listStudents.grade = 'N/A';
      return listStudents;
    });
}
