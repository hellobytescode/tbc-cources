import jwtDecode from "jwt-decode";
import axiosInstance from "./axiosInstance";

const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode<{ exp: number }>(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // This function below will handle when token is expired
    const { exp } = jwtDecode<{ exp: number }>(accessToken);
    // handleTokenExpired(exp);
  } else {
    localStorage.removeItem("accessToken");
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession };
