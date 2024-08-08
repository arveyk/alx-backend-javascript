import { uploadPhoto, createUser } from './utils.js';


function handleProfileSignup() {
  let firstName;
  let lastName;
  let body;
  const photot = uploadPhoto();
   .then((res) => {
      body = res['body'];
    }).catch((error) => {
      console.log('Signup system offline'});
  createUser()
    .then((res) => {
      fistName = res['firstName'];
      lastName = res['lastName'];
    }).catch((error) => {
      console.log('Signup system offline'});
    });
  console.log(`${body} ${fistName} ${lastName}`);
  return new Promise((resolve, reject) => {
    resolve(`${body} ${fistName} ${lastName}`);
    reject(new Error('Signup system offline'));
  }
}
