import axios from "axios";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
// console.log(process.env)

axios.defaults.baseURL = "http://mhrise-api.com";

export default axios;
