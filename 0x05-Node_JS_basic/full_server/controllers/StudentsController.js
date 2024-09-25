const readDatabase = require('../utils');


class studentsController {
  static getAllStudents (requests, response) {
    const studentList = readDatabase();
    response.status(200).send("This is the list of our students": studentList);
  }
  static getAllStudentsByMajor (requests, response) {
    const { SWE, CS } = request.params;
    response.status(200).send("This is the list of our students");
  }
}

module.exports = studentsController;
