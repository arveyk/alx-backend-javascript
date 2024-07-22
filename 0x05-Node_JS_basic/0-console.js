function displayMessage(msg) {
  msg = msg + '\n'
  process.stdout.write(msg);
}

module.exports = displayMessage;
