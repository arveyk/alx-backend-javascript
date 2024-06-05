namespace Subject {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React implements Teacher{
    experienceTeachingReact: number;
    
    getRequirements() {
      return 'Here is the List of requirements for React';
    }
    getAvailableTeacher() {
      if (this.experienceTeachingReact === 0) {
	      return 'No available teacher';
      }
      else {
        return `Available Teacher: ${this.firstName}`;
      }
    }
  }
