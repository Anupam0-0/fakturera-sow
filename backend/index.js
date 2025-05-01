require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const { Translator } = require("./controllers/language.controller");
const { getAllProducts, updateProductById } = require("./controllers/product.controller");

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173", // Use environment variable for flexibility
  })
);

// API routes
app.get("/api/:lang/terms", Translator); // Fetch all translations for a given language
app.get("/api/products", getAllProducts); // Fetch all products
app.put("/api/products/:id", updateProductById); // Update a product by ID

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
