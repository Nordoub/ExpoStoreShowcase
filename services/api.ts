import { API_BASE_URL, APP_VERSION } from "@/constants/Config";
import { showErrorToast } from "@/utils/show-toast";
import axios from "axios";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    console.log(config);
    console.log("123");
    return config;
  },
  function (error) {
    // Do something with request error
    showErrorToast("Failed to login. Please try again.");
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    showErrorToast("Failed to login. Please try again.");
    return Promise.reject(error);
  }
);

export default api;
