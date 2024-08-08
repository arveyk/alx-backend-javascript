import { uploadPhoto, createUser } from './utils.js';


function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
   .then((photoRes, userResp) => {
     const { firstName, lastName } = userResp;
     const { body } = photoRes;
      console.log(`${body} ${fistName} ${lastName}`);
    }).catch((error) => {
      console.log('Signup system offline'});
    });
  }
}
