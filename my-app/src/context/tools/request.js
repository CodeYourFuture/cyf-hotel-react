import axios from "axios";

import { BASE_URL } from "./constant";
import { getTokens } from "./utils";

const request = axios.create({
  baseURL: BASE_URL
});

request.interceptors.request.use(
  function(config) {
    const token = getTokens();
    if (token) {
      config.headers.authorization = `Bearer ${token}`; //Interceptors are a great way to add headers to all requests in your application.
    }

    // console.log(config);
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function(response) {
    // console.log(response);
    response.data.name = "Rebwar Azizi";
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default request;

// Recursive Function in JavaScript (Factorial)
// if you have object nested other object best way use Recursive Function

// if have object in backend and the name is snake_case how use interceptors to chane a name to comeCase in frontend
//and use it in frontend without change name in backend ? Recursive Function is best way to do it in interceptors  response and request  in axios  for example:  if you have object nested other object best way use Recursive Function
