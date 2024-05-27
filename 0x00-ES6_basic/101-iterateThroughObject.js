export default function iterateThroughObject (reportWithIterator) {
  const employees = [];
  for (const member of reportWithIterator) {
    for (const dep of member) {
      for (const emp of dep) {
        const str = emp + ' | ';
        employees.push(str);
      }
    }
  }
}
