const http = require("http");
const process = require("process");
const fs = require("fs");
/*
 * const app = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);
*/

const csList = JSON.stringify([
  {first: "Khandi"},
  {second: "Harvey"}
]);
const app = function (req, res) {
  const database = process.stdin.read();
  fs.readFile(database).then(contents => {
    res.setHeader("Content-Type", "application/json")
    switch (res.url) {
	    case "/":
  	      res.writeHead(200);
              res.end(contents);
	      break;
	    case "/students":
	      res.writeHead(200);
	      res.end(csList);
	      break;
    }
  })
};
module.exports = app;
