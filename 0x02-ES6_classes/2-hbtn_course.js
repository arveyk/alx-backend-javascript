export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(nameStr) {
    if (typeof (nameStr) !== 'string') {
      throw new Error('TypeError: name must be a string');
    }
    this._name = String(nameStr);
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (Number.isNaN(length)) {
      throw new Error('TypeError: Length must be a string');
    }
    this._length = Number(length);
  }

  get students() {
    return this._students;
  }

  set students(studentsN) {
    if (Array.isArray(studentsN)) {
      for (let element = 0; element < studentsN.length; element += 1) {
        const type = typeof studentsN[element];
        if (typeof type !== 'string') {
          throw new TypeError('Student must be an array of string');
        }
      }
      this._students = Array(studentsN);
    } else {
      throw new TypeError('Student must be an Array');
    }
  }
}
