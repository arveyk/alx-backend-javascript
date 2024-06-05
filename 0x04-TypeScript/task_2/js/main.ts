interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }
  getCoffeBreak() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return "Cannot have a break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}

function createEmployee(salary: string | number) {
  if (typeof salary === 'number') {
    if (salary < 500) {
      return new Teacher;
    }
  }
  return new Director;
}

function isDirector(employee: Director | Teacher) {
  if (employee instanceof Director) {
    return true;
  }
  return false;
}
function executeWork(employee: Director | Teacher) {
  if (employee instanceof Director) {
    employee.workDirectorTasks();
  }
  else {
    employee.workTeacherTasks();
  }
}

type Subject = 'Math' | 'History';

function teachClass(todayClass: Subject) {
  return `Teaching ${todayClass}`;
}
