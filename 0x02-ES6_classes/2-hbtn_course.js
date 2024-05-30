export default class HolbertonCourse {
  constructor(name, length, students){
    this._name = name;
    this._length = length;
    this._student = student;
  }
  get name() {
    return this._name;
  }
  set name(nameStr) {
    if (typeof(nameStr) === String) {
      this._name = nameStr;
    }
  }
  get length() {
    return this._length;
  }
  set length(length) {
    if (!isNaN(length)) {
      this._length = length
    }
  }
  get students() {
    return this._students
  }
  set students(studentsN) {
    if (typeof(studentN) === Array) {
      this._students = studentN;
    }
  }
}
