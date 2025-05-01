import axios from "axios";

console.log("Environment mode:", import.meta.env.MODE);

let api;

try {
  api = axios.create({
    baseURL: "https://fakturera-sow-1.onrender.com/api",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  });
  console.log("Axios instance created successfully.");
} catch (error) {
  console.error("Error creating Axios instance:", error);
}

export default api;
