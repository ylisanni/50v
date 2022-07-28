import axios from "axios";

const apiUrl =
  process.env.REACT_APP_API_URL || "http://localhost:3000/api/participants/";
export default axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  responseType: "json",
  headers: { "Content-Type": "application/json" },
});
