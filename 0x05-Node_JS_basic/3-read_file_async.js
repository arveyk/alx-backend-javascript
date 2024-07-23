const fs = require('fs/promises');

async function countStudents(path) {
  let data = ""
  try {
     data = await fs.readFile(path, { encoding: 'utf-8' });
  } catch (err) {
    throw new Error("Cannot load the database");
  }
  const rows = data.split("\n");

  let count = 0;
  const csList = [];
  const sweList = [];

  rows.forEach((row) => {
    if (row.length === 0) {
       return;
    }
    let count += 1;
    let columns = row.split(',');
    if (columns[3] === "CS") {
      csList.push(columns[0]);
    }
    if (columns[3] === "SWE") {
      sweList.push(columns[0]);
    }
  });
  console.log("Number of students:", count - 1)
  console.log(`Number of students in CS: ${csList.length}. List: ${csList.join(", ")}`);
  console.log("Number of students in SWE: " +
	  `${sweList.length}. List: ` + `${sweList.join(", ")}`);
};

module.exports = countStudents;
