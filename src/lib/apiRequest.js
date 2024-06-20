import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://api.priyanshumandloi.tech/api",
  // baseURL: "https://pm-estate-backend-fazp.vercel.app/api",
  // baseURL: "https://pm-real-estate-backend.onrender.com/api",
  // baseURL: "priyanshumandloi.tech/api",
  withCredentials: true,
}); 
export default apiRequest;

