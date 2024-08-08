function handleResponseFromAPI (promise) {
  promise.then(function() {
    console.log('Got a response from the API');
  }).catch((error) => {
    console.error('Error', error)
  });
}
module.exports = handleResponseFromAPI;
