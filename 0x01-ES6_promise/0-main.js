import getResponseFromAPI from "./0-promise.js";

const respose = getResponseFromAPI();
console.log(response instanceof Promise);
