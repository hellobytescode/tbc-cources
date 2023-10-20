import axios from "axios";

import { BACKEND_API } from "./constants";
import { ELocalStorageKeys } from "../common/enums";

const axiosInstance = axios.create({
  baseURL: BACKEND_API,
});

// Where you would set stuff like your 'Authorization' header, etc ...

if (localStorage.getItem(ELocalStorageKeys.ACCESS_TOKEN)) {
  const accessToken = localStorage.getItem(ELocalStorageKeys.ACCESS_TOKEN);
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem(ELocalStorageKeys.ACCESS_TOKEN);
    }
    return Promise.resolve(error.response);
  }
);

export default axiosInstance;
