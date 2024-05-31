export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._student = students;
  }

  get name() {
    return this._name;
  }

  set name(nameStr) {
    this._name = String(nameStr);
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = Number(length);
  }

  get students() {
    return this._students;
  }

  set students(studentsN) {
    if (typeof(studentN) === [1, 2]) {
      this._students = Array(studentN);
    }
  }
}
