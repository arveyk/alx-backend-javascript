import { uploadPhoto, createUser } from './utils.js';


function handleProfileSignup() {
  let firstName;
  let lastName;
  let body;
  uploadPhoto()
    .then((res) => {
      body = res['body'];
    }).catch((error) => {
      return new Error(error);
    });
  createUser()
    .then((res) => {
      fistName = res['firstName'];
      lastName = res['lastName'];
    }).catch((error) => {
      return new Error(error);
    });
  console.log(`${body} ${fistName} ${lastName}`);
}
