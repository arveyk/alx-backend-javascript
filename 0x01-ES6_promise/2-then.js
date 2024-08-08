function handleResponseFromAPI(promise) {
  promise.then(function() {
    console.log('Got a response from the API');
  }).catch((error) => {
    return new Error(error);
  });
}
module.exports = handleResponseFromAPI;
