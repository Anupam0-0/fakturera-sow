import axios from "axios";

console.log("Environment mode:", import.meta.env.MODE);

let api;

try {
  api = axios.create({
    baseURL: import.meta.env.MODE !== "development"
      ? "http://localhost:4000/api"
      : "https://fakturera-sow-1.onrender.com/api"
      // : `${import.meta.env.SERVER_URL}/api`,
  });
  console.log("Axios instance created successfully.");
} catch (error) {
  console.error("Error creating Axios instance:", error);
}

export default api;
