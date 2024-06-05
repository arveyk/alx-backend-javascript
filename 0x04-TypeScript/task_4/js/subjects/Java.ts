namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Teacher{
    getRequirements() {
      return 'Here is the list of requirements for Java';
    }
    getAvailableTeacher() {
      return `Availabe Teacher: ${this.firstName}`
    }
  }
}
