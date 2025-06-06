import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_SERVER_BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use(({ data }) => data);
