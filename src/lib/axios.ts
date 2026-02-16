import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const api = axios.create({
  baseURL,
});

// Interceptors
api.interceptors.request.use((config) => {
  const localStorage = window.localStorage;
  const token = localStorage.getItem("@park_tech:token");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});
