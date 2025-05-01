import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { config } from "dotenv";
config();

// console.log("VITE_BASE_PATH:", import.meta.env.VITE_BASE_PATH); // Debugging log

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base: import.meta.env.VITE_BASE_PATH || "/fakturera-sow",
});

