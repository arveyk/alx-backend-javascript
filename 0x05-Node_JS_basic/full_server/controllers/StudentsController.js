class studentsController {
  static getAllStudents (requests, response) {
    response.status(200);
    response.send("This is the list of our students");
  }
  static getAllStudentsByMajor (requests, response) {
    response.status(200);
    response.send("This is the list of our students");
  }
