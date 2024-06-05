interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: "Gilbert",
  lastName: "Simons",
  fullTimeEmployee: false,
  yearsOfExperience: 3,
  location: "Mombasa",
};
const teacher2: Teacher = {
  firstName: "Carl",
  lastName: "Opiyo",
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  location: "Bungoma",
  constract: true,
};

function printTeacher(firstName: string, lastName: string) {
  return `${fistsName[0]}${lastName}`
}
function printTeacherFunction(teacher: Teacher) {
  return `${teacher.firstName[0]}${teacher.lastName}`
}

interface classStudent {
  firstName: string;
  lastName: string;
  workOnHomework: () => string;
  displayName: () => string;
}
class StudentClass implements classStudent {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return "Currently working";
  }
  displayName() {
    return this.firstName;
  }  
}
