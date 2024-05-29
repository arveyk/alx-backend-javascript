function getFullResponseFromAPI(success) {
  const obj = {
    status: 200,
    body: 'Success',
  };
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve(obj);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}

module.exports.getFullResponseFromAPI = getFullResponseFromAPI;
