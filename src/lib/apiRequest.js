import axios from "axios";

const apiRequest = axios.create({
  // baseURL: "http://localhost:8800/api",
  baseURL: "https://pm-real-estate-backend.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
