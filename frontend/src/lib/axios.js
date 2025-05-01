import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.MODE === "development1111"
      ? "http://localt:4000/api"
      : `${import.meta.env.SERVER_URL}/api`,
});

export default api;
