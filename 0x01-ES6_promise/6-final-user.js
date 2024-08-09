import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const promise0 = signUpUser(firstName, lastName);
  const promise1 = uploadPhoto(fileName);
  return Promise.allSettled([promise0, promise1]).then((results) => results);
}
module.exports = handleProfileSignup;
