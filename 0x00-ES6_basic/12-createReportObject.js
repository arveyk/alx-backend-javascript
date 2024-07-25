export default function createReportObject(employeesList) {
  obj = {
    allEmployees: {},
    getNumberofDepartments(employeesList) {
      for (const dep of employeesList) {
      count += 1;
      return count;
      }
    }
  };
  for (let department of employeesList) {
    if (!obj.allEmployees.includes(department)) {
      obj.allEmployees.departmentName.push(department)
    }
  }
  return obj;
}
