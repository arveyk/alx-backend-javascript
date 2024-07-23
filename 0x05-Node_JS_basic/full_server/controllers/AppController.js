class Appcontroller {
  static getHomepage (request, response) {
    response.status(200);
    response.send("Hello Holberton School!");
  }
}
