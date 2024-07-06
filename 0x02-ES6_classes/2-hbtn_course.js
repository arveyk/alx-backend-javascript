export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = String(name);
    this._length = Number(length);
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
    if (Number.isNaN(length)) {
      throw new TypeError('Length must be a string');
    }
    this._length = Number(length);
  }

  get students() {
    return this._students;
  }

  set students(studentsN) {
    if (Array.isArray(studentsN)) {
	    for (const element in studentsN) {
	      let type = typeof(element)
	      if (typeof type !== 'string') {
	        throw new TypeError('Student must be a string');
	      }
	    }
      this._students = Array(studentsN);
    }
    else {
      throw new TypeError('Student must be a string');
    }
  }
}
