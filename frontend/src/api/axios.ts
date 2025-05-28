import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000", // Adresse de ton backend NestJS
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepteur pour ajouter le token JWT dans chaque requête si présent
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
