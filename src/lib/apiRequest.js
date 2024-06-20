import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:8800/api",
  // baseURL: "https://pm-estate-backend-fazp.vercel.app/api",
  // baseURL: "https://pm-real-estate-backend.onrender.com/api",
  // baseURL: "priyanshumandloi.tech/api",
  withCredentials: true,
}); 
export default apiRequest;




// baseURL: "https://pm-estate-backend.onrender.com/api",