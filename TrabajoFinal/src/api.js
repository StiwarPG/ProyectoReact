import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api/productos", // Reemplaza con tu API
});

export default api;
