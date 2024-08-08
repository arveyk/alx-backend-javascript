function signUpuser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    resolve({ firstName, lastName });
    reject(new Error());
  });
}
module.exports = signUpuser;
