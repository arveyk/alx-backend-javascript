import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let res1 = await uploadPhoto();
  let res2 = await createUser();
  try {
    res1 = await uploadPhoto();
    res2 = await createUser();
  } catch (error) {
    console.log(error);
    return {
      photo: null,
      user: null,
    };
  }
  if (res1 === null || res2 === null) {
    const failRes = {
      photo: null,
      user: null,
    };
    return failRes;
  }
  return {
    photo: res1,
    user: res2,
  };
}
