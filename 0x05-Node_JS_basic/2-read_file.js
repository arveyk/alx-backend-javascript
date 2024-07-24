const fs = require('fs');

function countStudents(path) {
  let data = '';
  try {
    data = fs.readFileSync(path).toLocaleString();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const rows = data.split('\n');

  let count = 0;
  const csList = [];
  const sweList = [];

  rows.forEach((row) => {
    if (row.length === 0) {
      return;
    }
    count += 1;
    const columns = row.split(',');
    if (columns[3] === "CS") {
      csList.push(columns[0]);
    }
    if (columns[3] === 'SWE') {
      sweList.push(columns[0]);
    }
  });
  console.log(`Number of students: ${count - 1}`);
  console.log(`Number of students in CS: ${csList.length}. List: ${csList.join(', ')}`);
  console.log('Number of students in SWE: '
    + `${sweList.length}. List: ${sweList.join(', ')}`);
}

module.exports = countStudents;
