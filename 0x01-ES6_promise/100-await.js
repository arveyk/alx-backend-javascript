import { createUser, uploadPhoto } from './utils.js';

export default async function asyncUploadUser() {
  const res1 = await uploadPhoto();
  const res2 = await createUser();
  if (res1 === null || res2 === null) {
    const failRes = {
      photo: null,
      user: null,
    };
    return failRes;
  }
  else {
    return {
      photo: res1,
      user: res2,
    };
  }
}
