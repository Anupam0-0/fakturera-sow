import axios from "axios";

let api;

try {
  api = axios.create({
    baseURL: "https://fakturera-sow-1.onrender.com/api", //since i fetching from this url, in prod have to use this in dotenv file
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
