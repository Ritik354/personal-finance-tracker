import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api", // adjust if backend is hosted elsewhere
});

export default API;
