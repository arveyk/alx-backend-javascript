export default function createReportObject(employeesList) {
  obj = {
    allEmployees: {
	    deparmentName: []};
    getNumberofDepartments() {
      for (let dep of departments){
      count += 1;
      return count;
      }
    }
  for (let department of employeesList)
	  if (!obj.allEmployees.includes(department)) {
	  obj.allEmployees.departmentName.push(department)}
  };
}
