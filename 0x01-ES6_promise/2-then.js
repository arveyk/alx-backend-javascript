exports.handleResponseFromAPI = function(promise) {
  promise.then(function(result) {
    promise.resolve(result);
    console.log('Got a response from the API');
  }).catch(Error());
};
