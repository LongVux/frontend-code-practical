import axios from "axios";

// config request
const axiosInstance = axios.create({
  // backend url config
  baseURL: `http://127.0.0.1:3000`,
});

// setup interceptor to handle error
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);

    return error;
  }
);

export const getUsers = () => {
  return axiosInstance.get(`/api/users`);
};

export const getUserById = (userId: number) => {
  return axiosInstance.get(`/api/users/${userId}`);
};

export const getProfileImageByUrl = (url: string) => {
  return axiosInstance.get(url, {
    responseType: "blob",
  });
};
