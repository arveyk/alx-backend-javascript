export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = String(name);
    this._length = Number(length};
    this._student = Array(students);
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
