function getFullResponseFromAPI(success) {
  let obj = {
        status: 200,
        body: 'Success',
      };
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve(String(obj));
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}

module.exports.getFullResponseFromAPI = getFullResponseFromAPI;
