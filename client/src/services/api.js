import axios from "axios";

// Centralized axios instance for talking to our backend API.
// In dev, CRA's "proxy" field in package.json forwards "/api" to the
// Express server. In production the API is served from the same origin.
const api = axios.create({
  baseURL: "/api",
});

// Attach the JWT (if any) to every outgoing request.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
