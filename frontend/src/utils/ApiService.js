import axios from "axios";
import { server } from "./ApiRoutes";

const api = axios.create({ baseURL: server, withCredentials: true });

api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export { api };
